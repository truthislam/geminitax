import React from 'react';
import { motion } from 'framer-motion';

export default function MeetFounder() {
  const imagePath = "/founder_portrait.png";
  
  return (
    <section className="founder-section" style={{ position: 'relative', background: 'var(--color-surface-soft)', padding: '8rem 0 0 0', overflow: 'visible' }}>
      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          alignItems: 'stretch',
          backgroundColor: 'var(--color-primary)',
          borderRadius: '2rem',
          overflow: 'visible',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)'
        }}>
          
          {/* Left: Image Column */}
          <div style={{ position: 'relative', minHeight: '400px', display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, type: "spring", stiffness: 60 }}
              style={{ 
                width: '90%', 
                marginTop: '-4rem', // Breaks out of the container top
                zIndex: 10,
                position: 'relative'
              }}
            >
              <img 
                src={imagePath} 
                alt="Saad Chaudhri, CPA" 
                style={{ 
                  width: '100%', 
                  height: 'auto', 
                  borderRadius: '1.5rem', 
                  boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                  objectFit: 'cover'
                }} 
              />
            </motion.div>
          </div>

          {/* Right: Text Column */}
          <div style={{ 
            padding: '4rem 3.5rem', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center',
            color: 'white'
          }}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 style={{ 
                fontSize: '0.9rem', 
                textTransform: 'uppercase', 
                letterSpacing: '0.2em', 
                fontWeight: 700, 
                marginBottom: '1rem',
                color: 'rgba(255,255,255,0.6)'
              }}>
                The Advisory Mindset
              </h4>
              <h2 style={{ 
                fontSize: '2.75rem', 
                marginBottom: '1.5rem', 
                lineHeight: 1.1,
                fontFamily: 'Playfair Display, serif',
                color: 'white'
              }}>
                MEET Saad Chaudhri, <span style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 400 }}>CPA</span>
              </h2>
              <div style={{ 
                width: '60px', 
                height: '4px', 
                backgroundColor: 'rgba(255,255,255,0.2)', 
                marginBottom: '2rem',
                borderRadius: '999px' 
              }} />
              <p style={{ 
                fontSize: '1.15rem', 
                lineHeight: 1.8, 
                marginBottom: '2rem',
                color: 'rgba(255,255,255,0.9)',
                fontFamily: 'Plus Jakarta Sans, sans-serif'
              }}>
                Saad Chaudhri is more than just a CPA. He's a strategic partner for founders and real estate investors. With years of experience in complex corporate tax and estate planning, he focuses on wealth preservation through proactive advisory, not just backward-looking compliance. 
              </p>
              <p style={{ 
                fontSize: '1.15rem', 
                lineHeight: 1.8,
                color: 'rgba(255,255,255,0.9)',
                fontFamily: 'Plus Jakarta Sans, sans-serif'
              }}>
                He believes the best CPAs are those who help you scale while keeping you bulletproof. Whether navigating an S-Corp conversion or deep-diving into R&D credits, Saad's approach is surgically precise and entirely forward-focused.
              </p>
            </motion.div>
          </div>

        </div>
      </div>

      
      {/* Spacer for the bottom section since we cut padding to 0 at bottom of top section */}
      <div style={{ height: '8rem' }} />
    </section>
  );
}
