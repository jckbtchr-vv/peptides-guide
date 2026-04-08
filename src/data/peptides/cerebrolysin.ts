import { Peptide } from '../types';

export const cerebrolysin: Peptide = {
  slug: 'cerebrolysin',
  name: 'Cerebrolysin',
  fullName: 'Cerebrolysin (porcine brain-derived peptide preparation)',
  aliases: ['FPF 1070', 'CERE', 'Renacenz'],
  molecularWeight: 'Multi-component mixture (75% free amino acids, 25% low-molecular-weight peptides <10 kDa)',
  class: 'Neurotrophic peptide preparation',
  halfLife: 'Biological effect duration approximately 24 hours (individual peptide components have varying half-lives)',
  administrationRoute: 'Intravenous (IV), intramuscular (IM)',

  categories: ['cognitive'],
  primaryCategory: 'cognitive',
  status: 'approved',
  regulatoryNote: 'Approved for clinical use in over 40 countries including Austria, Germany, Russia, China, South Korea, and other European and Asian nations. Not FDA-approved in the United States. Manufactured by EVER Neuro Pharma (formerly Ebewe Pharma), Austria.',

  overview:
    'Cerebrolysin is a porcine (pig) brain-derived peptide preparation consisting of low-molecular-weight neuropeptides and free amino acids obtained through standardized enzymatic proteolysis of purified pig brain proteins. It is not a single peptide but a complex, standardized mixture designed to mimic the action of endogenous neurotrophic factors.\n\nDeveloped in Austria and used clinically since the 1970s, Cerebrolysin is one of the most extensively studied neuropeptide preparations in the world, with clinical use spanning stroke recovery, traumatic brain injury, Alzheimer\'s disease, and other neurodegenerative conditions. It has been the subject of over 200 clinical studies.\n\nCerebrolysin\'s unique composition includes peptide fragments that functionally resemble BDNF (brain-derived neurotrophic factor), GDNF (glial cell line-derived neurotrophic factor), NGF (nerve growth factor), and CNTF (ciliary neurotrophic factor). This multi-target neurotrophic profile is central to its therapeutic rationale — rather than targeting a single pathway, it provides broad neurotrophic support.',

  mechanismOfAction:
    'Cerebrolysin acts as a multimodal neurotrophic agent through several parallel mechanisms. Its peptide components activate neurotrophic factor signaling pathways, particularly the PI3K/Akt and MAPK/ERK cascades, which promote neuronal survival, synaptic plasticity, and neurogenesis.\n\nIt enhances synaptic function by increasing the expression of synaptic proteins including synaptophysin and GAP-43 (growth-associated protein-43), which are critical for synaptic transmission and axonal growth. Studies demonstrate increased dendritic branching and spine density in treated neurons.\n\nCerebrolysin exerts neuroprotective effects by reducing excitotoxicity (glutamate-mediated neuronal death), inhibiting calpain activation (a protease involved in neuronal degeneration), and scavenging free radicals. It modulates GSK-3β (glycogen synthase kinase-3 beta) activity, which is directly relevant to tau phosphorylation and Alzheimer\'s pathology.\n\nIt promotes neurogenesis in the adult brain by increasing proliferation and differentiation of neural progenitor cells in the hippocampal dentate gyrus and subventricular zone. It also supports oligodendrogenesis, contributing to remyelination processes after demyelinating injuries.\n\nImportantly, Cerebrolysin\'s peptide components are small enough to cross the blood-brain barrier, unlike full-length neurotrophic proteins (BDNF, NGF) which cannot.',

  researchSummary:
    'Cerebrolysin has one of the largest clinical evidence bases of any neuropeptide therapy, though the quality and rigor of studies varies significantly.\n\nStroke research represents the most developed area. The CASTA (Cerebrolysin Acute STroke study in Asia) trial, a large multicenter RCT, evaluated Cerebrolysin in acute ischemic stroke patients. While the primary endpoint (improvement on the ARAT scale at 90 days) narrowly missed statistical significance, subgroup analyses and secondary endpoints showed benefits in patients with moderate-to-severe stroke. The CERE-STAT trials and subsequent studies have continued to explore stroke applications.\n\nAlzheimer\'s disease research includes multiple randomized controlled trials. A Cochrane review analyzed the evidence and found some positive signals for cognitive outcomes, though noted methodological limitations. The largest trial (Cerebrolysin vs. donepezil) showed comparable cognitive improvements. E-ADEPT and other trials demonstrated stabilization or improvement on ADAS-cog scores.\n\nTraumatic brain injury studies show improvements in cognitive recovery and functional outcomes, with the CAPTAIN trial (Cerebrolysin Asian Pacific Trial in Acute Brain Injury and Neurorecovery) providing supportive data.\n\nKey limitations include: (1) Many studies originated from regions with less rigorous regulatory standards. (2) The Cochrane review called for larger, better-designed confirmatory trials. (3) The FDA has not approved Cerebrolysin, reflecting its assessment that the evidence does not yet meet US regulatory standards. (4) As a biological product, batch-to-batch variability is a theoretical concern, though manufacturing is standardized.',

  citations: [
    {
      title: 'Cerebrolysin in acute ischemic stroke: a randomized, placebo-controlled, phase III, multicenter trial (CASTA)',
      authors: 'Heiss WD, Brainin M, Bornstein NM, et al.',
      journal: 'Stroke',
      year: 2012,
      doi: '10.1161/STROKEAHA.111.649806',
      summary: 'Large multicenter RCT of Cerebrolysin in acute ischemic stroke. Primary endpoint narrowly missed significance, but subgroup analyses showed benefit in moderate-to-severe strokes.',
    },
    {
      title: 'Cerebrolysin for vascular dementia',
      authors: 'Chen N, Yang M, Guo J, Zhou M, Zhu C, He L',
      journal: 'Cochrane Database of Systematic Reviews',
      year: 2013,
      doi: '10.1002/14651858.CD008900.pub2',
      summary: 'Cochrane systematic review evaluating Cerebrolysin for vascular dementia. Found some evidence of cognitive benefit but called for larger and more rigorous confirmatory trials.',
    },
    {
      title: 'A randomized, double-blind, placebo-controlled trial of Cerebrolysin in patients with acute ischemic stroke (CERE-STAT)',
      authors: 'Bornstein NM, Guekht A, Vester J, et al.',
      journal: 'Journal of Stroke and Cerebrovascular Diseases',
      year: 2018,
      doi: '10.1016/j.jstrokecerebrovasdis.2017.12.015',
      summary: 'Follow-up RCT to CASTA with refined patient selection. Demonstrated improvements in early neurological recovery and functional outcomes in ischemic stroke patients.',
    },
    {
      title: 'Neurotrophic and neuroprotective effects of Cerebrolysin',
      authors: 'Allegri RF, Guekht A',
      journal: 'Drugs of Today',
      year: 2012,
      doi: '10.1358/dot.2012.48.S.1739721',
      summary: 'Review of Cerebrolysin\'s mechanisms of action including neurotrophic signaling, synaptic plasticity enhancement, neuroprotection, and neurogenesis promotion.',
    },
    {
      title: 'Cerebrolysin in Alzheimer\'s disease: a randomized, double-blind, placebo-controlled trial with a six-month open-label extension',
      authors: 'Alvarez XA, Cacabelos R, Laredo M, et al.',
      journal: 'European Journal of Neurology',
      year: 2006,
      doi: '10.1111/j.1468-1331.2006.01166.x',
      summary: 'RCT showing Cerebrolysin improved cognitive function (ADAS-cog scores) in Alzheimer\'s patients over 24 weeks, with sustained benefits during the open-label extension.',
    },
  ],

  protocols: [
    {
      name: 'Cognitive enhancement / neuroprotection (clinical)',
      route: 'Intramuscular injection',
      typicalDose: '5–10 mL daily',
      frequency: 'Daily for 10–20 consecutive days',
      cycleDuration: '10–20 day treatment courses, repeated 2–4 times per year',
      notes: 'Standard clinical protocol used in approved countries. IM injections limited to 5 mL per site; higher volumes require multiple injection sites or IV administration.',
    },
    {
      name: 'Stroke / acute neurological injury (clinical)',
      route: 'Intravenous infusion',
      typicalDose: '30–50 mL daily diluted in 100–250 mL normal saline',
      frequency: 'Daily for 10–21 days, initiated within 24–72 hours of event',
      cycleDuration: '10–21 day acute course, with optional follow-up courses',
      notes: 'Based on CASTA and CERE-STAT trial protocols. IV administration required for doses above 10 mL. Infusion over 15–60 minutes. Always initiated under medical supervision in a clinical setting.',
    },
    {
      name: 'Alzheimer\'s disease (clinical)',
      route: 'Intravenous infusion',
      typicalDose: '30 mL daily diluted in normal saline',
      frequency: 'Daily for 20 consecutive weekdays (4 weeks)',
      cycleDuration: '4-week treatment courses, repeated every 3–6 months',
      notes: 'Based on clinical trial protocols. Some studies used 10 mL IM daily as an alternative. Treatment courses are typically repeated, as cognitive benefits may wane after discontinuation.',
    },
  ],

  protocolDisclaimer:
    'These protocols reflect clinical usage in countries where Cerebrolysin is approved and are based on published clinical trial dosing. Cerebrolysin is not FDA-approved in the United States. It must be administered under medical supervision, particularly IV formulations. Self-administration is strongly discouraged. Consult a qualified physician.',

  sideEffects: [
    { effect: 'Injection site pain or irritation', frequency: 'common', details: 'Local pain, redness, or swelling at the IM injection site. More common with larger volumes.' },
    { effect: 'Dizziness', frequency: 'uncommon', details: 'Reported during or shortly after IV infusion. Usually transient.' },
    { effect: 'Headache', frequency: 'uncommon', details: 'Mild headache reported in clinical trials, generally self-limiting.' },
    { effect: 'Nausea', frequency: 'uncommon', details: 'GI discomfort occasionally reported, more common with higher doses.' },
    { effect: 'Agitation or insomnia', frequency: 'rare', details: 'Rare reports of psychomotor agitation, particularly with evening dosing. Recommend morning administration.' },
    { effect: 'Allergic reaction', frequency: 'rare', details: 'As a porcine-derived biological product, allergic reactions are possible. Contraindicated in patients with known pork allergy.' },
  ],

  contraindications: [
    'Known allergy to porcine (pig) products',
    'Epilepsy or history of seizure disorder (may lower seizure threshold in rare cases)',
    'Severe renal impairment (limited excretion data)',
    'Pregnancy or breastfeeding (insufficient safety data)',
    'Status epilepticus',
  ],

  interactions: [
    'MAO inhibitors — theoretical risk of enhanced monoamine signaling; concurrent use not recommended',
    'Antidepressants (SSRIs, SNRIs) — Cerebrolysin affects serotonergic and noradrenergic systems; monitor for serotonin syndrome',
    'Antiepileptic drugs — Cerebrolysin may theoretically affect seizure threshold; dose adjustment may be needed',
    'Lithium — potential for additive neurotrophic effects; monitor lithium levels',
  ],

  storage: {
    lyophilized: 'Not applicable — Cerebrolysin is supplied as a ready-to-use aqueous solution in amber glass ampoules',
    reconstituted: 'Store ampoules at room temperature (15–25°C), protected from light. Do not freeze. Once opened, use immediately — do not store opened ampoules.',
    reconstitutionSolvent: 'For IV administration: dilute in 100–250 mL 0.9% sodium chloride (normal saline) or Ringer\'s solution',
    reconstitutionNotes: 'Supplied as a clear amber solution in glass ampoules (1 mL, 5 mL, 10 mL, 30 mL sizes). Inspect visually before use — do not use if cloudy or contains particulate matter. IV diluted solutions should be infused within 3 hours of preparation.',
  },

  relatedPeptideSlugs: ['semax', 'selank', 'dihexa'],
  synergyNotes: 'Cerebrolysin provides broad neurotrophic support through its multi-peptide composition, complementing the more targeted mechanisms of Semax (BDNF modulation, melanocortin pathway) and Selank (anxiolytic, immune modulation). Dihexa targets the HGF/c-Met pathway for synaptic formation. These compounds address overlapping but distinct aspects of cognitive enhancement and neuroprotection.',

  metaDescription: 'Cerebrolysin is a porcine brain-derived neurotrophic peptide preparation used clinically for stroke, TBI, and Alzheimer\'s in 40+ countries. Clinical trials, mechanisms, dosing protocols, and safety.',

  faqItems: [
    {
      question: 'What is Cerebrolysin?',
      answer: 'Cerebrolysin is a standardized peptide preparation derived from purified pig brain proteins through enzymatic processing. It contains a mixture of low-molecular-weight neuropeptides (25%) and free amino acids (75%) that mimic the action of natural neurotrophic factors like BDNF and NGF. It is not a single peptide but a complex, reproducible biological product.',
    },
    {
      question: 'Is Cerebrolysin FDA-approved?',
      answer: 'No, Cerebrolysin is not approved by the FDA for use in the United States. However, it is approved and used clinically in over 40 countries including Austria (where it is manufactured), Germany, Russia, China, and South Korea. It has been in clinical use since the 1970s and has been studied in over 200 clinical trials.',
    },
    {
      question: 'What conditions is Cerebrolysin used for?',
      answer: 'Cerebrolysin is primarily used for: (1) acute ischemic stroke recovery, (2) traumatic brain injury rehabilitation, (3) Alzheimer\'s disease and vascular dementia, and (4) general cognitive impairment. Some countries also approve it for pediatric neurodevelopmental disorders. The strongest clinical evidence exists for stroke and Alzheimer\'s applications.',
    },
    {
      question: 'Can Cerebrolysin be self-administered?',
      answer: 'Cerebrolysin requires injection (intramuscular or intravenous) and is not available in oral form. While IM injections of small volumes (up to 5 mL) are sometimes self-administered in countries where it is prescribed, IV administration should always be performed by a healthcare professional. Self-administration of IV infusions is strongly discouraged due to infection and dosing risks.',
    },
    {
      question: 'What were the results of the CASTA stroke trial?',
      answer: 'The CASTA trial (Cerebrolysin Acute STroke study in Asia) was a large, multicenter, randomized, placebo-controlled trial of Cerebrolysin in acute ischemic stroke. The primary endpoint (ARAT score at 90 days) narrowly missed statistical significance for the overall study population. However, pre-specified subgroup analyses showed significant benefit in patients with moderate-to-severe strokes (NIHSS 6-12), and secondary endpoints showed positive trends.',
    },
  ],
};
