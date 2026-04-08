import { Peptide } from '../types';

export const bpc157: Peptide = {
  slug: 'bpc-157',
  name: 'BPC-157',
  fullName: 'Body Protection Compound-157',
  aliases: ['Pentadecapeptide', 'PL 14736', 'PL-10', 'Bepecin'],
  sequence: 'Gly-Glu-Pro-Pro-Pro-Gly-Lys-Pro-Ala-Asp-Asp-Ala-Gly-Leu-Val',
  molecularWeight: '1419.53 g/mol',
  class: 'Gastric pentadecapeptide',
  halfLife: 'Estimated 1–2 hours (stable in gastric juice)',
  administrationRoute: 'Subcutaneous injection, oral',

  categories: ['healing-recovery', 'immune-gut'],
  primaryCategory: 'healing-recovery',
  status: 'research',
  regulatoryNote: 'Not FDA-approved for human use. Research compound only.',

  overview:
    'BPC-157 is a synthetic pentadecapeptide derived from a protective protein found in human gastric juice. It consists of 15 amino acids and is a partial sequence of body protection compound (BPC) that is naturally produced in the stomach.\n\nSince its discovery, BPC-157 has been extensively studied in animal models for its remarkable tissue-healing properties. Research demonstrates effects on tendon, muscle, ligament, bone, and gut healing, along with protective effects on the liver, brain, and cardiovascular system.\n\nUnlike most peptides, BPC-157 is stable in human gastric juice, which gives it the unique property of being potentially effective via oral administration — a significant advantage over peptides that require injection.',

  mechanismOfAction:
    'BPC-157 operates through multiple interconnected pathways. Its primary mechanism involves upregulation of growth factor expression, particularly VEGF (vascular endothelial growth factor), which promotes angiogenesis — the formation of new blood vessels at injury sites.\n\nIt modulates the nitric oxide (NO) system, which plays a critical role in blood vessel function, inflammation, and tissue repair. BPC-157 appears to interact with the dopaminergic, serotonergic, and GABAergic systems, which may explain its observed effects on mood and neuroprotection.\n\nAt the cellular level, BPC-157 promotes fibroblast outgrowth and migration, accelerates collagen formation, and upregulates FAK-paxillin signaling — a pathway essential for cell migration to wound sites. It also counteracts the effects of several damaging agents including NSAIDs, alcohol, and various toxins on the gastrointestinal tract.',

  researchSummary:
    'BPC-157 has been studied in over 100 preclinical studies, predominantly in rodent models. The research spans tendon healing (Achilles tendon transection models), muscle healing (crush injuries), ligament repair (medial collateral ligament), and bone fracture healing.\n\nGastrointestinal research shows significant protective and healing effects on inflammatory bowel disease models, gastric ulcers, and intestinal anastomosis healing. Studies demonstrate accelerated healing of esophageal, gastric, and duodenal lesions.\n\nNeuroprotective research includes models of traumatic brain injury, peripheral nerve damage, and dopaminergic system protection. BPC-157 has shown protective effects against MPTP-induced neurotoxicity and cuprizone-induced demyelination.\n\nA critical limitation: as of 2024, there are no published Phase II or Phase III human clinical trials. The evidence base, while extensive, remains preclinical. One small Phase II trial (PL 14736 for inflammatory bowel disease) has been referenced but results have not been fully published.',

  citations: [
    {
      title: 'Stable gastric pentadecapeptide BPC 157: novel therapy in gastrointestinal tract',
      authors: 'Sikiric P, et al.',
      journal: 'Current Pharmaceutical Design',
      year: 2011,
      doi: '10.2174/138161211796197115',
      summary: 'Comprehensive review of BPC-157\'s gastrointestinal effects including ulcer healing, cytoprotection, and inflammatory bowel disease models.',
    },
    {
      title: 'Pentadecapeptide BPC 157 enhances the growth hormone receptor expression in tendon fibroblasts',
      authors: 'Chang CH, et al.',
      journal: 'Molecules',
      year: 2014,
      doi: '10.3390/molecules191119066',
      summary: 'Demonstrated BPC-157 upregulates growth hormone receptor expression in tendon fibroblasts, promoting tendon healing through enhanced GH signaling.',
    },
    {
      title: 'BPC 157 and standard angiogenic growth factors: gastrointestinal tract healing, lessons from tendon, ligament, muscle and bone healing',
      authors: 'Seiwerth S, et al.',
      journal: 'Current Pharmaceutical Design',
      year: 2018,
      doi: '10.2174/1381612824666180712094658',
      summary: 'Review of BPC-157\'s angiogenic properties and their role in tissue healing across multiple tissue types including tendon, ligament, and muscle.',
    },
    {
      title: 'Stable gastric pentadecapeptide BPC 157 in trials for inflammatory bowel disease (PL-10, PLD-116, PL 14736, Pliva, Croatia)',
      authors: 'Sikiric P, et al.',
      journal: 'Current Medicinal Chemistry',
      year: 2012,
      doi: '10.2174/092986712800784066',
      summary: 'Discussion of the IBD trial background for BPC-157, including the development pathway for PL 14736 and evidence supporting its anti-inflammatory effects.',
    },
  ],

  protocols: [
    {
      name: 'Systemic healing (research-based)',
      route: 'Subcutaneous injection',
      typicalDose: '250–500 mcg',
      frequency: '1–2 times daily',
      cycleDuration: '4–6 weeks',
      notes: 'Inject near the site of injury when possible. Lower dose (250 mcg) for general recovery, higher dose for acute injuries.',
    },
    {
      name: 'Oral (gut-focused)',
      route: 'Oral',
      typicalDose: '250–500 mcg',
      frequency: 'Once daily, on empty stomach',
      cycleDuration: '4–8 weeks',
      notes: 'BPC-157 is stable in gastric juice, making oral administration viable. Primarily used for GI-related applications.',
    },
  ],

  protocolDisclaimer:
    'These protocols are compiled from published research and community reports. They are not medical recommendations. BPC-157 is not FDA-approved for human use. Consult a qualified healthcare professional before use.',

  sideEffects: [
    { effect: 'Injection site redness or irritation', frequency: 'common', details: 'Typically mild and resolves within hours.' },
    { effect: 'Nausea', frequency: 'uncommon', details: 'More common with oral administration. Usually mild.' },
    { effect: 'Dizziness', frequency: 'uncommon', details: 'Reported anecdotally. May be related to blood pressure changes.' },
    { effect: 'Headache', frequency: 'rare' },
  ],

  contraindications: [
    'Active cancer or history of cancer (theoretical concern due to angiogenic properties)',
    'Pregnancy or breastfeeding',
    'Concurrent use of medications that affect coagulation (insufficient interaction data)',
  ],

  interactions: [
    'May interact with blood pressure medications via NO system modulation',
    'Theoretical interaction with anticoagulants due to effects on blood vessel formation',
    'May modulate the effects of dopaminergic medications',
  ],

  storage: {
    lyophilized: 'Room temperature or refrigerated (2–8°C), stable for up to 24 months',
    reconstituted: 'Refrigerated (2–8°C), use within 30 days',
    reconstitutionSolvent: 'Bacteriostatic water (BAC water)',
    reconstitutionNotes: 'Add solvent slowly down the side of the vial. Do not shake — swirl gently. Standard reconstitution: 2 mL BAC water into a 5 mg vial yields 2,500 mcg/mL.',
  },

  relatedPeptideSlugs: ['tb-500', 'ghk-cu', 'kpv'],
  synergyNotes: 'Frequently used alongside TB-500 for enhanced healing. The combination targets complementary pathways — BPC-157 promotes angiogenesis while TB-500 promotes actin regulation and cell migration.',

  metaDescription: 'BPC-157 (Body Protection Compound-157) is a gastric pentadecapeptide researched for tendon, muscle, gut, and tissue healing. Mechanisms, research, protocols, and safety.',

  faqItems: [
    {
      question: 'What is BPC-157 and what does it do?',
      answer: 'BPC-157 is a synthetic peptide derived from a protein found in human gastric juice. It has been extensively researched in animal models for its ability to accelerate healing of tendons, muscles, ligaments, gut lining, and other tissues through upregulation of growth factors and angiogenesis.',
    },
    {
      question: 'Is BPC-157 FDA-approved?',
      answer: 'No. BPC-157 is not FDA-approved for human use. It remains a research compound. While preclinical evidence is extensive (100+ animal studies), no completed Phase II or Phase III human clinical trials have been published.',
    },
    {
      question: 'Can BPC-157 be taken orally?',
      answer: 'BPC-157 is uniquely stable in human gastric juice, unlike most peptides. Research suggests oral administration may be effective, particularly for gastrointestinal applications. Most other applications use subcutaneous injection.',
    },
    {
      question: 'What are the side effects of BPC-157?',
      answer: 'BPC-157 appears well-tolerated in animal studies with no reported toxicity at standard research doses. Anecdotal human reports include mild injection site irritation and occasional nausea. Long-term human safety data is not available.',
    },
    {
      question: 'Can BPC-157 be used with TB-500?',
      answer: 'BPC-157 and TB-500 are frequently combined in research and practice. They target complementary healing pathways — BPC-157 promotes blood vessel formation while TB-500 supports cell migration and tissue remodeling.',
    },
  ],
};
