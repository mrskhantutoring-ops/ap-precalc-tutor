import Link from "next/link";
import { site, UNITS } from "@/lib/site";

const faqs = [
  {
    q: "How is AP Precalculus different from regular precalculus?",
    a: "AP Precalculus follows the College Board framework and ends with a standardized AP exam in May: 42 multiple-choice questions (29 no-calculator, 13 calculator-active) plus 4 free-response questions. The pacing and question style are specific — we train you on exactly that format.",
  },
  {
    q: "Which units does the practice cover?",
    a: "Right now: Unit 1 (Polynomial & Rational Functions) and Unit 2 (Exponential & Logarithmic Functions) — the two biggest units on the exam. Unit 3 (Trigonometric & Polar Functions) is coming next.",
  },
  {
    q: "Is the practice timed like the real exam?",
    a: "Yes. Timed sets mirror the AP multiple-choice section with no-calculator pacing, 5-minute and 1-minute warnings, and instant step-by-step explanations after every question.",
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
      <section className="grid items-center gap-10 pt-6 md:grid-cols-2">
        <div className="space-y-6">
          <span className="inline-block rounded-full bg-brand-50 px-4 py-1.5 text-sm font-semibold text-brand-700">
            AP Precalculus · 2026–27 exam prep
          </span>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            Master the functions. <span className="text-brand-600">Ace the exam.</span>
          </h1>
          <p className="text-lg text-slate-600">{site.tagline} Train on College Board-style questions, timed like the real AP exam, with instant explanations for every problem.</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/signup" className="btn-primary">
              Enroll now
            </Link>
            <Link href="/contact" className="btn-secondary">
              Book a free intro call
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-4 pt-2 text-center">
            {[
              ["40+", "AP-style questions"],
              ["2 units", "Full coverage"],
              ["1-on-1", "Personal coaching"],
            ].map(([big, small]) => (
              <div key={small} className="card !p-4">
                <p className="text-2xl font-extrabold text-brand-700">{big}</p>
                <p className="text-xs text-slate-500">{small}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="card space-y-4 bg-gradient-to-br from-brand-50 to-white">
          <h2 className="text-xl font-bold">Why students lose points — and how we fix it</h2>
          <ul className="space-y-3 text-slate-600">
            <li>⏱️ <strong>Pacing:</strong> timed MCQ sets that mirror the real exam, so the clock stops being the enemy.</li>
            <li>🎯 <strong>Weak spots:</strong> every attempt is tracked by topic — we drill your lowest domains first.</li>
            <li>📝 <strong>Explanations:</strong> instant, step-by-step walkthroughs for every question.</li>
            <li>🧠 <strong>AP style:</strong> no-calculator fluency, function notation, and modeling questions the way the exam asks them.</li>
          </ul>
          <Link href="/practice" className="btn-primary w-full">
            Start practicing →
          </Link>
        </div>
      </section>

      {/* Units */}
      <section className="space-y-6">
        <h2 className="text-3xl font-extrabold tracking-tight">Practice built for the AP exam</h2>
        <div className="grid gap-5 sm:grid-cols-2">
          {UNITS.map((s) => (
            <Link key={s.id} href={`/practice/${s.id}`} className="card transition hover:-translate-y-0.5 hover:shadow-md">
              <h3 className="text-xl font-bold text-brand-700">{s.name}</h3>
              <p className="mt-1 text-sm text-slate-500">{s.blurb}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {s.domains.map((d) => (
                  <span key={d} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                    {d}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Exam format */}
      <section className="space-y-6">
        <h2 className="text-3xl font-extrabold tracking-tight">The AP Precalculus exam, at a glance</h2>
        <div className="grid gap-5 md:grid-cols-2">
          <div className="card">
            <h3 className="font-bold text-brand-700">Section I: Multiple Choice</h3>
            <p className="mt-2 text-sm text-slate-600">
              42 questions across two parts — 29 without a graphing calculator (65 min) and 13 with one (40 min).
              Worth 62.5% of your exam score. Our timed sets train the no-calculator fluency this section demands.
            </p>
          </div>
          <div className="card">
            <h3 className="font-bold text-brand-700">Section II: Free Response</h3>
            <p className="mt-2 text-sm text-slate-600">
              4 questions, each in three parts, testing modeling, multiple representations, and precise communication.
              We drill these skills in 1-on-1 sessions with AP-style rubrics.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="space-y-6">
        <h2 className="text-3xl font-extrabold tracking-tight">How enrollment works</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ["1. Free intro call", "We talk goals, check where you are in the course, and map your timeline to the May exam — no pressure, no charge."],
            ["2. Create your account", "Sign up on this site. Once your enrollment is confirmed, your practice sets unlock."],
            ["3. Practice + 1-on-1s", "Timed sets between sessions, and progress you can watch on your dashboard."],
          ].map(([title, body]) => (
            <div key={title} className="card">
              <h3 className="font-bold text-brand-700">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="space-y-6">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight">Tutoring</h2>
          <span className="text-sm text-slate-500">First intro call is free</span>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {site.pricing.map((p) => (
            <div key={p.name} className={`card flex flex-col ${p.featured ? "border-2 border-brand-500" : ""}`}>
              {p.featured && (
                <span className="mb-2 w-fit rounded-full bg-brand-600 px-3 py-1 text-xs font-bold text-white">MOST POPULAR</span>
              )}
              <h3 className="text-lg font-bold">{p.name}</h3>
              <p className="mt-1 text-3xl font-extrabold text-brand-700">{p.price}</p>
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
          Practice-site access is included with enrollment — <Link href="/contact" className="text-brand-600 underline">contact {site.tutorName}</Link> for current rates and package deals.
        </p>
      </section>

      {/* FAQ */}
      <section className="space-y-6">
        <h2 className="text-3xl font-extrabold tracking-tight">Questions, answered</h2>
        <div className="space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="card !p-5">
              <summary className="cursor-pointer font-semibold">{f.q}</summary>
              <p className="mt-2 text-sm text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="card bg-brand-900 !border-brand-900 text-center text-white">
        <h2 className="text-3xl font-extrabold">Ready when you are.</h2>
        <p className="mx-auto mt-2 max-w-xl text-brand-100">
          Enroll now to unlock AP-style practice, or book a free intro call and get a plan built around the May exam.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link href="/signup" className="btn-secondary !border-white/20 !bg-white !text-brand-900">
            Enroll now
          </Link>
          <Link href="/contact" className="rounded-xl bg-white px-5 py-3 font-semibold text-brand-900 hover:bg-brand-50">
            Book free intro call
          </Link>
        </div>
      </section>
    </div>
  );
}
