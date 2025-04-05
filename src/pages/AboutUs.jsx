import React from 'react'
import HeroAbout from '../components/aboutUs/HeroAbout'
import Mission from '../components/aboutUs/Mission'
import OurTeam from '../components/aboutUs/OurTeam'
import WhyRubaai from '../components/aboutUs/WhyRubaai'
import Journey from '../components/aboutUs/Journey'
import CallToActionForAbout from '../components/aboutUs/CallToActionForAbout'

const AboutUs = () => {
  return (
    <div>
      <HeroAbout />
      <Mission />
      <OurTeam />
      <WhyRubaai />
      <Journey />
      <CallToActionForAbout />
    </div>
  )
}

export default AboutUs