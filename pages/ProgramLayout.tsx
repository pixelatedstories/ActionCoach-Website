
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Program, FAQ, InvestmentOption } from '../types';

interface ProgramLayoutProps {
  program: Program;
}

const FAQItem: React.FC<{ faq: FAQ }> = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/10">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 text-left flex justify-between items-center group"
      >
        <span className="text-lg md:text-xl font-bold group-hover:text-gold transition-colors">{faq.question}</span>
        <span className={`text-gold text-2xl transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>+</span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="text-white/70 leading-relaxed">{faq.answer}</p>
      </div>
    </div>
  );
};

const ProgramLayout: React.FC<ProgramLayoutProps> = ({ program }) => {
  const isSpeaking = program.id === 'speaking';
  
  return (
    <div className="pt-32 pb-24 bg-[#1C1C1C]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <Link to="/programs" className="text-gold text-xs font-black uppercase tracking-widest mb-12 inline-flex items-center group">
          <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span> Back to Programs
        </Link>
        
        {/* Header Section */}
        <div className="grid lg:grid-cols-5 gap-16 mb-24">
          <div className="lg:col-span-3">
            <h1 className="text-4xl md:text-7xl font-black mb-8 leading-[0.95] uppercase tracking-tighter max-w-2xl">
              {program.title.split(':').map((part, i) => (
                <React.Fragment key={i}>
                  {part}
                  {i === 0 && program.title.includes(':') && <span className="text-gold">:</span>}
                  <br className="hidden md:block" />
                </React.Fragment>
              ))}
            </h1>
            <p className="text-xl md:text-3xl font-bold text-gold mb-10 leading-tight">
              {program.subtitle}
            </p>
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-12">
                {program.description}
              </p>
            </div>
            
            <Link to="/book" className="inline-block bg-gold text-black px-8 py-5 md:px-12 md:py-6 text-sm font-black uppercase tracking-wider md:tracking-widest leading-tight hover:bg-white transition-all transform hover:-translate-y-1 shadow-xl max-w-sm md:max-w-none text-center">
              {program.cta}
            </Link>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-[#262626] p-10 border-t-8 border-gold shadow-2xl relative overflow-hidden group">
              <h3 className="text-2xl font-black mb-8 uppercase tracking-tight">
                {isSpeaking ? 'Bill Delivers' : 'Key Program Benefits'}
              </h3>
              <ul className="space-y-6">
                {program.features.map((f, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-gold text-lg mr-4 mt-1">
                       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                    </span>
                    <span className="text-lg font-bold text-white/90">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Deep Dive: Is this for you? */}
        {program.isForYou && (
          <section className="py-24 border-t border-white/5">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-black uppercase mb-8 leading-tight">
                  {isSpeaking ? 'Events That Drive Impact' : `Is This Program For You?`}
                </h2>
                <p className="text-xl text-white/60 mb-8 italic">
                  {isSpeaking ? '"Book Bill to bring authentic expertise to your stage."' : '"If you\'re seeking a personalized path to freedom, this is your answer."'}
                </p>
                <div className="space-y-4">
                  {program.isForYou.map((q, i) => (
                    <div key={i} className="flex items-center space-x-4 bg-white/5 p-4 border-l-4 border-gold">
                      <span className="text-gold font-bold">{isSpeaking ? '•' : '?'}</span>
                      <p className="font-bold text-white/90">{q}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gold p-12 text-black">
                <h3 className="text-3xl font-black mb-6 uppercase">
                   {isSpeaking ? "Bill's Speaking Topics" : "What You'll Gain"}
                </h3>
                <ul className="space-y-6">
                  {program.whatYoullGain?.map((g, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-2xl mr-4 leading-none">•</span>
                      <p className="font-bold leading-snug">{g}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* Deep Dive: The Journey */}
        {program.journeyIncludes && (
          <section className="py-24 border-t border-white/5">
            <h2 className="text-4xl font-black uppercase mb-16 text-center">
               {isSpeaking ? 'Ideal Speaking Venues' : 'The 12-Week Roadmap Includes:'}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {program.journeyIncludes.map((item, i) => (
                <div key={i} className="bg-[#262626] p-6 border border-white/5 hover:border-gold/50 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-gold rotate-45"></div>
                    <span className="text-sm font-bold uppercase tracking-tight">{item}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Pricing / Investment Options */}
        {program.investmentOptions && (
          <section className="py-24 border-t border-white/5">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-black uppercase mb-4">Investment Options</h2>
              <p className="text-xl text-white/60">Choose the path that best fits your goals and commitment.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {program.investmentOptions.map((opt, i) => (
                <div key={i} className={`p-10 border-2 ${i === 1 ? 'border-gold bg-gold/5' : 'border-white/10 bg-[#262626]'} flex flex-col`}>
                  <div className="mb-8">
                    <span className="text-xs font-black uppercase tracking-[0.2em] text-gold mb-4 block">{opt.bestFor}</span>
                    <h3 className="text-3xl font-black uppercase mb-2">{opt.name}</h3>
                    <div className="flex items-baseline space-x-2">
                      <span className="text-5xl font-black">{opt.price}</span>
                      <span className="text-white/40 font-bold uppercase text-xs">{opt.period}</span>
                    </div>
                  </div>
                  <p className="text-white/70 mb-10 flex-grow leading-relaxed italic">"{opt.description}"</p>
                  <ul className="space-y-4 mb-12">
                    {opt.features?.map((f, fi) => (
                      <li key={fi} className="flex items-center text-sm font-bold">
                        <span className="text-gold mr-3">✓</span> {f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/book" className={`block w-full text-center py-5 font-black uppercase tracking-widest transition-all ${i === 1 ? 'bg-gold text-black hover:bg-white' : 'border-2 border-white text-white hover:bg-white hover:text-black'}`}>
                    Subscribe & Enroll
                  </Link>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* FAQs */}
        {program.faqs && (
          <section className="py-24 border-t border-white/5">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-black uppercase mb-12 text-center">Frequently Asked Questions</h2>
              <div className="space-y-2">
                {program.faqs.map((faq, i) => (
                  <FAQItem key={i} faq={faq} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Bottom CTA */}
        <div className="mt-24 p-12 bg-white text-black text-center">
          <h2 className="text-3xl md:text-5xl font-black uppercase mb-8 leading-tight">Ready to Take <br/>Massive Action?</h2>
          <Link to="/book" className="inline-block bg-black text-white px-12 py-6 text-lg font-black uppercase tracking-widest hover:bg-[#F5C400] hover:text-black transition-all shadow-2xl">
            Book a Free Strategy Session
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProgramLayout;
