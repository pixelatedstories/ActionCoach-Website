import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Articles | ActionCOACH Business Growth Partners',
  description: 'Business insights from ActionCOACH Business Growth Partners — practical guidance on systems, leadership, planning, and growth for business owners in the Carolinas.',
};

export default function ArticlesPage() {
  const posts = getAllPosts();

  return (
    <div className="pt-32 pb-24 bg-[#1C1C1C]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <Link href="/resources" className="text-gold text-xs font-black uppercase tracking-widest mb-12 inline-flex items-center group">
          <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span> Resources
        </Link>

        <div className="mb-16 border-t border-white/5 pt-12">
          <p className="text-gold font-black uppercase tracking-[0.2em] text-xs mb-4">Articles</p>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.95] mb-6">
            Business Insights
          </h1>
          <p className="text-xl text-white/60 max-w-2xl leading-relaxed">
            Practical guidance drawn from coaching conversations, podcast episodes, and client results.
          </p>
        </div>

        {posts.length === 0 ? (
          <p className="text-white/40 text-center py-24">Articles coming soon.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/resources/articles/${post.slug}`}
                className="bg-[#262626] border border-white/5 hover:border-gold/40 transition-all group flex flex-col"
              >
                <div className="p-8 flex-1">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gold">{post.category}</span>
                    <span className="text-white/20 text-xs">·</span>
                    <span className="text-[10px] text-white/40 font-bold uppercase tracking-wide">
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </span>
                  </div>
                  <h2 className="text-xl font-black uppercase tracking-tight leading-snug mb-4 group-hover:text-gold transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-white/60 leading-relaxed text-sm">{post.excerpt}</p>
                </div>
                <div className="px-8 pb-8">
                  <span className="text-xs font-black uppercase tracking-widest text-gold">Read Article →</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
