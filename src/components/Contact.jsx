import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-light mb-8">Let's Connect</h2>
        <p className="text-lg font-light text-gray-300 mb-12 max-w-2xl mx-auto">
          I'm always interested in new opportunities and collaborations. Whether you have a project in mind 
          or just want to say hello, I'd love to hear from you.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href="mailto:rooby@example.com"
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-light hover:scale-105 transition-transform duration-300"
          >
            Get in Touch
          </a>
          <a
            href="#"
            className="px-8 py-3 border border-gray-600 text-gray-300 rounded-full font-light hover:border-white hover:text-white transition-colors duration-300"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;