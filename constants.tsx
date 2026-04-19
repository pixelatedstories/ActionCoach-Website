
import { Program, LocationData, TeamMember, Testimonial } from './types';

export const COLORS = {
  GOLD: '#FFD100',
  CHARCOAL: '#1C1C1C',
  WHITE: '#FFFFFF',
};

export const CONTACT = {
  NAME: 'Bill Gilliland',
  BUSINESS: 'ActionCOACH Business Growth Partners',
  ADDRESS: 'P. O. Box 238, Montreat, NC 28757',
  PHONE: '(828) 348-1787',
  CALENDLY: 'https://calendly.com/billgilliland/15min',
  WEBSITE: 'billgilliland.biz',
};

export const TEAM: TeamMember[] = [
  {
    name: 'Bill Gilliland',
    role: 'Master Coach & Owner',
    bio: 'Bill Gilliland is an award-winning business coach and five-time business owner. Globally ranked within ActionCOACH, he has spent decades helping entrepreneurs in the Carolinas build businesses that work without them. His straight-talk style and deep expertise in the ActionCOACH Business Operating System (ABoS) have helped hundreds of owners achieve real freedom.',
    image: '/images/Bill-Gilliland.jpg'
  },
  {
    name: 'Jason Berry',
    role: 'Business Coach',
    bio: 'Jason brings 25 years of small business experience to every coaching session. He specializes in management systems, team alignment, and operational execution — helping business owners bridge the gap between where they are and where they want to be.',
    image: '/images/actioncoach-growth-business-partners-jason-berry-business-coach.jpeg'
  },
  {
    name: 'Cyndi Madden',
    role: 'Executive Administrative Assistant',
    bio: 'Cyndi brings over 30 years of experience in keeping offices organized, efficient, and running smoothly. She has supported both medical practices and educational institutions in Development, Alumni, and Admissions — and now she keeps Bill Gilliland and our whole team on track! Cyndi and her husband, John, moved to Western North Carolina 20 years ago with their two daughters. These days, as happy empty nesters, they love traveling to Disney World, visiting family across the country, and spending as much time as possible at the beach (Cyndi proudly calls herself a beach bum!). Big sports fans, Cyndi and John cheer for football, fútbol, and are especially devoted fans of University of Dayton Men\'s Basketball — Go Flyers!',
    image: '/images/cyndimadden-headshot.jpg'
  },
  {
    name: 'Clifford McCrea',
    role: 'Entrepreneur Talent Scout',
    bio: 'Clifford McCrea is an operations and business leader with nearly a decade of experience supporting performance, scalability, and operational clarity across regulated financial services, mortgage technology, and business operations environments. He has built and enforced standard operating procedures, managed complex workflows, developed KPI and SLA reporting, and partnered with executive leadership. Clifford is known for creating structure in fast-moving or growing organizations by improving cross-functional communication, aligning teams, and driving accountability without needing formal authority. In addition to his operational leadership work, Clifford has a lifelong passion for music. As a multi-instrumental musician, he can play nearly any brass instrument and enjoys performing, creating, and exploring music as a creative outlet.',
    image: '/images/cliff-mccrea-headshot.png'
  },
  {
    name: 'Jason De Los Santos',
    role: 'Marketing & Systems',
    bio: 'Jason brings a unique blend of creative and strategic expertise to ActionCOACH Asheville & Carolinas. As the founder of Pixelated Stories, Jason specializes in helping small and medium-sized businesses transform their online presence into powerful sales engines. With a focus on long-term digital solutions — including website development, SEO, CRO, email marketing, and CRM automation — Jason ensures that ActionCOACH\'s marketing systems are efficient and effective. He is passionate about empowering local businesses and understands the challenges they face, especially those overwhelmed by technology. Jason lives in Asheville, NC, with his wife and two kids.',
    image: '/images/ason De Los Santos - Marketing and Systems Expert.jpg'
  }
];

export const LOCATIONS: LocationData[] = [
  {
    id: 'asheville-nc',
    city: 'Asheville',
    state: 'NC',
    description: 'Asheville business owners benefit from a vibrant local economy and a strong community spirit.',
    image: '/images/Asheville-Business-Summit-6-Large.jpeg'
  },
  {
    id: 'charlotte-nc',
    city: 'Charlotte',
    state: 'NC',
    description: 'The business capital of the Carolinas, Charlotte offers massive opportunities for scaled growth.',
    image: '/images/actioncoach-growth-business-partners-networking-event-group.jpeg'
  },
  {
    id: 'raleigh-nc',
    city: 'Raleigh',
    state: 'NC',
    description: "Raleigh's tech and service sectors are booming, making it an ideal place for systematic expansion.",
    image: '/images/actioncoach-growth-business-partners-business-summit-speaker.jpeg'
  },
  {
    id: 'greenville-sc',
    city: 'Greenville',
    state: 'SC',
    description: 'Greenville is one of the fastest-growing cities in the Southeast, perfect for ambitious entrepreneurs.',
    image: '/images/actioncoach-growth-business-partners-networking-event-group.jpeg'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "ActionCOACH has been a game-changer. The support, accountability, and clear strategies have helped me gain focus, confidence, and real growth. Highly recommend for anyone serious about leveling up their business.",
    author: "Alina Moiseyev",
    company: ""
  },
  {
    quote: "Bill helps me define the future of my company and find a path to get there. His subtle questions and gentle nudgings were paramount in getting me there.",
    author: "Mona Wade",
    company: ""
  },
  {
    quote: "Bill takes complicated issues and breaks them into smaller understandable steps. He brings clarity. He knows how to get you to peak performance.",
    author: "Sandra Grace",
    company: ""
  },
  {
    quote: "Bill tells it to you straight. His goal is really to help you grow your business. Highly recommend Bill as a Coach.",
    author: "Andrea Robel",
    company: ""
  },
  {
    quote: "Whether you're a business owner, an aspiring entrepreneur, or simply want a guided opportunity to approach life with more organization and intention, ActionCOACH is a fabulous resource.",
    author: "Miranda Michaels",
    company: ""
  },
  {
    quote: "Bill provided valuable guidance as I reorganized my businesses and helped me make a plan to move into profitability. I highly recommend him.",
    author: "Sam Nace",
    company: ""
  },
  {
    quote: "I have worked with Bill and the ActionCoach team since 2018 and it has been hands down the best decision for my business.",
    author: "Christopher Harrin",
    company: ""
  },
  {
    quote: "Very inspiring sessions with Bill. He makes it interesting, fun, and extremely valuable all in one. Highly recommend you look into a session or three.",
    author: "Sue Pregartner",
    company: ""
  }
];

export const PROGRAMS: Program[] = [
  {
    id: 'business-unlimited',
    title: 'Business Unlimited',
    subtitle: 'Full-Scale Business Transformation',
    description: 'Business Unlimited is a 12 to 24 month enterprise-level partnership designed to rebuild your business into a scalable, self-sustaining company.',
    features: ['Company-Wide Growth Strategy', 'Leadership Capability Across the Team', 'Revenue Systems That Drive Predictable Growth', 'Execution Rhythms That Make Results Happen'],
    cta: 'Talk About Business Unlimited',
    isForYou: [
      'You are already successful, but you know there is another level.',
      'You want to remove yourself from daily operations.',
      'You need leadership, systems, and execution across the entire business.',
      'You are ready to turn growth into structure.',
    ],
    whatYoullGain: [
      'A clear company-wide growth strategy.',
      'Leadership capability across your team.',
      'Revenue systems that drive predictable growth.',
      'Execution rhythms that keep work moving.',
      'A business that feels like an asset, not a job.',
    ],
    journeyIncludes: [
      'Strategic planning tied to the company vision',
      'Leadership development for owners and managers',
      'Systems for marketing, sales, and delivery',
      'Execution support that keeps the plan moving',
    ],
    investmentOptions: [
      {
        name: 'Enterprise Engagement',
        price: '$120,000+',
        period: 'annual engagement',
        description: 'Customized based on company size, complexity, and growth objectives.',
        bestFor: 'Owners ready for full transformation',
        features: ['12 to 24 month partnership', 'Company-wide strategy', 'Leadership and execution support'],
      },
    ],
    faqs: [
      {
        question: 'Who is Business Unlimited for?',
        answer: 'Owners who are already successful, but know the business still depends on them too much.',
      },
      {
        question: 'What changes first?',
        answer: 'We start with structure, then leadership, then execution so the business can scale without chaos.',
      },
      {
        question: 'Why is the investment higher?',
        answer: 'This is an enterprise-level engagement that touches the full business, not a small coaching add-on.',
      },
    ],
  },
  {
    id: 'one-to-one-freedom',
    title: 'Private Coaching',
    subtitle: 'Your Strategic Growth Partner',
    description: 'Private Coaching is a one-on-one partnership focused on accelerating your growth, increasing profitability, and building a business that works without you.',
    features: ['Weekly or Bi-Weekly Coaching Sessions', '90-Day Execution Planning', 'KPI Tracking and Accountability', 'Strategy Across Time, Team, and Money'],
    cta: 'Book Private Coaching',
    isForYou: [
      'You are doing $1M+ and pushing for the next level.',
      'You want clarity, accountability, and strategic guidance.',
      'You are ready to be challenged and execute.',
      'You need a partner who helps you make better decisions faster.',
    ],
    whatYoullGain: [
      'Clear direction on what to do next.',
      'Faster decision-making.',
      'Increased profit and control.',
      'A business that scales without constant oversight.',
      'A coach who keeps the focus on execution.',
    ],
    journeyIncludes: [
      'Weekly or bi-weekly coaching sessions',
      '90-day execution planning',
      'KPI tracking and accountability',
      'Strategy across time, team, and money',
    ],
    investmentOptions: [
      {
        name: 'Private Coaching',
        price: '$2,500 - $3,500',
        period: 'per month',
        description: 'Ongoing one-on-one coaching for owners who want sharper execution and better growth.',
        bestFor: 'Owners ready for strategic accountability',
        features: ['1-on-1 partnership', 'Execution focus', 'Strategic guidance'],
      },
    ],
    faqs: [
      {
        question: 'Who is Private Coaching for?',
        answer: 'Owners doing at least $1M who want a higher level of strategic support and execution.',
      },
      {
        question: 'How often do sessions happen?',
        answer: 'Weekly or bi-weekly, depending on the needs of the business and the pace of execution.',
      },
      {
        question: 'What is the main outcome?',
        answer: 'Clearer decisions, better profit, and a business that does not need constant oversight.',
      },
    ],
  },
  {
    id: 'business-masterclass',
    title: 'ActionCLUB',
    subtitle: 'Structured Growth. Built-In Accountability.',
    description: 'ActionCLUB is a high-impact group coaching program designed to help you implement proven strategies alongside other driven business owners.',
    features: ['Time Management and Focus', 'Marketing and Sales', 'Profit and Cash Flow', 'Team and Leadership'],
    cta: 'Join ActionCLUB',
    isForYou: [
      'You want structure, clarity, and momentum.',
      'You are not ready for private coaching yet.',
      'You value accountability and community.',
    ],
    whatYoullGain: [
      'A stronger business foundation.',
      'Better decision-making.',
      'Immediate improvements in performance.',
      'Support while you implement.',
    ],
    journeyIncludes: [
      'Group coaching sessions with practical implementation',
      'Peer accountability and support',
      'Work on time, marketing, profit, and leadership',
      'Real execution, not theory',
    ],
    investmentOptions: [
      {
        name: 'ActionCLUB',
        price: '$1,500',
        period: 'for the full program',
        description: 'A fast-moving group format for owners who want momentum and support.',
        bestFor: 'Owners who want a strong start',
        features: ['Group coaching', 'Accountability', 'Implementation support'],
      },
    ],
    faqs: [
      {
        question: 'What makes ActionCLUB different?',
        answer: 'You implement as you go, with structure and accountability built in.',
      },
      {
        question: 'Is this private coaching?',
        answer: 'No. It is a group coaching format for owners who want a lower entry point and shared momentum.',
      },
    ],
  },
  {
    id: 'twelve-week-masterclasses',
    title: 'Business Operating System (ABoS)',
    subtitle: 'Turn Your Business Into a Machine',
    description: 'The ActionCOACH Business Operating System installs the systems your business needs to scale consistently.',
    features: ['Predictable Marketing and Lead Flow', 'Sales Systems That Convert', 'Operational Systems That Scale', 'A Team That Executes Without Constant Oversight'],
    cta: 'Install ABoS',
    isForYou: [
      'You feel stuck in the day-to-day.',
      'You struggle with inconsistent results.',
      'You know you need better systems and structure.',
    ],
    whatYoullGain: [
      'Consistency replaces chaos.',
      'Systems replace guesswork.',
      'Your business runs like a well-oiled machine.',
      'A clearer path to scale.',
    ],
    journeyIncludes: [
      'System mapping across the business',
      'Lead flow and sales process design',
      'Operational rhythm and accountability',
      'Team execution support',
    ],
    investmentOptions: [
      {
        name: 'ABoS Installation',
        price: '$10,000 - $25,000',
        period: 'depending on scope',
        description: 'Standalone system installation for owners who need structure without starting from scratch.',
        bestFor: 'Businesses that need stronger systems',
        features: ['Predictable systems', 'Operational structure', 'Execution support'],
      },
    ],
    faqs: [
      {
        question: 'What is ABoS?',
        answer: 'It is the ActionCOACH Business Operating System, the framework that helps the business scale consistently.',
      },
      {
        question: 'Can this be standalone?',
        answer: 'Yes. It can be installed as part of coaching or as a standalone engagement.',
      },
    ],
  },
  {
    id: 'planning-club',
    title: '90-Day Planning Experience',
    subtitle: 'Get Clear. Get Focused. Get Results.',
    description: 'In this interactive planning experience, you will build a clear, executable 90-day growth plan tied directly to your financial goals.',
    features: ['90-Day Action Plan', 'Revenue, Profit, and Cash Flow Projections', 'A System to Track and Adjust Performance', 'Clear Execution Priorities'],
    cta: 'Reserve Your Planning Spot',
    isForYou: [
      'You need clarity on what to do next.',
      'You want goals tied to execution.',
      'You are ready to act immediately.',
    ],
    whatYoullGain: [
      'A 90-day action plan.',
      'Revenue, profit, and cash flow projections.',
      'A system to track and adjust performance.',
      'A clear answer to what to do, when to do it, and how to measure success.',
    ],
    journeyIncludes: [
      'Goal setting tied to financial targets',
      'Priority mapping for the next quarter',
      'Execution tracking and adjustments',
      'A practical plan you can use right away',
    ],
    investmentOptions: [
      {
        name: 'Planning Experience',
        price: '$495 - $995',
        period: 'per workshop',
        description: 'A focused planning workshop for owners who want clarity now.',
        bestFor: 'Owners who want immediate direction',
        features: ['90-day planning', 'Financial clarity', 'Execution roadmap'],
      },
    ],
    faqs: [
      {
        question: 'What do I leave with?',
        answer: 'A clear 90-day plan with priorities, targets, and a way to track progress.',
      },
      {
        question: 'Who should start here?',
        answer: 'Owners who need clarity before they move into deeper coaching or larger-scale transformation.',
      },
    ],
  },
  {
    id: 'growth-club',
    title: 'Not Sure Where to Start?',
    subtitle: 'Start with Planning or ActionCLUB',
    description: 'Most clients do not start at the top. They grow into it. The fastest path is usually planning first, then a group program, then private coaching, then Business Unlimited.',
    features: ['Start with planning', 'Build momentum in group coaching', 'Move into private coaching', 'Scale into Business Unlimited'],
    cta: 'Book a Conversation',
    isForYou: [
      'You are not sure which program fits best.',
      'You want a clear path before you commit.',
      'You would rather talk it through first.',
    ],
    whatYoullGain: [
      'A clear recommendation.',
      'A path based on where the business is today.',
      'A next step that makes sense.',
    ],
  },
  {
    id: 'speaking',
    title: 'Speaking & Keynotes',
    subtitle: 'Inspire Your Audience to Action.',
    description: 'Bill Gilliland is a sought-after speaker for trade associations, chamber events, and corporate retreats. His high-energy presentations deliver actionable business strategies that audiences can apply immediately.',
    features: ['High-Energy Keynotes', 'Actionable Takeaways', 'Customized Content', 'Audience Engagement'],
    cta: 'Book Bill for Your Event',
    isForYou: [
      'Looking for a speaker who delivers more than just motivation?',
      'Need an expert to talk about business growth or leadership?',
      'Planning a conference for business owners in the Carolinas?'
    ],
    whatYoullGain: [
      'Authentic expertise on stage.',
      'Audience motivation that turns into action.',
      'Proven frameworks that work in any industry.'
    ],
    journeyIncludes: [
      'Association annual meetings',
      'Corporate leadership retreats',
      'Chamber of commerce events',
      'Industry trade shows',
      'Small business summits'
    ]
  }
];
