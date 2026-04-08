import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Guides',
  description: 'Practical peptide guides covering reconstitution, dosing fundamentals, and safety. Research-backed, no-nonsense instruction.',
};

export default function GuidesPage() {
  return (
    <article className="max-w-[var(--page-max)] mx-auto px-6 py-16">
      <header className="mb-16">
        <p className="text-caption mb-4">Guides</p>
        <h1 className="text-headline mb-6">Practical knowledge.</h1>
        <p className="text-body max-w-xl">
          Essential guides for understanding peptide handling, dosing fundamentals, and safety considerations.
        </p>
      </header>

      <div className="text-center py-24">
        <p className="text-[var(--text-tertiary)]">Guides are being written. Check back soon.</p>
      </div>
    </article>
  );
}
