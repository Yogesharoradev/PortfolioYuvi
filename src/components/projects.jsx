import React from 'react'
import { Link } from 'react-router-dom'


const Projects = () => {

  return (
    <div className='flex justify-evenly mt-9 md:flex-row flex-col items-center gap-10'>
      <div className='cards'>
        <Link to="https://yuvi-youtubeclone.netlify.app">
      <figure className="card" >
        <figcaption className="card_title hover:text-green-600">Youtube Clone</figcaption>
     </figure>
        </Link>
      </div>
      <div className='cards'>
        <Link to="https://yuviblogproject.netlify.app">
      <figure className="card">
        <figcaption className="card_title  hover:text-green-600">Blog Project</figcaption>
    </figure>
        </Link>
      </div>
     
      <div className='cards'>
        <Link to="https://yuvi-eshop.netlify.app">
         <figure className="card">
        <figcaption className="card_title  hover:text-green-600">E-shop project</figcaption>
         </figure>
        </Link>
     </div>

      <div className="cards">
        <Link to="https://yuvi-restro.netlify.app">
         <figure className="card">
        <figcaption className="card_title  hover:text-green-600">Restro Project</figcaption>
      </figure>
      </Link>
    </div>
    </div>
  )
}

export default Projects
