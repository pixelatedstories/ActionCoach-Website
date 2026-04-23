import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getAllPosts, getPostBySlug } from '@/lib/blog';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const result = getPostBySlug(slug);
  if (!result) return {};
  return {
    title: `${result.post.title} | ActionCOACH Business Growth Partners`,
    description: result.post.excerpt,
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const result = getPostBySlug(slug);
  if (!result) notFound();

  const { post, content } = result;

  return (
    <div className="pt-32 pb-24 bg-[#1C1C1C]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <Link href="/resources/articles" className="text-gold text-xs font-black uppercase tracking-widest mb-12 inline-flex items-center group">
          <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span> All Articles
        </Link>

        <div className="max-w-3xl border-t border-white/5 pt-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gold">{post.category}</span>
            <span className="text-white/20 text-xs">·</span>
            <span className="text-[10px] text-white/40 font-bold uppercase tracking-wide">
              {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.95] mb-8">
            {post.title}
          </h1>
          <p className="text-xl text-white/60 leading-relaxed mb-12 border-b border-white/5 pb-12">
            {post.excerpt}
          </p>

          {post.youtubeId && (
            <div className="mb-12">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src={`https://www.youtube.com/embed/${post.youtubeId}`}
                  title={post.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>
          )}

          <div className="prose prose-invert prose-lg max-w-none
            prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tight
            prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
            prose-p:text-white/70 prose-p:leading-relaxed
            prose-strong:text-white prose-em:text-white/80
          ">
            <MDXRemote source={content} />
          </div>

          {post.podcastEpisode && (
            <div className="mt-16 p-8 bg-[#262626] border border-white/5">
              <p className="text-gold font-black uppercase tracking-[0.2em] text-xs mb-3">Listen to the Episode</p>
              <a
                href={post.podcastEpisode}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-2 border-gold text-gold px-6 py-3 text-xs font-black uppercase tracking-widest hover:bg-gold hover:text-black transition-all"
              >
                Open on Spotify →
              </a>
            </div>
          )}
        </div>

        <div className="mt-24 p-12 bg-white text-black text-center max-w-3xl">
          <h2 className="text-3xl font-black uppercase mb-4 leading-tight">Ready to build a business that works without you?</h2>
          <Link href="/book" className="inline-block bg-black text-white px-10 py-5 text-sm font-black uppercase tracking-widest hover:bg-[#FFD100] hover:text-black transition-all shadow-xl">
            Book a Free Session
          </Link>
        </div>
      </div>
    </div>
  );
}
