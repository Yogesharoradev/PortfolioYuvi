import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Summary from '../components/Summary'
import Banner1 from '../components/banner1'
import Footer from '../components/footer'


const Homepage = () => {
  return (
    <>
    <div className='bg-black min-h-screen  relative md:w-full mx-auto overflow-hidden'>
         <video 
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
            src='/5921369-hd_1920_1080_30fps.mp4'
            muted
            loop
            autoPlay
            />
        <Navbar/>
        <Hero/>
    </div>
    <div className='bg-black text-white'>
        <Summary/>
        <Banner1/>
        <Footer/>
    </div>
    </>
  )
}

export default Homepage
