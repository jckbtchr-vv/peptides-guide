'use client';

import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[var(--bg-root)]/80 border-b border-[var(--border-subtle)]">
      <nav className="max-w-[var(--page-max)] mx-auto px-6 h-[48px] flex items-center justify-between">
        <Link href="/" className="font-semibold text-[15px] tracking-tight">
          Peptides Guide
        </Link>
        <div className="flex items-center gap-1">
          <Link
            href="/peptides"
            className="px-3 py-1.5 text-[12px] text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors rounded-md hover:bg-[var(--bg-surface)]"
          >
            All Peptides
          </Link>
          <Link
            href="/compare"
            className="px-3 py-1.5 text-[12px] text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors rounded-md hover:bg-[var(--bg-surface)]"
          >
            Compare
          </Link>
          <Link
            href="/guides"
            className="px-3 py-1.5 text-[12px] text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors rounded-md hover:bg-[var(--bg-surface)]"
          >
            Guides
          </Link>
          <Link
            href="/about"
            className="px-3 py-1.5 text-[12px] text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors rounded-md hover:bg-[var(--bg-surface)]"
          >
            About
          </Link>
          <Link
            href="/search"
            className="px-3 py-1.5 text-[12px] text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors rounded-md hover:bg-[var(--bg-surface)]"
          >
            Search
          </Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
