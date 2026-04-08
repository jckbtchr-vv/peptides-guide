import { Peptide } from '../types';

export const argireline: Peptide = {
  slug: 'argireline',
  name: 'Argireline',
  fullName: 'Acetyl Hexapeptide-3 (Argireline)',
  aliases: ['Acetyl Hexapeptide-8', 'Argireline NP', 'Botox in a bottle'],
  sequence: 'Ac-Glu-Glu-Met-Gln-Arg-Arg-NH₂',
  molecularWeight: '888.96 g/mol',
  class: 'Neurotransmitter-inhibiting peptide',
  halfLife: 'Topical — localized effect',
  administrationRoute: 'Topical',

  categories: ['skin-hair'],
  primaryCategory: 'skin-hair',
  status: 'research',
  regulatoryNote: 'Cosmetic ingredient. Not FDA-regulated as a drug. Patented by Lipotec.',

  tldr: 'A topical peptide that reduces expression wrinkles by partially inhibiting the SNARE complex at the neuromuscular junction — the same target as Botox, but milder and fully reversible.',

  overview:
    'Argireline (Acetyl Hexapeptide-3) is a synthetic peptide designed to reduce expression lines and wrinkles by modulating neurotransmitter release at the neuromuscular junction. It is often called "topical Botox" because it targets the same SNARE complex that botulinum toxin disrupts.\n\nUnlike Botox, Argireline does not paralyze muscles — it reduces the intensity of muscle contractions by partially inhibiting neurotransmitter vesicle fusion. The effect is milder and entirely reversible, with no risk of the frozen expression associated with excessive Botox use.\n\nArgireline is one of the most commercially successful cosmetic peptides and is found in numerous anti-wrinkle serums and creams. It is most effective for expression lines (forehead, crow\'s feet, frown lines) rather than structural wrinkles caused by collagen loss.',

  mechanismOfAction:
    'Argireline mimics the N-terminal sequence of SNAP-25, one of three proteins in the SNARE complex responsible for neurotransmitter vesicle fusion at the neuromuscular junction. By competing with native SNAP-25 for incorporation into the SNARE complex, Argireline partially destabilizes the complex.\n\nThis destabilization reduces the efficiency of acetylcholine release from motor neurons at the facial muscle junction. With less acetylcholine released, muscle contractions are less forceful, and expression lines are softened.\n\nThe mechanism is fundamentally different from botulinum toxin: Botox cleaves SNARE proteins (irreversible until new proteins are synthesized), while Argireline competes for binding sites (fully reversible). This explains why Argireline\'s effects are milder but also safer.',

  researchSummary:
    'An in vivo study of 10 volunteers using 10% Argireline solution showed a 30% reduction in periorbital wrinkle depth after 30 days of twice-daily application, measured by silicone replica analysis.\n\nIn vitro studies confirm Argireline inhibits catecholamine release from chromaffin cells by 40-50% at relevant concentrations, demonstrating its ability to modulate neurotransmitter vesicle fusion.\n\nA comparative study against 5% Argireline cream showed significant improvement in crow\'s feet wrinkles over 28 days. However, efficacy is concentration-dependent, and many commercial products contain sub-therapeutic concentrations (<2%).\n\nLimitations: Argireline has limited skin penetration depth. Its effects are concentrated in the epidermis and upper dermis. It cannot fully replicate the deep muscle relaxation produced by injectable Botox. Results are modest compared to injectable treatments.',

  citations: [
    {
      title: 'Argireline decreases the expression of wrinkles: a clinical and instrumental study',
      authors: 'Blanes-Mira C, et al.',
      journal: 'International Journal of Cosmetic Science',
      year: 2002,
      doi: '10.1046/j.1467-2494.2002.00146.x',
      summary: 'Clinical study showing 10% Argireline reduced wrinkle depth by 30% in periorbital area after 30 days of twice-daily application.',
    },
    {
      title: 'Acetyl hexapeptide-3 mimics the N-terminal domain of SNAP-25 and inhibits SNARE complex formation',
      authors: 'Blanes-Mira C, et al.',
      journal: 'Journal of Pharmacology and Experimental Therapeutics',
      year: 2002,
      doi: '10.1124/jpet.102.039040',
      summary: 'Elucidated the molecular mechanism of Argireline — competitive inhibition of SNAP-25 in the SNARE complex, reducing neurotransmitter vesicle fusion.',
    },
    {
      title: 'Signal peptides and neurotransmitter-inhibiting peptides for wrinkle reduction',
      authors: 'Gorouhi F, Maibach HI.',
      journal: 'Clinics in Dermatology',
      year: 2009,
      doi: '10.1016/j.clindermatol.2009.05.010',
      summary: 'Review comparing signal peptides (Matrixyl) and neurotransmitter-inhibiting peptides (Argireline) for anti-wrinkle applications.',
    },
  ],

  protocols: [
    {
      name: 'Expression line reduction (topical)',
      route: 'Topical application',
      typicalDose: '5–10% concentration in serum',
      frequency: 'Twice daily (morning and evening)',
      cycleDuration: 'Ongoing (minimum 4 weeks for visible results)',
      notes: 'Apply to clean, dry skin focusing on expression line areas: forehead, crow\'s feet, glabellar lines. Most effective at 5-10% concentration — check product labeling. Many commercial products use insufficient concentrations.',
    },
  ],

  protocolDisclaimer:
    'Argireline is a cosmetic ingredient with no medical claims. Results are milder than injectable botulinum toxin. These recommendations are based on published research.',

  sideEffects: [
    { effect: 'Mild skin irritation', frequency: 'rare', details: 'Very well tolerated. Occasional mild redness in sensitive individuals.' },
    { effect: 'Allergic contact dermatitis', frequency: 'rare', details: 'Extremely rare. Patch test if you have sensitive or reactive skin.' },
  ],

  contraindications: [
    'Known allergy to peptide-based cosmetics',
    'Severely compromised skin barrier',
  ],

  storage: {
    lyophilized: 'N/A (supplied in cosmetic formulations)',
    reconstituted: 'N/A',
    reconstitutionSolvent: 'N/A',
    reconstitutionNotes: 'Store cosmetic products at room temperature. Avoid excessive heat. Most formulations stable for 12+ months unopened.',
  },

  relatedPeptideSlugs: ['matrixyl', 'ghk-cu'],
  synergyNotes: 'Argireline targets expression lines (muscle contraction) while Matrixyl targets structural wrinkles (collagen loss). Used together, they address two distinct causes of facial aging. GHK-Cu adds broad tissue remodeling.',

  metaDescription: 'Argireline (Acetyl Hexapeptide-3) is a topical peptide that reduces expression wrinkles by inhibiting the SNARE complex. Mechanisms, clinical data, and skincare use.',

  faqItems: [
    {
      question: 'Is Argireline as effective as Botox?',
      answer: 'No. Argireline produces a milder effect — approximately 30% wrinkle reduction vs. Botox\'s more dramatic smoothing. Argireline partially reduces neurotransmitter release while Botox completely blocks it. Argireline is a maintenance option, not a replacement for injectable treatments.',
    },
    {
      question: 'How long does Argireline take to work?',
      answer: 'Clinical studies show measurable wrinkle reduction within 28-30 days of twice-daily application at 5-10% concentration. Effects are cumulative and improve with continued use. Effects reverse when use is discontinued.',
    },
    {
      question: 'What concentration of Argireline is effective?',
      answer: 'Published research uses 5-10% concentrations. Many commercial products contain less than 2%, which may be below the effective threshold. Check product labeling or choose products that specifically state the Argireline percentage.',
    },
  ],
};
