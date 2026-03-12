
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
    description: ‘Raleigh\’s tech and service sectors are booming, making it an ideal place for systematic expansion.’,
    image: ‘/images/actioncoach-growth-business-partners-business-summit-speaker.jpeg’
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
    subtitle: 'The ABoS System. In a Group. At a Fraction of the Cost.',
    description: 'Business Unlimited is ActionCOACH\'s group coaching program — designed to install the ActionCOACH Business Operating System (ABoS) in your business through weekly group sessions, peer accountability, and expert facilitation. If you\'re ready to stop improvising and start operating from a proven framework, this is your entry point.',
    features: ['Weekly Group Coaching Sessions', 'ABoS Framework Installation', 'Peer Mastermind Group', 'Structured Accountability'],
    cta: 'Join Business Unlimited',
    isForYou: [
      "Want the proven ABoS system without the 1-to-1 price tag?",
      "Thrive in a peer accountability environment?",
      "Need structured systems and consistent coaching momentum?",
      "Ready to stop winging it and start running a real business?"
    ],
    whatYoullGain: [
      "Install ABoS: Work through the 6-step Business Operating System with expert guidance.",
      "Peer Accountability: Surround yourself with other committed business owners.",
      "Weekly Momentum: Consistent touchpoints to keep you executing, not just planning.",
      "Clarity on Priorities: Know exactly what to focus on each quarter.",
      "Business Freedom Framework: Build systems so your business runs without you.",
      "Community: Connect with a network of driven Carolinas business owners."
    ],
    journeyIncludes: [
      "Weekly Group Coaching Sessions with ActionCOACH facilitators",
      "Monthly Mastermind for peer learning and hot seats",
      "ABoS Assessment to pinpoint where your business needs the most work",
      "30X Video Library Access (on-demand training content)",
      "Quarterly 90-Day Planning Session",
      "Monthly 'Ask Us Anything' open Q&A sessions",
      "Access to GrowthCLUB planning events",
      "Community Builder Pass (4 Annual Passes)"
    ],
    investmentOptions: [
      {
        name: "Monthly Membership",
        price: "$1,500",
        period: "per month",
        description: "Flexible month-to-month access to the full Business Unlimited group coaching program.",
        bestFor: "Flexible Group Coaching",
        features: ["Month-to-Month commitment", "Full group coaching access", "ABoS framework included"]
      },
      {
        name: "Annual Commitment",
        price: "$15,000",
        period: "per year",
        description: "Lock in savings with a 12-month commitment and get additional event access included.",
        bestFor: "Full-Year Transformation",
        features: ["12-Month Agreement", "Save $3,000 vs monthly", "2 GrowthCLUB event tickets included"]
      }
    ],
    faqs: [
      {
        question: "How is Business Unlimited different from 1 to 1 Freedom coaching?",
        answer: "Business Unlimited uses the same ABoS framework in a group setting with other business owners. 1 to 1 Freedom gives you direct, individual access to your coach with a fully customized roadmap. Business Unlimited is a great starting point; 1 to 1 Freedom accelerates results."
      },
      {
        question: "How many people are in each group?",
        answer: "Groups are kept intentionally small — typically 6 to 12 business owners — so every session delivers real value and each member gets attention."
      }
    ]
  },
  {
    id: 'one-to-one-freedom',
    title: '1 to 1 Freedom',
    subtitle: 'Your Business. Your Coach. Your ABoS Roadmap.',
    description: 'The 1 to 1 Freedom program is ActionCOACH\'s flagship individual coaching experience, designed to personally install the ActionCOACH Business Operating System (ABoS) in your business. You work directly with Bill Gilliland or Jason Berry to build a business that generates predictable profit, runs a self-managing team, and gives you real freedom.',
    features: ['Direct Access to Master Coaches', 'Custom ABoS Implementation', 'Profit Acceleration Systems', 'Personal Leadership Development'],
    cta: 'Get Your Freedom Roadmap',
    isForYou: [
      "Want the ABoS system installed specifically for your business?",
      "Need personalized, laser-focused guidance — not a generic program?",
      "Ready to break through plateaus with dedicated accountability?",
      "Want to reclaim your time, grow revenue, and build a team that doesn't need you?"
    ],
    whatYoullGain: [
      "Your Personalized ABoS Roadmap: Strategies built around your exact business and goals.",
      "Accelerated Growth: Faster progress with dedicated, expert focus on your situation.",
      "Break Through Plateaus: Overcome the obstacles keeping you stuck.",
      "Clarity and Direction: A clear path from where you are to where you want to be.",
      "Maximum Accountability: A coach who knows your numbers and holds you to them.",
      "Business Freedom: Build a business that gives you time, money, and real control."
    ],
    journeyIncludes: [
      "Personalized Coaching for you and one key team member",
      "Monthly Mastermind for collaborative learning",
      "30X Video Library Access (on-demand training)",
      "DISC & Motivators Assessments (4 included)",
      "Monthly 'Ask Us Anything' Sessions",
      "Owner's Alignment Session",
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
        question: "What are the investment options for the 1 to 1 Freedom Program?",
        answer: "We offer two options: a monthly 'Pay As You Profit' option at $3,500 per month (month-to-month), and an annual investment at $42,000 per year, which includes bonus VIP tickets to events and the EPIC Retreat."
      },
      {
        question: "Which investment option is right for me?",
        answer: "If you value flexibility, the monthly option is perfect. If you're ready for a deep 12-month commitment and want over $5,000 in added value through VIP tickets and retreats, the EPIC Value Path is the stronger choice."
      },
      {
        question: "Are there long-term contracts?",
        answer: "The monthly option is month-to-month. The annual option is a 12-month agreement — designed to give enough time to implement real, systemic change in your business."
      }
    ]
  },
  {
    id: 'business-masterclass',
    title: 'The Business Masterclass',
    subtitle: 'The ABoS System, Taught Live. In One Room.',
    description: 'The Business Masterclass is an intensive group learning experience built around the ActionCOACH Business Operating System. You walk through all 6 ABoS steps — Mastery, Marketing, Systems, Team, Scale, and Freedom — with real strategies, real peer discussion, and a clear action plan to take home.',
    features: ['All 6 ABoS Steps', 'Live Facilitation', 'Peer Learning', 'Actionable Takeaways'],
    cta: 'Reserve Your Seat',
    isForYou: [
      "Want to understand the full ABoS framework in a concentrated format?",
      "Need better control over time, team, marketing, and systems?",
      "Looking for a proven system — not another book or generic seminar?",
      "Ready to walk away with a real action plan, not just inspiration?"
    ],
    whatYoullGain: [
      "The Full ABoS Framework: All 6 steps from Mastery to Freedom.",
      "Marketing Clarity: How to turn marketing into a predictable cash flow machine.",
      "Systems That Scale: Processes that let your business run without you in the room.",
      "Team Strategies: How to recruit, retain, and lead a high-performance team.",
      "Peer Insight: Learn from other business owners navigating the same challenges.",
      "An Actual Plan: Leave with specific next steps — not just ideas."
    ],
    journeyIncludes: [
      "Session 1: Mastery — Time, money, delivery, and direction under control",
      "Session 2: Marketing — The 5 Ways formula and finding your niche",
      "Session 3: Systems — Processes that drive consistency and scale",
      "Session 4: Team — Building a high-performance team that delivers without you",
      "Session 5: Scale — Strategy, mission, and execution for exponential growth",
      "Session 6: Freedom — Step back, sell, or expand with confidence"
    ]
  },
  {
    id: 'twelve-week-masterclasses',
    title: '12 Week Masterclasses',
    subtitle: 'Certify Your Team. Build Your Bench.',
    description: 'The 12 Week Masterclass series delivers focused, structured training for the people running your business. Each program runs 12 weeks and covers a specific leadership domain — Management, Leadership, or Sales — with video modules, facilitated group sessions, and practical ActionCOACH tools.',
    features: ['Management Certification', 'Leadership Development', 'Sales Mastery', '12-Week Structure'],
    cta: 'Choose Your Masterclass',
    isForYou: [
      "Need to develop your managers, leaders, or sales team?",
      "Want structured, proven training — not random workshops?",
      "Ready to build a team that performs without constant oversight?"
    ],
    whatYoullGain: [
      "Certified Training: Each participant earns a certification upon completion.",
      "Practical Skills: Tools they can apply immediately — not just theory.",
      "Consistency: Everyone operates from the same playbook.",
      "Team Performance: Measurable improvement in management, leadership, or sales.",
      "Reduced Owner Dependence: A team that actually knows what to do."
    ],
    journeyIncludes: [
      "12-Week Management Program: 12 competencies, facilitated sessions, KPI tracking",
      "12-Week Leadership Program: Fundamentals, strategy, emotional intelligence, personal brand",
      "Sales Mastery Training: Question-based selling, objection handling, closing systems",
      "Weekly video modules plus group facilitation sessions",
      "Book-of-the-Month integration for each participant",
      "Certification upon program completion"
    ]
  },
  {
    id: 'planning-club',
    title: 'PlanningCLUB',
    subtitle: 'Comprehensive Business Planning. Done Right.',
    description: 'PlanningCLUB is ActionCOACH\'s intensive business planning program. More than a workshop — it\'s a structured, facilitated process that produces a real business plan aligned with the ABoS framework. You leave with a 90-day action plan, annual milestones, and clarity on exactly what to do next.',
    features: ['Full Business Planning Process', 'ABoS-Aligned Framework', 'Facilitator-Led Sessions', '90-Day + Annual Roadmap'],
    cta: 'Reserve Your Planning Spot',
    isForYou: [
      "Running your business without a real written plan?",
      "Struggling to align your team around shared goals?",
      "Want a comprehensive business plan — not a template, but the real thing?",
      "Ready to stop reacting and start executing from a clear roadmap?"
    ],
    whatYoullGain: [
      "A Real Business Plan: Not a template. A living document built around your business.",
      "ABoS Alignment: Your plan is anchored to the 6 ABoS steps that drive real results.",
      "Team Alignment: Everyone leaves on the same page with shared goals and accountability.",
      "Annual Vision: Clear milestones for the year ahead.",
      "90-Day Execution Plan: Specific action items for the next quarter.",
      "Renewed Confidence: Walk in overwhelmed. Walk out with a plan."
    ],
    journeyIncludes: [
      "Pre-Session: ABoS Assessment to identify your biggest gaps and priorities",
      "Session 1: Vision and Destination — where your business is going",
      "Session 2: Financial Review and Targets — numbers that actually mean something",
      "Session 3: Marketing and Lead Generation — filling your pipeline",
      "Session 4: Systems and Delivery — running the business consistently",
      "Session 5: Team and Culture — who does what and how",
      "Session 6: 90-Day Planning and Accountability Setup"
    ],
    investmentOptions: [
      {
        name: "PlanningCLUB Session",
        price: "$3,500",
        period: "per business",
        description: "Full facilitated planning process for owner plus one key team member.",
        bestFor: "Business Owner + Partner",
        features: ["Owner + 1 team member", "Full ABoS-aligned plan", "90-Day action plan"]
      },
      {
        name: "Executive Planning Retreat",
        price: "$7,500",
        period: "per business",
        description: "Extended planning process for leadership teams up to 5 people.",
        bestFor: "Leadership Team Alignment",
        features: ["Up to 5 participants", "Extended facilitation", "Full annual roadmap + 90-day plan"]
      }
    ],
    faqs: [
      {
        question: "How is PlanningCLUB different from GrowthCLUB?",
        answer: "PlanningCLUB is a comprehensive, one-time (or annual) deep-dive planning process for your whole business. GrowthCLUB is a quarterly 90-day sprint planning event to stay on track through the year. Most clients do both."
      },
      {
        question: "How long does PlanningCLUB take?",
        answer: "The full process typically runs across 2 to 3 facilitated sessions over 2 weeks, plus a pre-session assessment. You can also opt for an intensive single-day executive retreat format."
      }
    ]
  },
  {
    id: 'growth-club',
    title: 'GrowthCLUB',
    subtitle: '90 Days of Laser Focus. Every Quarter.',
    description: 'GrowthCLUB is ActionCOACH\'s quarterly planning event. Every 90 days, you step out of the day-to-day and spend a full day working ON your business — mapping specific goals, priorities, and actions for the next quarter. Peer accountability, expert facilitation, and a clear plan you can execute immediately.',
    features: ['Quarterly 90-Day Roadmap', 'Peer Masterminding', 'Expert Facilitation', 'Immediate Clarity'],
    cta: 'Reserve Your GrowthCLUB Seat',
    isForYou: [
      "Feel like you\'re spinning your wheels without real quarterly direction?",
      "Is your team unaligned on what matters most this quarter?",
      "Want peer accountability from other serious business owners?",
      "Ready to walk in uncertain and walk out with a locked plan?"
    ],
    whatYoullGain: [
      "Your 90-Day Plan: Specific action items for every week of the next quarter.",
      "Peer Accountability: Commit to your goals in front of other business owners.",
      "Expert Facilitation: Guided process that cuts the noise and finds the lever.",
      "Networking: Connect with driven business owners across the Carolinas.",
      "Renewed Energy: Leave inspired, focused, and ready to execute.",
      "Quarterly Momentum: Stay on track all year, one quarter at a time."
    ],
    journeyIncludes: [
      "Review of last quarter's wins and lessons",
      "Business and financial check-in",
      "Priority setting for the next 90 days",
      "Team and systems review",
      "Individual 90-day action plan creation",
      "Peer review and accountability partner setup",
      "Group mastermind and hot seat sessions"
    ]
  },
  {
    id: 'speaking',
    title: 'Speaking & Keynotes',
    subtitle: 'Inspire Your Audience to Action.',
    description: 'Bill Gilliland is a sought-after speaker for trade associations, chamber events, and corporate retreats. His high-energy presentations deliver actionable business strategies that audiences can apply immediately.',
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
