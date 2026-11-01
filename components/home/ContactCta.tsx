import React, { useRef } from 'react';
import Link from 'next/link';
import Img from '../Img';
import { useInView } from '../../lib/useInView';

export default function ContactCta() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { threshold: 0.15 });

  return (
    <section
      ref={ref}
      style={{
        position: 'relative',
        background: 'var(--surface)',
        borderTop: '1px solid var(--rule)',
        padding: '160px 0',
        overflow: 'hidden',
      }}
      aria-label="Start a conversation"
    >
      {/* Background image — tinted */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.15 }} aria-hidden="true">
        <Img src="/images/svc-automation.png" alt="" objectPosition="center 40%" />
      </div>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to bottom, var(--surface) 0%, transparent 30%, transparent 70%, var(--surface) 100%)',
      }} aria-hidden="true" />

      <div className="container-site" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          maxWidth: '720px', margin: '0 auto', textAlign: 'center',
          opacity: inView ? 1 : 0,
          transform: inView ? 'none' : 'translateY(24px)',
          transition: 'opacity 1s ease, transform 1s ease',
        }}>
          <p className="section-label" style={{ marginBottom: '32px' }}>START THE CONVERSATION</p>
          <h2 className="chapter-title" style={{ marginBottom: '24px' }}>Build what comes next.</h2>
          <div style={{ width: '1px', height: '60px', background: 'var(--rule)', margin: '0 auto 32px' }} aria-hidden="true" />
          <p style={{ fontSize: '18px', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '48px', maxWidth: '480px', marginLeft: 'auto', marginRight: 'auto' }}>
            Tell us where your business is today — and where you want it to go.
          </p>
          <Link href="/contact">
            <a className="btn-gold" style={{ fontSize: '13px', padding: '14px 36px', letterSpacing: '0.14em' }}>
              Start a conversation →
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
