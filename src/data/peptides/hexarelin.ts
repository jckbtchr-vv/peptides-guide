import { Peptide } from '../types';

export const hexarelin: Peptide = {
  slug: 'hexarelin',
  name: 'Hexarelin',
  fullName: 'Hexarelin (Examorelin)',
  aliases: ['Examorelin', 'HEX'],
  sequence: 'His-D-2-MeTrp-Ala-Trp-D-Phe-Lys-NH₂',
  molecularWeight: '887.04 g/mol',
  class: 'Growth hormone secretagogue (ghrelin mimetic)',
  halfLife: '~70 minutes',
  administrationRoute: 'Subcutaneous injection',

  categories: ['body-composition'],
  primaryCategory: 'body-composition',
  status: 'research',
  regulatoryNote: 'Not FDA-approved. Investigated in clinical trials for GH deficiency and cardiac applications.',

  tldr: 'Produces the strongest acute GH release of any synthetic secretagogue, with unique cardioprotective effects via CD36 receptor activation. Limited by faster tolerance development requiring cycling.',

  overview:
    'Hexarelin is a synthetic hexapeptide growth hormone secretagogue and one of the strongest GH releasers in the GHRP class. It produces the most potent acute GH response of any synthetic secretagogue, even surpassing GHRP-2.\n\nHexarelin is notable for two characteristics: its exceptional GH-releasing potency and its significant cardioprotective properties. Research has identified direct cardiac effects independent of GH release, mediated through a distinct receptor (CD36) on cardiac tissue.\n\nThe primary limitation of Hexarelin is that tolerance develops relatively quickly — GH response diminishes with repeated daily use over 4-6 weeks, more so than with other GHRPs. This limits its use in long-term protocols.',

  mechanismOfAction:
    'Hexarelin activates the GHS-R1a receptor with high potency, stimulating strong GH pulses from the anterior pituitary. It simultaneously suppresses somatostatin, amplifying the GH response.\n\nUniquely among GHRPs, Hexarelin also binds to the CD36 scavenger receptor on cardiac myocytes. This binding activates cardioprotective signaling pathways including PPARγ activation, which reduces cardiac fibrosis, oxidative stress, and apoptosis in cardiac tissue.\n\nHexarelin elevates cortisol and prolactin more than Ipamorelin and comparable to GHRP-2, making it the least selective of the commonly discussed GHRPs in terms of side hormone effects.',

  researchSummary:
    'Clinical studies demonstrate Hexarelin produces the highest peak GH levels of any GHRP when administered acutely. Single-dose studies show GH elevations of 8-15 fold above baseline.\n\nCardiac research is the most distinctive area. Studies in animal models of cardiac ischemia show Hexarelin significantly reduces infarct size and improves post-ischemic cardiac function. A clinical study in GH-deficient adults showed improved cardiac parameters after 6 months of treatment.\n\nTolerance studies show that the GH response to Hexarelin diminishes by approximately 50% after 4-6 weeks of daily administration. This desensitization occurs faster than with GHRP-6 or GHRP-2 and is a significant limitation for chronic use.',

  citations: [
    {
      title: 'Hexarelin, a synthetic growth hormone-releasing peptide, exerts cardioprotective effects',
      authors: 'Bhatt DL, et al.',
      journal: 'Cardiovascular Research',
      year: 2001,
      summary: 'Demonstrated Hexarelin has direct cardioprotective effects mediated through CD36 receptor activation, independent of growth hormone release.',
    },
    {
      title: 'Desensitization of the GH response to hexarelin with repeated administration',
      authors: 'Rahim A, et al.',
      journal: 'Journal of Clinical Endocrinology & Metabolism',
      year: 1999,
      doi: '10.1210/jcem.84.6.5745',
      summary: 'Showed that repeated daily Hexarelin administration leads to significant GH response attenuation by 4-6 weeks, more pronounced than other GHRPs.',
    },
    {
      title: 'Chronic hexarelin administration improves cardiac performance in GH-deficient adults',
      authors: 'Bisi G, et al.',
      journal: 'European Journal of Endocrinology',
      year: 1999,
      doi: '10.1530/eje.0.1400029',
      summary: 'Six-month study showing Hexarelin improved cardiac function parameters in GH-deficient adults, supporting both GH-mediated and direct cardiac benefits.',
    },
  ],

  protocols: [
    {
      name: 'GH release (pulsatile)',
      route: 'Subcutaneous injection',
      typicalDose: '100–200 mcg',
      frequency: '1–2 times daily',
      cycleDuration: '4–6 weeks (then 2–4 week break)',
      notes: 'Due to faster desensitization, cycling is more important with Hexarelin than other GHRPs. Use for 4-6 weeks then take at least 2 weeks off.',
    },
  ],

  protocolDisclaimer:
    'Hexarelin is not approved for therapeutic use. These protocols are from research and community reports only. Consult a healthcare professional.',

  sideEffects: [
    { effect: 'Cortisol elevation', frequency: 'common', details: 'Significant transient cortisol increase, more than Ipamorelin or GHRP-6.' },
    { effect: 'Prolactin elevation', frequency: 'common', details: 'Notable prolactin increase post-injection.' },
    { effect: 'Water retention', frequency: 'common' },
    { effect: 'GH response desensitization', frequency: 'common', details: 'GH response diminishes ~50% after 4-6 weeks of daily use.' },
    { effect: 'Hunger increase', frequency: 'uncommon', details: 'Less pronounced than GHRP-6.' },
  ],

  contraindications: [
    'Active cancer or history of cancer',
    'Pregnancy or breastfeeding',
    'Diabetic retinopathy',
    'Conditions sensitive to cortisol or prolactin elevation',
  ],

  storage: {
    lyophilized: 'Refrigerated (2–8°C), stable for 12+ months',
    reconstituted: 'Refrigerated (2–8°C), use within 21 days',
    reconstitutionSolvent: 'Bacteriostatic water',
  },

  relatedPeptideSlugs: ['ghrp-6', 'ghrp-2', 'ipamorelin'],
  synergyNotes: 'Hexarelin produces the strongest acute GH release but develops tolerance fastest. Most users prefer Ipamorelin or GHRP-2 for sustained protocols and reserve Hexarelin for short cycles.',

  metaDescription: 'Hexarelin (Examorelin) is the most potent GHRP for GH release with unique cardioprotective effects via CD36. Mechanisms, tolerance, protocols, and safety.',

  faqItems: [
    {
      question: 'Is Hexarelin stronger than other GHRPs?',
      answer: 'Yes, Hexarelin produces the highest peak GH levels acutely of any synthetic GHRP. However, this comes at the cost of faster desensitization — GH response drops by about 50% after 4-6 weeks of daily use, requiring cycling.',
    },
    {
      question: 'Does Hexarelin protect the heart?',
      answer: 'Research shows Hexarelin has direct cardioprotective effects mediated through the CD36 receptor on cardiac cells, independent of GH release. Animal studies demonstrate reduced infarct size and improved post-ischemic cardiac function.',
    },
    {
      question: 'Why does Hexarelin require cycling?',
      answer: 'Hexarelin desensitizes the GHS-R1a receptor faster than other GHRPs. After 4-6 weeks of daily use, the GH response is approximately halved. A 2-4 week break allows receptor sensitivity to recover.',
    },
  ],
};
