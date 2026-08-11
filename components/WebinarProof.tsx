'use client';

import { trackWebinarCtaClick } from '@/lib/webinarTracking';

/*
 * TODO (needs Bill's sign-off before adding, do not guess):
 *   - Eric's trade and city, so the attribution can read "Eric, HVAC contractor, Hickory NC"
 *     instead of a first name with no context.
 *   - How many hires washed out inside 90 days before the system went in. A number on the
 *     failure makes the number on the success believable.
 *   - Turnover before and after.
 * Everything currently on this page is confirmed. If Bill won't release the trade or city,
 * "a trades company in western North Carolina" is fine. Vague beats fabricated.
 */

export default function WebinarProof() {
  return (
    <section className="py-14 border-t border-white/5 mt-14">
      <div className="bg-[#111111] border border-white/10 rounded-2xl p-6 md:p-10">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_380px] gap-10 items-start">
          <div>
            <p className="text-gold font-black uppercase tracking-[0.2em] text-[11px] mb-3">Real Results</p>
            <h2 className="text-2xl md:text-3xl font-black uppercase leading-tight mb-5">
              Eric went from 8 employees to 70, and he&apos;s not the one doing the hiring anymore.
            </h2>

            <div className="space-y-4 text-white/75 leading-relaxed">
              <p>
                Eric runs a trades business. He&apos;s good in the field and he built a real company out of
                it, but every job post, every interview, and every new hire&apos;s first week still ran
                through him.
              </p>
              <p>
                So hiring only happened when something broke. Nobody owned it, there was no philosophy
                behind who he was actually looking for, and he was already stretched too thin to build one.
              </p>
              <p>
                We started with that philosophy, which is the part almost everybody skips. Before you write
                another job post you have to know what an A-grade person looks like in your business, not in
                general. Then we built the attraction system so those people come to him instead of him
                going hunting every time something opens up. And then the deselection process, four hours
                start to finish, which filters everyone else out before they ever get near a truck.
              </p>
              <p>
                A couple of years later, eight employees had become seventy. Somebody else owns hiring now,
                and Eric got his week back.
              </p>
            </div>

            <blockquote className="mt-6 border-l-2 border-gold pl-5">
              <p className="text-lg md:text-xl font-bold text-gold leading-snug">
                &ldquo;So now whenever we need people, all we have to do is run our system, and it gets easy
                to grow.&rdquo;
              </p>
              <footer className="text-white/45 text-[11px] uppercase tracking-[0.18em] mt-3">Eric</footer>
            </blockquote>

            <a
              href="#register"
              onClick={() => trackWebinarCtaClick('proof')}
              className="inline-block mt-8 bg-gold text-black px-8 py-4 text-xs font-black uppercase tracking-[0.18em] hover:bg-white transition-all"
            >
              Save My Seat
            </a>
          </div>

          {/* Bill's photo and bio live in their own section further down. Keeping this
              rail to the video only stops the case study competing with his intro. */}
          <div>
            <div className="bg-[#1C1C1C] border border-white/5 rounded-xl overflow-hidden">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src="https://www.youtube.com/embed/OoPiwkYdGww"
                  title="Bill Gilliland on The 4-Hour Hiring Process"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>
            <p className="text-white/45 text-[11px] uppercase tracking-[0.16em] mt-3">
              Bill on the 4-Hour Hiring Process
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
