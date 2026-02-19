import { useEffect } from 'react';

const SITE_URL = 'https://billgilliland.biz';
const SITE_NAME = 'ActionCOACH Business Growth Partners';

interface SEOProps {
  title: string;
  description: string;
  canonical: string;
  ogType?: 'website' | 'article';
}

function setMeta(attrKey: string, attrVal: string, content: string): void {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attrKey}="${attrVal}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attrKey, attrVal);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonical(href: string): void {
  let el = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

const SEO: React.FC<SEOProps> = ({ title, description, canonical, ogType = 'website' }) => {
  useEffect(() => {
    const fullUrl = `${SITE_URL}${canonical}`;

    document.title = title;

    setMeta('name', 'description', description);

    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', fullUrl);
    setMeta('property', 'og:type', ogType);
    setMeta('property', 'og:site_name', SITE_NAME);

    setCanonical(fullUrl);
  }, [title, description, canonical, ogType]);

  return null;
};

export default SEO;
