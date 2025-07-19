import React from 'react';
import goatPic from '../assets/images/projects/goat_pic.jpg';
import bisonPic from '../assets/images/projects/bison_pic.jpg';
import workwellPic from '../assets/images/projects/workwell_pic.png';

const Projects = () => {
  const projects = [
    {
      title: "WorkWell Pre-Screening & Registration System",
      description: "A secure web application designed to help formerly incarcerated individuals pre-register for job-readiness programs. Built with Ruby on Rails and PostgreSQL, featuring role-based access control, dynamic forms, and accessible UI design to ensure privacy and ease of use for vulnerable populations.",
      image: workwellPic,
      tags: ["Ruby on Rails", "PostgreSQL", "Accessibility", "Community Impact"],
      link: "#",
      isPrivate: true,
      impact: "Client-Based Nonprofit Project"
    },
    {
      title: "Wild Sky Financial Estimation Tool",
      description: "Engineered and deployed a financial estimation tool to help mobilize the American Prairie's Wild Sky program, educating and empowering Montana ranchers to adopt conservation strategies through monetary incentives. Involved extensive research on agricultural practices and regional biodiversity across Montana's 56 counties.",
      image: bisonPic,
      tags: ["React", "Node.js", "Conservation", "Data Analysis"],
      link: "https://devpost.com/software/wild-sky-financial-estimation-tool",
      isPrivate: false,
      impact: "HackTCNJ Social Impact Innovation Award Winner",
      imageCredit: "Photo by Dennis Lingohr, American Prairie"
    },
    {
      title: "Goat Scoring Database System",
      description: "Comprehensive database solution using PostgreSQL and Python to organize and manage agricultural data efficiently. Features automated data processing with Pandas, interactive Flask web interface, and robust SQL schemas for real-world data management challenges.",
      image: goatPic,
      tags: ["PostgreSQL", "Python", "Flask", "Data Management"],
      link: "#",
      isPrivate: true,
      impact: "Agricultural Data Solutions"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 md:px-12 relative z-10">
      {/* Space-themed background for readability */}
      <div className="absolute inset-0 bg-black/85 backdrop-blur-sm"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-light mb-4 text-center">Featured Projects</h2>
        <p className="text-lg font-light text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          Exploring the intersection of technology and innovation through practical solutions
        </p>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-white/5 hover:shadow-[0_0_20px_rgba(0,255,255,0.2)] transition-shadow duration-300 p-4 md:p-6"
            >
              <div className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
                <div className={`${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                  {/* Impact Badge */}
                  <div className="mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-light bg-green-500/20 text-green-300 border border-green-500/30">
                      <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {project.impact}
                    </span>
                  </div>

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

                  {/* Project Link */}
                  {project.isPrivate ? (
                    <div className="flex items-center text-gray-400">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                      </svg>
                      <span className="font-light">Private Repository - Client Confidentiality</span>
                    </div>
                  ) : (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-light"
                    >
                      View Project →
                    </a>
                  )}
                </div>

                <div className={`${index % 2 === 1 ? 'md:col-start-1' : ''}`}>
                  <div className="aspect-video rounded-2xl overflow-hidden bg-gray-800/50 relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
                    />
                    {/* Image Credit */}
                    {project.imageCredit && (
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        {project.imageCredit}
                      </div>
                    )}
                  </div>
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
