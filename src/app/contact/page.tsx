"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  // Arriving from a pricing card ("Book now") carries ?pkg=<package name>:
  // prefill the message so the inquiry names the package they clicked.
  useEffect(() => {
    const pkg = new URLSearchParams(window.location.search).get("pkg");
    if (pkg && site.pricing.some((p) => p.name === pkg)) {
      setMessage(`I'm interested in the ${pkg}.\n\n`);
    }
  }, []);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    const res = await fetch("/api/inquiries", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });
    const data = await res.json();
    if (!res.ok) {
      setError(data.error ?? "Could not send your message.");
      setBusy(false);
      return;
    }
    setDone(true);
  }

  if (done)
    return (
      <div className="card mx-auto max-w-md text-center">
        <p className="text-4xl">📬</p>
        <h1 className="mt-2 text-2xl font-extrabold">Message received!</h1>
        <p className="mt-2 text-sm text-slate-600">
          Thanks, {name.split(" ")[0]}. {site.tutorName} will reply to <strong>{email}</strong> shortly about your free intro call.
        </p>
      </div>
    );

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight">Book a free intro call</h1>
        <p className="mt-2 text-slate-600">
          Tell us where you are in AP Precalculus and where you want to be. We'll reply with times for a free 20-minute intro call —
          goals, unit guidance, and a study plan for the May exam, no strings attached.
        </p>
      </div>
      <form onSubmit={submit} className="card space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="label">Your name</label>
            <input className="input" required value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <label className="label">Email</label>
            <input className="input" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
        </div>
        <div>
          <label className="label">Anything we should know? (current units covered, target AP score, exam date…)</label>
          <textarea className="input min-h-28" required value={message} onChange={(e) => setMessage(e.target.value)}
            placeholder="e.g. Junior, finished Units 1–2, aiming for a 4+ on the May exam…" />
        </div>
        {error && <p className="text-sm text-red-600">{error}</p>}
        <button className="btn-primary w-full" disabled={busy}>{busy ? "Sending…" : "Request my free intro call"}</button>
        <p className="text-center text-xs text-slate-400">Your details are only used to reply to your inquiry.</p>
      </form>
    </div>
  );
}
