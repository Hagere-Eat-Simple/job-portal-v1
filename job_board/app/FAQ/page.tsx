import React from 'react'
import Accordion from "@/components/FAQ/components/accordion"
import NavBar from '@/components/LandingPage/components/navbar'
import Footer from '@/components/LandingPage/components/footer'

function page() {
  return (
    <>
    <NavBar />
    <Accordion />
    <Footer />
    </>
  )
}

export default page