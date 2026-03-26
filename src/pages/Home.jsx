import React from 'react'


import AboutSection from '../components/About'
import SolarHeroSection from '../components/SolerDivsection'
import Herosection from '../components/Herosection'
import About_Section from '@/components/AboutSection2'
import OurServices from '@/components/Ourservices'
import WhyChooseUs from '@/components/whyChoseus'
import CallToAction from '@/components/CTA2'
import ProcessComponent from '@/components/ProcessComponent'
import Testimonials from '@/components/Testimonials'
import CTA1 from '@/components/ui/CTA1'
import TestimonialsCarousel from '@/components/mvpblocks/testimonials-carousel'
import Faq2 from '@/components/mvpblocks/faq-2'
import FeatureSteps from '@/components/mvpblocks/feature-2'





function Home() {
  return (
    <>
  
    <Herosection/>
   <AboutSection/>
   <About_Section/>
   <OurServices/>
   <ProcessComponent/>
   {/* <Testimonials/> */}
   <Faq2/>
   <TestimonialsCarousel/>
   {/* <WhyChooseUs/> */}
   <FeatureSteps/>
   
 <CTA1/>
   
    </>
  )
}

export default Home