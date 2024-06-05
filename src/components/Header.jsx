import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-slate-900 text-white py-4 fixed w-full top-0 z-10">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">KS</div>
        <ul className="flex justify-center space-x-8 md:space-x-12 lg:space-x-16">
          <li><Link to="/" className="hover:text-teal-400">Home</Link></li>
          <li><Link to="/" className="hover:text-teal-400">About</Link></li>
          <li><Link to="/projects" className="hover:text-teal-400">Projects</Link></li>
          <li><Link to="/contact" className="hover:text-teal-400">Contact</Link></li>
          <li><Link to="/blog" className="hover:text-teal-400">Blog</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
