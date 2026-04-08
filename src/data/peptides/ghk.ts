import { Peptide } from '../types';

export const ghk: Peptide = {
  slug: 'ghk',
  name: 'GHK',
  fullName: 'GHK Tripeptide (Glycyl-L-Histidyl-L-Lysine)',
  aliases: ['GHK peptide', 'Glycyl-Histidyl-Lysine', 'Liver cell growth factor fragment'],
  sequence: 'Gly-His-Lys',
  molecularWeight: '340.38 g/mol',
  class: 'Tripeptide (copper-free form)',
  halfLife: 'Estimated <1 hour (rapidly binds available copper or is cleared)',
  administrationRoute: 'Topical, subcutaneous injection (research)',

  categories: ['longevity', 'skin-hair'],
  primaryCategory: 'longevity',
  status: 'research',
  regulatoryNote: 'Not FDA-approved for human use. Available as a cosmetic ingredient and research compound. Often confused with GHK-Cu — the copper-free and copper-bound forms have overlapping but distinct properties.',

  tldr: 'The tripeptide backbone of GHK-Cu, active even without copper binding. Modulates gene expression and has signaling properties distinct from the copper-bound form, though GHK-Cu is generally more potent for tissue remodeling.',

  overview:
    'GHK (Glycyl-L-Histidyl-L-Lysine) is a naturally occurring tripeptide first isolated from human plasma by Dr. Loren Pickart in 1973. It was identified based on its ability to cause aged liver tissue to synthesize proteins at a rate comparable to young tissue — suggesting a fundamental role in age-related gene expression regulation.\n\nGHK is best known as the peptide backbone of GHK-Cu (copper peptide), where it forms a complex with a copper(II) ion. However, GHK without copper is not biologically inert. The copper-free form retains significant biological activity, particularly in gene expression modulation, and has signaling properties that are distinct from the copper-bound complex.\n\nThe distinction between GHK and GHK-Cu is important and often overlooked. GHK-Cu is more potent for copper-dependent activities (collagen synthesis via lysyl oxidase activation, superoxide dismutase function, wound healing). GHK alone acts more as a signaling molecule — it modulates gene expression, influences cytokine production, and has been shown to reset certain gene activity patterns toward youthful profiles.\n\nIn biological systems, GHK rapidly binds available copper ions, so the distinction between GHK and GHK-Cu is partly contextual — in copper-replete environments, administered GHK will quickly form GHK-Cu. The copper-free form is most relevant in copper-limited conditions, in topical formulations where copper is intentionally excluded, and in research examining the peptide\'s intrinsic signaling properties.',

  mechanismOfAction:
    'GHK operates through both copper-independent and copper-dependent mechanisms. When discussing GHK without copper, the primary mechanisms are:\n\nGene expression modulation: GHK has been shown through Broad Institute Connectivity Map analysis to influence the expression of thousands of human genes. Even without copper binding, the tripeptide sequence activates gene networks involved in tissue remodeling, antioxidant defense, and anti-inflammatory signaling. The gene expression changes move patterns toward a younger, healthier state. Notably, GHK suppresses genes associated with tissue destruction (certain MMPs, inflammatory cytokines) and activates genes associated with tissue maintenance.\n\nSignaling peptide activity: GHK functions as a matrikine — a fragment derived from extracellular matrix proteins that has signaling activity. It is released during tissue injury and remodeling when matrix proteins are degraded, serving as a damage signal that recruits repair processes. This matrikine function does not require copper.\n\nCopper sequestration and delivery: In biological environments, GHK has high affinity for copper(II) ions (log K = 16.44 for the 2:1 GHK:Cu complex). It can sequester copper from low-affinity binding sites and deliver it to cells and enzymes that require copper as a cofactor. This copper-shuttling function makes GHK a natural copper chaperone.\n\nFibrinogen interaction: GHK binds to the high-affinity site on fibrinogen and inhibits coagulation-related fibrinogen assembly. This interaction does not require copper and may contribute to GHK\'s effects on tissue remodeling by modulating the provisional wound matrix.\n\nAnti-inflammatory signaling: GHK suppresses the production of TGF-beta in some contexts, reduces secretion of pro-inflammatory cytokines (IL-6, TNF-alpha), and inhibits the production of acute-phase reactive proteins. These effects appear to be partly copper-independent.',

  researchSummary:
    'GHK research is intertwined with GHK-Cu research, and separating the contributions of the peptide backbone from the copper complex is an ongoing challenge.\n\nThe foundational discovery by Pickart (1973) showed that a factor in young human plasma — later identified as GHK — could induce aged liver tissue to produce proteins at rates similar to young tissue. This growth-promoting activity was demonstrated with the copper-free peptide.\n\nGene expression studies using the Broad Institute Connectivity Map have analyzed GHK\'s transcriptomic effects extensively. Results show modulation of over 4,000 genes, including suppression of metastasis-associated gene networks and activation of DNA repair pathways. While much of this work has been attributed to GHK-Cu in the literature, the Connectivity Map analysis used GHK as the input compound, and several of the identified gene expression changes are not copper-dependent.\n\nSkin biology research has demonstrated that GHK (without copper) stimulates production of decorin — a proteoglycan that regulates collagen fibrillogenesis and has anti-tumor properties. GHK also stimulates dermatan sulfate production and modulates glycosaminoglycan synthesis in skin fibroblasts.\n\nAnti-cancer research has explored GHK\'s gene expression effects in the context of oncology. The peptide suppresses expression of several genes associated with aggressive cancer phenotypes and activates caspase and DNA repair genes. These findings are preliminary and from in silico / in vitro analysis rather than animal or human trials.\n\nLimitations: Most research does not cleanly separate GHK from GHK-Cu effects. In biological systems with available copper (which is most physiological conditions), administered GHK rapidly forms GHK-Cu. The copper-free form is most relevant in controlled in vitro settings and in topical formulations without added copper.',

  citations: [
    {
      title: 'The human tripeptide GHK-Cu in prevention of oxidative stress and degenerative conditions of aging',
      authors: 'Pickart L, Vasquez-Soltero JM, Margolina A.',
      journal: 'Oxidative Medicine and Cellular Longevity',
      year: 2012,
      doi: '10.1155/2012/324832',
      summary: 'Comprehensive review of GHK and GHK-Cu biology, including gene expression modulation, antioxidant effects, and the peptide\'s role in age-related decline. Addresses both copper-dependent and copper-independent activities.',
    },
    {
      title: 'GHK Peptide as a Natural Modulator of Multiple Cellular Pathways in Skin Regeneration',
      authors: 'Pickart L, Vasquez-Soltero JM, Margolina A.',
      journal: 'BioMed Research International',
      year: 2015,
      doi: '10.1155/2015/648108',
      summary: 'Analysis of GHK gene expression effects using Connectivity Map data, demonstrating modulation of over 4,000 genes with patterns shifting toward youthful tissue profiles.',
    },
    {
      title: 'A tripeptide from human serum which elongates fibroblasts and inhibits the growth of a transformed cell line',
      authors: 'Pickart L, Thayer WS.',
      journal: 'Biochemical and Biophysical Research Communications',
      year: 1973,
      doi: '10.1016/0006-291X(73)91603-8',
      summary: 'The foundational discovery paper identifying GHK as the factor in young human serum responsible for stimulating protein synthesis in aged liver tissue.',
    },
    {
      title: 'The effect of the human peptide GHK on gene expression relevant to nervous system function and cognitive decline',
      authors: 'Pickart L, Vasquez-Soltero JM, Margolina A.',
      journal: 'Brain Sciences',
      year: 2017,
      doi: '10.3390/brainsci7020020',
      summary: 'Analysis of GHK effects on gene expression in nervous system contexts, demonstrating modulation of genes involved in neurodegeneration, antioxidant defense, and DNA repair.',
    },
  ],

  protocols: [
    {
      name: 'Topical (skin rejuvenation)',
      route: 'Topical application',
      typicalDose: '0.01–0.1% concentration in serum or cream',
      frequency: '1–2 times daily',
      cycleDuration: 'Ongoing',
      notes: 'GHK without copper is used in some topical formulations, particularly when copper is not desired (e.g., when combining with vitamin C at low pH, where copper can cause oxidation). Efficacy for skin may be lower than GHK-Cu formulations for collagen-related benefits.',
    },
    {
      name: 'Research / systemic (injection)',
      route: 'Subcutaneous injection',
      typicalDose: '1–3 mg',
      frequency: 'Once daily',
      cycleDuration: '4–8 weeks',
      notes: 'Less commonly used than GHK-Cu for injection. In biological systems, injected GHK will rapidly bind available copper to form GHK-Cu. Some researchers use the copper-free form specifically to study peptide-intrinsic effects independent of copper delivery.',
    },
  ],

  protocolDisclaimer:
    'GHK is not FDA-approved for any therapeutic indication. These protocols are compiled from published research and are not medical recommendations. For most applications, GHK-Cu (the copper-bound form) has more supporting evidence. Consult a qualified healthcare professional.',

  sideEffects: [
    { effect: 'Skin irritation (topical)', frequency: 'rare', details: 'GHK is very well tolerated topically. Mild redness or tingling in sensitive individuals.' },
    { effect: 'Injection site irritation', frequency: 'uncommon', details: 'Mild redness at injection site. Usually resolves quickly.' },
  ],

  contraindications: [
    'Known hypersensitivity to GHK or related peptides',
    'Active cancer (theoretical concern due to gene expression effects on cell proliferation)',
    'Pregnancy or breastfeeding (insufficient safety data)',
    'Wilson\'s disease or copper metabolism disorders (relevant if GHK binds endogenous copper)',
  ],

  interactions: [
    'GHK rapidly binds available copper(II) ions — in copper-replete biological systems, it effectively becomes GHK-Cu',
    'Topical GHK combined with low-pH vitamin C serums is less likely to cause oxidation than GHK-Cu, as no free copper is present',
    'Theoretical interaction with copper chelation therapies (penicillamine, trientine)',
  ],

  storage: {
    lyophilized: 'Refrigerated (2–8°C), stable for 12–24 months. Protect from light.',
    reconstituted: 'Refrigerated (2–8°C), use within 21 days',
    reconstitutionSolvent: 'Bacteriostatic water or sterile saline',
    reconstitutionNotes: 'Unlike GHK-Cu, reconstituted GHK solution should be colorless (no blue tint). If a blue tint appears, the peptide has acquired copper from the environment or container. Standard reconstitution: follow vial instructions for volume.',
  },

  relatedPeptideSlugs: ['ghk-cu', 'ahk-cu', 'epitalon'],
  synergyNotes: 'GHK is the copper-free precursor/backbone of GHK-Cu. In practice, most users opt for GHK-Cu directly, as the copper-bound form is more potent for tissue remodeling. GHK alone is most relevant in specific formulation contexts (combining with vitamin C) or research settings examining copper-independent signaling.',

  metaDescription: 'GHK is the tripeptide backbone of copper peptide GHK-Cu. Gene expression modulation, matrikine signaling, and copper-independent biological activity research.',

  faqItems: [
    {
      question: 'What is the difference between GHK and GHK-Cu?',
      answer: 'GHK is the tripeptide alone (Gly-His-Lys). GHK-Cu is GHK bound to a copper(II) ion. GHK-Cu is more potent for copper-dependent activities like collagen synthesis and wound healing. GHK alone still modulates gene expression and has signaling properties but lacks the direct copper-delivery mechanism. In biological systems with available copper, GHK rapidly forms GHK-Cu.',
    },
    {
      question: 'Is GHK without copper still useful?',
      answer: 'Yes. GHK has intrinsic signaling activity as a matrikine (extracellular matrix-derived signaling peptide). It modulates gene expression, stimulates decorin production, and has anti-inflammatory effects independent of copper. It is also preferred in some topical formulations where copper would interfere with other active ingredients like vitamin C.',
    },
    {
      question: 'Does GHK decline with age like GHK-Cu?',
      answer: 'Yes. GHK and GHK-Cu are in equilibrium in the body — the same pool declines with age. Plasma levels drop from approximately 200 ng/mL at age 20 to 80 ng/mL by age 60. This decline in the GHK/GHK-Cu pool correlates with reduced tissue repair capacity and accelerated aging.',
    },
    {
      question: 'Why would someone choose GHK over GHK-Cu?',
      answer: 'The main reasons are: (1) topical formulations where copper would oxidize other ingredients like L-ascorbic acid (vitamin C), (2) research settings studying the intrinsic signaling properties of the peptide backbone separate from copper delivery, and (3) individuals with copper sensitivity or copper metabolism concerns.',
    },
  ],
};
