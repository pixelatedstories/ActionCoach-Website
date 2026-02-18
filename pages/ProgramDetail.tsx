
import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { PROGRAMS } from '../constants';

const ProgramDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const program = PROGRAMS.find(p => p.id === id);

  if (!program) return <Navigate to="/programs" />;

  return (
    <div className="pt-32 pb-24 bg-[#1C1C1C]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <Link to="/" className="text-gold text-xs font-black uppercase tracking-widest mb-12 inline-block">← Back to Services</Link>
        
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[0.9] uppercase">{program.title}</h1>
            <p className="text-2xl font-bold text-gold mb-10 leading-snug">{program.subtitle}</p>
            <p className="text-xl text-white/70 leading-relaxed mb-12">{program.description}</p>
            
            <Link to="/book" className="inline-block bg-gold text-black px-12 py-5 font-black uppercase tracking-widest hover:bg-white transition-all">
              {program.cta}
            </Link>
          </div>

          <div className="bg-[#262626] p-12 border-t-8 border-gold">
            <h3 className="text-2xl font-black mb-8 uppercase">Key Program Focus</h3>
            <ul className="space-y-6">
              {program.features.map((f, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-gold text-2xl mr-4 leading-none">▶</span>
                  <span className="text-lg font-medium">{f}</span>
                </li>
              ))}
            </ul>

            <div className="mt-16 pt-8 border-t border-white/10">
              <p className="text-sm text-white/50 mb-4 uppercase font-bold tracking-widest">Questions?</p>
              <p className="text-xl font-black">Call (828) 348-1787</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramDetail;
