import type { NextPage } from 'next';
import Layout from '../components/Layout';

const PrivacyPage: NextPage = () => (
  <Layout title="Privacy Policy — BLACKVALE SA" description="Privacy policy for BLACKVALE SA." canonical="/privacy">
    <div style={{ paddingTop: 'calc(var(--nav-height) + 80px)', paddingBottom: '120px', background: 'var(--bg)' }}>
      <div className="container-site" style={{ maxWidth: '760px', marginLeft: 'auto', marginRight: 'auto' }}>
        <p className="section-label" style={{ marginBottom: '16px' }}>LEGAL</p>
        <h1 className="chapter-title" style={{ marginBottom: '12px' }}>Privacy Policy</h1>
        <p style={{ fontSize: '13px', color: 'var(--muted)', marginBottom: '48px' }}>
          Draft — awaiting owner review. This document describes current implemented behaviour and should be reviewed by a qualified legal professional before publication.
        </p>

        {[
          {
            heading: 'Who we are',
            body: 'BLACKVALE SA is a South African software engineering and digital solutions company. This privacy policy applies to the BLACKVALE SA website.',
          },
          {
            heading: 'What information we collect',
            body: 'We collect information you voluntarily provide through the contact form: your name, email address, optional company name, service interest, optional budget range and project description. We do not collect payment information, sensitive personal information or biometric data.',
          },
          {
            heading: 'How we use your information',
            body: 'We use your contact information solely to respond to your enquiry and to conduct the relevant project discussions. We do not use it for marketing purposes unless you separately consent. We do not sell, share or transfer your personal information to third parties except where necessary to deliver the services you have requested.',
          },
          {
            heading: 'Data storage and security',
            body: 'Enquiry information submitted through the contact form is processed and transmitted to the configured email recipient. It is not stored in a database or log file by this application. You are responsible for the security of your email environment. We take reasonable technical measures to protect data in transit.',
          },
          {
            heading: 'Cookies and analytics',
            body: 'This website does not currently use tracking cookies or third-party analytics. If this changes, this policy will be updated and a cookie notice will be displayed.',
          },
          {
            heading: 'Your rights',
            body: 'You have the right to request access to, correction of, or deletion of personal information we hold about you. To exercise these rights, contact us using the details provided on the contact page.',
          },
          {
            heading: 'Changes to this policy',
            body: 'This policy may be updated from time to time. The date at the bottom of this page reflects the most recent revision.',
          },
          {
            heading: 'Contact',
            body: 'For privacy-related enquiries, please use the contact form on this website.',
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

export default PrivacyPage;
