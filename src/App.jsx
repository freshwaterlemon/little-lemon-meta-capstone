import './App.css'
import Header from './components/Header/Header'
import Body from './components/Body/Body'
import Footer from './components/Footer/Footer'
import ScrollToSection from './components/ScrollToSection/ScrollToSection'
import OrderOnline from './components/OrderOnline/OrderOnline'
import Reservation from './components/Reservation/Reservation'
import ConfirmedBooking from './components/ConfirmedBooking/ConfirmedBooking'
import { Routes, Route, useNavigate } from "react-router-dom";
import { submitAPI } from './api.jsx';

function App() {
  const navigate = useNavigate();

  const submitForm = (formData) => {
    const isSubmitted = submitAPI(formData);
    if (isSubmitted) {
      // Pass form data through navigation state
      navigate('/confirmed', { state: { formData } });
    } else {
      alert('Failed to submit reservation. Please try again.');
    }
  };
  return (
    <>
      <ScrollToSection />
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/order-online" element={<OrderOnline />} />
        <Route path="/reservation" element={<Reservation submitForm={submitForm} />} />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
