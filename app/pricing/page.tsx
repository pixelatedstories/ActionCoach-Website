import type { Metadata } from 'next';
import Link from 'next/link';

const pricingItems = [
  {
    name: 'Business Unlimited',
    price: '$120,000+',
    period: 'annual engagement',
    description: 'Enterprise-level partnership for owners who are ready for full-scale transformation.',
  },
  {
    name: 'Private Coaching',
    price: '$2,500 - $3,500',
    period: 'per month',
    description: 'One-on-one strategic coaching for owners who want higher-level accountability and execution.',
  },
  {
    name: 'ActionCLUB',
    price: '$1,500',
    period: 'full program',
    description: 'High-impact group coaching for owners who want structure, momentum, and support.',
  },
  {
    name: 'Business Operating System (ABoS)',
    price: '$10,000 - $25,000',
    period: 'depending on scope',
    description: 'Standalone system installation for businesses that need structure and consistency.',
  },
  {
    name: '90-Day Planning Experience',
    price: '$495 - $995',
    period: 'per workshop',
    description: 'An interactive planning experience for owners who want clarity, direction, and a 90-day plan.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'ActionCOACH program pricing',
  itemListElement: pricingItems.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'Service',
      name: item.name,
      offers: {
        '@type': 'Offer',
        priceCurrency: 'USD',
        price: item.price,
      },
    },
  })),
};

export const metadata: Metadata = {
  title: 'Program Pricing',
  description: 'See current pricing ranges for ActionCOACH Business Growth Partners programs and pick the path that fits your business.',
};

export default function Pricing() {
  return (
    <div className="pt-32 pb-24 bg-[#1C1C1C] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-gold font-black uppercase tracking-widest text-xs mb-4">Transparent pricing</p>
          <h1 className="text-5xl md:text-7xl font-black uppercase leading-none tracking-tighter mb-6">
            What do these programs cost?
          </h1>
          <p className="text-xl text-white/70 leading-relaxed">
            Here are the current program ranges. We will help you choose the path that fits your business, your goals, and the level of support you need.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {pricingItems.map((item) => (
            <div key={item.name} className="bg-[#262626] p-8 border border-white/10">
              <h3 className="text-gold font-black uppercase tracking-widest text-xs mb-4">{item.name}</h3>
              <p className="text-3xl font-black mb-2">{item.price}</p>
              <p className="text-white/45 text-xs uppercase tracking-widest mb-4">{item.period}</p>
              <p className="text-white/70 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="bg-white text-black p-12 md:p-16">
            <p className="text-gold font-black uppercase tracking-[0.2em] text-xs mb-4">They ask, you answer</p>
            <h2 className="text-3xl md:text-4xl font-black uppercase mb-6">How to think about the investment</h2>
            <div className="space-y-6 text-lg leading-relaxed">
              <div>
                <p className="font-black mb-1">Why does the range vary?</p>
                <p className="text-black/70">The right fit depends on business size, complexity, and how much support the company needs.</p>
              </div>
              <div>
                <p className="font-black mb-1">What if I am not ready for the top program?</p>
                <p className="text-black/70">That is normal. Many owners start with planning or group coaching and grow into the larger engagements.</p>
              </div>
              <div>
                <p className="font-black mb-1">What happens next?</p>
                <p className="text-black/70">Book a session and we will map the right path based on your current stage and goals.</p>
              </div>
            </div>
          </div>

          <div className="bg-gold text-black p-12 md:p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-black uppercase mb-6 leading-tight">
              Ready to talk through the right fit?
            </h2>
            <p className="text-xl font-bold mb-10 opacity-80 max-w-xl mx-auto leading-relaxed">
              The numbers matter, but the real decision is which path will help the business move forward fastest.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/programs"
                className="inline-block bg-black text-white px-10 py-5 text-sm font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all shadow-xl"
              >
                See Coaching Options
              </Link>
              <Link
                href="/book"
                className="inline-block border-2 border-black text-black px-10 py-5 text-sm font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all shadow-xl"
              >
                Book a Session
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
