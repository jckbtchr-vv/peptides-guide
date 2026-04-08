import { Peptide } from '../types';

export const orforglipron: Peptide = {
  slug: 'orforglipron',
  name: 'Orforglipron',
  fullName: 'Orforglipron (LY3502970)',
  aliases: ['LY3502970', 'Oral GLP-1'],
  molecularWeight: '~527.6 g/mol',
  class: 'Non-peptide oral GLP-1 receptor agonist (small molecule)',
  halfLife: '~25–65 hours',
  administrationRoute: 'Oral (daily tablet)',

  categories: ['metabolic'],
  primaryCategory: 'metabolic',
  status: 'clinical-trials',
  regulatoryNote: 'Investigational compound developed by Eli Lilly. Currently in Phase 3 clinical trials (ATTAIN program) for obesity and type 2 diabetes. Not yet approved by any regulatory agency.',

  tldr: "Eli Lilly's oral GLP-1 agonist — a daily pill, not an injection. Phase 2 showed 14.7% weight loss, potentially making GLP-1 therapy as simple as taking a tablet.",

  eli5: 'Imagine semaglutide (Ozempic) but as a daily pill instead of a weekly injection. That\'s what Eli Lilly is building. Phase 2 showed about 15% weight loss from a simple tablet. If approved, it could make GLP-1 therapy as easy as taking a vitamin.',

  overview:
    'Orforglipron (LY3502970) is a non-peptide, orally bioavailable GLP-1 receptor agonist developed by Eli Lilly. It represents a potential paradigm shift in metabolic medicine: delivering the benefits of GLP-1 receptor activation — appetite suppression, glycemic control, and weight loss — through a daily pill rather than a weekly injection.\n\nCritically, orforglipron is NOT a peptide. It is a small molecule that mimics the action of GLP-1 at its receptor. This distinction matters because peptide-based GLP-1 agonists like semaglutide are destroyed by stomach acid and must be injected (or require complex formulation for oral delivery, as with oral semaglutide/Rybelsus). Orforglipron sidesteps this entirely through its non-peptide structure.\n\nEli Lilly is running the ATTAIN clinical trial program, which includes Phase 3 studies in both obesity and type 2 diabetes. Phase 2 data showed weight loss of up to 14.7% over 36 weeks, placing it in a competitive range with injectable GLP-1 therapies. If approved, orforglipron could dramatically expand access to GLP-1 therapy by removing the injection barrier.',

  mechanismOfAction:
    'Orforglipron is a full agonist at the glucagon-like peptide-1 (GLP-1) receptor, the same target as semaglutide and liraglutide. However, it achieves this through a non-peptide small molecule structure rather than a modified peptide chain.\n\nGLP-1 receptor activation produces several downstream effects: stimulation of glucose-dependent insulin secretion from pancreatic beta cells, suppression of inappropriate glucagon release, delayed gastric emptying, and central appetite suppression through hypothalamic signaling.\n\nThe appetite suppression mechanism involves GLP-1 receptor activation in the brainstem (area postrema and nucleus tractus solitarius) and hypothalamus, reducing hunger signaling and increasing satiety. This is the primary driver of weight loss.\n\nOrforglipron has a half-life of approximately 25–65 hours, supporting once-daily oral dosing. Its small molecule structure provides inherent resistance to proteolytic degradation in the GI tract — the fundamental limitation of peptide-based oral GLP-1 agents. This means it does not require the fasting conditions or absorption enhancers needed for oral semaglutide (Rybelsus).',

  researchSummary:
    'Phase 2 clinical trial data for orforglipron were published in the New England Journal of Medicine in 2023. In a 36-week, dose-ranging study of adults with obesity (n=272), orforglipron at the highest dose (36 mg daily) produced a mean weight loss of 14.7% from baseline. Lower doses (12 mg, 24 mg) produced 9.4% and 12.6% weight loss respectively.\n\nIn a parallel Phase 2 study in type 2 diabetes (n=383), orforglipron reduced HbA1c by up to 2.1 percentage points at 26 weeks, with concurrent weight loss of up to 7.9%. These glucose-lowering effects are comparable to injectable GLP-1 agonists.\n\nThe ATTAIN Phase 3 program launched in 2023 and includes trials in obesity (ATTAIN-1), type 2 diabetes (ATTAIN-2 through ATTAIN-4), and cardiovascular outcomes. Results are expected between 2025 and 2027.\n\nThe GI side effect profile in Phase 2 was consistent with the GLP-1 class: nausea, vomiting, and diarrhea were the most common adverse events, occurring primarily during dose escalation. Discontinuation rates due to GI side effects were 10–17% depending on dose.\n\nCompetitive landscape: Orforglipron competes with Pfizer\'s danuglipron (another oral GLP-1) and Roche\'s oral candidates. It also competes indirectly with Eli Lilly\'s own tirzepatide (injectable dual GIP/GLP-1 agonist).',

  citations: [
    {
      title: 'Orforglipron (LY3502970), a novel oral non-peptide GLP-1 receptor agonist, for the treatment of type 2 diabetes',
      authors: 'Frias JP, et al.',
      journal: 'New England Journal of Medicine',
      year: 2023,
      doi: '10.1056/NEJMoa2302392',
      summary: 'Phase 2 trial in type 2 diabetes showing orforglipron reduced HbA1c by up to 2.1% and body weight by up to 7.9% over 26 weeks, with a GI side effect profile consistent with the GLP-1 class.',
    },
    {
      title: 'Orforglipron for the treatment of obesity',
      authors: 'Wharton S, et al.',
      journal: 'New England Journal of Medicine',
      year: 2023,
      doi: '10.1056/NEJMoa2302305',
      summary: 'Phase 2 trial in obesity demonstrating up to 14.7% weight loss over 36 weeks with daily oral orforglipron, supporting advancement to Phase 3 trials.',
    },
    {
      title: 'Discovery of orforglipron (LY3502970): a novel oral non-peptide GLP-1 receptor agonist',
      authors: 'Kawai T, et al.',
      journal: 'Journal of Medicinal Chemistry',
      year: 2022,
      doi: '10.1021/acs.jmedchem.2c00584',
      summary: 'Describes the medicinal chemistry and structure-activity relationship studies that led to the discovery of orforglipron as an orally bioavailable, potent GLP-1 receptor agonist.',
    },
    {
      title: 'GLP-1 receptor agonists in the treatment of obesity: current evidence and future directions',
      authors: 'Drucker DJ.',
      journal: 'Nature Reviews Endocrinology',
      year: 2024,
      doi: '10.1038/s41574-024-00958-y',
      summary: 'Comprehensive review placing oral GLP-1 agonists like orforglipron in the context of the broader GLP-1 therapeutic landscape, including comparisons with injectable agents.',
    },
  ],

  protocols: [
    {
      name: 'Phase 2 dose escalation (obesity)',
      route: 'Oral',
      typicalDose: '12 mg, 24 mg, or 36 mg daily (after dose escalation)',
      frequency: 'Once daily',
      cycleDuration: '36 weeks studied in Phase 2',
      notes: 'Dose escalation is critical: patients start at 3 mg daily for 2 weeks, then escalate by 3 mg every 2 weeks until reaching the target dose. This gradual escalation significantly reduces GI side effects. Taken with or without food — no fasting requirement.',
    },
    {
      name: 'Phase 2 dose escalation (type 2 diabetes)',
      route: 'Oral',
      typicalDose: '3 mg, 12 mg, 24 mg, 36 mg, or 45 mg daily',
      frequency: 'Once daily',
      cycleDuration: '26 weeks studied in Phase 2',
      notes: 'Same dose escalation approach. The 45 mg dose was tested in the diabetes trial. Glycemic improvements were seen across all dose levels with dose-dependent weight loss.',
    },
  ],

  protocolDisclaimer:
    'Orforglipron is an investigational drug not approved for any indication. The protocols listed reflect Phase 2 clinical trial designs and are NOT recommendations for use. This compound is only available through clinical trial enrollment. Do not attempt to source or self-administer investigational drugs.',

  sideEffects: [
    { effect: 'Nausea', frequency: 'common', details: 'The most frequently reported side effect (30–50% of participants). Most common during dose escalation and tends to diminish over time.' },
    { effect: 'Vomiting', frequency: 'common', details: 'Reported in 15–25% of participants depending on dose. Gradual dose escalation helps mitigate severity.' },
    { effect: 'Diarrhea', frequency: 'common', details: 'Reported in 15–20% of participants. Typically mild to moderate and transient.' },
    { effect: 'Decreased appetite', frequency: 'common', details: 'A therapeutic effect for obesity treatment but classified as a side effect in clinical reporting.' },
    { effect: 'Constipation', frequency: 'uncommon', details: 'Less common than diarrhea. Related to delayed gastric emptying.' },
  ],

  contraindications: [
    'Personal or family history of medullary thyroid carcinoma (MTC) — GLP-1 class warning based on rodent thyroid C-cell tumor data',
    'History of multiple endocrine neoplasia syndrome type 2 (MEN 2)',
    'Known hypersensitivity to orforglipron or any excipients',
    'Pregnancy or breastfeeding (insufficient safety data)',
    'History of pancreatitis (GLP-1 class precaution)',
  ],

  interactions: [
    'Insulin and sulfonylureas: increased risk of hypoglycemia when combined. Dose adjustment of insulin or sulfonylurea may be necessary.',
    'Oral contraceptives: delayed gastric emptying may affect absorption. Use backup contraception during dose escalation.',
    'Oral medications with narrow therapeutic index: delayed gastric emptying may alter absorption kinetics. Monitor drug levels.',
  ],

  storage: {
    lyophilized: 'Not applicable — orforglipron is a small molecule tablet, not a lyophilized peptide',
    reconstituted: 'Not applicable — oral tablet formulation',
    reconstitutionSolvent: 'Not applicable',
    reconstitutionNotes: 'Orforglipron is formulated as an oral tablet. Store at room temperature (15–30°C) in original packaging. Protect from moisture. No reconstitution required.',
  },

  relatedPeptideSlugs: ['semaglutide', 'tirzepatide', 'retatrutide'],
  synergyNotes: 'Orforglipron is not used in combination with other GLP-1 agonists. It is positioned as a potential oral alternative to injectable GLP-1 therapies like semaglutide and tirzepatide. For patients who cannot tolerate injections, orforglipron may eventually provide equivalent metabolic benefits in pill form.',

  metaDescription: 'Orforglipron (LY3502970) is Eli Lilly\'s oral GLP-1 agonist in Phase 3 trials. A daily pill showing 14.7% weight loss in Phase 2. Mechanisms, trial data, and clinical pipeline.',

  faqItems: [
    {
      question: 'Is orforglipron a peptide?',
      answer: 'No. Orforglipron is a small molecule (non-peptide) that activates the GLP-1 receptor. This is its key advantage — because it is not a peptide, it survives stomach acid and can be taken as a pill. Peptide-based GLP-1 agonists like semaglutide are typically injected because peptides are degraded in the GI tract.',
    },
    {
      question: 'How does orforglipron compare to semaglutide?',
      answer: 'Phase 2 data suggest orforglipron produces roughly comparable weight loss (14.7% vs. ~15% for injectable semaglutide at the highest dose). The major difference is convenience: orforglipron is a daily pill while semaglutide (Ozempic/Wegovy) requires weekly injection. Oral semaglutide (Rybelsus) exists but requires fasting before and after dosing, unlike orforglipron.',
    },
    {
      question: 'When will orforglipron be available?',
      answer: 'Eli Lilly\'s Phase 3 ATTAIN trial program is ongoing with results expected between 2025 and 2027. If Phase 3 is successful and regulatory review proceeds normally, the earliest potential approval could be 2026–2028. Timeline depends on trial results and regulatory review speed.',
    },
    {
      question: 'Can I take orforglipron with food?',
      answer: 'Yes. Unlike oral semaglutide (Rybelsus), which requires 30 minutes of fasting, orforglipron can be taken with or without food. This is a significant practical advantage for daily compliance.',
    },
    {
      question: 'What are the main side effects of orforglipron?',
      answer: 'The side effect profile mirrors injectable GLP-1 agonists: nausea, vomiting, and diarrhea are most common, primarily during dose escalation. Gradual dose titration (starting at 3 mg and increasing every 2 weeks) significantly reduces the severity and frequency of GI symptoms. Most side effects diminish after 4–8 weeks.',
    },
  ],
};
