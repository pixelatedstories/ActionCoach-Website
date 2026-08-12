/**
 * Lead tracking for the Business Scorecard.
 *
 * ScoreApp's embedding.js manages the quiz iframe internally, so unlike the GHL
 * forms elsewhere on this site we can't rely on our own redirect page firing on
 * every completion. Until a ScoreApp-side completion redirect or postMessage
 * contract is confirmed (see /scorecard page notes), trackScorecardLead() is
 * exported but not yet wired to a real completion signal.
 */
const LEAD_FIRED_KEY = 'scorecard-lead-fired';

export const SCORECARD_CONTENT_NAME = 'Business Scorecard';

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

export function trackScorecardLead(): void {
  if (typeof window === 'undefined' || !window.fbq || hasFired()) return;
  markFired();
  window.fbq('track', 'Lead', { content_name: SCORECARD_CONTENT_NAME });
}

export function trackScorecardViewContent(): void {
  if (typeof window === 'undefined' || !window.fbq) return;
  window.fbq('track', 'ViewContent', { content_name: SCORECARD_CONTENT_NAME });
}

export function trackScorecardCtaClick(location: string): void {
  if (typeof window === 'undefined' || !window.fbq) return;
  window.fbq('trackCustom', 'ScorecardCTAClick', {
    content_name: SCORECARD_CONTENT_NAME,
    cta_location: location,
  });
}
