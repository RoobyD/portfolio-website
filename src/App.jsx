import React, { useState, useEffect, useCallback, useRef } from 'react';
import resume from './assets/documents/resume.pdf';

// ─── Data ──────────────────────────────────────────────────────────────────────

const LINKS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rooby-dartiny-99b89a256/' },
  { label: 'GitHub',   href: 'https://github.com/RoobyD' },
  { label: 'Email',    href: 'mailto:dartinr1@tcnj.edu' },
];

const PROJECTS = [
  {
    num: '01',
    label: 'BLE Wayfinding Capstone',
    tags: 'Swift · iOS · BLE · Accessibility',
    desc: 'High-precision indoor navigation using BLE beacons for turn-by-turn campus routing across 10+ zones. Dijkstra-based safety rerouting engine, RSSI positioning with SwiftUI floor maps, and admin controls for danger zone flagging.',
    href: null,
  },
  {
    num: '02',
    label: 'Evnti',
    tags: 'React Native · Supabase · Expo EAS',
    desc: 'Founding Software Engineer on a mobile-first event platform. Reduced feature turnaround by 50%, implemented real-time preview UI cutting host publish time by 30%, and streamlined build-to-test cycles by 40% via Expo EAS.',
    href: 'https://apps.apple.com/us/app/evnti-events-tickets-rsvp/id6760631424',
  },
  {
    num: '03',
    label: 'Wild Sky Program Application',
    tags: 'React · Node.js · REST APIs',
    desc: 'Award-winning full-stack app (HackTCNJ Social Impact Innovation Award) built in a team of 4 to estimate wildlife conservation incentives using multi-region environmental datasets.',
    href: 'https://devpost.com/software/wild-sky-financial-estimation-tool',
  },
];

// ─── Timing ────────────────────────────────────────────────────────────────────

const NAME         = 'Rooby Dartiny';
const CHAR_DUR     = 680;
const CHAR_STAGGER = 62;
const NAME_DONE_MS = (NAME.length - 1) * CHAR_STAGGER + CHAR_DUR + 80;
const RULE_DELAY   = 0;
const SUB_DELAY    = 500;

// ─── NameReveal ────────────────────────────────────────────────────────────────

function NameReveal({ revealKey, onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, NAME_DONE_MS);
    return () => clearTimeout(t);
  }, [revealKey, onDone]);

  return (
    <h1
      style={{
        fontFamily: "'Cormorant Garamond', Georgia, serif",
        fontStyle: 'italic', fontWeight: 300,
        fontSize: 'clamp(52px, 9.5vw, 118px)',
        letterSpacing: '0.01em', lineHeight: 1.1,
        color: 'rgba(255,255,255,0.93)',
        whiteSpace: 'nowrap', margin: 0, userSelect: 'none',
      }}
      aria-label={NAME}
    >
      {NAME.split('').map((char, i) => (
        <span key={i} aria-hidden="true" style={{
          display: 'inline-block',
          animation: `charIn ${CHAR_DUR}ms cubic-bezier(0.16,1,0.3,1) ${i * CHAR_STAGGER}ms both`,
        }}>
          {char === ' ' ? ' ' : char}
        </span>
      ))}
    </h1>
  );
}

// ─── R Logo ────────────────────────────────────────────────────────────────────

function RLogo({ onHome }) {
  return (
    <>
      <style>{`
        @keyframes rWrite {
          from { clip-path: inset(0 110% 0 0); }
          to   { clip-path: inset(0 0% 0 0); }
        }
        @keyframes rFloat {
          0%,100% { transform: translateY(0px); }
          50%     { transform: translateY(-5px); }
        }
      `}</style>
      <button
        onClick={onHome}
        style={{
          background: 'none', border: 'none', padding: 0,
          cursor: 'pointer', userSelect: 'none',
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontStyle: 'italic', fontWeight: 300,
          fontSize: '72px',
          color: 'rgba(230,218,198,0.93)',
          letterSpacing: '0.02em', lineHeight: 1,
          display: 'block',
          animation: 'rWrite 0.9s cubic-bezier(0.4,0,0.2,1) 0.3s both, rFloat 7s ease-in-out 2s infinite',
        }}
      >
        R
      </button>
    </>
  );
}

// ─── View: Work ────────────────────────────────────────────────────────────────

function WorkView() {
  const [hov, setHov] = useState(null);

  return (
    <div style={{ width: 'min(860px, 92vw)' }}>
      <p style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.22)', marginBottom: '24px',
        opacity: 0, animation: 'viewIn 0.5s ease 0ms both',
      }}>Selected Work</p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '16px',
      }}>
        {PROJECTS.map((p, i) => {
          const isHov = hov === p.num;
          const Wrapper = p.href ? 'a' : 'div';
          const wrapProps = p.href
            ? { href: p.href, target: '_blank', rel: 'noopener noreferrer' }
            : {};
          return (
            <Wrapper
              key={p.num}
              {...wrapProps}
              onMouseEnter={() => setHov(p.num)}
              onMouseLeave={() => setHov(null)}
              style={{
                display: 'flex', flexDirection: 'column',
                textDecoration: 'none',
                border: `1px solid ${isHov ? 'rgba(212,175,122,0.2)' : 'rgba(255,255,255,0.06)'}`,
                background: isHov ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.01)',
                padding: '28px 24px',
                transition: 'border-color 0.22s, background 0.22s',
                cursor: p.href ? 'pointer' : 'default',
                opacity: 0,
                animation: `viewIn 0.5s ease ${60 + i * 80}ms both`,
              }}
            >
              {/* Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '18px' }}>
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '11px', letterSpacing: '0.2em',
                  color: isHov ? 'rgba(212,175,122,0.5)' : 'rgba(255,255,255,0.18)',
                  transition: 'color 0.22s',
                }}>{p.num}</span>
                {p.href && (
                  <span style={{
                    fontSize: '16px',
                    color: isHov ? 'rgba(212,175,122,0.7)' : 'rgba(255,255,255,0.18)',
                    transition: 'color 0.22s',
                  }}>↗</span>
                )}
              </div>

              {/* Title */}
              <span style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontStyle: 'italic', fontWeight: 300,
                fontSize: '28px', letterSpacing: '0.01em', lineHeight: 1.15,
                color: isHov ? 'rgba(212,175,122,0.9)' : 'rgba(224,224,224,0.9)',
                transition: 'color 0.22s',
                marginBottom: '14px',
              }}>{p.label}</span>

              {/* Description */}
              {p.desc && (
                <p style={{
                  fontSize: '13px', fontWeight: 300, color: 'rgba(255,255,255,0.38)',
                  lineHeight: 1.7, letterSpacing: '0.01em',
                  marginBottom: '20px', flex: 1,
                }}>{p.desc}</p>
              )}

              {/* Tags */}
              {p.tags && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: 'auto' }}>
                  {p.tags.split(' · ').map(tag => (
                    <span key={tag} style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.22)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      padding: '4px 10px',
                    }}>{tag}</span>
                  ))}
                </div>
              )}
            </Wrapper>
          );
        })}
      </div>
    </div>
  );
}

// ─── View: Résumé ──────────────────────────────────────────────────────────────

function ResumeView() {
  const [hovD, setHovD] = useState(false);
  const [hovP, setHovP] = useState(false);
  const [preview, setPreview] = useState(false);

  const btnBase = {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase',
    padding: '13px 32px',
    display: 'inline-block',
    transition: 'color 0.22s, border-color 0.22s',
    cursor: 'pointer',
  };

  return (
    <div style={{ textAlign: 'center', opacity: 0, animation: 'viewIn 0.5s ease 0ms both', width: 'min(900px, 92vw)' }}>
      <p style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.22)', marginBottom: '22px',
      }}>Curriculum Vitae</p>
      <h2 style={{
        fontFamily: "'Cormorant Garamond', Georgia, serif",
        fontStyle: 'italic', fontWeight: 300,
        fontSize: 'clamp(48px, 7vw, 82px)',
        color: 'rgba(255,255,255,0.9)',
        letterSpacing: '0.01em', marginBottom: '40px',
      }}>Résumé</h2>

      <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginBottom: preview ? '28px' : 0 }}>
        <button
          onClick={() => setPreview(p => !p)}
          onMouseEnter={() => setHovP(true)}
          onMouseLeave={() => setHovP(false)}
          style={{
            ...btnBase,
            background: 'none', border: `1px solid ${hovP || preview ? 'rgba(212,175,122,0.25)' : 'rgba(255,255,255,0.07)'}`,
            color: hovP || preview ? 'rgba(212,175,122,0.9)' : '#555',
          }}
        >
          {preview ? 'Hide Preview' : 'Preview'}
        </button>
        <a
          href={resume}
          download
          onMouseEnter={() => setHovD(true)}
          onMouseLeave={() => setHovD(false)}
          style={{
            ...btnBase,
            textDecoration: 'none',
            border: `1px solid ${hovD ? 'rgba(212,175,122,0.25)' : 'rgba(255,255,255,0.07)'}`,
            color: hovD ? 'rgba(212,175,122,0.9)' : '#555',
          }}
        >
          Download PDF
        </a>
      </div>

      {preview && (
        <iframe
          src={resume}
          title="Résumé Preview"
          style={{
            width: '100%',
            height: '80vh',
            border: '1px solid rgba(255,255,255,0.07)',
            background: '#111',
          }}
        />
      )}
    </div>
  );
}

// ─── View: Contact ─────────────────────────────────────────────────────────────

function ContactView() {
  const [hov, setHov] = useState(null);
  return (
    <div style={{ width: 'min(300px, 88vw)' }}>
      <p style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.22)', marginBottom: '8px',
        opacity: 0, animation: 'viewIn 0.5s ease 0ms both',
      }}>Connect</p>
      {LINKS.map((link, i) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHov(link.label)}
          onMouseLeave={() => setHov(null)}
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '13px 0',
            borderBottom: '1px solid rgba(255,255,255,0.04)',
            textDecoration: 'none',
            opacity: 0,
            animation: `viewIn 0.5s ease ${60 + i * 70}ms both`,
          }}
        >
          <span style={{
            fontSize: '17px', fontWeight: 300, letterSpacing: '0.02em',
            color: hov === link.label ? '#c8c8c8' : 'rgba(255,255,255,0.32)',
            transition: 'color 0.2s',
          }}>{link.label}</span>
          <span style={{
            fontSize: '14px',
            color: hov === link.label ? '#888' : 'rgba(255,255,255,0.2)',
            transition: 'color 0.2s, transform 0.2s',
            transform: hov === link.label ? 'translate(2px,-2px)' : 'translate(0,0)',
            display: 'inline-block',
          }}>↗</span>
        </a>
      ))}
    </div>
  );
}

// ─── App ───────────────────────────────────────────────────────────────────────

const NAV = [
  { key: 'work',    label: 'Work' },
  { key: 'resume',  label: 'Résumé' },
  { key: 'contact', label: 'Contact' },
];

export default function App() {
  const [view,      setView]      = useState('home');
  const [fading,    setFading]    = useState(false);
  const [revealKey, setRevealKey] = useState(0);
  const [showRule,  setShowRule]  = useState(false);
  const [showSub,   setShowSub]   = useState(false);
  const [scrolled,  setScrolled]  = useState(false);
  const timers    = useRef([]);
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => setScrolled(el.scrollTop > 30);
    el.addEventListener('scroll', onScroll);
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  const clearAll = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };

  const handleNameDone = useCallback(() => {
    clearAll();
    timers.current = [
      setTimeout(() => setShowRule(true), RULE_DELAY),
      setTimeout(() => setShowSub(true),  SUB_DELAY),
    ];
  }, []);

  const handleHover = useCallback(() => {
    clearAll();
    setShowRule(false);
    setShowSub(false);
    setRevealKey(k => k + 1);
  }, []);

  const navigate = useCallback((next) => {
    if (next === view) return;
    setFading(true);
    setTimeout(() => {
      setView(next);
      setFading(false);
      if (next === 'home') {
        setShowRule(false);
        setShowSub(false);
        setRevealKey(k => k + 1);
      }
    }, 240);
  }, [view]);

  return (
    <div style={{ position: 'fixed', inset: 0, display: 'flex', flexDirection: 'column', background: '#000' }}>

      {/* Fixed background gradient */}
      <div aria-hidden="true" style={{
        position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0,
        background: 'radial-gradient(ellipse 85vw 70vh at 50% 44%, rgba(18,6,38,0.65) 0%, transparent 72%)',
      }} />

      {/* Header — reacts to scroll */}
      <header style={{
        flexShrink: 0, zIndex: 50,
        padding: '8px 26px',
        background: scrolled ? 'rgba(4,10,20,0.60)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom: `1px solid ${scrolled ? 'rgba(255,255,255,0.07)' : 'transparent'}`,
        transition: 'background 0.3s, border-color 0.3s, backdrop-filter 0.3s',
      }}>
        <RLogo onHome={() => navigate('home')} />
      </header>

      {/* Scrollable content — fills remaining space */}
      <div
        ref={scrollRef}
        style={{
          flex: 1, overflowY: 'auto', position: 'relative', zIndex: 10,
          display: 'flex', flexDirection: 'column',
        }}
      >
        <div style={{
          flex: 1,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '32px 24px 48px',
          opacity: fading ? 0 : 1,
          transform: fading ? 'translateY(10px)' : 'translateY(0)',
          transition: 'opacity 0.24s ease, transform 0.24s ease',
          pointerEvents: fading ? 'none' : 'auto',
        }}>
          {view === 'home' && (
            <div
              onMouseEnter={handleHover}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'default' }}
            >
              <NameReveal key={revealKey} revealKey={revealKey} onDone={handleNameDone} />

              <div aria-hidden="true" style={{
                marginTop: '24px', width: '200px', height: '1px',
                background: 'rgba(255,255,255,0.1)',
                transformOrigin: 'left center',
                transform:  showRule ? 'scaleX(1)' : 'scaleX(0)',
                transition: showRule ? 'transform 0.65s cubic-bezier(0.4,0,0.2,1)' : 'none',
              }} />

              <div style={{
                marginTop: '16px',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '13px', letterSpacing: '0.25em', textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.22)',
                opacity:   showSub ? 1 : 0,
                transform: showSub ? 'translateY(0)' : 'translateY(6px)',
                transition: showSub ? 'opacity 0.9s ease, transform 0.9s ease' : 'none',
                userSelect: 'none', whiteSpace: 'nowrap',
              }}>
                Software Engineer &nbsp;·&nbsp; Builder
              </div>
            </div>
          )}

          {view === 'work'    && <WorkView />}
          {view === 'resume'  && <ResumeView />}
          {view === 'contact' && <ContactView />}
        </div>
      </div>

      {/* Bottom bar: nav + footer — mirrors header blur technique */}
      <div style={{
        flexShrink: 0, zIndex: 50,
        background: scrolled ? 'rgba(4,10,20,0.60)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderTop: `1px solid ${scrolled ? 'rgba(255,255,255,0.07)' : 'transparent'}`,
        transition: 'background 0.3s, border-color 0.3s, backdrop-filter 0.3s',
        padding: '12px 0 14px',
      }}>
        <nav style={{ display: 'flex', justifyContent: 'center', gap: '36px', marginBottom: '10px' }}>
          {NAV.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => navigate(key)}
              style={{
                background: 'none', border: 'none', padding: '6px 0',
                cursor: 'pointer',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '12px', letterSpacing: '0.18em', textTransform: 'uppercase',
                color: view === key ? 'rgba(212,175,122,0.88)' : 'rgba(255,255,255,0.2)',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => { if (view !== key) e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; }}
              onMouseLeave={e => { if (view !== key) e.currentTarget.style.color = 'rgba(255,255,255,0.2)'; }}
            >
              {label}
            </button>
          ))}
        </nav>

        <footer style={{
          textAlign: 'center',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '10px', letterSpacing: '0.12em',
          color: 'rgba(255,255,255,0.32)',
          userSelect: 'none',
        }}>
          © 2026 Rooby Dartiny. All rights reserved.
        </footer>
      </div>

    </div>
  );
}
