import React from 'react';

const Home = () => (
  <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center px-4">
    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <h1 className="text-5xl md:text-7xl font-light tracking-tight">
          Website is currently being updated
        </h1>
      </div>
      <p className="text-lg md:text-xl font-light text-gray-300 max-w-2xl mx-auto leading-relaxed">
        This website is currently being updated and is not available for exploration right now.
        I'm working on improvements behind the scenes, so please check back soon.
      </p>
      <div className="mt-12">
        <span className="inline-block text-sm font-light text-gray-400 tracking-wider">
          Thank you for your patience.
        </span>
      </div>
    </div>
  </section>
);

export default Home;
