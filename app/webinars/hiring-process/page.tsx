import type { Metadata } from 'next';
import WebinarRegisterForm from '@/components/WebinarRegisterForm';
import WebinarHeroTracking from '@/components/WebinarHeroTracking';
import WebinarProof from '@/components/WebinarProof';
import WebinarHost from '@/components/WebinarHost';

export const metadata: Metadata = {
  title: 'The 4-Hour Hiring Process For Trades — Free Live Webinar',
  description:
    'Free live webinar with Bill Gilliland: build your hiring philosophy, the A-grade attraction system, and a full deselection process. Tuesday, September 22, 2026, 11:45 AM-12:45 PM ET.',
};

const WEBINAR_DATE_LINE = 'Tuesday, September 22, 2026 · 11:45 AM–12:45 PM ET · Live on Zoom';

const heroBullets = [
  'One hour, live. We build it on the call, so you leave with something usable.',
  'Built for trades, construction, and home service owners. Nobody else.',
  'Everyone who registers gets the recording. Questions only get answered live, so bring one.',
];

const buildCards = [
  {
    title: 'Your Hiring Philosophy',
    body: 'Define what "A-grade" actually means for your business, before you write another job post.',
  },
  {
    title: 'The A-Grade Attraction System',
    body: 'Turn hiring from a recruiting scramble into a system that brings the right people to you.',
  },
  {
    title: 'The Full 4-Hour Deselection Process',
    body: 'Walk away with the actual process to filter candidates fast, without guessing.',
  },
  {
    title: 'Bonus: Client Onboarding',
    body: 'A bonus system for onboarding new clients so they are more likely to stay long term.',
  },
];

const faqs = [
  {
    question: 'Is this only for trades and home service businesses?',
    answer:
      'Yes. Bill works specifically with trades, construction, and home service owners, and this webinar is built for that world.',
  },
  {
    question: 'Do I need to prepare anything?',
    answer: 'No. Just show up ready to work through it live.',
  },
  {
    question: 'Will there be a replay?',
    answer:
      'Yes. Everyone who registers gets the recording afterward, so you are covered if the day goes sideways. The one thing the recording cannot do is answer a question about your crew, so be on the call live if you can.',
  },
  {
    question: 'Is there a cost?',
    answer: 'No. It is a free live webinar.',
  },
];

const eventSchema = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: 'The 4-Hour Hiring Process For Trades',
  description:
    'Free live webinar for trades and home service owners. Build your hiring philosophy, the A-grade attraction system, and a full deselection process.',
  startDate: '2026-09-22T11:45:00-04:00',
  endDate: '2026-09-22T12:45:00-04:00',
  eventStatus: 'https://schema.org/EventScheduled',
  eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
  location: {
    '@type': 'VirtualLocation',
    url: 'https://billgilliland.biz/webinars/hiring-process',
  },
  organizer: {
    '@type': 'Organization',
    name: 'ActionCOACH Business Growth Partners',
    url: 'https://billgilliland.biz',
  },
  performer: {
    '@type': 'Person',
    name: 'Bill Gilliland',
  },
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    url: 'https://billgilliland.biz/webinars/hiring-process',
    validFrom: '2026-09-01T00:00:00-04:00',
  },
};

function RegistrationCard({ instanceId }: { instanceId: string }) {
  return (
    <div className="bg-[#111111] border border-white/10 shadow-2xl rounded-2xl p-4 md:p-6">
      <p className="text-lg md:text-xl font-black uppercase tracking-tight text-center mb-1">
        Save your seat
      </p>
      <p className="text-white/50 text-[11px] font-bold uppercase tracking-[0.18em] text-center mb-4">
        Free &middot; Live &middot; One hour
      </p>
      <WebinarRegisterForm instanceId={instanceId} />
    </div>
  );
}

export default function HiringProcessWebinarPage() {
  return (
    <div className="pt-8 md:pt-12 pb-16 bg-[#1C1C1C]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }} />
      <WebinarHeroTracking />

      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/*
          Hero. Mobile order is headline, then form, then the supporting detail, so the
          first input is reachable in one short scroll. On lg the left column stacks
          headline over detail and the form sits in a sticky right rail.
        */}
        <section className="grid lg:grid-cols-[minmax(0,1fr)_440px] lg:grid-rows-[auto_1fr] gap-x-12 items-start">
          <div className="lg:col-start-1 lg:row-start-1">
            <p className="text-gold font-black uppercase tracking-[0.24em] text-[11px] mb-4">
              Free Live Webinar &middot; Trades &amp; Home Service Owners
            </p>
            <h1 className="text-3xl md:text-5xl font-black uppercase leading-[0.98] tracking-tighter mb-4">
              The 4-Hour Hiring Process For Trades
            </h1>
            <p className="text-lg md:text-xl font-bold text-white/80 leading-snug mb-3">
              You probably don&apos;t have a hiring problem. You have a system problem.
            </p>
            <p className="text-white/65 leading-relaxed mb-4">
              How one contractor grew from 8 employees to 70, without recruiters, job boards, or another
              bad hire.
            </p>
            <p className="text-white/55 font-bold uppercase tracking-[0.14em] text-xs mb-8 lg:mb-6">
              {WEBINAR_DATE_LINE}
            </p>
          </div>

          <div className="lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:sticky lg:top-8">
            <RegistrationCard instanceId="hero" />
          </div>

          <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-2">
            <ul className="space-y-3 mb-6">
              {heroBullets.map((bullet) => (
                <li key={bullet} className="flex gap-3 text-white/70 leading-relaxed">
                  <span className="text-gold font-black shrink-0" aria-hidden="true">
                    &rarr;
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <p className="text-white/45 text-[11px] uppercase tracking-[0.18em] border-t border-white/10 pt-5">
              Bill Gilliland &middot; ActionCOACH Hall of Fame &middot; Coaching trades &amp; home service
              owners across the Carolinas for 20+ years
            </p>
          </div>
        </section>

        {/* Proof */}
        <WebinarProof />

        {/* What you'll build */}
        <section className="py-14 border-t border-white/5">
          <h2 className="text-2xl md:text-4xl font-black uppercase mb-8 text-center leading-tight">
            What You&apos;ll Build
          </h2>
          <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {buildCards.map((card) => (
              <div
                key={card.title}
                className="bg-[#262626] p-6 border border-white/5 rounded-xl hover:border-gold/50 transition-colors"
              >
                <p className="text-base font-black uppercase tracking-tight mb-2 text-gold">{card.title}</p>
                <p className="text-white/70 leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Who's leading this */}
        <WebinarHost />

        {/* FAQ + final registration */}
        <section id="register" className="py-14 border-t border-white/5">
          <div className="grid lg:grid-cols-[minmax(0,1fr)_460px] gap-8 lg:gap-12 items-start">
            <div>
              <h2 className="text-2xl md:text-4xl font-black uppercase mb-7 leading-tight">
                Questions
              </h2>
              <div className="space-y-5">
                {faqs.map((faq) => (
                  <div key={faq.question} className="border-b border-white/10 pb-5">
                    <p className="text-base font-bold mb-2">{faq.question}</p>
                    <p className="text-white/70 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-black uppercase leading-tight mb-4 text-center lg:text-left">
                Build your hiring system in one hour.
              </p>
              <RegistrationCard instanceId="footer" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
