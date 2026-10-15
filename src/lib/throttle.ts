import { db } from "@/lib/db";

// Brute-force throttle for sign-in endpoints, backed by the LoginAttempt
// table. After MAX_FAILURES failed attempts for a key inside the window,
// further attempts are refused until old failures age out. Helpers fail
// open: a database hiccup must never lock every user out of signing in.

const WINDOW_MS = 15 * 60 * 1000;
const MAX_FAILURES = 10;

export function clientIp(req: Request): string {
  const fwd = req.headers.get("x-forwarded-for") ?? "";
  return fwd.split(",")[0].trim() || "unknown";
}

export async function isThrottled(key: string): Promise<boolean> {
  try {
    const since = new Date(Date.now() - WINDOW_MS);
    const count = await db.loginAttempt.count({
      where: { key, createdAt: { gte: since } },
    });
    return count >= MAX_FAILURES;
  } catch {
    return false;
  }
}

export async function recordFailure(key: string): Promise<void> {
  try {
    await db.loginAttempt.create({ data: { key } });
  } catch {
    // Throttling is best-effort; never break the sign-in flow over it.
  }
}

export async function clearFailures(key: string): Promise<void> {
  try {
    await db.loginAttempt.deleteMany({ where: { key } });
  } catch {
    // Best-effort, as above.
  }
}
