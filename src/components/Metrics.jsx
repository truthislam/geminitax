import React from 'react';

export default function Metrics() {
  const stats = [
    { value: "40 years", label: "of combined Experience" },
    { value: "99.8%", label: "response to emails" },
    { value: "100+", label: "Clients" },
    { value: "100%", label: "Client NPS" }
  ];

  return (
    <section className="metrics-section" style={{ backgroundColor: 'var(--color-primary)', padding: '5rem 0', color: 'white' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', textAlign: 'center', alignItems: 'center' }}>
          {stats.map((stat, idx) => (
            <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ fontSize: '3.5rem', fontWeight: 800, fontFamily: 'Playfair Display, serif', lineHeight: 1, letterSpacing: '-0.02em', color: '#60a5fa' }}>{stat.value}</div>
              <div style={{ fontSize: '1rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'white', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                 {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
