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
    title: program.title,
    description: `${program.subtitle} — ${program.description.slice(0, 140)}...`,
  };
}

export default async function ProgramPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const program = PROGRAMS.find(p => p.id === slug);
  if (!program) notFound();
  return <ProgramLayout program={program} />;
}
