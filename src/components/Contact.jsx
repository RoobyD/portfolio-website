import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import resume from '../assets/documents/resume.pdf';

const inputStyle = {
  width: '100%',
  background: 'transparent',
  border: '1px solid var(--border)',
  color: 'var(--text)',
  padding: '12px 14px',
  fontSize: '14px',
  fontFamily: "'Inter', -apple-system, sans-serif",
  fontWeight: 300,
  outline: 'none',
  transition: 'border-color 0.2s',
  display: 'block',
};

const Contact = () => {
  const [formOpen, setFormOpen] = useState(false);
  const [state, handleSubmit] = useForm('xnnzanww');

  return (
    <section id="contact" style={{ paddingBottom: '100px', position: 'relative' }}>
      <div style={{ position: 'absolute', inset: '-40px -24px', background: 'rgba(4,10,12,0.62)', backdropFilter: 'blur(1px)', zIndex: -1 }} />
      <hr className="divider" style={{ marginBottom: '64px' }} />
      <div className="label" style={{ marginBottom: '44px' }}>Contact</div>

      <p style={{
        fontSize: 'clamp(26px, 5vw, 38px)',
        fontWeight: 300,
        letterSpacing: '-0.02em',
        lineHeight: 1.25,
        maxWidth: '460px',
        marginBottom: '48px',
      }}>
        Open to new projects<br />and opportunities.
      </p>

      <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', marginBottom: '44px' }}>
        <a
          href="mailto:dartinr1@tcnj.edu"
          style={{ fontSize: '15px' }}
          onMouseEnter={e => e.target.style.color = 'var(--accent)'}
          onMouseLeave={e => e.target.style.color = 'var(--text)'}
        >
          dartinr1@tcnj.edu ↗
        </a>
        <a
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: '15px' }}
          onMouseEnter={e => e.target.style.color = 'var(--accent)'}
          onMouseLeave={e => e.target.style.color = 'var(--text)'}
        >
          Resume ↗
        </a>
      </div>

      {/* Form toggle */}
      {!state.succeeded && (
        <button
          onClick={() => setFormOpen(!formOpen)}
          className="label"
          style={{
            background: 'none',
            border: '1px solid var(--border)',
            padding: '11px 18px',
            cursor: 'pointer',
            transition: 'border-color 0.2s, color 0.2s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = '#3A3A3A';
            e.currentTarget.style.color = 'var(--text)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'var(--border)';
            e.currentTarget.style.color = 'var(--muted)';
          }}
        >
          {formOpen ? '— Close' : '+ Send a Message'}
        </button>
      )}

      {/* Contact form */}
      {formOpen && !state.succeeded && (
        <form onSubmit={handleSubmit} style={{ marginTop: '32px', maxWidth: '420px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <div className="label" style={{ marginBottom: '8px' }}>Email</div>
            <input
              type="email"
              name="email"
              required
              style={inputStyle}
              onFocus={e => e.target.style.borderColor = 'var(--muted)'}
              onBlur={e => e.target.style.borderColor = 'var(--border)'}
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
              style={{ color: '#C96A6A', fontSize: '11px', marginTop: '4px', fontFamily: 'monospace' }}
            />
          </div>
          <div>
            <div className="label" style={{ marginBottom: '8px' }}>Message</div>
            <textarea
              name="message"
              required
              rows={5}
              style={{ ...inputStyle, resize: 'vertical' }}
              onFocus={e => e.target.style.borderColor = 'var(--muted)'}
              onBlur={e => e.target.style.borderColor = 'var(--border)'}
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
              style={{ color: '#C96A6A', fontSize: '11px', marginTop: '4px', fontFamily: 'monospace' }}
            />
          </div>
          <button
            type="submit"
            disabled={state.submitting}
            className="label"
            style={{
              background: 'none',
              border: '1px solid var(--border)',
              padding: '11px 18px',
              cursor: state.submitting ? 'not-allowed' : 'pointer',
              alignSelf: 'flex-start',
              opacity: state.submitting ? 0.5 : 1,
              transition: 'color 0.2s, border-color 0.2s',
            }}
            onMouseEnter={e => {
              if (!state.submitting) {
                e.currentTarget.style.color = 'var(--text)';
                e.currentTarget.style.borderColor = '#3A3A3A';
              }
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = 'var(--muted)';
              e.currentTarget.style.borderColor = 'var(--border)';
            }}
          >
            {state.submitting ? 'Sending...' : 'Send →'}
          </button>
        </form>
      )}

      {state.succeeded && (
        <p className="label" style={{ marginTop: '32px', color: 'var(--accent)', letterSpacing: '0.12em' }}>
          Message sent — I'll be in touch.
        </p>
      )}

      {/* Page footer */}
      <div
        className="footer-row"
        style={{ marginTop: '96px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
      >
        <span className="label">© 2025 Rooby Dartiny</span>
        <div style={{ display: 'flex', gap: '24px' }}>
          <a
            href="https://github.com/RoobyD"
            target="_blank"
            rel="noopener noreferrer"
            className="label"
            onMouseEnter={e => e.target.style.color = 'var(--accent)'}
            onMouseLeave={e => e.target.style.color = 'var(--muted)'}
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/rooby-dartiny-99b89a256/"
            target="_blank"
            rel="noopener noreferrer"
            className="label"
            onMouseEnter={e => e.target.style.color = 'var(--accent)'}
            onMouseLeave={e => e.target.style.color = 'var(--muted)'}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
