import { notFound } from "next/navigation";
import { timedTestById, isTestReleased } from "@/lib/timedTests";
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
  // Scheduled-release tests stay closed to students until their release time.
  if (!isTestReleased(test)) {
    const opens = new Date(test.availableAt!).toLocaleString("en-US", {
      timeZone: "America/Chicago",
      weekday: "long",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      timeZoneName: "short",
    });
    return (
      <PaidGate>
        <div style={{ maxWidth: 640, margin: "48px auto", padding: "0 20px", textAlign: "center" }}>
          <h1>{test.title}</h1>
          <p>This test isn&apos;t open yet. It opens on {opens}.</p>
        </div>
      </PaidGate>
    );
  }
  return (
    <PaidGate>
      <TimedTestClient test={test} />
    </PaidGate>
  );
}
