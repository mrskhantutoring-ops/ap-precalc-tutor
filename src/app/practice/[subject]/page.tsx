import { notFound } from "next/navigation";
import { subjectById, sectionsByUnit } from "@/lib/site";
import PracticeClient from "./PracticeClient";
import PaidGate from "@/components/PaidGate";

export const dynamic = "force-dynamic";

export default function PracticeSubjectPage({
  params,
  searchParams,
}: {
  params: { subject: string };
  searchParams?: { section?: string };
}) {
  const subject = subjectById(params.subject);
  if (!subject) notFound();
  const sections = sectionsByUnit(subject.id).map((s) => ({ id: s.id, title: s.title }));
  const initialSection = searchParams?.section && sections.some((s) => s.id === searchParams.section)
    ? searchParams.section
    : undefined;
  return (
    <PaidGate>
      <PracticeClient
        subjectId={subject.id}
        subjectName={subject.name}
        sections={sections}
        initialSection={initialSection}
      />
    </PaidGate>
  );
}
