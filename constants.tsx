
import { Program, LocationData, TeamMember, Testimonial } from './types';

export const FEATURED_VIDEOS = [
  { videoId: 'HVhs_6tyLak', title: 'He Was Burned Out on Business Until This Changed' },
  { videoId: 'FmLZRaIHVwc', title: 'He Got Out of the Grind and Finally Saw the Bigger Picture' },
  { videoId: 'c_jMNtvlKZM', title: 'When You Are So Deep in the Day to Day You Cannot See a Way Out' },
  // Add more videos below as they are published — first 3 show large, rest show smaller
  { videoId: 'JuMmZHQuWvk', title: 'Is Business Coaching Worth It? The Real Cost vs. ROI' },
  { videoId: '31SVS1HoXJU', title: 'Test Drive Employees Before You Hire Them' },
  { videoId: '_kV4jm1NuKc', title: 'Fish With A Net Not A Hook — Hiring Philosophy' },
  { videoId: 'fcJDHjsYbmc', title: 'The ASCC Method: Stop Hiring The Wrong People' },
  { videoId: 'qTzIj5Ji1rQ', title: 'Building a Team That Actually Gets Results' },
  { videoId: 'aBfcghFq1Sg', title: 'The Secret to Saving Time in Your Trades Business' },
];

// Update PODCAST_EPISODES when new episodes are published.
// spotifyEpisodeId: found in the Spotify episode URL after /episode/
export const PODCAST_EPISODES = [
  {
    title: 'Add Most Recent Episode Title Here',
    description: 'Brief summary of what this episode covers.',
    date: '2026-04-01',
    spotifyEpisodeId: '', // e.g. '4pZSVpWbkeusqb1VwhnRAo'
    spotifyUrl: 'https://open.spotify.com/show/4pZSVpWbkeusqb1VwhnRAo',
  },
  {
    title: 'Previous Episode Title',
    description: 'Brief summary of what this episode covers.',
    date: '2026-03-18',
    spotifyEpisodeId: '',
    spotifyUrl: 'https://open.spotify.com/show/4pZSVpWbkeusqb1VwhnRAo',
  },
  {
    title: 'Previous Episode Title',
    description: 'Brief summary of what this episode covers.',
    date: '2026-03-04',
    spotifyEpisodeId: '',
    spotifyUrl: 'https://open.spotify.com/show/4pZSVpWbkeusqb1VwhnRAo',
  },
];

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
    description: 'Asheville business owners benefit from a strong independent business culture and a growing local economy.',
    image: '/images/Asheville-Business-Summit-6-Large.jpeg',
    headline: 'Local Business Coaching for Asheville and Western NC',
    intro: 'Bill Gilliland is based in Montreat, NC — minutes from Asheville — and has coached business owners across Western North Carolina for decades. He knows this market, the industries that drive it, and the specific pressures that come with running a business here.',
    marketDetail: 'Asheville runs on independent businesses. The tourism economy drives significant revenue, but it also creates real challenges — seasonal cash flow swings, labor that is hard to retain, and the constant pressure of being the owner who has to be there for everything. The trades and construction market has grown sharply with WNC\'s population boom. Hospitality, outdoor recreation, health and wellness, and creative services businesses form a wide and active community of owners who are ready to build something that lasts.',
    whoWeWork: [
      'Restaurants & Hospitality',
      'Contractors & Trades',
      'Retail & Boutique',
      'Health & Wellness',
      'Professional Services',
      'Outdoor Recreation & Tourism',
    ],
    localChallenges: [
      {
        title: 'Seasonal revenue swings',
        body: 'Tourism peaks and dips hit cash flow hard. We help owners build systems that keep the business stable year-round, not just during high season.',
      },
      {
        title: 'Labor retention',
        body: 'Asheville\'s rising cost of living makes it harder to hold good people. We help you build a team structure and culture that people want to stay in.',
      },
      {
        title: 'Owner dependency',
        body: 'Most WNC businesses still run because the owner shows up every day. Getting the owner out of daily execution is usually the first thing we fix.',
      },
      {
        title: 'Growing past the current model',
        body: 'Demand is strong in WNC, but scaling without systems creates chaos. We install the operating structure your business needs to grow without breaking.',
      },
    ],
    faqs: [
      {
        question: 'Is there a business coach based near Asheville, NC?',
        answer: 'Yes. Bill Gilliland is based in Montreat, NC, just outside Black Mountain and minutes from Asheville. He has coached Western NC business owners for decades and knows this market well.',
      },
      {
        question: 'What types of businesses do you coach in Asheville?',
        answer: 'We work with restaurants, contractors, trades businesses, retail shops, health and wellness operators, and professional service firms across Western NC. If you own a business in the Asheville area and feel stuck, we can help.',
      },
      {
        question: 'Can coaching help with seasonal cash flow?',
        answer: 'Seasonal cash flow is one of the most common challenges for Asheville-area businesses. We work directly on cash flow planning, pricing strategy, and building consistent revenue systems so the off-season does not gut the business.',
      },
      {
        question: 'Do you work with trades and contractor businesses in WNC?',
        answer: 'Yes. Trades businesses are a strong fit for coaching. The challenges of managing crews, winning better jobs, and building a business that does not depend entirely on the owner are exactly what we address.',
      },
      {
        question: 'How is coaching different from hiring a consultant?',
        answer: 'A consultant delivers a plan and leaves. A coach stays in it with you — meeting weekly or bi-weekly — keeping execution moving and adjusting the plan as the business changes. You implement with accountability, not alone.',
      },
    ],
  },
  {
    id: 'charlotte-nc',
    city: 'Charlotte',
    state: 'NC',
    description: 'The business capital of the Carolinas, Charlotte offers strong opportunities for owners ready to scale.',
    image: '/images/actioncoach-growth-business-partners-networking-event-group.jpeg',
  },
  {
    id: 'raleigh-nc',
    city: 'Raleigh',
    state: 'NC',
    description: "Raleigh's fast-growing technology, professional services, and home-service sectors create strong demand for structured, scalable business coaching.",
    image: '/images/actioncoach-growth-business-partners-business-summit-speaker.jpeg',
    headline: 'Business Coaching for Raleigh-Area Trades Businesses Ready to Grow Beyond the Owner',
    intro: 'We help established trades and field-service business owners in Raleigh, Wake Forest, and across the Triangle who have crews, trucks, and at least $750K in annual revenue. If the business still needs you to handle every estimate, solve every crew problem, and make every important decision, we help you build the people, systems, and financial control to step out of the daily scramble.',
    marketDetail: 'Raleigh-area trade businesses are working in one of North Carolina\'s most competitive growth markets. More construction and household demand can mean a fuller schedule, but it also raises the stakes: finding skilled technicians, covering a larger service area, keeping crews productive, and protecting margin when labor and material costs move. Owners across Raleigh, Wake Forest, Cary, Apex, and the wider Triangle need more than leads. They need a business that can quote profitably, schedule work well, hold crews accountable, and deliver without the owner being the dispatcher, sales manager, and firefighter.',
    whoWeWork: [
      'HVAC & Plumbing',
      'Electrical Contractors',
      'Roofing & Remodeling',
      'Restoration & Specialty Trades',
      'Landscaping & Pest Control',
      'Other Established Owner-Led Businesses',
    ],
    localChallenges: [
      {
        title: 'Crews need direction without calling the owner all day',
        body: 'When technicians, project managers, and office staff all wait for the owner to solve the next issue, the business cannot grow cleanly. We help install clear roles, scorecards, and a meeting rhythm that gives people ownership of the work.',
      },
      {
        title: 'The field and office are out of sync',
        body: 'Missed handoffs between estimating, dispatch, crews, and billing create rework, unhappy customers, and lost margin. We help create operating systems that keep jobs moving from first call through final payment.',
      },
      {
        title: 'More work is not producing more profit',
        body: 'A full calendar can still hide weak pricing, poor labor utilization, and cash-flow pressure. We work with owners on the numbers that matter: job profitability, conversion, labor, overhead, and the cash required to grow without strain.',
      },
      {
        title: 'The owner is trapped between sales and operations',
        body: 'You should not have to choose between winning the next job and making sure today\'s jobs are done right. We help build the leadership capacity and sales process that let the company do both without putting everything back on you.',
      },
    ],
    faqs: [
      {
        question: 'Does ActionCOACH serve Raleigh and Wake Forest, NC?',
        answer: 'Yes. ActionCOACH Business Growth Partners serves business owners throughout Raleigh and the Triangle, including Wake Forest. Start with a conversation with Bill to determine the right coaching format and next step for your business.',
      },
      {
        question: 'What types of Raleigh businesses do you coach?',
        answer: 'Our primary focus is established trades and field-service companies: HVAC, plumbing, electrical, roofing, remodeling, restoration, landscaping, pest control, and specialty contractors. We also work with other established owner-led businesses that need stronger leadership, systems, and financial control.',
      },
      {
        question: 'Is business coaching a fit for my trades business?',
        answer: 'It is a strong fit for owners who have a real team and want a company that does not depend on them for every decision. Our core client is typically a trades or service business with crews and trucks doing $750,000 or more in annual revenue.',
      },
      {
        question: 'Can coaching help my crews become more accountable?',
        answer: 'Yes. We help owners define the few numbers and behaviors each role owns, build a practical meeting cadence, and give field leaders the tools to manage performance before every issue becomes an owner emergency.',
      },
      {
        question: 'How do I get started with a business coach in the Triangle?',
        answer: 'Book a conversation with Bill Gilliland. You will talk through the business, the biggest constraint holding it back, and whether an ActionCOACH program is a practical fit for the outcome you want.',
      },
    ],
  },
  {
    id: 'greenville-sc',
    city: 'Greenville',
    state: 'SC',
    description: 'Greenville is one of the fastest-growing cities in the Southeast, with a strong base of entrepreneurs ready to scale.',
    image: '/images/actioncoach-growth-business-partners-networking-event-group.jpeg',
  },
  {
    id: 'high-point-nc',
    city: 'High Point',
    state: 'NC',
    description: 'High Point is the furniture capital of the world and home to a strong community of manufacturers, trades businesses, and service operators.',
    image: '/images/high-point-nc.jpg',
    headline: 'Business Coaching for High Point and the Piedmont Triad',
    intro: 'ActionCOACH Business Growth Partners serves business owners in High Point and across the Piedmont Triad. We work with manufacturers, wholesale operators, trades businesses, and service companies who are ready to build something more scalable.',
    marketDetail: 'High Point has been the furniture capital of the world for over a century. The High Point Market — the world\'s largest home furnishings trade show — draws nearly 75,000 buyers and exhibitors from more than 100 countries twice a year. That kind of commercial activity creates a rich ecosystem of manufacturers, distributors, logistics operators, and service businesses. But the business community here runs far deeper than furniture. Trades, construction, professional services, and distribution businesses form a strong backbone across the Piedmont Triad. The owners we work with are driven and capable — and they have usually outgrown the way the business is currently structured.',
    whoWeWork: [
      'Manufacturing & Production',
      'Wholesale & Distribution',
      'Home Furnishings & Design',
      'Contractors & Trades',
      'Logistics & Operations',
      'Service Businesses',
    ],
    localChallenges: [
      {
        title: 'Scaling beyond the founder',
        body: 'High Point\'s strongest businesses are founder-run. Getting the owner out of daily execution — so the business can grow without them in every decision — is usually the first priority.',
      },
      {
        title: 'B2B sales cycles and account management',
        body: 'Wholesale and manufacturing businesses deal with longer sales cycles, larger accounts, and more relationship management. We build the sales systems and processes to keep that pipeline moving.',
      },
      {
        title: 'Inconsistent delivery or production',
        body: 'When operating systems are not documented, quality and capacity become inconsistent. We install the operating rhythm that keeps output predictable.',
      },
      {
        title: 'Team accountability',
        body: 'Getting a team to perform without constant owner oversight is the challenge we hear most from High Point manufacturers and service operators. We build the management systems that make it happen.',
      },
    ],
    faqs: [
      {
        question: 'Does ActionCOACH serve High Point, NC?',
        answer: 'Yes. ActionCOACH Business Growth Partners serves business owners in High Point and across the Piedmont Triad, including Greensboro and Winston-Salem. We work with manufacturers, trades businesses, wholesale operators, and service companies.',
      },
      {
        question: 'Do you work with furniture or home furnishings businesses?',
        answer: 'Yes. High Point is the furniture capital of the world, and we understand the B2B dynamics, the Market cycles, and the operational challenges that come with selling in that industry.',
      },
      {
        question: 'What if my business is in manufacturing or production?',
        answer: 'Manufacturing businesses are a strong fit for coaching. The challenges — labor management, production systems, quality, and scaling — are exactly what the ActionCOACH framework addresses.',
      },
      {
        question: 'Do you work with wholesale or distribution businesses?',
        answer: 'Yes. Wholesale and distribution businesses have specific challenges around account management, cash flow, and operational consistency. Those are areas we work on directly.',
      },
      {
        question: 'How is coaching different from hiring a consultant?',
        answer: 'A consultant delivers a plan and leaves. A coach stays with you — meeting weekly or bi-weekly — keeping execution on track and adjusting the plan as the business changes. You build the capability to run the business better, not just get a report.',
      },
    ],
  },
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
    problem: [
      'Growth has outgrown the way the business is currently run.',
      'The owner is still too involved in daily decisions.',
      'Profit and execution feel harder to predict than they should.',
      'The team needs more leadership, structure, and follow-through.',
    ],
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
      'Full ABoS implementation across the business.',
      'A business that feels like an asset, not a job.',
    ],
    howItWorks: [
      '1. Map the current business structure and the bottlenecks holding it back.',
      '2. Build the leadership, systems, and execution rhythm the company needs.',
      '3. Install the plan across the business and keep it moving over time.',
    ],
    journeyIncludes: [
      'Strategic planning tied to the company vision',
      'Leadership development for owners and managers',
      'Systems for marketing, sales, and delivery',
      'Execution support that keeps the plan moving',
      'ActionCOACH Business Operating System (ABoS)',
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
    result: 'A business that runs with more structure, more leadership, and less dependence on the owner.',
    introVideo: {
      videoId: 'v3DeiyM5Rxk',
      title: 'What Is Business Unlimited? Bill Gilliland Explains',
    },
  },
  {
    id: 'one-to-one-freedom',
    title: 'Private Coaching',
    subtitle: 'Your Strategic Growth Partner',
    description: 'Private Coaching is a one-on-one partnership focused on accelerating your growth, increasing profitability, and building a business that works without you.',
    features: ['Weekly or Bi-Weekly Coaching Sessions', '90-Day Execution Planning', 'KPI Tracking and Accountability', 'Strategy Across Time, Team, and Money'],
    cta: 'Book Private Coaching',
    problem: [
      'You are doing $1M+ and still want the next level of clarity.',
      'You need someone to challenge your thinking and sharpen execution.',
      'The business is moving, but not at the pace you want.',
      'You want accountability that stays focused on outcomes.',
    ],
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
      'Access to the ActionCOACH Business Operating System (ABoS).',
    ],
    howItWorks: [
      '1. Review the current numbers, priorities, and pressure points.',
      '2. Build the next 90-day execution plan together.',
      '3. Track the work weekly or bi-weekly so progress stays real.',
    ],
    journeyIncludes: [
      'Weekly or bi-weekly coaching sessions',
      '90-day execution planning',
      'KPI tracking and accountability',
      'Strategy across time, team, and money',
      'ActionCOACH Business Operating System (ABoS)',
    ],
    investmentOptions: [
      {
        name: 'Private Coaching',
        price: '$30,000 - $48,000',
        period: 'annual investment',
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
    result: 'Sharper execution, stronger profit, and a business that can grow without constant owner oversight.',
    introVideo: {
      videoId: 'ty519qMU7wM',
      title: 'What Is Private Coaching? Bill Gilliland Explains',
    },
    testimonialVideos: [
      {
        videoId: 'HVhs_6tyLak',
        title: 'He Was Burned Out on Business Until This Changed',
      },
    ],
  },
  {
    id: 'profit-club',
    title: 'ProfitClub',
    subtitle: 'Group Coaching for Owners Who Want to Build and Grow',
    description: 'ProfitClub is a bi-weekly group coaching program that uses the ActionCOACH framework to help business owners build more profitable, systemized companies alongside growth-minded peers.',
    features: ['Bi-Weekly Strategy Sessions', 'Peer Advisory Group', 'KPI Tracking and Accountability', 'ActionCOACH Business Framework'],
    cta: 'Join ProfitClub',
    problem: [
      'Revenue is inconsistent and hard to predict.',
      'Marketing is not producing a reliable lead flow.',
      'The team relies too heavily on you.',
      'Systems and processes are incomplete.',
      'Strategic thinking keeps getting pushed aside.',
      'You are solving the same problems repeatedly.',
    ],
    isForYou: [
      'You want structure, accountability, and a room full of serious business owners.',
      'You run a trades, construction, or professional service business.',
      'You are tired of solving every problem alone.',
      'You want a built-in board of advisors without the cost of building one.',
    ],
    whatYoullGain: [
      'Practical tools and strategies you can apply immediately.',
      'Peer accountability that drives consistent implementation.',
      'Outside perspective and honest feedback on your business.',
      'A network of growth-minded owners who push you forward.',
      'Measurable progress through a proven coaching framework.',
    ],
    howItWorks: [
      '1. Attend a session: Experience the environment and see if the group is the right fit.',
      '2. Learn proven strategies: Each session covers lead generation, sales, pricing, cash flow, leadership, systems, and team development — built around the ActionCOACH 6 Steps framework.',
      '3. Implement with accountability: Leave every session with action items, peer accountability, and strategic feedback.',
    ],
    journeyIncludes: [
      'Bi-weekly 60-90 minute coaching sessions',
      'KPI worksheets and tracking tools',
      'Marketing plans and cash flow planning',
      'ActionPLAN software access',
      'Coaching resources and strategic templates',
      'Peer advisory community',
    ],
    investmentOptions: [
      {
        name: 'ProfitClub',
        price: '$500',
        period: 'per month (or $5,500/year)',
        description: 'Group coaching with peer accountability, bi-weekly sessions, and the full ActionCOACH framework.',
        bestFor: 'Growth-focused business owners',
        features: ['Bi-weekly sessions', 'Peer accountability', 'ActionCOACH framework'],
      },
    ],
    faqs: [
      {
        question: 'What is ProfitClub?',
        answer: 'A bi-weekly group coaching program that uses the ActionCOACH framework to help business owners build more profitable, systemized companies alongside a community of serious peers.',
      },
      {
        question: 'How is ProfitClub different from private coaching?',
        answer: 'ProfitClub is a group format built around peer accountability and shared strategy. Private Coaching is one-on-one with a higher level of personalized attention and investment.',
      },
      {
        question: 'Who is ProfitClub for?',
        answer: 'Trades, construction, professional services, and growth-focused businesses. If you want structure, accountability, and a room of business owners who push you to execute, you belong here.',
      },
      {
        question: 'Is there a guarantee?',
        answer: 'ActionCOACH stands behind the system. Follow the strategies, implement the process, and the program is built to generate more gross profit than your investment.',
      },
    ],
    result: 'A more profitable, better-systemized business built alongside peers who push you to execute.',
    introVideo: {
      videoId: 'VbEvP4QAAqM',
      title: 'What Is ProfitClub? Bill Gilliland Explains',
    },
  },
  {
    id: 'business-masterclass',
    title: 'Business Masterclass',
    subtitle: 'Structured Growth. Built-In Accountability.',
    description: 'Business Masterclass is a high-impact group coaching program designed to help you implement proven strategies alongside other driven business owners.',
    features: ['Time Management and Focus', 'Marketing and Sales', 'Profit and Cash Flow', 'Team and Leadership'],
    cta: 'Join Business Masterclass',
    problem: [
      'You need structure, but private coaching is not the right next step yet.',
      'Momentum is slipping because there is no consistent operating rhythm.',
      'The business needs more clarity around time, cash flow, and leadership.',
    ],
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
    howItWorks: [
      '1. Join the group and get clear on the biggest priority.',
      '2. Work through practical coaching sessions with built-in accountability.',
      '3. Implement changes between sessions and keep momentum moving.',
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
        question: 'What makes Business Masterclass different?',
        answer: 'You implement as you go, with structure and accountability built in.',
      },
      {
        question: 'Is this private coaching?',
        answer: 'No. It is a group coaching format for owners who want a lower entry point and shared momentum.',
      },
    ],
    result: 'A stronger operating foundation with more clarity, accountability, and forward motion.',
    introVideo: {
      videoId: '4J0Gy_F1_yc',
      title: 'What Is Business Masterclass? Bill Gilliland Explains',
    },
  },
  {
    id: 'planning-club',
    title: 'Business Planning',
    subtitle: 'Get Clear. Get Focused. Get Results.',
    description: 'In this interactive planning experience, you will build a clear, executable 90-day growth plan tied directly to your financial goals.',
    features: ['90-Day Action Plan', 'Revenue, Profit, and Cash Flow Projections', 'A System to Track and Adjust Performance', 'Clear Execution Priorities'],
    cta: 'Reserve Your Planning Spot',
    problem: [
      'You do not have a real plan, only good intentions.',
      'The business needs a clearer next quarter.',
      'Goals and execution are not tied tightly enough together.',
    ],
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
    howItWorks: [
      '1. Define the goals and financial targets for the next 90 days.',
      '2. Map the actions, metrics, and owners behind each goal.',
      '3. Leave with a plan that can be tracked and adjusted.',
    ],
    journeyIncludes: [
      'Goal setting tied to financial targets',
      'Priority mapping for the next quarter',
      'Execution tracking and adjustments',
      'A practical plan you can use right away',
    ],
    investmentOptions: [
      {
        name: 'Business Planning',
        price: '$495 - $5,000',
        period: 'per engagement',
        description: 'A focused planning engagement for owners who want clarity now.',
        bestFor: 'Owners who want immediate direction',
        features: ['Business planning', 'Financial clarity', 'Execution roadmap'],
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
    result: 'A clear 90-day plan tied to financial goals, priorities, and execution.',
    introVideo: {
      videoId: 'gjMWj5aoiNg',
      title: 'What Is Business Planning? Bill Gilliland Explains',
    },
    testimonialVideos: [
      {
        videoId: 'c_jMNtvlKZM',
        title: 'When You Are So Deep in the Day to Day You Cannot See a Way Out',
      },
    ],
  },
  {
    id: 'two-weeks-coaching',
    title: '2 Weeks Free Coaching',
    subtitle: 'See What Business Coaching Can Do for Your Business',
    description: 'A risk-free two-week coaching experience designed to give you immediate clarity, an executable 90-day plan, and a real look at what working with an ActionCOACH business coach looks like.',
    features: ['Two Dedicated Coaching Sessions', 'Business Analysis and Priority Mapping', '90-Day Growth Plan', 'No Obligation'],
    cta: 'Start 2 Weeks Free',
    problem: [
      'You are curious about coaching but not ready to commit.',
      'You want to see real results before making a larger investment.',
      'You need immediate clarity on where to focus.',
      'You have questions about whether coaching is the right fit.',
    ],
    isForYou: [
      'You want to experience coaching before committing.',
      'You are running a business but feel stuck or unclear on the next step.',
      'You prefer to see value first.',
      'You want a practical, low-risk way to evaluate the ActionCOACH framework.',
    ],
    whatYoullGain: [
      'Two coaching sessions with Bill Gilliland.',
      'A clear picture of where the business is stuck.',
      'A 90-day action plan you can use immediately.',
      'An honest conversation about whether the next step makes sense.',
    ],
    howItWorks: [
      '1. Book a discovery call: Talk through where the business is and what you want to change.',
      '2. Complete two coaching sessions: Work through your biggest priorities with Bill.',
      '3. Leave with a plan: Take a 90-day execution plan and decide what comes next.',
    ],
    journeyIncludes: [
      'Two one-on-one coaching sessions',
      'Business analysis and priority mapping',
      '90-day growth plan',
      'No obligation or commitment',
    ],
    investmentOptions: [
      {
        name: '2 Weeks Free',
        price: 'Free',
        period: 'no obligation',
        description: 'Two coaching sessions designed to give you immediate clarity and an executable plan — at no cost.',
        bestFor: 'Owners exploring business coaching',
        features: ['Two coaching sessions', '90-day plan', 'No commitment required'],
      },
    ],
    faqs: [
      {
        question: 'Is there really no cost?',
        answer: 'Correct. The 2 Weeks Free Coaching program gives you two sessions at no charge. There is no obligation to continue after.',
      },
      {
        question: 'What happens after the two weeks?',
        answer: 'We will talk through what made sense, what could move faster with ongoing coaching, and which program — if any — is the right fit. The decision is yours.',
      },
      {
        question: 'Who is this for?',
        answer: 'Business owners who are curious about coaching but want to see how it works before making a larger commitment.',
      },
    ],
    result: 'Immediate clarity on what to fix first, a 90-day plan in hand, and a clear answer on whether coaching is the right next step.',
    introVideo: {
      videoId: '2eS7valJtGk',
      title: 'What Is 2 Weeks Free Coaching? Bill Gilliland Explains',
    },
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
