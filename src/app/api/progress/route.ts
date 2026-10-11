import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getCurrentUser } from "@/lib/auth";
import { UNITS, sectionsByUnit, sectionLabel } from "@/lib/site";
import { TIMED_TESTS } from "@/lib/timedTests";

export const dynamic = "force-dynamic";

// GET /api/progress — accuracy totals, per-unit, per-section (with question
// counts), and recent attempts. Paid students only.
export async function GET() {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "Login required" }, { status: 401 });
  if (!user.isPaid) return NextResponse.json({ error: "Enrollment required" }, { status: 403 });

  const attempts = await db.attempt.findMany({
    where: { userId: user.id },
    include: { question: { select: { subject: true, section: true, prompt: true } } },
    orderBy: { createdAt: "desc" },
    take: 500,
  });

  const total = attempts.length;
  const correct = attempts.filter((a) => a.correct).length;

  const bySubjectMap = new Map<string, { attempts: number; correct: number }>();
  const bySectionMap = new Map<string, { attempts: number; correct: number }>();

  for (const a of attempts) {
    const s = bySubjectMap.get(a.question.subject) ?? { attempts: 0, correct: 0 };
    s.attempts++; if (a.correct) s.correct++;
    bySubjectMap.set(a.question.subject, s);

    if (a.question.section) {
      const key = `${a.question.subject}|||${a.question.section}`;
      const d = bySectionMap.get(key) ?? { attempts: 0, correct: 0 };
      d.attempts++; if (a.correct) d.correct++;
      bySectionMap.set(key, d);
    }
  }

  // Question counts per section (drives the "N questions" labels on the hub).
  const counts = await db.question.groupBy({ by: ["subject", "section"], _count: true });
  const countMap = new Map<string, number>();
  for (const c of counts) {
    if (c.section) countMap.set(`${c.subject}|||${c.section}`, c._count);
  }

  const pct = (c: number, t: number) => (t ? Math.round((c / t) * 100) : 0);

  const sections = UNITS.flatMap((u) =>
    sectionsByUnit(u.id).map((sec) => {
      const key = `${u.id}|||${sec.id}`;
      const a = bySectionMap.get(key) ?? { attempts: 0, correct: 0 };
      return {
        subject: u.id,
        subjectName: u.name,
        subjectShort: u.short,
        section: sec.id,
        label: sectionLabel(u.id, sec.id),
        blurb: sec.blurb,
        questions: countMap.get(key) ?? 0,
        attempts: a.attempts,
        correct: a.correct,
        accuracy: a.attempts ? pct(a.correct, a.attempts) : null,
      };
    })
  );

  // Timed tests & drills: the student's submissions, newest first. Click-MCQ
  // drills get an auto score from the saved answer letters; free-response
  // tests report how many questions were answered (they are hand-graded).
  const subs = await db.timedSubmission.findMany({
    where: { userId: user.id },
    orderBy: { startedAt: "desc" },
    take: 20,
  });
  const LETTERS = "ABCDEFGH";
  const timed = subs.map((s) => {
    const test = TIMED_TESTS[s.testId];
    const answers = (s.answers ?? {}) as Record<string, string>;
    const drawings = (s.drawings ?? {}) as Record<string, string>;
    const totalQ = test?.questions.length ?? Object.keys(answers).length;
    const answered = test
      ? test.questions.filter((q) => answers[q.key]?.trim() || drawings[q.key] || drawings[`${q.key}_pg2`] || drawings[`${q.key}_pg3`]).length
      : Object.keys(answers).length;
    let score: { correct: number; total: number } | null = null;
    if (test?.mcq) {
      const correctCount = test.questions.filter(
        (q, i) => (answers[q.key] ?? "").trim().toUpperCase() === LETTERS[test.mcq![i].answer]
      ).length;
      score = { correct: correctCount, total: test.mcq.length };
    }
    return {
      testId: s.testId,
      title: test?.title ?? s.testId,
      final: s.final,
      startedAt: s.startedAt,
      finishedAt: s.finishedAt,
      timeMs: s.timeMs,
      answered,
      questionsTotal: totalQ,
      score,
    };
  });

  return NextResponse.json({
    totals: { attempts: total, correct, accuracy: pct(correct, total) },
    bySubject: UNITS.map((u) => {
      const s = bySubjectMap.get(u.id) ?? { attempts: 0, correct: 0 };
      return { subject: u.name, attempts: s.attempts, correct: s.correct, accuracy: pct(s.correct, s.attempts) };
    }),
    sections,
    recent: attempts.slice(0, 10).map((a) => ({
      id: a.id, correct: a.correct, createdAt: a.createdAt,
      question: {
        subject: UNITS.find((u) => u.id === a.question.subject)?.name ?? a.question.subject,
        section: a.question.section ? sectionLabel(a.question.subject, a.question.section) : null,
        prompt: a.question.prompt,
      },
    })),
    timed,
  });
}
