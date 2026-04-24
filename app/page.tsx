import type { Metadata } from 'next';
import Link from 'next/link';
import { TESTIMONIALS, PROGRAMS } from '@/constants';

export const metadata: Metadata = {
  title: 'ActionCOACH Business Growth Partners | Business Coaching Asheville NC',
  description: 'ActionCOACH Business Growth Partners helps service business owners in Asheville and the Carolinas build businesses that run with more clarity, stronger teams, and less dependence on the owner.',
};

function AbosStep({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="flex gap-6 group">
      <div className="flex-shrink-0 w-12 h-12 bg-gold text-black flex items-center justify-center font-black text-lg">{number}</div>
      <div>
        <h4 className="font-black text-lg uppercase tracking-tight text-gold mb-1">{title}</h4>
        <p className="text-white/70 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default function Home() {
  const featuredPrograms = PROGRAMS.filter(p => !['growth-club', 'speaking'].includes(p.id)).slice(0, 3);
  const testimonials = TESTIMONIALS.slice(0, 4);

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/90 to-transparent z-10" />
          <img
            src="/images/actioncoach-growth-business-partners-business-seminar-audience.jpeg"
            alt="ActionCOACH Business Growth Partners business seminar"
            className="w-full h-full object-cover hidden md:block"
          />
          <div className="w-full h-full bg-[#111111] md:hidden" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-2xl">
            <p className="text-gold font-black uppercase tracking-[0.2em] text-xs mb-5">
              Business coaching for owners who want their time back
            </p>
            <h1 className="hero-h1 text-5xl md:text-7xl font-black mb-6 leading-[0.95] uppercase">
              Build a business that works
              <br />
              without pulling you back in.
            </h1>
            <p className="text-xl md:text-2xl text-white/80 font-medium mb-10 leading-relaxed max-w-xl">
              ActionCOACH Business Growth Partners helps service business owners get clear on what is broken, build stronger teams, and install a system that creates more control, more profit, and more breathing room.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <Link href="/programs" className="inline-block bg-gold text-black px-6 py-5 md:px-8 md:py-6 text-sm font-black uppercase tracking-wider md:tracking-widest leading-tight hover:bg-white transition-all transform hover:scale-105 text-center">
                See Coaching Options
              </Link>
              <Link href="/book" className="inline-block border-2 border-white text-white px-6 py-5 md:px-8 md:py-6 text-sm font-black uppercase tracking-wider md:tracking-widest leading-tight hover:bg-white hover:text-black transition-all text-center">
                Book a Session
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-gold font-black uppercase tracking-[0.2em] text-xs mb-4">
              The problem
            </p>
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight text-balance uppercase">
              When the business keeps pulling you back in
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Most owners do not need more hustle. They need a better way to lead, delegate, and make progress without carrying every decision themselves.
            </p>
            <div className="space-y-4">
              {[
                'Calls, callbacks, and decisions keep landing on your desk.',
                'The team waits on you instead of moving on their own.',
                'Growth feels busy, but the business does not feel lighter.',
                'You keep meaning to work on the business, then the week gets away from you.',
              ].map((item, idx) => (
                <div key={idx} className="flex items-start text-lg font-bold leading-snug">
                  <span className="mt-3 mr-4 inline-flex h-3 w-3 flex-shrink-0 rounded-full bg-gold" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#1C1C1C] p-10 shadow-2xl">
            <p className="text-gold font-black uppercase tracking-[0.2em] text-xs mb-4">The guide</p>
            <h3 className="text-white text-2xl font-black mb-6 uppercase leading-tight">
              You need a guide who has seen this before
            </h3>
            <p className="text-white text-lg mb-8 leading-relaxed">
              Bill Gilliland and the ActionCOACH team work with owners who want a clear path, not another round of vague advice. The work is practical, steady, and built for real businesses with real pressure on the owner.
            </p>
            <Link href="/about" className="text-gold font-bold underline hover:text-white transition-colors inline-flex items-center">
              Meet Bill Gilliland and the team <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Plan Section */}
      <section className="py-24 bg-[#1C1C1C]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-gold font-black uppercase tracking-[0.2em] text-xs mb-4">What this changes</p>
              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight uppercase">Less chaos. More control.</h2>
              <p className="text-white/70 text-lg mb-8 leading-relaxed">
                The goal is to make the business easier to run. We focus on the things owners feel every week: time, team, money, and follow-through.
              </p>
              <div className="space-y-6">
                <AbosStep number="1" title="Less owner bottleneck" description="Stop carrying every decision and every rescue mission yourself." />
                <AbosStep number="2" title="Stronger team execution" description="Give the team more structure so progress does not depend on you being in every room." />
                <AbosStep number="3" title="More predictable growth" description="Turn growth into a clearer operating rhythm instead of constant improvising." />
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <Link href="/programs" className="inline-block bg-gold text-black px-8 py-4 text-xs font-black uppercase tracking-widest hover:bg-white transition-all text-center">
                  See Coaching Options
                </Link>
                <Link href="/book" className="inline-block border-2 border-white text-white px-8 py-4 text-xs font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all text-center">
                  Book a Session
                </Link>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white text-black p-8">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#666] mb-4">Common questions</p>
                <h3 className="text-2xl font-black uppercase mb-4">What owners usually want to know first</h3>
                <div className="space-y-5 text-lg leading-relaxed">
                  <div>
                    <p className="font-black mb-1">What does coaching cost?</p>
                    <p className="text-black/70">The right investment depends on the program, the business, and the level of support. We will talk through fit before anyone commits.</p>
                  </div>
                  <div>
                    <p className="font-black mb-1">How does it work?</p>
                    <p className="text-black/70">You start with a conversation, choose the right path, and build from there with a clear plan around the biggest bottleneck.</p>
                  </div>
                  <div>
                    <p className="font-black mb-1">Who is this for?</p>
                    <p className="text-black/70">Owners who want more control, stronger teams, and a business that does not depend on every decision landing on them.</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#262626] p-8 border border-white/10">
                <p className="text-gold font-black uppercase tracking-[0.2em] text-xs mb-4">Featured programs</p>
                <div className="grid gap-4">
                  {featuredPrograms.map((p) => (
                    <Link key={p.id} href={`/programs/${p.id}`} className="block p-5 border border-white/10 hover:border-gold transition-all">
                      <p className="text-gold font-black uppercase tracking-widest text-[10px] mb-2">Program</p>
                      <h3 className="text-xl font-black uppercase mb-2">{p.title}</h3>
                      <p className="text-white/65 leading-relaxed">{p.subtitle}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#1C1C1C]">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-gold font-black uppercase tracking-[0.2em] text-xs mb-4">Proof</p>
          <h2 className="text-4xl font-black mb-4 uppercase tracking-tight">Real owners. Real progress.</h2>
          <p className="text-white/50 mb-16 text-lg">These are the kinds of outcomes business owners want to see before they make the next move.</p>
          <div className="grid md:grid-cols-2 gap-10 text-left">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-[#262626] p-8 border border-white/5 hover:border-gold/30 transition-all">
                <span className="text-gold text-5xl leading-none block mb-4 opacity-40">&ldquo;</span>
                <p className="text-lg italic font-light leading-relaxed mb-6 text-white/90">{t.quote}</p>
                <div className="font-black text-gold uppercase tracking-widest text-xs">{t.author}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Framework + CTA */}
      <section className="py-24 bg-[#262626] text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-gold font-black uppercase tracking-[0.2em] text-xs mb-4">What changes</p>
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight uppercase">Better structure. Better follow-through. Less chaos.</h2>
          <p className="text-xl md:text-2xl font-bold mb-12 opacity-80 text-balance max-w-3xl mx-auto leading-relaxed">
            We organize the work behind the scenes so the business feels simpler on the front end. That means fewer surprises, more follow-through, and a team that knows what to do without the owner carrying every detail.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-12 text-left">
            {[
              'Time: stop letting the week run you.',
              'Team: create more consistent execution.',
              'Money: make growth easier to predict.',
              'Systems: remove repeated friction points.',
              'Scale: grow with more structure and less chaos.',
              'Freedom: step back without everything falling apart.',
            ].map((item) => (
              <div key={item} className="bg-black/20 border border-white/10 p-5 text-sm font-bold leading-relaxed">
                {item}
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/programs" className="inline-block bg-gold text-black px-8 py-5 md:px-12 md:py-6 text-base md:text-lg font-black uppercase tracking-wider md:tracking-widest leading-tight hover:bg-white transition-all shadow-xl">
              See Coaching Options
            </Link>
            <Link href="/book" className="inline-block border-2 border-white text-white px-8 py-5 md:px-12 md:py-6 text-base md:text-lg font-black uppercase tracking-wider md:tracking-widest leading-tight hover:bg-white hover:text-black transition-all shadow-xl">
              Book a Session
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
