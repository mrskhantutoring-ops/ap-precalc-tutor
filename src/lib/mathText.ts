/**
 * Approximate plain-text rendering of a question string that contains
 * LaTeX \(...\) math. Used for truncated previews (dashboard, admin lists)
 * where raw LaTeX would look broken.
 */
const SYMBOLS: Record<string, string> = {
  pi: "π",
  theta: "θ",
  infty: "∞",
  to: "→",
  le: "≤",
  ge: "≥",
  ne: "≠",
  pm: "±",
  times: "×",
  cdot: "·",
  approx: "≈",
  langle: "⟨",
  rangle: "⟩",
  circ: "°",
};

export function plainText(s: string): string {
  if (!s) return s;
  let t = s.replace(/\\\(|\\\)|\\\[|\\\]/g, "");
  t = t.replace(/\\begin\{bmatrix\}/g, "[");
  t = t.replace(/\\end\{bmatrix\}/g, "]");
  t = t.replace(/\\\\/g, "; ");
  t = t.replace(/\\frac\{([^{}]*)\}\{([^{}]*)\}/g, "($1)/($2)");
  t = t.replace(/\\sqrt\{([^{}]*)\}/g, "√$1");
  t = t.replace(/\\([a-zA-Z]+)/g, (_m, name: string) => SYMBOLS[name] ?? name);
  t = t.replace(/[{}^_]/g, "");
  return t.replace(/\s+/g, " ").trim();
}
