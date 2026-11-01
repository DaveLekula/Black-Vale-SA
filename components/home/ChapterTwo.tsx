import React, { useRef } from 'react';
import Img from '../Img';
import { useInView } from '../../lib/useInView';

export default function ChapterTwo() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { threshold: 0.15 });

  return (
    <section
      ref={ref}
      style={{ background: 'var(--bg)', borderTop: '1px solid var(--rule)' }}
      aria-label="Chapter II — Engineering"
    >
      <div className="container-site">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0', minHeight: '640px' }} className="chapter-grid-two">
          {/* Text */}
          <div style={{
            display: 'flex', flexDirection: 'column', justifyContent: 'center',
            padding: '80px 64px 80px 0',
            opacity: inView ? 1 : 0,
            transform: inView ? 'none' : 'translateX(-32px)',
            transition: 'opacity 1s ease 0.1s, transform 1s ease 0.1s',
          }} className="chapter-two-text">
            <p className="section-label" style={{ marginBottom: '24px' }}>CHAPTER II — ENGINEERING</p>
            <h2 className="chapter-title" style={{ marginBottom: '32px' }}>
              Strong foundations.<br /><em>Lasting possibilities.</em>
            </h2>
            <div style={{ width: '48px', height: '1px', background: 'var(--gold)', marginBottom: '32px' }} aria-hidden="true" />
            <p style={{ fontSize: '17px', color: 'var(--muted)', lineHeight: 1.75, maxWidth: '420px' }}>
              From a distinctive business website to a connected operational platform, we build digital
              systems that are practical to use, maintainable to run and ready to evolve.
            </p>
          </div>

          {/* Image */}
          <div
            className="img-hover-scale"
            style={{
              position: 'relative',
              minHeight: '520px',
              opacity: inView ? 1 : 0,
              transform: inView ? 'none' : 'translateX(32px)',
              transition: 'opacity 1s ease 0.25s, transform 1s ease 0.25s',
            }}
          >
            <Img
              src="/images/svc-software.png"
              alt="Laptop showing a development environment alongside a business application dashboard"
              objectPosition="center center"
            />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to left, transparent 60%, var(--bg))',
            }} aria-hidden="true" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .chapter-grid-two { grid-template-columns: 1fr !important; }
          .chapter-two-text { order: 2; padding: 48px 0 !important; }
        }
      `}</style>
    </section>
  );
}
