import { ImageResponse } from 'next/og';
import { categories, getCategoryBySlug } from '@/data/categories';
import { getPeptidesByCategory } from '@/data/peptides';

export const alt = 'Peptides Guide Category';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export async function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export default async function Image({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const cat = getCategoryBySlug(category);

  if (!cat) {
    return new ImageResponse(
      <div style={{ background: '#000', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 48 }}>
        Not Found
      </div>,
      { ...size }
    );
  }

  const peptides = getPeptidesByCategory(cat.slug);

  return new ImageResponse(
    (
      <div
        style={{
          background: '#000',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div
            style={{
              fontSize: '18px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase' as const,
              color: '#6E6E73',
            }}
          >
            Peptides Guide
          </div>
          <div
            style={{
              fontSize: '80px',
              fontWeight: 700,
              color: '#F5F5F7',
              lineHeight: '0.95',
              letterSpacing: '-0.04em',
            }}
          >
            {cat.name}
          </div>
          <div
            style={{
              fontSize: '24px',
              color: '#6E6E73',
              marginTop: '8px',
              lineHeight: '1.4',
              maxWidth: '800px',
            }}
          >
            {cat.headline}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            gap: '16px',
            flexWrap: 'wrap' as const,
            fontSize: '18px',
            color: '#A1A1A6',
          }}
        >
          {peptides.slice(0, 6).map((p) => (
            <span key={p.slug}>{p.name}</span>
          ))}
          {peptides.length > 6 && <span style={{ color: '#6E6E73' }}>+{peptides.length - 6} more</span>}
        </div>
      </div>
    ),
    { ...size }
  );
}
