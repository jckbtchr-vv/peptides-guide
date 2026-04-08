import { Peptide } from '../types';

export const thymosinAlpha1: Peptide = {
  slug: 'thymosin-alpha-1',
  name: 'Thymosin Alpha-1',
  fullName: 'Thymosin Alpha-1 (Tα1)',
  aliases: ['Tα1', 'Ta1', 'Zadaxin', 'Thymalfasin'],
  sequence: 'Ac-Ser-Asp-Ala-Ala-Val-Asp-Thr-Ser-Ser-Glu-Ile-Thr-Thr-Lys-Asp-Leu-Lys-Glu-Lys-Lys-Glu-Val-Val-Glu-Glu-Ala-Glu-Asn (28 amino acids)',
  molecularWeight: '3108.26 g/mol',
  class: 'Thymic peptide / immunomodulator',
  halfLife: 'Approximately 2 hours',
  administrationRoute: 'Subcutaneous injection',

  categories: ['immune-gut'],
  primaryCategory: 'immune-gut',
  status: 'approved',
  regulatoryNote: 'Approved in over 35 countries (marketed as Zadaxin/Thymalfasin) for hepatitis B, hepatitis C, and as an immune adjuvant. Not FDA-approved in the United States, though it has received Orphan Drug designation.',

  overview:
    'Thymosin Alpha-1 (Tα1) is a 28-amino-acid peptide originally isolated from thymic tissue (Thymosin Fraction 5) by Allan Goldstein at the George Washington University in the 1970s. It is a naturally occurring peptide produced by the thymus gland, which plays a central role in immune system maturation and regulation.\n\nTα1 is one of the most clinically validated peptides in existence. It has been approved for medical use in over 35 countries — primarily in Asia, South America, and parts of Europe — under the brand name Zadaxin (manufactured by SciClone Pharmaceuticals). Its approved indications include chronic hepatitis B, chronic hepatitis C (as adjunct therapy), and as an immune system enhancer in immunocompromised patients.\n\nThe peptide works by enhancing the function of the adaptive immune system, particularly T-cell maturation and activation, dendritic cell function, and natural killer cell activity. It has been extensively studied as an adjuvant therapy in cancer treatment, viral hepatitis, and immunodeficiency conditions.',

  mechanismOfAction:
    'Thymosin Alpha-1 acts as a potent immunomodulator through multiple pathways centered on enhancing adaptive immunity.\n\nIts primary mechanism involves activation of Toll-like receptors (TLR2 and TLR9) on dendritic cells, which are critical antigen-presenting cells. By stimulating dendritic cell maturation and function, Tα1 enhances the downstream activation of both CD4+ helper T cells and CD8+ cytotoxic T cells. This positions Tα1 as a bridge between innate and adaptive immunity.\n\nTα1 promotes the differentiation of immature T cells in the thymus by upregulating the expression of T-cell markers including CD4, CD8, and the T-cell receptor complex. It also increases the production of interferon-alpha (IFN-α), interferon-gamma (IFN-γ), and interleukin-2 (IL-2) — cytokines critical for antiviral and antitumor immune responses.\n\nIn addition to T-cell effects, Tα1 enhances natural killer (NK) cell cytotoxicity and promotes antibody production by B cells. It modulates the balance between Th1 and Th2 immune responses, generally favoring a Th1 (cell-mediated) response, which is important for fighting viral infections and tumors.\n\nTα1 also has direct effects on oxidative stress pathways, upregulating superoxide dismutase (SOD) and other antioxidant enzymes, and suppresses excessive inflammation by modulating NF-kB activity in a context-dependent manner — enhancing immune responses when they are insufficient while dampening them when they are excessive.',

  researchSummary:
    'Thymosin Alpha-1 has one of the most extensive clinical evidence bases of any peptide, with over 80 clinical trials conducted across multiple countries.\n\nHepatitis B: Multiple randomized controlled trials have demonstrated that Tα1 improves viral clearance rates and HBeAg seroconversion in chronic hepatitis B when used alone or in combination with interferon or nucleoside analogs. A meta-analysis by You et al. (2006) showed significantly higher response rates with Tα1-based therapy compared to interferon alone.\n\nHepatitis C: Tα1 has been studied as adjuvant therapy with pegylated interferon and ribavirin. Studies show improved sustained virological response (SVR) rates, particularly in difficult-to-treat genotypes and non-responders to standard therapy.\n\nCancer immunotherapy: Tα1 has been studied as an immune adjuvant alongside chemotherapy in hepatocellular carcinoma, non-small cell lung cancer, melanoma, and other solid tumors. Clinical trials demonstrate improved immune function, reduced chemotherapy-induced immunosuppression, and in some studies, improved survival outcomes.\n\nCOVID-19: During the pandemic, retrospective studies from China and Italy suggested Tα1 may reduce mortality and improve T-cell counts in severe COVID-19 patients, though randomized controlled trials yielded mixed results.\n\nVaccine adjuvant: Tα1 has been shown to enhance vaccine responses in elderly and immunocompromised populations, including improved antibody titers and T-cell responses to influenza and hepatitis B vaccines.',

  citations: [
    {
      title: 'Thymalfasin: a biological response modifier for therapy of hepatitis C',
      authors: 'Kullavanuaya P, et al.',
      journal: 'Journal of Viral Hepatitis',
      year: 1998,
      doi: '10.1046/j.1365-2893.1998.0050s2063.x',
      summary: 'Clinical study demonstrating Tα1 as adjuvant therapy for hepatitis C, showing improved virological response rates when combined with standard interferon therapy.',
    },
    {
      title: 'Thymosin alpha 1 activates dendritic cells for anti-fungal Th1 resistance through toll-like receptor signaling',
      authors: 'Romani L, et al.',
      journal: 'Blood',
      year: 2004,
      doi: '10.1182/blood-2003-11-4036',
      summary: 'Landmark mechanistic study showing Tα1 activates dendritic cells via TLR2 and TLR9, promoting Th1 responses against Aspergillus fumigatus infections.',
    },
    {
      title: 'Thymosin alpha 1 - a peptide immune modulator with a broad range of clinical applications',
      authors: 'Tuthill C, et al.',
      journal: 'Clinical and Experimental Pharmacology and Physiology',
      year: 2020,
      doi: '10.1111/1440-1681.13364',
      summary: 'Comprehensive review of Tα1 clinical applications including hepatitis, cancer, immunodeficiency, and vaccine adjuvant use across over 80 clinical trials.',
    },
    {
      title: 'Thymosin alpha 1 therapy for patients with chronic hepatitis B: a meta-analysis',
      authors: 'You J, et al.',
      journal: 'World Journal of Gastroenterology',
      year: 2006,
      doi: '10.3748/wjg.v12.i46.7529',
      summary: 'Meta-analysis of randomized controlled trials confirming that Tα1 significantly improves HBeAg seroconversion and viral suppression rates in chronic hepatitis B.',
    },
    {
      title: 'Thymosin alpha 1 reduces the mortality of severe COVID-19 by restoration of lymphocytopenia and reversion of exhausted T cells',
      authors: 'Liu Y, et al.',
      journal: 'Clinical Infectious Diseases',
      year: 2020,
      doi: '10.1093/cid/ciaa1212',
      summary: 'Retrospective study from Wuhan showing Tα1 reduced mortality and improved T-cell counts in severe COVID-19 patients, particularly those with lymphocytopenia.',
    },
  ],

  protocols: [
    {
      name: 'Immune support (standard clinical dose)',
      route: 'Subcutaneous injection',
      typicalDose: '1.6 mg',
      frequency: '2 times per week',
      cycleDuration: '6–12 months (hepatitis protocols), or as directed',
      notes: 'The 1.6 mg twice-weekly dose is the standard clinical protocol used in approved Zadaxin therapy. This is the most studied and validated dosing regimen.',
    },
    {
      name: 'Acute immune challenge',
      route: 'Subcutaneous injection',
      typicalDose: '1.6 mg',
      frequency: 'Daily for 7–14 days, then twice weekly',
      cycleDuration: 'Daily phase: 1–2 weeks; maintenance: ongoing',
      notes: 'Used in clinical settings for acute viral infections or severe immunosuppression. The daily loading phase is followed by standard twice-weekly maintenance.',
    },
    {
      name: 'Vaccine adjuvant protocol',
      route: 'Subcutaneous injection',
      typicalDose: '1.6 mg',
      frequency: '2 times per week, starting 2 weeks before vaccination',
      cycleDuration: '4–6 weeks (2 weeks before through 2–4 weeks after vaccination)',
      notes: 'Used in research to enhance vaccine response in elderly or immunocompromised individuals. Timing relative to vaccination is important for optimal adjuvant effect.',
    },
  ],

  protocolDisclaimer:
    'These protocols are based on clinical trial data and approved Zadaxin prescribing information. While Thymosin Alpha-1 is approved in over 35 countries, it is not FDA-approved in the United States. Consult a qualified healthcare professional before use.',

  sideEffects: [
    { effect: 'Injection site reaction (redness, mild pain)', frequency: 'common', details: 'The most frequently reported side effect in clinical trials. Usually mild and self-limiting.' },
    { effect: 'Mild flu-like symptoms', frequency: 'uncommon', details: 'Low-grade fever, mild myalgia, and fatigue may occur, particularly during the initial doses, as the immune system is stimulated.' },
    { effect: 'Fatigue', frequency: 'uncommon', details: 'Transient tiredness reported in some clinical trial participants.' },
    { effect: 'Nausea', frequency: 'rare', details: 'Infrequently reported in clinical trials.' },
    { effect: 'Rash or allergic reaction', frequency: 'rare', details: 'Hypersensitivity reactions are rare but have been reported.' },
  ],

  contraindications: [
    'Known hypersensitivity to Thymosin Alpha-1 or any component of the formulation',
    'Organ transplant recipients on immunosuppressive therapy (risk of graft rejection due to immune enhancement)',
    'Autoimmune diseases in active flare (theoretical risk of immune overstimulation)',
    'Pregnancy or breastfeeding (insufficient safety data)',
  ],

  interactions: [
    'May enhance the effects of interferon-alpha and interferon-gamma therapies (used therapeutically in hepatitis protocols)',
    'May reduce the effectiveness of immunosuppressive medications (tacrolimus, cyclosporine, corticosteroids)',
    'Potential additive effect with other immune-stimulating agents (e.g., IL-2, checkpoint inhibitors)',
    'May enhance the immunogenicity of vaccines (used therapeutically as adjuvant)',
  ],

  storage: {
    lyophilized: 'Refrigerated (2–8°C), stable for up to 24 months. Protect from light.',
    reconstituted: 'Use immediately or refrigerate (2–8°C) and use within 24 hours (per Zadaxin prescribing information)',
    reconstitutionSolvent: 'Sterile water for injection (per approved formulation) or bacteriostatic water',
    reconstitutionNotes: 'Zadaxin is supplied as a lyophilized powder with a pre-filled syringe of diluent. For research-grade material: add solvent slowly, do not shake. Standard reconstitution: 1 mL diluent yields 1.6 mg/mL.',
  },

  relatedPeptideSlugs: ['ll-37', 'bpc-157'],
  synergyNotes: 'Thymosin Alpha-1 is primarily used as a standalone immune modulator. In clinical settings, it is combined with interferon and antiviral medications for hepatitis treatment, and with chemotherapy as an immune adjuvant in cancer. In peptide community protocols, it is sometimes paired with other immune-supporting peptides like LL-37 for comprehensive immune modulation.',

  metaDescription: 'Thymosin Alpha-1 (Zadaxin) is an immune-modulating peptide approved in 35+ countries for hepatitis and immune support. Clinical evidence, mechanisms, and protocols.',

  faqItems: [
    {
      question: 'What is Thymosin Alpha-1 and is it FDA-approved?',
      answer: 'Thymosin Alpha-1 is a 28-amino-acid peptide naturally produced by the thymus gland. It enhances immune function by activating T cells, dendritic cells, and natural killer cells. It is approved in over 35 countries (as Zadaxin) for hepatitis B, hepatitis C, and immune support, but it is not FDA-approved in the United States.',
    },
    {
      question: 'What is Thymosin Alpha-1 used for?',
      answer: 'Clinically, Tα1 is approved for chronic hepatitis B, chronic hepatitis C (adjunct therapy), and as an immune enhancer for immunocompromised patients. It is also studied as a cancer immunotherapy adjuvant, vaccine response enhancer, and treatment for severe infections including sepsis.',
    },
    {
      question: 'How does Thymosin Alpha-1 boost the immune system?',
      answer: 'Tα1 activates Toll-like receptors (TLR2 and TLR9) on dendritic cells, enhancing their ability to present antigens to T cells. This promotes maturation of both CD4+ helper and CD8+ cytotoxic T cells, increases interferon and interleukin-2 production, and enhances natural killer cell activity. It bridges innate and adaptive immunity.',
    },
    {
      question: 'What is the difference between Thymosin Alpha-1 and Thymosin Beta-4 (TB-500)?',
      answer: 'Despite similar names, these are distinct peptides with different functions. Thymosin Alpha-1 is a 28-amino-acid immune modulator that enhances T-cell function and is used for infections and cancer. Thymosin Beta-4 (TB-500) is a 43-amino-acid actin-binding peptide used primarily for tissue healing and repair. They originate from the same thymic tissue extract (Thymosin Fraction 5) but have separate mechanisms.',
    },
    {
      question: 'Is Thymosin Alpha-1 safe?',
      answer: 'Tα1 has a strong safety profile supported by over 80 clinical trials and decades of approved clinical use. The most common side effect is mild injection site reaction. Serious adverse effects are rare. It is contraindicated in organ transplant recipients and those with active autoimmune disease due to its immune-stimulating properties.',
    },
  ],
};
