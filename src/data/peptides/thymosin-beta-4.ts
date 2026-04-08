import { Peptide } from '../types';

export const thymosinBeta4: Peptide = {
  slug: 'thymosin-beta-4',
  name: 'Thymosin Beta-4',
  fullName: 'Thymosin Beta-4',
  aliases: ['TB4', 'Tβ4', 'Timbetasin'],
  sequence: 'Ac-SDKPDMAEIEKFDKSKLKKTETQEKNPLPSKETIEQEKQAGES',
  molecularWeight: '4921.5 g/mol',
  class: 'Actin-sequestering protein',
  halfLife: 'Approximately 1–2 hours',
  administrationRoute: 'Subcutaneous injection, intravenous',

  categories: ['healing-recovery'],
  primaryCategory: 'healing-recovery',
  status: 'research',
  regulatoryNote: 'Not FDA-approved for human use. RegeneRx Biopharmaceuticals has developed RGN-259 (topical ophthalmic formulation) which has undergone clinical trials for dry eye and neurotrophic keratopathy.',

  tldr: 'The full-length 43-amino acid parent protein of TB-500. Found in nearly all human tissues, with the most advanced clinical application being RGN-259 eye drops for corneal healing.',

  overview:
    'Thymosin Beta-4 (Tβ4) is a naturally occurring 43-amino acid peptide and the most abundant member of the beta-thymosin family. It is found in virtually all human tissues and cell types, with particularly high concentrations in blood platelets, wound fluid, and developing tissues.\n\nTβ4 is the full-length parent protein from which the commercially available fragment TB-500 is derived. While TB-500 contains the active region (amino acids 17–23, the actin-binding domain), full-length Tβ4 carries additional biological functions beyond actin sequestration, including roles in gene regulation, anti-inflammatory signaling, and stem cell recruitment.\n\nResearch interest in Tβ4 spans wound healing, cardiac repair following myocardial infarction, corneal healing, neurological repair, and hair follicle growth. Its role as a major actin-sequestering protein gives it fundamental importance in cell motility, migration, and tissue remodeling.',

  mechanismOfAction:
    'Thymosin Beta-4\'s primary intracellular function is sequestration of monomeric G-actin, maintaining the pool of unpolymerized actin available for rapid cytoskeletal reorganization. This is critical for cell migration, a fundamental process in wound healing and tissue repair.\n\nBeyond actin binding, Tβ4 promotes angiogenesis by upregulating VEGF and stimulating endothelial cell migration and tube formation. It activates the Akt/PI3K survival pathway, which protects cells from apoptosis under stress conditions, notably in cardiac myocytes following ischemic injury.\n\nTβ4 exerts potent anti-inflammatory effects by downregulating inflammatory cytokines and inhibiting NF-κB signaling. It promotes the migration of stem and progenitor cells to injury sites and stimulates differentiation of epicardial progenitor cells into cardiomyocytes in cardiac repair models.\n\nIn corneal healing, Tβ4 accelerates re-epithelialization, reduces inflammation, and decreases scarring. It also promotes laminin-5 production, which is essential for basement membrane integrity and epithelial cell adhesion.',

  researchSummary:
    'Thymosin Beta-4 has been studied across a wide range of therapeutic areas. Cardiac research represents one of the most developed applications: studies in mouse models of myocardial infarction demonstrated that Tβ4 administration reduced scar size, improved cardiac function, and activated epicardial progenitor cells to differentiate into new cardiomyocytes (Bock-Marquette et al., 2004).\n\nOcular research has progressed furthest toward clinical application. RegeneRx Biopharmaceuticals\' RGN-259 (topical Tβ4 eye drops) has completed Phase II and Phase III clinical trials for dry eye syndrome and neurotrophic keratopathy. These trials showed statistically significant improvements in corneal staining scores and symptom relief.\n\nDermal wound healing studies show Tβ4 accelerates full-thickness wound closure, promotes angiogenesis at wound sites, and improves collagen deposition. Research in diabetic wound models is particularly promising given the impaired healing in these patients.\n\nNeurological research demonstrates neuroprotective effects in models of traumatic brain injury and multiple sclerosis, including promotion of oligodendrocyte differentiation and remyelination.\n\nIt is critical to distinguish Tβ4 from TB-500: TB-500 is a synthetic fragment containing the active actin-binding region, while Tβ4 is the full 43-amino acid protein with additional biological activities. Most clinical research (including RGN-259) uses the full-length Tβ4.',

  citations: [
    {
      title: 'Thymosin beta4 activates integrin-linked kinase and promotes cardiac cell migration, survival and cardiac repair',
      authors: 'Bock-Marquette I, Saxena A, White MD, DiMaio JM, Srivastava D',
      journal: 'Nature',
      year: 2004,
      doi: '10.1038/nature02943',
      summary: 'Landmark study demonstrating that Tβ4 promotes cardiac cell survival after ischemic injury through activation of integrin-linked kinase (ILK) and Akt, and promotes cardiac repair in mouse MI models.',
    },
    {
      title: 'Thymosin β4 promotes angiogenesis, wound healing, and hair follicle development',
      authors: 'Philp D, Kleinman HK',
      journal: 'Annals of the New York Academy of Sciences',
      year: 2010,
      doi: '10.1111/j.1749-6632.2010.05626.x',
      summary: 'Review of Tβ4\'s pro-angiogenic activity, evidence for accelerated dermal wound healing, and its role in promoting hair follicle stem cell migration and differentiation.',
    },
    {
      title: 'Thymosin β4 eye drops (RGN-259) in dry eye: results of a randomized clinical trial',
      authors: 'Sosne G, Ousler GW',
      journal: 'Clinical Ophthalmology',
      year: 2015,
      doi: '10.2147/OPTH.S73738',
      summary: 'Phase II clinical trial demonstrating that RGN-259 (topical Tβ4) significantly improved signs and symptoms of dry eye syndrome compared to placebo.',
    },
    {
      title: 'Thymosin beta 4: a multi-functional regenerative peptide. Basic properties and clinical applications',
      authors: 'Goldstein AL, Hannappel E, Sosne G, Kleinman HK',
      journal: 'Expert Opinion on Biological Therapy',
      year: 2012,
      doi: '10.1517/14712598.2012.690496',
      summary: 'Comprehensive review covering Tβ4\'s molecular biology, regenerative properties across tissue types, and clinical development pipeline including ophthalmic and cardiac applications.',
    },
  ],

  protocols: [
    {
      name: 'Systemic recovery (research-based)',
      route: 'Subcutaneous injection',
      typicalDose: '2–5 mg',
      frequency: '2–3 times per week',
      cycleDuration: '4–8 weeks',
      notes: 'Higher dosing reflects the full-length protein vs. the TB-500 fragment. Often front-loaded with daily injections for the first 1–2 weeks before transitioning to maintenance frequency.',
    },
    {
      name: 'Acute injury support (research-based)',
      route: 'Subcutaneous injection',
      typicalDose: '5 mg',
      frequency: 'Daily for 7–14 days, then 2x/week',
      cycleDuration: '4–6 weeks total',
      notes: 'Loading protocol used in research contexts for acute tissue injuries. Inject near the injury site when feasible.',
    },
    {
      name: 'Topical ophthalmic (clinical)',
      route: 'Topical (eye drops)',
      typicalDose: '0.1% solution (RGN-259 formulation)',
      frequency: '2–4 times daily',
      cycleDuration: '14–28 days per clinical trial protocols',
      notes: 'Based on RGN-259 clinical trial dosing for dry eye and neurotrophic keratopathy. This is the most clinically advanced application.',
    },
  ],

  protocolDisclaimer:
    'These protocols are compiled from published research and clinical trial data. They are not medical recommendations. Tβ4 is not FDA-approved for systemic human use. The topical ophthalmic formulation (RGN-259) remains investigational. Consult a qualified healthcare professional before use.',

  sideEffects: [
    { effect: 'Injection site irritation', frequency: 'common', details: 'Redness, mild swelling, or discomfort at the injection site. Typically resolves within 24 hours.' },
    { effect: 'Fatigue', frequency: 'uncommon', details: 'Transient tiredness reported in the first days of use, usually self-limiting.' },
    { effect: 'Headache', frequency: 'uncommon', details: 'Mild headache reported anecdotally, generally in the initial dosing period.' },
    { effect: 'Nausea', frequency: 'rare', details: 'Occasional reports, more common at higher doses.' },
  ],

  contraindications: [
    'Active cancer or history of cancer (Tβ4 promotes angiogenesis and cell migration, which could theoretically support tumor growth)',
    'Pregnancy or breastfeeding (insufficient safety data)',
    'Known hypersensitivity to thymosin proteins',
  ],

  interactions: [
    'May potentiate the effects of anticoagulants due to interactions with platelet-derived Tβ4 and effects on cell migration',
    'Potential interaction with immunosuppressive medications given Tβ4\'s immune-modulatory properties',
    'Theoretical synergy with other pro-angiogenic agents — use caution with VEGF-modulating therapies',
  ],

  storage: {
    lyophilized: 'Store at -20°C for long-term stability (up to 24 months). Short-term storage at 2–8°C is acceptable.',
    reconstituted: 'Refrigerated (2–8°C), use within 14–21 days',
    reconstitutionSolvent: 'Bacteriostatic water (BAC water)',
    reconstitutionNotes: 'Add solvent slowly along the vial wall. Do not shake — swirl gently until fully dissolved. Standard reconstitution: 2 mL BAC water into a 5 mg vial yields 2,500 mcg/mL (2.5 mg/mL).',
  },

  relatedPeptideSlugs: ['tb-500', 'bpc-157'],
  synergyNotes: 'Tβ4 is the parent protein from which TB-500 (the active fragment) is derived. While frequently compared to TB-500, full-length Tβ4 carries additional biological functions. Often combined with BPC-157 for comprehensive healing — Tβ4 promotes cell migration and anti-inflammation while BPC-157 drives angiogenesis.',

  metaDescription: 'Thymosin Beta-4 (Tβ4) is a 43-amino acid regenerative peptide researched for wound healing, cardiac repair, and corneal healing. Mechanisms, clinical trials, protocols, and comparison with TB-500.',

  faqItems: [
    {
      question: 'What is the difference between Thymosin Beta-4 and TB-500?',
      answer: 'Thymosin Beta-4 (Tβ4) is the full-length 43-amino acid naturally occurring protein. TB-500 is a synthetic peptide fragment corresponding to the active actin-binding region of Tβ4 (amino acids 17–23). While TB-500 retains the core cell-migration and healing properties, full-length Tβ4 has additional biological functions including gene regulation and broader anti-inflammatory signaling. Clinical research (such as RGN-259 eye drops) uses the full-length Tβ4.',
    },
    {
      question: 'What is RGN-259?',
      answer: 'RGN-259 is a topical ophthalmic formulation of Thymosin Beta-4 developed by RegeneRx Biopharmaceuticals. It has been tested in Phase II and Phase III clinical trials for dry eye syndrome and neurotrophic keratopathy, showing significant improvement in corneal healing and symptom relief. It represents the furthest clinical advancement of any Tβ4 application.',
    },
    {
      question: 'Can Thymosin Beta-4 help with heart damage?',
      answer: 'Preclinical research is promising. A landmark 2004 study in Nature showed that Tβ4 reduced scar size and improved cardiac function in mouse models of myocardial infarction by activating cardiac progenitor cells and promoting survival of cardiac myocytes. However, no completed human clinical trials for cardiac applications have been published.',
    },
    {
      question: 'Is Thymosin Beta-4 safe?',
      answer: 'Tβ4 has shown a favorable safety profile in clinical trials for ophthalmic applications (RGN-259). Animal studies at research doses have not demonstrated significant toxicity. However, long-term systemic safety data in humans is limited. The primary theoretical concern is its pro-angiogenic nature, which could be contraindicated in individuals with active cancer.',
    },
    {
      question: 'How is Thymosin Beta-4 administered?',
      answer: 'For systemic applications, Tβ4 is typically administered via subcutaneous injection. The most clinically developed route is topical ophthalmic application (eye drops) for corneal conditions. Oral bioavailability of the full-length protein is very limited, unlike BPC-157 which is gastric-juice stable.',
    },
  ],
};
