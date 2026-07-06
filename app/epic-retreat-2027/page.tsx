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
  { icon: 'group', label: 'Discounted group room rate' },
];

const workshopDays = ['Mon 6/7/27', 'Tue 6/8/27'];

const workshopIncludes = [
  'Dedicated meeting space',
  'All workshop materials',
  'Lunch & snacks on workshop days',
  'Intimate group dinner for participants and their families',
];


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
            className="object-cover object-top animate-hero-zoom"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] via-[#1C1C1C]/50 to-transparent" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 w-full">
          <span className="inline-block bg-gold text-black text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 mb-6">
            ★ Member-Voted Destination — June 2027
          </span>
          <h1 className="text-5xl md:text-7xl font-black uppercase leading-none tracking-tighter mb-6 max-w-4xl">
            St. Croix awaits — where the water meets the sky and your personal development grows your business.
          </h1>
          <p className="text-white/70 text-xl mb-10 max-w-2xl">
            Join fellow business owners and their families for a week at The Buccaneer Resort: two days of our signature EPIC Retreat Workshop, and the rest is yours to enjoy.
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
              View Pricing
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
              This isn&apos;t a typical conference. It&apos;s a week built for business owners who want to grow — and the families who&apos;ve earned a break alongside them.
            </p>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              We&apos;re bringing the EPIC Entrepreneurs community to The Buccaneer Resort, one of the Caribbean&apos;s premier properties, for a retreat that balances real strategy with real rest.
            </p>
            <p className="text-white/50 text-sm leading-relaxed">
              Two focused workshop days deliver the growth content you&apos;d expect from an EPIC event. The rest of the week — the beaches, the golf course, the pools, the dinners — is yours.
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
          <p className="text-gold font-black uppercase tracking-widest text-xs mb-4 text-center">Getting There</p>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6 text-center">
            Where is St. Croix?
          </h2>
          <p className="text-white/60 text-center max-w-2xl mx-auto mb-14 text-sm">
            St. Croix is the largest of the U.S. Virgin Islands, tucked in the Caribbean — closer than you&apos;d think, and no passport required for U.S. citizens.
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
                alt="ActionCOACH EPIC Retreat group — Curaçao 2025"
                fill
                className="object-cover object-center"
              />
              <div className="absolute bottom-0 left-0 bg-black/70 px-4 py-2">
                <p className="text-white/60 font-black uppercase tracking-widest text-[10px]">Curaçao 2025</p>
              </div>
            </div>
          </div>
          <p className="text-white/50 text-sm mt-8 max-w-2xl">
            Owners, coaches, key team members, spouses, and kids already share this tradition — sunsets together, real conversations, and a group that feels like family. St. Croix is the next chapter.
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
            Your coaching investment covers the Workshop — your stay is yours to book, with a discounted group rate at one of the Caribbean&apos;s premier resorts.
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
                Workshop Days
              </h3>
              <div className="flex gap-4 mb-8">
                {workshopDays.map((day) => (
                  <div key={day} className="bg-gold text-black px-6 py-4 font-black text-sm uppercase tracking-widest">
                    {day}
                  </div>
                ))}
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Most of the week is yours — relax, play, and connect with the group and your families. On two days during our stay, we come together for our signature EPIC Retreat Workshop.
              </p>
              <p className="text-white/40 text-xs">
                Participants are responsible for their own room reservations and airfare. Reach out to your coach for travel logistics and room booking links.
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
      <section className="bg-gold py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-black/60 font-black uppercase tracking-widest text-xs mb-2 text-center">EPIC Travel Retreat</p>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-black text-center mb-12">
            Four years. Four destinations. One tradition.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-black/10 p-6 text-center">
              <p className="text-black/40 font-black uppercase tracking-widest text-xs mb-2">2024</p>
              <p className="text-black/60 font-black uppercase tracking-tight text-lg line-through">Isle of Palms</p>
              <p className="text-black/40 text-xs uppercase tracking-wider mt-1">Charleston, SC</p>
            </div>
            <div className="bg-black/10 p-6 text-center">
              <p className="text-black/40 font-black uppercase tracking-widest text-xs mb-2">2025</p>
              <p className="text-black/60 font-black uppercase tracking-tight text-lg line-through">Curaçao</p>
              <p className="text-black/40 text-xs uppercase tracking-wider mt-1">Dutch Caribbean</p>
            </div>
            <div className="bg-black/10 p-6 text-center">
              <p className="text-black/40 font-black uppercase tracking-widest text-xs mb-2">2026</p>
              <p className="text-black/60 font-black uppercase tracking-tight text-lg line-through">Aruba</p>
              <p className="text-black/40 text-xs uppercase tracking-wider mt-1">One Happy Island</p>
            </div>
            <div className="bg-black p-6 text-center">
              <p className="text-gold font-black uppercase tracking-widest text-xs mb-2">2027 — You Are Here</p>
              <p className="text-white font-black uppercase tracking-tight text-lg">St. Croix</p>
              <p className="text-white/60 text-xs uppercase tracking-wider mt-1">U.S. Virgin Islands</p>
            </div>
          </div>
          <p className="text-black/70 text-sm max-w-xl mx-auto mt-10 text-center">
            Each year, EPIC Entrepreneurs gather somewhere new — and each year, the memories outlast the workshop. St. Croix is the next chapter.
          </p>
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
              <p className="text-gold font-black uppercase tracking-widest text-xs mb-4">Travel &amp; Lodging</p>
              <p className="text-white/70 text-sm leading-relaxed">
                Participants are responsible for their own room reservations and airfare. A discounted group room rate is available — your coach has the booking link and discount code.
              </p>
            </div>
            <div className="bg-[#262626] border border-white/10 p-8">
              <p className="text-gold font-black uppercase tracking-widest text-xs mb-4">Bring the Family</p>
              <p className="text-white/70 text-sm leading-relaxed">
                This retreat is built for families. The intimate group dinner on workshop days includes participants and their families.
              </p>
            </div>
            <div className="bg-[#262626] border border-white/10 p-8">
              <p className="text-gold font-black uppercase tracking-widest text-xs mb-4">Bring Your Key Team Members</p>
              <p className="text-white/70 text-sm leading-relaxed">
                Owners are encouraged to bring key team members along. Growth sticks when leadership and the people executing the vision are aligned — shared time away accelerates that alignment and fuels growth back home.
              </p>
            </div>
            <div className="bg-[#262626] border border-white/10 p-8">
              <p className="text-gold font-black uppercase tracking-widest text-xs mb-4">Questions?</p>
              <p className="text-white/70 text-sm leading-relaxed">
                Reach out to your coach for travel logistics, room booking links, and the group discount code. We can&apos;t wait to grow together in St. Croix.
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
            Workshop pricing of $1,500 per person ($750 for additional team members from the same company) is open now. Secure your spot for the EPIC Travel Retreat today.
          </p>
          <a
            href="#register"
            className="inline-flex items-center bg-gold text-black px-10 py-5 font-black uppercase tracking-widest text-sm hover:bg-white transition-colors"
          >
            Reserve Your Spot Now
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
