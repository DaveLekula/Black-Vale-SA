import type { NextPage } from 'next';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Layout from '../components/Layout';
import Img from '../components/Img';

const principles = [
  {
    label: 'Business first',
    body: 'Every technical decision starts with the business problem. We do not build technology for its own sake — only for the value it creates for the people using it.',
  },
  {
    label: 'Engineering discipline',
    body: 'Clean architecture, clear interfaces, maintainable code. The quality of the build matters long after launch. We hold this standard on every project regardless of size.',
  },
  {
    label: 'Long-term thinking',
    body: 'We design for what comes next, not just what is needed today. Systems should grow with the business, not become obstacles to its growth.',
  },
];

const AboutPage: NextPage = () => {
  const router = useRouter();

  // After navigation to /about#approach, scroll past the fixed nav
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const hash = window.location.hash;
    if (!hash) return;
    // Small delay lets the page paint first
    const id = hash.replace('#', '');
    const attempt = (tries: number) => {
      const el = document.getElementById(id);
      if (el) {
        const navHeight = 72;
        const top = el.getBoundingClientRect().top + window.scrollY - navHeight - 16;
        window.scrollTo({ top, behavior: 'smooth' });
      } else if (tries > 0) {
        setTimeout(() => attempt(tries - 1), 100);
      }
    };
    setTimeout(() => attempt(5), 120);
  }, [router.asPath]);
  return (
    <Layout
      title="About & Approach — BLACKVALE SA"
      description="BLACKVALE SA brings together software engineering, digital design and practical automation to help organisations build stronger digital foundations."
      canonical="/about"
    >
      {/* Hero */}
      <div style={{
        paddingTop: 'calc(var(--nav-height) + 80px)',
        paddingBottom: '80px',
        background: 'var(--bg)',
        borderBottom: '1px solid var(--rule)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.1 }} aria-hidden="true">
          <Img src="/images/svc-integration.png" alt="" objectPosition="center center" />
        </div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, var(--bg) 50%, transparent)' }} aria-hidden="true" />
        <div className="container-site" style={{ position: 'relative', zIndex: 1 }}>
          <p className="section-label" style={{ marginBottom: '20px' }}>ABOUT</p>
          <h1 className="chapter-title" style={{ maxWidth: '640px', marginBottom: '24px' }}>
            Built deliberately.<br /><em>Built for what comes next.</em>
          </h1>
          <div style={{ width: '48px', height: '1px', background: 'var(--gold)', marginBottom: '24px' }} />
          <p style={{ fontSize: '18px', color: 'var(--muted)', maxWidth: '540px', lineHeight: 1.7 }}>
            Technology with presence. Engineering with purpose.
          </p>
        </div>
      </div>

      {/* Main about copy */}
      <div style={{ background: 'var(--bg)', padding: '100px 0', borderBottom: '1px solid var(--rule)' }}>
        <div className="container-site">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px' }} className="about-layout">
            <div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 3vw, 40px)', fontWeight: 300, color: 'var(--ink)', marginBottom: '28px', lineHeight: 1.2 }}>
                Who we are
              </h2>
              <p style={{ fontSize: '17px', color: 'var(--muted)', lineHeight: 1.8, marginBottom: '24px' }}>
                BLACKVALE SA brings together software engineering, digital design and practical automation
                to help organisations build stronger digital foundations.
              </p>
              <p style={{ fontSize: '17px', color: 'var(--muted)', lineHeight: 1.8, marginBottom: '24px' }}>
                We work with growing businesses and organisations that need reliable, well-built digital
                systems — whether that is a website that accurately represents their work, a custom
                application that supports how their team operates, or a set of integrations that remove
                manual effort from routine processes.
              </p>
              <p style={{ fontSize: '17px', color: 'var(--muted)', lineHeight: 1.8 }}>
                We are based in South Africa and work with clients across sectors and borders. Our focus
                is not on scale or speed for their own sake, but on delivering work that endures and continues
                to serve the business after the project ends.
              </p>
            </div>

            <div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 3vw, 40px)', fontWeight: 300, color: 'var(--ink)', marginBottom: '28px', lineHeight: 1.2 }}>
                What we value
              </h2>
              <p style={{ fontSize: '17px', color: 'var(--muted)', lineHeight: 1.8, marginBottom: '24px' }}>
                Clear communication throughout the project — not just at the start. We keep clients
                informed, flag uncertainty early and do not over-promise on scope or timeline.
              </p>
              <p style={{ fontSize: '17px', color: 'var(--muted)', lineHeight: 1.8, marginBottom: '24px' }}>
                Thoughtful execution over fast output. The quality of what we build is visible not just
                at launch, but six months later when a new team member needs to make a change, or when
                the business grows into something the original design needs to accommodate.
              </p>
              <p style={{ fontSize: '17px', color: 'var(--muted)', lineHeight: 1.8 }}>
                Honest engagement with problems. We would rather surface a difficult truth early than
                discover it mid-delivery. Good work starts with understanding what is actually required.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Approach — ID for anchor */}
      <div id="approach" style={{ background: 'var(--surface)', padding: '100px 0', borderBottom: '1px solid var(--rule)', scrollMarginTop: 'calc(var(--nav-height) + 16px)' }}>
        <div className="container-site">
          <p className="section-label" style={{ marginBottom: '20px' }}>THE APPROACH</p>
          <h2 className="chapter-title" style={{ maxWidth: '560px', marginBottom: '64px' }}>
            How we work with clients.
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0' }} className="steps-grid">
            {[
              { n: '01', title: 'Discover', body: 'We begin by understanding the business problem, not by assuming it. That means asking about your users, your constraints, your existing systems and what success actually looks like.' },
              { n: '02', title: 'Design & Build', body: 'We shape the solution with you — reviewing approaches, validating assumptions and building in iterations. There are no surprises at handover because the work has been visible throughout.' },
              { n: '03', title: 'Launch & Evolve', body: 'We deploy with care, establish the right level of monitoring and agree on next steps for ongoing support and improvement. A launch is a beginning, not an end.' },
            ].map((step, i) => (
              <div key={step.n} style={{
                padding: '48px 48px 48px 0',
                borderRight: i < 2 ? '1px solid var(--rule)' : 'none',
                paddingRight: i < 2 ? '48px' : 0,
                paddingLeft: i > 0 ? '48px' : 0,
              }}>
                <p className="process-number" style={{ marginBottom: '16px' }}>{step.n}</p>
                <h3 style={{ fontFamily: 'var(--font-body)', fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink)', marginBottom: '16px' }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: 1.75 }}>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Principles */}
      <div style={{ background: 'var(--bg)', padding: '100px 0', borderBottom: '1px solid var(--rule)' }}>
        <div className="container-site">
          <p className="section-label" style={{ marginBottom: '20px' }}>GUIDING PRINCIPLES</p>
          <h2 className="chapter-title" style={{ maxWidth: '520px', marginBottom: '64px' }}>
            The standards we hold.
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {principles.map((p, i) => (
              <div key={p.label} style={{
                display: 'grid',
                gridTemplateColumns: '220px 1fr',
                gap: '48px',
                paddingTop: '32px',
                paddingBottom: '32px',
                borderTop: '1px solid var(--rule)',
              }}
              className="principle-row"
              >
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold)', margin: 0, paddingTop: '3px' }}>
                  {p.label}
                </p>
                <p style={{ fontSize: '16px', color: 'var(--muted)', lineHeight: 1.75, margin: 0 }}>
                  {p.body}
                </p>
              </div>
            ))}
            <div style={{ borderTop: '1px solid var(--rule)' }} />
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ background: 'var(--surface)', padding: '120px 0', textAlign: 'center' }}>
        <div className="container-site">
          <h2 className="chapter-title" style={{ maxWidth: '520px', margin: '0 auto 32px' }}>
            Ready to start a conversation?
          </h2>
          <Link href="/contact">
            <a className="btn-gold">Get in touch →</a>
          </Link>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .about-layout { grid-template-columns: 1fr !important; gap: 48px !important; }
          .steps-grid { grid-template-columns: 1fr !important; }
          .steps-grid > div { border-right: none !important; padding-left: 0 !important; border-top: 1px solid var(--rule); }
          .principle-row { grid-template-columns: 1fr !important; gap: 12px !important; }
        }
      `}</style>
    </Layout>
  );
};

export default AboutPage;
