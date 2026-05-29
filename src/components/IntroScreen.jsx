import React, { useEffect, useState } from 'react';

// Timing (seconds):
//   0.2  → stroke starts drawing
//   2.4  → stroke complete
//   2.7  → fill fades in (0.7s)
//   3.4  → tagline appears (0.5s)
//   4.3  → overlay begins fading out (1.3s)
//   5.6  → component unmounts

const IntroScreen = ({ onComplete }) => {
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Lock scroll while intro plays
    document.body.style.overflow = 'hidden';

    const t = setTimeout(() => {
      setDone(true);
      document.body.style.overflow = '';
      onComplete();
    }, 5700);

    return () => {
      clearTimeout(t);
      document.body.style.overflow = '';
    };
  }, [onComplete]);

  if (done) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        background: '#040A14',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        // Fade the overlay out starting at 4.3s
        animation: 'exitIntro 1.3s 4.3s ease forwards',
        pointerEvents: 'all',
      }}
    >
      {/* Name — stroke draws in, then fills white */}
      <svg
        viewBox="0 0 920 170"
        style={{ width: 'min(880px, 90vw)', overflow: 'visible' }}
        aria-label="Rooby Dartiny"
      >
        <text
          x="460"
          y="130"
          textAnchor="middle"
          fontFamily="Inter, -apple-system, BlinkMacSystemFont, sans-serif"
          fontSize="90"
          fontWeight="300"
          letterSpacing="-3"
          fill="transparent"
          stroke="rgba(255,255,255,0.82)"
          strokeWidth="0.65"
          strokeLinejoin="round"
          style={{
            strokeDasharray: '8000 8000',
            strokeDashoffset: 8000,
            // 1. Stroke draws: 2.2s starting at 0.2s
            // 2. Fill washes in: 0.7s starting at 2.7s
            animation:
              'drawStroke 2.2s 0.2s cubic-bezier(0.4, 0, 0.2, 1) forwards,' +
              'fillText 0.7s 2.7s ease forwards',
          }}
        >
          Rooby Dartiny.
        </text>
      </svg>

      {/* Tagline — appears after fill */}
      <div
        style={{
          marginTop: '20px',
          fontFamily: "'JetBrains Mono', 'Courier New', monospace",
          fontSize: '11px',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.28)',
          opacity: 0,
          animation: 'fadeInUp 0.6s 3.4s ease forwards',
        }}
      >
        CS Student &nbsp;·&nbsp; TCNJ &nbsp;·&nbsp; 2025
      </div>

      {/* Thin divider line that grows beneath the tagline */}
      <div
        style={{
          marginTop: '20px',
          width: 0,
          height: '1px',
          background: 'rgba(255,255,255,0.12)',
          animation: 'expandLine 0.8s 3.6s ease forwards',
        }}
      />

      <style>{`
        @keyframes expandLine {
          from { width: 0; }
          to   { width: 120px; }
        }
      `}</style>
    </div>
  );
};

export default IntroScreen;
