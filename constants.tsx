
import { Program, LocationData, TeamMember, Testimonial } from './types';

export const COLORS = {
  GOLD: '#F5C400',
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

// Fix: Added TEAM export for About.tsx
export const TEAM: TeamMember[] = [
  {
    name: 'Bill Gilliland',
    role: 'Master Coach & Owner',
    bio: 'Bill Gilliland is an award-winning business coach and entrepreneur. With decades of experience building and selling businesses, he now focuses on helping owners in the Carolinas achieve the freedom and profitability they deserve. As a Master Coach, Bill has helped hundreds of entrepreneurs reclaim their lives.',
    image: 'https://picsum.photos/id/64/800/800'
  },
  {
    name: 'Jason Berry',
    role: 'Business Coach',
    bio: 'Jason brings a wealth of operational expertise to the team. He specializes in management systems and team alignment, ensuring that growth is sustainable and scalable. His hands-on approach helps teams bridge the gap between strategy and execution.',
    image: 'https://picsum.photos/id/91/800/800'
  }
];

// Fix: Added LOCATIONS export for Navigation.tsx and LocationPage.tsx
export const LOCATIONS: LocationData[] = [
  {
    id: 'asheville-nc',
    city: 'Asheville',
    state: 'NC',
    description: 'Asheville business owners benefit from a vibrant local economy and a strong community spirit.',
    image: 'https://picsum.photos/id/122/1920/1080'
  },
  {
    id: 'charlotte-nc',
    city: 'Charlotte',
    state: 'NC',
    description: 'The business capital of the Carolinas, Charlotte offers massive opportunities for scaled growth.',
    image: 'https://picsum.photos/id/142/1920/1080'
  },
  {
    id: 'raleigh-nc',
    city: 'Raleigh',
    state: 'NC',
    description: 'Raleigh’s tech and service sectors are booming, making it an ideal place for systematic expansion.',
    image: 'https://picsum.photos/id/164/1920/1080'
  },
  {
    id: 'greenville-sc',
    city: 'Greenville',
    state: 'SC',
    description: 'Greenville is one of the fastest-growing cities in the Southeast, perfect for ambitious entrepreneurs.',
    image: 'https://picsum.photos/id/180/1920/1080'
  }
];

// Fix: Added TESTIMONIALS export for Home.tsx
export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Working with Bill transformed my business from a chaotic job into a profitable machine that runs without me. I finally have my weekends back.",
    author: "Sarah Jenkins",
    company: "Blue Ridge Services"
  },
  {
    quote: "The 12-week management program gave my team the skills they needed to lead effectively. Our productivity has doubled and morale is at an all-time high.",
    author: "Mark Thompson",
    company: "Apex Construction"
  },
  {
    quote: "Bill's strategic planning sessions are legendary. He has a way of cutting through the noise and finding the exact lever for growth.",
    author: "David Chen",
    company: "Innovate Carolinas"
  }
];

export const PROGRAMS: Program[] = [
  {
    id: 'one-to-one-freedom',
    title: 'One-to-One Coaching: The Freedom Program',
    subtitle: 'Deliver more freedom, control, and predictable profit.',
    description: 'Personalized coaching tailored to the individual business owner\'s needs and aspirations. Direct, intensive work with Bill Gilliland or Jason Berry to scale your business while reclaiming your life.',
    features: ['Direct access to Master Coaches', 'Custom strategic roadmap', 'Profit acceleration systems', 'Personal leadership development'],
    cta: 'Get Your Freedom Roadmap',
    isForYou: [
      "Highly personalized, laser-focused business guidance?",
      "Accelerated growth and faster breakthroughs?",
      "Expert help to overcome business plateaus and obstacles?",
      "Dedicated accountability to achieve your vision?",
      "To regain control and create true business freedom?",
      "Personalized strategies for your Asheville & Carolinas home service business?"
    ],
    whatYoullGain: [
      "Get Your Personalized Roadmap: Receive strategies tailored to your exact business and goals.",
      "Achieve Accelerated Growth: Experience faster progress with dedicated, expert focus.",
      "Break Through Plateaus: Overcome obstacles and unlock new levels of success.",
      "Gain Clarity & Direction: Define your vision and create a clear strategic path forward.",
      "Maximize Accountability: Stay focused and achieve your goals with dedicated support.",
      "Unlock Business Freedom: Build a business that gives you time, money, and true control."
    ],
    journeyIncludes: [
      "Personalized Coaching for you and one key team member",
      "Monthly Mastermind for collaborative learning",
      "30X Video Library Access (On-demand training)",
      "DISC & Motivators Assessments (4 included)",
      "Monthly 'Ask Us Anything' Sessions",
      "Owner’s Alignment Session",
      "Team Alignment Session",
      "Team 'Leverage' Game Night",
      "Quarterly Business Planning & Mastermind",
      "Community Builder Pass (12 Annual Passes)",
      "Annual Vendor Audits (Up to 8)",
      "1 x Ticket for BizX Americas Conference",
      "2 x Tickets for The Asheville Business Summit",
      "Book-A-Month Program (Owner & 1 Team Member)",
      "Recruiting Process Facilitation (Up to 4 Annually)",
      "Annual Subcontractor/Partner Audits (Up to 15)"
    ],
    investmentOptions: [
      {
        name: "Pay As You Profit",
        price: "$3,500",
        period: "per month",
        description: "Best for business owners who prefer a flexible, month-to-month arrangement while experiencing the full Freedom Program.",
        bestFor: "Flexible Monthly Growth",
        features: ["Month-to-Month commitment", "Full Freedom Program components"]
      },
      {
        name: "The EPIC Value Path",
        price: "$42,000",
        period: "per year",
        description: "Best for owners committed to a full year of transformation who want to maximize value with exclusive bonuses and significant savings.",
        bestFor: "Committed Transformation",
        features: [
          "12-Month Annual Agreement",
          "2 Tickets to the Annual EPIC Retreat",
          "2 VIP Tickets for The Asheville Business Summit ($3,100 Value)"
        ]
      }
    ],
    faqs: [
      {
        question: "What are the investment options for The Freedom Program?",
        answer: "We offer two simple options: a monthly 'Pay As You Profit' option at $3,500 per month (month-to-month), and an annual investment option at $42,000 per year, which includes bonus VIP tickets to events."
      },
      {
        question: "Which investment option is right for me?",
        answer: "If you value flexibility, the monthly option is perfect. If you are ready for a deep 12-month commitment and want over $5,000 in added value through VIP tickets and retreats, the EPIC Value Path is the superior choice."
      },
      {
        question: "Are there any long-term contracts?",
        answer: "The Monthly option is month-to-month. The Annual option is a 12-month agreement designed to ensure enough time to implement systemic changes in your business."
      }
    ]
  },
  {
    id: 'management-program',
    title: '12-Week Management Program',
    subtitle: 'Master Management. Build EPIC Teams.',
    description: 'Transform your managers into confident, skilled leaders with our comprehensive 12-week certification program focused on core competencies and operational efficiency.',
    features: ['Certified Management Essentials', '12 Key Competencies', 'Facilitated Weekly Sessions', 'Actionable Systems'],
    cta: 'Enroll Now for Management Mastery',
    isForYou: [
      "Develop confident and skilled managers within 12 weeks?",
      "Equip your management team with essential leadership tools?",
      "Improve team communication, collaboration, and accountability?",
      "Streamline operations and boost team productivity?",
      "Build a strong management pipeline for sustained growth?"
    ],
    whatYoullGain: [
      "Master 12 Key Competencies: crucial for effective team leadership.",
      "Learn from Expert Video Modules: twelve 30-minute high-impact lessons.",
      "Engage in Facilitated Sessions: weekly group learning and peer insight.",
      "Implement Performance Metrics: KPIs to track and drive accountability.",
      "Personal Development: Integrated 'Book of the Month' learning.",
      "Transition Manager to Leader: Develop the ultimate leadership mindset."
    ],
    journeyIncludes: [
      "Week 1: What is Management? – Leadership vs Management mindset.",
      "Week 2: Management Competencies – Skill assessment & identification.",
      "Week 3: Managing Daily Lists – Creating high-productivity workflows.",
      "Week 4: Managing Weekly Lists – LION concept for strategic planning.",
      "Week 5: Managing Weekly Meetings – Leading impactful team updates.",
      "Week 6: Managing 1-2-1 Meetings – Individual development mastery.",
      "Week 7: Goals & Measures – Setting and tracking team KPIs.",
      "Week 8: 90 Day Planning – Aligning efforts with quarterly goals.",
      "Week 9: Annual Reviews & Discipline – Handling conflict and performance.",
      "Week 10: Communication & Tools – NLP and 360-degree feedback.",
      "Week 11: Effective Team Building – Systems, training, and recruiting.",
      "Week 12: Graduation – Transitioning from Manager to Leader."
    ],
    investmentOptions: [
      {
        name: "Full Program Investment",
        price: "$1,500",
        period: "per person",
        description: "Complete 12-week program including all modules, facilitated sessions, materials, and certification.",
        bestFor: "Full Management Development",
        features: ["12 Video Modules", "Facilitated Sessions", "Full Certification"]
      },
      {
        name: "Monthly Payment Plan",
        price: "$500",
        period: "per month",
        description: "Spread the investment over 3 monthly payments while progressing through the mastery journey.",
        bestFor: "Budget-Friendly Growth",
        features: ["3 monthly payments", "Total investment: $1,500", "Full program access"]
      }
    ],
    faqs: [
      {
        question: "What exactly is the 12-Week Management Program?",
        answer: "It is a comprehensive certification program designed to equip managers with essential leadership skills. It combines video modules, weekly facilitated sessions, and practical ActionCOACH tools."
      },
      {
        question: "Who is this program for?",
        answer: "Ideal for business owners, newly promoted managers, and experienced leaders looking to improve operational efficiency and team performance."
      }
    ]
  },
  {
    id: 'leadership-program',
    title: '12-Week Leadership Program',
    subtitle: 'Become the Leader of Tomorrow.',
    description: 'Empower yourself with the mindset and skills to excel in today’s dynamic business landscape. A transformative journey of personal and organizational growth.',
    features: ['Leadership Fundamentals', 'Strategic Execution', 'Emotional Intelligence', 'Personal Branding'],
    cta: 'Enroll Now & Lead with Impact',
    isForYou: [
      "Gain a comprehensive understanding of leadership fundamentals?",
      "Develop practical skills for a dynamic business landscape?",
      "Lay the foundation for your lasting leadership legacy?",
      "Excel as an impactful leader in the Carolinas market?"
    ],
    whatYoullGain: [
      "Master Leadership Essence: Distinguish true leadership from management.",
      "Build Organizational Foundations: History, vision, and values mastery.",
      "Execute Strategic Leadership: Goal setting with OKRs and planning.",
      "Amplify Strategic Thinking: Integrate focus and passion into action.",
      "Emotional Intelligence: Harness self-awareness and empathy for teams.",
      "Craft Personal Branding: Authentic and impactful leadership presence."
    ],
    journeyIncludes: [
      "Week 1: Leadership Fundamentals",
      "Week 2: Organizational Foundations",
      "Week 3: Cultivating Culture",
      "Week 4: Strategic Execution",
      "Week 5: Leadership Impact",
      "Week 6: Effective Communication",
      "Week 7: Reflective Leadership",
      "Week 8: Branding & Delegation",
      "Week 9: Innovation & Change",
      "Week 10: Mentoring & Coaching",
      "Week 11: The Leadership Journey",
      "Week 12: Next Steps"
    ],
    // Fix: Completed the missing properties for InvestmentOption
    investmentOptions: [
      {
        name: "Full Leadership Investment",
        price: "$1,800",
        period: "per person",
        description: "Our comprehensive leadership certification program including all materials and coaching sessions.",
        bestFor: "Individual Leadership Growth",
        features: ["12 Strategic Modules", "Weekly Coaching", "Leadership Portfolio"]
      },
      {
        name: "Corporate Cohort",
        price: "$7,500",
        period: "for 5 seats",
        description: "Best for businesses wanting to develop their entire senior leadership team simultaneously.",
        bestFor: "Team Alignment",
        features: ["Group Pricing", "Custom Team Discussions", "Alignment Audit"]
      }
    ]
  },
  {
    id: 'business-masterclass',
    title: 'Business Masterclass',
    subtitle: 'The 6 Steps to a Winning Business.',
    description: 'A deep dive into the ActionCOACH 6-Step system. Learn the exact framework we use to take businesses from chaos to commercial, profitable enterprises that work without the owner.',
    features: ['Mastery of Basics', 'Niche Marketing', 'Leverage Systems', 'Team Building'],
    cta: 'Reserve Your Seat',
    isForYou: [
      "Want to understand the 6 Steps to massive growth?",
      "Need better control over your time and team?",
      "Looking for a proven system rather than guesswork?"
    ],
    whatYoullGain: [
      "The 6-Step Framework: Mastery, Niche, Leverage, Team, Synergy, Results.",
      "Marketing Strategies: How to turn your marketing into an investment.",
      "Time Management: Tools to reclaim 5-10 hours per week."
    ],
    journeyIncludes: [
      "Session 1: Destination Mastery",
      "Session 2: Financial Mastery",
      "Session 3: Delivery Mastery",
      "Session 4: Lead Generation",
      "Session 5: Conversion Rate",
      "Session 6: Systems & Leverage"
    ]
  },
  {
    id: 'sales-training',
    title: 'Sales Mastery Training',
    subtitle: 'Close More Deals with Ease.',
    description: 'Transform your sales process from a high-pressure pitch into a collaborative discovery. Learn the psychology of buying and the systems for consistent conversion.',
    features: ['The Questioning Game', 'Handling Objections', 'Building Rapport', 'Closing Systems'],
    cta: 'Master Your Sales',
    isForYou: [
      "Is your conversion rate lower than it should be?",
      "Do you feel uncomfortable during sales meetings?",
      "Does your team struggle to ask for the order?"
    ],
    whatYoullGain: [
      "Question-Based Selling: Control the conversation without being pushy.",
      "Objection Handling: Turn 'No' into 'Not yet' or 'Tell me more'.",
      "Process Automation: Systems to track and nurture every lead."
    ],
    journeyIncludes: [
      "Initial Sales Audit",
      "Discovery Phase Training",
      "The Presentation System",
      "Closing Techniques Workshop",
      "Follow-up Automation Setup",
      "Role-play & Refinement"
    ]
  },
  {
    id: 'strategic-planning',
    title: 'GrowthCLUB: Quarterly Planning',
    subtitle: '90 Days of Laser Focus.',
    description: 'Stop working in the business and spend a full day working ON it. Every 90 days, we map out your specific goals and actions for the next quarter.',
    features: ['90-Day Roadmap', 'Peer Masterminding', 'Expert Feedback', 'Total Clarity'],
    cta: 'Plan Your Next 90 Days',
    isForYou: [
      "Do you feel like you're spinning your wheels?",
      "Is your team unaligned on quarterly priorities?",
      "Do you miss the forest for the trees?"
    ],
    whatYoullGain: [
      "Detailed 90-Day Plan: Action items for every week of the quarter.",
      "Networking: Connect with other successful business owners in the Carolinas.",
      "Renewed Energy: Walk away inspired and ready to execute."
    ]
  },
  {
    id: 'speaking',
    title: 'Speaking & Keynotes',
    subtitle: 'Inspire Your Audience to Action.',
    description: 'Bill Gilliland is a sought-after speaker for trade associations, chamber events, and corporate retreats. His high-energy presentations deliver actionable business strategies.',
    features: ['High-Energy Keynotes', 'Actionable Takeaways', 'Customized Content', 'Audience Engagement'],
    cta: 'Book Bill for Your Event',
    isForYou: [
      "Looking for a speaker who delivers more than just motivation?",
      "Need an expert to talk about business growth or leadership?",
      "Planning a conference for business owners in the Carolinas?"
    ],
    whatYoullGain: [
      "Authentic Expertise: Real-world business experience on stage.",
      "Audience Motivation: Moving people from thinking to doing.",
      "Proven Frameworks: Strategies that work in any industry."
    ],
    journeyIncludes: [
      "Association Annual Meetings",
      "Corporate Leadership Retreats",
      "Chamber of Commerce Events",
      "Industry Trade Shows",
      "Small Business Summits"
    ]
  }
];
