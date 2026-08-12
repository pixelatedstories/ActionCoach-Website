'use client';

import { useEffect } from 'react';

const SCOREAPP_URL = 'https://edb50a0d-a524-4270-95ea-00237d485eb3.scoreapp.com/?sa_hide_header=1&sa_hide_footer=1';
const EMBED_SCRIPT = 'https://static.scoreapp.com/js/integration/v1/embedding.js';

export default function ScoreAppEmbed() {
  useEffect(() => {
    if (document.querySelector(`script[src^="${EMBED_SCRIPT}"]`)) return;
    const script = document.createElement('script');
    script.src = EMBED_SCRIPT;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      data-sa-url={SCOREAPP_URL}
      data-sa-view="inline"
      data-sa-auto-height="1"
      style={{ maxWidth: '100%', width: '100%' }}
    />
  );
}
