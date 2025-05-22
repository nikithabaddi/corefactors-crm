import React, { useState } from 'react';
import './styles/tailwind.scss';
import './styles/custom.scss';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CookieDialog from './components/CookieDialog';
import FeatureCards from './components/FeatureCards/FeatureCards';
import Features from './components/Features/Features';
import Cta from './components/Cta/Cta';
import Workflows from './components/Workflows/Workflows';
import Testimonials from './components/Testimonials/Testimonials';
import CrmBoxes from './components/CrmBoxes/CrmBoxes';
function App() {
  const [showCookieDialog, setShowCookieDialog] = useState(false);

  
  const handleRequestDemo = () => {
    setShowCookieDialog(true);
  };

  return (
    <div className="min-h-screen w-screen overflow-x-hidden bg-hero-gradient">
      <Header onRequestDemo={handleRequestDemo} />
      <HeroSection onRequestDemo={handleRequestDemo} />
      <CookieDialog open={showCookieDialog} onClose={() => setShowCookieDialog(false)} />
      <FeatureCards />
      <CrmBoxes onScheduleDemo={handleRequestDemo} /> 
      <Features />
      <Workflows />
      <Testimonials />
      <Cta onScheduleDemo={handleRequestDemo}/>
      
    </div>
  );
}

export default App; 