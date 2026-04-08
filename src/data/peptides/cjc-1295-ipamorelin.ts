import { Peptide } from '../types';

export const cjc1295Ipamorelin: Peptide = {
  slug: 'cjc-1295-ipamorelin',
  name: 'CJC-1295/Ipamorelin',
  fullName: 'CJC-1295 (no DAC) / Ipamorelin Combination',
  aliases: ['Modified GRF 1-29/Ipamorelin', 'Mod GRF/Ipa', 'CJC-1295 without DAC + Ipamorelin'],
  molecularWeight: 'CJC-1295 no DAC: ~3367.9 g/mol; Ipamorelin: ~711.85 g/mol',
  class: 'GHRH analog + ghrelin mimetic (GH secretagogue combination)',
  halfLife: 'CJC-1295 no DAC (Mod GRF 1-29): ~30 minutes; Ipamorelin: ~2 hours',
  administrationRoute: 'Subcutaneous injection',

  categories: ['body-composition'],
  primaryCategory: 'body-composition',
  status: 'research',
  regulatoryNote: 'Neither CJC-1295 nor Ipamorelin is FDA-approved for human use. Both are research compounds. This combination is one of the most widely used GH secretagogue protocols in the peptide community but has no regulatory approval as a combination therapy.',

  overview:
    'The CJC-1295 (no DAC)/Ipamorelin combination is the most popular growth hormone (GH) secretagogue stack in use. It pairs two peptides that stimulate GH release through different but complementary receptor pathways, producing a synergistic effect that exceeds what either peptide achieves alone.\n\nCJC-1295 without DAC — more accurately called Modified GRF (1-29) or Mod GRF 1-29 — is a synthetic analog of growth hormone-releasing hormone (GHRH). It binds to the GHRH receptor on pituitary somatotroph cells and stimulates GH synthesis and release. The "no DAC" distinction is important: CJC-1295 with DAC (Drug Affinity Complex) has a much longer half-life (~8 days) due to albumin binding, which can cause sustained, non-pulsatile GH elevation. The no-DAC version preserves natural GH pulsatility.\n\nIpamorelin is a selective growth hormone secretagogue receptor (GHS-R/ghrelin receptor) agonist. Unlike GHRP-6 or GHRP-2, Ipamorelin has minimal effect on cortisol, prolactin, or appetite at standard doses, making it the cleanest ghrelin mimetic available.\n\nWhen combined, the GHRH analog (CJC-1295 no DAC) amplifies the signal telling pituitary cells to produce GH, while the ghrelin mimetic (Ipamorelin) amplifies the signal telling them to release it. This dual-pathway stimulation produces GH pulses that are significantly larger than either peptide alone — typically 3–5 times greater than Ipamorelin alone in research models.',

  mechanismOfAction:
    'The synergy of this combination rests on the complementary biology of the GHRH and ghrelin signaling pathways in the anterior pituitary.\n\nCJC-1295 (no DAC) binds the GHRH receptor (GHRH-R), a G-protein coupled receptor on somatotroph cells. Activation triggers the cAMP/PKA signaling cascade, which upregulates GH gene transcription and primes GH-containing secretory vesicles for release. Essentially, it increases the amount of GH available to be released.\n\nIpamorelin binds the growth hormone secretagogue receptor (GHS-R1a), the same receptor targeted by the endogenous hormone ghrelin. GHS-R1a activation triggers a different intracellular pathway — the PLC/IP3/DAG cascade — leading to intracellular calcium release, which directly triggers exocytosis of GH-containing vesicles. It amplifies the release signal.\n\nWhen both receptors are activated simultaneously, the effects are synergistic rather than merely additive. The GHRH pathway fills and primes the GH vesicle pool while the ghrelin pathway triggers robust exocytosis. This mirrors the body\'s natural physiology, where endogenous GHRH and ghrelin work in concert to produce GH pulses during sleep and after exercise.\n\nCritically, this combination preserves the pulsatile nature of GH release — unlike exogenous GH injection or CJC-1295 with DAC, which can produce sustained non-physiological GH elevation. Pulsatile release is important because GH receptors downregulate under constant stimulation, and the liver\'s production of IGF-1 is optimally stimulated by GH pulses rather than constant levels.\n\nIpamorelin\'s selectivity is a key advantage: it does not significantly activate the ACTH/cortisol axis or prolactin release at standard doses, unlike GHRP-6 and GHRP-2 which stimulate cortisol and hunger.',

  researchSummary:
    'The individual components of this combination have been studied separately, though the specific combination has limited formal clinical trial data.\n\nCJC-1295 (Mod GRF 1-29) is based on the first 29 amino acids of endogenous GHRH with four amino acid substitutions (positions 2, 8, 15, 27) to improve metabolic stability. Research demonstrates it effectively stimulates GH release in humans with dose-dependent increases in GH and IGF-1 levels.\n\nIpamorelin has been studied in multiple clinical contexts. Research by Raun et al. demonstrated its high selectivity for GH release without affecting ACTH, cortisol, prolactin, or FSH/LH at GH-stimulating doses. Clinical trials have explored Ipamorelin for postoperative ileus recovery, where it showed GI-prokinetic effects alongside GH release.\n\nThe synergistic GH-releasing effect of combined GHRH + ghrelin-mimetic administration has been well-documented in research. Studies combining GHRH with various GHS-R agonists consistently show GH pulses 3–10 times greater than either agent alone. This synergy was demonstrated in work by Bowers et al. and Arvat et al., forming the pharmacological basis for this combination protocol.\n\nThe combination is widely used in clinical anti-aging and sports medicine practices, with extensive anecdotal and practitioner-reported outcomes including improved body composition (reduced fat mass, increased lean mass), enhanced recovery, improved sleep quality, and skin improvements. However, these outcomes lack rigorous RCT validation for the specific combination.\n\nA key consideration: the no-DAC version of CJC-1295 is specifically preferred in this combination because it allows pulsatile dosing. CJC-1295 with DAC binds albumin and has an ~8-day half-life, which produces sustained GH elevation that is less physiological and carries a higher risk of side effects.',

  citations: [
    {
      title: 'Ipamorelin, the first selective growth hormone secretagogue',
      authors: 'Raun K, Hansen BS, Johansen NL, et al.',
      journal: 'European Journal of Endocrinology',
      year: 1998,
      doi: '10.1530/eje.0.1390552',
      summary: 'Foundational study demonstrating Ipamorelin\'s selectivity for GH release without significant stimulation of ACTH, cortisol, or prolactin — distinguishing it from GHRP-6 and GHRP-2.',
    },
    {
      title: 'Synergistic interaction between GHRH and GH-releasing peptide-6 (GHRP-6) in vivo and in vitro',
      authors: 'Bowers CY, Sartor AO, Reynolds GA, Badger TM',
      journal: 'Journal of Clinical Endocrinology & Metabolism',
      year: 1991,
      doi: '10.1210/jcem-73-6-1256',
      summary: 'Key early study establishing the synergistic GH-releasing effect of combined GHRH + ghrelin-pathway stimulation, producing GH responses far exceeding either stimulus alone.',
    },
    {
      title: 'Prolonged stimulation of growth hormone (GH) and insulin-like growth factor I secretion by CJC-1295, a long-acting analog of GH-releasing hormone, in healthy adults',
      authors: 'Teichman SL, Neale A, Lawrence B, Gagnon C, Castaigne JP, Bherer L',
      journal: 'Journal of Clinical Endocrinology & Metabolism',
      year: 2006,
      doi: '10.1210/jc.2005-1536',
      summary: 'Clinical study demonstrating CJC-1295\'s ability to produce sustained elevations in GH and IGF-1 levels in healthy adults, establishing its pharmacokinetic profile.',
    },
    {
      title: 'Simultaneous administration of growth hormone-releasing hormone and growth hormone-releasing peptide-6: synergistic effect in humans',
      authors: 'Arvat E, Camanni F, Ghigo E, et al.',
      journal: 'Neuroendocrinology',
      year: 1997,
      doi: '10.1159/000127141',
      summary: 'Human study confirming the marked synergistic effect of combined GHRH and GHS-R agonist administration on GH release, with responses 5–10 times greater than either agent alone.',
    },
    {
      title: 'Ipamorelin: a new growth-hormone-releasing peptide',
      authors: 'Anderson LL, Jeftinija S, Scanes CG',
      journal: 'Journal of Animal Science',
      year: 2004,
      doi: '10.2527/2004.823742x',
      summary: 'Detailed characterization of Ipamorelin\'s pharmacology, receptor binding profile, GH-releasing potency, and selectivity compared to other GH secretagogues.',
    },
  ],

  protocols: [
    {
      name: 'Standard GH optimization',
      route: 'Subcutaneous injection',
      typicalDose: '100 mcg CJC-1295 (no DAC) + 100 mcg Ipamorelin per injection',
      frequency: '1–3 times daily (typically before bed, optionally morning and/or post-workout)',
      cycleDuration: '8–12 weeks on, 4 weeks off',
      notes: 'The before-bed dose is considered most important as it amplifies the natural nocturnal GH pulse. Inject on an empty stomach — food (especially carbohydrates and fats) blunts GH release. Wait 20–30 minutes after injection before eating. The two peptides can be drawn into the same syringe.',
    },
    {
      name: 'Body composition / fat loss focus',
      route: 'Subcutaneous injection',
      typicalDose: '100 mcg CJC-1295 (no DAC) + 200 mcg Ipamorelin per injection',
      frequency: '2–3 times daily (fasted morning, post-workout, before bed)',
      cycleDuration: '12–16 weeks',
      notes: 'Higher Ipamorelin dosing for enhanced lipolytic effect. Timing around fasted states maximizes GH-mediated fat oxidation. Some practitioners use 300 mcg Ipamorelin per injection. Cycling is recommended to prevent GH receptor desensitization.',
    },
    {
      name: 'Recovery / anti-aging',
      route: 'Subcutaneous injection',
      typicalDose: '100 mcg CJC-1295 (no DAC) + 100 mcg Ipamorelin',
      frequency: 'Once daily before bed, 5 days on / 2 days off',
      cycleDuration: '12 weeks on, 4 weeks off, repeating',
      notes: 'Conservative protocol focused on sleep quality, recovery, and long-term anti-aging benefits. The 5-on/2-off schedule helps prevent desensitization while providing consistent benefits.',
    },
  ],

  protocolDisclaimer:
    'These protocols are compiled from research literature, clinical practitioner reports, and community experience. Neither CJC-1295 nor Ipamorelin is FDA-approved for human use. The combination has not been evaluated in formal clinical trials. GH secretagogues may affect blood glucose, insulin sensitivity, and other hormonal axes. Consult a qualified healthcare professional before use, and monitor IGF-1 levels periodically.',

  sideEffects: [
    { effect: 'Injection site reactions', frequency: 'common', details: 'Redness, mild pain, or itching at the injection site. Typically mild and transient.' },
    { effect: 'Water retention', frequency: 'common', details: 'Mild fluid retention, particularly in the first 2–4 weeks. May manifest as slightly puffy hands or face. Usually normalizes as the body adjusts.' },
    { effect: 'Tingling or numbness in extremities', frequency: 'uncommon', details: 'Paresthesia in hands and feet, related to GH-mediated effects. A sign of effective GH elevation. Reduce dose if persistent.' },
    { effect: 'Increased hunger', frequency: 'uncommon', details: 'Ipamorelin has minimal appetite-stimulating effects compared to GHRP-6, but some individuals report mild hunger increases, especially at higher doses.' },
    { effect: 'Head rush or flushing', frequency: 'uncommon', details: 'Brief sensation of warmth or flushing shortly after injection. Transient and benign.' },
    { effect: 'Joint pain', frequency: 'rare', details: 'Can occur with significantly elevated GH/IGF-1 levels. Indicates dose may be too high. Reduce dosing.' },
  ],

  contraindications: [
    'Active cancer or history of cancer (GH/IGF-1 elevation may promote tumor growth)',
    'Diabetes — GH secretagogues can impair glucose tolerance and insulin sensitivity',
    'Pregnancy or breastfeeding',
    'Active pituitary tumors or disorders',
    'Intracranial hypertension',
    'Children/adolescents with open growth plates (unless under endocrinologist supervision)',
  ],

  interactions: [
    'Insulin and oral hypoglycemics — GH elevation can impair glucose tolerance; monitor blood sugar closely',
    'Exogenous growth hormone — concurrent use is redundant and may increase risk of side effects from supraphysiological GH levels',
    'Glucocorticoids (prednisone, dexamethasone) — may blunt the GH-releasing effect of both peptides',
    'Somatostatin analogs (octreotide) — directly antagonize GH release and negate the effect of this combination',
    'CJC-1295 with DAC — should not be combined with the no-DAC version, as this eliminates the benefit of pulsatile dosing',
  ],

  storage: {
    lyophilized: 'Refrigerated (2–8°C) for up to 12 months. Can be stored at room temperature for short periods during shipping. Protect from light.',
    reconstituted: 'Refrigerated (2–8°C), use within 21–28 days',
    reconstitutionSolvent: 'Bacteriostatic water (BAC water)',
    reconstitutionNotes: 'Each peptide is typically supplied in separate vials and reconstituted individually. They can be drawn into the same syringe for injection. Standard reconstitution: 2 mL BAC water into a 2 mg vial yields 100 mcg per 10-unit (0.1 mL) insulin syringe marking. Add water slowly along the vial wall. Do not shake — swirl gently.',
  },

  relatedPeptideSlugs: ['cjc-1295', 'ipamorelin', 'tesamorelin'],
  synergyNotes: 'This entry describes the CJC-1295 (no DAC) + Ipamorelin combination specifically. CJC-1295 alone (GHRH pathway) and Ipamorelin alone (ghrelin pathway) each produce moderate GH elevation, but the combination produces synergistic GH pulses 3–5x greater. Tesamorelin is an FDA-approved GHRH analog that works through the same receptor as CJC-1295 but with a different pharmacokinetic profile.',

  metaDescription: 'CJC-1295 (no DAC)/Ipamorelin is the most popular GH secretagogue combination, pairing a GHRH analog with a ghrelin mimetic for synergistic growth hormone release. Mechanisms, protocols, and safety.',

  faqItems: [
    {
      question: 'Why combine CJC-1295 and Ipamorelin instead of using one alone?',
      answer: 'CJC-1295 (no DAC) and Ipamorelin work through different receptors on pituitary cells. CJC-1295 activates the GHRH receptor (priming GH production) while Ipamorelin activates the ghrelin receptor (triggering GH release). When both pathways are stimulated simultaneously, GH output is synergistically amplified — typically 3–5 times greater than either peptide alone. This mirrors the body\'s natural dual-signal system for GH release.',
    },
    {
      question: 'What is the difference between CJC-1295 with DAC and without DAC?',
      answer: 'CJC-1295 with DAC (Drug Affinity Complex) binds to blood albumin, extending its half-life to approximately 8 days. This produces sustained, non-pulsatile GH elevation, which is less physiological and carries more side effects. CJC-1295 without DAC (also called Mod GRF 1-29) has a ~30-minute half-life, allowing pulsatile GH release that mimics natural physiology. The no-DAC version is strongly preferred for this combination protocol.',
    },
    {
      question: 'When is the best time to inject CJC-1295/Ipamorelin?',
      answer: 'The most important dose is before bed (typically 30–60 minutes before sleep), as it amplifies the natural nocturnal GH pulse — the largest GH release of the day. Additional doses can be taken in the fasted morning and/or post-workout. Always inject on an empty stomach, as food (especially carbohydrates and fats) significantly blunts GH release. Wait at least 20–30 minutes after injection before eating.',
    },
    {
      question: 'Is CJC-1295/Ipamorelin the same as taking growth hormone?',
      answer: 'No. Exogenous GH (somatropin) directly provides synthetic growth hormone, bypassing the pituitary entirely. CJC-1295/Ipamorelin stimulates your own pituitary to produce and release GH naturally. This preserves the pulsatile release pattern, maintains feedback loop integrity, and generally produces lower but more physiological GH elevations compared to exogenous GH injection.',
    },
    {
      question: 'What results can be expected from CJC-1295/Ipamorelin?',
      answer: 'Commonly reported outcomes include: improved sleep quality (often the first noticeable effect within 1–2 weeks), enhanced recovery from exercise, gradual improvements in body composition (reduced fat, increased lean mass) over 8–12 weeks, improved skin quality, and better overall recovery. Results are more subtle and gradual compared to exogenous GH, as the peptides work within your body\'s natural GH production capacity.',
    },
  ],
};
