/**
 * AP Precalculus question bank — 79 ORIGINAL questions written from scratch
 * in College Board AP Precalculus style. None are copied from the College Board,
 * released exams, or any prep source.
 *
 * Math is written in LaTeX inside \(...\) delimiters and rendered in the
 * browser with MathJax (free, Apache-2.0). Keep every backslash doubled
 * inside these JS strings.
 * @typedef {{slug:string, subject:string, domain:string, difficulty:string, prompt:string,
 *   choices:string[]|null, correctIndex:number|null, correctText:string, explanation:string}} Q
 */
/** @type {Q[]} */
export const QUESTIONS = [
  // ================= UNIT 1: POLYNOMIAL & RATIONAL FUNCTIONS =================

  // ---------- Polynomial Functions ----------
  {
    slug: "unit-1-01", subject: "unit-1", domain: "Polynomial Functions", difficulty: "easy",
    prompt: "If \\(f(x) = x^{3} - 2x^{2} + 5x - 1\\), what is the value of \\(f(2)\\)?",
    choices: ["7", "9", "11", "13"], correctIndex: 1, correctText: "9",
    explanation: "Substitute \\(x = 2\\): \\(f(2) = (2)^{3} - 2(2)^{2} + 5(2) - 1 = 8 - 8 + 10 - 1 = 9\\).",
  },
  {
    slug: "unit-1-02", subject: "unit-1", domain: "Polynomial Functions", difficulty: "easy",
    prompt: "What is the degree of the polynomial \\(p(x) = (x^{2} + 1)(x^{3} - 2x)\\)?",
    choices: ["3", "4", "5", "6"], correctIndex: 2, correctText: "5",
    explanation: "The degree of a product is the sum of the degrees: \\(2 + 3 = 5\\). (The leading term is \\(x^{5}\\).)",
  },
  {
    slug: "unit-1-03", subject: "unit-1", domain: "Polynomial Functions", difficulty: "medium",
    prompt: "The average rate of change of the function \\(f\\) on the interval \\([1, 4]\\) is 5, and \\(f(1) = 2\\). What is the value of \\(f(4)\\)?",
    choices: ["12", "15", "17", "22"], correctIndex: 2, correctText: "17",
    explanation: "Average rate of change = \\(\\frac{f(4) - f(1)}{4 - 1} = 5\\), so \\(f(4) - 2 = 15\\), giving \\(f(4) = 17\\).",
  },
  {
    slug: "unit-1-04", subject: "unit-1", domain: "Polynomial Functions", difficulty: "medium",
    prompt: "By the Remainder Theorem, what is the remainder when \\(p(x) = 2x^{3} - x^{2} + 4x - 3\\) is divided by \\((x - 1)\\)?",
    choices: ["0", "1", "2", "3"], correctIndex: 2, correctText: "2",
    explanation: "The Remainder Theorem says the remainder is \\(p(1)\\): \\(2(1)^{3} - (1)^{2} + 4(1) - 3 = 2 - 1 + 4 - 3 = 2\\).",
  },

  // ---------- Zeros & Factors ----------
  {
    slug: "unit-1-05", subject: "unit-1", domain: "Zeros & Factors", difficulty: "easy",
    prompt: "Which of the following is a zero of the polynomial \\(p(x) = x^{2} - 7x + 12\\)?",
    choices: ["2", "3", "5", "6"], correctIndex: 1, correctText: "3",
    explanation: "Factor: \\(x^{2} - 7x + 12 = (x - 3)(x - 4)\\), so the zeros are \\(x = 3\\) and \\(x = 4\\).",
  },
  {
    slug: "unit-1-06", subject: "unit-1", domain: "Zeros & Factors", difficulty: "medium",
    prompt: "If \\((x + 2)\\) is a factor of \\(p(x) = x^{3} + 4x^{2} + kx - 8\\), what is the value of \\(k\\)?",
    choices: ["\\(-4\\)", "\\(-2\\)", "0", "4"], correctIndex: 2, correctText: "0",
    explanation: "By the Factor Theorem, \\(p(-2) = 0\\). So \\((-2)^{3} + 4(-2)^{2} + k(-2) - 8 = -8 + 16 - 2k - 8 = -2k = 0\\), giving \\(k = 0\\).",
  },
  {
    slug: "unit-1-07", subject: "unit-1", domain: "Zeros & Factors", difficulty: "medium",
    prompt: "If the graph of a polynomial function \\(f\\) touches the \\(x\\)-axis at \\(x = 2\\) but does not cross it there, which of the following could be the factored form of \\(f\\)?",
    choices: ["\\((x - 2)(x + 1)\\)", "\\((x - 2)^{2}(x + 1)\\)", "\\((x - 2)^{3}(x + 1)\\)", "\\((x + 2)(x - 1)\\)"],
    correctIndex: 1, correctText: "\\((x - 2)^{2}(x + 1)\\)",
    explanation: "A graph touches but does not cross the \\(x\\)-axis at a zero of even multiplicity. Only \\((x - 2)^{2}\\) gives \\(x = 2\\) an even multiplicity (2).",
  },
  {
    slug: "unit-1-08", subject: "unit-1", domain: "Zeros & Factors", difficulty: "medium",
    prompt: "How many real zeros does \\(p(x) = x^{4} - 5x^{2} + 4\\) have?",
    choices: ["1", "2", "3", "4"], correctIndex: 3, correctText: "4",
    explanation: "Factor: \\(x^{4} - 5x^{2} + 4 = (x^{2} - 1)(x^{2} - 4) = (x - 1)(x + 1)(x - 2)(x + 2)\\), giving four real zeros: \\(-2\\), \\(-1\\), \\(1\\), \\(2\\).",
  },
  {
    slug: "unit-1-09", subject: "unit-1", domain: "Zeros & Factors", difficulty: "hard",
    prompt: "A polynomial \\(p\\) has degree 4 with real coefficients. It is known that \\(1 + i\\) is a zero of \\(p\\). Which of the following must also be a zero of \\(p\\)?",
    choices: ["\\(1 - i\\)", "\\(-1 + i\\)", "\\(-1 - i\\)", "\\(2i\\)"], correctIndex: 0, correctText: "\\(1 - i\\)",
    explanation: "Nonreal zeros of a polynomial with real coefficients occur in conjugate pairs, so \\(1 - i\\) must also be a zero.",
  },
  {
    slug: "unit-1-10", subject: "unit-1", domain: "Zeros & Factors", difficulty: "hard",
    prompt: "A polynomial function \\(p\\) has zeros at \\(x = -1\\) (multiplicity 2) and \\(x = 3\\) (multiplicity 1), and \\(p(0) = -9\\). Which of the following could be \\(p(x)\\)?",
    choices: ["\\(3(x + 1)^{2}(x - 3)\\)", "\\((x + 1)^{2}(x - 3)\\)", "\\(3(x + 1)(x - 3)^{2}\\)", "\\(-3(x + 1)^{2}(x - 3)\\)"],
    correctIndex: 0, correctText: "\\(3(x + 1)^{2}(x - 3)\\)",
    explanation: "The zeros give \\(p(x) = a(x + 1)^{2}(x - 3)\\). Using \\(p(0) = -9\\): \\(a(1)^{2}(-3) = -3a = -9\\), so \\(a = 3\\).",
  },

  // ---------- End Behavior ----------
  {
    slug: "unit-1-11", subject: "unit-1", domain: "End Behavior", difficulty: "medium",
    prompt: "The polynomial function \\(f\\) has leading term \\(-4x^{5}\\). Which of the following describes the end behavior of \\(f\\)?",
    choices: [
      "As \\(x \\to -\\infty\\), \\(f(x) \\to -\\infty\\) and as \\(x \\to \\infty\\), \\(f(x) \\to -\\infty\\)",
      "As \\(x \\to -\\infty\\), \\(f(x) \\to \\infty\\) and as \\(x \\to \\infty\\), \\(f(x) \\to -\\infty\\)",
      "As \\(x \\to -\\infty\\), \\(f(x) \\to -\\infty\\) and as \\(x \\to \\infty\\), \\(f(x) \\to \\infty\\)",
      "As \\(x \\to -\\infty\\), \\(f(x) \\to \\infty\\) and as \\(x \\to \\infty\\), \\(f(x) \\to \\infty\\)",
    ],
    correctIndex: 1, correctText: "As \\(x \\to -\\infty\\), \\(f(x) \\to \\infty\\) and as \\(x \\to \\infty\\), \\(f(x) \\to -\\infty\\)",
    explanation: "The degree is odd (5) and the leading coefficient is negative (\\(-4\\)), so the ends go in opposite directions: up on the left, down on the right.",
  },
  {
    slug: "unit-1-12", subject: "unit-1", domain: "End Behavior", difficulty: "medium",
    prompt: "Which of the following is true about the end behavior of \\(f(x) = 2x^{4} - 5x^{3} + x - 7\\)?",
    choices: [
      "\\(f(x) \\to \\infty\\) as \\(x \\to -\\infty\\) and \\(f(x) \\to \\infty\\) as \\(x \\to \\infty\\)",
      "\\(f(x) \\to -\\infty\\) as \\(x \\to -\\infty\\) and \\(f(x) \\to -\\infty\\) as \\(x \\to \\infty\\)",
      "\\(f(x) \\to -\\infty\\) as \\(x \\to -\\infty\\) and \\(f(x) \\to \\infty\\) as \\(x \\to \\infty\\)",
      "\\(f(x) \\to \\infty\\) as \\(x \\to -\\infty\\) and \\(f(x) \\to -\\infty\\) as \\(x \\to \\infty\\)",
    ],
    correctIndex: 0, correctText: "\\(f(x) \\to \\infty\\) as \\(x \\to -\\infty\\) and \\(f(x) \\to \\infty\\) as \\(x \\to \\infty\\)",
    explanation: "The degree is even (4) and the leading coefficient is positive (2), so both ends go to \\(\\infty\\).",
  },
  {
    slug: "unit-1-13", subject: "unit-1", domain: "End Behavior", difficulty: "hard",
    prompt: "Let \\(r(x) = \\frac{x^{3} + 2x}{x^{2} - 1}\\). Which of the following best describes the end behavior of \\(r\\)?",
    choices: [
      "\\(r(x) \\to \\infty\\) as \\(x \\to \\infty\\) and \\(r(x) \\to -\\infty\\) as \\(x \\to -\\infty\\)",
      "\\(r(x) \\to -\\infty\\) as \\(x \\to \\infty\\) and \\(r(x) \\to \\infty\\) as \\(x \\to -\\infty\\)",
      "\\(r(x) \\to 1\\) as \\(x \\to \\infty\\) and \\(r(x) \\to 1\\) as \\(x \\to -\\infty\\)",
      "\\(r(x) \\to 0\\) as \\(x \\to \\infty\\) and \\(r(x) \\to 0\\) as \\(x \\to -\\infty\\)",
    ],
    correctIndex: 0, correctText: "\\(r(x) \\to \\infty\\) as \\(x \\to \\infty\\) and \\(r(x) \\to -\\infty\\) as \\(x \\to -\\infty\\)",
    explanation: "For large \\(|x|\\), \\(r(x)\\) behaves like \\(\\frac{x^{3}}{x^{2}} = x\\), which goes to \\(\\infty\\) on the right and \\(-\\infty\\) on the left.",
  },

  // ---------- Rational Functions ----------
  {
    slug: "unit-1-14", subject: "unit-1", domain: "Rational Functions", difficulty: "medium",
    prompt: "Let \\(r(x) = \\frac{x^{2} - 9}{x^{2} - 4x + 3}\\). Which of the following is the domain of \\(r\\)?",
    choices: [
      "All real numbers",
      "All real numbers except \\(x = 1\\)",
      "All real numbers except \\(x = 1\\) and \\(x = 3\\)",
      "All real numbers except \\(x = -3\\)",
    ],
    correctIndex: 2, correctText: "All real numbers except \\(x = 1\\) and \\(x = 3\\)",
    explanation: "Factor the denominator: \\(x^{2} - 4x + 3 = (x - 3)(x - 1)\\). The function is undefined where the denominator is 0, at \\(x = 1\\) and \\(x = 3\\).",
  },
  {
    slug: "unit-1-15", subject: "unit-1", domain: "Rational Functions", difficulty: "medium",
    prompt: "Which of the following gives the vertical asymptotes of \\(f(x) = \\frac{2x + 1}{x^{2} - x - 6}\\)?",
    choices: ["\\(x = 3\\) only", "\\(x = -2\\) only", "\\(x = 3\\) and \\(x = -2\\)", "\\(x = 6\\)"],
    correctIndex: 2, correctText: "\\(x = 3\\) and \\(x = -2\\)",
    explanation: "Factor the denominator: \\(x^{2} - x - 6 = (x - 3)(x + 2)\\). The numerator is nonzero at \\(x = 3\\) and \\(x = -2\\), so both are vertical asymptotes.",
  },
  {
    slug: "unit-1-16", subject: "unit-1", domain: "Rational Functions", difficulty: "medium",
    prompt: "What is the horizontal asymptote of \\(g(x) = \\frac{3x^{2} + 2x - 1}{5x^{2} - x + 4}\\)?",
    choices: ["\\(y = 0\\)", "\\(y = \\frac{3}{5}\\)", "\\(y = \\frac{5}{3}\\)", "\\(y = 3\\)"], correctIndex: 1, correctText: "\\(y = \\frac{3}{5}\\)",
    explanation: "The numerator and denominator have the same degree, so the horizontal asymptote is the ratio of leading coefficients: \\(y = \\frac{3}{5}\\).",
  },
  {
    slug: "unit-1-17", subject: "unit-1", domain: "Rational Functions", difficulty: "medium",
    prompt: "Let \\(f(x) = \\frac{1}{x - 2} + 3\\). Which of the following gives the asymptotes of the graph of \\(f\\)?",
    choices: ["\\(x = 2\\) and \\(y = 3\\)", "\\(x = -2\\) and \\(y = 3\\)", "\\(x = 2\\) and \\(y = -3\\)", "\\(x = 3\\) and \\(y = 2\\)"],
    correctIndex: 0, correctText: "\\(x = 2\\) and \\(y = 3\\)",
    explanation: "The graph is \\(y = \\frac{1}{x}\\) shifted right 2 and up 3, so its asymptotes \\(x = 0\\) and \\(y = 0\\) shift to \\(x = 2\\) and \\(y = 3\\).",
  },
  {
    slug: "unit-1-18", subject: "unit-1", domain: "Rational Functions", difficulty: "hard",
    prompt: "Let \\(h(x) = \\frac{x^{2} - 4}{x - 2}\\). Which of the following statements is true about the graph of \\(h\\)?",
    choices: [
      "The graph has a vertical asymptote at \\(x = 2\\).",
      "The graph is the line \\(y = x + 2\\) with a hole at \\((2, 4)\\).",
      "The graph has a horizontal asymptote at \\(y = 1\\).",
      "The graph is the line \\(y = x + 2\\) with no holes or asymptotes.",
    ],
    correctIndex: 1, correctText: "The graph is the line \\(y = x + 2\\) with a hole at \\((2, 4)\\).",
    explanation: "Factor: \\(\\frac{(x - 2)(x + 2)}{x - 2} = x + 2\\) for \\(x \\ne 2\\). The common factor creates a hole at \\(x = 2\\), where \\(y = 4\\) — not an asymptote.",
  },
  {
    slug: "unit-1-19", subject: "unit-1", domain: "Rational Functions", difficulty: "hard",
    prompt: "Let \\(f(x) = \\frac{x^{2} + 1}{x - 1}\\). Which of the following is the slant asymptote of the graph of \\(f\\)?",
    choices: ["\\(y = x + 1\\)", "\\(y = x - 1\\)", "\\(y = x\\)", "\\(y = 1\\)"], correctIndex: 0, correctText: "\\(y = x + 1\\)",
    explanation: "Polynomial division: \\((x^{2} + 1) \\div (x - 1) = (x + 1)\\) with remainder 2. The quotient \\(y = x + 1\\) is the slant asymptote.",
  },

  // ---------- Graphing & Modeling ----------
  {
    slug: "unit-1-20", subject: "unit-1", domain: "Graphing & Modeling", difficulty: "easy",
    prompt: "Let \\(f(x) = x^{2}\\) and \\(g(x) = -(x - 3)^{2} + 2\\). Which of the following describes the graph of \\(g\\) relative to the graph of \\(f\\)?",
    choices: [
      "Shifted 3 units right, 2 units up, and reflected over the x-axis",
      "Shifted 3 units left, 2 units up, and reflected over the x-axis",
      "Shifted 3 units right, 2 units down, and reflected over the y-axis",
      "Shifted 3 units left, 2 units down",
    ],
    correctIndex: 0, correctText: "Shifted 3 units right, 2 units up, and reflected over the x-axis",
    explanation: "The \\((x - 3)\\) shifts right 3, the \\(+2\\) shifts up 2, and the leading negative reflects over the \\(x\\)-axis.",
  },

  // ================= UNIT 2: EXPONENTIAL & LOGARITHMIC FUNCTIONS =================

  // ---------- Exponential Functions ----------
  {
    slug: "unit-2-01", subject: "unit-2", domain: "Exponential Functions", difficulty: "easy",
    prompt: "If \\(f(x) = 3(2)^{x}\\), what is the value of \\(f(3)\\)?",
    choices: ["12", "18", "24", "48"], correctIndex: 2, correctText: "24",
    explanation: "Substitute \\(x = 3\\): \\(f(3) = 3(2)^{3} = 3(8) = 24\\).",
  },
  {
    slug: "unit-2-02", subject: "unit-2", domain: "Exponential Functions", difficulty: "easy",
    prompt: "Which of the following functions represents exponential decay?",
    choices: ["\\(f(x) = 5(1.2)^{x}\\)", "\\(f(x) = 5(0.8)^{x}\\)", "\\(f(x) = 5x + 0.8\\)", "\\(f(x) = 5x^{2}\\)"],
    correctIndex: 1, correctText: "\\(f(x) = 5(0.8)^{x}\\)",
    explanation: "Exponential decay requires the form \\(a(b)^{x}\\) with \\(0 < b < 1\\). Only 0.8 satisfies this.",
  },
  {
    slug: "unit-2-03", subject: "unit-2", domain: "Exponential Functions", difficulty: "easy",
    prompt: "What is the \\(y\\)-intercept of the graph of \\(f(x) = 4(3)^{x} - 1\\)?",
    choices: ["0", "3", "4", "\\(-1\\)"], correctIndex: 1, correctText: "3",
    explanation: "The \\(y\\)-intercept is \\(f(0) = 4(3)^{0} - 1 = 4 - 1 = 3\\).",
  },
  {
    slug: "unit-2-04", subject: "unit-2", domain: "Exponential Functions", difficulty: "medium",
    prompt: "The graph of \\(f(x) = 2^{x}\\) is shifted 4 units to the left and 1 unit down to obtain the graph of \\(g\\). Which of the following is \\(g(x)\\)?",
    choices: ["\\(2^{x+4} - 1\\)", "\\(2^{x-4} - 1\\)", "\\(2^{x+4} + 1\\)", "\\(2^{x} - 5\\)"],
    correctIndex: 0, correctText: "\\(2^{x+4} - 1\\)",
    explanation: "Shifting left 4 replaces \\(x\\) with \\(x + 4\\), and shifting down 1 subtracts 1: \\(g(x) = 2^{x+4} - 1\\).",
  },
  {
    slug: "unit-2-05", subject: "unit-2", domain: "Exponential Functions", difficulty: "medium",
    prompt: "Which of the following best describes the end behavior of \\(f(x) = 5(0.5)^{x}\\) as \\(x \\to \\infty\\)?",
    choices: ["\\(f(x) \\to \\infty\\)", "\\(f(x) \\to 5\\)", "\\(f(x) \\to 0\\)", "\\(f(x) \\to -\\infty\\)"],
    correctIndex: 2, correctText: "\\(f(x) \\to 0\\)",
    explanation: "Since \\(0 < 0.5 < 1\\), \\((0.5)^{x} \\to 0\\) as \\(x \\to \\infty\\), so \\(f(x) \\to 5(0) = 0\\). The graph has a horizontal asymptote at \\(y = 0\\).",
  },

  // ---------- Logarithmic Functions ----------
  {
    slug: "unit-2-06", subject: "unit-2", domain: "Logarithmic Functions", difficulty: "easy",
    prompt: "What is the value of \\(\\log_{2}(\\frac{1}{8})\\)?",
    choices: ["\\(-3\\)", "\\(-2\\)", "3", "\\(\\frac{1}{3}\\)"], correctIndex: 0, correctText: "\\(-3\\)",
    explanation: "\\(\\log_{2}(\\frac{1}{8})\\) asks: 2 to what power is \\(\\frac{1}{8}\\)? Since \\(2^{-3} = \\frac{1}{8}\\), the value is \\(-3\\).",
  },
  {
    slug: "unit-2-07", subject: "unit-2", domain: "Logarithmic Functions", difficulty: "easy",
    prompt: "The graph of \\(f(x) = \\log(x)\\) has a vertical asymptote at which of the following?",
    choices: ["\\(x = 0\\)", "\\(x = 1\\)", "\\(y = 0\\)", "\\(y = 1\\)"], correctIndex: 0, correctText: "\\(x = 0\\)",
    explanation: "The domain of \\(\\log(x)\\) is \\(x > 0\\), and \\(\\log(x) \\to -\\infty\\) as \\(x \\to 0^{+}\\), so there is a vertical asymptote at \\(x = 0\\).",
  },
  {
    slug: "unit-2-08", subject: "unit-2", domain: "Logarithmic Functions", difficulty: "easy",
    prompt: "Which of the following is equivalent to \\(\\log_{5}(25)\\)?",
    choices: ["2", "5", "\\(\\frac{1}{2}\\)", "25"], correctIndex: 0, correctText: "2",
    explanation: "\\(\\log_{5}(25)\\) asks: 5 to what power is 25? Since \\(5^{2} = 25\\), the value is 2.",
  },
  {
    slug: "unit-2-09", subject: "unit-2", domain: "Logarithmic Functions", difficulty: "medium",
    prompt: "What is the inverse function of \\(f(x) = 10^{x}\\)?",
    choices: ["\\(f^{-1}(x) = \\log(x)\\)", "\\(f^{-1}(x) = 10^{-x}\\)", "\\(f^{-1}(x) = \\frac{x}{10}\\)", "\\(f^{-1}(x) = \\ln(x)\\)"],
    correctIndex: 0, correctText: "\\(f^{-1}(x) = \\log(x)\\)",
    explanation: "Exponential and logarithmic functions with the same base are inverses. The inverse of \\(10^{x}\\) is log base 10 of \\(x\\).",
  },
  {
    slug: "unit-2-10", subject: "unit-2", domain: "Logarithmic Functions", difficulty: "medium",
    prompt: "Let \\(g(x) = \\ln(x - 2)\\). What is the domain of \\(g\\)?",
    choices: ["\\(x > 0\\)", "\\(x > 2\\)", "\\(x \\ge 2\\)", "All real numbers"],
    correctIndex: 1, correctText: "\\(x > 2\\)",
    explanation: "The natural log requires a positive argument: \\(x - 2 > 0\\), so \\(x > 2\\).",
  },

  // ---------- Log Properties ----------
  {
    slug: "unit-2-11", subject: "unit-2", domain: "Log Properties", difficulty: "medium",
    prompt: "Which of the following is equivalent to \\(\\log(1000x^{2})\\)? (Assume \\(x > 0\\).)",
    choices: ["\\(3 + 2\\log(x)\\)", "\\(6\\log(x)\\)", "\\(3\\log(x) + 2\\)", "\\(\\log(3) + \\log(x^{2})\\)"],
    correctIndex: 0, correctText: "\\(3 + 2\\log(x)\\)",
    explanation: "\\(\\log(1000x^{2}) = \\log(1000) + \\log(x^{2}) = 3 + 2\\log(x)\\), using the product rule and \\(\\log(1000) = 3\\).",
  },
  {
    slug: "unit-2-12", subject: "unit-2", domain: "Log Properties", difficulty: "medium",
    prompt: "Which of the following is equivalent to \\(\\ln(x^{3}) - \\ln(x)\\)? (Assume \\(x > 0\\).)",
    choices: ["\\(3\\ln(x)\\)", "\\(2\\ln(x)\\)", "\\(\\ln(x^{3} - x)\\)", "0"],
    correctIndex: 1, correctText: "\\(2\\ln(x)\\)",
    explanation: "By the quotient rule, \\(\\ln(x^{3}) - \\ln(x) = \\ln(\\frac{x^{3}}{x}) = \\ln(x^{2}) = 2\\ln(x)\\).",
  },
  {
    slug: "unit-2-13", subject: "unit-2", domain: "Log Properties", difficulty: "medium",
    prompt: "Using the change of base formula, \\(\\log_{7}(50)\\) is equivalent to which of the following?",
    choices: ["\\(\\frac{\\ln(50)}{\\ln(7)}\\)", "\\(\\frac{\\ln(7)}{\\ln(50)}\\)", "\\(\\log(50) - \\log(7)\\)", "\\(\\frac{50}{7}\\)"],
    correctIndex: 0, correctText: "\\(\\frac{\\ln(50)}{\\ln(7)}\\)",
    explanation: "The change of base formula: \\(\\log_{a}(b) = \\frac{\\ln(b)}{\\ln(a)}\\), so \\(\\log_{7}(50) = \\frac{\\ln(50)}{\\ln(7)}\\).",
  },
  {
    slug: "unit-2-14", subject: "unit-2", domain: "Log Properties", difficulty: "hard",
    prompt: "If \\(\\log_{2}(a) = 3\\) and \\(\\log_{2}(b) = 5\\), what is the value of \\(\\log_{2}(a^{2}b)\\)?",
    choices: ["8", "10", "11", "30"], correctIndex: 2, correctText: "11",
    explanation: "\\(\\log_{2}(a^{2}b) = 2\\log_{2}(a) + \\log_{2}(b) = 2(3) + 5 = 11\\).",
  },

  // ---------- Solving Equations ----------
  {
    slug: "unit-2-15", subject: "unit-2", domain: "Solving Equations", difficulty: "medium",
    prompt: "What is the solution to the equation \\(5^{2x} = 125\\)?",
    choices: ["\\(\\frac{1}{2}\\)", "1", "\\(\\frac{3}{2}\\)", "3"], correctIndex: 2, correctText: "\\(\\frac{3}{2}\\)",
    explanation: "Write 125 as \\(5^{3}\\): \\(5^{2x} = 5^{3}\\), so \\(2x = 3\\) and \\(x = \\frac{3}{2}\\).",
  },
  {
    slug: "unit-2-16", subject: "unit-2", domain: "Solving Equations", difficulty: "medium",
    prompt: "What is the solution to the equation \\(3^{x+1} = 81\\)?",
    choices: ["2", "3", "4", "5"], correctIndex: 1, correctText: "3",
    explanation: "Write 81 as \\(3^{4}\\): \\(3^{x+1} = 3^{4}\\), so \\(x + 1 = 4\\) and \\(x = 3\\).",
  },
  {
    slug: "unit-2-17", subject: "unit-2", domain: "Solving Equations", difficulty: "hard",
    prompt: "What is the solution to the equation \\(\\log(x) + \\log(x - 3) = 1\\)? (Logarithms are base 10.)",
    choices: ["\\(-2\\)", "2", "5", "10"], correctIndex: 2, correctText: "5",
    explanation: "Combine: \\(\\log(x(x - 3)) = 1\\), so \\(x(x - 3) = 10\\), giving \\(x^{2} - 3x - 10 = 0\\), or \\((x - 5)(x + 2) = 0\\). The value \\(x = -2\\) is extraneous (log of a negative), so \\(x = 5\\).",
  },
  {
    slug: "unit-2-18", subject: "unit-2", domain: "Solving Equations", difficulty: "hard",
    prompt: "What is the sum of the solutions to the equation \\(e^{2x} - 3e^{x} + 2 = 0\\)?",
    choices: ["0", "\\(\\ln(2)\\)", "1", "3"], correctIndex: 1, correctText: "\\(\\ln(2)\\)",
    explanation: "Let \\(u = e^{x}\\): \\(u^{2} - 3u + 2 = (u - 1)(u - 2) = 0\\), so \\(e^{x} = 1\\) or \\(e^{x} = 2\\), giving \\(x = 0\\) or \\(x = \\ln(2)\\). Their sum is \\(\\ln(2)\\).",
  },
  {
    slug: "unit-2-19", subject: "unit-2", domain: "Solving Equations", difficulty: "hard",
    prompt: "If \\(4^{x} = 9\\), which of the following is the value of \\(x\\)?",
    choices: ["\\(\\log_{2}(3)\\)", "\\(\\log_{3}(2)\\)", "\\(\\frac{9}{4}\\)", "2"],
    correctIndex: 0, correctText: "\\(\\log_{2}(3)\\)",
    explanation: "Take the natural log of both sides: \\(x\\ln(4) = \\ln(9)\\), so \\(x = \\frac{\\ln(9)}{\\ln(4)} = \\frac{2\\ln(3)}{2\\ln(2)} = \\frac{\\ln(3)}{\\ln(2)} = \\log_{2}(3)\\).",
  },

  // ---------- Modeling & Applications ----------
  {
    slug: "unit-2-20", subject: "unit-2", domain: "Modeling & Applications", difficulty: "medium",
    prompt: "A population of bacteria doubles every 3 hours. If the initial population is 500, which of the following functions models the population after \\(t\\) hours?",
    choices: ["\\(P(t) = 500(2)^{t/3}\\)", "\\(P(t) = 500(2)^{3t}\\)", "\\(P(t) = 500(\\frac{1}{2})^{t/3}\\)", "\\(P(t) = 500 + 2t\\)"],
    correctIndex: 0, correctText: "\\(P(t) = 500(2)^{t/3}\\)",
    explanation: "Doubling every 3 hours means the growth factor 2 is applied \\(t/3\\) times: \\(P(t) = 500(2)^{t/3}\\).",
  },
  {
    slug: "unit-2-21", subject: "unit-2", domain: "Modeling & Applications", difficulty: "medium",
    prompt: "A radioactive substance has a half-life of 10 years. If 200 grams are present initially, how many grams remain after 30 years?",
    choices: ["20", "25", "50", "66.7"], correctIndex: 1, correctText: "25",
    explanation: "After 30 years, 3 half-lives have passed: \\(200(\\frac{1}{2})^{3} = \\frac{200}{8} = 25\\) grams.",
  },
  {
    slug: "unit-2-22", subject: "unit-2", domain: "Modeling & Applications", difficulty: "medium",
    prompt: "An account earns 5% annual interest compounded annually. If $1000 is deposited, which of the following expressions gives the balance after \\(t\\) years?",
    choices: ["\\(1000(1.05)^{t}\\)", "\\(1000(0.95)^{t}\\)", "\\(1000 + 50t\\)", "\\(1000(1.5)^{t}\\)"],
    correctIndex: 0, correctText: "\\(1000(1.05)^{t}\\)",
    explanation: "Each year the balance is multiplied by \\(1 + 0.05 = 1.05\\), so after \\(t\\) years: \\(1000(1.05)^{t}\\).",
  },

  // ================= UNIT 3: TRIGONOMETRIC & POLAR FUNCTIONS =================

  // ---------- Unit Circle & Trig Values ----------
  {
    slug: "unit-3-01", subject: "unit-3", domain: "Unit Circle & Trig Values", difficulty: "easy",
    prompt: "What is the exact value of \\(\\sin(\\frac{\\pi}{6})\\)?",
    choices: ["\\(\\frac{1}{2}\\)", "\\(\\frac{\\sqrt{3}}{2}\\)", "\\(\\frac{\\sqrt{2}}{2}\\)", "1"], correctIndex: 0, correctText: "\\(\\frac{1}{2}\\)",
    explanation: "On the unit circle, the point at angle \\(\\frac{\\pi}{6}\\) is \\((\\frac{\\sqrt{3}}{2}, \\frac{1}{2})\\). Since \\(\\sin \\theta\\) is the \\(y\\)-coordinate, \\(\\sin(\\frac{\\pi}{6}) = \\frac{1}{2}\\).",
  },
  {
    slug: "unit-3-02", subject: "unit-3", domain: "Unit Circle & Trig Values", difficulty: "easy",
    prompt: "What is the exact value of \\(\\cos(\\frac{5\\pi}{6})\\)?",
    choices: ["\\(\\frac{\\sqrt{3}}{2}\\)", "\\(-\\frac{\\sqrt{3}}{2}\\)", "\\(\\frac{1}{2}\\)", "\\(-\\frac{1}{2}\\)"], correctIndex: 1, correctText: "\\(-\\frac{\\sqrt{3}}{2}\\)",
    explanation: "The angle \\(\\frac{5\\pi}{6}\\) is in Quadrant II with reference angle \\(\\frac{\\pi}{6}\\). Cosine is negative in Quadrant II, so \\(\\cos(\\frac{5\\pi}{6}) = -\\frac{\\sqrt{3}}{2}\\).",
  },
  {
    slug: "unit-3-03", subject: "unit-3", domain: "Unit Circle & Trig Values", difficulty: "easy",
    prompt: "What is the exact value of \\(\\tan(\\frac{\\pi}{4})\\)?",
    choices: ["0", "\\(\\frac{1}{2}\\)", "1", "\\(\\sqrt{3}\\)"], correctIndex: 2, correctText: "1",
    explanation: "\\(\\tan \\theta = \\frac{\\sin \\theta}{\\cos \\theta}\\). At \\(\\frac{\\pi}{4}\\), \\(\\sin(\\frac{\\pi}{4}) = \\cos(\\frac{\\pi}{4}) = \\frac{\\sqrt{2}}{2}\\), so \\(\\tan(\\frac{\\pi}{4}) = 1\\).",
  },
  {
    slug: "unit-3-04", subject: "unit-3", domain: "Unit Circle & Trig Values", difficulty: "medium",
    prompt: "If \\(\\sin \\theta = \\frac{3}{5}\\) and \\(\\theta\\) is in Quadrant II, what is \\(\\cos \\theta\\)?",
    choices: ["\\(\\frac{4}{5}\\)", "\\(-\\frac{4}{5}\\)", "\\(\\frac{3}{4}\\)", "\\(-\\frac{3}{4}\\)"], correctIndex: 1, correctText: "\\(-\\frac{4}{5}\\)",
    explanation: "By the Pythagorean identity, \\(\\cos^{2}\\theta = 1 - \\sin^{2}\\theta = 1 - \\frac{9}{25} = \\frac{16}{25}\\), so \\(\\cos \\theta = \\pm\\frac{4}{5}\\). Cosine is negative in Quadrant II, so \\(\\cos \\theta = -\\frac{4}{5}\\).",
  },
  {
    slug: "unit-3-05", subject: "unit-3", domain: "Unit Circle & Trig Values", difficulty: "medium",
    prompt: "If \\(\\cos \\theta = -\\frac{1}{3}\\), what is the value of \\(\\sec \\theta\\)?",
    choices: ["\\(-3\\)", "\\(-\\frac{1}{3}\\)", "3", "\\(\\frac{1}{3}\\)"], correctIndex: 0, correctText: "\\(-3\\)",
    explanation: "Secant is the reciprocal of cosine: \\(\\sec \\theta = \\frac{1}{\\cos \\theta} = \\frac{1}{(-\\frac{1}{3})} = -3\\).",
  },

  // ---------- Sinusoidal Graphs ----------
  {
    slug: "unit-3-06", subject: "unit-3", domain: "Sinusoidal Graphs", difficulty: "easy",
    prompt: "For the function \\(f(x) = 3\\sin(2x)\\), what is the period?",
    choices: ["\\(\\frac{\\pi}{2}\\)", "\\(\\pi\\)", "\\(2\\pi\\)", "\\(4\\pi\\)"], correctIndex: 1, correctText: "\\(\\pi\\)",
    explanation: "The period of \\(\\sin(Bx)\\) is \\(\\frac{2\\pi}{B}\\). Here \\(B = 2\\), so the period is \\(\\frac{2\\pi}{2} = \\pi\\).",
  },
  {
    slug: "unit-3-07", subject: "unit-3", domain: "Sinusoidal Graphs", difficulty: "easy",
    prompt: "What is the midline of the graph of \\(g(x) = -2\\cos(x) + 5\\)?",
    choices: ["\\(y = -2\\)", "\\(y = 2\\)", "\\(y = 5\\)", "\\(y = 0\\)"], correctIndex: 2, correctText: "\\(y = 5\\)",
    explanation: "The midline of a sinusoid \\(a\\cdot\\cos(Bx) + d\\) is the horizontal line \\(y = d\\). Here \\(d = 5\\), so the midline is \\(y = 5\\).",
  },
  {
    slug: "unit-3-08", subject: "unit-3", domain: "Sinusoidal Graphs", difficulty: "medium",
    prompt: "A sinusoidal function has a maximum value of 7 and a minimum value of \\(-3\\). What is its amplitude?",
    choices: ["2", "5", "7", "10"], correctIndex: 1, correctText: "5",
    explanation: "Amplitude = \\(\\frac{7 - (-3)}{2} = \\frac{10}{2} = 5\\).",
  },
  {
    slug: "unit-3-09", subject: "unit-3", domain: "Sinusoidal Graphs", difficulty: "medium",
    prompt: "The graph of \\(h(x) = \\sin(x - \\frac{\\pi}{3})\\) is the graph of \\(\\sin(x)\\) shifted how?",
    choices: ["\\(\\frac{\\pi}{3}\\) units to the left", "\\(\\frac{\\pi}{3}\\) units to the right", "\\(\\frac{\\pi}{6}\\) units to the right", "\\(\\frac{\\pi}{3}\\) units up"],
    correctIndex: 1, correctText: "\\(\\frac{\\pi}{3}\\) units to the right",
    explanation: "Replacing \\(x\\) with \\((x - \\frac{\\pi}{3})\\) shifts the graph \\(\\frac{\\pi}{3}\\) units to the right (the phase shift).",
  },
  {
    slug: "unit-3-10", subject: "unit-3", domain: "Sinusoidal Graphs", difficulty: "hard",
    prompt: "For \\(f(x) = 2\\sin(3x - \\pi) + 1\\), what is the period of \\(f\\)?",
    choices: ["\\(\\frac{2\\pi}{3}\\)", "\\(\\frac{\\pi}{3}\\)", "\\(2\\pi\\)", "\\(\\frac{3\\pi}{2}\\)"], correctIndex: 0, correctText: "\\(\\frac{2\\pi}{3}\\)",
    explanation: "Rewrite as \\(2\\sin(3(x - \\frac{\\pi}{3})) + 1\\). The coefficient of \\(x\\) is 3, so the period is \\(\\frac{2\\pi}{3}\\).",
  },

  // ---------- Sinusoidal Modeling ----------
  {
    slug: "unit-3-11", subject: "unit-3", domain: "Sinusoidal Modeling", difficulty: "medium",
    prompt: "A rider boards a Ferris wheel at its lowest point at time \\(t = 0\\) seconds. The wheel has radius 10 feet, its center is 12 feet above the ground, and it completes one revolution every 60 seconds. The rider's height is modeled by \\(h(t) = -10\\cos(\\frac{2\\pi t}{60}) + 12\\). What is the rider's height at \\(t = 15\\) seconds?",
    choices: ["2 feet", "12 feet", "22 feet", "10 feet"], correctIndex: 1, correctText: "12 feet",
    explanation: "At \\(t = 15\\): \\(h(15) = -10\\cos(\\frac{2\\pi \\cdot 15}{60}) + 12 = -10\\cos(\\frac{\\pi}{2}) + 12 = -10(0) + 12 = 12\\) feet.",
  },
  {
    slug: "unit-3-12", subject: "unit-3", domain: "Sinusoidal Modeling", difficulty: "hard",
    prompt: "The depth of water at a harbor is modeled by \\(d(t) = 4\\sin(\\frac{\\pi t}{6}) + 9\\), where \\(t\\) is hours after midnight. What is the first time after midnight that the water depth is 11 feet?",
    choices: ["1 hour", "2 hours", "3 hours", "6 hours"], correctIndex: 0, correctText: "1 hour",
    explanation: "Set \\(4\\sin(\\frac{\\pi t}{6}) + 9 = 11\\), giving \\(\\sin(\\frac{\\pi t}{6}) = \\frac{1}{2}\\). The first positive solution is \\(\\frac{\\pi t}{6} = \\frac{\\pi}{6}\\), so \\(t = 1\\) hour.",
  },

  // ---------- Trig Equations & Identities ----------
  {
    slug: "unit-3-13", subject: "unit-3", domain: "Trig Equations & Identities", difficulty: "medium",
    prompt: "How many solutions does the equation \\(\\tan^{2}x = 3\\) have on the interval \\([0, 2\\pi)\\)?",
    choices: ["1", "2", "3", "4"], correctIndex: 3, correctText: "4",
    explanation: "\\(\\tan^{2}x = 3\\) gives \\(\\tan x = \\sqrt{3}\\) or \\(\\tan x = -\\sqrt{3}\\). \\(\\tan x = \\sqrt{3}\\) at \\(x = \\frac{\\pi}{3}\\) and \\(\\frac{4\\pi}{3}\\); \\(\\tan x = -\\sqrt{3}\\) at \\(x = \\frac{2\\pi}{3}\\) and \\(\\frac{5\\pi}{3}\\). That is 4 solutions.",
  },
  {
    slug: "unit-3-14", subject: "unit-3", domain: "Trig Equations & Identities", difficulty: "medium",
    prompt: "Which of the following is equivalent to \\(\\frac{1 - \\cos^{2}x}{\\sin x}\\) for \\(\\sin x \\ne 0\\)?",
    choices: ["\\(\\sin x\\)", "\\(\\cos x\\)", "\\(\\tan x\\)", "1"], correctIndex: 0, correctText: "\\(\\sin x\\)",
    explanation: "By the Pythagorean identity, \\(1 - \\cos^{2}x = \\sin^{2}x\\). So \\(\\frac{\\sin^{2}x}{\\sin x} = \\sin x\\).",
  },
  {
    slug: "unit-3-15", subject: "unit-3", domain: "Trig Equations & Identities", difficulty: "medium",
    prompt: "What are all solutions of \\(2\\sin(x) = 1\\) on the interval \\([0, 2\\pi)\\)?",
    choices: ["\\(\\frac{\\pi}{6}\\) and \\(\\frac{5\\pi}{6}\\)", "\\(\\frac{\\pi}{3}\\) and \\(\\frac{2\\pi}{3}\\)", "\\(\\frac{\\pi}{6}\\) only", "\\(\\frac{5\\pi}{6}\\) and \\(\\frac{7\\pi}{6}\\)"],
    correctIndex: 0, correctText: "\\(\\frac{\\pi}{6}\\) and \\(\\frac{5\\pi}{6}\\)",
    explanation: "\\(2\\sin x = 1\\) gives \\(\\sin x = \\frac{1}{2}\\). On \\([0, 2\\pi)\\), sine equals \\(\\frac{1}{2}\\) at \\(x = \\frac{\\pi}{6}\\) (Quadrant I) and \\(x = \\frac{5\\pi}{6}\\) (Quadrant II).",
  },

  // ---------- Inverse Trig Functions ----------
  {
    slug: "unit-3-16", subject: "unit-3", domain: "Inverse Trig Functions", difficulty: "medium",
    prompt: "What is the exact value of \\(\\arcsin(\\frac{\\sqrt{3}}{2})\\)?",
    choices: ["\\(\\frac{\\pi}{6}\\)", "\\(\\frac{\\pi}{3}\\)", "\\(\\frac{\\pi}{4}\\)", "\\(\\frac{2\\pi}{3}\\)"], correctIndex: 1, correctText: "\\(\\frac{\\pi}{3}\\)",
    explanation: "\\(\\arcsin\\) gives the angle in \\([-\\frac{\\pi}{2}, \\frac{\\pi}{2}]\\) whose sine is \\(\\frac{\\sqrt{3}}{2}\\). That angle is \\(\\frac{\\pi}{3}\\).",
  },
  {
    slug: "unit-3-17", subject: "unit-3", domain: "Inverse Trig Functions", difficulty: "medium",
    prompt: "What is the exact value of \\(\\arctan(1)\\)?",
    choices: ["\\(\\frac{\\pi}{4}\\)", "\\(\\frac{3\\pi}{4}\\)", "\\(-\\frac{\\pi}{4}\\)", "\\(\\frac{5\\pi}{4}\\)"], correctIndex: 0, correctText: "\\(\\frac{\\pi}{4}\\)",
    explanation: "\\(\\arctan\\) gives the angle in \\((-\\frac{\\pi}{2}, \\frac{\\pi}{2})\\) whose tangent is 1. That angle is \\(\\frac{\\pi}{4}\\).",
  },

  // ---------- Polar Coordinates ----------
  {
    slug: "unit-3-18", subject: "unit-3", domain: "Polar Coordinates", difficulty: "easy",
    prompt: "What are the rectangular coordinates of the point with polar coordinates \\((r, \\theta) = (2, \\frac{\\pi}{3})\\)?",
    choices: ["\\((1, \\sqrt{3})\\)", "\\((\\sqrt{3}, 1)\\)", "\\((2, \\sqrt{3})\\)", "\\((1, 2)\\)"], correctIndex: 0, correctText: "\\((1, \\sqrt{3})\\)",
    explanation: "\\(x = r\\cos \\theta = 2\\cos(\\frac{\\pi}{3}) = 2(\\frac{1}{2}) = 1\\); \\(y = r\\sin \\theta = 2\\sin(\\frac{\\pi}{3}) = 2(\\frac{\\sqrt{3}}{2}) = \\sqrt{3}\\). So the point is \\((1, \\sqrt{3})\\).",
  },
  {
    slug: "unit-3-19", subject: "unit-3", domain: "Polar Coordinates", difficulty: "medium",
    prompt: "Which of the following is another polar representation of the point \\((3, \\frac{\\pi}{4})\\)?",
    choices: ["\\((-3, \\frac{5\\pi}{4})\\)", "\\((3, \\frac{5\\pi}{4})\\)", "\\((-3, \\frac{\\pi}{4})\\)", "\\((3, -\\frac{\\pi}{4})\\)"],
    correctIndex: 0, correctText: "\\((-3, \\frac{5\\pi}{4})\\)",
    explanation: "Negating \\(r\\) and adding \\(\\pi\\) to \\(\\theta\\) gives the same point: \\((-3, \\frac{\\pi}{4} + \\pi) = (-3, \\frac{5\\pi}{4})\\).",
  },

  // ---------- Polar Graphs ----------
  {
    slug: "unit-3-20", subject: "unit-3", domain: "Polar Graphs", difficulty: "medium",
    prompt: "Which of the following best describes the graph of \\(r = 2\\cos \\theta\\)?",
    choices: [
      "A circle of radius 2 centered at the origin",
      "A circle of radius 1 centered at \\((1, 0)\\)",
      "A line through the origin",
      "A cardioid",
    ],
    correctIndex: 1, correctText: "A circle of radius 1 centered at \\((1, 0)\\)",
    explanation: "Multiply by \\(r\\): \\(r^{2} = 2r\\cos \\theta\\), so \\(x^{2} + y^{2} = 2x\\), or \\((x - 1)^{2} + y^{2} = 1\\) — a circle of radius 1 centered at \\((1, 0)\\).",
  },
  {
    slug: "unit-3-21", subject: "unit-3", domain: "Polar Graphs", difficulty: "medium",
    prompt: "How many petals does the rose curve \\(r = 3\\sin(2\\theta)\\) have?",
    choices: ["2", "3", "4", "6"], correctIndex: 2, correctText: "4",
    explanation: "For \\(r = a\\sin(n\\theta)\\) with \\(n\\) even, the rose has \\(2n\\) petals. Here \\(n = 2\\), so there are 4 petals.",
  },

  // ================= UNIT 4: PARAMETERS, VECTORS & MATRICES =================
  // Note: Unit 4 is part of the AP Precalculus course but is not assessed on the AP exam.

  // ---------- Parametric Functions ----------
  {
    slug: "unit-4-01", subject: "unit-4", domain: "Parametric Functions", difficulty: "easy",
    prompt: "A curve is defined parametrically by \\(x = t + 1\\) and \\(y = 2t\\). Which rectangular equation describes the same curve?",
    choices: ["\\(y = 2x - 2\\)", "\\(y = 2x + 1\\)", "\\(y = x + 2\\)", "\\(y = 2x\\)"],
    correctIndex: 0, correctText: "\\(y = 2x - 2\\)",
    explanation: "From \\(x = t + 1\\), \\(t = x - 1\\). Substituting into \\(y = 2t\\) gives \\(y = 2(x - 1) = 2x - 2\\).",
  },
  {
    slug: "unit-4-02", subject: "unit-4", domain: "Parametric Functions", difficulty: "easy",
    prompt: "For the parametric equations \\(x = t^{2}\\) and \\(y = t + 1\\), what point corresponds to \\(t = 2\\)?",
    choices: ["\\((4, 3)\\)", "\\((2, 3)\\)", "\\((4, 5)\\)", "\\((2, 5)\\)"],
    correctIndex: 0, correctText: "\\((4, 3)\\)",
    explanation: "Substitute \\(t = 2\\): \\(x = 2^{2} = 4\\) and \\(y = 2 + 1 = 3\\), so the point is \\((4, 3)\\).",
  },
  {
    slug: "unit-4-03", subject: "unit-4", domain: "Parametric Functions", difficulty: "medium",
    prompt: "The parametric equations \\(x = \\cos t\\), \\(y = \\sin t\\) for \\(0 \\le t \\le \\frac{\\pi}{2}\\) trace a quarter circle. Which statement describes the direction of motion as \\(t\\) increases?",
    choices: [
      "Counterclockwise from \\((1, 0)\\) to \\((0, 1)\\)",
      "Clockwise from \\((1, 0)\\) to \\((0, 1)\\)",
      "Counterclockwise from \\((0, 1)\\) to \\((1, 0)\\)",
      "Clockwise from \\((0, 1)\\) to \\((-1, 0)\\)",
    ],
    correctIndex: 0, correctText: "Counterclockwise from \\((1, 0)\\) to \\((0, 1)\\)",
    explanation: "At \\(t = 0\\) the point is \\((\\cos 0, \\sin 0) = (1, 0)\\); at \\(t = \\frac{\\pi}{2}\\) it is \\((0, 1)\\). As \\(t\\) increases the point moves counterclockwise along the unit circle.",
  },
  {
    slug: "unit-4-04", subject: "unit-4", domain: "Parametric Functions", difficulty: "medium",
    prompt: "A particle moves with position \\(x(t) = 2t\\) and \\(y(t) = t^{2}\\) for \\(t \\ge 0\\). What is the particle's position at \\(t = 3\\)?",
    choices: ["\\((6, 9)\\)", "\\((3, 6)\\)", "\\((6, 6)\\)", "\\((2, 9)\\)"],
    correctIndex: 0, correctText: "\\((6, 9)\\)",
    explanation: "\\(x(3) = 2(3) = 6\\) and \\(y(3) = 3^{2} = 9\\), so the position is \\((6, 9)\\).",
  },
  {
    slug: "unit-4-05", subject: "unit-4", domain: "Parametric Functions", difficulty: "hard",
    prompt: "A particle's position is given by \\(x(t) = t - 1\\) and \\(y(t) = 2 - t\\). Which rectangular equation describes its path?",
    choices: ["\\(y = 1 - x\\)", "\\(y = x + 1\\)", "\\(y = 3 - x\\)", "\\(y = x - 1\\)"],
    correctIndex: 0, correctText: "\\(y = 1 - x\\)",
    explanation: "From \\(x = t - 1\\), \\(t = x + 1\\). Then \\(y = 2 - (x + 1) = 1 - x\\).",
  },

  // ---------- Vectors ----------
  {
    slug: "unit-4-06", subject: "unit-4", domain: "Vectors", difficulty: "easy",
    prompt: "What is the magnitude of the vector \\(v = \\langle 3, 4 \\rangle\\)?",
    choices: ["5", "7", "12", "25"], correctIndex: 0, correctText: "5",
    explanation: "Magnitude = \\(\\sqrt{3^{2} + 4^{2}} = \\sqrt{9 + 16} = \\sqrt{25} = 5\\).",
  },
  {
    slug: "unit-4-07", subject: "unit-4", domain: "Vectors", difficulty: "easy",
    prompt: "What is the sum \\(\\langle 1, 2 \\rangle + \\langle 3, -1 \\rangle\\)?",
    choices: ["\\(\\langle 4, 1 \\rangle\\)", "\\(\\langle 4, 3 \\rangle\\)", "\\(\\langle 2, 1 \\rangle\\)", "\\(\\langle 3, 1 \\rangle\\)"],
    correctIndex: 0, correctText: "\\(\\langle 4, 1 \\rangle\\)",
    explanation: "Add component-wise: \\(\\langle 1 + 3, 2 + (-1) \\rangle = \\langle 4, 1 \\rangle\\).",
  },
  {
    slug: "unit-4-08", subject: "unit-4", domain: "Vectors", difficulty: "medium",
    prompt: "What is the direction angle (from the positive \\(x\\)-axis) of the vector \\(\\langle 1, 1 \\rangle\\)?",
    choices: ["\\(30^{\\circ}\\)", "\\(45^{\\circ}\\)", "\\(60^{\\circ}\\)", "\\(135^{\\circ}\\)"], correctIndex: 1, correctText: "\\(45^{\\circ}\\)",
    explanation: "\\(\\tan \\theta = \\frac{1}{1} = 1\\) with both components positive (Quadrant I), so \\(\\theta = 45^{\\circ}\\).",
  },
  {
    slug: "unit-4-09", subject: "unit-4", domain: "Vectors", difficulty: "medium",
    prompt: "What is the dot product \\(\\langle 2, 3 \\rangle \\cdot \\langle -1, 4 \\rangle\\)?",
    choices: ["10", "8", "\\(-10\\)", "14"], correctIndex: 0, correctText: "10",
    explanation: "\\(\\langle 2, 3 \\rangle \\cdot \\langle -1, 4 \\rangle = (2)(-1) + (3)(4) = -2 + 12 = 10\\).",
  },
  {
    slug: "unit-4-10", subject: "unit-4", domain: "Vectors", difficulty: "medium",
    prompt: "For what value of \\(a\\) are the vectors \\(\\langle a, 2 \\rangle\\) and \\(\\langle 3, -6 \\rangle\\) perpendicular?",
    choices: ["2", "4", "\\(-4\\)", "6"], correctIndex: 1, correctText: "4",
    explanation: "Perpendicular vectors have dot product 0: \\((a)(3) + (2)(-6) = 3a - 12 = 0\\), so \\(a = 4\\).",
  },

  // ---------- Matrices ----------
  {
    slug: "unit-4-11", subject: "unit-4", domain: "Matrices", difficulty: "easy",
    prompt: "What is \\(\\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix} + \\begin{bmatrix} 0 & 1 \\\\ 1 & 0 \\end{bmatrix}\\)?",
    choices: ["\\(\\begin{bmatrix} 1 & 3 \\\\ 4 & 4 \\end{bmatrix}\\)", "\\(\\begin{bmatrix} 1 & 2 \\\\ 4 & 4 \\end{bmatrix}\\)", "\\(\\begin{bmatrix} 0 & 3 \\\\ 3 & 0 \\end{bmatrix}\\)", "\\(\\begin{bmatrix} 1 & 3 \\\\ 3 & 4 \\end{bmatrix}\\)"],
    correctIndex: 0, correctText: "\\(\\begin{bmatrix} 1 & 3 \\\\ 4 & 4 \\end{bmatrix}\\)",
    explanation: "Add entry-wise: \\(\\begin{bmatrix} 1+0 & 2+1 \\\\ 3+1 & 4+0 \\end{bmatrix} = \\begin{bmatrix} 1 & 3 \\\\ 4 & 4 \\end{bmatrix}\\).",
  },
  {
    slug: "unit-4-12", subject: "unit-4", domain: "Matrices", difficulty: "easy",
    prompt: "What is the determinant of \\(\\begin{bmatrix} 3 & 1 \\\\ 2 & 4 \\end{bmatrix}\\)?",
    choices: ["10", "14", "12", "\\(-10\\)"], correctIndex: 0, correctText: "10",
    explanation: "det = \\((3)(4) - (1)(2) = 12 - 2 = 10\\).",
  },
  {
    slug: "unit-4-13", subject: "unit-4", domain: "Matrices", difficulty: "medium",
    prompt: "What is the product \\(\\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix} \\times \\begin{bmatrix} 2 & 0 \\\\ 1 & 2 \\end{bmatrix}\\)?",
    choices: ["\\(\\begin{bmatrix} 4 & 4 \\\\ 10 & 8 \\end{bmatrix}\\)", "\\(\\begin{bmatrix} 2 & 4 \\\\ 3 & 8 \\end{bmatrix}\\)", "\\(\\begin{bmatrix} 4 & 2 \\\\ 10 & 6 \\end{bmatrix}\\)", "\\(\\begin{bmatrix} 3 & 4 \\\\ 7 & 12 \\end{bmatrix}\\)"],
    correctIndex: 0, correctText: "\\(\\begin{bmatrix} 4 & 4 \\\\ 10 & 8 \\end{bmatrix}\\)",
    explanation: "Row-by-column: top-left \\((1)(2)+(2)(1)=4\\); top-right \\((1)(0)+(2)(2)=4\\); bottom-left \\((3)(2)+(4)(1)=10\\); bottom-right \\((3)(0)+(4)(2)=8\\).",
  },
  {
    slug: "unit-4-14", subject: "unit-4", domain: "Matrices", difficulty: "medium",
    prompt: "What is the inverse of \\(\\begin{bmatrix} 2 & 0 \\\\ 0 & 3 \\end{bmatrix}\\)?",
    choices: ["\\(\\begin{bmatrix} \\frac{1}{2} & 0 \\\\ 0 & \\frac{1}{3} \\end{bmatrix}\\)", "\\(\\begin{bmatrix} 2 & 0 \\\\ 0 & 3 \\end{bmatrix}\\)", "\\(\\begin{bmatrix} \\frac{1}{2} & 0 \\\\ 0 & 3 \\end{bmatrix}\\)", "\\(\\begin{bmatrix} -2 & 0 \\\\ 0 & -3 \\end{bmatrix}\\)"],
    correctIndex: 0, correctText: "\\(\\begin{bmatrix} \\frac{1}{2} & 0 \\\\ 0 & \\frac{1}{3} \\end{bmatrix}\\)",
    explanation: "For a diagonal matrix, the inverse inverts each diagonal entry: \\(\\begin{bmatrix} \\frac{1}{2} & 0 \\\\ 0 & \\frac{1}{3} \\end{bmatrix}\\). Check: \\(\\begin{bmatrix} 2 & 0 \\\\ 0 & 3 \\end{bmatrix} \\cdot \\begin{bmatrix} \\frac{1}{2} & 0 \\\\ 0 & \\frac{1}{3} \\end{bmatrix} = I\\).",
  },
  {
    slug: "unit-4-15", subject: "unit-4", domain: "Matrices", difficulty: "medium",
    prompt: "The matrix \\(\\begin{bmatrix} 0 & -1 \\\\ 1 & 0 \\end{bmatrix}\\) represents a \\(90^{\\circ}\\) counterclockwise rotation about the origin. What is the image of the point \\((1, 0)\\)?",
    choices: ["\\((0, 1)\\)", "\\((0, -1)\\)", "\\((-1, 0)\\)", "\\((1, 0)\\)"],
    correctIndex: 0, correctText: "\\((0, 1)\\)",
    explanation: "\\(\\begin{bmatrix} 0 & -1 \\\\ 1 & 0 \\end{bmatrix} \\cdot \\begin{bmatrix} 1 \\\\ 0 \\end{bmatrix} = \\begin{bmatrix} 0\\cdot 1 + (-1)\\cdot 0 \\\\ 1\\cdot 1 + 0\\cdot 0 \\end{bmatrix} = (0, 1)\\).",
  },
  {
    slug: "unit-4-16", subject: "unit-4", domain: "Matrices", difficulty: "hard",
    prompt: "What is the solution \\((x, y)\\) of the matrix equation \\(\\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix} \\cdot \\begin{bmatrix} x \\\\ y \\end{bmatrix} = \\begin{bmatrix} 5 \\\\ 11 \\end{bmatrix}\\)?",
    choices: ["\\((1, 2)\\)", "\\((2, 1)\\)", "\\((3, -1)\\)", "\\((-1, 3)\\)"],
    correctIndex: 0, correctText: "\\((1, 2)\\)",
    explanation: "Multiply both sides by the inverse \\(\\begin{bmatrix} -2 & 1 \\\\ \\frac{3}{2} & -\\frac{1}{2} \\end{bmatrix}\\): \\(x = -2(5) + 1(11) = 1\\), \\(y = (\\frac{3}{2})(5) - (\\frac{1}{2})(11) = 2\\). Check: \\(1 + 4 = 5\\) and \\(3 + 8 = 11\\).",
  },
];
