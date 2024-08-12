import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';

function Navbar({ homeRef, aboutRef, projectsRef, contactsRef }) {
  const [crossIcon, setCrossIcon] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 653) setActive('home');
      else if (window.scrollY >= 653 && window.scrollY < 1110) setActive('about');
      else if (window.scrollY >= 1110 && window.scrollY < 3000) setActive('projects');
      else if(window.scrollY >= 3000) setActive('contacts');
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
    setCrossIcon(false);
  };

  return (
    <div className='flex flex-row justify-between items-center px-[2rem] py-[1.5rem] h-[80px] w-full fixed bg-white'>
      <h1 className='font-extrabold text-[1.7rem]'>Abhishek.dev</h1>
      <div
        className={`flex flex-row list-none gap-[1rem] md:fixed md:w-full md:top-[80px] md:left-0 md:flex-col md:items-center ${crossIcon ? 'md:flex' : 'md:hidden'} md:bg-white md:pb-3 md:shadow-lg font-bold text-[1.1rem]`}
      >
        <li
          className={`hover:scale-110 transition-all duration-200 ease-linear ${active === 'home' && 'text-[#097FFF]'} cursor-pointer`}
          onClick={() => scrollToSection(homeRef)}
        >
          Home
        </li>
        <li
          className={`hover:scale-110 transition-all duration-200 ease-linear ${active === 'about' && 'text-[#097FFF]'} cursor-pointer`}
          onClick={() => scrollToSection(aboutRef)}
        >
          About
        </li>
        <li
          className={`hover:scale-110 transition-all duration-200 ease-linear ${active === 'projects' && 'text-[#097FFF]'} cursor-pointer`}
          onClick={() => scrollToSection(projectsRef)}
        >
          Projects
        </li>
        <li
          className={`hover:scale-110 transition-all duration-200 ease-linear ${active === 'contacts' && 'text-[#097FFF]'} cursor-pointer`}
          onClick={()=>scrollToSection(contactsRef)}
        >
          Contact
        </li>
      </div>
      <FontAwesomeIcon
        icon={faBars}
        className={`text-[1.5rem] hidden ${crossIcon ? 'md:hidden' : 'md:block'}`}
        onClick={() => setCrossIcon(true)}
      />
      <FontAwesomeIcon
        icon={faX}
        className={`text-[1.5rem] hidden ${crossIcon ? 'md:block' : 'md:hidden'}`}
        onClick={() => setCrossIcon(false)}
      />
    </div>
  );
}

export default Navbar;
