import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Enroll — 12-Week Masterclasses',
  robots: { index: false, follow: false },
};

const masterclasses = [
  { id: 'marketing',   title: '12-Week Marketing Masterclass' },
  { id: 'management',  title: '12-Week Management Masterclass' },
  { id: 'sales',       title: '12-Week Sales Masterclass' },
  { id: 'leadership',  title: '12-Week Leadership Masterclass' },
  { id: 'business',    title: '12-Week Business Masterclass' },
];

export default function EnrollPage() {
  return (
    <div className="pt-32 pb-24 bg-[#1C1C1C] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="mb-16">
          <p className="text-gold font-black uppercase tracking-widest text-xs mb-4">ActionCOACH</p>
          <h1 className="text-5xl md:text-6xl font-black uppercase leading-none tracking-tighter mb-4">
            12-Week Masterclasses
          </h1>
          <p className="text-white/60 text-lg">
            Select a class below to enroll and complete your purchase.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {masterclasses.map((mc) => (
            <Link
              key={mc.id}
              href={`/enroll/${mc.id}`}
              className="group bg-[#262626] border border-white/5 p-8 hover:border-gold transition-all duration-300 flex flex-col"
            >
              <div className="h-1 w-10 bg-gold mb-5 group-hover:w-full transition-all duration-500" />
              <h2 className="text-lg font-black uppercase tracking-wide group-hover:text-gold transition-colors">
                {mc.title}
              </h2>
              <p className="mt-4 text-xs font-black uppercase tracking-widest text-gold opacity-0 group-hover:opacity-100 transition-opacity">
                Enroll →
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
