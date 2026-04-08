import { Peptide } from '../types';

export const cjc1295: Peptide = {
  slug: 'cjc-1295',
  name: 'CJC-1295',
  fullName: 'CJC-1295 (Modified GHRH Analog)',
  aliases: ['CJC-1295 DAC', 'CJC-1295 no DAC', 'Mod GRF 1-29', 'Drug Affinity Complex GHRH'],
  sequence: 'Tyr-D-Ala-Asp-Ala-Ile-Phe-Thr-Gln-Ser-Tyr-Arg-Lys-Val-Leu-Ala-Gln-Leu-Ser-Ala-Arg-Lys-Leu-Leu-Gln-Asp-Ile-Leu-Ser-Arg-NH2',
  molecularWeight: '3367.9 g/mol (without DAC)',
  class: 'Growth hormone-releasing hormone (GHRH) analog',
  halfLife: '~30 minutes (no DAC / Mod GRF 1-29); ~6–8 days (with DAC)',
  administrationRoute: 'Subcutaneous injection',

  categories: ['body-composition'],
  primaryCategory: 'body-composition',
  status: 'research',
  regulatoryNote: 'Not FDA-approved for human use. CJC-1295 is a research compound. It is not available by prescription and is not approved for any clinical indication.',

  overview:
    'CJC-1295 is a synthetic analog of growth hormone-releasing hormone (GHRH) composed of the first 29 amino acids of GHRH (known as GRF 1-29) with four amino acid substitutions that dramatically improve metabolic stability and resistance to enzymatic degradation.\n\nCJC-1295 exists in two primary forms. The version with Drug Affinity Complex (DAC) covalently binds to serum albumin after injection, extending its half-life to approximately 6–8 days and producing sustained, continuous GH elevation. The version without DAC, often called Modified GRF 1-29 or Mod GRF 1-29, has a half-life of approximately 30 minutes and produces acute GH pulses more similar to natural physiology.\n\nThe distinction between these two forms is critically important. CJC-1295 with DAC creates a sustained GH elevation that blunts pulsatility, while CJC-1295 without DAC (Mod GRF 1-29) is typically combined with a GH secretagogue like ipamorelin to produce amplified but still pulsatile GH release — which is considered more physiological.',

  mechanismOfAction:
    'CJC-1295 acts as an agonist at the GHRH receptor (GHRHR) on anterior pituitary somatotroph cells. Receptor activation stimulates adenylyl cyclase, increasing intracellular cAMP, which activates protein kinase A (PKA). PKA phosphorylation cascades lead to both immediate GH release from stored granules and upregulated GH gene transcription for ongoing production.\n\nThe four amino acid substitutions (Ala2, Gln8, Ala15, Leu27) confer resistance to dipeptidyl peptidase-IV (DPP-IV) cleavage and other proteolytic enzymes that rapidly degrade native GHRH, extending the functional half-life from under 7 minutes (native GHRH) to approximately 30 minutes.\n\nIn the DAC variant, a maleimidopropionic acid linker reacts with a lysine residue on serum albumin after subcutaneous injection. This albumin conjugation further extends the half-life to approximately 6–8 days, creating sustained GHRH receptor activation and continuous GH secretion.\n\nThe resulting GH elevation stimulates hepatic IGF-1 production, which mediates many downstream effects including anabolic activity in muscle, lipolysis in adipose tissue, and connective tissue repair. CJC-1295 also preserves the GH-somatostatin feedback axis, unlike exogenous GH.',

  researchSummary:
    'Clinical pharmacology studies have characterized CJC-1295\'s GH-releasing effects in healthy humans. A dose-escalation study by Teichman et al. demonstrated that a single subcutaneous injection of CJC-1295 DAC (60–90 mcg/kg) produced sustained 2–10-fold elevations in mean GH levels and 1.5–3-fold elevations in IGF-1 that persisted for 6–14 days.\n\nMultiple weekly doses (30–60 mcg/kg) increased mean GH and IGF-1 levels by 2-fold after the first dose, with further amplification to 3-fold after the fourth weekly injection, suggesting an accumulative effect.\n\nResearch on Mod GRF 1-29 (CJC-1295 without DAC) shows acute GH release with peak levels occurring approximately 30–60 minutes post-injection. When combined with ghrelin receptor agonists like ipamorelin, a synergistic amplification of GH release has been observed — the combination produces greater GH output than either peptide alone.\n\nLimitations: No Phase III trials have been conducted. Long-term safety data beyond 12 weeks of repeated dosing is limited. The DAC variant in particular raises theoretical concerns about blunting GH pulsatility, which is important for maintaining receptor sensitivity and physiological signaling patterns.',

  citations: [
    {
      title: 'Prolonged stimulation of growth hormone (GH) and insulin-like growth factor I secretion by CJC-1295, a long-acting analog of GH-releasing hormone, in healthy adults',
      authors: 'Teichman SL, et al.',
      journal: 'Journal of Clinical Endocrinology & Metabolism',
      year: 2006,
      doi: '10.1210/jc.2005-1536',
      summary: 'Key pharmacokinetic/pharmacodynamic study demonstrating sustained GH and IGF-1 elevation for up to 14 days following a single CJC-1295 DAC injection in healthy adults.',
    },
    {
      title: 'Design of a modified GRF(1-29) analog with enhanced binding and potency at the GHRH receptor',
      authors: 'Jette L, et al.',
      journal: 'Peptides',
      year: 2005,
      doi: '10.1016/j.peptides.2004.12.023',
      summary: 'Describes the rational design and in vitro characterization of the four amino acid substitutions that confer enhanced stability and receptor binding in CJC-1295.',
    },
    {
      title: 'Growth hormone-releasing hormone analog improves body composition and IGF-1 in obese adults',
      authors: 'Ionescu M, Bhatt DL, et al.',
      journal: 'Growth Hormone & IGF Research',
      year: 2006,
      doi: '10.1016/j.ghir.2006.04.001',
      summary: 'Study demonstrating improvements in body composition including reduced trunk fat and increased lean mass with GHRH analog administration in obese subjects.',
    },
    {
      title: 'Synergistic effects of GHRH and GHRP on GH release in humans',
      authors: 'Bowers CY, et al.',
      journal: 'Journal of Clinical Endocrinology & Metabolism',
      year: 1990,
      doi: '10.1210/jcem-70-4-975',
      summary: 'Foundational study demonstrating synergistic amplification of GH release when GHRH and ghrelin-mimetic secretagogues are co-administered, forming the basis for CJC-1295/ipamorelin combination protocols.',
    },
  ],

  protocols: [
    {
      name: 'CJC-1295 with DAC (sustained release)',
      route: 'Subcutaneous injection',
      typicalDose: '1–2 mg per week',
      frequency: 'Once or twice weekly',
      cycleDuration: '8–12 weeks on, 4 weeks off',
      notes: 'The DAC variant provides sustained GH elevation. Due to the long half-life, once or twice weekly dosing is sufficient. Some practitioners prefer this variant for simplicity. May blunt GH pulsatility compared to the non-DAC version.',
    },
    {
      name: 'CJC-1295 without DAC / Mod GRF 1-29 (with ipamorelin)',
      route: 'Subcutaneous injection',
      typicalDose: '100 mcg CJC-1295 no DAC + 100–200 mcg ipamorelin',
      frequency: '1–3 times daily (commonly before bed and/or upon waking)',
      cycleDuration: '8–12 weeks on, 4 weeks off',
      notes: 'The preferred research-based combination. Administer on an empty stomach (no food 1 hour before or 30 minutes after). Pre-bedtime dosing aligns with natural GH pulse during early sleep. The combination produces synergistic GH release while maintaining pulsatility.',
    },
    {
      name: 'Mod GRF 1-29 saturation dose protocol',
      route: 'Subcutaneous injection',
      typicalDose: '100 mcg (1 mcg/kg is the approximate saturation dose)',
      frequency: '2–3 times daily',
      cycleDuration: '8–12 weeks',
      notes: 'Based on the principle that GHRH receptor saturation occurs at approximately 1 mcg/kg. Higher doses do not proportionally increase GH release. Timing around exercise and sleep may optimize response.',
    },
  ],

  protocolDisclaimer:
    'CJC-1295 is not FDA-approved for human use. These protocols are based on published pharmacological research and community experience. They do not constitute medical advice. Consult a qualified healthcare professional.',

  sideEffects: [
    { effect: 'Injection site reactions', frequency: 'common', details: 'Redness, swelling, or irritation at the injection site. More common with the DAC variant.' },
    { effect: 'Facial flushing', frequency: 'common', details: 'Warmth and flushing of the face shortly after injection. Typically resolves within 15–30 minutes. Related to vasodilatory effects.' },
    { effect: 'Head rush or dizziness', frequency: 'uncommon', details: 'Transient lightheadedness reported shortly after injection. Usually self-limiting.' },
    { effect: 'Water retention', frequency: 'uncommon', details: 'Mild peripheral edema or bloating due to GH-mediated sodium and water retention. More common with higher doses and DAC variant.' },
    { effect: 'Tingling or numbness in extremities', frequency: 'uncommon', details: 'Paresthesia related to GH elevation. Can indicate carpal tunnel-like effects at higher doses.' },
    { effect: 'Increased hunger', frequency: 'uncommon', details: 'GH can stimulate appetite. More pronounced with consistent use.' },
  ],

  contraindications: [
    'Active malignancy or history of cancer (GH/IGF-1 may promote tumor growth)',
    'Pregnancy or breastfeeding',
    'Active pituitary tumor or other conditions affecting the hypothalamic-pituitary axis',
    'Uncontrolled diabetes (GH elevates blood glucose)',
  ],

  interactions: [
    'May antagonize insulin and oral hypoglycemics through GH-mediated insulin resistance',
    'Glucocorticoids may blunt GH release response',
    'Synergistic GH release when combined with ghrelin mimetics (ipamorelin, GHRP-6, GHRP-2)',
    'Somatostatin analogs (octreotide) will directly antagonize its effects',
  ],

  storage: {
    lyophilized: 'Refrigerated (2–8°C), stable for up to 24 months. Can be stored at room temperature for short periods during shipping.',
    reconstituted: 'Refrigerated (2–8°C), use within 21–28 days',
    reconstitutionSolvent: 'Bacteriostatic water (BAC water)',
    reconstitutionNotes: 'Add BAC water slowly down the side of the vial. Do not shake — swirl gently until dissolved. Standard reconstitution: 2 mL BAC water into a 2 mg vial yields 1,000 mcg/mL (100 mcg per 0.1 mL / 10 units on an insulin syringe).',
  },

  relatedPeptideSlugs: ['ipamorelin', 'tesamorelin', 'ghrp-6'],
  synergyNotes: 'CJC-1295 without DAC (Mod GRF 1-29) is most commonly combined with ipamorelin, forming one of the most widely used GH-stimulating peptide stacks. The GHRH analog (CJC-1295) amplifies the GH pulse initiated by the ghrelin mimetic (ipamorelin), producing synergistic release greater than either alone.',

  metaDescription: 'CJC-1295 is a GHRH analog researched for GH stimulation, body composition, and IGF-1 elevation. DAC vs no DAC variants, protocols, and safety data.',

  faqItems: [
    {
      question: 'What is the difference between CJC-1295 with DAC and without DAC?',
      answer: 'CJC-1295 with DAC (Drug Affinity Complex) binds to albumin, extending its half-life to 6–8 days and producing sustained GH elevation. CJC-1295 without DAC (also called Mod GRF 1-29) has a 30-minute half-life and produces acute GH pulses. The no-DAC version is preferred for maintaining natural GH pulsatility and is typically combined with ipamorelin.',
    },
    {
      question: 'Why is CJC-1295 combined with ipamorelin?',
      answer: 'CJC-1295 (GHRH analog) and ipamorelin (ghrelin mimetic) work through different but complementary receptors on pituitary somatotroph cells. GHRH amplifies the magnitude of GH pulses while ghrelin mimetics initiate pulse release. Together they produce synergistic GH output significantly greater than either peptide alone.',
    },
    {
      question: 'How much does CJC-1295 increase growth hormone levels?',
      answer: 'Clinical studies show CJC-1295 DAC can increase mean GH levels 2–10-fold and IGF-1 levels 1.5–3-fold, with effects lasting 6–14 days after a single injection. Repeated weekly dosing shows accumulative effects, with GH/IGF-1 levels approximately 3-fold elevated after 4 weekly doses.',
    },
    {
      question: 'Is CJC-1295 FDA-approved?',
      answer: 'No. CJC-1295 is not FDA-approved for any indication. It remains a research compound. While pharmacological studies have been published in peer-reviewed journals, no Phase III clinical trials have been completed to support regulatory approval.',
    },
    {
      question: 'When is the best time to take CJC-1295 without DAC?',
      answer: 'The most common protocol involves dosing before bedtime on an empty stomach to coincide with the natural nocturnal GH pulse. Some protocols add a morning dose upon waking. Food — particularly carbohydrates and fats — can blunt GH release, so dosing is recommended at least 1 hour after eating.',
    },
  ],
};
