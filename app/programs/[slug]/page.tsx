import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PROGRAMS } from '@/constants';
import ProgramLayout from '@/components/ProgramLayout';

export function generateStaticParams() {
  return PROGRAMS.map(p => ({ slug: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const program = PROGRAMS.find(p => p.id === slug);
  if (!program) return {};
  return {
    title: `${program.title} | Business Coaching Asheville & Carolinas`,
    description: `${program.subtitle} — ActionCOACH Business Growth Partners serves Asheville, Charlotte, Raleigh, and Greenville NC. ${program.description.slice(0, 110)}`,
  };
}

export default async function ProgramPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const program = PROGRAMS.find(p => p.id === slug);
  if (!program) notFound();

  const faqSchema = program.faqs ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: program.faqs.map(f => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  } : null;

  return (
    <>
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}
      <ProgramLayout program={program} />
    </>
  );
}
