'use client';

import Script from 'next/script';

export default function EPICRetreatForm() {
  return (
    <>
      <iframe
        src="https://go.cfastr.com/widget/form/d3gUvB6K889Ibg21mIIc"
        style={{ width: '100%', height: '1775px', border: 'none', borderRadius: '8px' }}
        id="inline-d3gUvB6K889Ibg21mIIc"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="St. Croix EPIC Retreat 2027"
        data-height="1775"
        data-layout-iframe-id="inline-d3gUvB6K889Ibg21mIIc"
        data-form-id="d3gUvB6K889Ibg21mIIc"
        title="St. Croix EPIC Retreat 2027"
      />
      <Script src="https://go.cfastr.com/js/form_embed.js" strategy="lazyOnload" />
    </>
  );
}
