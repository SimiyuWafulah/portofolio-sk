import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gray-800 text-white py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">Kelvin Simiyu || SWE</div>
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
          <li><Link to="/projects" className="hover:text-gray-400">Projects</Link></li>
          <li><Link to="/contact" className="hover:text-gray-400">Contact</Link></li>
          <li><Link to="/blog" className="hover:text-gray-400">Blog</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
