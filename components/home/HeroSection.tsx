import React, { useEffect, useRef } from 'react';

export default function HeroSection() {
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!imgRef.current) return;
      const scrollY = window.scrollY;
      // Subtle parallax: move the image up as user scrolls
      imgRef.current.style.transform = `translateY(${scrollY * 0.25}px)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToContent = () => {
    const target = document.getElementById('belief');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      aria-label="Hero"
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        minHeight: '640px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Background image with parallax */}
      <div
        ref={imgRef}
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: '-8%',
          backgroundImage: 'url(/images/svc-cloud.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
          willChange: 'transform',
        }}
      />

      {/* Dark overlay */}
      <div
        aria-hidden="true"
        className="hero-overlay"
        style={{ position: 'absolute', inset: 0 }}
      />

      {/* Grain texture */}
      <div aria-hidden="true" className="image-grain" style={{ position: 'absolute', inset: 0 }} />

      {/* Vertical framing rules */}
      <div aria-hidden="true" style={{
        position: 'absolute', top: 0, bottom: 0,
        left: '48px', width: '1px',
        background: 'var(--rule)',
      }} className="hero-rule-left" />
      <div aria-hidden="true" style={{
        position: 'absolute', top: 0, bottom: 0,
        right: '48px', width: '1px',
        background: 'var(--rule)',
      }} className="hero-rule-right" />

      {/* Central content */}
      <div style={{
        position: 'relative', zIndex: 2,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', textAlign: 'center',
        padding: '0 24px',
        width: '100%',
        maxWidth: '1100px',
      }}>
        {/* Eyebrow */}
        <p
          className="section-label animate-fade-up"
          style={{ animationDelay: '0.2s', marginBottom: '32px' }}
          aria-hidden="true"
        >
          SOFTWARE & DIGITAL SOLUTIONS — SOUTH AFRICA
        </p>

        {/* Horizontal rule */}
        <div aria-hidden="true" style={{
          width: '100%',
          maxWidth: '720px',
          height: '1px',
          background: 'var(--rule)',
          marginBottom: '40px',
        }} className="animate-fade-in" />

        {/* Wordmark */}
        <div style={{ position: 'relative', lineHeight: 1 }}>
          <h1
            className="hero-wordmark animate-fade-up"
            style={{ animationDelay: '0.35s', margin: 0 }}
          >
            BLACKVALE
          </h1>
          <span
            className="hero-sa animate-fade-up"
            style={{
              animationDelay: '0.45s',
              display: 'block',
              marginTop: '8px',
            }}
            aria-label="SA"
          >
            SA
          </span>
        </div>

        {/* Italic supporting line */}
        <p
          className="animate-fade-up"
          style={{
            animationDelay: '0.55s',
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontWeight: 300,
            fontSize: 'clamp(16px, 2vw, 22px)',
            color: 'var(--muted)',
            marginTop: '32px',
            letterSpacing: '0.02em',
          }}
        >
          Built with purpose. Designed to endure.
        </p>

        {/* Horizontal rule */}
        <div aria-hidden="true" style={{
          width: '100%',
          maxWidth: '720px',
          height: '1px',
          background: 'var(--rule)',
          marginTop: '40px',
        }} />

        {/* Begin cue */}
        <button
          className="begin-cue animate-fade-up"
          style={{ animationDelay: '0.75s', marginTop: '48px' }}
          onClick={scrollToContent}
          aria-label="Scroll down to begin"
        >
          <span>Begin</span>
          <span className="begin-cue-line" aria-hidden="true" />
        </button>
      </div>

      {/* Bottom metadata */}
      <div style={{
        position: 'absolute',
        bottom: '32px',
        left: 0,
        right: 0,
        padding: '0 64px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        zIndex: 2,
      }}
      className="hero-meta"
      >
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '11px',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: 'var(--muted)',
          margin: 0,
        }}>
          ENGINEERING · DESIGN · AUTOMATION
        </p>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '11px',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: 'var(--muted)',
          margin: 0,
          textAlign: 'right',
        }}>
          SOUTH AFRICA · WORKING BEYOND BORDERS
        </p>
      </div>

      <style jsx>{`
        @media (max-width: 640px) {
          .hero-rule-left, .hero-rule-right { display: none; }
          .hero-meta { padding: 0 20px; flex-direction: column; align-items: center; gap: 8px; text-align: center; }
          .hero-meta p { text-align: center !important; }
        }
      `}</style>
    </section>
  );
}
