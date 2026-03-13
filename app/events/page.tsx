import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Events Calendar',
  description: 'Upcoming ActionCOACH Business Growth Partners masterclasses, webinars, and business events in Asheville and the Carolinas.',
};

export default function Events() {
  return (
    <div className="pt-60 pb-40 px-8 text-center bg-[#1C1C1C]">
      <h1 className="text-4xl font-black uppercase tracking-tighter">Events Calendar</h1>
      <p className="mt-4 text-white/60">Upcoming masterclasses and webinars will be listed here soon.</p>
    </div>
  );
}
