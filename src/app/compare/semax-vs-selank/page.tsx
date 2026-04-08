import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Semax vs Selank — Focus vs Calm',
  description: 'Semax vs Selank comparison: BDNF vs GABA, cognitive enhancement vs anxiolytic, and why the Russian nootropic stack uses both together.',
};

const rows = [
  { label: 'Class', a: 'Synthetic ACTH(4-10) analog', b: 'Synthetic tuftsin analog' },
  { label: 'Primary effect', a: 'Cognitive enhancement, neuroprotection', b: 'Anxiolytic, stress reduction' },
  { label: 'Key pathway', a: 'BDNF upregulation', b: 'GABA / serotonin modulation' },
  { label: 'Onset', a: '15–30 minutes', b: '10–15 minutes' },
  { label: 'Duration', a: 'BDNF elevated up to 24 hours', b: '3–4 hours subjective effect' },
  { label: 'Stimulating?', a: 'Yes — avoid evening use', b: 'No — calming without sedation' },
  { label: 'Administration', a: 'Intranasal', b: 'Intranasal' },
  { label: 'Typical dose', a: '200–600 mcg 2–3x daily', b: '200–400 mcg 2–3x daily' },
  { label: 'Approved where', a: 'Russia, Ukraine', b: 'Russia' },
  { label: 'FDA status', a: 'Not approved', b: 'Not approved' },
  { label: 'Cognitive effect', a: 'Focus, memory, mental stamina', b: 'Reduced anxiety, emotional stability' },
  { label: 'Best for', a: 'Productivity, learning, recovery', b: 'Anxiety, stress, social situations' },
];

export default function SemaxVsSelank() {
  return (
    <>
      <article className="max-w-[var(--page-max)] mx-auto px-6 py-16">
        <header className="mb-16">
          <p className="text-caption mb-4">Comparison</p>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 48px)', lineHeight: '1.05', letterSpacing: '-0.035em', fontWeight: 700 }} className="mb-6">
            Semax vs Selank
          </h1>
          <p className="text-body max-w-xl">
            Focus vs calm. Both are Russian-developed intranasal peptides, both are prescription
            nootropics, and they&apos;re designed to be used together.
          </p>
        </header>

        <div className="rounded-[var(--radius-md)] bg-[var(--bg-surface)] p-6 mb-16 max-w-2xl">
          <p className="text-caption mb-3">The Short Answer</p>
          <p style={{ fontSize: '18px', lineHeight: '1.45', letterSpacing: '-0.01em', fontWeight: 500 }}>
            Semax sharpens cognition by upregulating BDNF. Selank reduces anxiety by modulating GABA.
            Together they produce focused calm — enhanced cognitive performance without the jitters.
          </p>
        </div>

        <div className="mb-20 overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b border-[var(--border-subtle)]">
                <th className="text-caption text-left py-4 pr-6 w-[160px]">&nbsp;</th>
                <th className="text-left py-4 px-4"><Link href="/peptides/semax" className="text-[15px] font-semibold hover:text-[var(--text-secondary)] transition-colors">Semax</Link></th>
                <th className="text-left py-4 px-4"><Link href="/peptides/selank" className="text-[15px] font-semibold hover:text-[var(--text-secondary)] transition-colors">Selank</Link></th>
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
            <h2 className="text-subhead mb-4">Choose Semax When</h2>
            <p>You need cognitive enhancement — sharper focus, better memory, faster learning. Before deep work sessions, studying, or creative work. Semax is stimulating, so use it morning and afternoon. Avoid evening dosing or it may interfere with sleep.</p>
          </section>
          <section>
            <h2 className="text-subhead mb-4">Choose Selank When</h2>
            <p>You&apos;re dealing with anxiety, stress, or need emotional regulation without sedation. Selank calms without making you drowsy — it&apos;s not a benzodiazepine. Good for social anxiety, high-pressure situations, or as a daily anxiolytic. Can be used any time of day.</p>
          </section>
          <section>
            <h2 className="text-subhead mb-4">Use Both Together</h2>
            <p>This is the classic Russian nootropic stack. Semax in the morning and afternoon for cognition, Selank throughout the day for anxiety management. The combination produces a state of alert, focused calm that users describe as &quot;productive without stress.&quot; Both are intranasal and can be administered back-to-back.</p>
          </section>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-px rounded-[var(--radius-md)] overflow-hidden">
          <Link href="/peptides/semax" className="bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-hover)] transition-colors p-6">
            <p className="text-caption mb-2">Full Profile</p>
            <p className="text-[17px] font-semibold tracking-tight">Semax</p>
          </Link>
          <Link href="/peptides/selank" className="bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-hover)] transition-colors p-6">
            <p className="text-caption mb-2">Full Profile</p>
            <p className="text-[17px] font-semibold tracking-tight">Selank</p>
          </Link>
        </div>
      </article>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'What is the difference between Semax and Selank?', acceptedAnswer: { '@type': 'Answer', text: 'Semax is primarily a cognitive enhancer that upregulates BDNF for improved focus, memory, and mental stamina. Selank is primarily an anxiolytic that modulates GABA and serotonin to reduce anxiety without sedation. They target complementary pathways and are often used together.' }},
          { '@type': 'Question', name: 'Can you use Semax and Selank together?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, this is the classic Russian nootropic combination. Semax provides cognitive enhancement while Selank provides anxiety reduction. Together they produce focused calm — enhanced mental performance without stress or jitters.' }},
        ],
      }) }} />
    </>
  );
}
