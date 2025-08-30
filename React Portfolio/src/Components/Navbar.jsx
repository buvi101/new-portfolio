import React from 'react'
import {Link, useLocation} from 'react-router-dom'
function Navbar() {
  const location = useLocation();
return (
  <>
  <nav className='navbar'>
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
  </nav>
  </>
)
}

export default Navbar