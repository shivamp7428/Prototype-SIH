import './App.css'
import Navbar from './page/Navbar'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './page/Home'
import Footer from './page/Footer'
import About from './page/About'
import Service from './page/Service'
import ContactUs from './page/Contact'
import Login from './page/Login'
import Sign from './page/Sign'

function App() {


  return (
    <>
     <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Sign />} />
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
