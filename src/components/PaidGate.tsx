"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Me = { id: string; name: string; email: string; isPaid: boolean } | null;

/**
 * PaidGate — wraps paid-only pages. Shows a login prompt when logged out,
 * an enrollment notice when the account isn't marked paid, and the children
 * only for paid students.
 */
export default function PaidGate({ children }: { children: React.ReactNode }) {
  const [me, setMe] = useState<Me | undefined>(undefined);

  useEffect(() => {
    fetch("/api/auth/me")
      .then((r) => r.json())
      .then((d) => setMe(d.user ?? null))
      .catch(() => setMe(null));
  }, []);

  if (me === undefined) return <p className="text-slate-500">Checking your enrollment…</p>;

  if (me === null)
    return (
      <div className="card mx-auto max-w-md text-center">
        <h1 className="text-2xl font-extrabold">Log in to continue</h1>
        <p className="mt-2 text-sm text-slate-600">
          This practice site is for enrolled Pro Minds students. Log in to access your practice sets.
        </p>
        <div className="mt-6 flex gap-3">
          <Link href="/login" className="btn-primary flex-1">Log in</Link>
          <Link href="/signup" className="btn-secondary flex-1">Sign up</Link>
        </div>
      </div>
    );

  if (!me.isPaid)
    return (
      <div className="card mx-auto max-w-md text-center">
        <p className="text-4xl">🔒</p>
        <h1 className="mt-2 text-2xl font-extrabold">Enrollment required</h1>
        <p className="mt-2 text-sm text-slate-600">
          Hi {me.name.split(" ")[0]} — your account isn't enrolled yet. Practice access unlocks after
          enrollment. Contact Pro Minds and we'll get you set up.
        </p>
        <Link href="/contact" className="btn-primary mt-6 w-full">Contact Pro Minds</Link>
      </div>
    );

  return <>{children}</>;
}
