import React from 'react';
import { MdOutlineMail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { HomeSectionProps } from '../../../types/interfaces';



const HomeSection: React.FC<HomeSectionProps> = ({ portfolioOwner, role, homeCover }) => {
  return (
    // sm dispositivi piccoli, md dispositivi medi, lg dispositivi grandi
    // h-screen altezza dello schermo

    <div
      className={`bg-violet-950 
        h-screen sm:h-screen md:h-182 lg:h-182
        flex items-center justify-center`}
      style={{
        backgroundImage: `url(${homeCover.coverImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* opacità viola */}
      <div className={`absolute inset-0 bg-violet-950 opacity-65 
        h-screen sm:h-screen md:h-182 lg:h-182`}></div>
      
      {/* stile 2 */}
      {/* <div className={`absolute inset-0  
        h-screen sm:h-screen md:h-182 lg:h-182`} style={{backgroundColor: `rgb(18, 7, 31)`}}></div>*/ }

      <div className={`relative text-left flex flex-col items-center
        p-10
        sm:p-10
        md:p-10
        lg:p-10
        w-220`}>
        
        <h1 className='text-white text-title font-melodi-semi-bold-title uppercase'>
          {portfolioOwner}
        </h1>
        <h3 className='text-white text-home-description font-melodi-semi-bold-title uppercase'>
          {role}
        </h3>
        <p className='text-white mt-12 text-home-cover-description font-melodi-mono-medium'>{homeCover.coverDescription1}</p>
        <p className='text-white mt-12 text-home-cover-description font-melodi-mono-medium'>{homeCover.coverDescription2}</p>
        <div className='flex mt-20'>
          <a href={homeCover.personalEmail} className='text-blue-400 block'>
            <MdOutlineMail  size={30} color='white'/>
          </a>
          <a className='ml-10'> </a>
          <a href={homeCover.githubURL} className='text-blue-400 block'>
            <FaGithub   size={30} color='white'/>
          </a>
          <a className='ml-10'> </a>
          <a href={homeCover.linkedinURL} className='text-blue-400 block'>
            <FaLinkedin size={27} color='white'/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
