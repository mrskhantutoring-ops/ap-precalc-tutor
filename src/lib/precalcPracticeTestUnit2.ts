// Click-MCQ data for the Precalculus Practice Test — Unit 2: stems, choices,
// answer index, hint and explanation per question. The 15 questions are the
// parallel form of the "Precalculus Quiz — Unit 2" (same 15 topics in the
// same order, all new numbers and functions), from Faryal's
// AP_Precalculus_Unit2_Practice_Test.pdf (uploaded 2026-11-09). Every answer
// was independently verified by hand and by numeric substitution
// (~/workspace/precalc-practice-test-unit2/answer-key.md). Hints and
// explanations are written fresh in her style, following the PDF's worked
// solutions. Three questions are select-all-that-apply: those carry
// `answers` (the full set of correct indices); `answer` is the first of
// them, kept so the single-answer code paths keep working.
import type { McqItem } from "./timedTests";

export const precalcPracticeTestUnit2: McqItem[] = [
  {
    "stem": "Given f(x) = √(x + 4) and g(x) = 1/(x² − 9), what is the domain of the composite function (g∘f)(x)?",
    "choices": [
      "(−∞, 5) ∪ (5, ∞)",
      "[−4, 5) ∪ (5, ∞)",
      "(5, ∞)",
      "[−4, ∞)"
    ],
    "answer": 1,
    "hint": "Work from the inside out: f needs its square root defined, and g needs its denominator nonzero.",
    "explanation": "(g∘f)(x) = 1/((√(x+4))² − 9) = 1/(x − 5). The square root needs x + 4 ≥ 0, so x ≥ −4. The denominator needs x − 5 ≠ 0, so x ≠ 5. Together: [−4, 5) ∪ (5, ∞)."
  },
  {
    "stem": "The table gives x = 1, 3, 9, 27 and h(x) = 2, 6, 10, 14, respectively. Which function models h(x)?",
    "choices": [
      "h(x) = 2·log₃(x) + 4",
      "h(x) = 4·log₂(x) + 2",
      "h(x) = 4·log₃(x) + 2",
      "h(x) = 4·log₃(x − 1) + 2"
    ],
    "answer": 2,
    "hint": "Look at how the x-values change from one row to the next, then look at how the h(x)-values change.",
    "explanation": "Each x is 3 times the one before (1, 3, 9, 27), while each h(x) just adds 4 (2, 6, 10, 14). Inputs changing multiplicatively while outputs change additively is the signature of a logarithmic function. At x = 1, log₃(1) = 0, so the +2 gives h(1) = 2. Check: x = 3 gives 4·1 + 2 = 6, x = 9 gives 4·2 + 2 = 10, x = 27 gives 4·3 + 2 = 14."
  },
  {
    "stem": "Let f(x) = 4·3ˣ⁻² + 1 and let g be the inverse of f. What is the value of g(37)?",
    "choices": [
      "3",
      "9",
      "5",
      "4"
    ],
    "answer": 3,
    "hint": "g(37) is the x with f(x) = 37 — use the inverse relationship instead of finding g first.",
    "explanation": "g(37) is the x with f(x) = 37. So 4·3ˣ⁻² + 1 = 37, 4·3ˣ⁻² = 36, 3ˣ⁻² = 9, so x − 2 = 2 and x = 4. Check: f(4) = 4·9 + 1 = 37. (9 is the intermediate value 3ˣ⁻², not x.)"
  },
  {
    "stem": "(Select all that apply) Which statements are true regarding the parent exponential function f(x) = bˣ, where 0 < b < 1?",
    "choices": [
      "The domain is (−∞, ∞) and the range is (0, ∞).",
      "Over equal-width input intervals, outputs change by a constant multiplicative factor.",
      "lim(x→−∞) f(x) = 0",
      "The graph is concave up over its entire domain."
    ],
    "answer": 0,
    "answers": [0, 1, 3],
    "hint": "Test each statement against the graph of y = (1/2)ˣ: where does it live, what happens at each end, and how do outputs change over equal-width input steps?",
    "explanation": "For 0 < b < 1: the domain is all real numbers and the range is (0, ∞). Over equal-width input steps the outputs multiply by the same factor bʰ. As x → −∞, f(x) → +∞ (the limit 0 is at +∞). And f″ = (ln b)²·bˣ > 0, so the graph is concave up everywhere."
  },
  {
    "stem": "Solve log₂(x) + log₂(x − 6) = 4.",
    "choices": [
      "x = 8 and x = −2",
      "x = 8 only",
      "x = −2 only",
      "No real solution"
    ],
    "answer": 1,
    "hint": "Combine the logs first, then check the domain before you keep a root.",
    "explanation": "Combine: log₂[x(x − 6)] = 4, so x² − 6x = 16, (x − 8)(x + 2) = 0, x = 8 or x = −2. The domain needs x > 6, so x = −2 is extraneous. Check: log₂(8) + log₂(2) = 3 + 1 = 4."
  },
  {
    "stem": "What is the solution set of log₃(x² − 5x + 9) > log₃(x + 1)?",
    "choices": [
      "(−1, ∞)",
      "(2, 4)",
      "(−1, 2) ∪ (4, ∞)",
      "(−∞, 2) ∪ (4, ∞)"
    ],
    "answer": 2,
    "hint": "Domain first, then drop the log — base 3 > 1 keeps the direction.",
    "explanation": "Domain: x + 1 > 0 gives x > −1 (x² − 5x + 9 has discriminant 25 − 36 < 0, so it is always positive). Base 3 > 1, so compare arguments: x² − 5x + 9 > x + 1, (x − 2)(x − 4) > 0, x < 2 or x > 4. Intersect with x > −1: (−1, 2) ∪ (4, ∞)."
  },
  {
    "stem": "What is the inverse of f(x) = 4·3²ˣ⁻¹ − 7?",
    "choices": [
      "f⁻¹(x) = [log₃((x + 7)/4) + 1] / 2",
      "f⁻¹(x) = [log₃((x − 7)/4) + 1] / 2",
      "f⁻¹(x) = [log₃((x + 7)/4) − 1] / 2",
      "f⁻¹(x) = 2·log₃((x + 7)/4) + 1"
    ],
    "answer": 0,
    "hint": "Undo the steps in reverse: add 7, divide by 4, then take log base 3 — and watch the −1 in the exponent.",
    "explanation": "Set y = 4·3²ˣ⁻¹ − 7. Then (y + 7)/4 = 3²ˣ⁻¹, so log₃((y + 7)/4) = 2x − 1, and x = [log₃((y + 7)/4) + 1]/2. Check: f(1) = 4·3 − 7 = 5, and the inverse at 5 gives (log₃(3) + 1)/2 = 1."
  },
  {
    "stem": "(Select all that apply) Which expressions are equivalent to 3·log(x) − (1/2)·log(y) − log(z), for x, y, z > 0?",
    "choices": [
      "log(x³·√y / z)",
      "log(x³ / (z·√y))",
      "log(x³) − log(√y) − log(z)",
      "log(x³ / z) − log(√y)"
    ],
    "answer": 1,
    "answers": [1, 2, 3],
    "hint": "Turn each term into a single log first, then combine — watch where √y lands.",
    "explanation": "3·log(x) − (1/2)·log(y) − log(z) = log(x³) − log(√y) − log(z) = log(x³/(z·√y)). So B, C, and D are all the same value in different forms. A is wrong: it puts √y in the numerator."
  },
  {
    "stem": "What is the value of 2·log₅(10) − log₅(4)?",
    "choices": [
      "2",
      "25",
      "log₅(16)",
      "4"
    ],
    "answer": 0,
    "hint": "The 2 in front is a power first — bring it inside the log.",
    "explanation": "2·log₅(10) = log₅(10²) = log₅(100). Then log₅(100) − log₅(4) = log₅(100/4) = log₅(25) = 2. (25 is the argument, not the answer.)"
  },
  {
    "stem": "Let f(x) = x² − 4x + 1 for x ≥ 2. Which expression defines f⁻¹(x)?",
    "choices": [
      "2 − √(x + 3)",
      "2 + √(x − 3)",
      "√(x + 3) − 2",
      "2 + √(x + 3)"
    ],
    "answer": 3,
    "hint": "Complete the square first, then undo it — and the x ≥ 2 tells you which square root sign to take.",
    "explanation": "Complete the square: f(x) = (x − 2)² − 3. Set y + 3 = (x − 2)²; since x ≥ 2, x − 2 = +√(y + 3), so f⁻¹(x) = 2 + √(x + 3). Check: f(3) = −2 and 2 + √(−2 + 3) = 3."
  },
  {
    "stem": "Let k(x) = −3·log₂(x − 1) + 4. Which pair of limit statements correctly describes the end behavior of k?",
    "choices": [
      "lim(x→1⁺) k(x) = −∞ and lim(x→∞) k(x) = ∞",
      "lim(x→0⁺) k(x) = ∞ and lim(x→∞) k(x) = 4",
      "lim(x→1⁺) k(x) = ∞ and lim(x→∞) k(x) = −∞",
      "lim(x→−∞) k(x) = −∞ and lim(x→∞) k(x) = ∞"
    ],
    "answer": 2,
    "hint": "The domain starts at x = 1 — that is where the first limit lives. The −3 flips both ends.",
    "explanation": "Domain is x > 1 (vertical asymptote x = 1). As x → 1⁺, log₂(x − 1) → −∞, and multiplying by −3 gives +∞. As x → ∞, log₂(x − 1) → ∞, so k → −∞. The negative coefficient reverses both limits."
  },
  {
    "stem": "What is the value of log₈(32)?",
    "choices": [
      "4",
      "5/3",
      "3/5",
      "24"
    ],
    "answer": 1,
    "hint": "Write both numbers as powers of 2.",
    "explanation": "log₈(32) = ln 32 / ln 8 = 5·ln 2 / 3·ln 2 = 5/3. Check: 8^(5/3) = (2³)^(5/3) = 2^5 = 32."
  },
  {
    "stem": "Let f(x) = x² − 2x and g(x) = 3x + 1. What is the value of (f∘g)(−1)?",
    "choices": [
      "10",
      "−6",
      "3",
      "8"
    ],
    "answer": 3,
    "hint": "Composition reads right to left: g first, then f.",
    "explanation": "g(−1) = 3(−1) + 1 = −2, then f(−2) = (−2)² − 2(−2) = 4 + 4 = 8. (10 is the reversed order (g∘f)(−1).)"
  },
  {
    "stem": "Which expression is equivalent to log_{1/4}(9) using the Change of Base Formula with natural logarithms?",
    "choices": [
      "ln(1/4) / ln(9)",
      "ln(9) / ln(1/4)",
      "ln(9) − ln(1/4)",
      "ln(9) / ln(4)"
    ],
    "answer": 1,
    "hint": "Argument on top, base underneath.",
    "explanation": "Change of base is a division: log_b(a) = ln a / ln b, with a = 9 (argument on top) and b = 1/4 (base on the bottom) — so the answer is B. C is the quotient rule in reverse: ln(9) − ln(1/4) = ln(9/(1/4)) = ln(36), not a change of base. D is close but wrong: ln(1/4) = −ln 4, so B = −ln 9 / ln 4, the negative of D."
  },
  {
    "stem": "(Select all that apply) Let f(x) = −2·(1/3)ˣ⁺¹ + 5. Which statements are true?",
    "choices": [
      "The range of f is (−∞, 5).",
      "f is concave down over its entire domain.",
      "lim(x→∞) f(x) = 5",
      "f is strictly decreasing over its entire domain."
    ],
    "answer": 0,
    "answers": [0, 1, 2],
    "hint": "The (1/3)ˣ⁺¹ term is always positive and decays to 0 — what does the −2 in front do to it?",
    "explanation": "Since (1/3)ˣ⁺¹ > 0 and decays to 0: −2 times a positive is negative, so f < 5 always (range (−∞, 5)) and f → 5 as x → ∞. f′ = 2·ln 3·(1/3)ˣ⁺¹ > 0, so f is increasing, not decreasing. f″ = −2(ln 3)²(1/3)ˣ⁺¹ < 0, so concave down."
  },
];
