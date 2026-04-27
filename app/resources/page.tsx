import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Resources | ActionCOACH Business Growth Partners',
  description: 'Business insights, podcast episodes, and videos from ActionCOACH Business Growth Partners. Practical guidance for owners who want to build a business that runs without them.',
};

const sections = [
  {
    href: '/resources/articles',
    label: 'Articles',
    description: 'Written insights on systems, leadership, planning, and growth — drawn from real coaching conversations and client results.',
    cta: 'Read Articles',
  },
  {
    href: '/resources/podcast',
    label: 'Podcast',
    description: 'Epic Entrepreneurs — conversations with business owners on what it actually takes to build a business that works without you.',
    cta: 'Listen Now',
  },
  {
    href: '/resources/videos',
    label: 'Coaching Videos',
    description: 'Short videos with practical guidance for owners who want stronger systems, leadership, planning, and growth.',
    cta: 'Watch Videos',
  },
  {
    href: '/client-stories',
    label: 'Client Stories',
    description: 'Detailed case studies from business owners who used coaching to improve profit, team, systems, and freedom.',
    cta: 'See Results',
  },
];

export default function ResourcesPage() {
  return (
    <div className="pt-32 pb-24 bg-[#1C1C1C]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-16">
          <p className="text-gold font-black uppercase tracking-[0.2em] text-xs mb-4">Resources</p>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.95] mb-6 max-w-3xl">
            Build a Business That Works
          </h1>
          <p className="text-xl text-white/60 max-w-2xl leading-relaxed">
            Practical content for owners who are done spinning their wheels and ready to build something that runs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 border-t border-white/5 pt-16">
          {sections.map((s) => (
            <div key={s.href} className="bg-[#262626] border border-white/5 hover:border-gold/40 transition-colors flex flex-col">
              <div className="p-10 flex-1">
                <p className="text-gold font-black uppercase tracking-[0.2em] text-xs mb-4">{s.label}</p>
                <p className="text-white/70 leading-relaxed mb-8">{s.description}</p>
              </div>
              <div className="px-10 pb-10">
                <Link
                  href={s.href}
                  className="inline-block border-2 border-gold text-gold px-6 py-3 text-xs font-black uppercase tracking-widest hover:bg-gold hover:text-black transition-all"
                >
                  {s.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
