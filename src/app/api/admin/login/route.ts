import { NextRequest, NextResponse } from "next/server";
import { setAdminCookie } from "@/lib/auth";
import { clientIp, isThrottled, recordFailure, clearFailures } from "@/lib/throttle";

export const dynamic = "force-dynamic";

// POST /api/admin/login { token } — verifies ADMIN_TOKEN and sets an httpOnly cookie.
export async function POST(req: NextRequest) {
  const ipKey = `admin:${clientIp(req)}`;
  if (await isThrottled(ipKey)) {
    return NextResponse.json(
      { error: "Too many attempts. Please wait a few minutes and try again." },
      { status: 429 }
    );
  }
  const body = await req.json().catch(() => null);
  const token = String(body?.token ?? "");
  if (!process.env.ADMIN_TOKEN || token !== process.env.ADMIN_TOKEN) {
    await recordFailure(ipKey);
    return NextResponse.json({ error: "Invalid token." }, { status: 401 });
  }
  await clearFailures(ipKey);
  setAdminCookie(token);
  return NextResponse.json({ ok: true });
}
