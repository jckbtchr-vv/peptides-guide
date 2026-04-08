'use client';

import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';

const navLinks = [
  { href: '/peptides', label: 'Peptides' },
  { href: '/compare', label: 'Compare' },
  { href: '/quiz', label: 'Quiz' },
  { href: '/guides', label: 'Guides' },
  { href: '/about', label: 'About' },
  { href: '/search', label: 'Search' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[var(--bg-root)]/80 border-b border-[var(--border-subtle)]">
      <nav className="max-w-[var(--page-max)] mx-auto px-6 h-[48px] flex items-center justify-between">
        <Link href="/" className="font-semibold text-[15px] tracking-tight shrink-0">
          Peptides Guide
        </Link>
        <div className="flex items-center gap-0.5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-2.5 py-1.5 text-[12px] text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors rounded-md hover:bg-[var(--bg-surface)]"
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
