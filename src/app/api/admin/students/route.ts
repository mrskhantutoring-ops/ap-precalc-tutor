import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { isAdminCookieValid } from "@/lib/auth";

export const dynamic = "force-dynamic";

function requireAdmin(req: NextRequest) {
  return isAdminCookieValid(req.headers.get("cookie"));
}

// GET /api/admin/students — list all student accounts with enrollment status
export async function GET(req: NextRequest) {
  if (!requireAdmin(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const students = await db.user.findMany({
    orderBy: { createdAt: "desc" },
    select: {
      id: true, name: true, email: true, isPaid: true, createdAt: true,
      _count: { select: { attempts: true } },
    },
  });
  return NextResponse.json({ students });
}
