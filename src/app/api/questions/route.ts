import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getCurrentUser } from "@/lib/auth";

export const dynamic = "force-dynamic";

// GET /api/questions?subject=unit-1&section=1.4&difficulty=...&limit=20
// Paid students only. Returns questions (with answers — this is a practice app,
// not a secure exam; see README "Hardening notes" if you ever need to hide
// answers server-side).
export async function GET(req: NextRequest) {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "Login required" }, { status: 401 });
  if (!user.isPaid) return NextResponse.json({ error: "Enrollment required" }, { status: 403 });

  const { searchParams } = new URL(req.url);
  const subject = searchParams.get("subject");
  if (!subject) return NextResponse.json({ error: "subject is required" }, { status: 400 });

  const section = searchParams.get("section");
  const difficulty = searchParams.get("difficulty");
  const limit = Math.min(Math.max(Number(searchParams.get("limit")) || 20, 1), 100);
  const shuffle = searchParams.get("shuffle") !== "0"; // section pages pass shuffle=0 for a stable list order

  const questions = await db.question.findMany({
    where: {
      subject,
      ...(section ? { section } : {}),
      ...(difficulty ? { difficulty } : {}),
    },
    select: {
      id: true, subject: true, section: true, title: true, image: true, difficulty: true,
      prompt: true, choices: true, correctIndex: true, correctText: true, explanation: true,
    },
    orderBy: { id: "asc" },
  });

  // Shuffle so repeated sets feel fresh (skipped when shuffle=0)
  if (shuffle) {
    for (let i = questions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [questions[i], questions[j]] = [questions[j], questions[i]];
    }
  }

  return NextResponse.json({ questions: questions.slice(0, limit), total: questions.length });
}
