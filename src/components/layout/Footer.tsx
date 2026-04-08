import Link from 'next/link';
import { categories } from '@/data/categories';

export function Footer() {
  return (
    <footer className="border-t border-[var(--border-subtle)]">
      <div className="max-w-[var(--page-max)] mx-auto px-6 py-16">
        {/* Links grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-10 gap-x-6 mb-16">
          <div>
            <h3 className="text-caption mb-4">Categories</h3>
            <ul className="space-y-2.5">
              {categories.slice(0, 4).map((cat) => (
                <li key={cat.slug}>
                  <Link href={`/${cat.slug}`} className="text-[13px] text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors">
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-caption mb-4">&nbsp;</h3>
            <ul className="space-y-2.5">
              {categories.slice(4).map((cat) => (
                <li key={cat.slug}>
                  <Link href={`/${cat.slug}`} className="text-[13px] text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors">
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-caption mb-4">Guides</h3>
            <ul className="space-y-2.5">
              <li><Link href="/guides" className="text-[13px] text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors">All Guides</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-caption mb-4">More</h3>
            <ul className="space-y-2.5">
              <li><Link href="/about" className="text-[13px] text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors">About</Link></li>
              <li><Link href="/search" className="text-[13px] text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors">Search</Link></li>
            </ul>
          </div>
        </div>

        {/* Disclaimer + bottom bar */}
        <div className="border-t border-[var(--border-subtle)] pt-8">
          <p className="text-[11px] leading-relaxed text-[var(--text-tertiary)] max-w-[580px] mb-8">
            This content is for educational and informational purposes only. It is not medical advice.
            Many peptides discussed are not FDA-approved for human use. Always consult a qualified
            healthcare professional before using any peptide or supplement.
          </p>
          <div className="flex items-center justify-between">
            <span className="text-[12px] text-[var(--text-tertiary)]">Peptides Guide</span>
            <span className="text-[11px] text-[var(--text-tertiary)]">No selling. No hype. Just science.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
