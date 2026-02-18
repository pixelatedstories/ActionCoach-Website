
import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT, TESTIMONIALS, PROGRAMS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1C] via-[#1C1C1C]/90 to-transparent z-10" />
          <img 
            src="https://picsum.photos/id/1070/1920/1080" 
            alt="Business Background" 
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
              <Link to="/book" className="inline-block bg-gold text-black px-6 py-5 md:px-8 md:py-6 text-sm font-black uppercase tracking-wider md:tracking-widest leading-tight hover:bg-white transition-all transform hover:scale-105 text-center">
                Book Your Free <br className="sm:hidden" /> Strategy Session
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
              "Bill Gilliland is a seasoned entrepreneur who understands real-world challenges. He doesn't just teach theory; he delivers EPIC results."
            </p>
            <Link to="/about" className="text-gold font-bold underline hover:text-white transition-colors inline-flex items-center">
              Meet Bill Gilliland & The Team <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Core Programs Grid */}
      <section className="py-24 bg-[#1C1C1C]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase">World-Class Coaching Programs</h2>
          <p className="text-white/60 text-lg">Scalable systems for every stage of your business journey.</p>
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-3 gap-8">
          {PROGRAMS.slice(0, 6).map((p) => (
            <div key={p.id} className="group p-8 border border-white/10 hover:border-gold transition-all bg-[#262626] flex flex-col h-full">
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
      <section className="py-24 bg-[#262626]">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black mb-16 uppercase tracking-tight">What Our Clients Are Saying</h2>
          <div className="space-y-12">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="relative">
                <span className="text-gold text-8xl absolute -top-10 left-0 opacity-20">"</span>
                <p className="text-2xl md:text-3xl italic font-light leading-relaxed mb-6">
                  {t.quote}
                </p>
                <div className="font-bold text-gold uppercase tracking-widest">— {t.author} {t.company && `| ${t.company}`}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 bg-gold text-black text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight uppercase">Ready to Take <br className="hidden md:block"/>Massive Action?</h2>
          <p className="text-xl md:text-2xl font-bold mb-12 opacity-80 text-balance">Stop guessing. Start growing. Your first strategy session is on us.</p>
          <div className="flex justify-center">
            <Link to="/book" className="inline-block bg-black text-white px-8 py-5 md:px-12 md:py-6 text-base md:text-lg font-black uppercase tracking-wider md:tracking-widest leading-tight hover:bg-white hover:text-black transition-all shadow-xl max-w-sm md:max-w-none">
              Book Your Free 15-Min <br className="md:hidden" /> Strategy Session
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
