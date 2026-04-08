import { Peptide } from '../types';

export const larazotide: Peptide = {
  slug: 'larazotide',
  name: 'Larazotide',
  fullName: 'Larazotide Acetate (AT-1001)',
  aliases: ['AT-1001', 'Larazotide acetate', 'INN-202'],
  sequence: 'GGVLVQPG (octapeptide)',
  molecularWeight: '725.84 g/mol',
  class: 'Tight junction regulator (zonulin antagonist)',
  halfLife: 'Acts locally in GI tract — minimal systemic absorption',
  administrationRoute: 'Oral',

  categories: ['immune-gut'],
  primaryCategory: 'immune-gut',
  status: 'clinical-trials',
  regulatoryNote: 'Investigational drug. Has completed Phase 3 clinical trials for celiac disease. Developed by Innovate Biopharmaceuticals (now 9 Meters Biopharma). Not yet FDA-approved.',

  overview:
    'Larazotide acetate is a synthetic octapeptide designed to regulate intestinal tight junctions by antagonizing zonulin, the endogenous protein that increases intestinal permeability. It is the first drug to target the tight junction pathway for treating celiac disease.\n\nUnlike current celiac disease management (strict gluten-free diet), larazotide works by preventing the downstream effects of gluten exposure — specifically, the zonulin-mediated opening of tight junctions that allows gluten fragments to cross the intestinal barrier and trigger immune responses.\n\nLarazotide acts locally in the gut lumen with minimal systemic absorption, giving it a favorable safety profile. It is not a cure for celiac disease but is designed to reduce symptoms and intestinal damage from inadvertent gluten exposure.',

  mechanismOfAction:
    'When gluten-derived gliadin peptides interact with the intestinal epithelium, they trigger the release of zonulin (pre-haptoglobin 2) from enterocytes. Zonulin binds to receptors on the epithelial surface, initiating a signaling cascade that disassembles tight junction proteins (ZO-1, occludin, claudins), increasing paracellular permeability.\n\nThis increased permeability — often called "leaky gut" — allows immunogenic gliadin fragments to cross the epithelial barrier and interact with the immune system in the lamina propria, triggering the inflammatory cascade characteristic of celiac disease.\n\nLarazotide competitively antagonizes zonulin at its receptor, preventing tight junction disassembly. By maintaining tight junction integrity, it reduces the passage of gliadin fragments across the epithelium, dampening the immune response to gluten exposure.\n\nImportantly, larazotide does not eliminate gluten from the diet or prevent all gluten-related effects — it reduces the permeability response to inadvertent gluten exposure.',

  researchSummary:
    'Larazotide has been studied in multiple clinical trials. Phase 2 trials demonstrated reduced intestinal permeability (measured by lactulose-mannitol ratio) and reduced anti-tissue transglutaminase (anti-tTG) antibodies in celiac disease patients on a gluten-free diet who received larazotide.\n\nThe Phase 2b trial (CeliAction) enrolled 342 celiac patients and found that larazotide 0.5 mg three times daily significantly reduced celiac disease symptoms as measured by the Celiac Disease Gastrointestinal Symptom Rating Scale (CeD-GSRS).\n\nPhase 3 trials have been conducted, though detailed results are not fully published as of the most recent data. The drug showed consistent symptom reduction across trials with a favorable safety profile comparable to placebo.\n\nBroader implications: The zonulin pathway is implicated in multiple conditions beyond celiac disease, including type 1 diabetes, inflammatory bowel disease, and autoimmune conditions. Larazotide represents proof-of-concept that tight junction regulation can be a therapeutic target.',

  citations: [
    {
      title: 'Larazotide acetate in patients with coeliac disease undergoing a gluten challenge: a randomised placebo-controlled study',
      authors: 'Leffler DA, et al.',
      journal: 'Alimentary Pharmacology & Therapeutics',
      year: 2012,
      doi: '10.1111/apt.12014',
      summary: 'Phase 2 study showing larazotide reduced intestinal permeability and gastrointestinal symptoms during gluten challenge in celiac disease patients.',
    },
    {
      title: 'Larazotide acetate for persistent symptoms of celiac disease despite a gluten-free diet: a randomized controlled trial',
      authors: 'Leffler DA, et al.',
      journal: 'Gastroenterology',
      year: 2015,
      doi: '10.1053/j.gastro.2015.02.008',
      summary: 'CeliAction Phase 2b trial of 342 patients demonstrating 0.5 mg TID significantly reduced CeD-GSRS symptom scores compared to placebo.',
    },
    {
      title: 'Zonulin and its regulation of intestinal barrier function: the biological door to inflammation, autoimmunity, and cancer',
      authors: 'Fasano A.',
      journal: 'Physiological Reviews',
      year: 2011,
      doi: '10.1152/physrev.00003.2008',
      summary: 'Foundational review of the zonulin pathway by its discoverer, Alessio Fasano, establishing the biological rationale for tight junction-targeted therapeutics like larazotide.',
    },
  ],

  protocols: [
    {
      name: 'Clinical trial dosing (celiac disease)',
      route: 'Oral',
      typicalDose: '0.5 mg',
      frequency: 'Three times daily (before meals)',
      cycleDuration: 'Ongoing (adjunct to gluten-free diet)',
      notes: 'The 0.5 mg TID dose showed optimal efficacy in Phase 2b. Higher doses (1 mg, 2 mg) did not show additional benefit. Taken 15 min before meals. Designed as an adjunct to gluten-free diet, not a replacement.',
    },
  ],

  protocolDisclaimer:
    'Larazotide is an investigational drug not yet approved by the FDA. Clinical trial dosing is provided for informational purposes. Celiac disease requires medical supervision and a strict gluten-free diet.',

  sideEffects: [
    { effect: 'Headache', frequency: 'common', details: 'Reported at rates similar to placebo in clinical trials.' },
    { effect: 'GI discomfort', frequency: 'uncommon', details: 'Mild nausea or abdominal discomfort. Comparable to placebo rates.' },
    { effect: 'Upper respiratory infection', frequency: 'uncommon', details: 'Reported in trials but not clearly drug-related.' },
  ],

  contraindications: [
    'Known hypersensitivity to larazotide or formulation components',
    'Not intended as a replacement for a gluten-free diet in celiac disease',
  ],

  storage: {
    lyophilized: 'Room temperature, supplied as oral capsules',
    reconstituted: 'N/A (oral capsule formulation)',
    reconstitutionSolvent: 'N/A',
    reconstitutionNotes: 'Supplied as enteric-coated capsules designed for intestinal delivery. Store at room temperature in original packaging.',
  },

  relatedPeptideSlugs: ['bpc-157', 'kpv'],
  synergyNotes: 'Larazotide targets a distinct mechanism (tight junction regulation) compared to BPC-157 (angiogenesis and growth factor modulation) and KPV (NF-kB inhibition). They address gut health through complementary pathways.',

  metaDescription: 'Larazotide acetate is a zonulin antagonist in clinical trials for celiac disease. It prevents tight junction opening to reduce intestinal permeability.',

  faqItems: [
    {
      question: 'What is larazotide and how does it help celiac disease?',
      answer: 'Larazotide is a peptide that blocks zonulin, the protein that opens intestinal tight junctions when gluten is detected. By keeping tight junctions closed, it reduces the passage of immunogenic gluten fragments across the gut lining, decreasing the immune response and symptoms from inadvertent gluten exposure.',
    },
    {
      question: 'Does larazotide replace a gluten-free diet?',
      answer: 'No. Larazotide is designed as an adjunct to a gluten-free diet, reducing symptoms from inadvertent gluten exposure that occurs despite dietary adherence. It does not make it safe to intentionally consume gluten.',
    },
    {
      question: 'What is zonulin and why does it matter?',
      answer: 'Zonulin is a protein discovered by Alessio Fasano that regulates intestinal permeability by controlling tight junctions between epithelial cells. Elevated zonulin is linked to celiac disease, type 1 diabetes, and other autoimmune conditions. It is the primary biological target of larazotide.',
    },
  ],
};
