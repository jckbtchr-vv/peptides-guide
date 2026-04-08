import Link from 'next/link';
import { categories } from '@/data/categories';
import { getAllPeptides } from '@/data/peptides';

const FEATURED_SLUGS = ['bpc-157', 'semaglutide', 'ghk-cu', 'semax'];

export default function Home() {
  const allPeptides = getAllPeptides();
  const featured = FEATURED_SLUGS.map((s) => allPeptides.find((p) => p.slug === s)).filter(Boolean);

  return (
    <>
      {/* Hero — The Statement */}
      <section className="min-h-[85vh] flex items-center">
        <div className="max-w-[var(--page-max)] mx-auto px-6 py-24">
          <h1
            className="text-display max-w-[900px] mb-8"
            style={{ fontSize: 'clamp(52px, 9vw, 110px)', lineHeight: '0.92', letterSpacing: '-0.045em' }}
          >
            The only peptide resource you&apos;ll ever need.
          </h1>
          <p className="text-body max-w-md mb-12" style={{ fontSize: '18px' }}>
            35+ peptides. Every mechanism, every study, every protocol.
            Research-backed. No selling. No hype.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/healing-recovery"
              className="inline-flex items-center px-6 py-3 text-[14px] font-medium bg-[var(--text-primary)] text-[var(--bg-root)] rounded-full hover:opacity-80 transition-opacity"
            >
              Start Reading
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

      {/* Categories */}
      <section className="pb-[var(--section-gap)]">
        <div className="max-w-[var(--page-max)] mx-auto px-6">
          <div className="border-t border-[var(--border-subtle)] pt-16 mb-16">
            <p className="text-caption mb-3">Browse by Category</p>
            <h2 className="text-headline">8 categories.<br />35+ peptides.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--border-subtle)] rounded-[var(--radius-lg)] overflow-hidden">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/${cat.slug}`}
                className="group bg-[var(--bg-root)] p-7 hover:bg-[var(--bg-surface)] transition-colors"
              >
                <h3 className="text-[16px] font-semibold tracking-tight mb-2 group-hover:text-[var(--accent)] transition-colors">
                  {cat.name}
                </h3>
                <p className="text-[13px] leading-relaxed text-[var(--text-tertiary)] mb-5">
                  {cat.headline}
                </p>
                <span className="text-caption text-[10px]">
                  {cat.peptideSlugs.length} peptides &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      {featured.length > 0 && (
        <section className="pb-[var(--section-gap)]">
          <div className="max-w-[var(--page-max)] mx-auto px-6">
            <div className="border-t border-[var(--border-subtle)] pt-16 mb-16">
              <p className="text-caption mb-3">Most Searched</p>
              <h2 className="text-headline">Start here.</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--border-subtle)] rounded-[var(--radius-lg)] overflow-hidden">
              {featured.map((peptide) => (
                <Link
                  key={peptide!.slug}
                  href={`/peptides/${peptide!.slug}`}
                  className="group bg-[var(--bg-root)] p-8 hover:bg-[var(--bg-surface)] transition-colors"
                >
                  <span className="text-caption text-[10px] mb-3 block">{peptide!.status.toUpperCase()}</span>
                  <h3
                    className="text-[28px] font-bold tracking-tight mb-1 group-hover:text-[var(--accent)] transition-colors"
                    style={{ letterSpacing: '-0.03em' }}
                  >
                    {peptide!.name}
                  </h3>
                  <p className="text-[13px] text-[var(--text-tertiary)] mb-4">{peptide!.fullName}</p>
                  <p className="text-[14px] leading-relaxed text-[var(--text-secondary)] line-clamp-2">
                    {peptide!.metaDescription}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Statement Banner */}
      <section className="pb-[var(--section-gap)]">
        <div className="max-w-[var(--page-max)] mx-auto px-6">
          <div className="border-t border-[var(--border-subtle)] pt-24 pb-8">
            <h2
              className="max-w-[800px]"
              style={{
                fontSize: 'clamp(28px, 5vw, 52px)',
                lineHeight: '1.05',
                letterSpacing: '-0.035em',
                fontWeight: 700,
              }}
            >
              Research-backed.
              <br />
              No affiliate links. No ads.
              <br />
              <span className="text-[var(--text-tertiary)]">Just the science.</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-12 mt-12 text-caption">
            <div>
              <span className="block text-[32px] font-bold text-[var(--text-primary)] tracking-tight" style={{ letterSpacing: '-0.03em' }}>35+</span>
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
            description: 'Comprehensive, research-backed peptide encyclopedia covering 35+ peptides with mechanisms, clinical evidence, protocols, and safety profiles.',
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
