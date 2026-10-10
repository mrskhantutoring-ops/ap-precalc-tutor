import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";
import { isAdminCookieValid } from "@/lib/auth";

export const dynamic = "force-dynamic";

function requireAdmin(req: NextRequest) {
  return isAdminCookieValid(req.headers.get("cookie"));
}

// PATCH /api/admin/students/[id] — { isPaid: boolean } toggles enrollment;
// { password: string } sets a new password (and signs the student out everywhere)
export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  if (!requireAdmin(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const body = await req.json().catch(() => null);
  if (typeof body?.password === "string") {
    if (body.password.length < 8) {
      return NextResponse.json({ error: "Password must be at least 8 characters." }, { status: 400 });
    }
    const passwordHash = await bcrypt.hash(body.password, 10);
    const student = await db.user.update({
      where: { id: params.id },
      data: { passwordHash },
      select: { id: true, name: true, email: true, isPaid: true },
    }).catch(() => null);
    if (!student) return NextResponse.json({ error: "Student not found." }, { status: 404 });
    await db.session.deleteMany({ where: { userId: params.id } });
    return NextResponse.json({ ok: true, student, passwordReset: true });
  }
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
