
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

export interface LocationData {
  id: string;
  city: string;
  state: string;
  description: string;
  image: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  company?: string;
  location?: string;
}
