import type { Metadata } from 'next';
import Link from 'next/link';
import { PROGRAMS } from '@/constants';

export const metadata: Metadata = {
  title: 'Coaching Programs | ActionCOACH Business Growth Partners',
  description: 'Business coaching programs for WNC owners ready to scale. ActionCOACH Business Growth Partners serves Asheville, Charlotte, Raleigh, and Greenville NC.',
};

export default function ProgramsHub() {
  const corePrograms = PROGRAMS.filter(p => !['growth-club', 'speaking'].includes(p.id));

  return (
    <div className="pt-32 pb-24 bg-[#1C1C1C]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-4xl mb-20">
          <p className="text-gold font-black uppercase tracking-[0.2em] text-xs mb-4">Work With Us</p>
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[0.95] uppercase tracking-tighter">
            Build a business that works,
            <br />
            scales, and gives you freedom.
          </h1>
          <p className="text-2xl text-white/75 font-medium mb-8 leading-relaxed max-w-3xl">
            Most business owners do not have a potential problem. They have a structure, execution, and scale problem.
          </p>
          <div className="grid md:grid-cols-2 gap-4 text-white/70 text-lg mb-10 max-w-4xl">
            {[
              'Growth feels harder than it should.',
              'You are still too involved in day-to-day operations.',
              'Profit is not as predictable as you want.',
              'Your team is not performing at the level you need.',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-[#262626] border border-white/5 p-5">
                <span className="text-gold font-black">•</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="#program-options" className="inline-flex items-center justify-center bg-gold text-black px-8 py-5 text-sm font-black uppercase tracking-widest hover:bg-white transition-all">
              See Coaching Options
            </Link>
            <Link href="/book" className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-5 text-sm font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">
              Book a Session
            </Link>
          </div>
        </div>

        <div id="program-options" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {corePrograms.map((program) => {
            const price = program.investmentOptions?.[0]?.price;
            const period = program.investmentOptions?.[0]?.period;
            return (
              <Link
                key={program.id}
                href={`/programs/${program.id}`}
                className="group bg-[#262626] border border-white/5 p-10 hover:border-gold transition-all duration-300 flex flex-col h-full"
              >
                <div className="mb-8">
                  <div className="h-1 w-12 bg-gold mb-6 group-hover:w-full transition-all duration-500" />
                  <h3 className="text-2xl font-black uppercase leading-tight mb-4 group-hover:text-gold transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed mb-4">
                    {program.subtitle}
                  </p>
                  <p className="text-white/80 leading-relaxed line-clamp-4">
                    {program.description}
                  </p>
                </div>
                <div className="mt-auto pt-8 border-t border-white/5">
                  {price ? (
                    <div className="mb-5">
                      <p className="text-gold text-xs font-black uppercase tracking-widest mb-2">Investment</p>
                      <p className="text-2xl font-black">{price}</p>
                      {period && <p className="text-white/45 text-xs uppercase tracking-widest mt-1">{period}</p>}
                    </div>
                  ) : null}
                  <div className="flex items-center justify-between border-t border-white/5 pt-5 group-hover:border-gold/30">
                    <span className="text-xs font-black uppercase tracking-widest">View Program</span>
                    <span className="text-gold text-2xl group-hover:translate-x-2 transition-transform">→</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-24 grid lg:grid-cols-2 gap-8 items-start">
          <div className="bg-white text-black p-10 md:p-12">
            <p className="text-gold font-black uppercase tracking-[0.2em] text-xs mb-4">They ask, you answer</p>
            <h2 className="text-3xl md:text-4xl font-black uppercase mb-6">Questions owners usually ask first</h2>
            <div className="space-y-6 text-lg leading-relaxed">
              <div>
                <p className="font-black mb-1">How do I know which program fits?</p>
                <p className="text-black/70">Start with planning if you need clarity. Move into ActionCLUB if you want momentum. Choose Private Coaching when you want a higher level of accountability. Use Business Unlimited when the business needs full-scale transformation.</p>
              </div>
              <div>
                <p className="font-black mb-1">What if I am not ready for private coaching?</p>
                <p className="text-black/70">That is common. Most clients grow into the bigger programs by starting with planning or group coaching first.</p>
              </div>
              <div>
                <p className="font-black mb-1">What happens on the first call?</p>
                <p className="text-black/70">We look at where the business is stuck, what is creating the most friction, and which path gives you the fastest practical win.</p>
              </div>
            </div>
          </div>

          <div className="bg-[#262626] border border-white/10 p-10 md:p-12">
            <p className="text-gold font-black uppercase tracking-[0.2em] text-xs mb-4">Not sure where to start?</p>
            <h2 className="text-3xl md:text-4xl font-black uppercase leading-tight mb-6">
              Most clients do not start at the top.
            </h2>
            <p className="text-white/75 text-lg leading-relaxed mb-8">
              The fastest path usually looks like this: start with planning or ActionCLUB, move into Private Coaching, then scale into Business Unlimited.
            </p>
            <div className="space-y-4 mb-10">
              {[
                'Start with Planning or ActionCLUB',
                'Move into Private Coaching',
                'Scale into Business Unlimited',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-white/85 font-bold">
                  <span className="text-gold">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <Link href="/book" className="inline-block bg-gold text-black px-8 py-5 text-sm font-black uppercase tracking-widest hover:bg-white transition-all shadow-2xl">
              Book a Conversation
            </Link>
          </div>
        </div>

        <div className="mt-24 bg-gold p-12 md:p-20 text-black text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase leading-tight">Ready to talk through the right fit?</h2>
          <p className="text-xl md:text-2xl font-bold mb-12 opacity-80 max-w-3xl mx-auto leading-relaxed">
            We will help you pick the path that matches your current stage, your goals, and the level of support you actually need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#program-options" className="inline-block bg-black text-white px-8 py-5 md:px-12 md:py-6 text-base md:text-lg font-black uppercase tracking-wider md:tracking-widest leading-tight hover:bg-white hover:text-black transition-all shadow-2xl">
              View Program Options
            </Link>
            <Link href="/book" className="inline-block border-2 border-black text-black px-8 py-5 md:px-12 md:py-6 text-base md:text-lg font-black uppercase tracking-wider md:tracking-widest leading-tight hover:bg-black hover:text-white transition-all shadow-2xl">
              Book a Session
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
