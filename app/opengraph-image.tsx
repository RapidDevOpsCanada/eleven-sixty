import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Eleven Sixty Bar & Grill — London & St Thomas';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          background:
            'linear-gradient(135deg, #0A1128 0%, #07090f 55%, #1a1208 100%)',
          color: '#ece6d6',
          fontFamily: 'sans-serif'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div
            style={{
              width: '52px',
              height: '52px',
              borderRadius: '999px',
              background: '#C5A059',
              color: '#0A1128',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '22px',
              fontWeight: 900
            }}
          >
            11
          </div>
          <div
            style={{
              fontSize: '28px',
              fontWeight: 800,
              letterSpacing: '0.04em',
              color: '#ffffff'
            }}
          >
            ELEVEN <span style={{ color: '#D9AE5E' }}>SIXTY</span>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div
            style={{
              fontSize: '28px',
              textTransform: 'uppercase',
              letterSpacing: '0.32em',
              color: '#D9AE5E',
              fontWeight: 700
            }}
          >
            Premier Bar &amp; Grill
          </div>
          <div
            style={{
              fontSize: '120px',
              fontWeight: 800,
              lineHeight: 0.95,
              color: '#ffffff',
              letterSpacing: '-0.02em'
            }}
          >
            Sizzling Steaks
            <br />
            <span style={{ fontStyle: 'italic', color: '#D9AE5E', fontWeight: 500 }}>
              &amp; ribs.
            </span>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            fontSize: '22px',
            color: '#cfc8b6'
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <div style={{ color: '#D9AE5E', fontSize: '14px', letterSpacing: '0.3em' }}>LONDON</div>
            <div>1160 Wellington Rd</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', alignItems: 'flex-end' }}>
            <div style={{ color: '#D9AE5E', fontSize: '14px', letterSpacing: '0.3em' }}>ST THOMAS</div>
            <div>1093 Talbot St</div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
