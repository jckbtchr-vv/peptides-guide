import { Peptide } from '../types';

export const tb500: Peptide = {
  slug: 'tb-500',
  name: 'TB-500',
  fullName: 'Thymosin Beta-4 Fragment (TB-500)',
  aliases: ['Thymosin Beta-4', 'Tβ4', 'TB4'],
  sequence: 'Ac-SDKP (active fragment); full Tβ4: 43 amino acids',
  molecularWeight: '4963.50 g/mol (full Tβ4)',
  class: 'Actin-binding peptide',
  halfLife: 'Estimated 2–3 hours (peptide fragment)',
  administrationRoute: 'Subcutaneous injection, intramuscular injection',

  categories: ['healing-recovery'],
  primaryCategory: 'healing-recovery',
  status: 'research',
  regulatoryNote: 'Not FDA-approved for human use. Research compound only. Banned by WADA in competitive sports.',

  overview:
    'TB-500 is a synthetic version of Thymosin Beta-4 (Tβ4), a naturally occurring 43-amino-acid peptide found in virtually all human and animal cells. Thymosin Beta-4 is one of the most abundant intracellular peptides and plays a central role in actin regulation — the protein system that governs cell structure, migration, and tissue repair.\n\nTB-500 specifically refers to the synthetic fragment that replicates the active region of Tβ4. The key active sequence is the N-terminal fragment Ac-SDKP, which is responsible for many of the anti-inflammatory and tissue-repair properties attributed to the full peptide.\n\nResearch has demonstrated that TB-500 promotes healing across a range of tissue types including muscle, tendon, ligament, cornea, and cardiac tissue. Its ability to upregulate cell-building proteins such as actin and to promote new blood vessel growth (angiogenesis) makes it a highly studied compound in wound healing and tissue regeneration research.',

  mechanismOfAction:
    'TB-500 exerts its biological effects primarily through regulation of actin, a critical structural protein in all cells. By sequestering G-actin (globular actin monomers), TB-500 promotes actin polymerization into F-actin filaments, which are essential for cell migration, division, and differentiation.\n\nThe peptide upregulates cell surface receptors and promotes the migration of endothelial cells and keratinocytes to injury sites — a process critical for wound closure and tissue repair. It also promotes angiogenesis via upregulation of VEGF and other growth factors, establishing new blood supply to damaged tissues.\n\nTB-500 has potent anti-inflammatory properties, partly mediated through its metabolite Ac-SDKP, which suppresses NF-kB signaling and reduces pro-inflammatory cytokine release. It also reduces oxidative stress and has been shown to decrease fibrosis (scar tissue formation) in cardiac and hepatic injury models, promoting more functional tissue regeneration rather than scarring.\n\nAdditionally, TB-500 modulates matrix metalloproteinases (MMPs) which are responsible for extracellular matrix remodeling — a key step in the healing process.',

  researchSummary:
    'Thymosin Beta-4 and its fragments have been studied in over 70 preclinical studies and several human clinical trials. Dermal wound healing research has shown accelerated closure of full-thickness skin wounds in animal models, with improved angiogenesis and collagen deposition.\n\nCardiac research is among the most advanced. Studies in murine myocardial infarction models demonstrate that Tβ4 treatment reduces infarct size, decreases fibrosis, and promotes cardiomyocyte survival. The peptide activates resident cardiac progenitor cells, suggesting a mechanism for cardiac regeneration rather than simple repair.\n\nOphthalmic research led to the development of RGN-259, a topical Tβ4 formulation for dry eye and neurotrophic keratopathy, which advanced to Phase III clinical trials (RegeneRx Biopharmaceuticals). This represents the most advanced clinical development of any Tβ4-based therapy.\n\nNeurological studies show neuroprotective effects in traumatic brain injury and stroke models, with improved functional recovery and reduced inflammation. TB-500 promotes oligodendrocyte differentiation and remyelination in experimental autoimmune encephalomyelitis models.\n\nIn musculoskeletal research, TB-500 has been studied for tendon and ligament repair, showing accelerated healing and improved biomechanical properties in Achilles tendon injury models.',

  citations: [
    {
      title: 'Thymosin β4 activates integrin-linked kinase and promotes cardiac cell migration, survival and cardiac repair',
      authors: 'Bock-Marquette I, et al.',
      journal: 'Nature',
      year: 2004,
      doi: '10.1038/nature02517',
      summary: 'Landmark study demonstrating that Tβ4 promotes cardiac cell migration and survival after myocardial infarction via integrin-linked kinase (ILK) activation.',
    },
    {
      title: 'Thymosin β4 promotes dermal wound healing via its actin-binding domain',
      authors: 'Philp D, et al.',
      journal: 'Journal of Investigative Dermatology',
      year: 2004,
      doi: '10.1111/j.0022-202X.2004.22603.x',
      summary: 'Demonstrated that the actin-binding domain of Tβ4 is essential for its wound healing effects, including increased angiogenesis, collagen deposition, and keratinocyte migration.',
    },
    {
      title: 'Thymosin beta-4 and the eye: the peptide with many functions',
      authors: 'Sosne G, Ousler GW.',
      journal: 'Expert Opinion on Biological Therapy',
      year: 2015,
      doi: '10.1517/14712598.2015.1044887',
      summary: 'Review of the ophthalmic applications of Tβ4, including clinical trial results for dry eye and corneal wound healing with the RGN-259 formulation.',
    },
    {
      title: 'Ac-SDKP, a peptide released from thymosin β4, inhibits collagen deposition in cardiac fibroblasts',
      authors: 'Peng H, et al.',
      journal: 'Cardiovascular Research',
      year: 2014,
      doi: '10.1093/cvr/cvu039',
      summary: 'Demonstrated the anti-fibrotic mechanism of Ac-SDKP (Tβ4 metabolite) in cardiac tissue, showing reduced collagen I and III synthesis in fibroblasts.',
    },
    {
      title: 'Thymosin β4 promotes angiogenesis, wound healing, and hair follicle development',
      authors: 'Philp D, et al.',
      journal: 'Annals of the New York Academy of Sciences',
      year: 2007,
      doi: '10.1196/annals.1389.024',
      summary: 'Broad review of Tβ4 tissue-repair properties including angiogenesis, wound healing, and stimulation of hair follicle stem cells.',
    },
  ],

  protocols: [
    {
      name: 'Systemic healing / injury recovery',
      route: 'Subcutaneous injection',
      typicalDose: '2–2.5 mg',
      frequency: '2 times per week',
      cycleDuration: '4–6 weeks (loading), then 2 times monthly (maintenance)',
      notes: 'Common loading protocol: 2.5 mg twice weekly for 4–6 weeks, followed by 2.5 mg every 2 weeks for maintenance. Inject subcutaneously in the abdominal area or near the injury site.',
    },
    {
      name: 'Acute injury protocol',
      route: 'Subcutaneous injection',
      typicalDose: '5 mg',
      frequency: '2 times per week',
      cycleDuration: '2–3 weeks, then reduce to standard dosing',
      notes: 'Higher loading dose used in community protocols for acute injuries. Taper to 2.5 mg twice weekly after the initial period. Often combined with BPC-157.',
    },
    {
      name: 'Research dose (preclinical reference)',
      route: 'Intraperitoneal / subcutaneous (animal models)',
      typicalDose: '6 mg/kg (rodent equivalent; ~0.5 mg/kg HED)',
      frequency: 'Daily or every other day',
      cycleDuration: 'Varies by study (7–28 days)',
      notes: 'Preclinical doses are significantly higher on a per-kg basis than typical community protocols. Human equivalent doses (HED) calculated using FDA body surface area scaling.',
    },
  ],

  protocolDisclaimer:
    'These protocols are compiled from published research and community reports. They are not medical recommendations. TB-500 is not FDA-approved for human use. It is banned by WADA in competitive sports. Consult a qualified healthcare professional before use.',

  sideEffects: [
    { effect: 'Injection site redness or irritation', frequency: 'common', details: 'Mild and typically resolves within hours. Rotating injection sites helps minimize this.' },
    { effect: 'Temporary lethargy or fatigue', frequency: 'uncommon', details: 'Some users report mild tiredness in the hours following injection, particularly at higher doses.' },
    { effect: 'Headache', frequency: 'uncommon', details: 'Usually mild and transient. More commonly reported during the loading phase.' },
    { effect: 'Head rush or lightheadedness', frequency: 'rare', details: 'Reported anecdotally, typically immediately after injection.' },
    { effect: 'Nausea', frequency: 'rare', details: 'Infrequently reported, usually resolves without intervention.' },
  ],

  contraindications: [
    'Active cancer or history of cancer (theoretical concern due to angiogenic and cell-proliferative properties)',
    'Pregnancy or breastfeeding',
    'Active infections (Tβ4 may theoretically promote pathogen spread via increased cell migration)',
    'Competitive athletes subject to WADA testing (TB-500 is a prohibited substance)',
  ],

  interactions: [
    'May interact with anticoagulant medications due to effects on blood vessel formation and remodeling',
    'Theoretical interaction with immunosuppressive drugs via immune cell modulation',
    'May potentiate the effects of other angiogenic agents or growth factors',
  ],

  storage: {
    lyophilized: 'Refrigerated (2–8°C), stable for up to 24 months. Can be stored at room temperature short-term.',
    reconstituted: 'Refrigerated (2–8°C), use within 21–30 days',
    reconstitutionSolvent: 'Bacteriostatic water (BAC water)',
    reconstitutionNotes: 'Add solvent slowly down the side of the vial. Do not shake — swirl gently. Standard reconstitution: 2 mL BAC water into a 5 mg vial yields 2,500 mcg/mL (2.5 mg/mL).',
  },

  relatedPeptideSlugs: ['bpc-157', 'ghk-cu'],
  synergyNotes: 'TB-500 is most commonly combined with BPC-157 for enhanced tissue healing. The two peptides target complementary mechanisms — TB-500 promotes actin regulation and cell migration while BPC-157 drives angiogenesis and growth factor upregulation. This combination is widely used in community healing protocols.',

  metaDescription: 'TB-500 (Thymosin Beta-4 Fragment) is a peptide researched for wound healing, tissue repair, and anti-inflammation via actin regulation. Mechanisms, protocols, and research.',

  faqItems: [
    {
      question: 'What is TB-500 and how does it work?',
      answer: 'TB-500 is a synthetic version of Thymosin Beta-4, a naturally occurring peptide that regulates actin — a key protein for cell structure and movement. It promotes healing by enhancing cell migration to injury sites, promoting new blood vessel formation (angiogenesis), and reducing inflammation and fibrosis.',
    },
    {
      question: 'What is the difference between TB-500 and Thymosin Beta-4?',
      answer: 'TB-500 is a synthetic fragment that replicates the active region of the full 43-amino-acid Thymosin Beta-4 protein. The terms are often used interchangeably in community settings, though they are technically distinct. TB-500 contains the active sequence responsible for most of the healing and anti-inflammatory properties.',
    },
    {
      question: 'Can TB-500 be combined with BPC-157?',
      answer: 'Yes, TB-500 and BPC-157 are frequently combined in healing protocols. They work through complementary mechanisms: TB-500 promotes cell migration and actin regulation while BPC-157 promotes angiogenesis and growth factor expression. The combination is one of the most widely used peptide stacks for injury recovery.',
    },
    {
      question: 'Is TB-500 banned in sports?',
      answer: 'Yes. TB-500 (Thymosin Beta-4) is prohibited by the World Anti-Doping Agency (WADA) under the category of peptide hormones and growth factors. Athletes subject to drug testing should not use this compound.',
    },
    {
      question: 'What are the side effects of TB-500?',
      answer: 'TB-500 appears well-tolerated in research studies. Commonly reported side effects include mild injection site irritation, occasional fatigue, and infrequent headaches. Because it promotes angiogenesis and cell proliferation, it is theoretically contraindicated in individuals with active cancer. Long-term human safety data is limited.',
    },
  ],
};
