import { Peptide } from '../types';

export const suramin: Peptide = {
  slug: 'suramin',
  name: 'Suramin',
  fullName: 'Suramin (Germanin / Bayer 205)',
  aliases: ['Germanin', 'Bayer 205', 'Suramin Sodium', 'Antrypol'],
  molecularWeight: '1297.26 g/mol (hexasodium salt)',
  class: 'Polysulfonated naphthylurea (small molecule antiparasitic)',
  halfLife: '~44–54 days (extremely long, binds to serum proteins)',
  administrationRoute: 'Intravenous (clinical); low-dose IV for research',

  categories: ['immune-gut'],
  primaryCategory: 'immune-gut',
  status: 'approved',
  regulatoryNote: 'WHO Essential Medicine for African trypanosomiasis (sleeping sickness) and river blindness. Not FDA-approved in the US. Investigational for autism spectrum disorder (ASD) — early pilot trials by Robert Naviaux at UCSD.',

  tldr: 'A century-old antiparasitic drug being researched for autism through antipurinergic therapy. A small pilot trial at UCSD showed improvements in core autism symptoms, but evidence is extremely preliminary.',

  eli5: 'A 100-year-old drug for parasites that a researcher at UCSD thinks might help with autism. His theory: autism involves cells stuck in \'danger mode,\' and suramin turns off that signal. One tiny pilot study showed improvements, but it\'s extremely preliminary.',

  overview:
    'Suramin is a century-old polyanionic compound originally developed by Bayer in 1916 for the treatment of African trypanosomiasis (sleeping sickness) and onchocerciasis (river blindness). It remains on the WHO List of Essential Medicines for these indications and has been in continuous clinical use in sub-Saharan Africa for over 100 years.\n\nSuramin is NOT a peptide. It is a large, symmetrical polysulfonated naphthylurea — a synthetic small molecule with a complex structure. It is included in this guide because of its growing relevance to the biohacking and functional medicine community, particularly through the work of Robert Naviaux at UC San Diego.\n\nNaviaux\'s antipurinergic therapy (APT) hypothesis proposes that autism spectrum disorder involves a sustained cellular danger response (CDR) mediated by extracellular ATP and purinergic signaling. Suramin, as a broad purinergic receptor antagonist, may interrupt this danger response. A small pilot trial showed measurable improvements in core autism symptoms, generating significant attention. However, the evidence base remains extremely preliminary.',

  mechanismOfAction:
    'Suramin\'s mechanisms are multi-layered, reflecting its complex pharmacology as a large polyanion with numerous molecular interactions.\n\nAs an antiparasitic: Suramin inhibits multiple trypanosomal enzymes, particularly glycolytic enzymes that are essential for parasite energy metabolism. Its large negative charge allows it to bind electrostatically to positively charged enzyme active sites.\n\nAs an antipurinergic agent: Suramin is a non-selective antagonist at purinergic receptors (P2X and P2Y families). These receptors are activated by extracellular ATP and other nucleotides. In Naviaux\'s cellular danger response (CDR) model, stressed or damaged cells release ATP as an extracellular danger signal. This purinergic signaling activates inflammatory and defensive pathways. In autism, the hypothesis is that this danger response becomes chronically activated, altering neural development and function.\n\nBy blocking purinergic receptors, suramin may reset the CDR — allowing cells to transition from a defensive state back to normal metabolism, growth, and differentiation. In animal models of autism (maternal immune activation), a single dose of suramin normalized over 90% of the metabolic abnormalities associated with the autism-like phenotype.\n\nSuramin also inhibits a wide range of other targets: complement cascade components, P2 receptors on immune cells, several growth factor receptors, and various serine proteases. This broad activity profile contributes to both its therapeutic potential and its toxicity concerns.',

  researchSummary:
    'The most notable modern research on suramin comes from Robert Naviaux\'s laboratory at UC San Diego. In 2014, Naviaux published a landmark animal study showing that a single injection of suramin reversed autism-like behaviors in the maternal immune activation (MIA) mouse model. Treated mice showed normalized social behavior, reduced repetitive behaviors, and improved metabolism.\n\nIn 2017, Naviaux conducted a small, randomized, double-blind, placebo-controlled Phase 1/2 pilot trial in 10 boys with autism (ages 5–14). Five received a single low-dose IV suramin infusion (20 mg/kg), and five received placebo. The suramin group showed improvements in language, social interaction, and decreased restricted behaviors measured by ADOS and ABC scores. Effects were observed within days and lasted several weeks before gradually waning.\n\nCritical caveats: This was a 10-person pilot trial — far too small to establish efficacy. The improvements, while statistically measurable, were modest. The study was designed primarily to assess safety, not prove effectiveness.\n\nSuramin\'s extremely long half-life (44–54 days) and known toxicity profile at antiparasitic doses (including adrenal insufficiency, renal toxicity, and peripheral neuropathy) present significant challenges. The autism research uses much lower doses than antiparasitic treatment, but long-term safety at any dose in children is unknown.\n\nA larger Phase 2 trial was planned but has faced funding and logistical challenges. As of 2024, antipurinergic therapy remains a compelling hypothesis without robust clinical validation.',

  citations: [
    {
      title: 'Antipurinergic therapy corrects the autism-like features in the poly(IC) mouse model',
      authors: 'Naviaux RK, et al.',
      journal: 'PLoS ONE',
      year: 2013,
      doi: '10.1371/journal.pone.0057380',
      summary: 'Demonstrated that a single dose of suramin reversed autism-like social and metabolic abnormalities in the maternal immune activation mouse model, establishing the antipurinergic therapy hypothesis.',
    },
    {
      title: 'Low-dose suramin in autism spectrum disorder: a small, phase I/II, randomized clinical trial',
      authors: 'Naviaux RK, et al.',
      journal: 'Annals of Clinical and Translational Neurology',
      year: 2017,
      doi: '10.1002/acn3.424',
      summary: 'First-in-human pilot trial showing that a single low-dose suramin infusion produced measurable improvements in language, social behavior, and restricted behaviors in boys with autism.',
    },
    {
      title: 'Metabolic features of the cell danger response',
      authors: 'Naviaux RK.',
      journal: 'Mitochondrion',
      year: 2014,
      doi: '10.1016/j.mito.2013.08.006',
      summary: 'Foundational paper describing the cellular danger response (CDR) framework, proposing that chronic CDR activation through purinergic signaling may underlie autism and other chronic diseases.',
    },
  ],

  protocols: [
    {
      name: 'Autism research protocol (Naviaux pilot trial)',
      route: 'Intravenous infusion',
      typicalDose: '20 mg/kg as a single IV infusion',
      frequency: 'Single dose in the pilot trial',
      cycleDuration: 'Effects observed for 5–8 weeks after single dose',
      notes: 'This protocol was used in a small pilot trial under strict medical supervision with continuous monitoring. Suramin at this dose is well below the antiparasitic dose (1g IV weekly). Do NOT attempt to replicate this outside a clinical research setting. Repeat dosing intervals have not been established for this indication.',
    },
    {
      name: 'Antiparasitic (standard clinical use)',
      route: 'Intravenous',
      typicalDose: 'Test dose of 100–200 mg, then 1 g IV on days 1, 3, 7, 14, 21',
      frequency: 'Per WHO treatment protocol',
      cycleDuration: '5 doses over 3 weeks',
      notes: 'Standard WHO protocol for African trypanosomiasis. Administered only in endemic regions under medical supervision. A test dose is given first to check for anaphylaxis. Cumulative toxicity is a concern at these higher doses.',
    },
  ],

  protocolDisclaimer:
    'Suramin is a potent pharmaceutical with significant toxicity at standard antiparasitic doses. The autism research uses much lower doses but remains highly experimental. Suramin is NOT available as a consumer supplement and should NOT be self-administered. All use should be under direct medical supervision in a clinical or research setting.',

  sideEffects: [
    { effect: 'Transient rash', frequency: 'common', details: 'Skin rash was reported in the pilot autism trial, likely related to mast cell activation. Resolved without treatment.' },
    { effect: 'Adrenal insufficiency', frequency: 'uncommon', details: 'More relevant at antiparasitic doses. Suramin can impair adrenal cortex function. Monitor cortisol levels with repeated dosing.' },
    { effect: 'Renal toxicity', frequency: 'uncommon', details: 'Proteinuria and renal impairment are documented at higher doses. Renal function monitoring is required during treatment.' },
    { effect: 'Peripheral neuropathy', frequency: 'rare', details: 'Reported with prolonged or high-dose use. The extremely long half-life means toxicity can accumulate over weeks.' },
    { effect: 'Anaphylactoid reactions', frequency: 'rare', details: 'Rare but serious. A test dose is standard practice before full antiparasitic dosing.' },
  ],

  contraindications: [
    'Known hypersensitivity to suramin',
    'Renal insufficiency or existing nephropathy',
    'Adrenal insufficiency',
    'Pregnancy or breastfeeding (teratogenic potential)',
    'Hepatic impairment (altered drug binding and clearance)',
  ],

  storage: {
    lyophilized: 'Room temperature (15–25°C), protected from light, stable for years in sealed ampules',
    reconstituted: 'Use immediately after reconstitution. Prepared fresh for IV administration.',
    reconstitutionSolvent: 'Sterile water for injection',
    reconstitutionNotes: 'Suramin is provided as a powder for injection in sealed ampules (typically 1 g). Dissolve in 10 mL sterile water for injection to yield a 10% solution. Administer as a slow IV infusion. Do not mix with other drugs in the same infusion line.',
  },

  relatedPeptideSlugs: ['bpc-157', 'thymosin-alpha-1'],
  synergyNotes: 'Suramin is not typically combined with peptides in clinical practice. Its relevance to the peptide community is through the antipurinergic therapy hypothesis and broader interest in immune modulation. BPC-157 and Thymosin Alpha-1 are related through their immune-modulatory properties, though their mechanisms are entirely distinct from suramin.',

  metaDescription: 'Suramin is a century-old antiparasitic drug being researched for autism via antipurinergic therapy. Robert Naviaux pilot trial data, CDR hypothesis, mechanisms, and safety profile.',

  faqItems: [
    {
      question: 'Is suramin a peptide?',
      answer: 'No. Suramin is a large synthetic polysulfonated naphthylurea — a small molecule drug, not a peptide. It is included in this guide due to its relevance to the biohacking and functional medicine community, particularly around autism research and immune modulation.',
    },
    {
      question: 'Can suramin cure autism?',
      answer: 'No. A single 10-person pilot trial showed modest, temporary improvements in some autism symptoms. This is extremely preliminary evidence. The antipurinergic therapy hypothesis is scientifically interesting but far from validated. Do not interpret pilot trial results as proof of efficacy.',
    },
    {
      question: 'Is suramin safe for children?',
      answer: 'Suramin has known toxicity at standard antiparasitic doses including renal damage, adrenal insufficiency, and peripheral neuropathy. The autism pilot trial used a much lower dose and showed a mild side effect profile, but long-term safety in children has not been established. Its extremely long half-life (44–54 days) means any toxicity can persist for weeks.',
    },
    {
      question: 'Where can I get suramin?',
      answer: 'Suramin is not available as a consumer supplement or prescription drug in Western countries. It is available through the WHO for parasitic disease treatment in endemic regions. For autism research, it is only accessible through clinical trials. Do not attempt to source suramin from unregulated channels.',
    },
    {
      question: 'What is the cell danger response (CDR)?',
      answer: 'The CDR is a framework proposed by Robert Naviaux describing how cells shift into a defensive metabolic state when threatened. Extracellular ATP acts as a danger signal through purinergic receptors. The hypothesis proposes that in autism, this danger response becomes chronically activated, disrupting normal neural development. Suramin, by blocking purinergic receptors, may help reset this response.',
    },
  ],
};
