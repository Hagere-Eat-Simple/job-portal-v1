"use client"
import React from 'react'
import Filter from "@/components/JobFiltering/components/Search"
import Navbar from "@/components/LandingPage/components/navbar"
import { useSearchParams } from 'next/navigation'


function Page(props:any) {
  const searchParams = useSearchParams()
  return (
    <>
    <Navbar />
    <Filter data={searchParams.get('job')}/>
    </>
  )
}

export default Page
