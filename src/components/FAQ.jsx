import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';

const faqs = [
  {
    q: "Will I be passed off to a junior bookkeeper?",
    a: "No. The Gemini advantage is that you are paired with a dedicated CPA and Virtual CFO. They learn the intricacies of your business model, are available for strategic calls, and actively review your finances."
  },
  {
    q: "How fast is the onboarding process?",
    a: "We deploy an incredibly streamlined onboarding protocol. Within 48 hours of engagement, we connect directly to your banks, payroll, and existing accounting software via secure API integrations to begin our initial diagnostic."
  },
  {
    q: "Do you integrate with my current software stack?",
    a: "Absolutely. We are certified partners with industry standards like QuickBooks Online and Xero. We integrate directly with Gusto for payroll, Stripe for revenue processing, and TaxDome for secure document transfer."
  },
  {
    q: "Is this just bookkeeping, or actual proactive tax strategy?",
    a: "Bookkeeping is just the historical data. Our true value is proactive tax strategy. We map your real-time data against current tax code to execute entity structuring, R&D credits, and end-of-year tax minimization protocols before the year even ends."
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
            Frequent Questions
          </h2>
          <p className="text-muted" style={{ fontSize: '1.2rem', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            Everything you need to know about our process and workflow.
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
