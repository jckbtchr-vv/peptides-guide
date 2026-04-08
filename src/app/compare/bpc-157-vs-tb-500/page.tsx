import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'BPC-157 vs TB-500 — Which Healing Peptide Is Better?',
  description: 'Head-to-head comparison of BPC-157 and TB-500 for healing. Mechanisms, research, dosing, stacking, and which to choose for different injuries.',
};

const rows = [
  { label: 'Full name', a: 'Body Protection Compound-157', b: 'Thymosin Beta-4 fragment (17-23)' },
  { label: 'Class', a: 'Gastric pentadecapeptide', b: 'Actin-sequestering peptide fragment' },
  { label: 'Primary mechanism', a: 'Angiogenesis (VEGF upregulation)', b: 'Cell migration (actin regulation)' },
  { label: 'Amino acids', a: '15', b: '7 (active region of 43-aa parent)' },
  { label: 'Oral viability', a: 'Yes — stable in gastric juice', b: 'No — injection only' },
  { label: 'Administration', a: 'SubQ injection or oral', b: 'SubQ injection' },
  { label: 'Typical dose', a: '250–500 mcg 1–2x daily', b: '2–5 mg 2–3x per week' },
  { label: 'Half-life', a: '~1–2 hours', b: '~2–4 hours' },
  { label: 'Research volume', a: '100+ preclinical studies', b: 'Extensive (parent protein Tβ4)' },
  { label: 'Human trials', a: 'None completed', b: 'RGN-259 (eye drops) Phase II/III' },
  { label: 'FDA status', a: 'Not approved', b: 'Not approved (RGN-259 investigational)' },
  { label: 'Key strength', a: 'Gut healing, tendon repair, oral dosing', b: 'Systemic healing, cardiac repair, flexibility' },
  { label: 'Best for', a: 'Localized injuries, GI healing', b: 'Systemic recovery, large tissue areas' },
];

export default function BPC157vsTB500() {
  return (
    <>
      <article className="max-w-[var(--page-max)] mx-auto px-6 py-16">
        <header className="mb-16">
          <p className="text-caption mb-4">Comparison</p>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 48px)', lineHeight: '1.05', letterSpacing: '-0.035em', fontWeight: 700 }} className="mb-6">
            BPC-157 vs TB-500
          </h1>
          <p className="text-body max-w-xl">
            The two most popular healing peptides compared. They target different mechanisms —
            and most people use them together. Here&apos;s why.
          </p>
        </header>

        <div className="rounded-[var(--radius-md)] bg-[var(--bg-surface)] p-6 mb-16 max-w-2xl">
          <p className="text-caption mb-3">The Short Answer</p>
          <p style={{ fontSize: '18px', lineHeight: '1.45', letterSpacing: '-0.01em', fontWeight: 500 }}>
            BPC-157 promotes blood vessel formation at injury sites. TB-500 promotes cell migration to injury sites.
            Different pathways, same goal. Most healing protocols use both.
          </p>
        </div>

        <div className="mb-20 overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b border-[var(--border-subtle)]">
                <th className="text-caption text-left py-4 pr-6 w-[160px]">&nbsp;</th>
                <th className="text-left py-4 px-4"><Link href="/peptides/bpc-157" className="text-[15px] font-semibold hover:text-[var(--text-secondary)] transition-colors">BPC-157</Link></th>
                <th className="text-left py-4 px-4"><Link href="/peptides/tb-500" className="text-[15px] font-semibold hover:text-[var(--text-secondary)] transition-colors">TB-500</Link></th>
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
            <h2 className="text-subhead mb-4">When to Use BPC-157</h2>
            <p>Choose BPC-157 when dealing with localized injuries — tendon tears, muscle strains, ligament damage, joint issues. Its angiogenic mechanism brings blood supply directly to the injury site. Also the clear choice for any gut-related issue (IBS, ulcers, gut permeability) since it&apos;s stable in gastric juice and can be taken orally.</p>
          </section>
          <section>
            <h2 className="text-subhead mb-4">When to Use TB-500</h2>
            <p>Choose TB-500 for systemic recovery, large-area injuries, or conditions requiring broad tissue remodeling. Its actin-regulation mechanism promotes cell migration throughout the body. TB-500 is also researched for cardiac repair and has anti-fibrotic properties that BPC-157 doesn&apos;t share.</p>
          </section>
          <section>
            <h2 className="text-subhead mb-4">When to Use Both</h2>
            <p>Most healing protocols combine them because they target complementary pathways. BPC-157 creates new blood vessels at the injury site (supply) while TB-500 drives cells to migrate there (demand). The combination covers both sides of the healing equation. Typical protocol: BPC-157 250–500 mcg daily + TB-500 2–5 mg twice weekly, for 4–6 weeks.</p>
          </section>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-px rounded-[var(--radius-md)] overflow-hidden">
          <Link href="/peptides/bpc-157" className="bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-hover)] transition-colors p-6">
            <p className="text-caption mb-2">Full Profile</p>
            <p className="text-[17px] font-semibold tracking-tight">BPC-157</p>
          </Link>
          <Link href="/peptides/tb-500" className="bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-hover)] transition-colors p-6">
            <p className="text-caption mb-2">Full Profile</p>
            <p className="text-[17px] font-semibold tracking-tight">TB-500</p>
          </Link>
        </div>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'What is the difference between BPC-157 and TB-500?', acceptedAnswer: { '@type': 'Answer', text: 'BPC-157 promotes healing through angiogenesis (new blood vessel formation) and is stable in gastric juice for oral use. TB-500 promotes healing through actin regulation and cell migration. They target complementary pathways and are often used together.' }},
          { '@type': 'Question', name: 'Can you take BPC-157 and TB-500 together?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, combining BPC-157 and TB-500 is the most common healing peptide stack. BPC-157 creates blood supply at the injury site while TB-500 drives cell migration there. Typical protocol: BPC-157 250-500 mcg daily + TB-500 2-5 mg twice weekly for 4-6 weeks.' }},
          { '@type': 'Question', name: 'Which is better for tendon injuries: BPC-157 or TB-500?', acceptedAnswer: { '@type': 'Answer', text: 'BPC-157 has more direct research on tendon healing, including Achilles tendon transection models showing accelerated repair. TB-500 supports the process through cell migration. For tendons specifically, BPC-157 is typically the primary choice, with TB-500 as a complement.' }},
        ],
      }) }} />
    </>
  );
}
