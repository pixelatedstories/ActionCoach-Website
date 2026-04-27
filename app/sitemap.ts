import { MetadataRoute } from 'next';
import { PROGRAMS, LOCATIONS } from '@/constants';
import { CASE_STUDIES } from '@/case-studies';
import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://billgilliland.biz';

function getArticleSlugs(): string[] {
  const dir = path.join(process.cwd(), 'content/blog');
  try {
    return fs.readdirSync(dir)
      .filter(f => f.endsWith('.mdx'))
      .map(f => f.replace(/\.mdx$/, ''));
  } catch {
    return [];
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const articleSlugs = getArticleSlugs();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, priority: 1.0, changeFrequency: 'weekly' },
    { url: `${BASE_URL}/about`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/programs`, priority: 0.9, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/pricing`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/contact`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/events`, priority: 0.7, changeFrequency: 'weekly' },
    { url: `${BASE_URL}/book`, priority: 0.9, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/client-stories`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/coaching-videos`, priority: 0.7, changeFrequency: 'weekly' },
    { url: `${BASE_URL}/resources`, priority: 0.6, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/resources/articles`, priority: 0.6, changeFrequency: 'weekly' },
    { url: `${BASE_URL}/resources/podcast`, priority: 0.6, changeFrequency: 'weekly' },
  ];

  const programRoutes: MetadataRoute.Sitemap = PROGRAMS
    .filter(p => !['growth-club'].includes(p.id))
    .map(p => ({
      url: `${BASE_URL}/programs/${p.id}`,
      priority: 0.8,
      changeFrequency: 'monthly' as const,
    }));

  const locationRoutes: MetadataRoute.Sitemap = LOCATIONS.map(l => ({
    url: `${BASE_URL}/locations/${l.id}`,
    priority: 0.8,
    changeFrequency: 'monthly' as const,
  }));

  const articleRoutes: MetadataRoute.Sitemap = articleSlugs.map(slug => ({
    url: `${BASE_URL}/resources/articles/${slug}`,
    priority: 0.5,
    changeFrequency: 'monthly' as const,
  }));

  const clientStoryRoutes: MetadataRoute.Sitemap = CASE_STUDIES.map(study => ({
    url: `${BASE_URL}/client-stories/${study.slug}`,
    priority: 0.6,
    changeFrequency: 'monthly' as const,
  }));

  return [...staticRoutes, ...programRoutes, ...locationRoutes, ...articleRoutes, ...clientStoryRoutes];
}
