import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Marketing Coaching for Trades Businesses in NC | ActionCOACH',
  description: 'Marketing coaching for established trades and field-service businesses in North Carolina. Build a reliable lead-to-job system, improve conversion, and grow without overloading your crews.',
};

const problems = [
  'Your crews need good work, but the leads coming in are inconsistent or poorly qualified.',
  'You are paying for marketing but cannot clearly tell which channels create profitable jobs.',
  'Estimates go out, follow-up is uneven, and too much revenue is left on the table.',
  'The owner is still responsible for sales, marketing, and keeping the schedule full.',
];

const systemSteps = [
  {
    number: '01',
    title: 'Get clear on the right jobs',
    body: 'Identify the work, customers, service areas, and margins that make the business stronger—not just busier.',
  },
  {
    number: '02',
    title: 'Build the lead-to-job system',
    body: 'Connect lead generation, referrals, follow-up, estimating, sales, and scheduling so good opportunities do not stall between the first call and a booked job.',
  },
  {
    number: '03',
    title: 'Run it by the numbers',
    body: 'Use a practical scorecard to see lead sources, conversion, capacity, and job profitability—then make better weekly decisions from the data.',
  },
];

const faqs = [
  {
    question: 'What is marketing coaching for a trades business?',
    answer: 'Marketing coaching helps you build and manage the systems behind reliable growth: the right lead sources, a stronger sales and follow-up process, clear reporting, and accountability for the actions that turn opportunities into profitable work.',
  },
  {
    question: 'Do you offer marketing coaching for small business owners in North Carolina?',
    answer: 'Yes. We work with owners across North Carolina, with a primary focus on established trades and field-service companies. Our core client has crews, trucks, and at least $750,000 in annual revenue, and needs stronger marketing, sales, and operating systems to keep growing.',
  },
  {
    question: 'Is this the same as hiring a marketing agency?',
    answer: 'No. An agency may run campaigns for you. Coaching helps you lead the full growth system inside the business: what jobs to pursue, how leads are handled, how estimates are followed up, what the team owns, and how you measure whether marketing is producing profitable work.',
  },
  {
    question: 'Can coaching help if we already have plenty of leads?',
    answer: 'Yes. More leads do not solve weak qualification, slow follow-up, poor close rates, or unprofitable jobs. We help owners find where the lead-to-job process is leaking and put the right standards and accountability in place.',
  },
  {
    question: 'What if our crews are already at capacity?',
    answer: 'Then the answer is not simply more marketing. We start with capacity, pricing, job mix, and delivery so your growth plan supports the team instead of creating another operational fire.',
  },
];

export default function MarketingCoachingPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="bg-[#1C1C1C]">
        <section className="pt-32 pb-24 md:pt-44 md:pb-32">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-4xl">
              <p className="text-gold font-black uppercase tracking-[0.2em] text-xs mb-5">For established trades and field-service businesses</p>
              <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.95] mb-8">
                Marketing coaching for trades &amp; service businesses.
              </h1>
              <p className="text-xl md:text-2xl text-white/75 font-medium leading-relaxed max-w-3xl mb-10">
                Get more of the right jobs without becoming the marketing department. ActionCOACH helps trades and field-service owners build a marketing and sales system that keeps crews working on profitable jobs—without putting every lead, estimate, and growth decision back on the owner.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <Link href="/book" className="inline-block bg-gold text-black px-8 py-6 text-sm font-black uppercase tracking-widest hover:bg-white transition-all text-center">
                  Book a Marketing Growth Conversation
                </Link>
                <Link href="/programs" className="inline-block border-2 border-white text-white px-8 py-6 text-sm font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all text-center">
                  See Coaching Options
                </Link>
              </div>
              <p className="mt-7 text-white/65 text-sm leading-relaxed max-w-2xl">In your free 15-minute call, we will identify where leads, estimates, follow-up, or capacity are breaking down—and map out the next practical step.</p>
              <p className="mt-4 text-white/50 text-sm font-bold uppercase tracking-wide">Built for owner-led trades and service companies with crews, trucks, and $750K+ in annual revenue.</p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gold text-black">
          <div className="max-w-7xl mx-auto px-4 md:px-8 grid lg:grid-cols-[0.8fr_1.2fr] gap-12 items-center">
            <div>
              <p className="font-black uppercase tracking-[0.2em] text-xs mb-4">Proof from a service business</p>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-tight">Better marketing only matters when it improves the business.</h2>
            </div>
            <div className="bg-black text-white p-8 md:p-10">
              <p className="text-white/75 text-lg leading-relaxed mb-8">Carolina Outdoor Lighting came to ActionCOACH with marketing that was not producing, owner overload, and no confident plan. Coaching improved its marketing strategy, lead quality, and average sale value—alongside stronger team accountability.</p>
              <div className="grid sm:grid-cols-2 gap-6 border-y border-white/20 py-6 mb-7">
                <div>
                  <p className="text-gold text-3xl font-black">2.4x</p>
                  <p className="text-white/60 text-sm font-black uppercase tracking-widest">Sales growth</p>
                </div>
                <div>
                  <p className="text-gold text-3xl font-black">2.9x</p>
                  <p className="text-white/60 text-sm font-black uppercase tracking-widest">Profit growth</p>
                </div>
              </div>
              <Link href="/client-stories/carolina-outdoor-lighting" className="text-gold font-black uppercase tracking-widest text-sm hover:text-white transition-colors">Read the client story →</Link>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white text-black">
          <div className="max-w-7xl mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-gold font-black uppercase tracking-[0.2em] text-xs mb-4">The problem</p>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-tight mb-6">Your crews need good work, not just more leads.</h2>
              <p className="text-xl text-black/70 leading-relaxed">Marketing should create a steady flow of the work your business is built to deliver. When it is disconnected from sales, capacity, and job profitability, it creates noise instead of control.</p>
            </div>
            <div className="space-y-4">
              {problems.map((problem) => (
                <div key={problem} className="flex gap-4 bg-[#F4F4F4] p-6 text-lg font-bold leading-relaxed">
                  <span className="text-gold font-black">→</span>
                  <p>{problem}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-3xl mb-14">
              <p className="text-gold font-black uppercase tracking-[0.2em] text-xs mb-4">The work</p>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-tight mb-6">A marketing system your business can actually run.</h2>
              <p className="text-xl text-white/65 leading-relaxed">This is not a stack of tactics or another campaign someone else owns. We help you put a clear growth system inside the business, then stay with you while the team puts it to work.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {systemSteps.map((step) => (
                <div key={step.number} className="bg-[#262626] border border-white/5 p-8">
                  <p className="text-gold font-black text-2xl mb-10">{step.number}</p>
                  <h3 className="text-xl font-black uppercase tracking-tight mb-4">{step.title}</h3>
                  <p className="text-white/65 leading-relaxed">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-[#161616]">
          <div className="max-w-7xl mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-gold font-black uppercase tracking-[0.2em] text-xs mb-4">Who this is for</p>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-tight mb-6">Built for businesses that have outgrown winging it.</h2>
              <p className="text-xl text-white/65 leading-relaxed">Our best-fit client is a trades or field-service company with a real team, a proven service, and enough revenue that lack of structure is holding growth back. HVAC, plumbing, electrical, roofing, remodeling, restoration, landscaping, pest control, and specialty contractors are especially strong fits.</p>
            </div>
            <div className="bg-gold text-black p-10 md:p-12">
              <p className="font-black uppercase tracking-[0.2em] text-xs mb-5">A better question than “How do we get more leads?”</p>
              <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight leading-tight mb-6">What work do we want more of—and can the business deliver it well?</h3>
              <p className="text-lg font-medium leading-relaxed mb-8">That is where the coaching starts. We look at demand, sales, capacity, margin, and team execution together so growth makes the business stronger instead of more chaotic.</p>
              <Link href="/book" className="inline-block bg-black text-white px-8 py-5 text-sm font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                Talk Through Your Growth System
              </Link>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="max-w-4xl mx-auto px-4 md:px-8">
            <p className="text-gold font-black uppercase tracking-[0.2em] text-xs mb-4">Common questions</p>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-tight mb-12">What owners usually want to know first.</h2>
            <div className="space-y-5">
              {faqs.map((faq) => (
                <div key={faq.question} className="bg-[#262626] border border-white/5 p-8">
                  <h3 className="text-xl font-black uppercase tracking-tight mb-4">{faq.question}</h3>
                  <p className="text-white/65 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-white text-black">
          <div className="max-w-5xl mx-auto px-4 md:px-8 text-center">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-tight mb-6">Ready to find the leak in your lead-to-job system?</h2>
            <p className="text-xl text-black/70 leading-relaxed max-w-3xl mx-auto mb-10">Book a conversation with Bill Gilliland. We will look at what is creating the most friction and whether coaching is the right next move for your business.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book" className="inline-block bg-gold text-black px-8 py-6 text-sm font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all">Book a Conversation</Link>
              <Link href="/client-stories" className="inline-block border-2 border-black px-8 py-6 text-sm font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all">See Client Results</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
