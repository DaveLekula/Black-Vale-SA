import React from 'react';
import Link from 'next/link';

const currentYear = new Date().getFullYear();

const footerLinks = {
  Solutions: [
    { label: 'Websites & Digital Experiences', href: '/solutions/websites-digital-experiences' },
    { label: 'Custom Software Engineering', href: '/solutions/custom-software' },
    { label: 'AI & Workflow Automation', href: '/solutions/ai-workflow-automation' },
    { label: 'Systems Integration', href: '/solutions/systems-integration-modernisation' },
    { label: 'Cloud & Delivery', href: '/solutions/cloud-delivery-reliability' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Approach', href: '/about#approach' },
    { label: 'Insights', href: '/insights' },
    { label: 'Contact', href: '/contact' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Use', href: '/terms' },
  ],
};

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      style={{
        background: 'var(--surface)',
        borderTop: '1px solid var(--rule)',
        paddingTop: '80px',
        paddingBottom: '40px',
      }}
    >
      <div className="container-site">
        {/* Top row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr 1fr',
          gap: '48px',
          paddingBottom: '64px',
          borderBottom: '1px solid var(--rule)',
        }}
        className="footer-grid"
        >
          {/* Brand column */}
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/blackvale-logo-dark.png"
              alt="BLACKVALE SA"
              style={{ height: '44px', width: 'auto', objectFit: 'contain', display: 'block', marginBottom: '20px' }}
            />
            <p style={{ fontSize: '12px', letterSpacing: '0.1em', color: 'var(--muted)', margin: '0 0 24px', textTransform: 'uppercase' }}>
              Software & Digital Solutions — South Africa
            </p>
            <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.6, maxWidth: '240px' }}>
              Technology with presence. Engineering with purpose.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '20px' }}>
              Solutions
            </p>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {footerLinks.Solutions.map((l) => (
                <li key={l.label}>
                  <Link href={l.href}>
                    <a style={{ fontSize: '13px', color: 'var(--muted)', textDecoration: 'none', transition: 'color 0.3s ease' }}
                      onMouseEnter={e => (e.currentTarget.style.color = 'var(--ink)')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}>
                      {l.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '20px' }}>
              Company
            </p>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {footerLinks.Company.map((l) => (
                <li key={l.label}>
                  <Link href={l.href}>
                    <a style={{ fontSize: '13px', color: 'var(--muted)', textDecoration: 'none', transition: 'color 0.3s ease' }}
                      onMouseEnter={e => (e.currentTarget.style.color = 'var(--ink)')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}>
                      {l.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal + back to top */}
          <div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '20px' }}>
              Legal
            </p>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {footerLinks.Legal.map((l) => (
                <li key={l.label}>
                  <Link href={l.href}>
                    <a style={{ fontSize: '13px', color: 'var(--muted)', textDecoration: 'none', transition: 'color 0.3s ease' }}
                      onMouseEnter={e => (e.currentTarget.style.color = 'var(--ink)')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}>
                      {l.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div style={{
          paddingTop: '32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
        }}>
          <p style={{ fontSize: '12px', color: 'var(--muted)', margin: 0, letterSpacing: '0.04em' }}>
            © {currentYear} BLACKVALE SA. All rights reserved.
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            style={{
              background: 'none', border: '1px solid var(--rule)',
              color: 'var(--muted)', cursor: 'pointer',
              fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase',
              padding: '8px 16px', transition: 'all 0.3s ease',
              display: 'flex', alignItems: 'center', gap: '8px',
            }}
            onMouseEnter={e => { (e.currentTarget.style.borderColor = 'var(--gold)'); (e.currentTarget.style.color = 'var(--gold)'); }}
            onMouseLeave={e => { (e.currentTarget.style.borderColor = 'var(--rule)'); (e.currentTarget.style.color = 'var(--muted)'); }}
          >
            ↑ Back to top
          </button>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 540px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
