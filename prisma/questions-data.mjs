/**
 * AP Precalculus question bank — 194 ORIGINAL questions written from scratch
 * in College Board AP Precalculus style. None are copied from the College Board,
 * released exams, or any prep source.
 *
 * Math is written in LaTeX inside \(...\) delimiters and rendered in the
 * browser with MathJax (free, Apache-2.0). Keep every backslash doubled
 * inside these JS strings.
 * @typedef {{slug:string, subject:string, section:string|null, domain:string, difficulty:string, prompt:string,
 *   choices:string[]|null, correctIndex:number|null, correctText:string, explanation:string}} Q
 */
/** @type {Q[]} */
export const QUESTIONS = [
  // ================= UNIT 1: POLYNOMIAL & RATIONAL FUNCTIONS =================

  // ---------- Polynomial Functions ----------
  {
    slug: "unit-1-01", subject: "unit-1", section: "1.4", domain: "Polynomial Functions", difficulty: "easy",
    prompt: "If \\(f(x) = x^{3} - 2x^{2} + 5x - 1\\), what is the value of \\(f(2)\\)?",
    choices: ["7", "9", "11", "13"], correctIndex: 1, correctText: "9",
    explanation: "Substitute \\(x = 2\\): \\(f(2) = (2)^{3} - 2(2)^{2} + 5(2) - 1 = 8 - 8 + 10 - 1 = 9\\).",
  },
  {
    slug: "unit-1-02", subject: "unit-1", section: "1.4", domain: "Polynomial Functions", difficulty: "easy",
    prompt: "What is the degree of the polynomial \\(p(x) = (x^{2} + 1)(x^{3} - 2x)\\)?",
    choices: ["3", "4", "5", "6"], correctIndex: 2, correctText: "5",
    explanation: "The degree of a product is the sum of the degrees: \\(2 + 3 = 5\\). (The leading term is \\(x^{5}\\).)",
  },
  {
    slug: "unit-1-03", subject: "unit-1", section: "1.2", domain: "Polynomial Functions", difficulty: "medium",
    prompt: "The average rate of change of the function \\(f\\) on the interval \\([1, 4]\\) is 5, and \\(f(1) = 2\\). What is the value of \\(f(4)\\)?",
    choices: ["12", "15", "17", "22"], correctIndex: 2, correctText: "17",
    explanation: "Average rate of change = \\(\\frac{f(4) - f(1)}{4 - 1} = 5\\), so \\(f(4) - 2 = 15\\), giving \\(f(4) = 17\\).",
  },
  {
    slug: "unit-1-04", subject: "unit-1", section: "1.4", domain: "Polynomial Functions", difficulty: "medium",
    prompt: "By the Remainder Theorem, what is the remainder when \\(p(x) = 2x^{3} - x^{2} + 4x - 3\\) is divided by \\((x - 1)\\)?",
    choices: ["0", "1", "2", "3"], correctIndex: 2, correctText: "2",
    explanation: "The Remainder Theorem says the remainder is \\(p(1)\\): \\(2(1)^{3} - (1)^{2} + 4(1) - 3 = 2 - 1 + 4 - 3 = 2\\).",
  },

  // ---------- Zeros & Factors ----------
  {
    slug: "unit-1-05", subject: "unit-1", section: "1.4", domain: "Zeros & Factors", difficulty: "easy",
    prompt: "Which of the following is a zero of the polynomial \\(p(x) = x^{2} - 7x + 12\\)?",
    choices: ["2", "3", "5", "6"], correctIndex: 1, correctText: "3",
    explanation: "Factor: \\(x^{2} - 7x + 12 = (x - 3)(x - 4)\\), so the zeros are \\(x = 3\\) and \\(x = 4\\).",
  },
  {
    slug: "unit-1-06", subject: "unit-1", section: "1.4", domain: "Zeros & Factors", difficulty: "medium",
    prompt: "If \\((x + 2)\\) is a factor of \\(p(x) = x^{3} + 4x^{2} + kx - 8\\), what is the value of \\(k\\)?",
    choices: ["\\(-4\\)", "\\(-2\\)", "0", "4"], correctIndex: 2, correctText: "0",
    explanation: "By the Factor Theorem, \\(p(-2) = 0\\). So \\((-2)^{3} + 4(-2)^{2} + k(-2) - 8 = -8 + 16 - 2k - 8 = -2k = 0\\), giving \\(k = 0\\).",
  },
  {
    slug: "unit-1-07", subject: "unit-1", section: "1.4", domain: "Zeros & Factors", difficulty: "medium",
    prompt: "If the graph of a polynomial function \\(f\\) touches the \\(x\\)-axis at \\(x = 2\\) but does not cross it there, which of the following could be the factored form of \\(f\\)?",
    choices: ["\\((x - 2)(x + 1)\\)", "\\((x - 2)^{2}(x + 1)\\)", "\\((x - 2)^{3}(x + 1)\\)", "\\((x + 2)(x - 1)\\)"],
    correctIndex: 1, correctText: "\\((x - 2)^{2}(x + 1)\\)",
    explanation: "A graph touches but does not cross the \\(x\\)-axis at a zero of even multiplicity. Only \\((x - 2)^{2}\\) gives \\(x = 2\\) an even multiplicity (2).",
  },
  {
    slug: "unit-1-08", subject: "unit-1", section: "1.4", domain: "Zeros & Factors", difficulty: "medium",
    prompt: "How many real zeros does \\(p(x) = x^{4} - 5x^{2} + 4\\) have?",
    choices: ["1", "2", "3", "4"], correctIndex: 3, correctText: "4",
    explanation: "Factor: \\(x^{4} - 5x^{2} + 4 = (x^{2} - 1)(x^{2} - 4) = (x - 1)(x + 1)(x - 2)(x + 2)\\), giving four real zeros: \\(-2\\), \\(-1\\), \\(1\\), \\(2\\).",
  },
  {
    slug: "unit-1-09", subject: "unit-1", section: "1.5", domain: "Zeros & Factors", difficulty: "hard",
    prompt: "A polynomial \\(p\\) has degree 4 with real coefficients. It is known that \\(1 + i\\) is a zero of \\(p\\). Which of the following must also be a zero of \\(p\\)?",
    choices: ["\\(1 - i\\)", "\\(-1 + i\\)", "\\(-1 - i\\)", "\\(2i\\)"], correctIndex: 0, correctText: "\\(1 - i\\)",
    explanation: "Nonreal zeros of a polynomial with real coefficients occur in conjugate pairs, so \\(1 - i\\) must also be a zero.",
  },
  {
    slug: "unit-1-10", subject: "unit-1", section: "1.4", domain: "Zeros & Factors", difficulty: "hard",
    prompt: "A polynomial function \\(p\\) has zeros at \\(x = -1\\) (multiplicity 2) and \\(x = 3\\) (multiplicity 1), and \\(p(0) = -9\\). Which of the following could be \\(p(x)\\)?",
    choices: ["\\(3(x + 1)^{2}(x - 3)\\)", "\\((x + 1)^{2}(x - 3)\\)", "\\(3(x + 1)(x - 3)^{2}\\)", "\\(-3(x + 1)^{2}(x - 3)\\)"],
    correctIndex: 0, correctText: "\\(3(x + 1)^{2}(x - 3)\\)",
    explanation: "The zeros give \\(p(x) = a(x + 1)^{2}(x - 3)\\). Using \\(p(0) = -9\\): \\(a(1)^{2}(-3) = -3a = -9\\), so \\(a = 3\\).",
  },

  // ---------- End Behavior ----------
  {
    slug: "unit-1-11", subject: "unit-1", section: "1.6", domain: "End Behavior", difficulty: "medium",
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
    slug: "unit-1-12", subject: "unit-1", section: "1.6", domain: "End Behavior", difficulty: "medium",
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
    slug: "unit-1-13", subject: "unit-1", section: "1.7", domain: "End Behavior", difficulty: "hard",
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
    slug: "unit-1-14", subject: "unit-1", section: "1.8", domain: "Rational Functions", difficulty: "medium",
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
    slug: "unit-1-15", subject: "unit-1", section: "1.9", domain: "Rational Functions", difficulty: "medium",
    prompt: "Which of the following gives the vertical asymptotes of \\(f(x) = \\frac{2x + 1}{x^{2} - x - 6}\\)?",
    choices: ["\\(x = 3\\) only", "\\(x = -2\\) only", "\\(x = 3\\) and \\(x = -2\\)", "\\(x = 6\\)"],
    correctIndex: 2, correctText: "\\(x = 3\\) and \\(x = -2\\)",
    explanation: "Factor the denominator: \\(x^{2} - x - 6 = (x - 3)(x + 2)\\). The numerator is nonzero at \\(x = 3\\) and \\(x = -2\\), so both are vertical asymptotes.",
  },
  {
    slug: "unit-1-16", subject: "unit-1", section: "1.7", domain: "Rational Functions", difficulty: "medium",
    prompt: "What is the horizontal asymptote of \\(g(x) = \\frac{3x^{2} + 2x - 1}{5x^{2} - x + 4}\\)?",
    choices: ["\\(y = 0\\)", "\\(y = \\frac{3}{5}\\)", "\\(y = \\frac{5}{3}\\)", "\\(y = 3\\)"], correctIndex: 1, correctText: "\\(y = \\frac{3}{5}\\)",
    explanation: "The numerator and denominator have the same degree, so the horizontal asymptote is the ratio of leading coefficients: \\(y = \\frac{3}{5}\\).",
  },
  {
    slug: "unit-1-17", subject: "unit-1", section: "1.12", domain: "Rational Functions", difficulty: "medium",
    prompt: "Let \\(f(x) = \\frac{1}{x - 2} + 3\\). Which of the following gives the asymptotes of the graph of \\(f\\)?",
    choices: ["\\(x = 2\\) and \\(y = 3\\)", "\\(x = -2\\) and \\(y = 3\\)", "\\(x = 2\\) and \\(y = -3\\)", "\\(x = 3\\) and \\(y = 2\\)"],
    correctIndex: 0, correctText: "\\(x = 2\\) and \\(y = 3\\)",
    explanation: "The graph is \\(y = \\frac{1}{x}\\) shifted right 2 and up 3, so its asymptotes \\(x = 0\\) and \\(y = 0\\) shift to \\(x = 2\\) and \\(y = 3\\).",
  },
  {
    slug: "unit-1-18", subject: "unit-1", section: "1.10", domain: "Rational Functions", difficulty: "hard",
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
    slug: "unit-1-19", subject: "unit-1", section: "1.7", domain: "Rational Functions", difficulty: "hard",
    prompt: "Let \\(f(x) = \\frac{x^{2} + 1}{x - 1}\\). Which of the following is the slant asymptote of the graph of \\(f\\)?",
    choices: ["\\(y = x + 1\\)", "\\(y = x - 1\\)", "\\(y = x\\)", "\\(y = 1\\)"], correctIndex: 0, correctText: "\\(y = x + 1\\)",
    explanation: "Polynomial division: \\((x^{2} + 1) \\div (x - 1) = (x + 1)\\) with remainder 2. The quotient \\(y = x + 1\\) is the slant asymptote.",
  },

  // ---------- Graphing & Modeling ----------
  {
    slug: "unit-1-20", subject: "unit-1", section: "1.12", domain: "Graphing & Modeling", difficulty: "easy",
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
    slug: "unit-2-01", subject: "unit-2", section: "2.3", domain: "Exponential Functions", difficulty: "easy",
    prompt: "If \\(f(x) = 3(2)^{x}\\), what is the value of \\(f(3)\\)?",
    choices: ["12", "18", "24", "48"], correctIndex: 2, correctText: "24",
    explanation: "Substitute \\(x = 3\\): \\(f(3) = 3(2)^{3} = 3(8) = 24\\).",
  },
  {
    slug: "unit-2-02", subject: "unit-2", section: "2.3", domain: "Exponential Functions", difficulty: "easy",
    prompt: "Which of the following functions represents exponential decay?",
    choices: ["\\(f(x) = 5(1.2)^{x}\\)", "\\(f(x) = 5(0.8)^{x}\\)", "\\(f(x) = 5x + 0.8\\)", "\\(f(x) = 5x^{2}\\)"],
    correctIndex: 1, correctText: "\\(f(x) = 5(0.8)^{x}\\)",
    explanation: "Exponential decay requires the form \\(a(b)^{x}\\) with \\(0 < b < 1\\). Only 0.8 satisfies this.",
  },
  {
    slug: "unit-2-03", subject: "unit-2", section: "2.3", domain: "Exponential Functions", difficulty: "easy",
    prompt: "What is the \\(y\\)-intercept of the graph of \\(f(x) = 4(3)^{x} - 1\\)?",
    choices: ["0", "3", "4", "\\(-1\\)"], correctIndex: 1, correctText: "3",
    explanation: "The \\(y\\)-intercept is \\(f(0) = 4(3)^{0} - 1 = 4 - 1 = 3\\).",
  },
  {
    slug: "unit-2-04", subject: "unit-2", section: "2.3", domain: "Exponential Functions", difficulty: "medium",
    prompt: "The graph of \\(f(x) = 2^{x}\\) is shifted 4 units to the left and 1 unit down to obtain the graph of \\(g\\). Which of the following is \\(g(x)\\)?",
    choices: ["\\(2^{x+4} - 1\\)", "\\(2^{x-4} - 1\\)", "\\(2^{x+4} + 1\\)", "\\(2^{x} - 5\\)"],
    correctIndex: 0, correctText: "\\(2^{x+4} - 1\\)",
    explanation: "Shifting left 4 replaces \\(x\\) with \\(x + 4\\), and shifting down 1 subtracts 1: \\(g(x) = 2^{x+4} - 1\\).",
  },
  {
    slug: "unit-2-05", subject: "unit-2", section: "2.3", domain: "Exponential Functions", difficulty: "medium",
    prompt: "Which of the following best describes the end behavior of \\(f(x) = 5(0.5)^{x}\\) as \\(x \\to \\infty\\)?",
    choices: ["\\(f(x) \\to \\infty\\)", "\\(f(x) \\to 5\\)", "\\(f(x) \\to 0\\)", "\\(f(x) \\to -\\infty\\)"],
    correctIndex: 2, correctText: "\\(f(x) \\to 0\\)",
    explanation: "Since \\(0 < 0.5 < 1\\), \\((0.5)^{x} \\to 0\\) as \\(x \\to \\infty\\), so \\(f(x) \\to 5(0) = 0\\). The graph has a horizontal asymptote at \\(y = 0\\).",
  },

  // ---------- Logarithmic Functions ----------
  {
    slug: "unit-2-06", subject: "unit-2", section: "2.9", domain: "Logarithmic Functions", difficulty: "easy",
    prompt: "What is the value of \\(\\log_{2}(\\frac{1}{8})\\)?",
    choices: ["\\(-3\\)", "\\(-2\\)", "3", "\\(\\frac{1}{3}\\)"], correctIndex: 0, correctText: "\\(-3\\)",
    explanation: "\\(\\log_{2}(\\frac{1}{8})\\) asks: 2 to what power is \\(\\frac{1}{8}\\)? Since \\(2^{-3} = \\frac{1}{8}\\), the value is \\(-3\\).",
  },
  {
    slug: "unit-2-07", subject: "unit-2", section: "2.11", domain: "Logarithmic Functions", difficulty: "easy",
    prompt: "The graph of \\(f(x) = \\log(x)\\) has a vertical asymptote at which of the following?",
    choices: ["\\(x = 0\\)", "\\(x = 1\\)", "\\(y = 0\\)", "\\(y = 1\\)"], correctIndex: 0, correctText: "\\(x = 0\\)",
    explanation: "The domain of \\(\\log(x)\\) is \\(x > 0\\), and \\(\\log(x) \\to -\\infty\\) as \\(x \\to 0^{+}\\), so there is a vertical asymptote at \\(x = 0\\).",
  },
  {
    slug: "unit-2-08", subject: "unit-2", section: "2.9", domain: "Logarithmic Functions", difficulty: "easy",
    prompt: "Which of the following is equivalent to \\(\\log_{5}(25)\\)?",
    choices: ["2", "5", "\\(\\frac{1}{2}\\)", "25"], correctIndex: 0, correctText: "2",
    explanation: "\\(\\log_{5}(25)\\) asks: 5 to what power is 25? Since \\(5^{2} = 25\\), the value is 2.",
  },
  {
    slug: "unit-2-09", subject: "unit-2", section: "2.10", domain: "Logarithmic Functions", difficulty: "medium",
    prompt: "What is the inverse function of \\(f(x) = 10^{x}\\)?",
    choices: ["\\(f^{-1}(x) = \\log(x)\\)", "\\(f^{-1}(x) = 10^{-x}\\)", "\\(f^{-1}(x) = \\frac{x}{10}\\)", "\\(f^{-1}(x) = \\ln(x)\\)"],
    correctIndex: 0, correctText: "\\(f^{-1}(x) = \\log(x)\\)",
    explanation: "Exponential and logarithmic functions with the same base are inverses. The inverse of \\(10^{x}\\) is log base 10 of \\(x\\).",
  },
  {
    slug: "unit-2-10", subject: "unit-2", section: "2.11", domain: "Logarithmic Functions", difficulty: "medium",
    prompt: "Let \\(g(x) = \\ln(x - 2)\\). What is the domain of \\(g\\)?",
    choices: ["\\(x > 0\\)", "\\(x > 2\\)", "\\(x \\ge 2\\)", "All real numbers"],
    correctIndex: 1, correctText: "\\(x > 2\\)",
    explanation: "The natural log requires a positive argument: \\(x - 2 > 0\\), so \\(x > 2\\).",
  },

  // ---------- Log Properties ----------
  {
    slug: "unit-2-11", subject: "unit-2", section: "2.12", domain: "Log Properties", difficulty: "medium",
    prompt: "Which of the following is equivalent to \\(\\log(1000x^{2})\\)? (Assume \\(x > 0\\).)",
    choices: ["\\(3 + 2\\log(x)\\)", "\\(6\\log(x)\\)", "\\(3\\log(x) + 2\\)", "\\(\\log(3) + \\log(x^{2})\\)"],
    correctIndex: 0, correctText: "\\(3 + 2\\log(x)\\)",
    explanation: "\\(\\log(1000x^{2}) = \\log(1000) + \\log(x^{2}) = 3 + 2\\log(x)\\), using the product rule and \\(\\log(1000) = 3\\).",
  },
  {
    slug: "unit-2-12", subject: "unit-2", section: "2.12", domain: "Log Properties", difficulty: "medium",
    prompt: "Which of the following is equivalent to \\(\\ln(x^{3}) - \\ln(x)\\)? (Assume \\(x > 0\\).)",
    choices: ["\\(3\\ln(x)\\)", "\\(2\\ln(x)\\)", "\\(\\ln(x^{3} - x)\\)", "0"],
    correctIndex: 1, correctText: "\\(2\\ln(x)\\)",
    explanation: "By the quotient rule, \\(\\ln(x^{3}) - \\ln(x) = \\ln(\\frac{x^{3}}{x}) = \\ln(x^{2}) = 2\\ln(x)\\).",
  },
  {
    slug: "unit-2-13", subject: "unit-2", section: "2.12", domain: "Log Properties", difficulty: "medium",
    prompt: "Using the change of base formula, \\(\\log_{7}(50)\\) is equivalent to which of the following?",
    choices: ["\\(\\frac{\\ln(50)}{\\ln(7)}\\)", "\\(\\frac{\\ln(7)}{\\ln(50)}\\)", "\\(\\log(50) - \\log(7)\\)", "\\(\\frac{50}{7}\\)"],
    correctIndex: 0, correctText: "\\(\\frac{\\ln(50)}{\\ln(7)}\\)",
    explanation: "The change of base formula: \\(\\log_{a}(b) = \\frac{\\ln(b)}{\\ln(a)}\\), so \\(\\log_{7}(50) = \\frac{\\ln(50)}{\\ln(7)}\\).",
  },
  {
    slug: "unit-2-14", subject: "unit-2", section: "2.12", domain: "Log Properties", difficulty: "hard",
    prompt: "If \\(\\log_{2}(a) = 3\\) and \\(\\log_{2}(b) = 5\\), what is the value of \\(\\log_{2}(a^{2}b)\\)?",
    choices: ["8", "10", "11", "30"], correctIndex: 2, correctText: "11",
    explanation: "\\(\\log_{2}(a^{2}b) = 2\\log_{2}(a) + \\log_{2}(b) = 2(3) + 5 = 11\\).",
  },

  // ---------- Solving Equations ----------
  {
    slug: "unit-2-15", subject: "unit-2", section: "2.13", domain: "Solving Equations", difficulty: "medium",
    prompt: "What is the solution to the equation \\(5^{2x} = 125\\)?",
    choices: ["\\(\\frac{1}{2}\\)", "1", "\\(\\frac{3}{2}\\)", "3"], correctIndex: 2, correctText: "\\(\\frac{3}{2}\\)",
    explanation: "Write 125 as \\(5^{3}\\): \\(5^{2x} = 5^{3}\\), so \\(2x = 3\\) and \\(x = \\frac{3}{2}\\).",
  },
  {
    slug: "unit-2-16", subject: "unit-2", section: "2.13", domain: "Solving Equations", difficulty: "medium",
    prompt: "What is the solution to the equation \\(3^{x+1} = 81\\)?",
    choices: ["2", "3", "4", "5"], correctIndex: 1, correctText: "3",
    explanation: "Write 81 as \\(3^{4}\\): \\(3^{x+1} = 3^{4}\\), so \\(x + 1 = 4\\) and \\(x = 3\\).",
  },
  {
    slug: "unit-2-17", subject: "unit-2", section: "2.13", domain: "Solving Equations", difficulty: "hard",
    prompt: "What is the solution to the equation \\(\\log(x) + \\log(x - 3) = 1\\)? (Logarithms are base 10.)",
    choices: ["\\(-2\\)", "2", "5", "10"], correctIndex: 2, correctText: "5",
    explanation: "Combine: \\(\\log(x(x - 3)) = 1\\), so \\(x(x - 3) = 10\\), giving \\(x^{2} - 3x - 10 = 0\\), or \\((x - 5)(x + 2) = 0\\). The value \\(x = -2\\) is extraneous (log of a negative), so \\(x = 5\\).",
  },
  {
    slug: "unit-2-18", subject: "unit-2", section: "2.13", domain: "Solving Equations", difficulty: "hard",
    prompt: "What is the sum of the solutions to the equation \\(e^{2x} - 3e^{x} + 2 = 0\\)?",
    choices: ["0", "\\(\\ln(2)\\)", "1", "3"], correctIndex: 1, correctText: "\\(\\ln(2)\\)",
    explanation: "Let \\(u = e^{x}\\): \\(u^{2} - 3u + 2 = (u - 1)(u - 2) = 0\\), so \\(e^{x} = 1\\) or \\(e^{x} = 2\\), giving \\(x = 0\\) or \\(x = \\ln(2)\\). Their sum is \\(\\ln(2)\\).",
  },
  {
    slug: "unit-2-19", subject: "unit-2", section: "2.13", domain: "Solving Equations", difficulty: "hard",
    prompt: "If \\(4^{x} = 9\\), which of the following is the value of \\(x\\)?",
    choices: ["\\(\\log_{2}(3)\\)", "\\(\\log_{3}(2)\\)", "\\(\\frac{9}{4}\\)", "2"],
    correctIndex: 0, correctText: "\\(\\log_{2}(3)\\)",
    explanation: "Take the natural log of both sides: \\(x\\ln(4) = \\ln(9)\\), so \\(x = \\frac{\\ln(9)}{\\ln(4)} = \\frac{2\\ln(3)}{2\\ln(2)} = \\frac{\\ln(3)}{\\ln(2)} = \\log_{2}(3)\\).",
  },

  // ---------- Modeling & Applications ----------
  {
    slug: "unit-2-20", subject: "unit-2", section: "2.5", domain: "Modeling & Applications", difficulty: "medium",
    prompt: "A population of bacteria doubles every 3 hours. If the initial population is 500, which of the following functions models the population after \\(t\\) hours?",
    choices: ["\\(P(t) = 500(2)^{t/3}\\)", "\\(P(t) = 500(2)^{3t}\\)", "\\(P(t) = 500(\\frac{1}{2})^{t/3}\\)", "\\(P(t) = 500 + 2t\\)"],
    correctIndex: 0, correctText: "\\(P(t) = 500(2)^{t/3}\\)",
    explanation: "Doubling every 3 hours means the growth factor 2 is applied \\(t/3\\) times: \\(P(t) = 500(2)^{t/3}\\).",
  },
  {
    slug: "unit-2-21", subject: "unit-2", section: "2.5", domain: "Modeling & Applications", difficulty: "medium",
    prompt: "A radioactive substance has a half-life of 10 years. If 200 grams are present initially, how many grams remain after 30 years?",
    choices: ["20", "25", "50", "66.7"], correctIndex: 1, correctText: "25",
    explanation: "After 30 years, 3 half-lives have passed: \\(200(\\frac{1}{2})^{3} = \\frac{200}{8} = 25\\) grams.",
  },
  {
    slug: "unit-2-22", subject: "unit-2", section: "2.5", domain: "Modeling & Applications", difficulty: "medium",
    prompt: "An account earns 5% annual interest compounded annually. If $1000 is deposited, which of the following expressions gives the balance after \\(t\\) years?",
    choices: ["\\(1000(1.05)^{t}\\)", "\\(1000(0.95)^{t}\\)", "\\(1000 + 50t\\)", "\\(1000(1.5)^{t}\\)"],
    correctIndex: 0, correctText: "\\(1000(1.05)^{t}\\)",
    explanation: "Each year the balance is multiplied by \\(1 + 0.05 = 1.05\\), so after \\(t\\) years: \\(1000(1.05)^{t}\\).",
  },

  // ================= UNIT 3: TRIGONOMETRIC & POLAR FUNCTIONS =================

  // ---------- Unit Circle & Trig Values ----------
  {
    slug: "unit-3-01", subject: "unit-3", section: "3.3", domain: "Unit Circle & Trig Values", difficulty: "easy",
    prompt: "What is the exact value of \\(\\sin(\\frac{\\pi}{6})\\)?",
    choices: ["\\(\\frac{1}{2}\\)", "\\(\\frac{\\sqrt{3}}{2}\\)", "\\(\\frac{\\sqrt{2}}{2}\\)", "1"], correctIndex: 0, correctText: "\\(\\frac{1}{2}\\)",
    explanation: "On the unit circle, the point at angle \\(\\frac{\\pi}{6}\\) is \\((\\frac{\\sqrt{3}}{2}, \\frac{1}{2})\\). Since \\(\\sin \\theta\\) is the \\(y\\)-coordinate, \\(\\sin(\\frac{\\pi}{6}) = \\frac{1}{2}\\).",
  },
  {
    slug: "unit-3-02", subject: "unit-3", section: "3.3", domain: "Unit Circle & Trig Values", difficulty: "easy",
    prompt: "What is the exact value of \\(\\cos(\\frac{5\\pi}{6})\\)?",
    choices: ["\\(\\frac{\\sqrt{3}}{2}\\)", "\\(-\\frac{\\sqrt{3}}{2}\\)", "\\(\\frac{1}{2}\\)", "\\(-\\frac{1}{2}\\)"], correctIndex: 1, correctText: "\\(-\\frac{\\sqrt{3}}{2}\\)",
    explanation: "The angle \\(\\frac{5\\pi}{6}\\) is in Quadrant II with reference angle \\(\\frac{\\pi}{6}\\). Cosine is negative in Quadrant II, so \\(\\cos(\\frac{5\\pi}{6}) = -\\frac{\\sqrt{3}}{2}\\).",
  },
  {
    slug: "unit-3-03", subject: "unit-3", section: "3.2", domain: "Unit Circle & Trig Values", difficulty: "easy",
    prompt: "What is the exact value of \\(\\tan(\\frac{\\pi}{4})\\)?",
    choices: ["0", "\\(\\frac{1}{2}\\)", "1", "\\(\\sqrt{3}\\)"], correctIndex: 2, correctText: "1",
    explanation: "\\(\\tan \\theta = \\frac{\\sin \\theta}{\\cos \\theta}\\). At \\(\\frac{\\pi}{4}\\), \\(\\sin(\\frac{\\pi}{4}) = \\cos(\\frac{\\pi}{4}) = \\frac{\\sqrt{2}}{2}\\), so \\(\\tan(\\frac{\\pi}{4}) = 1\\).",
  },
  {
    slug: "unit-3-04", subject: "unit-3", section: "3.4", domain: "Unit Circle & Trig Values", difficulty: "medium",
    prompt: "If \\(\\sin \\theta = \\frac{3}{5}\\) and \\(\\theta\\) is in Quadrant II, what is \\(\\cos \\theta\\)?",
    choices: ["\\(\\frac{4}{5}\\)", "\\(-\\frac{4}{5}\\)", "\\(\\frac{3}{4}\\)", "\\(-\\frac{3}{4}\\)"], correctIndex: 1, correctText: "\\(-\\frac{4}{5}\\)",
    explanation: "By the Pythagorean identity, \\(\\cos^{2}\\theta = 1 - \\sin^{2}\\theta = 1 - \\frac{9}{25} = \\frac{16}{25}\\), so \\(\\cos \\theta = \\pm\\frac{4}{5}\\). Cosine is negative in Quadrant II, so \\(\\cos \\theta = -\\frac{4}{5}\\).",
  },
  {
    slug: "unit-3-05", subject: "unit-3", section: "3.11", domain: "Unit Circle & Trig Values", difficulty: "medium",
    prompt: "If \\(\\cos \\theta = -\\frac{1}{3}\\), what is the value of \\(\\sec \\theta\\)?",
    choices: ["\\(-3\\)", "\\(-\\frac{1}{3}\\)", "3", "\\(\\frac{1}{3}\\)"], correctIndex: 0, correctText: "\\(-3\\)",
    explanation: "Secant is the reciprocal of cosine: \\(\\sec \\theta = \\frac{1}{\\cos \\theta} = \\frac{1}{(-\\frac{1}{3})} = -3\\).",
  },

  // ---------- Sinusoidal Graphs ----------
  {
    slug: "unit-3-06", subject: "unit-3", section: "3.5", domain: "Sinusoidal Graphs", difficulty: "easy",
    prompt: "For the function \\(f(x) = 3\\sin(2x)\\), what is the period?",
    choices: ["\\(\\frac{\\pi}{2}\\)", "\\(\\pi\\)", "\\(2\\pi\\)", "\\(4\\pi\\)"], correctIndex: 1, correctText: "\\(\\pi\\)",
    explanation: "The period of \\(\\sin(Bx)\\) is \\(\\frac{2\\pi}{B}\\). Here \\(B = 2\\), so the period is \\(\\frac{2\\pi}{2} = \\pi\\).",
  },
  {
    slug: "unit-3-07", subject: "unit-3", section: "3.5", domain: "Sinusoidal Graphs", difficulty: "easy",
    prompt: "What is the midline of the graph of \\(g(x) = -2\\cos(x) + 5\\)?",
    choices: ["\\(y = -2\\)", "\\(y = 2\\)", "\\(y = 5\\)", "\\(y = 0\\)"], correctIndex: 2, correctText: "\\(y = 5\\)",
    explanation: "The midline of a sinusoid \\(a\\cdot\\cos(Bx) + d\\) is the horizontal line \\(y = d\\). Here \\(d = 5\\), so the midline is \\(y = 5\\).",
  },
  {
    slug: "unit-3-08", subject: "unit-3", section: "3.5", domain: "Sinusoidal Graphs", difficulty: "medium",
    prompt: "A sinusoidal function has a maximum value of 7 and a minimum value of \\(-3\\). What is its amplitude?",
    choices: ["2", "5", "7", "10"], correctIndex: 1, correctText: "5",
    explanation: "Amplitude = \\(\\frac{7 - (-3)}{2} = \\frac{10}{2} = 5\\).",
  },
  {
    slug: "unit-3-09", subject: "unit-3", section: "3.6", domain: "Sinusoidal Graphs", difficulty: "medium",
    prompt: "The graph of \\(h(x) = \\sin(x - \\frac{\\pi}{3})\\) is the graph of \\(\\sin(x)\\) shifted how?",
    choices: ["\\(\\frac{\\pi}{3}\\) units to the left", "\\(\\frac{\\pi}{3}\\) units to the right", "\\(\\frac{\\pi}{6}\\) units to the right", "\\(\\frac{\\pi}{3}\\) units up"],
    correctIndex: 1, correctText: "\\(\\frac{\\pi}{3}\\) units to the right",
    explanation: "Replacing \\(x\\) with \\((x - \\frac{\\pi}{3})\\) shifts the graph \\(\\frac{\\pi}{3}\\) units to the right (the phase shift).",
  },
  {
    slug: "unit-3-10", subject: "unit-3", section: "3.6", domain: "Sinusoidal Graphs", difficulty: "hard",
    prompt: "For \\(f(x) = 2\\sin(3x - \\pi) + 1\\), what is the period of \\(f\\)?",
    choices: ["\\(\\frac{2\\pi}{3}\\)", "\\(\\frac{\\pi}{3}\\)", "\\(2\\pi\\)", "\\(\\frac{3\\pi}{2}\\)"], correctIndex: 0, correctText: "\\(\\frac{2\\pi}{3}\\)",
    explanation: "Rewrite as \\(2\\sin(3(x - \\frac{\\pi}{3})) + 1\\). The coefficient of \\(x\\) is 3, so the period is \\(\\frac{2\\pi}{3}\\).",
  },

  // ---------- Sinusoidal Modeling ----------
  {
    slug: "unit-3-11", subject: "unit-3", section: "3.7", domain: "Sinusoidal Modeling", difficulty: "medium",
    prompt: "A rider boards a Ferris wheel at its lowest point at time \\(t = 0\\) seconds. The wheel has radius 10 feet, its center is 12 feet above the ground, and it completes one revolution every 60 seconds. The rider's height is modeled by \\(h(t) = -10\\cos(\\frac{2\\pi t}{60}) + 12\\). What is the rider's height at \\(t = 15\\) seconds?",
    choices: ["2 feet", "12 feet", "22 feet", "10 feet"], correctIndex: 1, correctText: "12 feet",
    explanation: "At \\(t = 15\\): \\(h(15) = -10\\cos(\\frac{2\\pi \\cdot 15}{60}) + 12 = -10\\cos(\\frac{\\pi}{2}) + 12 = -10(0) + 12 = 12\\) feet.",
  },
  {
    slug: "unit-3-12", subject: "unit-3", section: "3.7", domain: "Sinusoidal Modeling", difficulty: "hard",
    prompt: "The depth of water at a harbor is modeled by \\(d(t) = 4\\sin(\\frac{\\pi t}{6}) + 9\\), where \\(t\\) is hours after midnight. What is the first time after midnight that the water depth is 11 feet?",
    choices: ["1 hour", "2 hours", "3 hours", "6 hours"], correctIndex: 0, correctText: "1 hour",
    explanation: "Set \\(4\\sin(\\frac{\\pi t}{6}) + 9 = 11\\), giving \\(\\sin(\\frac{\\pi t}{6}) = \\frac{1}{2}\\). The first positive solution is \\(\\frac{\\pi t}{6} = \\frac{\\pi}{6}\\), so \\(t = 1\\) hour.",
  },

  // ---------- Trig Equations & Identities ----------
  {
    slug: "unit-3-13", subject: "unit-3", section: "3.10", domain: "Trig Equations & Identities", difficulty: "medium",
    prompt: "How many solutions does the equation \\(\\tan^{2}x = 3\\) have on the interval \\([0, 2\\pi)\\)?",
    choices: ["1", "2", "3", "4"], correctIndex: 3, correctText: "4",
    explanation: "\\(\\tan^{2}x = 3\\) gives \\(\\tan x = \\sqrt{3}\\) or \\(\\tan x = -\\sqrt{3}\\). \\(\\tan x = \\sqrt{3}\\) at \\(x = \\frac{\\pi}{3}\\) and \\(\\frac{4\\pi}{3}\\); \\(\\tan x = -\\sqrt{3}\\) at \\(x = \\frac{2\\pi}{3}\\) and \\(\\frac{5\\pi}{3}\\). That is 4 solutions.",
  },
  {
    slug: "unit-3-14", subject: "unit-3", section: "3.12", domain: "Trig Equations & Identities", difficulty: "medium",
    prompt: "Which of the following is equivalent to \\(\\frac{1 - \\cos^{2}x}{\\sin x}\\) for \\(\\sin x \\ne 0\\)?",
    choices: ["\\(\\sin x\\)", "\\(\\cos x\\)", "\\(\\tan x\\)", "1"], correctIndex: 0, correctText: "\\(\\sin x\\)",
    explanation: "By the Pythagorean identity, \\(1 - \\cos^{2}x = \\sin^{2}x\\). So \\(\\frac{\\sin^{2}x}{\\sin x} = \\sin x\\).",
  },
  {
    slug: "unit-3-15", subject: "unit-3", section: "3.10", domain: "Trig Equations & Identities", difficulty: "medium",
    prompt: "What are all solutions of \\(2\\sin(x) = 1\\) on the interval \\([0, 2\\pi)\\)?",
    choices: ["\\(\\frac{\\pi}{6}\\) and \\(\\frac{5\\pi}{6}\\)", "\\(\\frac{\\pi}{3}\\) and \\(\\frac{2\\pi}{3}\\)", "\\(\\frac{\\pi}{6}\\) only", "\\(\\frac{5\\pi}{6}\\) and \\(\\frac{7\\pi}{6}\\)"],
    correctIndex: 0, correctText: "\\(\\frac{\\pi}{6}\\) and \\(\\frac{5\\pi}{6}\\)",
    explanation: "\\(2\\sin x = 1\\) gives \\(\\sin x = \\frac{1}{2}\\). On \\([0, 2\\pi)\\), sine equals \\(\\frac{1}{2}\\) at \\(x = \\frac{\\pi}{6}\\) (Quadrant I) and \\(x = \\frac{5\\pi}{6}\\) (Quadrant II).",
  },

  // ---------- Inverse Trig Functions ----------
  {
    slug: "unit-3-16", subject: "unit-3", section: "3.9", domain: "Inverse Trig Functions", difficulty: "medium",
    prompt: "What is the exact value of \\(\\arcsin(\\frac{\\sqrt{3}}{2})\\)?",
    choices: ["\\(\\frac{\\pi}{6}\\)", "\\(\\frac{\\pi}{3}\\)", "\\(\\frac{\\pi}{4}\\)", "\\(\\frac{2\\pi}{3}\\)"], correctIndex: 1, correctText: "\\(\\frac{\\pi}{3}\\)",
    explanation: "\\(\\arcsin\\) gives the angle in \\([-\\frac{\\pi}{2}, \\frac{\\pi}{2}]\\) whose sine is \\(\\frac{\\sqrt{3}}{2}\\). That angle is \\(\\frac{\\pi}{3}\\).",
  },
  {
    slug: "unit-3-17", subject: "unit-3", section: "3.9", domain: "Inverse Trig Functions", difficulty: "medium",
    prompt: "What is the exact value of \\(\\arctan(1)\\)?",
    choices: ["\\(\\frac{\\pi}{4}\\)", "\\(\\frac{3\\pi}{4}\\)", "\\(-\\frac{\\pi}{4}\\)", "\\(\\frac{5\\pi}{4}\\)"], correctIndex: 0, correctText: "\\(\\frac{\\pi}{4}\\)",
    explanation: "\\(\\arctan\\) gives the angle in \\((-\\frac{\\pi}{2}, \\frac{\\pi}{2})\\) whose tangent is 1. That angle is \\(\\frac{\\pi}{4}\\).",
  },

  // ---------- Polar Coordinates ----------
  {
    slug: "unit-3-18", subject: "unit-3", section: "3.13", domain: "Polar Coordinates", difficulty: "easy",
    prompt: "What are the rectangular coordinates of the point with polar coordinates \\((r, \\theta) = (2, \\frac{\\pi}{3})\\)?",
    choices: ["\\((1, \\sqrt{3})\\)", "\\((\\sqrt{3}, 1)\\)", "\\((2, \\sqrt{3})\\)", "\\((1, 2)\\)"], correctIndex: 0, correctText: "\\((1, \\sqrt{3})\\)",
    explanation: "\\(x = r\\cos \\theta = 2\\cos(\\frac{\\pi}{3}) = 2(\\frac{1}{2}) = 1\\); \\(y = r\\sin \\theta = 2\\sin(\\frac{\\pi}{3}) = 2(\\frac{\\sqrt{3}}{2}) = \\sqrt{3}\\). So the point is \\((1, \\sqrt{3})\\).",
  },
  {
    slug: "unit-3-19", subject: "unit-3", section: "3.13", domain: "Polar Coordinates", difficulty: "medium",
    prompt: "Which of the following is another polar representation of the point \\((3, \\frac{\\pi}{4})\\)?",
    choices: ["\\((-3, \\frac{5\\pi}{4})\\)", "\\((3, \\frac{5\\pi}{4})\\)", "\\((-3, \\frac{\\pi}{4})\\)", "\\((3, -\\frac{\\pi}{4})\\)"],
    correctIndex: 0, correctText: "\\((-3, \\frac{5\\pi}{4})\\)",
    explanation: "Negating \\(r\\) and adding \\(\\pi\\) to \\(\\theta\\) gives the same point: \\((-3, \\frac{\\pi}{4} + \\pi) = (-3, \\frac{5\\pi}{4})\\).",
  },

  // ---------- Polar Graphs ----------
  {
    slug: "unit-3-20", subject: "unit-3", section: "3.14", domain: "Polar Graphs", difficulty: "medium",
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
    slug: "unit-3-21", subject: "unit-3", section: "3.14", domain: "Polar Graphs", difficulty: "medium",
    prompt: "How many petals does the rose curve \\(r = 3\\sin(2\\theta)\\) have?",
    choices: ["2", "3", "4", "6"], correctIndex: 2, correctText: "4",
    explanation: "For \\(r = a\\sin(n\\theta)\\) with \\(n\\) even, the rose has \\(2n\\) petals. Here \\(n = 2\\), so there are 4 petals.",
  },

  // ================= UNIT 4: PARAMETERS, VECTORS & MATRICES =================
  // Note: Unit 4 is part of the AP Precalculus course but is not assessed on the AP exam.

  // ---------- Parametric Functions ----------
  {
    slug: "unit-4-01", subject: "unit-4", section: "4.1", domain: "Parametric Functions", difficulty: "easy",
    prompt: "A curve is defined parametrically by \\(x = t + 1\\) and \\(y = 2t\\). Which rectangular equation describes the same curve?",
    choices: ["\\(y = 2x - 2\\)", "\\(y = 2x + 1\\)", "\\(y = x + 2\\)", "\\(y = 2x\\)"],
    correctIndex: 0, correctText: "\\(y = 2x - 2\\)",
    explanation: "From \\(x = t + 1\\), \\(t = x - 1\\). Substituting into \\(y = 2t\\) gives \\(y = 2(x - 1) = 2x - 2\\).",
  },
  {
    slug: "unit-4-02", subject: "unit-4", section: "4.1", domain: "Parametric Functions", difficulty: "easy",
    prompt: "For the parametric equations \\(x = t^{2}\\) and \\(y = t + 1\\), what point corresponds to \\(t = 2\\)?",
    choices: ["\\((4, 3)\\)", "\\((2, 3)\\)", "\\((4, 5)\\)", "\\((2, 5)\\)"],
    correctIndex: 0, correctText: "\\((4, 3)\\)",
    explanation: "Substitute \\(t = 2\\): \\(x = 2^{2} = 4\\) and \\(y = 2 + 1 = 3\\), so the point is \\((4, 3)\\).",
  },
  {
    slug: "unit-4-03", subject: "unit-4", section: "4.4", domain: "Parametric Functions", difficulty: "medium",
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
    slug: "unit-4-04", subject: "unit-4", section: "4.2", domain: "Parametric Functions", difficulty: "medium",
    prompt: "A particle moves with position \\(x(t) = 2t\\) and \\(y(t) = t^{2}\\) for \\(t \\ge 0\\). What is the particle's position at \\(t = 3\\)?",
    choices: ["\\((6, 9)\\)", "\\((3, 6)\\)", "\\((6, 6)\\)", "\\((2, 9)\\)"],
    correctIndex: 0, correctText: "\\((6, 9)\\)",
    explanation: "\\(x(3) = 2(3) = 6\\) and \\(y(3) = 3^{2} = 9\\), so the position is \\((6, 9)\\).",
  },
  {
    slug: "unit-4-05", subject: "unit-4", section: "4.1", domain: "Parametric Functions", difficulty: "hard",
    prompt: "A particle's position is given by \\(x(t) = t - 1\\) and \\(y(t) = 2 - t\\). Which rectangular equation describes its path?",
    choices: ["\\(y = 1 - x\\)", "\\(y = x + 1\\)", "\\(y = 3 - x\\)", "\\(y = x - 1\\)"],
    correctIndex: 0, correctText: "\\(y = 1 - x\\)",
    explanation: "From \\(x = t - 1\\), \\(t = x + 1\\). Then \\(y = 2 - (x + 1) = 1 - x\\).",
  },

  // ---------- Vectors ----------
  {
    slug: "unit-4-06", subject: "unit-4", section: "4.8", domain: "Vectors", difficulty: "easy",
    prompt: "What is the magnitude of the vector \\(v = \\langle 3, 4 \\rangle\\)?",
    choices: ["5", "7", "12", "25"], correctIndex: 0, correctText: "5",
    explanation: "Magnitude = \\(\\sqrt{3^{2} + 4^{2}} = \\sqrt{9 + 16} = \\sqrt{25} = 5\\).",
  },
  {
    slug: "unit-4-07", subject: "unit-4", section: "4.8", domain: "Vectors", difficulty: "easy",
    prompt: "What is the sum \\(\\langle 1, 2 \\rangle + \\langle 3, -1 \\rangle\\)?",
    choices: ["\\(\\langle 4, 1 \\rangle\\)", "\\(\\langle 4, 3 \\rangle\\)", "\\(\\langle 2, 1 \\rangle\\)", "\\(\\langle 3, 1 \\rangle\\)"],
    correctIndex: 0, correctText: "\\(\\langle 4, 1 \\rangle\\)",
    explanation: "Add component-wise: \\(\\langle 1 + 3, 2 + (-1) \\rangle = \\langle 4, 1 \\rangle\\).",
  },
  {
    slug: "unit-4-08", subject: "unit-4", section: "4.8", domain: "Vectors", difficulty: "medium",
    prompt: "What is the direction angle (from the positive \\(x\\)-axis) of the vector \\(\\langle 1, 1 \\rangle\\)?",
    choices: ["\\(30^{\\circ}\\)", "\\(45^{\\circ}\\)", "\\(60^{\\circ}\\)", "\\(135^{\\circ}\\)"], correctIndex: 1, correctText: "\\(45^{\\circ}\\)",
    explanation: "\\(\\tan \\theta = \\frac{1}{1} = 1\\) with both components positive (Quadrant I), so \\(\\theta = 45^{\\circ}\\).",
  },
  {
    slug: "unit-4-09", subject: "unit-4", section: "4.8", domain: "Vectors", difficulty: "medium",
    prompt: "What is the dot product \\(\\langle 2, 3 \\rangle \\cdot \\langle -1, 4 \\rangle\\)?",
    choices: ["10", "8", "\\(-10\\)", "14"], correctIndex: 0, correctText: "10",
    explanation: "\\(\\langle 2, 3 \\rangle \\cdot \\langle -1, 4 \\rangle = (2)(-1) + (3)(4) = -2 + 12 = 10\\).",
  },
  {
    slug: "unit-4-10", subject: "unit-4", section: "4.8", domain: "Vectors", difficulty: "medium",
    prompt: "For what value of \\(a\\) are the vectors \\(\\langle a, 2 \\rangle\\) and \\(\\langle 3, -6 \\rangle\\) perpendicular?",
    choices: ["2", "4", "\\(-4\\)", "6"], correctIndex: 1, correctText: "4",
    explanation: "Perpendicular vectors have dot product 0: \\((a)(3) + (2)(-6) = 3a - 12 = 0\\), so \\(a = 4\\).",
  },

  // ---------- Matrices ----------
  {
    slug: "unit-4-11", subject: "unit-4", section: "4.10", domain: "Matrices", difficulty: "easy",
    prompt: "What is \\(\\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix} + \\begin{bmatrix} 0 & 1 \\\\ 1 & 0 \\end{bmatrix}\\)?",
    choices: ["\\(\\begin{bmatrix} 1 & 3 \\\\ 4 & 4 \\end{bmatrix}\\)", "\\(\\begin{bmatrix} 1 & 2 \\\\ 4 & 4 \\end{bmatrix}\\)", "\\(\\begin{bmatrix} 0 & 3 \\\\ 3 & 0 \\end{bmatrix}\\)", "\\(\\begin{bmatrix} 1 & 3 \\\\ 3 & 4 \\end{bmatrix}\\)"],
    correctIndex: 0, correctText: "\\(\\begin{bmatrix} 1 & 3 \\\\ 4 & 4 \\end{bmatrix}\\)",
    explanation: "Add entry-wise: \\(\\begin{bmatrix} 1+0 & 2+1 \\\\ 3+1 & 4+0 \\end{bmatrix} = \\begin{bmatrix} 1 & 3 \\\\ 4 & 4 \\end{bmatrix}\\).",
  },
  {
    slug: "unit-4-12", subject: "unit-4", section: "4.11", domain: "Matrices", difficulty: "easy",
    prompt: "What is the determinant of \\(\\begin{bmatrix} 3 & 1 \\\\ 2 & 4 \\end{bmatrix}\\)?",
    choices: ["10", "14", "12", "\\(-10\\)"], correctIndex: 0, correctText: "10",
    explanation: "det = \\((3)(4) - (1)(2) = 12 - 2 = 10\\).",
  },
  {
    slug: "unit-4-13", subject: "unit-4", section: "4.10", domain: "Matrices", difficulty: "medium",
    prompt: "What is the product \\(\\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix} \\times \\begin{bmatrix} 2 & 0 \\\\ 1 & 2 \\end{bmatrix}\\)?",
    choices: ["\\(\\begin{bmatrix} 4 & 4 \\\\ 10 & 8 \\end{bmatrix}\\)", "\\(\\begin{bmatrix} 2 & 4 \\\\ 3 & 8 \\end{bmatrix}\\)", "\\(\\begin{bmatrix} 4 & 2 \\\\ 10 & 6 \\end{bmatrix}\\)", "\\(\\begin{bmatrix} 3 & 4 \\\\ 7 & 12 \\end{bmatrix}\\)"],
    correctIndex: 0, correctText: "\\(\\begin{bmatrix} 4 & 4 \\\\ 10 & 8 \\end{bmatrix}\\)",
    explanation: "Row-by-column: top-left \\((1)(2)+(2)(1)=4\\); top-right \\((1)(0)+(2)(2)=4\\); bottom-left \\((3)(2)+(4)(1)=10\\); bottom-right \\((3)(0)+(4)(2)=8\\).",
  },
  {
    slug: "unit-4-14", subject: "unit-4", section: "4.11", domain: "Matrices", difficulty: "medium",
    prompt: "What is the inverse of \\(\\begin{bmatrix} 2 & 0 \\\\ 0 & 3 \\end{bmatrix}\\)?",
    choices: ["\\(\\begin{bmatrix} \\frac{1}{2} & 0 \\\\ 0 & \\frac{1}{3} \\end{bmatrix}\\)", "\\(\\begin{bmatrix} 2 & 0 \\\\ 0 & 3 \\end{bmatrix}\\)", "\\(\\begin{bmatrix} \\frac{1}{2} & 0 \\\\ 0 & 3 \\end{bmatrix}\\)", "\\(\\begin{bmatrix} -2 & 0 \\\\ 0 & -3 \\end{bmatrix}\\)"],
    correctIndex: 0, correctText: "\\(\\begin{bmatrix} \\frac{1}{2} & 0 \\\\ 0 & \\frac{1}{3} \\end{bmatrix}\\)",
    explanation: "For a diagonal matrix, the inverse inverts each diagonal entry: \\(\\begin{bmatrix} \\frac{1}{2} & 0 \\\\ 0 & \\frac{1}{3} \\end{bmatrix}\\). Check: \\(\\begin{bmatrix} 2 & 0 \\\\ 0 & 3 \\end{bmatrix} \\cdot \\begin{bmatrix} \\frac{1}{2} & 0 \\\\ 0 & \\frac{1}{3} \\end{bmatrix} = I\\).",
  },
  {
    slug: "unit-4-15", subject: "unit-4", section: "4.12", domain: "Matrices", difficulty: "medium",
    prompt: "The matrix \\(\\begin{bmatrix} 0 & -1 \\\\ 1 & 0 \\end{bmatrix}\\) represents a \\(90^{\\circ}\\) counterclockwise rotation about the origin. What is the image of the point \\((1, 0)\\)?",
    choices: ["\\((0, 1)\\)", "\\((0, -1)\\)", "\\((-1, 0)\\)", "\\((1, 0)\\)"],
    correctIndex: 0, correctText: "\\((0, 1)\\)",
    explanation: "\\(\\begin{bmatrix} 0 & -1 \\\\ 1 & 0 \\end{bmatrix} \\cdot \\begin{bmatrix} 1 \\\\ 0 \\end{bmatrix} = \\begin{bmatrix} 0\\cdot 1 + (-1)\\cdot 0 \\\\ 1\\cdot 1 + 0\\cdot 0 \\end{bmatrix} = (0, 1)\\).",
  },
  {
    slug: "unit-4-16", subject: "unit-4", section: "4.11", domain: "Matrices", difficulty: "hard",
    prompt: "What is the solution \\((x, y)\\) of the matrix equation \\(\\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix} \\cdot \\begin{bmatrix} x \\\\ y \\end{bmatrix} = \\begin{bmatrix} 5 \\\\ 11 \\end{bmatrix}\\)?",
    choices: ["\\((1, 2)\\)", "\\((2, 1)\\)", "\\((3, -1)\\)", "\\((-1, 3)\\)"],
    correctIndex: 0, correctText: "\\((1, 2)\\)",
    explanation: "Multiply both sides by the inverse \\(\\begin{bmatrix} -2 & 1 \\\\ \\frac{3}{2} & -\\frac{1}{2} \\end{bmatrix}\\): \\(x = -2(5) + 1(11) = 1\\), \\(y = (\\frac{3}{2})(5) - (\\frac{1}{2})(11) = 2\\). Check: \\(1 + 4 = 5\\) and \\(3 + 8 = 11\\).",
  },
// ================= 1.1 | Change in Tandem =================
  {
    slug: "unit-1-21", subject: "unit-1", section: "1.1", domain: "Functions", difficulty: "easy",
    prompt: "If \\(f(x) = 3x + 2\\), what is the change in the output value of \\(f\\) as the input changes from \\(x = 1\\) to \\(x = 4\\)?",
    choices: ["6", "9", "12", "14"], correctIndex: 1, correctText: "9",
    explanation: "Evaluate at each input: \\(f(1) = 3(1) + 2 = 5\\) and \\(f(4) = 3(4) + 2 = 14\\). The change in output is \\(14 - 5 = 9\\).",
  },
  {
    slug: "unit-1-22", subject: "unit-1", section: "1.1", domain: "Functions", difficulty: "easy",
    prompt: "A function \\(g\\) has \\(x\\)-values 0, 1, 2, and 3 with corresponding outputs 5, 8, 11, and 14. As the input increases from \\(x = 0\\) to \\(x = 3\\), how does the output change?",
    choices: ["increases by 3", "increases by 9", "increases by 14", "decreases by 9"], correctIndex: 1, correctText: "increases by 9",
    explanation: "The output goes from \\(g(0) = 5\\) to \\(g(3) = 14\\), so the change is \\(14 - 5 = 9\\), an increase of 9. (The value 3 is the per-unit rate of change, not the total change.)",
  },
  {
    slug: "unit-1-23", subject: "unit-1", section: "1.1", domain: "Functions", difficulty: "medium",
    prompt: "The function \\(h\\) gives the height, in feet, of a sunflower \\(t\\) weeks after it sprouts. If \\(h(2) = 5\\) and \\(h(6) = 17\\), what is the change in the plant's height as the time changes from \\(t = 2\\) to \\(t = 6\\) weeks?",
    choices: ["12 feet", "3 feet per week", "17 feet", "6 feet"], correctIndex: 0, correctText: "12 feet",
    explanation: "The change in height is \\(h(6) - h(2) = 17 - 5 = 12\\) feet. (The value 3 feet per week is the average rate of change, not the total change.)",
  },
  {
    slug: "unit-1-24", subject: "unit-1", section: "1.1", domain: "Functions", difficulty: "medium",
    prompt: "For the function \\(f(x) = x^{2}\\) with positive inputs, the output increases from 9 to 25. What is the corresponding change in the input?",
    choices: ["2", "4", "8", "16"], correctIndex: 0, correctText: "2",
    explanation: "With positive inputs, an output of 9 comes from \\(x = 3\\) and an output of 25 comes from \\(x = 5\\). The input changes by \\(5 - 3 = 2\\). (The value 16 is the change in the output, not the input.)",
  },
  {
    slug: "unit-1-25", subject: "unit-1", section: "1.1", domain: "Functions", difficulty: "hard",
    prompt: "For the function \\(f(x) = 2^{x}\\), the input increases from \\(x = 2\\) to \\(x = 5\\). By what factor does the output change over this interval?",
    choices: ["3", "8", "16", "28"], correctIndex: 1, correctText: "8",
    explanation: "The outputs are \\(f(2) = 2^{2} = 4\\) and \\(f(5) = 2^{5} = 32\\). The multiplicative factor is \\(\\frac{32}{4} = 8\\), so the output is multiplied by 8. (The value 28 is the additive change \\(32 - 4\\), not the factor.)",
  },

  // ================= 1.3 | Rates of Change in Linear and Quadratic Functions =================
  {
    slug: "unit-1-26", subject: "unit-1", section: "1.3", domain: "Polynomial Functions", difficulty: "easy",
    prompt: "For the linear function \\(f(x) = -4x + 7\\), what is the average rate of change of \\(f\\) on any interval?",
    choices: ["\\(-4\\)", "4", "7", "\\(-7\\)"], correctIndex: 0, correctText: "\\(-4\\)",
    explanation: "A linear function has a constant rate of change equal to its slope. Here the slope is \\(-4\\), so the average rate of change is \\(-4\\) on every interval.",
  },
  {
    slug: "unit-1-27", subject: "unit-1", section: "1.3", domain: "Polynomial Functions", difficulty: "easy",
    prompt: "What is the average rate of change of \\(g(x) = x^{2}\\) on the interval \\([1, 3]\\)?",
    choices: ["2", "4", "6", "8"], correctIndex: 1, correctText: "4",
    explanation: "Average rate of change = \\(\\frac{g(3) - g(1)}{3 - 1} = \\frac{9 - 1}{2} = \\frac{8}{2} = 4\\).",
  },
  {
    slug: "unit-1-28", subject: "unit-1", section: "1.3", domain: "Polynomial Functions", difficulty: "medium",
    prompt: "For \\(f(x) = x^{2}\\), which interval has the greater average rate of change: \\([0, 2]\\) or \\([2, 4]\\)?",
    choices: ["The interval \\([0, 2]\\)", "The interval \\([2, 4]\\)", "The rates are equal", "It cannot be determined"], correctIndex: 1, correctText: "The interval \\([2, 4]\\)",
    explanation: "On \\([0, 2]\\): \\(\\frac{4 - 0}{2} = 2\\). On \\([2, 4]\\): \\(\\frac{16 - 4}{2} = 6\\). Since \\(6 > 2\\), the interval \\([2, 4]\\) has the greater average rate of change — the rate of change of a quadratic is not constant.",
  },
  {
    slug: "unit-1-29", subject: "unit-1", section: "1.3", domain: "Polynomial Functions", difficulty: "medium",
    prompt: "The height of a tossed ball, in feet, is given by \\(h(t) = -16t^{2} + 48t\\), where \\(t\\) is seconds after the toss. What is the average rate of change of the height from \\(t = 1\\) to \\(t = 3\\)?",
    choices: ["\\(-16\\) feet per second", "16 feet per second", "\\(-32\\) feet per second", "0 feet per second"], correctIndex: 0, correctText: "\\(-16\\) feet per second",
    explanation: "\\(h(1) = -16(1) + 48(1) = 32\\) and \\(h(3) = -16(9) + 48(3) = -144 + 144 = 0\\). The average rate of change is \\(\\frac{0 - 32}{3 - 1} = \\frac{-32}{2} = -16\\) feet per second.",
  },
  {
    slug: "unit-1-30", subject: "unit-1", section: "1.3", domain: "Polynomial Functions", difficulty: "hard",
    prompt: "Let \\(r_{1}\\), \\(r_{2}\\), and \\(r_{3}\\) be the average rates of change of \\(f(x) = 2x^{2} - 3x\\) on the intervals \\([0, 1]\\), \\([1, 2]\\), and \\([2, 3]\\), respectively. Which lists them in increasing order?",
    choices: ["\\(r_{1} < r_{2} < r_{3}\\)", "\\(r_{3} < r_{2} < r_{1}\\)", "\\(r_{1} = r_{2} = r_{3}\\)", "\\(r_{2} < r_{1} < r_{3}\\)"], correctIndex: 0, correctText: "\\(r_{1} < r_{2} < r_{3}\\)",
    explanation: "\\(f(0) = 0\\), \\(f(1) = -1\\), \\(f(2) = 2\\), \\(f(3) = 9\\). So \\(r_{1} = \\frac{-1 - 0}{1} = -1\\), \\(r_{2} = \\frac{2 - (-1)}{1} = 3\\), \\(r_{3} = \\frac{9 - 2}{1} = 7\\). Thus \\(r_{1} < r_{2} < r_{3}\\). The rates increase by 4 over each successive unit interval, showing that a quadratic's rate of change is itself changing.",
  },

  // ================= 1.11 | Equivalent Representations of Polynomial and Rational Expressions =================
  {
    slug: "unit-1-31", subject: "unit-1", section: "1.11", domain: "Polynomial Functions", difficulty: "easy",
    prompt: "Which expression is equivalent to \\(\\frac{x^{2} - 9}{x - 3}\\) for \\(x \\neq 3\\)?",
    choices: ["\\(x + 3\\)", "\\(x - 3\\)", "\\(x^{2} - 3\\)", "3"], correctIndex: 0, correctText: "\\(x + 3\\)",
    explanation: "Factor the numerator: \\(x^{2} - 9 = (x - 3)(x + 3)\\). Canceling the common factor \\((x - 3)\\) gives \\(x + 3\\) (valid for \\(x \\neq 3\\)).",
  },
  {
    slug: "unit-1-32", subject: "unit-1", section: "1.11", domain: "Polynomial Functions", difficulty: "easy",
    prompt: "When \\(2x^{3} - 5x^{2} + x + 6\\) is divided by \\((x - 2)\\), what is the quotient?",
    choices: ["\\(2x^{2} - x - 1\\)", "\\(2x^{2} + x + 1\\)", "\\(2x^{2} - 5x + 1\\)", "\\(2x^{2} - x + 3\\)"], correctIndex: 0, correctText: "\\(2x^{2} - x - 1\\)",
    explanation: "Using synthetic division with 2 on the coefficients 2, \\(-5\\), 1, 6: bring down 2; \\(2 \\cdot 2 = 4\\), \\(-5 + 4 = -1\\); \\(-1 \\cdot 2 = -2\\), \\(1 + (-2) = -1\\); \\(-1 \\cdot 2 = -2\\), \\(6 + (-2) = 4\\) (remainder). The quotient is \\(2x^{2} - x - 1\\).",
  },
  {
    slug: "unit-1-33", subject: "unit-1", section: "1.11", domain: "Polynomial Functions", difficulty: "medium",
    prompt: "The expression \\(\\frac{3x^{2} + 8x - 3}{x + 3}\\), \\(x \\neq -3\\), can be written as a polynomial \\(q(x)\\). Which of the following is \\(q(x)\\)?",
    choices: ["\\(3x - 1\\)", "\\(3x + 1\\)", "\\(3x - 1 + \\frac{6}{x + 3}\\)", "\\(3x + 17\\)"], correctIndex: 0, correctText: "\\(3x - 1\\)",
    explanation: "Divide: \\(3x^{2} \\div x = 3x\\), and \\(3x(x + 3) = 3x^{2} + 9x\\). Subtracting gives \\(-x - 3\\). Then \\(-x \\div x = -1\\), and \\(-1(x + 3) = -x - 3\\), leaving remainder 0. So the quotient is \\(3x - 1\\). Check: \\((x + 3)(3x - 1) = 3x^{2} + 8x - 3\\).",
  },
  {
    slug: "unit-1-34", subject: "unit-1", section: "1.11", domain: "Polynomial Functions", difficulty: "medium",
    prompt: "Which polynomial is equivalent to \\((x^{2} + 2x - 8)(x + 1) - (x^{3} - 4)\\)?",
    choices: ["\\(3x^{2} - 6x - 4\\)", "\\(3x^{2} - 6x - 12\\)", "\\(x^{2} - 4x - 4\\)", "\\(4x^{3} + 3x^{2} - 6x - 12\\)"], correctIndex: 0, correctText: "\\(3x^{2} - 6x - 4\\)",
    explanation: "First expand: \\((x^{2} + 2x - 8)(x + 1) = x^{3} + x^{2} + 2x^{2} + 2x - 8x - 8 = x^{3} + 3x^{2} - 6x - 8\\). Then subtract: \\(x^{3} + 3x^{2} - 6x - 8 - x^{3} + 4 = 3x^{2} - 6x - 4\\).",
  },
  {
    slug: "unit-1-35", subject: "unit-1", section: "1.11", domain: "Polynomial Functions", difficulty: "hard",
    prompt: "For \\(x \\neq 1\\), the rational expression \\(\\frac{x^{3} - 2x^{2} - 5x + 6}{x - 1}\\) is equivalent to a quadratic \\(ax^{2} + bx + c\\). What is the value of \\(a + b + c\\)?",
    choices: ["\\(-6\\)", "\\(-4\\)", "4", "8"], correctIndex: 0, correctText: "\\(-6\\)",
    explanation: "Synthetic division with 1 on 1, \\(-2\\), \\(-5\\), 6 gives quotient coefficients 1, \\(-1\\), \\(-6\\) with remainder 0, so the expression equals \\(x^{2} - x - 6\\). Thus \\(a = 1\\), \\(b = -1\\), \\(c = -6\\), and \\(a + b + c = 1 - 1 - 6 = -6\\).",
  },

  // ================= 1.13 | Function Model Selection and Assumption Articulation =================
  {
    slug: "unit-1-36", subject: "unit-1", section: "1.13", domain: "Modeling", difficulty: "easy",
    prompt: "A data set has \\(x\\)-values 0, 1, 2, and 3 with corresponding outputs 2, 5, 8, and 11. Which type of function best models this data?",
    choices: ["linear", "quadratic", "exponential", "logarithmic"], correctIndex: 0, correctText: "linear",
    explanation: "The successive differences in the outputs are \\(5 - 2 = 3\\), \\(8 - 5 = 3\\), and \\(11 - 8 = 3\\). Since the outputs change by a constant amount over equal input intervals, a linear model is the best fit.",
  },
  {
    slug: "unit-1-37", subject: "unit-1", section: "1.13", domain: "Modeling", difficulty: "easy",
    prompt: "A rumor spreads through a school so that each day the total number of students who have heard it doubles. Which type of function best models the number of students who have heard the rumor as a function of time?",
    choices: ["linear", "quadratic", "exponential", "constant"], correctIndex: 2, correctText: "exponential",
    explanation: "The quantity is repeatedly multiplied by the same factor (2) over equal time intervals. Repeated multiplication by a constant factor is the defining behavior of an exponential function.",
  },
  {
    slug: "unit-1-38", subject: "unit-1", section: "1.13", domain: "Modeling", difficulty: "medium",
    prompt: "A data set has \\(x\\)-values 0, 1, 2, 3, and 4 with corresponding outputs 1, 3, 7, 13, and 21. Which type of function best models this data?",
    choices: ["linear", "quadratic", "exponential", "logarithmic"], correctIndex: 1, correctText: "quadratic",
    explanation: "The first differences are 2, 4, 6, 8 (not constant, so not linear), and the second differences are \\(4 - 2 = 2\\), \\(6 - 4 = 2\\), \\(8 - 6 = 2\\) — constant. Constant second differences indicate a quadratic model.",
  },
  {
    slug: "unit-1-39", subject: "unit-1", section: "1.13", domain: "Modeling", difficulty: "medium",
    prompt: "A scientist models the temperature of a cooling cup of coffee with an exponential decay function. Which assumption about the cooling process is the scientist making by choosing this model?",
    choices: ["The temperature drops by the same number of degrees each minute", "The temperature drops by the same percent in each equal time interval", "The temperature will reach 0 degrees after a fixed amount of time", "The temperature drops faster and faster as time goes on"], correctIndex: 1, correctText: "The temperature drops by the same percent in each equal time interval",
    explanation: "An exponential decay model assumes the quantity is multiplied by a constant factor (less than 1) over each equal time interval — that is, it decreases by the same percent each interval. A constant number of degrees per minute would be a linear assumption instead.",
  },
  {
    slug: "unit-1-40", subject: "unit-1", section: "1.13", domain: "Modeling", difficulty: "hard",
    prompt: "A data set has \\(x\\)-values 0, 1, 2, and 3 with corresponding outputs 4, 7, 12, and 19. Which model choice is best supported, and why?",
    choices: ["Linear, because the outputs increase", "Quadratic, because the second differences are constant", "Exponential, because the differences increase", "Linear, because the first differences are constant"], correctIndex: 1, correctText: "Quadratic, because the second differences are constant",
    explanation: "The first differences are 3, 5, 7 — not constant, so the model is not linear. The second differences are \\(5 - 3 = 2\\) and \\(7 - 5 = 2\\) — constant, which is the signature of a quadratic model. Increasing first differences alone do not imply an exponential model.",
  },

  // ================= 1.14 | Function Model Construction and Application =================
  {
    slug: "unit-1-41", subject: "unit-1", section: "1.14", domain: "Modeling", difficulty: "easy",
    prompt: "A linear model passes through the points \\((0, 5)\\) and \\((4, 17)\\). According to this model, what is the predicted value when \\(x = 6\\)?",
    choices: ["20", "23", "26", "29"], correctIndex: 1, correctText: "23",
    explanation: "The slope is \\(\\frac{17 - 5}{4 - 0} = \\frac{12}{4} = 3\\), and the \\(y\\)-intercept is 5, so the model is \\(f(x) = 3x + 5\\). Then \\(f(6) = 3(6) + 5 = 23\\).",
  },
  {
    slug: "unit-1-42", subject: "unit-1", section: "1.14", domain: "Modeling", difficulty: "easy",
    prompt: "A town's population, in hundreds, is modeled by \\(P(t) = 200(1.05)^{t}\\), where \\(t\\) is the number of years since 2020. What does the model predict for the population after 2 years?",
    choices: ["210", "220.5", "230", "400"], correctIndex: 1, correctText: "220.5",
    explanation: "Substitute \\(t = 2\\): \\(P(2) = 200(1.05)^{2} = 200(1.1025) = 220.5\\). (The value 210 is the prediction after only 1 year.)",
  },
  {
    slug: "unit-1-43", subject: "unit-1", section: "1.14", domain: "Modeling", difficulty: "medium",
    prompt: "The height of a football, in feet, \\(t\\) seconds after it is kicked is modeled by \\(f(t) = -2t^{2} + 12t + 5\\). According to the model, what is the maximum height of the football?",
    choices: ["23", "18", "41", "5"], correctIndex: 0, correctText: "23",
    explanation: "The maximum of a downward-opening parabola occurs at its vertex: \\(t = -\\frac{12}{2(-2)} = 3\\). Then \\(f(3) = -2(9) + 12(3) + 5 = -18 + 36 + 5 = 23\\) feet.",
  },
  {
    slug: "unit-1-44", subject: "unit-1", section: "1.14", domain: "Modeling", difficulty: "medium",
    prompt: "A delivery driver records time (in hours) 0, 1, 2, 3 and distance driven (in miles) 30, 46, 62, 78. A linear model is fit to the data. According to the model, what is the predicted distance after 5 hours?",
    choices: ["94", "110", "126", "142"], correctIndex: 1, correctText: "110",
    explanation: "The distance increases by 16 miles each hour, so the model is \\(d(t) = 16t + 30\\). At \\(t = 5\\): \\(d(5) = 16(5) + 30 = 80 + 30 = 110\\) miles.",
  },
  {
    slug: "unit-1-45", subject: "unit-1", section: "1.14", domain: "Modeling", difficulty: "hard",
    prompt: "A bacteria culture contains 500 cells at 1:00 PM and 2000 cells at 3:00 PM. Assuming exponential growth, how many cells does the model predict at 5:00 PM?",
    choices: ["4000", "6000", "8000", "16000"], correctIndex: 2, correctText: "8000",
    explanation: "From 1:00 PM to 3:00 PM (2 hours), the population is multiplied by \\(\\frac{2000}{500} = 4\\), so the hourly growth factor is \\(\\sqrt{4} = 2\\). From 3:00 PM to 5:00 PM is another 2 hours, multiplying by \\(2^{2} = 4\\): \\(2000 \\cdot 4 = 8000\\) cells.",
  },
// ================= 2.1 | Change in Arithmetic and Geometric Sequences =================
  {
    slug: "unit-2-23", subject: "unit-2", section: "2.1", domain: "Sequences", difficulty: "easy",
    prompt: "An arithmetic sequence has first term \\(5\\) and common difference \\(3\\). What is the 4th term of the sequence?",
    choices: ["12", "14", "17", "20"], correctIndex: 1, correctText: "14",
    explanation: "For an arithmetic sequence, \\(a_{n} = a_{1} + (n - 1)d\\). So \\(a_{4} = 5 + (4 - 1)(3) = 5 + 9 = 14\\).",
  },
  {
    slug: "unit-2-24", subject: "unit-2", section: "2.1", domain: "Sequences", difficulty: "easy",
    prompt: "The first four terms of a geometric sequence are \\(3\\), \\(6\\), \\(12\\), \\(24\\). What is the next term?",
    choices: ["36", "40", "48", "60"], correctIndex: 2, correctText: "48",
    explanation: "Each term is multiplied by the common ratio \\(r = 2\\), so the next term is \\(24 \\times 2 = 48\\).",
  },
  {
    slug: "unit-2-25", subject: "unit-2", section: "2.1", domain: "Sequences", difficulty: "medium",
    prompt: "In an arithmetic sequence, the 3rd term is \\(11\\) and the 7th term is \\(27\\). What is the common difference?",
    choices: ["4", "2", "3", "8"], correctIndex: 0, correctText: "4",
    explanation: "From the 3rd to the 7th term there are 4 steps, so \\(a_{7} - a_{3} = 4d\\). Then \\(27 - 11 = 16 = 4d\\), giving \\(d = 4\\).",
  },
  {
    slug: "unit-2-26", subject: "unit-2", section: "2.1", domain: "Sequences", difficulty: "medium",
    prompt: "A geometric sequence has first term \\(2\\) and common ratio \\(3\\). Which expression gives the \\(n\\)th term of the sequence?",
    choices: ["\\(a_{n} = 2 + 3(n - 1)\\)", "\\(a_{n} = 2(3)^{n}\\)", "\\(a_{n} = 3(2)^{n-1}\\)", "\\(a_{n} = 2(3)^{n-1}\\)"],
    correctIndex: 3, correctText: "\\(a_{n} = 2(3)^{n-1}\\)",
    explanation: "A geometric sequence follows \\(a_{n} = a_{1} r^{n-1}\\). With \\(a_{1} = 2\\) and \\(r = 3\\), this is \\(a_{n} = 2(3)^{n-1}\\).",
  },
  {
    slug: "unit-2-27", subject: "unit-2", section: "2.1", domain: "Sequences", difficulty: "hard",
    prompt: "The terms of a geometric sequence are positive and increasing. The sum of the first two terms is \\(12\\), and the sum of the 3rd and 4th terms is \\(108\\). What is the common ratio?",
    choices: ["\\(-3\\)", "6", "9", "3"], correctIndex: 3, correctText: "3",
    explanation: "Let the first term be \\(a_{1}\\) and the ratio be \\(r\\). Then \\(a_{1}(1 + r) = 12\\) and \\(a_{1}r^{2}(1 + r) = 108\\). Dividing the second equation by the first gives \\(r^{2} = 9\\), so \\(r = 3\\) (positive, since the terms are positive and increasing).",
  },

  // ================= 2.2 | Change in Linear and Exponential Functions =================
  {
    slug: "unit-2-28", subject: "unit-2", section: "2.2", domain: "Exponential Functions", difficulty: "easy",
    prompt: "For a linear function, the output increases by \\(7\\) each time the input increases by \\(2\\). What is the rate of change of the function?",
    choices: ["2", "3.5", "7", "14"], correctIndex: 1, correctText: "3.5",
    explanation: "The rate of change is the change in output divided by the change in input: \\(\\frac{7}{2} = 3.5\\).",
  },
  {
    slug: "unit-2-29", subject: "unit-2", section: "2.2", domain: "Exponential Functions", difficulty: "easy",
    prompt: "An exponential function \\(f\\) satisfies \\(f(0) = 4\\) and \\(f(1) = 12\\). What is the value of \\(f(2)\\)?",
    choices: ["16", "24", "36", "48"], correctIndex: 2, correctText: "36",
    explanation: "The 1-unit growth factor is \\(r = \\frac{12}{4} = 3\\), so \\(f(2) = 12 \\times 3 = 36\\).",
  },
  {
    slug: "unit-2-30", subject: "unit-2", section: "2.2", domain: "Modeling", difficulty: "medium",
    prompt: "A function has the following values: \\(x = 0, 1, 2, 3\\) gives \\(y = 5, 7.5, 10, 12.5\\). Which statement best describes the function?",
    choices: [
      "Linear, because successive outputs change by a constant difference",
      "Exponential, because successive outputs change by a constant difference",
      "Linear, because successive outputs change by a constant ratio",
      "Exponential, because successive outputs change by a constant ratio",
    ],
    correctIndex: 0, correctText: "Linear, because successive outputs change by a constant difference",
    explanation: "The successive differences are \\(2.5\\), \\(2.5\\), \\(2.5\\) — a constant difference — which is the signature of a linear function over equal-length input intervals.",
  },
  {
    slug: "unit-2-31", subject: "unit-2", section: "2.2", domain: "Exponential Functions", difficulty: "medium",
    prompt: "An exponential function \\(g\\) satisfies \\(g(1) = 10\\) and \\(g(4) = 80\\). What is the 1-unit growth factor of \\(g\\)?",
    choices: ["1.5", "2", "4", "8"], correctIndex: 1, correctText: "2",
    explanation: "Over 3 input units the output multiplies by \\(\\frac{80}{10} = 8\\), so \\(r^{3} = 8\\) and the 1-unit growth factor is \\(r = 2\\).",
  },
  {
    slug: "unit-2-32", subject: "unit-2", section: "2.2", domain: "Exponential Functions", difficulty: "hard",
    prompt: "A linear function \\(f\\) and an exponential function \\(g\\) both satisfy \\(f(0) = g(0) = 2\\) and \\(f(2) = g(2) = 18\\). For \\(x > 2\\), which function's values are greater?",
    choices: [
      "They are equal for all \\(x > 2\\)",
      "\\(f(x)\\), because linear functions always grow faster",
      "Cannot be determined without more values",
      "\\(g(x)\\), because exponential growth eventually outpaces linear growth",
    ],
    correctIndex: 3, correctText: "\\(g(x)\\), because exponential growth eventually outpaces linear growth",
    explanation: "Here \\(f(x) = 8x + 2\\) and \\(g(x) = 2(3)^{x}\\) (since \\(2r^{2} = 18\\) gives \\(r = 3\\)). Exponential functions with growth factor greater than 1 eventually outgrow any linear function, so \\(g(x) > f(x)\\) for \\(x > 2\\).",
  },

  // ================= 2.4 | Exponential Function Manipulation =================
  {
    slug: "unit-2-33", subject: "unit-2", section: "2.4", domain: "Exponential Functions", difficulty: "easy",
    prompt: "Which of the following is equivalent to \\(2^{3x}\\)?",
    choices: ["\\(6^{x}\\)", "\\(8^{x}\\)", "\\(9^{x}\\)", "\\(12^{x}\\)"], correctIndex: 1, correctText: "\\(8^{x}\\)",
    explanation: "Using \\(a^{bc} = (a^{b})^{c}\\), we get \\(2^{3x} = (2^{3})^{x} = 8^{x}\\).",
  },
  {
    slug: "unit-2-34", subject: "unit-2", section: "2.4", domain: "Exponential Functions", difficulty: "easy",
    prompt: "Which of the following is equivalent to \\(\\left(\\frac{1}{4}\\right)^{x}\\)?",
    choices: ["\\(4^{-x}\\)", "\\(4^{x}\\)", "\\(-4^{x}\\)", "\\(2^{-x}\\)"], correctIndex: 0, correctText: "\\(4^{-x}\\)",
    explanation: "\\(\\left(\\frac{1}{4}\\right)^{x} = \\frac{1^{x}}{4^{x}} = \\frac{1}{4^{x}} = 4^{-x}\\).",
  },
  {
    slug: "unit-2-35", subject: "unit-2", section: "2.4", domain: "Exponential Functions", difficulty: "medium",
    prompt: "Rewrite \\(5^{2x+1}\\) in the form \\(k \\cdot b^{x}\\). Which is correct?",
    choices: ["\\(25 \\cdot 5^{x}\\)", "\\(5 \\cdot 10^{x}\\)", "\\(5 \\cdot 25^{x}\\)", "\\(10 \\cdot 25^{x}\\)"],
    correctIndex: 2, correctText: "\\(5 \\cdot 25^{x}\\)",
    explanation: "\\(5^{2x+1} = 5^{1} \\cdot 5^{2x} = 5 \\cdot (5^{2})^{x} = 5 \\cdot 25^{x}\\).",
  },
  {
    slug: "unit-2-36", subject: "unit-2", section: "2.4", domain: "Exponential Functions", difficulty: "medium",
    prompt: "Which of the following is equivalent to \\(\\frac{3^{x+2}}{9^{x-1}}\\)?",
    choices: ["\\(3^{x}\\)", "\\(3^{4-x}\\)", "\\(9^{4-x}\\)", "\\(81 \\cdot 3^{x}\\)"],
    correctIndex: 1, correctText: "\\(3^{4-x}\\)",
    explanation: "Since \\(9^{x-1} = (3^{2})^{x-1} = 3^{2x-2}\\), the quotient is \\(3^{(x+2)-(2x-2)} = 3^{4-x}\\).",
  },
  {
    slug: "unit-2-37", subject: "unit-2", section: "2.4", domain: "Exponential Functions", difficulty: "hard",
    prompt: "Express \\(8^{x} \\cdot 4^{2x-1}\\) as a single power of \\(2\\).",
    choices: ["\\(2^{6x - 1}\\)", "\\(2^{7x - 2}\\)", "\\(2^{7x + 2}\\)", "\\(32^{3x - 1}\\)"],
    correctIndex: 1, correctText: "\\(2^{7x - 2}\\)",
    explanation: "\\(8^{x} = (2^{3})^{x} = 2^{3x}\\) and \\(4^{2x-1} = (2^{2})^{2x-1} = 2^{4x-2}\\). Multiplying adds the exponents: \\(2^{3x + 4x - 2} = 2^{7x-2}\\).",
  },

  // ================= 2.6 | Competing Function Model Validation =================
  {
    slug: "unit-2-38", subject: "unit-2", section: "2.6", domain: "Modeling", difficulty: "easy",
    prompt: "A data set has inputs \\(x = 0, 1, 2, 3\\) with outputs \\(y = 2, 5, 8, 11\\). Which model is better supported, and why?",
    choices: [
      "A linear model, because the outputs increase by the same amount each time",
      "An exponential model, because the outputs increase each time",
      "A linear model, because the graph of the data is curved",
      "An exponential model, because the outputs increase by the same amount each time",
    ],
    correctIndex: 0, correctText: "A linear model, because the outputs increase by the same amount each time",
    explanation: "The successive differences are \\(3\\), \\(3\\), \\(3\\) — constant — so a linear model fits the pattern in the data.",
  },
  {
    slug: "unit-2-39", subject: "unit-2", section: "2.6", domain: "Modeling", difficulty: "easy",
    prompt: "A data set has inputs \\(t = 0, 1, 2, 3\\) with outputs \\(P = 100, 200, 400, 800\\). Which model is better supported, and why?",
    choices: [
      "A linear model, because the outputs increase by the same amount each time",
      "A linear model, because the graph curves upward",
      "An exponential model, because the outputs double each time",
      "An exponential model, because the outputs increase by \\(100\\) each time",
    ],
    correctIndex: 2, correctText: "An exponential model, because the outputs double each time",
    explanation: "The successive ratios are \\(2\\), \\(2\\), \\(2\\) — a constant proportional change — so an exponential model fits the pattern in the data.",
  },
  {
    slug: "unit-2-40", subject: "unit-2", section: "2.6", domain: "Modeling", difficulty: "medium",
    prompt: "A linear regression model is fit to data that actually grows exponentially. What would the residual plot for the linear model most likely show?",
    choices: [
      "The residuals would show a random scatter with no pattern",
      "The residuals would show a clear curved pattern",
      "All residuals would be exactly zero",
      "All residuals would be positive",
    ],
    correctIndex: 1, correctText: "The residuals would show a clear curved pattern",
    explanation: "When the model form is wrong, the residuals reveal the missed structure: a straight-line fit to exponential data leaves a systematic curved pattern in the residuals, signaling the linear model is inappropriate.",
  },
  {
    slug: "unit-2-41", subject: "unit-2", section: "2.6", domain: "Modeling", difficulty: "medium",
    prompt: "Two models are fit to the same data set. The linear model's residuals alternate in sign and grow larger in magnitude, while the exponential model's residuals are small and randomly scattered about zero. Which model is better supported?",
    choices: [
      "The linear model, because it is simpler",
      "Neither model is supported by residual analysis",
      "The exponential model, because its residuals are small and show no pattern",
      "The linear model, because its residuals alternate in sign",
    ],
    correctIndex: 2, correctText: "The exponential model, because its residuals are small and show no pattern",
    explanation: "Small residuals with no systematic pattern indicate a good fit. The linear model's growing, patterned residuals show it misses the structure of the data, so the exponential model is better supported.",
  },
  {
    slug: "unit-2-42", subject: "unit-2", section: "2.6", domain: "Modeling", difficulty: "hard",
    prompt: "A data set has inputs \\(x = 0, 1, 2, 3\\) with outputs \\(y = 10, 30, 90, 250\\). A student claims the data is exactly exponential with a growth factor of \\(3\\). What is the best conclusion?",
    choices: [
      "The data is exactly exponential with growth factor \\(3\\)",
      "The data is exactly linear",
      "The data cannot be modeled because \\(250\\) is not a power of \\(3\\)",
      "The data is approximately exponential with growth factor \\(3\\), but the residual at \\(x = 3\\) is \\(-20\\), so the model needs further validation",
    ],
    correctIndex: 3, correctText: "The data is approximately exponential with growth factor \\(3\\), but the residual at \\(x = 3\\) is \\(-20\\), so the model needs further validation",
    explanation: "An exact exponential model with growth factor \\(3\\) would predict \\(10(3)^{3} = 270\\) at \\(x = 3\\), but the actual value is \\(250\\). The residual is \\(250 - 270 = -20\\), so the model is only approximate and should be validated further rather than assumed exact.",
  },

  // ================= 2.7 | Composition of Functions =================
  {
    slug: "unit-2-43", subject: "unit-2", section: "2.7", domain: "Exponential Functions", difficulty: "easy",
    prompt: "Let \\(f(x) = 2x + 1\\) and \\(g(x) = x^{2}\\). What is the value of \\((f \\circ g)(2)\\)?",
    choices: ["5", "9", "17", "25"], correctIndex: 1, correctText: "9",
    explanation: "Work from the inside out: \\(g(2) = 2^{2} = 4\\), then \\(f(4) = 2(4) + 1 = 9\\).",
  },
  {
    slug: "unit-2-44", subject: "unit-2", section: "2.7", domain: "Exponential Functions", difficulty: "easy",
    prompt: "If \\((f \\circ g)(x) = 3x + 6\\) and \\(g(x) = x + 2\\), which of the following is \\(f(x)\\)?",
    choices: ["\\(3x\\)", "\\(3x + 6\\)", "\\(x + 2\\)", "\\(3x + 2\\)"], correctIndex: 0, correctText: "\\(3x\\)",
    explanation: "Since \\(f(g(x)) = f(x + 2) = 3x + 6 = 3(x + 2)\\), the outer function must be \\(f(x) = 3x\\).",
  },
  {
    slug: "unit-2-45", subject: "unit-2", section: "2.7", domain: "Exponential Functions", difficulty: "medium",
    prompt: "Let \\(f(x) = x^{2} - 1\\) and \\(g(x) = 2x\\). What is the value of \\((g \\circ f)(3)\\)?",
    choices: ["10", "35", "36", "16"], correctIndex: 3, correctText: "16",
    explanation: "Evaluate the inner function first: \\(f(3) = 3^{2} - 1 = 8\\). Then \\(g(8) = 2(8) = 16\\).",
  },
  {
    slug: "unit-2-46", subject: "unit-2", section: "2.7", domain: "Exponential Functions", difficulty: "medium",
    prompt: "Which pair of functions satisfies \\(f(g(x)) = \\sqrt{x + 5}\\) for all \\(x\\) in the domain?",
    choices: [
      "\\(f(x) = x + 5\\), \\(g(x) = \\sqrt{x}\\)",
      "\\(f(x) = \\sqrt{x + 5}\\), \\(g(x) = x\\)",
      "\\(f(x) = \\sqrt{x}\\), \\(g(x) = x + 5\\)",
      "\\(f(x) = x^{2}\\), \\(g(x) = x + 5\\)",
    ],
    correctIndex: 2, correctText: "\\(f(x) = \\sqrt{x}\\), \\(g(x) = x + 5\\)",
    explanation: "With the inner function \\(g(x) = x + 5\\) and the outer function \\(f(x) = \\sqrt{x}\\), we get \\(f(g(x)) = \\sqrt{x + 5}\\).",
  },
  {
    slug: "unit-2-47", subject: "unit-2", section: "2.7", domain: "Exponential Functions", difficulty: "hard",
    prompt: "Let \\(f(x) = \\frac{1}{x - 2}\\) and \\(g(x) = x^{2}\\). What is the domain of \\((f \\circ g)(x)\\)?",
    choices: [
      "All real numbers",
      "All real numbers except \\(x = 2\\)",
      "All real numbers except \\(x = \\sqrt{2}\\) and \\(x = -\\sqrt{2}\\)",
      "All real numbers except \\(x = 0\\)",
    ],
    correctIndex: 2, correctText: "All real numbers except \\(x = \\sqrt{2}\\) and \\(x = -\\sqrt{2}\\)",
    explanation: "\\((f \\circ g)(x) = \\frac{1}{x^{2} - 2}\\), which is undefined when the denominator is zero: \\(x^{2} - 2 = 0\\) gives \\(x = \\sqrt{2}\\) and \\(x = -\\sqrt{2}\\).",
  },

  // ================= 2.8 | Inverse Functions =================
  {
    slug: "unit-2-48", subject: "unit-2", section: "2.8", domain: "Exponential Functions", difficulty: "easy",
    prompt: "If \\(f(x) = 3x - 6\\), which of the following is \\(f^{-1}(x)\\)?",
    choices: ["\\(\\frac{x + 6}{3}\\)", "\\(\\frac{x - 6}{3}\\)", "\\(3x + 6\\)", "\\(\\frac{x}{3} - 6\\)"],
    correctIndex: 0, correctText: "\\(\\frac{x + 6}{3}\\)",
    explanation: "Set \\(y = 3x - 6\\) and solve for \\(x\\): \\(x = \\frac{y + 6}{3}\\). Swapping variables gives \\(f^{-1}(x) = \\frac{x + 6}{3}\\).",
  },
  {
    slug: "unit-2-49", subject: "unit-2", section: "2.8", domain: "Exponential Functions", difficulty: "easy",
    prompt: "Which statement is true for any invertible function \\(f\\)?",
    choices: [
      "The inverse of \\(f\\) is \\(\\frac{1}{f(x)}\\)",
      "If \\(f(a) = b\\), then \\(f^{-1}(b) = a\\)",
      "If \\(f(a) = b\\), then \\(f^{-1}(a) = b\\)",
      "Every function has an inverse function",
    ],
    correctIndex: 1, correctText: "If \\(f(a) = b\\), then \\(f^{-1}(b) = a\\)",
    explanation: "The inverse undoes the original function: it maps each output back to the input that produced it, so \\(f(a) = b\\) is equivalent to \\(f^{-1}(b) = a\\).",
  },
  {
    slug: "unit-2-50", subject: "unit-2", section: "2.8", domain: "Exponential Functions", difficulty: "medium",
    prompt: "Let \\(f(x) = x^{3} + 2\\). What is the value of \\(f^{-1}(10)\\)?",
    choices: ["2", "3", "4", "1002"], correctIndex: 0, correctText: "2",
    explanation: "Finding \\(f^{-1}(10)\\) means solving \\(f(x) = 10\\): \\(x^{3} + 2 = 10\\), so \\(x^{3} = 8\\) and \\(x = 2\\).",
  },
  {
    slug: "unit-2-51", subject: "unit-2", section: "2.8", domain: "Exponential Functions", difficulty: "medium",
    prompt: "Which of the following functions does NOT have an inverse function over its natural domain?",
    choices: ["\\(f(x) = 2x + 1\\)", "\\(f(x) = x^{3}\\)", "\\(f(x) = x^{2}\\)", "\\(f(x) = e^{x}\\)"],
    correctIndex: 2, correctText: "\\(f(x) = x^{2}\\)",
    explanation: "A function has an inverse exactly when it is one-to-one. \\(f(x) = x^{2}\\) fails the horizontal line test (for example, \\(f(2) = f(-2) = 4\\)), so it has no inverse over all real numbers.",
  },
  {
    slug: "unit-2-52", subject: "unit-2", section: "2.8", domain: "Exponential Functions", difficulty: "hard",
    prompt: "Let \\(f\\) be a one-to-one function with \\(f(2) = 5\\) and \\(f(5) = 9\\). What is the value of \\((f^{-1} \\circ f^{-1})(9)\\)?",
    choices: ["5", "9", "11", "2"], correctIndex: 3, correctText: "2",
    explanation: "Work from the inside out. Since \\(f(5) = 9\\), we have \\(f^{-1}(9) = 5\\). Since \\(f(2) = 5\\), we have \\(f^{-1}(5) = 2\\). So \\((f^{-1} \\circ f^{-1})(9) = 2\\).",
  },

  // ================= 2.14 | Logarithmic Function Context and Data Modeling =================
  {
    slug: "unit-2-53", subject: "unit-2", section: "2.14", domain: "Logarithms", difficulty: "easy",
    prompt: "The loudness \\(L\\) of a sound in decibels is given by \\(L = 10\\log\\left(\\frac{I}{I_{0}}\\right)\\), where \\(I\\) is the sound's intensity. If a sound's intensity \\(I\\) is \\(100\\) times \\(I_{0}\\), what is its loudness in decibels?",
    choices: ["10", "20", "100", "200"], correctIndex: 1, correctText: "20",
    explanation: "Substitute \\(\\frac{I}{I_{0}} = 100\\): \\(L = 10\\log(100) = 10(2) = 20\\) decibels.",
  },
  {
    slug: "unit-2-54", subject: "unit-2", section: "2.14", domain: "Logarithms", difficulty: "easy",
    prompt: "The pH of a solution is defined by \\(\\text{pH} = -\\log[H^{+}]\\), where \\([H^{+}]\\) is the hydrogen ion concentration. If \\([H^{+}] = 10^{-4}\\), what is the pH?",
    choices: ["2", "\\(-4\\)", "10", "4"], correctIndex: 3, correctText: "4",
    explanation: "\\(\\text{pH} = -\\log(10^{-4}) = -(-4) = 4\\).",
  },
  {
    slug: "unit-2-55", subject: "unit-2", section: "2.14", domain: "Modeling", difficulty: "medium",
    prompt: "A data set is modeled by \\(y = a + b\\ln(x)\\). The model passes through the points \\((1, 5)\\) and \\((e, 8)\\). What is the value of \\(b\\)?",
    choices: ["2", "3", "5", "8"], correctIndex: 1, correctText: "3",
    explanation: "Substituting the points: \\(5 = a + b\\ln(1) = a\\) and \\(8 = a + b\\ln(e) = a + b\\). So \\(a = 5\\) and \\(b = 8 - 5 = 3\\).",
  },
  {
    slug: "unit-2-56", subject: "unit-2", section: "2.14", domain: "Logarithms", difficulty: "medium",
    prompt: "The number of species \\(S\\) on an island is modeled by \\(S = 12 + 5\\log(A)\\), where \\(A\\) is the island's area in square kilometers. If the island's area increases by a factor of \\(100\\), by how much does the predicted number of species increase?",
    choices: ["10", "5", "50", "500"], correctIndex: 0, correctText: "10",
    explanation: "The increase is \\([12 + 5\\log(100A)] - [12 + 5\\log(A)] = 5[\\log(100A) - \\log(A)] = 5\\log(100) = 5(2) = 10\\).",
  },
  {
    slug: "unit-2-57", subject: "unit-2", section: "2.14", domain: "Logarithms", difficulty: "hard",
    prompt: "A logarithmic model \\(y = 4 + 3\\log_{2}(x)\\) fits a data set well. What \\(x\\)-value corresponds to a predicted value of \\(y = 16\\)?",
    choices: ["4", "8", "12", "16"], correctIndex: 3, correctText: "16",
    explanation: "Set \\(16 = 4 + 3\\log_{2}(x)\\): then \\(3\\log_{2}(x) = 12\\), so \\(\\log_{2}(x) = 4\\) and \\(x = 2^{4} = 16\\).",
  },

  // ================= 2.15 | Semi-log Plots =================
  {
    slug: "unit-2-58", subject: "unit-2", section: "2.15", domain: "Modeling", difficulty: "easy",
    prompt: "Data is plotted on a semi-log plot (logarithmic scale on the \\(y\\)-axis), and the points fall approximately on a straight line. What does this suggest?",
    choices: [
      "An exponential model fits the data well",
      "A linear model fits the data well",
      "A quadratic model fits the data well",
      "No standard model fits the data",
    ],
    correctIndex: 0, correctText: "An exponential model fits the data well",
    explanation: "Taking the logarithm of an exponential function \\(y = ab^{x}\\) gives \\(\\log y = \\log a + x\\log b\\), which is linear in \\(x\\). So a straight line on a semi-log plot indicates an exponential model.",
  },
  {
    slug: "unit-2-59", subject: "unit-2", section: "2.15", domain: "Modeling", difficulty: "easy",
    prompt: "For exponential data \\(y = ab^{x}\\) plotted on a semi-log plot (logarithmic \\(y\\)-axis), the points form a line. What does the slope of that line represent?",
    choices: [
      "The initial value \\(a\\)",
      "The input value \\(x\\)",
      "The logarithm of the growth factor, \\(\\log b\\)",
      "The output value \\(y\\)",
    ],
    correctIndex: 2, correctText: "The logarithm of the growth factor, \\(\\log b\\)",
    explanation: "On a semi-log plot we graph \\(\\log y = \\log a + x\\log b\\) against \\(x\\), which is a line with slope \\(\\log b\\) and intercept \\(\\log a\\).",
  },
  {
    slug: "unit-2-60", subject: "unit-2", section: "2.15", domain: "Modeling", difficulty: "medium",
    prompt: "On a semi-log plot using base-10 logarithms, data falls on the line \\(\\log_{10}(y) = 0.301x + 1\\). What is the growth factor of the corresponding exponential model \\(y = ab^{x}\\)?",
    choices: ["0.301", "1", "2", "10"], correctIndex: 2, correctText: "2",
    explanation: "Rewriting gives \\(y = 10^{0.301x + 1} = 10 \\cdot (10^{0.301})^{x}\\), so \\(b = 10^{0.301} \\approx 2\\).",
  },
  {
    slug: "unit-2-61", subject: "unit-2", section: "2.15", domain: "Modeling", difficulty: "medium",
    prompt: "Two data sets are plotted on the same semi-log plot. The points of each set fall on a straight line, and the two lines have the same slope but different intercepts. What can be concluded?",
    choices: [
      "The data sets have the same growth factor but different initial values",
      "The data sets have the same initial value but different growth factors",
      "Both data sets follow linear models",
      "Both data sets represent the same underlying data",
    ],
    correctIndex: 0, correctText: "The data sets have the same growth factor but different initial values",
    explanation: "On a semi-log plot, the slope is \\(\\log b\\) (the growth factor) and the intercept is \\(\\log a\\) (the initial value). Equal slopes mean equal growth factors; different intercepts mean different initial values.",
  },
  {
    slug: "unit-2-62", subject: "unit-2", section: "2.15", domain: "Modeling", difficulty: "hard",
    prompt: "Data is plotted on a semi-log plot, but instead of forming a straight line, the points curve upward (concave up). What does this suggest about the growth in the data?",
    choices: [
      "The data follows an exponential model exactly",
      "The data grows faster than any exponential model with a constant growth factor",
      "The data follows a linear model",
      "The semi-log scale was applied incorrectly",
    ],
    correctIndex: 1, correctText: "The data grows faster than any exponential model with a constant growth factor",
    explanation: "A straight line on a semi-log plot means a constant growth factor. Upward curvature means the proportional growth per unit input is itself increasing, so the data grows faster than any exponential with a fixed growth factor.",
  },
// ================= 3.1 | PERIODIC PHENOMENA =================
  {
    slug: "unit-3-22", subject: "unit-3", section: "3.1", domain: "Trigonometry", difficulty: "easy",
    prompt: "A Ferris wheel with a radius of 20 feet completes one full revolution every 8 minutes. The height of a rider above the ground, as a function of time, is periodic. What is the period of this function?",
    choices: ["4 minutes", "8 minutes", "10 minutes", "20 minutes"], correctIndex: 1, correctText: "8 minutes",
    explanation: "The period is the time needed for one complete cycle. Since the wheel makes one full revolution every 8 minutes, the rider's height repeats every 8 minutes, so the period is 8 minutes.",
  },
  {
    slug: "unit-3-23", subject: "unit-3", section: "3.1", domain: "Trigonometry", difficulty: "easy",
    prompt: "At a certain beach, high tide occurs every 12 hours. If high tide occurs at 2:00 p.m. on Monday, when does the next high tide occur?",
    choices: ["8:00 p.m. on Monday", "2:00 a.m. on Tuesday", "2:00 p.m. on Tuesday", "8:00 a.m. on Tuesday"], correctIndex: 1, correctText: "2:00 a.m. on Tuesday",
    explanation: "One full tidal cycle takes 12 hours, so the next high tide is 12 hours after 2:00 p.m. Monday, which is 2:00 a.m. Tuesday.",
  },
  {
    slug: "unit-3-24", subject: "unit-3", section: "3.1", domain: "Trigonometry", difficulty: "medium",
    prompt: "The number of daylight hours in a city is a periodic function of time with a period of 12 months. The maximum is 15 hours in June and the minimum is 9 hours in December. What is the midline of this function?",
    choices: ["12 hours", "3 hours", "6 hours", "9 hours"], correctIndex: 0, correctText: "12 hours",
    explanation: "The midline is the average of the maximum and minimum values: \\((15 + 9) / 2 = 12\\) hours. (The value 3 hours is the amplitude, a common mix-up.)",
  },
  {
    slug: "unit-3-25", subject: "unit-3", section: "3.1", domain: "Trigonometry", difficulty: "medium",
    prompt: "A function \\(f\\) is periodic with period 6, and \\(f(2) = 10\\). What is the value of \\(f(20)\\)?",
    choices: ["10", "4", "16", "It cannot be determined from the given information"], correctIndex: 0, correctText: "10",
    explanation: "Since \\(20 = 2 + 3 \\cdot 6\\), the input 20 differs from 2 by a whole number of periods (3 periods), so the function repeats its value: \\(f(20) = f(2) = 10\\).",
  },
  {
    slug: "unit-3-26", subject: "unit-3", section: "3.1", domain: "Trigonometry", difficulty: "hard",
    prompt: "The depth of water (in feet) at a harbor entrance is a periodic function of time \\(t\\) (in hours) with a period of 12.4 hours. At \\(t = 10\\) hours the depth is 10 feet and the depth is increasing. What is the depth of water at \\(t = 22.4\\) hours?",
    choices: ["10 feet", "More than 10 feet", "Less than 10 feet", "It cannot be determined from the given information"], correctIndex: 0, correctText: "10 feet",
    explanation: "The time \\(t = 22.4\\) is exactly one period after \\(t = 10\\) because \\(22.4 - 10 = 12.4\\). A periodic function repeats its values every period, so the depth is again 10 feet.",
  },

  // ================= 3.8 | THE TANGENT FUNCTION =================
  {
    slug: "unit-3-27", subject: "unit-3", section: "3.8", domain: "Trigonometry", difficulty: "easy",
    prompt: "What is the period of the function \\(f(x) = \\tan x\\)?",
    choices: ["\\(\\pi\\)", "\\(2\\pi\\)", "\\(\\frac{\\pi}{2}\\)", "1"], correctIndex: 0, correctText: "\\(\\pi\\)",
    explanation: "The tangent function repeats every \\(\\pi\\) radians: \\(\\tan(x + \\pi) = \\tan x\\) for every \\(x\\) in its domain, so its period is \\(\\pi\\).",
  },
  {
    slug: "unit-3-28", subject: "unit-3", section: "3.8", domain: "Trigonometry", difficulty: "easy",
    prompt: "What is the value of \\(\\tan \\frac{\\pi}{4}\\)?",
    choices: ["1", "0", "\\(\\sqrt{3}\\)", "undefined"], correctIndex: 0, correctText: "1",
    explanation: "\\(\\tan \\frac{\\pi}{4} = \\frac{\\sin(\\pi/4)}{\\cos(\\pi/4)} = \\frac{\\sqrt{2}/2}{\\sqrt{2}/2} = 1\\).",
  },
  {
    slug: "unit-3-29", subject: "unit-3", section: "3.8", domain: "Trigonometry", difficulty: "medium",
    prompt: "Which of the following lists two vertical asymptotes of the graph of \\(y = \\tan x\\)?",
    choices: ["\\(x = 0\\) and \\(x = \\pi\\)", "\\(x = \\frac{\\pi}{2}\\) and \\(x = \\frac{3\\pi}{2}\\)", "\\(x = \\pi\\) and \\(x = 2\\pi\\)", "\\(x = \\frac{\\pi}{4}\\) and \\(x = \\frac{3\\pi}{4}\\)"], correctIndex: 1, correctText: "\\(x = \\frac{\\pi}{2}\\) and \\(x = \\frac{3\\pi}{2}\\)",
    explanation: "Since \\(\\tan x = \\frac{\\sin x}{\\cos x}\\), the function is undefined where \\(\\cos x = 0\\), which happens at \\(x = \\frac{\\pi}{2} + n\\pi\\). Both \\(\\frac{\\pi}{2}\\) and \\(\\frac{3\\pi}{2}\\) have this form. (The values \\(x = 0\\) and \\(x = \\pi\\) are zeros of the tangent function, not asymptotes.)",
  },
  {
    slug: "unit-3-30", subject: "unit-3", section: "3.8", domain: "Trigonometry", difficulty: "medium",
    prompt: "As \\(x\\) approaches \\(\\frac{\\pi}{2}\\) from the left, what happens to the value of \\(\\tan x\\)?",
    choices: ["It approaches 0", "It decreases without bound", "It increases without bound", "It approaches 1"], correctIndex: 2, correctText: "It increases without bound",
    explanation: "For \\(x\\) just to the left of \\(\\frac{\\pi}{2}\\), \\(\\sin x\\) is near 1 while \\(\\cos x\\) is a small positive number, so \\(\\tan x = \\frac{\\sin x}{\\cos x}\\) is a large positive value that grows without bound.",
  },
  {
    slug: "unit-3-31", subject: "unit-3", section: "3.8", domain: "Trigonometry", difficulty: "hard",
    prompt: "For \\(0 \\leq x \\leq 2\\pi\\), on which intervals is \\(\\tan x < 0\\)?",
    choices: ["\\((0, \\frac{\\pi}{2}) \\cup (\\pi, \\frac{3\\pi}{2})\\)", "\\((\\frac{\\pi}{2}, \\pi) \\cup (\\frac{3\\pi}{2}, 2\\pi)\\)", "\\((0, \\pi)\\)", "\\((\\pi, 2\\pi)\\)"], correctIndex: 1, correctText: "\\((\\frac{\\pi}{2}, \\pi) \\cup (\\frac{3\\pi}{2}, 2\\pi)\\)",
    explanation: "\\(\\tan x = \\frac{\\sin x}{\\cos x}\\) is negative when \\(\\sin x\\) and \\(\\cos x\\) have opposite signs, which occurs in Quadrant II, \\((\\frac{\\pi}{2}, \\pi)\\), and Quadrant IV, \\((\\frac{3\\pi}{2}, 2\\pi)\\).",
  },

  // ================= 3.15 | RATES OF CHANGE IN POLAR FUNCTIONS =================
  {
    slug: "unit-3-32", subject: "unit-3", section: "3.15", domain: "Polar Functions", difficulty: "easy",
    prompt: "For the polar function \\(r = 2\\theta\\) (with \\(\\theta \\geq 0\\)), what happens to \\(r\\) as \\(\\theta\\) increases?",
    choices: ["\\(r\\) always increases", "\\(r\\) always decreases", "\\(r\\) stays the same", "\\(r\\) increases and then decreases"], correctIndex: 0, correctText: "\\(r\\) always increases",
    explanation: "Since \\(r = 2\\theta\\) is a linear function of \\(\\theta\\) with a positive slope of 2, larger values of \\(\\theta\\) always produce larger values of \\(r\\).",
  },
  {
    slug: "unit-3-33", subject: "unit-3", section: "3.15", domain: "Polar Functions", difficulty: "easy",
    prompt: "For the polar function \\(r = f(\\theta) = 3\\theta\\), what is the average rate of change of \\(r\\) with respect to \\(\\theta\\) on the interval \\([1, 2]\\)?",
    choices: ["3", "6", "1.5", "9"], correctIndex: 0, correctText: "3",
    explanation: "Average rate of change = \\(\\frac{f(2) - f(1)}{2 - 1} = \\frac{6 - 3}{1} = 3\\).",
  },
  {
    slug: "unit-3-34", subject: "unit-3", section: "3.15", domain: "Polar Functions", difficulty: "medium",
    prompt: "For a polar function \\(r = f(\\theta)\\), the average rate of change of \\(r\\) with respect to \\(\\theta\\) on the interval \\([0, \\pi]\\) is \\(-2\\). Which of the following is a correct interpretation?",
    choices: ["The radius increases by 2 units for each 1-radian increase in \\(\\theta\\)", "On average, the radius decreases by 2 units for each 1-radian increase in \\(\\theta\\)", "The radius equals \\(-2\\) when \\(\\theta = \\pi\\)", "The graph is a circle of radius 2"], correctIndex: 1, correctText: "On average, the radius decreases by 2 units for each 1-radian increase in \\(\\theta\\)",
    explanation: "An average rate of change of \\(-2\\) means that, on average over the interval, \\(r\\) decreases by 2 units per 1-radian increase in \\(\\theta\\). The negative sign tells us the point moves toward the pole on average; it does not mean the radius itself equals \\(-2\\).",
  },
  {
    slug: "unit-3-35", subject: "unit-3", section: "3.15", domain: "Polar Functions", difficulty: "medium",
    prompt: "The table shows values of a polar function \\(r = f(\\theta)\\): when \\(\\theta = 0\\), \\(\\frac{\\pi}{6}\\), \\(\\frac{\\pi}{3}\\), \\(\\frac{\\pi}{2}\\), the values of \\(r\\) are 5, 3, 2, 4 respectively. What is the average rate of change of \\(r\\) with respect to \\(\\theta\\) on the interval \\([\\frac{\\pi}{6}, \\frac{\\pi}{2}]\\)?",
    choices: ["\\(\\frac{3}{\\pi}\\)", "\\(\\frac{\\pi}{3}\\)", "1", "3"], correctIndex: 0, correctText: "\\(\\frac{3}{\\pi}\\)",
    explanation: "Average rate of change = \\(\\frac{f(\\pi/2) - f(\\pi/6)}{\\pi/2 - \\pi/6} = \\frac{4 - 3}{\\pi/3} = \\frac{1}{\\pi/3} = \\frac{3}{\\pi}\\).",
  },
  {
    slug: "unit-3-36", subject: "unit-3", section: "3.15", domain: "Polar Functions", difficulty: "hard",
    prompt: "The polar graph of \\(r = 4 + 2\\cos\\theta\\) is traced as \\(\\theta\\) increases from 0 to \\(2\\pi\\). On which interval of \\(\\theta\\)-values is \\(r\\) decreasing?",
    choices: ["\\((0, \\pi)\\)", "\\((\\pi, 2\\pi)\\)", "\\((0, 2\\pi)\\)", "\\(r\\) is never decreasing"], correctIndex: 0, correctText: "\\((0, \\pi)\\)",
    explanation: "As \\(\\theta\\) increases from 0 to \\(\\pi\\), \\(\\cos\\theta\\) decreases from 1 to \\(-1\\), so \\(r = 4 + 2\\cos\\theta\\) decreases from 6 to 2. As \\(\\theta\\) increases from \\(\\pi\\) to \\(2\\pi\\), \\(\\cos\\theta\\) increases back from \\(-1\\) to 1, so \\(r\\) increases there.",
  },
// ---------- 4.3 | Parametric Functions and Rates of Change ----------
  {
    slug: "unit-4-17", subject: "unit-4", section: "4.3", domain: "Parametric Functions", difficulty: "easy",
    prompt: "A particle moves along a curve with \\(y(t) = t^{2}\\). What is the average rate of change of \\(y\\) with respect to \\(t\\) on the interval \\([1, 3]\\)?",
    choices: ["4", "8", "3", "5"], correctIndex: 0, correctText: "4",
    explanation: "Average rate of change = \\(\\frac{y(3) - y(1)}{3 - 1} = \\frac{9 - 1}{2} = 4\\).",
  },
  {
    slug: "unit-4-18", subject: "unit-4", section: "4.3", domain: "Parametric Functions", difficulty: "easy",
    prompt: "For the parametric curve \\(x(t) = t^{2} + 1\\), \\(y(t) = 5t\\), what is the average rate of change of \\(x\\) with respect to \\(t\\) on the interval \\([1, 4]\\)?",
    choices: ["15", "3", "5", "17"], correctIndex: 2, correctText: "5",
    explanation: "\\(x(1) = 2\\) and \\(x(4) = 17\\), so the average rate of change is \\(\\frac{17 - 2}{4 - 1} = \\frac{15}{3} = 5\\).",
  },
  {
    slug: "unit-4-19", subject: "unit-4", section: "4.3", domain: "Parametric Functions", difficulty: "medium",
    prompt: "A particle travels along the parametric curve \\(x(t) = 3t\\), \\(y(t) = t^{2}\\). As \\(t\\) increases from 1 to 3, what is the average rate of change of \\(y\\) with respect to \\(x\\)?",
    choices: ["4", "\\(\\frac{4}{3}\\)", "3", "\\(\\frac{3}{4}\\)"], correctIndex: 1, correctText: "\\(\\frac{4}{3}\\)",
    explanation: "The particle moves from \\((3, 1)\\) to \\((9, 9)\\). The average rate of change of \\(y\\) with respect to \\(x\\) is \\(\\frac{9 - 1}{9 - 3} = \\frac{8}{6} = \\frac{4}{3}\\).",
  },
  {
    slug: "unit-4-20", subject: "unit-4", section: "4.3", domain: "Parametric Functions", difficulty: "medium",
    prompt: "For the parametric curve \\(x(t) = t^{2}\\), \\(y(t) = t + 1\\), find the average rate of change of \\(y\\) with respect to \\(x\\) as \\(t\\) goes from 1 to 4.",
    choices: ["1", "5", "3", "\\(\\frac{1}{5}\\)"], correctIndex: 3, correctText: "\\(\\frac{1}{5}\\)",
    explanation: "The curve goes from \\((1, 2)\\) to \\((16, 5)\\), so the average rate of change of \\(y\\) with respect to \\(x\\) is \\(\\frac{5 - 2}{16 - 1} = \\frac{3}{15} = \\frac{1}{5}\\).",
  },
  {
    slug: "unit-4-21", subject: "unit-4", section: "4.3", domain: "Parametric Functions", difficulty: "hard",
    prompt: "For a parametric curve, the average rate of change of \\(y\\) with respect to \\(x\\) as \\(t\\) goes from 0 to 2 is 3, and \\(x(t) = 4t\\). What is \\(y(2) - y(0)\\)?",
    choices: ["24", "3", "8", "6"], correctIndex: 0, correctText: "24",
    explanation: "\\(\\frac{y(2) - y(0)}{x(2) - x(0)} = 3\\) and \\(x(2) - x(0) = 8 - 0 = 8\\), so \\(y(2) - y(0) = 3 \\cdot 8 = 24\\).",
  },

  // ---------- 4.5 | Implicitly Defined Functions ----------
  {
    slug: "unit-4-22", subject: "unit-4", section: "4.5", domain: "Implicitly Defined Functions", difficulty: "easy",
    prompt: "Which point lies on the curve implicitly defined by \\(x^{2} + y^{2} = 25\\)?",
    choices: ["\\((3, 5)\\)", "\\((3, 4)\\)", "\\((4, 4)\\)", "\\((5, 3)\\)"], correctIndex: 1, correctText: "\\((3, 4)\\)",
    explanation: "Check each point: \\(3^{2} + 4^{2} = 9 + 16 = 25\\), while \\(3^{2} + 5^{2} = 34\\), \\(4^{2} + 4^{2} = 32\\), and \\(5^{2} + 3^{2} = 34\\). Only \\((3, 4)\\) satisfies the equation.",
  },
  {
    slug: "unit-4-23", subject: "unit-4", section: "4.5", domain: "Implicitly Defined Functions", difficulty: "easy",
    prompt: "Which of the following relations defines \\(y\\) as a function of \\(x\\)?",
    choices: ["\\(x = y^{2}\\)", "\\(x^{2} + y^{2} = 9\\)", "\\(y = x^{2} + 1\\)", "\\(|x| + |y| = 1\\)"], correctIndex: 2, correctText: "\\(y = x^{2} + 1\\)",
    explanation: "Only \\(y = x^{2} + 1\\) assigns exactly one \\(y\\)-value to each \\(x\\)-value. Each of the others fails the vertical line test (for example, \\(x = 0\\) gives \\(y = 3\\) and \\(y = -3\\) for \\(x^{2} + y^{2} = 9\\)).",
  },
  {
    slug: "unit-4-24", subject: "unit-4", section: "4.5", domain: "Implicitly Defined Functions", difficulty: "medium",
    prompt: "The relation \\(xy + y = 6\\) implicitly defines \\(y\\) as a function of \\(x\\) (for \\(x \\ne -1\\)). What is the value of \\(y\\) when \\(x = -2\\)?",
    choices: ["\\(-6\\)", "6", "\\(-3\\)", "\\(-2\\)"], correctIndex: 0, correctText: "\\(-6\\)",
    explanation: "Factor out \\(y\\): \\(y(x + 1) = 6\\), so \\(y = \\frac{6}{x + 1}\\). When \\(x = -2\\), \\(y = \\frac{6}{-1} = -6\\).",
  },
  {
    slug: "unit-4-25", subject: "unit-4", section: "4.5", domain: "Implicitly Defined Functions", difficulty: "medium",
    prompt: "The relation \\(y^{3} + y = x\\) implicitly defines \\(y\\) as a function of \\(x\\). What is \\(y\\) when \\(x = 10\\)?",
    choices: ["1", "3", "\\(-2\\)", "2"], correctIndex: 3, correctText: "2",
    explanation: "Trying integer values: \\(2^{3} + 2 = 8 + 2 = 10\\). Since \\(y^{3} + y\\) is strictly increasing in \\(y\\), this is the only solution, so \\(y = 2\\).",
  },
  {
    slug: "unit-4-26", subject: "unit-4", section: "4.5", domain: "Implicitly Defined Functions", difficulty: "hard",
    prompt: "For the relation \\(x^{2} + xy + y^{2} = 7\\), what are the possible values of \\(y\\) when \\(x = 1\\)?",
    choices: ["2 only", "2 and \\(-3\\)", "\\(-2\\) and 3", "\\(-3\\) only"], correctIndex: 1, correctText: "2 and \\(-3\\)",
    explanation: "Substituting \\(x = 1\\): \\(1 + y + y^{2} = 7\\), so \\(y^{2} + y - 6 = 0\\). Factoring gives \\((y + 3)(y - 2) = 0\\), so \\(y = 2\\) or \\(y = -3\\). (This also shows the relation does not define \\(y\\) as a function of \\(x\\).)",
  },

  // ---------- 4.6 | Conic Sections ----------
  {
    slug: "unit-4-27", subject: "unit-4", section: "4.6", domain: "Conic Sections", difficulty: "easy",
    prompt: "A parabola is the set of all points equidistant from a fixed point (the focus) and a fixed line (the directrix). Which equation represents the parabola with focus \\((0, 2)\\) and directrix \\(y = -2\\)?",
    choices: ["\\(x^{2} = 8y\\)", "\\(y^{2} = 8x\\)", "\\(x^{2} = -8y\\)", "\\(y = 8x^{2}\\)"], correctIndex: 0, correctText: "\\(x^{2} = 8y\\)",
    explanation: "For a point \\((x, y)\\): \\(\\sqrt{x^{2} + (y - 2)^{2}} = |y + 2|\\). Squaring and simplifying gives \\(x^{2} + y^{2} - 4y + 4 = y^{2} + 4y + 4\\), so \\(x^{2} = 8y\\).",
  },
  {
    slug: "unit-4-28", subject: "unit-4", section: "4.6", domain: "Conic Sections", difficulty: "easy",
    prompt: "An ellipse is the set of all points for which the sum of the distances to two fixed points (the foci) is constant. An ellipse has foci \\((-3, 0)\\) and \\((3, 0)\\), and the constant sum of distances is 10. What is the length of the major axis?",
    choices: ["5", "20", "10", "6"], correctIndex: 2, correctText: "10",
    explanation: "The vertices lie on the line through the foci, and at a vertex the sum of the distances equals the distance between the vertices — the major axis length. So the major axis has length 10.",
  },
  {
    slug: "unit-4-29", subject: "unit-4", section: "4.6", domain: "Conic Sections", difficulty: "medium",
    prompt: "What are the foci of the ellipse \\(\\frac{x^{2}}{25} + \\frac{y^{2}}{16} = 1\\)?",
    choices: ["\\((0, \\pm 3)\\)", "\\((\\pm 3, 0)\\)", "\\((\\pm 5, 0)\\)", "\\((\\pm 4, 0)\\)"], correctIndex: 1, correctText: "\\((\\pm 3, 0)\\)",
    explanation: "\\(a^{2} = 25\\) and \\(b^{2} = 16\\), so \\(c^{2} = a^{2} - b^{2} = 9\\) and \\(c = 3\\). Since the larger denominator is under \\(x^{2}\\), the foci are \\((\\pm 3, 0)\\).",
  },
  {
    slug: "unit-4-30", subject: "unit-4", section: "4.6", domain: "Conic Sections", difficulty: "medium",
    prompt: "A hyperbola is the set of all points for which the absolute difference of the distances to two fixed points (the foci) is constant. A hyperbola has foci \\((0, -5)\\) and \\((0, 5)\\), and the constant absolute difference is 6. What is the length of the transverse axis?",
    choices: ["3", "12", "10", "6"], correctIndex: 3, correctText: "6",
    explanation: "The vertices lie on the line through the foci, and at a vertex the absolute difference of the distances equals the distance between the vertices — the transverse axis length. So the transverse axis has length 6.",
  },
  {
    slug: "unit-4-31", subject: "unit-4", section: "4.6", domain: "Conic Sections", difficulty: "hard",
    prompt: "What is the equation of the parabola with focus \\((2, 3)\\) and directrix \\(x = -2\\)?",
    choices: ["\\((y - 3)^{2} = 8x\\)", "\\((y - 3)^{2} = -8x\\)", "\\((x - 2)^{2} = 8(y - 3)\\)", "\\((y + 3)^{2} = 8x\\)"], correctIndex: 0, correctText: "\\((y - 3)^{2} = 8x\\)",
    explanation: "For \\((x, y)\\): \\(\\sqrt{(x - 2)^{2} + (y - 3)^{2}} = |x + 2|\\). Squaring gives \\((x - 2)^{2} + (y - 3)^{2} = (x + 2)^{2}\\), which simplifies to \\((y - 3)^{2} = 8x\\).",
  },

  // ---------- 4.7 | Parametrization of Implicitly Defined Functions ----------
  {
    slug: "unit-4-32", subject: "unit-4", section: "4.7", domain: "Parametric Functions", difficulty: "easy",
    prompt: "Which parametric equations trace the line \\(y = 2x + 1\\)?",
    choices: ["\\(x = 2t + 1\\), \\(y = t\\)", "\\(x = t + 1\\), \\(y = 2t\\)", "\\(x = t\\), \\(y = 2t + 1\\)", "\\(x = t\\), \\(y = 2t - 1\\)"], correctIndex: 2, correctText: "\\(x = t\\), \\(y = 2t + 1\\)",
    explanation: "With \\(x = t\\), substituting into \\(y = 2x + 1\\) gives \\(y = 2t + 1\\), which traces every point of the line.",
  },
  {
    slug: "unit-4-33", subject: "unit-4", section: "4.7", domain: "Parametric Functions", difficulty: "easy",
    prompt: "Which parametric equations trace the circle \\(x^{2} + y^{2} = 9\\)?",
    choices: ["\\(x = 9\\cos t\\), \\(y = 9\\sin t\\)", "\\(x = 3\\cos t\\), \\(y = 3\\sin t\\)", "\\(x = \\cos t\\), \\(y = \\sin t\\)", "\\(x = 3\\cos t\\), \\(y = 3\\cos t\\)"], correctIndex: 1, correctText: "\\(x = 3\\cos t\\), \\(y = 3\\sin t\\)",
    explanation: "Since \\((3\\cos t)^{2} + (3\\sin t)^{2} = 9(\\cos^{2} t + \\sin^{2} t) = 9\\), these equations trace the circle of radius 3.",
  },
  {
    slug: "unit-4-34", subject: "unit-4", section: "4.7", domain: "Parametric Functions", difficulty: "medium",
    prompt: "Which parametric equations trace the ellipse \\(\\frac{x^{2}}{16} + \\frac{y^{2}}{25} = 1\\)?",
    choices: ["\\(x = 4\\cos t\\), \\(y = 5\\sin t\\)", "\\(x = 16\\cos t\\), \\(y = 25\\sin t\\)", "\\(x = 5\\cos t\\), \\(y = 4\\sin t\\)", "\\(x = 4\\sin t\\), \\(y = 5\\sin t\\)"], correctIndex: 0, correctText: "\\(x = 4\\cos t\\), \\(y = 5\\sin t\\)",
    explanation: "Since \\(\\frac{(4\\cos t)^{2}}{16} + \\frac{(5\\sin t)^{2}}{25} = \\cos^{2} t + \\sin^{2} t = 1\\), these equations trace the ellipse.",
  },
  {
    slug: "unit-4-35", subject: "unit-4", section: "4.7", domain: "Parametric Functions", difficulty: "medium",
    prompt: "Which parametric equations trace the parabola \\(y = (x - 1)^{2}\\)?",
    choices: ["\\(x = t\\), \\(y = t^{2} - 1\\)", "\\(x = t - 1\\), \\(y = t^{2}\\)", "\\(x = t + 1\\), \\(y = (t + 1)^{2}\\)", "\\(x = t + 1\\), \\(y = t^{2}\\)"], correctIndex: 3, correctText: "\\(x = t + 1\\), \\(y = t^{2}\\)",
    explanation: "With \\(x = t + 1\\), we have \\(x - 1 = t\\), so \\(y = t^{2} = (x - 1)^{2}\\) traces the parabola.",
  },
  {
    slug: "unit-4-36", subject: "unit-4", section: "4.7", domain: "Parametric Functions", difficulty: "hard",
    prompt: "Which parametric equations trace the circle \\((x - 2)^{2} + (y + 1)^{2} = 16\\)?",
    choices: ["\\(x = 4 + 2\\cos t\\), \\(y = 1 + 4\\sin t\\)", "\\(x = 2 + 16\\cos t\\), \\(y = -1 + 16\\sin t\\)", "\\(x = 2 + 4\\cos t\\), \\(y = -1 + 4\\sin t\\)", "\\(x = 2 + 4\\cos t\\), \\(y = 1 + 4\\sin t\\)"], correctIndex: 2, correctText: "\\(x = 2 + 4\\cos t\\), \\(y = -1 + 4\\sin t\\)",
    explanation: "The circle has center \\((2, -1)\\) and radius 4. Substituting: \\((4\\cos t)^{2} + (4\\sin t)^{2} = 16(\\cos^{2} t + \\sin^{2} t) = 16\\).",
  },

  // ---------- 4.9 | Vector-Valued Functions ----------
  {
    slug: "unit-4-37", subject: "unit-4", section: "4.9", domain: "Vectors", difficulty: "easy",
    prompt: "If \\(r(t) = \\langle t^{2}, 3t \\rangle\\), what is \\(r(2)\\)?",
    choices: ["\\(\\langle 2, 6 \\rangle\\)", "\\(\\langle 4, 6 \\rangle\\)", "\\(\\langle 4, 3 \\rangle\\)", "\\(\\langle 8, 6 \\rangle\\)"], correctIndex: 1, correctText: "\\(\\langle 4, 6 \\rangle\\)",
    explanation: "\\(r(2) = \\langle 2^{2}, 3(2) \\rangle = \\langle 4, 6 \\rangle\\).",
  },
  {
    slug: "unit-4-38", subject: "unit-4", section: "4.9", domain: "Vectors", difficulty: "easy",
    prompt: "If \\(r(t) = \\langle 2t, t + 1 \\rangle\\) and \\(s(t) = \\langle t, 2t \\rangle\\), what is \\(r(1) + s(1)\\)?",
    choices: ["\\(\\langle 3, 4 \\rangle\\)", "\\(\\langle 3, 2 \\rangle\\)", "\\(\\langle 2, 4 \\rangle\\)", "\\(\\langle 4, 3 \\rangle\\)"], correctIndex: 0, correctText: "\\(\\langle 3, 4 \\rangle\\)",
    explanation: "\\(r(1) = \\langle 2, 2 \\rangle\\) and \\(s(1) = \\langle 1, 2 \\rangle\\), so \\(r(1) + s(1) = \\langle 2 + 1, 2 + 2 \\rangle = \\langle 3, 4 \\rangle\\).",
  },
  {
    slug: "unit-4-39", subject: "unit-4", section: "4.9", domain: "Vectors", difficulty: "medium",
    prompt: "For \\(r(t) = \\langle t^{2} - 1, 2t \\rangle\\), find the value of \\(t\\) for which \\(r(t) = \\langle 3, 4 \\rangle\\).",
    choices: ["\\(-2\\)", "\\(\\pm 2\\)", "4", "2"], correctIndex: 3, correctText: "2",
    explanation: "From the second component, \\(2t = 4\\) gives \\(t = 2\\). Check: \\(r(2) = \\langle 2^{2} - 1, 2(2) \\rangle = \\langle 3, 4 \\rangle\\). (Note \\(t = -2\\) satisfies the first component but not the second.)",
  },
  {
    slug: "unit-4-40", subject: "unit-4", section: "4.9", domain: "Vectors", difficulty: "medium",
    prompt: "If \\(r(t) = \\langle 3\\cos t, 3\\sin t \\rangle\\), what is the magnitude \\(|r(t)|\\)?",
    choices: ["9", "1", "3", "6"], correctIndex: 2, correctText: "3",
    explanation: "\\(|r(t)| = \\sqrt{(3\\cos t)^{2} + (3\\sin t)^{2}} = \\sqrt{9(\\cos^{2} t + \\sin^{2} t)} = \\sqrt{9} = 3\\).",
  },
  {
    slug: "unit-4-41", subject: "unit-4", section: "4.9", domain: "Vectors", difficulty: "hard",
    prompt: "A vector-valued function \\(r(t) = \\langle t^{3}, at \\rangle\\) satisfies \\(|r(2)| = 10\\). What is the positive value of \\(a\\)?",
    choices: ["9", "3", "6", "1"], correctIndex: 1, correctText: "3",
    explanation: "\\(r(2) = \\langle 8, 2a \\rangle\\), so \\(\\sqrt{8^{2} + (2a)^{2}} = 10\\). Squaring: \\(64 + 4a^{2} = 100\\), so \\(4a^{2} = 36\\) and \\(a^{2} = 9\\); the positive value is \\(a = 3\\).",
  },

  // ---------- 4.13 | Matrices as Functions ----------
  {
    slug: "unit-4-42", subject: "unit-4", section: "4.13", domain: "Matrices", difficulty: "easy",
    prompt: "The matrix \\(A = \\begin{bmatrix} 2 & 0 \\\\ 0 & 3 \\end{bmatrix}\\) defines a function on vectors by \\(f(v) = Av\\). What is the image of \\(\\langle 1, 2 \\rangle\\) under \\(f\\)?",
    choices: ["\\(\\langle 2, 6 \\rangle\\)", "\\(\\langle 2, 2 \\rangle\\)", "\\(\\langle 1, 6 \\rangle\\)", "\\(\\langle 3, 5 \\rangle\\)"], correctIndex: 0, correctText: "\\(\\langle 2, 6 \\rangle\\)",
    explanation: "\\(f(\\langle 1, 2 \\rangle) = \\begin{bmatrix} 2 & 0 \\\\ 0 & 3 \\end{bmatrix} \\begin{bmatrix} 1 \\\\ 2 \\end{bmatrix} = \\begin{bmatrix} 2 \\\\ 6 \\end{bmatrix} = \\langle 2, 6 \\rangle\\).",
  },
  {
    slug: "unit-4-43", subject: "unit-4", section: "4.13", domain: "Matrices", difficulty: "easy",
    prompt: "A \\(3 \\times 2\\) matrix \\(M\\) defines a function by \\(f(v) = Mv\\). Which statement describes the domain and codomain of \\(f\\)?",
    choices: [
      "The domain is the set of 3-component vectors and the codomain is the set of 2-component vectors",
      "Both the domain and codomain are the set of 2-component vectors",
      "The domain is the set of 2-component vectors and the codomain is the set of 3-component vectors",
      "Both the domain and codomain are the set of 3-component vectors",
    ],
    correctIndex: 2, correctText: "The domain is the set of 2-component vectors and the codomain is the set of 3-component vectors",
    explanation: "A \\(3 \\times 2\\) matrix multiplies \\(2 \\times 1\\) column vectors to produce \\(3 \\times 1\\) column vectors, so the domain is 2-component vectors and the codomain is 3-component vectors.",
  },
  {
    slug: "unit-4-44", subject: "unit-4", section: "4.13", domain: "Matrices", difficulty: "medium",
    prompt: "Let \\(A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}\\) define the function \\(f(v) = Av\\). What is the image of \\(\\langle 2, -1 \\rangle\\)?",
    choices: ["\\(\\langle 4, 10 \\rangle\\)", "\\(\\langle 0, 2 \\rangle\\)", "\\(\\langle 0, -2 \\rangle\\)", "\\(\\langle 2, 0 \\rangle\\)"], correctIndex: 1, correctText: "\\(\\langle 0, 2 \\rangle\\)",
    explanation: "\\(\\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix} \\begin{bmatrix} 2 \\\\ -1 \\end{bmatrix} = \\begin{bmatrix} (1)(2) + (2)(-1) \\\\ (3)(2) + (4)(-1) \\end{bmatrix} = \\begin{bmatrix} 0 \\\\ 2 \\end{bmatrix}\\), so the image is \\(\\langle 0, 2 \\rangle\\).",
  },
  {
    slug: "unit-4-45", subject: "unit-4", section: "4.13", domain: "Matrices", difficulty: "medium",
    prompt: "Matrices \\(A\\) and \\(B\\) define functions \\(f(v) = Av\\) and \\(g(v) = Bv\\). If \\(f\\) maps \\(\\langle 1, 0 \\rangle\\) to \\(\\langle 2, 1 \\rangle\\) and \\(g\\) maps \\(\\langle 2, 1 \\rangle\\) to \\(\\langle 0, 3 \\rangle\\), what is \\((g \\circ f)(\\langle 1, 0 \\rangle)\\)?",
    choices: ["\\(\\langle 2, 1 \\rangle\\)", "\\(\\langle 3, 4 \\rangle\\)", "\\(\\langle 1, 0 \\rangle\\)", "\\(\\langle 0, 3 \\rangle\\)"], correctIndex: 3, correctText: "\\(\\langle 0, 3 \\rangle\\)",
    explanation: "\\((g \\circ f)(\\langle 1, 0 \\rangle) = g(f(\\langle 1, 0 \\rangle)) = g(\\langle 2, 1 \\rangle) = \\langle 0, 3 \\rangle\\).",
  },
  {
    slug: "unit-4-46", subject: "unit-4", section: "4.13", domain: "Matrices", difficulty: "hard",
    prompt: "The matrix \\(\\begin{bmatrix} 0 & 1 \\\\ 1 & 0 \\end{bmatrix}\\) defines a function \\(f(v) = Av\\) on vectors in the plane. Which vector is fixed by \\(f\\), meaning \\(f(v) = v\\)?",
    choices: ["\\(\\langle 2, 2 \\rangle\\)", "\\(\\langle 2, -2 \\rangle\\)", "\\(\\langle 1, 0 \\rangle\\)", "\\(\\langle 0, 1 \\rangle\\)"], correctIndex: 0, correctText: "\\(\\langle 2, 2 \\rangle\\)",
    explanation: "\\(\\begin{bmatrix} 0 & 1 \\\\ 1 & 0 \\end{bmatrix} \\begin{bmatrix} x \\\\ y \\end{bmatrix} = \\begin{bmatrix} y \\\\ x \\end{bmatrix}\\). Setting this equal to \\(\\begin{bmatrix} x \\\\ y \\end{bmatrix}\\) gives \\(y = x\\). Of the choices, only \\(\\langle 2, 2 \\rangle\\) satisfies this, and indeed \\(f(\\langle 2, 2 \\rangle) = \\langle 2, 2 \\rangle\\).",
  },

  // ---------- 4.14 | Matrices Modeling Contexts ----------
  {
    slug: "unit-4-47", subject: "unit-4", section: "4.14", domain: "Matrices", difficulty: "easy",
    prompt: "The price matrix \\(\\begin{bmatrix} 2 \\\\ 1 \\end{bmatrix}\\) gives the price (in dollars) of an apple and of a banana. A customer buys 3 apples and 5 bananas. What is the total cost?",
    choices: ["$8", "$11", "$16", "$7"], correctIndex: 1, correctText: "$11",
    explanation: "Total cost = \\(\\begin{bmatrix} 3 & 5 \\end{bmatrix} \\begin{bmatrix} 2 \\\\ 1 \\end{bmatrix} = 3(2) + 5(1) = 11\\) dollars.",
  },
  {
    slug: "unit-4-48", subject: "unit-4", section: "4.14", domain: "Matrices", difficulty: "easy",
    prompt: "In a town, each year 10% of renters become homeowners and 5% of homeowners become renters. Which transition matrix \\(T\\) correctly updates the column vector \\(\\begin{bmatrix} \\text{renters} \\\\ \\text{homeowners} \\end{bmatrix}\\) from one year to the next?",
    choices: ["\\(\\begin{bmatrix} 0.90 & 0.05 \\\\ 0.10 & 0.95 \\end{bmatrix}\\)", "\\(\\begin{bmatrix} 0.10 & 0.95 \\\\ 0.90 & 0.05 \\end{bmatrix}\\)", "\\(\\begin{bmatrix} 0.10 & 0.05 \\\\ 0.90 & 0.95 \\end{bmatrix}\\)", "\\(\\begin{bmatrix} 0.90 & 0.95 \\\\ 0.10 & 0.05 \\end{bmatrix}\\)"], correctIndex: 0, correctText: "\\(\\begin{bmatrix} 0.90 & 0.05 \\\\ 0.10 & 0.95 \\end{bmatrix}\\)",
    explanation: "Next year's renters = \\(0.90\\)(renters) + \\(0.05\\)(homeowners), and next year's homeowners = \\(0.10\\)(renters) + \\(0.95\\)(homeowners), giving \\(T = \\begin{bmatrix} 0.90 & 0.05 \\\\ 0.10 & 0.95 \\end{bmatrix}\\).",
  },
  {
    slug: "unit-4-49", subject: "unit-4", section: "4.14", domain: "Matrices", difficulty: "medium",
    prompt: "A school models attendance with the transition matrix \\(\\begin{bmatrix} 0.8 & 0.3 \\\\ 0.2 & 0.7 \\end{bmatrix}\\) applied to the column vector \\(\\begin{bmatrix} \\text{present} \\\\ \\text{absent} \\end{bmatrix}\\). If today 900 students are present and 100 are absent, how many are expected to be present tomorrow?",
    choices: ["720", "250", "750", "900"], correctIndex: 2, correctText: "750",
    explanation: "Tomorrow's present count is the first entry of \\(\\begin{bmatrix} 0.8 & 0.3 \\\\ 0.2 & 0.7 \\end{bmatrix} \\begin{bmatrix} 900 \\\\ 100 \\end{bmatrix}\\), which is \\(0.8(900) + 0.3(100) = 720 + 30 = 750\\).",
  },
  {
    slug: "unit-4-50", subject: "unit-4", section: "4.14", domain: "Matrices", difficulty: "medium",
    prompt: "A workshop builds tables and chairs. Each table requires 5 hours of labor and each chair requires 3 hours. In one week the workshop builds 10 tables and 20 chairs. How many total hours of labor are required?",
    choices: ["130", "90", "50", "110"], correctIndex: 3, correctText: "110",
    explanation: "Total hours = \\(\\begin{bmatrix} 10 & 20 \\end{bmatrix} \\begin{bmatrix} 5 \\\\ 3 \\end{bmatrix} = 10(5) + 20(3) = 50 + 60 = 110\\).",
  },
  {
    slug: "unit-4-51", subject: "unit-4", section: "4.14", domain: "Matrices", difficulty: "hard",
    prompt: "An animal shelter tracks \\(\\begin{bmatrix} \\text{puppies} \\\\ \\text{adults} \\end{bmatrix}\\). Each month the population updates by multiplying by \\(\\begin{bmatrix} 0.7 & 0.1 \\\\ 0.2 & 0.8 \\end{bmatrix}\\). Starting with 100 puppies and 200 adults, how many adult dogs are expected after one month?",
    choices: ["170", "180", "160", "200"], correctIndex: 1, correctText: "180",
    explanation: "Adults next month is the second entry of \\(\\begin{bmatrix} 0.7 & 0.1 \\\\ 0.2 & 0.8 \\end{bmatrix} \\begin{bmatrix} 100 \\\\ 200 \\end{bmatrix}\\), which is \\(0.2(100) + 0.8(200) = 20 + 160 = 180\\).",
  }
];
