import React from 'react';
import { motion } from 'framer-motion';
import { FiPieChart, FiBriefcase, FiAperture, FiBook } from 'react-icons/fi';

export default function Services() {
  const services = [
    {
      title: "Proactive Tax Planning",
      desc: "Stop worrying about April 15th. We map out precise, year-round strategies to minimize your business and personal tax liability using advanced entity structuring and R&D deduction optimization.",
      icon: <FiPieChart size={32} />
    },
    {
      title: "Virtual CFO",
      desc: "Financial leadership on demand. We build granular cash flow forecasts, optimize pricing models, and provide hard, data-driven insights so you can confidently scale your operations without guesswork.",
      icon: <FiBriefcase size={32} />
    },
    {
      title: "Trust & Estate Structuring",
      desc: "Secure generational wealth. Navigate complex asset transfers, real estate depreciation schedules (1031 exchanges), and legal entity layering with absolute compliance and minimal leakage.",
      icon: <FiAperture size={32} />
    },
    {
      title: "Real-Time Bookkeeping",
      desc: "Accurate, automated ledgers synced directly to your bank and payroll. You always know your exact bottom line, allowing you to react instantly to market conditions.",
      icon: <FiBook size={32} />
    }
  ];

  return (
    <section id="services" className="section services-section">
      <div className="container sticky-wrapper" style={{ alignItems: 'flex-start' }}>
        
        {/* The Locked Left Sidebar */}
        <div className="services-sticky-sidebar">
          <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.5 }}
          >
            <h2 style={{ fontSize: '3rem', color: 'var(--color-primary)', marginBottom: '1.5rem', letterSpacing: '-0.04em', lineHeight: 1.1 }}>
              Our Core <br/>Expertise
            </h2>
            <p className="text-muted" style={{ fontSize: '1.15rem', marginBottom: '2.5rem', lineHeight: 1.6 }}>
              Data-backed financial solutions designed to empower and scale your enterprise. We do not use boilerplate templates.
            </p>
            <a href="#contact" className="btn btn-primary" style={{ padding: '0.875rem 2rem', fontSize: '1.05rem' }}>
              Schedule a Consultation
            </a>
          </motion.div>
        </div>

        {/* The Flowing Right Column */}
        <div className="services-list">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="service-panel"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div style={{ display: 'flex', gap: '2rem' }}>
                <div style={{ flexShrink: 0 }}>
                  <div className="service-icon-wrapper" style={{ width: '64px', height: '64px', marginBottom: 0 }}>
                    {service.icon}
                  </div>
                </div>
                <div>
                  <h3 className="service-title" style={{ fontSize: '1.5rem', marginBottom: '0.75rem', fontWeight: 700 }}>{service.title}</h3>
                  <p className="text-muted" style={{ fontSize: '1.05rem', lineHeight: 1.6 }}>{service.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
