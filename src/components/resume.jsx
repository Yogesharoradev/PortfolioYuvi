import React from 'react'

const Resume = () => {
  return (
    <>
    <div className="relative w-full h-screen">
      <img src='/img1.jpeg' alt='photo' className="absolute inset-0 w-full md:w-1/2 h-full object-cover" />
      <div className="absolute inset-y-0 right-0 w-full md:w-1/2 flex flex-col justify-center p-8 bg-black bg-opacity-50 text-white">
        <h1 className="text-3xl md:text-4xl font-semibold">Hi there, I'm</h1>
        <h1 className="text-5xl md:text-8xl font-bold">Yogesh Arora</h1>
      </div>
    </div>
    <div className='p-20'>
      <h1 className='font-bold text-3xl text-center'>the Resume</h1>
      <p className="mt-8 text-xl md:text-4xl text-center">
          I'm a passionate and dedicated fresher skilled in <b>JavaScript</b>, <b>React</b>, and <b>Node.js</b>.
           Eager to apply my knowledge and learn new technologies in a dynamic work environment. 
            have a strong foundation in web development and am highly motivated to contribute to team success. 
            Ready to take on new challenges and grow as a developer.
        </p>
    </div>
    <div className='flex items-center justify-center'>
      <img src='/withel_cover.jpg' alt='pic' width={600} height={350} className='mx-auto'/>
    </div>
        <div className='grid md:grid-cols-2'>
      <div className='md:p-20 p-8'>
        <p className='md:text-2xl text-xl font-medium text-start'>
          As a passionate newcomer to the field of web development, I bring a fresh perspective and a strong willingness to learn. Through my studies and personal projects, I have gained foundational knowledge in JavaScript, HTML, and CSS. I am excited to apply my skills and contribute to innovative projects in the industry. With a keen eye for design and a knack for problem-solving, I am eager to tackle challenges and create user-friendly web experiences.
        </p>
      </div>
      <div className='md:p-20 p-8'>
        <p className='md:text-2xl text-xl font-medium text-start'>
          Additionally, my adaptability and problem-solving skills make me a valuable asset to any team. I am eager to collaborate with experienced developers and absorb knowledge from their expertise. With a strong work ethic and a commitment to excellence, I strive to deliver high-quality solutions that meet the needs of clients and users alike. I am also enthusiastic about exploring new technologies and staying updated on industry trends to enhance my skills and contribute to cutting-edge projects.
        </p>
      </div>
         </div>

    <div className='p-16'>
      <h1 className='text-4xl font-semibold'> Software Skills</h1>
      <div className=' grid md:grid-cols-3 grid-cols-2 gap-10 p-12 text-2xl '>
        <span><b>Html5</b></span>
        <span><b>CSS3</b></span>
        <span><b>JavaScript</b></span>
        <span><b>React</b></span>
        <span><b>BootStrap</b></span>
        <span><b>Tailwind</b></span>
        <span><b>MogoDB</b></span>
        <span><b>Node JS</b></span>
        <span><b>Express</b></span>
        <span><b>Antd</b></span>
        <span><b>Git</b></span>
        <span><b>GitHub</b></span>
        <span><b>Next JS</b></span>

      </div>
    </div>


    </>
  )
  }
  ;

export default Resume
