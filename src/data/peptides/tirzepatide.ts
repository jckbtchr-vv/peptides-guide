import { Peptide } from '../types';

export const tirzepatide: Peptide = {
  slug: 'tirzepatide',
  name: 'Tirzepatide',
  fullName: 'Tirzepatide (Dual GIP/GLP-1 Receptor Agonist)',
  aliases: ['Mounjaro', 'Zepbound', 'LY3298176'],
  molecularWeight: '4813.45 g/mol',
  class: 'Dual glucose-dependent insulinotropic polypeptide (GIP) and glucagon-like peptide-1 (GLP-1) receptor agonist',
  halfLife: '~5 days (approximately 120 hours)',
  administrationRoute: 'Subcutaneous injection',

  categories: ['metabolic'],
  primaryCategory: 'metabolic',
  status: 'approved',
  regulatoryNote: 'FDA-approved as Mounjaro (2022) for type 2 diabetes mellitus and as Zepbound (2023) for chronic weight management in adults with obesity or overweight with at least one weight-related comorbidity.',

  tldr: 'FDA-approved dual GIP/GLP-1 agonist (Mounjaro/Zepbound) that produced 20.9% average weight loss in SURMOUNT-1 — surpassing semaglutide in head-to-head trials.',

  overview:
    'Tirzepatide is a first-in-class dual agonist that activates both the glucose-dependent insulinotropic polypeptide (GIP) and glucagon-like peptide-1 (GLP-1) receptors. Developed by Eli Lilly, it represents a significant advance over single-incretin GLP-1 receptor agonists like semaglutide by harnessing the complementary metabolic effects of both incretin hormones.\n\nIn clinical trials, tirzepatide demonstrated superior weight loss and glycemic control compared to semaglutide, establishing a new benchmark in metabolic therapeutics. The SURMOUNT-1 trial showed average weight loss of 20.9% at the highest dose (15 mg) over 72 weeks — a level of weight reduction previously achievable only through bariatric surgery.\n\nTirzepatide is a 39-amino acid synthetic peptide based on the GIP sequence, with modifications that also confer GLP-1 receptor agonism. A C20 fatty diacid moiety enables albumin binding, extending the half-life to approximately 5 days and allowing once-weekly dosing. It was approved by the FDA as Mounjaro for type 2 diabetes in May 2022 and as Zepbound for chronic weight management in November 2023.',

  mechanismOfAction:
    'Tirzepatide acts as an agonist at both the GIP receptor (GIPR) and the GLP-1 receptor (GLP-1R), activating complementary metabolic pathways that neither receptor alone fully engages.\n\nGLP-1 receptor activation stimulates glucose-dependent insulin secretion from pancreatic beta cells, suppresses glucagon release from alpha cells, slows gastric emptying, and acts on hypothalamic and brainstem appetite centers to reduce food intake and increase satiety.\n\nGIP receptor activation provides additive and potentially synergistic effects. GIP enhances glucose-dependent insulin secretion through a distinct signaling cascade. In adipose tissue, GIP receptor activation is hypothesized to promote more efficient fat storage and lipid buffering, paradoxically improving metabolic health by reducing ectopic fat deposition in liver and muscle. GIP may also have direct effects on bone metabolism and neuroprotection.\n\nThe dual-agonist mechanism is thought to explain tirzepatide\'s superior efficacy over GLP-1-only agonists. While GLP-1 receptor activation reaches a ceiling of effect at higher doses (limited by tolerability), the addition of GIP receptor activation provides metabolic benefits through distinct pathways without proportionally increasing GI side effects.\n\nTirzepatide also demonstrates biased agonism at the GLP-1 receptor — it preferentially activates cAMP signaling over beta-arrestin recruitment, which may contribute to improved tolerability compared to balanced GLP-1 agonists.',

  researchSummary:
    'Tirzepatide has been evaluated in one of the most comprehensive clinical trial programs in metabolic therapeutics. The SURPASS program (type 2 diabetes) and SURMOUNT program (obesity/weight management) collectively enrolled over 25,000 participants.\n\nSURPASS-2 (head-to-head vs. semaglutide 1 mg): Tirzepatide at all doses (5, 10, 15 mg) demonstrated superior HbA1c reduction and weight loss compared to semaglutide. At the 15 mg dose, HbA1c reduction was 2.46% vs. 1.86% with semaglutide, and weight loss was 12.4 kg vs. 6.2 kg.\n\nSURMOUNT-1 (obesity without diabetes): Tirzepatide produced unprecedented weight loss — 15.0% (5 mg), 19.5% (10 mg), and 20.9% (15 mg) vs. 3.1% with placebo over 72 weeks. More than one-third of participants on the highest dose lost 25% or more of their body weight.\n\nSURMOUNT-2 (obesity with diabetes): Weight loss of 12.8% (10 mg) and 14.7% (15 mg) vs. 3.2% placebo over 72 weeks, demonstrating robust efficacy even in the more treatment-resistant diabetic population.\n\nAdditional research demonstrates improvements in blood pressure, triglycerides, liver fat content (NAFLD), and inflammatory markers. The SURMOUNT-OSA trial showed significant reductions in obstructive sleep apnea severity. Cardiovascular outcomes data (SURPASS-CVOT) is pending and will further define tirzepatide\'s role in cardiovascular risk reduction.',

  citations: [
    {
      title: 'Tirzepatide versus Semaglutide Once Weekly in Patients with Type 2 Diabetes (SURPASS-2)',
      authors: 'Frias JP, et al.',
      journal: 'New England Journal of Medicine',
      year: 2021,
      doi: '10.1056/NEJMoa2107519',
      summary: 'Head-to-head trial demonstrating superiority of tirzepatide over semaglutide 1 mg for both HbA1c reduction and weight loss in type 2 diabetes patients.',
    },
    {
      title: 'Tirzepatide Once Weekly for the Treatment of Obesity (SURMOUNT-1)',
      authors: 'Jastreboff AM, et al.',
      journal: 'New England Journal of Medicine',
      year: 2022,
      doi: '10.1056/NEJMoa2206038',
      summary: 'Landmark obesity trial showing 20.9% weight loss at the 15 mg dose over 72 weeks, with more than one-third of participants losing 25% or more of body weight.',
    },
    {
      title: 'Tirzepatide for the Treatment of Obesity in People with Type 2 Diabetes (SURMOUNT-2)',
      authors: 'Garvey WT, et al.',
      journal: 'The Lancet',
      year: 2023,
      doi: '10.1016/S0140-6736(23)01200-X',
      summary: 'Demonstrated 14.7% weight loss in obese patients with type 2 diabetes at the 15 mg dose, establishing efficacy in a traditionally more treatment-resistant population.',
    },
    {
      title: 'GIP and GLP-1 as therapeutic targets in diabetes and obesity',
      authors: 'Nauck MA, Meier JJ.',
      journal: 'Nature Reviews Endocrinology',
      year: 2021,
      doi: '10.1038/s41574-021-00583-7',
      summary: 'Comprehensive review of the scientific rationale for dual incretin agonism, including the complementary roles of GIP and GLP-1 in metabolic regulation.',
    },
    {
      title: 'Tirzepatide for Treatment of Obstructive Sleep Apnea and Obesity (SURMOUNT-OSA)',
      authors: 'Malhotra A, et al.',
      journal: 'New England Journal of Medicine',
      year: 2024,
      doi: '10.1056/NEJMoa2404881',
      summary: 'Demonstrated significant reductions in obstructive sleep apnea severity with tirzepatide, showing benefits beyond weight loss in obesity-related comorbidities.',
    },
  ],

  protocols: [
    {
      name: 'Chronic weight management (FDA-approved — Zepbound)',
      route: 'Subcutaneous injection',
      typicalDose: '5–15 mg weekly',
      frequency: 'Once weekly',
      cycleDuration: 'Ongoing (chronic treatment)',
      notes: 'Dose escalation: 2.5 mg × 4 weeks → 5 mg × 4 weeks → 7.5 mg × 4 weeks → 10 mg × 4 weeks → 12.5 mg × 4 weeks → 15 mg maintenance. Escalation may be paused at any dose if tolerability is an issue. Many patients achieve significant results at 10 mg.',
    },
    {
      name: 'Type 2 diabetes (FDA-approved — Mounjaro)',
      route: 'Subcutaneous injection',
      typicalDose: '5–15 mg weekly',
      frequency: 'Once weekly',
      cycleDuration: 'Ongoing',
      notes: 'Start at 2.5 mg for 4 weeks, then increase to 5 mg. May increase in 2.5 mg increments every 4 weeks based on glycemic response and tolerability. Maximum dose 15 mg weekly.',
    },
  ],

  protocolDisclaimer:
    'Tirzepatide is a prescription medication. Dosing must be determined by a licensed healthcare provider. The protocols listed here reflect FDA-approved prescribing information. Do not self-prescribe.',

  sideEffects: [
    { effect: 'Nausea', frequency: 'common', details: 'The most common side effect, affecting 12–33% depending on dose. Most pronounced during dose escalation and tends to improve with continued use.' },
    { effect: 'Diarrhea', frequency: 'common', details: 'Affects 12–23% of users. Usually transient and associated with dose increases.' },
    { effect: 'Vomiting', frequency: 'common', details: 'Affects 5–13% of users. More common at higher doses and during escalation.' },
    { effect: 'Constipation', frequency: 'common', details: 'Affects 6–11% of users. Related to slowed gastric emptying.' },
    { effect: 'Decreased appetite', frequency: 'common', details: 'Reported in 5–10% of users. Part of the therapeutic mechanism but can be excessive in some individuals.' },
    { effect: 'Injection site reactions', frequency: 'uncommon', details: 'Mild erythema, pain, or pruritus at the injection site.' },
    { effect: 'Pancreatitis', frequency: 'rare', details: 'Acute pancreatitis has been reported. Discontinue immediately if suspected. Monitor for persistent severe abdominal pain.' },
    { effect: 'Gallbladder events', frequency: 'uncommon', details: 'Cholelithiasis and cholecystitis reported at higher rates than placebo, consistent with rapid weight loss.' },
  ],

  contraindications: [
    'Personal or family history of medullary thyroid carcinoma (MTC)',
    'Multiple Endocrine Neoplasia syndrome type 2 (MEN 2)',
    'Known hypersensitivity to tirzepatide or any excipient',
    'History of pancreatitis (use with caution)',
    'Pregnancy or planning to become pregnant (discontinue at least 2 months before due to long half-life)',
  ],

  interactions: [
    'Delays gastric emptying — may affect the rate of absorption of concomitant oral medications',
    'May increase risk of hypoglycemia when combined with insulin or sulfonylureas (dose reduction of these agents may be required)',
    'Oral contraceptives: recommend non-oral contraception or a barrier method for 4 weeks after initiation and each dose escalation due to potential reduced absorption',
    'Oral medications with narrow therapeutic index should be monitored closely',
  ],

  storage: {
    lyophilized: 'N/A (supplied as solution in pre-filled single-dose pens)',
    reconstituted: 'Refrigerated (2–8°C) until first use. May be stored at room temperature (up to 30°C) for up to 21 days if needed.',
    reconstitutionSolvent: 'N/A (pre-mixed solution)',
    reconstitutionNotes: 'Do not freeze. Do not use if frozen. Protect from direct sunlight. Each pen is single-dose — discard after use. Inspect visually before use; do not use if discolored or contains particulate matter.',
  },

  relatedPeptideSlugs: ['semaglutide', 'aod-9604'],
  synergyNotes: 'Tirzepatide is often compared head-to-head with semaglutide (GLP-1 only agonist). In the SURPASS-2 trial, tirzepatide demonstrated superior weight loss and glycemic control at all doses compared to semaglutide 1 mg. The dual GIP/GLP-1 mechanism provides complementary metabolic effects.',

  metaDescription: 'Tirzepatide (Mounjaro/Zepbound) is an FDA-approved dual GIP/GLP-1 agonist for diabetes and weight loss. Clinical trials, mechanisms, dosing, and safety.',

  faqItems: [
    {
      question: 'How does tirzepatide compare to semaglutide for weight loss?',
      answer: 'In the SURPASS-2 head-to-head trial, tirzepatide at all doses (5, 10, 15 mg) produced greater weight loss than semaglutide 1 mg. The SURMOUNT-1 trial showed 20.9% average weight loss at the highest tirzepatide dose over 72 weeks, compared to the 15–17% seen with semaglutide 2.4 mg in STEP trials. Direct head-to-head obesity data is still emerging.',
    },
    {
      question: 'What is the difference between Mounjaro and Zepbound?',
      answer: 'Both contain tirzepatide. Mounjaro is approved for type 2 diabetes (2022), and Zepbound is approved for chronic weight management in adults with obesity or overweight with comorbidities (2023). The active ingredient and available doses are identical; the difference is the approved indication.',
    },
    {
      question: 'Why does tirzepatide target both GIP and GLP-1 receptors?',
      answer: 'GIP and GLP-1 are both incretin hormones with complementary metabolic effects. GLP-1 reduces appetite, slows gastric emptying, and stimulates insulin secretion. GIP provides additive insulin secretion, may improve lipid metabolism in adipose tissue, and engages pathways not reached by GLP-1 alone. The dual mechanism is thought to explain tirzepatide\'s superior efficacy.',
    },
    {
      question: 'What are the main side effects of tirzepatide?',
      answer: 'The most common side effects are gastrointestinal: nausea (12–33%), diarrhea (12–23%), vomiting (5–13%), and constipation (6–11%). These are most pronounced during dose escalation and typically improve over time. Serious but rare risks include pancreatitis and gallbladder events.',
    },
    {
      question: 'How long does it take for tirzepatide to work?',
      answer: 'Weight loss begins within the first few weeks but becomes more significant during dose escalation. Most clinical trial data shows the greatest rate of weight loss between weeks 12–40, with continued but slower loss through week 72. Full dose escalation to 15 mg takes approximately 20 weeks.',
    },
  ],
};
