import type { Metadata } from 'next';
import EventsList from '@/components/EventsList';

export const metadata: Metadata = {
  title: 'Events Calendar',
  description: 'Upcoming ActionCOACH Business Growth Partners masterclasses, webinars, and business events in Asheville and the Carolinas.',
};

export default function Events() {
  return (
    <div className="pt-60 pb-40 px-4 md:px-8 bg-[#1C1C1C]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-black uppercase tracking-tighter mb-4">Events Calendar</h1>
          <p className="text-white/60 max-w-2xl mx-auto">
            Join us for masterclasses, webinars, and business networking events across the Carolinas. Register now to transform your business.
          </p>
        </div>
        <EventsList />
      </div>
    </div>
  );
}
