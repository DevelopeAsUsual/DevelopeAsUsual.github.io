import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'; // Import LinkedIn icon from free-brands-svg-icons

const Contact = () => {
  return (
    <div className='xl:p-10 w-full font-montserrat' id="contact">
      <h1 className='text-5xl md:text-6xl lg:text-7xl xl:text-8xl lg:text-center pb-5'>Let's Talk</h1> 
      <p className='lg:text-center lg:p-10  text-sm md:text-lg'>I am continuously striving to expand my knowledge and stay updated with the latest industry trends, always seeking opportunities to contribute to innovative projects. Please feel free to contact me through below links for any collaborations, opportunities, or discussions.</p>
     <div className='flex flex-row gap-10 text-4xl md:text-6xl w-full lg:items-center lg:justify-center py-10 lg:py-20'>
     <a href="https://drive.google.com/file/d/1c1RSnMfTaRd1vDUTzJ1w4Y6jvEZjZcQQ/view?usp=sharing" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFile} /> </a> 
     <a href="mailto:kartik13rer@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a> 
     <a href="https://www.linkedin.com/in/kartik13/"  target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faLinkedin} /> </a>
      </div>
    </div>
  );
};

export default Contact;
