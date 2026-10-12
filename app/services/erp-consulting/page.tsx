import React from 'react'
import Hero from './Hero'
import PreMain from './PreMain'
import Body from './Body'
import FaqSection from '@/app/home/FaqSection'
import Footer from '@/app/components/Footer'

const page = () => {
  return (
    <>
    <Hero />
    <PreMain />
    <Body />
    <FaqSection />
    <Footer />
    </>
  )
}

export default page
