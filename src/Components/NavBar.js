import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/NavBar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">Niecey's Recipe Finder</Link>
      <Link to="/search" className="search-link">Search Recipes</Link>
    </nav>
  );
};

export default Navbar;
