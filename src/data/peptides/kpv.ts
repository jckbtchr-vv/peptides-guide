import { Peptide } from '../types';

export const kpv: Peptide = {
  slug: 'kpv',
  name: 'KPV',
  fullName: 'KPV (Lysine-Proline-Valine)',
  aliases: ['Alpha-MSH Fragment 11-13', 'α-MSH(11-13)', 'C-terminal alpha-MSH tripeptide'],
  sequence: 'Lys-Pro-Val',
  molecularWeight: '342.43 g/mol',
  class: 'Anti-inflammatory tripeptide (alpha-MSH fragment)',
  halfLife: 'Estimated 15–30 minutes (tripeptide)',
  administrationRoute: 'Subcutaneous injection, oral, topical',

  categories: ['healing-recovery', 'immune-gut'],
  primaryCategory: 'immune-gut',
  status: 'research',
  regulatoryNote: 'Not FDA-approved for human use. Research compound only.',

  tldr: 'A tripeptide fragment of alpha-MSH that inhibits NF-kB inflammatory signaling. Uniquely absorbed via the intestinal PepT1 transporter, making it effective orally for gut inflammation.',

  overview:
    'KPV is a naturally occurring tripeptide consisting of three amino acids — lysine, proline, and valine. It is derived from the C-terminal end (positions 11-13) of alpha-melanocyte-stimulating hormone (α-MSH), a neuropeptide with potent anti-inflammatory properties.\n\nAlpha-MSH is a 13-amino-acid peptide produced in the pituitary gland, skin cells, and immune cells. While the full α-MSH molecule binds melanocortin receptors (MC1R–MC5R), the KPV fragment retains the anti-inflammatory activity without the melanogenic (skin-darkening) effects. This is significant because it means KPV can deliver anti-inflammatory benefits without the cosmetic side effects associated with other melanocortin peptides.\n\nKPV has gained particular attention for its effects on gut inflammation, with research demonstrating efficacy in inflammatory bowel disease (IBD) models including colitis. It also exhibits antimicrobial properties against certain bacteria, including Staphylococcus aureus and Candida albicans.',

  mechanismOfAction:
    'KPV exerts its anti-inflammatory effects through several well-characterized pathways. The primary mechanism involves direct inhibition of the NF-kB (nuclear factor kappa-light-chain-enhancer of activated B cells) signaling pathway. NF-kB is a master transcription factor that controls the expression of pro-inflammatory cytokines, chemokines, and adhesion molecules. KPV enters cells and interacts directly with the NF-kB p65 subunit, preventing its nuclear translocation and subsequent activation of inflammatory gene expression.\n\nUnlike the full α-MSH peptide, KPV does not appear to require melanocortin receptor binding for its anti-inflammatory effects. Research suggests it is transported into cells directly, possibly via the peptide transporter PepT1 in intestinal epithelial cells, which may explain its oral bioavailability for gut-targeted applications.\n\nKPV also modulates inflammatory cytokine production, reducing levels of IL-1β, IL-6, IL-8, and TNF-α. In intestinal models, it suppresses the activation of the inflammasome pathway and reduces epithelial permeability (a key factor in "leaky gut").\n\nThe antimicrobial properties of KPV appear to involve direct disruption of microbial cell membranes and modulation of the host immune response. It has shown activity against both gram-positive bacteria and certain fungi.',

  researchSummary:
    'KPV research spans anti-inflammatory, antimicrobial, and gastrointestinal applications. The most robust evidence comes from IBD and colitis models.\n\nIn a landmark 2008 study, Dalmasso et al. demonstrated that KPV significantly reduced colonic inflammation in dextran sodium sulfate (DSS)-induced colitis in mice. The peptide was effective when administered both systemically and orally, and it reduced inflammatory cytokine levels, decreased histological damage, and preserved epithelial barrier function. Importantly, oral KPV was shown to be absorbed via the PepT1 transporter in colonocytes.\n\nSubsequent research has explored KPV-loaded nanoparticle delivery systems for targeted colonic delivery, with hyaluronic acid-functionalized polymeric nanoparticles showing enhanced uptake by inflamed colonic tissue and improved therapeutic outcomes compared to free KPV.\n\nAntimicrobial research demonstrates that KPV has activity against Staphylococcus aureus (including some resistant strains) and Candida albicans. The peptide reduces bacterial colony counts and inhibits biofilm formation in in vitro studies.\n\nDermatological research shows anti-inflammatory effects in skin models, consistent with the known role of α-MSH in cutaneous immune regulation. KPV reduces UV-induced and chemical-induced skin inflammation in animal models.\n\nA significant limitation is the lack of human clinical trials. All evidence to date is from preclinical (in vitro and animal) studies.',

  citations: [
    {
      title: 'PepT1-mediated tripeptide KPV uptake reduces intestinal inflammation',
      authors: 'Dalmasso G, et al.',
      journal: 'Gastroenterology',
      year: 2008,
      doi: '10.1053/j.gastro.2008.01.066',
      summary: 'Key study demonstrating KPV reduces colitis in mice via PepT1-mediated uptake in colonocytes. Showed oral efficacy and NF-kB inhibition mechanism in intestinal epithelial cells.',
    },
    {
      title: 'Alpha-melanocyte-stimulating hormone and related tripeptides: biochemistry, antiinflammatory and protective effects in vitro and in vivo',
      authors: 'Brzoska T, et al.',
      journal: 'Endocrine Reviews',
      year: 2008,
      doi: '10.1210/er.2007-0027',
      summary: 'Comprehensive review of alpha-MSH and its C-terminal tripeptide KPV, covering anti-inflammatory mechanisms, receptor interactions, and therapeutic potential across multiple organ systems.',
    },
    {
      title: 'Hyaluronic acid-functionalized polymeric nanoparticles for colonic delivery of the anti-inflammatory tripeptide KPV',
      authors: 'Xiao B, et al.',
      journal: 'Biomaterials',
      year: 2015,
      doi: '10.1016/j.biomaterials.2015.01.017',
      summary: 'Development of targeted nanoparticle delivery system for KPV showing enhanced colonic uptake and improved anti-inflammatory efficacy in colitis models.',
    },
    {
      title: 'The antimicrobial peptide alpha-MSH exerts anti-infective activity against intracellular S. aureus',
      authors: 'Cutuli M, et al.',
      journal: 'BMC Microbiology',
      year: 2000,
      doi: '10.1186/1471-2180-8-24',
      summary: 'Demonstrated antimicrobial activity of alpha-MSH and its fragments (including KPV) against Staphylococcus aureus, including effects on intracellular bacteria.',
    },
  ],

  protocols: [
    {
      name: 'Gut inflammation / oral protocol',
      route: 'Oral',
      typicalDose: '200–500 mcg',
      frequency: '1–2 times daily',
      cycleDuration: '4–8 weeks',
      notes: 'Taken on an empty stomach. KPV is absorbed via the PepT1 transporter in intestinal epithelial cells, making oral administration viable for gut-targeted effects. Community protocols often use capsule or sublingual forms.',
    },
    {
      name: 'Systemic anti-inflammatory',
      route: 'Subcutaneous injection',
      typicalDose: '200–500 mcg',
      frequency: 'Once daily',
      cycleDuration: '4–6 weeks',
      notes: 'Used for systemic anti-inflammatory effects beyond the gut. Inject subcutaneously in the abdominal area. Given the short half-life of the tripeptide, daily dosing is common.',
    },
    {
      name: 'Topical (skin inflammation)',
      route: 'Topical application',
      typicalDose: 'Applied as cream or solution (concentration varies)',
      frequency: '1–2 times daily',
      cycleDuration: 'As needed',
      notes: 'Used in community settings for localized skin inflammation. Not a standardized formulation — typically compounded from reconstituted peptide.',
    },
  ],

  protocolDisclaimer:
    'These protocols are compiled from published research and community reports. They are not medical recommendations. KPV is not FDA-approved for human use. Consult a qualified healthcare professional before use.',

  sideEffects: [
    { effect: 'Injection site redness or irritation', frequency: 'common', details: 'Mild and typically self-resolving within hours.' },
    { effect: 'Mild gastrointestinal discomfort', frequency: 'uncommon', details: 'Some users report mild nausea or stomach discomfort with oral dosing, particularly at higher doses.' },
    { effect: 'Fatigue', frequency: 'uncommon', details: 'Occasionally reported, possibly related to immune modulation.' },
    { effect: 'Headache', frequency: 'rare', details: 'Infrequently reported in community use.' },
  ],

  contraindications: [
    'Pregnancy or breastfeeding (insufficient safety data)',
    'Known allergy to alpha-MSH or related peptides',
    'Active immunosuppressive therapy (potential for immune interaction)',
    'Severe liver or kidney disease (peptide clearance may be affected)',
  ],

  interactions: [
    'May interact with immunosuppressive medications by modulating inflammatory pathways',
    'Theoretical interaction with NSAIDs and corticosteroids (additive anti-inflammatory effects)',
    'May affect the absorption of other PepT1-transported drugs when taken orally',
  ],

  storage: {
    lyophilized: 'Refrigerated (2–8°C), stable for up to 12 months. Protect from light.',
    reconstituted: 'Refrigerated (2–8°C), use within 14–21 days',
    reconstitutionSolvent: 'Bacteriostatic water (BAC water)',
    reconstitutionNotes: 'Add solvent slowly down the side of the vial. Do not shake — swirl gently. KPV is a small tripeptide and dissolves readily. Standard reconstitution: 1 mL BAC water into a 5 mg vial yields 5,000 mcg/mL.',
  },

  relatedPeptideSlugs: ['bpc-157', 'll-37'],
  synergyNotes: 'KPV is sometimes combined with BPC-157 for comprehensive gut healing — KPV targets NF-kB-mediated inflammation while BPC-157 promotes tissue repair and angiogenesis. The combination of anti-inflammatory and tissue-repair mechanisms addresses gut pathology from multiple angles.',

  metaDescription: 'KPV is an anti-inflammatory tripeptide derived from alpha-MSH, researched for gut inflammation, colitis, and antimicrobial effects. Mechanisms, research, and protocols.',

  faqItems: [
    {
      question: 'What is KPV peptide and what does it do?',
      answer: 'KPV is a tripeptide (three amino acids: lysine-proline-valine) derived from alpha-melanocyte-stimulating hormone (α-MSH). It has potent anti-inflammatory properties, primarily through inhibition of the NF-kB pathway. It is most studied for gut inflammation, including colitis and inflammatory bowel disease models.',
    },
    {
      question: 'Can KPV be taken orally?',
      answer: 'Yes. Research shows KPV is absorbed in the intestine via the PepT1 peptide transporter in colonocytes. This makes oral administration viable, particularly for gut-targeted anti-inflammatory effects. This was demonstrated in the landmark Dalmasso et al. 2008 study in Gastroenterology.',
    },
    {
      question: 'Does KPV cause skin tanning like other melanocortin peptides?',
      answer: 'No. Unlike full-length alpha-MSH or melanocortin agonists like melanotan II, KPV does not significantly activate melanocortin receptors responsible for melanogenesis (skin darkening). Its anti-inflammatory effects appear to operate through direct NF-kB inhibition rather than receptor-mediated signaling.',
    },
    {
      question: 'What is the difference between KPV and alpha-MSH?',
      answer: 'KPV is the C-terminal tripeptide fragment (amino acids 11-13) of the 13-amino-acid alpha-MSH hormone. While alpha-MSH activates melanocortin receptors causing skin darkening and broad hormonal effects, KPV retains the anti-inflammatory properties without melanogenic activity. KPV acts primarily through direct NF-kB inhibition inside cells.',
    },
    {
      question: 'Is KPV effective for inflammatory bowel disease?',
      answer: 'Preclinical evidence is promising. KPV significantly reduced colitis in animal models when given both orally and by injection. It decreased inflammatory cytokines, preserved gut barrier function, and reduced tissue damage. However, no human clinical trials have been published, so its efficacy in human IBD remains unconfirmed.',
    },
  ],
};
