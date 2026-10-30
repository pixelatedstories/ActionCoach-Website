'use client';

import { useEffect, useState } from 'react';

const SURVEY_ID = 'Ng3c1OEs3gq51EnRVlvY';
const GHL_ORIGIN = 'https://go.cfastr.com';
const EMBED_SCRIPT = `${GHL_ORIGIN}/js/form_embed.js`;

export default function FourExitsSurvey() {
  // Forwards the landing page's query string to the survey so a partner link can prefill
  // a field whose GHL key matches the parameter name.
  const [query, setQuery] = useState('');

  useEffect(() => {
    setQuery(window.location.search);
    if (!document.querySelector(`script[src="${EMBED_SCRIPT}"]`)) {
      const script = document.createElement('script');
      script.src = EMBED_SCRIPT;
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <iframe
      src={`${GHL_ORIGIN}/widget/survey/${SURVEY_ID}${query}`}
      style={{ width: '100%', minHeight: '640px', border: 'none', borderRadius: '6px', display: 'block' }}
      scrolling="no"
      id={SURVEY_ID}
      title="Four Exits Self-Check"
    />
  );
}
