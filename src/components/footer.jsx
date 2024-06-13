import React from 'react';
import {Link} from 'react-router-dom'

const Footer = () => {

    const links = [
    {
        path: "/",
        element:"Home"
    },
    {
        path: "/about",
        element:"About"
    },
    {
        path: "/work",
        element:"Work"
    },
    {
        path: "/contact",
        element:"Contact"
    },
    {
        path: "https://www.instagram.com/yuviarora.ig/",
        element:"Instagram"
    },
    {
        path: "https://github.com/Yogesharoradev",
        element:"GitHub"
    },
    ]
  return (
    <>
        <div className="relative h-40 w-full overflow-hidden bg-black mt-12 text-white flex items-center">
        <div className="absolute inset-y-0 right-0 flex items-center">
        <p className="animate-slide-right-to-left text-8xl font-bold whitespace-nowrap">
        Hire Me!  Hire Me!  Hire Me!  Hire Me!  Hire Me!  Hire Me!   
        </p>
        </div>
        </div>

        <div className='grid md:grid-cols-2 md:p-24 p-12 md:gap-12 space-y-12'>
    <div className='flex md:items-center md:justify-start justify-center mx-auto items-center'>
        <p className='md:text-4xl text-3xl'>
            Ready to infuse fresh energy into your projects? Discover the enthusiasm and potential of a dedicated newcomer eager
            to make a mark. With a strong foundation in web development and a passion for learning,
         
            I’m committed to driving your projects forward. Let’s collaborate to unlock new possibilities and achieve exceptional results.
            Don't miss out on this opportunity to bring innovative ideas and solutions to your team.
        </p>
    </div>
    <div className='px-8 md:px-0 flex flex-col gap-10'>
        <div className="hover:-rotate-0 group border-sky-900 border-4 overflow-hidden rounded-2xl relative h-72 w-92 bg-sky-800 p-5 flex flex-col items-start gap-4">
            <div className="text-gray-50">
                <span className="font-bold text-5xl">Jr</span>
                <p className="text-xl">Frontend Developer</p>
                <p className="text-xl font-semibold">Yogesh Arora</p>
            </div>
            <button className="duration-300 hover:bg-sky-900 border hover:text-gray-50 bg-gray-50 font-semibold text-sky-800 px-3 py-2 flex flex-row items-center gap-3">
                Dowload CV 
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-6 h-6 fill-current">
                    <path fillRule="evenodd" d="M22.1,77.9a4,4,0,0,1,4-4H73.9a4,4,0,0,1,0,8H26.1A4,4,0,0,1,22.1,77.9ZM35.2,47.2a4,4,0,0,1,5.7,0L46,52.3V22.1a4,4,0,1,1,8,0V52.3l5.1-5.1a4,4,0,0,1,5.7,0,4,4,0,0,1,0,5.6l-12,12a3.9,3.9,0,0,1-5.6,0l-12-12A4,4,0,0,1,35.2,47.2Z"/>
                </svg>
            </button>
            <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className="group-hover:scale-125 duration-500 absolute -bottom-0.5 -right-20 w-48 h-48 z-10 -my-2 fill-gray-50 stroke-sky-900">
                <path strokeWidth="5" strokeMiterlimit="10" d="M 50.4 51 C 40.5 49.1 40 46 40 44 v -1.2 a 18.9 18.9 0 0 0 5.7 -8.8 h 0.1 c 3 0 3.8 -6.3 3.8 -7.3 s 0.1 -4.7 -3 -4.7 C 53 4 30 0 22.3 6 c -5.4 0 -5.9 8 -3.9 16 c -3.1 0 -3 3.8 -3 4.7 s 0.7 7.3 3.8 7.3 c 1 3.6 2.3 6.9 4.7 9 v 1.2 c 0 2 0.5 5 -9.5 6.8 S 2 62 2 62 h 60 a 14.6 14.6 0 0 0 -11.6 -11 z" data-name="layer1"></path>
            </svg>
            <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className="group-hover:scale-125 duration-200 absolute -bottom-0.5 -right-20 w-48 h-48 z-10 -my-2 fill-gray-50 stroke-sky-700">
                <path strokeWidth="2" strokeMiterlimit="10" d="M 50.4 51 C 40.5 49.1 40 46 40 44 v -1.2 a 18.9 18.9 0 0 0 5.7 -8.8 h 0.1 c 3 0 3.8 -6.3 3.8 -7.3 s 0.1 -4.7 -3 -4.7 C 53 4 30 0 22.3 6 c -5.4 0 -5.9 8 -3.9 16 c -3.1 0 -3 3.8 -3 4.7 s 0.7 7.3 3.8 7.3 c 1 3.6 2.3 6.9 4.7 9 v 1.2 c 0 2 0.5 5 -9.5 6.8 S 2 62 2 62 h 60 a 14.6 14.6 0 0 0 -11.6 -11 z" data-name="layer1"></path>
            </svg>
        </div>
        <div className='flex flex-col gap-4'> 
            <h1 className='text-3xl font-semibold'>📞 : +918427992959 </h1>
            <h1 className='text-2xl font-semibold'>📩 : YogeshArora207@gmail.com </h1>
        </div>
    </div>
        </div>


        <div className='md:p-20 p-6 flex justify-between items-center'>
            <div className='text-center'>
                <button className="cursor-pointer relative group bg-black overflow-hidden border-2 px-8 py-2 rounded-full">
                <span className="font-bold text-white text-xl relative z-10 group-hover:text-blue-500 duration-500">
                <Link to="/">Yogesh Arora</Link>
                </span>
                <span className="absolute top-0 left-0 w-full bg-blue-500 duration-500 group-hover:-translate-x-full h-full"></span>
                <span className="absolute top-0 left-0 w-full bg-blue-500 duration-500 group-hover:translate-x-full h-full"></span>
                
                    <span className="absolute top-0 left-0 w-full bg-black duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
                <span className="absolute delay-300 top-0 left-0 w-full bg-black duration-500 group-hover:translate-y-full h-full"></span>
                </button> 
                <h1 className='font-semibold mt-3 text-2xl'>Mern Stack Developer</h1>
            </div>
            <div className='grid md:grid-cols-3 grid-cols-2'>
                    {
                        links.map((item ,idx)=>(
                            <div key={idx} className='flex flex-col gap-4 items-center font-semibold text-xl p-2'>
                                <Link to={item.path} className='hover:text-gray-500'>{item.element}</Link>
                            </div>
                        ))
                    }
            </div>
        </div>
        <div className='p-12'>
            <h1 className='text-center text-xl font-semibold'>
            YOGESH ARORA 2024 | ALL RIGHTS RESERVED ©
            </h1>
        </div>
    </>
  );
};

export default Footer;
