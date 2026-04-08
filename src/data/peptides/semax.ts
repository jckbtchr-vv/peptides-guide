import { Peptide } from '../types';

export const semax: Peptide = {
  slug: 'semax',
  name: 'Semax',
  fullName: 'Semax (Synthetic ACTH 4-10 Analog)',
  aliases: ['SEMAX', 'Heptapeptide SEMAX'],
  sequence: 'Met-Glu-His-Phe-Pro-Gly-Pro',
  molecularWeight: '813.93 g/mol',
  class: 'Synthetic melanocortin/ACTH analog',
  halfLife: '~3–5 minutes (intranasal onset rapid, effects last hours)',
  administrationRoute: 'Intranasal',

  categories: ['cognitive'],
  primaryCategory: 'cognitive',
  status: 'approved',
  regulatoryNote: 'Approved in Russia and Ukraine as a prescription nootropic. Not FDA-approved in the United States.',

  overview:
    'Semax is a synthetic heptapeptide analog of ACTH (adrenocorticotropic hormone) fragments 4-10, with an added Pro-Gly-Pro sequence at the C-terminus for enhanced stability. Developed at the Institute of Molecular Genetics of the Russian Academy of Sciences in the 1980s, it has been used clinically in Russia since 1994.\n\nSemax is classified as a nootropic and neuroprotective agent. It is prescribed in Russia for cognitive enhancement, stroke recovery, peptic ulcers, optic nerve disease, and as a treatment for attention disorders. It is administered intranasally and has a rapid onset of action.\n\nUnlike many ACTH-derived peptides, Semax does not exhibit hormonal (corticotropic) activity — it does not stimulate the adrenal glands or increase cortisol levels. Its effects are mediated through neurotrophic factor modulation.',

  mechanismOfAction:
    'Semax acts primarily through upregulation of brain-derived neurotrophic factor (BDNF) and its receptor TrkB. BDNF is critical for neuronal survival, synaptic plasticity, and memory formation. Studies show Semax increases BDNF mRNA expression in the hippocampus and cortex.\n\nIt also modulates nerve growth factor (NGF) and neurotrophin-3 (NT-3) expression, supporting broader neurotrophic signaling. This multi-target neurotrophic approach distinguishes Semax from single-pathway nootropics.\n\nSemax influences the serotonergic and dopaminergic systems. It modulates dopamine and serotonin metabolism in brain structures including the striatum and hippocampus, which may underlie its effects on mood, motivation, and attention.\n\nAdditionally, Semax has demonstrated anti-inflammatory effects in the CNS by modulating expression of inflammatory cytokines and chemokines. In stroke models, it reduces the inflammatory cascade that causes secondary brain damage after ischemia.',

  researchSummary:
    'Clinical research on Semax comes predominantly from Russian medical literature. In Russian clinical practice, it has demonstrated efficacy for cognitive enhancement in healthy individuals, with improvements in attention, memory, and mental stamina.\n\nStroke research is perhaps the most robust area. Clinical studies in ischemic stroke patients show improved neurological outcomes, reduced infarct volume, and accelerated recovery when Semax is administered acutely. A study of 100 stroke patients showed significant improvement in NIHSS scores.\n\nBDNF research demonstrates that a single intranasal dose of Semax significantly increases BDNF mRNA expression within 30 minutes, with peak effects at 3–6 hours and sustained elevation for up to 24 hours.\n\nAnimal research shows neuroprotective effects in models of Parkinson\'s disease, Alzheimer\'s disease, and traumatic brain injury. Cognitive enhancement studies in rodents demonstrate improved spatial memory, object recognition, and learning speed.\n\nLimitations: Most clinical data comes from Russian studies, many of which are not indexed in Western databases. Large-scale, placebo-controlled trials meeting Western regulatory standards have not been conducted.',

  citations: [
    {
      title: 'Semax, an ACTH(4-10) analogue with nootropic properties, activates dopaminergic and serotoninergic brain systems',
      authors: 'Eremin KO, et al.',
      journal: 'Neurochemical Research',
      year: 2005,
      doi: '10.1007/s11064-005-6967-x',
      summary: 'Demonstrated that Semax modulates dopamine and serotonin metabolism in the striatum and hippocampus, providing a neurochemical basis for its cognitive effects.',
    },
    {
      title: 'Regulatory peptide semax stimulates the expression of BDNF and its receptors in brain',
      authors: 'Dolotov OV, et al.',
      journal: 'Doklady Biological Sciences',
      year: 2006,
      doi: '10.1134/S0012496606010145',
      summary: 'Showed that a single Semax administration significantly upregulates BDNF and TrkB receptor expression in the hippocampus and basal forebrain within hours.',
    },
    {
      title: 'Semax and Pro-Gly-Pro activate the transcription of neurotrophins and their receptor genes after cerebral ischemia',
      authors: 'Medvedeva EV, et al.',
      journal: 'Cellular and Molecular Neurobiology',
      year: 2017,
      doi: '10.1007/s10571-016-0466-0',
      summary: 'In a cerebral ischemia model, Semax activated expression of BDNF, NGF, NT-3, and their receptors, demonstrating a multi-target neuroprotective mechanism.',
    },
    {
      title: 'Neuroprotective effect of semax in global cerebral ischemia',
      authors: 'Gusev EI, et al.',
      journal: 'Neuroscience and Behavioral Physiology',
      year: 2006,
      doi: '10.1007/s11055-006-0076-0',
      summary: 'Clinical study showing Semax administration in acute ischemic stroke improved neurological outcomes and reduced neural tissue damage compared to standard treatment alone.',
    },
  ],

  protocols: [
    {
      name: 'Cognitive enhancement',
      route: 'Intranasal',
      typicalDose: '200–600 mcg (0.1% solution, 2–3 drops per nostril)',
      frequency: '2–3 times daily',
      cycleDuration: '10–14 days on, 10–14 days off',
      notes: 'Standard 0.1% solution delivers ~50 mcg per drop. Start with lower doses. Best used in the morning and afternoon — avoid evening dosing due to stimulating effects.',
    },
    {
      name: 'Neuroprotection / stroke recovery (clinical)',
      route: 'Intranasal',
      typicalDose: '1,200–1,800 mcg daily (1% solution)',
      frequency: '3 times daily',
      cycleDuration: '5–14 days in acute phase',
      notes: 'Higher-concentration 1% solution used in clinical settings. Administered under medical supervision in Russian clinical protocols.',
    },
  ],

  protocolDisclaimer:
    'Semax is a prescription medication in Russia/Ukraine. It is not FDA-approved in the US. These protocols reflect published research and clinical guidelines from the countries where it is approved. Consult a healthcare professional.',

  sideEffects: [
    { effect: 'Nasal irritation', frequency: 'common', details: 'Mild burning or tingling upon intranasal administration. Usually transient.' },
    { effect: 'Headache', frequency: 'uncommon', details: 'Occasionally reported, particularly at higher doses.' },
    { effect: 'Dizziness', frequency: 'rare' },
    { effect: 'Insomnia', frequency: 'uncommon', details: 'More likely with late-afternoon or evening dosing due to stimulating effects.' },
  ],

  contraindications: [
    'Known hypersensitivity to ACTH-related peptides',
    'Acute psychosis or severe anxiety disorders (stimulating effects may exacerbate)',
    'Pregnancy or breastfeeding (insufficient safety data)',
  ],

  storage: {
    lyophilized: 'Refrigerated (2–8°C), stable for 12–24 months',
    reconstituted: 'Refrigerated (2–8°C), use within 14–21 days',
    reconstitutionSolvent: 'Bacteriostatic water or saline',
    reconstitutionNotes: 'Pre-made nasal spray solutions available from compounding sources. For lyophilized powder: reconstitute with bacteriostatic saline for intranasal use. Standard concentration is 0.1% (1 mg/mL).',
  },

  relatedPeptideSlugs: ['selank', 'dihexa', 'pe-22-28', 'cerebrolysin'],
  synergyNotes: 'Often used alongside Selank, which provides complementary anxiolytic effects. Semax enhances focus and cognition while Selank reduces anxiety — the combination addresses both cognitive performance and emotional resilience.',

  metaDescription: 'Semax is a synthetic ACTH(4-10) analog approved in Russia as a nootropic. It upregulates BDNF, enhances cognition, and provides neuroprotection. Mechanisms, research, and protocols.',

  faqItems: [
    {
      question: 'What is Semax and what does it do?',
      answer: 'Semax is a synthetic peptide derived from ACTH fragments 4-10, approved in Russia as a nootropic since 1994. It upregulates BDNF (brain-derived neurotrophic factor), enhances cognitive function, and provides neuroprotection without hormonal side effects.',
    },
    {
      question: 'Is Semax legal in the US?',
      answer: 'Semax is not FDA-approved in the United States and is not a controlled substance. It exists in a regulatory gray area — not approved as a drug but available through research and compounding channels.',
    },
    {
      question: 'How quickly does Semax work?',
      answer: 'Effects are typically noticed within 15–30 minutes of intranasal administration. BDNF mRNA expression increases within 30 minutes, peaks at 3–6 hours, and remains elevated for up to 24 hours after a single dose.',
    },
    {
      question: 'What is the difference between Semax and Selank?',
      answer: 'Both are Russian-developed peptides. Semax is primarily a cognitive enhancer and neuroprotective agent that upregulates BDNF. Selank is primarily anxiolytic, modulating GABA and serotonin systems. They are often used together for complementary effects.',
    },
  ],
};
