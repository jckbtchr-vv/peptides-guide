'use client';

import { useState } from 'react';

export function Eli5Toggle({ tldr, eli5 }: { tldr: string; eli5: string }) {
  const [mode, setMode] = useState<'tldr' | 'eli5'>('tldr');

  return (
    <div className="py-10 border-b border-[var(--border-subtle)]">
      <div className="flex items-center gap-3 mb-4">
        <button
          onClick={() => setMode('tldr')}
          className={`text-[11px] uppercase tracking-[0.08em] px-3 py-1.5 rounded-md transition-colors ${
            mode === 'tldr'
              ? 'bg-[var(--text-primary)] text-[var(--bg-root)] font-medium'
              : 'text-[var(--text-tertiary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)]'
          }`}
        >
          TLDR
        </button>
        <button
          onClick={() => setMode('eli5')}
          className={`text-[11px] uppercase tracking-[0.08em] px-3 py-1.5 rounded-md transition-colors ${
            mode === 'eli5'
              ? 'bg-[var(--text-primary)] text-[var(--bg-root)] font-medium'
              : 'text-[var(--text-tertiary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)]'
          }`}
        >
          ELI5
        </button>
      </div>
      <p
        className="max-w-2xl"
        style={{
          fontSize: mode === 'eli5' ? 'clamp(17px, 2.2vw, 20px)' : 'clamp(18px, 2.5vw, 22px)',
          lineHeight: '1.45',
          letterSpacing: '-0.015em',
          fontWeight: mode === 'eli5' ? 400 : 500,
          color: 'var(--text-primary)',
        }}
      >
        {mode === 'tldr' ? tldr : eli5}
      </p>
    </div>
  );
}
