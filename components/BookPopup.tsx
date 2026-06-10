'use client';

import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';

const STORAGE_KEY = 'coach-approach-popup-dismissed';
const SUPPRESS_DAYS = 7;
const SCROLL_PERCENT = 0.35; // fires after 35% of page scrolled
const TIME_DELAY_MS = 5000;  // minimum 5s on page before eligible

function isSuppressed(): boolean {
  if (typeof window === 'undefined') return false;
  const ts = localStorage.getItem(STORAGE_KEY);
  if (!ts) return false;
  const days = (Date.now() - Number(ts)) / (1000 * 60 * 60 * 24);
  return days < SUPPRESS_DAYS;
}

export function openBookPopup() {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event('open-book-popup'));
  }
}

export function BookPopup() {
  const [open, setOpen] = useState(false);

  const dismiss = useCallback(() => {
    localStorage.setItem(STORAGE_KEY, String(Date.now()));
    setOpen(false);
  }, []);

  useEffect(() => {
    if (isSuppressed()) return;

    let removeScroll: (() => void) | null = null;

    const timer = setTimeout(() => {
      const onScroll = () => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const pct = scrollable > 0 ? window.scrollY / scrollable : 0;
        if (pct >= SCROLL_PERCENT) {
          setOpen(true);
          window.removeEventListener('scroll', onScroll);
        }
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      removeScroll = () => window.removeEventListener('scroll', onScroll);
    }, TIME_DELAY_MS);

    return () => {
      clearTimeout(timer);
      removeScroll?.();
    };
  }, []);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener('open-book-popup', handler);
    return () => window.removeEventListener('open-book-popup', handler);
  }, []);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0,0,0,0.85)' }}
      onClick={(e) => e.target === e.currentTarget && dismiss()}
    >
      <div
        className="relative w-full max-w-2xl rounded-xl overflow-hidden shadow-2xl flex flex-col sm:flex-row"
        style={{ backgroundColor: '#111111' }}
      >
        <button
          onClick={dismiss}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center text-white/50 hover:text-white transition-colors text-xl leading-none"
          aria-label="Close"
        >
          ×
        </button>

        {/* Book image panel */}
        <div className="flex-shrink-0 flex items-center justify-center p-8 sm:p-10 bg-[#0a0a14] sm:w-52">
          <Image
            src="/images/coach-approach-book.png"
            alt="The Coach Approach by Bill Gilliland"
            width={160}
            height={220}
            className="drop-shadow-2xl object-contain w-32 sm:w-40"
          />
        </div>

        {/* Copy + form panel */}
        <div className="flex flex-col justify-center p-8 flex-1 min-w-0">
          <p className="text-[10px] font-black uppercase tracking-[0.25em] mb-2" style={{ color: '#FFD100' }}>
            Free Book — Get Your Copy
          </p>
          <h2 className="text-2xl font-black uppercase text-white leading-tight mb-1">
            The Coach Approach
          </h2>
          <p className="text-white/50 text-sm mb-4">
            5 Principles to Build an E.P.I.C. Business · Bill Gilliland
          </p>
          <p className="text-white/70 text-sm mb-6 leading-relaxed">
            Most owners are the biggest bottleneck in their own business. This book gives you the framework to change that — more profit, stronger team, more time.
          </p>
          <iframe
            src="https://go.cfastr.com/widget/form/A2rj9ut4no0SKgrhJtpY"
            style={{ width: '100%', height: '220px', border: 'none', borderRadius: '6px' }}
            id="inline-A2rj9ut4no0SKgrhJtpY"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="showOnScrolling"
            data-trigger-value="15"
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Coach Approach Book"
            data-height="402"
            data-layout-iframe-id="inline-A2rj9ut4no0SKgrhJtpY"
            data-form-id="A2rj9ut4no0SKgrhJtpY"
            title="Coach Approach Book"
          />
        </div>
      </div>
    </div>
  );
}
