import React from 'react'

interface AboutMeProps {
    pictureProfile: string;
    title: string;
    aboutMeDescription: string;
}

const AboutSection: React.FC<AboutMeProps> = ({ pictureProfile, title, aboutMeDescription }) => {
  return (
    <div>
        {pictureProfile}
        AboutSection
    </div>
  )
}

export default AboutSection