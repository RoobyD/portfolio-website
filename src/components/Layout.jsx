import React, { useState, useEffect } from 'react';
import Background from './Background.jsx';

const Layout = ({ children }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#work' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <div>
      {/* Fixed animated nature background */}
      <Background />

      {/* Fixed nav — sits above everything */}
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        borderBottom: `1px solid ${scrolled ? 'rgba(255,255,255,0.07)' : 'transparent'}`,
        background: scrolled ? 'rgba(4,10,20,0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        transition: 'border-color 0.3s, background 0.3s',
      }}>
        <div style={{
          maxWidth: '760px', margin: '0 auto',
          padding: '20px 24px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        }}>
          <a href="#home" style={{
            fontWeight: 700,
            fontSize: '22px',
            letterSpacing: '-0.02em',
            color: 'var(--text)',
            fontFamily: 'Inter, sans-serif',
            lineHeight: 1,
          }}>
            R
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex" style={{ gap: '28px', display: 'flex' }}>
            {navLinks.map(({ label, href }) => (
              <a key={label} href={href} className="label"
                onMouseEnter={e => e.target.style.color = 'var(--text)'}
                onMouseLeave={e => e.target.style.color = 'var(--muted)'}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden label"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
          >
            {menuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </header>

      {/* Full-screen mobile overlay menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 40,
          background: 'rgba(4,10,20,0.97)',
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          padding: '0 32px', gap: '4px',
        }}>
          {navLinks.map(({ label, href }) => (
            <a key={label} href={href}
              onClick={() => setMenuOpen(false)}
              style={{ fontSize: '44px', fontWeight: 300, letterSpacing: '-0.02em', lineHeight: 1.15 }}
            >
              {label}
            </a>
          ))}
        </div>
      )}

      {/* Page content — sits above the fixed background */}
      <div style={{ position: 'relative', zIndex: 10, maxWidth: '760px', margin: '0 auto', padding: '0 24px' }}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
