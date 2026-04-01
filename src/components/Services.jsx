import React from 'react';
import { motion } from 'framer-motion';
import { FiPieChart, FiBriefcase, FiAperture, FiBook } from 'react-icons/fi';

export default function Services() {
  const services = [
    {
      title: "Tax Services",
      desc: "We don't file returns. We build the tax position you should have had years ago. Business and personal, combined.",
      icon: <FiPieChart size={32} />
    },
    {
      title: "Virtual CFO",
      desc: "Financial leadership on demand at a fraction of the cost of a full-time C-suite hire. Cash flow clarity. Growth roadmaps. Hard decisions made easy.",
      icon: <FiBriefcase size={32} />
    },
    {
      title: "Trust & Estate Planning",
      desc: "Wealth transfers without a strategy become wealth losses. We protect your estate so it reaches the people you intend — intact.",
      icon: <FiAperture size={32} />
    },
    {
      title: "Bookkeeping Services",
      desc: "Real-time books, zero lag. You see your exact margins every day — not at the end of the quarter when it's too late to act.",
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
              Four Disciplines. <br/>One Firm. <br/>Zero Surprises.
            </h2>
            <p className="text-muted" style={{ fontSize: '1.15rem', marginBottom: '2.5rem', lineHeight: 1.6 }}>
              Most accounting firms react to your past. We engineer your future.
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
