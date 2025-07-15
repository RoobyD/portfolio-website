import React from 'react';
import profilePic from '../assets/images/profile/profile_pic.jpg';

const About = () => {
  const skills = ["Python", "JavaScript", "HTML & CSS", "C++", "Java", "Swift", "Ruby", "SQL"];

  return (
    <section id="about" className="py-20 px-4 md:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-light mb-6">About Me</h2>
            <p className="text-lg font-light text-gray-300 leading-relaxed mb-6">
              I'm a passionate computer science student and full-stack developer with a love for creating innovative solutions 
              to complex problems. My journey in technology has been driven by curiosity and a desire to build applications 
              that make a meaningful impact.
            </p>
            <p className="text-lg font-light text-gray-300 leading-relaxed mb-8">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
              or capturing the world through my lens. I believe in the power of technology to connect people and solve 
              real-world challenges.
            </p>
            <div className="flex flex-wrap gap-3">
              {skills.map((tech) => (
                <span key={tech} className="px-4 py-2 bg-gray-800/50 text-gray-300 rounded-full text-sm font-light">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-cyan-400/20 to-blue-500/20 p-1">
              <img 
                src={profilePic} 
                alt="Rooby Dartiny"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            {/* Optional: Add a subtle glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/10 to-blue-500/10 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;