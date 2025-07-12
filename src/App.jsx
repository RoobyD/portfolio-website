import React from 'react';
import Layout from './components/Layout.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <Layout>
      <Home />
      <About />
      <Projects />
      <Contact />
    </Layout>
  );
}

export default App;