import type { Metadata } from 'next';
import Image from 'next/image';
import WebinarRegisterForm from '@/components/WebinarRegisterForm';

export const metadata: Metadata = {
  title: 'The 4-Hour Hiring Process For Trades — Free Live Webinar',
  description:
    'Free live webinar with Bill Gilliland: build your hiring philosophy, the A-grade attraction system, and a full deselection process. Thursday, August 6, 12:00-1:00 PM ET. Live only, no replay.',
};

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
    answer: 'No. This is a live-only session, there is no replay, so plan to be on the call.',
  },
  {
    question: 'Is there a cost?',
    answer: 'No. It is a free live webinar.',
  },
];

export default function HiringProcessWebinarPage() {
  return (
    <div className="pt-32 pb-24 bg-[#1C1C1C]">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        {/* Hero */}
        <section className="text-center mb-20">
          <p className="text-gold font-black uppercase tracking-[0.28em] text-xs mb-5">
            Free Live Webinar — Trades &amp; Home Service Owners
          </p>
          <h1 className="text-4xl md:text-6xl font-black uppercase leading-[0.95] tracking-tighter mb-6">
            The 4-Hour Hiring Process For Trades
          </h1>
          <p className="text-xl md:text-2xl font-bold text-white/80 max-w-3xl mx-auto mb-8 leading-snug">
            How one contractor grew from 8 employees to 70, without recruiters, job boards, or another bad hire.
          </p>
          <p className="text-white/60 font-bold uppercase tracking-widest text-sm mb-10">
            Thursday, August 6 &middot; 12:00&ndash;1:00 PM ET &middot; Live and free
          </p>
          <a
            href="#register"
            className="inline-block bg-gold text-black px-10 py-5 text-sm font-black uppercase tracking-widest hover:bg-white transition-all shadow-xl"
          >
            Save My Seat
          </a>
          <p className="text-white/45 text-xs uppercase tracking-widest mt-6">
            Bill Gilliland &mdash; ActionCOACH Hall of Fame &middot; Trades &amp; home service coaching for 20+ years
          </p>
        </section>

        {/* The Problem */}
        <section className="py-16 border-t border-white/5">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black uppercase mb-6 leading-tight">
              You didn&apos;t start this business to run HR.
            </h2>
            <p className="text-white/70 text-lg leading-relaxed">
              You got into this because you&apos;re good at the work. Somewhere along the way you became the hiring
              manager too. Now growth is capped by how many good people you can find, train, and keep, and most days
              there&apos;s no system behind any of it. Not gut feel. Not another job post. A system.
            </p>
          </div>
        </section>

        {/* Proof */}
        <section className="py-16 border-t border-white/5">
          <div className="grid lg:grid-cols-[220px_minmax(0,1fr)] gap-10 items-center bg-[#111111] border border-white/10 p-8 md:p-12">
            <Image
              src="/images/Bill-Gilliland.jpg"
              alt="Bill Gilliland, ActionCOACH Hall of Fame"
              width={220}
              height={220}
              className="rounded-full object-cover mx-auto shadow-2xl"
              priority
            />
            <div>
              <p className="text-gold font-black uppercase tracking-[0.2em] text-xs mb-3">
                Real Results
              </p>
              <h2 className="text-2xl md:text-3xl font-black uppercase leading-tight mb-5">
                This is what happens when you install a real hiring system.
              </h2>
              <p className="text-white/80 leading-relaxed mb-4">
                Eric runs a trades business. He&apos;s good at the work, but he was stuck, no hiring philosophy, no
                system, no one in charge of it but him, and he was already stretched too thin to make it work.
              </p>
              <p className="text-white/80 leading-relaxed mb-4">
                We installed the 4-Hour Hiring Process: his philosophy, an attraction system that targets A-grade
                people, and a full deselection process to filter them. A couple of years later, Eric had grown from 8
                employees to 70, and someone else was running the day-to-day.
              </p>
              <p className="text-xl font-bold text-gold leading-snug">
                &ldquo;So now whenever we need people, all we have to do is run our system, and it gets easy to
                grow.&rdquo;
              </p>
              <p className="text-white/45 text-xs uppercase tracking-widest mt-3">Bill Gilliland</p>
            </div>
          </div>
        </section>

        {/* What You'll Build */}
        <section className="py-16 border-t border-white/5">
          <h2 className="text-3xl md:text-4xl font-black uppercase mb-10 text-center leading-tight">
            What You&apos;ll Build
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {buildCards.map((card) => (
              <div key={card.title} className="bg-[#262626] p-6 border border-white/5 hover:border-gold/50 transition-colors">
                <p className="text-lg font-black uppercase tracking-tight mb-2 text-gold">{card.title}</p>
                <p className="text-white/70 leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Who's Hosting */}
        <section className="py-16 border-t border-white/5">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-black uppercase mb-4">
              Bill Gilliland &mdash; ActionCOACH Hall of Fame
            </h2>
            <p className="text-white/70 leading-relaxed">
              Bill has coached trades and home service business owners across the Carolinas for over two decades.
              He&apos;s a Hall of Fame ActionCOACH, one of the highest designations in the global franchise, and has
              helped owners fix broken teams, escape the day-to-day, and grow past what they could do alone.
            </p>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 border-t border-white/5">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-black uppercase mb-4">
              One hour. Live. We do the work together.
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              This isn&apos;t a lecture. Bring a notebook. We build your hiring philosophy and deselection process
              live on the call, so you leave with something usable, not just notes.
            </p>
            <p className="text-white/60 font-bold uppercase tracking-widest text-sm">
              Thursday, August 6 &middot; 12:00&ndash;1:00 PM ET &middot; Live on Zoom &middot; Free
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 border-t border-white/5">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black uppercase mb-10 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question} className="border-b border-white/10 pb-6">
                  <p className="text-lg font-bold mb-2">{faq.question}</p>
                  <p className="text-white/70 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Register */}
        <section id="register" className="py-16 border-t border-white/5">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-black uppercase mb-4 leading-tight">
              Build your hiring system in one hour.
            </h2>
            <p className="text-white/60 font-bold uppercase tracking-widest text-sm">
              Thursday, August 6 &middot; 12:00&ndash;1:00 PM ET &middot; Free
            </p>
          </div>
          <div className="max-w-xl mx-auto bg-[#111111] border border-white/10 shadow-2xl p-4 md:p-8">
            <WebinarRegisterForm />
          </div>
        </section>
      </div>
    </div>
  );
}
