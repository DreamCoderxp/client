import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css'; // Add custom styling if needed

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo or Brand Name */}
        <Link to="/" className="navbar-logo">
          MyPokemonAPI
        </Link>

        {/* Links */}
        <ul className="navbar-links">
          <li>
            <Link to="/" className="navbar-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/pokemon-list" className="navbar-link">
              Pokemon List
            </Link>
          </li>
          <li>
            <Link to="/about" className="navbar-link">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="navbar-link">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;