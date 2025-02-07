import React from 'react'
import Standing from '../components/Standing'
import Sleeping from '../components/Sleeping'

const Education = () => {
  return (
    <>
    <div className='xl:p-10 w-full font-montserrat lg:mb-10 py-10' id="education">
           <div className='flex justify-between flex-col lg:flex-row lg:h-[70vh] w-full lg:gap-2'> 
<div className='flex justify-start flex-col lg:flex-row gap-5 lg:w-1/3'>
<div className='hidden lg:block'>
    <div className=' h-full flex flex-col justify-between  lg:pr-10'>
        <div >
        Jun'17-Jun'21
        </div>
        <div>
        Earned a degree in Electrical Engineering with a strong focus on electrical systems and automation. Worked on projects involving circuit design, power systems, and embedded systems. Additionally, explored machine learning applications, including predictive maintenance for electrical components and anomaly detection in sensor data. Combined engineering expertise with ML techniques to optimize system performance and reliability.        </div>
        </div>
        </div>
  <div>
    <Standing/>
  </div>

    </div>
    <div className='hidden lg:block justify-self-center self-center grayscale'>
        <img src="https://www.iaspaper.net/wp-content/uploads/2018/12/IIT-Roorkee-Logo.png" alt="" />
    </div>
    <div className='flex flex-col  lg:items-end h-full lg:justify-self-center lg:self-center gap-2 lg:gap-16'>
        <div className='flex flex-col  lg:place-content-end h-1/2'>
    <h1 className='text-5xl md:text-6xl lg:text-7xl xl:text-8xl lg:pt-20 md:py-0 lg:text-center pb-5'>Education</h1>
    
    </div>

    <div className='text-2xl  lg:text-right'><h2 className='text-3xl'>Indian Institute of Technology, Roorkee
</h2>Bachelor of Technology (Electrical Engineering)</div>
    </div>
</div>
<div className='py-2 lg:hidden block'>
    <div className=' h-full flex flex-col gap-2 justify-between  lg:pr-10'>
        <div >
        Jun'17-Jun'21
        </div>
        <div className=' text-sm md:text-lg'>
        This Institute and the program not only provided a strong academic foundation but also honed my problem-solving skills. During this time, I worked on designing and developing crucial components for a drone surveillance system. This involved creating schematics, developing PCBs for essential systems like Battery Management and Electronic Speed Controllers, and engineering flight controller PCBs with specific communication interfaces.        </div>
        </div>
        </div>

    </div>
    <div className='pb-10 lg:py-10'>
    <Sleeping/>
    </div>
    </>
  )
}

export default Education