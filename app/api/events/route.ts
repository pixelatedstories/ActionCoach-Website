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
    has_more_items?: boolean;
  };
}

export async function GET(request: NextRequest) {
  try {
    const apiKey = process.env.event_brite_api_key;
    const orgId = process.env.eventbrite_org_id;

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

    const headers = {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    };

    const fetchPage = async (page: number) => {
      const response = await fetch(
        `https://www.eventbriteapi.com/v3/organizations/${orgId}/events/?page=${page}`,
        { headers }
      );

      if (!response.ok) {
        const errorData = await response.text();
        return {
          error: NextResponse.json(
            { error: `Eventbrite API error: ${response.statusText}`, details: errorData },
            { status: response.status }
          ),
        };
      }

      return { data: (await response.json()) as EventbriteResponse };
    };

    const firstPage = await fetchPage(1);
    if (firstPage.error) {
      return firstPage.error;
    }

    const allEvents = [...firstPage.data.events];
    const totalPages = firstPage.data.pagination.page_count;

    for (let page = 2; page <= totalPages; page += 1) {
      const nextPage = await fetchPage(page);
      if (nextPage.error) {
        return nextPage.error;
      }
      allEvents.push(...nextPage.data.events);
    }

    const now = Date.now();

    const upcomingEvents = allEvents.filter(
      (event) => new Date(event.end.utc).getTime() >= now
    );

    const sortedEvents = upcomingEvents.sort(
      (a, b) =>
        new Date(a.start.utc).getTime() - new Date(b.start.utc).getTime()
    );

    return NextResponse.json({
      events: sortedEvents,
      count: sortedEvents.length,
      debug: {
        eventbriteResponseCount: allEvents.length,
        upcomingEventCount: upcomingEvents.length,
        paginationInfo: firstPage.data.pagination,
      }
    });
  } catch (error) {
    console.error('Error fetching Eventbrite events:', error);
    return NextResponse.json(
      { error: 'Failed to fetch events' },
      { status: 500 }
    );
  }
}
