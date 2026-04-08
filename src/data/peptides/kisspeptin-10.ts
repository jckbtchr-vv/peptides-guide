import { Peptide } from '../types';

export const kisspeptin10: Peptide = {
  slug: 'kisspeptin-10',
  name: 'Kisspeptin-10',
  fullName: 'Kisspeptin-10 (Metastin 45-54)',
  aliases: ['KP-10', 'Metastin fragment', 'Kisspeptin decapeptide'],
  sequence: 'Tyr-Asn-Trp-Asn-Ser-Phe-Gly-Leu-Arg-Phe-NH₂',
  molecularWeight: '1302.45 g/mol',
  class: 'Neuropeptide (GnRH stimulator)',
  halfLife: '~4 minutes (rapid degradation in plasma)',
  administrationRoute: 'Intravenous infusion, subcutaneous injection',

  categories: ['sexual-health'],
  primaryCategory: 'sexual-health',
  status: 'clinical-trials',
  regulatoryNote: 'Not FDA-approved. Currently in clinical trials for reproductive medicine and sexual health applications.',

  overview:
    'Kisspeptin-10 is a 10-amino-acid fragment of the 54-amino-acid neuropeptide kisspeptin (metastin). Kisspeptins are the endogenous ligands of the GPR54 receptor (KISS1R) and are the master regulators of the hypothalamic-pituitary-gonadal (HPG) axis.\n\nKisspeptin signaling is essential for puberty onset, reproductive hormone release, and fertility. It acts upstream of GnRH (gonadotropin-releasing hormone) — it is the signal that tells the hypothalamus to release GnRH, which then triggers LH and FSH release from the pituitary.\n\nRecent research has revealed kisspeptin also plays a role in sexual arousal and attraction behavior, independent of its reproductive hormone effects. Brain imaging studies show kisspeptin enhances activity in brain regions associated with sexual processing and romantic attraction.',

  mechanismOfAction:
    'Kisspeptin-10 activates the KISS1R receptor (GPR54) on GnRH neurons in the hypothalamus. This triggers GnRH release into the hypophyseal portal system, which stimulates the anterior pituitary to secrete luteinizing hormone (LH) and follicle-stimulating hormone (FSH).\n\nLH and FSH then act on the gonads to stimulate testosterone production (in males) and estrogen/progesterone production plus ovulation (in females). This makes kisspeptin a physiological "upstream switch" for the entire reproductive hormone cascade.\n\nBrain imaging research using fMRI shows kisspeptin administration enhances activity in the medial preoptic area, anterior cingulate cortex, and other limbic structures associated with sexual arousal, emotional bonding, and reward processing — independent of its hormonal effects.',

  researchSummary:
    'Clinical trials at Imperial College London and other centers have demonstrated kisspeptin\'s effects on both reproductive hormones and sexual behavior in humans.\n\nIn healthy men, intravenous kisspeptin-54 infusion increased LH levels by 3-fold and testosterone by 1.5-fold. Kisspeptin-10, the shorter fragment, produces similar but more transient effects due to its shorter half-life.\n\nfMRI studies by Dhillo et al. showed kisspeptin enhanced brain activity in sexual processing regions when viewing attractive faces and sexual images. Participants reported enhanced sexual arousal and more positive mood during kisspeptin infusion.\n\nIn women with hypothalamic amenorrhea (absent periods due to stress/low weight), kisspeptin infusion restored LH pulsatility, suggesting therapeutic potential for functional hypothalamic disorders.\n\nKisspeptin differs from PT-141 in mechanism: PT-141 acts on melanocortin receptors in the brain, while kisspeptin acts on GnRH neurons and limbic circuits. They target different pathways to influence sexual function.',

  citations: [
    {
      title: 'Kisspeptin enhances brain responses to olfactory and visual cues of attraction in men',
      authors: 'Comninos AN, et al.',
      journal: 'JCI Insight',
      year: 2017,
      doi: '10.1172/jci.insight.93999',
      summary: 'fMRI study showing kisspeptin enhances brain activity in sexual and emotional processing regions in healthy men, independent of hormonal changes.',
    },
    {
      title: 'Kisspeptin-54 triggers egg maturation in women undergoing in vitro fertilization',
      authors: 'Abbara A, et al.',
      journal: 'Journal of Clinical Investigation',
      year: 2015,
      doi: '10.1172/JCI75730',
      summary: 'Clinical trial using kisspeptin as a safer alternative to hCG trigger for oocyte maturation in IVF, with reduced risk of ovarian hyperstimulation syndrome.',
    },
    {
      title: 'Kisspeptin stimulates LH secretion in humans with a mechanism distinct from GnRH',
      authors: 'Dhillo WS, et al.',
      journal: 'Journal of Clinical Endocrinology & Metabolism',
      year: 2005,
      doi: '10.1210/jc.2005-1468',
      summary: 'First demonstration in humans that kisspeptin stimulates LH and FSH release, confirming its role as the upstream regulator of the HPG axis.',
    },
  ],

  protocols: [
    {
      name: 'Research / clinical setting',
      route: 'Intravenous infusion',
      typicalDose: '1–10 nmol/kg',
      frequency: 'Single dose or short infusion protocols',
      cycleDuration: 'Research protocols only',
      notes: 'Clinical trials use IV infusion for precise dosing. Due to the very short half-life (~4 minutes for KP-10), IV is preferred over subcutaneous injection in research settings.',
    },
    {
      name: 'Subcutaneous (exploratory)',
      route: 'Subcutaneous injection',
      typicalDose: '100–500 mcg',
      frequency: 'Variable — research protocols only',
      notes: 'Subcutaneous use is less studied. The short half-life means effects are transient. Kisspeptin-54 has a longer half-life than kisspeptin-10 and may be preferred for subcutaneous use.',
    },
  ],

  protocolDisclaimer:
    'Kisspeptin is an investigational compound in clinical trials. It is not approved for clinical use. These protocols reflect published research only. Consult a healthcare professional.',

  sideEffects: [
    { effect: 'Flushing', frequency: 'common', details: 'Warmth and facial flushing shortly after administration. Transient.' },
    { effect: 'Elevated heart rate', frequency: 'uncommon', details: 'Mild, transient tachycardia reported in some studies.' },
    { effect: 'Headache', frequency: 'uncommon' },
    { effect: 'Abdominal discomfort', frequency: 'rare' },
  ],

  contraindications: [
    'Hormone-sensitive cancers (kisspeptin elevates sex hormones)',
    'Pregnancy (disruption of normal reproductive hormone signaling)',
    'Pituitary disorders',
  ],

  storage: {
    lyophilized: 'Refrigerated (2–8°C) or frozen (-20°C), stable for 12+ months',
    reconstituted: 'Refrigerated (2–8°C), use within 14 days',
    reconstitutionSolvent: 'Sterile saline or bacteriostatic water',
    reconstitutionNotes: 'Kisspeptin-10 degrades rapidly in solution. Reconstitute shortly before use. Kisspeptin-54 is somewhat more stable.',
  },

  relatedPeptideSlugs: ['pt-141'],
  synergyNotes: 'Kisspeptin and PT-141 act through entirely different mechanisms — kisspeptin on GnRH/limbic circuits, PT-141 on melanocortin receptors. They represent complementary approaches to sexual health but have not been studied in combination.',

  metaDescription: 'Kisspeptin-10 is a neuropeptide that regulates GnRH release and enhances sexual arousal via brain limbic circuits. Clinical trials, mechanisms, and reproductive research.',

  faqItems: [
    {
      question: 'What is kisspeptin and why is it important?',
      answer: 'Kisspeptin is the master regulator of reproductive hormones. It tells the hypothalamus to release GnRH, which triggers LH and FSH release, which drives testosterone and estrogen production. It is essential for puberty, fertility, and sexual function.',
    },
    {
      question: 'How is kisspeptin different from PT-141?',
      answer: 'They target different pathways. PT-141 activates melanocortin receptors (MC3R/MC4R) in the brain to enhance sexual desire. Kisspeptin stimulates GnRH neurons and limbic brain circuits involved in sexual arousal and attraction. PT-141 is FDA-approved; kisspeptin is still in clinical trials.',
    },
    {
      question: 'Can kisspeptin increase testosterone?',
      answer: 'Yes. Kisspeptin stimulates the HPG axis, increasing LH release, which directly stimulates testicular testosterone production. Clinical studies show a 1.5-fold testosterone increase with kisspeptin infusion. However, the effect is transient due to the short half-life.',
    },
  ],
};
