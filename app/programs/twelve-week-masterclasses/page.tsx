import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Business Operating System (ABoS)',
  description: 'Install the ActionCOACH Business Operating System and turn your business into a machine that scales with more consistency and less owner dependence.',
};

const steps = [
  'Predictable marketing and lead flow',
  'Sales systems that convert consistently',
  'Operational systems that scale',
  'A team that executes without constant oversight',
];

const faqs = [
  {
    question: 'What is ABoS?',
    answer: 'ABoS is the ActionCOACH Business Operating System. It gives the business a structure for marketing, sales, operations, and team execution.',
  },
  {
    question: 'Can it be standalone?',
    answer: 'Yes. It can be installed as part of coaching or as a standalone engagement depending on the scope and the business need.',
  },
  {
    question: 'What does it fix first?',
    answer: 'It starts by finding the biggest leaks in structure and execution so the business can become more predictable.',
  },
];

export default function ABoSPage() {
  return (
    <div className="pt-32 pb-24 bg-[#1C1C1C]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <Link href="/programs" className="text-gold text-xs font-black uppercase tracking-widest mb-12 inline-flex items-center group">
          <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span> Back to Programs
        </Link>

        <div className="max-w-4xl mb-20">
          <p className="text-gold font-black uppercase tracking-[0.2em] text-xs mb-4">Business Operating System</p>
          <h1 className="text-5xl md:text-7xl font-black uppercase leading-none tracking-tighter mb-6">
            Turn your business into a machine.
          </h1>
          <p className="text-2xl text-white/75 font-medium mb-8 leading-relaxed">
            Most businesses do not fail from lack of effort. They fail from lack of structure. ABoS installs the systems your business needs to scale consistently.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/book" className="inline-block bg-gold text-black px-8 py-5 md:px-12 md:py-6 text-sm font-black uppercase tracking-widest hover:bg-white transition-all text-center">
              Install ABoS
            </Link>
            <Link href="/book" className="inline-block border-2 border-white text-white px-8 py-5 md:px-12 md:py-6 text-sm font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all text-center">
              Book a Session
            </Link>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="bg-[#262626] border border-white/10 p-10 md:p-12">
            <p className="text-gold font-black uppercase tracking-[0.2em] text-xs mb-4">What we build</p>
            <h2 className="text-3xl md:text-4xl font-black uppercase leading-tight mb-6">The systems your business needs to scale</h2>
            <div className="space-y-4">
              {steps.map((step) => (
                <div key={step} className="flex items-start gap-3 text-white/85 font-bold leading-relaxed">
                  <span className="text-gold">•</span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white text-black p-10 md:p-12">
            <p className="text-gold font-black uppercase tracking-[0.2em] text-xs mb-4">They ask, you answer</p>
            <h2 className="text-3xl md:text-4xl font-black uppercase mb-6">Questions owners ask before they invest</h2>
            <div className="space-y-6 text-lg leading-relaxed">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <p className="font-black mb-1">{faq.question}</p>
                  <p className="text-black/70">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-[#262626] p-8 border border-white/10">
            <h3 className="text-gold font-black uppercase tracking-widest text-xs mb-4">Outcome</h3>
            <p className="text-2xl font-black mb-3">Consistency replaces chaos</p>
            <p className="text-white/70 leading-relaxed">Systems replace guesswork so the business runs with less friction.</p>
          </div>
          <div className="bg-[#262626] p-8 border border-white/10">
            <h3 className="text-gold font-black uppercase tracking-widest text-xs mb-4">Investment</h3>
            <p className="text-2xl font-black mb-3">$10,000 - $25,000</p>
            <p className="text-white/70 leading-relaxed">Standalone scope depends on the size and complexity of the installation.</p>
          </div>
          <div className="bg-[#262626] p-8 border border-white/10">
            <h3 className="text-gold font-black uppercase tracking-widest text-xs mb-4">Next step</h3>
            <p className="text-2xl font-black mb-3">Talk it through</p>
            <p className="text-white/70 leading-relaxed">We will map where the business is leaking time, money, and momentum.</p>
          </div>
        </div>

        <div className="mt-16 p-12 bg-white text-black text-center">
          <h2 className="text-3xl md:text-5xl font-black uppercase mb-8 leading-tight">If your business depends on you, this is what fixes it.</h2>
          <Link href="/book" className="inline-block bg-black text-white px-12 py-6 text-lg font-black uppercase tracking-widest hover:bg-gold hover:text-black transition-all shadow-2xl">
            Book a Session
          </Link>
        </div>
      </div>
    </div>
  );
}
