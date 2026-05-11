import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { notFound } from 'next/navigation';

const masterclasses = [
  {
    id: 'marketing',
    title: '12-Week Marketing Masterclass',
    formId: '7pZBtShYULHEPSkGvXtM',
    formName: '12 Week Marketing Masterclass - Purchase',
    dataHeight: '2285',
  },
  {
    id: 'management',
    title: '12-Week Management Masterclass',
    formId: 'bJtOPfm9dvmXQzCbXGqV',
    formName: '12 Week Management Masterclass - Purchase',
    dataHeight: '2285',
  },
  {
    id: 'sales',
    title: '12-Week Sales Masterclass',
    formId: 'M5lS6BWzzuQyozZVNIZn',
    formName: '12 Week Sales Masterclass - Purchase',
    dataHeight: '2285',
  },
  {
    id: 'leadership',
    title: '12-Week Leadership Masterclass',
    formId: 'heP9t49QADoYqG5X9hyo',
    formName: '12 Week Leadership Masterclass - Purchase',
    dataHeight: '2285',
  },
  {
    id: 'business',
    title: '12-Week Business Masterclass',
    formId: 'WUSOXTpZDg2BBP7yB7qn',
    formName: '12 Week Business Masterclass - Purchase',
    dataHeight: '2285',
  },
];

export function generateStaticParams() {
  return masterclasses.map((mc) => ({ id: mc.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const mc = masterclasses.find((m) => m.id === id);
  if (!mc) return {};
  return {
    title: `Enroll — ${mc.title}`,
    robots: { index: false, follow: false },
  };
}

export default async function MasterclassEnrollPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const mc = masterclasses.find((m) => m.id === id);
  if (!mc) notFound();

  return (
    <>
      <Script src="https://go.cfastr.com/js/form_embed.js" strategy="afterInteractive" />

      <div className="pt-32 pb-24 bg-[#1C1C1C] min-h-screen">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <div className="mb-10">
            <Link
              href="/enroll"
              className="text-xs font-black uppercase tracking-widest text-white/40 hover:text-gold transition-colors"
            >
              ← All Masterclasses
            </Link>
          </div>

          <div className="mb-12">
            <p className="text-gold font-black uppercase tracking-widest text-xs mb-4">ActionCOACH</p>
            <h1 className="text-4xl md:text-5xl font-black uppercase leading-none tracking-tighter">
              {mc.title}
            </h1>
          </div>

          <iframe
            src={`https://go.cfastr.com/widget/form/${mc.formId}`}
            style={{ width: '100%', height: '100%', border: 'none', borderRadius: '8px' }}
            id={`inline-${mc.formId}`}
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name={mc.formName}
            data-height={mc.dataHeight}
            data-layout-iframe-id={`inline-${mc.formId}`}
            data-form-id={mc.formId}
            title={mc.formName}
          />
        </div>
      </div>
    </>
  );
}
