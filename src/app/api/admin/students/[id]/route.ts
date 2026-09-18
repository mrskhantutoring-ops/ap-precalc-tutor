import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { isAdminCookieValid } from "@/lib/auth";

export const dynamic = "force-dynamic";

function requireAdmin(req: NextRequest) {
  return isAdminCookieValid(req.headers.get("cookie"));
}

// PATCH /api/admin/students/[id] — { isPaid: boolean } toggles enrollment
export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  if (!requireAdmin(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const body = await req.json().catch(() => null);
  if (typeof body?.isPaid !== "boolean") {
    return NextResponse.json({ error: "isPaid (boolean) is required." }, { status: 400 });
  }
  const student = await db.user.update({
    where: { id: params.id },
    data: { isPaid: body.isPaid },
    select: { id: true, name: true, email: true, isPaid: true },
  }).catch(() => null);
  if (!student) return NextResponse.json({ error: "Student not found." }, { status: 404 });
  return NextResponse.json({ ok: true, student });
}

// DELETE /api/admin/students/[id] — remove a student account
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  if (!requireAdmin(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  await db.user.delete({ where: { id: params.id } }).catch(() => null);
  return NextResponse.json({ ok: true });
}
