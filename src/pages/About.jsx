import React, { useEffect } from 'react';
import MeetFounder from '../components/MeetFounder';
import Team from '../components/Team';
import CtaSection from '../components/CtaSection';

export default function About() {
  // Ensure the page starts at the top when navigating
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ paddingTop: '80px' }}>
      <MeetFounder />
      <Team />
      <CtaSection />
    </div>
  );
}

