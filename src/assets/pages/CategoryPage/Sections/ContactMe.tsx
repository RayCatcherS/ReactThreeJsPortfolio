import React from 'react';
import { MdOutlineMail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { ContactMeProps } from '../../../types/interfaces';



const ContactMe: React.FC<{ contactMeProps: ContactMeProps, personalEmail: string, linkedinURL: string }>
  = ({ contactMeProps, personalEmail, linkedinURL }) => {
  return (
    <div
      className='relative pt-31 pl-30 pr-30 pb-31'
      style={{
        backgroundImage: `url(${contactMeProps.contactMeCoverImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      >
          {/* opacità viola */}
          <div className='absolute inset-0 bg-violet-950 opacity-60'></div>
          {/* <div className='absolute inset-0'
          style={{
            background: 'linear-gradient(to bottom, rgba(29, 29, 29, 1), rgba(138, 43, 226, 0.4)',
          }}></div> */}
          <div className='relative'>
              <h1 className='text-white font-melodi-light text-title' style={{ fontWeight: "bold" }}>{contactMeProps.contactMeTitle}</h1>
              <p className='text-white mt-5 font-melodi-light text-description'>{contactMeProps.contactMeDescription}</p>
              <div className='flex mt-15'>
                <a href={personalEmail} className='text-blue-400 block'>
                    <MdOutlineMail  size={30} color='white'/>
                </a>
                <a className='ml-10'> </a>
                <a href={linkedinURL} className='text-blue-400 block'>
                <FaLinkedin size={27} color='white'/>
                  </a>
              </div>
          </div>   
    </div>
  );
};

export default ContactMe;
