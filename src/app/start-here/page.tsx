import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Start Here — 5 Peptides Everyone Should Know',
  description: 'New to peptides? Start with these 5: BPC-157 for healing, Semaglutide for weight loss, GHK-Cu for anti-aging, Semax for cognition, and Ipamorelin for GH.',
};

const essentials = [
  {
    slug: 'bpc-157',
    name: 'BPC-157',
    category: 'Healing',
    why: 'The most researched healing peptide with over 100 animal studies. Unique because it\'s stable in stomach acid — one of the only peptides you can take orally. If you\'re dealing with any kind of tissue injury, this is where most people start.',
    oneLineEli5: 'Your stomach makes a tiny protein that heals damage. This is the synthetic version.',
  },
  {
    slug: 'semaglutide',
    name: 'Semaglutide',
    category: 'Weight Loss',
    why: 'FDA-approved as Ozempic and Wegovy. 15% average body weight loss in clinical trials. Tens of thousands of patients studied. The most validated peptide therapeutic in modern medicine. If you\'re interested in metabolic peptides, understand this one first — everything else (Tirzepatide, Retatrutide) builds on it.',
    oneLineEli5: 'The Ozempic/Wegovy drug. Mimics your gut\'s "I\'m full" hormone.',
  },
  {
    slug: 'ghk-cu',
    name: 'GHK-Cu',
    category: 'Anti-Aging',
    why: 'A naturally occurring copper peptide that declines with age. Research shows it modulates over 4,000 genes, shifting expression patterns toward younger profiles. Used topically in skincare (with real data) and researched as an injectable for systemic anti-aging. The broadest evidence base of any longevity peptide.',
    oneLineEli5: 'A copper molecule in your blood that resets gene expression. You lose most of it by 60.',
  },
  {
    slug: 'semax',
    name: 'Semax',
    category: 'Cognition',
    why: 'A prescription nootropic used in Russia since 1994. Rapidly upregulates BDNF — the brain\'s primary growth factor for new connections. Intranasal, fast-acting, and one of the few cognitive peptides with actual clinical use history (albeit in Russia, not the US).',
    oneLineEli5: 'A nasal spray that fertilizes your neurons. Prescription drug in Russia for 30 years.',
  },
  {
    slug: 'ipamorelin',
    name: 'Ipamorelin',
    category: 'Growth Hormone',
    why: 'The most selective GH secretagogue — it stimulates growth hormone release without touching cortisol, prolactin, or appetite. The "default choice" for GH protocols. Usually combined with CJC-1295 (no DAC) for synergistic release. Understand Ipamorelin and you understand the entire GH secretagogue category.',
    oneLineEli5: 'The cleanest way to boost growth hormone. Does one thing with no side effects.',
  },
];

export default function StartHerePage() {
  return (
    <>
      <article className="max-w-[var(--page-max)] mx-auto px-6 py-16">
        <header className="mb-20">
          <p className="text-caption mb-4">Start Here</p>
          <h1
            style={{
              fontSize: 'clamp(32px, 5vw, 56px)',
              lineHeight: '1.05',
              letterSpacing: '-0.035em',
              fontWeight: 700,
            }}
            className="mb-6"
          >
            5 peptides everyone<br />
            <span className="text-[var(--text-tertiary)]">should understand.</span>
          </h1>
          <p className="text-body max-w-xl">
            New to peptides? These five represent the major categories and are the most commonly discussed.
            Read these first, then branch out into whatever interests you.
          </p>
        </header>

        <div className="border-t border-[var(--border-subtle)]">
          {essentials.map((item, i) => (
            <div key={item.slug} className="py-12 border-b border-[var(--border-subtle)]">
              <div className="flex items-baseline gap-4 mb-4">
                <span
                  className="text-[var(--text-tertiary)] font-mono text-[13px]"
                  style={{ fontVariantNumeric: 'tabular-nums' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-caption">{item.category}</span>
              </div>
              <Link href={`/peptides/${item.slug}`} className="group">
                <h2
                  className="mb-3 group-hover:text-[var(--text-secondary)] transition-colors"
                  style={{
                    fontSize: 'clamp(24px, 3.5vw, 36px)',
                    lineHeight: '1.1',
                    letterSpacing: '-0.03em',
                    fontWeight: 700,
                  }}
                >
                  {item.name}
                </h2>
              </Link>
              <p className="text-[13px] text-[var(--text-tertiary)] italic mb-4">{item.oneLineEli5}</p>
              <p className="text-[15px] text-[var(--text-secondary)] leading-relaxed max-w-2xl mb-5">
                {item.why}
              </p>
              <Link
                href={`/peptides/${item.slug}`}
                className="text-[13px] text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors"
              >
                Read full profile &rarr;
              </Link>
            </div>
          ))}
        </div>

        {/* What's next */}
        <div className="mt-16 pt-16 border-t border-[var(--border-subtle)]">
          <h2 className="text-subhead mb-6">What next?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px rounded-[var(--radius-md)] overflow-hidden">
            <Link href="/quiz" className="bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-hover)] transition-colors p-6">
              <p className="text-caption mb-2">Interactive</p>
              <p className="text-[15px] font-semibold tracking-tight">Peptide Finder Quiz</p>
            </Link>
            <Link href="/peptides" className="bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-hover)] transition-colors p-6">
              <p className="text-caption mb-2">Browse</p>
              <p className="text-[15px] font-semibold tracking-tight">All 46 Peptides</p>
            </Link>
            <Link href="/guides/peptide-safety" className="bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-hover)] transition-colors p-6">
              <p className="text-caption mb-2">Essential Reading</p>
              <p className="text-[15px] font-semibold tracking-tight">Peptide Safety Guide</p>
            </Link>
          </div>
        </div>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: '5 Peptides Everyone Should Know',
        description: 'Introduction to the most important peptides: BPC-157, Semaglutide, GHK-Cu, Semax, and Ipamorelin.',
        url: 'https://peptides-guide.com/start-here',
      }) }} />
    </>
  );
}
