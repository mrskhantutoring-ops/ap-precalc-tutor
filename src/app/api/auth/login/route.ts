import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";
import { createSession } from "@/lib/auth";
import { clientIp, isThrottled, recordFailure, clearFailures } from "@/lib/throttle";

export const dynamic = "force-dynamic";

// POST /api/auth/login { email, password }
export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const email = String(body?.email ?? "").trim().toLowerCase();
  const password = String(body?.password ?? "");

  const emailKey = `login:${email}`;
  const ipKey = `login-ip:${clientIp(req)}`;
  if ((await isThrottled(emailKey)) || (await isThrottled(ipKey))) {
    return NextResponse.json(
      { error: "Too many sign-in attempts. Please wait a few minutes and try again." },
      { status: 429 }
    );
  }

  const user = await db.user.findUnique({ where: { email } });
  if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
    await recordFailure(emailKey);
    await recordFailure(ipKey);
    return NextResponse.json({ error: "Invalid email or password." }, { status: 401 });
  }
  await clearFailures(emailKey);
  await createSession(user.id);
  return NextResponse.json({ ok: true, user: { id: user.id, name: user.name, email: user.email } });
}
