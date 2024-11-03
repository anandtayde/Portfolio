// src/components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="p-4 shadow-md">
      <h1 className="text-2xl font-bold">Anand Tayde</h1>
      <ul className="flex space-x-4">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
