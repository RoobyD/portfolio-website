import { useState, useEffect } from 'react';

function App() {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const texts = [
      'Computer Science Student',
      'Full-Stack Developer', 
      'Award-Winning Innovator',
      'Problem Solver'
    ];
    
    const timeout = setTimeout(() => {
      const current = texts[currentIndex];
      
      if (isDeleting) {
        setCurrentText(current.substring(0, currentText.length - 1));
      } else {
        setCurrentText(current.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === current) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentIndex((currentIndex + 1) % texts.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentIndex]);

  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Realistic Starfield with Slow Fade In/Out */}
      <div className="absolute inset-0">
        {/* Realistic stars that slowly fade in and out */}
        <div className="absolute top-1/4 left-1/6 text-white opacity-0 animate-pulse text-xs" 
             style={{animationDuration: '6s', animationDelay: '0s'}}>✦</div>
        <div className="absolute top-1/3 right-1/4 text-blue-100 opacity-0 animate-pulse text-sm" 
             style={{animationDuration: '8s', animationDelay: '2s'}}>✧</div>
        <div className="absolute bottom-1/3 left-1/3 text-purple-100 opacity-0 animate-pulse text-xs" 
             style={{animationDuration: '7s', animationDelay: '4s'}}>★</div>
        <div className="absolute top-1/2 left-1/2 text-cyan-100 opacity-0 animate-pulse text-sm" 
             style={{animationDuration: '9s', animationDelay: '1s'}}>✦</div>
        <div className="absolute bottom-1/4 right-1/3 text-yellow-100 opacity-0 animate-pulse text-xs" 
             style={{animationDuration: '5s', animationDelay: '3s'}}>✧</div>
        <div className="absolute top-1/5 right-1/6 text-indigo-100 opacity-0 animate-pulse text-sm" 
             style={{animationDuration: '10s', animationDelay: '5s'}}>★</div>
        <div className="absolute bottom-1/2 left-1/5 text-pink-100 opacity-0 animate-pulse text-xs" 
             style={{animationDuration: '6s', animationDelay: '2.5s'}}>✦</div>
        <div className="absolute top-3/4 left-2/3 text-emerald-100 opacity-0 animate-pulse text-sm" 
             style={{animationDuration: '8s', animationDelay: '1.5s'}}>✧</div>
        <div className="absolute bottom-1/5 right-1/5 text-violet-100 opacity-0 animate-pulse text-xs" 
             style={{animationDuration: '7s', animationDelay: '4.5s'}}>★</div>
        <div className="absolute top-2/3 right-1/2 text-teal-100 opacity-0 animate-pulse text-xs" 
             style={{animationDuration: '9s', animationDelay: '0.5s'}}>✦</div>
        <div className="absolute bottom-2/3 left-1/4 text-orange-100 opacity-0 animate-pulse text-sm" 
             style={{animationDuration: '6s', animationDelay: '3.5s'}}>✧</div>
        <div className="absolute top-1/6 left-3/4 text-rose-100 opacity-0 animate-pulse text-xs" 
             style={{animationDuration: '8s', animationDelay: '2.8s'}}>★</div>
        
        {/* Additional smaller twinkling stars */}
        <div className="absolute top-1/8 left-1/8 text-white opacity-0 animate-pulse text-xs" 
             style={{animationDuration: '5s', animationDelay: '1.2s'}}>·</div>
        <div className="absolute bottom-1/8 right-1/8 text-gray-300 opacity-0 animate-pulse text-xs" 
             style={{animationDuration: '7s', animationDelay: '3.8s'}}>·</div>
        <div className="absolute top-3/8 right-3/8 text-blue-200 opacity-0 animate-pulse text-xs" 
             style={{animationDuration: '6s', animationDelay: '2.2s'}}>·</div>
        <div className="absolute bottom-3/8 left-3/8 text-purple-200 opacity-0 animate-pulse text-xs" 
             style={{animationDuration: '8s', animationDelay: '4.2s'}}>·</div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex justify-between items-center p-6 md:p-8">
        <div className="text-2xl font-bold text-white">
          RD
        </div>
        <div className="hidden md:flex space-x-8 text-gray-300">
          <a href="#home" className="hover:text-white transition-colors duration-300">HOME</a>
          <a href="#about" className="hover:text-white transition-colors duration-300">ABOUT ME</a>
          <a href="#projects" className="hover:text-white transition-colors duration-300">PROJECTS</a>
          <a href="#contact" className="hover:text-white transition-colors duration-300">CONTACT ME</a>
        </div>
        <div className="md:hidden">
          <button className="text-white text-2xl">☰</button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[80vh] px-6">
        <div className="text-center max-w-4xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
              Rooby Dartiny
            </span>
          </h1>
          
          <div className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 h-12 flex items-center justify-center">
            <span>I'm a </span>
            <span className="ml-2 text-blue-300 font-semibold min-w-[300px] text-left">
              {currentText}
              <span className="animate-pulse">|</span>
            </span>
          </div>
          
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Computer Science student at TCNJ graduating Spring 2026. I build innovative web applications 
            and have won awards for creating solutions that make a real impact.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-blue-500/25">
              View My Work
            </button>
            <button className="border-2 border-blue-300 text-blue-300 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-300 hover:text-gray-900 transition-all duration-300">
              Get In Touch
            </button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mt-12">
            <a href="https://github.com/RoobyD" className="text-gray-400 hover:text-white transition-colors duration-300 text-2xl">
              📧
            </a>
            <a href="https://linkedin.com/in/rooby-dartiny-99b89a256/" className="text-gray-400 hover:text-white transition-colors duration-300 text-2xl">
              💼
            </a>
            <a href="https://github.com/RoobyD" className="text-gray-400 hover:text-white transition-colors duration-300 text-2xl">
              🔗
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 animate-bounce">
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">Scroll to explore</span>
          <div className="w-1 h-8 bg-gradient-to-b from-blue-300 to-transparent rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

export default App;