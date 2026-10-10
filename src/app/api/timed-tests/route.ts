import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getCurrentUser } from "@/lib/auth";
import { timedTestById } from "@/lib/timedTests";

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
  const keep = new Set(keys);
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

async function finalizeIfExpired(row: { id: string; final: boolean; startedAt: Date; answers: unknown }, minutes: number) {
  if (row.final) return false;
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

  const row = await db.timedSubmission.findUnique({
    where: { testId_userId: { testId, userId: user.id } },
  });
  if (!row) return NextResponse.json({ submission: null });

  await finalizeIfExpired(row, test.minutes);
  const fresh = await db.timedSubmission.findUnique({
    where: { testId_userId: { testId, userId: user.id } },
  });

  return NextResponse.json({
    submission: {
      answers: (fresh?.answers ?? {}) as Record<string, string>,
      drawings: (fresh?.drawings ?? {}) as Record<string, string>,
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

  const answers = sanitizeAnswers(body?.answers, test.questions.map((q) => q.key));
  const drawingPatch = sanitizeDrawings(body?.drawings, test.questions.map((q) => q.key));
  const wantFinal = body?.final === true;

  const existing = await db.timedSubmission.findUnique({
    where: { testId_userId: { testId, userId: user.id } },
  });

  if (existing) {
    if (existing.final || (await finalizeIfExpired(existing, test.minutes))) {
      return NextResponse.json({ error: "This test is already submitted and locked." }, { status: 409 });
    }
    const drawings = mergeDrawings(
      (existing.drawings ?? {}) as Record<string, string>,
      drawingPatch
    );
    if (wantFinal) {
      const now = Date.now();
      const deadline = existing.startedAt.getTime() + test.minutes * 60 * 1000;
      const end = Math.min(now, deadline);
      const updated = await db.timedSubmission.update({
        where: { id: existing.id },
        data: {
          answers,
          drawings,
          final: true,
          finishedAt: new Date(end),
          timeMs: Math.max(0, end - existing.startedAt.getTime()),
        },
      });
      return NextResponse.json({ ok: true, final: true, startedAt: updated.startedAt.toISOString() });
    }
    const updated = await db.timedSubmission.update({
      where: { id: existing.id },
      data: { answers, drawings },
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
      final: wantFinal,
      finishedAt: wantFinal ? new Date() : null,
      timeMs: wantFinal ? 0 : null,
    },
  });
  return NextResponse.json({ ok: true, final: created.final, startedAt: created.startedAt.toISOString() });
}
