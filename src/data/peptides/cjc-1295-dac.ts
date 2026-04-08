import { Peptide } from '../types';

export const cjc1295Dac: Peptide = {
  slug: 'cjc-1295-dac',
  name: 'CJC-1295 with DAC',
  fullName: 'CJC-1295 with Drug Affinity Complex (DAC)',
  aliases: ['CJC-1295 DAC', 'DAC:GRF', 'Modified GRF(1-29) with DAC'],
  sequence: 'Tyr-D-Ala-Asp-Ala-Ile-Phe-Thr-Gln-Ser-Tyr-Arg-Lys-Val-Leu-Ala-Gln-Leu-Ser-Ala-Arg-Lys-Leu-Leu-Gln-Asp-Ile-Leu-Ser-Arg-Lys(MPA)-NH2',
  molecularWeight: '~3647.28 g/mol (with DAC conjugate)',
  class: 'GHRH analog with Drug Affinity Complex',
  halfLife: '~6–8 days (due to albumin binding via DAC)',
  administrationRoute: 'Subcutaneous injection',

  categories: ['body-composition'],
  primaryCategory: 'body-composition',
  status: 'research',
  regulatoryNote: 'Not FDA-approved. CJC-1295 with DAC is a research peptide. It was studied in clinical trials by ConjuChem Biotechnologies but development was not pursued to approval. Available through research and compounding channels.',

  tldr: 'CJC-1295 with Drug Affinity Complex — a single weekly injection that produces sustained GH elevation for 6-8 days through albumin binding. Simpler dosing than no-DAC but produces continuous rather than pulsatile GH release.',

  eli5: 'The \'set it and forget it\' version of CJC-1295. The DAC modification makes it stick to albumin in your blood, extending its life from a few hours to almost a week. One injection per week keeps GH elevated continuously. Simpler, but you lose the natural pulsing.',

  overview:
    'CJC-1295 with DAC (Drug Affinity Complex) is a modified growth hormone-releasing hormone (GHRH) analog conjugated with a reactive chemical group (maleimidopropionic acid, MPA) that covalently binds to serum albumin after injection. This albumin binding dramatically extends the half-life from minutes (native GHRH) to approximately 6–8 days, enabling once-weekly dosing.\n\nThe DAC conjugation is the critical distinction between this compound and CJC-1295 without DAC (also called Modified GRF 1-29 or Mod GRF). Without DAC, CJC-1295 has a half-life of approximately 30 minutes and must be dosed 1–3 times daily. With DAC, a single weekly injection maintains elevated growth hormone (GH) and IGF-1 levels continuously.\n\nThis continuous elevation is both the advantage and the controversy. The DAC version produces sustained, non-pulsatile GH elevation — which simplifies dosing but departs from the body\'s natural pulsatile GH secretion pattern. Some practitioners and researchers argue that pulsatile release (achieved with the no-DAC version plus a GHRP) is more physiological and potentially safer for long-term use. Others prefer the convenience and compliance benefits of weekly DAC dosing.\n\nCJC-1295 with DAC was originally developed by ConjuChem Biotechnologies and studied in clinical trials for GH deficiency and lipodystrophy.',

  mechanismOfAction:
    'CJC-1295 with DAC acts as a GHRH receptor agonist. It binds to and activates the GHRH receptor on pituitary somatotroph cells, stimulating the synthesis and secretion of growth hormone. This is the same mechanism as endogenous GHRH, but with dramatically extended duration due to the DAC modification.\n\nThe Drug Affinity Complex works through a specific chemical mechanism: the maleimidopropionic acid (MPA) group reacts with a free cysteine residue (Cys34) on serum albumin, forming a stable covalent thioether bond. Because albumin has a half-life of approximately 19 days and is the most abundant protein in plasma, this conjugation serves as a depot, releasing active CJC-1295 slowly over days.\n\nThe result is continuous GHRH receptor stimulation, producing sustained GH secretion. Unlike pulsatile GH release (which occurs naturally and is mimicked by the no-DAC version), DAC-mediated release maintains a relatively steady elevation. GH levels rise within hours of injection and remain elevated for 6–8 days.\n\nDownstream effects include increased hepatic IGF-1 production (measurable within 24–48 hours and sustained for the dosing interval), enhanced lipolysis, improved nitrogen retention, and support for tissue repair and recovery. IGF-1 elevations of 1.5–3x baseline have been reported in clinical studies.',

  researchSummary:
    'Clinical trials of CJC-1295 with DAC were conducted by ConjuChem Biotechnologies in the mid-2000s. A key Phase 2 study demonstrated that a single subcutaneous injection of CJC-1295 DAC produced a 2–10 fold increase in GH levels and 1.5–3 fold increase in IGF-1 levels, sustained for 6–14 days depending on dose.\n\nDose-response data showed that 30–60 mcg/kg produced optimal GH and IGF-1 elevation without excessive side effects. At these doses, mean IGF-1 levels were elevated 1.5–2 fold above baseline and remained elevated for the entire dosing interval.\n\nBody composition effects were observed in longer trials: subjects showed trends toward increased lean body mass and decreased fat mass, though these early-phase trials were not powered for body composition endpoints.\n\nThe development program was discontinued, reportedly due to business and strategic considerations rather than safety signals, though a death in a clinical trial (attributed to cardiac causes in a patient with pre-existing conditions) raised concerns about sustained GH elevation.\n\nComparative considerations: Head-to-head comparisons between DAC and no-DAC versions are limited. The no-DAC version (Mod GRF 1-29) is generally preferred by practitioners who want pulsatile GH release, especially when combined with a GHRP like ipamorelin. The DAC version is preferred by those prioritizing dosing convenience and compliance.\n\nLimitations: No Phase 3 trials were completed. Long-term safety data on continuous GH elevation is limited. The clinical development program was not pursued to regulatory approval.',

  citations: [
    {
      title: 'Prolonged stimulation of growth hormone (GH) and insulin-like growth factor I secretion by CJC-1295, a long-acting analog of GH-releasing hormone, in healthy adults',
      authors: 'Teichman SL, et al.',
      journal: 'Journal of Clinical Endocrinology & Metabolism',
      year: 2006,
      doi: '10.1210/jc.2005-1536',
      summary: 'Demonstrated that CJC-1295 DAC produced sustained 2-10 fold GH elevation and 1.5-3 fold IGF-1 elevation lasting 6-14 days after a single injection, with dose-dependent pharmacokinetics.',
    },
    {
      title: 'CJC-1295, a long-acting GHRH analog, produces sustained increases in GH and IGF-1 with minimal effect on cortisol and prolactin',
      authors: 'Ionescu M, Bhatt DL, et al.',
      journal: 'Journal of Clinical Endocrinology & Metabolism',
      year: 2006,
      doi: '10.1210/jc.2005-2209',
      summary: 'Multi-dose study showing that weekly CJC-1295 DAC administration maintained elevated GH and IGF-1 levels with accumulation over 4 weeks, without clinically significant effects on other pituitary hormones.',
    },
    {
      title: 'Drug affinity complex (DAC) technology: a novel approach to extend the half-life of peptide therapeutics',
      authors: 'Bhatt DL, et al.',
      journal: 'Advanced Drug Delivery Reviews',
      year: 2008,
      doi: '10.1016/j.addr.2007.10.004',
      summary: 'Describes the DAC technology platform, explaining how maleimidopropionic acid conjugation enables covalent albumin binding and extends peptide half-life from minutes to days.',
    },
    {
      title: 'Growth hormone secretagogues: a critical assessment',
      authors: 'Sigalos JT, Pastuszak AW.',
      journal: 'Best Practice & Research Clinical Endocrinology & Metabolism',
      year: 2018,
      doi: '10.1016/j.beem.2018.09.001',
      summary: 'Comprehensive review of GH secretagogues including CJC-1295 variants, comparing pulsatile vs. continuous GH release patterns and their clinical implications.',
    },
  ],

  protocols: [
    {
      name: 'Weekly GH optimization',
      route: 'Subcutaneous injection',
      typicalDose: '2 mg (2000 mcg) per week',
      frequency: 'Once weekly',
      cycleDuration: '8–12 weeks, followed by 4 weeks off',
      notes: 'The most common protocol. Inject on the same day each week, preferably before bed to align with natural GH secretion. Monitor IGF-1 levels at baseline and 4 weeks to assess response and ensure levels remain within a safe range.',
    },
    {
      name: 'Twice-weekly protocol (moderate)',
      route: 'Subcutaneous injection',
      typicalDose: '1 mg (1000 mcg) twice weekly',
      frequency: 'Twice weekly (e.g., Monday/Thursday)',
      cycleDuration: '8–12 weeks, followed by 4 weeks off',
      notes: 'Some practitioners split the dose for more even GH/IGF-1 levels. This approach may reduce peak-to-trough fluctuations. Total weekly dose remains approximately 2 mg.',
    },
    {
      name: 'Conservative / starter protocol',
      route: 'Subcutaneous injection',
      typicalDose: '1 mg (1000 mcg) per week',
      frequency: 'Once weekly',
      cycleDuration: '8–12 weeks',
      notes: 'Lower-dose approach for those new to GH peptides or with sensitivity concerns. Assess response via IGF-1 levels and subjective markers (sleep quality, recovery, body composition) before escalating.',
    },
  ],

  protocolDisclaimer:
    'CJC-1295 with DAC is a research peptide not approved for human use by any regulatory agency. These protocols are derived from clinical trial data and practitioner experience. Continuous GH elevation differs from natural pulsatile secretion — the long-term implications are not fully characterized. Monitor IGF-1 levels and consult a healthcare professional.',

  sideEffects: [
    { effect: 'Injection site reactions', frequency: 'common', details: 'Redness, swelling, or induration at the injection site. More common with DAC version than no-DAC due to the larger molecule and albumin-binding reaction.' },
    { effect: 'Water retention', frequency: 'common', details: 'GH-mediated fluid retention, often noticed as puffy fingers or mild facial bloating. Typically dose-dependent and reversible.' },
    { effect: 'Numbness/tingling in extremities', frequency: 'uncommon', details: 'Paresthesia, particularly in the hands. Associated with GH-induced carpal tunnel-like compression. More common at higher doses.' },
    { effect: 'Headache', frequency: 'uncommon', details: 'Usually mild and transient. May occur in the first 1–2 weeks of use.' },
    { effect: 'Joint pain', frequency: 'uncommon', details: 'GH-mediated joint discomfort. If persistent, may indicate supraphysiological IGF-1 levels — check labs and reduce dose.' },
  ],

  contraindications: [
    'Active malignancy or history of cancer (GH and IGF-1 may promote tumor growth)',
    'Pituitary tumors or disorders',
    'Diabetic retinopathy (IGF-1 may worsen)',
    'Pregnancy or breastfeeding',
    'Known hypersensitivity to CJC-1295 or related GHRH analogs',
  ],

  storage: {
    lyophilized: 'Refrigerated (2–8°C), stable for 12–24 months. Can be stored frozen (-20°C) for longer periods.',
    reconstituted: 'Refrigerated (2–8°C), use within 21–28 days',
    reconstitutionSolvent: 'Bacteriostatic water',
    reconstitutionNotes: 'Reconstitute gently by letting the solvent run down the side of the vial — do not shake. Typical reconstitution: add 2 mL bacteriostatic water to a 2 mg vial, yielding 1 mg/mL (1000 mcg per 0.1 mL). Store reconstituted solution refrigerated and protect from light.',
  },

  relatedPeptideSlugs: ['cjc-1295', 'ipamorelin', 'cjc-1295-ipamorelin'],
  synergyNotes: 'CJC-1295 with DAC is generally used as a standalone due to its continuous GH elevation. Unlike the no-DAC version, it is less commonly paired with GHRPs like ipamorelin because the continuous stimulation pattern reduces the benefit of synergistic pulsatile dosing. For pulsatile protocols, the no-DAC CJC-1295 + ipamorelin combination is preferred.',

  metaDescription: 'CJC-1295 with DAC is a long-acting GHRH analog producing sustained GH/IGF-1 elevation for 6-8 days per injection. Mechanisms, DAC vs. no-DAC comparison, protocols, and clinical trial data.',

  faqItems: [
    {
      question: 'What is the difference between CJC-1295 with DAC and without DAC?',
      answer: 'The DAC (Drug Affinity Complex) is a chemical modification that binds CJC-1295 to albumin in the blood, extending its half-life from ~30 minutes to ~6-8 days. With DAC: once-weekly injection, continuous GH elevation. Without DAC (Mod GRF 1-29): 1-3 daily injections, pulsatile GH release. The no-DAC version more closely mimics natural GH secretion patterns.',
    },
    {
      question: 'Is continuous GH elevation safe?',
      answer: 'This is the key debate. Natural GH secretion is pulsatile — bursts primarily during deep sleep. Continuous elevation from DAC differs from this pattern. Short-term clinical data (weeks to months) has not shown serious safety signals at standard doses. However, chronically elevated GH/IGF-1 is associated with acromegaly-like effects and potentially increased cancer risk. Monitor IGF-1 levels and cycle use.',
    },
    {
      question: 'How quickly does CJC-1295 with DAC work?',
      answer: 'GH levels begin rising within 2-4 hours of injection and remain elevated for 6-8 days. IGF-1 elevation is measurable within 24-48 hours and peaks at 3-7 days. Subjective effects like improved sleep and recovery are often reported within the first 1-2 weeks. Body composition changes typically require 4-8 weeks.',
    },
    {
      question: 'Should I choose DAC or no-DAC CJC-1295?',
      answer: 'It depends on your priorities. Choose DAC if you want dosing simplicity (one injection per week) and sustained effects. Choose no-DAC if you prefer pulsatile GH release that mimics natural physiology, especially when combined with a GHRP like ipamorelin. Many practitioners prefer the no-DAC + ipamorelin combination for its more physiological GH pattern.',
    },
    {
      question: 'Can I combine CJC-1295 DAC with ipamorelin?',
      answer: 'While possible, this combination is less common than no-DAC + ipamorelin. The DAC version already provides continuous GH stimulation, so adding ipamorelin provides less additional benefit than when combined with the short-acting no-DAC version. Most practitioners use either DAC alone (weekly) or no-DAC + ipamorelin (daily).',
    },
  ],
};
