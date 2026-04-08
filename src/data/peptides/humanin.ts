import { Peptide } from '../types';

export const humanin: Peptide = {
  slug: 'humanin',
  name: 'Humanin',
  fullName: 'Humanin (HN / [Gly14]-Humanin / HNG)',
  aliases: ['HN', 'HNG', '[Gly14]-Humanin', 'Humanin G', 'Humanin peptide'],
  sequence: 'Met-Ala-Pro-Arg-Gly-Phe-Ser-Cys-Leu-Leu-Leu-Leu-Thr-Ser-Glu-Ile-Asp-Leu-Pro-Val-Lys-Arg-Arg-Ala',
  molecularWeight: '~2687 g/mol (24 amino acids)',
  class: 'Mitochondrial-derived peptide (MDP)',
  halfLife: 'Minutes (endogenous); extended with analogs (HNG: hours)',
  administrationRoute: 'Subcutaneous injection, intraperitoneal (research)',

  categories: ['longevity'],
  primaryCategory: 'longevity',
  status: 'research',
  regulatoryNote: 'Research compound only. Not approved for human therapeutic use in any country. All data is preclinical or observational. Endogenous Humanin levels are studied as biomarkers of aging.',

  tldr: 'The first identified mitochondrial-derived peptide — a 24-amino acid cytoprotective factor that declines with age. Children of centenarians maintain higher levels, linking it to longevity.',

  overview:
    'Humanin is a 24-amino acid peptide encoded within the mitochondrial genome (16S ribosomal RNA gene, MT-RNR2). Discovered in 2001 by Nishimoto and colleagues during a screen for factors protecting neurons against Alzheimer\'s disease-related toxicity, it was the first identified mitochondrial-derived peptide (MDP) — a class of signaling molecules encoded in the mitochondrial DNA that exert cytoprotective effects throughout the body.\n\nHumanin has demonstrated broad cytoprotective, anti-apoptotic, and anti-inflammatory properties across multiple organ systems and disease models. Circulating Humanin levels decline with age, and this decline correlates with age-related diseases including Alzheimer\'s disease, cardiovascular disease, and type 2 diabetes.\n\nThe most studied analog is [Gly14]-Humanin (HNG), in which the serine at position 14 is replaced with glycine, producing a variant approximately 1,000 times more potent than native Humanin. HNG is the primary form used in research studies due to its enhanced activity and improved stability.',

  mechanismOfAction:
    'Humanin exerts its effects through multiple receptor systems and intracellular signaling pathways. The primary receptor is a heterotrimeric complex composed of CNTFR (ciliary neurotrophic factor receptor), WSX-1, and gp130. Activation of this receptor complex triggers the JAK/STAT3 signaling pathway, which promotes cell survival gene expression and suppresses apoptotic signaling.\n\nHumanin also binds to FPRL1 (formyl peptide receptor like-1) and FPRL2, members of the formyl peptide receptor family involved in innate immunity and inflammation. Activation of these receptors mediates Humanin\'s anti-inflammatory effects.\n\nIntracellularly, Humanin directly interacts with Bax (Bcl-2-associated X protein), a pro-apoptotic protein, preventing its translocation to the mitochondrial outer membrane. This interaction blocks the intrinsic apoptotic cascade at an early stage, preventing cytochrome c release and downstream caspase activation.\n\nHumanin also interacts with IGFBP-3 (insulin-like growth factor binding protein 3), which normally promotes apoptosis by sequestering IGF-1. By binding IGFBP-3, Humanin blocks its pro-apoptotic effects and may modulate IGF-1 signaling.\n\nAdditionally, Humanin activates AMPK (AMP-activated protein kinase) signaling, improving cellular energy metabolism and promoting autophagy. It reduces endoplasmic reticulum stress and oxidative stress through upregulation of antioxidant enzyme expression.',

  researchSummary:
    'Humanin was discovered through functional screening for factors that protect against amyloid-beta (Abeta) toxicity. Nishimoto et al. (2001) identified it as a gene product that rescued neurons from Abeta-induced cell death, immediately connecting it to Alzheimer\'s disease research.\n\nNeuroprotection studies have been extensive. Humanin and HNG protect against toxicity from amyloid-beta peptides, mutant presenilin-1, and mutant APP (amyloid precursor protein) — the three major genetic causes of familial Alzheimer\'s disease. Protection occurs at nanomolar concentrations (HNG at picomolar concentrations).\n\nCardiovascular research shows that Humanin protects cardiomyocytes against oxidative stress and ischemia-reperfusion injury. In mouse models of myocardial infarction, HNG administration reduced infarct size, preserved cardiac function, and reduced cardiomyocyte apoptosis.\n\nMetabolic research reveals that Humanin improves insulin sensitivity and glucose homeostasis. HNG treatment in diet-induced obese mice improved glucose tolerance and reduced hepatic steatosis. Circulating Humanin levels are inversely correlated with insulin resistance in human observational studies.\n\nAging biomarker studies from the Leiden Longevity Study and other cohorts demonstrate that higher circulating Humanin levels associate with longevity. Children of centenarians have higher Humanin levels than age-matched controls, suggesting a protective role in healthy aging.\n\nLimitations: All therapeutic data is preclinical. The endogenous peptide has a very short half-life. Exogenous administration protocols are not established for humans. Large-scale human studies are epidemiological, not interventional.',

  citations: [
    {
      title: 'A rescue factor abolishing neuronal cell death by a wide spectrum of familial Alzheimer\'s disease genes and Abeta',
      authors: 'Hashimoto Y, Niikura T, Tajima H, et al.',
      journal: 'Proceedings of the National Academy of Sciences',
      year: 2001,
      doi: '10.1073/pnas.101032998',
      summary: 'The discovery paper of Humanin. Identified the peptide as a factor encoded in the mitochondrial genome that rescues neurons from cell death induced by amyloid-beta and familial Alzheimer\'s disease gene mutations.',
    },
    {
      title: 'The mitochondrial-derived peptide humanin protects RPE cells from oxidative stress, senescence, and outer retinal degeneration',
      authors: 'Sreekumar PG, et al.',
      journal: 'Redox Biology',
      year: 2016,
      doi: '10.1016/j.redox.2016.01.004',
      summary: 'Demonstrated that Humanin protects retinal pigment epithelium cells from oxidative stress-induced senescence and degeneration, with implications for age-related macular degeneration.',
    },
    {
      title: 'Humanin: a mitochondrial-derived peptide is a novel biomarker of aging and longevity',
      authors: 'Muzumdar RH, et al.',
      journal: 'Aging Cell',
      year: 2009,
      doi: '10.1111/j.1474-9726.2009.00505.x',
      summary: 'Established that circulating Humanin levels decline with age in mice and humans, and that higher levels correlate with improved metabolic health and longevity markers.',
    },
    {
      title: 'Humanin attenuates Alzheimer-like cognitive deficits and pathological changes induced by amyloid beta in rats',
      authors: 'Tajima H, et al.',
      journal: 'Journal of Neuroscience Research',
      year: 2005,
      doi: '10.1002/jnr.20340',
      summary: 'In vivo study demonstrating that Humanin administration attenuated amyloid-beta-induced cognitive deficits and neuronal damage in rats, supporting its therapeutic potential for Alzheimer\'s disease.',
    },
  ],

  protocols: [
    {
      name: 'Neuroprotection / longevity (research reference)',
      route: 'Subcutaneous injection',
      typicalDose: '1–4 mg daily (HNG analog)',
      frequency: 'Once daily',
      cycleDuration: '4–8 weeks on, 4 weeks off',
      notes: 'No established human dosing. [Gly14]-Humanin (HNG) is preferred over native Humanin due to approximately 1,000-fold greater potency and improved stability. Community doses are extrapolated from animal studies using allometric scaling. Most animal studies used intraperitoneal injection.',
    },
    {
      name: 'Animal research reference',
      route: 'Intraperitoneal injection',
      typicalDose: '2–4 mg/kg (HNG in mice)',
      frequency: 'Once daily',
      cycleDuration: 'Variable (7–28 days in published studies)',
      notes: 'Dosing used across published rodent studies. HNG (Gly14 analog) is used in most research. Native Humanin requires approximately 1,000x higher doses for equivalent effects. These are animal research parameters, not human dosing guidelines.',
    },
  ],

  protocolDisclaimer:
    'Humanin and its analogs are research compounds with NO human clinical trial data for therapeutic use. All dosing information is from animal studies. Human use is entirely experimental. Circulating Humanin is studied as a biomarker but exogenous administration protocols are not established. Consult a healthcare professional.',

  sideEffects: [
    { effect: 'Injection site irritation', frequency: 'common', details: 'Mild local reaction at injection site including redness and transient discomfort.' },
    { effect: 'Hypotension', frequency: 'uncommon', details: 'Humanin has vasodilatory and cardioprotective effects that could theoretically lower blood pressure in susceptible individuals.' },
    { effect: 'Gastrointestinal effects', frequency: 'rare', details: 'Nausea or digestive changes. Limited reporting in research settings.' },
    { effect: 'Hypoglycemia', frequency: 'rare', details: 'Humanin enhances insulin sensitivity — individuals on glucose-lowering medications should exercise caution.' },
  ],

  contraindications: [
    'Active cancer (anti-apoptotic peptides may theoretically protect tumor cells from cell death)',
    'Pregnancy or breastfeeding (no safety data)',
    'Concurrent use of insulin or sulfonylureas (potential additive hypoglycemia)',
    'Known hypersensitivity to mitochondrial-derived peptides',
  ],

  interactions: [
    'Insulin and glucose-lowering medications (Humanin improves insulin sensitivity — monitor for hypoglycemia)',
    'Chemotherapy agents (anti-apoptotic effects may interfere with treatment-induced tumor cell death)',
    'Other cytoprotective peptides (potential additive effects — limited data on combinations)',
  ],

  storage: {
    lyophilized: 'Frozen (-20°C to -80°C), stable for 12+ months',
    reconstituted: 'Refrigerated (2–8°C), use within 7–14 days',
    reconstitutionSolvent: 'Bacteriostatic water or sterile PBS',
    reconstitutionNotes: 'Humanin is a 24-amino acid peptide with moderate stability in solution. The HNG analog is preferred for research use due to enhanced potency. Reconstitute gently to avoid denaturation. Avoid repeated freeze-thaw cycles. Store protected from light.',
  },

  relatedPeptideSlugs: ['mots-c', 'ss-31', 'epitalon'],
  synergyNotes: 'Humanin and MOTS-c are both mitochondrial-derived peptides but act through distinct mechanisms — Humanin is primarily cytoprotective and anti-apoptotic while MOTS-c activates AMPK for metabolic regulation. SS-31 stabilizes mitochondrial structure at the cardiolipin level. Together, these three peptides represent complementary approaches to mitochondrial aging: structural support (SS-31), survival signaling (Humanin), and metabolic regulation (MOTS-c).',

  metaDescription: 'Humanin is a mitochondrial-derived peptide with neuroprotective and anti-apoptotic properties. It declines with age and is linked to longevity. Research, mechanisms, and protocols.',

  faqItems: [
    {
      question: 'What is Humanin?',
      answer: 'Humanin is a 24-amino acid peptide encoded in the mitochondrial genome — the first discovered mitochondrial-derived peptide (MDP). It was identified in 2001 for its ability to protect neurons against Alzheimer\'s disease-related toxicity. It has broad cytoprotective, anti-apoptotic, and anti-inflammatory effects across multiple organ systems.',
    },
    {
      question: 'Why do Humanin levels decline with age?',
      answer: 'Circulating Humanin levels decline significantly with age, likely due to age-related mitochondrial DNA damage and reduced mitochondrial function. This decline correlates with increased susceptibility to age-related diseases. Children of centenarians maintain higher Humanin levels, suggesting a connection between this peptide and healthy aging.',
    },
    {
      question: 'What is the difference between Humanin and HNG?',
      answer: '[Gly14]-Humanin (HNG) is a synthetic analog of Humanin where the serine at position 14 is replaced with glycine. This single amino acid change makes HNG approximately 1,000 times more potent than native Humanin. HNG is the preferred form in research due to its enhanced activity and improved stability.',
    },
    {
      question: 'Can Humanin help with Alzheimer\'s disease?',
      answer: 'In preclinical studies, Humanin and HNG protect neurons against amyloid-beta toxicity and reduce cognitive deficits in animal models of Alzheimer\'s disease. However, no human clinical trials have been conducted for this indication. The evidence supports Humanin as a promising research target but not yet a validated treatment.',
    },
    {
      question: 'Is Humanin related to MOTS-c?',
      answer: 'Yes — both are mitochondrial-derived peptides (MDPs) encoded in the mitochondrial genome. Humanin is encoded in the 16S rRNA gene and is primarily cytoprotective/anti-apoptotic. MOTS-c is encoded in the 12S rRNA gene and primarily regulates metabolism through AMPK activation. They represent complementary mitochondrial signaling pathways.',
    },
  ],
};
