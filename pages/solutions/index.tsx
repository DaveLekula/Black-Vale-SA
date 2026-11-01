import type { NextPage } from 'next';
import Link from 'next/link';
import Layout from '../../components/Layout';
import Img from '../../components/Img';
import { solutions } from '../../data/solutions';

const SolutionsPage: NextPage = () => {
  return (
    <Layout
      title="Solutions — BLACKVALE SA"
      description="Five ways BLACKVALE SA helps growing businesses: websites, custom software, AI automation, systems integration and cloud delivery."
      canonical="/solutions"
    >
      {/* Page header */}
      <div style={{ background: 'var(--bg)', paddingTop: 'calc(var(--nav-height) + 80px)', paddingBottom: '80px', borderBottom: '1px solid var(--rule)' }}>
        <div className="container-site">
          <p className="section-label" style={{ marginBottom: '20px' }}>THE SOLUTIONS</p>
          <h1 className="chapter-title" style={{ maxWidth: '600px', marginBottom: '24px' }}>
            Five ways to move forward.
          </h1>
          <p style={{ fontSize: '18px', color: 'var(--muted)', maxWidth: '540px', lineHeight: 1.7 }}>
            Each solution is a focused capability. Most projects draw on more than one.
            We start with your problem and recommend what actually fits.
          </p>
        </div>
      </div>

      {/* Solutions list */}
      <div style={{ background: 'var(--bg)' }}>
        {solutions.map((solution, i) => (
          <div
            key={solution.id}
            style={{
              borderBottom: '1px solid var(--rule)',
              background: i % 2 === 0 ? 'var(--bg)' : 'var(--surface)',
            }}
          >
            <div className="container-site">
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '80px',
                padding: '80px 0',
                alignItems: 'center',
              }}
              className="solution-row"
              >
                {/* Text */}
                <div style={{ order: i % 2 === 0 ? 1 : 2 }} className="solution-text-col">
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: '13px', color: 'var(--gold)', letterSpacing: '0.06em', marginBottom: '16px' }}>
                    {solution.number}
                  </p>
                  <h2 className="editorial-title" style={{ marginBottom: '20px' }}>{solution.tagline}</h2>
                  <p className="section-label" style={{ marginBottom: '16px' }}>{solution.title}</p>
                  <p style={{ fontSize: '16px', color: 'var(--muted)', lineHeight: 1.75, maxWidth: '420px', marginBottom: '32px' }}>
                    {solution.description}
                  </p>
                  <Link href={`/solutions/${solution.slug}`}>
                    <a className="btn-gold">{solution.linkText} →</a>
                  </Link>
                </div>

                {/* Image */}
                <div
                  className="img-hover-scale"
                  style={{
                    position: 'relative',
                    paddingBottom: '62%',
                    order: i % 2 === 0 ? 2 : 1,
                  }}
                >
                  <Img src={solution.image} alt={solution.imageAlt} objectPosition={solution.imagePosition} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div style={{ background: 'var(--surface)', padding: '120px 0', textAlign: 'center', borderTop: '1px solid var(--rule)' }}>
        <div className="container-site">
          <p className="section-label" style={{ marginBottom: '24px' }}>NOT SURE WHERE TO START?</p>
          <h2 className="chapter-title" style={{ marginBottom: '32px', maxWidth: '560px', margin: '0 auto 32px' }}>
            Let us help you figure it out.
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--muted)', maxWidth: '400px', margin: '0 auto 40px', lineHeight: 1.7 }}>
            Tell us about your business and we will point you toward the right starting point.
          </p>
          <Link href="/contact">
            <a className="btn-gold">Start a conversation →</a>
          </Link>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .solution-row { grid-template-columns: 1fr !important; gap: 40px !important; padding: 60px 0 !important; }
          .solution-text-col { order: 1 !important; }
        }
      `}</style>
    </Layout>
  );
};

export default SolutionsPage;
