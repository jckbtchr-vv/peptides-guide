import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Peptide Comparisons',
  description: 'Head-to-head peptide comparisons: Semaglutide vs Tirzepatide vs Retatrutide, BPC-157 vs TB-500, Ipamorelin vs GHRP-6, Semax vs Selank.',
};

const comparisons = [
  {
    href: '/compare/semaglutide-vs-tirzepatide-vs-retatrutide',
    title: 'Semaglutide vs Tirzepatide vs Retatrutide',
    description: 'Single, dual, and triple receptor GLP-1 agonists compared. Weight loss data, mechanisms, and availability.',
    category: 'Metabolic',
  },
  {
    href: '/compare/bpc-157-vs-tb-500',
    title: 'BPC-157 vs TB-500',
    description: 'The two most popular healing peptides. Angiogenesis vs cell migration — and why most people use both.',
    category: 'Healing',
  },
  {
    href: '/compare/ipamorelin-vs-ghrp-6',
    title: 'Ipamorelin vs GHRP-6',
    description: 'Selectivity vs raw power. Which GH secretagogue is right for your goals.',
    category: 'Body Composition',
  },
  {
    href: '/compare/semax-vs-selank',
    title: 'Semax vs Selank',
    description: 'Focus vs calm. BDNF upregulation vs GABA modulation — the Russian nootropic stack.',
    category: 'Cognitive',
  },
];

export default function CompareIndexPage() {
  return (
    <article className="max-w-[var(--page-max)] mx-auto px-6 py-16">
      <header className="mb-16">
        <p className="text-caption mb-4">{comparisons.length} Comparisons</p>
        <h1 className="text-headline mb-6">Head-to-head.</h1>
        <p className="text-body max-w-xl">
          Side-by-side comparisons of the most commonly compared peptides.
          Data tables, mechanisms, and which to choose.
        </p>
      </header>

      <div className="border-t border-[var(--border-subtle)]">
        {comparisons.map((comp) => (
          <Link
            key={comp.href}
            href={comp.href}
            className="flex items-start justify-between py-8 border-b border-[var(--border-subtle)] group"
          >
            <div className="min-w-0 pr-8">
              <span className="text-caption mb-2 block">{comp.category}</span>
              <h2 className="text-[18px] font-semibold tracking-tight mb-1.5 group-hover:text-[var(--text-secondary)] transition-colors">
                {comp.title}
              </h2>
              <p className="text-[14px] text-[var(--text-secondary)] leading-relaxed">
                {comp.description}
              </p>
            </div>
            <span className="text-[var(--text-tertiary)] shrink-0 mt-8 group-hover:translate-x-1 transition-transform">
              &rarr;
            </span>
          </Link>
        ))}
      </div>
    </article>
  );
}
