import type { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { insights, Insight } from '../../data/insights';

interface Props {
  insight: Insight;
  adjacent: { prev: Insight | null; next: Insight | null };
}

const InsightDetail: NextPage<Props> = ({ insight, adjacent }) => {
  return (
    <Layout
      title={`${insight.title} — BLACKVALE SA`}
      description={insight.excerpt}
      canonical={`/insights/${insight.slug}`}
    >
      {/* Header */}
      <div style={{ paddingTop: 'calc(var(--nav-height) + 80px)', paddingBottom: '60px', background: 'var(--bg)', borderBottom: '1px solid var(--rule)' }}>
        <div className="container-site" style={{ maxWidth: '760px', marginLeft: 'auto', marginRight: 'auto' }}>
          <p style={{ fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '20px' }}>
            INSIGHTS · {insight.readTime}
          </p>
          <h1 className="chapter-title" style={{ marginBottom: '24px', lineHeight: 1.1 }}>{insight.title}</h1>
          <p style={{ fontSize: '18px', fontFamily: 'var(--font-display)', fontStyle: 'italic', color: 'var(--muted)', lineHeight: 1.6 }}>
            {insight.excerpt}
          </p>
        </div>
      </div>

      {/* Body */}
      <div style={{ background: 'var(--bg)', padding: '80px 0 120px' }}>
        <div className="container-site" style={{ maxWidth: '760px', marginLeft: 'auto', marginRight: 'auto' }}>
          <article>
            {insight.body.map((para, i) => (
              <p key={i} style={{ fontSize: '17px', color: 'var(--muted)', lineHeight: 1.85, marginBottom: '28px' }}>
                {para}
              </p>
            ))}
          </article>

          <div style={{ borderTop: '1px solid var(--rule)', marginTop: '64px', paddingTop: '40px' }}>
            <Link href="/contact">
              <a className="btn-gold">Start a project with BLACKVALE SA →</a>
            </Link>
          </div>
        </div>
      </div>

      {/* Adjacent */}
      <div style={{ borderTop: '1px solid var(--rule)', display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        {adjacent.prev ? (
          <Link href={`/insights/${adjacent.prev.slug}`}>
            <a style={{ display: 'block', padding: '40px 48px', borderRight: '1px solid var(--rule)', textDecoration: 'none', transition: 'background 0.3s ease' }}
               onMouseEnter={e => (e.currentTarget.style.background = 'var(--surface)')}
               onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}>
              <p style={{ fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '8px' }}>← Previous</p>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 300, color: 'var(--ink)', margin: 0 }}>{adjacent.prev.title}</p>
            </a>
          </Link>
        ) : <div />}
        {adjacent.next ? (
          <Link href={`/insights/${adjacent.next.slug}`}>
            <a style={{ display: 'block', padding: '40px 48px', textAlign: 'right', textDecoration: 'none', transition: 'background 0.3s ease' }}
               onMouseEnter={e => (e.currentTarget.style.background = 'var(--surface)')}
               onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}>
              <p style={{ fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '8px' }}>Next →</p>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 300, color: 'var(--ink)', margin: 0 }}>{adjacent.next.title}</p>
            </a>
          </Link>
        ) : <div />}
      </div>

      <style jsx>{`
        @media (max-width: 640px) {
          article p { font-size: 16px !important; }
        }
      `}</style>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: insights.map(i => ({ params: { slug: i.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params?.slug as string;
  const idx = insights.findIndex(i => i.slug === slug);
  if (idx === -1) return { notFound: true };
  return {
    props: {
      insight: insights[idx],
      adjacent: {
        prev: idx > 0 ? insights[idx - 1] : null,
        next: idx < insights.length - 1 ? insights[idx + 1] : null,
      },
    },
  };
};

export default InsightDetail;
