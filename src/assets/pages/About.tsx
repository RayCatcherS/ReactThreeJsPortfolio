import React from 'react'

interface AboutMeProps {
    pictureProfile: string;
    title: string;
    aboutMeDescription: string;
}

const AboutSection: React.FC<AboutMeProps> = ({ pictureProfile, title, aboutMeDescription }) => {
  return (
    <div
      className='pt-31 pl-30 pr-30 pb-31'
      style={{
      backgroundColor: '#1D1D1D', // Colore personalizzato in formato esadecimale
    }}>
      <h1 className='text-white font-melodi-regular-title text-owner'>{title}</h1>

      <div className='flex'>
        <img src={pictureProfile} alt="Profile" className='mt-6 rounded-2xl w-94 h-94 object-cover  flex-shrink-0' />

        <div className='w-165 pt-10 pl-2'>
          <p className='text-white ml-10 font-melodi-light-description text-description'>{aboutMeDescription}</p>
        </div>
        
      </div>
      
    </div>
  )
}

export default AboutSection