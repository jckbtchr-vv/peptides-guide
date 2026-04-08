export type CategorySlug =
  | 'healing-recovery'
  | 'body-composition'
  | 'longevity'
  | 'cognitive'
  | 'sexual-health'
  | 'metabolic'
  | 'immune-gut'
  | 'skin-hair';

export interface Category {
  slug: CategorySlug;
  name: string;
  headline: string;
  description: string;
  metaDescription: string;
  longDescription: string;
  peptideSlugs: string[];
}

export interface Citation {
  title: string;
  authors: string;
  journal: string;
  year: number;
  doi?: string;
  url?: string;
  summary: string;
}

export interface ProtocolDetail {
  name: string;
  route: string;
  typicalDose: string;
  frequency: string;
  cycleDuration?: string;
  notes?: string;
}

export interface SideEffect {
  effect: string;
  frequency: 'common' | 'uncommon' | 'rare';
  details?: string;
}

export interface StorageInfo {
  lyophilized: string;
  reconstituted: string;
  reconstitutionSolvent: string;
  reconstitutionNotes?: string;
}

export interface Peptide {
  slug: string;
  name: string;
  fullName: string;
  aliases?: string[];
  sequence?: string;
  molecularWeight?: string;
  class?: string;
  halfLife?: string;
  administrationRoute?: string;

  categories: CategorySlug[];
  primaryCategory: CategorySlug;
  status: 'research' | 'clinical-trials' | 'approved' | 'experimental';
  regulatoryNote?: string;

  tldr: string;
  eli5: string;
  overview: string;
  mechanismOfAction: string;
  researchSummary: string;
  citations: Citation[];

  protocols: ProtocolDetail[];
  protocolDisclaimer: string;
  sideEffects: SideEffect[];
  contraindications: string[];
  interactions?: string[];

  storage: StorageInfo;

  relatedPeptideSlugs: string[];
  synergyNotes?: string;

  metaDescription: string;
  faqItems?: { question: string; answer: string }[];
}

export interface Guide {
  slug: string;
  title: string;
  description: string;
  metaDescription: string;
  sections: {
    heading: string;
    content: string;
    subsections?: {
      heading: string;
      content: string;
    }[];
  }[];
  relatedPeptideSlugs?: string[];
  relatedGuideSlugs?: string[];
}
