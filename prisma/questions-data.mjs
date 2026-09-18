/**
 * AP Precalculus question bank — 79 ORIGINAL questions written from scratch
 * in College Board AP Precalculus style. None are copied from the College Board,
 * released exams, or any prep source.
 * @typedef {{subject:string, domain:string, difficulty:string, prompt:string,
 *   choices:string[]|null, correctIndex:number|null, correctText:string, explanation:string}} Q
 */
/** @type {Q[]} */
export const QUESTIONS = [
  // ================= UNIT 1: POLYNOMIAL & RATIONAL FUNCTIONS =================

  // ---------- Polynomial Functions ----------
  {
    subject: "unit-1", domain: "Polynomial Functions", difficulty: "easy",
    prompt: "If f(x) = x³ − 2x² + 5x − 1, what is the value of f(2)?",
    choices: ["7", "9", "11", "13"], correctIndex: 1, correctText: "9",
    explanation: "Substitute x = 2: f(2) = (2)³ − 2(2)² + 5(2) − 1 = 8 − 8 + 10 − 1 = 9.",
  },
  {
    subject: "unit-1", domain: "Polynomial Functions", difficulty: "easy",
    prompt: "What is the degree of the polynomial p(x) = (x² + 1)(x³ − 2x)?",
    choices: ["3", "4", "5", "6"], correctIndex: 2, correctText: "5",
    explanation: "The degree of a product is the sum of the degrees: 2 + 3 = 5. (The leading term is x⁵.)",
  },
  {
    subject: "unit-1", domain: "Polynomial Functions", difficulty: "medium",
    prompt: "The average rate of change of the function f on the interval [1, 4] is 5, and f(1) = 2. What is the value of f(4)?",
    choices: ["12", "15", "17", "22"], correctIndex: 2, correctText: "17",
    explanation: "Average rate of change = (f(4) − f(1)) / (4 − 1) = 5, so f(4) − 2 = 15, giving f(4) = 17.",
  },
  {
    subject: "unit-1", domain: "Polynomial Functions", difficulty: "medium",
    prompt: "By the Remainder Theorem, what is the remainder when p(x) = 2x³ − x² + 4x − 3 is divided by (x − 1)?",
    choices: ["0", "1", "2", "3"], correctIndex: 2, correctText: "2",
    explanation: "The Remainder Theorem says the remainder is p(1): 2(1)³ − (1)² + 4(1) − 3 = 2 − 1 + 4 − 3 = 2.",
  },

  // ---------- Zeros & Factors ----------
  {
    subject: "unit-1", domain: "Zeros & Factors", difficulty: "easy",
    prompt: "Which of the following is a zero of the polynomial p(x) = x² − 7x + 12?",
    choices: ["2", "3", "5", "6"], correctIndex: 1, correctText: "3",
    explanation: "Factor: x² − 7x + 12 = (x − 3)(x − 4), so the zeros are x = 3 and x = 4.",
  },
  {
    subject: "unit-1", domain: "Zeros & Factors", difficulty: "medium",
    prompt: "If (x + 2) is a factor of p(x) = x³ + 4x² + kx − 8, what is the value of k?",
    choices: ["−4", "−2", "0", "4"], correctIndex: 2, correctText: "0",
    explanation: "By the Factor Theorem, p(−2) = 0. So (−2)³ + 4(−2)² + k(−2) − 8 = −8 + 16 − 2k − 8 = −2k = 0, giving k = 0.",
  },
  {
    subject: "unit-1", domain: "Zeros & Factors", difficulty: "medium",
    prompt: "If the graph of a polynomial function f touches the x-axis at x = 2 but does not cross it there, which of the following could be the factored form of f?",
    choices: ["(x − 2)(x + 1)", "(x − 2)²(x + 1)", "(x − 2)³(x + 1)", "(x + 2)(x − 1)"],
    correctIndex: 1, correctText: "(x − 2)²(x + 1)",
    explanation: "A graph touches but does not cross the x-axis at a zero of even multiplicity. Only (x − 2)² gives x = 2 an even multiplicity (2).",
  },
  {
    subject: "unit-1", domain: "Zeros & Factors", difficulty: "medium",
    prompt: "How many real zeros does p(x) = x⁴ − 5x² + 4 have?",
    choices: ["1", "2", "3", "4"], correctIndex: 3, correctText: "4",
    explanation: "Factor: x⁴ − 5x² + 4 = (x² − 1)(x² − 4) = (x − 1)(x + 1)(x − 2)(x + 2), giving four real zeros: −2, −1, 1, 2.",
  },
  {
    subject: "unit-1", domain: "Zeros & Factors", difficulty: "hard",
    prompt: "A polynomial p has degree 4 with real coefficients. It is known that 1 + i is a zero of p. Which of the following must also be a zero of p?",
    choices: ["1 − i", "−1 + i", "−1 − i", "2i"], correctIndex: 0, correctText: "1 − i",
    explanation: "Nonreal zeros of a polynomial with real coefficients occur in conjugate pairs, so 1 − i must also be a zero.",
  },
  {
    subject: "unit-1", domain: "Zeros & Factors", difficulty: "hard",
    prompt: "A polynomial function p has zeros at x = −1 (multiplicity 2) and x = 3 (multiplicity 1), and p(0) = −9. Which of the following could be p(x)?",
    choices: ["3(x + 1)²(x − 3)", "(x + 1)²(x − 3)", "3(x + 1)(x − 3)²", "−3(x + 1)²(x − 3)"],
    correctIndex: 0, correctText: "3(x + 1)²(x − 3)",
    explanation: "The zeros give p(x) = a(x + 1)²(x − 3). Using p(0) = −9: a(1)²(−3) = −3a = −9, so a = 3.",
  },

  // ---------- End Behavior ----------
  {
    subject: "unit-1", domain: "End Behavior", difficulty: "medium",
    prompt: "The polynomial function f has leading term −4x⁵. Which of the following describes the end behavior of f?",
    choices: [
      "As x → −∞, f(x) → −∞ and as x → ∞, f(x) → −∞",
      "As x → −∞, f(x) → ∞ and as x → ∞, f(x) → −∞",
      "As x → −∞, f(x) → −∞ and as x → ∞, f(x) → ∞",
      "As x → −∞, f(x) → ∞ and as x → ∞, f(x) → ∞",
    ],
    correctIndex: 1, correctText: "As x → −∞, f(x) → ∞ and as x → ∞, f(x) → −∞",
    explanation: "The degree is odd (5) and the leading coefficient is negative (−4), so the ends go in opposite directions: up on the left, down on the right.",
  },
  {
    subject: "unit-1", domain: "End Behavior", difficulty: "medium",
    prompt: "Which of the following is true about the end behavior of f(x) = 2x⁴ − 5x³ + x − 7?",
    choices: [
      "f(x) → ∞ as x → −∞ and f(x) → ∞ as x → ∞",
      "f(x) → −∞ as x → −∞ and f(x) → −∞ as x → ∞",
      "f(x) → −∞ as x → −∞ and f(x) → ∞ as x → ∞",
      "f(x) → ∞ as x → −∞ and f(x) → −∞ as x → ∞",
    ],
    correctIndex: 0, correctText: "f(x) → ∞ as x → −∞ and f(x) → ∞ as x → ∞",
    explanation: "The degree is even (4) and the leading coefficient is positive (2), so both ends go to ∞.",
  },
  {
    subject: "unit-1", domain: "End Behavior", difficulty: "hard",
    prompt: "Let r(x) = (x³ + 2x) / (x² − 1). Which of the following best describes the end behavior of r?",
    choices: [
      "r(x) → ∞ as x → ∞ and r(x) → −∞ as x → −∞",
      "r(x) → −∞ as x → ∞ and r(x) → ∞ as x → −∞",
      "r(x) → 1 as x → ∞ and r(x) → 1 as x → −∞",
      "r(x) → 0 as x → ∞ and r(x) → 0 as x → −∞",
    ],
    correctIndex: 0, correctText: "r(x) → ∞ as x → ∞ and r(x) → −∞ as x → −∞",
    explanation: "For large |x|, r(x) behaves like x³/x² = x, which goes to ∞ on the right and −∞ on the left.",
  },

  // ---------- Rational Functions ----------
  {
    subject: "unit-1", domain: "Rational Functions", difficulty: "medium",
    prompt: "Let r(x) = (x² − 9) / (x² − 4x + 3). Which of the following is the domain of r?",
    choices: [
      "All real numbers",
      "All real numbers except x = 1",
      "All real numbers except x = 1 and x = 3",
      "All real numbers except x = −3",
    ],
    correctIndex: 2, correctText: "All real numbers except x = 1 and x = 3",
    explanation: "Factor the denominator: x² − 4x + 3 = (x − 3)(x − 1). The function is undefined where the denominator is 0, at x = 1 and x = 3.",
  },
  {
    subject: "unit-1", domain: "Rational Functions", difficulty: "medium",
    prompt: "Which of the following gives the vertical asymptotes of f(x) = (2x + 1) / (x² − x − 6)?",
    choices: ["x = 3 only", "x = −2 only", "x = 3 and x = −2", "x = 6"],
    correctIndex: 2, correctText: "x = 3 and x = −2",
    explanation: "Factor the denominator: x² − x − 6 = (x − 3)(x + 2). The numerator is nonzero at x = 3 and x = −2, so both are vertical asymptotes.",
  },
  {
    subject: "unit-1", domain: "Rational Functions", difficulty: "medium",
    prompt: "What is the horizontal asymptote of g(x) = (3x² + 2x − 1) / (5x² − x + 4)?",
    choices: ["y = 0", "y = 3/5", "y = 5/3", "y = 3"], correctIndex: 1, correctText: "y = 3/5",
    explanation: "The numerator and denominator have the same degree, so the horizontal asymptote is the ratio of leading coefficients: y = 3/5.",
  },
  {
    subject: "unit-1", domain: "Rational Functions", difficulty: "medium",
    prompt: "Let f(x) = 1/(x − 2) + 3. Which of the following gives the asymptotes of the graph of f?",
    choices: ["x = 2 and y = 3", "x = −2 and y = 3", "x = 2 and y = −3", "x = 3 and y = 2"],
    correctIndex: 0, correctText: "x = 2 and y = 3",
    explanation: "The graph is y = 1/x shifted right 2 and up 3, so its asymptotes x = 0 and y = 0 shift to x = 2 and y = 3.",
  },
  {
    subject: "unit-1", domain: "Rational Functions", difficulty: "hard",
    prompt: "Let h(x) = (x² − 4) / (x − 2). Which of the following statements is true about the graph of h?",
    choices: [
      "The graph has a vertical asymptote at x = 2.",
      "The graph is the line y = x + 2 with a hole at (2, 4).",
      "The graph has a horizontal asymptote at y = 1.",
      "The graph is the line y = x + 2 with no holes or asymptotes.",
    ],
    correctIndex: 1, correctText: "The graph is the line y = x + 2 with a hole at (2, 4).",
    explanation: "Factor: (x − 2)(x + 2)/(x − 2) = x + 2 for x ≠ 2. The common factor creates a hole at x = 2, where y = 4 — not an asymptote.",
  },
  {
    subject: "unit-1", domain: "Rational Functions", difficulty: "hard",
    prompt: "Let f(x) = (x² + 1) / (x − 1). Which of the following is the slant asymptote of the graph of f?",
    choices: ["y = x + 1", "y = x − 1", "y = x", "y = 1"], correctIndex: 0, correctText: "y = x + 1",
    explanation: "Polynomial division: (x² + 1) ÷ (x − 1) = (x + 1) with remainder 2. The quotient y = x + 1 is the slant asymptote.",
  },

  // ---------- Graphing & Modeling ----------
  {
    subject: "unit-1", domain: "Graphing & Modeling", difficulty: "easy",
    prompt: "Let f(x) = x² and g(x) = −(x − 3)² + 2. Which of the following describes the graph of g relative to the graph of f?",
    choices: [
      "Shifted 3 units right, 2 units up, and reflected over the x-axis",
      "Shifted 3 units left, 2 units up, and reflected over the x-axis",
      "Shifted 3 units right, 2 units down, and reflected over the y-axis",
      "Shifted 3 units left, 2 units down",
    ],
    correctIndex: 0, correctText: "Shifted 3 units right, 2 units up, and reflected over the x-axis",
    explanation: "The (x − 3) shifts right 3, the +2 shifts up 2, and the leading negative reflects over the x-axis.",
  },

  // ================= UNIT 2: EXPONENTIAL & LOGARITHMIC FUNCTIONS =================

  // ================= UNIT 2: EXPONENTIAL & LOGARITHMIC FUNCTIONS =================

  // ---------- Exponential Functions ----------
  {
    subject: "unit-2", domain: "Exponential Functions", difficulty: "easy",
    prompt: "If f(x) = 3(2)ˣ, what is the value of f(3)?",
    choices: ["12", "18", "24", "48"], correctIndex: 2, correctText: "24",
    explanation: "Substitute x = 3: f(3) = 3(2)³ = 3(8) = 24.",
  },
  {
    subject: "unit-2", domain: "Exponential Functions", difficulty: "easy",
    prompt: "Which of the following functions represents exponential decay?",
    choices: ["f(x) = 5(1.2)ˣ", "f(x) = 5(0.8)ˣ", "f(x) = 5x + 0.8", "f(x) = 5x²"],
    correctIndex: 1, correctText: "f(x) = 5(0.8)ˣ",
    explanation: "Exponential decay requires the form a(b)ˣ with 0 < b < 1. Only 0.8 satisfies this.",
  },
  {
    subject: "unit-2", domain: "Exponential Functions", difficulty: "easy",
    prompt: "What is the y-intercept of the graph of f(x) = 4(3)ˣ − 1?",
    choices: ["0", "3", "4", "−1"], correctIndex: 1, correctText: "3",
    explanation: "The y-intercept is f(0) = 4(3)⁰ − 1 = 4 − 1 = 3.",
  },
  {
    subject: "unit-2", domain: "Exponential Functions", difficulty: "medium",
    prompt: "The graph of f(x) = 2ˣ is shifted 4 units to the left and 1 unit down to obtain the graph of g. Which of the following is g(x)?",
    choices: ["2^(x+4) − 1", "2^(x−4) − 1", "2^(x+4) + 1", "2ˣ − 5"],
    correctIndex: 0, correctText: "2^(x+4) − 1",
    explanation: "Shifting left 4 replaces x with x + 4, and shifting down 1 subtracts 1: g(x) = 2^(x+4) − 1.",
  },
  {
    subject: "unit-2", domain: "Exponential Functions", difficulty: "medium",
    prompt: "Which of the following best describes the end behavior of f(x) = 5(0.5)ˣ as x → ∞?",
    choices: ["f(x) → ∞", "f(x) → 5", "f(x) → 0", "f(x) → −∞"],
    correctIndex: 2, correctText: "f(x) → 0",
    explanation: "Since 0 < 0.5 < 1, (0.5)ˣ → 0 as x → ∞, so f(x) → 5(0) = 0. The graph has a horizontal asymptote at y = 0.",
  },

  // ---------- Logarithmic Functions ----------
  {
    subject: "unit-2", domain: "Logarithmic Functions", difficulty: "easy",
    prompt: "What is the value of log₂(1/8)?",
    choices: ["−3", "−2", "3", "1/3"], correctIndex: 0, correctText: "−3",
    explanation: "log₂(1/8) asks: 2 to what power is 1/8? Since 2⁻³ = 1/8, the value is −3.",
  },
  {
    subject: "unit-2", domain: "Logarithmic Functions", difficulty: "easy",
    prompt: "The graph of f(x) = log(x) has a vertical asymptote at which of the following?",
    choices: ["x = 0", "x = 1", "y = 0", "y = 1"], correctIndex: 0, correctText: "x = 0",
    explanation: "The domain of log(x) is x > 0, and log(x) → −∞ as x → 0⁺, so there is a vertical asymptote at x = 0.",
  },
  {
    subject: "unit-2", domain: "Logarithmic Functions", difficulty: "easy",
    prompt: "Which of the following is equivalent to log₅(25)?",
    choices: ["2", "5", "1/2", "25"], correctIndex: 0, correctText: "2",
    explanation: "log₅(25) asks: 5 to what power is 25? Since 5² = 25, the value is 2.",
  },
  {
    subject: "unit-2", domain: "Logarithmic Functions", difficulty: "medium",
    prompt: "What is the inverse function of f(x) = 10ˣ?",
    choices: ["f⁻¹(x) = log(x)", "f⁻¹(x) = 10^(−x)", "f⁻¹(x) = x/10", "f⁻¹(x) = ln(x)"],
    correctIndex: 0, correctText: "f⁻¹(x) = log(x)",
    explanation: "Exponential and logarithmic functions with the same base are inverses. The inverse of 10ˣ is log base 10 of x.",
  },
  {
    subject: "unit-2", domain: "Logarithmic Functions", difficulty: "medium",
    prompt: "Let g(x) = ln(x − 2). What is the domain of g?",
    choices: ["x > 0", "x > 2", "x ≥ 2", "All real numbers"],
    correctIndex: 1, correctText: "x > 2",
    explanation: "The natural log requires a positive argument: x − 2 > 0, so x > 2.",
  },

  // ---------- Log Properties ----------
  {
    subject: "unit-2", domain: "Log Properties", difficulty: "medium",
    prompt: "Which of the following is equivalent to log(1000x²)? (Assume x > 0.)",
    choices: ["3 + 2 log(x)", "6 log(x)", "3 log(x) + 2", "log(3) + log(x²)"],
    correctIndex: 0, correctText: "3 + 2 log(x)",
    explanation: "log(1000x²) = log(1000) + log(x²) = 3 + 2 log(x), using the product rule and log(1000) = 3.",
  },
  {
    subject: "unit-2", domain: "Log Properties", difficulty: "medium",
    prompt: "Which of the following is equivalent to ln(x³) − ln(x)? (Assume x > 0.)",
    choices: ["3 ln(x)", "2 ln(x)", "ln(x³ − x)", "0"],
    correctIndex: 1, correctText: "2 ln(x)",
    explanation: "By the quotient rule, ln(x³) − ln(x) = ln(x³/x) = ln(x²) = 2 ln(x).",
  },
  {
    subject: "unit-2", domain: "Log Properties", difficulty: "medium",
    prompt: "Using the change of base formula, log₇(50) is equivalent to which of the following?",
    choices: ["ln(50)/ln(7)", "ln(7)/ln(50)", "log(50) − log(7)", "50/7"],
    correctIndex: 0, correctText: "ln(50)/ln(7)",
    explanation: "The change of base formula: logₐ(b) = ln(b)/ln(a), so log₇(50) = ln(50)/ln(7).",
  },
  {
    subject: "unit-2", domain: "Log Properties", difficulty: "hard",
    prompt: "If log₂(a) = 3 and log₂(b) = 5, what is the value of log₂(a²b)?",
    choices: ["8", "10", "11", "30"], correctIndex: 2, correctText: "11",
    explanation: "log₂(a²b) = 2 log₂(a) + log₂(b) = 2(3) + 5 = 11.",
  },

  // ---------- Solving Equations ----------
  {
    subject: "unit-2", domain: "Solving Equations", difficulty: "medium",
    prompt: "What is the solution to the equation 5^(2x) = 125?",
    choices: ["1/2", "1", "3/2", "3"], correctIndex: 2, correctText: "3/2",
    explanation: "Write 125 as 5³: 5^(2x) = 5³, so 2x = 3 and x = 3/2.",
  },
  {
    subject: "unit-2", domain: "Solving Equations", difficulty: "medium",
    prompt: "What is the solution to the equation 3^(x+1) = 81?",
    choices: ["2", "3", "4", "5"], correctIndex: 1, correctText: "3",
    explanation: "Write 81 as 3⁴: 3^(x+1) = 3⁴, so x + 1 = 4 and x = 3.",
  },
  {
    subject: "unit-2", domain: "Solving Equations", difficulty: "hard",
    prompt: "What is the solution to the equation log(x) + log(x − 3) = 1? (Logarithms are base 10.)",
    choices: ["−2", "2", "5", "10"], correctIndex: 2, correctText: "5",
    explanation: "Combine: log(x(x − 3)) = 1, so x(x − 3) = 10, giving x² − 3x − 10 = 0, or (x − 5)(x + 2) = 0. The value x = −2 is extraneous (log of a negative), so x = 5.",
  },
  {
    subject: "unit-2", domain: "Solving Equations", difficulty: "hard",
    prompt: "What is the sum of the solutions to the equation e^(2x) − 3eˣ + 2 = 0?",
    choices: ["0", "ln(2)", "1", "3"], correctIndex: 1, correctText: "ln(2)",
    explanation: "Let u = eˣ: u² − 3u + 2 = (u − 1)(u − 2) = 0, so eˣ = 1 or eˣ = 2, giving x = 0 or x = ln(2). Their sum is ln(2).",
  },
  {
    subject: "unit-2", domain: "Solving Equations", difficulty: "hard",
    prompt: "If 4ˣ = 9, which of the following is the value of x?",
    choices: ["log₂(3)", "log₃(2)", "9/4", "2"],
    correctIndex: 0, correctText: "log₂(3)",
    explanation: "Take the natural log of both sides: x ln(4) = ln(9), so x = ln(9)/ln(4) = 2ln(3)/(2ln(2)) = ln(3)/ln(2) = log₂(3).",
  },

  // ---------- Modeling & Applications ----------
  {
    subject: "unit-2", domain: "Modeling & Applications", difficulty: "medium",
    prompt: "A population of bacteria doubles every 3 hours. If the initial population is 500, which of the following functions models the population after t hours?",
    choices: ["P(t) = 500(2)^(t/3)", "P(t) = 500(2)^(3t)", "P(t) = 500(1/2)^(t/3)", "P(t) = 500 + 2t"],
    correctIndex: 0, correctText: "P(t) = 500(2)^(t/3)",
    explanation: "Doubling every 3 hours means the growth factor 2 is applied t/3 times: P(t) = 500(2)^(t/3).",
  },
  {
    subject: "unit-2", domain: "Modeling & Applications", difficulty: "medium",
    prompt: "A radioactive substance has a half-life of 10 years. If 200 grams are present initially, how many grams remain after 30 years?",
    choices: ["20", "25", "50", "66.7"], correctIndex: 1, correctText: "25",
    explanation: "After 30 years, 3 half-lives have passed: 200(1/2)³ = 200/8 = 25 grams.",
  },
  {
    subject: "unit-2", domain: "Modeling & Applications", difficulty: "medium",
    prompt: "An account earns 5% annual interest compounded annually. If $1000 is deposited, which of the following expressions gives the balance after t years?",
    choices: ["1000(1.05)^t", "1000(0.95)^t", "1000 + 50t", "1000(1.5)^t"],
    correctIndex: 0, correctText: "1000(1.05)^t",
    explanation: "Each year the balance is multiplied by 1 + 0.05 = 1.05, so after t years: 1000(1.05)^t.",
  },

  // ================= UNIT 3: TRIGONOMETRIC & POLAR FUNCTIONS =================

  // ---------- Unit Circle & Trig Values ----------
  {
    subject: "unit-3", domain: "Unit Circle & Trig Values", difficulty: "easy",
    prompt: "What is the exact value of sin(π/6)?",
    choices: ["1/2", "√3/2", "√2/2", "1"], correctIndex: 0, correctText: "1/2",
    explanation: "On the unit circle, the point at angle π/6 is (√3/2, 1/2). Since sin θ is the y-coordinate, sin(π/6) = 1/2.",
  },
  {
    subject: "unit-3", domain: "Unit Circle & Trig Values", difficulty: "easy",
    prompt: "What is the exact value of cos(5π/6)?",
    choices: ["√3/2", "-√3/2", "1/2", "-1/2"], correctIndex: 1, correctText: "-√3/2",
    explanation: "The angle 5π/6 is in Quadrant II with reference angle π/6. Cosine is negative in Quadrant II, so cos(5π/6) = −√3/2.",
  },
  {
    subject: "unit-3", domain: "Unit Circle & Trig Values", difficulty: "easy",
    prompt: "What is the exact value of tan(π/4)?",
    choices: ["0", "1/2", "1", "√3"], correctIndex: 2, correctText: "1",
    explanation: "tan θ = sin θ / cos θ. At π/4, sin(π/4) = cos(π/4) = √2/2, so tan(π/4) = 1.",
  },
  {
    subject: "unit-3", domain: "Unit Circle & Trig Values", difficulty: "medium",
    prompt: "If sin θ = 3/5 and θ is in Quadrant II, what is cos θ?",
    choices: ["4/5", "-4/5", "3/4", "-3/4"], correctIndex: 1, correctText: "-4/5",
    explanation: "By the Pythagorean identity, cos²θ = 1 − sin²θ = 1 − 9/25 = 16/25, so cos θ = ±4/5. Cosine is negative in Quadrant II, so cos θ = −4/5.",
  },
  {
    subject: "unit-3", domain: "Unit Circle & Trig Values", difficulty: "medium",
    prompt: "If cos θ = −1/3, what is the value of sec θ?",
    choices: ["-3", "-1/3", "3", "1/3"], correctIndex: 0, correctText: "-3",
    explanation: "Secant is the reciprocal of cosine: sec θ = 1/cos θ = 1/(−1/3) = −3.",
  },

  // ---------- Sinusoidal Graphs ----------
  {
    subject: "unit-3", domain: "Sinusoidal Graphs", difficulty: "easy",
    prompt: "For the function f(x) = 3 sin(2x), what is the period?",
    choices: ["π/2", "π", "2π", "4π"], correctIndex: 1, correctText: "π",
    explanation: "The period of sin(Bx) is 2π/B. Here B = 2, so the period is 2π/2 = π.",
  },
  {
    subject: "unit-3", domain: "Sinusoidal Graphs", difficulty: "easy",
    prompt: "What is the midline of the graph of g(x) = −2 cos(x) + 5?",
    choices: ["y = −2", "y = 2", "y = 5", "y = 0"], correctIndex: 2, correctText: "y = 5",
    explanation: "The midline of a sinusoid a·cos(Bx) + d is the horizontal line y = d. Here d = 5, so the midline is y = 5.",
  },
  {
    subject: "unit-3", domain: "Sinusoidal Graphs", difficulty: "medium",
    prompt: "A sinusoidal function has a maximum value of 7 and a minimum value of −3. What is its amplitude?",
    choices: ["2", "5", "7", "10"], correctIndex: 1, correctText: "5",
    explanation: "Amplitude = (max − min)/2 = (7 − (−3))/2 = 10/2 = 5.",
  },
  {
    subject: "unit-3", domain: "Sinusoidal Graphs", difficulty: "medium",
    prompt: "The graph of h(x) = sin(x − π/3) is the graph of sin(x) shifted how?",
    choices: ["π/3 units to the left", "π/3 units to the right", "π/6 units to the right", "π/3 units up"],
    correctIndex: 1, correctText: "π/3 units to the right",
    explanation: "Replacing x with (x − π/3) shifts the graph π/3 units to the right (the phase shift).",
  },
  {
    subject: "unit-3", domain: "Sinusoidal Graphs", difficulty: "hard",
    prompt: "For f(x) = 2 sin(3x − π) + 1, what is the period of f?",
    choices: ["2π/3", "π/3", "2π", "3π/2"], correctIndex: 0, correctText: "2π/3",
    explanation: "Rewrite as 2 sin(3(x − π/3)) + 1. The coefficient of x is 3, so the period is 2π/3.",
  },

  // ---------- Sinusoidal Modeling ----------
  {
    subject: "unit-3", domain: "Sinusoidal Modeling", difficulty: "medium",
    prompt: "A rider boards a Ferris wheel at its lowest point at time t = 0 seconds. The wheel has radius 10 feet, its center is 12 feet above the ground, and it completes one revolution every 60 seconds. The rider's height is modeled by h(t) = −10 cos(2πt/60) + 12. What is the rider's height at t = 15 seconds?",
    choices: ["2 feet", "12 feet", "22 feet", "10 feet"], correctIndex: 1, correctText: "12 feet",
    explanation: "At t = 15: h(15) = −10 cos(2π·15/60) + 12 = −10 cos(π/2) + 12 = −10(0) + 12 = 12 feet.",
  },
  {
    subject: "unit-3", domain: "Sinusoidal Modeling", difficulty: "hard",
    prompt: "The depth of water at a harbor is modeled by d(t) = 4 sin(πt/6) + 9, where t is hours after midnight. What is the first time after midnight that the water depth is 11 feet?",
    choices: ["1 hour", "2 hours", "3 hours", "6 hours"], correctIndex: 0, correctText: "1 hour",
    explanation: "Set 4 sin(πt/6) + 9 = 11, giving sin(πt/6) = 1/2. The first positive solution is πt/6 = π/6, so t = 1 hour.",
  },

  // ---------- Trig Equations & Identities ----------
  {
    subject: "unit-3", domain: "Trig Equations & Identities", difficulty: "medium",
    prompt: "How many solutions does the equation tan²x = 3 have on the interval [0, 2π)?",
    choices: ["1", "2", "3", "4"], correctIndex: 3, correctText: "4",
    explanation: "tan²x = 3 gives tan x = √3 or tan x = −√3. tan x = √3 at x = π/3 and 4π/3; tan x = −√3 at x = 2π/3 and 5π/3. That is 4 solutions.",
  },
  {
    subject: "unit-3", domain: "Trig Equations & Identities", difficulty: "medium",
    prompt: "Which of the following is equivalent to (1 − cos²x) / sin x for sin x ≠ 0?",
    choices: ["sin x", "cos x", "tan x", "1"], correctIndex: 0, correctText: "sin x",
    explanation: "By the Pythagorean identity, 1 − cos²x = sin²x. So (sin²x)/(sin x) = sin x.",
  },
  {
    subject: "unit-3", domain: "Trig Equations & Identities", difficulty: "medium",
    prompt: "What are all solutions of 2 sin(x) = 1 on the interval [0, 2π)?",
    choices: ["π/6 and 5π/6", "π/3 and 2π/3", "π/6 only", "5π/6 and 7π/6"],
    correctIndex: 0, correctText: "π/6 and 5π/6",
    explanation: "2 sin x = 1 gives sin x = 1/2. On [0, 2π), sine equals 1/2 at x = π/6 (Quadrant I) and x = 5π/6 (Quadrant II).",
  },

  // ---------- Inverse Trig Functions ----------
  {
    subject: "unit-3", domain: "Inverse Trig Functions", difficulty: "medium",
    prompt: "What is the exact value of arcsin(√3/2)?",
    choices: ["π/6", "π/3", "π/4", "2π/3"], correctIndex: 1, correctText: "π/3",
    explanation: "arcsin gives the angle in [−π/2, π/2] whose sine is √3/2. That angle is π/3.",
  },
  {
    subject: "unit-3", domain: "Inverse Trig Functions", difficulty: "medium",
    prompt: "What is the exact value of arctan(1)?",
    choices: ["π/4", "3π/4", "−π/4", "5π/4"], correctIndex: 0, correctText: "π/4",
    explanation: "arctan gives the angle in (−π/2, π/2) whose tangent is 1. That angle is π/4.",
  },

  // ---------- Polar Coordinates ----------
  {
    subject: "unit-3", domain: "Polar Coordinates", difficulty: "easy",
    prompt: "What are the rectangular coordinates of the point with polar coordinates (r, θ) = (2, π/3)?",
    choices: ["(1, √3)", "(√3, 1)", "(2, √3)", "(1, 2)"], correctIndex: 0, correctText: "(1, √3)",
    explanation: "x = r cos θ = 2 cos(π/3) = 2(1/2) = 1; y = r sin θ = 2 sin(π/3) = 2(√3/2) = √3. So the point is (1, √3).",
  },
  {
    subject: "unit-3", domain: "Polar Coordinates", difficulty: "medium",
    prompt: "Which of the following is another polar representation of the point (3, π/4)?",
    choices: ["(−3, 5π/4)", "(3, 5π/4)", "(−3, π/4)", "(3, −π/4)"],
    correctIndex: 0, correctText: "(−3, 5π/4)",
    explanation: "Negating r and adding π to θ gives the same point: (−3, π/4 + π) = (−3, 5π/4).",
  },

  // ---------- Polar Graphs ----------
  {
    subject: "unit-3", domain: "Polar Graphs", difficulty: "medium",
    prompt: "Which of the following best describes the graph of r = 2 cos θ?",
    choices: [
      "A circle of radius 2 centered at the origin",
      "A circle of radius 1 centered at (1, 0)",
      "A line through the origin",
      "A cardioid",
    ],
    correctIndex: 1, correctText: "A circle of radius 1 centered at (1, 0)",
    explanation: "Multiply by r: r² = 2r cos θ, so x² + y² = 2x, or (x − 1)² + y² = 1 — a circle of radius 1 centered at (1, 0).",
  },
  {
    subject: "unit-3", domain: "Polar Graphs", difficulty: "medium",
    prompt: "How many petals does the rose curve r = 3 sin(2θ) have?",
    choices: ["2", "3", "4", "6"], correctIndex: 2, correctText: "4",
    explanation: "For r = a sin(nθ) with n even, the rose has 2n petals. Here n = 2, so there are 4 petals.",
  },

  // ================= UNIT 4: PARAMETERS, VECTORS & MATRICES =================
  // Note: Unit 4 is part of the AP Precalculus course but is not assessed on the AP exam.

  // ---------- Parametric Functions ----------
  {
    subject: "unit-4", domain: "Parametric Functions", difficulty: "easy",
    prompt: "A curve is defined parametrically by x = t + 1 and y = 2t. Which rectangular equation describes the same curve?",
    choices: ["y = 2x − 2", "y = 2x + 1", "y = x + 2", "y = 2x"],
    correctIndex: 0, correctText: "y = 2x − 2",
    explanation: "From x = t + 1, t = x − 1. Substituting into y = 2t gives y = 2(x − 1) = 2x − 2.",
  },
  {
    subject: "unit-4", domain: "Parametric Functions", difficulty: "easy",
    prompt: "For the parametric equations x = t² and y = t + 1, what point corresponds to t = 2?",
    choices: ["(4, 3)", "(2, 3)", "(4, 5)", "(2, 5)"],
    correctIndex: 0, correctText: "(4, 3)",
    explanation: "Substitute t = 2: x = 2² = 4 and y = 2 + 1 = 3, so the point is (4, 3).",
  },
  {
    subject: "unit-4", domain: "Parametric Functions", difficulty: "medium",
    prompt: "The parametric equations x = cos t, y = sin t for 0 ≤ t ≤ π/2 trace a quarter circle. Which statement describes the direction of motion as t increases?",
    choices: [
      "Counterclockwise from (1, 0) to (0, 1)",
      "Clockwise from (1, 0) to (0, 1)",
      "Counterclockwise from (0, 1) to (1, 0)",
      "Clockwise from (0, 1) to (−1, 0)",
    ],
    correctIndex: 0, correctText: "Counterclockwise from (1, 0) to (0, 1)",
    explanation: "At t = 0 the point is (cos 0, sin 0) = (1, 0); at t = π/2 it is (0, 1). As t increases the point moves counterclockwise along the unit circle.",
  },
  {
    subject: "unit-4", domain: "Parametric Functions", difficulty: "medium",
    prompt: "A particle moves with position x(t) = 2t and y(t) = t² for t ≥ 0. What is the particle's position at t = 3?",
    choices: ["(6, 9)", "(3, 6)", "(6, 6)", "(2, 9)"],
    correctIndex: 0, correctText: "(6, 9)",
    explanation: "x(3) = 2(3) = 6 and y(3) = 3² = 9, so the position is (6, 9).",
  },
  {
    subject: "unit-4", domain: "Parametric Functions", difficulty: "hard",
    prompt: "A particle's position is given by x(t) = t − 1 and y(t) = 2 − t. Which rectangular equation describes its path?",
    choices: ["y = 1 − x", "y = x + 1", "y = 3 − x", "y = x − 1"],
    correctIndex: 0, correctText: "y = 1 − x",
    explanation: "From x = t − 1, t = x + 1. Then y = 2 − (x + 1) = 1 − x.",
  },

  // ---------- Vectors ----------
  {
    subject: "unit-4", domain: "Vectors", difficulty: "easy",
    prompt: "What is the magnitude of the vector v = ⟨3, 4⟩?",
    choices: ["5", "7", "12", "25"], correctIndex: 0, correctText: "5",
    explanation: "Magnitude = √(3² + 4²) = √(9 + 16) = √25 = 5.",
  },
  {
    subject: "unit-4", domain: "Vectors", difficulty: "easy",
    prompt: "What is the sum ⟨1, 2⟩ + ⟨3, −1⟩?",
    choices: ["⟨4, 1⟩", "⟨4, 3⟩", "⟨2, 1⟩", "⟨3, 1⟩"],
    correctIndex: 0, correctText: "⟨4, 1⟩",
    explanation: "Add component-wise: ⟨1 + 3, 2 + (−1)⟩ = ⟨4, 1⟩.",
  },
  {
    subject: "unit-4", domain: "Vectors", difficulty: "medium",
    prompt: "What is the direction angle (from the positive x-axis) of the vector ⟨1, 1⟩?",
    choices: ["30°", "45°", "60°", "135°"], correctIndex: 1, correctText: "45°",
    explanation: "tan θ = 1/1 = 1 with both components positive (Quadrant I), so θ = 45°.",
  },
  {
    subject: "unit-4", domain: "Vectors", difficulty: "medium",
    prompt: "What is the dot product ⟨2, 3⟩ · ⟨−1, 4⟩?",
    choices: ["10", "8", "−10", "14"], correctIndex: 0, correctText: "10",
    explanation: "⟨2, 3⟩ · ⟨−1, 4⟩ = (2)(−1) + (3)(4) = −2 + 12 = 10.",
  },
  {
    subject: "unit-4", domain: "Vectors", difficulty: "medium",
    prompt: "For what value of a are the vectors ⟨a, 2⟩ and ⟨3, −6⟩ perpendicular?",
    choices: ["2", "4", "−4", "6"], correctIndex: 1, correctText: "4",
    explanation: "Perpendicular vectors have dot product 0: (a)(3) + (2)(−6) = 3a − 12 = 0, so a = 4.",
  },

  // ---------- Matrices ----------
  {
    subject: "unit-4", domain: "Matrices", difficulty: "easy",
    prompt: "What is [[1, 2], [3, 4]] + [[0, 1], [1, 0]]?",
    choices: ["[[1, 3], [4, 4]]", "[[1, 2], [4, 4]]", "[[0, 3], [3, 0]]", "[[1, 3], [3, 4]]"],
    correctIndex: 0, correctText: "[[1, 3], [4, 4]]",
    explanation: "Add entry-wise: [[1+0, 2+1], [3+1, 4+0]] = [[1, 3], [4, 4]].",
  },
  {
    subject: "unit-4", domain: "Matrices", difficulty: "easy",
    prompt: "What is the determinant of [[3, 1], [2, 4]]?",
    choices: ["10", "14", "12", "−10"], correctIndex: 0, correctText: "10",
    explanation: "det = (3)(4) − (1)(2) = 12 − 2 = 10.",
  },
  {
    subject: "unit-4", domain: "Matrices", difficulty: "medium",
    prompt: "What is the product [[1, 2], [3, 4]] × [[2, 0], [1, 2]]?",
    choices: ["[[4, 4], [10, 8]]", "[[2, 4], [3, 8]]", "[[4, 2], [10, 6]]", "[[3, 4], [7, 12]]"],
    correctIndex: 0, correctText: "[[4, 4], [10, 8]]",
    explanation: "Row-by-column: top-left (1)(2)+(2)(1)=4; top-right (1)(0)+(2)(2)=4; bottom-left (3)(2)+(4)(1)=10; bottom-right (3)(0)+(4)(2)=8.",
  },
  {
    subject: "unit-4", domain: "Matrices", difficulty: "medium",
    prompt: "What is the inverse of [[2, 0], [0, 3]]?",
    choices: ["[[1/2, 0], [0, 1/3]]", "[[2, 0], [0, 3]]", "[[1/2, 0], [0, 3]]", "[[−2, 0], [0, −3]]"],
    correctIndex: 0, correctText: "[[1/2, 0], [0, 1/3]]",
    explanation: "For a diagonal matrix, the inverse inverts each diagonal entry: [[1/2, 0], [0, 1/3]]. Check: [[2,0],[0,3]]·[[1/2,0],[0,1/3]] = I.",
  },
  {
    subject: "unit-4", domain: "Matrices", difficulty: "medium",
    prompt: "The matrix [[0, −1], [1, 0]] represents a 90° counterclockwise rotation about the origin. What is the image of the point (1, 0)?",
    choices: ["(0, 1)", "(0, −1)", "(−1, 0)", "(1, 0)"],
    correctIndex: 0, correctText: "(0, 1)",
    explanation: "[[0,−1],[1,0]] · [1, 0]ᵀ = [0·1 + (−1)·0, 1·1 + 0·0]ᵀ = (0, 1).",
  },
  {
    subject: "unit-4", domain: "Matrices", difficulty: "hard",
    prompt: "What is the solution (x, y) of the matrix equation [[1, 2], [3, 4]] · [x, y]ᵀ = [5, 11]ᵀ?",
    choices: ["(1, 2)", "(2, 1)", "(3, −1)", "(−1, 3)"],
    correctIndex: 0, correctText: "(1, 2)",
    explanation: "Multiply both sides by the inverse [[−2, 1], [3/2, −1/2]]: x = −2(5) + 1(11) = 1, y = (3/2)(5) − (1/2)(11) = 2. Check: 1 + 4 = 5 and 3 + 8 = 11.",
  },
];
