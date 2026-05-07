import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getPostsByAuthor } from '@/lib/blog';
import { getAllAuthors, getAuthorBySlug } from '@/lib/authors';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllAuthors().map(a => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);
  if (!author) return {};
  return {
    title: `${author.name} | ActionCOACH Business Growth Partners`,
    description: author.bio,
  };
}

export default async function AuthorPage({ params }: Props) {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);
  if (!author) notFound();

  const posts = getPostsByAuthor(slug);

  return (
    <div className="pt-32 pb-24 bg-[#1C1C1C]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <Link href="/resources/articles" className="text-gold text-xs font-black uppercase tracking-widest mb-12 inline-flex items-center group">
          <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span> All Articles
        </Link>

        <div className="border-t border-white/5 pt-12 mb-16">
          <div className="flex gap-6 items-start max-w-2xl">
            <div className="relative w-20 h-20 shrink-0">
              <Image
                src={author.image}
                alt={author.name}
                fill
                className="object-cover grayscale"
              />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gold mb-2">Author</p>
              <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-[0.95] mb-2">
                {author.name}
              </h1>
              <p className="text-white/40 text-xs font-bold uppercase tracking-wide mb-4">
                {author.role} · {author.company}
              </p>
              <p className="text-white/60 leading-relaxed">{author.bio}</p>
              {author.calendly && (
                <a
                  href={author.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-5 text-xs font-black uppercase tracking-widest text-gold border border-gold/40 px-4 py-2 hover:bg-gold hover:text-black transition-all"
                >
                  Book a Call →
                </a>
              )}
            </div>
          </div>
        </div>

        {posts.length === 0 ? (
          <p className="text-white/40 py-12">No articles yet.</p>
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
