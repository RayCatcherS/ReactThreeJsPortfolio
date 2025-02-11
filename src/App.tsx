import { useState } from 'react';
import Navbar from './assets/components/Navbar';
import HomeSection from './assets/pages/Section/HomeSection';
import GameDevProjects from './assets/pages/GameDevProjects';
import DevelopedSoftwares from './assets/pages/DevelopedSoftwares';
import UniversityProjects from './assets/pages/UniversityProjects';
import About from './assets/pages/About';
import useIntersectionObserver from './assets/hooks/useIntersectionObserver';

import mediaAssetsData from './assets/remoteAssets/mediaAssetsData.json';

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
      </div>
    </main>
  );
}

export default App;
