import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import PartnersSection from './components/PartnersSection'
import Courses from './components/Courses'
import Testimonial from './components/Testimonial'
import WhyLearnWithUs from './components/WhyLearnWithUs'
import LearningCenter from './components/LearningCenter'
import Submission from './components/submission'
import MoreInfo from './components/MoreInfo'
import Footer from './components/footer'

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <PartnersSection />
      <AboutSection />
      <Courses />
      <Testimonial />
      <WhyLearnWithUs />
      <LearningCenter />
      <Submission />
      <MoreInfo />
      <Footer/>
    </>
  
  )
}

export default App