import React from 'react';

const HeroSection = ({ onRequestDemo }) => (
  <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-hero-gradient" role="main">
    <h1 className="hero-title mb-4">
      Simplify, Align, and Grow with <br />
      <span className="highlight">AI-Powered CRM Software</span>
    </h1>
    <p className="hero-subtitle max-w-2xl mb-8">
      Unleash revenue potential with the only CRM built to align teams, automate workflows, and drive growth.
    </p>
    <button
      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-white"
      aria-label="Request a Demo"
      onClick={onRequestDemo}
    >
      <span>Request a Demo</span>
    </button>
  </section>
);

export default HeroSection;
