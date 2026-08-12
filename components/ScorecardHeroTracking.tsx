'use client';

import { useEffect } from 'react';
import { trackScorecardViewContent } from '@/lib/scorecardTracking';

/**
 * Fires ViewContent on the scorecard page so the pixel can build a retargeting
 * audience of people who saw the offer and didn't complete it.
 */
export default function ScorecardHeroTracking() {
  useEffect(() => {
    trackScorecardViewContent();
  }, []);

  return null;
}
