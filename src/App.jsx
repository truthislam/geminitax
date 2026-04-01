import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Metrics from './components/Metrics';
import TrustBar from './components/TrustBar';
import CoreCompetencies from './components/CoreCompetencies';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Comparison from './components/Comparison';
import Team from './components/Team';
import MeetFounder from './components/MeetFounder';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import './components/layout.css';

function App() {
  return (
    <div className="app-wrapper bg-noise">
      <Header />
      <main>
        <Hero />
        <Metrics />
        <TrustBar />
        <CoreCompetencies />
        <Services />
        <WhyUs />
        <Comparison />
        <MeetFounder />
        <Team />
        <Testimonials />
        <FAQ />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
