"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { UNITS, sectionsByUnit, sectionLabel } from "@/lib/site";
import { timedTestList } from "@/lib/timedTests";
import PaidGate from "@/components/PaidGate";

const timedTests = timedTestList();

type SectionProgress = {
  subject: string;
  section: string;
  label: string;
  blurb: string;
  questions: number;
  attempts: number;
  accuracy: number | null;
};

type TabId = "practice" | "free-response" | "assessments" | "study";

const TABS: { id: TabId; label: string }[] = [
  { id: "practice", label: "Practice" },
  { id: "free-response", label: "Free Response" },
  { id: "assessments", label: "Assessments" },
  { id: "study", label: "Study" },
];

const TIMED_PRESETS = [
  { label: "AP MCQ Part A style", detail: "15 questions · 30 min · no calculator" },
  { label: "Quick timed drill", detail: "10 questions · 15 min" },
];

export default function PracticeHub() {
  return (
    <PaidGate>
      <PracticeHubInner />
    </PaidGate>
  );
}

function PracticeHubInner() {
  const [tab, setTab] = useState<TabId>("practice");
  const [unitId, setUnitId] = useState("unit-1");
  const [progress, setProgress] = useState<SectionProgress[] | null>(null);

  useEffect(() => {
    fetch("/api/progress")
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => setProgress(d?.sections ?? []))
      .catch(() => setProgress([]));
  }, []);

  const byKey = new Map((progress ?? []).map((s) => [`${s.subject}|||${s.section}`, s]));
  const sections = sectionsByUnit(unitId);

  return (
    <div className="space-y-8">
      {/* Hero banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-teal-800 via-cyan-800 to-sky-900 text-white">
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full opacity-15"
          viewBox="0 0 800 200"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path d="M0 160 C 120 120, 200 180, 320 140 S 520 60, 640 90 S 760 60, 800 40"
            fill="none" stroke="white" strokeWidth="3" />
          <path d="M0 180 C 150 150, 260 190, 400 160 S 620 110, 800 100"
            fill="none" stroke="white" strokeWidth="2" strokeDasharray="8 6" />
        </svg>
        <div className="relative px-6 py-10 text-center sm:py-14">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-200">Pro Minds</p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">AP Precalculus</h1>
          <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-cyan-100">
            Practice every section of the College Board course framework — drills with instant
            feedback, timed exam-style sets, and free-response tests.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-slate-200">
        <nav className="-mb-px flex gap-2 overflow-x-auto sm:gap-8" aria-label="Practice sections">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`whitespace-nowrap border-b-2 px-3 pb-3 text-[15px] font-semibold transition sm:px-1 ${
                tab === t.id
                  ? "border-sky-600 text-sky-700"
                  : "border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-800"
              }`}
            >
              {t.label}
            </button>
          ))}
        </nav>
      </div>

      {tab === "practice" && (
        <div className="grid gap-8 md:grid-cols-[240px_1fr]">
          {/* Contents sidebar */}
          <aside>
            <p className="mb-3 text-sm font-semibold text-slate-500">Contents:</p>
            <nav className="space-y-1">
              {UNITS.map((u) => (
                <button
                  key={u.id}
                  onClick={() => setUnitId(u.id)}
                  className={`block w-full rounded-xl px-4 py-3 text-left text-[15px] font-medium transition ${
                    unitId === u.id
                      ? "bg-sky-100 font-bold text-sky-800"
                      : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  {u.short} | {u.name.replace(/^Unit \d: /, "")}
                </button>
              ))}
            </nav>
            {unitId === "unit-4" && (
              <p className="mt-3 rounded-xl bg-slate-100 p-3 text-xs text-slate-500">
                Unit 4 is part of the course but is not assessed on the AP exam.
              </p>
            )}
          </aside>

          {/* Section list */}
          <div className="divide-y divide-slate-200 border-t border-b border-slate-200">
            {sections.map((sec) => {
              const p = byKey.get(`${unitId}|||${sec.id}`);
              const count = p?.questions ?? 0;
              return (
                <Link
                  key={sec.id}
                  href={`/practice/${unitId}/${sec.id}`}
                  className="group flex items-start justify-between gap-4 py-5"
                >
                  <div className="min-w-0">
                    <p className="text-lg font-bold text-slate-900 group-hover:text-brand-700">
                      {sectionLabel(unitId, sec.id)}
                    </p>
                    <p className="mt-1 max-w-2xl text-[15px] leading-relaxed text-slate-600">{sec.blurb}</p>
                    {count === 0 && (
                      <p className="mt-1 text-xs font-semibold text-amber-600">Questions coming soon</p>
                    )}
                  </div>
                  <div className="flex shrink-0 items-center gap-4 text-[15px]">
                    <span className="text-slate-700">
                      {count} question{count === 1 ? "" : "s"}
                    </span>
                    <span className="hidden w-px self-stretch bg-slate-200 sm:block" aria-hidden />
                    <span className="w-24 text-right text-slate-700">
                      {p && p.accuracy !== null ? `${p.accuracy}%` : "—"} Accuracy
                    </span>
                    <span className="text-slate-300 transition group-hover:translate-x-0.5 group-hover:text-brand-600" aria-hidden>→</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {tab === "free-response" && (
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-extrabold tracking-tight">Free-response tests</h2>
            <p className="mt-1 max-w-2xl text-sm text-slate-600">
              Teacher-assigned worksheet tests. The clock can't be paused — your work auto-saves
              and the test locks when time runs out.
            </p>
          </div>
          {timedTests.length === 0 && (
            <p className="text-sm text-slate-500">No free-response tests yet — check back soon.</p>
          )}
          {timedTests.map((t) => (
            <div key={t.id} className="card flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-bold text-black">{t.title}</p>
                <p className="mt-1 text-sm text-slate-600">
                  ⏱ {t.minutes} minutes · 📝 {t.questions.length} free-response questions
                </p>
              </div>
              <Link href={`/practice/timed/${t.id}`} className="btn-primary shrink-0">
                Open test <span className="btn-arrow" aria-hidden>↗</span>
              </Link>
            </div>
          ))}
        </div>
      )}

      {tab === "assessments" && (
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-extrabold tracking-tight">Timed assessments</h2>
            <p className="mt-1 max-w-2xl text-sm text-slate-600">
              Exam-style multiple-choice sets with a real countdown — pick a unit, then choose a
              timed mode on the next screen.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {UNITS.map((u) => (
              <div key={u.id} className="card flex flex-col gap-3">
                <p className="font-bold text-black">{u.name}</p>
                <ul className="space-y-1 text-sm text-slate-600">
                  {TIMED_PRESETS.map((p) => (
                    <li key={p.label}>
                      <span className="font-semibold text-slate-800">{p.label}</span>
                      <span className="text-slate-500"> — {p.detail}</span>
                    </li>
                  ))}
                </ul>
                <Link href={`/practice/${u.id}`} className="btn-primary mt-auto self-start">
                  Start timed set <span className="btn-arrow" aria-hidden>↗</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === "study" && (
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-extrabold tracking-tight">Study smart</h2>
            <p className="mt-1 max-w-2xl text-sm text-slate-600">
              Your dashboard tracks accuracy by section, weakest first — so you always know what
              to work on next.
            </p>
          </div>
          <div className="card flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-bold text-black">Your progress dashboard</p>
              <p className="mt-1 text-sm text-slate-600">
                Attempts, accuracy, and per-section breakdowns for every unit.
              </p>
            </div>
            <Link href="/dashboard" className="btn-primary shrink-0">
              Open dashboard <span className="btn-arrow" aria-hidden>↗</span>
            </Link>
          </div>
          <div className="card bg-slate-50">
            <h3 className="font-bold text-black">A simple weekly routine</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600">
              <li>Run one 5-question drill a day — instant feedback beats cramming.</li>
              <li>Attack your weakest sections first; the dashboard sorts them for you.</li>
              <li>Take a timed set every week or two to practice under exam pressure.</li>
              <li>Re-do any section under 70% accuracy before moving on.</li>
            </ul>
          </div>
        </div>
      )}

      {tab === "practice" && (
        <div className="card bg-slate-50">
          <h2 className="font-bold text-black">How drills & timed sets work</h2>
          <p className="mt-1 text-sm text-slate-600">
            Quick drills give you 5 questions with instant feedback after every answer — perfect for daily reps.
            Timed presets mirror the AP exam's multiple-choice section, warning you at 5 minutes and 1 minute remaining, just like test day.
          </p>
        </div>
      )}
    </div>
  );
}
