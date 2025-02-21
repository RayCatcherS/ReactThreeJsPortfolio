import { useEffect, useState } from 'react';

const useScrollSpy = (sectionIds: string[]): string => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = '';

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section) {
          const { top, bottom } = section.getBoundingClientRect();
          const viewportHeight = window.innerHeight;

          // Considera una sezione attiva se è almeno per il 30% visibile
          if (top < viewportHeight * 0.5 && bottom > viewportHeight * 0.3) {
            currentSection = id;
            break; // La prima sezione che soddisfa il criterio viene selezionata
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Esegui al primo render per selezionare la prima sezione

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds]);

  return activeSection;
};

export default useScrollSpy;
