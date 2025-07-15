import React, { useState, useEffect } from 'react';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Background elements generated once
  const [stars] = useState(() =>
    Array.from({ length: 25 }, (_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.4 + 0.2
    }))
  );

  const [planets] = useState(() => [
    { id: 1, top: 20, left: 85, size: 15, color: '#FF6F61' },
    { id: 2, top: 70, left: 10, size: 20, color: '#6B5B95' },
    { id: 3, top: 40, left: 90, size: 18, color: '#88B04B' }
  ]);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Rings - blueish glow */}
        {[...Array(4)].map((_, i) => (
          <div
            key={`ring-${i}`}
            className="absolute rounded-full border animate-glowRing"
            style={{
              width: `${200 + i * 200}px`,
              height: `${200 + i * 200}px`,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              opacity: 0.15 + i * 0.05,
              animationDelay: `${i * 0.5}s`,
              borderColor: `rgba(0, 255, 255, ${0.4 + i * 0.15})`,
              boxShadow: `0 0 30px 8px rgba(0, 255, 255, ${0.2 + i * 0.1})`
            }}
          />
        ))}

        {/* Stars */}
        {stars.map((star) => (
          <div
            key={`star-${star.id}`}
            className="absolute bg-white rounded-full"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              top: `${star.top}%`,
              left: `${star.left}%`,
              opacity: star.opacity
            }}
          />
        ))}

        {/* Planets */}
        {planets.map((planet) => (
          <div
            key={`planet-${planet.id}`}
            className="absolute rounded-full"
            style={{
              width: `${planet.size}px`,
              height: `${planet.size}px`,
              top: `${planet.top}%`,
              left: `${planet.left}%`,
              backgroundColor: planet.color,
              opacity: 0.4,
              boxShadow: `0 0 8px 2px ${planet.color}`
            }}
          />
        ))}

        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-black opacity-20" />
      </div>

      {/* Navigation */}
      <header className={`fixed top-0 w-full py-4 px-6 md:px-12 flex justify-between items-center z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/90 backdrop-blur-sm border-b border-gray-800/50' : 'bg-transparent'
      }`}>
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center font-bold text-black text-sm">
            RD
          </div>
          <span className="hidden sm:block text-xl font-light tracking-wide">
            Rooby Dartiny
          </span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-light text-gray-300 hover:text-white transition-colors duration-300 tracking-wide"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden w-8 h-8 flex flex-col justify-center items-center space-y-1"
        >
          <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
        </button>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-black/95 backdrop-blur-md z-40 transform transition-transform duration-300 ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      } md:hidden`}>
        <div className="flex flex-col pt-20 px-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="py-4 text-lg font-light text-gray-300 hover:text-white border-b border-gray-800/50 transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="relative z-10">
        {children}
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-12 border-t border-gray-800/50 z-10 relative">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-gray-400 font-light">
          <p>© {new Date().getFullYear()} Rooby Dartiny. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a 
              href="https://github.com/RoobyD" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300"
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/rooby-dartiny-99b89a256/" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300"
            >
              LinkedIn
            </a>
            <a 
              href="mailto:dartinr1@tcnj.edu" 
              className="hover:text-white transition-colors duration-300"
            >
              Email
            </a>
          </div>
        </div>
      </footer>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes pulseRing {
          0% {
            transform: translate(-50%, -50%) scale(0.95);
            opacity: 0.1;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.05);
            opacity: 0.3;
          }
          100% {
            transform: translate(-50%, -50%) scale(0.95);
            opacity: 0.1;
          }
        }

        .animate-glowRing {
          animation: pulseRing 6s ease-in-out infinite;
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default Layout;