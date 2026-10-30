import type { Metadata } from 'next';
import Image from 'next/image';
import FourExitsSurvey from '@/components/FourExitsSurvey';

export const metadata: Metadata = {
  title: 'Four Exits Self-Check For Trades Owners',
  description:
    'A free five-minute self-check for trades and construction owners. Sixteen yes-or-no questions show which of the four exits you are working on, and Jason Berry calls to walk you through it.',
  // Shared by referral partners, so it stays out of search results and the sitemap.
  robots: { index: false, follow: false },
};

const heroBullets = [
  'Built for trades and construction owners. The questions are about crews, estimates, job costs and checklists, because that is your day.',
  'Leave your details at the end and Jason Berry calls you within 48 hours, at the time you pick. The call is free and carries no obligation.',
  'Jason sees your starting exit and your five-year goal before he calls, so the conversation starts with where your business is today.',
];

const exits = [
  {
    n: 1,
    name: 'Operational Exit',
    short: 'Off the tools',
    stop: 'Running every job',
    start: 'Writing the checklist and training the crew lead',
    sounds: "I'm the first truck in the yard and the last light off in the office. If I don't answer the phone, nothing moves.",
  },
  {
    n: 2,
    name: 'Management Exit',
    short: 'Managers run the day-to-day',
    stop: 'Solving every office problem',
    start: 'A weekly numbers meeting with your managers',
    sounds: 'My crews are good. But every estimate, every hire and every problem still lands on my desk at nine o’clock at night.',
  },
  {
    n: 3,
    name: 'Leadership Exit',
    short: 'The business runs without you',
    stop: 'Being the glue',
    start: 'Setting direction and holding one leader accountable',
    sounds: "I've got good people, but I'm still the glue. I haven't taken a real vacation in years, and when I do, I'm on my phone.",
  },
  {
    n: 4,
    name: 'Board Exit',
    short: 'Built to sell, or to hand down',
    stop: "Wondering what it's worth",
    start: 'Building value and a plan for who carries it',
    sounds: "Everybody asks about my exit plan. Truth is, I don't know what this place is worth, or who'd run it if I stepped away tomorrow.",
  },
];

const credentials = [
  { stat: '25 yrs', label: 'Small business experience' },
  { stat: '6 states', label: 'NC, SC, VA, TN, GA, OH' },
];

const faqs = [
  {
    question: 'What does it cost?',
    answer: 'Nothing. The self-check is free, and so is the call with Jason. You are under no obligation to do anything afterward.',
  },
  {
    question: 'What happens after I finish the questions?',
    answer:
      'Jason Berry gets your answers and calls you within 48 hours, around the time you picked. If you want him sooner, call or text 828-234-8848.',
  },
  {
    question: 'Is this for my kind of business?',
    answer:
      'It is written for trades and construction owners: HVAC, plumbing, electrical, roofing, landscaping, remodeling, painting and general contractors.',
  },
  {
    question: 'Who sent me this?',
    answer:
      'Someone who works with business owners like you thought it was worth five minutes of your time. The survey asks who it was so Jason can thank them for the introduction.',
  },
];

function StartButton({ label }: { label: string }) {
  return (
    <a
      href="#start"
      className="inline-block bg-gold text-black font-black uppercase tracking-widest text-sm px-8 py-4 rounded-lg hover:bg-white transition-colors"
    >
      {label}
    </a>
  );
}

export default function FourExitsPage() {
  return (
    <div className="pt-8 md:pt-12 pb-16 bg-[#1C1C1C]">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Hero. Headline first, survey second on mobile so the first question is one short scroll away. */}
        <section className="grid lg:grid-cols-[minmax(0,1fr)_460px] lg:grid-rows-[auto_1fr] gap-x-12 items-start">
          <div className="lg:col-start-1 lg:row-start-1">
            <p className="text-gold font-black uppercase tracking-[0.24em] text-[11px] mb-5">
              Free 5-Minute Self-Check &middot; Trades &amp; Construction Owners
            </p>
            <h1 className="text-4xl md:text-6xl font-black uppercase leading-[0.94] tracking-tighter mb-5">
              Could your business run for two weeks without you?
            </h1>
            <p className="text-lg md:text-xl font-bold text-white/85 leading-snug mb-8">
              Sixteen yes-or-no questions show which of the four exits you are working on right now, and what to
              fix first.
            </p>
          </div>

          <div id="start" className="lg:col-start-2 lg:row-start-1 lg:row-span-2 scroll-mt-6 mt-2 lg:mt-0">
            <div className="bg-[#111111] border border-white/10 shadow-2xl rounded-2xl p-4 md:p-6">
              <p className="text-lg md:text-xl font-black uppercase tracking-tight text-center mb-1">
                Start the self-check
              </p>
              <p className="text-white/50 text-[11px] font-bold uppercase tracking-[0.18em] text-center mb-4">
                16 questions &middot; About 5 minutes &middot; Free
              </p>
              <FourExitsSurvey />
            </div>
          </div>

          <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-2">
            <ul className="space-y-3 mb-6">
              {heroBullets.map((bullet) => (
                <li key={bullet} className="flex gap-3 text-white/75 text-lg leading-relaxed">
                  <span className="text-gold font-black shrink-0" aria-hidden="true">
                    &rarr;
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <p className="text-white/45 text-[11px] uppercase tracking-[0.18em] border-t border-white/10 pt-5">
              Jason Berry &middot; ActionCOACH Business Growth Partners &middot; 25 years of small business experience
            </p>
          </div>
        </section>

        {/* The four exits */}
        <section className="py-14 border-t border-white/5">
          <h2 className="text-2xl md:text-4xl font-black uppercase mb-4 text-center leading-tight">
            Four exits. Every owner is working toward one.
          </h2>
          <p className="text-white/75 text-lg md:text-xl leading-relaxed text-center max-w-2xl mx-auto mb-10">
            An exit here is a job you hand off because the business no longer needs you for it. Most owners climb
            them in order. The self-check shows you which one is yours today.
          </p>
          <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {exits.map((exit) => (
              <div
                key={exit.n}
                className="bg-[#262626] p-6 border border-white/5 rounded-xl hover:border-gold/50 transition-colors"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span
                    className="shrink-0 w-14 h-14 bg-gold text-black font-black text-3xl flex items-center justify-center rounded-md"
                    aria-hidden="true"
                  >
                    {exit.n}
                  </span>
                  <div>
                    <p className="text-xl md:text-2xl font-black uppercase tracking-tight text-gold leading-tight">
                      Exit {exit.n}: {exit.name}
                    </p>
                    <p className="text-white/60 text-base md:text-lg">{exit.short}</p>
                  </div>
                </div>
                <p className="text-white/85 text-lg md:text-xl italic leading-relaxed mb-5">&ldquo;{exit.sounds}&rdquo;</p>
                <dl className="text-base md:text-lg border-t border-white/10 pt-5 space-y-3">
                  <div className="flex gap-3">
                    <dt className="text-white/50 font-black uppercase tracking-[0.14em] text-xs w-16 shrink-0 pt-1.5">
                      Stop
                    </dt>
                    <dd className="text-white/85">{exit.stop}</dd>
                  </div>
                  <div className="flex gap-3">
                    <dt className="text-gold font-black uppercase tracking-[0.14em] text-xs w-16 shrink-0 pt-1.5">
                      Start
                    </dt>
                    <dd className="text-white/85">{exit.start}</dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <StartButton label="Find your exit" />
          </div>
        </section>

        {/* Time */}
        <section className="py-14 border-t border-white/5">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-black uppercase mb-5 leading-tight">
              Different work. More of your time back.
            </h2>
            <p className="text-white/75 text-lg md:text-xl leading-relaxed mb-6">
              You are already putting in long days, and nobody is asking you to add more to them. Owners Jason
              coaches invest about 4 to 5 hours a week, and most of that replaces time they already lose to putting
              out fires.
            </p>
            <blockquote className="border-l-4 border-gold pl-5 text-left max-w-xl mx-auto">
              <p className="text-xl md:text-2xl font-bold text-white/90">
                &ldquo;The biggest risk you can take is to do nothing.&rdquo;
              </p>
              <footer className="text-white/55 text-xs uppercase tracking-[0.16em] mt-2">
                Brad Sugars, founder of ActionCOACH
              </footer>
            </blockquote>
          </div>
        </section>

        {/* Who calls */}
        <section className="py-14 border-t border-white/5">
          <p className="text-gold font-black uppercase tracking-[0.2em] text-[11px] mb-6 text-center">
            Who Calls You
          </p>
          <div className="max-w-4xl mx-auto bg-[#111111] border border-white/10 rounded-2xl overflow-hidden">
            <div className="grid sm:grid-cols-[220px_minmax(0,1fr)]">
              <div className="relative aspect-square sm:aspect-auto sm:h-full sm:min-h-[260px]">
                <Image
                  src="/images/actioncoach-growth-business-partners-jason-berry-business-coach.jpeg"
                  alt="Jason Berry, business coach with ActionCOACH Business Growth Partners"
                  fill
                  sizes="(max-width: 640px) 100vw, 220px"
                  className="object-cover object-top"
                />
              </div>
              <div className="p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-black uppercase leading-none mb-1">Jason Berry</h2>
                <p className="text-gold font-bold uppercase tracking-[0.14em] text-[11px] mb-5">
                  Business Coach &middot; ActionCOACH Business Growth Partners
                </p>
                <p className="text-white/75 text-lg leading-relaxed mb-6">
                  Jason has 25 years of small business experience. He coaches trades and construction owners across
                  North Carolina, South Carolina, Virginia, Tennessee, Georgia and Ohio, with a focus on management
                  systems, team alignment and getting the operation to run without the owner holding it together.
                </p>
                <dl className="flex flex-col gap-2 sm:grid sm:grid-cols-2 sm:gap-4 border-t border-white/10 pt-5 mb-5">
                  {credentials.map(({ stat, label }) => (
                    <div key={stat} className="flex items-baseline gap-2 sm:block">
                      <dt className="text-gold font-black uppercase tracking-tight text-lg leading-tight whitespace-nowrap">
                        {stat}
                      </dt>
                      <dd className="text-white/55 text-xs uppercase tracking-[0.12em] leading-snug sm:mt-1">
                        {label}
                      </dd>
                    </div>
                  ))}
                </dl>
                <p className="text-white/70 text-base leading-relaxed">
                  <a href="tel:+18282348848" className="hover:text-gold transition-colors">828-234-8848</a>
                  {' '}&middot;{' '}
                  <a href="mailto:jasonberry@actioncoach.com" className="hover:text-gold transition-colors">
                    jasonberry@actioncoach.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Guarantee */}
        <section className="py-14 border-t border-white/5">
          <div className="max-w-3xl mx-auto bg-[#262626] border border-gold/40 rounded-2xl p-6 md:p-8 text-center">
            <p className="text-gold font-black uppercase tracking-[0.22em] text-[11px] mb-3">
              The 17-week guarantee
            </p>
            <p className="text-xl md:text-2xl font-bold leading-snug mb-3">
              If you can&apos;t find our fee in your business within 17 weeks, in more time, a better team or more
              money, we keep coaching you free until you do.
            </p>
            <p className="text-white/60 text-base">Conditions apply. Jason walks you through them on the call.</p>
          </div>
        </section>

        {/* FAQ and final CTA */}
        <section className="py-14 border-t border-white/5">
          <div className="grid lg:grid-cols-[minmax(0,1fr)_380px] gap-8 lg:gap-12 items-start">
            <div>
              <h2 className="text-2xl md:text-4xl font-black uppercase mb-7 leading-tight">Questions</h2>
              <div className="space-y-5">
                {faqs.map((faq) => (
                  <div key={faq.question} className="border-b border-white/10 pb-5">
                    <p className="text-lg md:text-xl font-bold mb-2">{faq.question}</p>
                    <p className="text-white/75 text-base md:text-lg leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center lg:text-left">
              <p className="text-2xl md:text-3xl font-black uppercase leading-tight mb-5">
                Five minutes to see where you stand.
              </p>
              <StartButton label="Take the self-check" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
