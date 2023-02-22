import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import InfoSection from './InfoSection'
import Services from './Services'
import Footer from './Footer'
import {homeObjOne, homeObjTwo, homeObjThree} from './Data'

const LandingPage = ({banner, navbar, about, services, login, signUp}) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} data={navbar} />
      <HeroSection data={banner} />
      <InfoSection {...homeObjOne} data={about} />
      <InfoSection {...homeObjTwo} data={login}/>
      <Services data={services} />
      <InfoSection {...homeObjThree} data={signUp} />
      <Footer />
    </>
  )
}

export default LandingPage