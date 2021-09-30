import React, { useState } from 'react'
// ----------------------------------------------------------------------------- 
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import HeroSection from '../components/_HeroSection'
import SubHeroSection from '../components/_SubHeroSection'
import Services from '../components/Services'
import SignUpSection from '../components/SignUpSection';
import Footer from '../components/Footer/index';
import { 
  homeObj01, homeObj02, homeObj03 
} from '../components/_SubHeroSection/Data';
 
const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  // -----------------------------------------------------------------------------
   return (
     <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>

      <HeroSection/>

      <SubHeroSection {...homeObj01}/>
      <SubHeroSection {...homeObj02}/>
      <Services/>
      <SubHeroSection {...homeObj03}/>

      <SignUpSection/>

      <Footer/>
    </>
   )
 }
 
 export default Home
 