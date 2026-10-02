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
};

export function timedTestById(id: string): TimedTest | null {
  return TIMED_TESTS[id] ?? null;
}

export function timedTestList(): TimedTest[] {
  return Object.values(TIMED_TESTS);
}
