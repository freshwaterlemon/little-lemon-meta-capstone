import './App.css'
import Header from './components/Header/Header'
import Body from './components/Body/Body'
import Footer from './components/Footer/Footer'
import ScrollToSection from './components/ScrollToSection/ScrollToSection'
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <ScrollToSection />
      <Header />
        <Routes>
          <Route path="/" element={<Body />} />
          {/* <Route path="/reservation" element={<Reservation />} />
          <Route path="/order-online" element={<OrderOnline />} />
          <Route path="/login" element={<Login />} /> */}
        </Routes>

      <Footer />
    </>
  )
}

export default App
