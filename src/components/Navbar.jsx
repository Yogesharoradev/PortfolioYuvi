import React, { useState } from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
    const [menuOpen , setMenuOpen] = useState(false)
      
    const toggleMenu = ()=>{
      setMenuOpen(!menuOpen)
    }
  return (
      <div className='text-white '>
            <div className='flex md:justify-between items-center md:p-9 p-6'>
              <button className="cursor-pointer relative group bg-black overflow-hidden border-2 px-8 py-2 rounded-full">
                      <span className="font-bold text-white text-xl relative z-10 group-hover:text-blue-500 duration-500">
                      <Link to="/">Yogesh Arora</Link>
                      </span>
                      <span className="absolute top-0 left-0 w-full bg-blue-500 duration-500 group-hover:-translate-x-full h-full"></span>
                      <span className="absolute top-0 left-0 w-full bg-blue-500 duration-500 group-hover:translate-x-full h-full"></span>
                      
                        <span className="absolute top-0 left-0 w-full bg-black duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
                      <span className="absolute delay-300 top-0 left-0 w-full bg-black duration-500 group-hover:translate-y-full h-full"></span>
              </button>  
                          
          <div className='md:flex gap-28 items-center overflow-hidden  hidden'>
          
          <div className=' group py-1 text-xl relative font-semibold hover:cursor-none'>
                <div className="transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
                <span className="block">Work</span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-black flex items-center justify-center text-slate-300 transition-transform duration-300 ease-in-out transform translate-y-full group-hover:translate-y-0">
                <span className="block"> <Link to="/work">Work</Link></span>
                </div>
          </div> 


        <div className=' group py-1 text-xl relative font-semibold hover:cursor-none'>
                <div className="transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
                <span className="block">About</span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-black flex items-center justify-center text-slate-300 transition-transform duration-300 ease-in-out transform translate-y-full group-hover:translate-y-0">
                <span className="block"><Link to="/about">About</Link></span>
                </div>
          </div>


          <div className=' group py-1 text-xl relative font-semibold hover:cursor-none'>
                <div className="transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
                <span className="block">Contact</span>
                </div>
                
              
                <div className="absolute top-0 left-0 w-full h-full bg-black flex items-center justify-center text-slate-300 transition-transform duration-300 ease-in-out transform translate-y-full group-hover:translate-y-0">
                <Link to="/Contact">
                <span className="block">Contact</span>
                </Link>
                </div>
        </div>

          </div>  
                {/* for mobile device  */}
              <div className='block md:hidden ml-4 md:ml-20 relative'>
                    <button className="btn" onClick={toggleMenu} >
                        <span className="icon">
                            <svg viewBox="0 0 175 80" width="40" height="40">
                                <rect width="80" height="15" fill="#f0f0f0" rx="10"></rect>
                                <rect y="30" width="80" height="15" fill="#f0f0f0" rx="10"></rect>
                                <rect y="60" width="80" height="15" fill="#f0f0f0" rx="10"></rect>
                            </svg>
                        </span>
                        <span className="text">MENU</span>
                    </button>
              </div>

            <div className={`absolute top-20 left-0 md:hidden w-full bg-black h-[700px] text-white transition-transform transform ${
                        menuOpen ? 'translate-y-0  z-20 ' : "-translate-y-full hidden  z-0"
                      }`}>
                        <div className="flex flex-col items-start p-6 mt-20 space-y-2">
                        <Link to="/" className="text-5xl font-bold hover:text-blue-400 ">Home</Link>
                          <Link to="/about" className="text-5xl font-bold   hover:text-blue-400">About</Link>
                          <Link to="/work" className="text-5xl font-bold   hover:text-blue-400">Work</Link>
                          <Link to="/contact" className="text-5xl font-bold  hover:text-blue-400 ">Contact</Link>
                       </div>
                       <div className="flex flex-col items-start p-6  space-y-2">
                        <Link to="https://www.instagram.com/yuviarora.ig/" className="text-2xl font-bold hover:text-blue-400 ">Insagram</Link>
                          <Link to="https://github.com/Yogesharoradev" className="text-2xl font-bold   hover:text-blue-400">Github</Link>
                         </div>
                        
                          <h1 className='font-semibold text-geay-400  p-6'>Yogesh Arora 2024 | ALL RIGHTS RESERVED ©</h1>
                         
                  </div>
              </div>  
          
      </div>
  )
}

export default Navbar
