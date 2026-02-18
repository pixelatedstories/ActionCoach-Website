
import React from 'react';
import { Link } from 'react-router-dom';
import { PROGRAMS } from '../constants';

const ProgramsHub: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-[#1C1C1C]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-3xl mb-24">
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-none uppercase tracking-tighter">
            Coaching <span className="text-gold">Programs</span>
          </h1>
          <p className="text-2xl text-white/70 font-medium">
            Whether you're looking for aggressive growth, management mastery, or team leadership, we have a world-class framework tailored to your business stage.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROGRAMS.map((program) => (
            <Link 
              key={program.id} 
              to={`/programs/${program.id}`}
              className="group bg-[#262626] border border-white/5 p-10 hover:border-gold transition-all duration-300 flex flex-col h-full"
            >
              <div className="mb-8">
                <div className="h-1 w-12 bg-gold mb-6 group-hover:w-full transition-all duration-500" />
                <h3 className="text-2xl font-black uppercase leading-tight mb-4 group-hover:text-gold transition-colors">
                  {program.title}
                </h3>
                <p className="text-white/60 leading-relaxed line-clamp-3 italic">
                  "{program.subtitle}"
                </p>
              </div>
              <div className="mt-auto pt-8 flex items-center justify-between border-t border-white/5 group-hover:border-gold/30">
                <span className="text-xs font-black uppercase tracking-widest">View Program</span>
                <span className="text-gold text-2xl group-hover:translate-x-2 transition-transform">→</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Comparison/Selector CTA */}
        <div className="mt-32 bg-gold p-12 md:p-20 text-black text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase leading-tight">Not sure where to start?</h2>
          <p className="text-xl md:text-2xl font-bold mb-12 opacity-80 max-w-2xl mx-auto leading-relaxed">
            Our Strategy Session is designed to identify the exact lever in your business that will produce the most immediate ROI.
          </p>
          <div className="flex justify-center">
            <Link to="/book" className="inline-block bg-black text-white px-8 py-5 md:px-12 md:py-6 text-base md:text-lg font-black uppercase tracking-wider md:tracking-widest leading-tight hover:bg-white hover:text-black transition-all shadow-2xl max-w-xs md:max-w-none">
              Take the 15-Minute <br className="md:hidden" /> Strategy Audit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramsHub;
