import type { NextPage } from 'next';
import { useState, useRef } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';

const serviceOptions = [
  { value: '', label: 'Select a service area' },
  { value: 'websites-digital-experiences', label: 'Websites & Digital Experiences' },
  { value: 'custom-software', label: 'Custom Software Engineering' },
  { value: 'ai-workflow-automation', label: 'AI & Workflow Automation' },
  { value: 'systems-integration-modernisation', label: 'Systems Integration & Modernisation' },
  { value: 'cloud-delivery-reliability', label: 'Cloud, Delivery & Application Reliability' },
  { value: 'not-sure', label: "I'm not sure yet — help me figure it out" },
];

const budgetOptions = [
  { value: '', label: 'Select a budget range (optional)' },
  { value: 'under-50k', label: 'Under R50,000' },
  { value: '50k-150k', label: 'R50,000 – R150,000' },
  { value: '150k-500k', label: 'R150,000 – R500,000' },
  { value: 'over-500k', label: 'Over R500,000' },
  { value: 'to-discuss', label: 'Prefer to discuss' },
];

interface FormData {
  name: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  description: string;
  privacy: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  description?: string;
  privacy?: string;
}

const ContactPage: NextPage = () => {
  const router = useRouter();
  const { service: preService } = router.query;

  const [form, setForm] = useState<FormData>({
    name: '', email: '', company: '',
    service: (preService as string) || '',
    budget: '', description: '', privacy: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const validate = (): FormErrors => {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = 'Your name is required.';
    if (!form.email.trim()) e.email = 'Your email address is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email address.';
    if (!form.description.trim()) e.description = 'Please describe your project or enquiry.';
    if (!form.privacy) e.privacy = 'Please acknowledge the privacy notice to continue.';
    return e;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setForm(f => ({
      ...f,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => { const n = { ...prev }; delete n[name as keyof FormErrors]; return n; });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setSubmitting(true);
    setSubmitError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        const data = await res.json().catch(() => ({}));
        setSubmitError(data.message || 'There was a problem sending your enquiry. Please try again or copy your details below.');
      }
    } catch {
      setSubmitError('Unable to send — the form endpoint is not configured. Please copy your details below and contact us directly.');
    }
    setSubmitting(false);
  };

  const getBrief = () =>
    `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company || 'Not provided'}\nService: ${form.service || 'Not specified'}\nBudget: ${form.budget || 'Not provided'}\n\nDescription:\n${form.description}`;

  return (
    <Layout
      title="Contact — BLACKVALE SA"
      description="Start a project with BLACKVALE SA. Tell us about your business and what you need."
      canonical="/contact"
    >
      {/* Header */}
      <div style={{ paddingTop: 'calc(var(--nav-height) + 80px)', paddingBottom: '80px', background: 'var(--bg)', borderBottom: '1px solid var(--rule)' }}>
        <div className="container-site">
          <p className="section-label" style={{ marginBottom: '20px' }}>CONTACT</p>
          <h1 className="chapter-title" style={{ maxWidth: '560px', marginBottom: '24px' }}>
            Build what comes next.
          </h1>
          <p style={{ fontSize: '18px', color: 'var(--muted)', maxWidth: '480px', lineHeight: 1.7 }}>
            Tell us where your business is today — and where you want it to go.
          </p>
        </div>
      </div>

      {/* Form */}
      <div style={{ background: 'var(--bg)', padding: '80px 0 120px' }}>
        <div className="container-site">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '80px' }} className="contact-layout">

            {/* Sidebar info */}
            <div>
              <div style={{ borderTop: '1px solid var(--rule)', paddingTop: '40px' }}>
                <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '20px', color: 'var(--ink)', lineHeight: 1.5, marginBottom: '40px' }}>
                  Good work begins with understanding what matters.
                </p>
                <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '32px' }}>
                  We respond to every enquiry within one business day. We will ask a few clarifying
                  questions before proposing anything — that is how we make sure what we recommend actually fits.
                </p>
                <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.7 }}>
                  Based in South Africa. Working with clients across sectors and borders.
                </p>
              </div>
            </div>

            {/* Form column */}
            <div>
              {submitted ? (
                <div style={{ padding: '48px', border: '1px solid var(--rule)', textAlign: 'center' }}>
                  <p style={{ color: 'var(--gold)', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '16px' }}>
                    Enquiry received
                  </p>
                  <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '28px', fontWeight: 300, color: 'var(--ink)', marginBottom: '16px' }}>
                    Thank you, {form.name.split(' ')[0]}.
                  </h2>
                  <p style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: 1.7 }}>
                    We have received your enquiry and will be in touch within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate aria-label="Project enquiry form">
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }} className="form-row">
                    <div>
                      <label htmlFor="name" className="form-label">Name <span aria-label="required" style={{ color: 'var(--gold)' }}>*</span></label>
                      <input id="name" name="name" type="text" className="form-input" value={form.name} onChange={handleChange} autoComplete="name" aria-required="true" aria-describedby={errors.name ? 'name-error' : undefined} />
                      {errors.name && <span id="name-error" className="form-error" role="alert">{errors.name}</span>}
                    </div>
                    <div>
                      <label htmlFor="email" className="form-label">Email <span aria-label="required" style={{ color: 'var(--gold)' }}>*</span></label>
                      <input id="email" name="email" type="email" className="form-input" value={form.email} onChange={handleChange} autoComplete="email" aria-required="true" aria-describedby={errors.email ? 'email-error' : undefined} />
                      {errors.email && <span id="email-error" className="form-error" role="alert">{errors.email}</span>}
                    </div>
                  </div>

                  <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="company" className="form-label">Company (optional)</label>
                    <input id="company" name="company" type="text" className="form-input" value={form.company} onChange={handleChange} autoComplete="organization" />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }} className="form-row">
                    <div>
                      <label htmlFor="service" className="form-label">Service interest</label>
                      <select id="service" name="service" className="form-select" value={form.service} onChange={handleChange}>
                        {serviceOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="budget" className="form-label">Budget band (optional)</label>
                      <select id="budget" name="budget" className="form-select" value={form.budget} onChange={handleChange}>
                        {budgetOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                      </select>
                    </div>
                  </div>

                  <div style={{ marginBottom: '24px' }}>
                    <label htmlFor="description" className="form-label">Tell us about your project <span aria-label="required" style={{ color: 'var(--gold)' }}>*</span></label>
                    <textarea
                      id="description" name="description" rows={6}
                      className="form-input" style={{ resize: 'vertical', minHeight: '140px' }}
                      value={form.description} onChange={handleChange}
                      placeholder="Describe the problem you are trying to solve, what you have today, and what you are aiming for."
                      aria-required="true"
                      aria-describedby={errors.description ? 'description-error' : undefined}
                    />
                    {errors.description && <span id="description-error" className="form-error" role="alert">{errors.description}</span>}
                  </div>

                  <div style={{ marginBottom: '32px' }}>
                    <label style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', cursor: 'pointer' }}>
                      <input
                        type="checkbox" name="privacy" checked={form.privacy} onChange={handleChange}
                        aria-required="true"
                        aria-describedby={errors.privacy ? 'privacy-error' : undefined}
                        style={{ marginTop: '3px', accentColor: 'var(--gold)', flexShrink: 0 }}
                      />
                      <span style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.6 }}>
                        I acknowledge that BLACKVALE SA will use the information I provide to respond to this enquiry.
                        I have read the <a href="/privacy" style={{ color: 'var(--gold)' }}>Privacy Policy</a>.
                      </span>
                    </label>
                    {errors.privacy && <span id="privacy-error" className="form-error" role="alert" style={{ marginTop: '8px', display: 'block' }}>{errors.privacy}</span>}
                  </div>

                  {submitError && (
                    <div style={{ background: 'var(--surface)', border: '1px solid var(--rule)', padding: '20px', marginBottom: '24px' }} role="alert">
                      <p style={{ fontSize: '14px', color: 'var(--muted)', margin: '0 0 12px' }}>{submitError}</p>
                      <button
                        type="button"
                        onClick={() => {
                          const el = document.createElement('textarea');
                          el.value = getBrief();
                          document.body.appendChild(el);
                          el.select();
                          document.execCommand('copy');
                          document.body.removeChild(el);
                          alert('Brief copied to clipboard.');
                        }}
                        style={{ fontSize: '12px', letterSpacing: '0.08em', background: 'none', border: '1px solid var(--rule)', color: 'var(--muted)', padding: '8px 16px', cursor: 'pointer' }}
                      >
                        Copy brief to clipboard
                      </button>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-gold"
                    style={{ opacity: submitting ? 0.6 : 1, cursor: submitting ? 'wait' : 'pointer', fontSize: '13px', padding: '14px 36px' }}
                    aria-busy={submitting}
                  >
                    {submitting ? 'Sending…' : 'Send enquiry →'}
                  </button>

                  <p style={{ fontSize: '12px', color: 'var(--muted)', marginTop: '16px', lineHeight: 1.6 }}>
                    Fields marked with <span style={{ color: 'var(--gold)' }}>*</span> are required.
                    Your information is not stored in any log or shared with third parties.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .contact-layout { grid-template-columns: 1fr !important; gap: 48px !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </Layout>
  );
};

export default ContactPage;
