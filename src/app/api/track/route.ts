import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export const dynamic = "force-dynamic";

// Invisible visit counter. The beacon on both sites posts here. We store
// only the page, the referring site (e.g. WhatsApp / Facebook / Google /
// direct), the device type, and an approximate location (city / state /
// country) — no cookies, no IPs, no personal data. The IP itself is never
// read, stored, or logged: location comes only from Vercel's geolocation
// headers (x-vercel-ip-city / -country-region / -country), which Vercel
// derives server-side, and any header that could carry an IP is ignored.

const ALLOWED_ORIGINS = new Set([
  "https://promindstutoring.com",
  "https://www.promindstutoring.com",
]);

function corsHeaders(req: NextRequest): Record<string, string> {
  const origin = req.headers.get("origin") ?? "";
  if (!ALLOWED_ORIGINS.has(origin)) return {};
  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    Vary: "Origin",
  };
}

export async function OPTIONS(req: NextRequest) {
  return new NextResponse(null, { status: 204, headers: corsHeaders(req) });
}

function sourceFromReferrer(referrer: string): string {
  if (!referrer) return "Direct / link";
  let host = "";
  try {
    host = new URL(referrer).hostname.toLowerCase();
  } catch {
    return "Other";
  }
  if (host.includes("whatsapp")) return "WhatsApp";
  if (host.includes("facebook") || host === "fb.com" || host.endsWith(".fb.com")) return "Facebook";
  if (host.includes("instagram")) return "Instagram";
  if (host.includes("google")) return "Google";
  if (host.includes("promindstutoring.com")) return "Internal";
  return host.replace(/^www\./, "") || "Other";
}

// Approximate location from Vercel's geolocation headers only. Values are
// URL-encoded by Vercel (e.g. "New%20York"), so decode them; return null
// when a header is absent. Never touches x-forwarded-for or any IP header.
function geoFromHeaders(req: NextRequest): { city: string | null; region: string | null; country: string | null } {
  const decode = (v: string | null): string | null => {
    if (!v) return null;
    try {
      const d = decodeURIComponent(v).trim();
      return d || null;
    } catch {
      return v.trim() || null;
    }
  };
  return {
    city: decode(req.headers.get("x-vercel-ip-city")),
    region: decode(req.headers.get("x-vercel-ip-country-region")),
    country: decode(req.headers.get("x-vercel-ip-country")),
  };
}

function deviceFromUA(ua: string): string {
  const s = ua.toLowerCase();
  if (!s) return "Unknown";
  if (s.includes("bot") || s.includes("crawler") || s.includes("spider") || s.includes("headless")) return "Bot";
  if (s.includes("ipad") || s.includes("tablet")) return "Tablet";
  if (s.includes("mobi") || s.includes("iphone") || s.includes("android")) return "Mobile";
  return "Desktop";
}

export async function POST(req: NextRequest) {
  const cors = corsHeaders(req);
  // Beacons may arrive as text/plain (sendBeacon) or application/json.
  const raw = await req.text().catch(() => "");
  let body: Record<string, unknown> | null = null;
  try {
    body = JSON.parse(raw);
  } catch {
    body = null;
  }
  const site = String(body?.site ?? "").trim();
  const path = String(body?.path ?? "").trim().slice(0, 200);
  const referrer = String(body?.referrer ?? "").trim().slice(0, 500);

  if ((site !== "main" && site !== "ap") || !path.startsWith("/")) {
    return NextResponse.json({ error: "Bad beacon." }, { status: 400, headers: cors });
  }
  // Never count admin or API traffic.
  if (path.startsWith("/admin") || path.startsWith("/api")) {
    return new NextResponse(null, { status: 204, headers: cors });
  }

  const geo = geoFromHeaders(req);
  await db.pageView.create({
    data: {
      site,
      path,
      source: sourceFromReferrer(referrer),
      device: deviceFromUA(req.headers.get("user-agent") ?? ""),
      city: geo.city,
      region: geo.region,
      country: geo.country,
    },
  });
  return new NextResponse(null, { status: 204, headers: cors });
}
