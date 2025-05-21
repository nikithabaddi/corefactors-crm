import React, { useState } from 'react';
import './styles/tailwind.scss';
import './styles/custom.scss';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CookieDialog from './components/CookieDialog';

function App() {
  const [showCookieDialog, setShowCookieDialog] = useState(false);

  // Handles the "Request Demo" button click from Header or HeroSection
  const handleRequestDemo = () => {
    setShowCookieDialog(true);
  };

  return (
    <div className="min-h-screen w-screen overflow-x-hidden bg-hero-gradient">
      <Header onRequestDemo={handleRequestDemo} />
      <HeroSection onRequestDemo={handleRequestDemo} />
      <CookieDialog open={showCookieDialog} onClose={() => setShowCookieDialog(false)} />
    </div>
  );
}

export default App; 