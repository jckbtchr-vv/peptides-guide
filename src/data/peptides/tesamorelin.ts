import { Peptide } from '../types';

export const tesamorelin: Peptide = {
  slug: 'tesamorelin',
  name: 'Tesamorelin',
  fullName: 'Tesamorelin (Stabilized GHRH Analog)',
  aliases: ['Egrifta', 'Egrifta SV', 'TH9507'],
  sequence: 'Trans-3-hexenoic acid-Tyr-Ala-Asp-Ala-Ile-Phe-Thr-Asn-Ser-Tyr-Arg-Lys-Val-Leu-Gly-Gln-Leu-Ser-Ala-Arg-Lys-Leu-Leu-Gln-Asp-Ile-Met-Ser-Arg-Gln-Gln-Gly-Glu-Ser-Asn-Gln-Glu-Arg-Gly-Ala-Arg-Ala-Arg-Leu-NH2',
  molecularWeight: '5135.9 g/mol',
  class: 'Growth hormone-releasing hormone (GHRH) analog',
  halfLife: '26–38 minutes',
  administrationRoute: 'Subcutaneous injection',

  categories: ['body-composition'],
  primaryCategory: 'body-composition',
  status: 'approved',
  regulatoryNote: 'FDA-approved as Egrifta/Egrifta SV for the reduction of excess abdominal fat in HIV-infected patients with lipodystrophy. Not approved for general weight management or anti-aging.',

  overview:
    'Tesamorelin is a synthetic analog of human growth hormone-releasing hormone (GHRH) consisting of the full 44-amino acid sequence of endogenous GHRH with a trans-3-hexenoic acid modification at the N-terminus. This modification provides enhanced stability and resistance to enzymatic degradation compared to native GHRH.\n\nTesamorelin was FDA-approved in 2010 (Egrifta) and reformulated in 2019 (Egrifta SV) specifically for the reduction of excess visceral adipose tissue (VAT) in HIV-infected patients with lipodystrophy — a condition characterized by abnormal fat accumulation in the trunk and abdomen as a side effect of antiretroviral therapy.\n\nUnlike direct growth hormone administration, tesamorelin stimulates the pituitary gland to produce and release GH in a more physiological pulsatile pattern, which may reduce certain risks associated with exogenous GH therapy. It has attracted significant interest in the anti-aging and body composition optimization communities due to its potent visceral fat-reducing effects.',

  mechanismOfAction:
    'Tesamorelin binds to and activates GHRH receptors on somatotroph cells in the anterior pituitary gland. This triggers the synthesis and pulsatile release of endogenous growth hormone through the cAMP/PKA signaling pathway.\n\nThe released GH acts on the liver to stimulate production of insulin-like growth factor-1 (IGF-1), which mediates many of GH\'s downstream metabolic effects. In adipose tissue, GH stimulates lipolysis through activation of hormone-sensitive lipase and suppresses lipogenesis by downregulating lipoprotein lipase activity.\n\nTesamorelin demonstrates preferential reduction of visceral adipose tissue (VAT) over subcutaneous fat. The mechanism for this selectivity is believed to relate to the higher density of GH receptors and greater lipolytic sensitivity of visceral adipocytes compared to subcutaneous fat depots.\n\nThe pituitary-mediated release pattern preserves negative feedback mechanisms — as GH and IGF-1 levels rise, somatostatin release increases to modulate further GH secretion. This feedback loop theoretically provides a safety advantage over exogenous GH administration, which bypasses pituitary regulation entirely.',

  researchSummary:
    'Clinical trials supporting FDA approval demonstrated significant reductions in visceral adipose tissue. The Phase III program included two pivotal randomized, double-blind, placebo-controlled trials in HIV-infected patients with lipodystrophy.\n\nIn the combined analysis, tesamorelin 2 mg daily reduced trunk fat by approximately 15–18% over 26 weeks compared to a 5% increase with placebo, as measured by CT scan. Visceral adipose tissue area decreased by an average of 28 cm² versus an increase with placebo.\n\nBeyond fat reduction, tesamorelin has shown favorable effects on lipid profiles, with reductions in triglycerides and improvements in total cholesterol-to-HDL ratios. Research also demonstrates potential benefits for hepatic steatosis (fatty liver) — a study by Stanley et al. showed significant reductions in liver fat fraction.\n\nEmerging research has explored cognitive effects. A 20-week randomized controlled trial by Baker et al. demonstrated improvements in executive function and verbal memory in HIV-infected adults, potentially mediated through IGF-1-dependent neuroprotective mechanisms.\n\nKey limitation: most clinical data comes from the HIV lipodystrophy population. Extrapolation to non-HIV populations for anti-aging or general body composition purposes is based on mechanistic reasoning rather than direct large-scale trials.',

  citations: [
    {
      title: 'Effects of tesamorelin on body composition and metabolic parameters in HIV-infected patients',
      authors: 'Falutz J, et al.',
      journal: 'Journal of Clinical Endocrinology & Metabolism',
      year: 2007,
      doi: '10.1210/jc.2007-0429',
      summary: 'Phase II trial demonstrating dose-dependent reductions in visceral adipose tissue with tesamorelin in HIV-infected patients with lipodystrophy.',
    },
    {
      title: 'Effect of tesamorelin on visceral fat and liver fat in HIV-infected patients with abdominal fat accumulation',
      authors: 'Falutz J, et al.',
      journal: 'Journal of Acquired Immune Deficiency Syndromes',
      year: 2010,
      doi: '10.1097/QAI.0b013e3181cbf951',
      summary: 'Pivotal Phase III trial showing 15.2% reduction in trunk fat with tesamorelin 2 mg vs. 5% increase with placebo over 26 weeks.',
    },
    {
      title: 'Tesamorelin reduces liver fat and liver fat-related inflammation in HIV-associated NAFLD',
      authors: 'Stanley TL, et al.',
      journal: 'Journal of Clinical Investigation',
      year: 2019,
      doi: '10.1172/JCI120985',
      summary: 'Demonstrated that tesamorelin significantly reduced hepatic fat fraction and markers of liver inflammation, suggesting potential therapeutic role in NAFLD.',
    },
    {
      title: 'Effects of tesamorelin on cognition in HIV-infected patients with reduced growth hormone',
      authors: 'Baker LD, et al.',
      journal: 'Neurology',
      year: 2023,
      doi: '10.1212/WNL.0000000000207180',
      summary: 'Randomized controlled trial showing improvements in executive function and verbal memory with 20 weeks of tesamorelin treatment in HIV-infected adults.',
    },
  ],

  protocols: [
    {
      name: 'HIV lipodystrophy (FDA-approved)',
      route: 'Subcutaneous injection',
      typicalDose: '2 mg daily (Egrifta SV)',
      frequency: 'Once daily',
      cycleDuration: 'Ongoing (reassess at 6 months — discontinue if no reduction in VAT)',
      notes: 'Inject into the abdomen. Rotate injection sites. Administer at the same time each day. Egrifta SV is the current formulation (single vial reconstitution).',
    },
    {
      name: 'Body composition optimization (off-label)',
      route: 'Subcutaneous injection',
      typicalDose: '1–2 mg daily',
      frequency: 'Once daily, typically before bedtime',
      cycleDuration: '8–12 weeks on, 4 weeks off',
      notes: 'Off-label use. Some practitioners use lower doses (1 mg) or alternate-day dosing to manage IGF-1 elevation. Administer on an empty stomach for optimal GH release. Often combined with ipamorelin.',
    },
  ],

  protocolDisclaimer:
    'Tesamorelin is FDA-approved only for HIV-associated lipodystrophy. Off-label use for body composition or anti-aging is not supported by large-scale clinical trials. Consult a qualified healthcare professional before use.',

  sideEffects: [
    { effect: 'Injection site reactions', frequency: 'common', details: 'Erythema, pruritus, pain, or irritation at the injection site. Reported in approximately 8–13% of patients.' },
    { effect: 'Arthralgia (joint pain)', frequency: 'common', details: 'Consistent with GH-mediated effects. Affects approximately 10–13% of users.' },
    { effect: 'Peripheral edema', frequency: 'uncommon', details: 'Fluid retention and swelling, particularly in extremities. Related to GH-induced sodium and water retention.' },
    { effect: 'Paresthesia (tingling/numbness)', frequency: 'uncommon', details: 'Carpal tunnel-like symptoms due to fluid retention. Usually resolves with continued use or dose reduction.' },
    { effect: 'Hyperglycemia', frequency: 'uncommon', details: 'GH antagonizes insulin action. Monitor fasting glucose and HbA1c, particularly in patients with diabetes risk.' },
    { effect: 'Hypersensitivity reactions', frequency: 'rare', details: 'Rash, urticaria, and in rare cases anaphylaxis. Discontinue if significant hypersensitivity occurs.' },
  ],

  contraindications: [
    'Active malignancy (GH and IGF-1 may promote tumor growth)',
    'Disruption of the hypothalamic-pituitary axis due to hypophysectomy, hypopituitarism, or pituitary tumor/surgery',
    'Known hypersensitivity to tesamorelin or mannitol',
    'Pregnancy (Category X — may cause fetal harm)',
  ],

  interactions: [
    'May reduce efficacy of insulin and oral hypoglycemics due to GH-mediated insulin resistance',
    'Glucocorticoids may attenuate the GH-releasing effect of tesamorelin',
    'May alter metabolism of drugs processed by CYP450 enzymes through GH/IGF-1 mediated changes in hepatic enzyme activity',
    'Concurrent use with exogenous GH is not recommended (additive IGF-1 elevation)',
  ],

  storage: {
    lyophilized: 'Refrigerated (2–8°C). Protect from light. Stable until expiration date on label.',
    reconstituted: 'Use immediately after reconstitution. Do not store reconstituted solution.',
    reconstitutionSolvent: 'Sterile water for injection (provided with Egrifta SV kit)',
    reconstitutionNotes: 'Egrifta SV: add 0.5 mL sterile water to single vial. Roll gently between palms for 30 seconds — do not shake. Solution should be clear. Inject entire contents immediately after reconstitution.',
  },

  relatedPeptideSlugs: ['cjc-1295', 'ipamorelin'],
  synergyNotes: 'Tesamorelin is sometimes compared to the CJC-1295/Ipamorelin combination, as both approaches stimulate endogenous GH release. Tesamorelin has the advantage of FDA approval and clinical data, while CJC-1295/Ipamorelin is preferred in some protocols for its flexibility in dosing and combination potential.',

  metaDescription: 'Tesamorelin (Egrifta) is an FDA-approved GHRH analog for visceral fat reduction in HIV lipodystrophy. Mechanisms, clinical trials, protocols, and safety.',

  faqItems: [
    {
      question: 'What is tesamorelin and what is it approved for?',
      answer: 'Tesamorelin is a synthetic growth hormone-releasing hormone (GHRH) analog FDA-approved as Egrifta for reducing excess abdominal visceral fat in HIV-infected patients with lipodystrophy. It stimulates the pituitary gland to release growth hormone in a natural pulsatile pattern.',
    },
    {
      question: 'How does tesamorelin reduce visceral fat?',
      answer: 'Tesamorelin stimulates endogenous GH release, which activates lipolysis (fat breakdown) in visceral adipocytes. Visceral fat cells have a higher density of GH receptors than subcutaneous fat, resulting in preferential visceral fat reduction. Clinical trials showed approximately 15–18% reduction in trunk fat over 26 weeks.',
    },
    {
      question: 'Is tesamorelin the same as taking growth hormone?',
      answer: 'No. Tesamorelin stimulates your pituitary gland to produce and release GH naturally, preserving the body\'s pulsatile release pattern and negative feedback mechanisms. Exogenous GH bypasses the pituitary entirely, which can suppress natural GH production and lacks the same regulatory feedback.',
    },
    {
      question: 'What are the main side effects of tesamorelin?',
      answer: 'The most common side effects are injection site reactions (8–13%), joint pain (10–13%), and peripheral edema. Because it elevates GH and IGF-1, it can worsen insulin sensitivity and blood sugar control. It is contraindicated in active malignancy due to the growth-promoting effects of IGF-1.',
    },
    {
      question: 'Can tesamorelin be used for general weight loss or anti-aging?',
      answer: 'Tesamorelin is FDA-approved only for HIV-associated lipodystrophy. While it is used off-label for body composition and anti-aging, large-scale clinical trials in non-HIV populations have not been completed. Off-label use should be supervised by a qualified healthcare provider.',
    },
  ],
};
