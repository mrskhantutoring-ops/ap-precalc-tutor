// Central site configuration for the Pro Minds AP Precalculus site.

export const site = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || "Pro Minds",
  tutorName: "Pro Minds",
  tagline: "1-on-1 AP Precalculus coaching that meets you where you are.",
  // TODO: replace with your real contact email
  email: "hello@example.com",
  // TODO: replace with your real booking/scheduling link (e.g. Calendly)
  bookingUrl: "",
  // TODO: set your real prices
  pricing: [
    {
      name: "Single Session",
      price: "Contact for rates",
      features: ["60-minute 1-on-1 session", "AP Precalculus focus", "Homework plan after every session"],
    },
    {
      name: "4-Session Pack",
      price: "Contact for rates",
      features: ["Four 60-minute sessions", "Personalized study plan", "Practice sets between sessions", "Progress check-ins"],
      featured: true,
    },
    {
      name: "Exam Sprint",
      price: "Contact for rates",
      features: ["Eight 60-minute sessions", "Full MCQ + FRQ practice reviews", "Calculator strategy", "Score-goal tracking"],
    },
  ],
};

// AP Precalculus units covered on this site (College Board exam assesses Units 1–3;
// Unit 4 is not on the AP exam). Each unit gets its own pastel color family for cards.
export const UNITS = [
  {
    id: "unit-1",
    name: "Unit 1: Polynomial & Rational Functions",
    short: "Unit 1",
    blurb: "College Board weighting 30–40% · polynomial and rational functions",
    icon: "📈",
    count: 20,
    tint: { bg: "#FEFCE8", border: "#FEF08A", chipBg: "#FEF08A", chipText: "#A16207" },
  },
  {
    id: "unit-2",
    name: "Unit 2: Exponential & Logarithmic Functions",
    short: "Unit 2",
    blurb: "College Board weighting 25–40% · exponential and logarithmic functions",
    icon: "📊",
    count: 22,
    tint: { bg: "#F0F9FF", border: "#BAE6FD", chipBg: "#BAE6FD", chipText: "#0369A1" },
  },
  {
    id: "unit-3",
    name: "Unit 3: Trigonometric & Polar Functions",
    short: "Unit 3",
    blurb: "College Board weighting 30–35% · trig, sinusoidal and polar functions",
    icon: "🔺",
    count: 21,
    tint: { bg: "#F5F3FF", border: "#DDD6FE", chipBg: "#DDD6FE", chipText: "#6D28D9" },
  },
  {
    id: "unit-4",
    name: "Unit 4: Parameters, Vectors & Matrices",
    short: "Unit 4",
    blurb: "Course unit · parametric functions, vectors, matrices (not on the AP exam)",
    icon: "🧭",
    count: 16,
    tint: { bg: "#fdedf2", border: "#f2cad7", chipBg: "#FBCFE8", chipText: "#BE185D" },
  },
] as const;

// Official College Board section structure for AP Precalculus, used for the
// section-by-section practice hub. Blurbs are original Pro Minds summaries.
export type Section = { id: string; title: string; blurb: string };

export const SECTIONS: Record<string, Section[]> = {
  "unit-1": [
    { id: "1.1", title: "Change in Tandem", blurb: "How the output values of a function change together with its input values." },
    { id: "1.2", title: "Rates of Change", blurb: "Average rates of change and what they tell you about a function's behavior." },
    { id: "1.3", title: "Rates of Change in Linear and Quadratic Functions", blurb: "Constant vs. changing rates of change in lines and parabolas." },
    { id: "1.4", title: "Polynomial Functions and Rates of Change", blurb: "Evaluating, factoring, and analyzing polynomial functions." },
    { id: "1.5", title: "Polynomial Functions and Complex Zeros", blurb: "Complex zeros and why they come in conjugate pairs." },
    { id: "1.6", title: "Polynomial Functions and End Behavior", blurb: "Using degree and leading coefficient to describe end behavior." },
    { id: "1.7", title: "Rational Functions and End Behavior", blurb: "Horizontal and slant asymptotes from degrees of numerator and denominator." },
    { id: "1.8", title: "Rational Functions and Zeros", blurb: "Zeros of rational functions and where they are undefined." },
    { id: "1.9", title: "Rational Functions and Vertical Asymptotes", blurb: "Finding vertical asymptotes from the denominator." },
    { id: "1.10", title: "Rational Functions and Holes", blurb: "Removable discontinuities where factors cancel." },
    { id: "1.11", title: "Equivalent Representations of Polynomial and Rational Expressions", blurb: "Rewriting expressions in equivalent forms, including polynomial division." },
    { id: "1.12", title: "Transformations of Functions", blurb: "Shifts, stretches, and reflections of graphs." },
    { id: "1.13", title: "Function Model Selection and Assumption Articulation", blurb: "Choosing an appropriate function model for a data set or context." },
    { id: "1.14", title: "Function Model Construction and Application", blurb: "Building a model from data and using it to make predictions." },
  ],
  "unit-2": [
    { id: "2.1", title: "Change in Arithmetic and Geometric Sequences", blurb: "How terms of arithmetic and geometric sequences change." },
    { id: "2.2", title: "Change in Linear and Exponential Functions", blurb: "Constant change vs. proportional change over equal intervals." },
    { id: "2.3", title: "Exponential Functions", blurb: "Growth and decay, graphs, intercepts, and end behavior." },
    { id: "2.4", title: "Exponential Function Manipulation", blurb: "Rewriting exponential expressions in equivalent forms." },
    { id: "2.5", title: "Exponential Function Context and Data Modeling", blurb: "Population growth, half-life, and compound interest models." },
    { id: "2.6", title: "Competing Function Model Validation", blurb: "Deciding whether a linear or exponential model fits data better." },
    { id: "2.7", title: "Composition of Functions", blurb: "Combining functions and evaluating composite functions." },
    { id: "2.8", title: "Inverse Functions", blurb: "What inverse functions are and when they exist." },
    { id: "2.9", title: "Logarithmic Expressions", blurb: "Evaluating logarithms and understanding what they mean." },
    { id: "2.10", title: "Inverses of Exponential Functions", blurb: "Logarithms as the inverses of exponential functions." },
    { id: "2.11", title: "Logarithmic Functions", blurb: "Graphs, domain, and asymptotes of logarithmic functions." },
    { id: "2.12", title: "Logarithmic Function Manipulation", blurb: "Product, quotient, power, and change-of-base rules." },
    { id: "2.13", title: "Exponential and Logarithmic Equations and Inequalities", blurb: "Solving equations, including extraneous solutions." },
    { id: "2.14", title: "Logarithmic Function Context and Data Modeling", blurb: "Logarithmic models for real-world contexts." },
    { id: "2.15", title: "Semi-log Plots", blurb: "Using semi-log plots to identify and fit exponential models." },
  ],
  "unit-3": [
    { id: "3.1", title: "Periodic Phenomena", blurb: "Recognizing repeating patterns in real-world contexts." },
    { id: "3.2", title: "Sine, Cosine, and Tangent", blurb: "Defining the basic trig functions on the unit circle." },
    { id: "3.3", title: "Sine and Cosine Function Values", blurb: "Exact trig values at special angles." },
    { id: "3.4", title: "Sine and Cosine Function Graphs", blurb: "Key features and graphs of sine and cosine functions." },
    { id: "3.5", title: "Sinusoidal Functions", blurb: "Amplitude, period, and midline of sine and cosine graphs." },
    { id: "3.6", title: "Sinusoidal Function Transformations", blurb: "Phase shifts and parameter changes in sinusoidal graphs." },
    { id: "3.7", title: "Sinusoidal Function Context and Data Modeling", blurb: "Modeling tides, Ferris wheels, and other periodic contexts." },
    { id: "3.8", title: "The Tangent Function", blurb: "Graph and features of the tangent function." },
    { id: "3.9", title: "Inverse Trigonometric Functions", blurb: "Evaluating arcsin, arccos, and arctan with restricted ranges." },
    { id: "3.10", title: "Trigonometric Equations and Inequalities", blurb: "Solving trig equations over an interval." },
    { id: "3.11", title: "The Secant, Cosecant, and Cotangent Functions", blurb: "Reciprocal trig functions and their values." },
    { id: "3.12", title: "Equivalent Representations of Trigonometric Functions", blurb: "Rewriting trig expressions using identities." },
    { id: "3.13", title: "Trigonometry and Polar Coordinates", blurb: "Converting between polar and rectangular coordinates." },
    { id: "3.14", title: "Polar Function Graphs", blurb: "Circles, cardioids, and rose curves in polar form." },
    { id: "3.15", title: "Rates of Change in Polar Functions", blurb: "How the radius changes with the angle in polar graphs." },
  ],
  "unit-4": [
    { id: "4.1", title: "Parametric Functions", blurb: "Eliminating the parameter and evaluating parametric equations." },
    { id: "4.2", title: "Parametric Functions Modeling Planar Motion", blurb: "Position, speed, and direction of a moving particle." },
    { id: "4.3", title: "Parametric Functions and Rates of Change", blurb: "Rates of change along parametrically defined curves." },
    { id: "4.4", title: "Parametrically Defined Circles and Lines", blurb: "Parametrizations of circles and lines, including direction of motion." },
    { id: "4.5", title: "Implicitly Defined Functions", blurb: "Relations in x and y that define y implicitly as a function of x." },
    { id: "4.6", title: "Conic Sections", blurb: "Parabolas, ellipses, and hyperbolas from a geometric definition." },
    { id: "4.7", title: "Parametrization of Implicitly Defined Functions", blurb: "Finding parametric equations for implicitly defined relations." },
    { id: "4.8", title: "Vectors", blurb: "Magnitude, direction, addition, and dot products." },
    { id: "4.9", title: "Vector-Valued Functions", blurb: "Functions whose outputs are vectors." },
    { id: "4.10", title: "Matrices", blurb: "Matrix addition, subtraction, and multiplication." },
    { id: "4.11", title: "The Inverse and Determinant of a Matrix", blurb: "Determinants, inverses, and solving matrix equations." },
    { id: "4.12", title: "Linear Transformations and Matrices", blurb: "Rotations, reflections, and dilations as matrices." },
    { id: "4.13", title: "Matrices as Functions", blurb: "Viewing matrix multiplication as a function on vectors." },
    { id: "4.14", title: "Matrices Modeling Contexts", blurb: "Using matrices to model real-world situations." },
  ],
};

export function sectionsByUnit(unitId: string): Section[] {
  return SECTIONS[unitId] ?? [];
}

export function sectionLabel(unitId: string, sectionId: string): string {
  const s = sectionsByUnit(unitId).find((x) => x.id === sectionId);
  return s ? `${s.id} | ${s.title}` : sectionId;
}

// Kept as an alias so existing components/APIs written against SUBJECTS keep working.
export const SUBJECTS = UNITS;

export type SubjectId = (typeof UNITS)[number]["id"];

export function subjectById(id: string) {
  return UNITS.find((s) => s.id === id);
}
