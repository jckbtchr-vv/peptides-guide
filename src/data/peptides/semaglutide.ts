import { Peptide } from '../types';

export const semaglutide: Peptide = {
  slug: 'semaglutide',
  name: 'Semaglutide',
  fullName: 'Semaglutide (GLP-1 Receptor Agonist)',
  aliases: ['Ozempic', 'Wegovy', 'Rybelsus'],
  molecularWeight: '4113.58 g/mol',
  class: 'GLP-1 receptor agonist',
  halfLife: '~7 days (168 hours)',
  administrationRoute: 'Subcutaneous injection, oral',

  categories: ['metabolic'],
  primaryCategory: 'metabolic',
  status: 'approved',
  regulatoryNote: 'FDA-approved as Ozempic (type 2 diabetes) and Wegovy (chronic weight management). Rybelsus approved for oral use in diabetes.',

  overview:
    'Semaglutide is a glucagon-like peptide-1 (GLP-1) receptor agonist that mimics the effects of the naturally occurring incretin hormone GLP-1. It is one of the most extensively studied and commercially successful peptide therapeutics in modern medicine.\n\nOriginally developed for type 2 diabetes management, semaglutide gained widespread attention for its significant effects on weight loss. The STEP clinical trial program demonstrated average weight reductions of 15–17% of body weight at the 2.4 mg weekly dose.\n\nSemaglutide has a remarkably long half-life of approximately 7 days due to structural modifications including a C-18 fatty acid chain and amino acid substitutions that increase albumin binding and resistance to DPP-4 degradation.',

  mechanismOfAction:
    'Semaglutide activates the GLP-1 receptor, a G protein-coupled receptor expressed in pancreatic beta cells, the gastrointestinal tract, heart, kidneys, and multiple brain regions including the hypothalamus and brainstem.\n\nIn the pancreas, GLP-1 receptor activation stimulates glucose-dependent insulin secretion and suppresses glucagon release, improving glycemic control. Critically, this is glucose-dependent — insulin release only occurs when blood glucose is elevated, reducing hypoglycemia risk.\n\nIn the brain, semaglutide acts on appetite-regulating centers in the hypothalamus and brainstem. It reduces hunger, increases satiety, and appears to modify food reward pathways. Neuroimaging studies show reduced activation of brain regions associated with food cravings.\n\nSemaglutide also slows gastric emptying, contributing to post-meal satiety. It has demonstrated direct cardiovascular benefits including reduced arterial inflammation and improved endothelial function, independent of weight loss.',

  researchSummary:
    'Semaglutide has one of the most robust clinical evidence bases of any peptide therapeutic. The SUSTAIN trial program (1–10) established efficacy in type 2 diabetes with superior HbA1c reduction compared to other diabetes medications.\n\nThe STEP trial program (1–5) demonstrated transformative weight loss results. STEP 1 showed 14.9% mean weight loss vs. 2.4% with placebo over 68 weeks. STEP 2 in diabetic patients showed 9.6% weight loss. STEP 3 combined with intensive behavioral therapy achieved 16% weight loss.\n\nThe SELECT cardiovascular outcomes trial demonstrated a 20% reduction in major adverse cardiovascular events (MACE) in overweight/obese adults without diabetes, leading to expanded cardiovascular indications.\n\nEmerging research explores semaglutide for NAFLD/NASH (fatty liver disease), Alzheimer\'s disease, addiction (alcohol and substance use disorders), and polycystic kidney disease. The FLOW trial showed significant renal benefits.',

  citations: [
    {
      title: 'Once-Weekly Semaglutide in Adults with Overweight or Obesity (STEP 1)',
      authors: 'Wilding JPH, et al.',
      journal: 'New England Journal of Medicine',
      year: 2021,
      doi: '10.1056/NEJMoa2032183',
      summary: 'Landmark trial demonstrating 14.9% mean body weight reduction with semaglutide 2.4 mg weekly vs. 2.4% with placebo over 68 weeks in 1,961 adults.',
    },
    {
      title: 'Semaglutide and Cardiovascular Outcomes in Patients with Type 2 Diabetes (SUSTAIN-6)',
      authors: 'Marso SP, et al.',
      journal: 'New England Journal of Medicine',
      year: 2016,
      doi: '10.1056/NEJMoa1607141',
      summary: 'Cardiovascular outcomes trial showing 26% reduction in MACE with semaglutide in type 2 diabetes patients over 2 years.',
    },
    {
      title: 'Semaglutide and Cardiovascular Outcomes in Obesity without Diabetes (SELECT)',
      authors: 'Lincoff AM, et al.',
      journal: 'New England Journal of Medicine',
      year: 2023,
      doi: '10.1056/NEJMoa2307563',
      summary: 'SELECT trial demonstrated 20% reduction in major cardiovascular events with semaglutide in overweight/obese adults without diabetes.',
    },
    {
      title: 'Effect of Semaglutide on the Progression of Renal Impairment (FLOW)',
      authors: 'Perkovic V, et al.',
      journal: 'New England Journal of Medicine',
      year: 2024,
      doi: '10.1056/NEJMoa2403347',
      summary: 'FLOW trial demonstrated significant reduction in kidney disease progression in patients with type 2 diabetes and chronic kidney disease.',
    },
  ],

  protocols: [
    {
      name: 'Weight management (FDA-approved)',
      route: 'Subcutaneous injection',
      typicalDose: '2.4 mg weekly (Wegovy)',
      frequency: 'Once weekly',
      cycleDuration: 'Ongoing (chronic treatment)',
      notes: 'Dose escalation over 16–20 weeks: 0.25 mg × 4 weeks → 0.5 mg × 4 weeks → 1.0 mg × 4 weeks → 1.7 mg × 4 weeks → 2.4 mg maintenance.',
    },
    {
      name: 'Type 2 diabetes (FDA-approved)',
      route: 'Subcutaneous injection',
      typicalDose: '0.5–2.0 mg weekly (Ozempic)',
      frequency: 'Once weekly',
      cycleDuration: 'Ongoing',
      notes: 'Start at 0.25 mg for 4 weeks, then 0.5 mg. May increase to 1.0 mg and then 2.0 mg based on glycemic response.',
    },
    {
      name: 'Oral formulation (diabetes)',
      route: 'Oral',
      typicalDose: '3–14 mg daily (Rybelsus)',
      frequency: 'Once daily',
      cycleDuration: 'Ongoing',
      notes: 'Take on empty stomach with no more than 4 oz of water, at least 30 minutes before food. Dose escalation: 3 mg × 30 days → 7 mg → 14 mg.',
    },
  ],

  protocolDisclaimer:
    'Semaglutide is a prescription medication. Dosing should be determined by a licensed healthcare provider. The protocols listed here reflect FDA-approved prescribing information. Do not self-prescribe.',

  sideEffects: [
    { effect: 'Nausea', frequency: 'common', details: 'Most common side effect, affecting 20–44% of users. Usually improves over weeks. Dose escalation helps mitigate.' },
    { effect: 'Vomiting', frequency: 'common', details: 'Affects approximately 15–25% of users. More common during dose escalation.' },
    { effect: 'Diarrhea', frequency: 'common', details: 'Affects 15–30% of users. Usually transient.' },
    { effect: 'Constipation', frequency: 'common', details: 'Affects 10–24% of users.' },
    { effect: 'Injection site reactions', frequency: 'uncommon', details: 'Redness, itching, or pain at injection site.' },
    { effect: 'Pancreatitis', frequency: 'rare', details: 'Acute pancreatitis has been reported. Discontinue if suspected.' },
    { effect: 'Gallbladder events', frequency: 'uncommon', details: 'Cholelithiasis and cholecystitis reported at higher rates than placebo.' },
  ],

  contraindications: [
    'Personal or family history of medullary thyroid carcinoma (MTC)',
    'Multiple Endocrine Neoplasia syndrome type 2 (MEN 2)',
    'Known hypersensitivity to semaglutide',
    'History of pancreatitis (use with caution)',
    'Pregnancy or planning to become pregnant (discontinue at least 2 months before)',
  ],

  interactions: [
    'Delays gastric emptying — may affect absorption of oral medications',
    'May increase risk of hypoglycemia when combined with insulin or sulfonylureas',
    'Oral contraceptives may have reduced efficacy due to delayed gastric emptying',
  ],

  storage: {
    lyophilized: 'N/A (supplied as solution in pre-filled pens)',
    reconstituted: 'Refrigerated (2–8°C) before first use. After first use, store at room temperature (up to 30°C) or refrigerated for up to 56 days.',
    reconstitutionSolvent: 'N/A (pre-mixed solution)',
    reconstitutionNotes: 'Do not freeze. Protect from direct sunlight. Discard pen after 56 days of first use, even if medication remains.',
  },

  relatedPeptideSlugs: ['tirzepatide', 'aod-9604', 'mots-c'],
  synergyNotes: 'Sometimes discussed alongside Tirzepatide (dual GIP/GLP-1 agonist), which has shown even greater weight loss in head-to-head trials. AOD-9604 targets different fat-loss pathways.',

  metaDescription: 'Semaglutide (Ozempic/Wegovy) is an FDA-approved GLP-1 receptor agonist for diabetes and weight management. Mechanisms, clinical trials, dosing, and safety data.',

  faqItems: [
    {
      question: 'What is semaglutide and how does it work?',
      answer: 'Semaglutide is a GLP-1 receptor agonist that mimics the incretin hormone GLP-1. It works by stimulating insulin release, suppressing glucagon, slowing gastric emptying, and acting on brain appetite centers to reduce hunger and increase satiety.',
    },
    {
      question: 'How much weight can you lose on semaglutide?',
      answer: 'Clinical trials show average weight loss of 14.9% of body weight over 68 weeks at the 2.4 mg weekly dose (STEP 1 trial). Individual results vary significantly, ranging from 5% to over 20% body weight reduction.',
    },
    {
      question: 'What is the difference between Ozempic and Wegovy?',
      answer: 'Both contain semaglutide. Ozempic is approved for type 2 diabetes (max dose 2.0 mg/week). Wegovy is approved for chronic weight management (dose 2.4 mg/week). The active ingredient is identical; the difference is the approved indication and maximum dose.',
    },
    {
      question: 'What are the main side effects of semaglutide?',
      answer: 'The most common side effects are gastrointestinal: nausea (20–44%), vomiting (15–25%), diarrhea (15–30%), and constipation (10–24%). These usually improve during the dose escalation period. Serious but rare risks include pancreatitis and gallbladder disease.',
    },
    {
      question: 'Do you regain weight after stopping semaglutide?',
      answer: 'The STEP 1 extension study showed that participants regained approximately two-thirds of lost weight within one year of discontinuation. This suggests semaglutide may require long-term use to maintain weight loss, though lifestyle changes during treatment may partially offset regain.',
    },
  ],
};
