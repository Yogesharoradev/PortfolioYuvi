import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import Resume from '../components/resume';

const Aboutpage = () =>{
  return (
    <div className='bg-black min-h-screen text-white relative'>
      <Navbar />
      <Resume />
      <Footer />
    
    </div>
  );
};

export default Aboutpage;
