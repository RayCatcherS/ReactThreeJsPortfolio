import React, { useEffect, useState } from 'react'
import useScrollSpy from '../hooks/scrollSpy';
import Navbar from '../components/Navbar';
import ContactMe from './CategoryPage/Sections/ContactMe';
import About from './CategoryPage/Sections/AboutSection';
import HomeSection from './CategoryPage/Sections/HomeSection';
import Section from './CategoryPage/Sections/Section';
import { MediaAssetData } from '../types/interfaces';
import MobileNavbar from '../components/MobileNavbar';

const CategoryPage: React.FC<{ mediaAssetData: MediaAssetData }> = ({ mediaAssetData }) => {
    const sectionIds = [
        'home',
        ...mediaAssetData.projectGroups.map((_, index) => `section-${index}`),
        'about',
        'contact',
        ];
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 708);
  useEffect(() => {
      const handleResize = () => {
          setIsDesktop(window.innerWidth > 850);
      };
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
  }, []);
const activeSection = useScrollSpy(sectionIds);
  return (
    <div>
      {isDesktop ? (
          <Navbar activeSection={activeSection} projectGroups={mediaAssetData.projectGroups} />
      ) : (
          <MobileNavbar activeSection={activeSection} projectGroups={mediaAssetData.projectGroups}/>
      )}
      
      <div>
        <section id="home">
          <HomeSection
            portfolioOwner={mediaAssetData.portfolioOwner}
            role={mediaAssetData.role}
            homeCover={mediaAssetData.homeCover}
          />
        </section>

        
        <ul>
          {mediaAssetData.projectGroups.map((projectGroup, index) => (
            <li key={index} id={`section-${index}`}>
              <section id={`section-${index}`}>
                <Section
                  projectGroupName={projectGroup.projectGroupName}
                  projectGroupDescription={projectGroup.projectGroupDescription}
                  projectItemsData={projectGroup.projectItemsData}>
                  
                </Section>
              </section>
              
            </li>
          
          ))}
        </ul>
        <section id="about">
          <About aboutMeDescription={mediaAssetData.aboutMe.aboutMeDescription}
            title={mediaAssetData.aboutMe.title}
            pictureProfile={mediaAssetData.aboutMe.pictureProfile}
          />
        </section>
        <section id="about">
            <ContactMe contactMeProps={mediaAssetData.contactMe}
                      
            linkedinURL={mediaAssetData.homeCover.linkedinURL}
            personalEmail={mediaAssetData.homeCover.personalEmail}
          />
        </section>
      </div>
    </div>
  )
}

export default CategoryPage
