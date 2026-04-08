import { Guide } from '../types';

export const reconstitutionGuide: Guide = {
  slug: 'reconstitution',
  title: 'Peptide Reconstitution Guide',
  description: 'How to properly reconstitute lyophilized peptides with bacteriostatic water. Step-by-step instructions, dosing calculations, and storage.',
  metaDescription: 'Complete guide to reconstituting peptides with bacteriostatic water. Step-by-step instructions, dosage calculations, syringe measurements, and proper storage.',
  sections: [
    {
      heading: 'What Is Reconstitution?',
      content: 'Reconstitution is the process of adding a liquid solvent to a lyophilized (freeze-dried) peptide powder to create an injectable solution. Most research peptides are supplied as a dry powder in a sealed vial. They must be mixed with a sterile solvent before use.\n\nThis process is straightforward but must be done carefully to preserve the peptide\'s integrity. Improper handling — such as shaking the vial, using the wrong solvent, or contaminating the solution — can degrade or destroy the peptide.',
    },
    {
      heading: 'What You Need',
      content: 'Before reconstituting, gather the following:\n\n— Lyophilized peptide vial (sealed, stored per manufacturer instructions)\n— Bacteriostatic water (BAC water) — sterile water with 0.9% benzyl alcohol as a preservative\n— Insulin syringes (typically 1 mL / 100 unit syringes)\n— Alcohol swabs for sterilizing vial tops\n— Clean workspace',
      subsections: [
        {
          heading: 'Why Bacteriostatic Water?',
          content: 'Bacteriostatic water contains 0.9% benzyl alcohol, which inhibits bacterial growth. This allows the reconstituted peptide to be stored and used over multiple days (typically up to 30 days refrigerated). Sterile water for injection can also be used but contains no preservative — use within 24 hours if using sterile water.\n\nDo NOT use normal tap water, distilled water, or saline unless specifically instructed. These can degrade the peptide or cause injection site reactions.',
        },
      ],
    },
    {
      heading: 'Step-by-Step Reconstitution',
      content: '1. Wash your hands thoroughly.\n\n2. Wipe the top of the peptide vial and the BAC water vial with an alcohol swab. Allow to dry.\n\n3. Draw your desired amount of BAC water into the syringe. Common amounts: 1 mL or 2 mL (see dosing calculations below).\n\n4. Insert the needle into the peptide vial at an angle, with the tip touching the inner glass wall — NOT aimed directly at the powder.\n\n5. Slowly depress the plunger, allowing the water to trickle down the side of the vial onto the powder. Do NOT squirt water directly onto the peptide cake.\n\n6. Once all water is added, remove the syringe gently.\n\n7. DO NOT SHAKE the vial. Instead, gently swirl it or roll it between your palms. Most peptides dissolve within 1–3 minutes. Some may take up to 10 minutes.\n\n8. Once fully dissolved (solution should be clear, not cloudy), the peptide is ready for use.\n\n9. Store the reconstituted vial in the refrigerator (2–8°C). Do not freeze reconstituted peptides.',
    },
    {
      heading: 'Dosing Calculations',
      content: 'After reconstitution, you need to know how much solution to draw for your desired dose. The formula is simple:\n\nConcentration = Total peptide (mcg) ÷ Total solvent (mL)\n\nExample: 5 mg (5,000 mcg) peptide reconstituted with 2 mL BAC water:\n5,000 mcg ÷ 2 mL = 2,500 mcg per mL\n\nUsing a 1 mL (100 unit) insulin syringe:\nEach "unit" mark = 0.01 mL = 25 mcg\n\nSo for a 250 mcg dose: draw to the 10 unit mark.\nFor a 500 mcg dose: draw to the 20 unit mark.',
      subsections: [
        {
          heading: 'Common Reconstitution Amounts',
          content: '5 mg vial + 1 mL BAC water = 5,000 mcg/mL (50 mcg per unit mark)\n5 mg vial + 2 mL BAC water = 2,500 mcg/mL (25 mcg per unit mark)\n10 mg vial + 2 mL BAC water = 5,000 mcg/mL (50 mcg per unit mark)\n10 mg vial + 3 mL BAC water = 3,333 mcg/mL (33.3 mcg per unit mark)\n\nUsing 2 mL is the most common choice — it provides easy math and enough volume for practical syringe measurements.',
        },
      ],
    },
    {
      heading: 'Storage After Reconstitution',
      content: 'Reconstituted peptides should be stored in the refrigerator at 2–8°C (36–46°F). Most peptides remain stable for 21–30 days when reconstituted with bacteriostatic water.\n\nDo NOT freeze reconstituted peptides — ice crystal formation can damage the peptide structure.\n\nKeep vials upright and away from light. Do not leave at room temperature for extended periods.\n\nIf the solution becomes cloudy, discolored, or contains visible particles, discard it.',
    },
    {
      heading: 'Common Mistakes to Avoid',
      content: '— Shaking the vial (denatures the peptide — always swirl gently)\n— Squirting water directly onto the powder (can damage the peptide cake)\n— Using too little solvent (makes accurate dosing difficult)\n— Forgetting to refrigerate after mixing\n— Double-dipping syringes (use a fresh syringe each time you draw)\n— Reconstituting too far in advance (mix when you\'re ready to start using)\n— Leaving the vial at room temperature for hours',
    },
  ],
  relatedPeptideSlugs: ['bpc-157', 'tb-500', 'ipamorelin'],
  relatedGuideSlugs: ['dosing-101', 'peptide-safety'],
};

export const dosing101Guide: Guide = {
  slug: 'dosing-101',
  title: 'Peptide Dosing 101',
  description: 'Fundamentals of peptide dosing — units, timing, injection sites, and how to read research dosing vs. community protocols.',
  metaDescription: 'Peptide dosing fundamentals: understanding mcg vs mg, subcutaneous injection technique, timing, injection sites, and interpreting research vs community protocols.',
  sections: [
    {
      heading: 'Understanding Peptide Units',
      content: 'Peptides are measured in micrograms (mcg) or milligrams (mg). Understanding the conversion is essential:\n\n1 mg = 1,000 mcg\n\nMost peptide doses are in the 100–1,000 mcg range (0.1–1 mg). Some peptides like Thymosin Alpha-1 use milligram doses (1.6 mg). GLP-1 agonists like semaglutide use milligram weekly doses (0.25–2.4 mg).\n\nInsulin syringes are marked in "units" (1 mL = 100 units). After reconstitution, each unit mark represents a specific amount of peptide based on your reconstitution ratio.',
    },
    {
      heading: 'Subcutaneous Injection Basics',
      content: 'Most peptides are administered via subcutaneous (SubQ) injection — into the fat layer just beneath the skin. This is not intramuscular injection.\n\n1. Clean the injection site with an alcohol swab\n2. Pinch a fold of skin (abdomen, thigh, or upper arm are common sites)\n3. Insert the needle at a 45–90° angle (90° for insulin needles)\n4. Depress the plunger slowly and steadily\n5. Hold for 5 seconds before withdrawing\n6. Do not rub the injection site afterward\n\nRotate injection sites to avoid lipodystrophy (tissue changes from repeated injections in the same spot).',
      subsections: [
        {
          heading: 'Best Injection Sites',
          content: 'Abdomen (around the navel, 2+ inches away from the belly button) — most popular, easy access, consistent absorption.\n\nThigh (outer/front area, middle third) — good alternative, easy to reach.\n\nUpper arm (back/outer area) — less common for self-injection due to angle.\n\nFor injury-specific peptides like BPC-157, injecting near (not into) the injury site may provide localized benefit, though systemic effects occur regardless of injection site.',
        },
      ],
    },
    {
      heading: 'Timing Considerations',
      content: 'Different peptides have different optimal timing:\n\nGrowth hormone secretagogues (GHRP-6, Ipamorelin, CJC-1295, MK-677): Best on an empty stomach. Food — especially carbohydrates and fats — blunts GH release. Wait 20–30 minutes after injection before eating. Common timing: morning (fasted), post-workout, and before bed.\n\nHealing peptides (BPC-157, TB-500): Timing is less critical. Consistency matters more than timing. Once or twice daily at roughly the same times.\n\nNootropic peptides (Semax, Selank): Morning and early afternoon for cognitive effects. Avoid evening dosing for stimulating peptides like Semax.\n\nMelatonin-related (Epitalon): Evening/before bed to align with pineal gland circadian activity.',
    },
    {
      heading: 'Research Doses vs. Community Protocols',
      content: 'There is often a disconnect between published research doses and what community protocols recommend.\n\nResearch doses are typically expressed as mg/kg (milligrams per kilogram of body weight) from animal studies. These must be converted using allometric scaling for human equivalence — a complex calculation that many community protocols oversimplify.\n\nCommunity protocols are based on a mix of allometric scaling, anecdotal experience, and consensus. They are not clinically validated.\n\nOn every peptide page on this site, we provide both research-based dosing (from published studies) and community-reported protocols, clearly labeled. Always understand which you are reading.',
    },
    {
      heading: 'Starting Low and Titrating',
      content: 'Regardless of the target dose, the general principle is: start low, assess tolerance, then increase.\n\nFor most peptides, begin at 50% of the target dose for the first 3–5 days. If well-tolerated, increase to the full dose. This allows you to identify any adverse reactions at a lower dose before committing to the full protocol.\n\nThis is especially important for GH secretagogues (water retention, joint pain can indicate the dose is too high) and GLP-1 agonists (nausea is dose-dependent and improved by slow titration).',
    },
  ],
  relatedPeptideSlugs: ['bpc-157', 'ipamorelin', 'semaglutide'],
  relatedGuideSlugs: ['reconstitution', 'peptide-safety'],
};

export const peptideSafetyGuide: Guide = {
  slug: 'peptide-safety',
  title: 'Peptide Safety Guide',
  description: 'Essential safety considerations for peptide use — sourcing, testing, medical supervision, contraindications, and risk assessment.',
  metaDescription: 'Peptide safety essentials: sourcing quality, third-party testing, medical supervision, contraindications, interaction risks, and when to stop.',
  sections: [
    {
      heading: 'The Regulatory Landscape',
      content: 'Most peptides discussed on this site fall into one of four categories:\n\n— FDA-approved drugs (Semaglutide, PT-141, Tesamorelin): Available by prescription. Manufactured under strict GMP conditions. Well-characterized safety profiles from clinical trials.\n\n— Approved in other countries (Semax, Selank, Thymosin Alpha-1): Prescription drugs in Russia, Asia, or Europe. Not FDA-approved in the US but have clinical use histories.\n\n— Clinical trial compounds (SS-31, Larazotide, Kisspeptin): In active clinical development. Some safety data from trials but not approved anywhere.\n\n— Research compounds (BPC-157, TB-500, Epitalon, most GHRPs): Not approved for human use in any country. Sold as "research chemicals." No regulatory oversight on manufacturing quality.',
    },
    {
      heading: 'Sourcing and Quality',
      content: 'For non-prescription peptides, quality varies enormously between suppliers. The primary risks are:\n\n— Underdosed or overdosed product (you receive less or more than the label states)\n— Contamination (bacterial endotoxins, heavy metals, residual solvents from synthesis)\n— Incorrect peptide (wrong sequence, truncated peptide, or degraded product)\n— Lack of sterility (particularly dangerous for injectable products)\n\nMinimum quality indicators to look for:\n— Third-party Certificate of Analysis (CoA) from an independent lab\n— HPLC purity testing (>98% purity for injectable peptides)\n— Endotoxin testing (LAL test)\n— Mass spectrometry confirmation of molecular identity\n\nIf a supplier cannot provide these, do not use their products.',
    },
    {
      heading: 'Medical Supervision',
      content: 'Peptide use should ideally occur under the guidance of a healthcare provider who understands peptide pharmacology. This is especially important for:\n\n— Peptides that affect hormonal systems (GH secretagogues, kisspeptin, semaglutide)\n— Peptides with known drug interactions\n— Individuals with pre-existing conditions (cancer history, diabetes, autoimmune disease)\n— Long-term protocols (>8 weeks)\n\nBaseline and follow-up blood work is recommended for any protocol involving GH secretagogues (monitor IGF-1, fasting glucose, HbA1c), metabolic peptides (fasting glucose, lipids), or immune-modulating peptides (CBC, inflammatory markers).',
    },
    {
      heading: 'Universal Contraindications',
      content: 'The following contraindications apply to most peptides:\n\n— Active cancer or history of cancer: Many peptides promote cell growth, angiogenesis, or inhibit apoptosis. These mechanisms could theoretically support tumor growth. This applies to BPC-157, TB-500, GH secretagogues, Epitalon, and any peptide that stimulates growth factors.\n\n— Pregnancy and breastfeeding: Insufficient safety data exists for almost all non-approved peptides during pregnancy. Do not use.\n\n— Known allergy to the specific peptide or any formulation component.\n\n— Children/adolescents: Growth and development could be disrupted. Not studied in pediatric populations.',
    },
    {
      heading: 'When to Stop',
      content: 'Discontinue use and consult a healthcare provider if you experience:\n\n— Persistent pain, swelling, or redness at injection sites (possible infection)\n— Unexplained swelling in extremities that worsens (severe water retention)\n— Vision changes (could indicate diabetic retinopathy progression with GH peptides, or maculopathy with PPS)\n— Severe or persistent headaches\n— Heart palpitations or chest pain\n— Signs of allergic reaction (hives, difficulty breathing, facial swelling)\n— Any symptom that is unusual, persistent, or worsening\n\nDo not "push through" adverse effects. The cost of stopping a cycle is near zero. The cost of ignoring a serious adverse reaction can be significant.',
    },
    {
      heading: 'Injection Hygiene',
      content: 'Infections from peptide injections are preventable with basic hygiene:\n\n— Always use a new, sterile syringe for each injection\n— Swab vial tops and injection sites with alcohol before each use\n— Never touch the needle with your fingers\n— Never share vials or syringes\n— Dispose of used syringes in a sharps container\n— If an injection site becomes red, warm, swollen, or develops discharge, see a doctor immediately — these are signs of infection',
    },
  ],
  relatedPeptideSlugs: ['bpc-157', 'semaglutide', 'ghk-cu'],
  relatedGuideSlugs: ['reconstitution', 'dosing-101'],
};

const guides: Guide[] = [reconstitutionGuide, dosing101Guide, peptideSafetyGuide];

export function getAllGuides(): Guide[] {
  return guides;
}

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}

export function getAllGuideSlugs(): string[] {
  return guides.map((g) => g.slug);
}
