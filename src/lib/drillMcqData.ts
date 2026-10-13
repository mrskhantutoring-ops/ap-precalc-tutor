// Click-MCQ data for the Growth/Decay drills: stems, choices, answer index,
// hint and explanation per question. Generated from the verified drill data
// (~/workspace/growth-decay-drills) — regenerate there if questions change.
import type { McqItem } from "./timedTests";

export const growthDecayDrill1: McqItem[] = [
  {
    "stem": "Classify f(x) = 4(1.6)^{x}.",
    "choices": [
      "Growth, increasing, concave up",
      "Growth, increasing, concave down",
      "Decay, decreasing, concave up",
      "Neither, increasing, concave down"
    ],
    "answer": 0,
    "hint": "Work the table in order: the sign of a and the size of b give the type; a and b together give the direction; the sign of a alone gives the concavity.",
    "explanation": "Here a = 4 and b = 1.6. Type: a > 0 and b > 1, so this is exponential GROWTH. Direction: b > 1 makes b^x grow as x increases, and positive a keeps the values positive — the function is increasing. Concavity: only the sign of a decides — a > 0, so the graph is concave up."
  },
  {
    "stem": "Classify f(x) = 7(0.4)^{x} − 3.",
    "choices": [
      "Decay, decreasing, concave down",
      "Decay, decreasing, concave up",
      "Growth, decreasing, concave up",
      "Neither, decreasing, concave down"
    ],
    "answer": 1,
    "hint": "Work the table in order: the sign of a and the size of b give the type; a and b together give the direction; the sign of a alone gives the concavity.",
    "explanation": "Here a = 7 and b = 0.4. Type: a > 0 and 0 < b < 1, so this is exponential DECAY. Direction: 0 < b < 1 makes b^x shrink toward 0 as x increases — the function is decreasing. Concavity: only the sign of a decides — a > 0, so the graph is concave up."
  },
  {
    "stem": "Classify f(x) = −5(3)^{x} + 1.",
    "choices": [
      "Decay, decreasing, concave down",
      "Neither, decreasing, concave down",
      "Neither, increasing, concave down",
      "Growth, decreasing, concave up"
    ],
    "answer": 1,
    "hint": "Work the table in order: the sign of a and the size of b give the type; a and b together give the direction; the sign of a alone gives the concavity.",
    "explanation": "Here a = −5 and b = 3. Type: a is negative, so the function is NEITHER growth nor decay — growth and decay both need a > 0. Direction: b^x grows as x increases, but the negative a flips the values downward — the function is decreasing. Concavity: only the sign of a decides — a < 0, so the graph is concave down."
  },
  {
    "stem": "Classify g(x) = −2(0.75)^{x}.",
    "choices": [
      "Decay, decreasing, concave up",
      "Neither, decreasing, concave down",
      "Neither, increasing, concave down",
      "Decay, increasing, concave down"
    ],
    "answer": 2,
    "hint": "Work the table in order: the sign of a and the size of b give the type; a and b together give the direction; the sign of a alone gives the concavity.",
    "explanation": "Here a = −2 and b = 0.75. Type: a is negative, so the function is NEITHER growth nor decay — growth and decay both need a > 0. Direction: b^x shrinks toward 0 as x increases, and the negative a keeps the values negative, so they climb up toward 0 — the function is increasing. Concavity: only the sign of a decides — a < 0, so the graph is concave down."
  },
  {
    "stem": "Classify h(x) = 3^{−x} + 4. (Clean up the exponent first.)",
    "choices": [
      "Growth, increasing, concave up",
      "Decay, decreasing, concave down",
      "Decay, decreasing, concave up",
      "Neither, decreasing, concave up"
    ],
    "answer": 2,
    "hint": "First rewrite the negative exponent: b^(−x) = (1/b)^x flips the base to its reciprocal. Work the table in order: the sign of a and the size of b give the type; a and b together give the direction; the sign of a alone gives the concavity.",
    "explanation": "Clean up first: the negative exponent flips the base, so the effective base is b = 1/3. Here a = 1 and b = 1/3. Type: a > 0 and 0 < b < 1, so this is exponential DECAY. Direction: 0 < b < 1 makes b^x shrink toward 0 as x increases — the function is decreasing. Concavity: only the sign of a decides — a > 0, so the graph is concave up."
  },
  {
    "stem": "Classify p(x) = (1/5)^{−x}. (Clean up the exponent first.)",
    "choices": [
      "Decay, decreasing, concave up",
      "Growth, increasing, concave up",
      "Growth, increasing, concave down",
      "Neither, increasing, concave up"
    ],
    "answer": 1,
    "hint": "First rewrite the negative exponent: b^(−x) = (1/b)^x flips the base to its reciprocal. Work the table in order: the sign of a and the size of b give the type; a and b together give the direction; the sign of a alone gives the concavity.",
    "explanation": "Clean up first: the negative exponent flips the base, so the effective base is b = 5. Here a = 1 and b = 5. Type: a > 0 and b > 1, so this is exponential GROWTH. Direction: b > 1 makes b^x grow as x increases, and positive a keeps the values positive — the function is increasing. Concavity: only the sign of a decides — a > 0, so the graph is concave up."
  },
  {
    "stem": "Which function is increasing and concave down?",
    "choices": [
      "6(1.2)^{x}",
      "−4(0.6)^{x}",
      "6(0.8)^{x} − 2",
      "−4(2)^{x} + 3"
    ],
    "answer": 1,
    "hint": "First pin down the (type, direction, concavity) you need, then test each choice's a and b against it.",
    "explanation": "Increasing + concave down needs a < 0 (concavity comes from the sign of a alone) with 0 < b < 1 (with a negative, a shrinking base makes the values climb toward 0). −4(0.6)^x has a = −4 and b = 0.6 — increasing and concave down. (A) and (C) have a > 0, so they are concave up; (D) has a < 0 but b = 2 > 1, which makes it decreasing instead."
  },
  {
    "stem": "Which function is decay and concave up?",
    "choices": [
      "−3(0.5)^{x} + 2",
      "2(5)^{−x}",
      "8(1.1)^{x}",
      "−7(4)^{x}"
    ],
    "answer": 1,
    "hint": "First pin down the (type, direction, concavity) you need, then test each choice's a and b against it.",
    "explanation": "Decay needs a > 0 with an effective base between 0 and 1, and concave up needs a > 0. Clean up (B): 2(5)^{−x} = 2(1/5)^x — a = 2 > 0 and b = 1/5, so it is decay and concave up. (A) and (D) have a < 0 (NEITHER type, concave down), and (C) has b = 1.1 > 1, so it is growth."
  },
  {
    "stem": "A function f is decreasing and concave up. Which could be f?",
    "choices": [
      "f(x) = −2(3)^{x}",
      "f(x) = 5(0.9)^{x} + 1",
      "f(x) = −5(0.9)^{x}",
      "f(x) = 2(4)^{x} − 1"
    ],
    "answer": 1,
    "hint": "First pin down the (type, direction, concavity) you need, then test each choice's a and b against it.",
    "explanation": "Decreasing + concave up needs a > 0 (for the concavity) with 0 < b < 1 (the shrinking base pulls the positive values down). f(x) = 5(0.9)^x + 1 fits: a = 5 and b = 0.9. (A) and (C) have a < 0, so they are concave down; (D) has b = 4 > 1, so it is increasing."
  },
  {
    "stem": "Which statement about f(x) = −6(1.3)^{x} − 2 is TRUE?",
    "choices": [
      "It is growth, because b = 1.3 > 1",
      "It is concave up, because b > 1",
      "It is neither growth nor decay, and it is decreasing",
      "It is increasing and concave down"
    ],
    "answer": 2,
    "hint": "Classify the function completely first — then every statement is quick to check.",
    "explanation": "Classify f(x) = −6(1.3)^x − 2: a = −6 < 0, so the type is NEITHER growth nor decay — (A) is the classic trap, because b > 1 alone does not make growth when a is negative. Concavity comes from a alone, so it is concave down and (B) is wrong. Direction: b > 1 with a < 0 dives — decreasing. Only (C) says exactly that: neither growth nor decay, and decreasing."
  }
];

export const growthDecayDrill2: McqItem[] = [
  {
    "stem": "Classify f(x) = 9(0.85)^{x} + 2.",
    "choices": [
      "Growth, increasing, concave up",
      "Decay, decreasing, concave up",
      "Decay, increasing, concave up",
      "Neither, decreasing, concave down"
    ],
    "answer": 1,
    "hint": "Work the table in order: the sign of a and the size of b give the type; a and b together give the direction; the sign of a alone gives the concavity.",
    "explanation": "Here a = 9 and b = 0.85. Type: a > 0 and 0 < b < 1, so this is exponential DECAY. Direction: 0 < b < 1 makes b^x shrink toward 0 as x increases — the function is decreasing. Concavity: only the sign of a decides — a > 0, so the graph is concave up."
  },
  {
    "stem": "Classify f(x) = −4(1.8)^{x}.",
    "choices": [
      "Decay, decreasing, concave down",
      "Growth, decreasing, concave down",
      "Neither, decreasing, concave down",
      "Neither, increasing, concave down"
    ],
    "answer": 2,
    "hint": "Work the table in order: the sign of a and the size of b give the type; a and b together give the direction; the sign of a alone gives the concavity.",
    "explanation": "Here a = −4 and b = 1.8. Type: a is negative, so the function is NEITHER growth nor decay — growth and decay both need a > 0. Direction: b^x grows as x increases, but the negative a flips the values downward — the function is decreasing. Concavity: only the sign of a decides — a < 0, so the graph is concave down."
  },
  {
    "stem": "Classify f(x) = −7(0.3)^{x} + 5.",
    "choices": [
      "Neither, increasing, concave down",
      "Decay, increasing, concave down",
      "Neither, decreasing, concave down",
      "Decay, decreasing, concave up"
    ],
    "answer": 0,
    "hint": "Work the table in order: the sign of a and the size of b give the type; a and b together give the direction; the sign of a alone gives the concavity.",
    "explanation": "Here a = −7 and b = 0.3. Type: a is negative, so the function is NEITHER growth nor decay — growth and decay both need a > 0. Direction: b^x shrinks toward 0 as x increases, and the negative a keeps the values negative, so they climb up toward 0 — the function is increasing. Concavity: only the sign of a decides — a < 0, so the graph is concave down."
  },
  {
    "stem": "Classify g(x) = 5^{−x} − 1. (Clean up the exponent first.)",
    "choices": [
      "Growth, increasing, concave up",
      "Decay, decreasing, concave up",
      "Neither, decreasing, concave up",
      "Decay, decreasing, concave down"
    ],
    "answer": 1,
    "hint": "First rewrite the negative exponent: b^(−x) = (1/b)^x flips the base to its reciprocal. Work the table in order: the sign of a and the size of b give the type; a and b together give the direction; the sign of a alone gives the concavity.",
    "explanation": "Clean up first: the negative exponent flips the base, so the effective base is b = 1/5. Here a = 1 and b = 1/5. Type: a > 0 and 0 < b < 1, so this is exponential DECAY. Direction: 0 < b < 1 makes b^x shrink toward 0 as x increases — the function is decreasing. Concavity: only the sign of a decides — a > 0, so the graph is concave up."
  },
  {
    "stem": "Classify g(x) = 2(4)^{−x} + 3. (Clean up the exponent first.)",
    "choices": [
      "Growth, increasing, concave up",
      "Neither, decreasing, concave up",
      "Decay, increasing, concave up",
      "Decay, decreasing, concave up"
    ],
    "answer": 3,
    "hint": "First rewrite the negative exponent: b^(−x) = (1/b)^x flips the base to its reciprocal. Work the table in order: the sign of a and the size of b give the type; a and b together give the direction; the sign of a alone gives the concavity.",
    "explanation": "Clean up first: the negative exponent flips the base, so the effective base is b = 1/4. Here a = 2 and b = 1/4. Type: a > 0 and 0 < b < 1, so this is exponential DECAY. Direction: 0 < b < 1 makes b^x shrink toward 0 as x increases — the function is decreasing. Concavity: only the sign of a decides — a > 0, so the graph is concave up."
  },
  {
    "stem": "Classify p(x) = (3/2)^{−x}. (Clean up the exponent first.)",
    "choices": [
      "Growth, increasing, concave up",
      "Decay, decreasing, concave up",
      "Decay, decreasing, concave down",
      "Neither, decreasing, concave up"
    ],
    "answer": 1,
    "hint": "First rewrite the negative exponent: b^(−x) = (1/b)^x flips the base to its reciprocal. Work the table in order: the sign of a and the size of b give the type; a and b together give the direction; the sign of a alone gives the concavity.",
    "explanation": "Clean up first: the negative exponent flips the base, so the effective base is b = 2/3. Here a = 1 and b = 2/3. Type: a > 0 and 0 < b < 1, so this is exponential DECAY. Direction: 0 < b < 1 makes b^x shrink toward 0 as x increases — the function is decreasing. Concavity: only the sign of a decides — a > 0, so the graph is concave up."
  },
  {
    "stem": "Which function is growth and concave up?",
    "choices": [
      "−2(5)^{x}",
      "3(0.7)^{x} + 4",
      "4(1.05)^{x} − 1",
      "6(2)^{−x}"
    ],
    "answer": 2,
    "hint": "First pin down the (type, direction, concavity) you need, then test each choice's a and b against it.",
    "explanation": "Growth needs a > 0 with b > 1, and concave up needs a > 0. 4(1.05)^x − 1 has a = 4 and b = 1.05 — growth and concave up (1.05 is barely above 1, but above is enough). (B) is decay, (A) has a < 0, and (D) cleans up to 6(1/2)^x — decay again."
  },
  {
    "stem": "Which function is decreasing and concave down?",
    "choices": [
      "5(0.6)^{x}",
      "−3(2)^{x} + 1",
      "−3(0.5)^{x}",
      "5(1.6)^{x} − 4"
    ],
    "answer": 1,
    "hint": "First pin down the (type, direction, concavity) you need, then test each choice's a and b against it.",
    "explanation": "Concave down forces a < 0, which leaves (B) and (C). With a negative a, the base decides the direction: b > 1 dives (decreasing) while b < 1 climbs toward the asymptote (increasing). −3(2)^x + 1 has b = 2 — decreasing and concave down. (C) has b = 0.5, so it increases instead."
  },
  {
    "stem": "A function f is increasing and concave up. Which could be f?",
    "choices": [
      "f(x) = 7(0.4)^{x}",
      "f(x) = −2(0.4)^{x}",
      "f(x) = 3(5)^{−x}",
      "f(x) = (1/3)^{−x} − 2"
    ],
    "answer": 3,
    "hint": "First pin down the (type, direction, concavity) you need, then test each choice's a and b against it.",
    "explanation": "Increasing + concave up needs a > 0 with an effective base above 1. Clean up (D): (1/3)^{−x} = 3^x, so f(x) = 3^x − 2 has a = 1 > 0 and b = 3 — increasing and concave up. (A) is decreasing, (B) is concave down, and (C) cleans up to 3(1/5)^x — decreasing."
  },
  {
    "stem": "Which statement about f(x) = 8(0.5)^{x} is FALSE?",
    "choices": [
      "It is decay",
      "It is decreasing",
      "It is concave up",
      "It has exactly one point of inflection"
    ],
    "answer": 3,
    "hint": "Classify the function completely first — then every statement is quick to check.",
    "explanation": "Classify f(x) = 8(0.5)^x: a = 8 > 0 and 0 < b < 1, so it is decay (A true), decreasing (B true), and concave up (C true). (D) is the FALSE one: an exponential's concavity is fixed by the sign of a and never changes, so it has no point of inflection at all — let alone exactly one."
  }
];

export const growthDecayDrill3: McqItem[] = [
  {
    "stem": "Given f(x) = −4(1.5)^{x}, what is the horizontal asymptote and the range of this function?",
    "choices": [
      "Horizontal asymptote at y = −4; range is [−4, ∞)",
      "Horizontal asymptote at y = 0; range is [0, ∞)",
      "Horizontal asymptote at y = 1.5; range is (−∞, 0)",
      "Horizontal asymptote at y = 0; range is (−∞, 0)"
    ],
    "answer": 3,
    "hint": "The horizontal asymptote is the constant added at the end (k) — a and b do not move it. The sign of a then tells you which side of that line the range lives on.",
    "explanation": "At the far ends the b^x part either explodes or dies to 0, so the graph flattens onto the constant k = 0: the horizontal asymptote is y = 0. a = −4 is negative, so the values stay below the asymptote — the range is (−∞, 0)."
  },
  {
    "stem": "Given f(x) = 3(0.6)^{x} − 2, what is the horizontal asymptote and the range of this function?",
    "choices": [
      "Horizontal asymptote at y = −2; range is (−2, ∞)",
      "Horizontal asymptote at y = −2; range is (−∞, −2)",
      "Horizontal asymptote at y = 0; range is (−2, ∞)",
      "Horizontal asymptote at y = 3; range is [−2, ∞)"
    ],
    "answer": 0,
    "hint": "The horizontal asymptote is the constant added at the end (k) — a and b do not move it. The sign of a then tells you which side of that line the range lives on.",
    "explanation": "At the far ends the b^x part either explodes or dies to 0, so the graph flattens onto the constant k = −2: the horizontal asymptote is y = −2. a = 3 is positive, so the values stay above the asymptote — the range is (−2, ∞)."
  },
  {
    "stem": "Given f(x) = −2(0.8)^{x} + 5, what is the horizontal asymptote and the range of this function?",
    "choices": [
      "Horizontal asymptote at y = 5; range is (5, ∞)",
      "Horizontal asymptote at y = 5; range is (−∞, 5)",
      "Horizontal asymptote at y = 0; range is (−∞, 5)",
      "Horizontal asymptote at y = −2; range is (−∞, 5]"
    ],
    "answer": 1,
    "hint": "The horizontal asymptote is the constant added at the end (k) — a and b do not move it. The sign of a then tells you which side of that line the range lives on.",
    "explanation": "At the far ends the b^x part either explodes or dies to 0, so the graph flattens onto the constant k = 5: the horizontal asymptote is y = 5. a = −2 is negative, so the values stay below the asymptote — the range is (−∞, 5)."
  },
  {
    "stem": "Given f(x) = 6(2)^{x} + 1, what is the horizontal asymptote and the range of this function?",
    "choices": [
      "Horizontal asymptote at y = 1; range is (1, ∞)",
      "Horizontal asymptote at y = 1; range is [1, ∞)",
      "Horizontal asymptote at y = 6; range is (1, ∞)",
      "Horizontal asymptote at y = 0; range is (0, ∞)"
    ],
    "answer": 0,
    "hint": "The horizontal asymptote is the constant added at the end (k) — a and b do not move it. The sign of a then tells you which side of that line the range lives on.",
    "explanation": "At the far ends the b^x part either explodes or dies to 0, so the graph flattens onto the constant k = 1: the horizontal asymptote is y = 1. a = 6 is positive, so the values stay above the asymptote — the range is (1, ∞)."
  },
  {
    "stem": "As x increases toward infinity (x→∞), what happens to the values of the exponential function f(x) = −0.6(0.4)^{x}?",
    "choices": [
      "They decrease toward −∞.",
      "They increase toward 0 (from below).",
      "They remain constant at −0.6.",
      "They increase toward ∞."
    ],
    "answer": 1,
    "hint": "Follow the base first as x moves: b > 1 explodes, 0 < b < 1 dies to 0. Then let the sign of a (and any +k shift) place the values.",
    "explanation": "As x→∞, 0 < b = 0.4 < 1, so b^x dies toward 0 as x→∞, and a = −0.6 keeps the values negative as they shrink — they increase toward 0 (from below)."
  },
  {
    "stem": "As x decreases toward negative infinity (x→−∞), what happens to the values of the exponential function f(x) = 4(0.5)^{x}?",
    "choices": [
      "They approach 0.",
      "They increase toward ∞.",
      "They decrease toward −∞.",
      "They approach 4."
    ],
    "answer": 1,
    "hint": "Follow the base first as x moves: b > 1 explodes, 0 < b < 1 dies to 0. Then let the sign of a (and any +k shift) place the values.",
    "explanation": "0 < b = 1/2 < 1, so as x→−∞ the b^x part explodes, and a = 4 keeps the values positive — they increase toward ∞."
  },
  {
    "stem": "As x increases toward infinity (x→∞), what happens to the values of the exponential function f(x) = −3(2)^{x} + 1?",
    "choices": [
      "They approach 1 from above.",
      "They decrease toward −∞.",
      "They approach 1 from below.",
      "They increase toward ∞."
    ],
    "answer": 1,
    "hint": "Follow the base first as x moves: b > 1 explodes, 0 < b < 1 dies to 0. Then let the sign of a (and any +k shift) place the values.",
    "explanation": "As x→∞, b = 2 > 1, so b^x explodes as x→∞, but a = −3 is negative, flipping the values downward — they decrease toward −∞ (the shift does not matter at this end)."
  },
  {
    "stem": "As x decreases toward negative infinity (x→−∞), what happens to the values of the exponential function f(x) = −3(2)^{x} + 1?",
    "choices": [
      "They approach 1 from below.",
      "They approach 1 from above.",
      "They decrease toward −∞.",
      "They approach 0."
    ],
    "answer": 0,
    "hint": "Follow the base first as x moves: b > 1 explodes, 0 < b < 1 dies to 0. Then let the sign of a (and any +k shift) place the values.",
    "explanation": "b = 2 > 1, so as x→−∞ the b^x part dies toward 0, leaving the values at the asymptote y = 1, approached from below because the tiny b^x part keeps the sign of a = −3."
  },
  {
    "stem": "What is the horizontal asymptote of the graph of f(x) = 5 − 2(3)^{x}?",
    "choices": [
      "y = −2",
      "y = 0",
      "y = 5",
      "y = 3"
    ],
    "answer": 2,
    "hint": "Only the constant added at the end moves the horizontal asymptote. Rewrite the function as a·b^x + k if the constant is written first.",
    "explanation": "Rewrite f(x) = 5 − 2(3)^x as −2(3)^x + 5: the constant term is k = 5. As x→−∞ the (3)^x part dies to 0, so the graph flattens onto y = 5 — the horizontal asymptote. Neither a = −2 nor b = 3 moves it."
  },
  {
    "stem": "What is the range of f(x) = 1 − 4(0.7)^{x}?",
    "choices": [
      "(1, ∞)",
      "(−∞, 1)",
      "(−∞, 1]",
      "(0, 1)"
    ],
    "answer": 1,
    "hint": "The range starts at the horizontal asymptote and runs the way a points: up when a > 0, down when a < 0. The asymptote itself is never reached, so its bracket stays open.",
    "explanation": "f(x) = 1 − 4(0.7)^x is a = −4 times a shrinking base, plus k = 1: the horizontal asymptote is y = 1. a is negative, so the values live below the asymptote and dive to −∞ at the far end — the range is (−∞, 1), with an open bracket at 1 because the asymptote is approached but never touched."
  },
  {
    "stem": "Compare the functions f(x) = −3(2.5)^{x} and g(x) = −3(0.4)^{x}. Which statement is true regarding their directional behaviors as x increases?",
    "choices": [
      "f(x) is increasing while g(x) is decreasing.",
      "Both f(x) and g(x) are decreasing.",
      "f(x) is decreasing while g(x) is increasing.",
      "Both f(x) and g(x) are increasing."
    ],
    "answer": 2,
    "hint": "Find each function's direction on its own: a function rises when a > 0 with b > 1, or a < 0 with b < 1 — flip either one and it falls.",
    "explanation": "f: a = −3, b = 2.5 — b > 1 grows but negative a flips it downward, so f is Decreasing. g: a = −3, b = 0.4 — b < 1 shrinks and negative a makes the negative values climb toward 0, so g is Increasing."
  },
  {
    "stem": "Compare the functions f(x) = 5(1.8)^{x} and g(x) = −5(1.8)^{x}. Which statement is true regarding their directional behaviors as x increases?",
    "choices": [
      "f(x) is increasing while g(x) is decreasing.",
      "Both f(x) and g(x) are increasing.",
      "f(x) is decreasing while g(x) is increasing.",
      "Both f(x) and g(x) are decreasing."
    ],
    "answer": 0,
    "hint": "Find each function's direction on its own: a function rises when a > 0 with b > 1, or a < 0 with b < 1 — flip either one and it falls.",
    "explanation": "f: a = 5, b = 1.8 — b > 1 grows and positive a keeps it rising, so f is Increasing. g: a = −5, b = 1.8 — b > 1 grows but negative a flips it downward, so g is Decreasing."
  },
  {
    "stem": "For the function f(x) = −4(0.6)^{x}, what are the values of f(0) and f(1), and what do they indicate about the function's trend?",
    "choices": [
      "f(0) = −4, f(1) = −6.4; the function is decreasing.",
      "f(0) = 0, f(1) = −2.4; the function is increasing.",
      "f(0) = −4, f(1) = −4.6; the function is decreasing.",
      "f(0) = −4, f(1) = −2.4; the function is increasing."
    ],
    "answer": 3,
    "hint": "Anything to the power 0 is 1, so f(0) is just a. f(1) is a times b. Then compare the two numbers — bigger second value means increasing.",
    "explanation": "f(0) = −4 · (0.6)^0 = −4 · 1 = −4. f(1) = −4 · 0.6 = −2.4. Since −2.4 is greater than −4, the values rose as x went from 0 to 1 — the function is Increasing."
  },
  {
    "stem": "For the function f(x) = 3(1.4)^{x}, what are the values of f(0) and f(1), and what do they indicate about the function's trend?",
    "choices": [
      "f(0) = 3, f(1) = 4.2; the function is increasing.",
      "f(0) = 3, f(1) = 4.2; the function is decreasing.",
      "f(0) = 1.4, f(1) = 4.2; the function is increasing.",
      "f(0) = 3, f(1) = 4.4; the function is increasing."
    ],
    "answer": 0,
    "hint": "Anything to the power 0 is 1, so f(0) is just a. f(1) is a times b. Then compare the two numbers — bigger second value means increasing.",
    "explanation": "f(0) = 3 · (1.4)^0 = 3 · 1 = 3. f(1) = 3 · 1.4 = 4.2. Since 4.2 is greater than 3, the values rose as x went from 0 to 1 — the function is Increasing."
  },
  {
    "stem": "As x becomes extremely large and positive (x→∞), how does the function f(x) = −2.5(3)^{x} behave?",
    "choices": [
      "It approaches 0 from below.",
      "It approaches −∞.",
      "It approaches ∞.",
      "It approaches −2.5."
    ],
    "answer": 1,
    "hint": "Follow the base first as x moves: b > 1 explodes, 0 < b < 1 dies to 0. Then let the sign of a (and any +k shift) place the values.",
    "explanation": "As x→∞, b = 3 > 1, so b^x explodes as x→∞, but a = −2.5 is negative, flipping the values downward — they decrease toward −∞."
  },
  {
    "stem": "As x becomes extremely large and negative (x→−∞), how does the function f(x) = −2.5(3)^{x} behave?",
    "choices": [
      "It approaches 0 from above.",
      "It approaches −∞.",
      "It approaches 0 from below.",
      "It approaches −2.5."
    ],
    "answer": 2,
    "hint": "Follow the base first as x moves: b > 1 explodes, 0 < b < 1 dies to 0. Then let the sign of a (and any +k shift) place the values.",
    "explanation": "b = 3 > 1, so as x→−∞ the b^x part dies toward 0, the values approach 0 from below — the tiny b^x part keeps the sign of a = −2.5."
  },
  {
    "stem": "As x increases toward infinity (x→∞), what happens to the values of the exponential function f(x) = −7(0.3)^{x}?",
    "choices": [
      "They decrease toward −∞.",
      "They increase toward 0 (from below).",
      "They approach −7.",
      "They increase toward ∞."
    ],
    "answer": 1,
    "hint": "Follow the base first as x moves: b > 1 explodes, 0 < b < 1 dies to 0. Then let the sign of a (and any +k shift) place the values.",
    "explanation": "As x→∞, 0 < b = 0.3 < 1, so b^x dies toward 0 as x→∞, and a = −7 keeps the values negative as they shrink — they increase toward 0 (from below)."
  },
  {
    "stem": "As x becomes extremely large and positive (x→∞), how does the function f(x) = −0.5(6)^{x} behave?",
    "choices": [
      "It approaches 0 from below.",
      "It approaches ∞.",
      "It approaches −∞.",
      "It approaches −0.5."
    ],
    "answer": 2,
    "hint": "Follow the base first as x moves: b > 1 explodes, 0 < b < 1 dies to 0. Then let the sign of a (and any +k shift) place the values.",
    "explanation": "As x→∞, b = 6 > 1, so b^x explodes as x→∞, but a = −0.5 is negative, flipping the values downward — they decrease toward −∞."
  },
  {
    "stem": "As x becomes extremely large and positive (x→∞), how does the function f(x) = −4(5)^{x} + 2 behave?",
    "choices": [
      "It approaches 2 from below.",
      "It approaches −∞.",
      "It approaches ∞.",
      "It approaches −4."
    ],
    "answer": 1,
    "hint": "Follow the base first as x moves: b > 1 explodes, 0 < b < 1 dies to 0. Then let the sign of a (and any +k shift) place the values.",
    "explanation": "As x→∞, b = 5 > 1, so b^x explodes as x→∞, but a = −4 is negative, flipping the values downward — they decrease toward −∞ (the shift does not matter at this end)."
  },
  {
    "stem": "As x increases toward infinity (x→∞), what happens to the values of the exponential function f(x) = −9(0.1)^{x} − 3?",
    "choices": [
      "They decrease toward −∞.",
      "They approach −3 from above.",
      "They approach −3 from below.",
      "They approach 0 from below."
    ],
    "answer": 2,
    "hint": "Follow the base first as x moves: b > 1 explodes, 0 < b < 1 dies to 0. Then let the sign of a (and any +k shift) place the values.",
    "explanation": "As x→∞, 0 < b = 0.1 < 1, so b^x dies toward 0 as x→∞, and a = −9 keeps the shrinking part negative, so the values climb up to the asymptote y = −3 from below."
  },
  {
    "stem": "Consider the exponential function f(x) = −2(4)^{x} + 3. Which of the following statements correctly describes the concavity and left-end behavior of f(x)?",
    "choices": [
      "The function is concave down, and lim x→−∞ f(x) = −∞.",
      "The function is concave up, and lim x→−∞ f(x) = 0.",
      "The function is concave down, and lim x→−∞ f(x) = 3.",
      "The function is concave up, and lim x→−∞ f(x) = 3."
    ],
    "answer": 2,
    "hint": "Two separate checks: concavity is the sign of a only. For the LEFT end, ask what b^x does as x→−∞: if b > 1 it dies to 0 (leaving k); if 0 < b < 1 it explodes.",
    "explanation": "Concavity: the sign of a alone decides — a = −2 < 0, so the graph is concave down. Left end: as x→−∞, (4)^x dies toward 0, so the a·b^x part vanishes and f settles onto the shift: lim x→−∞ f(x) = 3. (The dive to −∞ for this function happens at the RIGHT end, not the left.)"
  },
  {
    "stem": "Consider the exponential function f(x) = 4(0.5)^{x} − 1. Which of the following statements correctly describes the concavity and left-end behavior of f(x)?",
    "choices": [
      "The function is concave up, and lim x→−∞ f(x) = ∞.",
      "The function is concave up, and lim x→−∞ f(x) = −1.",
      "The function is concave down, and lim x→−∞ f(x) = ∞.",
      "The function is concave down, and lim x→−∞ f(x) = −1."
    ],
    "answer": 0,
    "hint": "Two separate checks: concavity is the sign of a only. For the LEFT end, ask what b^x does as x→−∞: if b > 1 it dies to 0 (leaving k); if 0 < b < 1 it explodes.",
    "explanation": "Concavity: the sign of a alone decides — a = 4 > 0, so the graph is concave up. Left end: 0 < b = 1/2 < 1, so as x→−∞ the b^x part explodes to ∞, and a = 4 keeps the values positive — lim x→−∞ f(x) = ∞. (−1 is where this graph settles at the RIGHT end instead.)"
  }
];


export const growthDecayDrill4: McqItem[] = [
  {
    "stem": "Classify f(x) = −3(2)^{x}.",
    "choices": [
      "Neither, decreasing, concave down",
      "Growth, decreasing, concave down",
      "Neither, increasing, concave down",
      "Decay, decreasing, concave up"
    ],
    "answer": 0,
    "hint": "Work the table in order: the sign of a and the size of b give the type — and check a FIRST. Direction comes from a and b together; concavity comes from the sign of a alone.",
    "explanation": "Here a = −3 and b = 2. Type: a is negative, so the function is NEITHER growth nor decay — growth and decay both need a > 0 (b > 1 alone is the trap). Direction: b > 1 makes b^x explode, and the negative a flips it downward — decreasing. Concavity: only the sign of a decides — a < 0, so concave down."
  },
  {
    "stem": "Classify f(x) = −5(0.4)^{x}.",
    "choices": [
      "Decay, decreasing, concave up",
      "Neither, increasing, concave down",
      "Neither, decreasing, concave down",
      "Growth, increasing, concave up"
    ],
    "answer": 1,
    "hint": "Check the sign of a before anything else. Then ask: as x grows, does b^x grow or die to 0 — and what does the negative a do to those values?",
    "explanation": "Here a = −5 and b = 0.4. Type: a is negative, so NEITHER growth nor decay. Direction: b^x dies toward 0 as x increases, and the negative a keeps the values negative, so they climb UP toward 0 — increasing. (With a positive a this base would decrease; the negative a flips the direction.) Concavity: a < 0, so concave down."
  },
  {
    "stem": "Classify f(x) = −1.5(1.8)^{x} + 4.",
    "choices": [
      "Neither, decreasing, concave down",
      "Neither, decreasing, concave up",
      "Growth, decreasing, concave down",
      "Neither, increasing, concave down"
    ],
    "answer": 0,
    "hint": "The +4 shift moves the graph up and down only — it does not change the type, the direction, or the concavity. Classify from a and b.",
    "explanation": "Here a = −1.5 and b = 1.8 (the +4 only shifts the graph). Type: a < 0, so NEITHER. Direction: b > 1 explodes and negative a flips it down — decreasing. Concavity: a < 0, so concave down."
  },
  {
    "stem": "Classify f(x) = −8(0.25)^{x} + 2.",
    "choices": [
      "Neither, decreasing, concave down",
      "Decay, increasing, concave up",
      "Neither, increasing, concave up",
      "Neither, increasing, concave down"
    ],
    "answer": 3,
    "hint": "Same routine: a first for the type, a and b together for the direction, a alone for the concavity. The +2 changes none of them.",
    "explanation": "Here a = −8 and b = 0.25. Type: a < 0, so NEITHER (not decay — decay needs a > 0). Direction: b^x dies toward 0, values are negative and climb toward 0 (then toward the shift) — increasing. Concavity: a < 0, so concave down."
  },
  {
    "stem": "Classify f(x) = −2(4)^{−x}. (Clean up the exponent first.)",
    "choices": [
      "Neither, decreasing, concave down",
      "Neither, increasing, concave down",
      "Growth, increasing, concave up",
      "Neither, increasing, concave up"
    ],
    "answer": 1,
    "hint": "Clean up first: a negative exponent flips the base, so (4)^{−x} is really (1/4)^{x}. Then classify with b = 1/4 and a = −2.",
    "explanation": "Clean up first: the negative exponent flips the base, so the effective base is b = 1/4, with a = −2. Type: a < 0, so NEITHER. Direction: (1/4)^x dies toward 0 and the values are negative, so they climb toward 0 — increasing. Concavity: a < 0, so concave down."
  },
  {
    "stem": "Classify f(x) = −(1/3)^{−x}. (Clean up the exponent first.)",
    "choices": [
      "Neither, increasing, concave down",
      "Growth, decreasing, concave down",
      "Neither, decreasing, concave down",
      "Neither, decreasing, concave up"
    ],
    "answer": 2,
    "hint": "Clean up first: (1/3)^{−x} flips to (3)^{x}. Watch the leading negative sign as well — it stays in front.",
    "explanation": "Clean up first: the negative exponent flips the base, so the effective base is b = 3, and a = −1. Type: a < 0, so NEITHER. Direction: 3^x explodes and the negative a flips it downward — decreasing. Concavity: a < 0, so concave down."
  },
  {
    "stem": "Which statement about f(x) = −4(1.6)^{x} − 1 is TRUE?",
    "choices": [
      "It is growth, because b = 1.6 > 1",
      "It is increasing, because b > 1",
      "It is neither growth nor decay, and its range is (−∞, −1)",
      "It is concave up, because b > 1"
    ],
    "answer": 2,
    "hint": "Test each statement against the table: type from a and b, direction from a and b together, concavity from a alone, and the range from the asymptote y = −1 and the side the values live on.",
    "explanation": "a = −4 < 0, so the type is NEITHER — (A) is the classic trap, because b > 1 alone does not make growth when a is negative. Direction: b > 1 with a < 0 dives, so it is decreasing and (B) is wrong. Concavity comes from a alone — concave down, so (D) is wrong. The asymptote is y = −1 and the values dive below it, so the range is (−∞, −1). Only (C) is fully true."
  },
  {
    "stem": "Given f(x) = −3(2)^{x} + 5, what is the horizontal asymptote and the range of this function?",
    "choices": [
      "Horizontal asymptote at y = 5; range is (−∞, 5)",
      "Horizontal asymptote at y = 5; range is (5, ∞)",
      "Horizontal asymptote at y = 0; range is (−∞, 0)",
      "Horizontal asymptote at y = 5; range is (−∞, 5]"
    ],
    "answer": 0,
    "hint": "The asymptote is the shift k. For the range, ask which side of the asymptote the values live on: with a negative, the b^x part pulls values DOWN from the asymptote — and the asymptote value itself is never reached, so it never gets a square bracket.",
    "explanation": "The graph flattens onto the constant k = 5, so the horizontal asymptote is y = 5. With a = −3 the values dive downward from there, so they live BELOW the asymptote: range (−∞, 5). The value 5 itself is never reached, so the bracket stays round — (D) is the bracket trap."
  },
  {
    "stem": "Given f(x) = −2(0.5)^{x} − 3, what is the horizontal asymptote and the range of this function?",
    "choices": [
      "Horizontal asymptote at y = −3; range is (−3, ∞)",
      "Horizontal asymptote at y = −3; range is (−∞, −3)",
      "Horizontal asymptote at y = 0; range is (−∞, 0)",
      "Horizontal asymptote at y = −3; range is [−3, ∞)"
    ],
    "answer": 1,
    "hint": "Asymptote = the shift. Then picture one value: at x = 0 the function is −2 − 3 = −5, which is BELOW −3 — that tells you which side the range is on.",
    "explanation": "The horizontal asymptote is the shift, y = −3. At x = 0, f(0) = −2 − 3 = −5, below the asymptote, and the values climb toward −3 without reaching it — so the range is (−∞, −3)."
  },
  {
    "stem": "As x increases toward infinity (x→∞), what happens to the values of the exponential function f(x) = −6(0.2)^{x}?",
    "choices": [
      "They decrease toward −∞.",
      "They increase toward 0 (from below).",
      "They approach −6.",
      "They approach 0 from above."
    ],
    "answer": 1,
    "hint": "Split it: what does (0.2)^{x} do as x→∞? Then what does the −6 in front do to those shrinking values?",
    "explanation": "As x→∞, 0 < b = 0.2 < 1, so b^x dies toward 0. The a = −6 keeps the values negative as they shrink, so they climb UP toward 0 from below — increasing toward 0, not diving to −∞."
  },
  {
    "stem": "As x becomes extremely large and positive (x→∞), how does the function f(x) = −3(5)^{x} − 2 behave?",
    "choices": [
      "It approaches −2.",
      "It approaches 0 from below.",
      "It decreases toward −∞.",
      "It increases toward ∞."
    ],
    "answer": 2,
    "hint": "As x→∞ the (5)^{x} part explodes — it dwarfs the −2 shift completely. The only question left is the sign: what does the −3 in front do to an exploding positive value?",
    "explanation": "As x→∞, b = 5 > 1 so b^x explodes, and a = −3 flips those values downward — the function decreases toward −∞, shift and all. (Approaching the shift −2 is what happens at the LEFT end, not the right.)"
  },
  {
    "stem": "As x decreases toward negative infinity (x→−∞), what happens to the values of f(x) = −2(3)^{x} + 1?",
    "choices": [
      "They decrease toward −∞.",
      "They approach 1.",
      "They approach 0.",
      "They increase toward ∞."
    ],
    "answer": 1,
    "hint": "At the LEFT end the exponential part is the one that dies: as x→−∞, (3)^{x} shrinks toward 0. Whatever survives is the shift.",
    "explanation": "As x→−∞, (3)^x dies toward 0, so the −2(3)^x part vanishes and f settles onto its shift: the values approach 1 (from below). The dive to −∞ for this function happens at the RIGHT end, where (3)^x explodes under a negative a."
  },
  {
    "stem": "Consider the exponential function f(x) = −5(2)^{x} + 4. Which of the following statements correctly describes the concavity and left-end behavior of f(x)?",
    "choices": [
      "The function is concave down, and lim x→−∞ f(x) = 4.",
      "The function is concave down, and lim x→−∞ f(x) = −∞.",
      "The function is concave up, and lim x→−∞ f(x) = 4.",
      "The function is concave up, and lim x→−∞ f(x) = −∞."
    ],
    "answer": 0,
    "hint": "Two separate checks: concavity comes from the sign of a alone. For the left end, let (2)^{x} die to 0 and see what is left standing.",
    "explanation": "Concavity: the sign of a alone decides — a = −5 < 0, so concave down. Left end: as x→−∞, (2)^x dies toward 0, the −5(2)^x part vanishes, and f settles onto the shift: lim x→−∞ f(x) = 4. (The dive to −∞ is at the RIGHT end for this function.)"
  },
  {
    "stem": "For f(x) = −4(0.8)^{x}, note that f(0) = −4 and f(1) = −3.2. Is the function increasing or decreasing, and why?",
    "choices": [
      "Decreasing, because 0 < b < 1 means the function decays",
      "Increasing, because the values climb from −4 toward 0",
      "Decreasing, because the coefficient a is negative",
      "Neither — exponential functions are neither increasing nor decreasing"
    ],
    "answer": 1,
    "hint": "Trust the values, not the labels: −3.2 is GREATER than −4. When the outputs go up as x goes up, the function is increasing — whatever b looks like.",
    "explanation": "Read the values: as x goes from 0 to 1, the output goes from −4 UP to −3.2, so the function is increasing. The 'b < 1 means decreasing' shortcut only works when a > 0 — with a = −4 the values are negative and climb toward 0. A negative a by itself says nothing about direction either; a and b decide it together."
  },
  {
    "stem": "A food truck's weekly profit, in dollars, w weeks after opening is modeled by P(w) = −240(0.8)^{w} + 300. As w increases without bound, P(w) approaches 300. What does this mean in the context?",
    "choices": [
      "The weekly profit grows without bound.",
      "The weekly profit approaches $300 — the early losses fade out and the profit levels off at about $300 per week.",
      "The weekly profit decreases toward −$240.",
      "The weekly profit approaches $60."
    ],
    "answer": 1,
    "hint": "The term −240(0.8)^{w} dies toward 0 as w grows — it is the drag of the early weeks disappearing. What remains is the constant, and the question is what that constant represents.",
    "explanation": "As w→∞, (0.8)^w dies toward 0, so the −240(0.8)^w term — the drag from the early, money-losing weeks — fades away, and P(w) settles at the constant 300. In context: the weekly profit levels off at about $300 per week. (The profit at opening, P(0) = $60, is where it STARTS — not where it ends up.)"
  }
];
