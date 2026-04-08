import { Peptide } from '../types';

export const ahkCu: Peptide = {
  slug: 'ahk-cu',
  name: 'AHK-Cu',
  fullName: 'Copper Tripeptide AHK-Cu (Alanyl-Histidyl-Lysine Copper)',
  aliases: ['Copper tripeptide AHK', 'AHK copper complex'],
  sequence: 'Ala-His-Lys (with Cu²⁺ ion)',
  molecularWeight: '~403 g/mol',
  class: 'Copper-binding tripeptide',
  halfLife: 'Topical — localized effect',
  administrationRoute: 'Topical',

  categories: ['skin-hair'],
  primaryCategory: 'skin-hair',
  status: 'research',
  regulatoryNote: 'Cosmetic research compound. Not FDA-regulated. Less studied than GHK-Cu.',

  overview:
    'AHK-Cu is a copper-binding tripeptide structurally related to GHK-Cu but with a distinct amino acid sequence. While GHK-Cu (Gly-His-Lys) is the most studied copper peptide, AHK-Cu (Ala-His-Lys) has emerged as a peptide with particularly strong effects on hair follicle stimulation.\n\nResearch suggests AHK-Cu may be more potent than GHK-Cu specifically for hair growth stimulation, while GHK-Cu has a broader range of anti-aging and wound-healing applications. AHK-Cu appears to stimulate hair follicle proliferation and increase follicle size more effectively.\n\nAHK-Cu is primarily found in hair growth formulations and scalp treatments. It delivers copper ions to hair follicle cells, supporting the copper-dependent enzymes critical for hair shaft formation and melanin production.',

  mechanismOfAction:
    'AHK-Cu, like GHK-Cu, delivers copper(II) ions to cells through high-affinity copper binding. The copper ion serves as a cofactor for enzymes critical to hair biology, including lysyl oxidase (collagen and elastin cross-linking), tyrosinase (melanin production), and superoxide dismutase (antioxidant defense).\n\nResearch indicates AHK-Cu stimulates proliferation of dermal papilla cells — the specialized cells at the base of hair follicles that regulate hair growth cycling. It appears to prolong the anagen (growth) phase and may activate dormant follicles.\n\nThe peptide also upregulates VEGF expression in follicular tissue, promoting blood supply to hair follicles. Improved follicular vascularization supports nutrient delivery and waste removal, contributing to healthier hair growth.',

  researchSummary:
    'A comparative study of copper peptides on hair follicle biology found AHK-Cu stimulated greater proliferation of human hair follicle cells in culture compared to GHK-Cu at equivalent concentrations.\n\nIn vitro studies show AHK-Cu increases the size of hair follicles in organ culture models, consistent with anagen phase prolongation. The peptide also stimulated gene expression associated with hair growth, including β-catenin signaling pathway components.\n\nThe evidence base for AHK-Cu is considerably smaller than for GHK-Cu. Most published data comes from in vitro and organ culture studies. No large-scale clinical trials of AHK-Cu for hair loss have been published.\n\nCopper peptides in general have demonstrated efficacy for wound healing and skin repair, with the copper ion being essential for tissue remodeling enzymes. AHK-Cu shares this property with GHK-Cu.',

  citations: [
    {
      title: 'Copper peptide AHK-Cu stimulates human hair follicle cell proliferation',
      authors: 'Pyo HK, et al.',
      journal: 'Annals of Dermatology',
      year: 2007,
      summary: 'Comparative study showing AHK-Cu stimulates greater hair follicle cell proliferation than GHK-Cu, with increased follicle size in organ culture.',
    },
    {
      title: 'The role of copper in hair biology and pathology',
      authors: 'Kil MS, et al.',
      journal: 'Annals of Dermatology',
      year: 2013,
      doi: '10.5021/ad.2013.25.2.138',
      summary: 'Review of copper\'s role in hair biology, including copper-dependent enzymes (lysyl oxidase, tyrosinase) and the relevance of copper delivery peptides.',
    },
    {
      title: 'Copper peptides and their role in skin and hair regeneration',
      authors: 'Pickart L.',
      journal: 'Cosmetics',
      year: 2018,
      summary: 'Overview of copper peptide applications in cosmetics, covering both GHK-Cu and AHK-Cu for skin repair and hair growth stimulation.',
    },
  ],

  protocols: [
    {
      name: 'Hair growth (topical)',
      route: 'Topical application to scalp',
      typicalDose: '0.1–0.5% concentration in serum',
      frequency: 'Once daily',
      cycleDuration: '3–6 months for visible results',
      notes: 'Apply directly to areas of thinning. Massage into scalp. Can be combined with minoxidil (applied at different times of day). Results are gradual — expect 3-6 months for noticeable improvement.',
    },
  ],

  protocolDisclaimer:
    'AHK-Cu is a cosmetic research ingredient. No FDA-approved claims for hair growth. Results vary. These recommendations are based on available research data.',

  sideEffects: [
    { effect: 'Scalp irritation', frequency: 'uncommon', details: 'Mild tingling or redness at application site. Usually transient.' },
    { effect: 'Allergic reaction', frequency: 'rare', details: 'Uncommon. Patch test before widespread use if you have sensitive skin.' },
  ],

  contraindications: [
    'Wilson\'s disease or copper metabolism disorders',
    'Known allergy to copper compounds',
  ],

  storage: {
    lyophilized: 'Refrigerated (2–8°C) if in raw powder form',
    reconstituted: 'N/A for topical products',
    reconstitutionSolvent: 'N/A',
    reconstitutionNotes: 'Topical formulations should be stored in a cool, dark place. Copper peptide solutions may have a faint blue tint from the copper ion.',
  },

  relatedPeptideSlugs: ['ghk-cu', 'matrixyl'],
  synergyNotes: 'AHK-Cu is the copper peptide of choice specifically for hair growth, while GHK-Cu has broader anti-aging applications. They can be used together — AHK-Cu on the scalp, GHK-Cu systemically or on the face.',

  metaDescription: 'AHK-Cu is a copper tripeptide with strong hair follicle stimulating properties. Comparison to GHK-Cu, hair growth mechanisms, and topical application guidance.',

  faqItems: [
    {
      question: 'What is the difference between AHK-Cu and GHK-Cu?',
      answer: 'Both are copper-binding tripeptides but with different amino acid sequences. Research suggests AHK-Cu is more potent specifically for hair follicle stimulation, while GHK-Cu has broader anti-aging, wound healing, and gene expression effects across multiple tissue types.',
    },
    {
      question: 'Can AHK-Cu regrow hair?',
      answer: 'In vitro research shows AHK-Cu stimulates hair follicle cell proliferation and increases follicle size. However, no large-scale human clinical trials have been published. Results for hair regrowth are likely modest and gradual, typically requiring 3-6 months of consistent use.',
    },
    {
      question: 'Can AHK-Cu be used with minoxidil?',
      answer: 'Yes. AHK-Cu and minoxidil work through different mechanisms (copper peptide signaling vs. potassium channel opening/vasodilation). They can be applied at different times of day for a multi-pathway approach to hair growth.',
    },
  ],
};
