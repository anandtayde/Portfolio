// src/components/Hero.js
import React from 'react';

const Hero = () => {
  return (
    <section className="hero-section flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="text-center text-white">
        <h1 className="text-5xl font-bold">Anand Tayde</h1>
        <p className="mt-4 text-xl">Web Developer</p>
        <p className="mt-2 text-lg">I build dynamic and engaging web experiences.</p>
      </div>
    </section>
  );
};

export default Hero;
