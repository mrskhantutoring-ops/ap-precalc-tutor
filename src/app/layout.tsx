import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { site } from "@/lib/site";

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
        <footer className="border-t border-slate-200 bg-white">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} {site.name}. Practice questions are original and for study use only.
            </p>
            <p>AP® is a trademark of the College Board. This site is not affiliated with or endorsed by the College Board. All practice questions are original.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
