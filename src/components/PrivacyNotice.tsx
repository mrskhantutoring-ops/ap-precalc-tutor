"use client";

import { useEffect, useState } from "react";

// Privacy notice for the visitor counter. The counter records only the page
// visited, how the visitor arrived, approximate city/state/country, and
// device type. No names, no IP addresses, and no cookies that identify anyone.
// Dismissal is remembered in localStorage on this device only.
const KEY = "prominds-privacy-dismissed";

export default function PrivacyNotice() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    try {
      if (!window.localStorage.getItem(KEY)) setShow(true);
    } catch {
      setShow(true);
    }
  }, []);
  if (!show) return null;
  const dismiss = () => {
    try {
      window.localStorage.setItem(KEY, "1");
    } catch {}
    setShow(false);
  };
  return (
    <div
      role="region"
      aria-label="Privacy notice"
      style={{
        position: "fixed",
        left: 12,
        right: 12,
        bottom: 12,
        zIndex: 100,
        background: "#073c59",
        color: "#fff",
        borderRadius: 12,
        padding: "14px 16px",
        display: "flex",
        gap: 14,
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: "0 12px 30px rgba(0,0,0,.3)",
        fontSize: 14,
        lineHeight: 1.45,
      }}
    >
      <p style={{ margin: 0 }}>
        Pro Minds counts visits privately: we record only the page visited, how you arrived
        (e.g. Facebook / Google / direct), approximate city and state, and device type.
        No names, no IP addresses, and no cookies that identify you.
      </p>
      <button
        onClick={dismiss}
        style={{
          flex: "0 0 auto",
          background: "#f5b800",
          color: "#0b3249",
          border: 0,
          borderRadius: 10,
          padding: "10px 18px",
          fontWeight: 800,
          cursor: "pointer",
        }}
      >
        Got it
      </button>
    </div>
  );
}
