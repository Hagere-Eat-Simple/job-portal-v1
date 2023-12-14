import React from 'react'
import HomePage from "@/components/LandingPage/components/homePage"
import Footer from "@/components/LandingPage/components/footer"
import Navbar from "@/components/LandingPage/components/navbar"
import Reviews from "@/components/LandingPage/components/testimonials"
import {reviews} from "@/components/LandingPage/util"




function page() {
  return (
    <>
   <Navbar />
   <HomePage />
   <Reviews items={reviews} />
   <Footer />
   </>
  )
}

export default page
