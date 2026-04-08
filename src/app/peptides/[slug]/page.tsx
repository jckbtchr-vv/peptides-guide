import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllPeptides, getPeptideBySlug } from '@/data/peptides';
import { categories } from '@/data/categories';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';
import { Disclaimer } from '@/components/shared/Disclaimer';
import { Accordion } from '@/components/ui/Accordion';

export async function generateStaticParams() {
  return getAllPeptides().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const peptide = getPeptideBySlug(slug);
  if (!peptide) return {};

  return {
    title: `${peptide.name} — Mechanism, Research & Protocols`,
    description: peptide.metaDescription,
    openGraph: {
      title: `${peptide.name} — Complete Guide`,
      description: peptide.metaDescription,
      url: `https://peptides-guide.com/peptides/${peptide.slug}`,
      type: 'article',
    },
    alternates: {
      canonical: `https://peptides-guide.com/peptides/${peptide.slug}`,
    },
  };
}

const TOC_ITEMS = [
  { id: 'quick-facts', label: 'Quick Facts' },
  { id: 'overview', label: 'Overview' },
  { id: 'mechanism', label: 'Mechanism of Action' },
  { id: 'research', label: 'Research' },
  { id: 'protocols', label: 'Protocols' },
  { id: 'safety', label: 'Safety' },
  { id: 'storage', label: 'Storage' },
  { id: 'related', label: 'Related Peptides' },
  { id: 'faq', label: 'FAQ' },
];

function SectionHeading({ children, id }: { children: React.ReactNode; id: string }) {
  return (
    <h2 id={id} className="text-subhead mb-6 scroll-mt-20">
      {children}
    </h2>
  );
}

function DataCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-[var(--radius-md)] bg-[var(--bg-surface)] p-6 ${className}`}>
      {children}
    </div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.08em] rounded-md bg-[var(--bg-surface)] text-[var(--text-tertiary)] border border-[var(--border-subtle)]">
      {children}
    </span>
  );
}

export default async function PeptidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const peptide = getPeptideBySlug(slug);
  if (!peptide) notFound();

  const primaryCat = categories.find((c) => c.slug === peptide.primaryCategory);
  const relatedPeptides = peptide.relatedPeptideSlugs
    .map((s) => getPeptideBySlug(s))
    .filter(Boolean);

  return (
    <>
      <article className="max-w-[var(--page-max)] mx-auto px-6">
        <div className="pt-12">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: primaryCat?.name || '', href: `/${peptide.primaryCategory}` },
              { label: peptide.name },
            ]}
          />
        </div>

        {/* Hero */}
        <header className="pb-12 border-b border-[var(--border-subtle)]">
          <div className="flex flex-wrap items-center gap-1.5 mb-5">
            <Badge>{peptide.status.replace('-', ' ')}</Badge>
            {peptide.categories.map((catSlug) => {
              const cat = categories.find((c) => c.slug === catSlug);
              return cat ? (
                <Link key={catSlug} href={`/${catSlug}`}>
                  <Badge>{cat.name}</Badge>
                </Link>
              ) : null;
            })}
          </div>

          <h1
            className="mb-3"
            style={{
              fontSize: 'clamp(36px, 6vw, 64px)',
              lineHeight: '0.95',
              letterSpacing: '-0.04em',
              fontWeight: 700,
            }}
          >
            {peptide.name}
          </h1>
          <p className="text-[17px] text-[var(--text-tertiary)]">{peptide.fullName}</p>
          {peptide.aliases && peptide.aliases.length > 0 && (
            <p className="text-[13px] text-[var(--text-tertiary)] mt-1.5">
              Also known as: {peptide.aliases.join(', ')}
            </p>
          )}
          <p className="text-[11px] text-[var(--text-tertiary)] mt-4 uppercase tracking-[0.08em]">
            Prompted by Jack Butcher (Visualize Value) &middot; AI-authored by Claude &middot; Research-sourced
          </p>
        </header>

        <div className="lg:grid lg:grid-cols-[1fr_200px] lg:gap-20 pt-12 pb-24">
          {/* Main content */}
          <div className="min-w-0">

            {/* Quick Facts */}
            <section className="mb-20">
              <SectionHeading id="quick-facts">Quick Facts</SectionHeading>
              <DataCard>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-5 gap-x-6">
                  {peptide.class && (
                    <div>
                      <dt className="text-caption mb-1.5">Class</dt>
                      <dd className="text-[14px] font-medium leading-snug">{peptide.class}</dd>
                    </div>
                  )}
                  {peptide.molecularWeight && (
                    <div>
                      <dt className="text-caption mb-1.5">Molecular Weight</dt>
                      <dd className="text-[14px] font-medium">{peptide.molecularWeight}</dd>
                    </div>
                  )}
                  {peptide.halfLife && (
                    <div>
                      <dt className="text-caption mb-1.5">Half-Life</dt>
                      <dd className="text-[14px] font-medium">{peptide.halfLife}</dd>
                    </div>
                  )}
                  {peptide.administrationRoute && (
                    <div>
                      <dt className="text-caption mb-1.5">Administration</dt>
                      <dd className="text-[14px] font-medium">{peptide.administrationRoute}</dd>
                    </div>
                  )}
                  <div>
                    <dt className="text-caption mb-1.5">Status</dt>
                    <dd className="text-[14px] font-medium capitalize">{peptide.status.replace('-', ' ')}</dd>
                  </div>
                  {peptide.sequence && (
                    <div className="col-span-2 sm:col-span-3">
                      <dt className="text-caption mb-1.5">Sequence</dt>
                      <dd className="text-[13px] font-mono text-[var(--text-secondary)] break-all leading-relaxed">{peptide.sequence}</dd>
                    </div>
                  )}
                </div>
              </DataCard>
              {peptide.regulatoryNote && (
                <p className="text-[12px] text-[var(--text-tertiary)] mt-3">{peptide.regulatoryNote}</p>
              )}
            </section>

            {/* Overview */}
            <section className="mb-20">
              <SectionHeading id="overview">Overview</SectionHeading>
              <div className="prose-content">
                {peptide.overview.split('\n\n').map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </section>

            {/* Mechanism */}
            <section className="mb-20">
              <SectionHeading id="mechanism">Mechanism of Action</SectionHeading>
              <div className="prose-content">
                {peptide.mechanismOfAction.split('\n\n').map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </section>

            {/* Research */}
            <section className="mb-20">
              <SectionHeading id="research">Research Summary</SectionHeading>
              <div className="prose-content mb-10">
                {peptide.researchSummary.split('\n\n').map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              {peptide.citations.length > 0 && (
                <div>
                  <h3 className="text-caption mb-4">Key References</h3>
                  <div className="space-y-px rounded-[var(--radius-md)] overflow-hidden">
                    {peptide.citations.map((cite, i) => (
                      <div key={i} className="bg-[var(--bg-surface)] p-5">
                        <p className="text-[14px] font-medium leading-snug mb-1.5">{cite.title}</p>
                        <p className="text-[12px] text-[var(--text-tertiary)] mb-2.5">
                          {cite.authors} &middot; <em>{cite.journal}</em> ({cite.year})
                          {cite.doi && (
                            <span className="font-mono text-[11px]"> &middot; {cite.doi}</span>
                          )}
                        </p>
                        <p className="text-[13px] leading-relaxed text-[var(--text-secondary)]">{cite.summary}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </section>

            {/* Protocols */}
            <section className="mb-20">
              <SectionHeading id="protocols">Protocols</SectionHeading>
              <Disclaimer text={peptide.protocolDisclaimer} />

              <div className="mt-8 space-y-px rounded-[var(--radius-md)] overflow-hidden">
                {peptide.protocols.map((protocol, i) => (
                  <div key={i} className="bg-[var(--bg-surface)] p-6">
                    <h3 className="text-[15px] font-semibold mb-5">{protocol.name}</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-4 gap-x-6">
                      <div>
                        <dt className="text-caption mb-1.5">Route</dt>
                        <dd className="text-[14px]">{protocol.route}</dd>
                      </div>
                      <div>
                        <dt className="text-caption mb-1.5">Dose</dt>
                        <dd className="text-[14px]">{protocol.typicalDose}</dd>
                      </div>
                      <div>
                        <dt className="text-caption mb-1.5">Frequency</dt>
                        <dd className="text-[14px]">{protocol.frequency}</dd>
                      </div>
                      {protocol.cycleDuration && (
                        <div>
                          <dt className="text-caption mb-1.5">Cycle</dt>
                          <dd className="text-[14px]">{protocol.cycleDuration}</dd>
                        </div>
                      )}
                    </div>
                    {protocol.notes && (
                      <p className="text-[13px] text-[var(--text-secondary)] mt-5 pt-5 border-t border-[var(--border-subtle)] leading-relaxed">
                        {protocol.notes}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Safety */}
            <section className="mb-20">
              <SectionHeading id="safety">Side Effects &amp; Safety</SectionHeading>

              {/* Side Effects — proper table layout */}
              <div className="rounded-[var(--radius-md)] overflow-hidden mb-10">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[var(--bg-surface)]">
                      <th className="text-caption text-left py-3 px-5 w-[100px]">Frequency</th>
                      <th className="text-caption text-left py-3 px-5">Effect</th>
                    </tr>
                  </thead>
                  <tbody>
                    {peptide.sideEffects.map((se, i) => (
                      <tr key={i} className="border-t border-[var(--border-subtle)]">
                        <td className="py-3.5 px-5 align-top">
                          <span
                            className={`inline-flex px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.06em] rounded-md ${
                              se.frequency === 'common'
                                ? 'bg-[var(--bg-surface)] text-[var(--text-secondary)]'
                                : se.frequency === 'uncommon'
                                ? 'bg-[var(--bg-surface)] text-[var(--text-tertiary)]'
                                : 'bg-[var(--bg-surface)] text-[var(--text-tertiary)]'
                            }`}
                          >
                            {se.frequency}
                          </span>
                        </td>
                        <td className="py-3.5 px-5 align-top">
                          <p className="text-[14px] font-medium">{se.effect}</p>
                          {se.details && (
                            <p className="text-[13px] text-[var(--text-secondary)] mt-0.5 leading-relaxed">{se.details}</p>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Contraindications */}
              {peptide.contraindications.length > 0 && (
                <div className="mb-10">
                  <h3 className="text-caption mb-4">Contraindications</h3>
                  <ul className="space-y-3">
                    {peptide.contraindications.map((c, i) => (
                      <li key={i} className="flex items-start gap-3 text-[14px] text-[var(--text-secondary)] leading-relaxed">
                        <span className="text-[var(--text-tertiary)] shrink-0 select-none">&mdash;</span>
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Interactions */}
              {peptide.interactions && peptide.interactions.length > 0 && (
                <div>
                  <h3 className="text-caption mb-4">Interactions</h3>
                  <ul className="space-y-3">
                    {peptide.interactions.map((interaction, i) => (
                      <li key={i} className="flex items-start gap-3 text-[14px] text-[var(--text-secondary)] leading-relaxed">
                        <span className="text-[var(--text-tertiary)] shrink-0 select-none">&mdash;</span>
                        {interaction}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </section>

            {/* Storage */}
            <section className="mb-20">
              <SectionHeading id="storage">Reconstitution &amp; Storage</SectionHeading>
              <DataCard>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-5 gap-x-6">
                  <div>
                    <dt className="text-caption mb-1.5">Lyophilized</dt>
                    <dd className="text-[14px] leading-relaxed">{peptide.storage.lyophilized}</dd>
                  </div>
                  <div>
                    <dt className="text-caption mb-1.5">Reconstituted</dt>
                    <dd className="text-[14px] leading-relaxed">{peptide.storage.reconstituted}</dd>
                  </div>
                  <div>
                    <dt className="text-caption mb-1.5">Solvent</dt>
                    <dd className="text-[14px] leading-relaxed">{peptide.storage.reconstitutionSolvent}</dd>
                  </div>
                  {peptide.storage.reconstitutionNotes && (
                    <div className="sm:col-span-3 pt-4 border-t border-[var(--border-subtle)]">
                      <dt className="text-caption mb-1.5">Notes</dt>
                      <dd className="text-[13px] text-[var(--text-secondary)] leading-relaxed">{peptide.storage.reconstitutionNotes}</dd>
                    </div>
                  )}
                </div>
              </DataCard>
            </section>

            {/* Related */}
            {relatedPeptides.length > 0 && (
              <section className="mb-20">
                <SectionHeading id="related">Related Peptides</SectionHeading>
                {peptide.synergyNotes && (
                  <p className="text-[14px] text-[var(--text-secondary)] mb-6 leading-relaxed">{peptide.synergyNotes}</p>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-px rounded-[var(--radius-md)] overflow-hidden">
                  {relatedPeptides.map((rp) => (
                    <Link
                      key={rp!.slug}
                      href={`/peptides/${rp!.slug}`}
                      className="group bg-[var(--bg-surface)] p-5 hover:bg-[var(--bg-surface-hover)] transition-colors"
                    >
                      <h3 className="text-[15px] font-semibold tracking-tight group-hover:text-[var(--text-primary)] transition-colors">
                        {rp!.name}
                      </h3>
                      <p className="text-[12px] text-[var(--text-tertiary)] mt-1">{rp!.fullName}</p>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* FAQ */}
            {peptide.faqItems && peptide.faqItems.length > 0 && (
              <section className="mb-20">
                <SectionHeading id="faq">Frequently Asked Questions</SectionHeading>
                <Accordion items={peptide.faqItems} />
              </section>
            )}

            <Disclaimer />
          </div>

          {/* Sidebar TOC */}
          <aside className="hidden lg:block">
            <nav className="sticky top-20">
              <p className="text-caption mb-4">On this page</p>
              <ul className="space-y-2.5">
                {TOC_ITEMS.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="text-[13px] text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        </div>
      </article>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'MedicalWebPage',
            name: peptide.name,
            headline: `${peptide.name} — Mechanism, Research & Protocols`,
            description: peptide.metaDescription,
            url: `https://peptides-guide.com/peptides/${peptide.slug}`,
            about: {
              '@type': 'Drug',
              name: peptide.name,
              alternateName: peptide.aliases,
              description: peptide.metaDescription,
            },
            audience: { '@type': 'MedicalAudience', audienceType: 'Researcher' },
            isPartOf: { '@type': 'WebSite', name: 'Peptides Guide', url: 'https://peptides-guide.com' },
          }),
        }}
      />
      {peptide.faqItems && peptide.faqItems.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: peptide.faqItems.map((faq) => ({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: { '@type': 'Answer', text: faq.answer },
              })),
            }),
          }}
        />
      )}
    </>
  );
}
