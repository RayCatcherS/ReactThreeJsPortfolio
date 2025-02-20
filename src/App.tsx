import { useState } from 'react';
import Navbar from './assets/components/Navbar';
import HomeSection from './assets/pages/Sections/HomeSection';
import GameDevProjects from './assets/pages/GameDevProjects';
import DevelopedSoftwares from './assets/pages/DevelopedSoftwares';
import UniversityProjects from './assets/pages/UniversityProjects';
import About from './assets/pages/Sections/AboutSection';
import ContactMe from './assets/pages/Sections/ContactMe';
import useIntersectionObserver from './assets/hooks/useIntersectionObserver';

import mediaAssetsData from './assets/remoteAssets/mediaAssetsData.json';
import Section from './assets/pages/Sections/Section';


function App() {
  const [activeSection, setActiveSection] = useState('');

  useIntersectionObserver(setActiveSection);

  console.log("Valore di user:", mediaAssetsData);

  return (
    <main>
      <Navbar activeSection={activeSection} />
      <div>
        <section id="home">
          <HomeSection
            portfolioOwner={mediaAssetsData.assetsData.portfolioOwner}
            role={mediaAssetsData.assetsData.role}
            homeCover={mediaAssetsData.assetsData.homeCover}
          />
        </section>

        
        <ul>
          {mediaAssetsData.assetsData.projectGroups.map((projectGroup, index) => (
            <li key={index} id={`projectGroup-${index}`}>
              <section id={projectGroup.projectGroupName}>
                <Section
                  projectGroupName={projectGroup.projectGroupName}
                  projectGroupDescription={projectGroup.projectGroupDescription}
                  projectItemsData={projectGroup.projectItemsData}>
                  
                </Section>
              </section>
              
            </li>
          
          ))}
        </ul>

        <section id="gameDevProjects">
          <GameDevProjects />
        </section>
        <section id="developedSoftwares">
          <DevelopedSoftwares />
        </section>
        <section id="universityProjects">
          <UniversityProjects />
        </section>
        <section id="about">
          <About aboutMeDescription={mediaAssetsData.assetsData.aboutMe.aboutMeDescription}
            title={mediaAssetsData.assetsData.aboutMe.title}
            pictureProfile={mediaAssetsData.assetsData.aboutMe.pictureProfile}
          />
        </section>
        <section id="about">
          <ContactMe contactMeTitle={mediaAssetsData.assetsData.contactMe.contactMeTitle}
            contactMeDescription={mediaAssetsData.assetsData.contactMe.contactMeDescription}
            contactMeCoverImage={mediaAssetsData.assetsData.contactMe.contactMeCoverImage}
            linkedinURL={mediaAssetsData.assetsData.homeCover.linkedinURL}
            personalEmail={mediaAssetsData.assetsData.homeCover.personalEmail}
          />
        </section>
      </div>
    </main>
  );
}

export default App;
