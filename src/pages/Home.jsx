import React from 'react';
import Hero from '../components/Hero';
import Metrics from '../components/Metrics';
import TrustBar from '../components/TrustBar';
import CoreCompetencies from '../components/CoreCompetencies';
import WhyUs from '../components/WhyUs';
import Comparison from '../components/Comparison';
import MeetFounder from '../components/MeetFounder';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import CtaSection from '../components/CtaSection';

export default function Home() {
  return (
    <>
      <Hero />
      <Metrics />
      <TrustBar />
      <CoreCompetencies />
      <WhyUs />
      <Comparison />
      <MeetFounder />
      <Testimonials />
      <FAQ />
      <CtaSection />
    </>
  );
}
