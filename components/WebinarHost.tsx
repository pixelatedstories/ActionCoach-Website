import Image from 'next/image';

// Only claims with a source behind them. Do not add a stat here without one.
const credentials = [
  { stat: '20+ yrs', label: 'Coaching trades owners' },
  { stat: 'Hall of Fame', label: 'ActionCOACH designation' },
];

export default function WebinarHost() {
  return (
    <section className="py-14 border-t border-white/5">
      <p className="text-gold font-black uppercase tracking-[0.2em] text-[11px] mb-6 text-center">
        Who&apos;s Leading This
      </p>

      <div className="max-w-4xl mx-auto bg-[#111111] border border-white/10 rounded-2xl overflow-hidden">
        <div className="grid sm:grid-cols-[220px_minmax(0,1fr)]">
          {/* Square on mobile so the crop keeps his shoulders, full-height rail on sm+ */}
          <div className="relative aspect-square sm:aspect-auto sm:h-full sm:min-h-[260px]">
            <Image
              src="/images/bill-gilliland-headshot.jpg"
              alt="Bill Gilliland, Hall of Fame ActionCOACH"
              fill
              sizes="(max-width: 640px) 100vw, 220px"
              className="object-cover object-center"
            />
          </div>

          <div className="p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-black uppercase leading-none mb-1">Bill Gilliland</h2>
            <p className="text-gold font-bold uppercase tracking-[0.14em] text-[11px] mb-5">
              Hall of Fame ActionCOACH
            </p>

            <p className="text-white/75 leading-relaxed mb-6">
              Bill has spent more than twenty years coaching trades, construction, and home service owners
              across the Carolinas. He&apos;s a Hall of Fame ActionCOACH, one of the highest designations in
              the global franchise. But most of the work comes back to the same thing. Owners who are good
              at the trade and stuck running every part of the business themselves, hiring included.
            </p>

            {/* Stat over label wraps badly in three narrow phone columns, so it reads
                as a stacked list until there is room for the row. */}
            <dl className="flex flex-col gap-2 sm:grid sm:grid-cols-2 sm:gap-4 border-t border-white/10 pt-5">
              {credentials.map(({ stat, label }) => (
                <div key={stat} className="flex items-baseline gap-2 sm:block">
                  <dt className="text-gold font-black uppercase tracking-tight text-sm leading-tight whitespace-nowrap">
                    {stat}
                  </dt>
                  <dd className="text-white/45 text-[10px] uppercase tracking-[0.12em] leading-snug sm:mt-1">
                    {label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
