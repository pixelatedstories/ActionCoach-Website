
export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface InvestmentOption {
  name: string;
  price: string;
  period: string;
  description: string;
  bestFor: string;
  features?: string[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Program {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  cta: string;
  // Extended Fields for Deep-Dive Pages
  problem?: string[];
  isForYou?: string[];
  whatYoullGain?: string[];
  howItWorks?: string[];
  journeyIncludes?: string[];
  investmentOptions?: InvestmentOption[];
  faqs?: FAQ[];
  pricingNotes?: string;
  result?: string;
  testimonialVideos?: {
    videoId: string;
    title: string;
    clientName?: string;
  }[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  podcastEpisode?: string;
  youtubeId?: string;
  authorSlug?: string;
}

export interface Author {
  slug: string;
  name: string;
  role: string;
  company: string;
  bio: string;
  image: string;
  calendly?: string;
}

export interface LocationData {
  id: string;
  city: string;
  state: string;
  description: string;
  image: string;
  // Extended fields for rich location pages
  headline?: string;
  intro?: string;
  marketDetail?: string;
  whoWeWork?: string[];
  localChallenges?: { title: string; body: string }[];
  faqs?: FAQ[];
}

export interface Testimonial {
  quote: string;
  author: string;
  company?: string;
  location?: string;
}

export interface CaseStudyStat {
  value: string;
  label: string;
}

export interface CaseStudy {
  slug: string;
  business: string;
  industry: string;
  headline: string;
  summary: string;
  challenge: string[];
  emotionalStakes: string;
  coachingFocus: string[];
  results: CaseStudyStat[];
  differenceNow: string;
  quote: string;
  quoteAuthor: string;
  pdf: string;
  image: string;
  relatedPrograms: string[];
}
