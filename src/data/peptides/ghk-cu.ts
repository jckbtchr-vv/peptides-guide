import { Peptide } from '../types';

export const ghkCu: Peptide = {
  slug: 'ghk-cu',
  name: 'GHK-Cu',
  fullName: 'Copper Peptide GHK-Cu (Glycyl-L-Histidyl-L-Lysine Copper)',
  aliases: ['Copper tripeptide-1', 'GHK copper complex', 'Lamin'],
  sequence: 'Gly-His-Lys (with Cu²⁺ ion)',
  molecularWeight: '403.93 g/mol',
  class: 'Copper-binding tripeptide',
  halfLife: 'Estimated 1–2 hours (plasma)',
  administrationRoute: 'Subcutaneous injection, topical',

  categories: ['longevity', 'skin-hair', 'healing-recovery'],
  primaryCategory: 'longevity',
  status: 'research',
  regulatoryNote: 'Not FDA-approved as a drug. Widely used in cosmetic formulations. Injection use is off-label/research.',

  overview:
    'GHK-Cu is a naturally occurring copper-binding tripeptide first identified in human plasma in 1973 by Dr. Loren Pickart. Plasma levels of GHK-Cu decline significantly with age — from approximately 200 ng/mL at age 20 to 80 ng/mL by age 60.\n\nThis peptide has attracted significant research interest for its broad biological activities including wound healing, tissue remodeling, anti-inflammatory effects, and gene expression modulation. GHK-Cu has been shown to affect the activity of over 4,000 genes, resetting gene expression patterns toward a healthier state.\n\nIn cosmetic applications, GHK-Cu is one of the most well-validated peptides for skin rejuvenation, with demonstrated effects on collagen synthesis, elastin production, and antioxidant enzyme expression.',

  mechanismOfAction:
    'GHK-Cu operates through multiple mechanisms centered on copper delivery and gene expression modulation. The tripeptide binds copper(II) ions with high affinity and facilitates copper transport to cells, where copper serves as a cofactor for essential enzymes including superoxide dismutase, lysyl oxidase, and cytochrome c oxidase.\n\nGene expression studies using the Broad Institute Connectivity Map revealed that GHK-Cu modulates expression of 31.2% of human genes, with significant effects on genes involved in tissue remodeling (increased TGF-β superfamily signaling), antioxidant defense (upregulation of SOD, catalase), DNA repair, apoptosis, and the ubiquitin-proteasome system.\n\nGHK-Cu stimulates collagen synthesis (types I and III), decorin production, and glycosaminoglycan accumulation. It increases expression of matrix metalloproteinases and their inhibitors (TIMPs), suggesting a balanced tissue remodeling effect rather than simple stimulation.\n\nThe peptide also activates mesenchymal stem cell recruitment and promotes angiogenesis through VEGF upregulation, supporting tissue repair and regeneration.',

  researchSummary:
    'GHK-Cu has been studied extensively in both in vitro and in vivo models. Wound healing studies demonstrate accelerated closure rates, increased angiogenesis, and improved tensile strength of healed tissue. Studies in aged mice show improved wound healing comparable to young animals.\n\nSkin studies demonstrate increased collagen synthesis (by up to 70% in some models), improved skin elasticity, reduced fine lines, and enhanced skin density. A controlled study showed GHK-Cu cream improved skin laxity, clarity, and appearance more effectively than vitamin C and retinoic acid creams.\n\nLongevity-relevant research focuses on gene expression. Connectivity Map analysis showed GHK-Cu suppresses genes associated with metastasis, fibrinogen synthesis, and oxidative stress, while activating genes for tissue repair, antioxidant enzymes, and the proteasome system.\n\nAnti-inflammatory research demonstrates suppression of acute inflammation markers. GHK-Cu reduces IL-6, TNF-α, and insulin-like signals in damaged tissue. Hair growth studies show stimulation of hair follicle proliferation and increased hair follicle size.',

  citations: [
    {
      title: 'GHK Peptide as a Natural Modulator of Multiple Cellular Pathways in Skin Regeneration',
      authors: 'Pickart L, Vasquez-Soltero JM, Margolina A.',
      journal: 'BioMed Research International',
      year: 2015,
      doi: '10.1155/2015/648108',
      summary: 'Comprehensive review of GHK-Cu\'s effects on skin regeneration including collagen synthesis, antioxidant enzyme activation, and gene expression modulation affecting over 4,000 genes.',
    },
    {
      title: 'GHK-Cu may prevent oxidative stress in skin by regulating copper and modifying expression of numerous antioxidant genes',
      authors: 'Pickart L, Vasquez-Soltero JM, Margolina A.',
      journal: 'Cosmetics',
      year: 2015,
      doi: '10.3390/cosmetics2030236',
      summary: 'Demonstrated GHK-Cu upregulates key antioxidant genes including superoxide dismutase (SOD1, SOD3), catalase, and glutathione-related enzymes.',
    },
    {
      title: 'Tripeptide-copper complex, a human wound healing factor',
      authors: 'Pickart L.',
      journal: 'Journal of Biomaterials Science, Polymer Edition',
      year: 2008,
      doi: '10.1163/156856208784909435',
      summary: 'Foundational research on GHK-Cu\'s wound healing properties, demonstrating accelerated closure, increased angiogenesis, and improved healing quality.',
    },
    {
      title: 'The effect of the tripeptide-copper complex glycyl-L-histidyl-L-lysine on hair growth',
      authors: 'Pyo HK, et al.',
      journal: 'Annals of Dermatology',
      year: 2007,
      summary: 'Showed GHK-Cu stimulated hair follicle growth in culture, increased follicle size, and prolonged the growth phase (anagen) of the hair cycle.',
    },
  ],

  protocols: [
    {
      name: 'Anti-aging / systemic (injection)',
      route: 'Subcutaneous injection',
      typicalDose: '1–2 mg',
      frequency: 'Once daily',
      cycleDuration: '4–8 weeks, with breaks',
      notes: 'Often used in 4-week-on, 2-week-off cycles. Some protocols use 2–3 mg daily for the first week, then reduce to 1 mg maintenance.',
    },
    {
      name: 'Topical (skin rejuvenation)',
      route: 'Topical application',
      typicalDose: '0.1–1% concentration in serum or cream',
      frequency: '1–2 times daily',
      cycleDuration: 'Ongoing',
      notes: 'Apply to clean skin. Available in numerous commercial skincare products. Most studied concentration range for efficacy is 0.01–1%.',
    },
    {
      name: 'Hair growth (topical)',
      route: 'Topical application to scalp',
      typicalDose: '0.1–0.5% concentration',
      frequency: 'Once daily',
      cycleDuration: '3–6 months for visible results',
      notes: 'Apply directly to areas of thinning. Can be combined with other hair growth treatments.',
    },
  ],

  protocolDisclaimer:
    'Injectable GHK-Cu is not FDA-approved for any indication. Topical use in cosmetics is widespread but unregulated for therapeutic claims. These protocols are compiled from research and community reports, not medical recommendations.',

  sideEffects: [
    { effect: 'Injection site irritation', frequency: 'common', details: 'Redness and mild swelling at injection site. Usually resolves within hours.' },
    { effect: 'Skin sensitivity (topical)', frequency: 'uncommon', details: 'Some individuals experience temporary redness or tingling with topical application.' },
    { effect: 'Headache', frequency: 'uncommon' },
    { effect: 'Nausea', frequency: 'rare', details: 'Occasionally reported with injectable use.' },
  ],

  contraindications: [
    'Wilson\'s disease or other copper metabolism disorders',
    'Known hypersensitivity to copper compounds',
    'Active cancer (theoretical concern due to growth factor stimulation)',
    'Pregnancy or breastfeeding',
  ],

  storage: {
    lyophilized: 'Refrigerated (2–8°C), stable for 12–24 months. Protect from light.',
    reconstituted: 'Refrigerated (2–8°C), use within 21 days',
    reconstitutionSolvent: 'Bacteriostatic water',
    reconstitutionNotes: 'GHK-Cu solution should have a faint blue tint from the copper ion. If colorless, copper may have dissociated. Standard reconstitution: 2 mL BAC water into a 50 mg vial.',
  },

  relatedPeptideSlugs: ['epitalon', 'bpc-157', 'ahk-cu'],
  synergyNotes: 'GHK-Cu is often discussed alongside Epitalon for comprehensive anti-aging protocols. For skin applications, it pairs well with other peptides like Matrixyl and retinoids (used at different times of day).',

  metaDescription: 'GHK-Cu (copper peptide) is a naturally occurring tripeptide researched for anti-aging, wound healing, skin rejuvenation, and hair growth. Gene expression, mechanisms, and protocols.',

  faqItems: [
    {
      question: 'What is GHK-Cu and why does it decline with age?',
      answer: 'GHK-Cu is a copper-binding tripeptide naturally present in human blood plasma. Levels drop from ~200 ng/mL at age 20 to ~80 ng/mL by age 60. This decline correlates with reduced tissue repair capacity, increased inflammation, and visible aging signs.',
    },
    {
      question: 'Does GHK-Cu really affect gene expression?',
      answer: 'Yes. Broad Institute Connectivity Map analysis shows GHK-Cu modulates the expression of approximately 31.2% of human genes — over 4,000 genes — shifting expression patterns toward a profile associated with younger, healthier tissue.',
    },
    {
      question: 'Is topical GHK-Cu effective for skin?',
      answer: 'Multiple studies demonstrate that topical GHK-Cu increases collagen synthesis (up to 70% in some models), improves skin elasticity, and reduces fine lines. One controlled study found it outperformed both vitamin C and retinoic acid creams for skin improvement.',
    },
    {
      question: 'Can GHK-Cu help with hair loss?',
      answer: 'Research shows GHK-Cu stimulates hair follicle proliferation and increases follicle size. It prolongs the growth phase (anagen) of the hair cycle. Results are typically seen after 3–6 months of consistent topical application.',
    },
  ],
};
