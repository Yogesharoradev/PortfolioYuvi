import React from 'react';

const Hero = () => {
  return (
    <>
      <div className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center md:justify-end p-6 md:p-28">
          <div className="text-white text-center md:text-end">
            <h1 className="text-lg md:text-xl mt-2">I'm a</h1>
            <h1 className="text-6xl md:text-9xl font-bold">MERN</h1>
            <h2 className="text-xl md:text-4xl mt-2">Stack developer</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
