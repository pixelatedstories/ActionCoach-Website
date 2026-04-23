import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Success Stories | Business Coaching Results Asheville NC',
  description: 'Real results from real business owners. See how ActionCOACH Business Growth Partners helped WNC entrepreneurs build profitable, self-managing businesses.',
};

export default function Reviews() {
  return (
    <div className="pt-60 pb-40 px-8 text-center bg-[#1C1C1C]">
      <h1 className="text-4xl font-black uppercase tracking-tighter">Success Stories</h1>
      <p className="mt-4 text-white/60">Complete client case studies and deep-dive testimonials coming soon.</p>
    </div>
  );
}
