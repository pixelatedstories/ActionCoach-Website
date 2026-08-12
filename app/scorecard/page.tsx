import type { Metadata } from 'next';
import ScoreAppEmbed from '@/components/ScoreAppEmbed';
import ScorecardHeroTracking from '@/components/ScorecardHeroTracking';

export const metadata: Metadata = {
  title: 'Free Business Scorecard',
  description: 'Take the free Business Scorecard and get a personalized read on where your business stands today across Time, Team, and Money.',
};

export default function ScorecardPage() {
  return (
    <div className="pt-32 pb-24 bg-[#1C1C1C]">
      <ScorecardHeroTracking />
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-black mb-6 uppercase">Free Business Scorecard</h1>
          <p className="text-xl text-white/70">
            Answer a few quick questions and get a personalized read on where your business stands today
            across Time, Team, and Money, plus where your biggest opportunity is right now.
          </p>
        </div>

        <div className="bg-[#262626] p-4 md:p-8 shadow-2xl border border-white/10">
          <ScoreAppEmbed />
        </div>
      </div>
    </div>
  );
}
