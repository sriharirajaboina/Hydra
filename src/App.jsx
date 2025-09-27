import { useState } from 'react'
import HeroSection from "./components/Hero-Section"
import AboutSection from "./components/About-Section"
import ServiceSection from "./components/Service-Section"
import TechSection from "./components/Tech-Section"
import ProcessSection from "./components/Process-Section"
import OptInSection from "./components/optIn-section"
import FooterSection from "./components/Footer-Section"

import './App.css'

function App() {

  return (
    <>
      <div classsName="w-full overflow-hidden">
        <HeroSection/>
        <AboutSection/>
        <ServiceSection/>
        <TechSection/>
        <ProcessSection/>
        <OptInSection/>
        <FooterSection/>
      </div>
    </>
  )
}

export default App
