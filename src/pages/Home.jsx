import React from 'react'
import Hero from '../components/home/Hero'
import Features from '../components/home/Features'
import HowWorks from '../components/home/HowWorks'
import Partners from '../components/home/Partners'
import Testimonials from '../components/home/Testimonials'
import CallToAction from '../components/home/CallToAction'
import RubaaiForEveryone from '../components/home/RubaaiForEveryone'

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <HowWorks />
      <RubaaiForEveryone />
      <Partners />
      <Testimonials />
      <CallToAction />
    </div>
  )
}

export default Home