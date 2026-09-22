/**
 * Worksheet-style questions for Unit 1, Section 1.1 (Change in Tandem).
 * REWORDED from scratch in original language — same skills (sign and
 * monotonicity on an interval, behavior of the rate of change, concavity),
 * with original graphs rendered for this site in public/wkst/1-1/.
 * Free-response parts were converted to multiple choice so they work as
 * interactive practice.
 */
export const WKST11 = [
  // ---------- Graph 1: h(t), F(-4,5) G(-3,3) J(-2,1) K(-1,3) P(0,5) ----------
  {
    slug: "wkst-1-1-01", title: "Sign and Monotonicity on an Interval", subject: "unit-1", section: "1.1", domain: "Functions", difficulty: "easy",
    image: "/wkst/1-1/g1.png",
    prompt: "The graph of \\(h(t)\\) and its dashed midline are shown. Five points, \\(F\\), \\(G\\), \\(J\\), \\(K\\), and \\(P\\), are labeled on the graph. Let \\(t_1\\) be the \\(t\\)-coordinate of \\(G\\) and \\(t_2\\) be the \\(t\\)-coordinate of \\(J\\). On the interval \\((t_1, t_2)\\), which of the following is true about \\(h\\)?",
    choices: ["\\(h\\) is positive and increasing.", "\\(h\\) is positive and decreasing.", "\\(h\\) is negative and increasing.", "\\(h\\) is negative and decreasing."],
    correctIndex: 1, correctText: "\\(h\\) is positive and decreasing.",
    explanation: "Here \\((t_1,t_2)=(-3,-2)\\). The graph runs from \\(G(-3,3)\\) down to \\(J(-2,1)\\), so the outputs stay positive while the graph falls from left to right. Thus \\(h\\) is positive and decreasing.",
  },
  {
    slug: "wkst-1-1-02", title: "Describing a Changing Rate", subject: "unit-1", section: "1.1", domain: "Functions", difficulty: "medium",
    image: "/wkst/1-1/g1.png",
    prompt: "The graph of \\(h(t)\\) and its dashed midline are shown. Five points, \\(F\\), \\(G\\), \\(J\\), \\(K\\), and \\(P\\), are labeled on the graph. Let \\(t_1\\) be the \\(t\\)-coordinate of \\(G\\) and \\(t_2\\) be the \\(t\\)-coordinate of \\(J\\). Which of the following best describes how the rate of change of \\(h\\) is changing on the interval \\((t_1, t_2)\\)?",
    choices: ["The rate of change is negative and decreasing.", "The rate of change is negative and increasing.", "The rate of change is positive and decreasing.", "The rate of change is positive and increasing."],
    correctIndex: 1, correctText: "The rate of change is negative and increasing.",
    explanation: "From \\(G\\) to \\(J\\) the graph falls, so the rate of change is negative. The descent gets less steep as the graph levels off into the minimum at \\(J\\), so the negative rate of change increases toward zero.",
  },
  // ---------- Graph 2: h(t), F(-8,-1) G(-6,-3) J(-4,-5) K(-2,-3) P(0,-1) ----------
  {
    slug: "wkst-1-1-03", title: "Negative and Increasing", subject: "unit-1", section: "1.1", domain: "Functions", difficulty: "easy",
    image: "/wkst/1-1/g2.png",
    prompt: "The graph of \\(h(t)\\) and its dashed midline are shown. Five points, \\(F\\), \\(G\\), \\(J\\), \\(K\\), and \\(P\\), are labeled on the graph. Let \\(t_1\\) be the \\(t\\)-coordinate of \\(K\\) and \\(t_2\\) be the \\(t\\)-coordinate of \\(P\\). On the interval \\((t_1, t_2)\\), which of the following is true about \\(h\\)?",
    choices: ["\\(h\\) is positive and increasing.", "\\(h\\) is positive and decreasing.", "\\(h\\) is negative and increasing.", "\\(h\\) is negative and decreasing."],
    correctIndex: 2, correctText: "\\(h\\) is negative and increasing.",
    explanation: "Here \\((t_1,t_2)=(-2,0)\\). The graph climbs from \\(K(-2,-3)\\) up to \\(P(0,-1)\\). The outputs stay negative while the graph rises from left to right, so \\(h\\) is negative and increasing.",
  },
  {
    slug: "wkst-1-1-04", title: "Rate of Change Easing Off", subject: "unit-1", section: "1.1", domain: "Functions", difficulty: "medium",
    image: "/wkst/1-1/g2.png",
    prompt: "The graph of \\(h(t)\\) and its dashed midline are shown. Five points, \\(F\\), \\(G\\), \\(J\\), \\(K\\), and \\(P\\), are labeled on the graph. Let \\(t_1\\) be the \\(t\\)-coordinate of \\(K\\) and \\(t_2\\) be the \\(t\\)-coordinate of \\(P\\). Which of the following best describes how the rate of change of \\(h\\) is changing on the interval \\((t_1, t_2)\\)?",
    choices: ["The rate of change is negative and decreasing.", "The rate of change is negative and increasing.", "The rate of change is positive and decreasing.", "The rate of change is positive and increasing."],
    correctIndex: 2, correctText: "The rate of change is positive and decreasing.",
    explanation: "From \\(K\\) to \\(P\\) the graph rises, so the rate of change is positive. The climb gets less steep as the graph levels off into the maximum at \\(P\\), so the positive rate of change is decreasing.",
  },
  // ---------- Graph 3: h(t), F(2,8) G(3,4) J(4,0) K(5,4) P(6,8) ----------
  {
    slug: "wkst-1-1-05", title: "Positive but Decreasing", subject: "unit-1", section: "1.1", domain: "Functions", difficulty: "easy",
    image: "/wkst/1-1/g3.png",
    prompt: "The graph of \\(h(t)\\) and its dashed midline are shown. Five points, \\(F\\), \\(G\\), \\(J\\), \\(K\\), and \\(P\\), are labeled on the graph. Let \\(t_1\\) be the \\(t\\)-coordinate of \\(F\\) and \\(t_2\\) be the \\(t\\)-coordinate of \\(G\\). On the interval \\((t_1, t_2)\\), which of the following is true about \\(h\\)?",
    choices: ["\\(h\\) is positive and increasing.", "\\(h\\) is positive and decreasing.", "\\(h\\) is negative and increasing.", "\\(h\\) is negative and decreasing."],
    correctIndex: 1, correctText: "\\(h\\) is positive and decreasing.",
    explanation: "Here \\((t_1,t_2)=(2,3)\\). The graph falls from \\(F(2,8)\\) to \\(G(3,4)\\). The outputs stay positive while the graph falls from left to right, so \\(h\\) is positive and decreasing.",
  },
  {
    slug: "wkst-1-1-06", title: "Rate Falling Faster", subject: "unit-1", section: "1.1", domain: "Functions", difficulty: "medium",
    image: "/wkst/1-1/g3.png",
    prompt: "The graph of \\(h(t)\\) and its dashed midline are shown. Five points, \\(F\\), \\(G\\), \\(J\\), \\(K\\), and \\(P\\), are labeled on the graph. Let \\(t_1\\) be the \\(t\\)-coordinate of \\(F\\) and \\(t_2\\) be the \\(t\\)-coordinate of \\(G\\). Which of the following best describes how the rate of change of \\(h\\) is changing on the interval \\((t_1, t_2)\\)?",
    choices: ["The rate of change is negative and decreasing.", "The rate of change is negative and increasing.", "The rate of change is positive and decreasing.", "The rate of change is positive and increasing."],
    correctIndex: 0, correctText: "The rate of change is negative and decreasing.",
    explanation: "From \\(F\\) to \\(G\\) the graph falls, so the rate of change is negative. The descent gets steeper as the graph approaches the midline at \\(G\\), so the negative rate of change is decreasing (becoming more negative).",
  },
  // ---------- Graph 4: h(t), F(0,1) G(1,-1) J(2,-3) K(3,-1) P(4,1) ----------
  {
    slug: "wkst-1-1-07", title: "Climbing From a Minimum", subject: "unit-1", section: "1.1", domain: "Functions", difficulty: "easy",
    image: "/wkst/1-1/g4.png",
    prompt: "The graph of \\(h(t)\\) and its dashed midline are shown. Five points, \\(F\\), \\(G\\), \\(J\\), \\(K\\), and \\(P\\), are labeled on the graph. Let \\(t_1\\) be the \\(t\\)-coordinate of \\(J\\) and \\(t_2\\) be the \\(t\\)-coordinate of \\(K\\). On the interval \\((t_1, t_2)\\), which of the following is true about \\(h\\)?",
    choices: ["\\(h\\) is positive and increasing.", "\\(h\\) is positive and decreasing.", "\\(h\\) is negative and increasing.", "\\(h\\) is negative and decreasing."],
    correctIndex: 2, correctText: "\\(h\\) is negative and increasing.",
    explanation: "Here \\((t_1,t_2)=(2,3)\\). The graph rises from \\(J(2,-3)\\) to \\(K(3,-1)\\). The outputs stay negative while the graph rises from left to right, so \\(h\\) is negative and increasing.",
  },
  {
    slug: "wkst-1-1-08", title: "Rate Speeding Up", subject: "unit-1", section: "1.1", domain: "Functions", difficulty: "medium",
    image: "/wkst/1-1/g4.png",
    prompt: "The graph of \\(h(t)\\) and its dashed midline are shown. Five points, \\(F\\), \\(G\\), \\(J\\), \\(K\\), and \\(P\\), are labeled on the graph. Let \\(t_1\\) be the \\(t\\)-coordinate of \\(J\\) and \\(t_2\\) be the \\(t\\)-coordinate of \\(K\\). Which of the following best describes how the rate of change of \\(h\\) is changing on the interval \\((t_1, t_2)\\)?",
    choices: ["The rate of change is negative and decreasing.", "The rate of change is negative and increasing.", "The rate of change is positive and decreasing.", "The rate of change is positive and increasing."],
    correctIndex: 3, correctText: "The rate of change is positive and increasing.",
    explanation: "From \\(J\\) to \\(K\\) the graph rises, so the rate of change is positive. The climb gets steeper as the graph leaves the minimum at \\(J\\), so the positive rate of change is increasing.",
  },
  // ---------- Graph 5: f on [0,9], points A-F ----------
  {
    slug: "wkst-1-1-09", title: "Reading a Labeled Graph", subject: "unit-1", section: "1.1", domain: "Functions", difficulty: "medium",
    image: "/wkst/1-1/g5.png",
    prompt: "The figure shows the graph of \\(f\\) for \\(0 \\le x \\le 9\\), along with the six labeled points \\(A\\) through \\(F\\). On which of the following intervals is \\(f\\) negative and increasing?",
    choices: ["the interval from \\(A\\) to \\(B\\)", "the interval from \\(B\\) to \\(C\\)", "the interval from \\(C\\) to \\(D\\)", "the interval from \\(E\\) to \\(F\\)"],
    correctIndex: 1, correctText: "the interval from \\(B\\) to \\(C\\)",
    explanation: "From \\(B(2,-3)\\) to \\(C(4,-1)\\) the graph stays below the \\(x\\)-axis and rises from left to right, so \\(f\\) is negative and increasing there.",
  },
  {
    slug: "wkst-1-1-10", title: "Where the Rate Is Negative", subject: "unit-1", section: "1.1", domain: "Functions", difficulty: "medium",
    image: "/wkst/1-1/g5.png",
    prompt: "The figure shows the graph of \\(f\\) for \\(0 \\le x \\le 9\\), along with the six labeled points \\(A\\) through \\(F\\). Which of the following statements about the rate of change of \\(f\\) is true?",
    choices: ["The rate of change of \\(f\\) is negative on the interval from \\(B\\) to \\(C\\).", "The rate of change of \\(f\\) is negative on the interval from \\(C\\) to \\(D\\).", "The rate of change of \\(f\\) is negative on the interval from \\(D\\) to \\(E\\).", "The rate of change of \\(f\\) is negative on the interval from \\(E\\) to \\(F\\)."],
    correctIndex: 2, correctText: "The rate of change of \\(f\\) is negative on the interval from \\(D\\) to \\(E\\).",
    explanation: "The rate of change is negative where \\(f\\) is decreasing. From \\(D(6,1)\\) to \\(E(7,0)\\) the graph falls throughout, so the rate of change is negative on that interval.",
  },
  {
    slug: "wkst-1-1-11", title: "Where the Rate Is Increasing", subject: "unit-1", section: "1.1", domain: "Functions", difficulty: "medium",
    image: "/wkst/1-1/g5.png",
    prompt: "The figure shows the graph of \\(f\\) for \\(0 \\le x \\le 9\\), along with the six labeled points \\(A\\) through \\(F\\). Which of the following statements about the rate of change of \\(f\\) is true?",
    choices: ["The rate of change of \\(f\\) is decreasing on the interval from \\(A\\) to \\(B\\).", "The rate of change of \\(f\\) is decreasing on the interval from \\(B\\) to \\(C\\).", "The rate of change of \\(f\\) is increasing on the interval from \\(C\\) to \\(D\\).", "The rate of change of \\(f\\) is increasing on the interval from \\(E\\) to \\(F\\)."],
    correctIndex: 3, correctText: "The rate of change of \\(f\\) is increasing on the interval from \\(E\\) to \\(F\\).",
    explanation: "From \\(E(7,0)\\) down through the valley and back up to \\(F(9,0)\\) the graph is concave up throughout, so the rate of change is increasing on the whole interval.",
  },
  {
    slug: "wkst-1-1-12", title: "Decreasing and Concave Up", subject: "unit-1", section: "1.1", domain: "Functions", difficulty: "medium",
    image: "/wkst/1-1/g5.png",
    prompt: "The figure shows the graph of \\(f\\) for \\(0 \\le x \\le 9\\), along with the six labeled points \\(A\\) through \\(F\\). On which of the following intervals is \\(f\\) decreasing and the graph of \\(f\\) concave up?",
    choices: ["the interval from \\(A\\) to \\(B\\)", "the interval from \\(B\\) to \\(C\\)", "the interval from \\(C\\) to \\(D\\)", "the interval from \\(E\\) to \\(F\\)"],
    correctIndex: 0, correctText: "the interval from \\(A\\) to \\(B\\)",
    explanation: "From \\(A(0,-1)\\) to \\(B(2,-3)\\) the graph falls from left to right and curves upward like a valley, so \\(f\\) is decreasing and concave up there.",
  },
  // ---------- Graph 6: piecewise h on [-5,5] ----------
  {
    slug: "wkst-1-1-13", title: "Increasing on a Piecewise Graph", subject: "unit-1", section: "1.1", domain: "Functions", difficulty: "medium",
    image: "/wkst/1-1/g6.png",
    prompt: "The figure shows the graph of \\(h\\) on the interval \\(-5 \\le x \\le 5\\). On what intervals is \\(h\\) increasing?",
    choices: ["\\((-5,-1)\\)", "\\((-1,5)\\)", "\\((-5,-2)\\) only", "\\((2,5)\\)"],
    correctIndex: 0, correctText: "\\((-5,-1)\\)",
    explanation: "The graph rises from \\(x=-5\\) to \\(x=-2\\) and again from \\(x=-2\\) to \\(x=-1\\), so \\(h\\) is increasing on \\((-5,-2)\\) and \\((-2,-1)\\), which together make \\((-5,-1)\\).",
  },
  {
    slug: "wkst-1-1-14", title: "Positive and Decreasing Intervals", subject: "unit-1", section: "1.1", domain: "Functions", difficulty: "medium",
    image: "/wkst/1-1/g6.png",
    prompt: "The figure shows the graph of \\(h\\) on the interval \\(-5 \\le x \\le 5\\). On what intervals is \\(h\\) both positive and decreasing?",
    choices: ["\\((-1,2)\\)", "\\((2,5)\\)", "\\((-1,5)\\)", "\\((-2,-1)\\)"],
    correctIndex: 0, correctText: "\\((-1,2)\\)",
    explanation: "\\(h\\) is decreasing on \\((-1,5)\\), and it stays above the \\(x\\)-axis only until it crosses the axis at \\(x=2\\). So \\(h\\) is both positive and decreasing on \\((-1,2)\\).",
  },
  // ---------- Graph 7: g on [-5,4], inflection at A(-2,0) ----------
  {
    slug: "wkst-1-1-15", title: "Negative Rate of Change", subject: "unit-1", section: "1.1", domain: "Functions", difficulty: "medium",
    image: "/wkst/1-1/g7.png",
    prompt: "The figure shows the graph of \\(g\\) on the interval \\(-5 \\le x \\le 4\\). Point \\(A\\) is located at \\((-2,0)\\) and is the only point where the graph of \\(g\\) changes concavity. On what intervals is the rate of change of \\(g\\) negative?",
    choices: ["\\((-5,-4)\\) and \\((0,4)\\)", "\\((-4,0)\\)", "\\((-2,4)\\)", "\\((-5,-4)\\) only"],
    correctIndex: 0, correctText: "\\((-5,-4)\\) and \\((0,4)\\)",
    explanation: "The rate of change is negative where \\(g\\) is decreasing: from \\(x=-5\\) down to the minimum near \\(x=-4\\), and from the maximum near \\(x=0\\) down to \\(x=4\\).",
  },
  {
    slug: "wkst-1-1-16", title: "Positive but Slowing Rate", subject: "unit-1", section: "1.1", domain: "Functions", difficulty: "hard",
    image: "/wkst/1-1/g7.png",
    prompt: "The figure shows the graph of \\(g\\) on the interval \\(-5 \\le x \\le 4\\). Point \\(A\\) is located at \\((-2,0)\\) and is the only point where the graph of \\(g\\) changes concavity. On what intervals is the rate of change of \\(g\\) positive and decreasing?",
    choices: ["\\((-4,-2)\\)", "\\((-2,0)\\)", "\\((0,4)\\)", "\\((-4,0)\\)"],
    correctIndex: 1, correctText: "\\((-2,0)\\)",
    explanation: "The rate of change is positive where \\(g\\) is increasing, on \\((-4,0)\\). It is decreasing where the graph is concave down, which begins at the inflection point \\(A\\), on \\((-2,4)\\). Both conditions hold on \\((-2,0)\\).",
  },
];
