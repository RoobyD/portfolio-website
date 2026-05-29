import React, { useMemo } from 'react';

const Background = () => {
  const stars = useMemo(() =>
    Array.from({ length: 75 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 68,
      size: Math.random() * 1.6 + 0.4,
      opacity: Math.random() * 0.55 + 0.2,
      dur: (Math.random() * 3 + 2).toFixed(2),
      delay: (Math.random() * 7).toFixed(2),
    })),
  []);

  const grassFront = useMemo(() =>
    Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: ((i + 0.5) / 30 * 100) + (Math.random() * 2.5 - 1.25),
      h: Math.random() * 48 + 28,
      w: Math.random() * 2.5 + 2,
      dur: (Math.random() * 1.5 + 1.8).toFixed(2),
      delay: (Math.random() * 2.5).toFixed(2),
      dir: i % 2 === 0 ? 'sway' : 'swayR',
      l: Math.floor(Math.random() * 5 + 7),
    })),
  []);

  const grassMid = useMemo(() =>
    Array.from({ length: 45 }, (_, i) => ({
      id: i,
      x: ((i + 0.5) / 45 * 100) + (Math.random() * 2 - 1),
      h: Math.random() * 22 + 12,
      w: Math.random() * 1.5 + 1,
      dur: (Math.random() * 2 + 2.5).toFixed(2),
      delay: (Math.random() * 3.5).toFixed(2),
      dir: i % 3 === 0 ? 'sway' : 'swayR',
    })),
  []);

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}>

      {/* Night sky gradient */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at 22% 12%, #0D1D3C 0%, #07101E 40%, #040A14 80%, #020608 100%)',
      }} />

      {/* Subtle atmospheric haze near horizon */}
      <div style={{
        position: 'absolute',
        bottom: '18%', left: 0, right: 0,
        height: '25%',
        background: 'linear-gradient(to top, rgba(8,18,8,0.7) 0%, transparent 100%)',
      }} />

      {/* Moon */}
      <div style={{
        position: 'absolute', top: '9%', left: '17%',
        width: '50px', height: '50px',
        borderRadius: '50%',
        background: 'radial-gradient(circle at 36% 36%, #FFFCF0, #E8D8A8)',
        boxShadow: '0 0 16px 4px rgba(232,216,155,0.2), 0 0 50px 18px rgba(220,205,135,0.07)',
      }} />

      {/* Stars */}
      {stars.map(s => (
        <div key={s.id} style={{
          position: 'absolute',
          left: `${s.x}%`,
          top: `${s.y}%`,
          width: `${s.size}px`,
          height: `${s.size}px`,
          borderRadius: '50%',
          background: '#fff',
          opacity: s.opacity,
          animation: `twinkle ${s.dur}s ${s.delay}s ease-in-out infinite`,
        }} />
      ))}

      {/* Shooting star 1 */}
      <div style={{
        position: 'absolute', top: '19%', right: '22%',
        width: '100px', height: '1.5px',
        background: 'linear-gradient(to left, rgba(255,255,255,0.85), rgba(255,255,255,0.3), transparent)',
        borderRadius: '2px',
        animation: 'starShoot1 10s 1.5s ease-out infinite',
      }} />

      {/* Shooting star 2 */}
      <div style={{
        position: 'absolute', top: '11%', right: '48%',
        width: '75px', height: '1px',
        background: 'linear-gradient(to left, rgba(255,255,255,0.75), transparent)',
        borderRadius: '2px',
        animation: 'starShoot2 14s 7s ease-out infinite',
      }} />

      {/* Far hills */}
      <svg viewBox="0 0 1440 300" preserveAspectRatio="none"
        style={{ position: 'absolute', bottom: '22%', width: '100%', height: 'auto', display: 'block' }}>
        <path
          d="M0,190 C180,115 310,175 490,148 C670,122 790,162 950,138 C1110,114 1270,168 1440,128 L1440,300 L0,300 Z"
          fill="#050D04"
        />
      </svg>

      {/* Near hills */}
      <svg viewBox="0 0 1440 200" preserveAspectRatio="none"
        style={{ position: 'absolute', bottom: '14%', width: '100%', height: 'auto', display: 'block' }}>
        <path
          d="M0,115 C120,78 240,135 370,104 C500,73 600,122 730,96 C860,70 970,118 1100,88 C1230,58 1350,105 1440,78 L1440,200 L0,200 Z"
          fill="#060F05"
        />
      </svg>

      {/* Ground */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        height: '18%',
        background: 'linear-gradient(to top, #030802, #060F05)',
      }} />

      {/* Cottage */}
      <svg viewBox="0 0 140 115" style={{ position: 'absolute', bottom: '13.5%', left: '61%', width: '115px', height: 'auto' }}>
        {/* House body */}
        <rect x="14" y="52" width="112" height="63" fill="#07100A" />
        {/* Roof */}
        <polygon points="6,56 70,8 134,56" fill="#060D08" />
        {/* Chimney */}
        <rect x="82" y="14" width="15" height="30" fill="#060C08" />
        {/* Door */}
        <rect x="55" y="80" width="30" height="35" rx="2" fill="#0B180D" />
        {/* Left window with warm glow */}
        <rect x="18" y="63" width="28" height="21" rx="1.5" fill="#CA8A0C"
          style={{ animation: 'windowFlicker 5s ease-in-out infinite' }} />
        {/* Right window */}
        <rect x="94" y="63" width="28" height="21" rx="1.5" fill="#CA8A0C"
          style={{ animation: 'windowFlicker 5s 2.2s ease-in-out infinite' }} />
      </svg>

      {/* Warm window light spill onto ground (glow effect via radial gradient) */}
      <div style={{
        position: 'absolute',
        bottom: '13.5%',
        left: 'calc(61% + 15px)',
        width: '110px',
        height: '30px',
        background: 'radial-gradient(ellipse at 30% 0%, rgba(200,120,12,0.18) 0%, transparent 70%)',
        animation: 'windowFlicker 5s ease-in-out infinite',
      }} />

      {/* Mid-ground grass (blurs slightly for depth) */}
      {grassMid.map(b => (
        <div key={`m${b.id}`} style={{
          position: 'absolute',
          bottom: '14.6%',
          left: `${b.x}%`,
          width: `${b.w}px`,
          height: `${b.h}px`,
          background: 'hsl(118, 20%, 7%)',
          borderRadius: '1px 1px 0 0',
          transformOrigin: 'bottom center',
          animation: `${b.dir} ${b.dur}s ${b.delay}s ease-in-out infinite alternate`,
          filter: 'blur(0.4px)',
        }} />
      ))}

      {/* Foreground grass */}
      {grassFront.map(b => (
        <div key={`f${b.id}`} style={{
          position: 'absolute',
          bottom: 0,
          left: `${b.x}%`,
          width: `${b.w}px`,
          height: `${b.h}px`,
          background: `hsl(114, 22%, ${b.l}%)`,
          borderRadius: '1px 1px 0 0',
          transformOrigin: 'bottom center',
          animation: `${b.dir} ${b.dur}s ${b.delay}s ease-in-out infinite alternate`,
        }} />
      ))}
    </div>
  );
};

export default Background;
