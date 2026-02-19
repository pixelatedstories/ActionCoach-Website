
import React from 'react';
import { TEAM } from '../constants';
import SEO from '../components/SEO';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-[#1C1C1C]">
      <SEO
        title="About Our Coaches | Bill Gilliland, Master Business Coach | ActionCOACH"
        description="Meet Bill Gilliland and Jason Berry, certified ActionCOACH business coaches serving entrepreneurs throughout North and South Carolina. Real experience. Real results."
        canonical="/about"
      />
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-3xl mb-24">
          <h1 className="text-6xl font-black text-gold mb-8 leading-none uppercase">About ActionCOACH <br/>Business Growth Partners</h1>
          <p className="text-2xl font-medium text-white/80 leading-relaxed">
            We are dedicated to improving the lives of business owners, their families, and their communities through world-class coaching, leadership development, and proven business systems.
          </p>
        </div>

        <div className="space-y-32">
          {TEAM.map((member, idx) => (
            <div key={member.name} className={`grid md:grid-cols-2 gap-16 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className={idx % 2 === 1 ? 'md:order-2' : ''}>
                <div className="aspect-square bg-gold p-4">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" width={800} height={800} loading="lazy" decoding="async" />
                </div>
              </div>
              <div className={idx % 2 === 1 ? 'md:order-1' : ''}>
                <h2 className="text-gold text-sm font-black uppercase tracking-[0.3em] mb-4">{member.role}</h2>
                <h3 className="text-4xl md:text-5xl font-black text-white mb-8">{member.name}</h3>
                <p className="text-lg text-white/70 leading-relaxed mb-8">{member.bio}</p>
                <div className="h-1 w-24 bg-gold" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
