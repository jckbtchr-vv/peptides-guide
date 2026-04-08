import { Peptide } from '../types';

export const mk677: Peptide = {
  slug: 'mk-677',
  name: 'MK-677',
  fullName: 'MK-677 (Ibutamoren Mesylate)',
  aliases: ['Ibutamoren', 'Nutrobal', 'L-163,191'],
  molecularWeight: '528.67 g/mol',
  class: 'Non-peptide growth hormone secretagogue (oral ghrelin mimetic)',
  halfLife: '~24 hours (single daily dose effective)',
  administrationRoute: 'Oral',

  categories: ['body-composition'],
  primaryCategory: 'body-composition',
  status: 'clinical-trials',
  regulatoryNote: 'Not FDA-approved. Has undergone Phase II clinical trials for GH deficiency, sarcopenia, and hip fracture recovery. Not technically a peptide — it is a non-peptide ghrelin receptor agonist commonly grouped with peptide secretagogues.',

  overview:
    'MK-677 (Ibutamoren) is a non-peptide, orally active growth hormone secretagogue that mimics ghrelin at the GHS-R1a receptor. Unlike injectable GH secretagogues, MK-677 is taken orally once daily and has a long half-life of approximately 24 hours.\n\nMK-677 is technically not a peptide — it is a small molecule — but is universally discussed alongside peptide GH secretagogues due to its identical mechanism of action (ghrelin receptor agonism). It has been through multiple Phase II clinical trials and is one of the most extensively human-studied GH secretagogues.\n\nKey advantages include oral bioavailability, convenient once-daily dosing, and sustained IGF-1 elevation. Key drawbacks include significant appetite stimulation, potential insulin resistance with long-term use, and water retention.',

  mechanismOfAction:
    'MK-677 binds to the growth hormone secretagogue receptor (GHS-R1a) with high affinity, mimicking endogenous ghrelin. Despite being a non-peptide molecule, it activates the same receptor signaling cascade as GHRP-6 and other peptide secretagogues.\n\nIts long half-life (~24 hours) means a single oral dose produces sustained GH pulsatility throughout the day and elevated IGF-1 levels. Clinical trials show IGF-1 elevation of 40-60% above baseline with chronic dosing.\n\nMK-677 also activates hypothalamic appetite circuits through ghrelin receptor signaling, causing notable hunger increases in most users. Like other ghrelin mimetics, it can modestly affect cortisol and prolactin, though effects are generally mild at standard doses.',

  researchSummary:
    'MK-677 has been studied in multiple randomized, placebo-controlled human trials. A two-year study in healthy older adults showed sustained IGF-1 elevation to youthful levels and improved body composition (increased lean mass, decreased fat mass).\n\nA study in GH-deficient adults demonstrated that MK-677 25 mg daily produced GH and IGF-1 levels comparable to exogenous GH replacement, with sustained effects over months.\n\nSleep quality research shows MK-677 increases Stage IV (deep) sleep duration by approximately 50% and REM sleep by 20%, consistent with the known effects of GH pulses on sleep architecture.\n\nSarcopenia trials in elderly populations showed improved lean mass and functional measures. However, a hip fracture recovery trial did not meet its primary endpoint, limiting the clinical development pathway.\n\nCritically, long-term studies (>6 months) show MK-677 can increase fasting blood glucose and reduce insulin sensitivity, requiring monitoring in predisposed individuals.',

  citations: [
    {
      title: 'Two-year effects of oral MK-677 on GH, IGF-I, and body composition in healthy older adults',
      authors: 'Nass R, et al.',
      journal: 'Journal of Clinical Endocrinology & Metabolism',
      year: 2008,
      doi: '10.1210/jc.2007-2126',
      summary: 'Two-year study showing sustained IGF-1 elevation and improved body composition in healthy older adults, with increased fasting glucose as a notable adverse effect.',
    },
    {
      title: 'MK-677 stimulates the GH/IGF-1 axis and improves body composition and sleep quality',
      authors: 'Copinschi G, et al.',
      journal: 'Neuroendocrinology',
      year: 1997,
      doi: '10.1159/000127163',
      summary: 'Demonstrated MK-677 increases deep sleep duration by ~50% and REM sleep by ~20%, alongside significant GH and IGF-1 elevation.',
    },
    {
      title: 'Oral MK-677 increases GH and IGF-1 in GH-deficient adults',
      authors: 'Murphy MG, et al.',
      journal: 'Journal of Clinical Endocrinology & Metabolism',
      year: 1998,
      doi: '10.1210/jcem.83.10.5194',
      summary: 'MK-677 25 mg daily produced GH and IGF-1 levels in GH-deficient adults comparable to exogenous GH replacement therapy.',
    },
    {
      title: 'Effects of MK-677 on hip fracture recovery in elderly patients',
      authors: 'Bach MA, et al.',
      journal: 'Journal of Clinical Endocrinology & Metabolism',
      year: 2004,
      doi: '10.1210/jc.2003-030550',
      summary: 'Hip fracture trial that did not meet primary functional endpoints despite improvements in IGF-1 and lean mass. Contributed to halting further clinical development.',
    },
  ],

  protocols: [
    {
      name: 'Standard (body composition / anti-aging)',
      route: 'Oral',
      typicalDose: '10–25 mg',
      frequency: 'Once daily, typically before bed',
      cycleDuration: '8–12 weeks, or ongoing with monitoring',
      notes: 'Evening dosing may help mitigate hunger (sleeping through peak hunger) and align with natural GH pulse timing. 10 mg is often sufficient; 25 mg was the clinical trial dose. Monitor fasting blood glucose.',
    },
    {
      name: 'Sleep improvement focus',
      route: 'Oral',
      typicalDose: '10–15 mg',
      frequency: 'Once daily, 30 min before bed',
      cycleDuration: '4–8 weeks',
      notes: 'Lower dose sufficient for sleep architecture improvement. Effects on deep sleep and REM typically noticed within the first week.',
    },
  ],

  protocolDisclaimer:
    'MK-677 is not FDA-approved for any indication. Long-term use may affect insulin sensitivity. These protocols are from clinical trial data and community reports. Blood glucose monitoring is recommended. Consult a healthcare professional.',

  sideEffects: [
    { effect: 'Increased appetite', frequency: 'common', details: 'Significant hunger increase in most users. Ghrelin receptor mediated.' },
    { effect: 'Water retention / edema', frequency: 'common', details: 'Swelling in extremities, facial puffiness. Usually dose-dependent and transient.' },
    { effect: 'Increased fasting blood glucose', frequency: 'common', details: 'Clinically documented in long-term trials. May reduce insulin sensitivity. Requires monitoring.' },
    { effect: 'Lethargy', frequency: 'uncommon', details: 'Some users report daytime sleepiness, especially initially.' },
    { effect: 'Joint pain', frequency: 'uncommon', details: 'Typical of GH/IGF-1 elevation. Often dose-dependent.' },
    { effect: 'Numbness/tingling', frequency: 'uncommon', details: 'Paresthesia in hands, consistent with GH-related carpal tunnel effects.' },
  ],

  contraindications: [
    'Type 2 diabetes or prediabetes (may worsen insulin resistance)',
    'Active cancer or history of cancer',
    'Pregnancy or breastfeeding',
    'Diabetic retinopathy',
  ],

  interactions: [
    'May antagonize diabetes medications by increasing blood glucose',
    'GH/IGF-1 elevation may interact with insulin therapy',
    'Potential interaction with medications metabolized by CYP3A4',
  ],

  storage: {
    lyophilized: 'Room temperature, stable for 24+ months (supplied as capsule or powder)',
    reconstituted: 'N/A (oral compound — no reconstitution needed)',
    reconstitutionSolvent: 'N/A',
    reconstitutionNotes: 'Typically supplied as capsules or loose powder. Store in cool, dry place away from light. No refrigeration required for powder/capsule form.',
  },

  relatedPeptideSlugs: ['ipamorelin', 'cjc-1295', 'ghrp-6'],
  synergyNotes: 'MK-677 is the only orally active GH secretagogue, making it uniquely convenient. It is sometimes used alongside injectable peptides like CJC-1295/Ipamorelin, though combining multiple GH secretagogues requires careful monitoring of IGF-1 levels.',

  metaDescription: 'MK-677 (Ibutamoren) is an oral ghrelin mimetic that elevates GH and IGF-1 for months. Clinical trial data, sleep benefits, insulin effects, and dosing guidance.',

  faqItems: [
    {
      question: 'Is MK-677 a peptide?',
      answer: 'No. MK-677 is a non-peptide small molecule, but it mimics ghrelin and activates the same receptor as peptide GH secretagogues (GHRP-6, Ipamorelin). It is universally discussed alongside peptides because of its identical mechanism of action.',
    },
    {
      question: 'Does MK-677 improve sleep?',
      answer: 'Yes. Clinical research shows MK-677 increases Stage IV (deep) sleep by approximately 50% and REM sleep by about 20%. Sleep improvements are typically noticed within the first week of use.',
    },
    {
      question: 'Can MK-677 cause diabetes?',
      answer: 'MK-677 increases fasting blood glucose and can reduce insulin sensitivity with long-term use. The two-year clinical trial documented this as a significant adverse effect. People with prediabetes or diabetes risk factors should avoid it or monitor closely.',
    },
    {
      question: 'How long can you take MK-677?',
      answer: 'The longest published clinical trial was two years, showing sustained IGF-1 elevation throughout. However, insulin resistance concerns with long-term use suggest cycles of 8-12 weeks with breaks, or ongoing use with regular blood glucose monitoring.',
    },
  ],
};
