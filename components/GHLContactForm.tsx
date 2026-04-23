'use client';

import { useEffect } from 'react';

export default function GHLContactForm() {
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
      src="https://go.cfastr.com/widget/form/dPJyqcdhgeKO5fBMvFye"
      style={{ width: '100%', height: '548px', border: 'none', borderRadius: 0 }}
      id="inline-dPJyqcdhgeKO5fBMvFye"
      data-layout="{'id':'INLINE'}"
      data-trigger-type="alwaysShow"
      data-trigger-value=""
      data-activation-type="alwaysActivated"
      data-activation-value=""
      data-deactivation-type="neverDeactivate"
      data-deactivation-value=""
      data-form-name="Contact Form-prebuilt"
      data-height="548"
      data-layout-iframe-id="inline-dPJyqcdhgeKO5fBMvFye"
      data-form-id="dPJyqcdhgeKO5fBMvFye"
      title="Contact Form-prebuilt"
    />
  );
}
