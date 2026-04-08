import Link from 'next/link';
import { Peptide } from '@/data/types';
import { categories } from '@/data/categories';

export function PeptideCard({ peptide }: { peptide: Peptide }) {
  const primaryCat = categories.find((c) => c.slug === peptide.primaryCategory);

  return (
    <Link
      href={`/peptides/${peptide.slug}`}
      className="group block p-6 rounded-[var(--radius-md)] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-hover)] transition-colors"
    >
      <div className="flex items-center gap-2 mb-3">
        <span className="inline-flex px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.08em] rounded-md border border-[var(--border-subtle)] text-[var(--text-tertiary)]">
          {peptide.status.replace('-', ' ')}
        </span>
        {primaryCat && (
          <span className="text-[10px] text-[var(--text-tertiary)] uppercase tracking-[0.08em]">
            {primaryCat.name}
          </span>
        )}
      </div>
      <h3 className="text-[17px] font-semibold tracking-tight mb-1">
        {peptide.name}
      </h3>
      <p className="text-[13px] text-[var(--text-tertiary)] mb-3">{peptide.fullName}</p>
      <p className="text-[14px] leading-relaxed text-[var(--text-secondary)] line-clamp-2">
        {peptide.metaDescription}
      </p>
    </Link>
  );
}
