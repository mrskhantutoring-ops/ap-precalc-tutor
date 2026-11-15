// Click-MCQ data for the Exponential & Logarithmic Equations Quiz — Nov 16, 2026:
// the 12 questions of Faryal's NotebookLM "Exponential and Logarithmic
// Equations Mastery" quiz (notebook created 2026-11-15), copied verbatim.
// Every answer — correct options and every distractor — was independently
// verified by hand and by numeric substitution
// (~/workspace/notebooklm-exp-log-quiz-nov16/verify.py, all pass).
// Four questions are select-all-that-apply (Q3, Q5, Q8, Q12): those carry
// `answers` (the full set of correct indices); `answer` is the first of
// them, kept so the single-answer code paths keep working.
// Note for the teacher: in the NotebookLM quiz itself she answered Q4 wrong
// (chose "There are no real solutions" — correct is x = 7 only) and Q3
// partially (the formula, missing the domain option).
import type { McqItem } from "./timedTests";

export const expLogQuizNov16: McqItem[] = [
  {
    "stem": "Solve the exponential equation e²ˣ − 6eˣ + 8 = 0 for all real values of x.",
    "choices": [
      "x = 2 or x = 4",
      "x = ln(2) or x = ln(4)",
      "x = e² or x = e⁴",
      "x = ln(6) or x = ln(8)"
    ],
    "answer": 1,
    "hint": "Let y = eˣ and solve the quadratic in y first — then take the log.",
    "explanation": "Let y = eˣ. Then y² − 6y + 8 = 0, (y − 2)(y − 4) = 0, so eˣ = 2 or eˣ = 4, giving x = ln 2 or x = ln 4. (x = 2 or x = 4 is the value of eˣ, not x.)"
  },
  {
    "stem": "Which of the following represents the exact real solution x to the exponential equation 3ˣ⁺¹ = 5²ˣ⁻¹?",
    "choices": [
      "x = (ln(3) + ln(5)) / (ln(5) − ln(3))",
      "x = (ln(3) + ln(5)) / (2 ln(5) − ln(3))",
      "x = ln(15) / (ln(5) − ln(3))",
      "x = (ln(5) − ln(3)) / (2 ln(5) + ln(3))"
    ],
    "answer": 1,
    "hint": "Take the natural log of both sides, then collect the x terms on one side.",
    "explanation": "(x + 1) ln 3 = (2x − 1) ln 5. Expanding: x ln 3 + ln 3 = 2x ln 5 − ln 5. Move the x terms together: ln 3 + ln 5 = x(2 ln 5 − ln 3), so x = (ln 3 + ln 5)/(2 ln 5 − ln 3)."
  },
  {
    "stem": "Consider the function f(x) = 4e³ˣ⁻¹ + 2. Which of the following statements about its inverse function f⁻¹(x) are true? Select all that apply.",
    "choices": [
      "The range of f⁻¹(x) is restricted to (2, ∞).",
      "The inverse function can be expressed as f⁻¹(x) = (ln(x−2) − ln(4) + 1)/3.",
      "The inverse function can be expressed as f⁻¹(x) = ln(x−2)/12 + 1.",
      "The domain of f⁻¹(x) is (2, ∞)."
    ],
    "answer": 1,
    "answers": [1, 3],
    "hint": "Swap x and y and solve — and remember the domain of the inverse is the range of f.",
    "explanation": "y = 4e^(3x−1) + 2 gives (y − 2)/4 = e^(3x−1), so ln((y−2)/4) = 3x − 1 and x = (ln(y−2) − ln 4 + 1)/3. The range of f is (2, ∞), so the domain of f⁻¹ is (2, ∞). The range of f⁻¹ is the domain of f, all real numbers — not (2, ∞)."
  },
  {
    "stem": "Solve the logarithmic equation log₄(x² − 7) = log₄(6x).",
    "choices": [
      "x = −1 only",
      "x = 7 and x = −1",
      "There are no real solutions.",
      "x = 7 only"
    ],
    "answer": 3,
    "hint": "Drop the logs — same base, same argument — then check the domain before you keep a root.",
    "explanation": "x² − 7 = 6x, so x² − 6x − 7 = 0, (x − 7)(x + 1) = 0, x = 7 or x = −1. The domain needs 6x > 0, so x = −1 is extraneous (it makes log₄(−6)). Check: log₄(42) = log₄(42). Only x = 7."
  },
  {
    "stem": "Given log₃2 = a, log₃5 = b, and log₃7 = c. Which of the following expressions are equivalent to log₃(140/9)? Select all that apply.",
    "choices": [
      "2a + b + c − 9",
      "2a + b + c − 2",
      "a + log₃(70) − 2",
      "a² + b + c − 2"
    ],
    "answer": 1,
    "answers": [1, 2],
    "hint": "Factor 140 into primes first, and remember log₃9 = 2.",
    "explanation": "140 = 2²·5·7, so log₃(140/9) = 2 log₃2 + log₃5 + log₃7 − log₃9 = 2a + b + c − 2. And a + log₃(70) − 2 works too, because log₃(70) = a + b + c."
  },
  {
    "stem": "Solve the equation 2·log₃(x − 1) + 1 = 5.",
    "choices": [
      "x = 10",
      "x = 9",
      "x = 7",
      "x = 28"
    ],
    "answer": 0,
    "hint": "Isolate the log first — get 2·log₃(x−1) alone before you drop anything.",
    "explanation": "2 log₃(x−1) = 4, so log₃(x−1) = 2, x − 1 = 9, x = 10. Check: 2·log₃(9) + 1 = 2·2 + 1 = 5."
  },
  {
    "stem": "Given the function m(x) = 15 + 4²ˣ⁻¹, find the solution set of the inequality m(x) ≥ 79.",
    "choices": [
      "x ≥ 2",
      "x ≥ 4",
      "x ≤ 2",
      "x ≥ 5/2"
    ],
    "answer": 0,
    "hint": "Isolate the power, then write 64 as a power of 4.",
    "explanation": "4^(2x−1) ≥ 64 = 4³, so 2x − 1 ≥ 3 and x ≥ 2. Check: m(2) = 15 + 4³ = 79."
  },
  {
    "stem": "Consider the logarithmic inequality ln(x² − 9) ≤ ln(7x − 15). Which of the following statements correctly describe the domain restrictions or solution steps? Select all that apply.",
    "choices": [
      "The algebraic inequality simplifies to (x − 1)(x − 6) ≥ 0.",
      "The value x = 1 is included in the solution set.",
      "The complete solution set in interval notation is (3, 6].",
      "The domain restrictions of the individual logarithms require x > 3."
    ],
    "answer": 2,
    "answers": [2, 3],
    "hint": "Domain first — both arguments must be positive — then drop the ln (it keeps the direction) and intersect.",
    "explanation": "Domain: x² − 9 > 0 and 7x − 15 > 0, which together give x > 3. Dropping the ln: x² − 9 ≤ 7x − 15, x² − 7x + 6 ≤ 0, (x − 1)(x − 6) ≤ 0, so 1 ≤ x ≤ 6. Intersect with x > 3: (3, 6]. Note the sign is ≤, not ≥, and x = 1 is outside the domain."
  },
  {
    "stem": "Solve the logarithmic equation ln(x) + ln(x − 3) = ln(10) for all valid values of x.",
    "choices": [
      "x = 2 and x = −5",
      "x = 13",
      "x = 5 only",
      "x = 5 and x = −2"
    ],
    "answer": 2,
    "hint": "Combine the logs on the left, then check the domain before you keep a root.",
    "explanation": "ln[x(x−3)] = ln 10, so x² − 3x = 10, x² − 3x − 10 = 0, (x − 5)(x + 2) = 0, x = 5 or x = −2. The domain needs x > 3, so x = −2 is extraneous. Check: ln 5 + ln 2 = ln 10."
  },
  {
    "stem": "Find the inverse function g⁻¹(x) for the logarithmic function g(x) = log₂(3x + 6) − 4.",
    "choices": [
      "g⁻¹(x) = (2ˣ⁻⁴ + 6)/3",
      "g⁻¹(x) = (2ˣ⁺⁴ − 6)/3",
      "g⁻¹(x) = 2^((x+4)/3) − 6",
      "g⁻¹(x) = log₂((x+4)/3) + 6"
    ],
    "answer": 1,
    "hint": "Swap x and y, then undo the log with 2 to the power of both sides.",
    "explanation": "y = log₂(3x+6) − 4 gives y + 4 = log₂(3x+6), so 2^(y+4) = 3x + 6 and x = (2^(y+4) − 6)/3."
  },
  {
    "stem": "Given the functions h(x) = 8ˣ⁺¹ and k(x) = 32ˣ, solve the inequality h(x) > k(x).",
    "choices": [
      "x > 3/2",
      "x > 1",
      "x < 3/2",
      "x < 3"
    ],
    "answer": 2,
    "hint": "Write both sides as powers of 2, then compare the exponents.",
    "explanation": "8^(x+1) = 2^(3x+3) and 32ˣ = 2^(5x). So 3x + 3 > 5x, 3 > 2x, x < 3/2. Check: at x = 1, 64 > 32; at x = 2, 512 < 1024."
  },
  {
    "stem": "Given log₅2 = M and log₅3 = N, which of the following expressions represent equivalent ways to rewrite log₅(72/25)? Select all that apply.",
    "choices": [
      "M³ + N² − 2",
      "log₅(72) − 2",
      "3M + 2N − 2",
      "3M + 2N − 25"
    ],
    "answer": 1,
    "answers": [1, 2],
    "hint": "Factor 72 into primes first, and remember log₅25 = 2.",
    "explanation": "72 = 2³·3², so log₅(72/25) = 3 log₅2 + 2 log₅3 − log₅25 = 3M + 2N − 2. And log₅(72) − 2 works too, because log₅25 = 2."
  }
];
