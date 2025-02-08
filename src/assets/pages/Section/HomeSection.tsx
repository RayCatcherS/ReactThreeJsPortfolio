import React from 'react';

interface HomeSectionProps {
  portfolioOwner: string;
  role: string;
  homeCover: HomeCover;
}

interface HomeCover {
  coverImageUrl: string;
  personalEmail: string;
  linkedinURL: string;
  coverDescription1: string;
  coverDescription2: string;
}

const HomeSection: React.FC<HomeSectionProps> = ({ portfolioOwner, role, homeCover }) => {
  return (
    // sm dispositivi piccoli, md dispositivi medi, lg dispositivi grandi
    // h-screen altezza dello schermo

    <div
      className='bg-violet-950 h-screen sm:h-screen md:h-250 lg:h-195 flex items-center justify-center'
      style={{
        backgroundImage: `url(${homeCover.coverImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* opacità viola */}
      <div className={`absolute inset-0 bg-violet-950 opacity-65 
        h-screen sm:h-screen md:h-250 lg:h-195`}></div>
      

      <div className={`relative text-left flex flex-col items-center
        p-10
        sm:p-10
        md:p-10
        lg:p-20
        w-260`}>
        
        <h1 className='text-white text-owner font-melodi-semi-bold-title uppercase'>
          {portfolioOwner}
        </h1>
        <h3 className='text-white text-owner-role font-melodi-semi-bold-title uppercase'>
          {role}
        </h3>
        <p className='text-white mt-10 text-home-cover-description font-melodi-mono-medium'>{homeCover.coverDescription1}</p>
        <p className='text-white mt-10 text-home-cover-description font-melodi-mono-medium'>{homeCover.coverDescription2}</p>
        <div className='flex mt-20'>
          <a href={homeCover.personalEmail} className='text-blue-400 block'>
            Email
          </a>
          <a className='ml-10'> </a>
          <a href={homeCover.linkedinURL} className='text-blue-400 block'>
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
