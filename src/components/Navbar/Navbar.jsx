import React, { useState } from 'react'
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
        <li><a href="#home" onClick={() => setIsMenuOpen(false)}>HOME</a></li>
        <li><a href="#about" onClick={() => setIsMenuOpen(false)}>ABOUT</a></li>
        <li><a href="#menu" onClick={() => setIsMenuOpen(false)}>MENU</a></li>
        <li><a href="#reservation" onClick={() => setIsMenuOpen(false)}>RESERVATION</a></li>
        <li><a href="#order-online" onClick={() => setIsMenuOpen(false)}>ORDER ONLINE</a></li>
        <li><a href="#login" onClick={() => setIsMenuOpen(false)}>LOGIN</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
