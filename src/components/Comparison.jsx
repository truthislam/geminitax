import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheck, FiX } from 'react-icons/fi';

const metrics = [
  { label: 'Responsive Communication', gemini: true, generic: false },
  { label: 'Proactive Clear Advice', gemini: true, generic: false },
  { label: 'Handles Complex Problems', gemini: true, generic: false },
  { label: 'Seamless Onboarding', gemini: true, generic: false },
  { label: 'Tailored Client-First Approach', gemini: true, generic: false }
];

export default function Comparison() {
  return (
    <section className="section comparison" style={{ background: '#f8fafc', padding: '8rem 0' }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '3rem', color: 'var(--color-heading)', marginBottom: '1rem', fontFamily: 'Playfair Display, serif' }}>
            The Gemini Difference
          </h2>
          <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            We solve the hardest problems in the simplest ways. See how our tailored approach compares to standard accounting.
          </p>
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto', background: 'white', borderRadius: 'var(--radius-xl)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-lg)', overflow: 'hidden' }}>
          
          {/* Table Header */}
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '2rem', borderBottom: '1px solid var(--color-border)', background: 'var(--color-surface-soft)' }}>
            <div style={{ fontWeight: 700, color: 'var(--color-text-muted)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Client Outcomes</div>
            <div style={{ fontWeight: 800, color: 'var(--color-primary)', fontSize: '1.1rem', textAlign: 'center', fontFamily: 'Playfair Display, serif' }}>Gemini</div>
            <div style={{ fontWeight: 600, color: 'var(--color-text-muted)', fontSize: '1rem', textAlign: 'center', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Standard CPAs</div>
          </div>

          {/* Table Rows */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {metrics.map((row, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                style={{ 
                  display: 'grid', 
                  gridTemplateColumns: '2fr 1fr 1fr', 
                  padding: '1.5rem 2rem', 
                  borderBottom: idx !== metrics.length - 1 ? '1px solid var(--color-border)' : 'none',
                  alignItems: 'center'
                }}
              >
                <div style={{ fontWeight: 600, color: 'var(--color-heading)', fontSize: '1.1rem', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                  {row.label}
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <div style={{ background: 'var(--color-accent-light)', color: 'var(--color-accent)', padding: '0.5rem', borderRadius: '50%' }}>
                    <FiCheck size={20} />
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <div style={{ color: '#94a3b8' }}>
                    <FiX size={20} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
