import React from 'react';
import { motion } from 'framer-motion';
import { SiQuickbooks, SiXero } from 'react-icons/si';

// Define a simple custom icon since we may not have all software logos in react-icons
const TaxDomeIcon = () => (
  <svg width="120" height="32" viewBox="0 0 120 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <text x="0" y="24" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="22" letterSpacing="-0.5px">TaxDome</text>
  </svg>
);

const GustoIcon = () => (
  <svg width="100" height="32" viewBox="0 0 100 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <text x="0" y="24" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="22" letterSpacing="-0.5px">gusto</text>
  </svg>
);

export default function TrustBar() {
  return (
    <section className="trust-bar section" style={{ padding: '3rem 0', borderBottom: '1px solid var(--color-border)', backgroundColor: 'white' }}>
      <div className="container text-center">
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '2rem' }}>
          Powered by Industry-Leading Financial Stacks
        </p>
        
        <div className="trust-logos" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '4rem', opacity: 0.5 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.5rem', fontWeight: 'bold' }}>
            <SiQuickbooks size={32} /> QuickBooks
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.5rem', fontWeight: 'bold' }}>
            <SiXero size={32} /> Xero
          </div>
          <TaxDomeIcon />
          <GustoIcon />
        </div>
      </div>
    </section>
  );
}
