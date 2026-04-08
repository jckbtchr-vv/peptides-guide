import { Peptide } from '../types';

export const thymalin: Peptide = {
  slug: 'thymalin',
  name: 'Thymalin',
  fullName: 'Thymalin (Thymus Extract Peptide Complex)',
  aliases: ['Thymalin', 'Timalin', 'Thymic Factor', 'Thymus Peptide Bioregulator'],
  class: 'Bovine thymus-derived peptide complex (bioregulator)',
  halfLife: 'Variable — complex of multiple short peptides',
  administrationRoute: 'Intramuscular injection',

  categories: ['immune-gut'],
  primaryCategory: 'immune-gut',
  status: 'approved',
  regulatoryNote: 'Approved in Russia as an immunomodulatory agent for immunodeficiency states. Part of the Khavinson bioregulatory peptide framework. Not approved by the FDA or EMA.',

  tldr: "A bovine thymus extract approved in Russia for immune restoration. Part of Khavinson's bioregulation framework — often paired with Epitalon in longevity protocols targeting both thymic and pineal function.",

  overview:
    'Thymalin is a peptide complex extracted from bovine (calf) thymus glands, developed by Professor Vladimir Khavinson at the Saint Petersburg Institute of Bioregulation and Gerontology in Russia. It is part of Khavinson\'s broader bioregulation framework — a theory proposing that short peptides derived from specific organs can restore function to those same organs by regulating gene expression.\n\nThymalin has been approved and used clinically in Russia since the 1980s for immunodeficiency states, including post-surgical immune suppression, chronic infections, and age-related immune decline (immunosenescence). It targets the thymus gland — the organ responsible for T-cell maturation and adaptive immune education.\n\nThe thymus is uniquely relevant to aging. It begins involuting (shrinking) after puberty and is largely replaced by fatty tissue by middle age. This thymic involution is a major driver of age-related immune decline. Thymalin aims to partially reverse this process by supplying the thymic peptides that a declining thymus can no longer produce in adequate quantities.\n\nThymalin is frequently paired with Epitalon (a synthetic tetrapeptide targeting the pineal gland) in Khavinson\'s longevity protocols. The rationale is dual bioregulation: restoring thymic function for immune competence and pineal function for melatonin production and telomere maintenance.',

  mechanismOfAction:
    'Thymalin is not a single peptide but a complex of short peptides extracted from bovine thymus tissue. Its mechanism reflects the collective action of multiple thymic factors.\n\nThe primary mechanism involves supporting T-cell maturation and differentiation. The thymus gland produces peptide hormones (thymulin, thymopoietin, thymosin fractions) that guide T-cell precursors through developmental stages. As the thymus involutes with age, production of these factors declines. Thymalin provides exogenous thymic peptides to partially compensate.\n\nThymalin promotes the differentiation of T-cell subsets including CD4+ helper T cells, CD8+ cytotoxic T cells, and regulatory T cells. This restores the balance of immune surveillance (pathogen and tumor detection) and immune tolerance (preventing autoimmunity).\n\nWithin the Khavinson bioregulation framework, Thymalin\'s peptides are theorized to interact directly with DNA, modulating gene expression in immune cells. Khavinson has published research suggesting that short peptides (2–4 amino acids) can penetrate cell nuclei and influence chromatin structure, activating genes that had been silenced by aging-related epigenetic changes.\n\nThymalin also modulates cytokine profiles. Studies report normalization of the Th1/Th2 balance and reduction of excessive inflammatory cytokine production (IL-6, TNF-alpha) in elderly subjects — effects consistent with reversing the chronic low-grade inflammation (inflammaging) characteristic of immunosenescence.',

  researchSummary:
    'Research on Thymalin comes almost exclusively from Russian scientific literature, much of it from Khavinson\'s institute. The most cited long-term study followed elderly patients in Saint Petersburg over a 6-year period. Subjects who received annual courses of Thymalin + Epitalon showed reduced mortality (approximately 2-fold reduction) compared to controls, with improvements in immune markers, endocrine function, and cardiovascular parameters.\n\nKhavinson has published over 200 papers and several monographs on bioregulatory peptides. His team reports that Thymalin administration in elderly patients restores T-cell counts, normalizes the CD4/CD8 ratio, and improves natural killer (NK) cell activity. These immune parameters are commonly depressed in older adults and correlate with increased infection susceptibility and cancer risk.\n\nAnimal studies show that Thymalin administration extends lifespan in rodent models. In one frequently cited study, mice receiving Thymalin courses showed a 25–30% increase in maximum lifespan with concurrent improvements in immune function and tumor resistance.\n\nCritical assessment: The bioregulation field is almost entirely Russian, and most studies have not been replicated by independent Western laboratories. Study methodologies often fall short of modern Western clinical trial standards (small sample sizes, lack of rigorous blinding, limited statistical analysis). The concept of organ-specific peptide bioregulation remains outside mainstream Western endocrinology. However, the broader premise — that thymic decline drives immunosenescence and that thymic factors can partially restore immune function — is supported by independent research on thymic peptides like thymulin and thymosin.',

  citations: [
    {
      title: 'Peptide bioregulation of aging: results of a 15-year study',
      authors: 'Khavinson VK.',
      journal: 'Bulletin of Experimental Biology and Medicine',
      year: 2003,
      doi: '10.1023/A:1024687832153',
      summary: 'Comprehensive overview of Khavinson bioregulatory peptide research including Thymalin, showing improvements in immune markers and reduced mortality in elderly populations over 6+ years of follow-up.',
    },
    {
      title: 'Thymalin as an immunomodulating agent in the treatment of immunodeficiency states',
      authors: 'Morozov VG, Khavinson VK.',
      journal: 'Mechanisms of Ageing and Development',
      year: 1997,
      doi: '10.1016/S0047-6374(97)00105-0',
      summary: 'Clinical data on Thymalin administration in immunodeficient patients showing restoration of T-cell counts, normalized CD4/CD8 ratios, and improved clinical outcomes.',
    },
    {
      title: 'Effect of epithalamin and thymalin on the lifespan of rats',
      authors: 'Anisimov VN, Khavinson VK.',
      journal: 'Mechanisms of Ageing and Development',
      year: 2001,
      doi: '10.1016/S0047-6374(01)00299-4',
      summary: 'Animal longevity study demonstrating that Thymalin administration increased maximum lifespan in mice by 25-30%, with concurrent improvements in immune surveillance and reduced spontaneous tumor incidence.',
    },
    {
      title: 'Immunosenescence: emerging challenges for an ageing population',
      authors: 'Pawelec G, et al.',
      journal: 'Immunology Today',
      year: 1998,
      doi: '10.1016/S0167-5699(98)01310-X',
      summary: 'Independent review of immunosenescence mechanisms, supporting the premise that thymic involution drives age-related immune decline — the foundational rationale for Thymalin use.',
    },
  ],

  protocols: [
    {
      name: 'Immune restoration (standard Russian protocol)',
      route: 'Intramuscular injection',
      typicalDose: '5–10 mg daily',
      frequency: 'Once daily',
      cycleDuration: '5–10 consecutive days, repeated 1–2 times per year',
      notes: 'The standard clinical protocol in Russia. A 10-day course is most common. Typically administered as an intramuscular injection in the deltoid or gluteal muscle. Annual or biannual courses are recommended for maintenance, especially in elderly patients.',
    },
    {
      name: 'Longevity protocol (Khavinson framework)',
      route: 'Intramuscular injection',
      typicalDose: '10 mg daily',
      frequency: 'Once daily for 10 days',
      cycleDuration: '10 days every 6 months, often paired with Epitalon',
      notes: 'The longevity-focused protocol pairs Thymalin (10 days IM) with Epitalon (10 days IM or SC), administered sequentially or concurrently. The rationale is dual bioregulation: immune restoration (thymus) plus pineal restoration (Epitalon). This is the protocol used in the Saint Petersburg long-term mortality study.',
    },
  ],

  protocolDisclaimer:
    'Thymalin is approved only in Russia and is not available through standard Western medical channels. These protocols reflect Russian clinical practice and the Khavinson bioregulation framework. The evidence base does not meet Western clinical trial standards. Consult a healthcare professional.',

  sideEffects: [
    { effect: 'Injection site pain', frequency: 'common', details: 'Intramuscular injections of Thymalin can cause local pain and mild inflammation. Rotating injection sites helps.' },
    { effect: 'Mild allergic reaction', frequency: 'uncommon', details: 'As a bovine-derived biological, allergic responses are possible. Symptoms may include rash, itching, or mild swelling. Rare anaphylaxis risk.' },
    { effect: 'Low-grade fever', frequency: 'uncommon', details: 'Immune activation may produce a transient low-grade fever in the first 1-2 days. Generally self-resolving.' },
    { effect: 'Fatigue', frequency: 'rare', details: 'Some users report transient fatigue during the first few days of a course, possibly related to immune system recalibration.' },
  ],

  contraindications: [
    'Known allergy to bovine-derived products',
    'Active autoimmune disease in flare (immune stimulation may exacerbate)',
    'Organ transplant recipients on immunosuppressive therapy',
    'Pregnancy or breastfeeding (insufficient safety data)',
    'Thymic tumors (thymoma) — exogenous thymic factors may stimulate growth',
  ],

  storage: {
    lyophilized: 'Refrigerated (2–8°C), stable for 24 months in sealed vials. Protect from light.',
    reconstituted: 'Refrigerated (2–8°C), use within 24–48 hours. Prepare fresh for each injection when possible.',
    reconstitutionSolvent: 'Sterile saline (0.9% NaCl) or sterile water for injection',
    reconstitutionNotes: 'Reconstitute lyophilized powder with 1–2 mL sterile saline. Gently swirl — do not shake. Inspect for particulate matter before injection. As a bovine-derived product, ensure sterile technique is followed strictly.',
  },

  relatedPeptideSlugs: ['thymosin-alpha-1', 'epitalon'],
  synergyNotes: 'Thymalin is most commonly paired with Epitalon in the Khavinson longevity framework — Thymalin for thymic/immune restoration and Epitalon for pineal/telomere support. It is also related to Thymosin Alpha-1, a synthetic single-peptide thymic factor. Thymosin Alpha-1 is a defined molecule while Thymalin is a complex extract — they share the same target organ but differ in composition and regulatory status.',

  metaDescription: 'Thymalin is a bovine thymus peptide extract approved in Russia for immune restoration. Khavinson bioregulation framework, T-cell maturation, longevity research, and protocols.',

  faqItems: [
    {
      question: 'What is the difference between Thymalin and Thymosin Alpha-1?',
      answer: 'Thymosin Alpha-1 (Zadaxin) is a single, defined synthetic peptide (28 amino acids) derived from Thymosin Fraction 5. Thymalin is a complex extract from bovine thymus containing multiple peptide fractions. Both target immune function through thymic pathways, but Thymosin Alpha-1 has a defined molecular identity and has been studied in Western clinical trials, while Thymalin is primarily used in Russian clinical practice.',
    },
    {
      question: 'Why is Thymalin paired with Epitalon?',
      answer: 'In Khavinson\'s bioregulation framework, different peptides target different organs. Thymalin restores thymic function (immune system), while Epitalon targets the pineal gland (melatonin production, telomere maintenance). The combination addresses two major aging pathways: immune decline and neuroendocrine dysfunction. The Saint Petersburg mortality study used this combination.',
    },
    {
      question: 'Is Thymalin safe given it is derived from animal tissue?',
      answer: 'Thymalin has been used clinically in Russia for over 40 years with an acceptable safety profile in that context. As a bovine-derived biological, there are theoretical concerns about allergic reactions and transmissible agents. Modern pharmaceutical-grade Thymalin undergoes purification and sterilization processes. However, it has not undergone FDA-level safety evaluation.',
    },
    {
      question: 'How long does it take for Thymalin to work?',
      answer: 'Immune marker improvements (T-cell counts, CD4/CD8 ratio, NK cell activity) are typically measurable within 2-4 weeks after a 10-day course. Subjective improvements in infection frequency and general vitality may take 1-3 months. The effects of a single course can persist for 4-6 months, which is why biannual dosing is recommended.',
    },
    {
      question: 'Can Thymalin help with autoimmune conditions?',
      answer: 'This is complex. While Thymalin promotes regulatory T-cell function (which suppresses autoimmunity), it also broadly stimulates immune activity. During an active autoimmune flare, immune stimulation could be counterproductive. Some practitioners use Thymalin cautiously in autoimmune patients during remission to improve immune regulation, but this is not well-studied and should only be considered under medical supervision.',
    },
  ],
};
