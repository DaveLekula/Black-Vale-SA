import React, { useRef } from 'react';
import { useInView } from '../../lib/useInView';

export default function BeliefSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { threshold: 0.2 });

  return (
    <section
      id="belief"
      ref={ref}
      style={{
        background: 'var(--bg)',
        padding: '160px 0',
      }}
      aria-label="The Belief"
    >
      <div className="container-site">
        <div style={{
          maxWidth: '860px',
          margin: '0 auto',
          textAlign: 'center',
        }}>
          <p
            className="section-label"
            style={{
              marginBottom: '40px',
              opacity: inView ? 1 : 0,
              transform: inView ? 'none' : 'translateY(16px)',
              transition: 'opacity 0.8s ease, transform 0.8s ease',
            }}
          >
            THE BELIEF
          </p>

          <div
            aria-hidden="true"
            style={{
              width: '1px',
              height: '60px',
              background: 'var(--rule)',
              margin: '0 auto 48px',
              opacity: inView ? 1 : 0,
              transition: 'opacity 0.8s ease 0.2s',
            }}
          />

          <blockquote
            className="belief-statement"
            style={{
              margin: 0,
              fontStyle: 'italic',
              opacity: inView ? 1 : 0,
              transform: inView ? 'none' : 'translateY(24px)',
              transition: 'opacity 1s ease 0.3s, transform 1s ease 0.3s',
            }}
          >
            Great technology should move your business forward — quietly, reliably, every day.
          </blockquote>
        </div>
      </div>
    </section>
  );
}
