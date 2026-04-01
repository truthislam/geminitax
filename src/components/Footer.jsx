import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--color-primary)', color: 'white', padding: '6rem 0 2rem 0', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '5rem', marginBottom: '5rem' }}>
        
        {/* About Section */}
        <div style={{ flex: 1 }}>
          <h3 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', color: 'white', fontFamily: 'Playfair Display, serif' }}>Gemini Accounting</h3>
          <p style={{ color: '#94a3b8', lineHeight: 1.7, fontSize: '1rem' }}>
            At Gemini Accounting & Advisory Services, our core values are the foundation of every relationship we build and every service we provide. They define how we work and how we support our clients' success.
          </p>
        </div>

        {/* Navigation */}
        <div style={{ flex: 1 }}>
          <h4 style={{ fontSize: '1.15rem', marginBottom: '1.5rem', color: 'white', fontWeight: 600 }}>Navigate</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <li><a href="/#core-competencies" style={{ color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s' }}>Our Services</a></li>
            <li><a href="/#process" style={{ color: '#94a3b8', textDecoration: 'none' }}>Our Process</a></li>
            <li><Link to="/about" style={{ color: '#94a3b8', textDecoration: 'none' }}>Meet The Team</Link></li>
            <li><a href="https://gemini.taxdome.com/" style={{ color: '#94a3b8', textDecoration: 'none' }}>Client Portal</a></li>
            <li><Link to="/blogs" style={{ color: '#94a3b8', textDecoration: 'none' }}>Blogs</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div style={{ flex: 1.5 }}>
          <h4 style={{ fontSize: '1.15rem', marginBottom: '1rem', color: 'white', fontWeight: 600 }}>Join Our Newsletter</h4>
          <p style={{ color: '#94a3b8', marginBottom: '1.5rem', fontSize: '1rem' }}>Get Smart Tax Strategies Straight to Your Inbox!</p>
          <form style={{ display: 'flex', gap: '0.75rem' }} onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Email Address" 
              required
              style={{ 
                flex: 1, 
                padding: '1rem 1.25rem', 
                borderRadius: 'var(--radius-md)', 
                border: '1px solid #334155', 
                background: '#1e293b', 
                color: 'white', 
                outline: 'none',
                fontFamily: 'Plus Jakarta Sans, sans-serif'
              }} 
            />
            <button className="btn btn-primary" style={{ borderRadius: 'var(--radius-md)', padding: '1rem 2rem' }}>
              Subscribe
            </button>
          </form>
        </div>

      </div>

      <div className="container" style={{ borderTop: '1px solid #334155', paddingTop: '2.5rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', color: '#64748b', fontSize: '0.9rem', gap: '1rem' }}>
        <div>Copyright © 2026 Gemini Accounting Services. All rights reserved. Powered by BokudenDigital.</div>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <Link to="/privacy-policy" style={{ color: '#64748b', textDecoration: 'none' }}>Privacy Policy</Link>
          <Link to="/terms-conditions" style={{ color: '#64748b', textDecoration: 'none' }}>Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
}

