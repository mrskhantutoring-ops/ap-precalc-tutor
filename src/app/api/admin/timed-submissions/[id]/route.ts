import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { isAdminCookieValid } from "@/lib/auth";

export const dynamic = "force-dynamic";

function requireAdmin(req: NextRequest) {
  return isAdminCookieValid(req.headers.get("cookie"));
}

// DELETE /api/admin/timed-submissions/[id] — reset a student's timed test
// (deletes the submission so the test can be taken again)
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  if (!requireAdmin(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  await db.timedSubmission.delete({ where: { id: params.id } }).catch(() => null);
  return NextResponse.json({ ok: true });
}
