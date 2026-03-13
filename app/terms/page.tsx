import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for ActionCOACH Business Growth Partners.',
};

export default function TermsPage() {
  return (
    <div className="pt-32 pb-24 bg-[#1C1C1C]">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">Terms of Service</h1>
        <p className="text-white/40 text-sm mb-16">Last updated: March 2025</p>

        <div className="prose prose-invert prose-lg max-w-none space-y-10 text-white/70 leading-relaxed">

          <section>
            <h2 className="text-2xl font-black uppercase text-white mb-4">Agreement to Terms</h2>
            <p>By accessing or using the website of ActionCOACH Business Growth Partners (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use this website.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase text-white mb-4">Use of This Website</h2>
            <p>This website is provided for informational purposes about our business coaching programs and services. You agree to use this site only for lawful purposes and in a way that does not infringe the rights of others or restrict their use and enjoyment of the site.</p>
            <p className="mt-4">You may not:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Use the site for any unlawful purpose</li>
              <li>Attempt to gain unauthorized access to any part of the site</li>
              <li>Transmit any harmful, offensive, or disruptive content</li>
              <li>Reproduce, duplicate, or copy any materials without written permission</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase text-white mb-4">Intellectual Property</h2>
            <p>All content on this website — including text, images, logos, program names, and materials — is the property of ActionCOACH Business Growth Partners or its licensors and is protected by applicable copyright and trademark laws. The ActionCOACH name and brand are the property of ActionCOACH International.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase text-white mb-4">Coaching Services &amp; Disclaimer</h2>
            <p>Information on this website is provided for general informational purposes only. It does not constitute professional financial, legal, or accounting advice. Results described in testimonials and case studies reflect individual client experiences and are not a guarantee of results.</p>
            <p className="mt-4">Business coaching outcomes depend on a variety of factors including your effort, market conditions, and business circumstances. We make no guarantee of specific financial results from participating in our programs.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase text-white mb-4">Third-Party Links</h2>
            <p>This website may contain links to third-party websites. These links are provided for your convenience only. We have no control over the content of those sites and accept no responsibility for them or for any loss or damage that may arise from your use of them.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase text-white mb-4">Limitation of Liability</h2>
            <p>To the fullest extent permitted by law, ActionCOACH Business Growth Partners shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of — or inability to use — this website or our services.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase text-white mb-4">Changes to These Terms</h2>
            <p>We reserve the right to update these terms at any time. Changes will be posted on this page with an updated date. Continued use of the website after changes constitutes acceptance of the revised terms.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase text-white mb-4">Governing Law</h2>
            <p>These terms are governed by the laws of the State of North Carolina. Any disputes arising under these terms shall be resolved in the courts of Buncombe County, North Carolina.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase text-white mb-4">Contact Us</h2>
            <p>Questions about these terms? Contact us:</p>
            <div className="mt-4 space-y-1">
              <p><strong className="text-white">ActionCOACH Business Growth Partners</strong></p>
              <p>Asheville, NC</p>
              <p>Phone: <a href="tel:8283481787" className="text-gold hover:underline">(828) 348-1787</a></p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
