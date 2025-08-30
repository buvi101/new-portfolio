import React, { useState } from 'react';
import { FaBars } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';

function Hamburger() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const togglemenu = () => setIsOpen(!isOpen);

  return (
    <>
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
          </li>
          <li>
            <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link>
          </li>
          <li>
            <Link to="/service" className={location.pathname === '/service' ? 'active' : ''}>Service</Link>
          </li>
          <li>
            <Link to="/work" className={location.pathname === '/work' ? 'active' : ''}>Work</Link>
          </li>
          <li>
            <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
          </li>
        </ul>
      </div>

      <div className="hamburger" onClick={togglemenu}><FaBars /></div>
    </>
  );
}

export default Hamburger;
