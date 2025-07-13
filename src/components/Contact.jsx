import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [state, handleSubmit] = useForm("xnnzanww");

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // If form was submitted successfully, show success message in modal
  if (state.succeeded && isModalOpen) {
    return (
      <>
        <section id="contact" className="py-20 px-4 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-light mb-8">Let's Connect</h2>
            <p className="text-lg font-light text-gray-300 mb-12 max-w-2xl mx-auto">
              I'm always interested in new opportunities and collaborations. Whether you have a project in mind 
              or just want to say hello, I'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-light hover:scale-105 transition-transform duration-300"
              >
                Get in Touch
              </button>
              <a
                href="#"
                className="px-8 py-3 border border-gray-600 text-gray-300 rounded-full font-light hover:border-white hover:text-white transition-colors duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>
        </section>

        {/* Success Modal */}
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div 
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={closeModal}
          />
          
          <div className="relative bg-gray-900/95 backdrop-blur-md border border-gray-700/50 rounded-2xl p-8 m-4 w-full max-w-md shadow-2xl text-center">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-light mb-2 text-white">Message Sent!</h3>
              <p className="text-gray-400 font-light">
                Thanks for reaching out! I'll get back to you as soon as possible.
              </p>
            </div>
            
            <button
              onClick={closeModal}
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-light hover:scale-105 transition-transform duration-300"
            >
              Close
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <section id="contact" className="py-20 px-4 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-8">Let's Connect</h2>
          <p className="text-lg font-light text-gray-300 mb-12 max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. Whether you have a project in mind 
            or just want to say hello, I'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-light hover:scale-105 transition-transform duration-300"
            >
              Get in Touch
            </button>
            <a
              href="#"
              className="px-8 py-3 border border-gray-600 text-gray-300 rounded-full font-light hover:border-white hover:text-white transition-colors duration-300"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Background overlay */}
          <div 
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={closeModal}
          />
          
          {/* Modal Content */}
          <div className="relative bg-gray-900/95 backdrop-blur-md border border-gray-700/50 rounded-2xl p-8 m-4 w-full max-w-md shadow-2xl">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Header */}
            <div className="mb-6">
              <h3 className="text-2xl font-light mb-2 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Get in Touch
              </h3>
              <p className="text-gray-400 font-light">
                Send me a message and I'll get back to you soon!
              </p>
            </div>

            {/* Formspree Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-light text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors duration-300"
                  placeholder="your.email@example.com"
                />
                <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
                  className="text-red-400 text-sm mt-1"
                />
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-sm font-light text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors duration-300"
                  placeholder="What's this about?"
                />
                <ValidationError 
                  prefix="Subject" 
                  field="subject"
                  errors={state.errors}
                  className="text-red-400 text-sm mt-1"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-light text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors duration-300 resize-vertical"
                  placeholder="Tell me about your project or just say hello!"
                />
                <ValidationError 
                  prefix="Message" 
                  field="message"
                  errors={state.errors}
                  className="text-red-400 text-sm mt-1"
                />
              </div>

              {/* Submit Button */}
              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-light hover:scale-105 transition-transform duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {state.submitting ? 'Sending...' : 'Send Message'}
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-6 py-3 border border-gray-600 text-gray-300 rounded-lg font-light hover:border-white hover:text-white transition-colors duration-300"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;