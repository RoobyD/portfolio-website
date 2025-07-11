import React, { useState, useEffect } from 'react';

function App() {
  const quotes = [
    'Computer Science Student',
    'Full-Stack Developer',
    'Award-Winning Innovator',
    'Problem Solver'
  ];

  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

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

      {/* Background (optional canvas or static) */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-[#111827] to-black opacity-70" />
      </div>

      {/* Hero Section */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4 z-10">
        <div className="mb-4">
          <h1 className="text-xl md:text-2xl font-light leading-relaxed">
            Hi, my name is <span className="font-medium">Rooby</span>.
          </h1>
        </div>
        <div className="text-lg md:text-xl text-cyan-400 h-10 animate-fade-in">
          {currentText}<span className="animate-pulse">|</span>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-sm text-gray-500 text-center py-4 z-10">
        Copyright © {new Date().getFullYear()} Rooby Dartiny
      </footer>
    </div>
  );
}

export default App;
