import React, { useState, useEffect } from 'react';

const quotes = [
  'coding makes my day... and breaks it 5 minutes later!',
  'I just like trying out new things - just to see how it goes!',
  'I fix a bug and wonder if I deserve a Nobel Prize!',
  'I go absolutely wild when Barcelona scores a goal!',
  'I like working out!',
  'I playing FootBall(Soccer)!'
];

const Home = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

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
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentIndex]);

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 space-y-4">
          <h1 className="text-5xl md:text-7xl font-light tracking-tight">
            Hi, my name is <span className="font-normal bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Rooby</span>.
          </h1>
          <div className="text-xl md:text-2xl font-light text-gray-300 h-16 flex flex-col items-center">
            <div className="mb-2">
              Sometimes, <span className="text-cyan-400">{currentText}</span><span className="animate-pulse text-cyan-400">|</span>
            </div>
          </div>
        </div>
        <p className="text-lg md:text-xl font-light text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Computer scientist, innovator, and problem solver with a passion for creating technology that makes a difference. 
          From building scalable web applications to exploring the frontiers of AI and machine learning.
        </p>
        <div className="mt-12">
          <a
            href="#about"
            className="inline-block text-sm font-light text-gray-400 hover:text-white transition-colors duration-300 tracking-wider"
          >
            Scroll to learn more ↓
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;