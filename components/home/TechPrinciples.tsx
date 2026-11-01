import React, { useRef } from 'react';
import { useInView } from '../../lib/useInView';

export default function TechPrinciples() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { threshold: 0.2 });

  return (
    <section
      ref={ref}
      style={{
        background: 'var(--bg)',
        borderTop: '1px solid var(--rule)',
        padding: '160px 0',
        textAlign: 'center',
      }}
      aria-label="Technology principles"
    >
      <div className="container-site">
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p
            className="section-label"
            style={{
              marginBottom: '48px',
              opacity: inView ? 1 : 0,
              transition: 'opacity 0.8s ease',
            }}
          >
            THE STRUCTURE OF GOOD TECHNOLOGY
          </p>

          <h2
            className="editorial-title"
            style={{
              marginBottom: '40px',
              fontSize: 'clamp(40px, 5vw, 64px)',
              fontWeight: 300,
              opacity: inView ? 1 : 0,
              transform: inView ? 'none' : 'translateY(24px)',
              transition: 'opacity 1s ease 0.2s, transform 1s ease 0.2s',
            }}
          >
            Clarity. Craft. Continuity.
          </h2>

          <div
            aria-hidden="true"
            style={{
              width: '1px',
              height: '60px',
              background: 'var(--rule)',
              margin: '0 auto 40px',
              opacity: inView ? 1 : 0,
              transition: 'opacity 0.8s ease 0.4s',
            }}
          />

          <p
            style={{
              fontSize: '18px',
              color: 'var(--muted)',
              lineHeight: 1.75,
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontWeight: 300,
              opacity: inView ? 1 : 0,
              transform: inView ? 'none' : 'translateY(16px)',
              transition: 'opacity 1s ease 0.5s, transform 1s ease 0.5s',
            }}
          >
            Clarity in what we solve. Craft in how we build.
            Continuity in how the solution grows with your business.
          </p>
        </div>
      </div>
    </section>
  );
}
