import React from 'react';
import Sleeping from './Sleeping';
import "../App.css"

const Navbar = () => {
  return (
    <>
      <div className='flex flex-row w-full font-montserrat'>
        <ul className='flex flex-row gap-2 md:gap-10 w-full justify-end pb-5 text-xs sm:text-md lg:text-lg'>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#work">WORK</a></li>
          <li><a href="#projects">PROJECTS</a></li>
          <li><a href="#education">EDUCATION</a></li>
          <li><a href="#contact">CONTACT</a></li>
        </ul>
      </div>
      <Sleeping />
    </>
  );
};

export default Navbar;
