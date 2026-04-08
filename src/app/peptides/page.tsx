import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllPeptides } from '@/data/peptides';
import { categories } from '@/data/categories';

export const metadata: Metadata = {
  title: 'All Peptides',
  description: 'Complete index of all 37 peptides in the Peptides Guide encyclopedia. Browse by name, category, or regulatory status.',
};

export default function PeptidesIndexPage() {
  const allPeptides = getAllPeptides();

  const grouped = categories.map((cat) => ({
    category: cat,
    peptides: allPeptides.filter((p) => p.primaryCategory === cat.slug),
  })).filter((g) => g.peptides.length > 0);

  return (
    <article className="max-w-[var(--page-max)] mx-auto px-6 py-16">
      <header className="mb-16">
        <p className="text-caption mb-4">{allPeptides.length} Peptides</p>
        <h1 className="text-headline mb-6">All Peptides</h1>
        <p className="text-body max-w-xl">
          Complete index of every peptide in the encyclopedia. Organized by primary category.
        </p>
      </header>

      <div className="border-t border-[var(--border-subtle)]">
        {grouped.map(({ category, peptides }) => (
          <div key={category.slug} className="border-b border-[var(--border-subtle)] py-8">
            <div className="flex items-baseline justify-between mb-4">
              <Link
                href={`/${category.slug}`}
                className="text-[15px] font-semibold tracking-tight hover:text-[var(--text-secondary)] transition-colors"
              >
                {category.name}
              </Link>
              <span className="text-[11px] text-[var(--text-tertiary)] uppercase tracking-[0.08em]">
                {peptides.length}
              </span>
            </div>
            <div className="space-y-3">
              {peptides.map((p) => (
                <Link
                  key={p.slug}
                  href={`/peptides/${p.slug}`}
                  className="flex items-baseline justify-between group py-1"
                >
                  <div className="flex items-baseline gap-3">
                    <span className="text-[15px] font-medium group-hover:text-[var(--text-secondary)] transition-colors">
                      {p.name}
                    </span>
                    <span className="text-[12px] text-[var(--text-tertiary)] hidden sm:inline">
                      {p.fullName}
                    </span>
                  </div>
                  <span className="text-[10px] text-[var(--text-tertiary)] uppercase tracking-[0.08em] shrink-0 ml-4">
                    {p.status.replace('-', ' ')}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'All Peptides — Peptides Guide',
            description: `Complete index of all ${allPeptides.length} peptides in the Peptides Guide encyclopedia.`,
            url: 'https://peptides-guide.com/peptides',
          }),
        }}
      />
    </article>
  );
}
