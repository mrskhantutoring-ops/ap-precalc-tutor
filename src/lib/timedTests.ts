// Timed free-response tests (teacher-assigned worksheet tests with a hard time limit).
// Questions are served as static page images so worksheets post exactly as-is.

export type TimedTestQuestion = {
  key: string; // "q1" — also the key in the submission's answers map
  label: string; // "Question 1"
  image: string; // public path to the worksheet page image
};

export type McqItem = {
  stem: string;
  choices: string[];
  answer: number; // index into choices
  hint: string;
  explanation: string;
};

export type TimedTest = {
  id: string;
  title: string;
  description: string;
  minutes: number;
  // Which part of the practice page lists this test. Default "ap"; Algebra
  // worksheets are grouped under their own "Algebra 1 worksheets" heading.
  subject?: "ap" | "algebra";
  // Soft timer (speed drills): the countdown is a target only — at 0:00 nothing
  // auto-submits or locks; the student keeps working and submits manually, and
  // the actual time used is recorded.
  softTimer?: boolean;
  // Pad-only mode: no typed answer box — the student writes all work and
  // answers on the handwriting pad under each question (e.g. Wacom users).
  // Drawings alone already count a question as answered.
  padOnly?: boolean;
  // Scheduled release: ISO timestamp. Before this moment the test is hidden
  // from the practice hub list, its page shows an "opens at" notice to
  // students, and the API refuses starts/saves. Admin preview ignores it.
  availableAt?: string;
  questions: TimedTestQuestion[];
  // Click-MCQ mode: when present (parallel to questions), the player renders
  // tappable choices with instant right/wrong feedback, a hint, and an
  // explanation per question — no typing, no writing pad. The picked letter
  // is still saved through the normal answers pipeline.
  mcq?: McqItem[];
};

import { growthDecayDrill1, growthDecayDrill2, growthDecayDrill3, growthDecayDrill4 } from "./drillMcqData";

function imageSet(testId: string, dir: string, count: number, label: string): TimedTestQuestion[] {
  return Array.from({ length: count }, (_, i) => ({
    key: `q${i + 1}`,
    label: `${label} ${i + 1}`,
    image: `/timed/${testId}/${dir}${i + 1}.png`,
  }));
}

export const TIMED_TESTS: Record<string, TimedTest> = {
  "unit1-section-1-5": {
    id: "unit1-section-1-5",
    title: "Unit 1 · Section 1.5 — Polynomial Functions & Complex Zeros",
    description:
      "10 free-response questions. You have 30 minutes. Your work auto-saves as you type and is submitted automatically when time runs out — after that the test is locked and cannot be reopened.",
    minutes: 30,
    questions: imageSet("unit1-section-1-5", "q", 10, "Question"),
  },
  "unit1b-practice-test": {
    id: "unit1b-practice-test",
    title: "Unit 1B Practice Test — Transformations, Rational Functions & Models",
    description:
      "17 free-response questions in 3 parts (one answer box per part). You have 30 minutes. Your work auto-saves as you type and is submitted automatically when time runs out — after that the test is locked and cannot be reopened.",
    minutes: 30,
    questions: [
      { key: "part1", label: "Part 1: Transformations of Functions (Q1–5)", image: "/timed/unit1b-practice-test/p1.png" },
      { key: "part2", label: "Part 2: Rational Functions & Their Properties (Q6–13)", image: "/timed/unit1b-practice-test/p2.png" },
      { key: "part3", label: "Part 3: Function Models & Applications (Q14–17)", image: "/timed/unit1b-practice-test/p3.png" },
    ],
  },
  "unit1b-practice-test-2": {
    id: "unit1b-practice-test-2",
    title: "Unit 1B Practice Test #2 — Speed Round",
    description:
      "A fresh set of 17 questions on the same Unit 1B topics, built to train speed. 3 parts (one answer box per part). You have 30 minutes. Your work auto-saves as you type and is submitted automatically when time runs out — after that the test is locked and cannot be reopened.",
    minutes: 30,
    questions: [
      { key: "part1", label: "Part 1: Transformations of Functions (Q1–5)", image: "/timed/unit1b-practice-test-2/p1.png" },
      { key: "part2", label: "Part 2: Rational Functions & Their Properties (Q6–13)", image: "/timed/unit1b-practice-test-2/p2.png" },
      { key: "part3", label: "Part 3: Function Models & Applications (Q14–17)", image: "/timed/unit1b-practice-test-2/p3.png" },
    ],
  },
  "unit1b-fixit-drill": {
    id: "unit1b-fixit-drill",
    title: "Unit 1B Fix-It Drill — Asymptotes, Even/Odd & Transformations",
    description:
      "12 questions built from the mistakes on your last test: non-vertical asymptotes and end behavior, even and odd functions, and plugging into transformed functions. 3 parts (one answer box per part). You have 20 minutes. Your work auto-saves as you type and is submitted automatically when time runs out — after that the test is locked and cannot be reopened.",
    minutes: 20,
    questions: [
      { key: "part1", label: "Part 1: Asymptotes & End Behavior (Q1–5)", image: "/timed/unit1b-fixit-drill/p1.png" },
      { key: "part2", label: "Part 2: Even & Odd Functions (Q6–9)", image: "/timed/unit1b-fixit-drill/p2.png" },
      { key: "part3", label: "Part 3: Transformations & Graphing Habits (Q10–12)", image: "/timed/unit1b-fixit-drill/p3.png" },
    ],
  },
  "quiz-1-retake": {
    id: "quiz-1-retake",
    title: "Unit 1B Quiz Retake",
    description:
      "10 free-response questions. You have 30 minutes. Your work auto-saves as you type and is submitted automatically when time runs out — after that the test is locked and cannot be reopened.",
    minutes: 30,
    questions: imageSet("quiz-1-retake", "q", 10, "Question"),
  },
  "unit2-test-1": {
    id: "unit2-test-1",
    title: "Unit 2 Test 1",
    description:
      "20 multiple-choice questions on exponential functions (Topics 2.3–2.4). Type the letter of your answer for each question and show your work on the writing pad. Quick rules: a = starting multiplier (negative flips the graph), b = growth factor (b > 1 grows, 0 < b < 1 decays), k = the floor/ceiling y = k that the curve never touches. You have 40 minutes. Your work auto-saves as you type and is submitted automatically when time runs out — after that the test is locked and cannot be reopened.",
    minutes: 40,
    questions: imageSet("unit2-test-1", "q", 20, "Question"),
  },
  "unit2-prep-exam": {
    id: "unit2-prep-exam",
    title: "Unit 2 Prep Exam",
    description:
      "20 free-response questions on Unit 2 (exponential functions, sequences, and modeling) in three parts: Part 1 Speed & Fluency, Part 2 Algebra Under Pressure, Part 3 AP-Style Reasoning & Modeling. This exam is handwritten — there is no typing box. Write ALL your work and your answers on the writing pad under each question. Rules: no calculator; give exact answers (no decimals) unless asked; and write the setup line for every problem — setup is where the AP points live. You have 40 minutes. Your work auto-saves as you write and is submitted automatically when time runs out — after that the test is locked and cannot be reopened.",
    minutes: 40,
    padOnly: true,
    questions: imageSet("unit2-prep-exam", "q", 20, "Question"),
  },
  "unit2-transformations": {
    id: "unit2-transformations",
    title: "Unit 2 — Transformations Practice",
    description:
      "12 free-response questions on transformations of exponential functions — horizontal and vertical shifts, reflections, and compressions. Show your work on the writing pad under each question and type your final answers in the box. Give exact answers. Two tools: factor the number out of x before reading a shift, and set the inside of the exponent equal to 0 and solve — that x is the horizontal shift. You have 15 minutes. Your work auto-saves as you go and is submitted automatically when time runs out — after that the test is locked and cannot be reopened.",
    minutes: 15,
    // Faryal's release: hidden from students until Sun 2026-10-18 2:00 PM CDT.
    availableAt: "2026-10-18T19:00:00.000Z",
    questions: imageSet("unit2-transformations", "q", 12, "Question"),
  },
  "unit2-graphing-samebase": {
    id: "unit2-graphing-samebase",
    title: "Unit 2 — Graphing & Same-Base Drill",
    description:
      "10 questions in three parts, built for the Exponential Function Quiz. Part A (Q1–4): sketch the graph of each exponential function on the writing pad — mark the horizontal asymptote and both intercepts — and type the characteristics in the box: HA, domain, range, increasing or decreasing, concavity, and both end-behavior limits. Part B (Q5–8): solve each equation by rewriting with the same base — show the rewrite line on the pad and type the solution in the box. Part C (Q9–10): modeling — write the equation from a table, and work a cooling model. Give exact answers. You have 25 minutes. Your work auto-saves as you go and is submitted automatically when time runs out — after that the test is locked and cannot be reopened.",
    minutes: 25,
    questions: imageSet("unit2-graphing-samebase", "q", 10, "Question"),
  },
  "exp-challenge": {
    id: "exp-challenge",
    title: "Exponential Functions — Challenge Worksheet",
    description:
      "20 free-response questions on exponential functions and equations (Unit 2): common-base rewrites, exponential equations, tables, writing equations, and one application problem. Show ALL your work on the writing pad under each question and type your final answer in the box. Give exact answers unless a decimal is requested. You have 60 minutes. Your work auto-saves and is submitted automatically when time runs out — after that the test is locked and cannot be reopened.",
    minutes: 60,
    questions: imageSet("exp-challenge", "q", 20, "Question"),
  },
  "unit2-log-manipulation": {
    id: "unit2-log-manipulation",
    title: "Unit 2 — Logarithmic Function Manipulation",
    description:
      "36 free-response questions from the Logarithmic Function Manipulation worksheet. Ex 1 (Q1–10): write each expression as a single logarithm. Ex 2 (Q11–24): expand each logarithm. Ex 3 (Q25–30): evaluate without a calculator. Ex 4 (Q31–36): use the change-of-base formula — for Q34–36 the log-ratio form counts, a decimal approx is welcome. Show your work on the writing pad under each question and type your final answer in the box. Give exact answers. You have 55 minutes. Your work auto-saves as you go and is submitted automatically when time runs out — after that the test is locked and cannot be reopened.",
    minutes: 55,
    questions: [
      { key: "q1", label: "Ex 1a — Write each logarithmic expression as a single logarithm", image: "/timed/unit2-log-manipulation/q1.png" },
      { key: "q2", label: "Ex 1b — Write as a single logarithm", image: "/timed/unit2-log-manipulation/q2.png" },
      { key: "q3", label: "Ex 1c — Write as a single logarithm", image: "/timed/unit2-log-manipulation/q3.png" },
      { key: "q4", label: "Ex 1d — Write as a single logarithm", image: "/timed/unit2-log-manipulation/q4.png" },
      { key: "q5", label: "Ex 1e — Write as a single logarithm", image: "/timed/unit2-log-manipulation/q5.png" },
      { key: "q6", label: "Ex 1f — Write as a single logarithm", image: "/timed/unit2-log-manipulation/q6.png" },
      { key: "q7", label: "Ex 1g — Write as a single logarithm", image: "/timed/unit2-log-manipulation/q7.png" },
      { key: "q8", label: "Ex 1h — Write as a single logarithm", image: "/timed/unit2-log-manipulation/q8.png" },
      { key: "q9", label: "Ex 1i — Write as a single logarithm", image: "/timed/unit2-log-manipulation/q9.png" },
      { key: "q10", label: "Ex 1j — Write as a single logarithm", image: "/timed/unit2-log-manipulation/q10.png" },
      { key: "q11", label: "Ex 2a — Expand each logarithm", image: "/timed/unit2-log-manipulation/q11.png" },
      { key: "q12", label: "Ex 2b — Expand", image: "/timed/unit2-log-manipulation/q12.png" },
      { key: "q13", label: "Ex 2c — Expand", image: "/timed/unit2-log-manipulation/q13.png" },
      { key: "q14", label: "Ex 2d — Expand", image: "/timed/unit2-log-manipulation/q14.png" },
      { key: "q15", label: "Ex 2e — Expand", image: "/timed/unit2-log-manipulation/q15.png" },
      { key: "q16", label: "Ex 2f — Expand", image: "/timed/unit2-log-manipulation/q16.png" },
      { key: "q17", label: "Ex 2g — Expand", image: "/timed/unit2-log-manipulation/q17.png" },
      { key: "q18", label: "Ex 2h — Expand", image: "/timed/unit2-log-manipulation/q18.png" },
      { key: "q19", label: "Ex 2i — Expand", image: "/timed/unit2-log-manipulation/q19.png" },
      { key: "q20", label: "Ex 2j — Expand", image: "/timed/unit2-log-manipulation/q20.png" },
      { key: "q21", label: "Ex 2k — Expand", image: "/timed/unit2-log-manipulation/q21.png" },
      { key: "q22", label: "Ex 2l — Expand", image: "/timed/unit2-log-manipulation/q22.png" },
      { key: "q23", label: "Ex 2m — Expand", image: "/timed/unit2-log-manipulation/q23.png" },
      { key: "q24", label: "Ex 2n — Expand", image: "/timed/unit2-log-manipulation/q24.png" },
      { key: "q25", label: "Ex 3.1 — Evaluate each logarithm without a calculator", image: "/timed/unit2-log-manipulation/q25.png" },
      { key: "q26", label: "Ex 3.2 — Evaluate (no calculator)", image: "/timed/unit2-log-manipulation/q26.png" },
      { key: "q27", label: "Ex 3.3 — Evaluate (no calculator)", image: "/timed/unit2-log-manipulation/q27.png" },
      { key: "q28", label: "Ex 3.4 — Evaluate (no calculator)", image: "/timed/unit2-log-manipulation/q28.png" },
      { key: "q29", label: "Ex 3.5 — Evaluate (no calculator)", image: "/timed/unit2-log-manipulation/q29.png" },
      { key: "q30", label: "Ex 3.6 — Evaluate (no calculator)", image: "/timed/unit2-log-manipulation/q30.png" },
      { key: "q31", label: "Ex 4.1 — Use the change-of-base formula to rewrite", image: "/timed/unit2-log-manipulation/q31.png" },
      { key: "q32", label: "Ex 4.2 — Use the change-of-base formula to rewrite", image: "/timed/unit2-log-manipulation/q32.png" },
      { key: "q33", label: "Ex 4.3 — Use the change-of-base formula to rewrite", image: "/timed/unit2-log-manipulation/q33.png" },
      { key: "q34", label: "Ex 4.4 — Use the change-of-base formula to evaluate", image: "/timed/unit2-log-manipulation/q34.png" },
      { key: "q35", label: "Ex 4.5 — Use the change-of-base formula to evaluate", image: "/timed/unit2-log-manipulation/q35.png" },
      { key: "q36", label: "Ex 4.6 — Use the change-of-base formula to evaluate", image: "/timed/unit2-log-manipulation/q36.png" },
    ],
  },
  "unit2-composition-functions": {
    id: "unit2-composition-functions",
    title: "Unit 2 — Composition of Functions Quiz",
    description:
      "10 free-response questions on composition of functions (Topic 2.7). Evaluate the inside function first, then use that output as the input to the outside function — order matters. Show your work on the writing pad under each question and type your final answer in the box. You have 15 minutes. Your work auto-saves as you go and is submitted automatically when time runs out — after that the test is locked and cannot be reopened.",
    minutes: 15,
    questions: [
      { key: "q1", label: "Question 1 — Find f(g(2))", image: "/timed/unit2-composition-functions/q1.png" },
      { key: "q2", label: "Question 2 — Find g(f(2))", image: "/timed/unit2-composition-functions/q2.png" },
      { key: "q3", label: "Question 3 — Find f(g(x)), simplified", image: "/timed/unit2-composition-functions/q3.png" },
      { key: "q4", label: "Question 4 — Find (g ∘ f)(x), simplified", image: "/timed/unit2-composition-functions/q4.png" },
      { key: "q5", label: "Question 5 — Find (h ∘ k)(2)", image: "/timed/unit2-composition-functions/q5.png" },
      { key: "q6", label: "Question 6 — Find (k ∘ h)(2)", image: "/timed/unit2-composition-functions/q6.png" },
      { key: "q7", label: "Question 7 — Find (p ∘ q)(1) from the table", image: "/timed/unit2-composition-functions/q7.png" },
      { key: "q8", label: "Question 8 — Find (q ∘ p)(0) from the table", image: "/timed/unit2-composition-functions/q8.png" },
      { key: "q9", label: "Question 9 — Write an equation for m(x)", image: "/timed/unit2-composition-functions/q9.png" },
      { key: "q10", label: "Question 10 — Find (f ∘ m)(3)", image: "/timed/unit2-composition-functions/q10.png" },
    ],
  },
  "unit2-log-equations": {
    id: "unit2-log-equations",
    title: "Unit 2 — Solving Logarithmic Equations",
    description:
      "18 free-response questions on solving logarithmic equations: combining logs, single-log quadratics, natural logs, same-base both sides, log = constant − log, difference of logs, quadratics in log x, and nested logs. Check every candidate against the original arguments — some quadratic roots are extraneous. Give exact answers (e-form and fractions where they arise). Show your work on the writing pad under each question and type your final answer in the box. You have 40 minutes. Your work auto-saves as you go and is submitted automatically when time runs out — after that the test is locked and cannot be reopened.",
    minutes: 40,
    questions: [
      { key: "q1", label: "Question 1 — Solve log₂(x) + log₂(x − 2) = 3", image: "/timed/unit2-log-equations/q1.png" },
      { key: "q2", label: "Question 2 — Solve log₃(x) + log₃(x + 6) = 3", image: "/timed/unit2-log-equations/q2.png" },
      { key: "q3", label: "Question 3 — Solve log₅(x² + 2x + 10) = 2", image: "/timed/unit2-log-equations/q3.png" },
      { key: "q4", label: "Question 4 — Solve log₃(x² − 4x + 12) = 2", image: "/timed/unit2-log-equations/q4.png" },
      { key: "q5", label: "Question 5 — Solve ln(2x + 1) = 3", image: "/timed/unit2-log-equations/q5.png" },
      { key: "q6", label: "Question 6 — Solve ln(4x − 3) = 2", image: "/timed/unit2-log-equations/q6.png" },
      { key: "q7", label: "Question 7 — Solve log₅(3x + 1) = log₅(2x + 9)", image: "/timed/unit2-log-equations/q7.png" },
      { key: "q8", label: "Question 8 — Solve log₂(4x − 5) = log₂(x + 7)", image: "/timed/unit2-log-equations/q8.png" },
      { key: "q9", label: "Question 9 — Solve log₂(x + 1) = 3 − log₂(x + 3)", image: "/timed/unit2-log-equations/q9.png" },
      { key: "q10", label: "Question 10 — Solve log₄(x + 2) = 2 − log₄(x + 2)", image: "/timed/unit2-log-equations/q10.png" },
      { key: "q11", label: "Question 11 — Solve log₂(3x + 1) − log₂(x − 1) = 2", image: "/timed/unit2-log-equations/q11.png" },
      { key: "q12", label: "Question 12 — Solve log₄(x + 9) = 2 + log₄(x − 3)", image: "/timed/unit2-log-equations/q12.png" },
      { key: "q13", label: "Question 13 — Solve (log x)² = 36", image: "/timed/unit2-log-equations/q13.png" },
      { key: "q14", label: "Question 14 — Solve (log₂ x)² = 25", image: "/timed/unit2-log-equations/q14.png" },
      { key: "q15", label: "Question 15 — Solve log(x³) = (log x)²", image: "/timed/unit2-log-equations/q15.png" },
      { key: "q16", label: "Question 16 — Solve log₂(x²) = (log₂ x)²", image: "/timed/unit2-log-equations/q16.png" },
      { key: "q17", label: "Question 17 — Solve log₂(log₃ x) = 2", image: "/timed/unit2-log-equations/q17.png" },
      { key: "q18", label: "Question 18 — Solve log₂(log₂ x) = 3", image: "/timed/unit2-log-equations/q18.png" },
    ],
  },
  "unit2-log-functions-part1": {
    id: "unit2-log-functions-part1",
    title: "Unit 2 — Logarithmic Functions, Part 1 (Written)",
    description:
      "25 free-response questions on logarithmic functions (Topics 2.10 and 2.11): log tables and patterns, end behavior, domain and range, transformations, inverses, equations, and applications. Show your work on the writing pad under each question and type your final answer in the box — sketch graphs on the pad for the Section D questions. You have 60 minutes. Your work auto-saves as you go and is submitted automatically when time runs out — after that the test is locked and cannot be reopened.",
    minutes: 60,
    questions: imageSet("unit2-log-functions-part1", "q", 25, "Question"),
  },
  "unit2-log-functions-part2-sprint": {
    id: "unit2-log-functions-part2-sprint",
    title: "Unit 2 — Logarithmic Functions, Part 2 — Sprint (Multiple-Select)",
    description:
      "20 multiple-select questions on logarithmic functions (Topics 2.10 and 2.11) — choose ALL correct options for each question. Type ALL correct letters in the box (for example: A, B, D). You have 20 minutes. Your work auto-saves as you go and is submitted automatically when time runs out — after that the test is locked and cannot be reopened.",
    minutes: 20,
    questions: imageSet("unit2-log-functions-part2-sprint", "q", 20, "Question"),
  },
  "log-warmup-oct30": {
    id: "log-warmup-oct30",
    title: "Log Warm Up — Oct 30",
    description:
      "26 free-response warm-up questions on logarithms: convert each logarithmic equation to exponential form and find the missing value, then three applications — sound intensity in decibels, earthquake magnitude, and pH — followed by logarithm-to-exponential form (Q7–12), exponential-to-logarithmic form (Q13–18), and logarithm evaluation (Q19–26). Show your work on the writing pad under each question and type your final answer in the box. You have 20 minutes. Your work auto-saves as you go and is submitted automatically when time runs out — after that the test is locked and cannot be reopened.",
    minutes: 20,
    questions: imageSet("log-warmup-oct30", "q", 26, "Question"),
  },
  "growth-decay-drill-1": {
    id: "growth-decay-drill-1",
    title: "Growth / Decay Drill — Set 1",
    description:
      "Speed drill: 10 multiple-choice questions on growth, decay, increasing/decreasing, and concavity. Rules: type comes from a and b; concavity comes from the sign of a only; a negative a is NEITHER growth nor decay — and clean up the exponent first (3^(−x) is (1/3)^x). Click the correct answer — you get instant feedback on every question, plus a hint if you want one and an explanation once you answer. No writing needed. Target time is 10 minutes, but the timer will NOT lock or auto-submit — keep going if you need to and press Submit when you're done. Your actual time is recorded.",
    minutes: 10,
    softTimer: true,
    questions: imageSet("growth-decay-drill-1", "q", 10, "Question"),
    mcq: growthDecayDrill1,
  },
  "growth-decay-drill-2": {
    id: "growth-decay-drill-2",
    title: "Growth / Decay Drill — Set 2",
    description:
      "Speed drill, second set: 10 fresh multiple-choice questions on growth, decay, increasing/decreasing, and concavity — same rules as Set 1 (type from a and b, concavity from the sign of a only, negative a is NEITHER, clean up the exponent first). Click the correct answer — you get instant feedback on every question, plus a hint if you want one and an explanation once you answer. No writing needed. Target time is 10 minutes, but the timer will NOT lock or auto-submit — keep going if you need to and press Submit when you're done. Your actual time is recorded.",
    minutes: 10,
    softTimer: true,
    questions: imageSet("growth-decay-drill-2", "q", 10, "Question"),
    mcq: growthDecayDrill2,
  },
  "growth-decay-drill-3": {
    id: "growth-decay-drill-3",
    title: "Growth / Decay Drill — Set 3 (Asymptote & Range)",
    description:
      "Speed drill, third set: 22 multiple-choice questions on horizontal asymptotes, range, and end behavior of exponential functions — including negative-a functions (the range can run DOWNWARD from the asymptote), shifts, comparing two functions' directions, reading the trend from f(0) and f(1), and describing how a function behaves as x grows large in either direction, with extra practice on negative-a end behavior. Click the correct answer — you get instant feedback on every question, plus a hint if you want one and an explanation once you answer. No writing needed. Target time is 10 minutes, but the timer will NOT lock or auto-submit — keep going if you need to and press Submit when you're done. Your actual time is recorded.",
    minutes: 10,
    softTimer: true,
    questions: imageSet("growth-decay-drill-3", "q", 22, "Question"),
    mcq: growthDecayDrill3,
  },
  "growth-decay-drill-4": {
    id: "growth-decay-drill-4",
    title: "Growth / Decay Drill — Set 4 (Negative a)",
    description:
      "Speed drill, fourth set: 15 multiple-choice questions built entirely on the negative-a cases — the ones that flip every shortcut. With a < 0 the type is NEITHER growth nor decay, the direction reverses, the range can run DOWNWARD from the asymptote, and the dive to −∞ can hide at either end. Plus exponent clean-ups with a negative a, reading direction from f(0) and f(1), and one context question. Click the correct answer — you get instant feedback on every question, plus a hint if you want one and an explanation once you answer. No writing needed. Target time is 10 minutes, but the timer will NOT lock or auto-submit — keep going if you need to and press Submit when you're done. Your actual time is recorded.",
    minutes: 10,
    softTimer: true,
    questions: imageSet("growth-decay-drill-4", "q", 15, "Question"),
    mcq: growthDecayDrill4,
  },
};

export function timedTestById(id: string): TimedTest | null {
  return TIMED_TESTS[id] ?? null;
}

export function timedTestList(): TimedTest[] {
  const now = Date.now();
  return Object.values(TIMED_TESTS).filter(
    (t) => !t.availableAt || new Date(t.availableAt).getTime() <= now
  );
}

export function isTestReleased(test: TimedTest): boolean {
  return !test.availableAt || new Date(test.availableAt).getTime() <= Date.now();
}
