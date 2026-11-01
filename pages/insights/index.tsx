import type { NextPage } from 'next';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { insights } from '../../data/insights';

const InsightsPage: NextPage = () => {
  return (
    <Layout
      title="Insights — BLACKVALE SA"
      description="Ideas behind better systems. Original articles on software, digital experiences and automation from BLACKVALE SA."
      canonical="/insights"
    >
      <div style={{ paddingTop: 'calc(var(--nav-height) + 80px)', paddingBottom: '80px', background: 'var(--bg)', borderBottom: '1px solid var(--rule)' }}>
        <div className="container-site">
          <p className="section-label" style={{ marginBottom: '20px' }}>INSIGHTS</p>
          <h1 className="chapter-title" style={{ maxWidth: '560px' }}>Ideas behind better systems.</h1>
        </div>
      </div>

      <div style={{ background: 'var(--bg)', padding: '80px 0' }}>
        <div className="container-site">
          {insights.map((insight, i) => (
            <div key={insight.slug} style={{ borderTop: '1px solid var(--rule)', paddingTop: '48px', paddingBottom: '48px' }}>
              <Link href={`/insights/${insight.slug}`}>
                <a style={{ textDecoration: 'none', display: 'grid', gridTemplateColumns: '1fr auto', gap: '40px', alignItems: 'start' }} className="insight-list-link">
                  <div>
                    <p style={{ fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '16px' }}>
                      {insight.readTime}
                    </p>
                    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 300, color: 'var(--ink)', margin: '0 0 16px', lineHeight: 1.15 }}>
                      {insight.title}
                    </h2>
                    <p style={{ fontSize: '16px', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '600px', margin: 0 }}>
                      {insight.excerpt}
                    </p>
                  </div>
                  <span style={{ color: 'var(--gold)', fontSize: '24px', transition: 'transform 0.3s ease', paddingTop: '8px' }} className="arrow" aria-hidden="true">→</span>
                </a>
              </Link>
            </div>
          ))}
          <div style={{ borderTop: '1px solid var(--rule)' }} />
        </div>
      </div>

      {/* Principle block */}
      <div style={{ background: 'var(--surface)', borderTop: '1px solid var(--rule)', padding: '100px 0', textAlign: 'center' }}>
        <div className="container-site">
          <p className="section-label" style={{ marginBottom: '24px' }}>A BLACKVALE PRINCIPLE</p>
          <blockquote style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 'clamp(22px, 3vw, 36px)', fontWeight: 300, color: 'var(--ink)', maxWidth: '600px', margin: '0 auto' }}>
            Good work begins with understanding what matters.
          </blockquote>
        </div>
      </div>

      <style jsx>{`
        .insight-list-link:hover .arrow { transform: translateX(8px); }
        @media (max-width: 540px) {
          .insight-list-link { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </Layout>
  );
};

export default InsightsPage;
