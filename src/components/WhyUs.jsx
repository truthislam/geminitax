import React from 'react';
import { motion } from 'framer-motion';
import { FiTarget, FiShield } from 'react-icons/fi';

const features = [
  {
    title: "Passionate & Extraordinarily Skilled",
    desc: "We don't just file your returns; we solve the hardest problems in the simplest ways. Our team is passionate about finding tailored strategies that make your tax filing process entirely smooth and stress-free.",
    points: ["Available when you need us", "Complex problem solving", "Transparent and simple strategies"],
    icon: <FiTarget size={32} color="var(--color-accent)" />,
    imageReverse: false,
    mockupType: 'chart'
  },
  {
    title: "Prompt, Thorough, and Accurate",
    desc: "A seamless, transparent, and efficient process. We guarantee expertise and attention to detail so you can relax knowing your personal and business compliance is handled correctly.",
    points: ["Highly responsive communication", "Proactive advice and support", "Clear explanations of strategies"],
    icon: <FiShield size={32} color="var(--color-accent)" />,
    imageReverse: true,
    mockupType: 'glass-cards'
  }
];

// High-Fidelity UI Mockup Components (Representative Dashboard Data)
const ChartMockup = () => (
  <div style={{ position: 'relative', width: '100%', height: '100%' }}>
    {/* Main Dashboard Card */}
    <div style={{ position: 'absolute', top: '10%', left: '10%', width: '80%', height: '80%', background: 'white', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-xl)', border: '1px solid var(--color-border)', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', fontWeight: 600, textTransform: 'uppercase' }}>Cash Runway Forecast</div>
          <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--color-heading)', letterSpacing: '-0.02em', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>$1,245,000</div>
        </div>
        <div style={{ background: 'var(--color-surface-soft)', color: 'var(--color-text-muted)', padding: '0.4rem 0.8rem', borderRadius: '999px', fontSize: '0.8rem', fontWeight: 600 }}>
          FY 2026
        </div>
      </div>
      
      {/* Animated Bar Chart */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', gap: '8%', borderBottom: '2px solid var(--color-surface-soft)', paddingBottom: '0.5rem' }}>
        {[40, 60, 45, 80, 65, 100].map((height, i) => (
          <div key={i} style={{ width: '12%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', height: '100%' }}>
            <div style={{ flex: 1, width: '100%', display: 'flex', alignItems: 'flex-end' }}>
              <motion.div 
                initial={{ height: 0 }} whileInView={{ height: `${height}%` }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 + (i * 0.1), type: "spring" }}
                style={{ width: '100%', background: i === 5 ? 'var(--color-accent)' : 'var(--color-surface-soft)', borderRadius: '4px 4px 0 0' }}
              />
            </div>
            <span style={{ fontSize: '0.7rem', color: '#94a3b8', fontWeight: 600 }}>{['Q1', 'Q2', 'Q3', 'Q4', 'Q1', 'Q2'][i]}</span>
          </div>
        ))}
      </div>
    </div>
    {/* Floating Glass Element */}
    <motion.div 
      initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.8 }}
      style={{ position: 'absolute', bottom: '12%', right: '5%', background: 'var(--glass-bg)', backdropFilter: 'var(--glass-filter)', border: '1px solid var(--glass-border)', padding: '1.25rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)', whiteSpace: 'nowrap' }}
    >
      <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', fontWeight: 600, marginBottom: '0.2rem' }}>Q4 Estimated Tax</div>
      <div style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-heading)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#10b981' }}/>
        Escrowed
      </div>
    </motion.div>
  </div>
);

const GlassCardsMockup = () => (
  <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    {/* Back Card */}
    <motion.div 
      initial={{ opacity: 0, y: 50, rotate: 0 }} whileInView={{ opacity: 1, y: -20, rotate: -4 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 80 }}
      style={{ position: 'absolute', width: '65%', background: 'white', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)', border: '1px solid var(--color-border)', padding: '1.5rem', opacity: 0.8 }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
         <div style={{ width: '40%', height: '8px', background: 'var(--color-surface-soft)', borderRadius: '4px' }} />
         <div style={{ width: '24px', height: '24px', background: 'var(--color-surface-soft)', borderRadius: '50%' }} />
      </div>
      <div style={{ width: '80%', height: '20px', background: 'var(--color-border)', borderRadius: '4px' }} />
    </motion.div>
    
    {/* Middle Card - Data Metric */}
    <motion.div 
      initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 10, rotate: 2 }} viewport={{ once: true }} transition={{ delay: 0.1, type: "spring", stiffness: 80 }}
      style={{ position: 'absolute', width: '70%', background: 'white', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-xl)', border: '1px solid var(--color-border)', padding: '2rem' }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
        <div>
          <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>YTD Tax Savings</div>
          <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--color-heading)', letterSpacing: '-0.02em', fontFamily: 'Plus Jakarta Sans, sans-serif', lineHeight: 1 }}>$42,500<span style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>.00</span></div>
        </div>
        <div style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', padding: '0.4rem 0.8rem', borderRadius: '8px', fontSize: '0.85rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
          18.4%
        </div>
      </div>
      
      {/* Visual Data Representation */}
      <div style={{ width: '100%', height: '40px', background: 'var(--color-surface-soft)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', padding: '0 1rem', marginTop: '1.5rem' }}>
         <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', fontWeight: 600, marginRight: '1rem', flexShrink: 0 }}>Entity S-Corp Conversion</div>
         <div style={{ height: '6px', width: '100%', background: '#e2e8f0', borderRadius: '3px', position: 'relative' }}>
            <motion.div initial={{ width: 0 }} whileInView={{ width: '75%' }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.5 }} style={{ position: 'absolute', top: 0, left: 0, height: '100%', background: '#10b981', borderRadius: '3px' }}/>
         </div>
      </div>
    </motion.div>

    {/* Front Glass Action Card - Data Metric */}
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3, type: "spring" }}
      style={{ position: 'absolute', bottom: '10%', right: '5%', background: 'var(--glass-bg)', backdropFilter: 'var(--glass-filter)', border: '1px solid var(--glass-border)', padding: '1.25rem 1.75rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-xl)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}
    >
      <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--color-accent)', boxShadow: '0 0 10px var(--color-accent)' }} />
      <div style={{ fontWeight: 600, fontSize: '1.05rem', color: 'var(--color-heading)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Net MRR Growth: <span style={{ color: '#10b981', fontWeight: 800 }}>+24.3%</span></div>
    </motion.div>
  </div>
);

export default function WhyUs() {
  return (
    <section id="process" className="section why-us-section" style={{ backgroundColor: 'white' }}>
      <div className="container">
        
        <div className="text-center mb-8">
          <h2 style={{ fontSize: '3rem', color: 'var(--color-heading)', marginBottom: '1rem', letterSpacing: '-0.02em', fontFamily: 'Playfair Display, serif' }}>
            A Tailored, Client-First Approach
          </h2>
          <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.15rem', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            At Gemini Accounting & Advisory Services, our core values are the foundation of every relationship we build.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8rem', marginTop: '6rem' }}>
          {features.map((feature, idx) => (
            <div key={idx} style={{ 
              display: 'flex', 
              flexDirection: feature.imageReverse ? 'row-reverse' : 'row', 
              alignItems: 'center', 
              gap: '6rem' 
            }} className="why-row">
              
              <div className="why-content" style={{ flex: 1 }}>
                <motion.div 
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true, margin: "-100px" }}
                   transition={{ duration: 0.6, type: "spring" }}
                >
                  <div style={{ marginBottom: '1.5rem', display: 'inline-flex', padding: '1rem', background: 'var(--color-surface-soft)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                    {feature.icon}
                  </div>
                  <h3 style={{ fontSize: '2.25rem', marginBottom: '1.25rem', color: 'var(--color-heading)', letterSpacing: '-0.02em', lineHeight: 1.1, fontFamily: 'Playfair Display, serif' }}>{feature.title}</h3>
                  <p style={{ fontSize: '1.15rem', color: 'var(--color-text-muted)', marginBottom: '2.5rem', lineHeight: '1.7', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                    {feature.desc}
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                    {feature.points.map((pt, i) => (
                      <motion.li 
                        initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 * i }}
                        key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', fontSize: '1.05rem', color: 'var(--color-heading)', fontWeight: 600 }}
                      >
                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-accent)' }} /> 
                        {pt}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* High-Fidelity Mockup Container */}
              <div className="why-image-wrapper" style={{ flex: 1.2, height: '480px', position: 'relative' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'var(--color-surface-soft)', borderRadius: 'var(--radius-2xl)', border: '1px solid var(--color-border)' }}>
                    <div className="ambient-mesh" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80%', height: '80%', background: 'radial-gradient(circle, rgba(37,99,235,0.05) 0%, rgba(255,255,255,0) 70%)', filter: 'blur(40px)' }} />
                    {feature.mockupType === 'chart' ? <ChartMockup /> : <GlassCardsMockup />}
                </div>
              </div>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
