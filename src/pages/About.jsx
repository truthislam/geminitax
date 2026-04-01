import React, { useEffect } from 'react';
import Team from '../components/Team';
import CtaSection from '../components/CtaSection';

export default function About() {
  // Ensure the page starts at the top when navigating
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ paddingTop: '80px' }}>
      <section className="section" style={{ background: 'white', paddingBottom: '0' }}>
        <div className="container" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{ display: 'inline-flex', padding: '0.4rem 1rem', background: 'var(--color-surface-soft)', border: '1px solid var(--color-border)', borderRadius: '999px', color: 'var(--color-text-muted)', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1.5rem', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            Our Team
          </div>
          <h1 style={{ fontSize: '4rem', color: 'var(--color-primary)', letterSpacing: '-0.02em', fontFamily: 'Playfair Display, serif', lineHeight: 1.1 }}>
            The Brains Behind <br/>The Numbers.
          </h1>
        </div>
      </section>
      <Team />
      <CtaSection />
    </div>
  );
}
