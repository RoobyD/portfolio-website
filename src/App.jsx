import React, { useState, useEffect } from 'react';

// Move quotes outside the component to keep them stable
const quotes = [
  'Computer Science Student',
  'Full-Stack Developer',
  'Award-Winning Innovator',
  'Problem Solver'
];

function App() {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Generate stars once on mount
  const [stars] = useState(() =>
    Array.from({ length: 80 }, (_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.6 + 0.3,
      delay: Math.random() * 5
    }))
  );

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

  return (
    <div className="min-h-screen flex flex-col bg-black text-white font-sans relative overflow-hidden">
      {/* Glowing Ring + Star Background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        {/* Rings */}
        {[...Array(5)].map((_, i) => (
          <div
            key={`ring-${i}`}
            className="absolute rounded-full border border-white animate-glowRing"
            style={{
              width: `${300 + i * 300}px`,
              height: `${300 + i * 300}px`,
              opacity: 0.1 + i * 0.05,
              animationDelay: `${i * 0.4}s`
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
              opacity: star.opacity,
              animation: `pulse 4s ease-in-out ${star.delay}s infinite`
            }}
          />
        ))}

        {/* Overlay to tone it down slightly */}
        <div className="absolute inset-0 bg-black opacity-30" />
      </div>

      {/* Navbar */}
      <header className="w-full py-4 px-6 md:px-12 flex justify-between items-center bg-[#0d1117] shadow-md z-10">
        <div className="text-xl font-bold">RD</div>
        <nav className="space-x-6 text-sm font-medium text-gray-300">
          <a href="#home" className="hover:text-white">HOME</a>
          <a href="#about" className="hover:text-white">ABOUT ME</a>
          <a href="#projects" className="hover:text-white">PROJECTS</a>
          <a href="#contact" className="hover:text-white">CONTACT ME</a>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4 z-10">
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
              box-shadow: 0 0 10px 2px white;
            }
            50% {
              transform: scale(1.05);
              opacity: 0.2;
              box-shadow: 0 0 25px 6px white;
            }
            100% {
              transform: scale(0.95);
              opacity: 0.08;
              box-shadow: 0 0 10px 2px white;
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

          .animate-glowRing {
            animation: pulseRing 5.5s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
}

export default App;
