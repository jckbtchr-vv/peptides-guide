import type { MetadataRoute } from 'next';
import { categories } from '@/data/categories';
import { getAllPeptides } from '@/data/peptides';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://peptides-guide.com';

  const categoryUrls = categories.map((c) => ({
    url: `${baseUrl}/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  const peptideUrls = getAllPeptides().map((p) => ({
    url: `${baseUrl}/peptides/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    ...categoryUrls,
    ...peptideUrls,
    {
      url: `${baseUrl}/guides`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];
}
