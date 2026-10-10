"use client";

import { useEffect, useRef, useState } from "react";

// Handwriting pad for timed tests: students write their work with a finger,
// mouse, or stylus instead of (or alongside) typing. The pad exports a JPEG
// data URL that is stored with the submission and shown in the teacher report.

const W = 1000;
const H = 600;

function paintPaper(ctx: CanvasRenderingContext2D) {
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, W, H);
  ctx.strokeStyle = "#e8eef4";
  ctx.lineWidth = 1;
  for (let y = 48; y < H; y += 48) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(W, y);
    ctx.stroke();
  }
}

type Tool = "pen" | "eraser";

export default function DrawingPad({
  value,
  onChange,
}: {
  value: string | null;
  onChange: (v: string | null) => void;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [tool, setTool] = useState<Tool>("pen");
  const [hasInk, setHasInk] = useState(false);
  const drawingRef = useRef(false);
  const lastPointRef = useRef<{ x: number; y: number } | null>(null);
  const midPointRef = useRef<{ x: number; y: number } | null>(null);
  const undoStackRef = useRef<string[]>([]);
  const blankRef = useRef<string | null>(null);
  const lastExportRef = useRef<string | null>(null);
  const toolRef = useRef<Tool>("pen");
  toolRef.current = tool;

  function exportImage(): string | null {
    const canvas = canvasRef.current;
    if (!canvas) return null;
    return canvas.toDataURL("image/jpeg", 0.85);
  }

  function emit() {
    const img = exportImage();
    const blank = img === blankRef.current;
    lastExportRef.current = blank ? null : img;
    setHasInk(!blank);
    onChange(blank ? null : img);
  }

  // Paint the paper and load any saved drawing once, on mount.
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    paintPaper(ctx);
    blankRef.current = canvas.toDataURL("image/jpeg", 0.85);
    if (value) {
      const img = new Image();
      img.onload = () => {
        ctx.drawImage(img, 0, 0, W, H);
        lastExportRef.current = value;
        setHasInk(true);
      };
      img.src = value;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // If the parent loads a drawing after mount (resume), paint it.
  useEffect(() => {
    if (!value || value === lastExportRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    const img = new Image();
    img.onload = () => {
      ctx.drawImage(img, 0, 0, W, H);
      lastExportRef.current = value;
      setHasInk(true);
    };
    img.src = value;
  }, [value]);

  function pos(e: React.PointerEvent): { x: number; y: number } {
    const rect = canvasRef.current!.getBoundingClientRect();
    return {
      x: ((e.clientX - rect.left) / rect.width) * W,
      y: ((e.clientY - rect.top) / rect.height) * H,
    };
  }

  function onPointerDown(e: React.PointerEvent) {
    e.preventDefault();
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    const before = exportImage();
    if (before) {
      undoStackRef.current.push(before);
      if (undoStackRef.current.length > 25) undoStackRef.current.shift();
    }
    drawingRef.current = true;
    const p = pos(e);
    lastPointRef.current = p;
    midPointRef.current = p;
    // A dot for a simple tap.
    const ctx = canvasRef.current!.getContext("2d")!;
    ctx.fillStyle = toolRef.current === "pen" ? "#1a1a1a" : "#ffffff";
    ctx.beginPath();
    ctx.arc(p.x, p.y, toolRef.current === "pen" ? 1.8 : 12, 0, Math.PI * 2);
    ctx.fill();
  }

  function onPointerMove(e: React.PointerEvent) {
    if (!drawingRef.current || !lastPointRef.current || !midPointRef.current) return;
    const ctx = canvasRef.current!.getContext("2d")!;
    const p = pos(e);
    const mid = { x: (lastPointRef.current.x + p.x) / 2, y: (lastPointRef.current.y + p.y) / 2 };
    ctx.strokeStyle = toolRef.current === "pen" ? "#1a1a1a" : "#ffffff";
    ctx.lineWidth = toolRef.current === "pen" ? 3 : 26;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.beginPath();
    ctx.moveTo(midPointRef.current.x, midPointRef.current.y);
    ctx.quadraticCurveTo(lastPointRef.current.x, lastPointRef.current.y, mid.x, mid.y);
    ctx.stroke();
    lastPointRef.current = p;
    midPointRef.current = mid;
  }

  function onPointerUp() {
    if (!drawingRef.current) return;
    drawingRef.current = false;
    lastPointRef.current = null;
    midPointRef.current = null;
    emit();
  }

  function undo() {
    const prev = undoStackRef.current.pop();
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!prev || !canvas || !ctx) return;
    const img = new Image();
    img.onload = () => {
      ctx.drawImage(img, 0, 0, W, H);
      emit();
    };
    img.src = prev;
  }

  function clear() {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    const before = exportImage();
    if (before && before !== blankRef.current) {
      undoStackRef.current.push(before);
      if (undoStackRef.current.length > 25) undoStackRef.current.shift();
    }
    paintPaper(ctx);
    emit();
  }

  const toolBtn = (active: boolean) =>
    `rounded-lg px-3 py-1.5 text-xs font-bold transition ${
      active ? "bg-slate-800 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
    }`;

  return (
    <div>
      <div className="mb-2 flex items-center gap-2">
        <span className="text-xs font-bold uppercase tracking-wide text-slate-400">✏️ Write your work</span>
        <span className="flex-1" />
        <button type="button" className={toolBtn(tool === "pen")} onClick={() => setTool("pen")}>Pen</button>
        <button type="button" className={toolBtn(tool === "eraser")} onClick={() => setTool("eraser")}>Eraser</button>
        <button type="button" className={toolBtn(false)} onClick={undo}>Undo</button>
        <button type="button" className={toolBtn(false)} onClick={clear} disabled={!hasInk}>Clear</button>
      </div>
      <canvas
        ref={canvasRef}
        width={W}
        height={H}
        className="w-full cursor-crosshair rounded-xl border border-slate-200 bg-white [touch-action:none]"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        aria-label="Handwriting pad — write your work here"
      />
      <p className="mt-1 text-xs text-slate-400">Write with your finger, mouse, or stylus. It saves automatically, just like typing.</p>
    </div>
  );
}
