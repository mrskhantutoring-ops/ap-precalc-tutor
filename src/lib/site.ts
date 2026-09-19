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
    domains: ["Polynomial Functions", "Rational Functions", "End Behavior", "Zeros & Factors", "Graphing & Modeling"],
    icon: "📈",
    count: 20,
    tint: { bg: "#FEFCE8", border: "#FEF08A", chipBg: "#FEF08A", chipText: "#A16207" },
  },
  {
    id: "unit-2",
    name: "Unit 2: Exponential & Logarithmic Functions",
    short: "Unit 2",
    blurb: "College Board weighting 25–40% · exponential and logarithmic functions",
    domains: ["Exponential Functions", "Logarithmic Functions", "Log Properties", "Solving Equations", "Modeling & Applications"],
    icon: "📊",
    count: 22,
    tint: { bg: "#F0F9FF", border: "#BAE6FD", chipBg: "#BAE6FD", chipText: "#0369A1" },
  },
  {
    id: "unit-3",
    name: "Unit 3: Trigonometric & Polar Functions",
    short: "Unit 3",
    blurb: "College Board weighting 30–35% · trig, sinusoidal and polar functions",
    domains: ["Unit Circle & Trig Values", "Sinusoidal Graphs", "Sinusoidal Modeling", "Trig Equations & Identities", "Inverse Trig Functions", "Polar Coordinates", "Polar Graphs"],
    icon: "🔺",
    count: 21,
    tint: { bg: "#F5F3FF", border: "#DDD6FE", chipBg: "#DDD6FE", chipText: "#6D28D9" },
  },
  {
    id: "unit-4",
    name: "Unit 4: Parameters, Vectors & Matrices",
    short: "Unit 4",
    blurb: "Course unit · parametric functions, vectors, matrices (not on the AP exam)",
    domains: ["Parametric Functions", "Vectors", "Matrices"],
    icon: "🧭",
    count: 16,
    tint: { bg: "#fdedf2", border: "#f2cad7", chipBg: "#FBCFE8", chipText: "#BE185D" },
  },
] as const;

// Kept as an alias so existing components/APIs written against SUBJECTS keep working.
export const SUBJECTS = UNITS;

export type SubjectId = (typeof UNITS)[number]["id"];

export function subjectById(id: string) {
  return UNITS.find((s) => s.id === id);
}
