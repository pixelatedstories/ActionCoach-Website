'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Event {
  id: string;
  name: {
    text: string;
  };
  description?: {
    text: string;
  };
  start: {
    utc: string;
    timezone: string;
  };
  end: {
    utc: string;
    timezone: string;
  };
  url: string;
}

export default function EventsList() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('/api/events');
        if (!response.ok) throw new Error('Failed to fetch events');
        const data = await response.json();
        setEvents(data.events || []);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : 'Failed to load events'
        );
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return (
      <div className="py-20 text-center">
        <p className="text-white/60">Loading events...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-20 text-center">
        <p className="text-white/60">Unable to load events at this time.</p>
      </div>
    );
  }

  if (events.length === 0) {
    return (
      <div className="py-20 text-center">
        <p className="text-white/60">No upcoming events scheduled yet.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {events.map((event) => {
        const startDate = new Date(event.start.utc);
        const endDate = new Date(event.end.utc);
        const formattedDate = startDate.toLocaleDateString('en-US', {
          weekday: 'long',
          month: 'long',
          day: 'numeric',
          year: 'numeric',
        });
        const formattedStartTime = startDate.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
        });
        const formattedEndTime = endDate.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
        });

        return (
          <div
            key={event.id}
            className="border border-white/10 bg-[#262626] p-8 hover:border-gold transition-colors"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div className="flex-grow">
                <h3 className="text-2xl font-black uppercase tracking-tighter mb-2">
                  {event.name.text}
                </h3>
                <div className="text-white/60 space-y-2 mb-4 text-sm">
                  <p className="font-bold text-gold">
                    {formattedDate}
                  </p>
                  <p>
                    {formattedStartTime} – {formattedEndTime} {event.start.timezone}
                  </p>
                </div>
                {event.description?.text && (
                  <p className="text-white/70 text-sm leading-relaxed max-w-lg">
                    {event.description.text.replace(/<[^>]*>/g, '').substring(0, 200)}
                    {event.description.text.length > 200 ? '...' : ''}
                  </p>
                )}
              </div>
              <a
                href={event.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold text-black px-6 py-3 font-black uppercase tracking-[0.15em] text-xs hover:bg-white transition-all whitespace-nowrap"
              >
                Get Tickets
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
