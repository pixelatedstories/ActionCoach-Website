
import React from 'react';
import { Link } from 'react-router-dom';

const Pricing: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-[#1C1C1C] min-h-screen">
      {/* JSON-LD for Google estimator schema */}
      <script
        id="priceguide-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Service price guide",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "item": {
                  "@type": "Service",
                  "name": "Coaching",
                  "offers": {
                    "@type": "AggregateOffer",
                    "priceCurrency": "USD",
                    "lowPrice": 30000,
                    "highPrice": 213000,
                    "offerCount": 1
                  }
                }
              },
              {
                "@type": "ListItem",
                "position": 2,
                "item": {
                  "@type": "Service",
                  "name": "Team Training",
                  "offers": {
                    "@type": "AggregateOffer",
                    "priceCurrency": "USD",
                    "lowPrice": 1500,
                    "highPrice": 150000,
                    "offerCount": 1
                  }
                }
              },
              {
                "@type": "ListItem",
                "position": 3,
                "item": {
                  "@type": "Service",
                  "name": "Strategic Planning",
                  "offers": {
                    "@type": "AggregateOffer",
                    "priceCurrency": "USD",
                    "lowPrice": 3500,
                    "highPrice": 20000,
                    "offerCount": 1
                  }
                }
              }
            ]
          })
        }}
      />

      <div className="max-w-5xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold font-black uppercase tracking-widest text-xs mb-4">Transparent Pricing</p>
          <h1 className="text-5xl md:text-7xl font-black uppercase leading-none tracking-tighter mb-6">
            What Does Coaching Cost?
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Business coaching isn't one-size-fits-all. Use the estimator below to get a customized investment range based on your business situation, goals, and the level of support you need.
          </p>
        </div>

        {/* Pricing Estimator Iframe */}
        <div className="mb-20">
          <iframe
            src="https://app.priceguide.ai/estimator/recn4tuTs6AhGYs6r"
            width="100%"
            style={{
              width: '100%',
              height: '75vh',
              borderTop: '1px solid #333',
              borderBottom: '1px solid #333',
              display: 'block',
            }}
            frameBorder={0}
            title="ActionCOACH Business Coaching Price Estimator"
          />
        </div>

        {/* Context below the tool */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-[#262626] p-8 border border-white/10">
            <h3 className="text-gold font-black uppercase tracking-widest text-xs mb-4">1-to-1 Coaching</h3>
            <p className="text-3xl font-black mb-2">$30k – $213k</p>
            <p className="text-white/50 text-sm leading-relaxed">Annual investment range for personalized coaching programs. Includes 1 to 1 Freedom and Business Unlimited.</p>
          </div>
          <div className="bg-[#262626] p-8 border border-white/10">
            <h3 className="text-gold font-black uppercase tracking-widest text-xs mb-4">Team Training</h3>
            <p className="text-3xl font-black mb-2">$1.5k – $150k</p>
            <p className="text-white/50 text-sm leading-relaxed">12 Week Masterclasses — Management, Leadership, and Sales — for individuals or full teams.</p>
          </div>
          <div className="bg-[#262626] p-8 border border-white/10">
            <h3 className="text-gold font-black uppercase tracking-widest text-xs mb-4">Planning Programs</h3>
            <p className="text-3xl font-black mb-2">$3.5k – $20k</p>
            <p className="text-white/50 text-sm leading-relaxed">GrowthCLUB quarterly sessions and PlanningCLUB comprehensive business planning engagements.</p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gold text-black p-12 md:p-16 text-center">
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-6 leading-tight">
            Ready to Talk Numbers?
          </h2>
          <p className="text-xl font-bold mb-10 opacity-80 max-w-xl mx-auto leading-relaxed">
            The estimator gives you a range. A strategy session gives you the exact program — and exact investment — right for your business.
          </p>
          <Link
            to="/book"
            className="inline-block bg-black text-white px-10 py-5 text-sm font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all shadow-xl"
          >
            Book Your Free Strategy Session
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
