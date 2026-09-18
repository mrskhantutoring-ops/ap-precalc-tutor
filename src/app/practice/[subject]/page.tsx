import { notFound } from "next/navigation";
import { subjectById } from "@/lib/site";
import PracticeClient from "./PracticeClient";
import PaidGate from "@/components/PaidGate";

export const dynamic = "force-dynamic";

export default function PracticeSubjectPage({ params }: { params: { subject: string } }) {
  const subject = subjectById(params.subject);
  if (!subject) notFound();
  return (
    <PaidGate>
      <PracticeClient subjectId={subject.id} subjectName={subject.name} domains={[...subject.domains]} />
    </PaidGate>
  );
}
