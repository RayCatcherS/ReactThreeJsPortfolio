import { Link } from 'react-scroll';

/* 
  L'interfaccia NavbarProps definisce il tipo delle proprietà (props) 
  che il componente Navbar si aspetta di ricevere. In questo caso,
  l'interfaccia NavbarProps specifica che il componente Navbar riceverà una proprietà
  chiamata activeSection di tipo string.
*/
interface NavbarProps {
  activeSection: string;
}

const Navbar = ({ activeSection }: NavbarProps) => {
  return (
    <header className="header fixed top-0 left-0 w-full z-50 ">
      <nav className="flex text-lg gap-7 font-medium p-10">
        <ul className="flex items-center w-full justify-between">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className={`cursor-pointer rounded-lg bg-white items-center justify-center flex font-bold text-lg shadow-md `}
            >
              <p className={`p-3 ${
                activeSection === 'home' ? 'violet-gradient-text' : 'text-black'
              }`}>Home</p>
            </Link>
          </li>
          <div className="flex space-x-5">
            <li>
              <Link
                to="gameDevProjects"
                smooth={true}
                duration={500}
                className={`cursor-pointer`}
              >
                <p className={`p-3 ${
                activeSection === 'gameDevProjects' ? 'violet-gradient-text' : 'text-white'
              }`}>GameDev Projects</p>
              </Link>
            </li>
            <li>
              <Link
                to="developedSoftwares"
                smooth={true}
                duration={500}
                className={`cursor-pointer`}
              >
                <p className={`p-3 ${
                  activeSection === 'developedSoftwares' ? 'violet-gradient-text' : 'text-white'
                }`}>Developed Software</p>
              </Link>
            </li>
            <li>
              <Link
                to="universityProjects"
                smooth={true}
                duration={500}
                className={`cursor-pointer`}
              >
                <p className={`p-3  ${
                  activeSection === 'universityProjects' ? 'violet-gradient-text' : 'text-white'
                }`}>University Projects</p>
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className={`cursor-pointer`}
              >
                <p className={`p-3  ${
                  activeSection === 'about' ? 'violet-gradient-text' : 'text-white'
                }`}>About/Contact Me</p>
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
