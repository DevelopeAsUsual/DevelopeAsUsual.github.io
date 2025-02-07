import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './pages/About'
import Navbar from './components/Navbar'
import Work from './pages/Work'
import Education from './pages/Education'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


function App() {
 
  return (
    <>
    <div className='flex justify-between items-center'>
    <div className='m-2 md:m-5 p-5 border border-solid border-black w-[98vw]' >
      <Navbar/>
      <About/>
      <Work/>
      <Projects/>
      <Education/>
      <Contact/>
     
          </div>
    </div>
    </>
  )
}

export default App
