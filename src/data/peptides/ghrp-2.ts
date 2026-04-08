import { Peptide } from '../types';

export const ghrp2: Peptide = {
  slug: 'ghrp-2',
  name: 'GHRP-2',
  fullName: 'Growth Hormone Releasing Peptide-2',
  aliases: ['Pralmorelin', 'KP-102'],
  sequence: 'D-Ala-D-2Nal-Ala-Trp-D-Phe-Lys-NH₂',
  molecularWeight: '817.97 g/mol',
  class: 'Growth hormone secretagogue (ghrelin mimetic)',
  halfLife: '25–60 minutes',
  administrationRoute: 'Subcutaneous injection, intravenous',

  categories: ['body-composition'],
  primaryCategory: 'body-composition',
  status: 'research',
  regulatoryNote: 'Approved in Japan as a diagnostic agent for GH deficiency (Pralmorelin). Not approved as a therapeutic in the US.',

  tldr: 'The most potent GH-releasing peptide in the GHRP series, approved in Japan as Pralmorelin for GH deficiency diagnosis. Produces higher peak GH than GHRP-6 with less hunger but more cortisol.',

  eli5: 'The strongest growth hormone releaser in the GHRP family — even used in Japan as an official medical test for pituitary function. Causes less hunger than GHRP-6 but more cortisol. It\'s the power option when maximum GH output is the goal.',

  overview:
    'GHRP-2 is a synthetic hexapeptide and one of the most potent growth hormone secretagogues in the GHRP family. It produces the strongest GH release among the GHRPs, surpassing both GHRP-6 and Ipamorelin in peak GH output.\n\nDeveloped as a research tool to study the growth hormone secretagogue receptor, GHRP-2 has been approved in Japan under the name Pralmorelin as a diagnostic agent to assess GH deficiency. It serves as a provocative test — if GH rises in response to GHRP-2, the pituitary is functional.\n\nGHRP-2 sits between GHRP-6 and Ipamorelin in terms of selectivity. It causes less hunger than GHRP-6 but more than Ipamorelin, and produces moderate cortisol and prolactin elevation.',

  mechanismOfAction:
    'GHRP-2 activates the growth hormone secretagogue receptor (GHS-R1a) with high affinity. It is considered the most potent synthetic GHS-R1a agonist among the GHRP series.\n\nLike other GHRPs, it initiates GH pulses through pituitary somatotroph activation and concurrently suppresses somatostatin release from the hypothalamus. The combination of direct pituitary stimulation and somatostatin suppression produces a robust GH response.\n\nGHRP-2 also stimulates ghrelin-like signaling in the hypothalamus, promoting moderate appetite stimulation, though less intensely than GHRP-6. It has demonstrated cytoprotective properties independent of GH release in some tissue models.',

  researchSummary:
    'Human studies demonstrate GHRP-2 produces the highest peak GH levels among the GHRP peptide series. Intravenous administration of 1 mcg/kg body weight produces 5-10 fold GH elevations within 15-30 minutes.\n\nAs a diagnostic agent in Japan, GHRP-2 (Pralmorelin) has been validated in clinical trials for distinguishing GH deficiency from normal pituitary function. The standardized test protocol uses 100 mcg IV injection with GH sampling at 15, 30, 45, and 60 minutes.\n\nLong-term studies (6-12 months) of repeated GHRP-2 administration show sustained GH/IGF-1 elevation without significant tachyphylaxis (tolerance), though the magnitude of GH response may modestly decrease over time.\n\nComparative studies show GHRP-2 produces approximately 20-30% higher peak GH levels than GHRP-6, with less appetite stimulation but more cortisol elevation.',

  citations: [
    {
      title: 'Pralmorelin: a GH secretagogue for diagnostic use in GH deficiency',
      authors: 'Takano K, et al.',
      journal: 'Drugs of Today',
      year: 2006,
      doi: '10.1358/dot.2006.42.9.1007879',
      summary: 'Review of GHRP-2 (Pralmorelin) as an approved diagnostic agent in Japan, covering clinical trial data for GH deficiency testing.',
    },
    {
      title: 'Comparison of GHRP-2 and GHRP-6 for GH release in humans',
      authors: 'Bowers CY, et al.',
      journal: 'Journal of Clinical Endocrinology & Metabolism',
      year: 1991,
      summary: 'Head-to-head comparison showing GHRP-2 produces higher peak GH release than GHRP-6 with somewhat different side effect profiles.',
    },
    {
      title: 'Long-term effects of GHRP-2 administration on GH and IGF-1 levels',
      authors: 'Laferrère B, et al.',
      journal: 'Journal of Clinical Endocrinology & Metabolism',
      year: 1995,
      doi: '10.1210/jcem.80.11.7593428',
      summary: 'Demonstrated sustained GH and IGF-1 elevation with chronic GHRP-2 administration over months without significant tolerance development.',
    },
  ],

  protocols: [
    {
      name: 'GH release (standard)',
      route: 'Subcutaneous injection',
      typicalDose: '100–300 mcg',
      frequency: '2–3 times daily',
      cycleDuration: '8–12 weeks',
      notes: 'Administer on empty stomach. Most common timing: morning, post-workout, and before bed. Wait 20+ min before eating.',
    },
    {
      name: 'Combined with GHRH analog',
      route: 'Subcutaneous injection',
      typicalDose: '100 mcg GHRP-2 + 100 mcg CJC-1295 (no DAC)',
      frequency: '2–3 times daily',
      cycleDuration: '8–16 weeks',
      notes: 'Synergistic combination. GHRP-2 is preferred over GHRP-6 when appetite stimulation is unwanted but maximal GH output is desired.',
    },
  ],

  protocolDisclaimer:
    'GHRP-2 is not FDA-approved for therapeutic use. These protocols are compiled from research and community reports. Consult a healthcare professional.',

  sideEffects: [
    { effect: 'Moderate hunger increase', frequency: 'common', details: 'Less intense than GHRP-6 but more noticeable than Ipamorelin.' },
    { effect: 'Cortisol elevation', frequency: 'common', details: 'Moderate, transient increase in cortisol post-injection.' },
    { effect: 'Water retention', frequency: 'common', details: 'Mild fluid retention typical of GH elevation.' },
    { effect: 'Prolactin elevation', frequency: 'uncommon', details: 'Modest prolactin increase, typically within normal range.' },
    { effect: 'Injection site irritation', frequency: 'common' },
  ],

  contraindications: [
    'Active cancer or history of cancer',
    'Pregnancy or breastfeeding',
    'Diabetic retinopathy',
    'Active pituitary tumors',
  ],

  storage: {
    lyophilized: 'Refrigerated (2–8°C), stable for 12–24 months',
    reconstituted: 'Refrigerated (2–8°C), use within 28 days',
    reconstitutionSolvent: 'Bacteriostatic water',
  },

  relatedPeptideSlugs: ['ghrp-6', 'ipamorelin', 'cjc-1295'],
  synergyNotes: 'GHRP-2 produces the strongest GH release of the GHRP series. Often chosen over GHRP-6 when less appetite stimulation is desired but maximum GH output is the priority.',

  metaDescription: 'GHRP-2 (Pralmorelin) is the most potent growth hormone releasing peptide. GH diagnostic use in Japan, mechanisms, protocols, and comparison to GHRP-6.',

  faqItems: [
    {
      question: 'How does GHRP-2 compare to GHRP-6?',
      answer: 'GHRP-2 produces approximately 20-30% higher peak GH levels than GHRP-6, with less appetite stimulation. However, GHRP-2 causes more cortisol elevation. GHRP-6 is stronger for appetite, GHRP-2 is stronger for GH output.',
    },
    {
      question: 'Is GHRP-2 approved anywhere?',
      answer: 'Yes, GHRP-2 is approved in Japan under the name Pralmorelin as a diagnostic agent for growth hormone deficiency. It is used as a provocative test to assess pituitary function. It is not approved as a therapeutic agent.',
    },
    {
      question: 'Does GHRP-2 cause hunger?',
      answer: 'GHRP-2 causes moderate appetite stimulation — less intense than GHRP-6 but more noticeable than Ipamorelin. If minimizing hunger is a priority, Ipamorelin is the more selective choice.',
    },
  ],
};
