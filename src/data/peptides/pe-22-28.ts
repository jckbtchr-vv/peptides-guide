import { Peptide } from '../types';

export const pe2228: Peptide = {
  slug: 'pe-22-28',
  name: 'PE-22-28',
  fullName: 'PE-22-28 (Spadin Analog / TREK-1 Channel Blocker)',
  aliases: ['PE22-28', 'PE 22-28', 'Spadin analog'],
  sequence: 'Not publicly disclosed (7-amino acid fragment of sortilin propeptide)',
  molecularWeight: '~850 g/mol (estimated)',
  class: 'Sortilin propeptide fragment / TREK-1 channel blocker',
  halfLife: 'Estimated minutes to low hours (limited pharmacokinetic data available)',
  administrationRoute: 'Subcutaneous injection, intranasal (research)',

  categories: ['cognitive'],
  primaryCategory: 'cognitive',
  status: 'experimental',
  regulatoryNote: 'Experimental research compound. Not approved for human use in any country. All data is preclinical. Available through research chemical suppliers.',

  tldr: 'A spadin analog that blocks TREK-1 potassium channels to produce rapid antidepressant-like effects in animal models. Increases BDNF and promotes neuroplasticity through a novel mechanism.',

  eli5: 'A peptide that blocks a specific potassium channel (TREK-1) in the brain, producing rapid antidepressant-like effects in animals. It increases BDNF and promotes brain plasticity through a mechanism completely different from SSRIs. Still very experimental — no human trials.',

  overview:
    'PE-22-28 is a synthetic peptide derived from spadin, which is itself a fragment of the sortilin propeptide (the prodomain of the neurotensin receptor-3/sortilin). It functions as a selective blocker of TREK-1 (TWIK-related potassium channel-1), a two-pore domain potassium channel that has emerged as a novel target for antidepressant and nootropic development.\n\nThe TREK-1 channel was identified as a target for antidepressant therapy when TREK-1 knockout mice exhibited a depression-resistant phenotype. Spadin, a natural peptide fragment that blocks TREK-1, was subsequently shown to produce antidepressant-like effects in rodent models within 4 days — dramatically faster than the 2-4 week onset typical of SSRIs.\n\nPE-22-28 was developed as a shorter, more stable analog of spadin with improved pharmacological properties. It represents a fragment of the original 17-amino acid spadin molecule, retaining TREK-1 blocking activity while offering better stability and potentially improved bioavailability. Research interest centers on its rapid-onset antidepressant-like effects and neuroplasticity-promoting properties.',

  mechanismOfAction:
    'PE-22-28 selectively blocks TREK-1 (TWIK-related potassium channel-1), a background potassium leak channel expressed throughout the brain, with high density in the hippocampus, prefrontal cortex, and serotonergic neurons of the dorsal raphe nucleus.\n\nTREK-1 channels normally maintain the resting membrane potential of neurons in a hyperpolarized (less excitable) state. By blocking these channels, PE-22-28 depolarizes neuronal membranes, increasing the excitability of serotonergic neurons and enhancing serotonin release. This is mechanistically distinct from SSRIs, which block reuptake of already-released serotonin.\n\nThe rapid-onset antidepressant effect of TREK-1 blockade (days vs. weeks for SSRIs) is attributed to immediate enhancement of serotonergic firing, bypassing the desensitization period that delays SSRI therapeutic onset.\n\nBeyond serotonergic effects, TREK-1 blockade by PE-22-28 promotes BDNF expression and enhances neurogenesis in the hippocampal dentate gyrus. Studies show increased dendritic arborization and synaptogenesis following TREK-1 blockade, linking the antidepressant mechanism to structural neuroplasticity.\n\nPE-22-28 also influences the MAPK/ERK and PI3K/Akt signaling pathways, which are central to neuronal survival and synaptic plasticity. These downstream effects mirror those seen with established antidepressants but occur through a distinct upstream mechanism.',

  researchSummary:
    'Research on PE-22-28 builds upon the broader literature of TREK-1 channel pharmacology and the parent compound spadin. Mazella et al. (2010) first identified spadin as an endogenous TREK-1 blocker with antidepressant properties, demonstrating efficacy in the forced swim test and tail suspension test within 4 days of treatment — dramatically faster than fluoxetine (28 days).\n\nPE-22-28 was developed as an optimized fragment of spadin. In rodent models, it reproduces the rapid-onset antidepressant-like effects of the parent compound while offering improved metabolic stability. It demonstrated efficacy in standard depression models including the forced swim test, novelty suppressed feeding test, and chronic mild stress paradigm.\n\nNeuroplasticity studies showed that TREK-1 blockade by spadin analogs increases hippocampal BDNF expression, promotes neurogenesis in the dentate gyrus, and enhances dendritic spine density — structural changes associated with both antidepressant effects and cognitive improvement.\n\nCognitive enhancement research indicates that TREK-1 blockade improves spatial memory and learning in rodent models, potentially through enhanced hippocampal synaptic plasticity and long-term potentiation (LTP).\n\nLimitations: PE-22-28 specifically has limited published literature. Much of the evidence base relies on spadin and other TREK-1 blockers. No human studies exist for PE-22-28 or spadin. The transition from animal depression models to human clinical depression treatment remains unvalidated.',

  citations: [
    {
      title: 'Spadin, a sortilin-derived peptide, targeting rodent TREK-1 channels: a new concept in the antidepressant drug design',
      authors: 'Mazella J, et al.',
      journal: 'PLoS Biology',
      year: 2010,
      doi: '10.1371/journal.pbio.1000355',
      summary: 'The foundational paper identifying spadin as an endogenous TREK-1 channel blocker with rapid-onset antidepressant-like effects in rodent models, establishing the TREK-1 channel as a novel antidepressant target.',
    },
    {
      title: 'The antidepressant spadin acts through TREK-1 potassium channels to reduce the serotonergic system activity',
      authors: 'Devader C, et al.',
      journal: 'Journal of Neurochemistry',
      year: 2015,
      doi: '10.1111/jnc.13181',
      summary: 'Demonstrated that spadin and its analogs enhance serotonergic neuron firing and serotonin release through TREK-1 blockade, providing a mechanistic basis distinct from classical SSRIs.',
    },
    {
      title: 'TREK-1 channel blockade induces an antidepressant-like response synergizing with 5-HT1A receptor signaling',
      authors: 'Heurteaux C, et al.',
      journal: 'Nature Neuroscience',
      year: 2006,
      doi: '10.1038/nn1708',
      summary: 'Landmark study demonstrating that TREK-1 knockout mice display a depression-resistant phenotype and that TREK-1 blockade synergizes with serotonergic signaling, establishing the channel as an antidepressant target.',
    },
    {
      title: 'Spadin analogs: improved TREK-1 inhibitors with enhanced stability and antidepressant activity',
      authors: 'Veyssiere J, et al.',
      journal: 'Journal of Medicinal Chemistry',
      year: 2015,
      doi: '10.1021/jm501826g',
      summary: 'Described the development of shorter spadin analogs including PE-22-28 with improved stability and potent TREK-1 blocking activity, demonstrating antidepressant efficacy in rodent behavioral models.',
    },
  ],

  protocols: [
    {
      name: 'Cognitive enhancement / neuroplasticity (research community)',
      route: 'Subcutaneous injection',
      typicalDose: '50–200 mcg',
      frequency: 'Once daily',
      cycleDuration: '4–8 weeks on, 2–4 weeks off',
      notes: 'No established human dosing data. Community-reported doses extrapolated from rodent studies. The neuroplasticity effects may build over days to weeks of consistent use. Start at the lowest dose to assess tolerance.',
    },
    {
      name: 'Intranasal administration (research)',
      route: 'Intranasal',
      typicalDose: '100–300 mcg',
      frequency: 'Once daily',
      cycleDuration: '4–8 weeks on, 2–4 weeks off',
      notes: 'Intranasal route used by some for direct CNS access. No published pharmacokinetic data for intranasal PE-22-28 in humans. Theoretical rationale based on other intranasal peptide delivery.',
    },
  ],

  protocolDisclaimer:
    'PE-22-28 is an experimental compound with NO human clinical data. All dosing information is extrapolated from animal studies or community anecdotal reports. There is no validated safe or effective dose for humans. Consult a healthcare professional.',

  sideEffects: [
    { effect: 'Injection site reaction', frequency: 'common', details: 'Mild redness, irritation, or transient pain at subcutaneous injection site.' },
    { effect: 'Headache', frequency: 'uncommon', details: 'Reported by some community users. May relate to serotonergic modulation.' },
    { effect: 'Mood changes', frequency: 'uncommon', details: 'As a serotonin-modulating compound, unexpected mood shifts (positive or negative) are theoretically possible.' },
    { effect: 'Sleep disruption', frequency: 'uncommon', details: 'Altered sleep quality or patterns reported occasionally. Serotonin system modulation can influence sleep architecture.' },
  ],

  contraindications: [
    'Concurrent use of SSRIs, SNRIs, or MAOIs (theoretical serotonin syndrome risk)',
    'Bipolar disorder (serotonergic compounds may trigger mania)',
    'Pregnancy or breastfeeding (no safety data)',
    'History of seizures (potassium channel modulation may affect seizure threshold)',
  ],

  interactions: [
    'SSRIs and SNRIs (additive serotonergic effects — potential serotonin syndrome risk)',
    'MAO inhibitors (dangerous interaction potential with any serotonin-modulating compound)',
    'Other potassium channel modulators (unpredictable pharmacodynamic interaction)',
    'Lithium (additive serotonergic effects)',
  ],

  storage: {
    lyophilized: 'Frozen (-20°C) preferred, refrigerated (2–8°C) acceptable, stable for 6–12 months',
    reconstituted: 'Refrigerated (2–8°C), use within 14 days',
    reconstitutionSolvent: 'Bacteriostatic water',
    reconstitutionNotes: 'Reconstitute gently. PE-22-28 is a relatively small peptide and may have limited stability in solution. Smaller reconstitution volumes and shorter storage times are recommended. Protect from light and repeated freeze-thaw cycles.',
  },

  relatedPeptideSlugs: ['semax', 'selank', 'dihexa'],
  synergyNotes: 'PE-22-28 works through a unique mechanism (TREK-1 blockade) distinct from Semax (BDNF upregulation) and Selank (GABA modulation). Theoretical synergy exists for combining TREK-1 blockade with BDNF-enhancing peptides, as both promote neuroplasticity through complementary pathways. No published research validates these combinations.',

  metaDescription: 'PE-22-28 is an experimental spadin analog that blocks TREK-1 potassium channels, promoting rapid neuroplasticity and antidepressant-like effects. Research, mechanisms, and protocols.',

  faqItems: [
    {
      question: 'What is PE-22-28 and how does it work?',
      answer: 'PE-22-28 is a synthetic peptide fragment derived from spadin, which blocks TREK-1 potassium channels in the brain. By blocking these channels, it increases the excitability of serotonergic neurons and promotes BDNF expression and neurogenesis. In rodent models, TREK-1 blockade produces rapid-onset antidepressant-like effects within days rather than weeks.',
    },
    {
      question: 'How is PE-22-28 different from SSRIs?',
      answer: 'SSRIs block the reuptake of serotonin that has already been released. PE-22-28 works upstream — by blocking TREK-1 potassium channels on serotonergic neurons, it directly increases their firing rate and serotonin release. This distinct mechanism may explain why TREK-1 blockers show rapid onset (days) versus SSRIs (weeks) in animal models.',
    },
    {
      question: 'Has PE-22-28 been tested in humans?',
      answer: 'No. PE-22-28 and its parent compound spadin have only been studied in animal models and cell cultures. No human clinical trials have been conducted. All human use is experimental and carries unknown risks.',
    },
    {
      question: 'Can PE-22-28 be used with antidepressants?',
      answer: 'This is NOT recommended without medical supervision. PE-22-28 enhances serotonergic neurotransmission, and combining it with SSRIs, SNRIs, or MAOIs could theoretically increase the risk of serotonin syndrome, a potentially dangerous condition. Always consult a physician before combining serotonin-modulating compounds.',
    },
  ],
};
