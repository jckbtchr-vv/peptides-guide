import { ImageResponse } from 'next/og';
import { getAllGuides, getGuideBySlug } from '@/data/guides';

export const alt = 'Peptides Guide';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export async function generateStaticParams() {
  return getAllGuides().map((g) => ({ slug: g.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

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
            Peptides Guide · Guide
          </div>
          <div
            style={{
              fontSize: '72px',
              fontWeight: 700,
              color: '#F5F5F7',
              lineHeight: '0.95',
              letterSpacing: '-0.04em',
              maxWidth: '900px',
            }}
          >
            {guide?.title || 'Guide'}
          </div>
        </div>
        <div style={{ fontSize: '20px', color: '#6E6E73' }}>
          peptides-guide.com
        </div>
      </div>
    ),
    { ...size }
  );
}
