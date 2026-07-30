'use client';

import { useEffect } from 'react';
import Link from 'next/link';

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export default function HiringProcessThankYouPage() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Lead', {
        content_name: 'Webinar - 4-Hour Hiring Process',
      });
    }
  }, []);

  return (
    <div className="pt-32 pb-24 bg-[#1C1C1C]">
      <div className="max-w-2xl mx-auto px-4 md:px-8 text-center">
        <p className="text-gold font-black uppercase tracking-[0.28em] text-xs mb-5">
          You&apos;re Registered
        </p>
        <h1 className="text-3xl md:text-5xl font-black uppercase leading-tight mb-6">
          See you Thursday, August 20 at noon ET.
        </h1>
        <p className="text-white/70 text-lg leading-relaxed mb-8">
          Watch your email and phone for the details. This one is live only, no replay, so mark your calendar now.
        </p>
        <Link
          href="/"
          className="inline-block bg-gold text-black px-10 py-5 text-sm font-black uppercase tracking-widest hover:bg-white transition-all shadow-xl"
        >
          Back to billgilliland.biz
        </Link>
      </div>
    </div>
  );
}
