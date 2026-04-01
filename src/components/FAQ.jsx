import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';

const faqs = [
  {
    q: "What size businesses do you work with?",
    a: "Primarily small to mid-market businesses generating between $500K and $20M annually. If you're scaling past that range, we'll tell you directly whether we're still the right fit — or connect you to someone who is."
  },
  {
    q: "Why outsource instead of hiring in-house?",
    a: "In-house accountants cost $60K–$120K in salary alone — before benefits, turnover, and supervision overhead. Gemini gives you a full team, from bookkeeper to Virtual CFO, for a fraction of that cost. The team doesn't call in sick and doesn't need managing."
  },
  {
    q: "Is this just bookkeeping, or actual proactive tax strategy?",
    a: "Bookkeeping is historical data. Our real value is proactive tax strategy — engineered before the year closes, not after. We map your real-time financials against current tax code to execute entity structuring, R&D credits, and liability compression while there’s still time to act."
  },
  {
    q: "How fast do we see results?",
    a: "Most clients identify immediate savings opportunities during the discovery phase. Structural results — optimized tax position, cash flow clarity — materialize within 90 days of engagement."
  },
  {
    q: "Who handles our account day-to-day?",
    a: "A named team lead with direct access. Not a helpdesk queue. Not a junior associate who escalates your questions upstream. The team that built your strategy is the team you talk to."
  },
  {
    q: "What if we’re not ready for full service?",
    a: "We have entry points. A standalone tax review or bookkeeping cleanup is a legitimate starting point. Most clients expand the engagement within 60 days of seeing the impact."
  }
];

const AccordionItem = ({ faq, isOpen, onClick }) => {
  return (
    <div className="faq-item" style={{ 
      marginBottom: '1rem', 
      border: '1px solid var(--color-border)', 
      borderRadius: 'var(--radius-lg)', 
      backgroundColor: isOpen ? 'white' : 'var(--color-surface-soft)',
      boxShadow: isOpen ? 'var(--shadow-sm)' : 'none',
      transition: 'all 0.3s ease',
      overflow: 'hidden'
    }}>
      <button 
        className="faq-question" 
        onClick={onClick}
        style={{ 
          width: '100%', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          padding: '1.5rem', 
          textAlign: 'left', 
          fontSize: '1.15rem', 
          fontWeight: 700, 
          color: 'var(--color-heading)',
          fontFamily: 'Plus Jakarta Sans, sans-serif',
          background: 'none',
          border: 'none',
          cursor: 'pointer'
        }}
      >
        <span>{faq.q}</span>
        <motion.div 
           animate={{ rotate: isOpen ? 180 : 0 }} 
           transition={{ duration: 0.3, type: "spring", stiffness: 150 }}
           style={{
             display: 'flex', alignItems: 'center', justifyContent: 'center',
             width: '32px', height: '32px', borderRadius: '50%',
             background: isOpen ? 'var(--color-primary-light)' : 'transparent',
             color: isOpen ? 'var(--color-primary)' : 'var(--color-text-muted)'
           }}
        >
          <FiChevronDown size={20} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <p style={{ 
              padding: '0 1.5rem 1.75rem 1.5rem', 
              color: 'var(--color-text-muted)', 
              fontSize: '1.05rem', 
              lineHeight: '1.6',
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              margin: 0
            }}>
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0); 

  return (
    <section id="faq" className="section" style={{ backgroundColor: 'white' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        
        <div className="text-center" style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '3rem', color: 'var(--color-heading)', marginBottom: '1rem', letterSpacing: '-0.02em', fontFamily: 'Playfair Display, serif' }}>
            Straight Answers to the Questions Most Firms Dodge.
          </h2>
          <p className="text-muted" style={{ fontSize: '1.2rem', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            If you have a question we haven't addressed, your first call with Gemini will.
          </p>
        </div>

        <div className="faq-container">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              faq={faq} 
              isOpen={openIndex === index} 
              onClick={() => setOpenIndex(openIndex === index ? null : index)} 
            />
          ))}
        </div>

      </div>
    </section>
  );
}
