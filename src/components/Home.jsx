import React from 'react';

const Home = () => (
  <section
    id="home"
    style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      paddingTop: '100px',
      paddingBottom: '240px', // leave room so the cottage/grass show beneath the text
    }}
  >
    <div className="label" style={{ marginBottom: '44px' }}>Portfolio · 2025</div>

    <h1 style={{
      fontSize: 'clamp(52px, 11vw, 90px)',
      fontWeight: 300,
      letterSpacing: '-0.03em',
      lineHeight: 1.0,
      margin: '0 0 26px',
      textShadow: '0 2px 24px rgba(0,0,0,0.6)',
    }}>
      Rooby<br />Dartiny.
    </h1>

    <p style={{
      fontSize: '16px',
      color: 'var(--muted)',
      maxWidth: '390px',
      lineHeight: 1.8,
      margin: 0,
      textShadow: '0 1px 8px rgba(0,0,0,0.8)',
    }}>
      CS student at TCNJ. I build software with real-world impact — from
      community access apps to conservation tools.
    </p>

    <div style={{ marginTop: '48px', display: 'flex', gap: '28px', flexWrap: 'wrap' }}>
      {[
        { label: 'GitHub ↗', href: 'https://github.com/RoobyD', external: true },
        { label: 'LinkedIn ↗', href: 'https://www.linkedin.com/in/rooby-dartiny-99b89a256/', external: true },
        { label: 'Email ↗', href: 'mailto:dartinr1@tcnj.edu', external: false },
      ].map(({ label, href, external }) => (
        <a
          key={label}
          href={href}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          className="label"
          onMouseEnter={e => e.target.style.color = 'var(--accent)'}
          onMouseLeave={e => e.target.style.color = 'var(--muted)'}
        >
          {label}
        </a>
      ))}
    </div>
  </section>
);

export default Home;
