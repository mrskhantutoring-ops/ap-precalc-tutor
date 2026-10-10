"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { TimedTest } from "@/lib/timedTests";
import DrawingPad from "./DrawingPad";

type Phase = "loading" | "setup" | "answering" | "submitted";

function formatTime(s: number) {
  const m = Math.floor(s / 60);
  const r = s % 60;
  return `${m}:${r.toString().padStart(2, "0")}`;
}

export default function TimedTestClient({ test, preview = false }: { test: TimedTest; preview?: boolean }) {
  const previewBanner = preview ? (
    <p className="rounded-xl bg-amber-100 px-4 py-2 text-center text-sm font-semibold text-amber-800">
      &#128065; Admin preview &mdash; you&apos;re seeing exactly what students see. Nothing is saved or sent.
    </p>
  ) : null;
  const [phase, setPhase] = useState<Phase>("loading");
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [drawings, setDrawings] = useState<Record<string, string>>({});
  const [secondsLeft, setSecondsLeft] = useState<number | null>(null);
  const [timeWarning, setTimeWarning] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [timeUsed, setTimeUsed] = useState<string | null>(null);
  const [startedAt, setStartedAt] = useState<string | null>(null);

  const deadlineRef = useRef<number | null>(null);
  const warnedRef = useRef({ five: false, one: false });
  const finishedRef = useRef(false);
  const submitFailedRef = useRef(false);
  const answersRef = useRef(answers);
  const dirtyRef = useRef(false);
  answersRef.current = answers;
  const drawingsRef = useRef(drawings);
  drawingsRef.current = drawings;
  const dirtyDrawingsRef = useRef<Set<string>>(new Set());

  const saveDraft = useCallback(async () => {
    if (!dirtyRef.current) return;
    dirtyRef.current = false;
    if (preview) return;
    // Send only the handwriting pads that changed since the last save —
    // full images every 15 seconds would waste bandwidth.
    const sentKeys = [...dirtyDrawingsRef.current];
    const drawingPatch: Record<string, string | null> = {};
    for (const k of sentKeys) {
      drawingPatch[k] = drawingsRef.current[k] ?? null;
      dirtyDrawingsRef.current.delete(k);
    }
    setSaving(true);
    try {
      await fetch("/api/timed-tests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          testId: test.id,
          answers: answersRef.current,
          drawings: drawingPatch,
          final: false,
        }),
      });
    } catch {
      // best effort — retry on the next cycle
      dirtyRef.current = true;
      for (const k of sentKeys) dirtyDrawingsRef.current.add(k);
    } finally {
      setSaving(false);
    }
  }, [test.id]);

  const submitFinal = useCallback(async () => {
    if (finishedRef.current) return;
    finishedRef.current = true;
    submitFailedRef.current = false;
    dirtyRef.current = false;
    setSaving(true);
    try {
      if (preview) throw { previewDone: true };
      const res = await fetch("/api/timed-tests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          testId: test.id,
          answers: answersRef.current,
          drawings: drawingsRef.current,
          final: true,
        }),
      });
      if (res.status === 409) {
        // The server already locked this test (it auto-finalizes at the deadline,
        // e.g. after a reload). Show the stored submission instead of erroring —
        // retrying a 409 in a loop is what made the page flicker.
        const d = await fetch(`/api/timed-tests?testId=${encodeURIComponent(test.id)}`)
          .then((r) => r.json())
          .catch(() => null);
        const s = d?.submission;
        if (s) {
          setAnswers((s.answers ?? {}) as Record<string, string>);
          setDrawings((s.drawings ?? {}) as Record<string, string>);
          setStartedAt(s.startedAt ?? null);
          setTimeUsed(s.timeMs != null ? formatTime(Math.round(s.timeMs / 1000)) : null);
        }
        setSecondsLeft(null);
        setPhase("submitted");
        return;
      }
      if (!res.ok) {
        const d = await res.json().catch(() => null);
        throw new Error(d?.error ?? "Could not submit.");
      }
    } catch (e) {
      if (e && typeof e === "object" && "previewDone" in e) {
        // fall through — preview skips the server submit
      } else {
        setError(e instanceof Error ? e.message : "Could not submit.");
        finishedRef.current = false;
        // Stop the countdown from auto-retrying twice a second (the flicker);
        // the student can still tap Submit to try again.
        submitFailedRef.current = true;
        return;
      }
    } finally {
      setSaving(false);
    }
    const usedMs = deadlineRef.current ? Math.min(Date.now(), deadlineRef.current) - (deadlineRef.current - test.minutes * 60 * 1000) : 0;
    setTimeUsed(formatTime(Math.max(0, Math.round(usedMs / 1000))));
    setSecondsLeft(null);
    setPhase("submitted");
  }, [test.id, test.minutes]);

  // Load any existing submission (draft or final).
  useEffect(() => {
    if (preview) {
      setPhase("setup");
      return;
    }
    fetch(`/api/timed-tests?testId=${encodeURIComponent(test.id)}`)
      .then((r) => {
        if (!r.ok) throw new Error("load failed");
        return r.json();
      })
      .then((d) => {
        const s = d.submission;
        if (s?.final) {
          setAnswers((s.answers ?? {}) as Record<string, string>);
          setDrawings((s.drawings ?? {}) as Record<string, string>);
          setStartedAt(s.startedAt ?? null);
          setTimeUsed(s.timeMs != null ? formatTime(Math.round(s.timeMs / 1000)) : null);
          setPhase("submitted");
        } else if (s?.startedAt) {
          // Resume an in-progress draft
          setAnswers((s.answers ?? {}) as Record<string, string>);
          setDrawings((s.drawings ?? {}) as Record<string, string>);
          setStartedAt(s.startedAt);
          deadlineRef.current = new Date(s.startedAt).getTime() + test.minutes * 60 * 1000;
          warnedRef.current = { five: false, one: false };
          finishedRef.current = false;
          setPhase("answering");
        } else {
          setPhase("setup");
        }
      })
      .catch(() => {
        setError("Could not load the test. Check your connection and reload.");
        setPhase("setup");
      });
  }, [test.id, test.minutes]);

  // Countdown — anchored to the server start time, immune to tab throttling.
  useEffect(() => {
    if (phase !== "answering" || deadlineRef.current === null) return;
    const tick = () => {
      const remain = Math.max(0, Math.ceil((deadlineRef.current! - Date.now()) / 1000));
      setSecondsLeft(remain);
      if (remain <= 300 && remain > 60 && !warnedRef.current.five) {
        warnedRef.current.five = true;
        setTimeWarning("5 minutes remaining.");
      } else if (remain <= 60 && remain > 0 && !warnedRef.current.one) {
        warnedRef.current.one = true;
        setTimeWarning("1 minute remaining — finish up!");
      }
      if (remain <= 0 && !submitFailedRef.current) submitFinal();
    };
    tick();
    const id = setInterval(tick, 500);
    return () => clearInterval(id);
  }, [phase, submitFinal]);

  // Auto-save draft every 15 seconds while answering.
  useEffect(() => {
    if (phase !== "answering") return;
    const id = setInterval(saveDraft, 15000);
    return () => clearInterval(id);
  }, [phase, saveDraft]);

  // Save on leaving the page mid-test (best effort).
  useEffect(() => {
    if (phase !== "answering") return;
    const onHide = () => saveDraft();
    window.addEventListener("pagehide", onHide);
    return () => window.removeEventListener("pagehide", onHide);
  }, [phase, saveDraft]);

  async function start() {
    setError(null);
    if (preview) {
      const now = new Date().toISOString();
      setStartedAt(now);
      deadlineRef.current = Date.now() + test.minutes * 60 * 1000;
      warnedRef.current = { five: false, one: false };
      finishedRef.current = false;
      setPhase("answering");
      return;
    }
    // Anchor the start time immediately; if a draft exists the server keeps the original.
    try {
      const res = await fetch("/api/timed-tests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ testId: test.id, answers: answersRef.current, final: false }),
      });
      if (!res.ok) {
        const d = await res.json().catch(() => null);
        if (res.status === 409) {
          setPhase("submitted");
          return;
        }
        throw new Error(d?.error ?? "Could not start the test.");
      }
      const d = await res.json();
      setStartedAt(d.startedAt);
      deadlineRef.current = new Date(d.startedAt).getTime() + test.minutes * 60 * 1000;
      warnedRef.current = { five: false, one: false };
      finishedRef.current = false;
      setPhase("answering");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Could not start the test.");
    }
  }

  function setAnswer(key: string, value: string) {
    dirtyRef.current = true;
    setAnswers((a) => ({ ...a, [key]: value }));
  }

  function setDrawing(key: string, value: string | null) {
    dirtyRef.current = true;
    dirtyDrawingsRef.current.add(key);
    setDrawings((d) => {
      const next = { ...d };
      if (value === null) delete next[key];
      else next[key] = value;
      return next;
    });
  }

  if (phase === "loading") {
    return <p className="text-slate-500">Loading test…</p>;
  }

  if (phase === "setup") {
    return (
      <div className="mx-auto max-w-2xl space-y-6">
        {previewBanner}
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Timed test</p>
          <h1 className="mt-1 text-3xl font-extrabold tracking-tight">{test.title}</h1>
          <p className="mt-2 whitespace-pre-wrap text-slate-600">{test.description}</p>
        </div>
        <div className="card space-y-3 text-sm text-slate-600">
          <div className="flex items-center gap-3">
            <span className="text-2xl">⏱</span>
            <p><strong className="text-black">{test.minutes} minutes</strong> — the clock starts when you begin and cannot be paused.</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-2xl">📝</span>
            <p><strong className="text-black">{test.questions.length} free-response questions</strong> — type your answer, or write your work by hand on the writing pad under each one.</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-2xl">💾</span>
            <p>Your work <strong className="text-black">auto-saves</strong> while you type and is sent to your teacher when time runs out.</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-2xl">🔒</span>
            <p>Once submitted (or when time expires), the test <strong className="text-black">locks</strong> — you can't reopen or change it.</p>
          </div>
        </div>
        {error && <p className="text-sm text-red-600">{error}</p>}
        <button className="btn-primary w-full" onClick={start}>
          Start {test.minutes}-minute test <span className="btn-arrow" aria-hidden>→</span>
        </button>
      </div>
    );
  }

  if (phase === "submitted") {
    return (
      <div className="mx-auto max-w-2xl space-y-6">
        {previewBanner}
        <div className="card text-center">
          <p className="text-4xl">🔒</p>
          <h1 className="mt-2 text-3xl font-extrabold">{preview ? "Preview finished" : "Test submitted"}</h1>
          <p className="mt-2 text-slate-600">
            {preview
              ? "That's the full student experience. Nothing was saved or sent."
              : "Your work has been saved and sent to your teacher. This test is now locked — it can't be reopened or changed."}
          </p>
          {timeUsed && (
            <p className="mt-3 font-mono text-lg font-bold">Time used: {timeUsed}</p>
          )}
          {startedAt && (
            <p className="mt-1 text-xs text-slate-400">Started {new Date(startedAt).toLocaleString()}</p>
          )}
        </div>
        <div className="space-y-3">
          <h2 className="font-bold">What you submitted</h2>
          {test.questions.map((q) => (
            <div key={q.key} className="card !p-4">
              <p className="text-sm font-bold">{q.label}</p>
              <p className="mt-1 whitespace-pre-wrap text-sm text-slate-600">
                {answers[q.key]?.trim() ? answers[q.key] : <span className="italic text-slate-400">(no answer)</span>}
              </p>
              {drawings[q.key] && (
                <img
                  src={drawings[q.key]}
                  alt={`Your written work for ${q.label}`}
                  className="mt-2 w-full rounded-lg border border-slate-200"
                />
              )}
            </div>
          ))}
        </div>
        <Link href={preview ? "/admin" : "/dashboard"} className="btn-secondary w-full text-center">{preview ? "Back to admin" : "Back to dashboard"}</Link>
      </div>
    );
  }

  // ── Answering ──
  const answeredCount = test.questions.filter(
    (q) => answers[q.key]?.trim() || drawings[q.key]
  ).length;

  return (
    <div className="mx-auto max-w-3xl">
      {previewBanner}
      {timeWarning && (
        <div className="mb-4 flex items-start justify-between gap-3 rounded-xl bg-brand-50 p-4 text-sm font-semibold text-brand-800">
          <p>⏰ {timeWarning}</p>
          <button className="shrink-0 font-bold" onClick={() => setTimeWarning(null)} aria-label="Dismiss">✕</button>
        </div>
      )}

      <div className="sticky top-[57px] z-30 -mx-4 border-b border-slate-200 bg-white/95 px-4 py-3 backdrop-blur">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-3">
          <p className="text-sm font-bold text-black">
            {answeredCount} / {test.questions.length} <span className="font-medium text-slate-500">answered</span>
          </p>
          {secondsLeft !== null && (
            <p className={`rounded-full px-4 py-1.5 font-mono font-bold ${secondsLeft < 60 ? "bg-red-100 text-red-700" : secondsLeft < 300 ? "bg-amber-100 text-amber-800" : "bg-slate-100 text-slate-700"}`}>
              ⏱ {formatTime(secondsLeft)}
            </p>
          )}
          <p className="hidden text-xs text-slate-400 sm:block">{preview ? "Preview — not saved" : saving ? "Saving…" : "Auto-saved"}</p>
        </div>
        <div className="mx-auto mt-2 h-1.5 max-w-3xl overflow-hidden rounded-full bg-slate-200">
          <div className="h-full bg-black transition-all" style={{ width: `${(answeredCount / test.questions.length) * 100}%` }} />
        </div>
      </div>

      <div className="space-y-6 pt-6">
        {test.questions.map((q) => (
          <div key={q.key} className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-6">
            <span className="inline-block rounded-full bg-slate-100 px-3 py-1 text-sm font-bold uppercase tracking-wide text-slate-500">
              {q.label}
            </span>
            <img
              src={q.image}
              alt={`${q.label} worksheet page`}
              className="mx-auto mt-4 w-full max-w-3xl rounded-lg border border-slate-100"
              loading="lazy"
            />
            <div className="mx-auto mt-4 max-w-3xl">
              <label className="label">Your answer — show your work</label>
              <textarea
                className="input min-h-28"
                value={answers[q.key] ?? ""}
                onChange={(e) => setAnswer(q.key, e.target.value)}
                placeholder="Type your answer and work here…"
              />
            </div>
            <div className="mx-auto mt-5 max-w-3xl border-t border-slate-100 pt-4">
              <DrawingPad
                value={drawings[q.key] ?? null}
                onChange={(v) => setDrawing(q.key, v)}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="card mt-6 space-y-3">
        {error && <p className="text-sm text-red-600">{error}</p>}
        <button className="btn-primary w-full" onClick={submitFinal} disabled={saving}>
          {saving ? "Submitting…" : "Submit test"}
        </button>
        <p className="text-center text-xs text-slate-400">
          Submitting locks the test — make sure you're done. Time left is shown above.
        </p>
      </div>
    </div>
  );
}
