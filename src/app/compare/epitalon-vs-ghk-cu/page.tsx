import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Epitalon vs GHK-Cu — Two Approaches to Anti-Aging',
  description: 'Epitalon vs GHK-Cu for longevity: telomerase activation vs gene expression modulation. Different mechanisms, different evidence bases, same goal.',
};

const rows = [
  { label: 'Class', a: 'Synthetic tetrapeptide (pineal bioregulator)', b: 'Naturally occurring copper tripeptide' },
  { label: 'Primary mechanism', a: 'Telomerase activation + melatonin', b: 'Gene expression modulation (4,000+ genes)' },
  { label: 'Aging target', a: 'Telomere maintenance, circadian rhythm', b: 'Tissue remodeling, antioxidant defense' },
  { label: 'Administration', a: 'SubQ injection (10-20 day courses)', b: 'SubQ injection or topical' },
  { label: 'Dosing pattern', a: 'Pulsed courses: 10-20 days, then months off', b: 'Daily for weeks, or ongoing (topical)' },
  { label: 'Natural presence', a: 'Synthetic analog of pineal extract', b: 'Found in human blood plasma (declines with age)' },
  { label: 'Research origin', a: 'Khavinson, St. Petersburg (single group)', b: 'Pickart, multiple independent groups' },
  { label: 'Evidence quality', a: 'Animal studies + Russian clinical data', b: 'In vitro, animal, and cosmetic clinical trials' },
  { label: 'Independent replication', a: 'Limited Western replication', b: 'Broad international validation' },
  { label: 'Topical use', a: 'No', b: 'Yes — widely used in skincare' },
  { label: 'Best for', a: 'Telomere-focused longevity protocols', b: 'Broad anti-aging, skin, wound healing' },
];

export default function EpitalonVsGHKCuPage() {
  return (
    <>
      <article className="max-w-[var(--page-max)] mx-auto px-6 py-16">
        <header className="mb-16">
          <p className="text-caption mb-4">Comparison</p>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 48px)', lineHeight: '1.05', letterSpacing: '-0.035em', fontWeight: 700 }} className="mb-6">
            Epitalon vs GHK-Cu
          </h1>
          <p className="text-body max-w-xl">
            Two different approaches to anti-aging. Epitalon targets telomeres. GHK-Cu resets gene expression.
            Different mechanisms, different evidence levels, often used together.
          </p>
        </header>

        <div className="rounded-[var(--radius-md)] bg-[var(--bg-surface)] p-6 mb-16 max-w-2xl">
          <p className="text-caption mb-3">The Short Answer</p>
          <p style={{ fontSize: '18px', lineHeight: '1.45', letterSpacing: '-0.01em', fontWeight: 500 }}>
            GHK-Cu has broader evidence from multiple independent groups and a natural presence in the body.
            Epitalon has a more specific mechanism (telomerase) but relies heavily on one research group.
            They target completely different aging pathways and are complementary, not competing.
          </p>
        </div>

        <div className="mb-20 overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b border-[var(--border-subtle)]">
                <th className="text-caption text-left py-4 pr-6 w-[180px]">&nbsp;</th>
                <th className="text-left py-4 px-4"><Link href="/peptides/epitalon" className="text-[15px] font-semibold hover:text-[var(--text-secondary)] transition-colors">Epitalon</Link></th>
                <th className="text-left py-4 px-4"><Link href="/peptides/ghk-cu" className="text-[15px] font-semibold hover:text-[var(--text-secondary)] transition-colors">GHK-Cu</Link></th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className="border-b border-[var(--border-subtle)]">
                  <td className="text-caption py-3.5 pr-6 align-top">{row.label}</td>
                  <td className="text-[14px] py-3.5 px-4 align-top text-[var(--text-secondary)]">{row.a}</td>
                  <td className="text-[14px] py-3.5 px-4 align-top text-[var(--text-secondary)]">{row.b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="prose-content space-y-12 max-w-2xl">
          <section>
            <h2 className="text-subhead mb-4">Evidence Comparison</h2>
            <p>This is the key differentiator. GHK-Cu has been validated by multiple independent research groups worldwide, has a known natural presence in human plasma, and its gene expression effects have been confirmed through Broad Institute Connectivity Map analysis. Epitalon&apos;s evidence comes primarily from Professor Khavinson&apos;s group in St. Petersburg — extensive work, but with limited independent Western replication.</p>
            <p>Neither has large-scale Phase III clinical trials for anti-aging. GHK-Cu has clinical data in cosmetic applications (skin rejuvenation). Epitalon has clinical observations from Russian bioregulation studies.</p>
          </section>
          <section>
            <h2 className="text-subhead mb-4">Using Both</h2>
            <p>Since they target completely different aging mechanisms, many longevity protocols combine them. Epitalon is run as a 10-20 day course every 4-6 months (targeting telomerase and pineal function). GHK-Cu is used daily or in 4-8 week cycles (targeting gene expression and tissue remodeling). There is no mechanistic overlap or expected interaction.</p>
          </section>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-px rounded-[var(--radius-md)] overflow-hidden">
          <Link href="/peptides/epitalon" className="bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-hover)] transition-colors p-6">
            <p className="text-caption mb-2">Full Profile</p>
            <p className="text-[17px] font-semibold tracking-tight">Epitalon</p>
          </Link>
          <Link href="/peptides/ghk-cu" className="bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-hover)] transition-colors p-6">
            <p className="text-caption mb-2">Full Profile</p>
            <p className="text-[17px] font-semibold tracking-tight">GHK-Cu</p>
          </Link>
        </div>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'Is Epitalon or GHK-Cu better for anti-aging?', acceptedAnswer: { '@type': 'Answer', text: 'They target different aging mechanisms and are complementary. GHK-Cu has broader independent evidence and modulates 4,000+ genes toward younger patterns. Epitalon specifically targets telomerase activation but relies on research from primarily one group. Many longevity protocols use both.' }},
        ],
      }) }} />
    </>
  );
}
