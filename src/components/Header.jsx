import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Header() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Trigger floating pill effect when scrolled past 50px
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  // Handle body overflow when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Services', href: '#core-competencies' },
    { name: 'Our Process', href: '#process' },
    { name: 'Meet The Team', href: '#team' }
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      scale: 0.95,
      y: -20,
      transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] }
    },
    open: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <motion.header
      className="header"
      style={{
        position: 'fixed',
        top: isScrolled ? '24px' : '0px',
        left: 0,
        right: 0,
        margin: '0 auto',
        maxWidth: isScrolled ? '1100px' : '100%',
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.85)' : 'rgba(255, 255, 255, 0.98)',
        backdropFilter: 'blur(12px)',
        borderRadius: isScrolled ? '1.5rem' : '0px',
        boxShadow: isScrolled ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)' : 'none',
        border: isScrolled ? '1px solid rgba(255, 255, 255, 0.3)' : 'none',
        borderBottom: !isScrolled ? '1px solid var(--color-border)' : '1px solid rgba(255, 255, 255, 0.3)',
        zIndex: 100,
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        padding: isScrolled ? '0.25rem 1rem' : '0'
      }}
    >
      <div className="container header-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: isScrolled ? '0.5rem 1.5rem' : '1.25rem 1.5rem', transition: 'padding 0.4s' }}>
        
        <div className="logo">
          <motion.h2 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ scale: 1.02 }} 
            style={{ cursor: 'pointer', fontFamily: 'Playfair Display, serif', fontSize: '1.75rem', margin: 0, position: 'relative', zIndex: 102 }}
          >
            Gemini<span style={{ color: 'var(--color-accent)' }}>Tax</span>
          </motion.h2>
        </div>

        {/* Desktop Nav */}
        <nav className="nav" style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
          {navLinks.map((link) => (
            <motion.a 
              key={link.name}
              href={link.href} 
              style={{ color: 'var(--color-heading)', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem', position: 'relative' }}
              whileHover={{ color: 'var(--color-accent)' }}
            >
              {link.name}
            </motion.a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="header-actions" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <motion.a 
            href="https://gemini.taxdome.com/" 
            className="btn btn-outline"
            style={{ padding: '0.5rem 1.25rem', fontSize: '0.875rem', borderRadius: '999px', fontWeight: 600 }}
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
          >
            Client Portal
          </motion.a>
          <motion.a 
            href="#contact" 
            className="btn btn-primary"
            style={{ padding: '0.5rem 1.5rem', fontSize: '0.875rem', borderRadius: '999px', fontWeight: 600 }}
            whileHover={{ y: -1, scale: 1.02, boxShadow: "0 10px 15px -3px rgba(37, 99, 235, 0.2)" }}
            whileTap={{ scale: 0.98 }}
          >
            Get Started
          </motion.a>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          className="mobile-menu-btn" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
          style={{ position: 'relative', zIndex: 102 }}
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>

      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            style={{
              position: 'fixed',
              top: isScrolled ? '12px' : '70px',
              left: '12px',
              right: '12px',
              backgroundColor: 'white',
              borderRadius: '1.5rem',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              padding: '2rem 1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              zIndex: 101,
              border: '1px solid var(--color-border)'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {navLinks.map((link) => (
                <motion.a 
                  key={link.name}
                  href={link.href} 
                  onClick={() => setIsMenuOpen(false)}
                  style={{ 
                    color: 'var(--color-heading)', 
                    textDecoration: 'none', 
                    fontWeight: 600, 
                    fontSize: '1.125rem',
                    padding: '0.5rem 0'
                  }}
                  whileHover={{ x: 5, color: 'var(--color-accent)' }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <div style={{ padding: '1rem 0 0 0', borderTop: '1px solid var(--color-border)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <motion.a 
                href="https://gemini.taxdome.com/" 
                className="btn btn-outline"
                style={{ width: '100%', justifyContent: 'center', padding: '1rem' }}
                onClick={() => setIsMenuOpen(false)}
              >
                Client Portal
              </motion.a>
              <motion.a 
                href="#contact" 
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center', padding: '1rem' }}
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
