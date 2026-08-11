'use client';

import { useEffect } from 'react';
import { trackWebinarLead } from '@/lib/webinarTracking';

const GHL_FORM_ID = 'RifKl2zvk2xP0oAwZ0mc';
const GHL_ORIGIN = 'https://go.cfastr.com';
const EMBED_SCRIPT = `${GHL_ORIGIN}/js/form_embed.js`;

type Props = {
  /** Distinguishes the hero and footer copies of the form. Iframe ids must be unique. */
  instanceId: string;
};

export default function WebinarRegisterForm({ instanceId }: Props) {
  const domId = `inline-${GHL_FORM_ID}-${instanceId}`;

  useEffect(() => {
    // Both copies of the form mount at once, and the embed script only needs to load once.
    if (!document.querySelector(`script[src="${EMBED_SCRIPT}"]`)) {
      const script = document.createElement('script');
      script.src = EMBED_SCRIPT;
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  useEffect(() => {
    // Fallback Lead trigger. See lib/webinarTracking.ts for why this exists alongside
    // the thank-you page's own call.
    const onMessage = (event: MessageEvent) => {
      if (event.origin !== GHL_ORIGIN) return;
      const raw = typeof event.data === 'string' ? event.data : JSON.stringify(event.data ?? '');
      if (/submit|success|redirect/i.test(raw)) trackWebinarLead();
    };
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, []);

  return (
    <iframe
      src={`${GHL_ORIGIN}/widget/form/${GHL_FORM_ID}`}
      style={{ width: '100%', height: '525px', border: 'none', borderRadius: '6px', display: 'block' }}
      id={domId}
      data-layout="{'id':'INLINE'}"
      data-trigger-type="alwaysShow"
      data-trigger-value=""
      data-activation-type="alwaysActivated"
      data-activation-value=""
      data-deactivation-type="neverDeactivate"
      data-deactivation-value=""
      data-form-name="Webinar - 4-Hour Hiring Process"
      data-height="525"
      data-layout-iframe-id={domId}
      data-form-id={GHL_FORM_ID}
      title="Register for The 4-Hour Hiring Process webinar"
    />
  );
}
