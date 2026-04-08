import { ImageResponse } from 'next/og';
import { getAllPeptides, getPeptideBySlug } from '@/data/peptides';
import { categories } from '@/data/categories';

export const alt = 'Peptide Guide';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export async function generateStaticParams() {
  return getAllPeptides().map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const peptide = getPeptideBySlug(slug);

  if (!peptide) {
    return new ImageResponse(
      <div style={{ background: '#000', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 48 }}>
        Not Found
      </div>,
      { ...size }
    );
  }

  const primaryCat = categories.find((c) => c.slug === peptide.primaryCategory);

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
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              fontSize: '18px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase' as const,
              color: '#6E6E73',
            }}
          >
            <span>Peptides Guide</span>
            <span style={{ color: '#333' }}>·</span>
            <span>{primaryCat?.name || ''}</span>
          </div>
          <div
            style={{
              fontSize: '96px',
              fontWeight: 700,
              color: '#F5F5F7',
              lineHeight: '0.92',
              letterSpacing: '-0.04em',
            }}
          >
            {peptide.name}
          </div>
          <div
            style={{
              fontSize: '28px',
              color: '#6E6E73',
              marginTop: '8px',
              lineHeight: '1.3',
            }}
          >
            {peptide.fullName}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '32px',
            fontSize: '16px',
            color: '#6E6E73',
            letterSpacing: '0.06em',
            textTransform: 'uppercase' as const,
          }}
        >
          <span style={{ color: '#F5F5F7', textTransform: 'capitalize' as const }}>{peptide.status.replace('-', ' ')}</span>
          <span style={{ color: '#333' }}>·</span>
          <span>{peptide.citations.length} citations</span>
          <span style={{ color: '#333' }}>·</span>
          <span>Research-sourced</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
