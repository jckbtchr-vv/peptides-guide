import { Peptide } from '../types';

export const dsip: Peptide = {
  slug: 'dsip',
  name: 'DSIP',
  fullName: 'Delta Sleep-Inducing Peptide (DSIP)',
  aliases: ['DSIP', 'Delta Sleep Peptide', 'Factor Delta'],
  sequence: 'Trp-Ala-Gly-Gly-Asp-Ala-Ser-Gly-Glu',
  molecularWeight: '848.81 g/mol',
  class: 'Endogenous nonapeptide',
  halfLife: '~7–8 minutes (rapid enzymatic degradation)',
  administrationRoute: 'Subcutaneous injection, intravenous, intranasal',

  categories: ['cognitive'],
  primaryCategory: 'cognitive',
  status: 'research',
  regulatoryNote: 'Not approved by the FDA or EMA. Used clinically in Russia and parts of Europe for insomnia and stress-related disorders. Available through research and compounding channels.',

  tldr: 'A nonapeptide that promotes delta wave sleep without sedation by normalizing sleep architecture. Also researched for stress adaptation and cortisol regulation.',

  overview:
    'DSIP (Delta Sleep-Inducing Peptide) is an endogenous nonapeptide first isolated from the cerebral venous blood of rabbits during electrically induced sleep in 1977 by Swiss researchers Schoenenberger and Monnier. It was named for its ability to promote delta wave (slow-wave) sleep in recipient animals.\n\nDSIP is not a sedative or hypnotic in the conventional sense. Rather than forcing sleep, it appears to normalize disrupted sleep architecture — promoting the natural transition into deep, restorative delta wave sleep. This distinction is critical: DSIP modulates the sleep process without the cognitive suppression or dependency risks associated with benzodiazepines or Z-drugs.\n\nBeyond sleep, DSIP has been researched for stress adaptation, cortisol modulation, luteinizing hormone (LH) regulation, and even opioid withdrawal support. It has seen clinical use in Russia and parts of Europe since the 1980s, primarily for chronic insomnia and stress-related neuroendocrine dysfunction.',

  mechanismOfAction:
    'The precise mechanism of action for DSIP remains incompletely understood, which is part of what makes it scientifically fascinating. It does not appear to bind to a single identified receptor. Instead, it acts as a modulatory peptide across multiple systems.\n\nDSIP promotes delta wave sleep (Stage 3 NREM sleep) by influencing the ratio of sleep stages rather than inducing unconsciousness. It appears to normalize the ultradian sleep cycle, increasing time spent in slow-wave sleep without suppressing REM sleep.\n\nDSIP modulates the hypothalamic-pituitary-adrenal (HPA) axis. Studies show it reduces basal and stress-induced cortisol and ACTH secretion, which may underlie its stress-adaptive properties. By dampening excessive cortisol output, DSIP helps restore the natural circadian cortisol rhythm that is often disrupted in chronic insomnia.\n\nDSIP influences luteinizing hormone (LH) and growth hormone (GH) secretion, both of which peak during deep sleep. By promoting delta wave sleep, DSIP indirectly supports the nocturnal hormonal pulses critical for recovery, reproductive health, and tissue repair.\n\nAdditionally, DSIP has demonstrated antioxidant properties and may limit lipid peroxidation under stress conditions. Some research suggests it modulates opioid receptor signaling, which has been explored in the context of withdrawal and pain management.',

  researchSummary:
    'DSIP research spans from its discovery in 1977 through several decades of primarily European and Russian investigation. The earliest studies by Schoenenberger and Monnier established its delta sleep-promoting effects through cross-circulation experiments in rabbits.\n\nHuman studies conducted in the 1980s and 1990s — primarily in Switzerland, Germany, and Russia — demonstrated improvements in sleep onset latency, sleep efficiency, and subjective sleep quality in patients with chronic insomnia. Importantly, these studies noted the absence of morning grogginess or rebound insomnia upon discontinuation.\n\nStress and cortisol research showed that DSIP administration reduced cortisol levels in stressed subjects and normalized the diurnal cortisol curve. A study in chronic insomnia patients found that DSIP restored the normal evening decline in cortisol that is typically blunted in sleep-disordered individuals.\n\nPilot studies on opioid and alcohol withdrawal explored DSIP as a supportive agent, with some reports of reduced withdrawal severity, though this evidence remains preliminary.\n\nLimitations: Much of the research is from the 1980s–1990s. The peptide\'s short half-life and rapid degradation have complicated dosing standardization. No large-scale, modern randomized controlled trials have been conducted. The mechanism of action remains only partially elucidated.',

  citations: [
    {
      title: 'The delta sleep-inducing peptide (DSIP): A review of its properties and clinical potential',
      authors: 'Schoenenberger GA, Monnier M.',
      journal: 'International Journal of Neuroscience',
      year: 1977,
      doi: '10.3109/00207457709147283',
      summary: 'The original characterization of DSIP, describing its isolation from rabbit cerebral venous blood and its ability to promote delta wave sleep patterns in recipient animals.',
    },
    {
      title: 'DSIP — a tool for studying the sleep-wake cycle',
      authors: 'Graf MV, Kastin AJ.',
      journal: 'Peptides',
      year: 1984,
      doi: '10.1016/0196-9781(84)90163-3',
      summary: 'Comprehensive review of DSIP pharmacology, examining its neuromodulatory effects on sleep architecture and its interactions with multiple neurotransmitter systems.',
    },
    {
      title: 'Effects of DSIP on the sleep EEG in insomniacs',
      authors: 'Schneider-Helmert D.',
      journal: 'European Neurology',
      year: 1985,
      doi: '10.1159/000115994',
      summary: 'Clinical study demonstrating that DSIP improved sleep quality and increased delta wave activity in chronic insomnia patients without sedative side effects or morning impairment.',
    },
    {
      title: 'DSIP and cortisol modulation in stress-related insomnia',
      authors: 'Kovalzon VM, Strekalova TV.',
      journal: 'Neuroscience and Behavioral Physiology',
      year: 2006,
      doi: '10.1007/s11055-006-0174-z',
      summary: 'Demonstrated that DSIP reduces stress-induced cortisol elevations and normalizes the circadian cortisol pattern in individuals with stress-related sleep disorders.',
    },
  ],

  protocols: [
    {
      name: 'Sleep normalization',
      route: 'Subcutaneous injection',
      typicalDose: '100–300 mcg',
      frequency: 'Once daily, 30–60 minutes before bedtime',
      cycleDuration: '10–14 days on, followed by assessment',
      notes: 'Start at the lower end (100 mcg) and titrate based on response. Effects may take 2–3 nights to become apparent as sleep architecture gradually normalizes. Not a knockout agent — avoid expecting immediate sedation.',
    },
    {
      name: 'Stress-related sleep disruption',
      route: 'Subcutaneous injection',
      typicalDose: '200–400 mcg',
      frequency: 'Once daily before bedtime',
      cycleDuration: '14–30 days',
      notes: 'Higher doses may be warranted when cortisol dysregulation is a primary contributor. Some protocols include morning cortisol testing to monitor HPA axis normalization. Can be combined with magnesium and glycine.',
    },
    {
      name: 'Intranasal administration',
      route: 'Intranasal',
      typicalDose: '200–500 mcg',
      frequency: 'Once daily before bedtime',
      cycleDuration: '10–14 days',
      notes: 'Intranasal delivery is less studied but offers convenience. Bioavailability may be lower than injection. Some users report it is effective for mild sleep disruption but insufficient for severe insomnia.',
    },
  ],

  protocolDisclaimer:
    'DSIP is not FDA-approved and is classified as a research peptide. These protocols are derived from published studies and clinical use in Russia/Europe. There is no standardized dosing guideline. Consult a healthcare professional before use.',

  sideEffects: [
    { effect: 'Injection site reactions', frequency: 'common', details: 'Mild redness, itching, or swelling at the injection site. Usually resolves within hours.' },
    { effect: 'Vivid dreams', frequency: 'uncommon', details: 'Some users report unusually vivid or memorable dreams, likely related to changes in sleep stage distribution.' },
    { effect: 'Morning grogginess', frequency: 'rare', details: 'Uncommon and typically associated with higher doses. Far less frequent than with pharmaceutical sleep aids.' },
    { effect: 'Headache', frequency: 'rare', details: 'Occasionally reported. May be related to dehydration or individual sensitivity.' },
  ],

  contraindications: [
    'Known hypersensitivity to DSIP or any component of the formulation',
    'Pregnancy or breastfeeding (insufficient safety data)',
    'Severe hepatic or renal impairment (altered peptide clearance)',
    'Concurrent use of CNS depressants without medical supervision',
  ],

  storage: {
    lyophilized: 'Refrigerated (2–8°C), stable for 12–24 months. Can be stored at -20°C for extended periods.',
    reconstituted: 'Refrigerated (2–8°C), use within 14–21 days',
    reconstitutionSolvent: 'Bacteriostatic water',
    reconstitutionNotes: 'Reconstitute gently — do not shake. DSIP is sensitive to enzymatic degradation; ensure sterile technique. Typical reconstitution yields 100–200 mcg per 0.1 mL for subcutaneous dosing.',
  },

  relatedPeptideSlugs: ['semax', 'selank'],
  synergyNotes: 'DSIP addresses sleep architecture while Semax and Selank address daytime cognitive function and anxiety. The combination targets the full 24-hour cycle: restorative sleep at night via DSIP, and enhanced cognitive performance and emotional regulation during the day via Semax/Selank.',

  metaDescription: 'DSIP (Delta Sleep-Inducing Peptide) promotes delta wave sleep without sedation. Research on sleep normalization, cortisol modulation, and stress adaptation. Mechanisms, protocols, and evidence.',

  faqItems: [
    {
      question: 'What is DSIP and how does it differ from sleeping pills?',
      answer: 'DSIP is a naturally occurring nonapeptide that promotes delta wave (deep) sleep by normalizing sleep architecture. Unlike benzodiazepines or Z-drugs, it does not sedate or suppress brain activity. It works by restoring the natural sleep cycle rather than forcing unconsciousness, resulting in no dependency, no morning grogginess, and no rebound insomnia.',
    },
    {
      question: 'How long does it take for DSIP to work?',
      answer: 'DSIP is not a fast-acting sleep aid. Most users report gradual improvement over 2–5 nights as sleep architecture normalizes. Some notice improved sleep quality on the first night, but the full effect typically builds over the first week of consistent use.',
    },
    {
      question: 'Does DSIP affect cortisol levels?',
      answer: 'Yes. Research shows DSIP reduces stress-induced cortisol secretion and helps restore the normal circadian cortisol rhythm — high in the morning, declining through the day. This HPA axis modulation may be a primary mechanism behind its sleep-promoting and stress-adaptive effects.',
    },
    {
      question: 'Can DSIP be used long-term?',
      answer: 'Clinical data on long-term use is limited. Most studied protocols run 10–30 days. Unlike pharmaceutical sleep aids, DSIP has not shown tolerance or dependency in available studies. However, cycling (10–14 days on, then off) is commonly recommended as a precaution.',
    },
    {
      question: 'Is DSIP a peptide or a drug?',
      answer: 'DSIP is an endogenous peptide — your body naturally produces it. Supplemental DSIP is a synthetic version of the same nonapeptide. It is classified as a research compound, not an approved drug in Western countries, though it has been used clinically in Russia and Europe.',
    },
  ],
};
