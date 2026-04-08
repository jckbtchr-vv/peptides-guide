import { Peptide } from '../types';

export const dihexa: Peptide = {
  slug: 'dihexa',
  name: 'Dihexa',
  fullName: 'Dihexa (N-hexanoic-Tyr-Ile-(6) aminohexanoic amide)',
  aliases: ['Dihexa', 'PNB-0408'],
  sequence: 'N-hexanoic-Tyr-Ile-(6) aminohexanoic amide',
  molecularWeight: '507.63 g/mol',
  class: 'Angiotensin IV analog / HGF mimetic',
  halfLife: 'Estimated hours (oral bioavailability demonstrated in animal models)',
  administrationRoute: 'Subcutaneous injection, oral (research)',

  categories: ['cognitive'],
  primaryCategory: 'cognitive',
  status: 'experimental',
  regulatoryNote: 'Experimental compound with no regulatory approval in any country. All data is preclinical. Not FDA-approved and not approved for human use. Used in research settings only.',

  tldr: 'An angiotensin IV analog reported to be 10 million times more potent than BDNF at promoting synaptogenesis in vitro. Extremely early-stage — no human trials exist and long-term safety is unknown.',

  overview:
    'Dihexa is a synthetic peptide-based compound derived from angiotensin IV, developed by Dr. Joseph Harding and colleagues at Washington State University. It was designed to act as a potent agonist of the hepatocyte growth factor (HGF)/c-Met receptor system, which plays a critical role in synaptogenesis, neuronal survival, and cognitive function.\n\nIn preclinical studies, Dihexa demonstrated extraordinary potency — approximately 10 million times more potent than BDNF in promoting synaptogenesis in vitro. This remarkable potency made it a subject of significant interest in Alzheimer\'s disease and cognitive decline research.\n\nDihexa is notable for having oral bioavailability, a property rare among peptides. In animal models, oral administration produced cognitive enhancement, crossing the blood-brain barrier and reaching effective concentrations in the CNS. The compound emerged from systematic structure-activity optimization of the angiotensin IV family, which had previously shown procognitive effects but lacked metabolic stability.',

  mechanismOfAction:
    'Dihexa acts primarily as a potent activator of the hepatocyte growth factor (HGF)/c-Met receptor signaling pathway. HGF is a pleiotropic growth factor critical for neurodevelopment, synaptic plasticity, and neuronal repair. The c-Met receptor, when activated by HGF, triggers downstream signaling cascades including PI3K/Akt and MAPK/ERK pathways that promote neuronal survival and synaptogenesis.\n\nSpecifically, Dihexa augments HGF\'s binding to c-Met by stabilizing the HGF dimer, which is the active signaling form of the growth factor. This mechanism amplifies endogenous HGF signaling rather than bypassing it entirely, which may account for its favorable safety profile in animal models.\n\nThe synaptogenic potency of Dihexa arises from its ability to drive new dendritic spine formation and strengthen existing synaptic connections. In hippocampal neuron cultures, Dihexa promoted spinogenesis at concentrations as low as 10⁻¹³ M — picomolar activity that far exceeds BDNF (effective at 10⁻⁶ M range).\n\nDihexa also inhibits the enzyme hepatocyte growth factor activator inhibitor (HAI-1), which normally limits HGF activation. By blocking HAI-1, Dihexa increases the pool of active HGF available for c-Met signaling, creating a dual mechanism of HGF pathway amplification.',

  researchSummary:
    'The foundational research on Dihexa was published by McCoy et al. (2013), demonstrating that the compound restored cognitive function in aged rats with scopolamine-induced dementia. In the Morris water maze — a standard test of spatial learning — Dihexa-treated animals showed performance comparable to young, unimpaired rats.\n\nSynaptogenesis studies revealed Dihexa\'s extraordinary in vitro potency. At picomolar concentrations, it promoted new synapse formation in hippocampal neuron cultures, making it approximately 10 million times more potent than BDNF in this specific assay. This potency is attributed to its mechanism of amplifying endogenous HGF signaling.\n\nOral bioavailability studies demonstrated that Dihexa crosses the blood-brain barrier following oral administration in rats, achieving effective CNS concentrations. This is significant because most peptide-based compounds are degraded in the gastrointestinal tract.\n\nAlzheimer\'s disease relevance was established through studies showing that HGF/c-Met signaling is impaired in AD brains, and that Dihexa could potentially rescue this deficit. The compound was patented by Washington State University for potential AD treatment.\n\nLimitations: All data is preclinical. No human clinical trials have been conducted. The "10 million times more potent than BDNF" comparison is specific to an in vitro synaptogenesis assay and should not be extrapolated to overall cognitive effects. Long-term safety data in any species is limited.',

  citations: [
    {
      title: 'A novel angiotensin IV analog activates hepatocyte growth factor/c-Met and produces cognitive enhancement in a rat model',
      authors: 'McCoy AT, Benoist CC, Wright JW, Harding JW.',
      journal: 'Journal of Pharmacology and Experimental Therapeutics',
      year: 2013,
      doi: '10.1124/jpet.112.203125',
      summary: 'The primary publication introducing Dihexa. Demonstrated that the compound activates HGF/c-Met signaling, promotes synaptogenesis at picomolar concentrations, and reverses cognitive deficits in aged rats via oral and subcutaneous administration.',
    },
    {
      title: 'Hepatocyte growth factor/c-Met signaling is required for cognitive recovery after TBI',
      authors: 'Wright JW, Harding JW.',
      journal: 'Journal of Neuroscience',
      year: 2015,
      doi: '10.1523/JNEUROSCI.1746-15.2015',
      summary: 'Demonstrated the critical role of HGF/c-Met signaling in cognitive recovery and established the scientific rationale for compounds like Dihexa that augment this pathway.',
    },
    {
      title: 'A role for the brain RAS in Alzheimer\'s and Parkinson\'s diseases',
      authors: 'Wright JW, Harding JW.',
      journal: 'Frontiers in Endocrinology',
      year: 2013,
      doi: '10.3389/fendo.2013.00158',
      summary: 'Review of the renin-angiotensin system in the brain, positioning angiotensin IV analogs including Dihexa as potential therapeutic agents for neurodegenerative diseases.',
    },
    {
      title: 'Angiotensin IV analog dihexa rescues cognitive deficits and amyloid pathology in Alzheimer\'s disease model',
      authors: 'Benoist CC, et al.',
      journal: 'Neuropharmacology',
      year: 2014,
      doi: '10.1016/j.neuropharm.2014.06.011',
      summary: 'Showed that Dihexa reduced amyloid pathology and restored cognitive function in an Alzheimer\'s disease mouse model, supporting its potential as a disease-modifying agent.',
    },
  ],

  protocols: [
    {
      name: 'Cognitive enhancement (research/community)',
      route: 'Subcutaneous injection',
      typicalDose: '0.5–2 mg',
      frequency: 'Once daily',
      cycleDuration: '4–8 weeks on, 4 weeks off',
      notes: 'No human clinical dosing data exists. Community-reported doses are derived from animal study scaling. The extremely high potency of this compound warrants extreme caution with dosing. Start at the lowest possible dose.',
    },
    {
      name: 'Oral administration (research)',
      route: 'Oral',
      typicalDose: '10–20 mg',
      frequency: 'Once daily',
      cycleDuration: '4–8 weeks',
      notes: 'Oral bioavailability was demonstrated in rat studies. Human oral dosing data does not exist. Higher oral doses are theoretically needed to account for first-pass metabolism. This route is entirely experimental in humans.',
    },
  ],

  protocolDisclaimer:
    'Dihexa is an experimental compound with NO human clinical trial data. All dosing information is extrapolated from animal studies or community reports and has no clinical validation. Use of this compound carries unknown risks. Consult a healthcare professional.',

  sideEffects: [
    { effect: 'Headache', frequency: 'uncommon', details: 'Reported in community forums. May relate to increased neuronal activity or HGF pathway stimulation.' },
    { effect: 'Injection site irritation', frequency: 'common', details: 'Redness, mild swelling, or discomfort at the subcutaneous injection site.' },
    { effect: 'Fatigue', frequency: 'uncommon', details: 'Some users report transient fatigue, particularly in the first few days of use.' },
    { effect: 'Theoretical cancer risk', frequency: 'rare', details: 'HGF/c-Met signaling is implicated in cancer progression. Long-term stimulation of this pathway is a theoretical concern, though no evidence of carcinogenicity has been reported in animal studies at research doses.' },
  ],

  contraindications: [
    'Active or history of cancer (HGF/c-Met pathway is implicated in tumor growth and metastasis)',
    'Pregnancy or breastfeeding (no safety data)',
    'Children or adolescents (no safety data in developing brains)',
    'Known hypersensitivity to angiotensin-derived peptides',
    'Concurrent use of other growth factor-modulating compounds',
  ],

  interactions: [
    'Cancer therapeutics targeting HGF/c-Met pathway (potential antagonism)',
    'Other nootropic peptides (potential additive neurotropic effects — exercise caution with stacking)',
    'Angiotensin-related medications (theoretical interaction via shared receptor family)',
  ],

  storage: {
    lyophilized: 'Refrigerated (2–8°C) or frozen (-20°C), stable for 12+ months',
    reconstituted: 'Refrigerated (2–8°C), use within 14 days',
    reconstitutionSolvent: 'Bacteriostatic water',
    reconstitutionNotes: 'Reconstitute lyophilized powder gently — do not vortex or shake vigorously. Peptide is stable in solution at 4°C for approximately 2 weeks. For oral administration, capsule forms have been reported but stability data is lacking.',
  },

  relatedPeptideSlugs: ['semax', 'selank', 'pe-22-28'],
  synergyNotes: 'Sometimes discussed alongside Semax and Selank as part of cognitive peptide stacks, though the mechanisms are entirely distinct. Dihexa acts on the HGF/c-Met pathway while Semax modulates BDNF and Selank modulates GABA. There is no published research on combining these peptides.',

  metaDescription: 'Dihexa is an experimental angiotensin IV analog that activates HGF/c-Met signaling for synaptogenesis. 10 million times more potent than BDNF in vitro. Research, mechanisms, and safety.',

  faqItems: [
    {
      question: 'What is Dihexa and why is it considered so potent?',
      answer: 'Dihexa is a synthetic compound derived from angiotensin IV that activates the HGF/c-Met pathway. In a specific in vitro synaptogenesis assay, it promoted new synapse formation at picomolar concentrations — approximately 10 million times more potent than BDNF. This comparison applies to one specific assay and should not be generalized to overall cognitive effects.',
    },
    {
      question: 'Has Dihexa been tested in humans?',
      answer: 'No. As of now, Dihexa has only been tested in animal models and cell cultures. No human clinical trials have been conducted or registered. All human dosing information is extrapolated from animal research or community reports and carries unknown risks.',
    },
    {
      question: 'Is Dihexa safe to use?',
      answer: 'Safety in humans is unknown. The primary theoretical concern is that the HGF/c-Met pathway is involved in cancer progression. While no carcinogenicity was observed in short-term animal studies, long-term stimulation of this pathway has not been studied. Anyone with a history of cancer should avoid this compound.',
    },
    {
      question: 'Can you take Dihexa orally?',
      answer: 'Animal studies demonstrated that Dihexa has oral bioavailability — it crosses the blood-brain barrier following oral administration in rats. This is rare for peptide-based compounds. However, no human pharmacokinetic studies have been conducted to confirm oral bioavailability, optimal dosing, or safety in humans.',
    },
    {
      question: 'What is the difference between Dihexa and BDNF?',
      answer: 'BDNF (brain-derived neurotrophic factor) is a naturally occurring neurotrophin that supports neuronal survival and plasticity via TrkB receptors. Dihexa is a synthetic compound that works through a completely different pathway — HGF/c-Met signaling. The "10 million times more potent" comparison refers only to relative potency in a specific in vitro synaptogenesis assay, not to overall cognitive enhancement.',
    },
  ],
};
