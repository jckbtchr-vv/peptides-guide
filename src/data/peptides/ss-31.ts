import { Peptide } from '../types';

export const ss31: Peptide = {
  slug: 'ss-31',
  name: 'SS-31',
  fullName: 'SS-31 (Elamipretide / Bendavia / MTP-131)',
  aliases: ['Elamipretide', 'Bendavia', 'MTP-131', 'SS-31 peptide'],
  sequence: 'D-Arg-Dmt-Lys-Phe-NH₂',
  molecularWeight: '639.8 g/mol',
  class: 'Mitochondria-targeted tetrapeptide (Szeto-Schiller peptide)',
  halfLife: '~1–4 hours (following subcutaneous injection in humans)',
  administrationRoute: 'Subcutaneous injection, intravenous (clinical)',

  categories: ['longevity'],
  primaryCategory: 'longevity',
  status: 'clinical-trials',
  regulatoryNote: 'Investigational drug developed by Stealth BioTherapeutics. Has undergone multiple Phase 2 and Phase 3 clinical trials. Received Orphan Drug Designation from the FDA for Barth syndrome. Not yet FDA-approved for any indication.',

  overview:
    'SS-31 (elamipretide) is a synthetic mitochondria-targeted tetrapeptide developed by Dr. Hazel Szeto and Dr. Peter Bhatt Schiller at Weill Cornell Medical College. It is part of the Szeto-Schiller (SS) peptide family, a series of cell-permeable peptides that concentrate in the inner mitochondrial membrane at concentrations 1,000-5,000 fold higher than the extracellular space.\n\nUnlike most mitochondria-targeted compounds that rely on positive charge to accumulate in the matrix, SS-31 selectively binds to cardiolipin — a unique phospholipid found almost exclusively in the inner mitochondrial membrane. Cardiolipin is essential for the structural organization and function of electron transport chain complexes and ATP synthase.\n\nSS-31 has been the subject of extensive clinical development by Stealth BioTherapeutics. It has progressed through multiple clinical trials for Barth syndrome (a rare genetic cardiomyopathy caused by cardiolipin remodeling deficiency), heart failure, age-related macular degeneration, primary mitochondrial myopathy, and renal injury. It represents one of the most advanced mitochondria-targeted therapeutics in clinical development.',

  mechanismOfAction:
    'SS-31 penetrates cell membranes and selectively concentrates in the inner mitochondrial membrane (IMM), driven by its alternating aromatic-cationic motif (D-Arg-Dmt-Lys-Phe) rather than solely by membrane potential. It binds specifically to cardiolipin (CL), a tetra-acyl phospholipid unique to the IMM.\n\nCardiolipin binding by SS-31 stabilizes the cristae structure of mitochondria and optimizes the organization of electron transport chain (ETC) supercomplexes (respirasomes). This stabilization improves electron transfer efficiency, increases ATP production, and reduces electron leak — the primary source of mitochondrial reactive oxygen species (ROS).\n\nIn aged or damaged mitochondria, cardiolipin undergoes peroxidation and redistribution, leading to ETC supercomplex disassembly, reduced ATP synthesis, increased ROS production, and eventual release of cytochrome c (triggering apoptosis). SS-31 prevents cardiolipin peroxidation and maintains CL-dependent supercomplex assembly.\n\nSS-31 also prevents the interaction of cytochrome c with cardiolipin that converts cytochrome c from an electron carrier into a peroxidase — a critical early step in mitochondrial-driven apoptosis. By preserving cytochrome c\'s electron transport function, SS-31 simultaneously improves bioenergetics and inhibits pro-apoptotic signaling.\n\nThe net effect is restoration of mitochondrial bioenergetic function: increased ATP production, reduced ROS, stabilized mitochondrial membrane potential, and inhibited opening of the mitochondrial permeability transition pore (mPTP).',

  researchSummary:
    'Preclinical research on SS-31 has been extensive. In aged mice, SS-31 treatment improved mitochondrial function, reduced oxidative damage, improved cardiac function, enhanced exercise tolerance, and restored skeletal muscle performance. Aged mice treated with SS-31 showed mitochondrial cristae structure comparable to young animals.\n\nThe TAZPOWER Phase 2 trial in Barth syndrome patients demonstrated that SS-31 (elamipretide) improved 6-minute walk test distance, a primary functional endpoint, and was generally well-tolerated. Barth syndrome is a rare X-linked genetic disease caused by mutations in the tafazzin gene, resulting in defective cardiolipin remodeling — making it a compelling proof-of-concept indication for a cardiolipin-targeting drug.\n\nHeart failure trials (EMBRACE-STEMI, Phase 2) evaluated SS-31 in patients following ST-elevation myocardial infarction. While the primary endpoint was not met, pre-specified subgroup analyses suggested benefit in patients with larger infarcts.\n\nAge-related macular degeneration (AMD) trials (ReCLAIM) showed improvements in best-corrected visual acuity and reduction of drusenoid lesions in some patients with non-exudative AMD.\n\nRenal ischemia-reperfusion studies demonstrated significant renal protection when SS-31 was administered before or during ischemic events, with implications for kidney transplantation and cardiac surgery.\n\nLimitations: Phase 3 trials have produced mixed results. The EMBRACE-STEMI trial did not meet its primary endpoint. Regulatory approval has not been achieved for any indication. The compound remains investigational.',

  citations: [
    {
      title: 'A mitochondria-targeted peptide SS-31 reduces ischemia-reperfusion injury in aged hearts',
      authors: 'Szeto HH.',
      journal: 'Aging Cell',
      year: 2011,
      doi: '10.1111/j.1474-9726.2010.00640.x',
      summary: 'Demonstrated that SS-31 protects aged hearts from ischemia-reperfusion injury by stabilizing mitochondrial cardiolipin, reducing ROS, and preserving ATP production.',
    },
    {
      title: 'Mitochondria-targeted peptide SS-31 ameliorates age-related decline in skeletal muscle',
      authors: 'Siegel MP, et al.',
      journal: 'Aging Cell',
      year: 2013,
      doi: '10.1111/acel.12077',
      summary: 'Showed that SS-31 treatment in aged mice restored skeletal muscle mitochondrial energetics, reduced oxidative stress, and improved muscle function, suggesting therapeutic potential for sarcopenia.',
    },
    {
      title: 'Elamipretide in Barth syndrome: results of the TAZPOWER randomized clinical trial',
      authors: 'Thompson WR, et al.',
      journal: 'Circulation: Heart Failure',
      year: 2021,
      doi: '10.1161/CIRCHEARTFAILURE.121.008658',
      summary: 'Phase 2 clinical trial demonstrating that elamipretide improved 6-minute walk distance and was well-tolerated in patients with Barth syndrome, a genetic cardiomyopathy caused by cardiolipin dysfunction.',
    },
    {
      title: 'SS-31 peptide enables mitochondrial targeting for stabilized bioenergetics',
      authors: 'Birk AV, Liu S, Soong Y, et al.',
      journal: 'Journal of the American Society of Nephrology',
      year: 2013,
      doi: '10.1681/ASN.2012121216',
      summary: 'Elucidated the mechanism by which SS-31 interacts with cardiolipin to stabilize electron transport chain supercomplexes and prevent cytochrome c peroxidase activity.',
    },
    {
      title: 'First-in-class cardiolipin-protective compound as a therapeutic agent to restore mitochondrial bioenergetics',
      authors: 'Szeto HH.',
      journal: 'British Journal of Pharmacology',
      year: 2014,
      doi: '10.1111/bph.12461',
      summary: 'Comprehensive review of SS-31 as the first compound specifically designed to protect cardiolipin and restore mitochondrial bioenergetics, detailing mechanism and therapeutic applications.',
    },
  ],

  protocols: [
    {
      name: 'Mitochondrial support / longevity (community-reported)',
      route: 'Subcutaneous injection',
      typicalDose: '5–20 mg daily',
      frequency: 'Once daily',
      cycleDuration: '4–12 weeks on, 4 weeks off',
      notes: 'Community-reported dosing ranges. Clinical trials used doses of 0.25 mg/kg IV or 40 mg SC daily. No approved human dosing exists outside clinical trials. Start low and assess tolerance.',
    },
    {
      name: 'Clinical trial reference (Barth syndrome)',
      route: 'Subcutaneous injection',
      typicalDose: '40 mg daily',
      frequency: 'Once daily',
      cycleDuration: '12 weeks (TAZPOWER trial duration)',
      notes: 'Dosing used in the TAZPOWER Phase 2 clinical trial. This dose was selected based on Phase 1 pharmacokinetic studies. Administered under clinical supervision with monitoring.',
    },
    {
      name: 'Clinical trial reference (cardiac/renal)',
      route: 'Intravenous infusion',
      typicalDose: '0.05–0.25 mg/kg/hr',
      frequency: 'Continuous infusion (peri-procedural)',
      cycleDuration: 'Single administration (hours)',
      notes: 'IV formulation used in EMBRACE-STEMI and renal ischemia studies. Administered peri-procedurally in hospital settings. Not applicable to outpatient use.',
    },
  ],

  protocolDisclaimer:
    'SS-31 (elamipretide) is an investigational drug that has not received FDA approval. Clinical trial dosing is provided for reference only. Any use outside of clinical trials is off-label and unregulated. Consult a healthcare professional.',

  sideEffects: [
    { effect: 'Injection site reactions', frequency: 'common', details: 'Pain, redness, induration, and pruritus at the subcutaneous injection site. This was the most commonly reported adverse event in clinical trials.' },
    { effect: 'Headache', frequency: 'uncommon', details: 'Reported in clinical trials at rates slightly above placebo.' },
    { effect: 'Nausea', frequency: 'uncommon', details: 'Mild gastrointestinal discomfort reported in some trial participants.' },
    { effect: 'Dizziness', frequency: 'rare', details: 'Infrequently reported in clinical trial data.' },
  ],

  contraindications: [
    'Known hypersensitivity to elamipretide or any formulation components',
    'Pregnancy or breastfeeding (insufficient safety data)',
    'Severe hepatic impairment (limited metabolic data)',
    'Concurrent use of other mitochondrial-targeted compounds (unknown interactions)',
  ],

  interactions: [
    'Other mitochondria-targeted antioxidants such as MitoQ or SkQ1 (potential additive or antagonistic effects — no data)',
    'Cardiotoxic drugs (SS-31 may provide protection but interaction data is limited)',
    'Statins (some statins affect mitochondrial function — theoretical interaction)',
  ],

  storage: {
    lyophilized: 'Refrigerated (2–8°C) or frozen (-20°C), stable for 12+ months',
    reconstituted: 'Refrigerated (2–8°C), use within 14 days',
    reconstitutionSolvent: 'Bacteriostatic water or sterile saline',
    reconstitutionNotes: 'SS-31 is a small, relatively stable tetrapeptide. Reconstitute in bacteriostatic water for subcutaneous injection. The D-Arg residue enhances stability compared to all-L peptides. Protect from light.',
  },

  relatedPeptideSlugs: ['humanin', 'mots-c', 'epitalon'],
  synergyNotes: 'SS-31 targets the inner mitochondrial membrane specifically, complementing other mitochondrial-derived peptides like Humanin (cytoprotective signaling) and MOTS-c (metabolic regulation). Combining mitochondrial membrane stabilization (SS-31) with mitochondrial-derived signaling peptides represents a multi-target approach to mitochondrial aging.',

  metaDescription: 'SS-31 (elamipretide) is a mitochondria-targeted peptide that stabilizes cardiolipin to restore bioenergetics. In clinical trials for Barth syndrome and heart failure.',

  faqItems: [
    {
      question: 'What is SS-31 / elamipretide?',
      answer: 'SS-31 (also called elamipretide or Bendavia) is a synthetic tetrapeptide that selectively targets the inner mitochondrial membrane. It binds cardiolipin — a phospholipid essential for electron transport chain function — stabilizing mitochondrial structure, improving ATP production, and reducing oxidative stress. It is in clinical trials for Barth syndrome, heart failure, and other conditions.',
    },
    {
      question: 'What clinical trials has SS-31 been in?',
      answer: 'SS-31 has been in multiple clinical trials: TAZPOWER (Phase 2, Barth syndrome — showed improved 6-minute walk distance), EMBRACE-STEMI (Phase 2, heart attack — mixed results), ReCLAIM (Phase 2, age-related macular degeneration — some visual improvements), and renal protection studies. It has FDA Orphan Drug Designation for Barth syndrome.',
    },
    {
      question: 'How does SS-31 differ from other mitochondrial supplements like CoQ10?',
      answer: 'SS-31 is fundamentally different from CoQ10 or other mitochondrial supplements. It is a peptide that physically binds to cardiolipin in the inner mitochondrial membrane, stabilizing electron transport chain supercomplexes. CoQ10 acts as an electron carrier within the chain. SS-31 concentrates in mitochondria at 1,000-5,000x extracellular levels — a specificity that oral supplements cannot achieve.',
    },
    {
      question: 'Is SS-31 approved by the FDA?',
      answer: 'No. SS-31 (elamipretide) has not received FDA approval for any indication as of now. It has been granted Orphan Drug Designation for Barth syndrome, which provides regulatory incentives but is not an approval. Clinical development is ongoing through Stealth BioTherapeutics.',
    },
    {
      question: 'What is cardiolipin and why does it matter?',
      answer: 'Cardiolipin is a unique phospholipid found almost exclusively in the inner mitochondrial membrane. It is essential for organizing electron transport chain complexes into supercomplexes (respirasomes), maintaining cristae structure, and enabling efficient ATP production. Cardiolipin damage through oxidation is a hallmark of mitochondrial aging and disease.',
    },
  ],
};
