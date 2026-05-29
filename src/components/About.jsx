import React from 'react';

const skills = [
  'Python', 'JavaScript', 'Ruby', 'SQL',
  'C++', 'Swift', 'React', 'Node.js', 'Flask', 'PostgreSQL',
];

const About = () => (
  <section id="about" style={{ paddingBottom: '88px', position: 'relative' }}>
    {/* Dark backdrop so text stays readable over the nature scene */}
    <div style={{ position: 'absolute', inset: '-40px -24px', background: 'rgba(4,10,12,0.62)', backdropFilter: 'blur(1px)', zIndex: -1 }} />
    <hr className="divider" style={{ marginBottom: '64px' }} />
    <div className="label" style={{ marginBottom: '44px' }}>About</div>

    <div
      className="about-grid"
      style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px' }}
    >
      <div>
        <p style={{ color: 'var(--muted)', lineHeight: 1.85, marginBottom: '20px', fontSize: '15px' }}>
          I'm a computer science student and full-stack developer who builds things
          that matter. My work sits at the intersection of technology and real-world
          impact — community access, conservation, and data.
        </p>
        <p style={{ color: 'var(--muted)', lineHeight: 1.85, fontSize: '15px' }}>
          Currently at TCNJ, always looking for projects that push me further and
          collaborations that go somewhere meaningful.
        </p>
      </div>

      <div>
        <div className="label" style={{ marginBottom: '20px' }}>Skills</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px 20px' }}>
          {skills.map(s => (
            <span
              key={s}
              style={{
                fontFamily: "'JetBrains Mono', 'Courier New', monospace",
                fontSize: '12px',
                color: 'var(--muted)',
                letterSpacing: '0.04em',
              }}
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
