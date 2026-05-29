import React, { useState } from 'react';

const projects = [
  {
    num: '01',
    title: 'BLE Wayfinding Capstone',
    year: '2025–26',
    tags: ['Swift', 'iOS', 'BLE', 'Accessibility'],
    description:
      'High-precision indoor navigation system using BLE beacons for turn-by-turn campus routing across 10+ zones. Features a Dijkstra-based safety rerouting engine (<1s reroute time), RSSI-based positioning with SwiftUI floor maps, and an admin control system for flagging danger zones and updating POIs system-wide.',
    link: null,
    isPrivate: false,
    badge: 'Capstone · In Progress',
  },
  {
    num: '02',
    title: 'Wild Sky Program Application',
    year: '2025',
    tags: ['React', 'Node.js', 'REST APIs'],
    description:
      'Award-winning full-stack web application built in a team of 4 to estimate wildlife conservation incentives using multi-region environmental datasets. Designed and implemented 5+ REST API endpoints for data processing and predictions.',
    link: 'https://devpost.com/software/wild-sky-financial-estimation-tool',
    isPrivate: false,
    badge: 'HackTCNJ Award Winner',
  },
];

const ProjectRow = ({ project }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{ borderTop: '1px solid var(--border)', cursor: 'pointer', userSelect: 'none' }}
      onClick={() => setOpen(!open)}
    >
      {/* Row header */}
      <div style={{ padding: '26px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px' }}>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '18px', marginBottom: '10px' }}>
            <span className="label" style={{ flexShrink: 0, minWidth: '28px' }}>{project.num}</span>
            <span style={{ fontWeight: 400, fontSize: '15px', letterSpacing: '0.005em' }}>{project.title}</span>
          </div>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', paddingLeft: '46px' }}>
            {project.tags.map(tag => (
              <span key={tag} className="label" style={{ fontSize: '10px', letterSpacing: '0.12em' }}>{tag}</span>
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexShrink: 0, paddingTop: '2px' }}>
          <span className="label">{project.year}</span>
          <span className="label" style={{ fontSize: '15px', lineHeight: 1, letterSpacing: 0 }}>{open ? '−' : '+'}</span>
        </div>
      </div>

      {/* Expanded content */}
      {open && (
        <div style={{ paddingBottom: '28px', paddingLeft: '46px' }}>
          <p style={{ color: 'var(--muted)', fontSize: '14px', lineHeight: 1.85, maxWidth: '500px', marginBottom: '18px' }}>
            {project.description}
          </p>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
            <span className="label" style={{ color: 'var(--accent)', letterSpacing: '0.1em' }}>
              {project.badge}
            </span>
            {!project.isPrivate && project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="label"
                onClick={e => e.stopPropagation()}
                onMouseEnter={e => e.target.style.color = 'var(--accent)'}
                onMouseLeave={e => e.target.style.color = 'var(--muted)'}
              >
                View Project ↗
              </a>
            )}
            {project.isPrivate && (
              <span className="label" style={{ color: '#333' }}>Private</span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const Projects = () => (
  <section id="work" style={{ paddingBottom: '88px', position: 'relative' }}>
    <div style={{ position: 'absolute', inset: '-40px -24px', background: 'rgba(4,10,12,0.62)', backdropFilter: 'blur(1px)', zIndex: -1 }} />
    <hr className="divider" style={{ marginBottom: '64px' }} />

    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '8px' }}>
      <div className="label">Selected Work</div>
      <div className="label" style={{ fontSize: '10px', letterSpacing: '0.1em' }}>Tap to expand</div>
    </div>

    <div style={{ marginTop: '32px' }}>
      {projects.map(p => <ProjectRow key={p.num} project={p} />)}
      <div style={{ borderTop: '1px solid var(--border)' }} />
    </div>
  </section>
);

export default Projects;
