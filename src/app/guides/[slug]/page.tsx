import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllGuides, getGuideBySlug } from '@/data/guides';
import { getPeptideBySlug } from '@/data/peptides';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';
import { Disclaimer } from '@/components/shared/Disclaimer';

export async function generateStaticParams() {
  return getAllGuides().map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};

  return {
    title: guide.title,
    description: guide.metaDescription,
    openGraph: {
      title: guide.title,
      description: guide.metaDescription,
      url: `https://peptides-guide.com/guides/${guide.slug}`,
      type: 'article',
    },
    alternates: {
      canonical: `https://peptides-guide.com/guides/${guide.slug}`,
    },
  };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  const relatedPeptides = (guide.relatedPeptideSlugs || [])
    .map((s) => getPeptideBySlug(s))
    .filter(Boolean);

  const relatedGuides = (guide.relatedGuideSlugs || [])
    .map((s) => getGuideBySlug(s))
    .filter(Boolean);

  return (
    <>
      <article className="max-w-[var(--page-max)] mx-auto px-6">
        <div className="pt-12">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Guides', href: '/guides' },
              { label: guide.title },
            ]}
          />
        </div>

        <header className="pb-12 border-b border-[var(--border-subtle)]">
          <p className="text-caption mb-4">Guide</p>
          <h1 className="text-headline mb-4">{guide.title}</h1>
          <p className="text-body max-w-xl">{guide.description}</p>
        </header>

        <div className="lg:grid lg:grid-cols-[1fr_200px] lg:gap-20 pt-12 pb-24">
          <div className="min-w-0">
            {guide.sections.map((section, i) => (
              <section key={i} className="mb-16">
                <h2
                  id={section.heading.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
                  className="text-subhead mb-6 scroll-mt-20"
                >
                  {section.heading}
                </h2>
                <div className="prose-content">
                  {section.content.split('\n\n').map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>

                {section.subsections &&
                  section.subsections.map((sub, k) => (
                    <div key={k} className="mt-8 ml-0">
                      <h3 className="text-[16px] font-semibold mb-4">{sub.heading}</h3>
                      <div className="prose-content">
                        {sub.content.split('\n\n').map((p, l) => (
                          <p key={l}>{p}</p>
                        ))}
                      </div>
                    </div>
                  ))}
              </section>
            ))}

            {/* Related peptides */}
            {relatedPeptides.length > 0 && (
              <section className="mb-16">
                <h2 className="text-subhead mb-6">Related Peptides</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-px rounded-[var(--radius-md)] overflow-hidden">
                  {relatedPeptides.map((p) => (
                    <Link
                      key={p!.slug}
                      href={`/peptides/${p!.slug}`}
                      className="group bg-[var(--bg-surface)] p-5 hover:bg-[var(--bg-surface-hover)] transition-colors"
                    >
                      <h3 className="text-[15px] font-semibold tracking-tight">{p!.name}</h3>
                      <p className="text-[12px] text-[var(--text-tertiary)] mt-1">{p!.fullName}</p>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* Related guides */}
            {relatedGuides.length > 0 && (
              <section className="mb-16">
                <h2 className="text-subhead mb-6">Related Guides</h2>
                <div className="space-y-px rounded-[var(--radius-md)] overflow-hidden">
                  {relatedGuides.map((g) => (
                    <Link
                      key={g!.slug}
                      href={`/guides/${g!.slug}`}
                      className="group block bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-hover)] transition-colors p-5"
                    >
                      <h3 className="text-[15px] font-semibold tracking-tight">{g!.title}</h3>
                      <p className="text-[13px] text-[var(--text-tertiary)] mt-1">{g!.description}</p>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            <Disclaimer />
          </div>

          {/* TOC sidebar */}
          <aside className="hidden lg:block">
            <nav className="sticky top-20">
              <p className="text-caption mb-4">Sections</p>
              <ul className="space-y-2.5">
                {guide.sections.map((section, i) => (
                  <li key={i}>
                    <a
                      href={`#${section.heading.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                      className="text-[13px] text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors"
                    >
                      {section.heading}
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
            '@type': 'Article',
            headline: guide.title,
            description: guide.metaDescription,
            url: `https://peptides-guide.com/guides/${guide.slug}`,
            isPartOf: { '@type': 'WebSite', name: 'Peptides Guide', url: 'https://peptides-guide.com' },
          }),
        }}
      />
    </>
  );
}
