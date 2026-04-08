import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Ozempic vs Mounjaro — Which Is Better for Weight Loss?',
  description: 'Ozempic (semaglutide) vs Mounjaro (tirzepatide) compared: weight loss, mechanisms, side effects, cost, and which to ask your doctor about.',
  openGraph: {
    title: 'Ozempic vs Mounjaro — Complete Comparison',
    description: 'Semaglutide vs tirzepatide for weight loss. Clinical trial data, side effects, insurance, and which is right for you.',
  },
};

const rows = [
  { label: 'Generic name', a: 'Semaglutide', b: 'Tirzepatide' },
  { label: 'Manufacturer', a: 'Novo Nordisk', b: 'Eli Lilly' },
  { label: 'Weight loss brand', a: 'Wegovy', b: 'Zepbound' },
  { label: 'Diabetes brand', a: 'Ozempic', b: 'Mounjaro' },
  { label: 'Mechanism', a: 'GLP-1 receptor agonist', b: 'Dual GIP + GLP-1 receptor agonist' },
  { label: 'Mean weight loss', a: '~15% (STEP 1, 68 weeks)', b: '~21% (SURMOUNT-1, 72 weeks)' },
  { label: 'Head-to-head winner', a: '—', b: 'Tirzepatide (SURPASS-2)' },
  { label: 'Max dose', a: '2.4 mg/week (Wegovy)', b: '15 mg/week (Zepbound)' },
  { label: 'Injection frequency', a: 'Once weekly', b: 'Once weekly' },
  { label: 'Oral option', a: 'Yes (Rybelsus — diabetes only)', b: 'No (oral version in trials)' },
  { label: 'Nausea rate', a: '~44%', b: '~31%' },
  { label: 'HbA1c reduction', a: 'Up to 1.8%', b: 'Up to 2.4%' },
  { label: 'Cardiovascular data', a: 'SELECT: 20% MACE reduction', b: 'SURPASS-CVOT: ongoing' },
  { label: 'FDA approved for weight', a: 'Yes (Wegovy, 2021)', b: 'Yes (Zepbound, 2023)' },
  { label: 'FDA approved for diabetes', a: 'Yes (Ozempic, 2017)', b: 'Yes (Mounjaro, 2022)' },
  { label: 'Supply issues', a: 'Ongoing shortages', b: 'Intermittent shortages' },
];

export default function OzempicVsMounjaroPage() {
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
            Ozempic vs Mounjaro
          </h1>
          <p className="text-body max-w-xl">
            The two most prescribed weight loss drugs compared. Same weekly injection,
            different mechanisms. Mounjaro hits two receptors instead of one —
            and the data shows it.
          </p>
        </header>

        <div className="rounded-[var(--radius-md)] bg-[var(--bg-surface)] p-6 mb-16 max-w-2xl">
          <p className="text-caption mb-3">The Short Answer</p>
          <p style={{ fontSize: '18px', lineHeight: '1.45', letterSpacing: '-0.01em', fontWeight: 500 }}>
            Mounjaro (tirzepatide) produces more weight loss than Ozempic (semaglutide) — ~21% vs ~15% in trials —
            and causes less nausea. The only advantage Ozempic has is cardiovascular outcomes data (the SELECT trial)
            and an oral formulation (Rybelsus).
          </p>
        </div>

        <div className="mb-20 overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b border-[var(--border-subtle)]">
                <th className="text-caption text-left py-4 pr-6 w-[180px]">&nbsp;</th>
                <th className="text-left py-4 px-4">
                  <Link href="/peptides/semaglutide" className="text-[15px] font-semibold hover:text-[var(--text-secondary)] transition-colors">
                    Ozempic / Wegovy
                  </Link>
                </th>
                <th className="text-left py-4 px-4">
                  <Link href="/peptides/tirzepatide" className="text-[15px] font-semibold hover:text-[var(--text-secondary)] transition-colors">
                    Mounjaro / Zepbound
                  </Link>
                </th>
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
            <h2 className="text-subhead mb-4">Why Mounjaro Produces More Weight Loss</h2>
            <p>
              Ozempic activates one receptor (GLP-1). Mounjaro activates two (GIP + GLP-1).
              The GIP receptor adds insulin sensitivity benefits and appears to improve tolerability —
              Mounjaro causes less nausea than Ozempic despite producing more weight loss. The dual
              mechanism also seems to reduce appetite more effectively.
            </p>
            <p>
              In the only head-to-head trial (SURPASS-2), tirzepatide 15 mg produced significantly
              more weight loss than semaglutide 1 mg in type 2 diabetes patients. While the semaglutide
              dose in that trial wasn&apos;t the maximum weight-loss dose, the trend is consistent across all data.
            </p>
          </section>

          <section>
            <h2 className="text-subhead mb-4">Where Ozempic Still Wins</h2>
            <p>
              Cardiovascular outcomes. The SELECT trial showed Ozempic reduces major cardiovascular events
              by 20% in overweight/obese adults — the first GLP-1 drug to prove cardiovascular benefit
              independent of diabetes. Mounjaro&apos;s cardiovascular outcomes trial (SURPASS-CVOT) is still running.
            </p>
            <p>
              Ozempic also has an oral formulation (Rybelsus) for diabetes, making it the only GLP-1 agonist
              available as a pill. Mounjaro is injection-only for now.
            </p>
          </section>

          <section>
            <h2 className="text-subhead mb-4">Side Effects</h2>
            <p>
              Both cause gastrointestinal side effects (nausea, vomiting, diarrhea), primarily during dose
              escalation. Mounjaro has a somewhat better GI profile — about 31% nausea vs Ozempic&apos;s 44%.
              Both carry the same class warnings (thyroid tumors in animals, pancreatitis risk, gallbladder events).
            </p>
          </section>

          <section>
            <h2 className="text-subhead mb-4">Cost and Insurance</h2>
            <p>
              Both cost approximately $1,000-1,300/month without insurance. Coverage varies significantly by
              insurer and indication. Getting coverage for weight loss (Wegovy/Zepbound) is harder than for
              diabetes (Ozempic/Mounjaro). Supply shortages have been an ongoing issue for both drugs.
            </p>
          </section>

          <section>
            <h2 className="text-subhead mb-4">What About Retatrutide?</h2>
            <p>
              Eli Lilly&apos;s next drug, Retatrutide, adds a third receptor (glucagon) and showed 24% weight loss in
              Phase 2. It&apos;s not available yet — still in Phase 3 trials. If approved, it would likely surpass both
              Ozempic and Mounjaro.{' '}
              <Link href="/compare/semaglutide-vs-tirzepatide-vs-retatrutide" className="underline underline-offset-2 hover:text-[var(--text-primary)] transition-colors">
                See the full three-way comparison.
              </Link>
            </p>
          </section>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-px rounded-[var(--radius-md)] overflow-hidden">
          <Link href="/peptides/semaglutide" className="bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-hover)] transition-colors p-6">
            <p className="text-caption mb-2">Full Profile</p>
            <p className="text-[17px] font-semibold tracking-tight">Semaglutide (Ozempic/Wegovy)</p>
          </Link>
          <Link href="/peptides/tirzepatide" className="bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-hover)] transition-colors p-6">
            <p className="text-caption mb-2">Full Profile</p>
            <p className="text-[17px] font-semibold tracking-tight">Tirzepatide (Mounjaro/Zepbound)</p>
          </Link>
        </div>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'Is Mounjaro better than Ozempic for weight loss?', acceptedAnswer: { '@type': 'Answer', text: 'In clinical trials, Mounjaro (tirzepatide) produces approximately 21% body weight loss vs Ozempic (semaglutide) at approximately 15%. Mounjaro also causes less nausea. The only area where Ozempic leads is cardiovascular outcomes data from the SELECT trial.' }},
          { '@type': 'Question', name: 'What is the difference between Ozempic and Mounjaro?', acceptedAnswer: { '@type': 'Answer', text: 'Ozempic (semaglutide) activates one receptor (GLP-1). Mounjaro (tirzepatide) activates two receptors (GIP and GLP-1). The additional GIP receptor improves insulin sensitivity and tolerability. Both are weekly injections for diabetes and weight loss.' }},
          { '@type': 'Question', name: 'Which has fewer side effects: Ozempic or Mounjaro?', acceptedAnswer: { '@type': 'Answer', text: 'Mounjaro generally has a better side effect profile despite producing more weight loss. Nausea rates are approximately 31% for Mounjaro vs 44% for Ozempic. The GIP receptor component in Mounjaro appears to improve GI tolerability.' }},
          { '@type': 'Question', name: 'How much do Ozempic and Mounjaro cost?', acceptedAnswer: { '@type': 'Answer', text: 'Both cost approximately $1,000-1,300 per month without insurance. Coverage varies by insurer. Getting coverage for the weight-loss indications (Wegovy/Zepbound) is generally harder than for diabetes (Ozempic/Mounjaro). Supply shortages have affected availability of both.' }},
        ],
      }) }} />
    </>
  );
}
