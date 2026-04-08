'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Fuse from 'fuse.js';
import { getAllPeptides } from '@/data/peptides';
import { categories } from '@/data/categories';

const allPeptides = getAllPeptides();

const fuse = new Fuse(allPeptides, {
  keys: [
    { name: 'name', weight: 3 },
    { name: 'fullName', weight: 2 },
    { name: 'aliases', weight: 2 },
    { name: 'tldr', weight: 1 },
    { name: 'metaDescription', weight: 1 },
    { name: 'class', weight: 1 },
  ],
  threshold: 0.35,
  includeScore: true,
});

export default function SearchPage() {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    if (!query.trim()) return allPeptides;
    return fuse.search(query).map((r) => r.item);
  }, [query]);

  return (
    <div className="max-w-[var(--page-max)] mx-auto px-6 py-16">
      <header className="mb-12">
        <p className="text-caption mb-4">Search</p>
        <h1 className="text-headline mb-8">Find a peptide.</h1>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Try &quot;healing&quot;, &quot;BPC&quot;, &quot;GLP-1&quot;, &quot;sleep&quot;..."
          className="w-full max-w-lg px-5 py-3.5 text-[16px] rounded-[var(--radius-md)] bg-[var(--bg-surface)] border border-[var(--border-subtle)] focus:border-[var(--border-default)] focus:outline-none transition-colors placeholder:text-[var(--text-tertiary)]"
          autoFocus
        />
        {query && (
          <p className="text-[13px] text-[var(--text-tertiary)] mt-3">
            {results.length} result{results.length !== 1 ? 's' : ''}
          </p>
        )}
      </header>

      <div className="border-t border-[var(--border-subtle)]">
        {results.length === 0 ? (
          <p className="text-[var(--text-tertiary)] py-12">No peptides match your search.</p>
        ) : (
          results.map((p) => {
            const cat = categories.find((c) => c.slug === p.primaryCategory);
            return (
              <Link
                key={p.slug}
                href={`/peptides/${p.slug}`}
                className="flex items-center justify-between py-4 border-b border-[var(--border-subtle)] hover:bg-[var(--bg-surface)] -mx-4 px-4 transition-colors group"
              >
                <div className="min-w-0">
                  <span className="text-[15px] font-medium tracking-tight group-hover:text-[var(--text-secondary)] transition-colors">
                    {p.name}
                  </span>
                  <span className="text-[13px] text-[var(--text-tertiary)] ml-3 hidden sm:inline">
                    {p.fullName}
                  </span>
                </div>
                <div className="flex items-center gap-3 shrink-0 ml-4">
                  <span className="text-[10px] text-[var(--text-tertiary)] uppercase tracking-[0.08em] hidden md:block">
                    {cat?.name}
                  </span>
                  <span className="text-[10px] text-[var(--text-tertiary)] uppercase tracking-[0.08em]">
                    {p.status.replace('-', ' ')}
                  </span>
                </div>
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
}
