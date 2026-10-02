import { notFound } from "next/navigation";
import { timedTestById } from "@/lib/timedTests";
import { isAdminFromHeaders } from "@/lib/auth";
import PaidGate from "@/components/PaidGate";
import TimedTestClient from "./TimedTestClient";

export const dynamic = "force-dynamic";

export default function TimedTestPage({ params }: { params: { testId: string } }) {
  const test = timedTestById(params.testId);
  if (!test) notFound();
  // Admins get a preview of the test interface (nothing is saved or submitted).
  if (isAdminFromHeaders()) {
    return <TimedTestClient test={test} preview />;
  }
  return (
    <PaidGate>
      <TimedTestClient test={test} />
    </PaidGate>
  );
}
