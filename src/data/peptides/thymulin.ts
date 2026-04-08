import { Peptide } from '../types';

export const thymulin: Peptide = {
  slug: 'thymulin',
  name: 'Thymulin',
  fullName: 'Thymulin (Facteur Thymique Serique / FTS-Zn)',
  aliases: ['FTS', 'Facteur Thymique Serique', 'FTS-Zn', 'Serum Thymic Factor', 'Thymulin-Zinc Complex'],
  sequence: 'Glu-Ala-Lys-Ser-Gln-Gly-Gly-Ser-Asn (pyroGlu form)',
  molecularWeight: '847.87 g/mol (zinc-bound form)',
  class: 'Zinc-dependent thymic nonapeptide',
  halfLife: 'Estimated minutes to hours (short; rapidly cleared from circulation)',
  administrationRoute: 'Subcutaneous injection',

  categories: ['immune-gut'],
  primaryCategory: 'immune-gut',
  status: 'research',
  regulatoryNote: 'Not FDA-approved for human use. Research compound only. Studied primarily in French and international immunology research.',

  tldr: 'A zinc-dependent thymic nonapeptide essential for T-cell maturation that declines sharply with age as the thymus involutes. Requires zinc binding for biological activity — one of the few peptides where a mineral cofactor is essential.',

  eli5: 'A thymus peptide that literally needs zinc to work — it\'s biologically dead without it. Your thymus makes it to train immune cells, but production crashes as your thymus shrinks with age. Restoring it might help rejuvenate an aging immune system, but you need adequate zinc first.',

  overview:
    'Thymulin is a nine-amino-acid peptide produced exclusively by thymic epithelial cells. It was first isolated and characterized in 1977 by Mireille Pleau and Jean-Francois Bach at the Hopital Necker in Paris, France, and was originally named Facteur Thymique Serique (FTS) — serum thymic factor.\n\nThymulin is unique among thymic peptides in its absolute requirement for zinc. The biologically active form is a 1:1 zinc-peptide complex (FTS-Zn). Without zinc binding, the peptide has no immunological activity. This zinc dependence makes thymulin a molecular link between zinc nutrition and immune competence — helping explain why zinc deficiency produces thymic atrophy and T-cell dysfunction.\n\nCirculating thymulin levels decline dramatically with age, paralleling thymic involution. Serum levels peak in childhood, begin declining after puberty, and are often undetectable by age 60. This decline is considered a biomarker of thymic aging and correlates with the progressive immunodeficiency seen in elderly populations.\n\nThymulin is distinct from other thymic peptides: thymalin is a bovine thymus extract containing multiple peptides, while thymosin alpha-1 is a synthetic 28-amino-acid peptide from thymosin fraction 5. Thymulin is the smallest defined thymic hormone and the only one requiring a metal cofactor.',

  mechanismOfAction:
    'Thymulin exerts its immunomodulatory effects through specific binding to high-affinity receptors on T-cell precursors and mature T cells. Its mechanism requires the zinc-bound conformation — the peptide undergoes a structural change upon zinc coordination that exposes the receptor-binding domain.\n\nT-cell differentiation: Thymulin promotes the differentiation of immature thymocytes into functional T-cell subsets. It induces expression of T-cell surface markers (CD2, CD3, CD4, CD8) on precursor cells, guiding their maturation from double-negative to single-positive T cells within the thymic microenvironment.\n\nImmune regulation: Thymulin modulates the balance between effector and regulatory T-cell populations. It enhances cytotoxic T-cell activity and natural killer (NK) cell function while also supporting regulatory T-cell (Treg) development — producing a net effect of improved immune surveillance without autoimmune promotion.\n\nCytokine modulation: Thymulin influences cytokine production by T cells, generally promoting a balanced Th1/Th2 response. It has been shown to suppress excessive IL-1 and IL-6 production in inflammatory states while supporting IL-2 signaling required for T-cell proliferation.\n\nZinc biology: The zinc dependence of thymulin creates a direct mechanistic link between zinc status and adaptive immunity. In zinc-deficient states, circulating thymulin exists in its inactive apo-form (without zinc). Zinc supplementation can reactivate this pool, restoring thymulin activity without increasing thymulin synthesis — a rapid immune restoration mechanism that explains part of why zinc supplementation improves immune function in deficient individuals.\n\nNeuroimmunomodulation: Thymulin also acts on the neuroendocrine system. It stimulates ACTH and beta-endorphin release from pituitary cells and modulates hypothalamic-pituitary-adrenal (HPA) axis activity, positioning it at the interface of the immune and neuroendocrine systems.',

  researchSummary:
    'Thymulin research has a strong foundation in French immunology, with the bulk of characterization work performed by the Bach laboratory and collaborators.\n\nAging studies demonstrate that serum thymulin activity declines progressively from puberty onward. In a landmark study, Bach and colleagues showed that thymulin levels in centenarians were essentially undetectable. Importantly, zinc supplementation in elderly subjects partially restored circulating thymulin activity — not by increasing synthesis, but by reactivating the zinc-free (inactive) form already present in serum. This finding has significant implications for understanding zinc supplementation as an immune intervention in aging.\n\nAnimal studies in thymectomized mice show that thymulin administration partially restores T-cell function, including delayed-type hypersensitivity responses and allograft rejection capacity. In aging mouse models, thymulin treatment improves T-cell proliferative responses and NK cell activity.\n\nAutoimmune disease research has explored thymulin in models of lupus and diabetes. NZB/NZW mice (a lupus model) show premature thymulin decline, and thymulin administration modulates disease progression. In non-obese diabetic (NOD) mice, thymulin delays the onset of autoimmune diabetes through regulatory T-cell support.\n\nAnti-inflammatory research demonstrates that thymulin and synthetic analogs reduce inflammatory pain and edema in animal models, suggesting applications beyond classical immunology. Intranasal thymulin delivery has been explored in models of neuroinflammation and lung inflammation with promising results.\n\nCritical limitations: Most thymulin research is preclinical. No large-scale human clinical trials have been conducted. The short half-life and rapid clearance of thymulin present pharmacokinetic challenges for therapeutic development. Synthetic analogs with improved stability are under investigation.',

  citations: [
    {
      title: 'Thymulin (FTS-Zn), a metallopeptide hormone of the thymus',
      authors: 'Pleau JM, Dardenne M.',
      journal: 'Comparative Biochemistry and Physiology',
      year: 1990,
      doi: '10.1016/0742-8413(90)90137-X',
      summary: 'Comprehensive review of thymulin biochemistry, zinc dependence, and biological activities. Establishes the structural requirements for zinc coordination and receptor binding.',
    },
    {
      title: 'Zinc and thymulin',
      authors: 'Prasad AS.',
      journal: 'Nutrition',
      year: 1995,
      doi: '10.1016/0899-9007(95)98849-R',
      summary: 'Demonstrated that zinc supplementation in elderly subjects restores serum thymulin activity by reactivating the zinc-free form, establishing the mechanistic link between zinc nutrition and thymic immune function.',
    },
    {
      title: 'Role of zinc and thymulin in immune reconstitution',
      authors: 'Dardenne M.',
      journal: 'Journal of Clinical Immunology',
      year: 2002,
      doi: '10.1023/A:1020557300697',
      summary: 'Review of thymulin\'s role in T-cell differentiation and the consequences of thymulin decline during aging, including reduced naive T-cell output and impaired immune surveillance.',
    },
    {
      title: 'Thymulin: an emerging anti-inflammatory molecule',
      authors: 'Lunin SM, Bhatt D.',
      journal: 'Inflammation Research',
      year: 2008,
      doi: '10.1007/s00011-008-7099-0',
      summary: 'Evidence for thymulin as an anti-inflammatory agent beyond its classical immunomodulatory role, with effects on inflammatory pain, edema, and neuroinflammation in animal models.',
    },
  ],

  protocols: [
    {
      name: 'Immune restoration (research-based)',
      route: 'Subcutaneous injection',
      typicalDose: '1–5 mcg/kg body weight',
      frequency: 'Once daily',
      cycleDuration: '10–30 days',
      notes: 'Dosing based on animal research extrapolation. Thymulin has a very short half-life, and repeated daily dosing is typical in preclinical protocols. Zinc co-supplementation (15–30 mg elemental zinc daily) is considered essential to ensure the peptide is in its active zinc-bound form.',
    },
    {
      name: 'Zinc co-supplementation protocol',
      route: 'Oral (zinc), Subcutaneous (thymulin)',
      typicalDose: '15–30 mg elemental zinc + thymulin injection',
      frequency: 'Zinc: daily; Thymulin: per protocol',
      cycleDuration: 'Ongoing zinc; thymulin per cycle',
      notes: 'Given thymulin\'s absolute zinc dependence, zinc status should be optimized before and during thymulin use. Serum zinc levels can be tested. Zinc picolinate or zinc bisglycinate have good bioavailability.',
    },
  ],

  protocolDisclaimer:
    'Thymulin is not FDA-approved for any indication. These protocols are extrapolated from preclinical research and are not medical recommendations. The peptide has not undergone human clinical trials for therapeutic use. Consult a qualified healthcare professional.',

  sideEffects: [
    { effect: 'Injection site irritation', frequency: 'uncommon', details: 'Mild redness or swelling at injection site. Standard for subcutaneous peptide administration.' },
    { effect: 'Mild immune activation symptoms', frequency: 'uncommon', details: 'Transient low-grade fever, fatigue, or mild lymph node tenderness during initial days — potentially reflecting immune system stimulation.' },
    { effect: 'Nausea', frequency: 'rare', details: 'Occasionally reported. Usually mild and transient.' },
  ],

  contraindications: [
    'Active autoimmune disease in flare (immune stimulation may exacerbate)',
    'Organ transplant recipients on immunosuppressive therapy',
    'Pregnancy or breastfeeding (insufficient safety data)',
    'Known zinc hypersensitivity (relevant for zinc co-supplementation)',
    'Copper deficiency (long-term high-dose zinc supplementation can deplete copper)',
  ],

  interactions: [
    'Zinc supplementation is not just complementary but essential — thymulin requires zinc for activity',
    'Potential interaction with immunosuppressive drugs (tacrolimus, cyclosporine) through opposing mechanisms',
    'High-dose zinc supplementation may deplete copper over time — monitor copper status',
    'Theoretical interaction with other thymic peptides (thymosin alpha-1, thymalin) through shared immune pathways',
  ],

  storage: {
    lyophilized: 'Refrigerated (2–8°C), stable for 12–24 months. Protect from light and moisture.',
    reconstituted: 'Refrigerated (2–8°C), use within 14 days',
    reconstitutionSolvent: 'Bacteriostatic water (BAC water) or sterile saline',
    reconstitutionNotes: 'Reconstitute gently — do not shake. Given the zinc dependence, some protocols add zinc chloride to the reconstitution solution to ensure the active zinc-bound form is maintained. Standard reconstitution: follow manufacturer vial instructions for volume.',
  },

  relatedPeptideSlugs: ['thymosin-alpha-1', 'thymalin'],
  synergyNotes: 'Thymulin is mechanistically related to both thymosin alpha-1 and thymalin — all three target thymic immune pathways. Thymulin is the smallest and most zinc-dependent. Thymosin alpha-1 is a defined synthetic peptide with more Western clinical data. Thymalin is a complex bovine extract. Zinc supplementation is considered essential when using thymulin, making it one of the few peptides where a mineral cofactor is a required co-intervention.',

  metaDescription: 'Thymulin is a zinc-dependent thymic nonapeptide essential for T-cell maturation. Zinc biology, immune reconstitution, aging decline, and research protocols.',

  faqItems: [
    {
      question: 'What is the difference between thymulin, thymalin, and thymosin alpha-1?',
      answer: 'Thymulin is a specific 9-amino-acid zinc-dependent peptide produced by thymic epithelial cells. Thymalin is a bovine thymus extract containing multiple peptide fractions (approved in Russia). Thymosin alpha-1 is a synthetic 28-amino-acid peptide with the most Western clinical data. All three target immune function through the thymus but differ in composition, specificity, and evidence base.',
    },
    {
      question: 'Why does thymulin require zinc?',
      answer: 'Thymulin undergoes a conformational change when it binds a zinc ion, and only this zinc-bound form can interact with T-cell receptors to exert biological activity. Without zinc, the peptide circulates in an inactive apo-form. This makes thymulin a direct molecular link between zinc nutrition and immune competence.',
    },
    {
      question: 'Does thymulin decline with age?',
      answer: 'Yes, dramatically. Serum thymulin activity peaks in childhood and declines progressively after puberty, paralleling thymic involution. By age 60, levels are often undetectable. This decline is considered a biomarker of thymic aging. Zinc supplementation can partially restore activity by reactivating the zinc-free form already in circulation.',
    },
    {
      question: 'Can zinc supplementation alone restore thymulin activity?',
      answer: 'Partially, yes. In zinc-deficient or elderly individuals, a pool of inactive zinc-free thymulin exists in the blood. Zinc supplementation reactivates this pool without requiring new thymulin synthesis. However, if the thymus has extensively involuted and little thymulin is being produced, zinc alone cannot compensate — exogenous thymulin may also be needed.',
    },
  ],
};
