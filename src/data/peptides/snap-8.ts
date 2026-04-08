import { Peptide } from '../types';

export const snap8: Peptide = {
  slug: 'snap-8',
  name: 'SNAP-8',
  fullName: 'SNAP-8 (Acetyl Octapeptide-3)',
  aliases: ['Acetyl Octapeptide-3', 'Acetyl Glutamyl Heptapeptide-1', 'SNAP-8 Peptide Solution'],
  sequence: 'Ac-Glu-Glu-Met-Gln-Arg-Arg-Ala-Asp-NH₂',
  molecularWeight: '1075.16 g/mol',
  class: 'Neurotransmitter-inhibiting peptide (SNARE complex modulator)',
  halfLife: 'Topical — localized effect',
  administrationRoute: 'Topical',

  categories: ['skin-hair'],
  primaryCategory: 'skin-hair',
  status: 'research',
  regulatoryNote: 'Cosmetic ingredient. Not FDA-regulated as a drug. Developed and patented by Lipotec (now part of Lubrizol/Berkshire Hathaway).',

  tldr: 'An eight-amino-acid extension of Argireline that claims enhanced SNARE complex inhibition for deeper wrinkle reduction. Limited independent clinical data beyond manufacturer studies.',

  overview:
    'SNAP-8 (Acetyl Octapeptide-3) is a synthetic peptide developed by Lipotec (Barcelona, Spain) as a next-generation anti-wrinkle active ingredient. It is an octapeptide — an eight-amino-acid extension of Argireline (Acetyl Hexapeptide-3), the widely used hexapeptide that mimics the N-terminal portion of SNAP-25 to inhibit neuromuscular junction signaling.\n\nThe rationale for SNAP-8 is straightforward: by extending the peptide chain from six to eight amino acids, the molecule includes a larger fragment of the SNAP-25 N-terminal domain, potentially competing more effectively for incorporation into the SNARE complex. Lipotec claims this produces greater inhibition of neurotransmitter vesicle fusion and, consequently, a more pronounced reduction in expression wrinkles compared to Argireline.\n\nLike Argireline, SNAP-8 is designed for topical use in cosmetic formulations. It targets expression lines caused by repetitive facial muscle contractions — forehead lines, crow\'s feet, and glabellar frown lines. The mechanism is analogous to botulinum toxin (Botox) but much milder and fully reversible.\n\nSNAP-8 is commercially available as a peptide solution from Lipotec and is incorporated into various anti-aging skincare products. It represents the broader trend of peptide-based "Botox alternatives" in cosmetic science.',

  mechanismOfAction:
    'SNAP-8 shares its fundamental mechanism with Argireline — competitive inhibition of the SNARE complex at the neuromuscular junction — but with a potentially stronger interaction due to its extended sequence.\n\nThe SNARE complex consists of three proteins: SNAP-25, syntaxin, and VAMP (synaptobrevin). These proteins assemble into a coiled-coil structure that drives fusion of neurotransmitter-containing vesicles with the presynaptic membrane, releasing acetylcholine into the neuromuscular junction. When acetylcholine binds receptors on the muscle fiber, contraction occurs.\n\nSNAP-8 mimics a larger portion of the SNAP-25 N-terminal domain than Argireline (8 amino acids vs. 6). By competing with endogenous SNAP-25 for incorporation into the SNARE complex, SNAP-8 destabilizes the complex and reduces the efficiency of vesicle fusion. With less acetylcholine released, muscle contractions are less forceful, and expression lines are softened.\n\nThe extended peptide sequence of SNAP-8 is proposed to form more extensive interactions within the SNARE complex binding groove, resulting in more effective competition with native SNAP-25. Lipotec\'s in vitro data suggests approximately 30% greater SNARE complex destabilization compared to Argireline at equivalent concentrations.\n\nLike Argireline, the effect is fundamentally different from botulinum toxin: Botox proteolytically cleaves SNARE proteins (irreversible until protein resynthesis occurs over months), while SNAP-8 competes for binding sites (fully reversible upon discontinuation). This makes SNAP-8 safer but also less potent than injectable neurotoxins.\n\nThe primary limitation is skin penetration. SNAP-8 is a relatively large, hydrophilic molecule. Its effects are confined to the epidermis and upper dermis — it cannot penetrate deeply enough to fully reach the neuromuscular junctions of deeper facial muscles. This is a shared limitation with all topical neurotransmitter-modulating peptides.',

  researchSummary:
    'The evidence base for SNAP-8 is more limited than for Argireline and relies heavily on manufacturer-funded studies from Lipotec.\n\nIn vitro studies: Lipotec reports that SNAP-8 inhibits catecholamine release from chromaffin cells (a standard model for neurotransmitter vesicle fusion) more effectively than Argireline. At 100 mcM concentration, SNAP-8 reportedly produced approximately 73% inhibition of noradrenaline release compared to approximately 40-50% for Argireline.\n\nClinical study (manufacturer): A Lipotec-sponsored in vivo study of 20 volunteers assessed 3% and 10% SNAP-8 formulations applied twice daily to the forehead for 28 days. Results showed wrinkle depth reduction of approximately 35% (3% concentration) and 63% (10% concentration) as measured by skin replica analysis. These results are notable but have not been independently replicated.\n\nComparative data: Direct head-to-head comparisons between SNAP-8 and Argireline in independent clinical settings are lacking. The claimed superiority is based primarily on in vitro neurotransmitter release assays and the manufacturer\'s clinical study.\n\nLimitations: (1) Most published data comes from the manufacturer (Lipotec/Lubrizol), creating potential bias. (2) No peer-reviewed, independent clinical trials have been published in major dermatology journals. (3) The sample sizes in available studies are small (typically 10-20 subjects). (4) Many commercial products containing SNAP-8 use concentrations well below the 3-10% range tested in the Lipotec study, potentially rendering them ineffective. (5) Long-term efficacy and safety data are not available.\n\nIn the context of the broader cosmetic peptide field, SNAP-8 is considered a reasonable iteration on the Argireline concept with plausible mechanistic advantages but insufficient independent validation.',

  citations: [
    {
      title: 'SNAP-8: A new biomimetic anti-wrinkle peptide',
      authors: 'Lipotec S.A.',
      journal: 'Lipotec Technical Dossier',
      year: 2005,
      summary: 'Manufacturer technical dossier presenting in vitro and in vivo data for SNAP-8, including catecholamine release inhibition assays and a 28-day clinical study showing wrinkle reduction at 3% and 10% concentrations.',
    },
    {
      title: 'Acetyl hexapeptide-3 mimics the N-terminal domain of SNAP-25 and inhibits SNARE complex formation',
      authors: 'Blanes-Mira C, et al.',
      journal: 'Journal of Pharmacology and Experimental Therapeutics',
      year: 2002,
      doi: '10.1124/jpet.102.039040',
      summary: 'Foundational research on the SNARE complex inhibition mechanism shared by both Argireline and SNAP-8, demonstrating competitive inhibition of SNAP-25 incorporation.',
    },
    {
      title: 'Signal peptides and neurotransmitter-inhibiting peptides for wrinkle reduction',
      authors: 'Gorouhi F, Maibach HI.',
      journal: 'Clinics in Dermatology',
      year: 2009,
      doi: '10.1016/j.clindermatol.2009.05.010',
      summary: 'Review of anti-wrinkle peptides including neurotransmitter inhibitors (Argireline, SNAP-8) and signal peptides (Matrixyl), comparing mechanisms and evidence levels.',
    },
    {
      title: 'Topical peptides as cosmeceuticals',
      authors: 'Pai VV, et al.',
      journal: 'Indian Journal of Dermatology, Venereology and Leprology',
      year: 2017,
      doi: '10.4103/0378-6323.191421',
      summary: 'Review of cosmeceutical peptides categorizing SNAP-8 as a neurotransmitter-inhibiting peptide with anti-wrinkle properties, noting the limited independent clinical evidence.',
    },
  ],

  protocols: [
    {
      name: 'Expression line reduction (topical)',
      route: 'Topical application',
      typicalDose: '3–10% concentration in serum',
      frequency: 'Twice daily (morning and evening)',
      cycleDuration: 'Ongoing (minimum 4 weeks for visible results)',
      notes: 'Apply to clean, dry skin focusing on expression line areas: forehead, crow\'s feet, glabellar lines. The manufacturer\'s clinical study used 3% and 10% concentrations — lower concentrations common in commercial products may be less effective. Can be layered under moisturizer and sunscreen.',
    },
    {
      name: 'Combination with Argireline',
      route: 'Topical application',
      typicalDose: '3–5% SNAP-8 + 5–10% Argireline',
      frequency: 'Twice daily',
      cycleDuration: 'Ongoing',
      notes: 'Some formulations combine SNAP-8 with Argireline for potentially additive SNARE complex inhibition. Both target SNAP-25 but with different binding footprints. No clinical data specifically validates this combination over either peptide alone.',
    },
  ],

  protocolDisclaimer:
    'SNAP-8 is a cosmetic ingredient with no medical claims. Results are expected to be milder than injectable botulinum toxin. Most clinical data comes from the manufacturer. Check product labeling for actual SNAP-8 concentration.',

  sideEffects: [
    { effect: 'Mild skin irritation', frequency: 'rare', details: 'SNAP-8 is very well tolerated. Occasional mild redness or tingling in sensitive individuals, usually transient.' },
    { effect: 'Allergic contact dermatitis', frequency: 'rare', details: 'Extremely rare. Patch test recommended for individuals with known sensitivity to cosmetic peptides.' },
  ],

  contraindications: [
    'Known allergy to peptide-based cosmetics',
    'Severely compromised skin barrier (may increase penetration and irritation)',
    'Active skin infection at the application site',
  ],

  storage: {
    lyophilized: 'N/A (typically supplied as an aqueous peptide solution)',
    reconstituted: 'N/A',
    reconstitutionSolvent: 'N/A',
    reconstitutionNotes: 'SNAP-8 is commercially available as an aqueous solution (typically 0.5 g/L active peptide in water with preservatives). Store at room temperature or refrigerated. Avoid excessive heat. Most formulations stable for 12+ months unopened. Follow product-specific storage instructions.',
  },

  relatedPeptideSlugs: ['argireline', 'matrixyl'],
  synergyNotes: 'SNAP-8 and Argireline both target the SNARE complex through SNAP-25 mimicry and may have additive effects when combined. For comprehensive anti-wrinkle protocols, pairing with Matrixyl (which stimulates collagen synthesis rather than inhibiting muscle contraction) addresses two distinct wrinkle mechanisms: expression lines and structural collagen loss.',

  metaDescription: 'SNAP-8 (Acetyl Octapeptide-3) is an anti-wrinkle peptide that inhibits the SNARE complex. Extended Argireline analog, mechanism, clinical evidence, and cosmetic use.',

  faqItems: [
    {
      question: 'Is SNAP-8 better than Argireline?',
      answer: 'SNAP-8 is claimed to be more effective than Argireline based on its extended sequence (8 vs. 6 amino acids), which should compete more effectively for SNAP-25 binding in the SNARE complex. The manufacturer\'s in vitro data supports this claim. However, there are no independent head-to-head clinical trials comparing the two, so the superiority claim lacks independent validation.',
    },
    {
      question: 'How does SNAP-8 compare to Botox?',
      answer: 'Both target the same neuromuscular junction pathway, but through different mechanisms. Botox irreversibly cleaves SNARE proteins (effect lasts months). SNAP-8 reversibly competes for binding sites (effect requires continuous application). SNAP-8 is dramatically milder — it reduces but does not eliminate muscle contraction. It is a maintenance cosmetic, not a replacement for injectable neurotoxins.',
    },
    {
      question: 'What concentration of SNAP-8 is effective?',
      answer: 'The manufacturer\'s clinical study tested 3% and 10% concentrations, with 10% showing the greatest effect (63% wrinkle reduction after 28 days). Many commercial products contain much lower concentrations, which may be below the effective threshold. Check product labeling for the actual SNAP-8 percentage.',
    },
    {
      question: 'Can SNAP-8 be used with other anti-wrinkle peptides?',
      answer: 'Yes. SNAP-8 targets expression lines (muscle contraction mechanism) and is commonly combined with Matrixyl, which targets structural wrinkles (collagen stimulation). It can also be combined with Argireline for potentially additive SNARE complex inhibition. GHK-Cu adds broad tissue remodeling. These peptides address different wrinkle causes and are generally compatible in formulation.',
    },
  ],
};
