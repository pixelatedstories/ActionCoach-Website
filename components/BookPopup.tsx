'use client';

import { useEffect, useState, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const STORAGE_KEY = 'coach-approach-popup-dismissed';
const SUPPRESS_DAYS = 7;
const SCROLL_PERCENT = 0.75; // 75% scroll fires it
const TIME_DELAY_MS = 10000; // wait 10s before scroll listener registers
const FALLBACK_MS = 90000;   // fire after 90s on page regardless of scroll

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
  const pathname = usePathname();

  const dismiss = useCallback(() => {
    localStorage.setItem(STORAGE_KEY, String(Date.now()));
    setOpen(false);
  }, []);

  useEffect(() => {
    if (isSuppressed()) return;

    let fired = false;
    let scrollTimer: ReturnType<typeof setTimeout> | null = null;
    let fallbackTimer: ReturnType<typeof setTimeout> | null = null;
    let onScroll: (() => void) | null = null;

    const fire = () => {
      if (fired) return;
      fired = true;
      setOpen(true);
      if (onScroll) window.removeEventListener('scroll', onScroll);
    };

    // Small settling delay so the new page's scroll height is accurate
    const initTimer = setTimeout(() => {
      // Scroll trigger — registers after TIME_DELAY_MS from page settle
      scrollTimer = setTimeout(() => {
        onScroll = () => {
          const footer = document.querySelector('footer');
          const footerVisible = footer
            ? footer.getBoundingClientRect().top < window.innerHeight
            : false;

          if (footerVisible) return;

          const scrollable = document.documentElement.scrollHeight - window.innerHeight;
          const pct = scrollable > 0 ? window.scrollY / scrollable : 0;
          if (pct >= SCROLL_PERCENT) fire();
        };
        window.addEventListener('scroll', onScroll, { passive: true });
      }, TIME_DELAY_MS);

      // Fallback — fires even if the user never scrolls enough
      fallbackTimer = setTimeout(fire, FALLBACK_MS);
    }, 200);

    return () => {
      clearTimeout(initTimer);
      if (scrollTimer) clearTimeout(scrollTimer);
      if (fallbackTimer) clearTimeout(fallbackTimer);
      if (onScroll) window.removeEventListener('scroll', onScroll);
    };
  }, [pathname]);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener('open-book-popup', handler);
    return () => window.removeEventListener('open-book-popup', handler);
  }, []);

  // Always render so the iframe preloads — toggle visibility only
  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4 transition-opacity duration-200"
      style={{
        backgroundColor: open ? 'rgba(0,0,0,0.85)' : 'transparent',
        opacity: open ? 1 : 0,
        pointerEvents: open ? 'auto' : 'none',
        visibility: open ? 'visible' : 'hidden',
      }}
      onClick={(e) => e.target === e.currentTarget && dismiss()}
    >
      <div
        className="relative w-full sm:max-w-2xl rounded-t-2xl sm:rounded-xl shadow-2xl flex flex-col"
        style={{ backgroundColor: '#111111', maxHeight: '90vh' }}
      >
        {/* Sticky close — always visible at top */}
        <div className="sticky top-0 z-10 flex justify-end px-4 pt-3 pb-1 rounded-t-2xl sm:rounded-t-xl" style={{ backgroundColor: '#111111' }}>
          <button
            onClick={dismiss}
            className="w-8 h-8 flex items-center justify-center text-white/50 hover:text-white transition-colors text-2xl leading-none"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        {/* Scrollable body */}
        <div className="overflow-y-auto flex flex-col sm:flex-row flex-1 min-h-0">

          {/* Mobile: compact image + heading row */}
          <div className="flex sm:hidden items-center gap-4 px-5 pb-4">
            <Image
              src="/images/coach-approach-book.png"
              alt="The Coach Approach"
              width={72}
              height={100}
              className="flex-shrink-0 drop-shadow-xl object-contain"
            />
            <div>
              <p className="text-[9px] font-black uppercase tracking-[0.2em] mb-1" style={{ color: '#FFD100' }}>
                Free Book
              </p>
              <h2 className="text-lg font-black uppercase text-white leading-tight">
                The Coach Approach
              </h2>
              <p className="text-white/40 text-xs mt-0.5">Bill Gilliland</p>
            </div>
          </div>

          {/* Desktop: left image panel */}
          <div className="hidden sm:flex flex-shrink-0 items-center justify-center px-10 py-10 bg-[#0a0a14] w-72">
            <Image
              src="/images/coach-approach-book.png"
              alt="The Coach Approach by Bill Gilliland"
              width={220}
              height={300}
              className="drop-shadow-2xl object-contain"
            />
          </div>

          {/* Copy + form */}
          <div className="flex flex-col px-5 pb-6 sm:p-8 flex-1 min-w-0">
            {/* Desktop heading */}
            <div className="hidden sm:block mb-4">
              <p className="text-[10px] font-black uppercase tracking-[0.25em] mb-2" style={{ color: '#FFD100' }}>
                Free Book — Get Your Copy
              </p>
              <h2 className="text-2xl font-black uppercase text-white leading-tight mb-1">
                The Coach Approach
              </h2>
              <p className="text-white/50 text-sm mb-3">
                5 Principles to Build an E.P.I.C. Business · Bill Gilliland
              </p>
            </div>

            <p className="text-white/70 text-sm mb-4 leading-relaxed">
              Most owners are the biggest bottleneck in their own business. This book gives you the framework to change that — more profit, stronger team, more time.
            </p>

            <iframe
              src="https://go.cfastr.com/widget/form/A2rj9ut4no0SKgrhJtpY"
              style={{ width: '100%', height: '420px', border: 'none', borderRadius: '6px', display: 'block' }}
              id="inline-A2rj9ut4no0SKgrhJtpY"
              data-form-name="Coach Approach Book"
              data-form-id="A2rj9ut4no0SKgrhJtpY"
              title="Coach Approach Book"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
