import type { Metadata } from 'next';
import Link from 'next/link';
import { CASE_STUDIES } from '@/case-studies';
import { FEATURED_VIDEOS } from '@/constants';

export const metadata: Metadata = {
  title: 'Client Stories | ActionCOACH Business Growth Partners',
  description: 'Read and watch ActionCOACH Business Growth Partners client stories with measurable results from real business owners across the Carolinas.',
};

const featuredStats = [
  { value: '5.4x', label: 'profit growth', detail: 'Pendry Enterprise' },
  { value: '55-60 to 15-20', label: 'owner hours per week', detail: "Alcorn's Custom Woodworking" },
  { value: '$800k to $200k', label: 'equipment debt', detail: 'Godspeed Tree Service' },
  { value: '18 to 32', label: 'team growth', detail: 'Riddle Tractor' },
];

export default function ClientStoriesPage() {
  const videos = FEATURED_VIDEOS.slice(0, 3);

  return (
    <div className="bg-[#1C1C1C] pt-32 pb-24">
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-4xl mb-16 border-t border-white/5 pt-12">
          <p className="text-gold font-black uppercase tracking-[0.2em] text-xs mb-4">Real business outcomes</p>
          <h1 className="text-5xl md:text-7xl font-black uppercase leading-[0.95] mb-8">Client Stories</h1>
          <p className="text-xl md:text-2xl text-white/75 font-medium leading-relaxed">
            See how ActionCOACH Business Growth Partners helps owners build stronger teams, cleaner numbers, better systems, and businesses that can grow with less dependence on the owner.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {featuredStats.map((stat) => (
            <div key={stat.detail} className="bg-gold text-black p-6">
              <p className="text-3xl font-black uppercase leading-none mb-3">{stat.value}</p>
              <p className="font-black uppercase tracking-tight mb-2">{stat.label}</p>
              <p className="text-xs font-bold uppercase tracking-widest opacity-70">{stat.detail}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {CASE_STUDIES.map((study) => (
            <article key={study.slug} className="bg-[#262626] border border-white/5 hover:border-gold/40 transition-colors overflow-hidden">
              <Link href={`/client-stories/${study.slug}`} className="block aspect-[16/9] bg-black overflow-hidden">
                <img src={study.image} alt={`${study.business} case study`} className="h-full w-full object-cover object-top opacity-90 hover:scale-105 transition-transform duration-500" />
              </Link>
              <div className="p-8 md:p-10">
                <p className="text-gold font-black uppercase tracking-[0.2em] text-xs mb-3">{study.industry}</p>
                <h2 className="text-2xl md:text-3xl font-black uppercase leading-tight mb-4">{study.business}</h2>
                <p className="text-white/70 leading-relaxed mb-6">{study.headline}</p>
                <div className="grid sm:grid-cols-3 gap-3 mb-8">
                  {study.results.slice(0, 3).map((result) => (
                    <div key={`${study.slug}-${result.label}`} className="border border-white/10 p-4">
                      <p className="text-gold text-2xl font-black leading-none mb-2">{result.value}</p>
                      <p className="text-white/60 text-xs font-bold uppercase tracking-widest leading-snug">{result.label}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href={`/client-stories/${study.slug}`} className="inline-flex justify-center bg-gold text-black px-6 py-4 text-xs font-black uppercase tracking-widest hover:bg-white transition-all">
                    Read Story
                  </Link>
                  <a href={study.pdf} className="inline-flex justify-center border border-white/20 text-white px-6 py-4 text-xs font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                    Download PDF
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {videos.length > 0 && (
          <section className="mt-24 border-t border-white/5 pt-16">
            <div className="mb-10">
              <p className="text-gold font-black uppercase tracking-[0.2em] text-xs mb-4">Video stories</p>
              <h2 className="text-3xl md:text-5xl font-black uppercase leading-tight">Owners in their own words</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {videos.map((video, i) => (
                <div key={i} className="bg-[#262626] border border-white/5">
                  <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                    <iframe
                      src={`https://www.youtube.com/embed/${video.videoId}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>
                  <p className="px-6 py-4 text-sm font-black uppercase tracking-tight text-white/80 border-t border-white/5 leading-snug">
                    {video.title}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}
      </section>
    </div>
  );
}
