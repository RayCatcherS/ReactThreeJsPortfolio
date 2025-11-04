import { Link } from 'react-scroll';
import { ProjectGroup } from '../types/interfaces';

/* 
  L'interfaccia NavbarProps definisce il tipo delle proprietà (props) 
  che il componente Navbar si aspetta di ricevere. In questo caso,
  l'interfaccia NavbarProps specifica che il componente Navbar riceverà una proprietà
  chiamata activeSection di tipo string.
*/

const Navbar: React.FC<{ projectGroups: ProjectGroup[], activeSection: string }> = ({ projectGroups, activeSection }) => {
  
  //console.log(`Navbar ha ricevuto activeSection: ${activeSection}`);

  return (
    <header className="header fixed top-0 left-0 w-full z-50 ">
      <nav className="flex text-lg gap-7 font-medium p-10">

        
        <ul className="flex items-center w-full justify-between">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className={`cursor-pointer rounded-lg flex items-center justify-center font-bold text-lg shadow-sm transition-all backdrop-blur-md ${
              activeSection === 'home' ? 'bg-white' : 'bg-white/10'
            }`}>
              <p className={`p-3 ${
                activeSection === 'home' ? 'violet-gradient-text' : 'text-white'
              }`}>Home</p>
            </Link>
          </li>

          {/** generazione menu navbar */}
          
          
          <div className="flex space-x-5">
            {projectGroups.map((projectGroup, index) => {
              const isActive = activeSection === `section-${index}`;
              return (
                <li key={index} id={index.toString()}>
                  <Link
                    to={`section-${index}`}
                    smooth={true}
                    duration={500}
                    className={`cursor-pointer rounded-lg flex items-center justify-center font-bold text-lg shadow-sm transition-all backdrop-blur-md ${
                    isActive ? 'bg-white' : 'bg-white/10'
                    }`}
                  >
                    <p
                      className={`p-3 ${
                        isActive ? 'violet-gradient-text' : 'text-white'
                      }`}
                    >
                      {projectGroup.projectGroupName}
                    </p>
                  </Link>
                </li>
              );
            })}
            <li>
              {/** About/Contact Me link */}
              <Link
                to="about"
                smooth={true}
                duration={500}
                className={`cursor-pointer rounded-lg flex items-center justify-center font-bold text-lg shadow-sm transition-all backdrop-blur-md ${
                activeSection === 'about' ? 'bg-white' : 'bg-white/10'
                }`}
              >
                <p
                  className={`p-3 ${
                    activeSection === 'about'
                      ? 'violet-gradient-text'
                      : 'text-white'
                  }`}
                >
                  About/Contact Me
                </p>
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
