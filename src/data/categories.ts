import { Category } from './types';

export const categories: Category[] = [
  {
    slug: 'healing-recovery',
    name: 'Healing & Recovery',
    headline: 'Accelerate tissue repair and reduce inflammation.',
    description:
      'Peptides that support wound healing, tendon and ligament repair, gut lining restoration, and systemic inflammation reduction. These are among the most widely researched peptides in regenerative medicine.',
    metaDescription:
      'Research-backed healing peptides including BPC-157, TB-500, and KPV. Mechanisms, clinical evidence, protocols, and safety profiles for tissue repair and recovery.',
    peptideSlugs: ['bpc-157', 'tb-500', 'thymosin-beta-4', 'kpv', 'ghk-cu', 'pentosan-polysulfate'],
  },
  {
    slug: 'body-composition',
    name: 'Body Composition',
    headline: 'Optimize growth hormone and metabolic pathways.',
    description:
      'Growth hormone secretagogues and related peptides that influence body composition through GH release, fat metabolism, and lean mass preservation. Includes GHRH analogs, ghrelin mimetics, and targeted fat-loss peptides.',
    metaDescription:
      'Growth hormone peptides for body composition: Tesamorelin, CJC-1295, Ipamorelin, AOD-9604, and more. Research, dosing protocols, and evidence-based guidance.',
    peptideSlugs: [
      'tesamorelin', 'cjc-1295', 'ipamorelin', 'cjc-1295-ipamorelin',
      'aod-9604', 'ghrp-6', 'ghrp-2', 'hexarelin', 'mk-677', 'cjc-1295-dac',
    ],
  },
  {
    slug: 'longevity',
    name: 'Longevity & Anti-Aging',
    headline: 'Target the biological mechanisms of aging.',
    description:
      'Peptides researched for their effects on telomere maintenance, senescent cell clearance, mitochondrial function, and systemic markers of aging. These represent the cutting edge of longevity research.',
    metaDescription:
      'Anti-aging peptides: Epitalon, GHK-Cu, FOXO4-DRI, SS-31, and more. Telomerase activation, senolytic mechanisms, and mitochondrial support backed by research.',
    peptideSlugs: ['epitalon', 'ghk-cu', 'foxo4-dri', 'humanin', 'mots-c', 'ss-31'],
  },
  {
    slug: 'cognitive',
    name: 'Cognitive Enhancement',
    headline: 'Support neuroprotection and cognitive function.',
    description:
      'Neuropeptides and nootropic peptides that modulate BDNF, NGF, and other neurotrophic pathways. Researched for cognitive enhancement, neuroprotection, and anxiolytic effects.',
    metaDescription:
      'Cognitive peptides: Semax, Selank, Dihexa, and PE-22-28. Nootropic mechanisms, neuroprotection research, and evidence-based protocols for brain health.',
    peptideSlugs: ['semax', 'selank', 'dihexa', 'pe-22-28', 'cerebrolysin', 'dsip'],
  },
  {
    slug: 'sexual-health',
    name: 'Sexual Health',
    headline: 'Melanocortin and hormonal pathway modulation.',
    description:
      'Peptides that act on melanocortin receptors and hypothalamic pathways to influence sexual arousal, desire, and reproductive hormone signaling.',
    metaDescription:
      'Sexual health peptides: PT-141 (Bremelanotide) and Kisspeptin. Mechanisms, clinical trial data, FDA status, protocols, and safety information.',
    peptideSlugs: ['pt-141', 'kisspeptin-10'],
  },
  {
    slug: 'metabolic',
    name: 'Metabolic',
    headline: 'GLP-1 agonists and metabolic regulators.',
    description:
      'Peptides and peptide-adjacent compounds that influence glucose metabolism, appetite regulation, insulin sensitivity, and energy expenditure. Includes the GLP-1 receptor agonist class.',
    metaDescription:
      'Metabolic peptides: Semaglutide, Tirzepatide, MOTS-c, and 5-Amino-1MQ. GLP-1 mechanisms, weight management research, and metabolic optimization.',
    peptideSlugs: ['semaglutide', 'tirzepatide', 'retatrutide', 'mots-c', '5-amino-1mq', 'aod-9604', 'orforglipron'],
  },
  {
    slug: 'immune-gut',
    name: 'Immune & Gut Health',
    headline: 'Modulate immune response and restore gut integrity.',
    description:
      'Peptides that support immune regulation, antimicrobial defense, and intestinal barrier function. Particularly relevant for autoimmune conditions, gut permeability, and chronic infection.',
    metaDescription:
      'Immune and gut health peptides: Thymosin Alpha-1, LL-37, BPC-157, KPV, and Larazotide. Immune modulation, antimicrobial action, and gut barrier research.',
    peptideSlugs: ['thymosin-alpha-1', 'll-37', 'bpc-157', 'kpv', 'larazotide', 'suramin', 'thymalin'],
  },
  {
    slug: 'skin-hair',
    name: 'Skin & Hair',
    headline: 'Collagen synthesis, copper signaling, and follicle activation.',
    description:
      'Peptides used in dermatological research for their effects on collagen production, skin elasticity, wound healing, hair follicle stimulation, and anti-wrinkle mechanisms.',
    metaDescription:
      'Skin and hair peptides: GHK-Cu, AHK-Cu, Matrixyl, and Argireline. Collagen synthesis, copper peptide research, and dermatological applications.',
    peptideSlugs: ['ghk-cu', 'ahk-cu', 'matrixyl', 'argireline'],
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getAllCategorySlugs(): string[] {
  return categories.map((c) => c.slug);
}
