import { Peptide } from '../types';

export const epitalon: Peptide = {
  slug: 'epitalon',
  name: 'Epitalon',
  fullName: 'Epitalon (Epithalon / Epithalamin Synthetic Analog)',
  aliases: ['Epithalon', 'Epithalone', 'AEDG peptide', 'Epithalamin'],
  sequence: 'Ala-Glu-Asp-Gly',
  molecularWeight: '390.35 g/mol',
  class: 'Synthetic tetrapeptide (pineal gland bioregulator)',
  halfLife: 'Estimated 10–20 minutes (short peptides are rapidly cleared)',
  administrationRoute: 'Subcutaneous injection, intravenous',

  categories: ['longevity'],
  primaryCategory: 'longevity',
  status: 'research',
  regulatoryNote: 'Not FDA-approved for human use. Epitalon is a research compound primarily studied in Russia. It has not been evaluated by the FDA or EMA for any clinical indication.',

  overview:
    'Epitalon (also spelled Epithalon) is a synthetic tetrapeptide (Ala-Glu-Asp-Gly) that represents the active sequence of epithalamin, a polypeptide extract of the bovine pineal gland. It was developed and extensively researched by Professor Vladimir Khavinson at the Saint Petersburg Institute of Bioregulation and Gerontology in Russia over a research program spanning more than 30 years.\n\nThe primary research interest in epitalon centers on its reported ability to activate the enzyme telomerase, which adds telomeric repeats (TTAGGG) to the ends of chromosomes. Telomere shortening is a fundamental mechanism of cellular aging — each cell division erodes telomere length until a critical threshold triggers cellular senescence or apoptosis. By reactivating telomerase in somatic cells, epitalon theoretically extends the replicative lifespan of cells.\n\nAdditionally, epitalon has been studied for its effects on melatonin production, neuroendocrine regulation, and antioxidant defense systems. Khavinson\'s research group has published studies reporting lifespan extension in animal models and improvements in biomarkers of aging in elderly human subjects treated with epithalamin and epitalon.',

  mechanismOfAction:
    'Epitalon\'s primary proposed mechanism is the activation of telomerase — a ribonucleoprotein enzyme that synthesizes telomeric DNA repeats at chromosome ends. Telomerase consists of a catalytic protein subunit (hTERT) and an RNA template component (hTR/TERC). Epitalon is reported to upregulate hTERT gene expression, reactivating telomerase in somatic cells where it is normally silenced.\n\nIn cell culture studies, Khavinson and colleagues demonstrated that epitalon induced telomerase activity in human fetal fibroblasts and pulmonary fibroblasts from elderly donors. The treated cells showed elongation of telomeres and extended replicative capacity, surpassing the Hayflick limit by 10 additional population doublings.\n\nBeyond telomerase activation, epitalon appears to modulate pineal gland function. It has been shown to stimulate melatonin production in elderly individuals whose melatonin synthesis has declined with age. This neuroendocrine effect may contribute to improved circadian rhythm regulation, sleep quality, and antioxidant defense, as melatonin is a potent endogenous antioxidant.\n\nEpitalon has also been reported to influence the expression of genes involved in antioxidant defense (superoxide dismutase, glutathione peroxidase), DNA repair, and apoptosis regulation. These effects suggest a broad bioregulatory role rather than action through a single classical receptor pathway.\n\nIt is important to note that while the proposed mechanisms are biologically plausible, the research has been conducted primarily by a single research group, and independent replication in Western laboratories has been limited.',

  researchSummary:
    'The bulk of epitalon research originates from Professor Khavinson\'s group at the Saint Petersburg Institute of Bioregulation and Gerontology. Their work spans cell culture studies, animal models, and human clinical observations over three decades.\n\nIn cell culture, Hayflick and Khavinson demonstrated that epitalon reactivated telomerase and extended replicative capacity in human somatic cells. Treated cells exceeded the Hayflick limit and showed elongated telomeres compared to untreated controls.\n\nAnimal studies in mice and rats reported extended mean and maximum lifespan. In a study of female CBA mice, chronic epitalon administration extended mean lifespan by approximately 12% and maximum lifespan by approximately 13%. Similar results were observed in Drosophila melanogaster, where epitalon extended mean lifespan by 11–16%.\n\nHuman studies include observational and clinical investigations of epithalamin (the natural pineal extract, of which epitalon is the synthetic analog). A 6-year observational study in elderly patients reported reduced cardiovascular mortality and improved functional status in subjects receiving epithalamin courses compared to controls. A 15-year follow-up study by Khavinson et al. reported reduced mortality in elderly participants treated with thymic and pineal peptide bioregulators.\n\nCritical limitations: Most studies come from a single research group. Many of the animal and human studies were conducted in Russia and published in Russian-language journals or journals with limited international peer review. Independent Western replication is largely absent. The human studies are observational or small-scale, not large randomized controlled trials by modern standards.',

  citations: [
    {
      title: 'Peptide promotes overcoming of the division limit in human somatic cells',
      authors: 'Khavinson VKh, et al.',
      journal: 'Bulletin of Experimental Biology and Medicine',
      year: 2004,
      doi: '10.1023/B:BEBM.0000046008.27301.a1',
      summary: 'Demonstrated that epitalon reactivated telomerase and enabled human fibroblasts to exceed the Hayflick limit by 10 additional population doublings, with concurrent telomere elongation.',
    },
    {
      title: 'Effect of epithalon on the lifespan increase in Drosophila melanogaster',
      authors: 'Anisimov VN, et al.',
      journal: 'Mechanisms of Ageing and Development',
      year: 2001,
      doi: '10.1016/S0047-6374(01)00299-7',
      summary: 'Demonstrated 11–16% extension of mean lifespan in Drosophila with chronic epitalon administration, providing cross-species evidence for anti-aging effects.',
    },
    {
      title: 'Epithalon peptide induces telomerase activity and telomere elongation in human somatic cells',
      authors: 'Khavinson VKh, et al.',
      journal: 'Bulletin of Experimental Biology and Medicine',
      year: 2003,
      doi: '10.1023/A:1026372916714',
      summary: 'Cell culture study showing epitalon-induced telomerase activation and telomere length increase in pulmonary fibroblasts from elderly donors, establishing the telomerase mechanism.',
    },
    {
      title: 'Effect of peptide bioregulators on mortality in elderly patients: 15-year follow-up',
      authors: 'Khavinson VKh, Morozov VG.',
      journal: 'Bulletin of Experimental Biology and Medicine',
      year: 2003,
      doi: '10.1023/A:1024641215716',
      summary: 'Fifteen-year follow-up study reporting 28% reduction in mortality among elderly subjects treated with thymic and pineal peptide bioregulators compared to controls.',
    },
  ],

  protocols: [
    {
      name: 'Standard cycle (research-based)',
      route: 'Subcutaneous injection',
      typicalDose: '5–10 mg daily',
      frequency: 'Once daily for 10–20 consecutive days',
      cycleDuration: '10–20 day course, repeated every 4–6 months',
      notes: 'The most commonly cited protocol from Khavinson\'s research. Administered as short intensive courses rather than continuous use. Some protocols specify 10 mg daily for 10 days, repeated every 6 months. Typically injected in the evening to align with pineal gland circadian activity.',
    },
    {
      name: 'Extended low-dose protocol',
      route: 'Subcutaneous injection',
      typicalDose: '5 mg daily',
      frequency: 'Once daily for 20 days',
      cycleDuration: '20-day course, repeated every 4–6 months',
      notes: 'Lower dose, longer course variant. Some practitioners prefer this approach for a more gradual effect. Inject in the evening or before bedtime. Rest period between courses allows assessment of response.',
    },
  ],

  protocolDisclaimer:
    'Epitalon is not FDA-approved for human use. These protocols are derived from Russian bioregulation research and community reports. The evidence base is limited and lacks independent Western replication. These are not medical recommendations. Consult a qualified healthcare professional.',

  sideEffects: [
    { effect: 'Injection site irritation', frequency: 'common', details: 'Mild redness or discomfort at the injection site. Generally transient and self-resolving.' },
    { effect: 'Drowsiness', frequency: 'uncommon', details: 'May be related to increased melatonin production, particularly with evening dosing. Can be considered a therapeutic effect.' },
    { effect: 'Headache', frequency: 'uncommon', details: 'Reported anecdotally. Usually mild and self-limiting.' },
    { effect: 'Vivid dreams', frequency: 'uncommon', details: 'Reported by some users, potentially related to enhanced melatonin production and altered sleep architecture.' },
  ],

  contraindications: [
    'Active cancer or history of cancer (telomerase activation could theoretically promote cancer cell immortalization)',
    'Pregnancy or breastfeeding (insufficient safety data)',
    'Autoimmune conditions (insufficient data on immune modulation effects)',
    'Known hypersensitivity to epitalon or any excipients',
  ],

  interactions: [
    'May potentiate the effects of exogenous melatonin supplements (additive melatonin elevation)',
    'Theoretical interaction with immunosuppressive medications (epitalon may have immunomodulatory properties)',
    'No well-characterized drug-drug interactions have been established in clinical studies',
  ],

  storage: {
    lyophilized: 'Refrigerated (2–8°C), stable for up to 24 months. Can be stored at room temperature for short periods. Protect from light.',
    reconstituted: 'Refrigerated (2–8°C), use within 21 days',
    reconstitutionSolvent: 'Bacteriostatic water (BAC water) or sterile water for injection',
    reconstitutionNotes: 'Add solvent slowly down the side of the vial. Do not shake — swirl gently. Standard reconstitution: 1 mL BAC water into a 10 mg vial yields 10 mg/mL (5 mg per 0.5 mL). Due to its small molecular size, epitalon dissolves readily.',
  },

  relatedPeptideSlugs: ['ghk-cu', 'humanin', 'ss-31'],
  synergyNotes: 'Epitalon is often discussed alongside other longevity-focused peptides. GHK-Cu promotes tissue remodeling and gene expression resetting, while epitalon targets telomere biology. Some longevity protocols combine pineal bioregulators with thymic peptides (thymalin/thymulin) based on Khavinson\'s bioregulation framework.',

  metaDescription: 'Epitalon (Epithalon) is a tetrapeptide researched for telomerase activation, anti-aging, and melatonin regulation. Khavinson research, protocols, and safety.',

  faqItems: [
    {
      question: 'What is epitalon and how does it work?',
      answer: 'Epitalon is a synthetic tetrapeptide (Ala-Glu-Asp-Gly) based on the active component of the pineal gland extract epithalamin. Its primary researched mechanism is activation of the enzyme telomerase, which adds protective telomeric repeats to chromosome ends. It is also reported to stimulate melatonin production and modulate antioxidant defense systems.',
    },
    {
      question: 'Can epitalon extend lifespan?',
      answer: 'Animal studies by Khavinson\'s group report 11–16% extension of mean lifespan in Drosophila and approximately 12% in mice. A 15-year human observational study reported reduced mortality with peptide bioregulators. However, these results come primarily from one research group and have not been independently replicated in Western laboratories. The evidence is suggestive but not conclusive.',
    },
    {
      question: 'Is telomerase activation safe or could it cause cancer?',
      answer: 'This is the most significant theoretical concern. Cancer cells frequently reactivate telomerase to achieve immortality. However, proponents argue that epitalon-induced telomerase activation is modest and regulated, extending normal cell lifespan rather than conferring unlimited proliferation. No increase in cancer incidence was observed in Khavinson\'s studies, but long-term large-scale safety data is lacking.',
    },
    {
      question: 'Why is epitalon taken in short courses rather than continuously?',
      answer: 'Khavinson\'s bioregulation model proposes that short peptide courses trigger lasting gene expression changes that persist beyond the treatment period. The 10–20 day course is thought to "reset" telomerase activity and pineal function, with effects lasting months. This pulsed approach also addresses safety concerns about continuous telomerase activation.',
    },
    {
      question: 'Is the research on epitalon reliable?',
      answer: 'Most epitalon research comes from Professor Khavinson\'s group in Saint Petersburg, Russia. While published in indexed journals, much of the work appears in Russian-language publications or journals with limited Western readership. Independent replication by Western research groups is largely absent. The mechanisms are biologically plausible, but the evidence base should be considered preliminary by modern standards.',
    },
  ],
};
