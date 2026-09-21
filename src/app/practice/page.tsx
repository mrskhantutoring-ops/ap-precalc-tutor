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

export default function PracticeHub() {
  return (
    <PaidGate>
      <PracticeHubInner />
    </PaidGate>
  );
}

function PracticeHubInner() {
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
      <div className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tight">Practice</h1>
        <p className="mx-auto mt-2 max-w-2xl text-slate-600">
          AP Precalculus practice, section by section — just like the College Board course framework.
          Pick a section to start a drill.
        </p>
      </div>

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
                href={`/practice/${unitId}?section=${sec.id}`}
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

      {timedTests.length > 0 && (
        <div className="space-y-3">
          <h2 className="text-xl font-extrabold tracking-tight">Timed tests</h2>
          <p className="-mt-2 text-sm text-slate-600">
            Teacher-assigned worksheet tests. The clock can't be paused — your work auto-saves and the test locks when time runs out.
          </p>
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

      <div className="card bg-slate-50">
        <h2 className="font-bold text-black">How drills & timed sets work</h2>
        <p className="mt-1 text-sm text-slate-600">
          Quick drills give you 5 questions with instant feedback after every answer — perfect for daily reps.
          Timed presets mirror the AP exam's multiple-choice section, warning you at 5 minutes and 1 minute remaining, just like test day.
        </p>
      </div>
    </div>
  );
}
