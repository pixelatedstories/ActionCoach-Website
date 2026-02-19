
import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { LOCATIONS, CONTACT } from '../constants';
import SEO from '../components/SEO';
import JsonLd from '../components/JsonLd';

const LocationPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const location = LOCATIONS.find(l => l.id === id);

  if (!location) return <Navigate to="/" />;

  const citySchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `ActionCOACH Business Growth Partners — ${location.city}, ${location.state}`,
    description: `Expert business coaching in ${location.city}, ${location.state}. ActionCOACH helps ${location.city} business owners grow revenue, build championship teams, and achieve real business freedom.`,
    url: `https://billgilliland.biz/locations/${location.id}`,
    telephone: '+18283481787',
    areaServed: {
      '@type': 'City',
      name: location.city,
    },
  };

  return (
    <div className="min-h-screen bg-[#1C1C1C]">
      <SEO
        title={`Business Coach ${location.city}, ${location.state} | ActionCOACH Business Growth Partners`}
        description={`Expert business coaching in ${location.city}, ${location.state}. ActionCOACH helps ${location.city} business owners grow revenue, build championship teams & achieve real business freedom.`}
        canonical={`/locations/${location.id}`}
      />
      <JsonLd data={citySchema} />

      {/* City Hero */}
      <section className="relative h-[60vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/70 z-10" />
          <img
            src={location.image}
            alt={`${location.city}, ${location.state} skyline`}
            className="w-full h-full object-cover grayscale"
            width={1920}
            height={1080}
            fetchPriority="high"
          />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h1 className="text-5xl md:text-8xl font-black mb-6 uppercase leading-none">
            Business Coaching in<br/>
            <span className="text-gold">{location.city}, {location.state}</span>
          </h1>
        </div>
      </section>

      {/* Local Content */}
      <section className="py-24 max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl font-black mb-8 uppercase tracking-tighter leading-none">Elite Coaching for {location.city} Business Owners</h2>
          <p className="text-xl text-white/70 leading-relaxed mb-8">
            {location.description} At ActionCOACH Business Growth Partners, we help {location.city} entrepreneurs scale their operations, build championship teams, and achieve massive profitability.
          </p>
          <div className="space-y-6">
             <div className="flex items-center space-x-4">
               <span className="w-10 h-1 bg-gold"></span>
               <span className="font-bold text-lg uppercase tracking-widest">Local Insight, Global Strategy</span>
             </div>
             <p className="text-white/60">We understand the specific market dynamics of the {location.city} area while applying proven global business systems.</p>
          </div>
        </div>

        <div className="bg-[#262626] p-12 flex flex-col justify-center text-center">
          <h3 className="text-2xl font-black mb-6 uppercase">Scale Your {location.city} Business Today</h3>
          <p className="mb-10 text-white/70">Join the ranks of successful entrepreneurs in {location.state} who have transformed their businesses with Bill Gilliland.</p>
          <div className="flex justify-center">
            <Link to="/book" className="inline-block bg-gold text-black px-8 py-5 md:px-12 md:py-6 font-black uppercase tracking-wider md:tracking-widest leading-tight hover:bg-white transition-all text-center max-w-xs md:max-w-none">
              Start Your <br className="md:hidden" /> Strategy Session
            </Link>
          </div>
          <p className="mt-8 font-bold text-lg">
            Or call local:{' '}
            <a href={`tel:${CONTACT.PHONE.replace(/\D/g, '')}`} aria-label={`Call ActionCOACH at ${CONTACT.PHONE}`} className="text-gold hover:underline">
              {CONTACT.PHONE}
            </a>
          </p>
        </div>
      </section>

      {/* City image */}
      <section className="pb-24 max-w-7xl mx-auto px-4 md:px-8">
        <img
          src={location.localImage}
          alt={`${location.city} business district`}
          className="w-full max-w-3xl mx-auto block object-cover shadow-2xl"
          width={800}
          height={600}
          loading="lazy"
          decoding="async"
        />
      </section>
    </div>
  );
};

export default LocationPage;
