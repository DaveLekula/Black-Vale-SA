import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { solutions } from '../../data/solutions';
import { useInView } from '../../lib/useInView';

function SolutionItem({ solution, index, expanded, onToggle }: {
  solution: typeof solutions[0];
  index: number;
  expanded: boolean;
  onToggle: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { threshold: 0.15 });

  return (
    <div
      ref={ref}
      style={{
        borderTop: '1px solid var(--rule)',
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : 'translateY(20px)',
        transition: `opacity 0.7s ease ${index * 0.08}s, transform 0.7s ease ${index * 0.08}s`,
      }}
    >
      <button
        onClick={onToggle}
        aria-expanded={expanded}
        aria-controls={`solution-${solution.id}-details`}
        style={{
          display: 'grid',
          gridTemplateColumns: '80px 1fr auto',
          gap: '24px',
          alignItems: 'center',
          width: '100%',
          padding: '28px 0',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
        }}
      >
        <span style={{ fontFamily: 'var(--font-display)', fontSize: '14px', color: 'var(--gold)', letterSpacing: '0.04em' }}>
          {solution.number}
        </span>
        <div>
          <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(18px, 2.5vw, 26px)', fontWeight: 300, color: 'var(--ink)', margin: '0 0 4px', letterSpacing: '0.05em' }}>
            {solution.title}
          </p>
          <p style={{ fontSize: '13px', color: 'var(--muted)', margin: 0, letterSpacing: '0.04em' }}>
            {solution.tagline}
          </p>
        </div>
        <span style={{
          color: 'var(--gold)', fontSize: '18px',
          transition: 'transform 0.3s ease',
          transform: expanded ? 'rotate(45deg)' : 'none',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          width: '32px', height: '32px',
        }} aria-hidden="true">+</span>
      </button>

      <div
        id={`solution-${solution.id}-details`}
        style={{
          overflow: 'hidden',
          maxHeight: expanded ? '400px' : '0',
          transition: 'max-height 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <div style={{ paddingBottom: '40px', paddingLeft: '104px' }} className="solution-expanded">
          <p style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '480px', marginBottom: '24px' }}>
            {solution.description}
          </p>

          {/* Anatomy mini */}
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr 1fr',
            border: '1px solid var(--rule)', marginBottom: '28px', maxWidth: '540px',
          }}
          className="anatomy-mini"
          >
            {[
              { label: 'The Need', value: solution.need },
              { label: 'The Build', value: solution.build },
              { label: 'The Outcome', value: solution.outcome },
            ].map((item, idx) => (
              <div key={item.label} style={{ padding: '16px', borderRight: idx < 2 ? '1px solid var(--rule)' : 'none' }}>
                <p style={{ fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold)', margin: '0 0 6px' }}>
                  {item.label}
                </p>
                <p style={{ fontSize: '13px', color: 'var(--muted)', margin: 0, lineHeight: 1.4 }}>
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          <Link href={`/solutions/${solution.slug}`}>
            <a className="btn-ghost">{solution.linkText} →</a>
          </Link>
        </div>
      </div>

      {index === solutions.length - 1 && <div style={{ borderBottom: '1px solid var(--rule)' }} />}
    </div>
  );
}

export default function SolutionsCollection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { threshold: 0.05 });
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section
      ref={ref}
      style={{ background: 'var(--surface)', borderTop: '1px solid var(--rule)', padding: '120px 0' }}
      aria-label="Solutions collection"
    >
      <div className="container-site">
        <div style={{
          marginBottom: '64px',
          opacity: inView ? 1 : 0,
          transform: inView ? 'none' : 'translateY(16px)',
          transition: 'opacity 0.8s ease, transform 0.8s ease',
        }}>
          <p className="section-label" style={{ marginBottom: '16px' }}>THE SOLUTIONS</p>
          <h2 className="chapter-title">Five ways to move forward.</h2>
        </div>

        <div>
          {solutions.map((s, i) => (
            <SolutionItem
              key={s.id}
              solution={s}
              index={i}
              expanded={expanded === s.id}
              onToggle={() => setExpanded(expanded === s.id ? null : s.id)}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 640px) {
          .anatomy-mini { grid-template-columns: 1fr !important; }
          .solution-expanded { padding-left: 0 !important; }
        }
      `}</style>
    </section>
  );
}
