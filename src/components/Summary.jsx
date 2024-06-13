import React from 'react'
import {Button} from 'antd'
import {Link} from 'react-router-dom'

const Summary = () => {
  return (
    <div className='text-white bg-black min-h-screen flex flex-col items-center justify-center '>
        <p className='font-semibold md:text-4xl text-2xl md:w-7/12 text-center '>
        I'm  passionate about web development.
         Although I'm new to the industry, I've gained hands-on experience with frameworks like React. I'm eager to apply my skills and learn from experienced professionals.
         I'm open to both full-time positions and internships, ready to contribute and grow in the field.
     </p>
     <div className='mt-10 p-10 flex md:flex-row flex-col md:gap-28 gap-10'>
     <button className='font-bold button1'> <Link to="/about">Know More</Link></button>
     <button className='font-bold button1'><Link to="/contact">Contact Me</Link></button>
     </div>
    </div>
  )
}

export default Summary
