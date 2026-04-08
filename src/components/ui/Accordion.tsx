'use client';

import { useState } from 'react';

interface AccordionItem {
  question: string;
  answer: string;
}

export function Accordion({ items }: { items: AccordionItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-[var(--border-subtle)]">
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between py-5 text-left group"
            aria-expanded={openIndex === i}
          >
            <span className="text-[16px] font-medium text-[var(--text-primary)] pr-8 group-hover:text-[var(--accent)] transition-colors">
              {item.question}
            </span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className={`text-[var(--text-tertiary)] shrink-0 transition-transform duration-200 ${openIndex === i ? 'rotate-180' : ''}`}
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          {openIndex === i && (
            <div className="pb-5">
              <p className="text-[15px] leading-relaxed text-[var(--text-secondary)]">
                {item.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
