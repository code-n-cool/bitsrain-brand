import React, { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationLinks = [
    { name: 'Home', path: '#hero' },
    { name: 'Capabilities', path: '#capabilities' },
    { name: 'Process', path: '#process' },
    { name: 'Work', path: '#work' },
    { name: 'Team', path: '#team' },
    { name: 'Contact', path: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur border-b border-white/10">
      <nav className="section-container">
        <div className="flex items-center justify-between h-16">
          <a href="#hero" className="flex items-center space-x-3">
            <img
              src="/images/bitsrain-logo.png"
              alt="BitsRain Logo"
              className="w-10 h-10 rounded-lg"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-semibold text-white tracking-tight">BitsRain</span>
              <span className="text-xs uppercase text-slate-300">AI/ML Studio</span>
            </div>
          </a>

          <div className="hidden md:flex items-center space-x-4">
            {navigationLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                className="text-sm font-medium tracking-tight text-slate-200 hover:text-white transition-colors px-3 py-1 rounded-full hover:bg-white/5"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="text-sm font-semibold text-slate-900 bg-white hover:bg-slate-100 px-4 py-2 rounded-full transition-colors"
            >
              Talk to us
            </a>
          </div>

          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 bg-slate-900 rounded-xl shadow-lg mt-2 border border-white/10">
            {navigationLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                className="block py-3 px-4 text-sm text-slate-100 hover:bg-white/5"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="px-4 pt-2">
              <a
                href="#contact"
                className="block text-center w-full bg-white text-slate-900 py-2 rounded-full text-sm font-semibold hover:bg-slate-100 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Talk to us
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

