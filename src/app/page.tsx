import Link from 'next/link';
import { categories } from '@/data/categories';
import { getAllPeptides } from '@/data/peptides';

const FEATURED_SLUGS = ['bpc-157', 'semaglutide', 'ghk-cu', 'semax'];

export default function Home() {
  const allPeptides = getAllPeptides();
  const featured = FEATURED_SLUGS.map((s) => allPeptides.find((p) => p.slug === s)).filter(Boolean);

  return (
    <>
      {/* Hero */}
      <section className="min-h-[80vh] flex items-center">
        <div className="max-w-[var(--page-max)] mx-auto px-6 py-24">
          <h1
            className="text-display max-w-[900px] mb-8"
            style={{ fontSize: 'clamp(52px, 9vw, 110px)', lineHeight: '0.92', letterSpacing: '-0.045em' }}
          >
            The only peptide resource you&apos;ll ever need.
          </h1>
          <p className="text-body max-w-md mb-12" style={{ fontSize: '18px' }}>
            36 peptides. Every mechanism, every study, every protocol.
            Written by AI. Sourced from research.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="#index"
              className="inline-flex items-center px-6 py-3 text-[14px] font-medium bg-[var(--text-primary)] text-[var(--bg-root)] rounded-full hover:opacity-80 transition-opacity"
            >
              Browse Index
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center px-6 py-3 text-[14px] font-medium border border-[var(--border-default)] rounded-full hover:bg-[var(--bg-surface)] transition-colors"
            >
              About This Project
            </Link>
          </div>
        </div>
      </section>

      {/* Category Index — compact table */}
      <section id="index" className="pb-[var(--section-gap)] scroll-mt-16">
        <div className="max-w-[var(--page-max)] mx-auto px-6">
          <div className="border-t border-[var(--border-subtle)]">
            {categories.map((cat) => {
              const catPeptides = allPeptides.filter((p) =>
                p.categories.includes(cat.slug as typeof p.primaryCategory)
              );
              return (
                <div key={cat.slug} className="border-b border-[var(--border-subtle)] py-6">
                  <div className="flex items-baseline justify-between mb-3">
                    <Link
                      href={`/${cat.slug}`}
                      className="text-[15px] font-semibold tracking-tight hover:text-[var(--text-secondary)] transition-colors"
                    >
                      {cat.name}
                    </Link>
                    <span className="text-[11px] text-[var(--text-tertiary)] uppercase tracking-[0.08em]">
                      {catPeptides.length} peptides
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-x-4 gap-y-1">
                    {catPeptides.map((p) => (
                      <Link
                        key={p.slug}
                        href={`/peptides/${p.slug}`}
                        className="text-[13px] text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors"
                      >
                        {p.name}
                      </Link>
                    ))}
                    {catPeptides.length === 0 && (
                      <span className="text-[13px] text-[var(--text-tertiary)]">Coming soon</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Guides row */}
          <div className="border-b border-[var(--border-subtle)] py-6">
            <div className="flex items-baseline justify-between mb-3">
              <Link
                href="/guides"
                className="text-[15px] font-semibold tracking-tight hover:text-[var(--text-secondary)] transition-colors"
              >
                Guides
              </Link>
              <span className="text-[11px] text-[var(--text-tertiary)] uppercase tracking-[0.08em]">
                3 guides
              </span>
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-1">
              <Link href="/guides/reconstitution" className="text-[13px] text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors">
                Reconstitution
              </Link>
              <Link href="/guides/dosing-101" className="text-[13px] text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors">
                Dosing 101
              </Link>
              <Link href="/guides/peptide-safety" className="text-[13px] text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors">
                Peptide Safety
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Statement */}
      <section className="pb-[var(--section-gap)]">
        <div className="max-w-[var(--page-max)] mx-auto px-6">
          <div className="pt-12 pb-8">
            <h2
              className="max-w-[800px]"
              style={{
                fontSize: 'clamp(28px, 5vw, 52px)',
                lineHeight: '1.05',
                letterSpacing: '-0.035em',
                fontWeight: 700,
              }}
            >
              Written by AI.
              <br />
              Sourced from research.
              <br />
              <span className="text-[var(--text-tertiary)]">No one&apos;s selling you anything.</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-12 mt-8 text-caption">
            <div>
              <span className="block text-[32px] font-bold text-[var(--text-primary)] tracking-tight" style={{ letterSpacing: '-0.03em' }}>36</span>
              <span>Peptides</span>
            </div>
            <div>
              <span className="block text-[32px] font-bold text-[var(--text-primary)] tracking-tight" style={{ letterSpacing: '-0.03em' }}>100+</span>
              <span>Citations</span>
            </div>
            <div>
              <span className="block text-[32px] font-bold text-[var(--text-primary)] tracking-tight" style={{ letterSpacing: '-0.03em' }}>8</span>
              <span>Categories</span>
            </div>
            <div>
              <span className="block text-[32px] font-bold text-[var(--text-primary)] tracking-tight" style={{ letterSpacing: '-0.03em' }}>$0</span>
              <span>For Sale</span>
            </div>
          </div>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Peptides Guide',
            url: 'https://peptides-guide.com',
            description: 'Comprehensive, research-backed peptide encyclopedia covering 36 peptides with mechanisms, clinical evidence, protocols, and safety profiles.',
            publisher: {
              '@type': 'Organization',
              name: 'Peptides Guide',
              url: 'https://peptides-guide.com',
            },
          }),
        }}
      />
    </>
  );
}
