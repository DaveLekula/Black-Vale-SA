import React, { useRef } from 'react';
import { useInView } from '../../lib/useInView';

const steps = [
  {
    number: '01',
    title: 'Discover',
    description: 'Define the business problem, users, constraints and measures of success.',
  },
  {
    number: '02',
    title: 'Design & Build',
    description: 'Shape the experience, engineer the solution and validate it as it develops.',
  },
  {
    number: '03',
    title: 'Launch & Evolve',
    description: 'Deploy with care, establish visibility and agree the next steps for support and improvement.',
  },
];

function Step({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef<HTMLLIElement>(null);
  const inView = useInView(ref, { threshold: 0.3 });
  return (
    <li
      ref={ref}
      style={{
        display: 'grid',
        gridTemplateColumns: '80px 1fr',
        gap: '32px',
        alignItems: 'start',
        paddingBottom: index < steps.length - 1 ? '48px' : 0,
        borderBottom: index < steps.length - 1 ? '1px solid var(--rule)' : 'none',
        marginBottom: index < steps.length - 1 ? '48px' : 0,
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : 'translateY(24px)',
        transition: `opacity 0.8s ease ${index * 0.15}s, transform 0.8s ease ${index * 0.15}s`,
      }}
    >
      <span className="process-number" aria-hidden="true">{step.number}</span>
      <div>
        <h3 style={{
          fontFamily: 'var(--font-body)',
          fontSize: '13px',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'var(--ink)',
          margin: '0 0 12px',
        }}>
          {step.title}
        </h3>
        <p style={{ fontSize: '16px', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>
          {step.description}
        </p>
      </div>
    </li>
  );
}

export default function ChapterThree() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { threshold: 0.1 });

  return (
    <section
      ref={ref}
      style={{
        background: 'var(--surface-soft)',
        borderTop: '1px solid var(--rule)',
        padding: '120px 0',
      }}
      aria-label="Chapter III — Delivery"
    >
      <div className="container-site">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.5fr',
          gap: '80px',
          alignItems: 'start',
        }}
        className="chapter-three-grid"
        >
          {/* Heading column */}
          <div style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'none' : 'translateY(24px)',
            transition: 'opacity 0.9s ease, transform 0.9s ease',
          }}
          className="chapter-three-heading"
          >
            <p className="section-label" style={{ marginBottom: '24px' }}>
              CHAPTER III — DELIVERY
            </p>
            <h2 className="chapter-title" style={{ marginBottom: '24px' }}>
              Care is part<br />
              <em>of the process.</em>
            </h2>
            <div style={{ width: '48px', height: '1px', background: 'var(--gold)', marginBottom: '24px' }} aria-hidden="true" />
            <p style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '300px' }}>
              Slow is not a pace.<br />It is a standard.
            </p>
          </div>

          {/* Steps */}
          <ol style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {steps.map((step, i) => (
              <Step key={step.number} step={step} index={i} />
            ))}
          </ol>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .chapter-three-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .chapter-three-heading { position: static !important; }
        }
      `}</style>
    </section>
  );
}
