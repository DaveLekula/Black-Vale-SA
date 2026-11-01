import React from 'react';
import Head from 'next/head';
import Nav from './Nav';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  ogImage?: string;
  canonical?: string;
  noNav?: boolean;
  noFooter?: boolean;
}

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://blackvalesa.com';

export default function Layout({
  children,
  title = 'BLACKVALE SA — Software & Digital Solutions',
  description = 'BLACKVALE SA is a South African software engineering and digital solutions company. We build websites, custom applications, automation and integrations for growing businesses.',
  ogImage = '/images/og-default.jpg',
  canonical,
  noNav = false,
  noFooter = false,
}: LayoutProps) {
  const canonicalUrl = canonical ? `${baseUrl}${canonical}` : undefined;

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>
        <meta name="description" content={description} />
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`${baseUrl}${ogImage}`} />
        {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
        <meta property="og:site_name" content="BLACKVALE SA" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${baseUrl}${ogImage}`} />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Preload hero image */}
        <link rel="preload" as="image" href="/images/svc-cloud.png" />
      </Head>

      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {!noNav && <Nav />}

      <main id="main-content" tabIndex={-1}>
        {children}
      </main>

      {!noFooter && <Footer />}
    </>
  );
}
