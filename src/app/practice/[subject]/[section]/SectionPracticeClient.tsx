"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import MathText from "@/components/MathText";

type Question = {
  id: string;
  subject: string;
  section: string | null;
  title: string | null;
  image: string | null;
  difficulty: string;
  prompt: string;
  choices: string[] | null;
  correctIndex: number | null;
  correctText: string;
  explanation: string;
};

const DIFF_LABEL: Record<string, string> = {
  easy: "Easy",
  medium: "Moderate",
  hard: "Difficult",
};

function diffColor(d: string) {
  if (d === "easy") return "text-green-700";
  if (d === "hard") return "text-red-700";
  return "text-amber-700";
}

export default function SectionPracticeClient({
  subjectId,
  sectionId,
  sectionTitle,
}: {
  subjectId: string;
  sectionId: string;
  sectionTitle: string;
}) {
  const [questions, setQuestions] = useState<Question[] | null>(null);
  const [sel, setSel] = useState(0);
  const [answers, setAnswers] = useState<Record<string, { selected: number; correct: boolean }>>({});
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`/api/questions?subject=${subjectId}&section=${sectionId}&limit=100&shuffle=0`)
      .then((r) => {
        if (!r.ok) throw new Error("load failed");
        return r.json();
      })
      .then((d) => setQuestions(d.questions ?? []))
      .catch(() => setError("Could not load questions. Please refresh and try again."));
  }, [subjectId, sectionId]);

  const q = questions?.[sel] ?? null;
  const a = q ? answers[q.id] : null;
  const isMcq = !!q?.choices && q.correctIndex !== null;
  const answeredCount = questions ? questions.filter((x) => answers[x.id]).length : 0;

  function answer(choiceIdx: number) {
    if (!q || a || !isMcq) return;
    const correct = choiceIdx === q.correctIndex;
    setAnswers((prev) => ({ ...prev, [q.id]: { selected: choiceIdx, correct } }));
    // Record the attempt so the dashboard stays accurate (best effort).
    fetch("/api/attempts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ attempts: [{ id: q.id, correct, timeMs: 0 }] }),
    }).catch(() => {});
  }

  function go(i: number) {
    if (!questions || i < 0 || i >= questions.length) return;
    setSel(i);
  }

  return (
    <div className="-mx-4 -mt-8">
      {/* Teal section banner */}
      <div className="bg-gradient-to-r from-teal-700 via-cyan-700 to-teal-700 px-4 py-5 sm:px-6">
        <div className="mx-auto flex max-w-6xl items-center gap-4">
          <Link
            href="/practice"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-2xl text-white transition hover:bg-white/15"
            aria-label="Back to practice"
          >
            ←
          </Link>
          <h1 className="text-xl font-extrabold tracking-tight text-white sm:text-2xl">
            {sectionId} | {sectionTitle}
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
        {error && <p className="rounded-xl bg-red-50 p-4 text-sm text-red-700">{error}</p>}
        {!questions && !error && <p className="py-10 text-center text-slate-500">Loading questions…</p>}

        {questions && questions.length === 0 && (
          <div className="card text-center">
            <p className="font-bold">No questions here yet.</p>
            <p className="mt-1 text-sm text-slate-600">Check back soon — new questions are added regularly.</p>
            <Link href="/practice" className="btn-secondary mt-4 inline-block">Back to practice</Link>
          </div>
        )}

        {questions && questions.length > 0 && (
          <div className="grid gap-6 lg:grid-cols-[340px_1fr]">
            {/* Left: question list */}
            <aside className="lg:sticky lg:top-20 lg:self-start">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
                <div className="border-b border-slate-200 px-5 py-4">
                  <p className="text-lg font-extrabold text-slate-900">
                    {questions.length} question{questions.length === 1 ? "" : "s"}
                  </p>
                  <p className="mt-0.5 text-xs font-medium text-slate-500">
                    {answeredCount} of {questions.length} answered
                  </p>
                </div>
                <ol className="max-h-[60vh] divide-y divide-slate-100 overflow-y-auto">
                  {questions.map((qq, i) => {
                    const ans = answers[qq.id];
                    const active = i === sel;
                    return (
                      <li key={qq.id}>
                        <button
                          onClick={() => go(i)}
                          className={`flex w-full items-start justify-between gap-3 px-5 py-4 text-left transition ${
                            active ? "bg-sky-50" : "hover:bg-slate-50"
                          }`}
                        >
                          <span className="min-w-0">
                            <span className={`block truncate text-[15px] font-semibold ${active ? "text-sky-800" : "text-slate-800"}`}>
                              {ans ? (ans.correct ? "✅ " : "❌ ") : ""}
                              {qq.title ?? `Question ${i + 1}`}
                            </span>
                            <span className={`mt-0.5 block text-xs font-medium ${diffColor(qq.difficulty)}`}>
                              {DIFF_LABEL[qq.difficulty] ?? qq.difficulty}
                            </span>
                          </span>
                          {active && <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-sky-500" aria-hidden />}
                        </button>
                      </li>
                    );
                  })}
                </ol>
              </div>
            </aside>

            {/* Right: selected question */}
            <div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <p className="text-sm font-bold uppercase tracking-wide text-slate-400">
                      Question {sel + 1} of {questions.length}
                    </p>
                    <h2 className="mt-1 text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl">
                      {q?.title ?? `Question ${sel + 1}`}
                      <span className={`ml-3 align-middle text-sm font-semibold ${diffColor(q?.difficulty ?? "")}`}>
                        ({DIFF_LABEL[q?.difficulty ?? ""] ?? ""})
                      </span>
                    </h2>
                  </div>
                  <div className="flex shrink-0 gap-1">
                    <button
                      onClick={() => go(sel - 1)}
                      disabled={sel === 0}
                      className="flex h-9 w-9 items-center justify-center rounded-full text-xl text-slate-600 transition hover:bg-slate-100 disabled:opacity-30"
                      aria-label="Previous question"
                    >
                      ‹
                    </button>
                    <button
                      onClick={() => go(sel + 1)}
                      disabled={sel === questions.length - 1}
                      className="flex h-9 w-9 items-center justify-center rounded-full text-xl text-slate-600 transition hover:bg-slate-100 disabled:opacity-30"
                      aria-label="Next question"
                    >
                      ›
                    </button>
                  </div>
                </div>

                {q && (
                  <div className="mt-5">
                    <p className="text-xl leading-relaxed text-slate-900 md:text-2xl">
                      <MathText text={q.prompt} />
                    </p>
                    {q.image && (
                      <img src={q.image} alt="Graph for this question" className="mt-4 w-full max-w-2xl rounded-xl border border-slate-200 bg-white" />
                    )}

                    {isMcq ? (
                      <div className="mt-5 space-y-2">
                        {q.choices!.map((c, i) => {
                          const isRight = !!a && i === q.correctIndex;
                          const isWrongPick = !!a && i === a.selected && !a.correct;
                          return (
                            <button
                              key={i}
                              disabled={!!a}
                              onClick={() => answer(i)}
                              className={`flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left text-lg transition ${
                                isRight
                                  ? "border-green-500 bg-green-50 font-semibold"
                                  : isWrongPick
                                    ? "border-red-500 bg-red-50"
                                    : a
                                      ? "border-slate-200 opacity-70"
                                      : "border-slate-200 hover:border-teal-500 hover:bg-teal-50/40"
                              }`}
                            >
                              <span
                                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                                  isRight
                                    ? "bg-green-500 text-white"
                                    : isWrongPick
                                      ? "bg-red-500 text-white"
                                      : "bg-slate-100 text-slate-500"
                                }`}
                              >
                                {String.fromCharCode(65 + i)}
                              </span>
                              <MathText text={c} />
                            </button>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="mt-5">
                        {!revealed[q.id] ? (
                          <button className="btn-primary" onClick={() => setRevealed((r) => ({ ...r, [q.id]: true }))}>
                            Reveal answer
                          </button>
                        ) : (
                          <p className="text-lg font-semibold text-slate-900">
                            Answer: <MathText text={q.correctText} />
                          </p>
                        )}
                      </div>
                    )}

                    {a && (
                      <div className={`mt-5 rounded-xl p-4 ${a.correct ? "bg-green-50" : "bg-red-50"}`}>
                        <p className={`font-bold uppercase tracking-wide ${a.correct ? "text-green-700" : "text-red-700"}`}>
                          {a.correct ? "Correct" : (<>Incorrect — the answer is <MathText text={q.correctText} /></>)}
                        </p>
                        <p className="mt-1 text-base text-slate-700">
                          <strong>Explanation:</strong> <MathText text={q.explanation} />
                        </p>
                      </div>
                    )}
                    {revealed[q.id] && (
                      <div className="mt-5 rounded-xl bg-slate-50 p-4 text-base text-slate-700">
                        <p className="font-bold text-slate-900">Explanation</p>
                        <p className="mt-1"><MathText text={q.explanation} /></p>
                      </div>
                    )}

                    <div className="mt-6 flex justify-between">
                      <button
                        className="btn-secondary"
                        onClick={() => go(sel - 1)}
                        disabled={sel === 0}
                      >
                        ← Previous
                      </button>
                      {sel < questions.length - 1 ? (
                        <button className="btn-primary" onClick={() => go(sel + 1)}>
                          Next question →
                        </button>
                      ) : (
                        <Link href="/practice" className="btn-primary">
                          Back to sections
                        </Link>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
