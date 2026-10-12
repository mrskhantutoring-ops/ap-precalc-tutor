"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Silent visit beacon — renders nothing, shows nothing. Sends the page path
// and the referring site to /api/track so visits can be counted privately.
export default function VisitBeacon() {
  const pathname = usePathname();
  useEffect(() => {
    if (!pathname || pathname.startsWith("/admin")) return;
    const payload = JSON.stringify({ site: "ap", path: pathname, referrer: document.referrer || "" });
    try {
      if (navigator.sendBeacon) {
        navigator.sendBeacon("/api/track", new Blob([payload], { type: "application/json" }));
      } else {
        fetch("/api/track", { method: "POST", body: payload, headers: { "Content-Type": "application/json" }, keepalive: true }).catch(() => {});
      }
    } catch {
      // Counting must never break the page.
    }
  }, [pathname]);
  return null;
}
