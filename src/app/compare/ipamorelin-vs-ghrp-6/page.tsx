import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Ipamorelin vs GHRP-6 — Which GH Secretagogue Is Better?',
  description: 'Ipamorelin vs GHRP-6 compared: selectivity, GH output, hunger effects, cortisol, and which growth hormone peptide to choose for your goals.',
};

const rows = [
  { label: 'Class', a: 'Selective GH secretagogue', b: 'GH secretagogue (ghrelin mimetic)' },
  { label: 'Receptor', a: 'GHS-R1a (selective)', b: 'GHS-R1a (broad activation)' },
  { label: 'GH release potency', a: 'Moderate', b: 'Strong' },
  { label: 'Hunger stimulation', a: 'Minimal to none', b: 'Intense (ghrelin-mediated)' },
  { label: 'Cortisol elevation', a: 'None', b: 'Modest, transient' },
  { label: 'Prolactin elevation', a: 'None', b: 'Modest' },
  { label: 'Typical dose', a: '100–300 mcg 2–3x daily', b: '100–300 mcg 2–3x daily' },
  { label: 'Best combined with', a: 'CJC-1295 (no DAC)', b: 'CJC-1295 (no DAC) or GHRH' },
  { label: 'Selectivity', a: 'Most selective GHRP', b: 'Least selective GHRP' },
  { label: 'FDA status', a: 'Not approved', b: 'Not approved' },
  { label: 'Best for', a: 'Clean GH elevation, anti-aging, sleep', b: 'Maximum GH output, bulking, appetite' },
];

export default function IpamorelinVsGHRP6() {
  return (
    <>
      <article className="max-w-[var(--page-max)] mx-auto px-6 py-16">
        <header className="mb-16">
          <p className="text-caption mb-4">Comparison</p>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 48px)', lineHeight: '1.05', letterSpacing: '-0.035em', fontWeight: 700 }} className="mb-6">
            Ipamorelin vs GHRP-6
          </h1>
          <p className="text-body max-w-xl">
            Selectivity vs raw power. Ipamorelin gives you clean GH release with no side effects.
            GHRP-6 gives you more GH but comes with intense hunger and cortisol.
          </p>
        </header>

        <div className="rounded-[var(--radius-md)] bg-[var(--bg-surface)] p-6 mb-16 max-w-2xl">
          <p className="text-caption mb-3">The Short Answer</p>
          <p style={{ fontSize: '18px', lineHeight: '1.45', letterSpacing: '-0.01em', fontWeight: 500 }}>
            Ipamorelin is the precision tool — GH release with nothing else. GHRP-6 is the sledgehammer —
            more GH but with hunger, cortisol, and prolactin along for the ride.
            Most people prefer Ipamorelin for its clean profile.
          </p>
        </div>

        <div className="mb-20 overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b border-[var(--border-subtle)]">
                <th className="text-caption text-left py-4 pr-6 w-[180px]">&nbsp;</th>
                <th className="text-left py-4 px-4"><Link href="/peptides/ipamorelin" className="text-[15px] font-semibold hover:text-[var(--text-secondary)] transition-colors">Ipamorelin</Link></th>
                <th className="text-left py-4 px-4"><Link href="/peptides/ghrp-6" className="text-[15px] font-semibold hover:text-[var(--text-secondary)] transition-colors">GHRP-6</Link></th>
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
            <h2 className="text-subhead mb-4">Choose Ipamorelin When</h2>
            <p>You want GH elevation without side effects. Anti-aging, sleep improvement, body composition, recovery. You don&apos;t want appetite stimulation. You&apos;re stacking with CJC-1295 for a clean, long-term protocol. This is the &quot;default choice&quot; for most people.</p>
          </section>
          <section>
            <h2 className="text-subhead mb-4">Choose GHRP-6 When</h2>
            <p>You want maximum GH output and the appetite increase is a feature (bulking, underweight, recovery from illness). You&apos;re doing short intensive cycles where cortisol/prolactin elevation is acceptable. Or when combining with GHRH for the most powerful synergistic GH release possible.</p>
          </section>
          <section>
            <h2 className="text-subhead mb-4">The GHRP Selectivity Spectrum</h2>
            <p>From most selective to least: Ipamorelin → GHRP-2 → GHRP-6 → Hexarelin. As you move right, GH output increases but so do side effects (hunger, cortisol, prolactin). Ipamorelin is the only GHRP that produces zero cortisol and prolactin elevation at standard doses.</p>
          </section>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-px rounded-[var(--radius-md)] overflow-hidden">
          <Link href="/peptides/ipamorelin" className="bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-hover)] transition-colors p-6">
            <p className="text-caption mb-2">Full Profile</p>
            <p className="text-[17px] font-semibold tracking-tight">Ipamorelin</p>
          </Link>
          <Link href="/peptides/ghrp-6" className="bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-hover)] transition-colors p-6">
            <p className="text-caption mb-2">Full Profile</p>
            <p className="text-[17px] font-semibold tracking-tight">GHRP-6</p>
          </Link>
        </div>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'Is Ipamorelin better than GHRP-6?', acceptedAnswer: { '@type': 'Answer', text: 'Ipamorelin is more selective — it produces GH release without affecting cortisol, prolactin, or appetite. GHRP-6 produces more raw GH output but causes intense hunger and modest cortisol/prolactin elevation. For most people, Ipamorelin is preferred for its clean side effect profile.' }},
          { '@type': 'Question', name: 'Does GHRP-6 make you hungry?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, intensely. GHRP-6 activates the ghrelin receptor which directly stimulates hunger within 20 minutes of injection. This is its most notable side effect and distinguishes it from Ipamorelin, which causes minimal to no appetite changes.' }},
        ],
      }) }} />
    </>
  );
}
