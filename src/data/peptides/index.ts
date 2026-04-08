import { Peptide } from '../types';

// Healing & Recovery
import { bpc157 } from './bpc-157';
import { tb500 } from './tb-500';
import { kpv } from './kpv';

// Body Composition
import { tesamorelin } from './tesamorelin';
import { cjc1295 } from './cjc-1295';
import { ipamorelin } from './ipamorelin';
import { aod9604 } from './aod-9604';
import { ghrp6 } from './ghrp-6';
import { ghrp2 } from './ghrp-2';
import { hexarelin } from './hexarelin';
import { mk677 } from './mk-677';

// Longevity
import { epitalon } from './epitalon';
import { ghkCu } from './ghk-cu';
import { foxo4dri } from './foxo4-dri';
import { ss31 } from './ss-31';
import { humanin } from './humanin';

// Cognitive
import { semax } from './semax';
import { selank } from './selank';
import { dihexa } from './dihexa';
import { pe2228 } from './pe-22-28';

// Sexual Health
import { pt141 } from './pt-141';
import { kisspeptin10 } from './kisspeptin-10';

// Metabolic
import { semaglutide } from './semaglutide';
import { tirzepatide } from './tirzepatide';
import { motsc } from './mots-c';
import { fiveAmino1mq } from './5-amino-1mq';

// Immune & Gut
import { thymosinAlpha1 } from './thymosin-alpha-1';
import { ll37 } from './ll-37';
import { larazotide } from './larazotide';

// Skin & Hair
import { ahkCu } from './ahk-cu';
import { matrixyl } from './matrixyl';
import { argireline } from './argireline';

const peptides: Peptide[] = [
  // Healing & Recovery
  bpc157,
  tb500,
  kpv,
  // Body Composition
  tesamorelin,
  cjc1295,
  ipamorelin,
  aod9604,
  ghrp6,
  ghrp2,
  hexarelin,
  mk677,
  // Longevity
  epitalon,
  ghkCu,
  foxo4dri,
  ss31,
  humanin,
  // Cognitive
  semax,
  selank,
  dihexa,
  pe2228,
  // Sexual Health
  pt141,
  kisspeptin10,
  // Metabolic
  semaglutide,
  tirzepatide,
  motsc,
  fiveAmino1mq,
  // Immune & Gut
  thymosinAlpha1,
  ll37,
  larazotide,
  // Skin & Hair
  ahkCu,
  matrixyl,
  argireline,
];

export function getAllPeptides(): Peptide[] {
  return peptides;
}

export function getPeptideBySlug(slug: string): Peptide | undefined {
  return peptides.find((p) => p.slug === slug);
}

export function getPeptidesByCategory(categorySlug: string): Peptide[] {
  return peptides.filter((p) => p.categories.includes(categorySlug as Peptide['primaryCategory']));
}

export function getAllPeptideSlugs(): string[] {
  return peptides.map((p) => p.slug);
}
