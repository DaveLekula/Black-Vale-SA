import React, { useRef } from 'react';
import Img from '../Img';
import { useInView } from '../../lib/useInView';

const principles = [
  {
    label: 'Business first',
    description: 'Every technical decision starts with the business problem. We do not build technology for its own sake.',
  },
  {
    label: 'Engineering discipline',
    description: 'Clean architecture, clear interfaces, maintainable code. The quality of the build matters long after launch.',
  },
  {
    label: 'Long-term thinking',
    description: 'We design for what comes next, not just what is needed today. Systems that grow with the business.',
  },
];

export default function AboutInterlude() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { threshold: 0.1 });

  return (
    <section
      ref={ref}
      style={{ background: 'var(--surface)', borderTop: '1px solid var(--rule)' }}
      aria-label="About BLACKVALE SA"
    >
      <div className="container-site">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0', minHeight: '640px' }} className="about-grid">
          {/* Image */}
          <div
            className="img-hover-scale"
            style={{
              position: 'relative', minHeight: '480px',
              opacity: inView ? 1 : 0,
              transition: 'opacity 1s ease',
            }}
          >
            <Img
              src="/images/svc-integration.png"
              alt="Dark computing modules connected by gold cables"
              objectPosition="center center"
            />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to right, transparent 55%, var(--surface))',
            }} aria-hidden="true" />
          </div>

          {/* Text */}
          <div style={{
            display: 'flex', flexDirection: 'column', justifyContent: 'center',
            padding: '80px 0 80px 64px',
            opacity: inView ? 1 : 0,
            transform: inView ? 'none' : 'translateX(24px)',
            transition: 'opacity 1s ease 0.25s, transform 1s ease 0.25s',
          }} className="about-text">
            <p style={{
              fontFamily: 'var(--font-display)', fontStyle: 'italic',
              fontSize: 'clamp(18px, 2vw, 24px)', color: 'var(--gold)',
              marginBottom: '32px', lineHeight: 1.4,
            }}>
              Technology with presence.<br />Engineering with purpose.
            </p>

            <h2 className="chapter-title" style={{ marginBottom: '24px' }}>
              Built deliberately.<br /><em>Built for what comes next.</em>
            </h2>

            <div style={{ width: '48px', height: '1px', background: 'var(--gold)', marginBottom: '24px' }} aria-hidden="true" />

            <p style={{ fontSize: '16px', color: 'var(--muted)', lineHeight: 1.75, maxWidth: '420px', marginBottom: '48px' }}>
              BLACKVALE SA brings together software engineering, digital design and practical automation
              to help organisations build stronger digital foundations. We value clear communication,
              thoughtful execution and systems that continue to serve the business after launch.
            </p>

            {principles.map((p) => (
              <div key={p.label} style={{
                paddingTop: '20px', paddingBottom: '20px',
                borderTop: '1px solid var(--rule)',
                display: 'grid', gridTemplateColumns: '160px 1fr',
                gap: '24px', alignItems: 'start',
              }}>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold)', margin: 0, paddingTop: '2px' }}>
                  {p.label}
                </p>
                <p style={{ fontSize: '14px', color: 'var(--muted)', margin: 0, lineHeight: 1.6 }}>
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; }
          .about-text { padding: 48px 0 !important; }
        }
      `}</style>
    </section>
  );
}
