/**
 * Lead tracking for the webinar funnel.
 *
 * The registration form is a GHL iframe. On submit, GHL is configured to redirect
 * to /webinars/hiring-process/thank-you, which fires the Meta Lead event. If that
 * redirect ever lands inside the iframe instead of the parent window, the thank-you
 * page never loads and the Lead event is silently lost, which is what leaves Meta
 * with nothing to optimize against.
 *
 * So both the iframe listener and the thank-you page call trackWebinarLead(), and
 * this flag keeps whichever fires second from double-counting.
 */
const LEAD_FIRED_KEY = 'webinar-hiring-lead-fired';

export const WEBINAR_CONTENT_NAME = 'Webinar - 4-Hour Hiring Process';

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

function hasFired(): boolean {
  try {
    return sessionStorage.getItem(LEAD_FIRED_KEY) === '1';
  } catch {
    return false;
  }
}

function markFired(): void {
  try {
    sessionStorage.setItem(LEAD_FIRED_KEY, '1');
  } catch {
    // Private browsing with storage disabled. A duplicate Lead beats a missing one.
  }
}

export function trackWebinarLead(): void {
  if (typeof window === 'undefined' || !window.fbq || hasFired()) return;
  markFired();
  window.fbq('track', 'Lead', { content_name: WEBINAR_CONTENT_NAME });
}

export function trackWebinarViewContent(): void {
  if (typeof window === 'undefined' || !window.fbq) return;
  window.fbq('track', 'ViewContent', { content_name: WEBINAR_CONTENT_NAME });
}

export function trackWebinarCtaClick(location: string): void {
  if (typeof window === 'undefined' || !window.fbq) return;
  window.fbq('trackCustom', 'WebinarCTAClick', {
    content_name: WEBINAR_CONTENT_NAME,
    cta_location: location,
  });
}
