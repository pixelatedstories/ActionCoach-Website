'use client';

import { useEffect } from 'react';
import { trackWebinarViewContent } from '@/lib/webinarTracking';

/**
 * Fires ViewContent on the registration page so the pixel can build a retargeting
 * audience of people who saw the offer and did not sign up.
 */
export default function WebinarHeroTracking() {
  useEffect(() => {
    trackWebinarViewContent();
  }, []);

  return null;
}
