import { Peptide } from '../types';

export const ll37: Peptide = {
  slug: 'll-37',
  name: 'LL-37',
  fullName: 'LL-37 (Cathelicidin Antimicrobial Peptide)',
  aliases: ['Cathelicidin', 'hCAP-18 fragment', 'CAMP', 'CRAMP (mouse ortholog)'],
  sequence: 'LLGDFFRKSKEKIGKEFKRIVQRIKDFLRNLVPRTES (37 amino acids)',
  molecularWeight: '4493.33 g/mol',
  class: 'Cathelicidin antimicrobial peptide (AMP)',
  halfLife: 'Estimated 30–60 minutes (susceptible to proteolytic degradation)',
  administrationRoute: 'Subcutaneous injection, topical',

  categories: ['immune-gut'],
  primaryCategory: 'immune-gut',
  status: 'research',
  regulatoryNote: 'Not FDA-approved for human use. Research compound only. Extensively studied in preclinical and early clinical settings.',

  tldr: 'The only human cathelicidin antimicrobial peptide. Disrupts bacterial membranes and biofilms while modulating immune response. Its production is directly regulated by vitamin D levels.',

  eli5: 'The only antimicrobial peptide humans naturally produce from the cathelicidin family. It punches holes in bacterial membranes and breaks up the protective shields (biofilms) that bacteria hide behind. Your body makes more of it when you have enough vitamin D.',

  overview:
    'LL-37 is the only cathelicidin antimicrobial peptide found in humans. It is a 37-amino-acid peptide cleaved from its precursor protein hCAP-18 (human cationic antimicrobial protein 18 kDa) by the protease proteinase 3. The name "LL-37" derives from its two N-terminal leucine residues and its 37-amino-acid length.\n\nLL-37 is produced by a wide variety of cell types including neutrophils, macrophages, epithelial cells (skin, gut, respiratory tract), and mast cells. It is a key component of the innate immune system and represents one of the body\'s first lines of defense against microbial invasion.\n\nBeyond its direct antimicrobial activity, LL-37 has multifunctional roles in immune regulation, wound healing, angiogenesis, and inflammation modulation. It can kill bacteria, fungi, and enveloped viruses, and is particularly effective at disrupting biofilms — structured bacterial communities that are notoriously resistant to conventional antibiotics. This makes LL-37 a subject of significant research interest in the era of increasing antibiotic resistance.',

  mechanismOfAction:
    'LL-37 operates through multiple mechanisms that span direct antimicrobial killing, immune modulation, and tissue repair.\n\nAs an antimicrobial peptide, LL-37 kills microorganisms primarily through membrane disruption. It is an amphipathic alpha-helical peptide, meaning it has both hydrophobic and cationic (positively charged) surfaces. The cationic surface binds to the negatively charged lipopolysaccharides (LPS) on gram-negative bacteria or lipoteichoic acid on gram-positive bacteria. The hydrophobic surface then inserts into the lipid bilayer, forming pores or disrupting membrane integrity, leading to cell death.\n\nLL-37 is particularly effective at disrupting bacterial biofilms. It interferes with biofilm formation at sub-inhibitory concentrations by reducing bacterial attachment, inhibiting quorum sensing, and promoting twitching motility that prevents the structured community formation. It can also penetrate established biofilms and kill bacteria within them.\n\nAs an immune modulator, LL-37 acts as an alarmin — a danger signal that recruits and activates immune cells. It is chemotactic for neutrophils, monocytes, and T cells via formyl peptide receptor-like 1 (FPRL1). It promotes dendritic cell differentiation and enhances phagocytosis by macrophages.\n\nLL-37 neutralizes lipopolysaccharide (LPS), the endotoxin from gram-negative bacteria, preventing excessive inflammatory responses and septic shock. Paradoxically, it can both promote and resolve inflammation depending on the context, making it a true immunomodulator rather than simply pro- or anti-inflammatory.\n\nIn wound healing, LL-37 promotes angiogenesis via VEGF upregulation, stimulates keratinocyte migration, and enhances re-epithelialization. These wound-healing effects are mediated through EGFR (epidermal growth factor receptor) transactivation.',

  researchSummary:
    'LL-37 research is extensive, spanning infectious disease, immunology, wound healing, and cancer biology.\n\nAntimicrobial activity: LL-37 demonstrates broad-spectrum activity against gram-positive bacteria (Staphylococcus aureus, MRSA, Streptococcus), gram-negative bacteria (Pseudomonas aeruginosa, E. coli, Klebsiella), fungi (Candida albicans), and enveloped viruses (influenza, HIV, respiratory syncytial virus). Its anti-biofilm activity is particularly notable, with studies showing efficacy against Pseudomonas aeruginosa biofilms at concentrations below its direct bactericidal threshold.\n\nWound healing: LL-37 expression is naturally upregulated in wounded skin. Studies in diabetic wound models show that LL-37 deficiency contributes to impaired healing, and exogenous LL-37 application restores healing capacity. Clinical interest exists for diabetic ulcers and chronic wound applications.\n\nInfectious disease: LL-37 deficiency (low vitamin D status reduces LL-37 expression) has been associated with increased susceptibility to respiratory infections, tuberculosis, and urinary tract infections. The vitamin D-LL-37 axis is one of the most studied connections between vitamin D status and immune function.\n\nCancer biology: Research shows context-dependent effects — LL-37 has anti-tumor effects in some cancers (gastric, colon) via apoptosis induction, but may promote tumor growth in others (ovarian, breast, lung) through pro-angiogenic and proliferative effects. This dual role requires careful consideration.\n\nClinical development: Lytix Biopharma developed LTX-109 (a synthetic peptide based on LL-37 principles) for topical treatment of skin infections. Academic clinical trials have explored LL-37 for venous leg ulcers with promising results (Gronberg et al., 2014).',

  citations: [
    {
      title: 'Cathelicidins: a family of endogenous antimicrobial peptides',
      authors: 'Zanetti M.',
      journal: 'Current Opinion in Infectious Diseases',
      year: 2004,
      doi: '10.1097/00001432-200406000-00005',
      summary: 'Foundational review of the cathelicidin family of antimicrobial peptides including LL-37, covering structure, expression, antimicrobial mechanisms, and immune functions.',
    },
    {
      title: 'LL-37, the only human member of the cathelicidin family of antimicrobial peptides',
      authors: 'Durr UHN, Sudheendra US, Ramamoorthy A.',
      journal: 'Biochimica et Biophysica Acta',
      year: 2006,
      doi: '10.1016/j.bbamem.2006.03.030',
      summary: 'Comprehensive structural and functional review of LL-37, detailing its amphipathic alpha-helical structure, membrane-disrupting mechanism, and multifunctional immunomodulatory roles.',
    },
    {
      title: 'Antimicrobial peptides in biofilm inhibition and destruction',
      authors: 'Overhage J, et al.',
      journal: 'Infection and Immunity',
      year: 2008,
      doi: '10.1128/IAI.00546-08',
      summary: 'Demonstrated LL-37 anti-biofilm activity against Pseudomonas aeruginosa at sub-MIC concentrations, showing inhibition of biofilm formation, attachment reduction, and promotion of twitching motility.',
    },
    {
      title: 'Treatment of hard-to-heal venous leg ulcers with a human cathelicidin peptide — a randomized trial',
      authors: 'Gronberg A, et al.',
      journal: 'Journal of the European Academy of Dermatology and Venereology',
      year: 2014,
      doi: '10.1111/jdv.12219',
      summary: 'Randomized clinical trial demonstrating that topical LL-37 promotes healing of chronic venous leg ulcers compared to placebo, providing the most advanced human clinical evidence for therapeutic LL-37 use.',
    },
    {
      title: 'Toll-like receptor triggering of a vitamin D-mediated human antimicrobial response',
      authors: 'Liu PT, et al.',
      journal: 'Science',
      year: 2006,
      doi: '10.1126/science.1123933',
      summary: 'Landmark study establishing the vitamin D-cathelicidin axis: TLR activation in macrophages upregulates vitamin D receptor and 1-alpha-hydroxylase, leading to increased LL-37 production and enhanced antimicrobial activity against Mycobacterium tuberculosis.',
    },
  ],

  protocols: [
    {
      name: 'Immune support / antimicrobial',
      route: 'Subcutaneous injection',
      typicalDose: '100–200 mcg',
      frequency: 'Once daily',
      cycleDuration: '2–4 weeks',
      notes: 'Community-reported protocol for systemic immune support. Given the short half-life, daily dosing is standard. Inject subcutaneously in the abdominal area. Some protocols use higher doses (up to 500 mcg) for acute infections.',
    },
    {
      name: 'Biofilm-targeted protocol',
      route: 'Subcutaneous injection',
      typicalDose: '200–500 mcg',
      frequency: 'Once daily',
      cycleDuration: '4–8 weeks',
      notes: 'Extended protocol used in community settings for suspected biofilm infections (chronic sinusitis, Lyme-associated biofilms, chronic wound infections). Higher doses and longer duration are used based on the difficulty of eradicating established biofilms.',
    },
    {
      name: 'Topical wound healing (research reference)',
      route: 'Topical application',
      typicalDose: '0.5–1.6 mg/mL in wound dressing',
      frequency: 'Applied 2–3 times per week at dressing changes',
      cycleDuration: 'Until wound closure (up to 12 weeks in clinical trials)',
      notes: 'Based on the Gronberg et al. (2014) clinical trial protocol for venous leg ulcers. LL-37 was applied topically in a wound dressing matrix. Not a standard community protocol.',
    },
  ],

  protocolDisclaimer:
    'These protocols are compiled from published research and community reports. They are not medical recommendations. LL-37 is not FDA-approved for human use. Its effects on cancer are context-dependent — consult a qualified healthcare professional before use.',

  sideEffects: [
    { effect: 'Injection site redness, pain, or irritation', frequency: 'common', details: 'LL-37 is a cationic peptide and can cause local irritation at injection sites. Rotating injection sites and proper dilution help minimize this.' },
    { effect: 'Mild flu-like symptoms', frequency: 'uncommon', details: 'As an immune activator (alarmin), LL-37 may trigger mild immune stimulation symptoms including low-grade fever and fatigue.' },
    { effect: 'Temporary skin flushing', frequency: 'uncommon', details: 'Reported anecdotally, likely due to mast cell activation and histamine release.' },
    { effect: 'Headache', frequency: 'rare', details: 'Infrequently reported in community use.' },
    { effect: 'Mast cell activation', frequency: 'rare', details: 'LL-37 can directly activate mast cells. Individuals with mast cell activation disorders should exercise caution.' },
  ],

  contraindications: [
    'Active cancer, particularly ovarian, breast, or lung cancer (LL-37 may promote tumor growth in certain cancer types via angiogenic and proliferative effects)',
    'Mast cell activation syndrome (MCAS) or mastocytosis (LL-37 activates mast cells)',
    'Pregnancy or breastfeeding (insufficient safety data)',
    'Rosacea or psoriasis (LL-37 overexpression is implicated in the pathogenesis of these conditions)',
  ],

  interactions: [
    'May interact with vitamin D supplementation (vitamin D upregulates endogenous LL-37 production via the VDR pathway)',
    'Potential interaction with immunosuppressive medications (LL-37 enhances innate immune responses)',
    'Theoretical additive effect with antibiotics, particularly against biofilm infections',
    'May enhance the effects of other antimicrobial peptides (e.g., defensins)',
  ],

  storage: {
    lyophilized: 'Refrigerated (2–8°C) or frozen (-20°C), stable for up to 12 months. Protect from light and moisture.',
    reconstituted: 'Refrigerated (2–8°C), use within 14 days. Avoid repeated freeze-thaw cycles.',
    reconstitutionSolvent: 'Bacteriostatic water (BAC water) or sterile water for injection',
    reconstitutionNotes: 'Add solvent slowly down the side of the vial. Do not shake — swirl gently. LL-37 is a larger peptide; ensure complete dissolution before use. Standard reconstitution: 1 mL BAC water into a 5 mg vial yields 5,000 mcg/mL.',
  },

  relatedPeptideSlugs: ['thymosin-alpha-1', 'bpc-157', 'kpv'],
  synergyNotes: 'LL-37 is sometimes combined with Thymosin Alpha-1 for comprehensive immune support — LL-37 provides innate immune defense and direct antimicrobial action while Tα1 enhances adaptive immunity and T-cell function. In gut-focused protocols, LL-37 may be paired with BPC-157 or KPV for antimicrobial action alongside tissue repair and anti-inflammatory effects.',

  metaDescription: 'LL-37 (Cathelicidin) is a human antimicrobial peptide researched for infection defense, biofilm disruption, wound healing, and immune modulation. Research and protocols.',

  faqItems: [
    {
      question: 'What is LL-37 and what does it do?',
      answer: 'LL-37 is the only cathelicidin antimicrobial peptide found in humans. It is a 37-amino-acid peptide that serves as a first-line immune defense, directly killing bacteria, fungi, and viruses through membrane disruption. It also disrupts bacterial biofilms, modulates immune responses, and promotes wound healing.',
    },
    {
      question: 'Can LL-37 break down biofilms?',
      answer: 'Yes. LL-37 is one of the most studied natural anti-biofilm agents. Research shows it inhibits biofilm formation, reduces bacterial attachment, and can penetrate established biofilms. It is effective against Pseudomonas aeruginosa biofilms at concentrations below its direct bactericidal threshold, making it a candidate for chronic biofilm-associated infections.',
    },
    {
      question: 'What is the connection between vitamin D and LL-37?',
      answer: 'Vitamin D directly regulates LL-37 production. When immune cells detect pathogens via Toll-like receptors, they upregulate the vitamin D receptor and the enzyme that converts vitamin D to its active form, which then induces LL-37 gene expression. This vitamin D-cathelicidin axis explains why vitamin D deficiency is associated with increased infection susceptibility.',
    },
    {
      question: 'Is LL-37 safe to use with cancer?',
      answer: 'LL-37 has context-dependent effects on cancer. It shows anti-tumor activity in some cancers (gastric, colon) by inducing cancer cell death, but may promote tumor growth in others (ovarian, breast, lung) through pro-angiogenic effects. Individuals with active cancer should avoid LL-37 unless specifically advised by their oncologist.',
    },
    {
      question: 'What are the side effects of LL-37?',
      answer: 'The most common side effect is injection site irritation due to its cationic (positively charged) nature. Some users report mild flu-like symptoms from immune activation. LL-37 can activate mast cells, so individuals with mast cell disorders should exercise caution. It is also implicated in rosacea and psoriasis pathology and may worsen these conditions.',
    },
  ],
};
