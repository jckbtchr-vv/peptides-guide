import { Peptide } from '../types';

export const retatrutide: Peptide = {
  slug: 'retatrutide',
  name: 'Retatrutide',
  fullName: 'Retatrutide (LY3437943) — Triple Hormone Receptor Agonist',
  aliases: ['LY3437943', 'GGG tri-agonist'],
  molecularWeight: '~4500 g/mol',
  class: 'Triple incretin receptor agonist (GIP/GLP-1/glucagon)',
  halfLife: '~6 days',
  administrationRoute: 'Subcutaneous injection',

  categories: ['metabolic'],
  primaryCategory: 'metabolic',
  status: 'clinical-trials',
  regulatoryNote: 'Investigational drug developed by Eli Lilly. Currently in Phase 3 clinical trials. Not yet FDA-approved. Expected to be Lilly\'s next-generation obesity/diabetes therapeutic after tirzepatide.',

  tldr: 'Eli Lilly\'s triple agonist (GIP/GLP-1/glucagon) that produced 24.2% weight loss in Phase 2 — the highest ever recorded for any anti-obesity drug. Adds glucagon receptor activation to the dual-agonist approach of tirzepatide.',

  overview:
    'Retatrutide is an investigational triple hormone receptor agonist that simultaneously activates three receptors: GIP (glucose-dependent insulinotropic polypeptide), GLP-1 (glucagon-like peptide-1), and glucagon receptors. It represents the next evolution beyond dual agonists like tirzepatide.\n\nDeveloped by Eli Lilly, retatrutide produced unprecedented weight loss results in Phase 2 trials — 24.2% mean body weight reduction at the highest dose over 48 weeks, surpassing every other anti-obesity compound ever studied including semaglutide (15%) and tirzepatide (21%).\n\nThe addition of glucagon receptor agonism to the GIP/GLP-1 backbone is the key innovation. Glucagon increases energy expenditure, promotes hepatic fat oxidation, and reduces liver fat — effects that complement the appetite suppression and insulin sensitization of GIP/GLP-1 signaling.',

  mechanismOfAction:
    'Retatrutide activates three distinct G protein-coupled receptors, each contributing unique metabolic effects:\n\nGLP-1 receptor: Reduces appetite through hypothalamic and brainstem signaling, slows gastric emptying, and stimulates glucose-dependent insulin secretion. This is the same pathway targeted by semaglutide.\n\nGIP receptor: Enhances insulin secretion, improves fat tissue metabolism, and may contribute to weight loss through central appetite regulation. GIP agonism also appears to improve tolerability of GLP-1 effects (less nausea). This is the same addition that differentiates tirzepatide from semaglutide.\n\nGlucagon receptor: This is the novel third target. Glucagon receptor activation increases hepatic energy expenditure, promotes fat oxidation in the liver, reduces hepatic steatosis (fatty liver), and increases resting metabolic rate. It also promotes amino acid catabolism and may contribute to the preferential loss of fat mass over lean mass.\n\nThe triple agonist approach creates a broader metabolic effect than GLP-1 alone or even GIP/GLP-1 dual agonism — addressing appetite, insulin sensitivity, and energy expenditure simultaneously.',

  researchSummary:
    'The Phase 2 trial of retatrutide, published in the New England Journal of Medicine in 2023, enrolled 338 adults with obesity. Results at 48 weeks showed dose-dependent weight loss:\n\n— 1 mg dose: -8.7% body weight\n— 4 mg dose: -17.1% body weight  \n— 8 mg dose: -22.8% body weight\n— 12 mg dose: -24.2% body weight\n\nThe 24.2% mean weight loss at the highest dose is the largest ever reported for any anti-obesity medication in a clinical trial. Approximately 26% of participants in the highest dose group lost more than 30% of their body weight.\n\nA separate Phase 2 trial in type 2 diabetes showed HbA1c reductions of up to 2.02% and significant weight loss, with a substantial proportion of patients achieving HbA1c below 5.7% (non-diabetic range).\n\nNAFLD/NASH data is particularly promising. Liver fat reduction of approximately 82-86% was observed at higher doses, with a large proportion of patients achieving complete resolution of hepatic steatosis. This positions retatrutide as a potential treatment for fatty liver disease.\n\nPhase 3 trials (TRIUMPH program) are underway with results expected in 2025-2026. If approved, retatrutide would become the most effective anti-obesity drug available.',

  citations: [
    {
      title: 'Retatrutide once weekly for treatment of obesity: a phase 2 trial',
      authors: 'Jastreboff AM, et al.',
      journal: 'New England Journal of Medicine',
      year: 2023,
      doi: '10.1056/NEJMoa2301972',
      summary: 'Phase 2 trial of 338 adults with obesity showing 24.2% mean body weight reduction at 12 mg dose over 48 weeks — the highest weight loss ever recorded for an anti-obesity drug.',
    },
    {
      title: 'Retatrutide, a GIP, GLP-1 and glucagon receptor agonist, for people with type 2 diabetes: a randomised, double-blind, placebo and active-comparator controlled phase 2 trial',
      authors: 'Rosenstock J, et al.',
      journal: 'The Lancet',
      year: 2023,
      doi: '10.1016/S0140-6736(23)01053-X',
      summary: 'Phase 2 trial in type 2 diabetes demonstrating HbA1c reductions up to 2.02% and significant weight loss, with many patients reaching non-diabetic glucose levels.',
    },
    {
      title: 'Triple-hormone-receptor agonist retatrutide for metabolic dysfunction-associated steatotic liver disease: a randomized phase 2 trial',
      authors: 'Sanyal AJ, et al.',
      journal: 'Nature Medicine',
      year: 2024,
      doi: '10.1038/s41591-024-02869-8',
      summary: 'Demonstrated 82-86% liver fat reduction with retatrutide, with complete resolution of hepatic steatosis in a majority of patients at higher doses.',
    },
    {
      title: 'GLP-1/GIP/glucagon receptor co-agonism for treating obesity',
      authors: 'Finan B, et al.',
      journal: 'Molecular Metabolism',
      year: 2020,
      doi: '10.1016/j.molmet.2020.101090',
      summary: 'Review of the scientific rationale for triple agonism, explaining how glucagon receptor activation adds energy expenditure and hepatic fat oxidation to the metabolic benefits of GIP/GLP-1.',
    },
  ],

  protocols: [
    {
      name: 'Phase 2 clinical trial dosing',
      route: 'Subcutaneous injection',
      typicalDose: '1–12 mg weekly (dose escalation)',
      frequency: 'Once weekly',
      cycleDuration: '48 weeks in Phase 2',
      notes: 'Phase 2 used dose escalation: starting at low doses and increasing over weeks. The 12 mg dose (producing 24.2% weight loss) was reached after gradual escalation. Dose escalation is critical for tolerability — GI side effects are dose-dependent.',
    },
    {
      name: 'Phase 3 (TRIUMPH program — ongoing)',
      route: 'Subcutaneous injection',
      typicalDose: 'Multiple dose arms being studied',
      frequency: 'Once weekly',
      cycleDuration: '52–72 weeks',
      notes: 'Phase 3 trials are ongoing. Final dosing regimens will be determined by these trials. Not available outside of clinical trials.',
    },
  ],

  protocolDisclaimer:
    'Retatrutide is an investigational drug that is NOT available for prescription or purchase. It can only be obtained through enrollment in clinical trials. The dosing information reflects published clinical trial data. Do not attempt to source or self-administer investigational compounds.',

  sideEffects: [
    { effect: 'Nausea', frequency: 'common', details: 'The most common adverse event (up to 45% at higher doses). Primarily during dose escalation. Improves over time.' },
    { effect: 'Diarrhea', frequency: 'common', details: 'Reported in approximately 25-35% of participants at higher doses.' },
    { effect: 'Vomiting', frequency: 'common', details: 'More common during dose escalation. Approximately 15-20% at higher doses.' },
    { effect: 'Decreased appetite', frequency: 'common', details: 'Considered a therapeutic effect rather than adverse event, but can be pronounced.' },
    { effect: 'Constipation', frequency: 'common', details: 'Reported in 10-20% of participants.' },
    { effect: 'Injection site reactions', frequency: 'uncommon', details: 'Mild and transient.' },
    { effect: 'Increased heart rate', frequency: 'uncommon', details: 'Small increases in resting heart rate observed, consistent with GLP-1 class effects.' },
  ],

  contraindications: [
    'Personal or family history of medullary thyroid carcinoma (MTC) — GLP-1 class warning',
    'Multiple Endocrine Neoplasia syndrome type 2 (MEN 2)',
    'Known hypersensitivity to retatrutide',
    'History of pancreatitis',
    'Pregnancy or planning to become pregnant',
  ],

  interactions: [
    'Delays gastric emptying — may affect absorption of oral medications',
    'May increase risk of hypoglycemia when combined with insulin or sulfonylureas',
    'Oral contraceptives may have reduced efficacy',
  ],

  storage: {
    lyophilized: 'N/A (investigational — supplied as pre-filled injection in clinical trials)',
    reconstituted: 'Refrigerated (2–8°C) per clinical trial protocols',
    reconstitutionSolvent: 'N/A (pre-mixed)',
    reconstitutionNotes: 'Retatrutide is only available through clinical trial enrollment. It is supplied in pre-filled injection devices. Storage follows clinical trial pharmacy protocols.',
  },

  relatedPeptideSlugs: ['tirzepatide', 'semaglutide'],
  synergyNotes: 'Retatrutide represents the evolution from single (semaglutide: GLP-1) to dual (tirzepatide: GIP/GLP-1) to triple (retatrutide: GIP/GLP-1/glucagon) receptor agonism. Each additional receptor adds a distinct metabolic benefit. Not used in combination with other GLP-1 class drugs.',

  metaDescription: 'Retatrutide (LY3437943) is a triple GIP/GLP-1/glucagon agonist that produced 24.2% weight loss in Phase 2. Mechanisms, trial data, liver fat reduction, and development status.',

  faqItems: [
    {
      question: 'What makes retatrutide different from semaglutide and tirzepatide?',
      answer: 'Semaglutide activates one receptor (GLP-1). Tirzepatide activates two (GIP + GLP-1). Retatrutide activates three (GIP + GLP-1 + glucagon). The glucagon receptor adds increased energy expenditure and liver fat oxidation, which is why retatrutide produced 24.2% weight loss vs. tirzepatide\'s 20.9% and semaglutide\'s 15%.',
    },
    {
      question: 'Is retatrutide available yet?',
      answer: 'No. Retatrutide is in Phase 3 clinical trials (the TRIUMPH program) as of 2024-2025. It is not approved by the FDA or any regulatory agency. It can only be accessed through clinical trial enrollment. Approval, if granted, is likely in 2026-2027.',
    },
    {
      question: 'How much weight can you lose on retatrutide?',
      answer: 'In the Phase 2 trial, the 12 mg dose produced 24.2% mean body weight loss over 48 weeks. About 26% of participants lost more than 30% of their body weight. These are the highest weight loss numbers ever recorded for any anti-obesity drug in clinical trials.',
    },
    {
      question: 'Can retatrutide treat fatty liver disease?',
      answer: 'Phase 2 data showed 82-86% liver fat reduction at higher doses, with many patients achieving complete resolution of hepatic steatosis. This makes retatrutide one of the most promising treatments for NAFLD/NASH (metabolic dysfunction-associated steatotic liver disease). Dedicated liver trials are underway.',
    },
    {
      question: 'What are the side effects of retatrutide?',
      answer: 'The most common side effects are gastrointestinal: nausea (up to 45%), diarrhea (25-35%), and vomiting (15-20%). These are primarily during dose escalation and improve over time. The side effect profile is similar to semaglutide and tirzepatide but may be somewhat more pronounced at higher doses due to triple receptor activation.',
    },
  ],
};
