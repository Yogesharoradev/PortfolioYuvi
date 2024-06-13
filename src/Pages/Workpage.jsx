import React  from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import Projects from '../components/projects';


const Workpage = () => {
    
  return (
    <div className='bg-black text-white  min-h-screen'>
      <Navbar/>
            <div className="bg-black py-5 flex justify-center items-center">
             <div className="obj">
                <div class="objchild">
                    <h1 className='font-bold text-6xl'>My Projects</h1>
                    <span className="inn6"></span>
                </div>
            </div>
            </div>
                <div className='mt-48 p-10'>
                    <p className='text-center font-semibold text-2xl'>
                        Throughout my journey as a fresher in web development, I've embarked on various projects to apply and enhance my skills. From building responsive websites to creating interactive web applications, each project has been an opportunity for me to learn and grow. By collaborating with peers and seeking feedback, I've honed my ability to translate ideas into tangible digital solutions. Explore my projects below to see the creativity and dedication I bring to every endeavor.
                    </p>
              </div>
            <Projects/>

      <Footer/>
    </div>
  )
}

export default Workpage
