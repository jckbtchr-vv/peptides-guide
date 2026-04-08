import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllGuides } from '@/data/guides';

export const metadata: Metadata = {
  title: 'Guides',
  description: 'Practical peptide guides covering reconstitution, dosing fundamentals, and safety. Research-backed, no-nonsense instruction.',
};

export default function GuidesPage() {
  const guides = getAllGuides();

  return (
    <article className="max-w-[var(--page-max)] mx-auto px-6 py-16">
      <header className="mb-16">
        <p className="text-caption mb-4">Guides</p>
        <h1 className="text-headline mb-6">Practical knowledge.</h1>
        <p className="text-body max-w-xl">
          Essential guides for understanding peptide handling, dosing, and safety. No fluff — just what you need to know.
        </p>
      </header>

      <div className="space-y-px rounded-[var(--radius-md)] overflow-hidden">
        {guides.map((guide, i) => (
          <Link
            key={guide.slug}
            href={`/guides/${guide.slug}`}
            className="group block bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-hover)] transition-colors p-8"
          >
            <div className="flex items-start justify-between gap-8">
              <div>
                <span className="text-caption mb-3 block">Guide {String(i + 1).padStart(2, '0')}</span>
                <h2 className="text-[20px] font-semibold tracking-tight mb-2">{guide.title}</h2>
                <p className="text-[14px] text-[var(--text-secondary)] leading-relaxed max-w-lg">{guide.description}</p>
              </div>
              <span className="text-[var(--text-tertiary)] shrink-0 mt-8 group-hover:translate-x-1 transition-transform">&rarr;</span>
            </div>
          </Link>
        ))}
      </div>
    </article>
  );
}
