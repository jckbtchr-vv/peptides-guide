import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
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
          borderRadius: '36px',
          fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
          fontSize: '80px',
          fontWeight: 700,
          color: '#F5F5F7',
          letterSpacing: '-0.03em',
        }}
      >
        PG
      </div>
    ),
    { ...size }
  );
}
