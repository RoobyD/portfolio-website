import React, { useState, useEffect } from 'react';

function App() {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const quotes = [
    'Computer Science Student',
    'Full-Stack Developer',
    'Award-Winning Innovator',
    'Problem Solver'
  ];

  // Reduced stars for better performance
  const [stars] = useState(() =>
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.4 + 0.2
    }))
  );

  // Planets generated once
  const [planets] = useState(() => [
    { id: 1, top: 30, left: 40, size: 20, color: '#FF6F61', duration: 30, delay: 0 },
    { id: 2, top: 60, left: 75, size: 30, color: '#6B5B95', duration: 45, delay: 10 },
    { id: 3, top: 50, left: 20, size: 25, color: '#88B04B', duration: 40, delay: 5 }
  ]);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Typing animation effect
  useEffect(() => {
    const current = quotes[currentIndex];
    const timeout = setTimeout(() => {
      setCurrentText((prev) =>
        isDeleting ? current.substring(0, prev.length - 1) : current.substring(0, prev.length + 1)
      );

      if (!isDeleting && currentText === current) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentIndex((currentIndex + 1) % quotes.length);
      }
    }, isDeleting ? 40 : 90);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentIndex]);

  const navItems = [
    { name: 'HOME', href: '#home', icon: '🏠' },
    { name: 'ABOUT ME', href: '#about', icon: '👨‍💻' },
    { name: 'PROJECTS', href: '#projects', icon: '🚀' },
    { name: 'CONTACT ME', href: '#contact', icon: '📧' }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-black text-white font-sans relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        {/* Rings - blueish glow */}
        {[...Array(5)].map((_, i) => (
          <div
            key={`ring-${i}`}
            className="absolute rounded-full border animate-glowRing"
            style={{
              width: `${300 + i * 300}px`,
              height: `${300 + i * 300}px`,
              opacity: 0.1 + i * 0.05,
              animationDelay: `${i * 0.4}s`,
              borderColor: `rgba(0, 255, 255, ${0.3 + i * 0.1})`,
              boxShadow: `0 0 15px 4px rgba(0, 255, 255, ${0.2 + i * 0.1})`
            }}
          />
        ))}

        {/* Stars - Now Static */}
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

        {/* Planets - Now Static */}
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
              opacity: 0.6,
              boxShadow: `0 0 8px 2px ${planet.color}`
            }}
          />
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-30" />
      </div>

      {/* Enhanced Navbar */}
     <header
  className={`fixed top-0 w-full py-4 px-6 md:px-12 flex justify-between items-center z-50 transition-all duration-300 will-change-transform ${
    scrolled ? 'bg-black/80 backdrop-blur-sm border-b border-gray-800' : 'bg-transparent'
  }`}>
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center font-bold text-black">
            RD
          </div>
          <span className="hidden sm:block text-lg font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Rooby Dartiny
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className="group relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-all duration-300"
            >
              <span className="flex items-center space-x-2">
                <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.icon}
                </span>
                <span>{item.name}</span>
              </span>
              {/* Hover effect line */}
              <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full font-medium text-sm hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-cyan-500/25">
            Resume
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden w-8 h-8 flex flex-col justify-center items-center space-y-1 group"
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
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center space-x-4 py-4 text-lg font-medium text-gray-300 hover:text-white border-b border-gray-800 transition-colors duration-300"
            >
              <span className="text-xl">{item.icon}</span>
              <span>{item.name}</span>
            </a>
          ))}
          <button className="mt-8 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-full font-medium hover:scale-105 transition-transform duration-300">
            Download Resume
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      {/* Hero Section */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4 z-10 pt-20">
        <div className="mb-4 text-xl md:text-2xl font-light leading-relaxed">
          Hi, my name is <span className="font-medium">Rooby</span>.
        </div>
        <div className="text-lg md:text-xl text-cyan-400 h-10 animate-fade-in">
          {currentText}<span className="animate-pulse">|</span>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-sm text-gray-500 text-center py-4 z-10">
        Copyright © {new Date().getFullYear()} Rooby Dartiny
      </footer>

      {/* Custom Styles */}
      <style>
        {`
          @keyframes pulseRing {
            0% {
              transform: scale(0.95);
              opacity: 0.08;
              box-shadow: 0 0 10px 2px rgba(0, 255, 255, 0.4);
              border-color: rgba(0, 255, 255, 0.4);
            }
            50% {
              transform: scale(1.05);
              opacity: 0.2;
              box-shadow: 0 0 25px 6px rgba(0, 255, 255, 0.6);
              border-color: rgba(0, 255, 255, 0.6);
            }
            100% {
              transform: scale(0.95);
              opacity: 0.08;
              box-shadow: 0 0 10px 2px rgba(0, 255, 255, 0.4);
              border-color: rgba(0, 255, 255, 0.4);
            }
          }

          @keyframes pulse {
            0%, 100% {
              transform: scale(1);
              opacity: 0.6;
            }
            50% {
              transform: scale(1.3);
              opacity: 1;
            }
          }

          @keyframes orbit {
            0% {
              transform: rotate(0deg) translateX(10px) rotate(0deg);
            }
            100% {
              transform: rotate(360deg) translateX(10px) rotate(-360deg);
            }
          }

          .animate-glowRing {
            animation: pulseRing 5.5s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
}

export default App;
