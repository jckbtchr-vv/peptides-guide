'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { getAllPeptides } from '@/data/peptides';
import { categories } from '@/data/categories';

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const allPeptides = getAllPeptides();

  const results = useMemo(() => {
    if (!query.trim()) return allPeptides;
    const q = query.toLowerCase();
    return allPeptides.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.fullName.toLowerCase().includes(q) ||
        (p.aliases && p.aliases.some((a) => a.toLowerCase().includes(q))) ||
        p.metaDescription.toLowerCase().includes(q) ||
        p.categories.some((c) => c.toLowerCase().includes(q))
    );
  }, [query, allPeptides]);

  return (
    <div className="max-w-[var(--page-max)] mx-auto px-6 py-16">
      <header className="mb-12">
        <p className="text-caption mb-4">Search</p>
        <h1 className="text-headline mb-8">Find a peptide.</h1>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by name, alias, or keyword..."
          className="w-full max-w-lg px-5 py-3.5 text-[16px] rounded-[var(--radius-md)] bg-[var(--bg-surface)] border border-[var(--border-subtle)] focus:border-[var(--border-default)] focus:outline-none transition-colors placeholder:text-[var(--text-tertiary)]"
          autoFocus
        />
      </header>

      <div className="space-y-1">
        {results.length === 0 ? (
          <p className="text-[var(--text-tertiary)] py-12">No peptides match your search.</p>
        ) : (
          results.map((p) => {
            const cat = categories.find((c) => c.slug === p.primaryCategory);
            return (
              <Link
                key={p.slug}
                href={`/peptides/${p.slug}`}
                className="flex items-center justify-between py-4 px-4 -mx-4 rounded-[var(--radius-sm)] hover:bg-[var(--bg-surface)] transition-colors group"
              >
                <div>
                  <span className="text-[16px] font-semibold tracking-tight group-hover:text-[var(--accent)] transition-colors">
                    {p.name}
                  </span>
                  <span className="text-[14px] text-[var(--text-tertiary)] ml-3">{p.fullName}</span>
                </div>
                <span className="text-[11px] text-[var(--text-tertiary)] uppercase tracking-wider hidden sm:block">
                  {cat?.name}
                </span>
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
}
