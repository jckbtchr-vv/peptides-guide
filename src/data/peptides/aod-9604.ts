import { Peptide } from '../types';

export const aod9604: Peptide = {
  slug: 'aod-9604',
  name: 'AOD-9604',
  fullName: 'AOD-9604 (Anti-Obesity Drug 9604)',
  aliases: ['hGH Fragment 176-191', 'Tyr-hGH177-191', 'AOD9604'],
  sequence: 'Tyr-Leu-Arg-Ile-Val-Gln-Cys-Arg-Ser-Val-Glu-Gly-Ser-Cys-Gly-Phe',
  molecularWeight: '1815.08 g/mol',
  class: 'Modified fragment of human growth hormone (hGH 176-191)',
  halfLife: '~30 minutes to 1 hour',
  administrationRoute: 'Subcutaneous injection, oral (under investigation)',

  categories: ['body-composition', 'metabolic'],
  primaryCategory: 'body-composition',
  status: 'research',
  regulatoryNote: 'Not FDA-approved for human use. AOD-9604 has GRAS (Generally Recognized As Safe) status from the FDA for use as a food substance, but this does not constitute approval as a therapeutic drug.',

  overview:
    'AOD-9604 is a synthetic peptide corresponding to a modified fragment of the C-terminal region of human growth hormone (amino acids 176-191), with an added tyrosine residue at the N-terminus. It was specifically designed to isolate the lipolytic (fat-burning) activity of growth hormone from its growth-promoting and diabetogenic effects.\n\nDeveloped initially by Metabolic Pharmaceuticals in Australia, AOD-9604 was the subject of significant clinical research in the early 2000s for obesity treatment. The key proposition is that it stimulates fat breakdown and inhibits new fat formation (lipogenesis) without the adverse metabolic effects of full-length GH — specifically, it does not elevate IGF-1, does not impair insulin sensitivity, and does not promote growth of tissues or tumors.\n\nDespite promising preclinical results, Phase IIb clinical trials for obesity did not demonstrate sufficient efficacy over placebo at the doses tested, and clinical development for obesity was discontinued. However, AOD-9604 has since been explored for cartilage repair and osteoarthritis applications and maintains significant interest in the peptide research community.',

  mechanismOfAction:
    'AOD-9604 mimics the lipolytic domain of human growth hormone without activating the GH receptor in the canonical manner that leads to IGF-1 production and cell proliferation. The C-terminal fragment of GH (residues 176-191) contains the region responsible for GH\'s fat-metabolizing activity, operating through a distinct mechanism from full-length GH.\n\nIn adipose tissue, AOD-9604 stimulates lipolysis (fat breakdown) by enhancing beta-3 adrenergic receptor-mediated activation of hormone-sensitive lipase (HSL). This promotes the hydrolysis of stored triglycerides into free fatty acids and glycerol, which are then available for oxidation.\n\nSimultaneously, AOD-9604 inhibits lipogenesis — the process of converting circulating fatty acids and glucose into stored fat. This dual mechanism (pro-lipolytic and anti-lipogenic) theoretically provides more effective fat reduction than lipolysis alone.\n\nCritically, AOD-9604 does not bind to the GH receptor in a manner that activates JAK2/STAT5 signaling or stimulates IGF-1 production. This means it lacks the growth-promoting, insulin-antagonizing, and potentially tumorigenic effects associated with full-length GH or GH-stimulating peptides.',

  researchSummary:
    'Preclinical studies in obese Zucker rats and ob/ob mice demonstrated significant reductions in body fat with AOD-9604 administration. Heffernan et al. showed that chronic treatment reduced body fat without affecting lean mass, food intake, or IGF-1 levels — confirming the selective lipolytic hypothesis.\n\nPhase I clinical trials established safety and tolerability in humans, with no significant adverse events and no changes in IGF-1, glucose, or insulin levels. A Phase II trial (2001–2003) by Metabolic Pharmaceuticals showed a trend toward weight loss in the oral formulation group, but the effect did not reach statistical significance at the primary endpoint.\n\nA larger Phase IIb trial in approximately 300 obese subjects also failed to demonstrate statistically significant weight loss compared to placebo at the doses tested. This led to discontinuation of the obesity program. Some researchers have suggested that oral bioavailability limitations and suboptimal dosing may have contributed to the clinical failure.\n\nMore recently, AOD-9604 has been investigated for osteoarthritis and cartilage repair. Preliminary research suggests it may stimulate proteoglycan synthesis in chondrocytes. An intra-articular formulation has been studied in animal models of joint degeneration with promising results on cartilage protection.\n\nIn 2020, the FDA granted GRAS (Generally Recognized As Safe) status for AOD-9604 as a food ingredient, based on toxicology data. This GRAS status applies only to its use as a food substance, not as a therapeutic agent.',

  citations: [
    {
      title: 'Fat metabolism: the lipolytic effect of the GH fragment 176-191 in obese mice',
      authors: 'Heffernan MA, et al.',
      journal: 'Endocrinology',
      year: 2001,
      doi: '10.1210/endo.142.12.8570',
      summary: 'Demonstrated that the hGH fragment 176-191 (AOD-9604) reduces body fat in obese mice without affecting IGF-1 levels, food intake, or lean mass, confirming selective lipolytic activity.',
    },
    {
      title: 'The effect of the GH fragment on body composition in obese Zucker rats',
      authors: 'Ng FM, et al.',
      journal: 'Biochemical and Biophysical Research Communications',
      year: 2000,
      doi: '10.1006/bbrc.2000.3058',
      summary: 'Showed dose-dependent fat reduction with hGH fragment 176-191 in obese Zucker rats, without diabetogenic effects or changes in serum IGF-1.',
    },
    {
      title: 'AOD9604: a novel approach to treating obesity',
      authors: 'Stier CT, et al.',
      journal: 'Current Opinion in Investigational Drugs',
      year: 2003,
      summary: 'Review of AOD-9604 development including mechanism of action, preclinical efficacy, and early clinical trial results for obesity treatment.',
    },
    {
      title: 'Cartilage repair with a modified fragment of human growth hormone',
      authors: 'Kwon DR, et al.',
      journal: 'Journal of Orthopaedic Research',
      year: 2020,
      doi: '10.1002/jor.24582',
      summary: 'Investigation of AOD-9604 for cartilage repair, showing stimulation of proteoglycan synthesis in chondrocytes and potential for osteoarthritis treatment.',
    },
  ],

  protocols: [
    {
      name: 'Fat loss (subcutaneous)',
      route: 'Subcutaneous injection',
      typicalDose: '250–500 mcg daily',
      frequency: 'Once daily, typically morning on an empty stomach',
      cycleDuration: '8–12 weeks',
      notes: 'Inject subcutaneously into abdominal fat. Administer on an empty stomach, ideally 30 minutes before food. Some protocols use split dosing (250 mcg morning + 250 mcg before bed). No cycling is strictly required as AOD-9604 does not affect the GH/IGF-1 axis, but periodic breaks are commonly practiced.',
    },
    {
      name: 'Fat loss (higher dose protocol)',
      route: 'Subcutaneous injection',
      typicalDose: '500 mcg daily',
      frequency: 'Once daily or split into 250 mcg twice daily',
      cycleDuration: '12 weeks',
      notes: 'Based on the higher end of clinical trial dosing. Often combined with a caloric deficit and exercise program. Some practitioners combine AOD-9604 with fasting protocols since it does not raise blood glucose or insulin.',
    },
  ],

  protocolDisclaimer:
    'AOD-9604 is not FDA-approved for human use in any therapeutic application. GRAS status applies only to food use, not injection. These protocols are based on clinical trial data and community reports. Consult a qualified healthcare professional before use.',

  sideEffects: [
    { effect: 'Injection site reactions', frequency: 'common', details: 'Mild redness, swelling, or discomfort at injection site. Generally transient.' },
    { effect: 'Headache', frequency: 'uncommon', details: 'Reported in clinical trials at similar rates to placebo. Usually mild and self-limiting.' },
    { effect: 'Mild nausea', frequency: 'uncommon', details: 'Reported in some clinical trial participants. More common with oral formulations.' },
    { effect: 'Chest tightness or palpitations', frequency: 'rare', details: 'Rare reports in clinical settings. Discontinue and seek medical attention if experienced.' },
  ],

  contraindications: [
    'Known hypersensitivity to AOD-9604 or any excipients',
    'Pregnancy or breastfeeding (insufficient safety data)',
    'Active cancer (despite theoretical safety advantage over GH, caution is warranted with any peptide therapy)',
    'Severe renal or hepatic impairment (limited safety data in these populations)',
  ],

  interactions: [
    'No significant drug interactions have been identified in clinical studies',
    'Does not appear to interact with insulin or oral hypoglycemics (does not affect glucose metabolism)',
    'Theoretical additive effect with other lipolytic agents (caffeine, yohimbine) — not studied',
  ],

  storage: {
    lyophilized: 'Refrigerated (2–8°C), stable for up to 24 months. Protect from light.',
    reconstituted: 'Refrigerated (2–8°C), use within 28 days',
    reconstitutionSolvent: 'Bacteriostatic water (BAC water)',
    reconstitutionNotes: 'Add BAC water slowly down the side of the vial. Do not shake — swirl gently. Standard reconstitution: 2 mL BAC water into a 5 mg vial yields 2,500 mcg/mL.',
  },

  relatedPeptideSlugs: ['tesamorelin', 'semaglutide'],
  synergyNotes: 'AOD-9604 is sometimes combined with other fat-loss peptides or GLP-1 agonists. Unlike GH-stimulating peptides (CJC-1295, ipamorelin), AOD-9604 does not elevate IGF-1, making it a complementary option for those who want lipolytic effects without GH axis stimulation.',

  metaDescription: 'AOD-9604 is a modified hGH fragment (176-191) researched for fat loss without IGF-1 elevation. Lipolytic mechanisms, clinical trial data, protocols, and safety.',

  faqItems: [
    {
      question: 'What is AOD-9604 and how does it differ from growth hormone?',
      answer: 'AOD-9604 is a modified fragment of the C-terminal portion of human growth hormone (amino acids 176-191). It was designed to retain GH\'s fat-burning (lipolytic) effects while eliminating the growth-promoting, insulin-resistant, and IGF-1-elevating effects of full-length GH. It stimulates fat breakdown and inhibits fat storage without the metabolic side effects of GH.',
    },
    {
      question: 'Does AOD-9604 raise IGF-1 levels?',
      answer: 'No. One of the primary advantages of AOD-9604 is that it does not elevate IGF-1 levels. Both animal and human studies have confirmed that AOD-9604 does not activate the GH receptor pathways responsible for IGF-1 production, making it distinct from GH, CJC-1295, and ipamorelin.',
    },
    {
      question: 'Why did AOD-9604 clinical trials for obesity fail?',
      answer: 'Phase IIb clinical trials did not demonstrate statistically significant weight loss over placebo at the oral doses tested. Researchers have suggested that suboptimal oral bioavailability and potentially insufficient dosing may have contributed. The subcutaneous route may be more effective, but large-scale trials using injection were not conducted.',
    },
    {
      question: 'Is AOD-9604 FDA-approved?',
      answer: 'AOD-9604 is not FDA-approved as a drug. It received GRAS (Generally Recognized As Safe) status from the FDA in 2020, but this applies only to its use as a food ingredient, not as an injectable therapeutic. It should not be confused with FDA drug approval.',
    },
    {
      question: 'Can AOD-9604 affect blood sugar or insulin?',
      answer: 'Clinical studies have shown that AOD-9604 does not significantly affect fasting glucose, insulin, or HbA1c levels. This is a key differentiator from full-length GH, which can cause insulin resistance and hyperglycemia. This property makes AOD-9604 theoretically suitable for individuals with metabolic concerns.',
    },
  ],
};
