import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { isAdminCookieValid } from "@/lib/auth";
import { UNITS } from "@/lib/site";

export const dynamic = "force-dynamic";

function requireAdmin(req: NextRequest) {
  return isAdminCookieValid(req.headers.get("cookie"));
}

// GET /api/admin/students/[id]/report — per-student practice report for the teacher:
// per-unit accuracy, overall stats, and the most recent attempts.
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  if (!requireAdmin(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const student = await db.user
    .findUnique({
      where: { id: params.id },
      select: { id: true, name: true, email: true, isPaid: true, createdAt: true },
    })
    .catch(() => null);
  if (!student) return NextResponse.json({ error: "Student not found." }, { status: 404 });

  const attempts = await db.attempt.findMany({
    where: { userId: params.id },
    orderBy: { createdAt: "desc" },
    include: {
      question: { select: { subject: true, domain: true, prompt: true } },
    },
  });

  const byUnit: Record<string, { attempts: number; correct: number; lastAt: string | null }> = {};
  for (const u of UNITS) byUnit[u.id] = { attempts: 0, correct: 0, lastAt: null };
  for (const a of attempts) {
    const key = a.question.subject;
    if (!byUnit[key]) byUnit[key] = { attempts: 0, correct: 0, lastAt: null };
    byUnit[key].attempts += 1;
    if (a.correct) byUnit[key].correct += 1;
    if (!byUnit[key].lastAt) byUnit[key].lastAt = a.createdAt.toISOString();
  }

  const units = UNITS.map((u) => {
    const s = byUnit[u.id];
    return {
      id: u.id,
      name: u.name,
      short: u.short,
      attempts: s.attempts,
      correct: s.correct,
      accuracy: s.attempts > 0 ? Math.round((s.correct / s.attempts) * 100) : null,
      lastAt: s.lastAt,
    };
  });

  const totalAttempts = attempts.length;
  const totalCorrect = attempts.filter((a) => a.correct).length;

  const recent = attempts.slice(0, 30).map((a) => {
    const unit = UNITS.find((u) => u.id === a.question.subject);
    return {
      id: a.id,
      unitShort: unit?.short ?? a.question.subject,
      domain: a.question.domain,
      prompt: a.question.prompt,
      correct: a.correct,
      timeMs: a.timeMs,
      createdAt: a.createdAt.toISOString(),
    };
  });

  return NextResponse.json({
    student,
    summary: {
      totalAttempts,
      totalCorrect,
      accuracy: totalAttempts > 0 ? Math.round((totalCorrect / totalAttempts) * 100) : null,
      lastAt: attempts[0]?.createdAt.toISOString() ?? null,
    },
    units,
    recent,
  });
}
