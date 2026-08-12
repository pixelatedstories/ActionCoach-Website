import type { Metadata } from 'next';
import ScoreAppEmbed from '@/components/ScoreAppEmbed';
import ScorecardHeroTracking from '@/components/ScorecardHeroTracking';

export const metadata: Metadata = {
  title: 'Business Independence Score',
  description: 'Take the free Business Independence Score and find out how prepared your business is for freedom, succession, or sale.',
};

export default function ScorecardPage() {
  return (
    <div className="pt-32 pb-24 bg-[#1C1C1C]">
      <ScorecardHeroTracking />
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-black mb-6 uppercase">The Business Independence Score</h1>
          <p className="text-xl text-white/70">
            Answer a few quick questions and find out how prepared your business is for freedom, succession, or
            sale, across the six areas that decide whether it can run without you: Mastery, Marketing, Systems,
            Team, Scale, and Freedom.
          </p>
        </div>

        <div className="bg-[#262626] p-4 md:p-8 shadow-2xl border border-white/10">
          <ScoreAppEmbed />
        </div>
      </div>
    </div>
  );
}
