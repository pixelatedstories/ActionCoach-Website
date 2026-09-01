'use client';

import { useEffect } from 'react';
import { trackWebinarLead } from '@/lib/webinarTracking';

export default function HiringProcessThankYouPage() {
  useEffect(() => {
    trackWebinarLead();
  }, []);

  return (
    <div className="pt-20 pb-24 bg-[#1C1C1C]">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <p className="text-gold font-black uppercase tracking-[0.28em] text-xs mb-5">
          You&apos;re Registered
        </p>
        <h1 className="text-3xl md:text-5xl font-black uppercase leading-tight mb-6">
          See you Tuesday, September 22 at 11:45 AM ET.
        </h1>
        <p className="text-white/70 text-lg leading-relaxed mb-8">
          Watch your email for the Zoom link. Put it on your calendar now, and bring a notebook. We build
          your hiring philosophy and deselection process live on the call.
        </p>
        <p className="text-white/70 text-lg leading-relaxed mb-8">
          You will get the recording afterward either way. The one thing it cannot do is answer a question
          about your crew, so come with one if you can make it live.
        </p>
        <a
          href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=The+4-Hour+Hiring+Process+For+Trades&dates=20260922T154500Z/20260922T164500Z&details=Free+live+webinar+with+Bill+Gilliland.+Zoom+link+arrives+by+email.&location=Zoom"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gold text-black px-10 py-5 text-sm font-black uppercase tracking-widest hover:bg-white transition-all shadow-xl"
        >
          Add To Calendar
        </a>
      </div>
    </div>
  );
}
