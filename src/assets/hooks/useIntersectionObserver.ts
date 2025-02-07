// filepath: /c:/Users/roman/Documents/GitHub/ReactThreeJsPortfolio/src/hooks/useIntersectionObserver.ts
import { useEffect } from 'react';

const useIntersectionObserver = (setActiveSection: (section: string) => void) => {
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, [setActiveSection]);
};

export default useIntersectionObserver;