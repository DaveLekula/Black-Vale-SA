import type { NextPage } from 'next';
import Layout from '../components/Layout';

const TermsPage: NextPage = () => (
  <Layout title="Terms of Use — BLACKVALE SA" description="Terms of use for the BLACKVALE SA website." canonical="/terms">
    <div style={{ paddingTop: 'calc(var(--nav-height) + 80px)', paddingBottom: '120px', background: 'var(--bg)' }}>
      <div className="container-site" style={{ maxWidth: '760px', marginLeft: 'auto', marginRight: 'auto' }}>
        <p className="section-label" style={{ marginBottom: '16px' }}>LEGAL</p>
        <h1 className="chapter-title" style={{ marginBottom: '12px' }}>Terms of Use</h1>
        <p style={{ fontSize: '13px', color: 'var(--muted)', marginBottom: '48px' }}>
          Draft — awaiting owner review. Please have this document reviewed by a qualified legal professional before publication.
        </p>

        {[
          {
            heading: 'Use of this website',
            body: 'By accessing the BLACKVALE SA website, you agree to use it for lawful purposes only. You may not use this website in any way that is unlawful, harmful or that infringes the rights of others.',
          },
          {
            heading: 'Content and intellectual property',
            body: 'All content on this website — including text, design, images and code — is the property of BLACKVALE SA or its licensed suppliers and is protected by applicable intellectual property laws. You may not reproduce, distribute or create derivative works from this content without prior written permission.',
          },
          {
            heading: 'No professional advice',
            body: 'The content on this website is for general informational purposes only. It does not constitute legal, financial, technical or professional advice of any kind. BLACKVALE SA does not accept liability for decisions made based on information on this website.',
          },
          {
            heading: 'Accuracy',
            body: 'We make reasonable efforts to ensure the accuracy of information on this website, but we make no warranties of any kind regarding its completeness or fitness for any particular purpose.',
          },
          {
            heading: 'Third-party links',
            body: 'This website may contain links to third-party websites. These links are provided for convenience only. BLACKVALE SA does not endorse or accept responsibility for the content of external sites.',
          },
          {
            heading: 'Limitation of liability',
            body: 'To the maximum extent permitted by applicable law, BLACKVALE SA shall not be liable for any direct, indirect, incidental, consequential or special damages arising from your use of this website.',
          },
          {
            heading: 'Governing law',
            body: 'These terms are governed by the laws of the Republic of South Africa. Any disputes arising in connection with these terms shall be subject to the jurisdiction of the South African courts.',
          },
          {
            heading: 'Changes to these terms',
            body: 'We may update these terms from time to time. Continued use of the website following any changes constitutes your acceptance of the revised terms.',
          },
        ].map(section => (
          <div key={section.heading} style={{ borderTop: '1px solid var(--rule)', paddingTop: '32px', paddingBottom: '32px' }}>
            <h2 style={{ fontFamily: 'var(--font-body)', fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>
              {section.heading}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--muted)', lineHeight: 1.8, margin: 0 }}>{section.body}</p>
          </div>
        ))}
        <div style={{ borderTop: '1px solid var(--rule)', paddingTop: '24px' }}>
          <p style={{ fontSize: '13px', color: 'var(--muted)' }}>Last updated: October 2026</p>
        </div>
      </div>
    </div>
  </Layout>
);

export default TermsPage;
