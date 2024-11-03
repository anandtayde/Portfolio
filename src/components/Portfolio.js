// src/components/Portfolio.js
import React from 'react';

const projects = [
  {
    title: 'Project 1',
    description: 'Description of Project 1',
    image: 'https://via.placeholder.com/150', // Replace with actual image URL
  },
  {
    title: 'Project 2',
    description: 'Description of Project 2',
    image: 'https://via.placeholder.com/150',
  },
  {
    title: 'Project 3',
    description: 'Description of Project 3',
    image: 'https://via.placeholder.com/150',
  },
  // Add more projects as needed
];

const Portfolio = () => {
  return (
    <section className="p-8 bg-gray-100">
      <h2 className="text-3xl font-bold mb-6">Portfolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="shadow-lg rounded-lg overflow-hidden bg-white">
            <img src={project.image} alt={project.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
