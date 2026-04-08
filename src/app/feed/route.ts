import { getAllPeptides } from '@/data/peptides';
import { getAllGuides } from '@/data/guides';

export async function GET() {
  const peptides = getAllPeptides();
  const guides = getAllGuides();
  const baseUrl = 'https://peptides-guide.com';

  const items = [
    ...peptides.map((p) => ({
      title: `${p.name} — ${p.fullName}`,
      link: `${baseUrl}/peptides/${p.slug}`,
      description: p.metaDescription,
      category: p.primaryCategory,
    })),
    ...guides.map((g) => ({
      title: g.title,
      link: `${baseUrl}/guides/${g.slug}`,
      description: g.metaDescription,
      category: 'guide',
    })),
  ];

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Peptides Guide</title>
    <link>${baseUrl}</link>
    <description>Comprehensive, research-backed peptide encyclopedia. 46 peptides with mechanisms, clinical evidence, protocols, and safety profiles.</description>
    <language>en-us</language>
    <atom:link href="${baseUrl}/feed" rel="self" type="application/rss+xml"/>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items
  .map(
    (item) => `    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${item.link}</link>
      <guid>${item.link}</guid>
      <description>${escapeXml(item.description)}</description>
      <category>${item.category}</category>
    </item>`
  )
  .join('\n')}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
