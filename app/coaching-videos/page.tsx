import type { Metadata } from 'next';
import Link from 'next/link';
import { FEATURED_VIDEOS } from '@/constants';

export const metadata: Metadata = {
  title: 'Business Coaching Videos | ActionCOACH Business Growth Partners',
  description: 'Watch free business coaching videos from Coach Bill Gilliland — covering hiring, time management, team building, and how to grow a business that runs without you.',
};

export default function CoachingVideosPage() {
  const featured = FEATURED_VIDEOS.slice(0, 3);
  const remaining = FEATURED_VIDEOS.slice(3, 9);

  return (
    <div className="pt-32 pb-24 bg-[#1C1C1C]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-16 border-t border-white/5 pt-12">
          <p className="text-gold font-black uppercase tracking-[0.2em] text-xs mb-4">Coaching Videos</p>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.95] mb-6">
            Learn From<br />Coach Bill.
          </h1>
          <p className="text-xl text-white/60 max-w-2xl leading-relaxed">
            Short, practical videos on hiring, team building, time management, and running a business that doesn&apos;t depend on you.
          </p>
        </div>

        {/* Featured — large */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featured.map((video, i) => (
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

        {/* More videos — smaller */}
        {remaining.length > 0 && (
          <>
            <div className="border-t border-white/5 pt-12 mb-8">
              <p className="text-gold font-black uppercase tracking-[0.2em] text-xs">More Videos</p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {remaining.map((video, i) => (
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
                  <p className="px-4 py-3 text-xs font-black uppercase tracking-tight text-white/70 border-t border-white/5 leading-snug">
                    {video.title}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}

        <div className="mt-24 p-12 bg-white text-black text-center">
          <h2 className="text-3xl font-black uppercase mb-4 leading-tight">Want coaching like this for your business?</h2>
          <Link href="/book" className="inline-block bg-black text-white px-10 py-5 text-sm font-black uppercase tracking-widest hover:bg-[#FFD100] hover:text-black transition-all shadow-xl">
            Book a Free Session
          </Link>
        </div>
      </div>
    </div>
  );
}
