import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '12 Week Masterclasses',
  description: 'Certify your team with ActionCOACH 12 Week Masterclasses — Management, Leadership, and Sales training with structured 12-week programs and expert facilitation.',
};

const masterclasses = [
  {
    id: 'management-program',
    title: '12-Week Management Program',
    subtitle: 'Master Management. Build EPIC Teams.',
    description: 'Transform your managers into certified, confident leaders with 12 key competencies, facilitated group sessions, and KPI tracking built in.',
    investment: 'From $1,500 / person',
    audience: 'Managers, new leaders, high-potential employees',
    outcomes: ['12 Core Management Competencies', 'Weekly Facilitated Sessions', 'Performance Metrics & KPIs', 'Management Certification'],
  },
  {
    id: 'leadership-program',
    title: '12-Week Leadership Program',
    subtitle: 'Become the Leader of Tomorrow.',
    description: 'A transformative journey through leadership fundamentals, strategic execution, emotional intelligence, and personal branding.',
    investment: 'From $1,800 / person',
    audience: 'Senior leaders, executives, business owners',
    outcomes: ['Leadership Fundamentals & Culture', 'Strategic Thinking & OKRs', 'Emotional Intelligence', 'Personal Leadership Brand'],
  },
  {
    id: 'sales-training',
    title: 'Sales Mastery Training',
    subtitle: 'Close More Deals with Ease.',
    description: 'Transform your sales process from high-pressure pitch to collaborative discovery. Learn the psychology of buying and build consistent conversion systems.',
    investment: 'Contact for pricing',
    audience: 'Sales teams, business owners, anyone who sells',
    outcomes: ['Question-Based Selling', 'Objection Handling Systems', 'Closing Techniques', 'Sales Process Automation'],
  },
];

export default function TwelveWeekMasterclasses() {
  return (
    <div className="pt-32 pb-24 bg-[#1C1C1C]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <Link href="/programs" className="text-gold text-xs font-black uppercase tracking-widest mb-12 inline-flex items-center group">
          <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span> Back to Programs
        </Link>

        <div className="max-w-3xl mb-20">
          <h1 className="text-5xl md:text-7xl font-black uppercase leading-none tracking-tighter mb-6">
            12 Week <span className="text-gold">Masterclasses</span>
          </h1>
          <p className="text-2xl text-white/70 font-medium mb-8 leading-relaxed">
            Certify your team. Build your bench. Every 12-week program delivers structured training, expert facilitation, and practical tools your people can use immediately.
          </p>
          <p className="text-white/50 text-lg leading-relaxed">
            Choose the track that fits your team&apos;s biggest gap — Management, Leadership, or Sales — or run all three to build a fully capable leadership bench.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {masterclasses.map((mc) => (
            <div key={mc.id} className="group bg-[#262626] border border-white/5 hover:border-gold transition-all duration-300 flex flex-col">
              <div className="p-10 flex-grow">
                <div className="h-1 w-12 bg-gold mb-8 group-hover:w-full transition-all duration-500" />
                <h3 className="text-2xl font-black uppercase leading-tight mb-3 group-hover:text-gold transition-colors">
                  {mc.title}
                </h3>
                <p className="text-gold text-sm font-black uppercase tracking-wider mb-6">{mc.subtitle}</p>
                <p className="text-white/60 leading-relaxed mb-8">{mc.description}</p>
                <div className="space-y-3 mb-8">
                  {mc.outcomes.map((o, i) => (
                    <div key={i} className="flex items-center text-sm font-bold">
                      <span className="text-gold mr-3">✓</span>
                      {o}
                    </div>
                  ))}
                </div>
                <div className="border-t border-white/10 pt-6">
                  <p className="text-xs font-black uppercase tracking-widest text-white/40 mb-1">Best For</p>
                  <p className="text-sm text-white/70">{mc.audience}</p>
                </div>
              </div>
              <div className="p-10 pt-0">
                <p className="text-gold font-black text-sm mb-6">{mc.investment}</p>
                <Link
                  href={`/programs/${mc.id}`}
                  className="block w-full text-center py-4 border-2 border-gold text-gold font-black uppercase tracking-widest text-xs hover:bg-gold hover:text-black transition-all"
                >
                  View Full Program
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#262626] border border-white/10 p-12 md:p-16 mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold font-black uppercase tracking-widest text-xs mb-4">Building a Full Leadership Bench?</p>
              <h2 className="text-4xl font-black uppercase leading-tight mb-6">
                Run All Three. Get Your Team on the Same Page.
              </h2>
              <p className="text-white/70 leading-relaxed text-lg">
                Many businesses run the Management and Leadership programs simultaneously — managers get certified while senior leaders go deeper. Ask about cohort pricing when enrolling multiple people.
              </p>
            </div>
            <div className="text-center md:text-right">
              <Link
                href="/book"
                className="inline-block bg-gold text-black px-10 py-5 font-black uppercase tracking-widest text-sm hover:bg-white transition-all shadow-xl"
              >
                Talk to a Coach About Team Pricing
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 p-12 bg-white text-black text-center">
          <h2 className="text-3xl md:text-5xl font-black uppercase mb-8 leading-tight">Not Sure Which to Start With?</h2>
          <p className="text-xl mb-10 opacity-70 max-w-xl mx-auto">A free strategy session will identify exactly which program creates the most immediate impact for your team.</p>
          <Link href="/book" className="inline-block bg-black text-white px-12 py-6 text-lg font-black uppercase tracking-widest hover:bg-gold hover:text-black transition-all shadow-2xl">
            Book a Free Strategy Session
          </Link>
        </div>
      </div>
    </div>
  );
}
