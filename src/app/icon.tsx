import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#000',
          borderRadius: '6px',
          fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
          fontSize: '16px',
          fontWeight: 700,
          color: '#F5F5F7',
          letterSpacing: '-0.02em',
        }}
      >
        PG
      </div>
    ),
    { ...size }
  );
}
