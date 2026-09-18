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
// Unit 4 is not on the AP exam).
export const UNITS = [
  {
    id: "unit-1",
    name: "Unit 1: Polynomial & Rational Functions",
    blurb: "College Board weighting 30–40% · polynomial and rational functions",
    domains: ["Polynomial Functions", "Rational Functions", "End Behavior", "Zeros & Factors", "Graphing & Modeling"],
  },
  {
    id: "unit-2",
    name: "Unit 2: Exponential & Logarithmic Functions",
    blurb: "College Board weighting 25–40% · exponential and logarithmic functions",
    domains: ["Exponential Functions", "Logarithmic Functions", "Log Properties", "Solving Equations", "Modeling & Applications"],
  },
  {
    id: "unit-3",
    name: "Unit 3: Trigonometric & Polar Functions",
    blurb: "College Board weighting 30–35% · trig, sinusoidal and polar functions",
    domains: ["Unit Circle & Trig Values", "Sinusoidal Graphs", "Sinusoidal Modeling", "Trig Equations & Identities", "Inverse Trig Functions", "Polar Coordinates", "Polar Graphs"],
  },
  {
    id: "unit-4",
    name: "Unit 4: Parameters, Vectors & Matrices",
    blurb: "Course unit · parametric functions, vectors, matrices (not on the AP exam)",
    domains: ["Parametric Functions", "Vectors", "Matrices"],
  },
] as const;

// Kept as an alias so existing components/APIs written against SUBJECTS keep working.
export const SUBJECTS = UNITS;

export type SubjectId = (typeof UNITS)[number]["id"];

export function subjectById(id: string) {
  return UNITS.find((s) => s.id === id);
}
