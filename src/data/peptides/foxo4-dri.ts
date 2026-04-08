import { Peptide } from '../types';

export const foxo4dri: Peptide = {
  slug: 'foxo4-dri',
  name: 'FOXO4-DRI',
  fullName: 'FOXO4-DRI (D-Retro-Inverso FOXO4 Peptide)',
  aliases: ['FOXO4-DRI', 'Proxofim', 'FOXO4 D-retro-inverso peptide'],
  sequence: 'D-retro-inverso form of FOXO4 p53-interaction domain (~26 amino acids, all D-form)',
  molecularWeight: '~3200 g/mol (estimated based on peptide length)',
  class: 'Senolytic peptide / D-retro-inverso peptide',
  halfLife: 'Hours to days (D-amino acid peptides resist proteolytic degradation)',
  administrationRoute: 'Subcutaneous injection, intraperitoneal (research)',

  categories: ['longevity'],
  primaryCategory: 'longevity',
  status: 'experimental',
  regulatoryNote: 'Experimental research compound. Not approved for human use in any country. Preclinical data only. Developed by Dr. Peter de Keizer at Erasmus University Medical Center.',

  tldr: 'A senolytic peptide that selectively induces apoptosis in senescent cells by disrupting the FOXO4-p53 interaction. One mouse study showed restored fitness and fur density in aged mice.',

  eli5: 'Your body accumulates \'zombie cells\' — old cells that won\'t die but also won\'t work properly. This peptide tricks those zombie cells into finally self-destructing by disrupting a protein interaction that keeps them alive. One mouse study showed dramatically improved health in aged mice.',

  overview:
    'FOXO4-DRI is a senolytic peptide — a compound designed to selectively eliminate senescent cells. Cellular senescence is a state in which cells permanently exit the cell cycle but resist apoptosis (programmed cell death), accumulating in tissues with age and secreting a cocktail of inflammatory factors known as the senescence-associated secretory phenotype (SASP).\n\nDeveloped by Dr. Peter de Keizer and colleagues at Erasmus University Medical Center in the Netherlands, FOXO4-DRI works by disrupting a specific molecular interaction that keeps senescent cells alive. In senescent cells, the transcription factor FOXO4 binds to p53 (the tumor suppressor "guardian of the genome"), sequestering p53 away from mitochondria where it would trigger apoptosis. By outcompeting endogenous FOXO4 for p53 binding, FOXO4-DRI frees p53 to trigger apoptosis selectively in senescent cells.\n\nThe compound uses D-retro-inverso (DRI) technology — the peptide is synthesized with D-amino acids in reverse sequence, creating a mirror-image molecule that mimics the binding surface of natural FOXO4 but resists proteolytic degradation. This dramatically extends its biological half-life compared to L-amino acid peptides.',

  mechanismOfAction:
    'In healthy, non-senescent cells, the tumor suppressor p53 maintains low baseline activity. In senescent cells, however, p53 is actively suppressed by the transcription factor FOXO4. This FOXO4-p53 interaction occurs within nuclear PML (promyelocytic leukemia) bodies and is critical for maintaining the viability of senescent cells — without it, p53 is free to translocate to mitochondria and trigger intrinsic apoptosis.\n\nFOXO4-DRI is a cell-penetrating peptide that mimics the p53-binding domain of FOXO4. Because it is synthesized as a D-retro-inverso peptide, it maintains the same spatial arrangement of side chains as the native L-peptide while being resistant to protease degradation.\n\nOnce inside cells, FOXO4-DRI competitively binds p53, displacing endogenous FOXO4. In senescent cells — where the FOXO4-p53 axis is the primary survival mechanism — this displacement triggers p53-dependent apoptosis. Critically, in non-senescent cells, this interaction is not a survival dependency, so FOXO4-DRI does not trigger apoptosis in healthy cells.\n\nThe selectivity arises because senescent cells are uniquely dependent on FOXO4-mediated p53 sequestration for survival, while non-senescent cells employ multiple redundant anti-apoptotic mechanisms. This is what makes FOXO4-DRI a senolytic rather than a general cytotoxic agent.',

  researchSummary:
    'The landmark publication by Baar et al. (2017) in Cell demonstrated that FOXO4-DRI selectively induced apoptosis in senescent cells in vitro and in vivo. In naturally aged mice, FOXO4-DRI treatment reversed age-associated features including fur loss, renal dysfunction, and reduced fitness.\n\nIn doxorubicin-treated mice (a model of chemotherapy-induced senescence), FOXO4-DRI selectively cleared senescent cells and ameliorated chemotherapy side effects. This has implications for treating chemotherapy toxicity in cancer survivors.\n\nNaturally aged mice (>24 months) treated with FOXO4-DRI showed restored fur density, improved renal function (reduced plasma creatinine), and increased exploratory behavior and running wheel activity. These results were observed after intermittent treatment over several weeks.\n\nThe D-retro-inverso design was critical to the compound\'s success. The all-D-amino acid composition provides resistance to proteolytic degradation while maintaining binding specificity for p53. This approach solved the challenge of peptide stability that limits many therapeutic peptides.\n\nLimitations: Data is limited to one research group\'s publications. The aged mouse study involved small sample sizes. No human pharmacokinetic, dosing, or safety data exists. The compound is expensive to synthesize due to its length and D-amino acid composition. Long-term effects of senescent cell clearance — including potential depletion of beneficial senescent cells in wound healing — remain unknown.',

  citations: [
    {
      title: 'Targeted apoptosis of senescent cells restores tissue homeostasis in response to chemotoxicity and aging',
      authors: 'Baar MP, Brandt RMC, Putavet DA, et al.',
      journal: 'Cell',
      year: 2017,
      doi: '10.1016/j.cell.2017.02.031',
      summary: 'The seminal paper demonstrating FOXO4-DRI\'s mechanism and efficacy. Showed selective apoptosis of senescent cells in vitro, reversal of chemotherapy side effects, and restoration of fitness, fur density, and renal function in naturally aged mice.',
    },
    {
      title: 'Cellular senescence in aging and age-related disease: from mechanisms to therapy',
      authors: 'Childs BG, Durik M, Baker DJ, van Deursen JM.',
      journal: 'Nature Medicine',
      year: 2015,
      doi: '10.1038/nm.4000',
      summary: 'Comprehensive review of cellular senescence as a driver of age-related pathology and the therapeutic potential of senolytic approaches, providing context for FOXO4-DRI\'s significance.',
    },
    {
      title: 'Naturally occurring p53 mutations lead to resistance against senescence-targeting peptide FOXO4-DRI',
      authors: 'Baar MP, et al.',
      journal: 'Cell Reports',
      year: 2018,
      doi: '10.1016/j.celrep.2018.05.054',
      summary: 'Follow-up study showing that p53 mutations (common in cancer cells) confer resistance to FOXO4-DRI, highlighting the p53-dependent mechanism and the importance of functional p53 for the senolytic effect.',
    },
  ],

  protocols: [
    {
      name: 'Senolytic therapy (community-reported)',
      route: 'Subcutaneous injection',
      typicalDose: '5–10 mg per injection',
      frequency: '3 times per week',
      cycleDuration: '3–4 weeks on, extended off period (months)',
      notes: 'No established human dosing. Community protocols loosely based on mouse studies where 5 mg/kg was administered intraperitoneally. Senolytic therapies are typically pulsed — short treatment courses with extended rest periods — because senescent cell accumulation takes months to years. Continuous use is not the intended approach.',
    },
    {
      name: 'Animal research protocol (reference)',
      route: 'Intraperitoneal injection',
      typicalDose: '5 mg/kg body weight',
      frequency: '3 times per week',
      cycleDuration: '3–4 weeks',
      notes: 'The dosing used in the Baar et al. (2017) mouse study. In naturally aged mice, this protocol was administered over several weeks with intermittent dosing. These are animal research doses and cannot be directly translated to human dosing.',
    },
  ],

  protocolDisclaimer:
    'FOXO4-DRI is an experimental research compound with NO human clinical data. It is expensive to synthesize, and purity from non-pharmaceutical sources cannot be guaranteed. All dosing information is from animal studies. The long-term consequences of senescent cell clearance in humans are unknown. Consult a physician.',

  sideEffects: [
    { effect: 'Injection site reaction', frequency: 'common', details: 'Pain, redness, or swelling at injection site. The peptide is relatively large and may cause local irritation.' },
    { effect: 'Flu-like symptoms', frequency: 'uncommon', details: 'Theoretical — clearance of senescent cells releases cellular debris and may trigger transient inflammatory responses, similar to the "senolytic flu" reported with other senolytics.' },
    { effect: 'Fatigue', frequency: 'uncommon', details: 'Transient fatigue reported anecdotally, possibly related to immune activation during senescent cell clearance.' },
    { effect: 'Gastrointestinal discomfort', frequency: 'rare', details: 'Nausea or digestive upset. Senescent cells are present in the GI tract and their clearance may cause transient discomfort.' },
  ],

  contraindications: [
    'Active cancer or pre-cancerous conditions (p53-modulating agents require extreme caution)',
    'Impaired wound healing or active wounds (senescent cells play roles in wound repair)',
    'Pregnancy or breastfeeding (no safety data)',
    'Immune-compromised individuals (unknown effects on immune senescence)',
    'p53 mutations or Li-Fraumeni syndrome (mechanism requires functional p53)',
  ],

  interactions: [
    'Chemotherapy agents (may enhance clearance of treatment-induced senescent cells but could also affect treatment efficacy)',
    'Other senolytic compounds such as dasatinib + quercetin (potential additive effects — caution warranted)',
    'Immunosuppressive drugs (may alter the immune response to cleared senescent cells)',
  ],

  storage: {
    lyophilized: 'Frozen (-20°C), stable for 6–12 months. -80°C for longer storage.',
    reconstituted: 'Refrigerated (2–8°C), use within 7 days',
    reconstitutionSolvent: 'Bacteriostatic water or sterile saline',
    reconstitutionNotes: 'FOXO4-DRI is a large D-peptide that may have limited solubility. Reconstitute slowly and gently. Due to the expense of the compound, avoid waste from degradation — keep reconstituted solutions cold and use promptly. D-amino acid peptides are inherently more stable than L-peptides.',
  },

  relatedPeptideSlugs: ['epitalon', 'ghk-cu', 'ss-31'],
  synergyNotes: 'FOXO4-DRI addresses aging at the cellular senescence level, complementing other longevity-targeted peptides that work through different mechanisms. Epitalon targets telomere maintenance, GHK-Cu modulates gene expression toward youthful patterns, and SS-31 targets mitochondrial function. Combined senolytic + mitochondrial approaches are an area of active longevity research interest.',

  metaDescription: 'FOXO4-DRI is an experimental senolytic peptide that selectively eliminates senescent cells by disrupting the FOXO4-p53 interaction. Research, mechanism, and longevity applications.',

  faqItems: [
    {
      question: 'What is FOXO4-DRI and how does it work?',
      answer: 'FOXO4-DRI is a senolytic peptide that selectively kills senescent (aged, dysfunctional) cells. It works by disrupting the interaction between FOXO4 and p53 — a survival mechanism unique to senescent cells. When FOXO4-DRI displaces FOXO4, p53 is freed to trigger apoptosis specifically in senescent cells while leaving healthy cells unharmed.',
    },
    {
      question: 'What results were seen in the mouse studies?',
      answer: 'In naturally aged mice (over 24 months old), FOXO4-DRI treatment restored fur density, improved kidney function (reduced plasma creatinine), and increased physical activity and exploratory behavior. In chemotherapy-treated mice, it cleared treatment-induced senescent cells and reduced side effects.',
    },
    {
      question: 'Why is FOXO4-DRI so expensive?',
      answer: 'FOXO4-DRI is a relatively long peptide (~26 amino acids) synthesized entirely with D-amino acids in reverse sequence (D-retro-inverso technology). D-amino acid peptide synthesis is significantly more expensive than standard L-amino acid synthesis due to the higher cost of D-amino acid building blocks and lower coupling efficiencies.',
    },
    {
      question: 'What is the difference between FOXO4-DRI and dasatinib + quercetin?',
      answer: 'Both are senolytics but work through completely different mechanisms. FOXO4-DRI specifically disrupts the FOXO4-p53 axis that keeps senescent cells alive. Dasatinib + quercetin (D+Q) target senescent cell anti-apoptotic pathways more broadly (BCL-2 family, PI3K/AKT). D+Q has more human data including clinical trials, while FOXO4-DRI remains preclinical.',
    },
    {
      question: 'Is FOXO4-DRI safe for people with cancer?',
      answer: 'FOXO4-DRI should NOT be used by individuals with active cancer. The compound modulates p53 activity, and cancer cells frequently have altered p53 function. Additionally, some forms of cellular senescence (oncogene-induced senescence) serve as tumor suppression mechanisms. Eliminating these cells could theoretically promote cancer progression.',
    },
  ],
};
