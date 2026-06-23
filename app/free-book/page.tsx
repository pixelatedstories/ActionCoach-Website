import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Free Book',
  description: 'Get a free copy of The Coach Approach and learn the five principles to build a business that does not depend on you.',
};

export default function FreeBookPage() {
  return (
    <div className="pt-24 md:pt-28 pb-16 md:pb-20 bg-[#1C1C1C]">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <div className="bg-[#111111] border border-white/10 shadow-2xl overflow-hidden rounded-2xl">
          <div className="grid lg:grid-cols-[320px_minmax(0,1fr)]">
            <div className="order-2 lg:order-1 bg-[#0a0a14] px-6 py-8 md:px-8 md:py-10 flex flex-col items-center justify-center text-center border-t lg:border-t-0 lg:border-r border-white/10">
              <Image
                src="/images/coach-approach-book.png"
                alt="The Coach Approach by Bill Gilliland"
                width={180}
                height={245}
                className="drop-shadow-2xl object-contain mb-5"
              />
              <p className="text-[11px] font-black uppercase tracking-[0.28em] text-gold mb-3">
                Free Book
              </p>
              <h1 className="text-2xl md:text-3xl font-black uppercase mb-3">
                The Coach Approach
              </h1>
              <p className="text-white/50 text-sm uppercase tracking-[0.2em]">
                5 Principles to Build an E.P.I.C. Business
              </p>
            </div>

            <div className="order-1 lg:order-2 px-5 py-6 md:px-8 md:py-8">
              <p className="text-[11px] font-black uppercase tracking-[0.28em] text-gold mb-3 lg:hidden">
                Free Book
              </p>
              <h2 className="text-2xl md:text-3xl font-black uppercase text-white mb-3">
                Get your free copy
              </h2>
              <p className="text-white/70 leading-relaxed mb-5">
                Most owners are the biggest bottleneck in their own business. This short book gives you a practical framework to improve profit, build a team that performs, and stop carrying everything yourself.
              </p>

              <iframe
                src="https://go.cfastr.com/widget/form/A2rj9ut4no0SKgrhJtpY"
                style={{ width: '100%', height: '402px', border: 'none', borderRadius: '6px', display: 'block' }}
                id="page-A2rj9ut4no0SKgrhJtpY"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="showOnScrolling"
                data-trigger-value="15"
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Coach Approach Book"
                data-height="402"
                data-layout-iframe-id="page-A2rj9ut4no0SKgrhJtpY"
                data-form-id="A2rj9ut4no0SKgrhJtpY"
                title="Coach Approach Book"
              />

              <div className="grid sm:grid-cols-3 gap-3 text-sm text-white/65 mt-5">
                <div className="border border-white/10 rounded-xl px-4 py-3">More profit</div>
                <div className="border border-white/10 rounded-xl px-4 py-3">Stronger team</div>
                <div className="border border-white/10 rounded-xl px-4 py-3">More time back</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
