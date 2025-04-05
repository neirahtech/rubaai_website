import React from 'react'
import { Route, Router, Routes } from 'react-router'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Services from './pages/Services'
import PartnerWithUs from './pages/PartnerWithUs'
import Contact from './pages/Contact'
// import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/services' element={<Services />} />
        <Route path='/partner' element={<PartnerWithUs />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  )
}

export default App