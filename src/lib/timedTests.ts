// Timed free-response tests (teacher-assigned worksheet tests with a hard time limit).
// Questions are served as static page images so worksheets post exactly as-is.

export type TimedTestQuestion = {
  key: string; // "q1" — also the key in the submission's answers map
  label: string; // "Question 1"
  image: string; // public path to the worksheet page image
};

export type TimedTest = {
  id: string;
  title: string;
  description: string;
  minutes: number;
  questions: TimedTestQuestion[];
};

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
};

export function timedTestById(id: string): TimedTest | null {
  return TIMED_TESTS[id] ?? null;
}

export function timedTestList(): TimedTest[] {
  return Object.values(TIMED_TESTS);
}
