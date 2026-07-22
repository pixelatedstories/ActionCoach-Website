'use client';

import { useEffect } from 'react';

// TODO(jay): Replace with the real GHL form id once the "Webinar - 4-Hour Hiring Process"
// form is built in GHL (fields: First Name, Email, Phone; tag registrants
// "Webinar - 4-Hour Hiring Process"). This is a placeholder id and will not submit.
const GHL_FORM_ID = 'REPLACE_WITH_REAL_GHL_FORM_ID';

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
      style={{ width: '100%', height: '420px', border: 'none', display: 'block' }}
      id={`inline-${GHL_FORM_ID}`}
      data-layout="{'id':'INLINE'}"
      data-trigger-type="alwaysShow"
      data-trigger-value=""
      data-activation-type="alwaysActivated"
      data-activation-value=""
      data-deactivation-type="neverDeactivate"
      data-deactivation-value=""
      data-form-name="Webinar - 4-Hour Hiring Process"
      data-height="420"
      data-layout-iframe-id={`inline-${GHL_FORM_ID}`}
      data-form-id={GHL_FORM_ID}
      title="Register for The 4-Hour Hiring Process webinar"
    />
  );
}
