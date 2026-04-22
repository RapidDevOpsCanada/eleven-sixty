import { ImageResponse } from 'next/og';

export const size = { width: 64, height: 64 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#C5A059',
          borderRadius: '999px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#0F1733',
          fontSize: 22,
          fontWeight: 900,
          letterSpacing: '-0.03em',
          fontFamily: 'system-ui, -apple-system, sans-serif'
        }}
      >
        1160
      </div>
    ),
    { ...size }
  );
}
