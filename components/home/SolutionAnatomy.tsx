import React, { useRef, useState } from 'react';
import { solutions } from '../../data/solutions';
import { useInView } from '../../lib/useInView';

export default function SolutionAnatomy() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { threshold: 0.1 });
  const [active, setActive] = useState(solutions[0].id);

  const activeSolution = solutions.find(s => s.id === active) || solutions[0];

  return (
    <section
      ref={ref}
      style={{
        background: 'var(--bg)',
        borderTop: '1px solid var(--rule)',
        padding: '120px 0',
      }}
      aria-label="Solution anatomy"
    >
      <div className="container-site">
        <div style={{
          marginBottom: '64px',
          opacity: inView ? 1 : 0,
          transition: 'opacity 0.8s ease',
        }}>
          <h2 className="chapter-title">
            The Anatomy of a Solution.
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.4fr',
          gap: '80px',
          opacity: inView ? 1 : 0,
          transform: inView ? 'none' : 'translateY(24px)',
          transition: 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s',
        }}
        className="anatomy-main-grid"
        >
          {/* Solution selector */}
          <div>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              {solutions.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => setActive(s.id)}
                    aria-pressed={active === s.id}
                    style={{
                      display: 'flex',
                      gap: '16px',
                      alignItems: 'center',
                      width: '100%',
                      padding: '16px 0',
                      background: 'none',
                      border: 'none',
                      borderBottom: '1px solid var(--rule)',
                      cursor: 'pointer',
                      textAlign: 'left',
                      color: active === s.id ? 'var(--gold)' : 'var(--muted)',
                      transition: 'color 0.3s ease',
                    }}
                    onMouseEnter={e => { if (active !== s.id) (e.currentTarget.style.color = 'var(--ink)'); }}
                    onMouseLeave={e => { if (active !== s.id) (e.currentTarget.style.color = 'var(--muted)'); }}
                  >
                    <span style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '13px',
                      minWidth: '48px',
                    }}>
                      {s.number}
                    </span>
                    <span style={{
                      fontSize: '13px',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                    }}>
                      {s.title}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Anatomy display */}
          <div>
            <div style={{ marginBottom: '32px' }}>
              <p className="section-label" style={{ marginBottom: '12px' }}>
                {activeSolution.number} — {activeSolution.title}
              </p>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(24px, 3vw, 36px)',
                fontWeight: 300,
                color: 'var(--ink)',
                margin: 0,
              }}>
                {activeSolution.tagline}
              </h3>
            </div>

            {/* Three layers */}
            {[
              { label: 'The Need', value: activeSolution.need, description: 'The business problem this addresses.' },
              { label: 'The Build', value: activeSolution.build, description: 'The technical approach we take.' },
              { label: 'The Outcome', value: activeSolution.outcome, description: 'What changes for your business.' },
            ].map((layer, i) => (
              <div
                key={layer.label}
                className="anatomy-layer"
                style={{
                  paddingTop: '24px',
                  transitionDelay: `${i * 0.05}s`,
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '8px' }}>
                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '11px',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--gold)',
                    margin: 0,
                  }}>
                    {layer.label}
                  </p>
                </div>
                <p style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(18px, 2vw, 24px)',
                  fontWeight: 300,
                  color: 'var(--ink)',
                  margin: '0 0 4px',
                }}>
                  {layer.value}
                </p>
                <p style={{ fontSize: '13px', color: 'var(--muted)', margin: 0 }}>
                  {layer.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .anatomy-main-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}
