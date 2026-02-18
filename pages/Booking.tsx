
import React from 'react';
import CalendlyEmbed from '../components/CalendlyEmbed';
import { CONTACT } from '../constants';

const Booking: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-[#1C1C1C]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-black mb-6 uppercase">Book Your Free Strategy Session</h1>
          <p className="text-xl text-white/70">
            Select a time that works for you. In this 15-minute call, we will identify your biggest roadblocks and map out a path to EPIC results.
          </p>
        </div>
        
        <div className="bg-[#262626] p-4 md:p-8 shadow-2xl border border-white/10">
          <CalendlyEmbed url={CONTACT.CALENDLY} />
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="p-8 border border-white/5">
            <h3 className="text-gold font-black mb-2 uppercase">Direct Dial</h3>
            <p className="text-xl font-bold">{CONTACT.PHONE}</p>
          </div>
          <div className="p-8 border border-white/5">
            <h3 className="text-gold font-black mb-2 uppercase">Location</h3>
            <p className="text-xl font-bold">Montreat, NC</p>
          </div>
          <div className="p-8 border border-white/5">
            <h3 className="text-gold font-black mb-2 uppercase">Global Authority</h3>
            <p className="text-xl font-bold">Top Ranked Coach</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
