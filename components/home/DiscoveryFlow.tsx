import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { useInView } from '../../lib/useInView';

const goalOptions = [
  { value: 'online-presence', label: 'Strengthen my online presence', slug: 'websites-digital-experiences' },
  { value: 'business-system', label: 'Build a business system or application', slug: 'custom-software' },
  { value: 'automate', label: 'Automate repetitive work', slug: 'ai-workflow-automation' },
  { value: 'connect-tools', label: 'Connect or integrate existing tools', slug: 'systems-integration-modernisation' },
  { value: 'reliability', label: 'Improve delivery or reliability', slug: 'cloud-delivery-reliability' },
];

const startingOptions = [
  { value: 'new', label: 'A new idea or greenfield project' },
  { value: 'existing', label: 'An existing system I want to improve' },
  { value: 'uncertain', label: "I'm not sure yet" },
];

const timingOptions = [
  { value: 'exploring', label: 'Exploring options, no urgency' },
  { value: 'few-months', label: 'Looking to start in the next few months' },
  { value: 'ready', label: "Ready to discuss — let's talk" },
];

const serviceNames: Record<string, string> = {
  'websites-digital-experiences': 'Websites & Digital Experiences',
  'custom-software': 'Custom Software Engineering',
  'ai-workflow-automation': 'AI & Workflow Automation',
  'systems-integration-modernisation': 'Systems Integration & Modernisation',
  'cloud-delivery-reliability': 'Cloud, Delivery & Application Reliability',
};

const serviceExplainers: Record<string, string> = {
  'websites-digital-experiences': 'Based on your goal, a website or digital experience project is likely the right starting point.',
  'custom-software': 'Building a purpose-built application sounds like the right fit for your situation.',
  'ai-workflow-automation': 'Automating the right processes can free up meaningful time and reduce errors.',
  'systems-integration-modernisation': 'Connecting your existing tools cleanly is often the highest-value move.',
  'cloud-delivery-reliability': 'Improving your delivery process creates a stable foundation for everything else.',
};

interface Answers {
  goal: string | null;
  starting: string | null;
  timing: string | null;
}

export default function DiscoveryFlow() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { threshold: 0.1 });
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<Answers>({ goal: null, starting: null, timing: null });
  const [complete, setComplete] = useState(false);

  const selectedGoal = goalOptions.find(o => o.value === answers.goal);
  const recommendedSlug = selectedGoal?.slug || 'websites-digital-experiences';

  const handleGoal = (val: string) => {
    setAnswers(a => ({ ...a, goal: val }));
    setTimeout(() => setStep(2), 300);
  };

  const handleStarting = (val: string) => {
    setAnswers(a => ({ ...a, starting: val }));
    setTimeout(() => setStep(3), 300);
  };

  const handleTiming = (val: string) => {
    setAnswers(a => ({ ...a, timing: val }));
    setTimeout(() => setComplete(true), 300);
  };

  const reset = () => {
    setAnswers({ goal: null, starting: null, timing: null });
    setStep(1);
    setComplete(false);
  };

  const prefilled = encodeURIComponent(`Goal: ${selectedGoal?.label || ''}\nStarting: ${answers.starting || ''}\nTiming: ${answers.timing || ''}`);

  return (
    <section
      ref={ref}
      style={{
        background: 'var(--surface-soft)',
        borderTop: '1px solid var(--rule)',
        padding: '120px 0',
      }}
      aria-label="Solution discovery"
    >
      <div className="container-site">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'start',
        }}
        className="discovery-layout"
        >
          {/* Heading */}
          <div style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'none' : 'translateY(16px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
          }}>
            <p className="section-label" style={{ marginBottom: '24px' }}>
              DISCOVERY
            </p>
            <h2 className="chapter-title" style={{ marginBottom: '24px' }}>
              What does your business<br />
              <em>need next?</em>
            </h2>
            <div style={{ width: '48px', height: '1px', background: 'var(--gold)', marginBottom: '24px' }} aria-hidden="true" />
            <p style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: 1.7, maxWidth: '340px' }}>
              Three questions. A pointed recommendation. No commitment required.
            </p>
          </div>

          {/* Flow card */}
          <div
            className="discovery-card"
            style={{
              padding: '48px',
              opacity: inView ? 1 : 0,
              transform: inView ? 'none' : 'translateY(24px)',
              transition: 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s',
            }}
          >
            {!complete ? (
              <>
                {/* Step indicator */}
                <div style={{ display: 'flex', gap: '8px', marginBottom: '32px' }} aria-live="polite">
                  {[1, 2, 3].map(n => (
                    <div key={n} style={{
                      height: '2px', flex: 1,
                      background: step >= n ? 'var(--gold)' : 'var(--rule)',
                      transition: 'background 0.4s ease',
                    }} aria-hidden="true" />
                  ))}
                </div>

                <p
                  style={{ fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '16px' }}
                  aria-live="polite"
                >
                  Step {step} of 3
                </p>

                {step === 1 && (
                  <fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
                    <legend style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 300, color: 'var(--ink)', marginBottom: '24px', display: 'block' }}>
                      What is your primary goal?
                    </legend>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {goalOptions.map(opt => (
                        <button
                          key={opt.value}
                          className={`discovery-option${answers.goal === opt.value ? ' selected' : ''}`}
                          onClick={() => handleGoal(opt.value)}
                          aria-pressed={answers.goal === opt.value}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </fieldset>
                )}

                {step === 2 && (
                  <fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
                    <legend style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 300, color: 'var(--ink)', marginBottom: '24px', display: 'block' }}>
                      Where are you starting from?
                    </legend>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {startingOptions.map(opt => (
                        <button
                          key={opt.value}
                          className={`discovery-option${answers.starting === opt.value ? ' selected' : ''}`}
                          onClick={() => handleStarting(opt.value)}
                          aria-pressed={answers.starting === opt.value}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                    <button onClick={() => setStep(1)} style={{ marginTop: '20px', background: 'none', border: 'none', color: 'var(--muted)', fontSize: '13px', cursor: 'pointer', padding: '4px 0' }}>
                      ← Back
                    </button>
                  </fieldset>
                )}

                {step === 3 && (
                  <fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
                    <legend style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 300, color: 'var(--ink)', marginBottom: '24px', display: 'block' }}>
                      What is your timing?
                    </legend>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {timingOptions.map(opt => (
                        <button
                          key={opt.value}
                          className={`discovery-option${answers.timing === opt.value ? ' selected' : ''}`}
                          onClick={() => handleTiming(opt.value)}
                          aria-pressed={answers.timing === opt.value}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                    <button onClick={() => setStep(2)} style={{ marginTop: '20px', background: 'none', border: 'none', color: 'var(--muted)', fontSize: '13px', cursor: 'pointer', padding: '4px 0' }}>
                      ← Back
                    </button>
                  </fieldset>
                )}
              </>
            ) : (
              /* Result */
              <div aria-live="polite">
                <p className="section-label" style={{ marginBottom: '20px' }}>RECOMMENDATION</p>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '13px', color: 'var(--gold)', marginBottom: '8px', letterSpacing: '0.08em' }}>
                  {serviceNames[recommendedSlug]}
                </p>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 300, color: 'var(--ink)', marginBottom: '16px' }}>
                  {serviceExplainers[recommendedSlug]}
                </h3>
                <div style={{ width: '40px', height: '1px', background: 'var(--gold)', margin: '16px 0 24px' }} aria-hidden="true" />

                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '24px' }}>
                  <Link href={`/contact?service=${recommendedSlug}&discovery=${prefilled}`}>
                    <a className="btn-gold">Start a Project →</a>
                  </Link>
                  <Link href={`/solutions/${recommendedSlug}`}>
                    <a className="btn-ghost">Learn more</a>
                  </Link>
                </div>

                <button onClick={reset} style={{ background: 'none', border: 'none', color: 'var(--muted)', fontSize: '12px', cursor: 'pointer', letterSpacing: '0.08em', padding: '4px 0' }}>
                  Start over ↺
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .discovery-layout { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
        @media (max-width: 540px) {
          .discovery-card { padding: 32px 24px !important; }
        }
      `}</style>
    </section>
  );
}
