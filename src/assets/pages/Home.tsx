import React from 'react';

const Home = () => {
  return (
    // sm dispositivi piccoli, md dispositivi medi, lg dispositivi grandi
    // h-screen altezza dello schermo

    <div className='bg-violet-700 h-screen sm:h-screen md:h-195 lg:h-195 flex items-center justify-center'>
        <h1 className='text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl'>Home</h1>
    </div>
  );
};

export default Home;
