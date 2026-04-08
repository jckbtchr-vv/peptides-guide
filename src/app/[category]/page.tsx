import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { categories, getCategoryBySlug } from '@/data/categories';
import { getPeptidesByCategory } from '@/data/peptides';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';
import { PeptideCard } from '@/components/shared/PeptideCard';

export async function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) return {};

  return {
    title: cat.name,
    description: cat.metaDescription,
    openGraph: {
      title: `${cat.name} Peptides`,
      description: cat.metaDescription,
      url: `https://peptides-guide.com/${cat.slug}`,
    },
    alternates: {
      canonical: `https://peptides-guide.com/${cat.slug}`,
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) notFound();

  const peptides = getPeptidesByCategory(cat.slug);

  return (
    <article className="max-w-[var(--page-max)] mx-auto px-6">
      <div className="pt-12">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: cat.name },
          ]}
        />
      </div>

      {/* Hero */}
      <header className="pb-16 border-b border-[var(--border-subtle)]">
        <p className="text-caption mb-4">{cat.peptideSlugs.length} Peptides</p>
        <h1 className="text-headline mb-6">{cat.name}</h1>
        <p className="text-body max-w-xl">{cat.description}</p>
      </header>

      {/* Category Overview */}
      <section className="py-16 border-b border-[var(--border-subtle)]">
        <div className="prose-content max-w-2xl">
          {cat.longDescription.split('\n\n').map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      {/* Peptide List */}
      <section className="py-16">
        {peptides.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {peptides.map((p) => (
              <PeptideCard key={p.slug} peptide={p} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <p className="text-body">Peptide profiles for this category are being added. Check back soon.</p>
          </div>
        )}
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: `${cat.name} Peptides`,
            description: cat.metaDescription,
            url: `https://peptides-guide.com/${cat.slug}`,
            isPartOf: {
              '@type': 'WebSite',
              name: 'Peptides Guide',
              url: 'https://peptides-guide.com',
            },
          }),
        }}
      />
    </article>
  );
}
