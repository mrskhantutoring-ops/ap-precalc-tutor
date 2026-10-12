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
  // Soft timer (speed drills): the countdown is a target only — at 0:00 nothing
  // auto-submits or locks; the student keeps working and submits manually, and
  // the actual time used is recorded.
  softTimer?: boolean;
  questions: TimedTestQuestion[];
  // Click-MCQ mode: when present (parallel to questions), the player renders
  // tappable choices with instant right/wrong feedback, a hint, and an
  // explanation per question — no typing, no writing pad. The picked letter
  // is still saved through the normal answers pipeline.
  mcq?: McqItem[];
};

import { growthDecayDrill1, growthDecayDrill2, growthDecayDrill3 } from "./drillMcqData";

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
  "exp-challenge": {
    id: "exp-challenge",
    title: "Exponential Functions — Challenge Worksheet",
    description:
      "20 free-response questions on exponential functions and equations (Unit 2): common-base rewrites, exponential equations, tables, writing equations, and one application problem. Show ALL your work on the writing pad under each question and type your final answer in the box. Give exact answers unless a decimal is requested. You have 60 minutes. Your work auto-saves and is submitted automatically when time runs out — after that the test is locked and cannot be reopened.",
    minutes: 60,
    questions: imageSet("exp-challenge", "q", 20, "Question"),
  },
  "alg1-sequences": {
    id: "alg1-sequences",
    title: "Algebra 1 — Arithmetic & Geometric Sequences (Day 1)",
    description:
      "16 questions on arithmetic and geometric sequences: finding terms from a rule, recursive and explicit formulas, identifying sequence types, error analysis, and applications. Show your work on the writing pad under each question and type your final answers in the box. You have 30 minutes. Your work auto-saves and is submitted automatically when time runs out — after that the test is locked and cannot be reopened.",
    minutes: 30,
    questions: imageSet("alg1-sequences", "q", 16, "Question"),
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
};

export function timedTestById(id: string): TimedTest | null {
  return TIMED_TESTS[id] ?? null;
}

export function timedTestList(): TimedTest[] {
  return Object.values(TIMED_TESTS);
}
