import React from 'react'

const Banner1 = () => {
  return (
    <div className='relative bg-black min-h-[450px] text-white'>
      <video 
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src='/8084614-uhd_3840_2160_25fps.mp4'
        muted
        loop
        autoPlay
      />
      <h1 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:text-4xl font-bold text-center'>
        where <span className='md:text-8xl  text-6xl  font-bold'>EXPERTISE MEETS INNOVATION</span>
      </h1>
    </div>
  )
}

export default Banner1
