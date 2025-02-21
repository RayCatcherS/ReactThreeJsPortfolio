
import Navbar from './assets/components/Navbar';
import HomeSection from './assets/pages/Sections/HomeSection';
import About from './assets/pages/Sections/AboutSection';
import ContactMe from './assets/pages/Sections/ContactMe';

import mediaAssetsData from './assets/remoteAssets/mediaAssetsData.json';
import Section from './assets/pages/Sections/Section';
import useScrollSpy from './assets/hooks/scrollSpy';


function App() {
  

  const sectionIds = [
    'home',
    ...mediaAssetsData.assetsData.projectGroups.map((_, index) => `section-${index}`),
    'about',
    'contact',
  ];

  const activeSection = useScrollSpy(sectionIds);
  //useIntersectionObserver(setActiveSection);


  return (
    <main>
      <Navbar activeSection={activeSection} projectGroups={mediaAssetsData.assetsData.projectGroups} />
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
