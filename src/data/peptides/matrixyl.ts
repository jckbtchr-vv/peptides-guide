import { Peptide } from '../types';

export const matrixyl: Peptide = {
  slug: 'matrixyl',
  name: 'Matrixyl',
  fullName: 'Palmitoyl Pentapeptide-4 (Matrixyl)',
  aliases: ['Palmitoyl Pentapeptide-4', 'Pal-KTTKS', 'Matrixyl 3000 (combination product)'],
  sequence: 'Pal-Lys-Thr-Thr-Lys-Ser',
  molecularWeight: '802.05 g/mol',
  class: 'Signal peptide (matrikine)',
  halfLife: 'Topical — localized effect, no systemic half-life',
  administrationRoute: 'Topical',

  categories: ['skin-hair'],
  primaryCategory: 'skin-hair',
  status: 'research',
  regulatoryNote: 'Not FDA-regulated as a drug. Widely used as a cosmetic ingredient. Patented by Sederma.',

  tldr: 'One of the few cosmetic peptides with double-blind clinical trial data — showing up to 68% wrinkle depth reduction after 6 months, comparable to retinol but without irritation.',

  overview:
    'Matrixyl (Palmitoyl Pentapeptide-4) is one of the most validated anti-aging peptides in cosmetic science. It is a synthetic lipopeptide consisting of a five-amino-acid sequence linked to a palmitic acid chain that enhances skin penetration.\n\nThe peptide acts as a matrikine — a fragment of extracellular matrix proteins that signals skin cells to produce more collagen. It mimics the appearance of collagen breakdown products, essentially tricking the skin into thinking it needs to ramp up collagen synthesis.\n\nMatrixyl is one of the few cosmetic peptides with published, double-blind clinical trial data demonstrating significant anti-wrinkle effects.',

  mechanismOfAction:
    'Matrixyl works through the matrikine signaling pathway. When collagen naturally degrades, the breakdown fragments (matrikines) signal to fibroblasts that new collagen production is needed. Matrixyl mimics this signal.\n\nThe Pal-KTTKS sequence specifically mimics a fragment of type I procollagen. When applied topically, it penetrates the epidermis (aided by the palmitoyl chain) and binds to receptors on dermal fibroblasts, stimulating production of collagen types I, III, and IV, as well as fibronectin and hyaluronic acid.\n\nThe palmitoyl group is critical — it increases lipophilicity, allowing the peptide to cross the skin barrier. Without it, the KTTKS sequence alone has poor skin penetration.',

  researchSummary:
    'A double-blind, placebo-controlled study of 93 women using 3% Matrixyl cream for 6 months showed significant reduction in wrinkle depth (up to 68% reduction in some measurements), comparable to retinol but without the irritation.\n\nIn vitro studies show Matrixyl stimulates collagen synthesis by up to 350% in fibroblast cultures at optimal concentrations. It simultaneously upregulates production of other ECM components including fibronectin and glycosaminoglycans.\n\nComparative studies show Matrixyl does not cause the irritation, photosensitivity, or peeling associated with retinoids, making it suitable for sensitive skin. However, its effects develop more gradually (weeks to months vs. days with retinoids).\n\nMatrixyl 3000 is a commercial variant combining palmitoyl tripeptide-1 and palmitoyl tetrapeptide-7, targeting both collagen synthesis and inflammatory pathways for a combined anti-aging effect.',

  citations: [
    {
      title: 'Anti-wrinkle activity of Pal-KTTKS peptide evaluated by clinical and bio-instrumental methods',
      authors: 'Robinson LR, et al.',
      journal: 'International Journal of Cosmetic Science',
      year: 2005,
      doi: '10.1111/j.1467-2494.2005.00251.x',
      summary: 'Double-blind clinical trial of 93 women showing significant wrinkle reduction with 3% Pal-KTTKS over 6 months, with improvements comparable to retinol.',
    },
    {
      title: 'Effect of palmitoyl pentapeptide on collagen production by human fibroblasts',
      authors: 'Katayama K, et al.',
      journal: 'Peptide Science',
      year: 1993,
      summary: 'In vitro study demonstrating Pal-KTTKS stimulates collagen synthesis by up to 350% in fibroblast cultures, confirming the matrikine signaling mechanism.',
    },
    {
      title: 'Cosmetic peptides: an overview of their mechanism of action',
      authors: 'Schagen SK.',
      journal: 'International Journal of Molecular Sciences',
      year: 2017,
      doi: '10.3390/ijms18010171',
      summary: 'Comprehensive review of cosmetic peptide mechanisms including Matrixyl, covering skin penetration, signal transduction, and clinical evidence.',
    },
  ],

  protocols: [
    {
      name: 'Anti-aging (topical)',
      route: 'Topical application',
      typicalDose: '2–8% concentration in serum or cream',
      frequency: 'Twice daily (morning and evening)',
      cycleDuration: 'Ongoing (minimum 8–12 weeks for visible results)',
      notes: 'Apply to clean skin after cleansing. Compatible with most other skincare ingredients including hyaluronic acid, niacinamide, and vitamin C. Avoid combining with direct acids (AHA/BHA) at the same time.',
    },
  ],

  protocolDisclaimer:
    'Matrixyl is a cosmetic ingredient, not a drug. No medical claims are made. Results vary. These recommendations are based on published research and cosmetic formulation guidelines.',

  sideEffects: [
    { effect: 'Mild skin irritation', frequency: 'rare', details: 'Very well tolerated. Irritation is uncommon and typically related to other formulation ingredients.' },
    { effect: 'Allergic reaction', frequency: 'rare', details: 'Extremely rare. Discontinue if redness or itching persists.' },
  ],

  contraindications: [
    'Known allergy to peptide ingredients',
    'Use on broken or severely compromised skin barrier',
  ],

  storage: {
    lyophilized: 'N/A (supplied as cosmetic serum/cream)',
    reconstituted: 'N/A',
    reconstitutionSolvent: 'N/A',
    reconstitutionNotes: 'Store cosmetic products in a cool, dry place. Avoid excessive heat and direct sunlight. Most formulations stable for 12+ months unopened.',
  },

  relatedPeptideSlugs: ['argireline', 'ghk-cu'],
  synergyNotes: 'Matrixyl works well alongside GHK-Cu (complementary collagen-stimulating mechanisms) and Argireline (targets expression lines vs. Matrixyl targeting skin structure). The combination addresses multiple aging pathways.',

  metaDescription: 'Matrixyl (Pal-KTTKS) is a clinically proven anti-wrinkle peptide that stimulates collagen synthesis. Clinical trials, mechanisms, and usage in skincare.',

  faqItems: [
    {
      question: 'Does Matrixyl really work for wrinkles?',
      answer: 'Yes. A double-blind clinical trial of 93 women showed significant wrinkle depth reduction (up to 68%) after 6 months of use at 3% concentration, comparable to retinol but without the irritation and photosensitivity.',
    },
    {
      question: 'What is the difference between Matrixyl and Matrixyl 3000?',
      answer: 'Matrixyl is palmitoyl pentapeptide-4 (Pal-KTTKS). Matrixyl 3000 is a commercial combination of palmitoyl tripeptide-1 and palmitoyl tetrapeptide-7, which targets both collagen synthesis and skin inflammation for a broader anti-aging effect.',
    },
    {
      question: 'Can Matrixyl replace retinol?',
      answer: 'Matrixyl produces comparable wrinkle reduction to retinol in clinical trials without the irritation, photosensitivity, or peeling. It is a strong alternative for those who cannot tolerate retinoids, though retinol has a broader range of skin benefits.',
    },
  ],
};
