import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <nav className="flex text-lg gap-7 font-medium">
        <ul className="flex items-center w-full justify-between">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-violet-500 h-10 rounded-lg bg-white items-center justify-center flex font-bold text-lg shadow-md"
                  : "text-black h-10 rounded-lg bg-white items-center justify-center flex font-bold text-lg shadow-md"
              }
            >
              <p className="blue-gradient-text">Home</p>
            </NavLink>
          </li>
          <div className="flex space-x-5">
            <li>
              <NavLink
                to="/gameDevProjects"
                className={({ isActive }) =>
                  isActive ? "text-violet-500" : "text-black"
                }
              >
                GameDev Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/softwareDev"
                className={({ isActive }) =>
                  isActive ? "text-violet-500" : "text-black"
                }
              >
                Developed Software
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/universityProjects"
                className={({ isActive }) =>
                  isActive ? "text-violet-500" : "text-black"
                }
              >
                University Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-violet-500" : "text-black"
                }
              >
                About
              </NavLink>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
