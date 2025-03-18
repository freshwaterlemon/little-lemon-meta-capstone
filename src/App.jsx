import './App.css'
import Header from './components/Header/Header'
import Body from './components/Body/Body'
import Footer from './components/Footer/Footer'
import ScrollToSection from './components/ScrollToSection/ScrollToSection'
import OrderOnline from './components/OrderOnline/OrderOnline'
import Reservation from './components/Reservation/Reservation'
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <ScrollToSection />
      <Header />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/order-online" element={<OrderOnline />} />
          <Route path="/reservation" element={<Reservation />} />
          {/* <Route path="/login" element={<Login />} /> */}
        </Routes>

      <Footer />
    </>
  )
}

export default App
