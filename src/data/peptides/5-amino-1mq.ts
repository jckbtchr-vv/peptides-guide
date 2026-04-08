import { Peptide } from '../types';

export const fiveAmino1mq: Peptide = {
  slug: '5-amino-1mq',
  name: '5-Amino-1MQ',
  fullName: '5-Amino-1-Methylquinolinium (5-Amino-1MQ)',
  aliases: ['5-amino-1-methylquinolinium', '5A1MQ', '5-amino 1MQ'],
  sequence: 'N/A (small molecule — not a peptide)',
  molecularWeight: '173.21 g/mol',
  class: 'NNMT inhibitor (small molecule, often categorized alongside metabolic peptides)',
  halfLife: 'Estimated hours (limited pharmacokinetic data; oral bioavailability demonstrated)',
  administrationRoute: 'Oral (capsule), subcutaneous injection',

  categories: ['metabolic'],
  primaryCategory: 'metabolic',
  status: 'research',
  regulatoryNote: 'Research compound only. Not FDA-approved for any indication. Not approved for human use in any country. Technically a small molecule rather than a peptide, but frequently categorized alongside metabolic peptides in the research community.',

  tldr: 'A small molecule NNMT inhibitor that increases fat cell energy expenditure by preserving the NAD+ salvage pathway. Reduced fat mass 7% in mice without affecting appetite — but no human trials exist.',

  overview:
    '5-Amino-1MQ (5-amino-1-methylquinolinium) is a small molecule inhibitor of nicotinamide N-methyltransferase (NNMT), an enzyme that plays a central role in cellular energy metabolism and fat cell biology. While technically not a peptide, 5-Amino-1MQ is commonly discussed alongside metabolic peptides due to its overlapping applications in body composition and metabolic health.\n\nNNMT catalyzes the methylation of nicotinamide (a form of vitamin B3 and NAD+ precursor) to form 1-methylnicotinamide, consuming S-adenosylmethionine (SAM) as a methyl donor in the process. This reaction sits at a critical metabolic crossroads — it simultaneously depletes both NAD+ precursors and the universal methyl donor SAM.\n\nNNMT is highly expressed in white adipose tissue and liver. Its expression increases in obesity and metabolic syndrome. By inhibiting NNMT, 5-Amino-1MQ preserves the NAD+ salvage pathway (keeping more nicotinamide available for NAD+ synthesis), conserves SAM, and shifts adipocyte metabolism toward a more metabolically active state.\n\nThe compound has attracted attention for its potential in treating obesity without the appetite suppression side effects of GLP-1 agonists, instead working by directly modulating fat cell energy expenditure and differentiation.',

  mechanismOfAction:
    'NNMT (nicotinamide N-methyltransferase) converts nicotinamide to 1-methylnicotinamide, consuming SAM in the process. This reaction has two major metabolic consequences: it diverts nicotinamide away from the NAD+ salvage pathway (reducing cellular NAD+ levels) and depletes SAM (reducing cellular methylation capacity).\n\n5-Amino-1MQ inhibits NNMT, blocking this reaction and producing several downstream effects:\n\n1. NAD+ Salvage Pathway Preservation: By preventing nicotinamide methylation, more nicotinamide remains available for conversion to NAD+ via the NAMPT (nicotinamide phosphoribosyltransferase) salvage pathway. Increased NAD+ activates sirtuins (particularly SIRT1 and SIRT3), which regulate mitochondrial function, fatty acid oxidation, and metabolic gene expression.\n\n2. SAM Conservation: Preserved SAM levels support healthy methylation reactions throughout the cell, including DNA methylation, histone methylation, and synthesis of polyamines — all important for normal cellular function and epigenetic regulation.\n\n3. Adipocyte Metabolic Shift: NNMT is highly expressed in white adipose tissue. Its inhibition shifts adipocyte metabolism — reducing lipid accumulation, decreasing adipocyte size, and promoting a more metabolically active phenotype with increased energy expenditure.\n\n4. Reduced Adipogenesis: NNMT inhibition decreases the differentiation of preadipocytes into mature fat cells, reducing the capacity for new fat storage.\n\nThe net effect is enhanced cellular energy metabolism, improved NAD+-dependent signaling, and a shift in adipose tissue biology toward reduced fat storage and increased metabolic activity.',

  researchSummary:
    'Research on NNMT as a therapeutic target was significantly advanced by Neelakantan et al. (2017), who demonstrated that NNMT antisense oligonucleotides reduced body weight and adiposity in diet-induced obese mice. This established NNMT inhibition as a viable anti-obesity strategy.\n\nWahlberg et al. developed 5-Amino-1MQ as a potent and selective NNMT inhibitor. In cell-based assays, 5-Amino-1MQ effectively inhibited NNMT activity and reduced intracellular 1-methylnicotinamide levels. In adipocyte cultures, NNMT inhibition reduced lipid droplet accumulation and shifted gene expression away from lipogenic programs.\n\nDiet-induced obesity studies in mice showed that 5-Amino-1MQ treatment reduced body weight and fat mass without reducing food intake — a critical distinction from appetite-suppressing anti-obesity drugs. The weight loss was attributed to increased metabolic rate and reduced lipogenesis in adipose tissue.\n\nNAD+ metabolism research connects NNMT inhibition to the broader NAD+ biology field. By preserving the NAD+ salvage pathway, NNMT inhibitors like 5-Amino-1MQ may replicate some benefits of NAD+ precursor supplementation (NMN, NR) through a mechanistically distinct approach.\n\nOral bioavailability has been demonstrated in rodent studies, making 5-Amino-1MQ one of the few metabolic research compounds in this category that can be taken orally rather than by injection.\n\nLimitations: All data is preclinical. No human clinical trials have been published. The compound\'s pharmacokinetics, safety profile, and efficacy in humans are uncharacterized. Long-term effects of NNMT inhibition are unknown.',

  citations: [
    {
      title: 'Nicotinamide N-methyltransferase knockdown protects against diet-induced obesity',
      authors: 'Neelakantan H, et al.',
      journal: 'Nature',
      year: 2014,
      doi: '10.1038/nature13198',
      summary: 'Landmark study demonstrating that NNMT knockdown in adipose tissue protects mice against diet-induced obesity and improves metabolic parameters, establishing NNMT as a therapeutic target for metabolic disease.',
    },
    {
      title: 'Development of small molecule NNMT inhibitors for metabolic disease',
      authors: 'Neelakantan H, et al.',
      journal: 'Journal of Medicinal Chemistry',
      year: 2017,
      doi: '10.1021/acs.jmedchem.7b00476',
      summary: 'Described the development and characterization of 5-Amino-1MQ and related NNMT inhibitors. Demonstrated potent NNMT inhibition, reduced adiposity, and improved metabolic parameters in diet-induced obese mice.',
    },
    {
      title: 'NNMT: a bad actor in fat that is a good target for obesity treatment',
      authors: 'Pissios P.',
      journal: 'Journal of Pharmacology and Experimental Therapeutics',
      year: 2017,
      doi: '10.1124/jpet.116.238907',
      summary: 'Review establishing the rationale for NNMT as a drug target, detailing its role in adipose tissue metabolism, NAD+ homeostasis, and the potential of NNMT inhibitors for obesity treatment.',
    },
    {
      title: 'Nicotinamide N-methyltransferase is a master regulator of NAD+ metabolism and adipocyte differentiation',
      authors: 'Kraus D, et al.',
      journal: 'Nature Medicine',
      year: 2014,
      doi: '10.1038/nm.3616',
      summary: 'Demonstrated that NNMT regulates adipose tissue NAD+ levels and adipocyte differentiation. High NNMT expression promotes fat storage while NNMT inhibition shifts adipocyte biology toward a metabolically active state.',
    },
  ],

  protocols: [
    {
      name: 'Metabolic optimization / body composition (oral)',
      route: 'Oral',
      typicalDose: '50–150 mg daily',
      frequency: 'Once or twice daily, typically with meals',
      cycleDuration: '8–12 weeks on, 4 weeks off',
      notes: 'No established human dosing. Community-reported oral doses. Oral bioavailability was demonstrated in rodent studies but not quantified in humans. Morning dosing is commonly reported. Often used alongside diet and exercise programs.',
    },
    {
      name: 'Subcutaneous injection (research community)',
      route: 'Subcutaneous injection',
      typicalDose: '25–50 mg daily',
      frequency: 'Once daily',
      cycleDuration: '4–8 weeks on, 4 weeks off',
      notes: 'Injectable route used by some for potentially improved bioavailability. Lower doses than oral due to bypassing first-pass metabolism. No human pharmacokinetic data to guide dose adjustment between routes.',
    },
    {
      name: 'Animal research reference',
      route: 'Intraperitoneal injection',
      typicalDose: '16.7 mg/kg',
      frequency: '11 doses over 12 days',
      cycleDuration: '12 days',
      notes: 'Dosing from published rodent studies (Neelakantan et al., 2017). Mice received 16.7 mg/kg every ~26 hours for 12 days, resulting in reduced body weight and fat mass without changes in food intake. These are animal research parameters.',
    },
  ],

  protocolDisclaimer:
    '5-Amino-1MQ is a research compound with NO human clinical data. Although it is a small molecule with oral bioavailability, all dosing is extrapolated from animal studies or community anecdotes. Safety, efficacy, and pharmacokinetics in humans are completely uncharacterized. Consult a healthcare professional.',

  sideEffects: [
    { effect: 'Gastrointestinal discomfort', frequency: 'common', details: 'Nausea, stomach upset, or mild digestive changes, particularly with oral dosing. Taking with food may mitigate.' },
    { effect: 'Headache', frequency: 'uncommon', details: 'Reported by some users, potentially related to shifts in NAD+ metabolism or methylation status.' },
    { effect: 'Injection site reaction', frequency: 'common', details: 'For subcutaneous route: mild redness, irritation, or discomfort at injection site.' },
    { effect: 'Fatigue or energy changes', frequency: 'uncommon', details: 'Individual responses vary — some report increased energy while others experience transient fatigue during the initial adjustment period.' },
    { effect: 'Muscle soreness', frequency: 'rare', details: 'Occasionally reported. Mechanism unclear but may relate to metabolic shifts in muscle tissue.' },
  ],

  contraindications: [
    'Pregnancy or breastfeeding (no safety data)',
    'Liver disease (NNMT is highly expressed in the liver — inhibition effects in hepatic impairment are unknown)',
    'Concurrent use of NAD+ precursors (NMN, NR) or NAD+ boosters (potential pathway interaction)',
    'Methyl donor supplementation in high doses (SAM, TMG) — theoretical interaction with methylation pathways',
  ],

  interactions: [
    'NMN, NR, and other NAD+ precursors (NNMT inhibition preserves the NAD+ salvage pathway — concurrent use may produce additive effects on NAD+ levels)',
    'SAM and methyl donor supplements (NNMT inhibition conserves SAM — supplementation may be redundant or additive)',
    'Metformin (both influence cellular energy metabolism — potential additive metabolic effects)',
    'Statins (NNMT has roles in cholesterol metabolism — theoretical interaction)',
  ],

  storage: {
    lyophilized: 'Room temperature or refrigerated (2–25°C), stable for 12+ months when kept dry',
    reconstituted: 'Refrigerated (2–8°C), use within 28 days for injectable solutions',
    reconstitutionSolvent: 'Bacteriostatic water (for injectable); oral form typically provided as capsules',
    reconstitutionNotes: '5-Amino-1MQ is a small molecule with good chemical stability, more stable than most peptides. Available as lyophilized powder for injection or as oral capsules. The oral form does not require reconstitution. Store in a cool, dry place away from moisture and light.',
  },

  relatedPeptideSlugs: ['semaglutide', 'aod-9604', 'mots-c'],
  synergyNotes: 'The metabolic mechanism of 5-Amino-1MQ (NNMT inhibition, NAD+ preservation, reduced adipogenesis) is complementary to GLP-1 agonists like semaglutide (appetite suppression, insulin secretion). Where semaglutide primarily reduces caloric intake, 5-Amino-1MQ primarily increases metabolic expenditure in fat tissue. MOTS-c offers additional complementarity through AMPK-mediated metabolic regulation.',

  metaDescription: '5-Amino-1MQ is an NNMT inhibitor that preserves NAD+ levels and reduces fat cell accumulation. Oral bioavailability. Research, mechanisms, and metabolic applications.',

  faqItems: [
    {
      question: 'What is 5-Amino-1MQ?',
      answer: '5-Amino-1MQ is a small molecule inhibitor of NNMT (nicotinamide N-methyltransferase), an enzyme that depletes NAD+ precursors and promotes fat storage. By inhibiting NNMT, it preserves the NAD+ salvage pathway, reduces adipocyte lipid accumulation, and shifts fat cell metabolism toward increased energy expenditure. It is not technically a peptide but is commonly discussed alongside metabolic peptides.',
    },
    {
      question: 'How does 5-Amino-1MQ differ from semaglutide for weight management?',
      answer: 'They work through completely different mechanisms. Semaglutide is a GLP-1 receptor agonist that primarily reduces appetite and food intake. 5-Amino-1MQ inhibits NNMT to change how fat cells metabolize energy — reducing lipid storage and increasing metabolic activity without affecting appetite. In animal studies, 5-Amino-1MQ reduced fat mass without reducing food intake.',
    },
    {
      question: 'Is 5-Amino-1MQ actually a peptide?',
      answer: 'No. 5-Amino-1MQ is a small molecule (quinolinium derivative), not a peptide. It is commonly categorized alongside metabolic peptides because it is sold by similar suppliers, targets overlapping biological goals (body composition, metabolism), and is used by the same research community. Its small molecule structure gives it oral bioavailability, which most peptides lack.',
    },
    {
      question: 'Does 5-Amino-1MQ increase NAD+ levels?',
      answer: 'Indirectly, yes. By inhibiting NNMT, 5-Amino-1MQ prevents the methylation of nicotinamide (an NAD+ precursor), keeping more nicotinamide available for the NAD+ salvage pathway via NAMPT. This is a different approach from direct NAD+ precursor supplementation (NMN, NR) but targets the same end result — increased cellular NAD+ availability.',
    },
    {
      question: 'Can 5-Amino-1MQ be taken orally?',
      answer: 'Yes. Unlike most peptides, 5-Amino-1MQ has demonstrated oral bioavailability in animal studies. It is available as oral capsules and injectable forms. The oral route is more convenient but may have different pharmacokinetics compared to injection. No human pharmacokinetic studies have been published for either route.',
    },
  ],
};
