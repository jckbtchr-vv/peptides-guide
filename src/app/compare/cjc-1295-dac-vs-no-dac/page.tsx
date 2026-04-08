import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'CJC-1295 with DAC vs without DAC — Which Version Is Better?',
  description: 'CJC-1295 DAC vs no-DAC compared: half-life, GH pulsatility, dosing frequency, and which version to choose for your protocol.',
};

const rows = [
  { label: 'Half-life', a: '~30 minutes', b: '6–8 days' },
  { label: 'Dosing frequency', a: '2–3x daily', b: 'Once weekly' },
  { label: 'GH release pattern', a: 'Pulsatile (mimics natural rhythm)', b: 'Continuous elevation (blunts pulsatility)' },
  { label: 'Best combined with', a: 'Ipamorelin or GHRP (synergistic pulses)', b: 'Can be used standalone' },
  { label: 'IGF-1 elevation', a: 'Moderate, intermittent', b: 'Sustained, higher baseline' },
  { label: 'Convenience', a: 'Low (multiple daily injections)', b: 'High (once weekly)' },
  { label: 'Physiological profile', a: 'Closer to natural GH secretion', b: 'Supraphysiological continuous elevation' },
  { label: 'Desensitization risk', a: 'Lower (natural pulsing preserved)', b: 'Higher (continuous stimulation)' },
  { label: 'Community preference', a: 'More popular for GH optimization', b: 'Less popular, simpler protocols' },
  { label: 'Research status', a: 'Research compound', b: 'Research compound' },
];

export default function CJC1295DACvsNoDACPage() {
  return (
    <>
      <article className="max-w-[var(--page-max)] mx-auto px-6 py-16">
        <header className="mb-16">
          <p className="text-caption mb-4">Comparison</p>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 48px)', lineHeight: '1.05', letterSpacing: '-0.035em', fontWeight: 700 }} className="mb-6">
            CJC-1295: DAC vs No-DAC
          </h1>
          <p className="text-body max-w-xl">
            Same peptide, two versions. The DAC modification extends the half-life from 30 minutes to a week —
            but that convenience comes with a trade-off in how your body releases growth hormone.
          </p>
        </header>

        <div className="rounded-[var(--radius-md)] bg-[var(--bg-surface)] p-6 mb-16 max-w-2xl">
          <p className="text-caption mb-3">The Short Answer</p>
          <p style={{ fontSize: '18px', lineHeight: '1.45', letterSpacing: '-0.01em', fontWeight: 500 }}>
            No-DAC preserves natural GH pulsatility and is preferred for most protocols (especially with Ipamorelin).
            DAC is simpler — one injection per week — but produces continuous GH elevation that some consider less physiological.
          </p>
        </div>

        <div className="mb-20 overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b border-[var(--border-subtle)]">
                <th className="text-caption text-left py-4 pr-6 w-[180px]">&nbsp;</th>
                <th className="text-left py-4 px-4"><Link href="/peptides/cjc-1295" className="text-[15px] font-semibold hover:text-[var(--text-secondary)] transition-colors">CJC-1295 (no DAC)</Link></th>
                <th className="text-left py-4 px-4"><Link href="/peptides/cjc-1295-dac" className="text-[15px] font-semibold hover:text-[var(--text-secondary)] transition-colors">CJC-1295 (with DAC)</Link></th>
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
            <h2 className="text-subhead mb-4">Why Pulsatility Matters</h2>
            <p>Your body naturally releases GH in pulses — mostly during deep sleep and after exercise. This pulsing is important because GH receptors downregulate under continuous stimulation. The no-DAC version preserves this natural rhythm by amplifying individual pulses rather than maintaining a constant GH level.</p>
          </section>
          <section>
            <h2 className="text-subhead mb-4">When DAC Makes Sense</h2>
            <p>If injection frequency is a barrier. One weekly injection is dramatically simpler than 2-3 daily. Some people prefer the sustained IGF-1 elevation for recovery. DAC is also sometimes used alone without a GHRP, since its sustained action doesn&apos;t depend on synergistic pulsing.</p>
          </section>
          <section>
            <h2 className="text-subhead mb-4">The Consensus</h2>
            <p>Most experienced protocols use CJC-1295 no-DAC combined with Ipamorelin, 2-3x daily. The pulsatile release pattern is considered more physiological, and the synergy with a GHRP (which initiates pulses) only works properly with the short-acting version. DAC is a valid simplification for those who prioritize convenience.</p>
          </section>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-px rounded-[var(--radius-md)] overflow-hidden">
          <Link href="/peptides/cjc-1295" className="bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-hover)] transition-colors p-6">
            <p className="text-caption mb-2">Full Profile</p>
            <p className="text-[17px] font-semibold tracking-tight">CJC-1295 (no DAC)</p>
          </Link>
          <Link href="/peptides/cjc-1295-dac" className="bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-hover)] transition-colors p-6">
            <p className="text-caption mb-2">Full Profile</p>
            <p className="text-[17px] font-semibold tracking-tight">CJC-1295 (with DAC)</p>
          </Link>
        </div>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'What is the difference between CJC-1295 with DAC and without DAC?', acceptedAnswer: { '@type': 'Answer', text: 'DAC (Drug Affinity Complex) extends the half-life from ~30 minutes to 6-8 days by binding to albumin. No-DAC requires 2-3 daily injections but preserves natural GH pulsatility. DAC requires only weekly injection but produces continuous GH elevation.' }},
          { '@type': 'Question', name: 'Which CJC-1295 version is better?', acceptedAnswer: { '@type': 'Answer', text: 'Most protocols prefer no-DAC because it preserves natural pulsatile GH release and synergizes better with GHRPs like Ipamorelin. DAC is simpler (weekly dosing) but produces less physiological continuous GH elevation.' }},
        ],
      }) }} />
    </>
  );
}
