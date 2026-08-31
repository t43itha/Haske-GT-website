import { ReactNode } from 'react';
import SectionBadge from './SectionBadge';
import usePageMeta from '../hooks/usePageMeta';

interface PolicyPageProps {
  title: string;
  description: string;
  children: ReactNode;
}

const PolicyPage = ({ title, description, children }: PolicyPageProps) => {
  usePageMeta({ title, description });

  return (
    <div className="min-h-screen bg-cream">
      <section className="bg-navy pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <SectionBadge>Legal</SectionBadge>
          <h1 className="mt-6 text-4xl md:text-5xl font-serif text-cream">{title}</h1>
          <p className="mt-4 text-sm text-cream/60 font-sans">Effective 31 August 2026</p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="space-y-10 text-charcoal/75 font-sans leading-relaxed [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:text-navy [&_h2]:mb-3 [&_p]:mb-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_a]:text-gold-dark [&_a]:underline">
            {children}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PolicyPage;
