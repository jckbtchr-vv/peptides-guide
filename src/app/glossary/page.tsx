import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Peptide Glossary',
  description: 'Definitions of key peptide terms: reconstitution, subcutaneous, secretagogue, lyophilized, angiogenesis, and more. Plain-English explanations.',
};

const terms = [
  { term: 'Angiogenesis', definition: 'The formation of new blood vessels from pre-existing vessels. Many healing peptides (BPC-157, GHK-Cu) work partly by promoting angiogenesis at injury sites, improving blood supply for tissue repair.' },
  { term: 'Bacteriostatic Water (BAC Water)', definition: 'Sterile water containing 0.9% benzyl alcohol as a preservative. Used to reconstitute lyophilized peptides. The preservative inhibits bacterial growth, allowing the mixed solution to be used over multiple days (typically up to 30 days refrigerated).' },
  { term: 'Bioavailability', definition: 'The proportion of a substance that enters circulation and reaches its target site. Most peptides have low oral bioavailability (they get digested), which is why injection is the standard route. Exceptions include BPC-157 (gastric-juice stable) and oral GLP-1 formulations.' },
  { term: 'BDNF', definition: 'Brain-Derived Neurotrophic Factor. A protein critical for neuronal survival, synaptic plasticity, and memory formation. Several nootropic peptides (Semax, Selank, Dihexa) work by upregulating BDNF expression.' },
  { term: 'Cathelicidin', definition: 'A family of antimicrobial peptides produced by the innate immune system. LL-37 is the only human cathelicidin. Production is regulated by vitamin D levels.' },
  { term: 'Cytokine', definition: 'Small signaling proteins released by cells that regulate immune and inflammatory responses. Pro-inflammatory cytokines (IL-6, TNF-α) drive inflammation. Anti-inflammatory peptides work partly by suppressing these signals.' },
  { term: 'DAC (Drug Affinity Complex)', definition: 'A modification added to CJC-1295 that allows it to bind to albumin in the blood, extending its half-life from minutes to 6-8 days. CJC-1295 with DAC requires only weekly dosing but produces continuous rather than pulsatile GH elevation.' },
  { term: 'GH Secretagogue', definition: 'Any compound that stimulates the release of growth hormone from the pituitary gland. Includes GHRH analogs (CJC-1295, Tesamorelin), ghrelin mimetics (Ipamorelin, GHRP-6), and non-peptide agents (MK-677).' },
  { term: 'GHRH', definition: 'Growth Hormone-Releasing Hormone. A hypothalamic hormone that stimulates the pituitary to produce growth hormone. GHRH analogs (CJC-1295, Tesamorelin) mimic this signal.' },
  { term: 'GHS-R1a', definition: 'Growth Hormone Secretagogue Receptor type 1a. The ghrelin receptor. Targeted by GHRP peptides (Ipamorelin, GHRP-6, GHRP-2, Hexarelin) and MK-677 to stimulate GH release.' },
  { term: 'GLP-1', definition: 'Glucagon-Like Peptide-1. An incretin hormone released by the gut that stimulates insulin, suppresses glucagon, slows gastric emptying, and reduces appetite. Semaglutide and tirzepatide are GLP-1 receptor agonists.' },
  { term: 'Half-Life', definition: 'The time it takes for half of a substance to be eliminated from the body. Determines dosing frequency. Short half-life (BPC-157: ~2 hours) = multiple daily doses. Long half-life (semaglutide: ~7 days) = weekly dosing.' },
  { term: 'IGF-1', definition: 'Insulin-like Growth Factor 1. A hormone produced primarily by the liver in response to growth hormone. Mediates many of GH\'s effects on growth and metabolism. GH secretagogue protocols monitor IGF-1 levels.' },
  { term: 'Lyophilized', definition: 'Freeze-dried. Most research peptides are supplied as a lyophilized powder in a sealed vial. This form is stable for long-term storage. Must be reconstituted with bacteriostatic water before use.' },
  { term: 'Matrikine', definition: 'A fragment of extracellular matrix proteins that serves as a signaling molecule. Matrixyl (Pal-KTTKS) is a synthetic matrikine that signals fibroblasts to produce more collagen.' },
  { term: 'Melanocortin Receptors', definition: 'A family of receptors (MC1R through MC5R) involved in skin pigmentation, appetite, sexual function, and inflammation. PT-141 targets MC4R for sexual arousal. Melanotan II targets MC1R for tanning.' },
  { term: 'NF-κB', definition: 'Nuclear Factor kappa-light-chain-enhancer of activated B cells. A master transcription factor controlling inflammation. Several anti-inflammatory peptides (KPV, BPC-157) work by inhibiting NF-κB signaling.' },
  { term: 'Nootropic', definition: 'A substance that enhances cognitive function — memory, focus, learning, or creativity. Peptide nootropics include Semax, Selank, Dihexa, and PE-22-28.' },
  { term: 'Reconstitution', definition: 'The process of adding a liquid solvent (usually bacteriostatic water) to a lyophilized peptide powder to create an injectable solution. Must be done carefully to preserve peptide integrity.' },
  { term: 'Secretagogue', definition: 'A substance that promotes the secretion of another substance. Growth hormone secretagogues promote GH release. Includes both GHRH analogs and ghrelin mimetics.' },
  { term: 'Senolytic', definition: 'A compound that selectively destroys senescent (aged, non-dividing) cells. FOXO4-DRI is a senolytic peptide that disrupts the FOXO4-p53 interaction keeping senescent cells alive.' },
  { term: 'SNARE Complex', definition: 'A protein complex (SNAP-25, syntaxin, VAMP) that mediates neurotransmitter vesicle fusion at nerve terminals. Argireline reduces wrinkles by partially inhibiting this complex, reducing muscle contraction intensity.' },
  { term: 'Subcutaneous (SubQ)', definition: 'Injection into the fatty tissue layer just beneath the skin. The standard administration route for most peptides. Common injection sites: abdomen (most popular), thigh, upper arm.' },
  { term: 'Telomerase', definition: 'An enzyme that adds DNA repeats (TTAGGG) to the ends of chromosomes (telomeres), preventing the shortening that occurs with each cell division. Epitalon is researched for its ability to reactivate telomerase in somatic cells.' },
  { term: 'VEGF', definition: 'Vascular Endothelial Growth Factor. A signaling protein that promotes the growth of new blood vessels (angiogenesis). BPC-157 and GHK-Cu upregulate VEGF expression, which is a key mechanism in their healing properties.' },
  { term: 'YMYL', definition: 'Your Money Your Life. A Google quality category for content that could impact health, safety, or finances. Peptide content falls under YMYL, meaning Google applies stricter quality standards for ranking.' },
  { term: 'Zonulin', definition: 'A protein that regulates intestinal tight junction permeability. Elevated zonulin = increased gut permeability ("leaky gut"). Larazotide is a zonulin antagonist in clinical trials for celiac disease.' },
];

export default function GlossaryPage() {
  return (
    <>
      <article className="max-w-[var(--page-max)] mx-auto px-6 py-16">
        <header className="mb-16">
          <p className="text-caption mb-4">{terms.length} Terms</p>
          <h1 className="text-headline mb-6">Glossary</h1>
          <p className="text-body max-w-xl">
            Key terms used throughout this site, defined in plain English.
          </p>
        </header>

        <div className="max-w-2xl border-t border-[var(--border-subtle)]">
          {terms.map((item, i) => (
            <div key={i} className="py-5 border-b border-[var(--border-subtle)]">
              <dt className="text-[15px] font-semibold tracking-tight mb-1.5">{item.term}</dt>
              <dd className="text-[14px] text-[var(--text-secondary)] leading-relaxed">{item.definition}</dd>
            </div>
          ))}
        </div>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'DefinedTermSet',
            name: 'Peptide Glossary',
            description: 'Definitions of key peptide and pharmacology terms.',
            url: 'https://peptides-guide.com/glossary',
            hasDefinedTerm: terms.map((t) => ({
              '@type': 'DefinedTerm',
              name: t.term,
              description: t.definition,
            })),
          }),
        }}
      />
    </>
  );
}
