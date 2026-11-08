// Click-MCQ data for the Precalculus Quiz — Unit 2: stems, choices, answer
// index, hint and explanation per question. The 14 questions are copied
// verbatim from Faryal's NotebookLM notebook "Ap Precalc Unit 2", artifact
// "Precalculus Quiz" (14 questions, built from her Unit 2 notes); every
// answer was independently verified by numeric substitution
// (~/workspace/precalc-quiz-unit2/answer-key.md). The NotebookLM hints were
// not captured, so the hints and explanations below are written fresh in her
// style. Four questions are select-all-that-apply: those carry `answers`
// (the full set of correct indices); `answer` is the first of them, kept so
// the single-answer code paths keep working.
import type { McqItem } from "./timedTests";

export const precalcQuizUnit2: McqItem[] = [
  {
    "stem": "Given f(x) = √(x−6) and g(x) = 1/(2x^{2}−4), what is the domain of the composite function (g∘f)(x)?",
    "choices": [
      "[6, 8) ∪ (8, ∞)",
      "(8, ∞)",
      "[6, ∞)",
      "(−∞, 8) ∪ (8, ∞)"
    ],
    "answer": 0,
    "hint": "Work from the inside out: f needs its square root defined, and g needs its denominator nonzero.",
    "explanation": "(g∘f)(x) = 1/(2(x−6)−4) = 1/(2x−16). The square root needs x−6 ≥ 0, so x ≥ 6. The denominator needs 2x−16 ≠ 0, so x ≠ 8. Together: [6, 8) ∪ (8, ∞)."
  },
  {
    "stem": "The table gives x = 10, 30, 90, 270 with h(x) = 10, 20, 30, 40. Which statement best describes h(x)?",
    "choices": [
      "Neither a linear, exponential, nor logarithmic function",
      "Exponential, because inputs increase by a constant factor of 3",
      "Logarithmic, because inputs change multiplicatively while outputs change additively",
      "Linear, because outputs increase at a constant additive rate of 10"
    ],
    "answer": 2,
    "hint": "Look at how the x-values change from one row to the next, then look at how the h(x)-values change.",
    "explanation": "Each x is 3 times the one before (10, 30, 90, 270), while each h(x) just adds 10 (10, 20, 30, 40). Inputs changing multiplicatively while outputs change additively is the signature of a logarithmic function."
  },
  {
    "stem": "f(x) = 5·3^{2−x} + 4 and g is the inverse of f. For which value of x is g(x) = 2?",
    "choices": [
      "9",
      "1/5",
      "2",
      "19"
    ],
    "answer": 0,
    "hint": "g(x) = 2 means f(2) = x — use the inverse relationship instead of finding g first.",
    "explanation": "Step 1 — use the inverse: g(x) = 2 means f(2) = x, because an inverse flips inputs and outputs. Step 2 — work out f(2): f(2) = 5·3^{2−2} + 4 = 5·3^0 + 4 = 5·1 + 4 = 9. Step 3 — so x = 9, choice A. Finding g first is the long way — the flip does it in one step."
  },
  {
    "stem": "(Select all that apply) Which statements are true regarding the parent logarithmic function f(x) = log_b(x), where b > 1?",
    "choices": [
      "Domain is (0, ∞) and range is (−∞, ∞)",
      "Over equal-width input intervals, outputs change multiplicatively",
      "Left end behavior is lim(x→0+) f(x) = −∞",
      "The graph has a vertical asymptote at x = 0"
    ],
    "answer": 0,
    "answers": [0, 2, 3],
    "hint": "Test each statement against the graph of y = log(x): where does it live, what happens near 0, and how do outputs change over equal-width input steps?",
    "explanation": "A log with base > 1 is defined only for positive inputs and its outputs cover all reals; as x approaches 0 from the right the graph dives to −∞, so x = 0 is a vertical asymptote. Over equal-width input intervals log outputs change additively (by a constant amount), not multiplicatively — that is exponential behavior."
  },
  {
    "stem": "Solve ln(x) + ln(x−4) = ln(12).",
    "choices": [
      "x = 6 and x = −2",
      "x = −2 only",
      "No real solution",
      "x = 6 only"
    ],
    "answer": 3,
    "hint": "Combine the left side with the product rule, then check every root against the domain before keeping it.",
    "explanation": "ln(x) + ln(x−4) = ln(x(x−4)), so x(x−4) = 12, giving x^{2} − 4x − 12 = 0, (x−6)(x+2) = 0. But the domain needs x > 0 and x − 4 > 0, so x > 4 — that throws out −2 and leaves x = 6 only."
  },
  {
    "stem": "What is the solution set of log_3(x^{2}−4x+7) > log_3(x+3)?",
    "choices": [
      "(−3, 1) ∪ (4, ∞)",
      "(1, 4)",
      "(−3, ∞)",
      "(−∞, 1) ∪ (4, ∞)"
    ],
    "answer": 0,
    "hint": "Base 3 is greater than 1, so drop the logs and keep the direction — but write down both domain conditions first.",
    "explanation": "Since the base 3 > 1, the inequality keeps its direction: x^{2}−4x+7 > x+3, so x^{2}−5x+4 > 0, (x−1)(x−4) > 0, giving x < 1 or x > 4. The domain needs x + 3 > 0 (x > −3); x^{2}−4x+7 is always positive. Intersecting gives (−3, 1) ∪ (4, ∞)."
  },
  {
    "stem": "What is the inverse of f(x) = 3·2^{4x−1} + 5?",
    "choices": [
      "f^{-1}(x) = [log_2((x−5)/3) + 1]/4",
      "f^{-1}(x) = [log_2((x−5)/3) − 1]/4",
      "f^{-1}(x) = [log_2(x−5) − 3]/4",
      "f^{-1}(x) = 4·log_2((x−5)/3) + 1"
    ],
    "answer": 0,
    "hint": "Undo the steps in reverse: subtract 5, divide by 3, then take log base 2 — and watch the −1 in the exponent.",
    "explanation": "Set y = 3·2^{4x−1} + 5. Then (y−5)/3 = 2^{4x−1}, so log_2((y−5)/3) = 4x − 1, and x = [log_2((y−5)/3) + 1]/4."
  },
  {
    "stem": "(Select all that apply) Which expressions are equivalent to (1/2)log(x) − 3log(y) + log(z), for x, y, z > 0?",
    "choices": [
      "log(z√x / y^{3})",
      "log(x)/(2y^{3}) + log(z)",
      "log(√x) − log(y^{3}) + log(z)",
      "log(√x / (y^{3}z))"
    ],
    "answer": 0,
    "answers": [0, 2],
    "hint": "Turn each coefficient into an exponent first, then combine with the product and quotient rules.",
    "explanation": "(1/2)log(x) = log(√x) and 3log(y) = log(y^{3}), so the expression is log(√x) − log(y^{3}) + log(z) = log(z√x/y^{3}). The second choice divides log(x) by 2y^{3} instead of halving its exponent, and the fourth puts z in the denominator instead of the numerator."
  },
  {
    "stem": "What is the value of log_5(500) − log_5(4)?",
    "choices": [
      "25",
      "3",
      "125",
      "2"
    ],
    "answer": 1,
    "hint": "One log minus another is the log of a quotient.",
    "explanation": "log_5(500) − log_5(4) = log_5(500/4) = log_5(125) = 3, since 5^{3} = 125."
  },
  {
    "stem": "f(x) = √(x+2) for x ≥ −2 and g(x) = x^{2}−2 for x ≥ 0. Which evaluation verifies that g is the inverse of f for non-negative inputs?",
    "choices": [
      "f(g(x)) = (√(x+2))^{2} − 2 = x for x ≥ −2",
      "f(g(x)) = √(x^{2}+2) − 2 = x",
      "f(g(x)) = √((x^{2}−2)+2) = √x^{2} = x for x > 0",
      "f(x)·g(x) = 1"
    ],
    "answer": 2,
    "hint": "Compose in the order written: g goes inside f, so substitute g(x) into the square root.",
    "explanation": "f(g(x)) = √((x^{2}−2)+2) = √x^{2} = x for x > 0 (and x ≥ 0 from g's domain). The first choice actually computes g(f(x)) with the roles mixed up, and the last one is not how inverses are checked."
  },
  {
    "stem": "k(x) = −2log_3(x+4) + 1. Which pair of limit statements correctly describes its end behavior?",
    "choices": [
      "lim(x→−∞) k(x) = −∞ and lim(x→∞) k(x) = ∞",
      "lim(x→0+) k(x) = ∞ and lim(x→∞) k(x) = 1",
      "lim(x→−4+) k(x) = −∞ and lim(x→∞) k(x) = ∞",
      "lim(x→−4+) k(x) = ∞ and lim(x→∞) k(x) = −∞"
    ],
    "answer": 3,
    "hint": "The domain stops at x = −4, so the left end is at −4, not −∞. Then watch what the −2 in front does to the log.",
    "explanation": "The domain is x > −4. As x approaches −4 from the right, log_3(x+4) dives to −∞, and the −2 flips it up, so k(x) → ∞. As x → ∞, log_3(x+4) → ∞ and the −2 drags k(x) down to −∞."
  },
  {
    "stem": "What is the value of log_3(81)?",
    "choices": [
      "3",
      "9",
      "4",
      "27"
    ],
    "answer": 2,
    "hint": "Ask what power of 3 gives 81.",
    "explanation": "log_3(81) asks: 3 to what power is 81? 3^4 = 81, so the answer is 4. (3^3 is only 27.)"
  },
  {
    "stem": "Let f(x) = x^{2} and g(x) = x + 1. What is the value of (g∘f)(2)?",
    "choices": [
      "3",
      "5",
      "4",
      "9"
    ],
    "answer": 1,
    "hint": "Work inside out: f first, then put that result into g.",
    "explanation": "(g∘f)(2) = g(f(2)). f(2) = 2^{2} = 4, and g(4) = 4 + 1 = 5. (9 is (f∘g)(2) — the order the other way round.)"
  },
  {
    "stem": "Which expression is equivalent to log_7(15) using the Change of Base Formula with natural logs?",
    "choices": [
      "ln(15)/ln(7)",
      "ln(15) − ln(7)",
      "ln(15·7)",
      "ln(7)/ln(15)"
    ],
    "answer": 0,
    "hint": "Change of base is a fraction: log of the argument over log of the base.",
    "explanation": "log_7(15) = ln(15)/ln(7) — the argument 15 goes on top, the base 7 underneath."
  },
  {
    "stem": "(Select all that apply) f(x) = −3·2^{x−1} + 4.",
    "choices": [
      "The range is (−∞, 4)",
      "The graph is concave up over the entire domain",
      "The horizontal asymptote is y = 4",
      "The function is strictly decreasing over the entire domain"
    ],
    "answer": 0,
    "answers": [0, 2, 3],
    "hint": "Split it into pieces: the −3 flips two things, the +4 shifts one thing.",
    "explanation": "2^{x−1} is always positive, so −3·2^{x−1} is always negative and f(x) stays below 4: range (−∞, 4), asymptote y = 4. The −3 flips the increasing 2^{x−1} into a decreasing function, and it flips concave up into concave down."
  }
];
