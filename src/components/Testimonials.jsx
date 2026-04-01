import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';

const reviews = [
  { name: "Asad Riaz", role: "Business & Personal Client", initials: "AR", text: "Saad is our business and personal tax prep accountant, and he is truly a rare gem, humble, kind, passionate and incredibly skilled. He solves the hardest problems in the simplest ways. Just give him the task and relax—he always knows what to do next." },
  { name: "Muhammad Saifee", role: "Business Client", initials: "MS", text: "Professional, prompt, thorough, and accurate. Really helpful and always available on call and in person to support and advise. Highly recommended." },
  { name: "Alrobaie Khamdan", role: "Client", initials: "AK", text: "I had an excellent experience working with Saad and the team at Gemini. They were incredibly thorough and ensured that my complex tax situation was handled with expertise and attention to detail. Thanks to their efforts, my tax filing process was smooth and stress-free." },
  { name: "Arvind Pakanati", role: "Client", initials: "AP", text: "Saad is absolutely fantastic and is very knowledgeable. He did an outstanding job, gone above and beyond in resolving a complicated tax issue. I highly recommend Saad to anyone looking for a skilled CPA." },
  { name: "Yasir Ahmad", role: "Business Client", initials: "YA", text: "Saad and his team have been great for us - highly recommended for individual and business tax accounting 🧾" },
  // Duplicates for seamless infinite scroll
  { name: "Asad Riaz", role: "Business & Personal Client", initials: "AR", text: "Saad is our business and personal tax prep accountant, and he is truly a rare gem, humble, kind, passionate and incredibly skilled. He solves the hardest problems in the simplest ways. Just give him the task and relax—he always knows what to do next." },
  { name: "Muhammad Saifee", role: "Business Client", initials: "MS", text: "Professional, prompt, thorough, and accurate. Really helpful and always available on call and in person to support and advise. Highly recommended." },
];

export default function Testimonials() {
  const containerRef = useRef(null);

  return (
    <section className="testimonials-section section" style={{ backgroundColor: 'var(--color-surface-soft)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)', overflow: 'hidden' }}>
      <div className="container" style={{ marginBottom: '4rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', color: 'var(--color-primary)', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
          What Happens When Your Numbers Are Finally in the Right Hands.
        </h2>
        <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.15rem' }}>
          Verified Google reviews from business owners across Greater Philadelphia who made the switch.
        </p>
      </div>

      <div className="marquee-container" ref={containerRef} style={{ maxWidth: '100vw' }}>
        <motion.div 
          className="marquee-content"
          animate={{ x: [0, -2800] }}
          transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
          style={{ width: '5600px' }} // Adjusted for more cards
        >
          {reviews.map((review, idx) => (
            <div key={idx} className="testimonial-card-premium" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', minWidth: '450px', background: 'white' }}>
               
               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                     {/* Solid Navy Avatar */}
                     <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--color-primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '1.25rem', boxShadow: 'var(--shadow-md)' }}>
                        {review.initials}
                     </div>
                     <div>
                        <div style={{ fontWeight: 700, color: 'var(--color-heading)', fontSize: '1.05rem', display: 'flex', alignItems: 'center', gap: '0.35rem', letterSpacing: '-0.02em', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                           {review.name}
                           {/* Trust Badge */}
                           <FiCheckCircle size={15} color="var(--color-primary)" />
                        </div>

                        <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', fontWeight: 500, marginTop: '0.1rem', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{review.role}</div>
                     </div>
                  </div>
                  {/* Star Rating Render */}
                  <div style={{ display: 'flex', gap: '2px', color: '#f59e0b', fontSize: '1.1rem' }}>
                     {'★'.repeat(5)}
                  </div>
               </div>

               <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'var(--color-text)', fontStyle: 'italic', fontFamily: "'Merriweather', Georgia, serif" }}>"{review.text}"</p>

            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
