import Link from 'next/link';

export function BookFooterBar() {
  return (
    <div
      className="w-full py-4 px-6 flex flex-col sm:flex-row items-center justify-center gap-3 text-center"
      style={{ backgroundColor: '#0d0d1a', borderTop: '1px solid rgba(255,209,0,0.12)' }}
    >
      <span className="text-white/60 text-sm">
        Want a proven framework for building a business that doesn&apos;t depend on you?
      </span>
      <Link
        href="/free-book"
        className="text-sm font-black uppercase tracking-widest transition-colors whitespace-nowrap"
        style={{ color: '#FFD100' }}
      >
        Get the free book →
      </Link>
    </div>
  );
}
