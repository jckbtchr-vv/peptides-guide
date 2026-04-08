import { Peptide } from '../types';

export const motsc: Peptide = {
  slug: 'mots-c',
  name: 'MOTS-c',
  fullName: 'MOTS-c (Mitochondrial Open Reading Frame of the Twelve S rRNA Type-c)',
  aliases: ['MOTS-c', 'MOTSc', 'Mitochondrial ORF of 12S rRNA type-c'],
  sequence: 'Met-Arg-Trp-Gln-Glu-Met-Gly-Tyr-Ile-Phe-Tyr-Pro-Arg-Lys-Leu-Arg',
  molecularWeight: '~2174 g/mol (16 amino acids)',
  class: 'Mitochondrial-derived peptide (MDP)',
  halfLife: 'Estimated hours (limited pharmacokinetic data)',
  administrationRoute: 'Subcutaneous injection, intraperitoneal (research)',

  categories: ['longevity', 'metabolic'],
  primaryCategory: 'longevity',
  status: 'research',
  regulatoryNote: 'Research compound only. Not approved for human therapeutic use in any country. All data is preclinical. Discovered by Dr. Changhan David Lee at the University of Southern California.',

  tldr: 'A mitochondrial-derived peptide that activates AMPK and acts as an exercise mimetic. Improves insulin sensitivity and metabolic homeostasis, with levels declining significantly with age.',

  overview:
    'MOTS-c (Mitochondrial Open Reading Frame of the Twelve S rRNA Type-c) is a 16-amino acid peptide encoded within the mitochondrial 12S rRNA gene (MT-RNR1). Discovered in 2015 by Dr. Changhan David Lee and colleagues at the USC Leonard Davis School of Gerontology, MOTS-c is the second major mitochondrial-derived peptide (MDP) identified after Humanin.\n\nMOTS-c functions as an exercise mimetic and metabolic regulator, representing a remarkable finding: the mitochondrial genome — traditionally viewed as encoding only structural components of the electron transport chain — produces signaling peptides that regulate whole-body metabolism.\n\nThe peptide activates AMPK (AMP-activated protein kinase), the master cellular energy sensor, and promotes metabolic homeostasis. In animal models, MOTS-c improves insulin sensitivity, prevents age-related and diet-induced obesity, and enhances exercise capacity. Circulating MOTS-c levels increase during exercise and decline with age, suggesting it mediates some of the metabolic benefits of physical activity.\n\nMOTS-c is unique among MDPs in that it translocates to the nucleus during metabolic stress, where it directly regulates gene expression through interaction with ARE (antioxidant response element) motifs — establishing a direct mitochondria-to-nuclear signaling axis.',

  mechanismOfAction:
    'MOTS-c activates AMPK (AMP-activated protein kinase) through modulation of the folate cycle and de novo purine biosynthesis pathway. Specifically, MOTS-c inhibits the folate cycle enzyme methylenetetrahydrofolate dehydrogenase (MTHFD), which leads to accumulation of the intermediate AICAR (5-aminoimidazole-4-carboxamide ribonucleotide) — a known endogenous AMPK activator.\n\nAMPK activation by MOTS-c triggers a cascade of metabolic effects: enhanced glucose uptake independent of insulin, increased fatty acid oxidation, improved mitochondrial biogenesis through PGC-1alpha activation, and suppression of lipogenic gene expression. These effects collectively improve metabolic homeostasis.\n\nDuring metabolic stress, MOTS-c translocates from the cytoplasm to the nucleus — a remarkable behavior for a mitochondrial-derived peptide. In the nucleus, MOTS-c interacts with ARE (antioxidant response element) motifs and regulates the expression of genes involved in glucose and lipid metabolism, antioxidant defense, and cellular stress responses. This nuclear translocation establishes a direct communication pathway from mitochondria to nuclear gene regulation.\n\nMOTS-c also enhances skeletal muscle glucose metabolism through GLUT4 translocation to the cell membrane, improving glucose uptake in a mechanism analogous to both insulin signaling and exercise-induced glucose transport.\n\nThe peptide modulates the NAD+/NADH ratio, contributing to sirtuin activation and broader metabolic regulation. It reduces endoplasmic reticulum stress and inflammatory signaling, connecting metabolic improvement to anti-inflammatory effects.',

  researchSummary:
    'The discovery paper by Lee et al. (2015) established MOTS-c as a mitochondrial-derived peptide that regulates insulin sensitivity and metabolic homeostasis. Mice treated with MOTS-c were protected against age-dependent and high-fat diet-induced insulin resistance and obesity.\n\nExercise biology research revealed that MOTS-c levels increase in skeletal muscle and plasma during acute exercise in both mice and humans. This discovery positioned MOTS-c as a potential molecular mediator of exercise\'s metabolic benefits — an "exercise mimetic" encoded in the mitochondrial genome.\n\nAging studies showed that circulating MOTS-c levels decline with age in both mice and humans. Japanese centenarians were found to carry a specific mitochondrial DNA variant (m.1382A>C) that produces a more stable MOTS-c variant, suggesting evolutionary selection for enhanced MOTS-c signaling in long-lived populations.\n\nNuclear translocation studies (Kim et al., 2018) demonstrated that MOTS-c moves to the nucleus during metabolic stress and glucose restriction, where it regulates ARE-containing gene expression. This was a groundbreaking finding showing direct mitochondria-to-nuclear retrograde signaling via a peptide.\n\nObesity and diabetes research in diet-induced obese mice showed that MOTS-c treatment improved glucose tolerance, reduced fat mass, and enhanced insulin sensitivity without changes in food intake — suggesting metabolic rate enhancement rather than appetite suppression.\n\nLimitations: All data is preclinical. No human interventional trials have been conducted. The peptide\'s pharmacokinetics in humans are not characterized. Optimal dosing, route, and duration for human use are unknown.',

  citations: [
    {
      title: 'The mitochondrial-derived peptide MOTS-c promotes metabolic homeostasis and reduces obesity and insulin resistance',
      authors: 'Lee C, Zeng J, Drew BG, et al.',
      journal: 'Cell Metabolism',
      year: 2015,
      doi: '10.1016/j.cmet.2015.02.009',
      summary: 'The discovery paper establishing MOTS-c as a mitochondrial-derived peptide that regulates metabolic homeostasis. Demonstrated that MOTS-c treatment prevents obesity and insulin resistance in mice.',
    },
    {
      title: 'MOTS-c is an exercise-induced mitochondrial-encoded regulator of age-dependent physical decline and muscle homeostasis',
      authors: 'Reynolds JC, et al.',
      journal: 'Nature Communications',
      year: 2021,
      doi: '10.1038/s41467-020-20790-0',
      summary: 'Showed that MOTS-c levels increase with exercise, decline with age, and that MOTS-c treatment in aged mice improves physical capacity and skeletal muscle homeostasis, establishing it as an exercise mimetic.',
    },
    {
      title: 'Mitochondrial-derived peptide MOTS-c translocates to the nucleus to regulate nuclear gene expression in response to metabolic stress',
      authors: 'Kim KH, Son JM, Benayoun BA, Lee C.',
      journal: 'Cell Metabolism',
      year: 2018,
      doi: '10.1016/j.cmet.2018.06.008',
      summary: 'Groundbreaking study demonstrating that MOTS-c translocates from the cytoplasm to the nucleus during metabolic stress, where it binds ARE motifs to regulate gene expression — establishing direct mitochondria-to-nuclear communication.',
    },
    {
      title: 'A mitochondrial-encoded MOTS-c variant correlates with exceptional longevity in the Japanese population',
      authors: 'Fuku N, et al.',
      journal: 'Aging Cell',
      year: 2015,
      doi: '10.1111/acel.12405',
      summary: 'Identified a mitochondrial DNA variant producing a more stable MOTS-c in Japanese centenarians, suggesting that enhanced MOTS-c signaling contributes to exceptional human longevity.',
    },
  ],

  protocols: [
    {
      name: 'Metabolic optimization / exercise mimetic (research community)',
      route: 'Subcutaneous injection',
      typicalDose: '5–10 mg daily',
      frequency: 'Once daily, typically in the morning',
      cycleDuration: '4–8 weeks on, 4 weeks off',
      notes: 'No established human dosing. Community doses are extrapolated from rodent studies (5–15 mg/kg IP in mice). Morning dosing is theoretically preferred to align with metabolic rhythms. Often discussed alongside exercise and fasting protocols.',
    },
    {
      name: 'Animal research reference',
      route: 'Intraperitoneal injection',
      typicalDose: '5–15 mg/kg',
      frequency: 'Once daily',
      cycleDuration: '7–21 days (variable across published studies)',
      notes: 'Standard dosing range from published rodent studies. The Lee et al. (2015) discovery paper used 5 mg/kg IP. Higher doses up to 15 mg/kg have been used in obesity and exercise studies. These are animal research parameters.',
    },
  ],

  protocolDisclaimer:
    'MOTS-c is a research compound with NO human clinical trial data. All dosing information is from animal studies. Human pharmacokinetics, safety, and optimal dosing are completely uncharacterized. Consult a healthcare professional before any use.',

  sideEffects: [
    { effect: 'Injection site reaction', frequency: 'common', details: 'Mild local irritation, redness, or discomfort at the subcutaneous injection site.' },
    { effect: 'Hypoglycemia', frequency: 'uncommon', details: 'MOTS-c enhances glucose uptake and insulin sensitivity. Individuals on diabetes medications or in a fasted state should monitor blood glucose.' },
    { effect: 'Gastrointestinal discomfort', frequency: 'uncommon', details: 'Mild nausea or digestive changes reported anecdotally. May relate to metabolic shifts.' },
    { effect: 'Fatigue or energy fluctuation', frequency: 'uncommon', details: 'Some users report transient fatigue as metabolic pathways adjust. Others report increased energy. Individual responses vary.' },
  ],

  contraindications: [
    'Type 1 diabetes or insulin-dependent diabetes (risk of hypoglycemia with enhanced glucose uptake)',
    'Pregnancy or breastfeeding (no safety data)',
    'Active cancer (AMPK activation has complex, context-dependent effects on tumor biology)',
    'Concurrent use of metformin or other AMPK activators (potential additive effects)',
  ],

  interactions: [
    'Metformin (both activate AMPK — potential additive effects on glucose metabolism)',
    'Insulin and sulfonylureas (enhanced insulin sensitivity may increase hypoglycemia risk)',
    'AICAR or other AMPK activators (additive pathway activation)',
    'Folate supplements (MOTS-c modulates the folate cycle — potential interaction)',
  ],

  storage: {
    lyophilized: 'Frozen (-20°C to -80°C), stable for 12+ months',
    reconstituted: 'Refrigerated (2–8°C), use within 14 days',
    reconstitutionSolvent: 'Bacteriostatic water or sterile saline',
    reconstitutionNotes: 'MOTS-c is a 16-amino acid peptide with moderate stability. Reconstitute gently in bacteriostatic water. Avoid repeated freeze-thaw cycles. Aliquoting into single-use portions before freezing is recommended for long-term storage.',
  },

  relatedPeptideSlugs: ['humanin', 'ss-31', 'semaglutide'],
  synergyNotes: 'MOTS-c and Humanin are both mitochondrial-derived peptides but serve distinct roles — MOTS-c is primarily a metabolic regulator (AMPK activation, exercise mimetic) while Humanin is cytoprotective (anti-apoptotic, neuroprotective). SS-31 targets mitochondrial membrane structure. For metabolic goals, MOTS-c shares mechanistic overlap with semaglutide (both improve insulin sensitivity) but through entirely different pathways.',

  metaDescription: 'MOTS-c is a mitochondrial-derived peptide that activates AMPK, mimics exercise benefits, and improves insulin sensitivity. Linked to longevity in centenarian studies.',

  faqItems: [
    {
      question: 'What is MOTS-c?',
      answer: 'MOTS-c is a 16-amino acid peptide encoded in the mitochondrial genome (12S rRNA gene). Discovered in 2015, it functions as a metabolic regulator and exercise mimetic. It activates AMPK, improves insulin sensitivity, and promotes metabolic homeostasis. Circulating levels increase with exercise and decline with age.',
    },
    {
      question: 'Is MOTS-c an exercise mimetic?',
      answer: 'Yes. MOTS-c levels rise during exercise in both mice and humans. When administered to aged mice, MOTS-c improves physical capacity, skeletal muscle homeostasis, and glucose metabolism — reproducing several benefits of exercise. However, it should be viewed as a supplement to exercise, not a replacement.',
    },
    {
      question: 'How is MOTS-c connected to longevity?',
      answer: 'MOTS-c levels decline with age, and Japanese centenarians carry a mitochondrial DNA variant (m.1382A>C) that produces a more stable MOTS-c. Higher circulating MOTS-c levels are associated with better metabolic health. This evidence suggests MOTS-c signaling is a component of healthy aging and longevity.',
    },
    {
      question: 'What is the difference between MOTS-c and Humanin?',
      answer: 'Both are mitochondrial-derived peptides but serve different functions. MOTS-c (from the 12S rRNA gene) primarily regulates metabolism through AMPK activation and acts as an exercise mimetic. Humanin (from the 16S rRNA gene) is primarily cytoprotective and anti-apoptotic, with strong neuroprotective properties. They represent complementary mitochondrial signaling pathways.',
    },
    {
      question: 'Can MOTS-c help with weight loss?',
      answer: 'In rodent studies, MOTS-c prevents diet-induced obesity and improves metabolic parameters without reducing food intake, suggesting it enhances metabolic rate. However, no human clinical trials have been conducted. MOTS-c should not be considered a proven weight loss treatment. Its effects on body composition in humans are unknown.',
    },
  ],
};
