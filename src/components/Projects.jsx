import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment processing, inventory management, and real-time order tracking.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#"
    },
    {
      title: "AI-Powered Task Manager",
      description: "An intelligent task management application that uses machine learning to prioritize tasks, predict completion times, and optimize workflow efficiency for teams and individuals.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80",
      tags: ["Python", "TensorFlow", "React", "FastAPI"],
      link: "#"
    },
    {
      title: "Real-time Chat Application",
      description: "A modern messaging platform with features like group chats, file sharing, video calls, and end-to-end encryption. Built with WebSocket technology for instant communication.",
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=800&q=80",
      tags: ["Socket.io", "React", "Express", "WebRTC"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light mb-4 text-center">Featured Projects</h2>
        <p className="text-lg font-light text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          Exploring the intersection of technology and innovation through practical solutions
        </p>
        
        <div className="space-y-20">
          {projects.map((project, index) => (
            <div key={index} className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
              <div className={`${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                <h3 className="text-2xl md:text-3xl font-light mb-4">{project.title}</h3>
                <p className="text-lg font-light text-gray-300 leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-light">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-light"
                >
                  View Project →
                </a>
              </div>
              <div className={`${index % 2 === 1 ? 'md:col-start-1' : ''}`}>
                <div className="aspect-video rounded-2xl overflow-hidden bg-gray-800/50">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;