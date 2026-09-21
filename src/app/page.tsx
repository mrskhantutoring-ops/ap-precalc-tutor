import Link from "next/link";
import { site, UNITS, sectionsByUnit } from "@/lib/site";

const faqs = [
  {
    q: "How is AP Precalculus different from regular precalculus?",
    a: "AP Precalculus follows the College Board framework and ends with a standardized AP exam in May: 42 multiple-choice questions (29 no-calculator, 13 calculator-active) plus 4 free-response questions. The pacing and question style are specific — we train you on exactly that format.",
  },
  {
    q: "Which units does the practice cover?",
    a: "All four: Unit 1 (Polynomial & Rational Functions), Unit 2 (Exponential & Logarithmic Functions), Unit 3 (Trigonometric & Polar Functions), and Unit 4 (Parameters, Vectors & Matrices). The AP exam tests Units 1–3; Unit 4 is course material we cover for class grades.",
  },
  {
    q: "How do the practice drills work?",
    a: "Pick a unit and start a drill: 5 questions, one click per answer, instant feedback with a step-by-step explanation after every question. Your score and every attempt are tracked on your dashboard. Timed sets mirror the AP multiple-choice section when you want exam-day pressure.",
  },
  {
    q: "How do I get access?",
    a: "This site is for enrolled Pro Minds students. Create an account, then contact us — once your enrollment is confirmed, your practice sets unlock and every attempt is tracked on your dashboard.",
  },
  {
    q: "Do you offer 1-on-1 tutoring too?",
    a: "Yes — all sessions are online with a shared whiteboard, and you'll get practice sets from this site between sessions.",
  },
];

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero */}
      <section className="hero-pattern relative left-1/2 -mt-8 w-screen -translate-x-1/2 px-4 py-16 text-center sm:py-20">
        <div className="mx-auto max-w-6xl">
        <span className="inline-block rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-[#1a46b0]">
          For enrolled Pro Minds students
        </span>
        <h1 className="mx-auto mt-5 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl">
          Master the functions. Ace the exam.
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
          {site.tagline} Train on College Board-style questions with instant explanations for every problem.
        </p>
        <div className="mt-8">
          <a
            href="#units"
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-lg font-bold text-[#1a46b0] transition hover:bg-slate-100"
          >
            Start practicing <span aria-hidden>→</span>
          </a>
        </div>
        <div className="mx-auto mt-10 max-w-2xl rounded-2xl bg-white p-6 text-left">
          <ul className="space-y-2.5 text-slate-700">
            <li>✅ <strong>79 original questions</strong> across all 4 AP Precalculus units</li>
            <li>✅ <strong>Instant explanations</strong> after every single question</li>
            <li>✅ <strong>Timed exam sets</strong> that mirror the real AP pacing</li>
          </ul>
        </div>
        </div>
      </section>

      {/* Units */}
      <section id="units" className="scroll-mt-24 space-y-6">
        <h2 className="text-center text-4xl font-extrabold tracking-tight">Choose a unit</h2>
        <p className="mx-auto max-w-2xl text-center text-slate-600">
          Five-question drills with instant feedback. Pick a unit below — no setup, just start.
        </p>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {UNITS.map((s) => (
            <div
              key={s.id}
              className="unit-card flex flex-col"
              style={{ backgroundColor: s.tint.bg, borderColor: s.tint.border }}
            >
              <div className="unit-chip" style={{ backgroundColor: s.tint.chipBg, color: s.tint.chipText }}>
                <span aria-hidden>{s.icon}</span>
              </div>
              <p className="mt-5 text-4xl font-extrabold text-black">{s.count}+</p>
              <h3 className="mt-1 text-xl font-bold text-black">{s.short}</h3>
              <p className="mt-1 text-sm text-slate-600">{s.blurb}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {sectionsByUnit(s.id).slice(0, 3).map((sec) => (
                  <span key={sec.id} className="rounded-full bg-white/70 px-2.5 py-0.5 text-xs font-medium text-slate-600">
                    {sec.id} | {sec.title}
                  </span>
                ))}
              </div>
              <div className="mt-auto pt-6">
                <Link href={`/practice/${s.id}`} className="btn-primary w-full">
                  Practice {s.short} <span className="btn-arrow" aria-hidden>↗</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Exam format */}
      <section className="space-y-6">
        <h2 className="text-center text-4xl font-extrabold tracking-tight">The AP Precalculus exam, at a glance</h2>
        <div className="grid gap-5 md:grid-cols-2">
          <div className="card">
            <h3 className="font-bold text-black">Section I: Multiple Choice</h3>
            <p className="mt-2 text-sm text-slate-600">
              42 questions across two parts — 29 without a graphing calculator (65 min) and 13 with one (40 min).
              Worth 62.5% of your exam score. Our timed sets train the no-calculator fluency this section demands.
            </p>
          </div>
          <div className="card">
            <h3 className="font-bold text-black">Section II: Free Response</h3>
            <p className="mt-2 text-sm text-slate-600">
              4 questions, each in three parts, testing modeling, multiple representations, and precise communication.
              We drill these skills in 1-on-1 sessions with AP-style rubrics.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="space-y-6">
        <h2 className="text-center text-4xl font-extrabold tracking-tight">How enrollment works</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ["1. Free intro call", "We talk goals, check where you are in the course, and map your timeline to the May exam — no pressure, no charge."],
            ["2. Create your account", "Sign up on this site. Once your enrollment is confirmed, your practice sets unlock."],
            ["3. Practice + 1-on-1s", "Quick drills between sessions, and progress you can watch on your dashboard."],
          ].map(([title, body]) => (
            <div key={title} className="card">
              <h3 className="font-bold text-black">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="space-y-6">
        <div className="flex items-end justify-between">
          <h2 className="text-4xl font-extrabold tracking-tight">Tutoring</h2>
          <span className="text-sm text-slate-500">First intro call is free</span>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {site.pricing.map((p) => (
            <div key={p.name} className={`card flex flex-col ${p.featured ? "!border-black border-2" : ""}`}>
              {p.featured && (
                <span className="mb-2 w-fit rounded-full bg-black px-3 py-1 text-xs font-bold text-white">MOST POPULAR</span>
              )}
              <h3 className="text-lg font-bold">{p.name}</h3>
              <p className="mt-1 text-3xl font-extrabold text-black">{p.price}</p>
              <ul className="mt-4 flex-1 space-y-2 text-sm text-slate-600">
                {p.features.map((f) => (
                  <li key={f}>✓ {f}</li>
                ))}
              </ul>
              <Link href="/contact" className="btn-primary mt-6 w-full">
                Book now
              </Link>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-slate-500">
          Practice-site access is included with enrollment — <Link href="/contact" className="text-black underline">contact {site.tutorName}</Link> for current rates and package deals.
        </p>
      </section>

      {/* FAQ */}
      <section className="space-y-6">
        <h2 className="text-center text-4xl font-extrabold tracking-tight">Questions, answered</h2>
        <div className="mx-auto max-w-3xl space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="card !p-5">
              <summary className="cursor-pointer font-semibold">{f.q}</summary>
              <p className="mt-2 text-sm text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-2xl bg-black px-6 py-14 text-center text-white">
        <h2 className="text-3xl font-extrabold">Ready when you are.</h2>
        <p className="mx-auto mt-2 max-w-xl text-slate-300">
          Enroll now to unlock AP-style practice, or book a free intro call and get a plan built around the May exam.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link href="/signup" className="btn-secondary !border-white/20">
            Enroll now
          </Link>
          <Link href="/contact" className="rounded-full bg-white px-6 py-3 font-semibold text-black hover:bg-slate-100">
            Book free intro call
          </Link>
        </div>
      </section>
    </div>
  );
}
