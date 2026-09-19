import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { site, UNITS } from "@/lib/site";

export const metadata: Metadata = {
  title: `${site.name} — AP Precalculus Tutoring and Practice`,
  description:
    "1-on-1 AP Precalculus tutoring plus timed College Board-style practice with instant explanations and progress tracking. For enrolled students.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="mx-auto max-w-6xl px-4 pb-20 pt-8">{children}</main>
        <footer className="bg-black text-slate-300">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 text-sm sm:grid-cols-4">
            <div>
              <p className="text-lg font-extrabold text-white">{site.name}</p>
              <p className="mt-2 text-slate-400">
                1-on-1 AP Precalculus coaching with College Board-style practice, timed drills, and progress tracking.
              </p>
            </div>
            <div>
              <p className="font-bold text-white">Practice</p>
              <ul className="mt-2 space-y-1.5">
                {UNITS.map((u) => (
                  <li key={u.id}>
                    <a href={`/practice/${u.id}`} className="hover:text-white">
                      {u.short}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-bold text-white">Site</p>
              <ul className="mt-2 space-y-1.5">
                <li><a href="/practice" className="hover:text-white">Practice</a></li>
                <li><a href="/dashboard" className="hover:text-white">Dashboard</a></li>
                <li><a href="/contact" className="hover:text-white">Book a session</a></li>
                <li><a href="/login" className="hover:text-white">Log in</a></li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-white">Fine print</p>
              <p className="mt-2 text-xs leading-relaxed text-slate-400">
                © {new Date().getFullYear()} {site.name}. All practice questions are original and for study use only.
                AP® is a trademark of the College Board. This site is not affiliated with or endorsed by the College Board.
              </p>
            </div>
          </div>
          <div className="bg-[#3F3A38]">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-4 text-sm text-white sm:flex-row">
              <p>© {new Date().getFullYear()} {site.name}</p>
              <p className="flex gap-4">
                <a href="/contact" className="hover:underline">Contact</a>
                <a href="/practice" className="hover:underline">Practice</a>
                <a href="/dashboard" className="hover:underline">Dashboard</a>
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
