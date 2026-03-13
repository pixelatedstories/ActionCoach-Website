import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Montserrat, Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Link from 'next/link';
import Image from 'next/image';
import { CONTACT, LOCATIONS } from '@/constants';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-montserrat',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'ActionCOACH Business Growth Partners | Business Coaching Asheville NC',
    template: '%s | ActionCOACH Business Growth Partners',
  },
  description: 'ActionCOACH Business Growth Partners helps small business owners in Asheville and the Carolinas build profitable, self-managing businesses. Led by Master Coach Bill Gilliland.',
};

function Footer() {
  return (
    <footer className="bg-black py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-4 gap-12 text-left">
        <div className="col-span-2">
          <div className="mb-6">
            <Image
              src="/images/2. Main-logo-Gradient-Icon-Yellow-White-Black Background.jpg"
              alt="ActionCOACH Business Growth Partners"
              width={220}
              height={70}
              className="object-contain"
            />
          </div>
          <p className="text-white/40 mb-8 max-w-sm text-sm">
            ActionCOACH Business Growth Partners is dedicated to the success of business owners across the Carolinas. Led by Master Coach Bill Gilliland.
          </p>
          <div className="text-white/60 text-xs space-y-2 uppercase tracking-widest font-bold">
            <p>{CONTACT.ADDRESS}</p>
            <p>{CONTACT.PHONE}</p>
          </div>
        </div>
        <div>
          <h4 className="text-gold font-black uppercase tracking-widest text-xs mb-8">Navigation</h4>
          <ul className="space-y-4 text-sm font-bold text-white/80">
            <li><Link href="/about" className="hover:text-gold transition-colors">About Us</Link></li>
            <li><Link href="/programs" className="hover:text-gold transition-colors">Our Programs</Link></li>
            <li><Link href="/pricing" className="hover:text-gold transition-colors">Get Instant Estimate</Link></li>
            <li><Link href="/book" className="hover:text-gold transition-colors">Book Strategy Session</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-gold font-black uppercase tracking-widest text-xs mb-8">Locations</h4>
          <ul className="space-y-4 text-sm font-bold text-white/80">
            {LOCATIONS.map(l => (
              <li key={l.id}>
                <Link href={`/locations/${l.id}`} className="hover:text-gold transition-colors">
                  {l.city}, {l.state}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-20 pt-10 border-t border-white/5 text-center text-[10px] text-white/20 uppercase tracking-[0.4em] font-black">
        &copy; {new Date().getFullYear()} ActionCOACH Business Growth Partners. All Rights Reserved.
      </div>
    </footer>
  );
}

function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden flex h-16 shadow-[0_-10px_30px_rgba(0,0,0,0.5)] border-t border-white/5">
      <a
        href={`tel:${CONTACT.PHONE.replace(/\D/g, '')}`}
        className="flex-1 bg-[#262626] text-white flex items-center justify-center font-black uppercase text-xs tracking-tighter border-r border-white/5"
      >
        Call Coach
      </a>
      <Link href="/pricing" className="flex-[2] bg-gold text-black flex items-center justify-center font-black uppercase text-xs tracking-tighter">
        Get Instant Estimate
      </Link>
    </div>
  );
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable}`}>
      <body>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-grow">{children}</main>
          <Footer />
          <MobileStickyBar />
        </div>
      </body>
    </html>
  );
}
