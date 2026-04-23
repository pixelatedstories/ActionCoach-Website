import type { Metadata } from 'next';
import Link from 'next/link';
import { FEATURED_VIDEOS } from '@/constants';

export const metadata: Metadata = {
  title: 'Client Stories | ActionCOACH Business Growth Partners',
  description: 'Watch real client testimonials from business owners who have worked with ActionCOACH Business Growth Partners. Hear how coaching helped them get out of the grind and build a business that works.',
};

export default function VideosPage() {
  return (
    <div className="pt-32 pb-24 bg-[#1C1C1C]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <Link href="/resources" className="text-gold text-xs font-black uppercase tracking-widest mb-12 inline-flex items-center group">
          <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span> Resources
        </Link>

        <div className="mb-16 border-t border-white/5 pt-12">
          <p className="text-gold font-black uppercase tracking-[0.2em] text-xs mb-4">Client Stories</p>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.95] mb-6">
            Real Owners.<br />Real Results.
          </h1>
          <p className="text-xl text-white/60 max-w-2xl leading-relaxed">
            Short videos from business owners who have been through the coaching process. Not testimonials written by a marketing team — their words, on camera.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_VIDEOS.map((video, i) => (
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

        <div className="mt-24 p-12 bg-white text-black text-center">
          <h2 className="text-3xl font-black uppercase mb-4 leading-tight">Ready to write your own story?</h2>
          <Link href="/book" className="inline-block bg-black text-white px-10 py-5 text-sm font-black uppercase tracking-widest hover:bg-[#FFD100] hover:text-black transition-all shadow-xl">
            Book a Free Session
          </Link>
        </div>
      </div>
    </div>
  );
}
