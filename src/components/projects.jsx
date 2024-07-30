import React from 'react'
import ProjectsCard from '../utils/projectsCard'


const Projects = () => {

  return (
    <div className='flex justify-evenly mt-9 md:flex-row flex-col items-center gap-10'>

      <ProjectsCard title="Blog Project" titleLink="https://yuviblogproject.netlify.app"/>
      <ProjectsCard title=" Youtube Clone" titleLink="https://yuvi-youtubeclone.netlify.app"/>
      <ProjectsCard title="E-shop project" titleLink="https://yuvi-eshop.netlify.app"/>
      <ProjectsCard title="Restro Project" titleLink="https://yuvi-restro.netlify.app"/>
    </div>
  )
}

export default Projects
