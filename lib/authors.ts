import { Author } from '@/types';

const authors: Author[] = [
  {
    slug: 'jason-berry',
    name: 'Jason Berry',
    role: 'Coach & Trainer',
    company: 'ActionCOACH Business Growth Partners',
    bio: 'Jason Berry coaches trades and home service business owners across North and South Carolina. He works with owners on time, team, and money — helping them build a business that runs at a higher level and produces the life they\'re working toward.',
    image: '/images/actioncoach-growth-business-partners-jason-berry-business-coach.jpeg',
    calendly: 'https://calendly.com/coachjasonberry/growth',
  },
  {
    slug: 'bill-gilliland',
    name: 'Bill Gilliland',
    role: 'Founder & Head Coach',
    company: 'ActionCOACH Business Growth Partners',
    bio: 'Bill Gilliland has spent decades coaching business owners across the Carolinas. He founded ActionCOACH Business Growth Partners to help trades and home service owners build businesses that run without them — and lives that reflect what they actually built it for.',
    image: '/images/Bill-Gilliland.jpg',
  },
];

export function getAuthorBySlug(slug: string): Author | null {
  return authors.find(a => a.slug === slug) ?? null;
}

export function getAllAuthors(): Author[] {
  return authors;
}
