import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import EPICRetreatForm from '@/components/EPICRetreatForm';

export const metadata: Metadata = {
  title: 'EPIC Travel Retreat 2027 — St. Croix, U.S. Virgin Islands',
  description:
    'Join ActionCOACH Business Growth Partners for the 2027 EPIC Travel Retreat at The Buccaneer Resort in St. Croix, USVI. Business growth workshops, three private beaches, and a week your whole family will remember.',
};

const amenities = [
  '3 private beaches',
  'Scenic 18-hole golf course',
  'Two pool areas',
  'Breakfast buffet included',
  '3 onsite restaurants',
  'Watersports center',
  'Full-service spa',
  '8 tennis courts',
  '24-hour fitness center',
  'Discounted group room rate',
];

const workshopIncludes = [
  'Dedicated meeting space',
  'All workshop materials',
  'Lunch & snacks on workshop days',
  'Intimate group dinner for participants & immediate families',
];

const gallery = [
  {
    src: '/images/actioncoach-growth-business-partners-networking-event-group.jpeg',
    alt: 'ActionCOACH group networking at a past retreat',
  },
  {
    src: '/images/Asheville-Business-Summit-6-Large.jpeg',
    alt: 'ActionCOACH business summit attendees',
  },
  {
    src: '/images/actioncoach-growth-business-partners-business-seminar-audience.jpeg',
    alt: 'ActionCOACH business seminar audience',
  },
];

export default function EPICRetreatPage() {
  return (
    <div className="bg-[#1C1C1C] text-white">

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-end pb-20 pt-40">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/images/actioncoach-growth-business-partners-business-seminar-audience.jpeg"
            alt="ActionCOACH retreat group"
            fill
            className="object-cover object-center opacity-25"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] via-[#1C1C1C]/60 to-transparent" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 w-full">
          <span className="inline-block bg-gold text-black text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 mb-6">
            Early Bird Pricing Ends June 30, 2026
          </span>
          <p className="text-gold font-black uppercase tracking-widest text-xs mb-4">
            EPIC Travel Retreat · June 2027
          </p>
          <h1 className="text-5xl md:text-7xl font-black uppercase leading-none tracking-tighter mb-6">
            St. Croix,<br />U.S. Virgin Islands
          </h1>
          <p className="text-white/70 text-xl mb-10 max-w-2xl">
            The Buccaneer Resort · Workshop days June 7–8, 2027. A week of business growth, sunshine, and fellowship with fellow owners and your families.
          </p>
          <a
            href="#register"
            className="inline-flex items-center bg-gold text-black px-8 py-4 font-black uppercase tracking-widest text-sm hover:bg-white transition-colors"
          >
            Reserve Your Spot
          </a>
        </div>
      </section>

      {/* Urgency Banner */}
      <section className="bg-gold py-5 px-4 text-center">
        <p className="text-black font-black uppercase tracking-widest text-sm">
          Register by June 30, 2026 and save 20% — limited spots available
        </p>
      </section>

      {/* What to Expect */}
      <section className="py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-gold font-black uppercase tracking-widest text-xs mb-4">The Buccaneer Resort</p>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-16">
            What to Expect
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-gold font-black uppercase tracking-widest text-xs mb-8">Resort Amenities</h3>
              <ul className="space-y-4">
                {amenities.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/80 font-bold">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gold flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-gold font-black uppercase tracking-widest text-xs mb-8">
                Workshop Days — Mon 6/7 & Tue 6/8
              </h3>
              <ul className="space-y-4 mb-12">
                {workshopIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/80 font-bold">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gold flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-white/50 text-sm">
                Most of the week is yours — relax, play, and connect with the group and your families. On two workshop days we come together for our signature business growth experience.
              </p>
              <p className="text-white/40 text-xs mt-4">
                Dates are tentative (±). Participants are responsible for their own room reservations and airfare.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 px-4 md:px-8 bg-[#141414]">
        <div className="max-w-6xl mx-auto">
          <p className="text-white/40 text-sm font-black uppercase tracking-widest text-center mb-10">
            Join fellow business owners and their families for a week of growth and connection
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {gallery.map(({ src, alt }) => (
              <div key={src} className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className="object-cover object-center hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-gold font-black uppercase tracking-widest text-xs mb-4 text-center">Workshop Investment</p>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-center">
            Pricing
          </h2>
          <p className="text-white/50 text-center mb-16 text-sm">
            Room reservations and airfare are handled separately — your coach will send the group discount code and booking link.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Regular */}
            <div className="bg-[#262626] border border-white/10 p-10">
              <p className="text-white/40 font-black uppercase tracking-widest text-xs mb-8">Regular Pricing</p>
              <div className="mb-6">
                <p className="text-white/60 text-sm font-bold uppercase tracking-wider mb-1">Per Person</p>
                <p className="text-5xl font-black">$1,500</p>
              </div>
              <div className="border-t border-white/10 pt-6">
                <p className="text-white/60 text-sm font-bold uppercase tracking-wider mb-1">
                  Additional from same company
                </p>
                <p className="text-3xl font-black">$750</p>
              </div>
            </div>
            {/* Limited-Time */}
            <div className="bg-gold p-10 relative">
              <span className="absolute top-4 right-4 bg-black text-gold text-[10px] font-black uppercase tracking-widest px-3 py-1">
                Ends June 30
              </span>
              <p className="text-black font-black uppercase tracking-widest text-xs mb-8">Limited-Time Offer</p>
              <div className="mb-6">
                <p className="text-black/70 text-sm font-bold uppercase tracking-wider mb-1">Per Person</p>
                <p className="text-5xl font-black text-black">$1,200</p>
              </div>
              <div className="border-t border-black/20 pt-6">
                <p className="text-black/70 text-sm font-bold uppercase tracking-wider mb-1">
                  Additional from same company
                </p>
                <p className="text-3xl font-black text-black">$600</p>
              </div>
            </div>
          </div>
          <p className="text-white/30 text-xs text-center mt-8">
            Save 20% when you register by June 30, 2026.
          </p>
        </div>
      </section>

      {/* Registration Form */}
      <section id="register" className="py-24 px-4 md:px-8 bg-[#141414]">
        <div className="max-w-3xl mx-auto">
          <p className="text-gold font-black uppercase tracking-widest text-xs mb-4 text-center">
            EPIC Retreat 2027
          </p>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-center">
            Reserve Your Spot
          </h2>
          <p className="text-white/50 text-center mb-12 text-sm">
            Questions? Reach out to your coach for travel logistics, room booking links, and the group discount code.
          </p>
          <EPICRetreatForm />
        </div>
      </section>

    </div>
  );
}
