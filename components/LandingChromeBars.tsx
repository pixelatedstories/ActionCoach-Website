import Image from 'next/image';
import Link from 'next/link';
import { CONTACT } from '@/constants';

/** Logo-only header for landing pages. Deliberately has no links out. */
export function LandingHeader() {
  return (
    <header className="w-full bg-[#1C1C1C] border-b border-white/5">
      {/* Kept small on purpose. The GHL form carries its own logo, so a full-size
          one here just pushes the first input further down the phone screen. */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-3">
        <Image
          src="/images/actioncoach-logo-transparent.png"
          alt="ActionCOACH Business Growth Partners"
          width={132}
          height={40}
          className="object-contain h-9 w-auto"
          priority
        />
      </div>
    </header>
  );
}

/** Minimal legal footer for landing pages. Privacy and terms only. */
export function LandingFooter() {
  return (
    <footer className="w-full bg-black border-t border-white/5">
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] text-white/40 uppercase tracking-[0.22em] font-black text-center">
        <span>
          &copy; {new Date().getFullYear()} {CONTACT.BUSINESS} &middot; {CONTACT.PHONE}
        </span>
        <div className="flex space-x-6">
          <Link href="/privacy" className="hover:text-gold transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-gold transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
