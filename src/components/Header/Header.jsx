import React from 'react';

const Header = ({ onRequestDemo }) => (
  <header className="fixed w-full left-0 top-0 flex justify-between items-center py-4 px-8 bg-[#0a0a3c] z-20 shadow" role="banner">
    <img src="/logo.svg" alt="Corefactors logo" className="h-10" />
    <button
     className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50 focus:ring-offset-2 focus:ring-offset-white"
      onClick={onRequestDemo}
    >
      <span>Request A Demo</span>
    </button>
  </header>
);

export default Header;
