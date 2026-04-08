'use client';

import { useState } from 'react';
import Link from 'next/link';

type Step = {
  question: string;
  options: { label: string; next?: string; results?: { slug: string; name: string; reason: string }[] }[];
};

const steps: Record<string, Step> = {
  start: {
    question: 'What are you trying to do?',
    options: [
      { label: 'Heal an injury', next: 'injury-type' },
      { label: 'Lose body fat', next: 'fat-loss' },
      { label: 'Build muscle / optimize GH', next: 'gh-goal' },
      { label: 'Improve cognitive function', next: 'cognitive' },
      { label: 'Anti-aging / longevity', next: 'longevity' },
      { label: 'Fix gut issues', next: 'gut' },
      { label: 'Improve skin or hair', next: 'skin-hair' },
    ],
  },
  'injury-type': {
    question: 'What kind of injury?',
    options: [
      {
        label: 'Tendon, ligament, or joint',
        results: [
          { slug: 'bpc-157', name: 'BPC-157', reason: 'Most researched for tendon/ligament healing via angiogenesis' },
          { slug: 'tb-500', name: 'TB-500', reason: 'Promotes cell migration to injury site — often stacked with BPC-157' },
        ],
      },
      {
        label: 'Muscle injury',
        results: [
          { slug: 'bpc-157', name: 'BPC-157', reason: 'Demonstrated muscle healing in animal models' },
          { slug: 'tb-500', name: 'TB-500', reason: 'Actin regulation supports muscle tissue repair' },
        ],
      },
      {
        label: 'Gut / digestive',
        next: 'gut',
      },
      {
        label: 'General recovery / systemic',
        results: [
          { slug: 'tb-500', name: 'TB-500', reason: 'Best for systemic, full-body recovery' },
          { slug: 'bpc-157', name: 'BPC-157', reason: 'Complementary — angiogenesis at injury sites' },
          { slug: 'ghk-cu', name: 'GHK-Cu', reason: 'Broad tissue remodeling and gene expression resetting' },
        ],
      },
    ],
  },
  'fat-loss': {
    question: 'What matters most to you?',
    options: [
      {
        label: 'Maximum weight loss (prescription)',
        results: [
          { slug: 'tirzepatide', name: 'Tirzepatide', reason: 'FDA-approved, 21% weight loss in trials. Dual GIP/GLP-1' },
          { slug: 'semaglutide', name: 'Semaglutide', reason: 'FDA-approved, 15% weight loss. Most prescribed option' },
          { slug: 'retatrutide', name: 'Retatrutide', reason: '24% weight loss in Phase 2 — not yet available (Phase 3 trials)' },
        ],
      },
      {
        label: 'No injection (oral)',
        results: [
          { slug: 'mk-677', name: 'MK-677', reason: 'Oral GH secretagogue. Improves body composition over months' },
          { slug: '5-amino-1mq', name: '5-Amino-1MQ', reason: 'Oral NNMT inhibitor — shifts fat cells toward energy burning' },
          { slug: 'orforglipron', name: 'Orforglipron', reason: 'Oral GLP-1 agonist — in Phase 3 trials, not yet available' },
        ],
      },
      {
        label: 'Targeted fat loss (research compounds)',
        results: [
          { slug: 'aod-9604', name: 'AOD-9604', reason: 'GH fragment targeting fat metabolism without IGF-1 effects' },
          { slug: '5-amino-1mq', name: '5-Amino-1MQ', reason: 'NNMT inhibitor — increases fat cell energy expenditure' },
        ],
      },
    ],
  },
  'gh-goal': {
    question: 'What\'s your priority?',
    options: [
      {
        label: 'Clean GH elevation, minimal side effects',
        results: [
          { slug: 'cjc-1295-ipamorelin', name: 'CJC-1295 + Ipamorelin', reason: 'The gold standard GH stack. Synergistic, clean profile' },
          { slug: 'ipamorelin', name: 'Ipamorelin', reason: 'Most selective — GH only, no cortisol/prolactin/hunger' },
        ],
      },
      {
        label: 'Maximum GH output',
        results: [
          { slug: 'hexarelin', name: 'Hexarelin', reason: 'Strongest acute GH release. Requires cycling' },
          { slug: 'ghrp-2', name: 'GHRP-2', reason: 'Most potent sustained GHRP. More GH than GHRP-6 with less hunger' },
        ],
      },
      {
        label: 'Convenience (oral, once daily)',
        results: [
          { slug: 'mk-677', name: 'MK-677', reason: 'Oral, once daily, 24-hour half-life. Also improves deep sleep' },
        ],
      },
      {
        label: 'FDA-approved option',
        results: [
          { slug: 'tesamorelin', name: 'Tesamorelin', reason: 'Only FDA-approved GH secretagogue (Egrifta). GHRH analog' },
        ],
      },
    ],
  },
  cognitive: {
    question: 'What do you need?',
    options: [
      {
        label: 'Sharper focus and memory',
        results: [
          { slug: 'semax', name: 'Semax', reason: 'Upregulates BDNF within 30 minutes. Intranasal, approved in Russia' },
          { slug: 'dihexa', name: 'Dihexa', reason: 'Extremely potent synaptogenesis promoter — but very experimental' },
        ],
      },
      {
        label: 'Reduce anxiety without sedation',
        results: [
          { slug: 'selank', name: 'Selank', reason: 'GABA/serotonin modulation without drowsiness. Approved in Russia' },
        ],
      },
      {
        label: 'Both — focus + calm',
        results: [
          { slug: 'semax', name: 'Semax', reason: 'Cognitive drive — BDNF, dopamine, focus' },
          { slug: 'selank', name: 'Selank', reason: 'Calm clarity — anxiety reduction without cognitive impairment' },
        ],
      },
      {
        label: 'Better sleep',
        results: [
          { slug: 'dsip', name: 'DSIP', reason: 'Promotes delta wave sleep without sedation. Normalizes sleep architecture' },
          { slug: 'mk-677', name: 'MK-677', reason: '50% increase in deep sleep. Oral, once daily before bed' },
        ],
      },
    ],
  },
  longevity: {
    question: 'Which aging mechanism interests you?',
    options: [
      {
        label: 'Telomere maintenance',
        results: [
          { slug: 'epitalon', name: 'Epitalon', reason: 'Telomerase activation + pineal/melatonin restoration. Khavinson research' },
        ],
      },
      {
        label: 'Mitochondrial function',
        results: [
          { slug: 'ss-31', name: 'SS-31', reason: 'Stabilizes cardiolipin in inner mitochondrial membrane. In clinical trials' },
          { slug: 'humanin', name: 'Humanin', reason: 'Mitochondrial-derived cytoprotective peptide. Declines with age' },
          { slug: 'mots-c', name: 'MOTS-c', reason: 'Mitochondrial exercise mimetic. AMPK activation' },
        ],
      },
      {
        label: 'Clear senescent cells',
        results: [
          { slug: 'foxo4-dri', name: 'FOXO4-DRI', reason: 'Senolytic — triggers apoptosis in zombie cells. Very experimental' },
        ],
      },
      {
        label: 'Gene expression / broad anti-aging',
        results: [
          { slug: 'ghk-cu', name: 'GHK-Cu', reason: 'Modulates 4,000+ genes toward younger expression patterns' },
          { slug: 'epitalon', name: 'Epitalon', reason: 'Telomerase + melatonin restoration' },
        ],
      },
    ],
  },
  gut: {
    question: 'What gut issue?',
    options: [
      {
        label: 'General gut inflammation / IBS',
        results: [
          { slug: 'bpc-157', name: 'BPC-157', reason: 'Gastric-juice stable, can be taken orally. Extensive gut healing research' },
          { slug: 'kpv', name: 'KPV', reason: 'NF-kB inhibitor absorbed via gut PepT1 transporter. Anti-inflammatory' },
        ],
      },
      {
        label: 'Celiac / gluten sensitivity',
        results: [
          { slug: 'larazotide', name: 'Larazotide', reason: 'Zonulin antagonist — blocks tight junction opening from gluten. Phase 3 trials' },
          { slug: 'bpc-157', name: 'BPC-157', reason: 'Gut barrier support and healing' },
        ],
      },
      {
        label: 'Immune support',
        results: [
          { slug: 'thymosin-alpha-1', name: 'Thymosin Alpha-1', reason: 'Approved in 35+ countries for immune modulation. T-cell activation' },
          { slug: 'll-37', name: 'LL-37', reason: 'Antimicrobial peptide — biofilm disruption, innate immune support' },
        ],
      },
    ],
  },
  'skin-hair': {
    question: 'What are you targeting?',
    options: [
      {
        label: 'Wrinkles / anti-aging skin',
        results: [
          { slug: 'ghk-cu', name: 'GHK-Cu', reason: 'Collagen synthesis, gene expression resetting. Topical or injectable' },
          { slug: 'matrixyl', name: 'Matrixyl', reason: 'Clinical trial data showing 68% wrinkle reduction. Topical' },
          { slug: 'argireline', name: 'Argireline', reason: 'Softens expression lines via SNARE complex. Topical "Botox alternative"' },
        ],
      },
      {
        label: 'Hair growth',
        results: [
          { slug: 'ahk-cu', name: 'AHK-Cu', reason: 'Copper peptide optimized for hair follicle stimulation' },
          { slug: 'ghk-cu', name: 'GHK-Cu', reason: 'Broader copper peptide — also supports hair follicle growth' },
        ],
      },
      {
        label: 'Tanning',
        results: [
          { slug: 'melanotan-ii', name: 'Melanotan II', reason: 'Activates tanning without UV. Real safety concerns — read the full profile' },
        ],
      },
    ],
  },
};

export default function QuizPage() {
  const [currentStep, setCurrentStep] = useState('start');
  const [results, setResults] = useState<{ slug: string; name: string; reason: string }[] | null>(null);

  function handleOption(option: (typeof steps)[string]['options'][number]) {
    if (option.results) {
      setResults(option.results);
    } else if (option.next) {
      setCurrentStep(option.next);
    }
  }

  function reset() {
    setCurrentStep('start');
    setResults(null);
  }

  const step = steps[currentStep];

  return (
    <div className="max-w-[var(--page-max)] mx-auto px-6 py-16">
      <header className="mb-16">
        <p className="text-caption mb-4">Peptide Finder</p>
        <h1 className="text-headline mb-6">What should I use?</h1>
        <p className="text-body max-w-xl">
          Answer a couple questions and we&apos;ll point you to the right peptide profiles. Not medical advice — just a starting point for research.
        </p>
      </header>

      {!results ? (
        <div className="max-w-lg">
          <h2
            className="mb-8"
            style={{
              fontSize: 'clamp(20px, 3vw, 28px)',
              lineHeight: '1.2',
              letterSpacing: '-0.02em',
              fontWeight: 600,
            }}
          >
            {step.question}
          </h2>
          <div className="space-y-2">
            {step.options.map((option, i) => (
              <button
                key={i}
                onClick={() => handleOption(option)}
                className="w-full text-left px-5 py-4 rounded-[var(--radius-md)] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-hover)] transition-colors text-[15px]"
              >
                {option.label}
              </button>
            ))}
          </div>
          {currentStep !== 'start' && (
            <button
              onClick={reset}
              className="mt-6 text-[13px] text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors"
            >
              &larr; Start over
            </button>
          )}
        </div>
      ) : (
        <div className="max-w-lg">
          <h2
            className="mb-8"
            style={{
              fontSize: 'clamp(20px, 3vw, 28px)',
              lineHeight: '1.2',
              letterSpacing: '-0.02em',
              fontWeight: 600,
            }}
          >
            Start here.
          </h2>
          <div className="space-y-px rounded-[var(--radius-md)] overflow-hidden mb-8">
            {results.map((r) => (
              <Link
                key={r.slug}
                href={`/peptides/${r.slug}`}
                className="block bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-hover)] transition-colors p-5 group"
              >
                <h3 className="text-[16px] font-semibold tracking-tight mb-1">{r.name}</h3>
                <p className="text-[13px] text-[var(--text-secondary)] leading-relaxed">{r.reason}</p>
              </Link>
            ))}
          </div>
          <button
            onClick={reset}
            className="text-[13px] text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors"
          >
            &larr; Start over
          </button>
        </div>
      )}
    </div>
  );
}
