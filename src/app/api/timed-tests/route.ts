import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getCurrentUser } from "@/lib/auth";
import { timedTestById, isTestReleased } from "@/lib/timedTests";

export const dynamic = "force-dynamic";

function sanitizeAnswers(input: unknown, keys: string[]): Record<string, string> {
  // Keep only the test's own question keys (e.g. "q1"…"q10", or "part1"…"part3").
  // This previously assumed every test used q-numbered keys, which silently
  // stripped all answers from part-based tests like Unit 1B.
  const keep = new Set(keys);
  const out: Record<string, string> = {};
  if (input && typeof input === "object") {
    for (const [k, v] of Object.entries(input as Record<string, unknown>)) {
      if (keep.has(k) && typeof v === "string") {
        out[k] = v.slice(0, 20000);
      }
    }
  }
  return out;
}

const MAX_DRAWING_CHARS = 1_200_000; // ~900 KB of base64 — a full handwriting pad exports well under this

function sanitizeDrawings(input: unknown, keys: string[]): Record<string, string | null> {
  // Handwriting pads, validated exactly like answers: only the test's own keys,
  // only image data URLs of a sane size. A null value means "pad cleared".
  // Each question/part also allows two extra work pages ("<key>_pg2", "<key>_pg3").
  const keep = new Set<string>();
  for (const k of keys) {
    keep.add(k);
    keep.add(`${k}_pg2`);
    keep.add(`${k}_pg3`);
  }
  const out: Record<string, string | null> = {};
  if (input && typeof input === "object") {
    for (const [k, v] of Object.entries(input as Record<string, unknown>)) {
      if (!keep.has(k)) continue;
      if (v === null) {
        out[k] = null;
      } else if (
        typeof v === "string" &&
        v.length <= MAX_DRAWING_CHARS &&
        (v.startsWith("data:image/jpeg;base64,") || v.startsWith("data:image/png;base64,"))
      ) {
        out[k] = v;
      }
    }
  }
  return out;
}

function mergeDrawings(
  stored: Record<string, string>,
  patch: Record<string, string | null>
): Record<string, string> {
  const out = { ...stored };
  for (const [k, v] of Object.entries(patch)) {
    if (v === null) delete out[k];
    else out[k] = v;
  }
  return out;
}

// Per-question activity timing: { "q1": { first: <ms from startedAt>, last: <ms from startedAt> }, ... }.
// first = first keystroke / first pad stroke / first tap on that question ("picked up the
// pencil"); last = last activity on it ("put the pencil down"). Offsets are clamped to the
// test window and first is never after last.
type QuestionTimes = Record<string, { first: number; last: number }>;

function sanitizeQuestionTimes(input: unknown, keys: string[], maxMs: number): QuestionTimes {
  const keep = new Set(keys);
  const out: QuestionTimes = {};
  if (input && typeof input === "object") {
    for (const [k, v] of Object.entries(input as Record<string, unknown>)) {
      if (!keep.has(k) || !v || typeof v !== "object") continue;
      const first = (v as Record<string, unknown>).first;
      const last = (v as Record<string, unknown>).last;
      if (typeof first !== "number" || typeof last !== "number") continue;
      if (!Number.isFinite(first) || !Number.isFinite(last)) continue;
      const f = Math.max(0, Math.min(maxMs, Math.floor(first)));
      const l = Math.max(0, Math.min(maxMs, Math.floor(last)));
      out[k] = { first: Math.min(f, l), last: Math.max(f, l) };
    }
  }
  return out;
}

function mergeQuestionTimes(stored: unknown, incoming: QuestionTimes): QuestionTimes {
  // Keep the earliest start and the latest stop per question across saves —
  // a reload resumes from the stored draft, so merges must never lose time.
  const out: QuestionTimes = {};
  const s = (stored ?? {}) as Record<string, unknown>;
  for (const [k, v] of Object.entries(s)) {
    if (v && typeof v === "object") {
      const first = (v as Record<string, unknown>).first;
      const last = (v as Record<string, unknown>).last;
      if (typeof first === "number" && typeof last === "number") out[k] = { first, last };
    }
  }
  for (const [k, v] of Object.entries(incoming)) {
    const prev = out[k];
    out[k] = prev
      ? { first: Math.min(prev.first, v.first), last: Math.max(prev.last, v.last) }
      : v;
  }
  return out;
}

async function finalizeIfExpired(row: { id: string; final: boolean; startedAt: Date; answers: unknown }, minutes: number, soft = false) {
  if (row.final) return false;
  if (soft) return false; // soft-timer drills never auto-finalize — the timer is a target only
  const deadline = row.startedAt.getTime() + minutes * 60 * 1000;
  if (Date.now() >= deadline) {
    const answers = row.answers as Record<string, string> | null;
    await db.timedSubmission.update({
      where: { id: row.id },
      data: {
        final: true,
        finishedAt: new Date(deadline),
        timeMs: minutes * 60 * 1000,
        answers: answers ?? {},
      },
    });
    return true;
  }
  return false;
}

// GET /api/timed-tests?testId=... → the student's submission (draft or final) or null.
export async function GET(req: NextRequest) {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "Login required" }, { status: 401 });
  if (!user.isPaid) return NextResponse.json({ error: "Enrollment required" }, { status: 403 });

  const testId = req.nextUrl.searchParams.get("testId") ?? "";
  const test = timedTestById(testId);
  if (!test) return NextResponse.json({ error: "Unknown test." }, { status: 404 });
  if (!isTestReleased(test)) return NextResponse.json({ error: "This test isn't open yet." }, { status: 403 });

  const row = await db.timedSubmission.findUnique({
    where: { testId_userId: { testId, userId: user.id } },
  });
  if (!row) return NextResponse.json({ submission: null });

  await finalizeIfExpired(row, test.minutes, test.softTimer);
  const fresh = await db.timedSubmission.findUnique({
    where: { testId_userId: { testId, userId: user.id } },
  });

  return NextResponse.json({
    submission: {
      answers: (fresh?.answers ?? {}) as Record<string, string>,
      drawings: (fresh?.drawings ?? {}) as Record<string, string>,
      questionTimes: (fresh?.questionTimes ?? {}) as QuestionTimes,
      final: fresh?.final ?? false,
      startedAt: fresh?.startedAt.toISOString(),
      finishedAt: fresh?.finishedAt?.toISOString() ?? null,
      timeMs: fresh?.timeMs ?? null,
    },
  });
}

// POST /api/timed-tests  { testId, answers, final } — auto-save drafts; final submits and locks.
export async function POST(req: NextRequest) {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "Login required" }, { status: 401 });
  if (!user.isPaid) return NextResponse.json({ error: "Enrollment required" }, { status: 403 });

  const body = await req.json().catch(() => null);
  const testId = typeof body?.testId === "string" ? body.testId : "";
  const test = timedTestById(testId);
  if (!test) return NextResponse.json({ error: "Unknown test." }, { status: 404 });
  if (!isTestReleased(test)) return NextResponse.json({ error: "This test isn't open yet." }, { status: 403 });

  const answers = sanitizeAnswers(body?.answers, test.questions.map((q) => q.key));
  const drawingPatch = sanitizeDrawings(body?.drawings, test.questions.map((q) => q.key));
  const maxMs = test.softTimer ? 24 * 60 * 60 * 1000 : test.minutes * 60 * 1000;
  const times = sanitizeQuestionTimes(body?.questionTimes, test.questions.map((q) => q.key), maxMs);
  const wantFinal = body?.final === true;

  const existing = await db.timedSubmission.findUnique({
    where: { testId_userId: { testId, userId: user.id } },
  });

  if (existing) {
    if (existing.final || (await finalizeIfExpired(existing, test.minutes, test.softTimer))) {
      return NextResponse.json({ error: "This test is already submitted and locked." }, { status: 409 });
    }
    const drawings = mergeDrawings(
      (existing.drawings ?? {}) as Record<string, string>,
      drawingPatch
    );
    if (wantFinal) {
      const now = Date.now();
      const deadline = existing.startedAt.getTime() + test.minutes * 60 * 1000;
      const end = test.softTimer ? now : Math.min(now, deadline);
      const updated = await db.timedSubmission.update({
        where: { id: existing.id },
        data: {
          answers,
          drawings,
          questionTimes: mergeQuestionTimes(existing.questionTimes, times),
          final: true,
          finishedAt: new Date(end),
          timeMs: Math.max(0, end - existing.startedAt.getTime()),
        },
      });
      return NextResponse.json({ ok: true, final: true, startedAt: updated.startedAt.toISOString() });
    }
    const updated = await db.timedSubmission.update({
      where: { id: existing.id },
      data: { answers, drawings, questionTimes: mergeQuestionTimes(existing.questionTimes, times) },
    });
    return NextResponse.json({ ok: true, final: false, startedAt: updated.startedAt.toISOString() });
  }

  // First save anchors the start time — the deadline runs from here even across reloads.
  const created = await db.timedSubmission.create({
    data: {
      testId,
      userId: user.id,
      answers,
      drawings: mergeDrawings({}, drawingPatch),
      questionTimes: times,
      final: wantFinal,
      finishedAt: wantFinal ? new Date() : null,
      timeMs: wantFinal ? 0 : null,
    },
  });
  return NextResponse.json({ ok: true, final: created.final, startedAt: created.startedAt.toISOString() });
}
