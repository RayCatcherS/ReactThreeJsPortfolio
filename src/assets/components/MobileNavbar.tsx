import { useState, useEffect, useRef } from "react"; 
import { Link } from "react-scroll";
import { ProjectGroup } from "../types/interfaces";

const MobileNavbar: React.FC<{ projectGroups: ProjectGroup[], activeSection: string }> = ({ projectGroups, activeSection }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = (event: React.MouseEvent) => {
        event.stopPropagation(); // Evita la chiusura immediata quando si clicca sul pulsante
        setIsOpen(prev => !prev);
    };
    

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div>
            <header className="header fixed top-0 left-0 w-full z-50">
                <nav className="flex gap-7 font-medium p-10">
                    <button
                        onClick={toggleDropdown}
                        className="text-white text-mobile-navbar bg-violet-900 hover:bg-violet-950 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                        type="button">
                        {activeSection === 'home' ? 'Home' : activeSection === 'about' ? 'About/Contact Me' : projectGroups.find(group => `section-${projectGroups.indexOf(group)}` === activeSection)?.projectGroupName || 'Dropdown'}
                        <svg
                            className="w-2.5 h-2.5 ml-3 transition-transform duration-300"
                            style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6">
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m1 1 4 4 4-4"
                            />
                        </svg>
                    </button>

                    {/* Dropdown menu */}
                    {isOpen && (
                        <div ref={dropdownRef} className="absolute top-20 left-9 z-10 bg-gray-950 divide-y divide-gray-100 rounded-lg shadow-sm">
                            <ul className="py-2 text-sm text-gray-300 p-5">
                                <li>
                                    <Link
                                        to="home"
                                        smooth={true}
                                        duration={500}
                                        className={`cursor-pointer`}
                                        onClick={() => setIsOpen(false)} // Chiude il menu al click su un link
                                    >
                                        <p className={`p-3 text-mobile-navbar-item ${activeSection === 'home' ? 'violet-gradient-text' : 'text-gray-300'}`}>
                                            Home
                                        </p>
                                    </Link>
                                </li>
                                {projectGroups.map((projectGroup, index) => (
                                    <li key={index} id={index.toString()}>
                                        <Link
                                            to={`section-${index}`}
                                            smooth={true}
                                            duration={500}
                                            className={`cursor-pointer`}
                                            onClick={() => setIsOpen(false)} // Chiude il menu al click su un link
                                        >
                                            <p className={`p-3 text-mobile-navbar-item ${activeSection === `section-${index}` ? 'violet-gradient-text' : 'text-gray-300'}`}>
                                                {projectGroup.projectGroupName}
                                            </p>
                                        </Link>
                                    </li>
                                ))}
                                <li>
                                <Link
                                    to="about"
                                    smooth={true}
                                    duration={500}
                                    className={`cursor-pointer`}
                                >
                                    <p className={`p-3 text-mobile-navbar-item  ${
                                    activeSection === 'about' ? 'violet-gradient-text' : 'text-gray-300'
                                    }`}>About/Contact Me</p>
                                </Link>
                                </li>
                            </ul>
                        </div>
                    )}
                </nav>
            </header>
        </div>
    );
};

export default MobileNavbar;
