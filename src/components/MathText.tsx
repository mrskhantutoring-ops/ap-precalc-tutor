"use client";
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    MathJax?: { typesetPromise: (els: HTMLElement[]) => Promise<void> };
  }
}

/**
 * Renders text that may contain LaTeX math in \(...\) / \[...\] delimiters
 * using MathJax (loaded globally in layout.tsx). Retries briefly if the
 * MathJax CDN script hasn't finished loading yet.
 */
export default function MathText({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let tries = 0;
    let cancelled = false;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const tick = () => {
      if (cancelled) return;
      if (window.MathJax?.typesetPromise) {
        window.MathJax.typesetPromise([el]).catch(() => {});
      } else if (tries++ < 24) {
        timer = setTimeout(tick, 250);
      }
    };
    tick();
    return () => {
      cancelled = true;
      if (timer) clearTimeout(timer);
    };
  }, [text]);

  return (
    <span ref={ref} className={className} style={{ whiteSpace: "pre-wrap" }}>
      {text}
    </span>
  );
}
