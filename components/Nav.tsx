import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NAV_HEIGHT = 72;

const navLinks = [
  { href: '/solutions', label: 'Solutions' },
  { href: '/about#approach', label: 'Approach' },
  { href: '/about', label: 'About' },
  { href: '/insights', label: 'Insights' },
  { href: '/contact', label: 'Contact' },
];

/** Scroll to an on-page anchor, offset for the fixed nav. */
function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return false;
  const top = el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT - 16;
  window.scrollTo({ top, behavior: 'smooth' });
  return true;
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      const first = menuRef.current?.querySelector('a') as HTMLElement | null;
      if (first) setTimeout(() => first.focus(), 100);
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [router.asPath]);

  /**
   * Handle anchor links that may be on the current page already.
   * If the pathname matches and the hash target exists, scroll in-page.
   * Otherwise let Next.js navigate normally.
   */
  const handleNavClick = useCallback((
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    const hashIndex = href.indexOf('#');
    if (hashIndex === -1) return; // no anchor — normal navigation

    const targetPath = href.slice(0, hashIndex);
    const targetId = href.slice(hashIndex + 1);

    if (router.pathname === targetPath || (targetPath === '' && router.pathname === '/')) {
      // Already on the right page — scroll in-place
      e.preventDefault();
      scrollToId(targetId);
    }
    // Otherwise let Next.js navigate; the about page useEffect handles the scroll after load
  }, [router.pathname]);

  return (
    <>
      <nav
        role="navigation"
        aria-label="Main navigation"
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 100,
          height: `${NAV_HEIGHT}px`,
          display: 'flex',
          alignItems: 'center',
          transition: 'background 0.4s ease, border-color 0.4s ease',
          background: scrolled ? 'rgba(12,10,9,0.95)' : 'transparent',
          borderBottom: scrolled ? '1px solid var(--rule)' : '1px solid transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
        }}
      >
        <div className="container-site" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>

          {/* Logo */}
          <Link href="/">
            <a style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }} aria-label="BLACKVALE SA — Home">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/blackvale-logo-dark.png"
                alt="BLACKVALE SA"
                style={{ height: '40px', width: 'auto', objectFit: 'contain', display: 'block' }}
              />
            </a>
          </Link>

          {/* Desktop nav */}
          <ul style={{
            display: 'flex', alignItems: 'center', gap: '36px',
            listStyle: 'none', margin: 0, padding: 0,
          }} className="desktop-nav">
            {navLinks.map((link) => {
              const isActive = router.asPath === link.href ||
                (link.href === '/about' && router.pathname === '/about' && !router.asPath.includes('#'));
              return (
                <li key={link.label}>
                  <Link href={link.href}>
                    <a
                      className="nav-link"
                      style={{ color: isActive ? 'var(--ink)' : undefined }}
                      onClick={(e) => handleNavClick(e, link.href)}
                    >
                      {link.label}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* CTA + Hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <Link href="/contact">
              <a className="btn-gold" style={{ display: 'flex' }} aria-label="Start a project">
                Start a Project
              </a>
            </Link>

            <button
              ref={triggerRef}
              className="hamburger-btn"
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                padding: '8px', display: 'flex', flexDirection: 'column', gap: '5px',
              }}
            >
              <span style={{
                display: 'block', width: '22px', height: '1px', background: 'var(--ink)',
                transition: 'transform 0.3s ease, opacity 0.3s ease',
                transform: menuOpen ? 'translateY(6px) rotate(45deg)' : 'none',
              }} />
              <span style={{
                display: 'block', width: '22px', height: '1px', background: 'var(--ink)',
                transition: 'opacity 0.3s ease',
                opacity: menuOpen ? 0 : 1,
              }} />
              <span style={{
                display: 'block', width: '22px', height: '1px', background: 'var(--ink)',
                transition: 'transform 0.3s ease, opacity 0.3s ease',
                transform: menuOpen ? 'translateY(-6px) rotate(-45deg)' : 'none',
              }} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`mobile-overlay${menuOpen ? ' open' : ''}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        ref={menuRef}
        className={`mobile-menu${menuOpen ? ' open' : ''}`}
        role="dialog"
        aria-label="Navigation menu"
        aria-modal="true"
      >
        <button
          onClick={() => { setMenuOpen(false); triggerRef.current?.focus(); }}
          aria-label="Close menu"
          style={{
            position: 'absolute', top: 24, right: 24,
            background: 'none', border: 'none', cursor: 'pointer',
            color: 'var(--muted)', fontSize: '24px', lineHeight: 1, padding: '8px',
          }}
        >
          ✕
        </button>

        <div style={{ borderBottom: '1px solid var(--rule)', paddingBottom: '32px', marginBottom: '32px' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/blackvale-logo-dark.png"
            alt="BLACKVALE SA"
            style={{ height: '36px', width: 'auto', objectFit: 'contain', display: 'block' }}
          />
        </div>

        <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '4px' }}>
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link href={link.href}>
                <a
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-display)',
                    fontSize: '28px', fontWeight: 300,
                    color: 'var(--ink)', textDecoration: 'none',
                    padding: '10px 0',
                    transition: 'color 0.3s ease',
                  }}
                  onClick={(e) => {
                    handleNavClick(e, link.href);
                    setMenuOpen(false);
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--ink)')}
                >
                  {link.label}
                </a>
              </Link>
            </li>
          ))}
        </ul>

        <div style={{ marginTop: '40px', paddingTop: '32px', borderTop: '1px solid var(--rule)' }}>
          <Link href="/contact">
            <a className="btn-gold" style={{ display: 'inline-flex' }}>
              Start a Project
            </a>
          </Link>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 769px) {
          .hamburger-btn { display: none !important; }
        }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .btn-gold { display: none !important; }
        }
      `}</style>
    </>
  );
}
