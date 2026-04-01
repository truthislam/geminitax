import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: "Faisal Riaz",
    role: "Data Analytics Advisory",
    initials: "FR",
    color: "var(--color-primary)",
    bio: "With over 20 years in the industry, Faisal uses data and AI to build forecasting dashboards that let you see the future of your business."
  },
  {
    name: "Abhay Gandhi, CPA",
    role: "Manager, Strategic Tax",
    initials: "AG",
    color: "var(--color-primary)",
    bio: "Expert in international and cross-border tax. Abhay builds global tax strategies that protect your wealth and satisfy multi-national requirements."
  },
  {
    name: "Kelly Tran",
    role: "Senior Accountant",
    initials: "KT",
    color: "var(--color-primary)",
    bio: "Ensures your taxes and financial reports are 100% accurate and on time. Kelly holds an MBA and keeps your business fully compliant."
  }
];


export default function Team() {
  return (
    <section id="team" className="section team-section" style={{ backgroundColor: 'var(--color-surface-soft)', borderTop: '1px solid var(--color-border)', position: 'relative', overflow: 'hidden' }}>
      
      {/* Ambient Depth */}
      <div className="ambient-mesh" style={{ position: 'absolute', top: '10%', right: '-10%', width: '40vw', height: '40vw', background: 'radial-gradient(circle, rgba(15,23,42,0.06) 0%, rgba(255,255,255,0) 70%)', filter: 'blur(60px)', pointerEvents: 'none' }} />
      <div className="ambient-mesh" style={{ position: 'absolute', bottom: '-10%', left: '-10%', width: '40vw', height: '40vw', background: 'radial-gradient(circle, rgba(15,23,42,0.06) 0%, rgba(255,255,255,0) 70%)', filter: 'blur(60px)', pointerEvents: 'none' }} />


      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 2fr', gap: '4rem', alignItems: 'flex-start' }} className="team-split-layout">
           
           <div className="team-header-sticky" style={{ position: 'sticky', top: '120px' }}>
              <div style={{ display: 'inline-flex', padding: '0.4rem 1rem', background: 'white', border: '1px solid var(--color-border)', borderRadius: '999px', color: 'var(--color-text-muted)', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1.5rem', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                The Advisory Board
              </div>
              <h2 style={{ fontSize: '3.5rem', color: 'var(--color-heading)', marginBottom: '1.5rem', letterSpacing: '-0.02em', lineHeight: 1.1, fontFamily: 'Playfair Display, serif' }}>
                Meet The<br/>Experts.
              </h2>
              <p className="text-muted" style={{ fontSize: '1.15rem', fontFamily: 'Plus Jakarta Sans, sans-serif', lineHeight: '1.7' }}>
                People buy from people. Meet the specialized CPAs and analysts dedicated to engineering your financial success.
              </p>
           </div>

           <div className="team-list" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
             {teamMembers.map((member, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1, type: "spring", stiffness: 80 }}
                  className="team-row-card"
                  style={{
                     display: 'flex',
                     alignItems: 'center',
                     gap: '2.5rem',
                     background: 'white',
                     padding: '2.5rem',
                     borderRadius: 'var(--radius-2xl)',
                     border: '1px solid var(--color-border)',
                     boxShadow: 'var(--shadow-md)',
                     transition: 'all 0.3s ease'
                  }}
                  whileHover={{ y: -4, boxShadow: "var(--shadow-xl)", borderColor: 'rgba(59, 130, 246, 0.3)' }}
                >
                   {/* Abstract Squircle Avatar */}
                   <div className="team-avatar" style={{ 
                        width: '85px', height: '85px', minWidth: '85px', borderRadius: '24px', 
                        background: member.color, color: 'white', display: 'flex', 
                        alignItems: 'center', justifyContent: 'center', fontSize: '1.75rem', 
                        fontWeight: 800, boxShadow: 'var(--shadow-md)', transform: 'rotate(-4deg)' 
                     }}
                   >
                     {member.initials}
                   </div>
                   
                   <div style={{ flex: 1 }}>
                      <div className="team-info-header" style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                         <h3 style={{ fontSize: '1.5rem', color: 'var(--color-heading)', fontFamily: 'Plus Jakarta Sans, sans-serif', margin: 0, fontWeight: 700 }}>
                           {member.name}
                         </h3>
                         <div style={{ fontSize: '0.8rem', color: 'var(--color-accent)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', background: 'var(--color-accent-light)', padding: '0.4rem 0.8rem', borderRadius: '6px' }}>
                           {member.role}
                         </div>
                      </div>
                      <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', lineHeight: '1.6', fontFamily: 'Plus Jakarta Sans, sans-serif', margin: 0 }}>
                        {member.bio}
                      </p>
                   </div>

                </motion.div>
             ))}
           </div>
        </div>
      </div>
    </section>
  );
}
