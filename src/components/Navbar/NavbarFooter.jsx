import './Navbar.css'

const NavbarFooter = ({ className }) => {

  return (
    <nav>
    <ul className={`navbar ${className || ''}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#review">Review</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="/reservation">Reservation</a></li>
        <li><a href="/order-online">Order Online</a></li>
      </ul>
    </nav>
  )
}

export default NavbarFooter
