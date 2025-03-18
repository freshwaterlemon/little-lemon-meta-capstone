import './Navbar.css'

const NavbarFooter = ({ className }) => {

  return (
    <nav>
    <ul className={`navbar ${className || ''}`}>
        <li><a href="#home">HOME</a></li>
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#menu">MENU</a></li>
        <li><a href="#reservation">RESERVATION</a></li>
        <li><a href="#order online">ORDER ONLINE</a></li>
      </ul>
    </nav>
  )
}

export default NavbarFooter
