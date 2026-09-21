"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import MathText from "@/components/MathText";
import { plainText } from "@/lib/mathText";

type Question = {
  id: string;
  subject: string;
  section: string | null;
  difficulty: string;
  prompt: string;
  choices: string[] | null;
  correctIndex: number | null;
  correctText: string;
  explanation: string;
};

type Phase = "setup" | "answering" | "results";
type Mode = "drill" | "untimed" | number;

const TIMED_PRESETS: Record<string, { label: string; minutes: number; count: number }[]> = {
  "unit-1": [
    { label: "AP MCQ Part A style (15 Qs · 30 min · no calculator)", minutes: 30, count: 15 },
    { label: "Quick drill (10 Qs · 15 min)", minutes: 15, count: 10 },
  ],
  "unit-2": [
    { label: "AP MCQ Part A style (15 Qs · 30 min · no calculator)", minutes: 30, count: 15 },
    { label: "Quick drill (10 Qs · 15 min)", minutes: 15, count: 10 },
  ],
  "unit-3": [
    { label: "AP MCQ Part A style (15 Qs · 30 min · no calculator)", minutes: 30, count: 15 },
    { label: "Quick drill (10 Qs · 15 min)", minutes: 15, count: 10 },
  ],
  "unit-4": [
    { label: "AP MCQ Part A style (15 Qs · 30 min · no calculator)", minutes: 30, count: 15 },
    { label: "Quick drill (10 Qs · 15 min)", minutes: 15, count: 10 },
  ],
};

function formatTime(s: number) {
  const m = Math.floor(s / 60);
  const r = s % 60;
  return `${m}:${r.toString().padStart(2, "0")}`;
}

function ScoreRing({ correct, total }: { correct: number; total: number }) {
  const r = 54;
  const c = 2 * Math.PI * r;
  const pct = total ? correct / total : 0;
  return (
    <div className="relative mx-auto h-36 w-36">
      <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
        <circle cx="60" cy="60" r={r} fill="none" stroke="#e2e8f0" strokeWidth="12" />
        <circle
          cx="60" cy="60" r={r} fill="none" stroke="#16a34a" strokeWidth="12" strokeLinecap="round"
          strokeDasharray={c} strokeDashoffset={c * (1 - pct)}
          style={{ transition: "stroke-dashoffset 0.8s ease" }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-3xl font-extrabold text-black">{correct}/{total}</span>
        <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">correct</span>
      </div>
    </div>
  );
}

function drillHeading(correct: number, total: number): [string, string] {
  const pct = total ? correct / total : 0;
  if (pct === 1) return ["Perfect score!", "Flawless. Enjoy it — then try a timed set for exam pressure."];
  if (pct >= 0.8) return ["Great work!", "Just a miss or two — review the explanations to lock it in."];
  if (pct >= 0.6) return ["Good effort!", "You're close. Re-read the explanations and run it back."];
  return ["Keep practicing!", "Every rep counts. Review each explanation, then drill again."];
}

export default function PracticeClient({
  subjectId,
  subjectName,
  sections,
  initialSection,
}: {
  subjectId: string;
  subjectName: string;
  sections: { id: string; title: string }[];
  initialSection?: string;
}) {
  const [phase, setPhase] = useState<Phase>("setup");
  const [section, setSection] = useState<string>(initialSection ?? "all");
  const [difficulty, setDifficulty] = useState<string>("all");
  const [mode, setMode] = useState<Mode>("drill");
  const [count, setCount] = useState(10);

  const [questions, setQuestions] = useState<Question[]>([]);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [gridAnswer, setGridAnswer] = useState("");
  const [checked, setChecked] = useState(false);
  const [answers, setAnswers] = useState<{ id: string; correct: boolean; timeMs: number }[]>([]);
  const [secondsLeft, setSecondsLeft] = useState<number | null>(null);
  const [timeWarning, setTimeWarning] = useState<string | null>(null);
  const [shortNotice, setShortNotice] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const questionStart = useRef<number>(Date.now());
  // Timestamp-based timer: immune to background-tab throttling, so timed sets stay honest.
  const deadlineRef = useRef<number | null>(null);
  const warnedRef = useRef({ five: false, one: false });
  const finishedRef = useRef(false);

  // Drill mode state: every question stacked on one page, one click answers.
  const [drillAnswers, setDrillAnswers] = useState<Record<string, { selected: number; correct: boolean }>>({});
  const drillAttempts = useRef<{ id: string; correct: boolean; timeMs: number }[]>([]);
  const drillStartRef = useRef<number>(Date.now());

  const timed = typeof mode === "number";
  const isDrill = mode === "drill";

  const postAttempts = useCallback((list: { id: string; correct: boolean; timeMs: number }[]) => {
    fetch("/api/attempts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ attempts: list }),
    }).catch(() => {});
  }, []);

  const finish = useCallback(() => {
    setPhase("results");
    // Persist attempts for logged-in users (best effort; anonymous users keep local results)
    postAttempts(answers);
  }, [answers, postAttempts]);

  // Guard: the interval can fire as the set ends — finish exactly once
  // so attempts are never double-posted.
  const finishOnce = useCallback(() => {
    if (finishedRef.current) return;
    finishedRef.current = true;
    finish();
  }, [finish]);

  // Timer — derived from a deadline timestamp so switching tabs can't pause the clock.
  // Warns at 5 minutes and 1 minute remaining, like test day.
  // Uses setInterval (not chained setTimeout): when the computed remaining time is
  // unchanged, React skips the re-render, which would otherwise break the chain.
  useEffect(() => {
    if (phase !== "answering" || !timed || deadlineRef.current === null) return;
    const tick = () => {
      const remain = Math.max(0, Math.ceil((deadlineRef.current! - Date.now()) / 1000));
      setSecondsLeft(remain);
      if (remain <= 300 && remain > 60 && !warnedRef.current.five) {
        warnedRef.current.five = true;
        setTimeWarning("5 minutes remaining — keep your pace.");
      } else if (remain <= 60 && remain > 0 && !warnedRef.current.one) {
        warnedRef.current.one = true;
        setTimeWarning("1 minute remaining — finish your current question!");
      }
      if (remain <= 0) finishOnce();
    };
    tick();
    const id = setInterval(tick, 500);
    return () => clearInterval(id);
  }, [phase, timed, finishOnce]);

  // "Next:" redirect for drills — moves the student to the next topic in the unit
  // instead of replaying the same small question pool on a loop.
  const sectionIds = sections.map((s) => s.id);
  const nextSection = section === "all" ? sectionIds[0] : sectionIds[sectionIds.indexOf(section) + 1] ?? "all";
  const nextTitle = sections.find((s) => s.id === nextSection)?.title;
  const nextDrillLabel = nextSection === "all" ? "Mixed review drill (all sections)" : `${nextSection} | ${nextTitle} drill`;
  function goNextDrill() {
    setSection(nextSection);
    start(nextSection);
  }

  async function start(sectionOverride?: string) {
    setLoading(true);
    setError(null);
    try {
      const requested = isDrill ? 5 : timed ? TIMED_PRESETS[subjectId][mode as number].count : count;
      const params = new URLSearchParams({ subject: subjectId, limit: String(requested) });
      // NB: start is also used directly as an onClick handler, so the first
      // argument may be a click event — only honor string overrides.
      const d = typeof sectionOverride === "string" ? sectionOverride : section;
      if (d !== "all") params.set("section", d);
      if (difficulty !== "all" && !isDrill) params.set("difficulty", difficulty);
      const res = await fetch(`/api/questions?${params}`);
      if (!res.ok) throw new Error("Could not load questions.");
      const data = await res.json();
      if (!data.questions?.length) {
        setError("No questions found for these filters yet — try widening them.");
        return;
      }
      if (data.questions.length < requested) {
        setShortNotice(
          `Heads up: only ${data.questions.length} question${data.questions.length === 1 ? "" : "s"} matched your filters (this mode asks for ${requested}). Starting a shorter set — more questions are on the way.`
        );
      } else {
        setShortNotice(null);
      }
      setQuestions(data.questions);
      setIndex(0);
      setAnswers([]);
      setChecked(false);
      setSelected(null);
      setGridAnswer("");
      setTimeWarning(null);
      warnedRef.current = { five: false, one: false };
      finishedRef.current = false;
      // Drill reset
      setDrillAnswers({});
      drillAttempts.current = [];
      drillStartRef.current = Date.now();
      if (timed) {
        const minutes = TIMED_PRESETS[subjectId][mode as number].minutes;
        deadlineRef.current = Date.now() + minutes * 60 * 1000;
        setSecondsLeft(minutes * 60);
      } else {
        deadlineRef.current = null;
        setSecondsLeft(null);
      }
      questionStart.current = Date.now();
      setPhase("answering");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  const q = questions[index];

  function checkAnswer() {
    if (!q || checked) return;
    let correct = false;
    if (q.choices && q.correctIndex !== null) {
      correct = selected === q.correctIndex;
    } else {
      correct = gridAnswer.trim().toLowerCase() === q.correctText.trim().toLowerCase();
    }
    setAnswers((a) => [...a, { id: q.id, correct, timeMs: Date.now() - questionStart.current }]);
    setChecked(true);
  }

  function next() {
    if (index + 1 >= questions.length) {
      finishOnce();
      return;
    }
    setIndex((i) => i + 1);
    setSelected(null);
    setGridAnswer("");
    setChecked(false);
    questionStart.current = Date.now();
  }

  // Drill: one click answers immediately — no separate check step.
  function answerDrill(question: Question, choiceIdx: number) {
    if (drillAnswers[question.id]) return;
    const correct = choiceIdx === question.correctIndex;
    const nextAnswers = { ...drillAnswers, [question.id]: { selected: choiceIdx, correct } };
    setDrillAnswers(nextAnswers);
    const attempt = { id: question.id, correct, timeMs: Date.now() - drillStartRef.current };
    drillAttempts.current = [...drillAttempts.current, attempt];
    setAnswers(drillAttempts.current);
    if (Object.keys(nextAnswers).length === questions.length) {
      postAttempts(drillAttempts.current);
    }
  }

  if (phase === "setup") {
    const presets = TIMED_PRESETS[subjectId] ?? [];
    return (
      <div className="mx-auto max-w-2xl space-y-6">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">{subjectName} practice</h1>
          <p className="mt-2 text-slate-600">Pick a mode, then start. Explanations appear after every question.</p>
        </div>
        <div className="card space-y-5">
          <div>
            <label className="label">Mode</label>
            <div className="space-y-2">
              <label className="flex cursor-pointer items-center gap-2 rounded-xl border border-slate-200 p-3 text-sm hover:border-slate-300">
                <input type="radio" checked={mode === "drill"} onChange={() => setMode("drill")} />
                <span>
                  <strong>Quick drill</strong> — 5 questions, instant feedback
                  <span className="ml-2 rounded-full bg-black px-2 py-0.5 text-xs font-bold text-white">RECOMMENDED</span>
                </span>
              </label>
              <label className="flex cursor-pointer items-center gap-2 rounded-xl border border-slate-200 p-3 text-sm hover:border-slate-300">
                <input type="radio" checked={mode === "untimed"} onChange={() => setMode("untimed")} />
                <span><strong>Untimed practice</strong> — one question at a time</span>
              </label>
              {presets.map((p, i) => (
                <label key={p.label} className="flex cursor-pointer items-center gap-2 rounded-xl border border-slate-200 p-3 text-sm hover:border-slate-300">
                  <input type="radio" checked={mode === i} onChange={() => setMode(i)} />
                  <span><strong>Timed</strong> — {p.label}</span>
                </label>
              ))}
            </div>
          </div>
          <div>
            <label className="label">Section</label>
            <select className="input" value={section} onChange={(e) => setSection(e.target.value)}>
              <option value="all">All sections</option>
              {sections.map((s) => (
                <option key={s.id} value={s.id}>{s.id} | {s.title}</option>
              ))}
            </select>
          </div>
          {mode === "untimed" && (
            <>
              <div>
                <label className="label">Difficulty</label>
                <select className="input" value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
                  <option value="all">Mixed</option>
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
              </div>
              <div>
                <label className="label">Number of questions</label>
                <select className="input" value={count} onChange={(e) => setCount(Number(e.target.value))}>
                  {[5, 10, 15, 20].map((n) => (
                    <option key={n} value={n}>{n} questions</option>
                  ))}
                </select>
              </div>
            </>
          )}
          {error && <p className="text-sm text-red-600">{error}</p>}
          <button className="btn-primary w-full" onClick={() => start()} disabled={loading}>
            {loading ? "Loading…" : isDrill ? <>Start drill <span className="btn-arrow" aria-hidden>→</span></> : "Start practice set"}
          </button>
        </div>
      </div>
    );
  }

  if (phase === "results") {
    const correct = answers.filter((a) => a.correct).length;
    const pct = answers.length ? Math.round((correct / answers.length) * 100) : 0;
    return (
      <div className="mx-auto max-w-2xl space-y-6">
        <div className="card text-center">
          <h1 className="text-3xl font-extrabold">Set complete 🎉</h1>
          <p className="mt-4 text-5xl font-extrabold text-black">{pct}%</p>
          <p className="mt-2 text-slate-600">
            {correct} of {answers.length} correct
          </p>
          <p className="mt-4 text-sm text-slate-500">
            {pct >= 85 ? "Excellent — you're in scoring range. Try a harder set or a full timed module." :
             pct >= 65 ? "Solid. Review the explanations below, then drill your missed topics." :
             "Good reps. Re-read each explanation and retry the set — small fixes add up fast."}
          </p>
        </div>
        <div className="space-y-3">
          {answers.map((a, i) => {
            const qq = questions.find((x) => x.id === a.id);
            return (
              <div key={a.id + i} className={`card !p-4 ${a.correct ? "border-green-200" : "border-red-200"}`}>
                <p className="text-sm font-semibold">
                  Q{i + 1}{qq?.section ? ` · ${qq.section}` : ""} {a.correct ? "✅" : "❌"}
                </p>
                <p className="mt-1 text-sm text-slate-600">{plainText(qq?.prompt ?? "").slice(0, 120)}…</p>
                {!a.correct && <p className="mt-2 text-sm text-slate-600"><strong>Answer:</strong> <MathText text={qq?.correctText ?? ""} /></p>}
              </div>
            );
          })}
        </div>
        <div className="flex gap-3">
          <button className="btn-primary flex-1" onClick={() => setPhase("setup")}>New set</button>
          <a href="/dashboard" className="btn-secondary flex-1 text-center">View dashboard</a>
        </div>
      </div>
    );
  }

  // ── Drill answering: all questions stacked, one click answers ──
  if (isDrill) {
    const answeredCount = Object.keys(drillAnswers).length;
    const total = questions.length;
    const done = total > 0 && answeredCount === total;
    const correctCount = Object.values(drillAnswers).filter((a) => a.correct).length;
    const [heading, sub] = drillHeading(correctCount, total);

    return (
      <div className="mx-auto max-w-2xl">
        {shortNotice && (
          <div className="mb-4 flex items-start justify-between gap-3 rounded-xl bg-amber-50 p-4 text-sm text-amber-800">
            <p>{shortNotice}</p>
            <button className="shrink-0 font-bold" onClick={() => setShortNotice(null)} aria-label="Dismiss">✕</button>
          </div>
        )}

        {/* Sticky progress header */}
        <div className="sticky top-[57px] z-30 -mx-4 border-b border-slate-200 bg-white/95 px-4 py-3 backdrop-blur">
          <div className="mx-auto flex max-w-2xl items-center justify-between">
            <p className="text-sm font-bold text-black">
              {answeredCount} / {total} <span className="font-medium text-slate-500">answered</span>
            </p>
            <p className="text-sm font-medium text-slate-500">{subjectName}</p>
          </div>
          <div className="mx-auto mt-2 h-1.5 max-w-2xl overflow-hidden rounded-full bg-slate-200">
            <div
              className="h-full bg-black transition-all"
              style={{ width: `${total ? (answeredCount / total) * 100 : 0}%` }}
            />
          </div>
        </div>

        <div className="space-y-5 pt-6">
          {questions.map((qq, qi) => {
            const da = drillAnswers[qq.id];
            const answered = !!da;
            const isMcq = !!qq.choices && qq.correctIndex !== null;
            return (
              <div
                key={qq.id}
                className={`rounded-2xl border-2 bg-white p-5 transition sm:p-6 ${
                  answered ? (da.correct ? "border-green-500" : "border-red-400") : "border-slate-200"
                }`}
              >
                <span className="inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-slate-500">
                  Question {qi + 1}
                </span>
                <p className="mt-3 text-xl leading-relaxed md:text-2xl"><MathText text={qq.prompt} /></p>

                {isMcq ? (
                  <div className="mt-4 space-y-2">
                    {qq.choices!.map((c, i) => {
                      const isRight = answered && i === qq.correctIndex;
                      const isWrongPick = answered && i === da.selected && !da.correct;
                      return (
                        <button
                          key={i}
                          disabled={answered}
                          onClick={() => answerDrill(qq, i)}
                          className={`flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left text-lg transition ${
                            isRight
                              ? "border-green-500 bg-green-50 font-semibold"
                              : isWrongPick
                                ? "border-red-500 bg-red-50"
                                : answered
                                  ? "border-slate-200 opacity-70"
                                  : "border-slate-200 hover:border-slate-400 hover:bg-slate-50"
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
                  <p className="mt-4 text-sm text-slate-500">This question needs a typed answer — use untimed mode for it.</p>
                )}

                {answered && (
                  <div className={`mt-4 rounded-xl p-4 ${da.correct ? "bg-green-50" : "bg-red-50"}`}>
                    <p className={`font-bold uppercase tracking-wide ${da.correct ? "text-green-700" : "text-red-700"}`}>
                      {da.correct ? "Correct" : (<>Incorrect — the answer is <MathText text={qq.correctText} /></>)}
                    </p>
                    <p className="mt-1 text-base text-slate-700">
                      <strong>Explanation:</strong> <MathText text={qq.explanation} />
                    </p>
                  </div>
                )}
              </div>
            );
          })}

          {/* End-of-drill score card */}
          {done && (
            <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center">
              <ScoreRing correct={correctCount} total={total} />
              <h2 className="mt-4 text-3xl font-extrabold text-black">{heading}</h2>
              <p className="mx-auto mt-2 max-w-md text-slate-600">{sub}</p>
              <p className="mt-6 text-lg font-bold text-black">Next: {nextDrillLabel}</p>
              <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <button className="btn-primary" onClick={goNextDrill}>
                  Next <span className="btn-arrow" aria-hidden>»</span>
                </button>
                <button className="btn-secondary" onClick={() => start()}>
                  Replay this section
                </button>
                <Link href="/practice" className="btn-secondary">
                  More practice
                </Link>
                <Link href="/dashboard" className="btn-secondary">
                  Dashboard
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // ── Classic one-at-a-time answering (untimed + timed) ──
  if (!q) return <p>Loading…</p>;
  const isMcq = !!q.choices && q.correctIndex !== null;
  const lastAnswer = answers[answers.length - 1];
  const wasCorrect = checked && lastAnswer?.id === q.id && lastAnswer.correct;
  const qSectionTitle = q.section ? sections.find((s) => s.id === q.section)?.title : null;

  return (
    <div className="mx-auto max-w-2xl space-y-5">
      {shortNotice && (
        <div className="flex items-start justify-between gap-3 rounded-xl bg-amber-50 p-4 text-sm text-amber-800">
          <p>{shortNotice}</p>
          <button className="shrink-0 font-bold" onClick={() => setShortNotice(null)} aria-label="Dismiss">✕</button>
        </div>
      )}
      {timeWarning && (
        <div className="flex items-start justify-between gap-3 rounded-xl bg-brand-50 p-4 text-sm font-semibold text-brand-800">
          <p>⏰ {timeWarning}</p>
          <button className="shrink-0 font-bold" onClick={() => setTimeWarning(null)} aria-label="Dismiss">✕</button>
        </div>
      )}
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-slate-500">
          Question {index + 1} of {questions.length}{q.section ? ` · ${q.section}${qSectionTitle ? ` | ${qSectionTitle}` : ""} · ` : " · "}{q.difficulty}
        </p>
        {timed && secondsLeft !== null && (
          <p className={`rounded-full px-4 py-1.5 font-mono font-bold ${secondsLeft < 60 ? "bg-red-100 text-red-700" : secondsLeft < 300 ? "bg-amber-100 text-amber-800" : "bg-slate-100 text-slate-700"}`}>
            ⏱ {formatTime(secondsLeft)}
          </p>
        )}
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-slate-200">
        <div className="h-full bg-black transition-all" style={{ width: `${((index + (checked ? 1 : 0)) / questions.length) * 100}%` }} />
      </div>

      <div className="card space-y-5">
        <p className="text-xl leading-relaxed md:text-2xl"><MathText text={q.prompt} /></p>

        {isMcq ? (
          <div className="space-y-2">
            {q.choices!.map((c, i) => {
              const isRight = checked && i === q.correctIndex;
              const isWrongPick = checked && i === selected && i !== q.correctIndex;
              return (
                <button
                  key={i}
                  disabled={checked}
                  onClick={() => setSelected(i)}
                  className={`w-full rounded-xl border px-4 py-3 text-left text-lg transition ${
                    isRight ? "border-green-500 bg-green-50 font-semibold"
                    : isWrongPick ? "border-red-500 bg-red-50"
                    : selected === i ? "border-black bg-slate-100"
                    : "border-slate-200 hover:border-slate-400 hover:bg-slate-50"
                  }`}
                >
                  <span className="mr-2 font-bold text-slate-400">{String.fromCharCode(65 + i)}.</span> <MathText text={c} />
                </button>
              );
            })}
          </div>
        ) : (
          <div>
            <label className="label">Type your answer (grid-in style)</label>
            <input
              className="input"
              value={gridAnswer}
              disabled={checked}
              onChange={(e) => setGridAnswer(e.target.value)}
              placeholder="e.g. 10 or -17"
            />
            {checked && (
              <p className={`mt-2 text-sm font-semibold ${wasCorrect ? "text-green-700" : "text-red-700"}`}>
                {wasCorrect ? "✅ Correct!" : (<>❌ The correct answer is <MathText text={q.correctText} />.</>)}
              </p>
            )}
          </div>
        )}

        {checked && (
          <div className="rounded-xl bg-slate-50 p-4 text-base text-slate-700">
            <p className="font-bold text-slate-900">Explanation</p>
            <p className="mt-1"><MathText text={q.explanation} /></p>
          </div>
        )}

        <div className="flex gap-3">
          {!checked ? (
            <button
              className="btn-primary flex-1"
              onClick={checkAnswer}
              disabled={isMcq ? selected === null : gridAnswer.trim() === ""}
            >
              Check answer
            </button>
          ) : (
            <button className="btn-primary flex-1" onClick={next}>
              {index + 1 >= questions.length ? "See results" : "Next question →"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
