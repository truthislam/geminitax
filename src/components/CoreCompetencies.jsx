import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const competitors = [
  { 
    id: 'tax', 
    label: '01  TAX SERVICES', 
    title: 'Tax Services', 
    desc: 'Your tax position is designed, not filed. Business and personal are handled as one system to ensure absolute protection and liability reduction.' 
  },
  { 
    id: 'trust', 
    label: '02  TRUST & ESTATE', 
    title: 'Trust & Estate Planning', 
    desc: 'Wealth transfers without a strategy become wealth losses. We protect your estate so it reaches the people you intend, completely intact.' 
  },
  { 
    id: 'cfo', 
    label: '03  VIRTUAL CFO', 
    title: 'Virtual CFO', 
    desc: 'Financial leadership on demand at a fraction of the cost of a full-time C-suite hire. Cash flow clarity. Growth roadmaps. Hard decisions made easy.' 
  },
  { 
    id: 'bookkeeping', 
    label: '04  BOOKKEEPING', 
    title: 'Bookkeeping Services', 
    desc: 'Real-time books with zero lag. You see your exact margins every day. We ensure you never wait until the end of the quarter when it is too late to act.' 
  }
];

export default function CoreCompetencies() {
  const [activeTab, setActiveTab] = useState(competitors[0]);

  return (
    <section id="core-competencies" className="section" style={{ backgroundColor: 'white', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)', padding: '8rem 0' }}>
      <div className="container">
        
        {/* Header Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', marginBottom: '6rem', alignItems: 'flex-start' }}>
          <div>
            <div style={{ display: 'inline-flex', padding: '0.4rem 1rem', background: 'white', border: '1px solid var(--color-border)', borderRadius: '999px', color: 'var(--color-text-muted)', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1.5rem', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              Strategic Disciplines
            </div>
            <h2 style={{ fontSize: '4.5rem', color: 'var(--color-primary)', marginBottom: '1rem', letterSpacing: '-0.04em', lineHeight: 1, fontFamily: 'Playfair Display, serif' }}>
              Four Pillars.<br/>One System.
            </h2>
          </div>
          <div style={{ paddingTop: '2.5rem' }}>
            <div style={{ width: '100%', height: '1px', background: 'var(--color-border)', marginBottom: '2rem' }} />
            <p className="text-muted" style={{ fontSize: '1.25rem', fontFamily: 'Plus Jakarta Sans, sans-serif', lineHeight: '1.7' }}>
              Most accounting firms reactionarily report history. We engineer the structural architecture that defines what happens next.
            </p>
          </div>
        </div>

        {/* Tab Grid */}
        <div className="industries-container" style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '0', background: 'white', borderRadius: 'var(--radius-xl)', border: '1px solid var(--color-border)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
          
          <div className="tab-list" style={{ display: 'flex', flexDirection: 'column', background: 'var(--color-surface-soft)', borderRight: '1px solid var(--color-border)' }}>
            {competitors.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item)}
                className={`tab-btn ${activeTab.id === item.id ? 'active' : ''}`}
                style={{ 
                  fontFamily: 'Plus Jakarta Sans, sans-serif', 
                  fontWeight: 700, 
                  fontSize: '0.9rem', 
                  padding: '2rem', 
                  textAlign: 'left',
                  border: 'none',
                  borderBottom: '1px solid var(--color-border)',
                  background: activeTab.id === item.id ? 'white' : 'transparent',
                  color: activeTab.id === item.id ? 'var(--color-primary)' : 'var(--color-text-muted)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  letterSpacing: '0.05em'
                }}
              >
                {item.label}
              </button>
            ))}
            <div style={{ flex: 1, background: 'var(--color-surface-soft)' }} />
          </div>

          <div className="tab-content" style={{ position: 'relative', overflow: 'hidden', padding: '6rem 4rem', background: 'white' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <div style={{ position: 'absolute', top: '10%', left: '10%', fontSize: '12rem', fontWeight: 900, color: 'rgba(0,0,0,0.03)', zIndex: 0, lineHeight: 1, fontFamily: 'Playfair Display, serif' }}>
                  {activeTab.label.split(' ')[0]}
                </div>
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <h3 style={{ fontSize: '3rem', color: 'var(--color-primary)', marginBottom: '2rem', fontFamily: 'Playfair Display, serif', letterSpacing: '-0.02em' }}>{activeTab.title}</h3>
                  <p style={{ fontSize: '1.4rem', color: 'var(--color-text-muted)', lineHeight: '1.8', fontFamily: 'Plus Jakarta Sans, sans-serif', maxWidth: '500px', marginBottom: '3rem' }}>{activeTab.desc}</p>
                  <a href="#contact" className="link-hover" style={{ color: 'var(--color-primary)', fontWeight: 700, textDecoration: 'none', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', borderBottom: '2px solid var(--color-primary)', paddingBottom: '4px' }}>
                    Operational Details →
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}

