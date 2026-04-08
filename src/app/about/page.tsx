import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Peptides Guide is a free, research-backed peptide encyclopedia. No selling, no affiliate links, no ads. Built to be the most trustworthy peptide resource available.',
};

export default function AboutPage() {
  return (
    <article className="max-w-[var(--page-max)] mx-auto px-6 py-16">
      <header className="mb-16">
        <p className="text-caption mb-4">About</p>
        <h1 className="text-headline mb-6">Why this exists.</h1>
        <p className="text-body max-w-xl">
          The peptide space is full of misinformation, marketing hype, and low-quality content
          designed to sell products. We built this to fix that.
        </p>
      </header>

      <div className="prose-content space-y-12 max-w-xl">
        <section>
          <h2 className="text-subhead mb-4">The Problem</h2>
          <p>
            Search for any peptide online and you&apos;ll find vendor websites masquerading as educational
            resources, forums full of anecdotal claims, and content farms regurgitating the same
            surface-level information with affiliate links attached.
          </p>
          <p>
            People researching peptides deserve better. They deserve accurate, well-sourced information
            presented clearly — without someone trying to sell them something on the other side.
          </p>
        </section>

        <section>
          <h2 className="text-subhead mb-4">Our Approach</h2>
          <p>
            Every peptide profile on this site follows the same rigorous structure: mechanism of action,
            published research, commonly used protocols (with appropriate disclaimers), safety profiles,
            and practical information like storage and reconstitution.
          </p>
          <p>
            We cite peer-reviewed research. When evidence is limited or primarily preclinical, we say so
            explicitly. When a peptide is not FDA-approved, we make that clear. We don&apos;t overstate
            benefits or understate risks.
          </p>
        </section>

        <section>
          <h2 className="text-subhead mb-4">What We Don&apos;t Do</h2>
          <ul className="space-y-2 text-[var(--text-secondary)]">
            <li className="flex items-start gap-2">
              <span className="text-[var(--text-tertiary)]">&mdash;</span>
              We don&apos;t sell peptides or any products
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--text-tertiary)]">&mdash;</span>
              We don&apos;t use affiliate links
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--text-tertiary)]">&mdash;</span>
              We don&apos;t run ads
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--text-tertiary)]">&mdash;</span>
              We don&apos;t provide medical advice
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--text-tertiary)]">&mdash;</span>
              We don&apos;t hype unproven claims
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-subhead mb-4">Methodology</h2>
          <p>
            Content is compiled from peer-reviewed journal articles, clinical trial data (primarily via
            PubMed and ClinicalTrials.gov), and established pharmacological references. Community-reported
            protocols are clearly labeled as such and separated from research-backed information.
          </p>
          <p>
            This is a living resource. As new research is published, profiles are updated to reflect the
            current evidence base.
          </p>
        </section>
      </div>
    </article>
  );
}
