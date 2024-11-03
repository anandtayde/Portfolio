import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <Portfolio />
      <About />
      <Contact />
    </div>
  );
}

export default App;
