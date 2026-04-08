import { Peptide } from '../types';

export const selank: Peptide = {
  slug: 'selank',
  name: 'Selank',
  fullName: 'Selank (Synthetic Tuftsin Analog TP-7)',
  aliases: ['SELANK', 'TP-7', 'Thr-Lys-Pro-Arg-Pro-Gly-Pro'],
  sequence: 'Thr-Lys-Pro-Arg-Pro-Gly-Pro',
  molecularWeight: '751.9 g/mol',
  class: 'Synthetic tuftsin analog',
  halfLife: '~Several minutes (intranasal; functional effects persist for hours)',
  administrationRoute: 'Intranasal',

  categories: ['cognitive'],
  primaryCategory: 'cognitive',
  status: 'approved',
  regulatoryNote: 'Approved in Russia as an anxiolytic and nootropic medication. Not FDA-approved in the United States. Not a controlled substance.',

  overview:
    'Selank is a synthetic heptapeptide derived from tuftsin (Thr-Lys-Pro-Arg), an endogenous immunomodulatory peptide, with the addition of a Pro-Gly-Pro C-terminal sequence for enhanced metabolic stability. It was developed at the Institute of Molecular Genetics of the Russian Academy of Sciences, the same laboratory that created Semax.\n\nApproved for clinical use in Russia since 2009, Selank is prescribed as an anxiolytic and nootropic. It is notable for producing anxiolytic effects comparable to benzodiazepines without sedation, cognitive impairment, dependence, or withdrawal symptoms — limitations that characterize conventional anti-anxiety medications.\n\nSelank bridges two pharmacological domains: it functions as both an anxiolytic and an immunomodulator. Its parent molecule tuftsin is a naturally occurring tetrapeptide released from the Fc region of IgG, linking the immune and nervous systems through a shared peptide signaling pathway.',

  mechanismOfAction:
    'Selank exerts its anxiolytic effects primarily through modulation of the GABAergic system. It allosterically enhances GABA-A receptor sensitivity, increasing inhibitory neurotransmission without directly binding the benzodiazepine site. This produces anxiolysis without the sedation and dependency associated with classical benzodiazepine agonists.\n\nThe peptide significantly influences serotonin (5-HT) metabolism. Studies demonstrate that Selank stabilizes enkephalin degradation and modulates the balance of serotonin and its metabolites in brain structures including the hypothalamus, hippocampus, and frontal cortex. It inhibits the activity of enzymes that degrade enkephalins, thereby prolonging endogenous opioid peptide signaling.\n\nSelank modulates expression of brain-derived neurotrophic factor (BDNF) and influences the MAPK/ERK signaling pathway, contributing to neuroplasticity and neuroprotective effects. Gene expression analysis has shown that Selank affects the transcription of 36 genes related to GABAergic neurotransmission.\n\nAs a tuftsin analog, Selank retains immunomodulatory properties. It influences IL-6, T-helper cell balance, and monocyte function, providing a neuroimmune dimension to its mechanism. This dual anxiolytic-immunomodulatory profile is unique among peptide-based therapeutics.',

  researchSummary:
    'Clinical research on Selank, primarily from Russian medical literature, demonstrates consistent anxiolytic effects. In a randomized clinical study of patients with generalized anxiety disorder (GAD), Selank produced significant reductions in Hamilton Anxiety Rating Scale scores comparable to the benzodiazepine medazepam, but without sedation or cognitive impairment.\n\nGene expression studies have been particularly revealing. Microarray analysis showed that Selank significantly alters expression of genes involved in GABAergic neurotransmission, including multiple GABA-A receptor subunit genes. This genomic-level evidence supports the clinical observations of anxiolytic effects.\n\nSerotonin metabolism research demonstrated that Selank modulates the concentration of serotonin and 5-HIAA (its primary metabolite) in the hypothalamus and frontal cortex. The effect is normalizing rather than purely stimulatory or inhibitory, suggesting adaptogenic properties.\n\nImmunomodulatory studies confirm that Selank influences cytokine expression, enhances phagocytic activity, and normalizes immune parameters in stressed animals. This positions Selank at the intersection of psychoneuroimmunology.\n\nLimitations: As with Semax, the clinical evidence base consists predominantly of Russian studies. Large-scale, placebo-controlled trials conforming to Western regulatory standards are lacking.',

  citations: [
    {
      title: 'Selank administration affects the expression of some genes involved in GABAergic neurotransmission',
      authors: 'Zozulya AA, et al.',
      journal: 'Frontiers in Pharmacology',
      year: 2014,
      doi: '10.3389/fphar.2014.00186',
      summary: 'Microarray analysis demonstrated that Selank modulates expression of 36 genes related to GABAergic signaling, including GABA-A receptor subunit genes, providing molecular evidence for its anxiolytic mechanism.',
    },
    {
      title: 'Anxiolytic-like effect of selank in rats',
      authors: 'Semenova TP, et al.',
      journal: 'Bulletin of Experimental Biology and Medicine',
      year: 2010,
      doi: '10.1007/s10517-010-0898-0',
      summary: 'Demonstrated that Selank produces significant anxiolytic effects in the elevated plus maze without sedation or motor impairment, comparable to benzodiazepines but without their characteristic side effects.',
    },
    {
      title: 'Selank has an anxiolytic effect and inhibits enkephalin-degrading enzymes',
      authors: 'Kozlovskii II, Danchev ND.',
      journal: 'Bulletin of Experimental Biology and Medicine',
      year: 2003,
      doi: '10.1023/A:1024244824118',
      summary: 'Showed that Selank produces anxiolytic effects partly through inhibition of enkephalin-degrading enzymes, prolonging the action of endogenous opioid peptides in the brain.',
    },
    {
      title: 'Effect of Selank on serotonin metabolism in the brain of rats',
      authors: 'Narkevich VB, et al.',
      journal: 'Bulletin of Experimental Biology and Medicine',
      year: 2008,
      doi: '10.1007/s10517-008-0173-1',
      summary: 'Demonstrated that Selank modulates serotonin and 5-HIAA levels in the hypothalamus and frontal cortex, supporting its role in normalizing serotonergic neurotransmission.',
    },
  ],

  protocols: [
    {
      name: 'Anxiolytic / anti-anxiety',
      route: 'Intranasal',
      typicalDose: '250–500 mcg (0.15% solution, 2–3 drops per nostril)',
      frequency: '2–3 times daily',
      cycleDuration: '14–21 days on, 14 days off',
      notes: 'Standard Russian clinical dosing. The 0.15% solution delivers approximately 75 mcg per drop. Best started at the lower end. Effects are often noticed within the first few days, with full anxiolytic benefit developing over 1–2 weeks of consistent use.',
    },
    {
      name: 'Cognitive enhancement / nootropic stack',
      route: 'Intranasal',
      typicalDose: '250–500 mcg',
      frequency: '1–2 times daily (morning and early afternoon)',
      cycleDuration: '14–21 days on, 14 days off',
      notes: 'Often combined with Semax for a comprehensive nootropic and anxiolytic stack. Selank addresses the anxiety component while Semax provides stimulatory cognitive enhancement. Avoid evening dosing if any stimulating effects are noticed.',
    },
    {
      name: 'Immunomodulatory support',
      route: 'Intranasal',
      typicalDose: '250–750 mcg',
      frequency: '2–3 times daily',
      cycleDuration: '10–14 days',
      notes: 'Used in Russian clinical practice for immune support. Higher doses used for acute immune challenge. Limited Western data on immune-specific protocols.',
    },
  ],

  protocolDisclaimer:
    'Selank is a prescription medication in Russia. It is not FDA-approved in the United States. These protocols reflect published research and clinical guidelines from countries where it is approved. Consult a healthcare professional before use.',

  sideEffects: [
    { effect: 'Nasal irritation', frequency: 'common', details: 'Mild tingling or slight burning upon intranasal administration. Transient and generally diminishes with continued use.' },
    { effect: 'Fatigue or drowsiness', frequency: 'uncommon', details: 'Occasionally reported, though Selank is generally non-sedating. May indicate individual sensitivity or excessive dosing.' },
    { effect: 'Headache', frequency: 'uncommon', details: 'Mild headache reported infrequently, more common at higher doses.' },
    { effect: 'Allergic reaction', frequency: 'rare', details: 'As a peptide, there is a theoretical risk of hypersensitivity. Extremely rare in clinical practice.' },
  ],

  contraindications: [
    'Known hypersensitivity to tuftsin or related peptides',
    'Pregnancy or breastfeeding (insufficient safety data)',
    'Active autoimmune conditions (theoretical concern due to immunomodulatory effects)',
    'Concurrent use of benzodiazepines or other GABAergic drugs (potential interaction)',
  ],

  storage: {
    lyophilized: 'Refrigerated (2–8°C), stable for 12–24 months',
    reconstituted: 'Refrigerated (2–8°C), use within 14–21 days',
    reconstitutionSolvent: 'Bacteriostatic water or saline',
    reconstitutionNotes: 'Available as pre-made nasal spray solutions. For lyophilized powder, reconstitute with bacteriostatic saline for intranasal delivery. Standard concentration is 0.15% (1.5 mg/mL). Protect from light.',
  },

  relatedPeptideSlugs: ['semax', 'pe-22-28', 'dihexa'],
  synergyNotes: 'Most commonly paired with Semax for a comprehensive cognitive and anxiolytic stack. Semax provides stimulatory nootropic effects and BDNF upregulation while Selank delivers anxiolysis and emotional stabilization. The combination addresses both cognitive performance and stress resilience without the trade-offs of pharmaceutical alternatives.',

  metaDescription: 'Selank is a synthetic tuftsin-analog peptide approved in Russia as an anxiolytic. It modulates GABA and serotonin without sedation. Mechanisms, research, and dosing protocols.',

  faqItems: [
    {
      question: 'What is Selank and how does it work?',
      answer: 'Selank is a synthetic heptapeptide derived from the endogenous immunomodulatory peptide tuftsin. Approved in Russia since 2009, it reduces anxiety by enhancing GABA-A receptor sensitivity and modulating serotonin metabolism — producing benzodiazepine-like anxiolysis without sedation, cognitive impairment, or dependence.',
    },
    {
      question: 'How does Selank compare to benzodiazepines?',
      answer: 'Selank produces anxiolytic effects comparable to benzodiazepines like medazepam in clinical studies but does not cause sedation, motor impairment, tolerance, physical dependence, or withdrawal symptoms. It works through allosteric modulation of GABA-A receptors rather than direct benzodiazepine-site binding.',
    },
    {
      question: 'Can you combine Selank and Semax?',
      answer: 'Yes. Selank and Semax are frequently combined in both clinical practice and research settings. Semax provides cognitive stimulation and BDNF upregulation while Selank provides anxiolysis and emotional resilience. Both are administered intranasally and were developed at the same Russian research institute.',
    },
    {
      question: 'Does Selank affect the immune system?',
      answer: 'Yes. As a tuftsin analog, Selank retains immunomodulatory properties. It modulates IL-6, influences T-helper cell balance, and enhances monocyte function. This dual anxiolytic-immunomodulatory profile is unique and connects to the field of psychoneuroimmunology.',
    },
    {
      question: 'Is Selank safe for long-term use?',
      answer: 'Russian clinical data suggests a favorable safety profile with no evidence of tolerance, dependence, or significant adverse effects during standard treatment courses (14–21 days). Long-term continuous use data is limited. Cycling protocols (2–3 weeks on, 2 weeks off) are standard practice.',
    },
  ],
};
