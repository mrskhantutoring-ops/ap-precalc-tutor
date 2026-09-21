import Link from "next/link";
import { SUBJECTS } from "@/lib/site";
import { timedTestList } from "@/lib/timedTests";
import PaidGate from "@/components/PaidGate";

const timedTests = timedTestList();

export default function PracticeHub() {
  return (
    <PaidGate>
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight">Practice</h1>
          <p className="mx-auto mt-2 max-w-2xl text-slate-600">
            College Board-style AP Precalculus drills with instant explanations. Every attempt is saved to your dashboard.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {SUBJECTS.map((s) => (
            <div
              key={s.id}
              className="unit-card flex flex-col !min-h-0"
              style={{ backgroundColor: s.tint.bg, borderColor: s.tint.border }}
            >
              <div className="unit-chip" style={{ backgroundColor: s.tint.chipBg, color: s.tint.chipText }}>
                <span aria-hidden>{s.icon}</span>
              </div>
              <h2 className="mt-4 text-xl font-bold text-black">{s.name}</h2>
              <p className="mt-1 text-sm text-slate-600">{s.blurb}</p>
              <div className="mt-auto pt-6">
                <Link href={`/practice/${s.id}`} className="btn-primary w-full">
                  Start {s.short} drills <span className="btn-arrow" aria-hidden>↗</span>
                </Link>
              </div>
            </div>
          ))}
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
    </PaidGate>
  );
}
