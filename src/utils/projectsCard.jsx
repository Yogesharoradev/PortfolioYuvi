import React from 'react'
import { Link } from 'react-router-dom'

const ProjectsCard = ({title , titleLink}) => {
  return (
            <>
      <div
        className="relative drop-shadow-xl w-48 h-64 overflow-hidden rounded-xl bg-[#3d3c3d]"
        >
            <Link to={titleLink}>
        <div
            className="absolute flex items-center justify-center text-white z-[1] opacity-90 rounded-xl inset-0.5 bg-[#323132]"
            >
            <h1 className='font-bold text-2xl '> {title} </h1> 
        </div>
            </Link>
        <div className="absolute w-56 h-48 bg-white blur-[50px] -left-1/2 -top-1/2"></div>
        </div>

            </>
  )
}

export default ProjectsCard
