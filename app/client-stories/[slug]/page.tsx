import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CASE_STUDIES, getCaseStudyBySlug } from '@/case-studies';

export function generateStaticParams() {
  return CASE_STUDIES.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) return {};

  return {
    title: `${study.business} Client Story`,
    description: `${study.business} worked with ActionCOACH Business Growth Partners. ${study.headline}`,
  };
}

export default async function ClientStoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) notFound();

  return (
    <div className="bg-[#1C1C1C] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <Link href="/client-stories" className="text-gold text-xs font-black uppercase tracking-widest mb-12 inline-flex items-center group">
          <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span> Back to Client Stories
        </Link>

        <section className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          <div>
            <p className="text-gold font-black uppercase tracking-[0.2em] text-xs mb-4">{study.industry}</p>
            <h1 className="text-4xl md:text-6xl font-black uppercase leading-[0.95] mb-8">{study.business}</h1>
            <p className="text-xl md:text-2xl text-white/75 font-medium leading-relaxed mb-8">{study.headline}</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href={study.pdf} className="inline-flex justify-center bg-gold text-black px-6 py-4 text-xs font-black uppercase tracking-widest hover:bg-white transition-all">
                Download PDF
              </a>
              <Link href="/book" className="inline-flex justify-center border border-white/20 text-white px-6 py-4 text-xs font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                Book a Session
              </Link>
            </div>
          </div>
          <div className="bg-black border border-white/5 overflow-hidden">
            <img src={study.image} alt={`${study.business} case study preview`} className="w-full h-full object-cover object-top" />
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-4 mb-20">
          {study.results.map((result) => (
            <div key={result.label} className="bg-gold text-black p-8">
              <p className="text-4xl font-black uppercase leading-none mb-3">{result.value}</p>
              <p className="font-black uppercase tracking-tight">{result.label}</p>
            </div>
          ))}
        </section>

        <section className="grid lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 space-y-16">
            <div>
              <p className="text-gold font-black uppercase tracking-[0.2em] text-xs mb-4">The challenge</p>
              <h2 className="text-3xl md:text-4xl font-black uppercase mb-6">What was getting in the way</h2>
              <p className="text-white/70 text-lg leading-relaxed mb-8">{study.summary}</p>
              <div className="space-y-4">
                {study.challenge.map((item) => (
                  <div key={item} className="flex gap-4 bg-white/5 border-l-4 border-gold p-5">
                    <span className="text-gold font-black">•</span>
                    <p className="text-white/85 font-bold leading-snug">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-gold font-black uppercase tracking-[0.2em] text-xs mb-4">The stakes</p>
              <h2 className="text-3xl md:text-4xl font-black uppercase mb-6">How the business felt</h2>
              <p className="text-white/75 text-lg leading-relaxed">{study.emotionalStakes}</p>
            </div>

            <div>
              <p className="text-gold font-black uppercase tracking-[0.2em] text-xs mb-4">The coaching work</p>
              <h2 className="text-3xl md:text-4xl font-black uppercase mb-6">What changed inside the business</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {study.coachingFocus.map((item) => (
                  <div key={item} className="bg-[#262626] border border-white/5 p-6">
                    <p className="text-white/80 font-bold leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-gold font-black uppercase tracking-[0.2em] text-xs mb-4">Different now</p>
              <h2 className="text-3xl md:text-4xl font-black uppercase mb-6">What the owner can do now</h2>
              <p className="text-white/75 text-lg leading-relaxed">{study.differenceNow}</p>
            </div>
          </div>

          <aside className="lg:sticky lg:top-32 space-y-6">
            <div className="bg-white text-black p-8">
              <p className="text-gold font-black uppercase tracking-[0.2em] text-xs mb-4">Client words</p>
              <p className="text-2xl font-black leading-tight mb-6">&ldquo;{study.quote}&rdquo;</p>
              <p className="font-black uppercase tracking-widest text-xs text-black/50">{study.quoteAuthor}</p>
            </div>
            <div className="bg-[#262626] border border-white/10 p-8">
              <p className="text-gold font-black uppercase tracking-[0.2em] text-xs mb-4">Source PDF</p>
              <p className="text-white/70 leading-relaxed mb-6">
                View the original one-page case study with the client photos, questions, and outcomes.
              </p>
              <a href={study.pdf} className="block text-center bg-gold text-black px-6 py-4 text-xs font-black uppercase tracking-widest hover:bg-white transition-all">
                Download PDF
              </a>
            </div>
          </aside>
        </section>

        <section className="mt-24 bg-gold text-black p-10 md:p-16 text-center">
          <h2 className="text-3xl md:text-5xl font-black uppercase leading-tight mb-6">Want results like this?</h2>
          <p className="text-lg md:text-xl font-bold opacity-80 max-w-3xl mx-auto mb-10">
            Start with a conversation about where the business is stuck, what needs structure, and what path gives you the fastest practical win.
          </p>
          <Link href="/book" className="inline-flex justify-center bg-black text-white px-8 py-5 text-sm font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">
            Book a Session
          </Link>
        </section>
      </div>
    </div>
  );
}
