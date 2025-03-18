import React from 'react'
import './Navbar.css'

const Navbar = ({ className }) => {
  return (
    <>
      <nav>
      <ul className={`navbar ${className || ''}`}> {/* Apply passed className */}
          <li><a href="#home">HOME</a></li>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#menu">MENU</a></li>
          <li><a href="#reservation">RESERVATION</a></li>
          <li><a href="#order online">ORDER ONLINE</a></li>
          <li><a href="#login">LOGIN</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar