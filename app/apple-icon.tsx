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
          background: '#0F1733',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, -apple-system, sans-serif'
        }}
      >
        <div
          style={{
            padding: '16px 28px',
            background: '#C5A059',
            borderRadius: '999px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#0F1733',
            fontSize: 60,
            fontWeight: 900,
            letterSpacing: '-0.03em'
          }}
        >
          1160
        </div>
      </div>
    ),
    { ...size }
  );
}
