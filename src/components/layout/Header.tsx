'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { categories } from '@/data/categories';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[var(--bg-root)]/80 border-b border-[var(--border-subtle)]">
      <nav className="max-w-[var(--page-max)] mx-auto px-6 h-[52px] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 font-semibold text-[15px] tracking-tight shrink-0">
          <span className="font-mono text-[11px] font-medium tracking-wider uppercase text-[var(--text-tertiary)]">PG</span>
          <span>Peptides Guide</span>
        </Link>

        {/* Desktop nav — condensed */}
        <div className="hidden lg:flex items-center gap-0.5">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/${cat.slug}`}
              className="px-2.5 py-1.5 text-[12px] text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors rounded-md hover:bg-[var(--bg-surface)]"
            >
              {cat.name}
            </Link>
          ))}
          <div className="w-px h-3.5 bg-[var(--border-subtle)] mx-1.5" />
          <Link
            href="/guides"
            className="px-2.5 py-1.5 text-[12px] text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors rounded-md hover:bg-[var(--bg-surface)]"
          >
            Guides
          </Link>
          <ThemeToggle />
        </div>

        {/* Mobile / tablet */}
        <div className="flex lg:hidden items-center gap-1.5">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-9 h-9 flex items-center justify-center rounded-md hover:bg-[var(--bg-surface)] transition-colors"
            aria-label="Toggle menu"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              {menuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" y1="8" x2="20" y2="8" />
                  <line x1="4" y1="16" x2="20" y2="16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="lg:hidden border-t border-[var(--border-subtle)] bg-[var(--bg-root)] px-6 py-3">
          <div className="flex flex-col">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/${cat.slug}`}
                onClick={() => setMenuOpen(false)}
                className="px-3 py-2.5 text-[15px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors rounded-md hover:bg-[var(--bg-surface)]"
              >
                {cat.name}
              </Link>
            ))}
            <div className="h-px bg-[var(--border-subtle)] my-1.5" />
            <Link href="/guides" onClick={() => setMenuOpen(false)} className="px-3 py-2.5 text-[15px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors rounded-md hover:bg-[var(--bg-surface)]">
              Guides
            </Link>
            <Link href="/about" onClick={() => setMenuOpen(false)} className="px-3 py-2.5 text-[15px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors rounded-md hover:bg-[var(--bg-surface)]">
              About
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
