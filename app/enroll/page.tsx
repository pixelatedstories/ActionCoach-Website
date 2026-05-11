import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Enroll — 12-Week Masterclass',
  robots: { index: false, follow: false },
};

const masterclasses = [
  {
    id: 'marketing',
    title: '12-Week Marketing Masterclass',
    formUrl: 'https://go.cfastr.com/widget/form/7pZBtShYULHEPSkGvXtM',
  },
  {
    id: 'management',
    title: '12-Week Management Masterclass',
    formUrl: 'https://go.cfastr.com/widget/form/bJtOPfm9dvmXQzCbXGqV',
  },
  {
    id: 'sales',
    title: '12-Week Sales Masterclass',
    formUrl: 'https://go.cfastr.com/widget/form/M5lS6BWzzuQyozZVNIZn',
  },
  {
    id: 'leadership',
    title: '12-Week Leadership Masterclass',
    formUrl: 'https://go.cfastr.com/widget/form/heP9t49QADoYqG5X9hyo',
  },
  {
    id: 'business',
    title: '12-Week Business Masterclass',
    formUrl: 'https://go.cfastr.com/widget/form/WUSOXTpZDg2BBP7yB7qn',
  },
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
            Select the class below and complete the enrollment form to reserve your seat.
          </p>
        </div>

        <div className="space-y-20">
          {masterclasses.map((mc) => (
            <div key={mc.id} id={mc.id}>
              <div className="h-1 w-10 bg-gold mb-6" />
              <h2 className="text-2xl font-black uppercase tracking-tight mb-8">{mc.title}</h2>
              <iframe
                src={mc.formUrl}
                title={mc.title}
                className="w-full border-0"
                style={{ minHeight: '560px' }}
                scrolling="no"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
