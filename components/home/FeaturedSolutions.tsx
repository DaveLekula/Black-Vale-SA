import React, { useRef } from 'react';
import Link from 'next/link';
import Img from '../Img';
import { featuredSolutions } from '../../data/solutions';
import { useInView } from '../../lib/useInView';

function FeaturedCard({ solution, reverse = false }: { solution: typeof featuredSolutions[0]; reverse?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { threshold: 0.12 });

  return (
    <div ref={ref} style={{ borderTop: '1px solid var(--rule)' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: reverse ? '1fr 1.1fr' : '1.1fr 1fr',
        minHeight: '600px',
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : 'translateY(32px)',
        transition: 'opacity 1s ease, transform 1s ease',
      }} className="featured-grid">

        {/* Image */}
        <div
          className="img-hover-scale featured-image"
          style={{ position: 'relative', order: reverse ? 2 : 1, minHeight: '400px' }}
        >
          <Img src={solution.image} alt={solution.imageAlt} objectPosition={solution.imagePosition} />
          <div style={{
            position: 'absolute', inset: 0,
            background: reverse
              ? 'linear-gradient(to left, transparent 50%, var(--bg))'
              : 'linear-gradient(to right, transparent 50%, var(--bg))',
          }} aria-hidden="true" />
        </div>

        {/* Text */}
        <div style={{
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          padding: reverse ? '80px 80px 80px 0' : '80px 0 80px 80px',
          order: reverse ? 1 : 2,
        }} className="featured-text">
          <p style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(52px, 7vw, 80px)',
            fontWeight: 300, color: 'var(--gold)', opacity: 0.5,
            margin: '0 0 16px', lineHeight: 1, letterSpacing: '-0.01em',
          }}>
            {solution.number}
          </p>
          <p className="section-label" style={{ marginBottom: '20px' }}>{solution.title}</p>
          <h3 className="editorial-title" style={{ marginBottom: '24px' }}>{solution.tagline}</h3>
          <div style={{ width: '40px', height: '1px', background: 'var(--gold)', marginBottom: '24px' }} aria-hidden="true" />
          <p style={{ fontSize: '16px', color: 'var(--muted)', lineHeight: 1.75, maxWidth: '380px', marginBottom: '36px' }}>
            {solution.description}
          </p>
          <Link href={`/solutions/${solution.slug}`}>
            <a className="btn-ghost" style={{ alignSelf: 'flex-start' }}>{solution.linkText} →</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function FeaturedSolutions() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { threshold: 0.05 });

  return (
    <section ref={ref} style={{ background: 'var(--bg)' }} aria-label="Featured solutions">
      <div className="container-site">
        <div style={{
          paddingTop: '120px', paddingBottom: '48px',
          opacity: inView ? 1 : 0,
          transition: 'opacity 0.8s ease',
        }}>
          <p className="section-label" style={{ marginBottom: '16px' }}>OUR APPROACH</p>
          <h2 className="chapter-title">Three ways we make it happen.</h2>
        </div>
      </div>

      {featuredSolutions.map((solution, i) => (
        <div key={solution.id} className="container-site" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <FeaturedCard solution={solution} reverse={i % 2 === 1} />
        </div>
      ))}

      <style jsx>{`
        @media (max-width: 900px) {
          .featured-grid { grid-template-columns: 1fr !important; }
          .featured-image { min-height: 320px; order: 1 !important; }
          .featured-text { order: 2 !important; padding: 48px 0 !important; }
        }
      `}</style>
    </section>
  );
}
