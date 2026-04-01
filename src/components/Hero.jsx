import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const childVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 100, damping: 20 }
  }
};

export default function Hero() {
  return (
    <section className="hero">
      
      {/* Absolute Ambient Void Layer */}
      <div className="ambient-mesh" style={{
        position: 'absolute', top: '-20%', left: '-10%', width: '70vw', height: '70vw',
        background: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, rgba(255,255,255,0) 70%)',
        zIndex: 0, filter: 'blur(60px)', pointerEvents: 'none'
      }} />
      <div className="ambient-mesh" style={{
        position: 'absolute', top: '20%', right: '-10%', width: '50vw', height: '50vw',
        background: 'radial-gradient(circle, rgba(139,92,246,0.06) 0%, rgba(255,255,255,0) 70%)',
        zIndex: 0, filter: 'blur(60px)', pointerEvents: 'none'
      }} />

      <div className="container hero-grid" style={{ zIndex: 10, position: 'relative' }}>
        
        <motion.div 
          className="hero-text"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 className="hero-title text-gradient" variants={childVariants}>
            Stop Paying Your Government More Than You Owe.
          </motion.h1>
          
          <motion.p className="hero-subtitle" variants={childVariants} style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', lineHeight: '1.6', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            Philadelphia-area business owners and investors retain Gemini to build the exact tax strategy their revenue demands. The strategy their current CPA never built.
          </motion.p>
          
          <motion.div className="hero-actions" variants={childVariants}>
            <motion.a 
              href="#contact" 
              className="btn btn-primary"
              whileHover={{ y: -3, scale: 1.02, boxShadow: "var(--shadow-glow)" }}
              whileTap={{ y: 0, scale: 0.98 }}
            >
              Build Your Strategy →
            </motion.a>
            <motion.a 
              href="#core-competencies" 
              className="btn btn-outline"
              whileHover={{ y: -3, scale: 1.02, boxShadow: "var(--shadow-md)" }}
              whileTap={{ y: 0, scale: 0.98 }}
            >
              Our Process
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.95, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.4, type: "spring", stiffness: 60 }}
          style={{ perspective: 1200, display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', paddingLeft: '2rem' }}
        >
           <motion.img 
              src="/dashboard-hero.png" 
              alt="Gemini Financial Operations" 
              className="hero-image"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              style={{ width: '100%', maxWidth: '700px', height: 'auto', objectFit: 'contain', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.1))' }}
           />
        </motion.div>
        
      </div>
    </section>
  );
}
