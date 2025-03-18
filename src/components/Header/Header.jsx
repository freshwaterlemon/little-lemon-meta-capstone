import React from 'react'
import Navbar from '../Navbar/Navbar'
import logo from '../../assets/logo.png'
import './Header.css'

const Header = () => {
  return (
    <div className="header-container">
      <img src={logo} alt="Little Lemon Logo" className="logo" />
      <Navbar className="navbar-header" />
    </div>
  )
}

export default Header