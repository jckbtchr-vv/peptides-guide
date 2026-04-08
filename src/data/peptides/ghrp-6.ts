import { Peptide } from '../types';

export const ghrp6: Peptide = {
  slug: 'ghrp-6',
  name: 'GHRP-6',
  fullName: 'Growth Hormone Releasing Peptide-6',
  aliases: ['GHRP-6', 'Growth Hormone Releasing Hexapeptide', 'SKF-110679'],
  sequence: 'His-D-Trp-Ala-Trp-D-Phe-Lys-NH₂',
  molecularWeight: '873.01 g/mol',
  class: 'Growth hormone secretagogue (ghrelin mimetic)',
  halfLife: '15–60 minutes',
  administrationRoute: 'Subcutaneous injection',

  categories: ['body-composition'],
  primaryCategory: 'body-composition',
  status: 'research',
  regulatoryNote: 'Not FDA-approved for human use. Research compound only.',

  tldr: 'A potent GH secretagogue that produces strong growth hormone pulses and intense appetite stimulation through ghrelin receptor activation. Best combined with GHRH analogs for synergistic release.',

  overview:
    'GHRP-6 is a synthetic hexapeptide that stimulates growth hormone release by mimicking the action of ghrelin at the growth hormone secretagogue receptor (GHS-R1a). It was one of the first synthetic GH secretagogues developed and has been widely studied since the early 1990s.\n\nGHRP-6 is known for producing robust GH pulses and is notable for its strong appetite-stimulating effects — a feature that distinguishes it from more selective secretagogues like Ipamorelin. This hunger response is directly mediated through the ghrelin receptor.\n\nWhile effective at elevating GH and IGF-1 levels, GHRP-6 is considered less selective than newer peptides because it also increases cortisol and prolactin to a modest degree.',

  mechanismOfAction:
    'GHRP-6 binds to the growth hormone secretagogue receptor (GHS-R1a), the same receptor targeted by the endogenous hormone ghrelin. Activation of this receptor in the anterior pituitary stimulates GH release through a phospholipase C and IP3/DAG signaling cascade.\n\nUnlike GHRH analogs (e.g., CJC-1295), which amplify GH pulse amplitude, GHRP-6 initiates new GH pulses. When combined with GHRH analogs, the two pathways produce a synergistic GH release significantly greater than either alone.\n\nGHRP-6 also suppresses somatostatin, the hormone that inhibits GH release, further amplifying the GH response. Its activation of the ghrelin receptor in the hypothalamus and gut directly stimulates appetite through NPY/AgRP neuron activation.',

  researchSummary:
    'GHRP-6 has been studied in human clinical trials demonstrating reliable GH release. A study in healthy volunteers showed a 3-6 fold increase in GH levels within 15-30 minutes of subcutaneous administration.\n\nResearch on GH secretagogue combinations shows that GHRP-6 combined with GHRH produces a synergistic GH response approximately 10-fold greater than GHRP-6 alone. This synergy forms the basis for common combination protocols.\n\nCardioprotective research shows GHRP-6 has cytoprotective effects on cardiac tissue. Studies in ischemia-reperfusion models demonstrate reduced infarct size and improved cardiac function, mediated through a pathway independent of GH release.\n\nAnimal studies demonstrate improvements in body composition with chronic GHRP-6 administration, including increased lean mass and reduced adiposity, though these effects are primarily mediated through elevated GH/IGF-1.',

  citations: [
    {
      title: 'Growth hormone-releasing peptide-6 stimulates GH release in humans',
      authors: 'Bowers CY, et al.',
      journal: 'Journal of Clinical Endocrinology & Metabolism',
      year: 1990,
      doi: '10.1210/jcem-70-4-975',
      summary: 'Foundational study demonstrating GHRP-6 stimulates significant GH release in humans via subcutaneous and intravenous routes.',
    },
    {
      title: 'Synergistic interaction between GHRH and GHRP-6 on GH release in man',
      authors: 'Bowers CY, et al.',
      journal: 'Journal of Clinical Endocrinology & Metabolism',
      year: 1984,
      summary: 'Demonstrated the synergistic GH release when GHRP-6 is combined with GHRH, producing approximately 10x the GH response of either peptide alone.',
    },
    {
      title: 'Cardioprotective effect of growth hormone-releasing peptide 6 (GHRP-6) in the setting of myocardial ischemia-reperfusion',
      authors: 'Berlanga J, et al.',
      journal: 'Life Sciences',
      year: 2007,
      doi: '10.1016/j.lfs.2007.06.004',
      summary: 'Showed GHRP-6 has direct cardioprotective effects in ischemia-reperfusion injury, reducing infarct size through GH-independent mechanisms.',
    },
  ],

  protocols: [
    {
      name: 'GH release (standard)',
      route: 'Subcutaneous injection',
      typicalDose: '100–300 mcg',
      frequency: '2–3 times daily (pre-meals or pre-bed)',
      cycleDuration: '8–12 weeks',
      notes: 'Best administered on an empty stomach. GH release is blunted by food, especially carbohydrates and fats. Wait 20–30 min after injection before eating.',
    },
    {
      name: 'Combined with GHRH analog',
      route: 'Subcutaneous injection',
      typicalDose: '100 mcg GHRP-6 + 100 mcg CJC-1295 (no DAC)',
      frequency: '2–3 times daily',
      cycleDuration: '8–16 weeks',
      notes: 'Synergistic protocol. Administer both peptides simultaneously. The combination produces significantly greater GH release than either alone.',
    },
  ],

  protocolDisclaimer:
    'These protocols are from published research and community reports. GHRP-6 is not FDA-approved for human use. Consult a healthcare professional before use.',

  sideEffects: [
    { effect: 'Intense hunger', frequency: 'common', details: 'Strong appetite stimulation within 20 minutes of injection. Directly mediated by ghrelin receptor activation.' },
    { effect: 'Water retention', frequency: 'common', details: 'Mild fluid retention, particularly in hands and feet. Typically resolves over weeks.' },
    { effect: 'Cortisol elevation', frequency: 'uncommon', details: 'Modest, transient cortisol increase post-injection. Less selective than Ipamorelin.' },
    { effect: 'Injection site irritation', frequency: 'common' },
    { effect: 'Tingling or numbness', frequency: 'uncommon', details: 'Transient paresthesia in extremities shortly after injection.' },
  ],

  contraindications: [
    'Active cancer or history of cancer (GH/IGF-1 elevation)',
    'Pregnancy or breastfeeding',
    'Diabetic retinopathy (GH can worsen)',
    'Active pituitary tumors',
  ],

  storage: {
    lyophilized: 'Refrigerated (2–8°C), stable for 12–24 months',
    reconstituted: 'Refrigerated (2–8°C), use within 28 days',
    reconstitutionSolvent: 'Bacteriostatic water',
    reconstitutionNotes: 'Standard reconstitution: 2 mL BAC water into a 5 mg vial. Do not shake — swirl gently.',
  },

  relatedPeptideSlugs: ['ipamorelin', 'cjc-1295', 'ghrp-2'],
  synergyNotes: 'GHRP-6 is most effective when combined with a GHRH analog like CJC-1295 (no DAC). Ipamorelin is often preferred over GHRP-6 for those who want GH release without the intense hunger.',

  metaDescription: 'GHRP-6 is a growth hormone secretagogue that stimulates GH release via the ghrelin receptor. Mechanisms, research, protocols, appetite effects, and safety.',

  faqItems: [
    {
      question: 'What is GHRP-6 and how does it work?',
      answer: 'GHRP-6 is a synthetic peptide that mimics ghrelin to stimulate growth hormone release from the pituitary gland. It binds to the GHS-R1a receptor, initiating GH pulses and also strongly stimulating appetite.',
    },
    {
      question: 'Why does GHRP-6 make you hungry?',
      answer: 'GHRP-6 activates the same ghrelin receptor that controls hunger signaling. This directly stimulates appetite-promoting neurons (NPY/AgRP) in the hypothalamus, causing intense hunger within 20 minutes of injection.',
    },
    {
      question: 'What is the difference between GHRP-6 and Ipamorelin?',
      answer: 'Both stimulate GH release via the ghrelin receptor, but Ipamorelin is more selective — it produces minimal effects on cortisol, prolactin, and appetite. GHRP-6 causes stronger GH release but with significant hunger and modest cortisol/prolactin elevation.',
    },
    {
      question: 'Can GHRP-6 be combined with CJC-1295?',
      answer: 'Yes, this is the most common combination. GHRP-6 initiates GH pulses while CJC-1295 amplifies pulse amplitude. Together they produce a synergistic GH response roughly 10x greater than either peptide alone.',
    },
  ],
};
