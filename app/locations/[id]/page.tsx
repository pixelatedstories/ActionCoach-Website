import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { LOCATIONS, CONTACT, PROGRAMS, TESTIMONIALS } from '@/constants';

export function generateStaticParams() {
  return LOCATIONS.map(l => ({ id: l.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const location = LOCATIONS.find(l => l.id === id);
  if (!location) return {};
  return {
    title: `Business Coaching in ${location.city}, ${location.state}`,
    description: `ActionCOACH Business Growth Partners serves ${location.city} business owners. ${location.description} Book a free strategy session today.`,
  };
}

export default async function LocationPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const location = LOCATIONS.find(l => l.id === id);
  if (!location) redirect('/');

  const corePrograms = PROGRAMS.filter(p => !['growth-club', 'speaking'].includes(p.id));

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `ActionCOACH Business Growth Partners — ${location.city}`,
    telephone: CONTACT.PHONE,
    url: `https://billgilliland.biz/locations/${location.id}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: location.city,
      addressRegion: location.state,
      addressCountry: 'US',
    },
    areaServed: `${location.city}, ${location.state}`,
    priceRange: '$$',
    openingHours: 'Mo-Fr 09:00-17:00',
  };

  const faqSchema = location.faqs ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: location.faqs.map(f => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  } : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}

      <div className="min-h-screen bg-[#1C1C1C]">

        {/* Hero */}
        <section className="relative h-[60vh] flex items-center pt-20">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/70 z-10" />
            <img
              src={location.image}
              alt={`${location.city}, ${location.state}`}
              className="w-full h-full object-cover grayscale"
            />
          </div>
          <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-8 text-center">
            <p className="text-gold font-black uppercase tracking-widest text-xs mb-4">Business Coaching</p>
            <h1 className="text-5xl md:text-8xl font-black mb-4 uppercase leading-none">
              {location.city}, <span className="text-gold">{location.state}</span>
            </h1>
            {location.headline && (
              <p className="text-xl md:text-2xl text-white/70 font-medium max-w-3xl mx-auto mt-6 leading-relaxed">
                {location.headline}
              </p>
            )}
          </div>
        </section>

        {/* Intro + market context */}
        <section className="py-24 max-w-7xl mx-auto px-4 md:px-8">
          {location.intro ? (
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div>
                <p className="text-gold font-black uppercase tracking-widest text-xs mb-4">Who We Are Here</p>
                <h2 className="text-4xl font-black mb-8 uppercase tracking-tighter leading-none">
                  Coaching built for {location.city} business owners
                </h2>
                <p className="text-xl text-white/70 leading-relaxed mb-6">{location.intro}</p>
                {location.marketDetail && (
                  <p className="text-white/55 leading-relaxed">{location.marketDetail}</p>
                )}
              </div>
              <div className="bg-[#262626] p-10 flex flex-col justify-center">
                <h3 className="text-xl font-black mb-6 uppercase">Ready to talk through where the business is stuck?</h3>
                <p className="mb-8 text-white/70 leading-relaxed">
                  Book a session with Bill and get a clear read on what is holding the business back and what to do next.
                </p>
                <Link
                  href="/book"
                  className="inline-block bg-gold text-black px-8 py-5 font-black uppercase tracking-widest hover:bg-white transition-all text-center text-sm"
                >
                  Book a Session
                </Link>
                <p className="mt-6 font-bold text-sm text-white/60">Or call: {CONTACT.PHONE}</p>
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-black mb-8 uppercase tracking-tighter leading-none">
                  Business coaching for {location.city} owners
                </h2>
                <p className="text-xl text-white/70 leading-relaxed mb-8">{location.description}</p>
                <p className="text-white/55 leading-relaxed">
                  ActionCOACH Business Growth Partners helps business owners build profitable, self-managing businesses. Led by Master Coach Bill Gilliland, we serve entrepreneurs across the Carolinas who are ready for a different level of growth.
                </p>
              </div>
              <div className="bg-[#262626] p-10 flex flex-col justify-center text-center">
                <h3 className="text-xl font-black mb-6 uppercase">Scale your {location.city} business today</h3>
                <p className="mb-8 text-white/70">
                  Book a session and get a clear picture of what is holding the business back.
                </p>
                <Link
                  href="/book"
                  className="inline-block bg-gold text-black px-8 py-5 font-black uppercase tracking-widest hover:bg-white transition-all text-sm"
                >
                  Book a Session
                </Link>
                <p className="mt-6 font-bold text-sm text-white/60">Or call: {CONTACT.PHONE}</p>
              </div>
            </div>
          )}
        </section>

        {/* Who we work with */}
        {location.whoWeWork && (
          <section className="py-20 bg-[#161616]">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
              <p className="text-gold font-black uppercase tracking-widest text-xs mb-4">Who We Work With</p>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-12">
                Industries we serve in {location.city}
              </h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {location.whoWeWork.map((industry) => (
                  <div key={industry} className="bg-[#262626] border border-white/5 p-6 flex items-center gap-4">
                    <span className="text-gold font-black text-lg">→</span>
                    <span className="font-bold uppercase tracking-wide text-sm">{industry}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Local challenges */}
        {location.localChallenges && (
          <section className="py-24 max-w-7xl mx-auto px-4 md:px-8">
            <p className="text-gold font-black uppercase tracking-widest text-xs mb-4">What We Hear Most</p>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-12">
              The problems {location.city} business owners bring us
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {location.localChallenges.map((challenge) => (
                <div key={challenge.title} className="bg-[#262626] border border-white/5 p-8">
                  <div className="h-1 w-10 bg-gold mb-5" />
                  <h3 className="text-lg font-black uppercase tracking-wide mb-3">{challenge.title}</h3>
                  <p className="text-white/65 leading-relaxed">{challenge.body}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Programs */}
        <section className="py-24 bg-[#161616]">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <p className="text-gold font-black uppercase tracking-widest text-xs mb-4">Coaching Programs</p>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-4">
              How we work with {location.city} businesses
            </h2>
            <p className="text-white/60 text-lg mb-12 max-w-2xl">
              Every client starts with a conversation. We pick the program that fits where the business is right now.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {corePrograms.map((program) => {
                const price = program.investmentOptions?.[0]?.price;
                const period = program.investmentOptions?.[0]?.period;
                return (
                  <Link
                    key={program.id}
                    href={`/programs/${program.id}`}
                    className="group bg-[#262626] border border-white/5 p-8 hover:border-gold transition-all duration-300 flex flex-col"
                  >
                    <div className="h-1 w-10 bg-gold mb-5 group-hover:w-full transition-all duration-500" />
                    <h3 className="text-lg font-black uppercase tracking-wide mb-3 group-hover:text-gold transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-white/55 text-sm leading-relaxed mb-6 flex-grow">{program.subtitle}</p>
                    {price && (
                      <div className="pt-4 border-t border-white/5">
                        <p className="text-gold text-xs font-black uppercase tracking-widest mb-1">Investment</p>
                        <p className="text-xl font-black">{price}</p>
                        {period && <p className="text-white/40 text-xs uppercase tracking-widest mt-1">{period}</p>}
                      </div>
                    )}
                  </Link>
                );
              })}
            </div>
            <div className="mt-10 text-center">
              <Link
                href="/programs"
                className="inline-block border border-white/20 text-white px-8 py-4 text-sm font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all"
              >
                See All Programs
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 max-w-7xl mx-auto px-4 md:px-8">
          <p className="text-gold font-black uppercase tracking-widest text-xs mb-4">What Clients Say</p>
          <h2 className="text-4xl font-black uppercase tracking-tighter leading-none mb-12">
            Results from business owners across the Carolinas
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.slice(0, 6).map((t) => (
              <div key={t.author} className="bg-[#262626] border border-white/5 p-8 flex flex-col">
                <p className="text-white/80 leading-relaxed mb-6 flex-grow">"{t.quote}"</p>
                <p className="text-gold font-black text-sm uppercase tracking-widest">{t.author}</p>
                {t.company && <p className="text-white/40 text-xs uppercase tracking-widest mt-1">{t.company}</p>}
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        {location.faqs && (
          <section className="py-24 bg-[#161616]">
            <div className="max-w-4xl mx-auto px-4 md:px-8">
              <p className="text-gold font-black uppercase tracking-widest text-xs mb-4">Common Questions</p>
              <h2 className="text-4xl font-black uppercase tracking-tighter leading-none mb-12">
                Questions from {location.city} business owners
              </h2>
              <div className="space-y-6">
                {location.faqs.map((faq) => (
                  <div key={faq.question} className="bg-[#262626] border border-white/5 p-8">
                    <h3 className="text-base font-black uppercase tracking-wide mb-3">{faq.question}</h3>
                    <p className="text-white/65 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-24 bg-gold text-black text-center">
          <div className="max-w-4xl mx-auto px-4 md:px-8">
            <h2 className="text-4xl md:text-6xl font-black uppercase leading-tight mb-6">
              Ready to get started in {location.city}?
            </h2>
            <p className="text-xl font-bold mb-10 opacity-75 max-w-2xl mx-auto leading-relaxed">
              Book a session with Bill Gilliland and get a clear picture of what the business needs to move forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book"
                className="inline-block bg-black text-white px-10 py-5 text-sm font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all shadow-xl"
              >
                Book a Session
              </Link>
              <Link
                href="/programs"
                className="inline-block border-2 border-black text-black px-10 py-5 text-sm font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all shadow-xl"
              >
                See Coaching Options
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
