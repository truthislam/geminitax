import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const competitors = [
  { 
    id: 'tax', 
    label: 'Tax Planning', 
    title: 'Smart Tax Strategies', 
    desc: 'We prepare your business and personal returns accurately to minimize liability. Our team builds a custom, proactive tax plan just for your unique situation.' 
  },
  { 
    id: 'cfo', 
    label: 'Virtual CFO', 
    title: 'Strategic Financial Leadership', 
    desc: 'Grow your business with expert CFO support. We handle the numbers, cash flow forecasting, and financial data so you can focus entirely on leading your company.' 
  },
  { 
    id: 'trust', 
    label: 'Trust & Estate', 
    title: 'Protect Your True Wealth', 
    desc: 'Seamlessly manage legacy planning. We legally structure your assets to ensure they are protected and transferred precisely according to your wishes.' 
  },
  { 
    id: 'bookkeeping', 
    label: 'Bookkeeping', 
    title: 'Real-Time Financial Tracking', 
    desc: 'Receive accurate, real-time ledgers synced to your bank. You will always know your exact profit margins, cash flow, and bottom line without guessing.' 
  }
];

export default function CoreCompetencies() {
  const [activeTab, setActiveTab] = useState(competitors[0]);

  return (
    <section id="core-competencies" className="section" style={{ backgroundColor: 'var(--color-surface-soft)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
      <div className="container">
        
        <div className="text-center mb-8">
          <h2 style={{ fontSize: '2.5rem', color: 'var(--color-primary)', marginBottom: '1rem', letterSpacing: '-0.02em', fontFamily: 'Playfair Display, serif' }}>
            Core Competencies
          </h2>
          <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            Expert accounting solutions designed to meet your specific business goals.
          </p>
        </div>

        <div className="industries-container" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '3rem', marginTop: '4rem', background: 'white', padding: '2rem', borderRadius: 'var(--radius-xl)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)' }}>
          
          <div className="tab-list" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {competitors.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item)}
                className={`tab-btn ${activeTab.id === item.id ? 'active' : ''}`}
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600, fontSize: '1.05rem' }}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="tab-content" style={{ position: 'relative', overflow: 'hidden', padding: '2.5rem', background: 'var(--color-surface-soft)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
                transition={{ duration: 0.3 }}
              >
                <h3 style={{ fontSize: '1.75rem', color: 'var(--color-primary)', marginBottom: '1rem', fontFamily: 'Playfair Display, serif' }}>{activeTab.title}</h3>
                <p style={{ fontSize: '1.15rem', color: 'var(--color-text-muted)', lineHeight: '1.7', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{activeTab.desc}</p>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
