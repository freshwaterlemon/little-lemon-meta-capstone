import React from 'react'
import footerlogo from '../../assets/footerlogo.png'
import './Footer.css'
import NavbarFooter from '../Navbar/NavbarFooter'
import SocialMedia from '../SocialMedia/SocialMedia'

const Footer = () => {
  return (
    <>
      <div className="footer-content">
        <div className='footer-img'>
          <img src={footerlogo} alt="footer-logo" className='logo' />
        </div>
        <div className="doormat-navigation">
          <h4>Doormat</h4>
          <NavbarFooter className="navbar-footer" />
        </div>
        <div className="social-media">
          <h4>Social Media</h4>
          <SocialMedia />
        </div>
        <div className="contact">
          <h4>Contact</h4>
          <p>Address: 1234 Street Name, City, State, 12345</p>
          <p>Phone: (+65) 1234 5678</p>
          <p>Email: LittleLemonRestaurant@food.com</p>
        </div>
      </div>
    </>
  )
}

export default Footer