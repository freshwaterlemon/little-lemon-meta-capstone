import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = ({ className }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="nav-container">
      <div className="hamburger" onClick={toggleMenu}>
        <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
        <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
        <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
      </div>

      <ul className={`navbar ${className || ''} ${isMenuOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={() => setIsMenuOpen(false)}>HOME</Link></li>
        <li><Link to="/#menu" onClick={() => setIsMenuOpen(false)}>MENU</Link></li>
        <li><Link to="/#review" onClick={() => setIsMenuOpen(false)}>REVIEW</Link></li>
        <li><Link to="/#about" onClick={() => setIsMenuOpen(false)}>ABOUT</Link></li>
        <li><Link to="/reservation" onClick={() => setIsMenuOpen(false)}>RESERVATION</Link></li>
        <li><Link to="/order-online" onClick={() => setIsMenuOpen(false)}>ORDER ONLINE</Link></li>
        <li><Link to="/login" onClick={() => setIsMenuOpen(false)}>LOGIN</Link></li>

      </ul>
    </nav>
  )
}

export default Navbar

