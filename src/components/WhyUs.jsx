import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    number: "01",
    title: "Precision Structuring",
    desc: "We do not simply record your tax history; we engineer the structural position you should have occupied years ago. Our team executes complex entity configurations with the surgical force most firms reserve for institutional capital.",
    points: ["AVAILABLE WHEN YOU NEED US.", "MULTI-ENTITY CONSOLIDATION.", "STRATEGIC DEFENSE BY DEFAULT."],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1200",
    imageReverse: false
  },
  {
    number: "02",
    title: "Operational Transparency",
    desc: "Gemini removes the separation between your data and your direction. We build the financial reporting infrastructure that scales your future. No delays. No ambiguity. True financial control.",
    points: ["HIGH-FIDELITY REPORTING.", "DAILY MARGIN VISIBILITY.", "INSTITUTIONAL-GRADE OVERSIGHT."],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    imageReverse: true
  }
];

export default function WhyUs() {
  return (
    <section id="process" className="section why-us-section" style={{ backgroundColor: 'white', padding: '10rem 0' }}>
      <div className="container">
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12rem' }}>
          {features.map((feature, idx) => (
            <div key={idx} style={{ 
              display: 'flex', 
              flexDirection: feature.imageReverse ? 'row-reverse' : 'row', 
              alignItems: 'center', 
              gap: '8rem' 
            }} className="why-row">
              
              <div className="why-content" style={{ flex: 1 }}>
                <motion.div 
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true, margin: "-100px" }}
                   transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div style={{ fontSize: '3rem', fontWeight: 900, color: 'rgba(0,0,0,0.05)', marginBottom: '-1rem', fontFamily: 'Playfair Display, serif' }}>
                    {feature.number}
                  </div>
                  <h3 style={{ fontSize: '3.5rem', marginBottom: '2rem', color: 'var(--color-heading)', letterSpacing: '-0.02em', lineHeight: 1.1, fontFamily: 'Playfair Display, serif' }}>{feature.title}</h3>
                  <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', marginBottom: '3rem', lineHeight: '1.7', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                    {feature.desc}
                  </p>
                  
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                    {feature.points.map((pt, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.85rem', color: 'var(--color-heading)', fontWeight: 800, letterSpacing: '0.05em' }}>
                        <span style={{ color: 'var(--color-primary)' }}>—</span> {pt}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Image Container */}
              <div className="why-image-wrapper" style={{ flex: 1.2, height: '560px', position: 'relative' }}>
                <motion.div 
                   initial={{ opacity: 0, scale: 0.95 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true, margin: "-100px" }}
                   transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                   style={{ width: '100%', height: '100%', position: 'relative' }}
                >
                   {/* Background Decorative Element */}
                   <div style={{ position: 'absolute', top: '10%', [feature.imageReverse ? 'right' : 'left']: '-10%', width: '100%', height: '100%', background: 'var(--color-surface-soft)', borderRadius: 'var(--radius-2xl)', zIndex: 0 }} />
                   
                   <div style={{ position: 'relative', width: '100%', height: '100%', borderRadius: 'var(--radius-2xl)', overflow: 'hidden', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-2xl)', zIndex: 1 }}>
                      <img 
                        src={feature.image} 
                        alt={feature.title} 
                        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }}
                        className="hover-zoom"
                      />
                      {/* Overlay for "01" / "02" */}
                      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.2))', pointerEvents: 'none' }} />
                      <div style={{ position: 'absolute', bottom: '10%', [feature.imageReverse ? 'left' : 'right']: '10%', fontSize: '10rem', fontWeight: 900, color: 'white', opacity: 0.2, fontFamily: 'Playfair Display, serif', lineHeight: 1 }}>
                        {feature.number}
                      </div>
                   </div>
                </motion.div>
              </div>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

