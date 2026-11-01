import React, { useRef } from 'react';
import Link from 'next/link';
import { insights } from '../../data/insights';
import { useInView } from '../../lib/useInView';

function InsightItem({ insight, index }: { insight: typeof insights[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { threshold: 0.2 });
  return (
    <div
      ref={ref}
      className="insight-card"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : 'translateY(16px)',
        transition: `opacity 0.7s ease ${index * 0.1}s, transform 0.7s ease ${index * 0.1}s`,
      }}
    >
      <Link href={`/insights/${insight.slug}`}>
        <a style={{ textDecoration: 'none', display: 'grid', gridTemplateColumns: '1fr auto', gap: '32px', alignItems: 'start' }} className="insight-link">
          <div>
            <p style={{ fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '12px' }}>
              {insight.readTime}
            </p>
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(20px, 2.5vw, 28px)',
              fontWeight: 300,
              color: 'var(--ink)',
              margin: '0 0 12px',
              lineHeight: 1.2,
            }}>
              {insight.title}
            </h3>
            <p style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: 1.65, maxWidth: '560px', margin: 0 }}>
              {insight.excerpt}
            </p>
          </div>
          <span style={{
            color: 'var(--gold)', fontSize: '20px', marginTop: '8px',
            flexShrink: 0, transition: 'transform 0.3s ease',
          }} className="insight-arrow" aria-hidden="true">→</span>
        </a>
      </Link>
    </div>
  );
}

export default function InsightsSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { threshold: 0.1 });

  return (
    <section
      ref={ref}
      style={{ background: 'var(--bg)', borderTop: '1px solid var(--rule)', padding: '120px 0' }}
      aria-label="Insights"
    >
      <div className="container-site">
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
          marginBottom: '64px',
          opacity: inView ? 1 : 0,
          transition: 'opacity 0.8s ease',
          flexWrap: 'wrap', gap: '24px',
        }}>
          <div>
            <p className="section-label" style={{ marginBottom: '16px' }}>INSIGHTS</p>
            <h2 className="chapter-title">Ideas behind better systems.</h2>
          </div>
          <Link href="/insights"><a className="btn-ghost">View all insights →</a></Link>
        </div>

        <div>
          {insights.map((insight, i) => (
            <InsightItem key={insight.slug} insight={insight} index={i} />
          ))}
        </div>

        {/* Principle block */}
        <div style={{
          marginTop: '80px', padding: '48px',
          background: 'var(--surface)', border: '1px solid var(--rule)', textAlign: 'center',
          opacity: inView ? 1 : 0, transition: 'opacity 0.8s ease 0.4s',
        }}>
          <p className="section-label" style={{ marginBottom: '24px' }}>A BLACKVALE PRINCIPLE</p>
          <blockquote style={{
            fontFamily: 'var(--font-display)', fontStyle: 'italic',
            fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 300,
            color: 'var(--ink)', margin: 0, lineHeight: 1.4,
          }}>
            Good work begins with understanding what matters.
          </blockquote>
        </div>
      </div>

      <style jsx>{`
        .insight-link:hover .insight-arrow { transform: translateX(6px); }
        @media (max-width: 540px) {
          .insight-link { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
