"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Me = { id: string; name: string; email: string } | null;

export default function Navbar() {
  const [me, setMe] = useState<Me>(null);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!programsOpen && !mobileOpen) return;
    const close = () => {
      setProgramsOpen(false);
      setMobileOpen(false);
    };
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [programsOpen, mobileOpen]);

  useEffect(() => {
    fetch("/api/auth/me")
      .then((r) => r.json())
      .then((d) => setMe(d.user ?? null))
      .catch(() => setMe(null));
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-[#bdd3dc] bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-[min(1180px,calc(100%-40px))] items-center justify-between py-2.5">
        <a href="https://promindstutoring.com/" className="flex items-center gap-2.5 text-[19px] font-extrabold tracking-tight text-[#0a3d62]" aria-label="Pro Minds home">
          <img src="/pie-logo.png" alt="" width={28} height={28} className="rounded-full" />
          <span>Pro Minds</span>
        </a>
        <nav className="hidden items-center justify-end gap-1 text-[16px] font-extrabold tracking-[0.02em] sm:flex sm:gap-2">
          <div className="relative">
            <button
              onClick={(e) => { e.stopPropagation(); setProgramsOpen((v) => !v); }}
              className="rounded-full px-3 py-2 text-[#0a3d62] hover:bg-slate-100"
              aria-haspopup="true"
              aria-expanded={programsOpen}
            >
              Programs <span aria-hidden>▾</span>
            </button>
            {programsOpen && (
              <div className="absolute left-0 top-full z-50 mt-1 w-52 rounded-2xl border border-[#bdd3dc] bg-white p-2 text-left shadow-xl">
                {[
                  ["SAT", "https://promindstutoring.com/sat/"],
                  ["ACT", "https://promindstutoring.com/act/"],
                  ["Algebra 1 & 2", "https://promindstutoring.com/algebra/"],
                  ["Blog", "https://promindstutoring.com/blog.html"],
                  ["Contact", "https://promindstutoring.com/contact.html"],
                ].map(([label, href]) => (
                  <a key={href} href={href} className="block rounded-xl px-3 py-2 text-[#0a3d62] hover:bg-slate-100">
                    {label}
                  </a>
                ))}
              </div>
            )}
          </div>
          <Link href="/practice" className="rounded-full px-3 py-2 text-[#0a3d62] hover:bg-slate-100">
            Practice
          </Link>
          <Link href="/dashboard" className="rounded-full px-3 py-2 text-[#0a3d62] hover:bg-slate-100">
            Dashboard
          </Link>
          <Link href="/contact" className="rounded-full px-3 py-2 text-[#0a3d62] hover:bg-slate-100">
            Book a session
          </Link>
          {me ? (
            <span className="ml-1 flex items-center gap-2">
              <span className="hidden rounded-full bg-slate-100 px-3 py-1.5 text-black sm:inline">
                Hi, {me.name.split(" ")[0]}
              </span>
              <button
                onClick={async () => {
                  await fetch("/api/auth/logout", { method: "POST" });
                  setMe(null);
                  window.location.href = "/";
                }}
                className="rounded-full px-3 py-2 text-slate-500 hover:bg-slate-100"
              >
                Log out
              </button>
            </span>
          ) : (
            <Link href="/login" className="ml-1 rounded-full bg-[#073c59] px-4 py-2 font-semibold text-white hover:bg-[#0a4a6e]">
              Log in
            </Link>
          )}
        </nav>
        <div className="flex items-center gap-2 sm:hidden">
          {me ? (
            <button
              onClick={async () => {
                await fetch("/api/auth/logout", { method: "POST" });
                setMe(null);
                window.location.href = "/";
              }}
              className="rounded-full px-3 py-2 text-[15px] font-extrabold text-slate-500 hover:bg-slate-100"
            >
              Log out
            </button>
          ) : (
            <Link href="/login" className="rounded-full bg-[#073c59] px-4 py-2 text-[15px] font-semibold text-white hover:bg-[#0a4a6e]">
              Log in
            </Link>
          )}
          <button
            onClick={(e) => { e.stopPropagation(); setMobileOpen((v) => !v); }}
            className="rounded-full px-3 py-2 text-[15px] font-extrabold text-[#0a3d62] hover:bg-slate-100"
            aria-haspopup="true"
            aria-expanded={mobileOpen}
          >
            Menu <span aria-hidden>▾</span>
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="border-t border-[#bdd3dc] bg-white px-5 py-2 text-[16px] font-extrabold text-[#0a3d62] sm:hidden"
        >
          {[
            ["Practice", "/practice"],
            ["Dashboard", "/dashboard"],
            ["Book a session", "/contact"],
          ].map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMobileOpen(false)} className="block rounded-xl px-3 py-2.5 hover:bg-slate-100">
              {label}
            </a>
          ))}
          <div className="mt-1 border-t border-[#bdd3dc] pt-2">
            <div className="px-3 py-1 text-[13px] font-bold uppercase tracking-wide text-slate-500">Programs</div>
            {[
              ["SAT", "https://promindstutoring.com/sat/"],
              ["ACT", "https://promindstutoring.com/act/"],
              ["Algebra 1 & 2", "https://promindstutoring.com/algebra/"],
              ["Blog", "https://promindstutoring.com/blog.html"],
              ["Contact", "https://promindstutoring.com/contact.html"],
            ].map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMobileOpen(false)} className="block rounded-xl px-3 py-2.5 hover:bg-slate-100">
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
