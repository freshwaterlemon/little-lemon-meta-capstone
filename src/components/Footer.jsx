import React from 'react'
import footerlogo from '../assets/footerlogo.png'
import './Footer.css'
import Navbar from './Navbar'

const Footer = () => {
  return (
    <>
      <img src={footerlogo} alt="footer-logo" className='logo' />

      <div className="footer-sections">
        <div className="doormat-navigation">
          <h4>Doormat Navigation</h4>
          <Navbar className="navbar-footer" /> 
        </div>
        <div className="contact">
          <h4>Contact</h4>
          <p>1234 Street Name</p>
          <p>City, State, 12345</p>
          <p>(123) 456-7890</p>
          <p>info@example.com</p>
        </div>
        <div className="social-media">
          <h4>Social Media</h4>
          <ul>
            <li><a href="#facebook">Facebook</a></li>
            <li><a href="#twitter">Twitter</a></li>
            <li><a href="#instagram">Instagram</a></li>
            <li><a href="#linkedin">LinkedIn</a></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Footer