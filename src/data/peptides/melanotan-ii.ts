import { Peptide } from '../types';

export const melanotanII: Peptide = {
  slug: 'melanotan-ii',
  name: 'Melanotan II',
  fullName: 'Melanotan II (Afamelanotide Precursor)',
  aliases: ['MT-II', 'MT-2', 'Melanotan 2', 'Barbie drug'],
  sequence: 'Ac-Nle-cyclo[Asp-His-D-Phe-Arg-Trp-Lys]-NH₂',
  molecularWeight: '1024.18 g/mol',
  class: 'Synthetic alpha-MSH analog (cyclic peptide)',
  halfLife: 'Approximately 1–2 hours',
  administrationRoute: 'Subcutaneous injection, intranasal (off-label)',

  categories: ['skin-hair'],
  primaryCategory: 'skin-hair',
  status: 'research',
  regulatoryNote: 'Not FDA-approved for human use. Research compound only. Afamelanotide (Scenesse), a related linear alpha-MSH analog, is approved for erythropoietic protoporphyria but is structurally distinct from Melanotan II.',

  tldr: 'A melanocortin receptor agonist that produces skin tanning without UV exposure. Its sexual arousal side effect led to the development of PT-141. Carries significant safety concerns including potential effects on moles and melanoma risk.',

  overview:
    'Melanotan II is a synthetic cyclic peptide analog of alpha-melanocyte-stimulating hormone (alpha-MSH) developed at the University of Arizona in the 1990s. It was originally designed as a sunless tanning agent — a compound that could darken skin pigmentation without ultraviolet radiation exposure, potentially reducing skin cancer risk.\n\nMelanotan II acts as a non-selective agonist at melanocortin receptors (MC1R through MC5R). Its melanogenic effects are mediated primarily through MC1R on melanocytes, stimulating eumelanin production and transfer to keratinocytes. This produces a tan that develops over days to weeks and persists for extended periods.\n\nDuring early clinical trials, researchers observed two significant side effects: increased sexual arousal and appetite suppression. The sexual arousal effect — particularly robust in both men and women — led to the development of PT-141 (bremelanotide), a modified version of Melanotan II optimized for sexual dysfunction rather than tanning.\n\nDespite never receiving regulatory approval, Melanotan II has become one of the most widely used research peptides, particularly in tanning communities. This widespread unregulated use has raised significant safety concerns, particularly regarding its effects on melanocytic nevi (moles) and the theoretical risk of melanoma promotion.',

  mechanismOfAction:
    'Melanotan II binds to all five melanocortin receptor subtypes with varying affinities. Its diverse biological effects reflect this non-selective receptor profile.\n\nMC1R (melanogenesis): The primary target for tanning effects. MC1R activation on melanocytes triggers a cAMP-dependent signaling cascade that upregulates tyrosinase — the rate-limiting enzyme in melanin synthesis. This increases production of eumelanin (brown/black pigment) and its transfer to surrounding keratinocytes. The result is progressive skin darkening independent of UV exposure, though UV co-exposure accelerates the effect.\n\nMC3R/MC4R (sexual function and appetite): MC4R activation in the hypothalamus modulates dopamine and oxytocin release, producing sexual arousal. MC3R/MC4R activation in appetite-regulating brain regions suppresses food intake. These are the same pathways targeted by PT-141 for sexual dysfunction.\n\nMC4R/MC5R (other effects): MC4R activation contributes to the nausea commonly experienced with initial doses. MC5R activation influences exocrine gland function.\n\nThe cyclic structure of Melanotan II confers metabolic stability compared to linear alpha-MSH. The D-phenylalanine substitution enhances receptor binding potency and resistance to enzymatic degradation. However, the non-selective nature of its receptor binding is responsible for both its diverse effects and its side effect profile.',

  researchSummary:
    'Melanotan II has been studied in Phase I and Phase II clinical trials, though development for tanning was not pursued to completion due to the non-selective receptor profile and safety concerns.\n\nPhase I studies at the University of Arizona demonstrated dose-dependent skin darkening in fair-skinned volunteers, with melanin density increases measurable within 5 days of subcutaneous dosing. A 10-day course produced tanning comparable to weeks of moderate sun exposure. Nausea was the primary dose-limiting side effect.\n\nDermatological safety is the principal concern. Multiple case reports document changes in melanocytic nevi (moles) following Melanotan II use — including darkening, growth, and development of new nevi. Several case reports describe melanoma diagnosis temporally associated with Melanotan II use, though causality is difficult to establish. A 2017 systematic review identified 11 cases of melanoma diagnosed in Melanotan II users, noting that while correlation does not prove causation, the biological plausibility of melanocortin-driven melanoma promotion warrants concern.\n\nThe melanoma risk debate centers on whether stimulating melanocyte proliferation and melanogenesis could promote malignant transformation in predisposed cells. MC1R signaling has complex and sometimes contradictory roles in melanoma biology — it is protective against UV-induced DNA damage (via eumelanin production) but potentially proliferative when constitutively activated.\n\nAn Australian survey of Melanotan II users found that 43% reported changes in pre-existing moles. Cardiovascular effects (mild, transient blood pressure changes) and facial flushing are also commonly reported.\n\nAfamelanotide (Scenesse), a linear alpha-MSH analog related to but structurally distinct from Melanotan II, was approved by the EMA in 2014 for erythropoietic protoporphyria — a condition where patients are extremely sensitive to sunlight. Its safety profile is better characterized than Melanotan II, but it targets a specific medical condition rather than cosmetic tanning.',

  citations: [
    {
      title: 'Subcutaneous administration of a synthetic analog of alpha-melanocyte stimulating hormone in humans',
      authors: 'Dorr RT, et al.',
      journal: 'Journal of Investigative Dermatology',
      year: 1996,
      doi: '10.1111/1523-1747.ep12348461',
      summary: 'Phase I clinical trial demonstrating dose-dependent skin darkening in fair-skinned subjects with subcutaneous Melanotan II, establishing proof-of-concept for UV-independent tanning.',
    },
    {
      title: 'Melanoma and Melanotan: a concerning association',
      authors: 'Hjuler KF, Lorentzen HF.',
      journal: 'Clinical and Experimental Dermatology',
      year: 2014,
      doi: '10.1111/ced.12380',
      summary: 'Case report and literature review describing melanoma diagnoses temporally associated with Melanotan II use, discussing biological plausibility of melanocortin-mediated melanoma promotion.',
    },
    {
      title: 'The risks of using unlicensed tanning injections of melanotan: a systematic review',
      authors: 'Nelson ME, et al.',
      journal: 'Drug Safety',
      year: 2017,
      doi: '10.1007/s40264-017-0571-6',
      summary: 'Systematic review identifying 11 melanoma cases among Melanotan II users, along with documented nevi changes, cardiovascular effects, and other adverse events from unregulated use.',
    },
    {
      title: 'Melanocortin receptor agonists, penile erection, and sexual motivation: human studies with Melanotan II',
      authors: 'Wessells H, et al.',
      journal: 'International Journal of Impotence Research',
      year: 2000,
      doi: '10.1038/sj.ijir.3900539',
      summary: 'Clinical study demonstrating Melanotan II produces penile erections and increased sexual desire in men, establishing the basis for PT-141 development.',
    },
  ],

  protocols: [
    {
      name: 'Loading phase (community protocol)',
      route: 'Subcutaneous injection',
      typicalDose: '250–500 mcg daily',
      frequency: 'Once daily',
      cycleDuration: '1–2 weeks (loading), then maintenance',
      notes: 'Community protocols typically start at 100–250 mcg to assess tolerance (nausea is common initially), then increase to 250–500 mcg daily during a 1–2 week loading phase. Some users combine with low-level UV exposure to accelerate results. Injections typically administered in the evening to minimize nausea impact.',
    },
    {
      name: 'Maintenance (community protocol)',
      route: 'Subcutaneous injection',
      typicalDose: '250–500 mcg',
      frequency: '1–3 times per week',
      cycleDuration: 'Variable (ongoing as needed to maintain tan)',
      notes: 'After desired pigmentation is achieved, frequency is reduced to maintenance dosing. Individual maintenance requirements vary significantly based on skin type and desired color depth.',
    },
    {
      name: 'Intranasal (community protocol)',
      route: 'Intranasal spray',
      typicalDose: '0.5–1 mg per dose',
      frequency: 'Once daily during loading',
      cycleDuration: '2–4 weeks',
      notes: 'Less common than injection. Bioavailability via intranasal route is lower and less predictable. Requires reconstitution into a nasal spray formulation. Side effects may be milder due to slower absorption.',
    },
  ],

  protocolDisclaimer:
    'Melanotan II is not FDA-approved for any indication. It has significant safety concerns including potential effects on moles and theoretical melanoma risk. These protocols are compiled from community reports — not medical recommendations. Users should have a dermatological assessment including mole mapping before and during use. Consult a qualified healthcare professional.',

  sideEffects: [
    { effect: 'Nausea', frequency: 'common', details: 'Very common with initial doses. Usually diminishes with continued use. Starting at lower doses and injecting in the evening reduces impact. Anti-nausea medication may help.' },
    { effect: 'Facial flushing', frequency: 'common', details: 'Warmth and redness of the face occurring within minutes of injection. Typically resolves within 1–2 hours.' },
    { effect: 'Mole darkening and changes', frequency: 'common', details: 'Existing moles may darken, enlarge, or change in appearance. New moles may appear. This is a significant safety concern — any mole changes should be evaluated by a dermatologist.' },
    { effect: 'Appetite suppression', frequency: 'common', details: 'MC3R/MC4R-mediated appetite reduction. Some users consider this a beneficial side effect.' },
    { effect: 'Spontaneous erections (men)', frequency: 'common', details: 'MC4R-mediated sexual arousal. Especially common during loading phase. This effect led to PT-141 development.' },
    { effect: 'Fatigue and drowsiness', frequency: 'uncommon', details: 'Some users report sleepiness after injection, which is why evening dosing is common.' },
    { effect: 'Injection site reactions', frequency: 'uncommon', details: 'Redness, pain, or small lumps at injection site. Rotating sites helps.' },
    { effect: 'Hyperpigmentation (localized)', frequency: 'uncommon', details: 'Uneven darkening, particularly in areas of prior sun damage, scars, or skin folds.' },
  ],

  contraindications: [
    'History of melanoma or family history of melanoma',
    'Dysplastic nevus syndrome or large number of atypical moles',
    'Pregnancy or breastfeeding (insufficient safety data; melanocortin effects on fetal development unknown)',
    'Active skin cancer of any type',
    'Uncontrolled cardiovascular disease',
    'Addison\'s disease or other conditions involving melanocortin pathway dysfunction',
  ],

  interactions: [
    'Theoretical interaction with other melanocortin receptor agonists (PT-141, afamelanotide) — additive receptor activation',
    'May interfere with dermatological monitoring — mole changes from Melanotan II complicate skin cancer screening',
    'Potential interaction with blood pressure medications due to transient cardiovascular effects',
    'May affect appetite-regulating medications through MC3R/MC4R overlap',
  ],

  storage: {
    lyophilized: 'Refrigerated (2–8°C), stable for 12–24 months. Protect from light. Can be stored frozen for extended periods.',
    reconstituted: 'Refrigerated (2–8°C), use within 30 days',
    reconstitutionSolvent: 'Bacteriostatic water (BAC water)',
    reconstitutionNotes: 'Add solvent slowly down the side of the vial. Do not shake — swirl gently. Standard reconstitution: 1–2 mL BAC water into a 10 mg vial. Solution should be clear and colorless.',
  },

  relatedPeptideSlugs: ['pt-141', 'ghk-cu'],
  synergyNotes: 'Melanotan II is typically used as a standalone tanning agent. Its sexual arousal effects overlap with PT-141 (which was derived from it), so concurrent use would be redundant for that purpose. Some users combine it with low-dose UV exposure to accelerate melanogenesis, though this partially defeats the UV-avoidance rationale.',

  metaDescription: 'Melanotan II is a synthetic alpha-MSH analog researched for UV-independent skin tanning. Melanocortin mechanisms, safety concerns, mole risks, and relation to PT-141.',

  faqItems: [
    {
      question: 'What is Melanotan II and how does it work?',
      answer: 'Melanotan II is a synthetic peptide analog of alpha-MSH that activates melanocortin receptors, primarily MC1R on melanocytes. This stimulates eumelanin production, darkening the skin without UV exposure. It also non-selectively activates other melanocortin receptors, producing side effects including sexual arousal and appetite suppression.',
    },
    {
      question: 'Is Melanotan II safe?',
      answer: 'Melanotan II carries significant safety concerns that should not be minimized. The most serious is its effect on moles — darkening, growth, and new mole formation are commonly reported. Several melanoma cases have been reported in users, though causality is not proven. It is not FDA-approved and has not undergone rigorous long-term safety evaluation.',
    },
    {
      question: 'What is the difference between Melanotan II and PT-141?',
      answer: 'PT-141 (bremelanotide) was derived from Melanotan II. Both are cyclic melanocortin receptor agonists with nearly identical structures. Melanotan II was designed for tanning and has broad receptor activity. PT-141 was optimized from Melanotan II specifically for sexual dysfunction and is FDA-approved as Vyleesi for hypoactive sexual desire disorder in women.',
    },
    {
      question: 'Does Melanotan II cause melanoma?',
      answer: 'This is actively debated. Multiple case reports describe melanoma in Melanotan II users, and 43% of surveyed users report mole changes. The biological plausibility exists — stimulating melanocyte proliferation could theoretically promote malignant transformation. However, causality has not been established in controlled studies. Anyone with a personal or family history of melanoma should avoid Melanotan II.',
    },
    {
      question: 'What is the difference between Melanotan I and Melanotan II?',
      answer: 'Melanotan I (afamelanotide/Scenesse) is a linear alpha-MSH analog with more selective MC1R binding. Melanotan II is a cyclic peptide with non-selective melanocortin receptor binding, which is why it produces tanning, sexual arousal, and appetite suppression simultaneously. Afamelanotide is EMA-approved for erythropoietic protoporphyria; Melanotan II has no regulatory approval.',
    },
  ],
};
