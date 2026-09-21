import { notFound } from "next/navigation";
import { timedTestById } from "@/lib/timedTests";
import PaidGate from "@/components/PaidGate";
import TimedTestClient from "./TimedTestClient";

export const dynamic = "force-dynamic";

export default function TimedTestPage({ params }: { params: { testId: string } }) {
  const test = timedTestById(params.testId);
  if (!test) notFound();
  return (
    <PaidGate>
      <TimedTestClient test={test} />
    </PaidGate>
  );
}
