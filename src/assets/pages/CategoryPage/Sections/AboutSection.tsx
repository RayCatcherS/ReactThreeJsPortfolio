import React from 'react';
import { AboutMeProps } from '../../../types/interfaces';



const AboutSection: React.FC<AboutMeProps> = ({ pictureProfile, title, aboutMeDescription }) => {
  return (
    <div
      className='pt-31 pb-31
      md:pl-30 md:pr-30 
      sm:pl-10 sm:pr-10
      pl-10 pr-10'
      style={{
        backgroundColor: '#1D1D1D', // Colore personalizzato in formato esadecimale
      }}
    >
      <h1 className='text-white font-melodi-light text-title' style={{ fontWeight: "bold" }}>{title}</h1>

      <div className='flex flex-col md:flex-row mt-6'>
        <img src={pictureProfile} alt="Profile" className='rounded-2xl sm:w-full md:w-94 md:h-94 object-cover flex-shrink-0' />
        <div className='md:w-165 
        md:pt-5
        sm:pt-10'>
          <p className='text-white md:ml-12 font-melodi-light text-description'>{aboutMeDescription}</p>
        </div>
      </div>
      
    </div>
  );
};

export default AboutSection;