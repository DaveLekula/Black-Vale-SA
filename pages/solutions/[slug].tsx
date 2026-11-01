import type { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import Layout from '../../components/Layout';
import Img from '../../components/Img';
import { solutions, Solution } from '../../data/solutions';

interface Props {
  solution: Solution;
  adjacent: { prev: Solution | null; next: Solution | null };
}

const SolutionDetail: NextPage<Props> = ({ solution, adjacent }) => {
  return (
    <Layout
      title={`${solution.title} — BLACKVALE SA`}
      description={solution.description}
      canonical={`/solutions/${solution.slug}`}
    >
      {/* Hero */}
      <div style={{
        position: 'relative',
        paddingTop: 'calc(var(--nav-height) + 80px)',
        paddingBottom: '80px',
        background: 'var(--bg)',
        borderBottom: '1px solid var(--rule)',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.12 }} aria-hidden="true">
          <Img src={solution.image} alt="" objectPosition={solution.imagePosition} />
        </div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, var(--bg) 40%, transparent)' }} aria-hidden="true" />
        <div className="container-site" style={{ position: 'relative', zIndex: 1 }}>
          <p style={{ fontFamily: 'var(--font-display)', fontSize: '13px', color: 'var(--gold)', letterSpacing: '0.08em', marginBottom: '20px' }}>
            {solution.number}
          </p>
          <p className="section-label" style={{ marginBottom: '16px' }}>{solution.title}</p>
          <h1 className="chapter-title" style={{ maxWidth: '640px', marginBottom: '24px' }}>
            {solution.tagline}
          </h1>
          <div style={{ width: '48px', height: '1px', background: 'var(--gold)', marginBottom: '24px' }} aria-hidden="true" />
          <p style={{ fontSize: '18px', color: 'var(--muted)', maxWidth: '540px', lineHeight: 1.7 }}>
            {solution.intro}
          </p>
        </div>
      </div>

      {/* Main content */}
      <div style={{ background: 'var(--bg)', padding: '80px 0' }}>
        <div className="container-site">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px' }} className="solution-detail-layout">

            {/* Left: Business needs + Scope */}
            <div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '28px', fontWeight: 300, color: 'var(--ink)', marginBottom: '24px' }}>
                Common business needs
              </h2>
              <ul style={{ margin: '0 0 56px', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {solution.businessNeeds.map(need => (
                  <li key={need} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', fontSize: '15px', color: 'var(--muted)', lineHeight: 1.6 }}>
                    <span style={{ color: 'var(--gold)', marginTop: '4px', flexShrink: 0 }}>—</span>
                    {need}
                  </li>
                ))}
              </ul>

              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '28px', fontWeight: 300, color: 'var(--ink)', marginBottom: '24px' }}>
                Scope examples
              </h2>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {solution.scopeExamples.map(ex => (
                  <li key={ex} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', fontSize: '15px', color: 'var(--muted)', lineHeight: 1.6 }}>
                    <span style={{ color: 'var(--gold)', marginTop: '4px', flexShrink: 0 }}>—</span>
                    {ex}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Deliverables + Approach */}
            <div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '28px', fontWeight: 300, color: 'var(--ink)', marginBottom: '24px' }}>
                Typical deliverables
              </h2>
              <ul style={{ margin: '0 0 56px', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0' }}>
                {solution.deliverables.map((d, i) => (
                  <li key={d} style={{
                    display: 'flex', gap: '16px', alignItems: 'flex-start',
                    fontSize: '15px', color: 'var(--muted)', lineHeight: 1.6,
                    padding: '14px 0',
                    borderBottom: i < solution.deliverables.length - 1 ? '1px solid var(--rule)' : 'none',
                  }}>
                    <span style={{ fontFamily: 'var(--font-display)', color: 'var(--gold)', fontSize: '13px', marginTop: '2px', flexShrink: 0, minWidth: '24px' }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {d}
                  </li>
                ))}
              </ul>

              <div style={{ background: 'var(--surface)', border: '1px solid var(--rule)', padding: '32px' }}>
                <p className="section-label" style={{ marginBottom: '16px' }}>HOW WE WORK</p>
                <p style={{ fontSize: '16px', color: 'var(--muted)', lineHeight: 1.75, margin: 0 }}>
                  {solution.workingApproach}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Anatomy strip */}
      <div style={{ background: 'var(--surface)', borderTop: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)', padding: '60px 0' }}>
        <div className="container-site">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0' }} className="anatomy-strip">
            {[
              { label: 'The Need', value: solution.need },
              { label: 'The Build', value: solution.build },
              { label: 'The Outcome', value: solution.outcome },
            ].map((item, idx) => (
              <div key={item.label} style={{ padding: '32px', borderRight: idx < 2 ? '1px solid var(--rule)' : 'none' }}>
                <p style={{ fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', margin: '0 0 12px' }}>
                  {item.label}
                </p>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 300, color: 'var(--ink)', margin: 0 }}>
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ background: 'var(--bg)', padding: '120px 0', textAlign: 'center' }}>
        <div className="container-site">
          <p className="section-label" style={{ marginBottom: '24px' }}>START A PROJECT</p>
          <h2 className="chapter-title" style={{ maxWidth: '500px', margin: '0 auto 24px' }}>
            Ready to move forward?
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--muted)', maxWidth: '400px', margin: '0 auto 40px', lineHeight: 1.7 }}>
            Tell us about your business and what you need. We will respond within one business day.
          </p>
          <Link href={`/contact?service=${solution.slug}`}>
            <a className="btn-gold">Start a Project →</a>
          </Link>
        </div>
      </div>

      {/* Adjacent navigation */}
      {(adjacent.prev || adjacent.next) && (
        <div style={{ borderTop: '1px solid var(--rule)', display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
          {adjacent.prev ? (
            <Link href={`/solutions/${adjacent.prev.slug}`}>
              <a style={{
                display: 'block', padding: '40px 48px',
                borderRight: '1px solid var(--rule)',
                textDecoration: 'none',
                transition: 'background 0.3s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--surface)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
              >
                <p style={{ fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '8px' }}>← Previous</p>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 300, color: 'var(--ink)', margin: 0 }}>
                  {adjacent.prev.title}
                </p>
              </a>
            </Link>
          ) : <div />}
          {adjacent.next ? (
            <Link href={`/solutions/${adjacent.next.slug}`}>
              <a style={{
                display: 'block', padding: '40px 48px', textAlign: 'right',
                textDecoration: 'none',
                transition: 'background 0.3s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--surface)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
              >
                <p style={{ fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '8px' }}>Next →</p>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 300, color: 'var(--ink)', margin: 0 }}>
                  {adjacent.next.title}
                </p>
              </a>
            </Link>
          ) : <div />}
        </div>
      )}

      <style jsx>{`
        @media (max-width: 900px) {
          .solution-detail-layout { grid-template-columns: 1fr !important; gap: 48px !important; }
          .anatomy-strip { grid-template-columns: 1fr !important; }
          .anatomy-strip > div { border-right: none !important; border-bottom: 1px solid var(--rule); }
          .anatomy-strip > div:last-child { border-bottom: none; }
        }
      `}</style>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: solutions.map(s => ({ params: { slug: s.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params?.slug as string;
  const idx = solutions.findIndex(s => s.slug === slug);
  if (idx === -1) return { notFound: true };
  return {
    props: {
      solution: solutions[idx],
      adjacent: {
        prev: idx > 0 ? solutions[idx - 1] : null,
        next: idx < solutions.length - 1 ? solutions[idx + 1] : null,
      },
    },
  };
};

export default SolutionDetail;
