import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogPost } from '@/types';

const CONTENT_DIR = path.join(process.cwd(), 'content/blog');

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  const files = fs.readdirSync(CONTENT_DIR).filter(f => f.endsWith('.mdx'));
  const posts = files.map(filename => {
    const slug = filename.replace(/\.mdx$/, '');
    const raw = fs.readFileSync(path.join(CONTENT_DIR, filename), 'utf-8');
    const { data } = matter(raw);
    return {
      slug,
      title: data.title ?? '',
      excerpt: data.excerpt ?? '',
      date: data.date ?? '',
      category: data.category ?? 'General',
      podcastEpisode: data.podcastEpisode,
      youtubeId: data.youtubeId,
      authorSlug: data.author,
    } as BlogPost;
  });
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): { post: BlogPost; content: string } | null {
  const filepath = path.join(CONTENT_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filepath)) return null;
  const raw = fs.readFileSync(filepath, 'utf-8');
  const { data, content } = matter(raw);
  return {
    post: {
      slug,
      title: data.title ?? '',
      excerpt: data.excerpt ?? '',
      date: data.date ?? '',
      category: data.category ?? 'General',
      podcastEpisode: data.podcastEpisode,
      youtubeId: data.youtubeId,
      authorSlug: data.author,
    },
    content,
  };
}

export function getPostsByAuthor(authorSlug: string): BlogPost[] {
  return getAllPosts().filter(p => p.authorSlug === authorSlug);
}
