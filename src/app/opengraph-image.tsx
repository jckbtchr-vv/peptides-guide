import { ImageResponse } from 'next/og';

export const alt = 'Peptides Guide — The Complete Peptide Encyclopedia';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#000',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
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
              fontSize: '72px',
              fontWeight: 700,
              color: '#F5F5F7',
              lineHeight: '0.95',
              letterSpacing: '-0.04em',
              maxWidth: '900px',
            }}
          >
            The only peptide resource you&apos;ll ever need.
          </div>
          <div
            style={{
              fontSize: '24px',
              color: '#6E6E73',
              marginTop: '16px',
            }}
          >
            46 peptides · Research-sourced · AI-authored
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
