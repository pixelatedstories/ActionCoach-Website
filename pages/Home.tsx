
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { CONTACT, TESTIMONIALS, PROGRAMS } from '../constants';

const AbosStep: React.FC<{ number: string; title: string; description: string }> = ({ number, title, description }) => (
  <div className="flex gap-6 group">
    <div className="flex-shrink-0 w-12 h-12 bg-gold text-black flex items-center justify-center font-black text-lg">{number}</div>
    <div>
      <h4 className="font-black text-lg uppercase tracking-tight text-gold mb-1">{title}</h4>
      <p className="text-white/70 text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

const Home: React.FC = () => {
  // Show the first 6 programs (the core ladder, excluding speaking)
  const corePrograms = PROGRAMS.filter(p => p.id !== 'speaking').slice(0, 6);

  return (
    <div className="overflow-x-hidden">
      <Helmet>
        <title>ActionCOACH Business Growth Partners | Business Coaching Asheville NC</title>
        <meta name="description" content="ActionCOACH Business Growth Partners helps small business owners in Asheville and the Carolinas build profitable, self-managing businesses. Led by Master Coach Bill Gilliland." />
        <link rel="canonical" href="https://actioncoach-website.pages.dev/" />
      </Helmet>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1C] via-[#1C1C1C]/90 to-transparent z-10" />
          <img
            src="/images/actioncoach-growth-business-partners-business-seminar-audience.jpeg"
            alt="ActionCOACH Business Growth Partners — Business Seminar"
            className="w-full h-full object-cover hidden md:block"
          />
          <div className="w-full h-full bg-[#1C1C1C] md:hidden" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-2xl">
            <h1 className="hero-h1 text-5xl md:text-7xl font-black mb-6">
              Build an <span className="text-gold">EPIC</span><br />
              Business and Get Off<br />
              the Treadmill.
            </h1>
            <p className="text-xl md:text-2xl text-white/80 font-medium mb-10 leading-relaxed">
              Predictable profits, strong teams, and the business freedom you actually wanted when you started.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <Link to="/pricing" className="inline-block bg-gold text-black px-6 py-5 md:px-8 md:py-6 text-sm font-black uppercase tracking-wider md:tracking-widest leading-tight hover:bg-white transition-all transform hover:scale-105 text-center">
                Get Your Instant Estimate
              </Link>
              <a href={`tel:${CONTACT.PHONE.replace(/\D/g,'')}`} className="inline-block border-2 border-white text-white px-6 py-5 md:px-8 md:py-6 text-sm font-black uppercase tracking-wider md:tracking-widest leading-tight hover:bg-white hover:text-black transition-all text-center">
                {CONTACT.PHONE}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight text-balance">
              Are You Working <span className="text-[#888]">IN</span> Your Business Or <span className="text-gold">ON</span> It?
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Most business owners are trapped in the day-to-day operations. They've built a job for themselves, not a business that works for them.
            </p>
            <div className="space-y-4">
              {['Inconsistent Profits', 'Team Performance Issues', 'Zero Personal Time', 'Stagnant Growth'].map((item, idx) => (
                <div key={idx} className="flex items-center text-lg font-bold">
                  <span className="w-6 h-6 bg-red-500 text-white flex items-center justify-center rounded-full mr-3 text-xs">✕</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#1C1C1C] p-10 shadow-2xl">
            <h3 className="text-gold text-2xl font-black mb-6">The ActionCOACH Difference</h3>
            <p className="text-white text-lg mb-8 leading-relaxed italic">
              "Bill Gilliland is a seasoned entrepreneur who understands real-world challenges. He doesn't just teach theory — he delivers EPIC results."
            </p>
            <Link to="/about" className="text-gold font-bold underline hover:text-white transition-colors inline-flex items-center">
              Meet Bill Gilliland & The Team <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ABoS Section */}
      <section className="py-24 bg-[#1C1C1C]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-gold font-black uppercase tracking-widest text-xs mb-4">The Foundation of Every Program</p>
              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight uppercase">
                The ActionCOACH Business Operating System
              </h2>
              <p className="text-white/70 text-lg mb-8 leading-relaxed">
                ABoS is the proven framework at the core of every ActionCOACH program. It's designed to transform your business into a commercial, profitable enterprise that works without you — giving you freedom, growth, and a lasting legacy.
              </p>
              <p className="text-white/70 text-lg mb-10 leading-relaxed">
                Every 1 to 1 coaching program is built to personally install ABoS in your business. Our group programs teach it. Our masterclasses reinforce it. Everything points back to the same six steps.
              </p>
              <Link
                to="/programs/one-to-one-freedom"
                className="inline-block bg-gold text-black px-8 py-4 text-xs font-black uppercase tracking-widest hover:bg-white transition-all"
              >
                Install ABoS in Your Business
              </Link>
            </div>
            <div className="space-y-8">
              <AbosStep
                number="1"
                title="Mastery"
                description="Gain control over time, money, delivery, and direction. Master your schedule, ensure financial clarity, streamline operations, and set a clear path forward."
              />
              <AbosStep
                number="2"
                title="Marketing"
                description="Create predictable cash flow with a clear niche and the 5 Ways formula. Define your ideal customer, craft compelling offers, and generate consistent leads."
              />
              <AbosStep
                number="3"
                title="Systems"
                description="Install processes that drive consistency and scale. Build efficient workflows, automate repetitive tasks, and run your business like a well-oiled machine."
              />
              <AbosStep
                number="4"
                title="Team"
                description="Build a high-performance team that delivers results without you. Recruit the right people, foster accountability, and empower your team to own their results."
              />
              <AbosStep
                number="5"
                title="Scale"
                description="Multiply growth through strategy, mission, and execution. Develop a clear growth roadmap, align your team, and execute with precision."
              />
              <AbosStep
                number="6"
                title="Freedom"
                description="Step back, sell, or expand — your business runs smoothly without you. Take a real vacation. Plan a profitable exit. Or scale to new heights."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Programs Grid */}
      <section className="py-24 bg-[#262626]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase">Programs Built on ABoS</h2>
          <p className="text-white/60 text-lg">Every program installs, teaches, or reinforces the ABoS system — at the level that's right for you.</p>
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-3 gap-8">
          {corePrograms.map((p) => (
            <div key={p.id} className="group p-8 border border-white/10 hover:border-gold transition-all bg-[#1C1C1C] flex flex-col h-full">
              <h3 className="text-xl font-black text-gold mb-4 uppercase tracking-tighter">{p.title}</h3>
              <p className="text-white/80 mb-8 flex-grow">{p.subtitle}</p>
              <Link to={`/programs/${p.id}`} className="inline-block py-3 border-b-2 border-gold font-black text-xs uppercase tracking-widest group-hover:bg-gold group-hover:text-black group-hover:px-4 transition-all">
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#1C1C1C]">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black mb-4 uppercase tracking-tight">What Clients Are Saying</h2>
          <p className="text-white/50 mb-16 text-lg">Real reviews from real business owners across the Carolinas.</p>
          <div className="grid md:grid-cols-2 gap-10 text-left">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-[#262626] p-8 border border-white/5 hover:border-gold/30 transition-all">
                <span className="text-gold text-5xl leading-none block mb-4 opacity-40">"</span>
                <p className="text-lg italic font-light leading-relaxed mb-6 text-white/90">
                  {t.quote}
                </p>
                <div className="font-black text-gold uppercase tracking-widest text-xs">— {t.author}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 bg-gold text-black text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight uppercase">Ready to Take <br className="hidden md:block"/>Massive Action?</h2>
          <p className="text-xl md:text-2xl font-bold mb-12 opacity-80 text-balance">Find out what business coaching actually costs — and which program fits your situation.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/pricing" className="inline-block bg-black text-white px-8 py-5 md:px-12 md:py-6 text-base md:text-lg font-black uppercase tracking-wider md:tracking-widest leading-tight hover:bg-white hover:text-black transition-all shadow-xl">
              Get Your Instant Estimate
            </Link>
            <Link to="/book" className="inline-block border-2 border-black text-black px-8 py-5 md:px-12 md:py-6 text-base md:text-lg font-black uppercase tracking-wider md:tracking-widest leading-tight hover:bg-black hover:text-white transition-all shadow-xl">
              Book Free Strategy Session
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
