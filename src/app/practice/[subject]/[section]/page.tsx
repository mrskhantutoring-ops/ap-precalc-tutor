import { notFound } from "next/navigation";
import { subjectById, sectionsByUnit } from "@/lib/site";
import PaidGate from "@/components/PaidGate";
import SectionPracticeClient from "./SectionPracticeClient";

export const dynamic = "force-dynamic";

export default function SectionPracticePage({
  params,
}: {
  params: { subject: string; section: string };
}) {
  const subject = subjectById(params.subject);
  if (!subject) notFound();
  const sec = sectionsByUnit(subject.id).find((s) => s.id === params.section);
  if (!sec) notFound();
  return (
    <PaidGate>
      <SectionPracticeClient
        subjectId={subject.id}
        sectionId={sec.id}
        sectionTitle={sec.title}
      />
    </PaidGate>
  );
}
