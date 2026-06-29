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
  { icon: 'beach', label: '3 private beaches' },
  { icon: 'golf', label: 'Scenic 18-hole golf course' },
  { icon: 'pool', label: 'Two pool areas' },
  { icon: 'breakfast', label: 'Breakfast buffet included' },
  { icon: 'restaurant', label: '3 onsite restaurants' },
  { icon: 'water', label: 'Watersports center' },
  { icon: 'spa', label: 'Full-service spa' },
  { icon: 'tennis', label: '8 tennis courts' },
  { icon: 'fitness', label: '24-hour fitness center' },
  { icon: 'group', label: 'Group room block available' },
];

const workshopDays = [
  'Full-day business growth sessions with Bill & Jason',
  'Structured frameworks you can apply immediately',
  'Small group environment — real feedback, real work',
  'Peer time with fellow business owners',
];

const workshopIncludes = [
  'Dedicated meeting space',
  'All workshop materials',
  'Lunch & snacks on workshop days',
  'Intimate group dinner for participants & immediate families',
];

const pastDestinations = ['Isle of Palms', 'Curaçao', 'Aruba'];

const gallery = [
  {
    src: '/images/epic-retreat-st-croix-aerial.jpeg',
    alt: 'Aerial view of The Buccaneer Resort and turquoise waters, St. Croix',
    wide: true,
  },
  {
    src: '/images/epic-retreat-st-croix-golf.jpeg',
    alt: 'Golf course at The Buccaneer Resort overlooking the ocean, St. Croix',
    wide: false,
  },
  {
    src: '/images/epic-retreat-st-croix-pool.jpeg',
    alt: 'Pool area at The Buccaneer Resort, St. Croix',
    wide: false,
  },
];

function AmenityIcon({ icon }: { icon: string }) {
  const cls = 'w-7 h-7 text-gold';
  switch (icon) {
    case 'beach':
      return (
        <svg className={cls} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 17h18M6.5 17V9.5a5.5 5.5 0 0111 0V17M12 4v1" />
        </svg>
      );
    case 'golf':
      return (
        <svg className={cls} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <circle cx="12" cy="19" r="2" /><path strokeLinecap="round" d="M12 17V5l6 3-6 3" />
        </svg>
      );
    case 'pool':
      return (
        <svg className={cls} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 17c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2M3 12c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2M12 3a3 3 0 013 3v4" />
        </svg>
      );
    case 'breakfast':
      return (
        <svg className={cls} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8h1a4 4 0 010 8h-1M3 8h14v9a4 4 0 01-4 4H7a4 4 0 01-4-4V8zM6 1v3M10 1v3M14 1v3" />
        </svg>
      );
    case 'restaurant':
      return (
        <svg className={cls} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M3 9h18M5 3v6a7 7 0 0014 0V3" />
        </svg>
      );
    case 'water':
      return (
        <svg className={cls} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12s3-6 9-6 9 6 9 6-3 6-9 6-9-6-9-6z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    case 'spa':
      return (
        <svg className={cls} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s-8-5.5-8-11a8 8 0 0116 0c0 5.5-8 11-8 11z" />
        </svg>
      );
    case 'tennis':
      return (
        <svg className={cls} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" />
          <path strokeLinecap="round" d="M3.5 8.5C6 10 8.5 12 8.5 15.5M20.5 15.5C18 14 15.5 12 15.5 8.5" />
        </svg>
      );
    case 'fitness':
      return (
        <svg className={cls} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 4v16M18 4v16M3 8h3M18 8h3M3 16h3M18 16h3M6 12h12" />
        </svg>
      );
    default:
      return (
        <svg className={cls} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0" />
        </svg>
      );
  }
}

export default function EPICRetreatPage() {
  return (
    <div className="bg-[#1C1C1C] text-white">

      {/* Hero */}
      <section className="relative min-h-screen flex items-end pb-24 pt-40">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/images/epic-retreat-st-croix-aerial.jpeg"
            alt="Aerial view of The Buccaneer Resort, St. Croix"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] via-[#1C1C1C]/50 to-transparent" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 w-full">
          <p className="text-gold font-black uppercase tracking-widest text-xs mb-4">
            EPIC Travel Retreat · June 2–8, 2027
          </p>
          <h1 className="text-5xl md:text-7xl font-black uppercase leading-none tracking-tighter mb-6 max-w-4xl">
            St. Croix awaits — where the water meets the sky and your business grows.
          </h1>
          <p className="text-white/70 text-xl mb-10 max-w-2xl">
            The Buccaneer Resort, St. Croix, U.S. Virgin Islands. Two days of business growth. A week your whole family will remember.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#register"
              className="inline-flex items-center bg-gold text-black px-8 py-4 font-black uppercase tracking-widest text-sm hover:bg-white transition-colors"
            >
              Reserve Your Spot
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center border border-white/30 text-white px-8 py-4 font-black uppercase tracking-widest text-sm hover:bg-white/10 transition-colors"
            >
              See Pricing
            </a>
          </div>
        </div>
      </section>

      {/* Intro Copy */}
      <section className="py-20 px-4 md:px-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gold font-black uppercase tracking-widest text-xs mb-4">The EPIC Travel Retreat</p>
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              This is a week built for business owners who want to grow — and the families who deserve a real vacation. We bring our EPIC Business partners to one of the Caribbean&apos;s most beautiful destinations. Two signature workshop days led by coaches Bill Gilliland and Jason Berry. The rest of the week is yours.
            </p>
            <p className="text-white/50 text-sm leading-relaxed">
              The Buccaneer is one of St. Croix&apos;s most storied resorts — private beaches, three restaurants, a full spa, and 18 holes of golf on a hillside overlooking the Caribbean. Come for the business. Stay for everything else.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/images/epic-retreat-st-croix-pool.jpeg"
              alt="The Buccaneer Resort pool and beach, St. Croix"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 right-0 bg-gold text-black px-5 py-3 font-black uppercase tracking-widest text-xs">
              June 2–8, 2027
            </div>
          </div>
        </div>
      </section>

      {/* Where is St. Croix? */}
      <section className="py-24 px-4 md:px-8 bg-[#141414]">
        <div className="max-w-6xl mx-auto">
          <p className="text-gold font-black uppercase tracking-widest text-xs mb-4 text-center">Location</p>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6 text-center">
            Where is St. Croix?
          </h2>
          <p className="text-white/60 text-center max-w-2xl mx-auto mb-14 text-sm">
            St. Croix is the largest of the U.S. Virgin Islands, sitting 40 miles south of St. Thomas in the Caribbean Sea. No passport needed — just a direct flight from most East Coast hubs.
          </p>
          <div className="relative w-full aspect-[16/7] overflow-hidden">
            <Image
              src="/images/epic-retreat-st-croix-map.png"
              alt="Map showing St. Croix location in the Caribbean"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* A Setting Worth the Trip */}
      <section className="py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-gold font-black uppercase tracking-widest text-xs mb-4">The Buccaneer Resort</p>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-14">
            A setting worth the trip.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="md:col-span-3 relative aspect-[21/9] overflow-hidden">
              <Image
                src={gallery[0].src}
                alt={gallery[0].alt}
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={gallery[1].src}
                alt={gallery[1].alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="md:col-span-2 relative aspect-[4/3] overflow-hidden">
              <Image
                src={gallery[2].src}
                alt={gallery[2].alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* You'll be in good company */}
      <section className="py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-gold font-black uppercase tracking-widest text-xs mb-4">The People</p>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-14">
            You&apos;ll be in good company.
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/epic-retreat-group-aruba.jpg"
                alt="ActionCOACH EPIC Retreat group — Aruba 2026"
                fill
                className="object-cover object-center"
              />
              <div className="absolute bottom-0 left-0 bg-black/70 px-4 py-2">
                <p className="text-white/60 font-black uppercase tracking-widest text-[10px]">Aruba 2026</p>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/epic-retreat-group-isle-of-palms.jpg"
                alt="ActionCOACH EPIC Retreat group — Isle of Palms"
                fill
                className="object-cover object-center"
              />
              <div className="absolute bottom-0 left-0 bg-black/70 px-4 py-2">
                <p className="text-white/60 font-black uppercase tracking-widest text-[10px]">Isle of Palms</p>
              </div>
            </div>
          </div>
          <p className="text-white/50 text-sm mt-8 max-w-2xl">
            This retreat is for EPIC Business owners — serious entrepreneurs building real companies. You&apos;ll grow with peers who get it, and your families will have a week they won&apos;t stop talking about.
          </p>
        </div>
      </section>

      {/* Everything for the Family */}
      <section className="py-24 px-4 md:px-8 bg-[#141414]">
        <div className="max-w-6xl mx-auto">
          <p className="text-gold font-black uppercase tracking-widest text-xs mb-4">Resort Amenities</p>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">
            Everything for the family,<br />while you&apos;re here.
          </h2>
          <p className="text-white/50 text-sm mb-14 max-w-xl">
            The Buccaneer has enough on property to keep every family member busy all week — from the youngest to the most adventurous.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {amenities.map(({ icon, label }) => (
              <div key={label} className="flex flex-col items-center text-center gap-3 p-6 border border-white/10 hover:border-gold/40 transition-colors">
                <AmenityIcon icon={icon} />
                <p className="text-white/80 text-xs font-bold uppercase tracking-wider leading-snug">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two Days of Growth */}
      <section className="py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-gold font-black uppercase tracking-widest text-xs mb-4">The Workshop</p>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-14">
            Two days of growth.<br />A week of you.
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-gold font-black uppercase tracking-widest text-xs mb-8">
                Workshop Days — Mon 6/7 &amp; Tue 6/8
              </h3>
              <ul className="space-y-4 mb-10">
                {workshopDays.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/80 font-bold">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-white/40 text-xs">
                Dates are tentative (±). Participants are responsible for their own room reservations and airfare.
              </p>
            </div>
            <div>
              <h3 className="text-gold font-black uppercase tracking-widest text-xs mb-8">
                Workshop Includes
              </h3>
              <ul className="space-y-4 mb-10">
                {workshopIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/80 font-bold">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-white/50 text-sm">
                Most of the week is yours — relax, play, and connect with the group and your families. Workshop days are where the real work happens.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Past Destinations Strip */}
      <section className="bg-gold py-6 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-black/60 font-black uppercase tracking-widest text-xs">Past EPIC Retreats</p>
          <div className="flex flex-wrap gap-6 items-center">
            {pastDestinations.map((dest) => (
              <span key={dest} className="text-black/50 font-black uppercase tracking-widest text-xs line-through">
                {dest}
              </span>
            ))}
            <span className="text-black font-black uppercase tracking-widest text-sm">
              St. Croix is next.
            </span>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-4 md:px-8 bg-[#141414]">
        <div className="max-w-3xl mx-auto">
          <p className="text-gold font-black uppercase tracking-widest text-xs mb-4 text-center">Workshop Investment</p>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-center">
            Simple, straightforward pricing.
          </h2>
          <p className="text-white/50 text-center mb-14 text-sm">
            Room reservations and airfare are handled separately. Your coach will send the room block link and booking details.
          </p>
          <div className="bg-[#262626] border border-white/10 p-10 max-w-lg mx-auto">
            <p className="text-white/40 font-black uppercase tracking-widest text-xs mb-10">Workshop Registration</p>
            <div className="mb-8">
              <p className="text-white/60 text-sm font-bold uppercase tracking-wider mb-2">Per Person</p>
              <p className="text-6xl font-black">$1,500</p>
            </div>
            <div className="border-t border-white/10 pt-8">
              <p className="text-white/60 text-sm font-bold uppercase tracking-wider mb-2">
                Additional attendee from same company
              </p>
              <p className="text-4xl font-black">$750</p>
            </div>
            <div className="mt-10">
              <a
                href="#register"
                className="inline-flex w-full items-center justify-center bg-gold text-black px-8 py-4 font-black uppercase tracking-widest text-sm hover:bg-white transition-colors"
              >
                Reserve Your Spot
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* The Fine Print */}
      <section className="py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-gold font-black uppercase tracking-widest text-xs mb-4 text-center">Good to Know</p>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-14 text-center">
            The fine print, made simple.
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#262626] border border-white/10 p-8">
              <p className="text-gold font-black uppercase tracking-widest text-xs mb-4">Food &amp; Lodging</p>
              <p className="text-white/70 text-sm leading-relaxed">
                Participants book their own rooms at The Buccaneer using the group room block link your coach provides. Breakfast buffet is included at the resort each morning. Lunch and snacks are covered on both workshop days.
              </p>
            </div>
            <div className="bg-[#262626] border border-white/10 p-8">
              <p className="text-gold font-black uppercase tracking-widest text-xs mb-4">Bring the Family</p>
              <p className="text-white/70 text-sm leading-relaxed">
                This retreat is built with families in mind. The resort has three private beaches, a full spa, pools, golf, and a watersports center. Your family will have a full week of their own while you&apos;re in the workshop — and everyone comes together for a private group dinner.
              </p>
            </div>
            <div className="bg-[#262626] border border-white/10 p-8">
              <p className="text-gold font-black uppercase tracking-widest text-xs mb-4">Bring Your Team</p>
              <p className="text-white/70 text-sm leading-relaxed">
                Bringing another owner from your company? Additional participants from the same business register at $750 per person. Contact your coach to add them after your initial registration.
              </p>
            </div>
            <div className="bg-[#262626] border border-white/10 p-8">
              <p className="text-gold font-black uppercase tracking-widest text-xs mb-4">Cancelation</p>
              <p className="text-white/70 text-sm leading-relaxed">
                Life happens. Reach out to your coach as early as possible if your plans change. Cancelation terms will be outlined in your registration confirmation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-32 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/epic-retreat-st-croix-golf.jpeg"
            alt="Golf course at The Buccaneer Resort, St. Croix"
            fill
            className="object-cover object-center opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] to-[#1C1C1C]/80" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-gold font-black uppercase tracking-widest text-xs mb-6">EPIC Retreat 2027</p>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">
            Don&apos;t miss the tide on this one.
          </h2>
          <p className="text-white/60 mb-10 max-w-xl mx-auto">
            Spots are limited. This is one week a year set aside for your growth and your family — the rest of the year takes care of itself.
          </p>
          <a
            href="#register"
            className="inline-flex items-center bg-gold text-black px-10 py-5 font-black uppercase tracking-widest text-sm hover:bg-white transition-colors"
          >
            Reserve Your Spot
          </a>
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
            Questions about travel logistics or room booking? Reach out to your coach directly.
          </p>
          <EPICRetreatForm />
        </div>
      </section>

    </div>
  );
}
