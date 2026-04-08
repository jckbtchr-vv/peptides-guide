import { Peptide } from '../types';

export const ipamorelin: Peptide = {
  slug: 'ipamorelin',
  name: 'Ipamorelin',
  fullName: 'Ipamorelin (Selective GH Secretagogue)',
  aliases: ['IPA', 'NNC 26-0161'],
  sequence: 'Aib-His-D-2-Nal-D-Phe-Lys-NH2',
  molecularWeight: '711.85 g/mol',
  class: 'Growth hormone secretagogue (ghrelin receptor agonist)',
  halfLife: '~2 hours',
  administrationRoute: 'Subcutaneous injection',

  categories: ['body-composition'],
  primaryCategory: 'body-composition',
  status: 'research',
  regulatoryNote: 'Not FDA-approved for human use. Ipamorelin is a research compound. It has been studied in clinical trials for post-operative ileus but has not received regulatory approval.',

  tldr: 'The most selective growth hormone secretagogue — stimulates GH release with minimal effects on cortisol, prolactin, or appetite. The preferred GHRP for protocols prioritizing clean GH elevation.',

  overview:
    'Ipamorelin is a synthetic pentapeptide growth hormone secretagogue that acts as a selective agonist of the ghrelin receptor (GHS-R1a). Developed by Novo Nordisk in the late 1990s, it is widely regarded as one of the most selective GH-releasing peptides available, with minimal effects on cortisol, prolactin, and aldosterone release — a significant advantage over earlier secretagogues like GHRP-6 and GHRP-2.\n\nIpamorelin stimulates GH release from the anterior pituitary in a dose-dependent manner while preserving the natural pulsatile pattern of GH secretion. Unlike hexarelin or GHRP-6, ipamorelin does not significantly stimulate appetite (no strong ghrelin-like hunger effect), making it more suitable for body composition protocols where appetite stimulation is undesirable.\n\nIts favorable selectivity profile and clean side effect profile have made ipamorelin one of the most widely used peptides in the growth hormone optimization space, particularly in combination with CJC-1295 without DAC (Mod GRF 1-29).',

  mechanismOfAction:
    'Ipamorelin binds to the growth hormone secretagogue receptor type 1a (GHS-R1a), the same receptor that binds endogenous ghrelin. However, unlike ghrelin, ipamorelin is highly selective for GH release and shows minimal activation of other downstream pathways associated with GHS-R1a.\n\nAt the pituitary level, GHS-R1a activation by ipamorelin triggers phospholipase C signaling, increasing intracellular calcium through IP3-mediated release from intracellular stores. This calcium influx triggers exocytosis of GH-containing secretory granules from somatotroph cells.\n\nCritically, ipamorelin demonstrates selectivity for GH release over ACTH (which drives cortisol production), prolactin, and FSH/LH. In dose-response studies, GH release increases proportionally with dose, while cortisol and prolactin remain at baseline — even at doses many times the effective GH-releasing dose. This selectivity distinguishes it from GHRP-6 and GHRP-2, which stimulate cortisol and prolactin at higher doses.\n\nWhen combined with GHRH analogs (like CJC-1295), ipamorelin and GHRH act through different intracellular signaling pathways (calcium vs. cAMP) that converge on GH release, producing synergistic amplification.',

  researchSummary:
    'Ipamorelin was initially characterized in animal studies by Raun et al. (1998), who demonstrated its potent and selective GH-releasing properties. In rats, ipamorelin released GH with an ED50 of approximately 80 nmol/kg without affecting ACTH or cortisol levels at doses up to 1,000-fold above the GH-releasing threshold.\n\nHuman pharmacological studies confirmed dose-dependent GH release. In healthy volunteers, subcutaneous ipamorelin (0.01–0.1 mg/kg) produced robust GH peaks within 30–60 minutes, with return to baseline by 3–4 hours, preserving pulsatile release patterns.\n\nClinical development focused on post-operative ileus (delayed bowel function after surgery). Phase II trials by Greenwood-Van Meerveld et al. demonstrated that ipamorelin accelerated recovery of gastrointestinal motility following abdominal surgery, likely through GHS-R1a receptors in the enteric nervous system. However, a Phase III trial did not meet its primary endpoint, and clinical development was not continued.\n\nResearch on the CJC-1295/ipamorelin combination shows synergistic GH release, with the combination producing peak GH levels 2–3-fold greater than either peptide alone. This synergy forms the basis for the most widely used GH peptide protocol in clinical and research settings.',

  citations: [
    {
      title: 'Ipamorelin, the first selective growth hormone secretagogue',
      authors: 'Raun K, et al.',
      journal: 'European Journal of Endocrinology',
      year: 1998,
      doi: '10.1530/eje.0.1390552',
      summary: 'Foundational paper demonstrating ipamorelin\'s selective GH-releasing properties in rats, with no significant effects on ACTH, cortisol, or prolactin at GH-effective doses.',
    },
    {
      title: 'Ipamorelin safety and tolerability in healthy volunteers',
      authors: 'Johansen PB, et al.',
      journal: 'Growth Hormone & IGF Research',
      year: 1999,
      doi: '10.1054/ghir.1999.0108',
      summary: 'Human pharmacokinetic and pharmacodynamic study showing dose-dependent GH release with favorable tolerability and minimal effects on other pituitary hormones.',
    },
    {
      title: 'Ipamorelin as a new prokinetic agent for postoperative ileus',
      authors: 'Greenwood-Van Meerveld B, et al.',
      journal: 'Neurogastroenterology & Motility',
      year: 2007,
      doi: '10.1111/j.1365-2982.2006.00870.x',
      summary: 'Phase II trial results showing ipamorelin accelerated recovery of gastrointestinal motility after abdominal surgery, suggesting a prokinetic effect via enteric GHS-R1a receptors.',
    },
    {
      title: 'Growth hormone secretagogues: history, mechanism of action, and clinical development',
      authors: 'Nass R, et al.',
      journal: 'Pituitary',
      year: 2011,
      doi: '10.1007/s11102-011-0319-2',
      summary: 'Comprehensive review covering the development of GH secretagogues including ipamorelin, comparing selectivity profiles and clinical potential across the class.',
    },
  ],

  protocols: [
    {
      name: 'GH optimization (with CJC-1295 no DAC)',
      route: 'Subcutaneous injection',
      typicalDose: '100–300 mcg ipamorelin + 100 mcg Mod GRF 1-29',
      frequency: '1–3 times daily (typically before bed and/or upon waking)',
      cycleDuration: '8–12 weeks on, 4 weeks off',
      notes: 'The most common and well-researched GH peptide protocol. Administer on an empty stomach. Pre-bedtime dosing aligns with the natural nocturnal GH pulse. 200 mcg ipamorelin is the most commonly reported dose.',
    },
    {
      name: 'Ipamorelin standalone',
      route: 'Subcutaneous injection',
      typicalDose: '200–300 mcg',
      frequency: '1–3 times daily',
      cycleDuration: '8–12 weeks on, 4 weeks off',
      notes: 'Can be used alone, though the combination with a GHRH analog is preferred for synergistic GH release. Standalone use still produces significant GH pulses above baseline. Administer on an empty stomach.',
    },
  ],

  protocolDisclaimer:
    'Ipamorelin is not FDA-approved for human use. These protocols are based on published pharmacological data and clinical community reports. They are not medical recommendations. Consult a qualified healthcare professional before use.',

  sideEffects: [
    { effect: 'Head rush or flushing', frequency: 'common', details: 'Transient warmth or flushing shortly after injection. Typically resolves within 10–20 minutes.' },
    { effect: 'Injection site irritation', frequency: 'common', details: 'Mild redness or discomfort at the injection site. Usually self-limiting.' },
    { effect: 'Mild hunger increase', frequency: 'uncommon', details: 'Less pronounced than GHRP-6 or GHRP-2, but some users report mild appetite stimulation due to GHS-R1a activation.' },
    { effect: 'Water retention', frequency: 'uncommon', details: 'Mild edema or bloating related to GH-mediated sodium and water retention. Usually manageable.' },
    { effect: 'Tingling in extremities', frequency: 'rare', details: 'Paresthesia or carpal tunnel-like symptoms at higher doses or with prolonged use. Indicates significant GH elevation.' },
  ],

  contraindications: [
    'Active malignancy (GH/IGF-1 may promote tumor growth)',
    'Pregnancy or breastfeeding',
    'Uncontrolled diabetes mellitus (GH can worsen insulin resistance)',
    'Active pituitary tumors or known pituitary pathology',
  ],

  interactions: [
    'Synergistic GH release when combined with GHRH analogs (CJC-1295, sermorelin, tesamorelin)',
    'May antagonize insulin and oral hypoglycemics through GH-mediated effects on glucose metabolism',
    'Somatostatin and somatostatin analogs (octreotide, lanreotide) will suppress its GH-releasing effect',
    'Glucocorticoids may attenuate GH release',
  ],

  storage: {
    lyophilized: 'Refrigerated (2–8°C), stable for up to 24 months. Protect from light.',
    reconstituted: 'Refrigerated (2–8°C), use within 21–28 days',
    reconstitutionSolvent: 'Bacteriostatic water (BAC water)',
    reconstitutionNotes: 'Add BAC water slowly down the side of the vial. Do not shake — swirl gently. Standard reconstitution: 2 mL BAC water into a 5 mg vial yields 2,500 mcg/mL (250 mcg per 0.1 mL / 10 units on an insulin syringe).',
  },

  relatedPeptideSlugs: ['cjc-1295', 'ghrp-6', 'ghrp-2'],
  synergyNotes: 'Ipamorelin is most commonly combined with CJC-1295 without DAC (Mod GRF 1-29). The combination produces synergistic GH release through complementary signaling pathways — ghrelin receptor (calcium/IP3) and GHRH receptor (cAMP/PKA). This is considered the gold standard GH peptide stack.',

  metaDescription: 'Ipamorelin is a selective growth hormone secretagogue researched for GH optimization and body composition. Mechanisms, selectivity profile, protocols, and safety.',

  faqItems: [
    {
      question: 'What makes ipamorelin different from other GH secretagogues?',
      answer: 'Ipamorelin is considered the most selective GH secretagogue available. Unlike GHRP-6 and GHRP-2, it does not significantly increase cortisol, prolactin, or aldosterone at GH-releasing doses. It also causes minimal appetite stimulation compared to GHRP-6, making it preferred for body composition protocols.',
    },
    {
      question: 'How does ipamorelin compare to direct GH injections?',
      answer: 'Ipamorelin stimulates your pituitary to release GH naturally, preserving pulsatile release patterns and negative feedback mechanisms. Direct GH injections bypass the pituitary entirely, can suppress natural production, and provide non-physiological flat-line GH levels. Ipamorelin produces more modest but more physiological GH elevation.',
    },
    {
      question: 'Why combine ipamorelin with CJC-1295?',
      answer: 'Ipamorelin (ghrelin mimetic) and CJC-1295 without DAC (GHRH analog) activate different receptors and intracellular signaling pathways on pituitary somatotroph cells. The combination produces synergistic GH release — peak levels 2–3-fold greater than either peptide alone — while maintaining the natural pulsatile release pattern.',
    },
    {
      question: 'Does ipamorelin increase hunger like GHRP-6?',
      answer: 'Ipamorelin causes significantly less hunger stimulation than GHRP-6. While it does activate the ghrelin receptor, its selectivity profile results in minimal appetite-related signaling at standard GH-releasing doses. Some users report a mild increase in appetite, but it is generally much more manageable than GHRP-6.',
    },
    {
      question: 'Is ipamorelin safe for long-term use?',
      answer: 'Long-term human safety data is limited since ipamorelin is not FDA-approved. Short-term clinical studies show a favorable tolerability profile with minimal hormonal side effects. The main theoretical concerns relate to prolonged GH/IGF-1 elevation, which could affect insulin sensitivity and theoretically promote growth of existing tumors.',
    },
  ],
};
