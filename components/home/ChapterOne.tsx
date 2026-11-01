import React, { useRef } from 'react';
import Img from '../Img';
import { useInView } from '../../lib/useInView';

export default function ChapterOne() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { threshold: 0.15 });

  return (
    <section
      ref={ref}
      style={{ background: 'var(--surface)', borderTop: '1px solid var(--rule)' }}
      aria-label="Chapter I — Understanding"
    >
      <div className="container-site">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0', minHeight: '640px' }} className="chapter-grid">
          {/* Image */}
          <div
            className="img-hover-scale"
            style={{
              position: 'relative',
              minHeight: '520px',
              opacity: inView ? 1 : 0,
              transform: inView ? 'none' : 'translateX(-32px)',
              transition: 'opacity 1s ease 0.1s, transform 1s ease 0.1s',
            }}
          >
            <Img
              src="/images/svc-websites.png"
              alt="Desktop monitor and smartphone showing a matching website design"
              objectPosition="center center"
            />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to right, transparent 60%, var(--surface))',
            }} aria-hidden="true" />
          </div>

          {/* Text */}
          <div style={{
            display: 'flex', flexDirection: 'column', justifyContent: 'center',
            padding: '80px 0 80px 64px',
            opacity: inView ? 1 : 0,
            transform: inView ? 'none' : 'translateX(32px)',
            transition: 'opacity 1s ease 0.25s, transform 1s ease 0.25s',
          }} className="chapter-text">
            <p className="section-label" style={{ marginBottom: '24px' }}>CHAPTER I — UNDERSTANDING</p>
            <h2 className="chapter-title" style={{ marginBottom: '32px' }}>
              Before the solution,<br /><em>the right questions.</em>
            </h2>
            <div style={{ width: '48px', height: '1px', background: 'var(--gold)', marginBottom: '32px' }} aria-hidden="true" />
            <p style={{ fontSize: '17px', color: 'var(--muted)', lineHeight: 1.75, maxWidth: '420px', marginBottom: '32px' }}>
              Every business has its own pressures, processes and ambitions. We begin by understanding
              yours — what works, what slows you down, and what needs to change.
            </p>
            <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '18px', color: 'var(--ink)', lineHeight: 1.5, maxWidth: '360px' }}>
              A clear problem. A considered plan. A solution built around your business.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .chapter-grid { grid-template-columns: 1fr !important; }
          .chapter-text { padding: 48px 0 !important; }
        }
      `}</style>
    </section>
  );
}
