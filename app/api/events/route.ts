import { NextRequest, NextResponse } from 'next/server';

interface EventbriteEvent {
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
  status: string;
}

interface EventbriteResponse {
  events: EventbriteEvent[];
  pagination: {
    object_count: number;
    page_count: number;
    page_number: number;
    page_size: number;
  };
}

export async function GET(request: NextRequest) {
  try {
    const apiKey = process.env.event_brite_api_key;
    const orgId = process.env.EVENTBRITE_ORG_ID;

    if (!apiKey) {
      return NextResponse.json(
        { error: 'Missing Eventbrite API key' },
        { status: 500 }
      );
    }

    if (!orgId) {
      return NextResponse.json(
        { error: 'Missing Eventbrite Organization ID' },
        { status: 500 }
      );
    }

    // Fetch events from Eventbrite
    const response = await fetch(
      `https://www.eventbriteapi.com/v3/organizations/${orgId}/events/`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Eventbrite API error: ${response.statusText}`);
    }

    const data: EventbriteResponse = await response.json();

    // Filter for live events only and sort by date
    const liveEvents = data.events
      .filter((event) => event.status === 'live')
      .sort(
        (a, b) =>
          new Date(a.start.utc).getTime() - new Date(b.start.utc).getTime()
      );

    return NextResponse.json({
      events: liveEvents,
      count: liveEvents.length,
    });
  } catch (error) {
    console.error('Error fetching Eventbrite events:', error);
    return NextResponse.json(
      { error: 'Failed to fetch events' },
      { status: 500 }
    );
  }
}
