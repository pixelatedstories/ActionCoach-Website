'use client';

import { useEffect } from 'react';

const GHL_FORM_ID = 'RifKl2zvk2xP0oAwZ0mc';

export default function WebinarRegisterForm() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://go.cfastr.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <iframe
      src={`https://go.cfastr.com/widget/form/${GHL_FORM_ID}`}
      style={{ width: '100%', height: '525px', border: 'none', borderRadius: '8px', display: 'block' }}
      id={`inline-${GHL_FORM_ID}`}
      data-layout="{'id':'INLINE'}"
      data-trigger-type="alwaysShow"
      data-trigger-value=""
      data-activation-type="alwaysActivated"
      data-activation-value=""
      data-deactivation-type="neverDeactivate"
      data-deactivation-value=""
      data-form-name="Webinar - 4-Hour Hiring Process"
      data-height="525"
      data-layout-iframe-id={`inline-${GHL_FORM_ID}`}
      data-form-id={GHL_FORM_ID}
      title="Register for The 4-Hour Hiring Process webinar"
    />
  );
}
