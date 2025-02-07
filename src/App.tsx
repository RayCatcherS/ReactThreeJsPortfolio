import { useState } from 'react';
import Navbar from './assets/components/Navbar';
import Home from './assets/pages/Home';
import GameDevProjects from './assets/pages/GameDevProjects';
import DevelopedSoftwares from './assets/pages/DevelopedSoftwares';
import UniversityProjects from './assets/pages/UniversityProjects';
import About from './assets/pages/About';
import useIntersectionObserver from './assets/hooks/useIntersectionObserver';

function App() {
  const [activeSection, setActiveSection] = useState('');

  useIntersectionObserver(setActiveSection);

  return (
    <main>
      <Navbar activeSection={activeSection} />
      <div>
        <section id="home">
          <Home />
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
          <About />
        </section>
      </div>
    </main>
  );
}

export default App;
