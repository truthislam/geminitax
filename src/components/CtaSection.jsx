import React from 'react';
import { motion } from 'framer-motion';

export default function CtaSection() {
  return (
    <section id="contact" className="cta-section" style={{ 
      position: 'relative',
      background: 'radial-gradient(circle at 50% 100%, #1e1b4b 0%, #020617 80%)', // Deep Navy to Slate
      color: 'white', 
      padding: '8rem 0',
      overflow: 'hidden'
    }}>
      
      {/* Absolute Ambient Mesh for Depth */}
      <div style={{
        position: 'absolute', top: '-50%', left: '50%', transform: 'translateX(-50%)',
        width: '100%', height: '200%',
        background: 'radial-gradient(ellipse at top, rgba(37, 99, 235, 0.15) 0%, rgba(255,255,255,0) 60%)',
        pointerEvents: 'none', filter: 'blur(40px)'
      }} />

      <div className="container text-center" style={{ position: 'relative', zIndex: 10 }}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, type: "spring", stiffness: 60 }}
          style={{ maxWidth: '800px', margin: '0 auto' }}
        >
          <div style={{ display: 'inline-flex', padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '999px', color: '#94a3b8', fontSize: '0.9rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '2rem', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            Media, PA · Serving Greater Philadelphia & Camden County
          </div>

          <h2 style={{ fontSize: '4rem', color: 'white', marginBottom: '1.5rem', letterSpacing: '-0.02em', lineHeight: 1.1, fontFamily: 'Playfair Display, serif' }}>
            Stop Overpaying Your Taxes. Start Building Your Wealth.
          </h2>
          
          <p style={{ fontSize: '1.35rem', color: '#94a3b8', marginBottom: '3rem', lineHeight: '1.6', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            Gemini serves a selective roster of businesses and families across Media, the Philly suburbs, and Camden County. If you're generating revenue and not running a proactive tax plan, you are leaving money on the table every single quarter.
          </p>
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            <motion.a 
              href="#contact" 
              className="btn btn-primary" 
              style={{ backgroundColor: 'white', color: 'var(--color-heading)', padding: '1.25rem 3.5rem', fontSize: '1.2rem', fontWeight: 700, fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              whileHover={{ scale: 1.03, boxShadow: "0 0 40px rgba(255,255,255,0.3)" }}
              whileTap={{ scale: 0.98 }}
            >
              Claim Your Strategy Session (No Obligation)
            </motion.a>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
