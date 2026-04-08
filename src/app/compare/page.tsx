import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Semaglutide vs Tirzepatide vs Retatrutide — Complete Comparison',
  description: 'Head-to-head comparison of Semaglutide (Ozempic/Wegovy), Tirzepatide (Mounjaro/Zepbound), and Retatrutide. Weight loss data, mechanisms, side effects, and cost.',
  openGraph: {
    title: 'Semaglutide vs Tirzepatide vs Retatrutide',
    description: 'The definitive comparison of GLP-1 agonists for weight loss. Clinical trial data, mechanisms, side effects.',
  },
};

const comparisonData = [
  { label: 'Brand names', sema: 'Ozempic, Wegovy, Rybelsus', tirz: 'Mounjaro, Zepbound', reta: 'N/A (investigational)' },
  { label: 'FDA status', sema: 'Approved (2017/2021)', tirz: 'Approved (2022/2023)', reta: 'Phase 3 trials' },
  { label: 'Receptor targets', sema: 'GLP-1', tirz: 'GIP + GLP-1', reta: 'GIP + GLP-1 + Glucagon' },
  { label: 'Mean weight loss', sema: '14.9% (STEP 1)', tirz: '20.9% (SURMOUNT-1)', reta: '24.2% (Phase 2)' },
  { label: 'Trial duration', sema: '68 weeks', tirz: '72 weeks', reta: '48 weeks' },
  { label: 'Max dose studied', sema: '2.4 mg/week', tirz: '15 mg/week', reta: '12 mg/week' },
  { label: 'Half-life', sema: '~7 days', tirz: '~5 days', reta: '~6 days' },
  { label: 'Dosing', sema: 'Once weekly', tirz: 'Once weekly', reta: 'Once weekly' },
  { label: 'Administration', sema: 'SubQ injection (oral available)', tirz: 'SubQ injection', reta: 'SubQ injection' },
  { label: 'Nausea rate', sema: '~44%', tirz: '~31%', reta: '~45%' },
  { label: 'HbA1c reduction', sema: 'Up to 1.8%', tirz: 'Up to 2.4%', reta: 'Up to 2.02%' },
  { label: 'Cardiovascular data', sema: 'SELECT: 20% MACE reduction', tirz: 'SURPASS-CVOT ongoing', reta: 'No CV outcomes data yet' },
  { label: 'Liver fat reduction', sema: 'Moderate', tirz: 'Significant', reta: '82–86% (Phase 2)' },
  { label: 'Developer', sema: 'Novo Nordisk', tirz: 'Eli Lilly', reta: 'Eli Lilly' },
];

export default function ComparePage() {
  return (
    <>
      <article className="max-w-[var(--page-max)] mx-auto px-6 py-16">
        <header className="mb-16">
          <p className="text-caption mb-4">Comparison</p>
          <h1
            style={{
              fontSize: 'clamp(28px, 5vw, 48px)',
              lineHeight: '1.05',
              letterSpacing: '-0.035em',
              fontWeight: 700,
            }}
            className="mb-6"
          >
            Semaglutide vs Tirzepatide<br />
            <span className="text-[var(--text-tertiary)]">vs Retatrutide</span>
          </h1>
          <p className="text-body max-w-xl">
            The three most important GLP-1 class drugs compared head-to-head. Single receptor, dual receptor,
            triple receptor — each generation adds a new mechanism and produces more weight loss.
          </p>
        </header>

        {/* Key Insight */}
        <div className="rounded-[var(--radius-md)] bg-[var(--bg-surface)] p-6 mb-16 max-w-2xl">
          <p className="text-caption mb-3">The Pattern</p>
          <p
            style={{
              fontSize: '18px',
              lineHeight: '1.45',
              letterSpacing: '-0.01em',
              fontWeight: 500,
            }}
          >
            Semaglutide (GLP-1) → 15% weight loss.
            Tirzepatide (GIP + GLP-1) → 21%.
            Retatrutide (GIP + GLP-1 + Glucagon) → 24%.
            Each additional receptor target adds ~3-5% more weight loss.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="mb-20 overflow-x-auto">
          <table className="w-full min-w-[700px]">
            <thead>
              <tr className="border-b border-[var(--border-subtle)]">
                <th className="text-caption text-left py-4 pr-6 w-[180px]">&nbsp;</th>
                <th className="text-left py-4 px-4">
                  <Link href="/peptides/semaglutide" className="text-[15px] font-semibold hover:text-[var(--text-secondary)] transition-colors">
                    Semaglutide
                  </Link>
                </th>
                <th className="text-left py-4 px-4">
                  <Link href="/peptides/tirzepatide" className="text-[15px] font-semibold hover:text-[var(--text-secondary)] transition-colors">
                    Tirzepatide
                  </Link>
                </th>
                <th className="text-left py-4 px-4">
                  <Link href="/peptides/retatrutide" className="text-[15px] font-semibold hover:text-[var(--text-secondary)] transition-colors">
                    Retatrutide
                  </Link>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, i) => (
                <tr key={i} className="border-b border-[var(--border-subtle)]">
                  <td className="text-caption py-3.5 pr-6 align-top">{row.label}</td>
                  <td className="text-[14px] py-3.5 px-4 align-top text-[var(--text-secondary)]">{row.sema}</td>
                  <td className="text-[14px] py-3.5 px-4 align-top text-[var(--text-secondary)]">{row.tirz}</td>
                  <td className="text-[14px] py-3.5 px-4 align-top text-[var(--text-secondary)]">{row.reta}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Deep Dive Sections */}
        <div className="prose-content space-y-16 max-w-2xl">
          <section>
            <h2 className="text-subhead mb-4">How They Work</h2>
            <p>
              All three drugs belong to the incretin receptor agonist class, but they target different combinations of
              receptors. Semaglutide activates only the GLP-1 receptor. Tirzepatide adds GIP receptor activation.
              Retatrutide adds glucagon receptor activation on top of both.
            </p>
            <p>
              GLP-1 receptor activation reduces appetite and slows gastric emptying. GIP receptor activation enhances insulin
              sensitivity and appears to improve tolerability. Glucagon receptor activation increases energy expenditure and
              promotes liver fat oxidation — explaining retatrutide&apos;s exceptional liver fat reduction data.
            </p>
          </section>

          <section>
            <h2 className="text-subhead mb-4">Weight Loss Comparison</h2>
            <p>
              Direct comparison is complicated by different trial designs. STEP 1 (semaglutide) ran 68 weeks.
              SURMOUNT-1 (tirzepatide) ran 72 weeks. Retatrutide&apos;s Phase 2 ran only 48 weeks — and the weight loss
              curve was still descending, suggesting final numbers could be even higher in longer trials.
            </p>
            <p>
              The only true head-to-head data is SURPASS-2, where tirzepatide 15 mg produced significantly more
              weight loss than semaglutide 1 mg in type 2 diabetes patients. No head-to-head trials exist between
              retatrutide and the others yet.
            </p>
          </section>

          <section>
            <h2 className="text-subhead mb-4">Side Effects</h2>
            <p>
              The gastrointestinal side effect profile is similar across all three. Nausea, vomiting, and diarrhea are
              the most common adverse events, primarily during dose escalation. Tirzepatide may have slightly better
              GI tolerability than semaglutide, possibly due to the GIP component. Retatrutide&apos;s Phase 2 data shows
              comparable GI side effects to semaglutide.
            </p>
            <p>
              All three carry a class warning for medullary thyroid carcinoma risk based on animal studies, though
              this has not been observed in human trials.
            </p>
          </section>

          <section>
            <h2 className="text-subhead mb-4">Availability</h2>
            <p>
              Semaglutide and tirzepatide are FDA-approved and available by prescription, though supply constraints
              have been an ongoing issue. Retatrutide is only available through Phase 3 clinical trial enrollment.
              If approved, retatrutide is expected to reach market in 2026-2027.
            </p>
          </section>

          <section>
            <h2 className="text-subhead mb-4">The Bottom Line</h2>
            <p>
              Each generation of incretin agonist produces more weight loss by targeting additional receptor pathways.
              Semaglutide transformed obesity treatment. Tirzepatide improved on it. Retatrutide may improve again.
              The key question for retatrutide is whether Phase 3 data confirms Phase 2 results — and whether the
              additional glucagon receptor activation introduces any long-term safety signals.
            </p>
          </section>
        </div>

        {/* Links to individual pages */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-px rounded-[var(--radius-md)] overflow-hidden">
          <Link href="/peptides/semaglutide" className="group bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-hover)] transition-colors p-6">
            <p className="text-caption mb-2">Full Profile</p>
            <p className="text-[17px] font-semibold tracking-tight">Semaglutide</p>
          </Link>
          <Link href="/peptides/tirzepatide" className="group bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-hover)] transition-colors p-6">
            <p className="text-caption mb-2">Full Profile</p>
            <p className="text-[17px] font-semibold tracking-tight">Tirzepatide</p>
          </Link>
          <Link href="/peptides/retatrutide" className="group bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-hover)] transition-colors p-6">
            <p className="text-caption mb-2">Full Profile</p>
            <p className="text-[17px] font-semibold tracking-tight">Retatrutide</p>
          </Link>
        </div>
      </article>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Semaglutide vs Tirzepatide vs Retatrutide — Complete Comparison',
            description: 'Head-to-head comparison of the three most important GLP-1 class weight loss drugs with clinical trial data.',
            url: 'https://peptides-guide.com/compare',
            isPartOf: { '@type': 'WebSite', name: 'Peptides Guide', url: 'https://peptides-guide.com' },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Which produces more weight loss: semaglutide, tirzepatide, or retatrutide?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Retatrutide produced the most weight loss in clinical trials (24.2% in Phase 2), followed by tirzepatide (20.9% in SURMOUNT-1) and semaglutide (14.9% in STEP 1). However, retatrutide is still investigational and only has Phase 2 data.',
                },
              },
              {
                '@type': 'Question',
                name: 'What is the difference between semaglutide, tirzepatide, and retatrutide?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'They target different numbers of receptors. Semaglutide targets GLP-1 only. Tirzepatide targets GIP and GLP-1. Retatrutide targets GIP, GLP-1, and glucagon. Each additional receptor adds metabolic benefits, which is why each successive drug shows more weight loss.',
                },
              },
              {
                '@type': 'Question',
                name: 'Is retatrutide available yet?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'No. Retatrutide is in Phase 3 clinical trials as of 2025. It is only available through clinical trial enrollment. If approved, it is expected to reach market in 2026-2027.',
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}
