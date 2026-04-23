import type { Metadata } from 'next';
import Link from 'next/link';
import { PODCAST_EPISODES } from '@/constants';

export const metadata: Metadata = {
  title: 'Epic Entrepreneurs Podcast | ActionCOACH Business Growth Partners',
  description: 'Epic Entrepreneurs — real conversations with business owners on building companies that run without them. Hosted by Bill Gilliland. Available on Spotify and Apple Podcasts.',
};

export default function PodcastPage() {
  const [latest, ...previous] = PODCAST_EPISODES;

  return (
    <div className="pt-32 pb-24 bg-[#1C1C1C]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <Link href="/resources" className="text-gold text-xs font-black uppercase tracking-widest mb-12 inline-flex items-center group">
          <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span> Resources
        </Link>

        {/* Show header + latest episode */}
        <div className="grid lg:grid-cols-2 gap-16 items-start border-t border-white/5 pt-12">
          <div>
            <p className="text-gold font-black uppercase tracking-[0.2em] text-xs mb-4">Podcast</p>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.95] mb-8">
              Epic<br />Entrepreneurs
            </h1>
            <p className="text-xl text-white/60 leading-relaxed mb-8">
              Real conversations with business owners on building a company that runs without them. Hosted by Bill Gilliland — award-winning business coach and five-time business owner.
            </p>
            <p className="text-white/50 leading-relaxed mb-12">
              Each episode covers the decisions, systems, and mindset shifts that separate owners who are trapped inside their business from the ones who lead it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://open.spotify.com/show/4pZSVpWbkeusqb1VwhnRAo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#1DB954] text-black px-8 py-4 text-xs font-black uppercase tracking-widest hover:opacity-90 transition-all"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
                All Episodes on Spotify
              </a>
              <a
                href="https://podcasts.apple.com/us/podcast/epic-entrepreneurs/id1738098093"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 border-2 border-white text-white px-8 py-4 text-xs font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.003 0C5.373 0 0 5.373 0 12.003 0 18.63 5.372 24 12.003 24 18.63 24 24 18.63 24 12.003 24 5.373 18.63 0 12.003 0zm0 4.371a7.633 7.633 0 110 15.266 7.633 7.633 0 010-15.266zm0 2.54a5.09 5.09 0 100 10.183 5.09 5.09 0 000-10.183zm0 2.036a3.054 3.054 0 110 6.109 3.054 3.054 0 010-6.109zm0 1.526a1.528 1.528 0 100 3.056 1.528 1.528 0 000-3.056z"/>
                </svg>
                Listen on Apple
              </a>
            </div>
          </div>

          <div className="bg-[#262626] border border-white/5 overflow-hidden">
            {latest?.spotifyEpisodeId ? (
              <iframe
                src={`https://open.spotify.com/embed/episode/${latest.spotifyEpisodeId}?utm_source=generator&theme=0`}
                width="100%"
                height="232"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title={latest.title}
              />
            ) : (
              <iframe
                src="https://open.spotify.com/embed/show/4pZSVpWbkeusqb1VwhnRAo?utm_source=generator&theme=0"
                width="100%"
                height="352"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Epic Entrepreneurs Podcast"
              />
            )}
          </div>
        </div>

        {/* Previous episodes */}
        {previous.length > 0 && (
          <div className="mt-16 border-t border-white/5 pt-16">
            <p className="text-gold font-black uppercase tracking-[0.2em] text-xs mb-8">Previous Episodes</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {previous.map((ep, i) => (
                <a
                  key={i}
                  href={ep.spotifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#262626] border border-white/5 hover:border-gold/40 transition-colors p-6 group flex flex-col"
                >
                  {ep.spotifyEpisodeId ? (
                    <iframe
                      src={`https://open.spotify.com/embed/episode/${ep.spotifyEpisodeId}?utm_source=generator&theme=0`}
                      width="100%"
                      height="152"
                      frameBorder="0"
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      loading="lazy"
                      title={ep.title}
                      className="mb-4"
                      onClick={(e) => e.stopPropagation()}
                    />
                  ) : null}
                  <p className="text-[10px] font-black uppercase tracking-[0.15em] text-white/40 mb-2">
                    {new Date(ep.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </p>
                  <p className="text-sm font-black uppercase tracking-tight text-white/90 leading-snug mb-2 group-hover:text-gold transition-colors">
                    {ep.title}
                  </p>
                  {ep.description && (
                    <p className="text-xs text-white/50 leading-relaxed mt-auto pt-3">{ep.description}</p>
                  )}
                </a>
              ))}
            </div>
          </div>
        )}

        <div className="mt-24 p-12 bg-white text-black text-center">
          <h2 className="text-3xl font-black uppercase mb-4 leading-tight">Ready to work with a coach?</h2>
          <Link href="/book" className="inline-block bg-black text-white px-10 py-5 text-sm font-black uppercase tracking-widest hover:bg-[#FFD100] hover:text-black transition-all shadow-xl">
            Book a Free Session
          </Link>
        </div>
      </div>
    </div>
  );
}
