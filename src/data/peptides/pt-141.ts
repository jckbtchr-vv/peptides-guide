import { Peptide } from '../types';

export const pt141: Peptide = {
  slug: 'pt-141',
  name: 'PT-141',
  fullName: 'PT-141 (Bremelanotide)',
  aliases: ['Bremelanotide', 'Vyleesi', 'Rekynda'],
  sequence: 'Ac-Nle-cyclo[Asp-His-D-Phe-Arg-Trp-Lys]-OH (cyclic heptapeptide)',
  molecularWeight: '1025.18 g/mol',
  class: 'Melanocortin receptor agonist (cyclic peptide)',
  halfLife: 'Approximately 2.7 hours',
  administrationRoute: 'Subcutaneous injection (FDA-approved route), intranasal (early development)',

  categories: ['sexual-health'],
  primaryCategory: 'sexual-health',
  status: 'approved',
  regulatoryNote: 'FDA-approved in June 2019 as Vyleesi (bremelanotide injection) for the treatment of hypoactive sexual desire disorder (HSDD) in premenopausal women. Manufactured by AMAG Pharmaceuticals (later Covis Pharma).',

  overview:
    'PT-141 (bremelanotide) is a synthetic cyclic heptapeptide and melanocortin receptor agonist that is FDA-approved for the treatment of hypoactive sexual desire disorder (HSDD) in premenopausal women. It is the first and only FDA-approved medication that works through the central nervous system melanocortin pathway to address sexual dysfunction.\n\nPT-141 was originally developed from Melanotan II, a peptide designed for tanning. During clinical trials for Melanotan II, researchers observed that subjects reported significant increases in sexual arousal as an unexpected side effect. This led to the isolation and development of bremelanotide as a targeted sexual dysfunction therapy.\n\nUnlike phosphodiesterase inhibitors (such as sildenafil/Viagra) that work on vascular mechanisms, PT-141 acts centrally in the brain through melanocortin-4 receptors (MC4R) in the hypothalamus. This mechanism addresses the neurological component of sexual desire rather than simply enhancing blood flow, making it effective for desire-based dysfunction rather than purely mechanical/arousal dysfunction.\n\nThe drug is marketed as Vyleesi and is self-administered via subcutaneous autoinjector at least 45 minutes before anticipated sexual activity.',

  mechanismOfAction:
    'PT-141 acts as a non-selective agonist at melanocortin receptors, with its primary sexual effects mediated through melanocortin-4 receptors (MC4R) in the central nervous system. MC4R is expressed in several brain regions involved in sexual behavior, including the hypothalamus, medial preoptic area, and ventromedial nucleus.\n\nActivation of MC4R by PT-141 initiates downstream signaling through the cAMP-PKA pathway, which modulates the release of neurotransmitters involved in sexual arousal and desire, including dopamine and oxytocin in key brain regions. This central mechanism is distinct from peripheral vasodilators — PT-141 enhances the motivational and desire component of sexual response rather than the genital blood flow component.\n\nThe peptide also has affinity for MC1R (involved in melanogenesis/tanning), MC3R (involved in energy homeostasis), and MC5R (involved in exocrine gland function). The MC1R activity explains the potential for skin darkening as a side effect, and the MC3R/MC4R activity explains the nausea commonly observed (these receptors are involved in appetite regulation and emetic pathways).\n\nPT-141 is structurally derived from alpha-MSH (alpha-melanocyte-stimulating hormone), the endogenous ligand for melanocortin receptors, but has been cyclized and modified to improve receptor selectivity, metabolic stability, and bioavailability compared to linear alpha-MSH peptides.',

  researchSummary:
    'PT-141 has the most advanced clinical development program of any peptide for sexual dysfunction, culminating in FDA approval.\n\nThe pivotal Phase III clinical trials were the RECONNECT studies — two randomized, double-blind, placebo-controlled trials enrolling over 1,200 premenopausal women with HSDD. Results demonstrated statistically significant improvements in sexual desire (measured by the Female Sexual Function Index desire domain) and reductions in distress related to low sexual desire (measured by the Female Sexual Distress Scale-Desire/Arousal/Orgasm).\n\nSpecifically, approximately 25% of women on bremelanotide achieved a clinically meaningful increase in desire compared to 17% on placebo. While the absolute improvement over placebo is modest, the effect was consistent across both trials and represents the first centrally-acting pharmacotherapy for female sexual dysfunction.\n\nEarlier clinical development explored PT-141 for male erectile dysfunction. Phase II trials in men demonstrated improved erectile responses (measured by RigiScan) with both intranasal and subcutaneous administration. However, the intranasal formulation was abandoned after the FDA raised concerns about blood pressure elevations observed at higher intranasal doses. The subcutaneous route was pursued for the female HSDD indication.\n\nSafety data from clinical trials showed nausea as the most common side effect (~40% of patients, usually mild and self-limiting), followed by flushing, headache, and injection site reactions. Transient increases in blood pressure were observed, leading to a contraindication in patients with uncontrolled hypertension or cardiovascular disease. A dosing limit of no more than 1 dose per 24 hours and no more than 8 doses per month was included in the prescribing information.\n\nPost-marketing surveillance continues to monitor long-term safety and cardiovascular effects.',

  citations: [
    {
      title: 'Bremelanotide for female sexual dysfunctions in premenopausal women: a randomized, placebo-controlled dose-finding trial',
      authors: 'Clayton AH, et al.',
      journal: 'Women\'s Health',
      year: 2016,
      doi: '10.2217/whe-2016-0018',
      summary: 'Phase IIb dose-finding study establishing the 1.75 mg subcutaneous dose of bremelanotide for HSDD in premenopausal women, demonstrating significant improvements in sexual desire and reduced distress.',
    },
    {
      title: 'Bremelanotide for hypoactive sexual desire disorder: a systematic review and meta-analysis of randomized controlled trials',
      authors: 'Portman DJ, et al.',
      journal: 'Obstetrics & Gynecology',
      year: 2023,
      doi: '10.1097/AOG.0000000000005106',
      summary: 'Systematic review and meta-analysis of the RECONNECT Phase III trials confirming bremelanotide efficacy for HSDD with significant improvements in desire scores and distress measures compared to placebo.',
    },
    {
      title: 'The melanocortin receptor system and sexual function',
      authors: 'Pfaus JG, et al.',
      journal: 'Pharmacology Biochemistry and Behavior',
      year: 2004,
      doi: '10.1016/j.pbb.2004.05.009',
      summary: 'Foundational review of the melanocortin system\'s role in sexual behavior, establishing the MC4R-mediated mechanism by which PT-141 enhances sexual arousal and desire in both male and female animal models.',
    },
    {
      title: 'Melanocortin receptor agonists, penile erection, and sexual motivation: human studies with Melanotan II',
      authors: 'Wessells H, et al.',
      journal: 'International Journal of Impotence Research',
      year: 2000,
      doi: '10.1038/sj.ijir.3900539',
      summary: 'Early clinical study of Melanotan II (PT-141 predecessor) in men demonstrating that melanocortin receptor activation produces penile erections and increased sexual desire, establishing the basis for PT-141 development.',
    },
  ],

  protocols: [
    {
      name: 'FDA-approved protocol (women, HSDD)',
      route: 'Subcutaneous injection (autoinjector)',
      typicalDose: '1.75 mg',
      frequency: 'As needed, at least 45 minutes before anticipated sexual activity',
      cycleDuration: 'As needed (not a daily medication)',
      notes: 'FDA-approved dose and route. Maximum 1 dose per 24 hours. Maximum 8 doses per month. Inject in the abdomen or thigh using the Vyleesi autoinjector. Onset of effect approximately 45 minutes, with effects lasting several hours.',
    },
    {
      name: 'Off-label community protocol (men)',
      route: 'Subcutaneous injection',
      typicalDose: '1–2 mg',
      frequency: 'As needed, 1–2 hours before sexual activity',
      cycleDuration: 'As needed',
      notes: 'Not FDA-approved for men. Based on Phase II clinical trial data and community reports. Some users report effects lasting 12–24 hours or longer. Lower starting dose (0.5–1 mg) recommended to assess tolerance, particularly regarding nausea.',
    },
    {
      name: 'Research reference (Phase II male ED)',
      route: 'Subcutaneous injection',
      typicalDose: '1.25–1.75 mg',
      frequency: 'Single dose, 30–60 minutes before assessment',
      cycleDuration: 'Single-dose studies',
      notes: 'Based on Phase II clinical trials for male erectile dysfunction. RigiScan monitoring showed improved erectile response at these doses. The intranasal route (previously studied at 7–20 mg doses) was abandoned due to blood pressure concerns.',
    },
  ],

  protocolDisclaimer:
    'Vyleesi (bremelanotide) is FDA-approved only for HSDD in premenopausal women at 1.75 mg subcutaneous injection. All other uses are off-label. PT-141 has known cardiovascular effects and is contraindicated in uncontrolled hypertension. Consult a qualified healthcare professional before use.',

  sideEffects: [
    { effect: 'Nausea', frequency: 'common', details: 'The most common side effect, occurring in approximately 40% of patients in clinical trials. Usually mild to moderate and self-limiting (resolves within hours). Anti-nausea medication may be used prophylactically.' },
    { effect: 'Flushing (facial/body)', frequency: 'common', details: 'Warmth and redness of the face and upper body. Related to melanocortin receptor activation and vascular effects. Usually mild.' },
    { effect: 'Headache', frequency: 'common', details: 'Reported in approximately 11% of patients. Usually mild and transient.' },
    { effect: 'Injection site reaction', frequency: 'common', details: 'Redness, bruising, or discomfort at the injection site. Standard for subcutaneous peptide administration.' },
    { effect: 'Transient blood pressure increase', frequency: 'uncommon', details: 'Small, transient increases in systolic and diastolic blood pressure observed in clinical trials. Generally resolves within 12 hours. Contraindicated in uncontrolled hypertension.' },
    { effect: 'Skin hyperpigmentation', frequency: 'uncommon', details: 'Darkening of the skin, particularly facial and gingival (gum) areas, due to MC1R activation. More likely with frequent use. Generally reversible upon discontinuation.' },
  ],

  contraindications: [
    'Uncontrolled hypertension or cardiovascular disease (PT-141 causes transient blood pressure elevations)',
    'Concurrent use with naltrexone (opioid antagonist) — contraindicated per FDA labeling due to unknown interaction profile',
    'Pregnancy or breastfeeding (insufficient safety data; not indicated for postmenopausal women)',
    'Known hypersensitivity to bremelanotide or any component of the formulation',
    'Use no more than once every 24 hours and no more than 8 times per month (per FDA prescribing information)',
  ],

  interactions: [
    'Contraindicated with naltrexone (opioid antagonist) per FDA labeling',
    'May slow gastric motility and potentially affect absorption of oral medications taken concurrently',
    'Caution with antihypertensive medications (additive blood pressure effects are unpredictable)',
    'Theoretical interaction with other melanocortin pathway drugs and alpha-MSH analogs',
  ],

  storage: {
    lyophilized: 'Refrigerated (2–8°C), stable for up to 24 months. Protect from light.',
    reconstituted: 'Refrigerated (2–8°C), use within 30 days',
    reconstitutionSolvent: 'Bacteriostatic water (BAC water) for research-grade material; Vyleesi is supplied as a pre-filled autoinjector',
    reconstitutionNotes: 'For research-grade lyophilized material: add solvent slowly down the side of the vial. Do not shake — swirl gently. Standard reconstitution: 1 mL BAC water into a 10 mg vial yields 10,000 mcg/mL (10 mg/mL). The FDA-approved Vyleesi product is a pre-filled single-dose autoinjector and requires no reconstitution.',
  },

  relatedPeptideSlugs: ['kisspeptin-10'],
  synergyNotes: 'PT-141 is typically used as a standalone therapy for sexual dysfunction. It targets a different mechanism (central melanocortin pathway) than PDE5 inhibitors (peripheral vascular), so the two approaches are mechanistically complementary. However, combining them is not well-studied and should only be done under medical supervision due to potential cardiovascular effects.',

  metaDescription: 'PT-141 (Bremelanotide/Vyleesi) is an FDA-approved melanocortin receptor agonist for hypoactive sexual desire disorder. Mechanisms, clinical evidence, and protocols.',

  faqItems: [
    {
      question: 'What is PT-141 and how does it work?',
      answer: 'PT-141 (bremelanotide) is a synthetic peptide that activates melanocortin-4 receptors (MC4R) in the brain to enhance sexual desire. Unlike Viagra, which works on blood flow, PT-141 acts centrally in the hypothalamus to modulate the neurological component of sexual arousal and motivation. It is FDA-approved as Vyleesi for hypoactive sexual desire disorder (HSDD) in premenopausal women.',
    },
    {
      question: 'Is PT-141 FDA-approved?',
      answer: 'Yes. PT-141 (bremelanotide) was FDA-approved in June 2019 under the brand name Vyleesi for treatment of hypoactive sexual desire disorder (HSDD) in premenopausal women. It is administered as a 1.75 mg subcutaneous injection at least 45 minutes before anticipated sexual activity, with a maximum of 8 doses per month.',
    },
    {
      question: 'Does PT-141 work for men?',
      answer: 'Phase II clinical trials in men demonstrated improved erectile responses with PT-141. However, it is not FDA-approved for male sexual dysfunction. Men use it off-label based on clinical trial data and community reports. It works through a different mechanism (central melanocortin pathway) than PDE5 inhibitors like sildenafil, targeting desire rather than blood flow.',
    },
    {
      question: 'What are the main side effects of PT-141?',
      answer: 'The most common side effect is nausea, affecting approximately 40% of users in clinical trials (usually mild and self-limiting). Other common effects include facial flushing, headache, and injection site reactions. Transient blood pressure increases occur and the drug is contraindicated in uncontrolled hypertension. Skin darkening may occur with repeated use due to melanocortin-1 receptor activation.',
    },
    {
      question: 'How is PT-141 different from Viagra?',
      answer: 'PT-141 and Viagra work through entirely different mechanisms. Viagra (sildenafil) is a PDE5 inhibitor that enhances blood flow to genital tissue — it addresses the mechanical/arousal aspect of sexual function. PT-141 activates melanocortin receptors in the brain to enhance sexual desire and motivation at the neurological level. PT-141 addresses the desire component while Viagra addresses the physical response component.',
    },
  ],
};
