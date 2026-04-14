import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Services from './Components/Services'
import About from './Components/About'
import Protfolio from './Components/Protfolio'
import Contact from './Components/Contact'
import {Toaster} from "react-hot-toast"
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
        <Toaster/>
        <Navbar/>
        <Hero/>
        <Services/>
        <About/>
        <Protfolio/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default App
