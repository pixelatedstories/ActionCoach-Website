import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for ActionCOACH Business Growth Partners.',
};

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-24 bg-[#1C1C1C]">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">Privacy Policy</h1>
        <p className="text-white/40 text-sm mb-16">Last updated: March 2025</p>

        <div className="prose prose-invert prose-lg max-w-none space-y-10 text-white/70 leading-relaxed">

          <section>
            <h2 className="text-2xl font-black uppercase text-white mb-4">Our Website</h2>
            <p>Our website address is: <a href="https://actioncoachbgp.com" className="text-gold hover:underline">actioncoachbgp.com</a></p>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase text-white mb-4">What Information We Collect</h2>
            <p>When you fill out a contact form, request a strategy session, or inquire about our programs, we may collect:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>First and last name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Business name and details</li>
              <li>Any information you voluntarily provide in message fields</li>
            </ul>
            <p className="mt-4">We may also automatically collect standard technical information such as IP address, browser type, and pages visited through cookies and analytics tools.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase text-white mb-4">How We Use Your Information</h2>
            <p>We use the information you provide to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Respond to your inquiries and schedule strategy sessions</li>
              <li>Send you information about our programs, events, and resources</li>
              <li>Follow up on coaching consultations</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
            <p className="mt-4">We do not sell, rent, or trade your personal information to third parties.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase text-white mb-4">Third-Party Services</h2>
            <p>We use the following third-party services to operate our website and communicate with you. Each has its own privacy policy:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong className="text-white">Google Analytics</strong> — website usage tracking</li>
              <li><strong className="text-white">Calendly</strong> — appointment scheduling</li>
              <li><strong className="text-white">GoHighLevel</strong> — CRM and contact form processing</li>
              <li><strong className="text-white">Meta (Facebook/Instagram)</strong> — advertising and retargeting</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase text-white mb-4">Cookies</h2>
            <p>Our website uses cookies to improve your browsing experience and to help us understand how visitors use our site. You can disable cookies through your browser settings, though some features of the site may not function as intended.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase text-white mb-4">Data Retention</h2>
            <p>We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, or as required by law. If you would like your data removed, please contact us and we will honor that request promptly.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase text-white mb-4">Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Request access to the personal data we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your data</li>
              <li>Opt out of marketing communications at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase text-white mb-4">Contact Us</h2>
            <p>If you have questions about this privacy policy or how we handle your data, please contact us:</p>
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
