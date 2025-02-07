import React from 'react'
import about from '/dist/about.jpg'

const About = () => {
  return (
    <div className='flex flex-col justify-center items-center lg:flex-row gap-10 lg:gap-20 py-20 xl:px-10 w-full' id="about">
        <div className='flex flex-col gap-5 h-full justify-center lg:w-1/2'>
            <h1 className='text-5xl md:text-6xl lg:text-7xl xl:text-8xl lg:py-0'>Kartik Chhimpa</h1>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-montserrat'>DATA SCIENTIST</h2>
            <p className=' font-montserrat text-sm md:text-lg'>A dedicated Data Scientist and Senior Business Analyst, leveraging a diverse background to develop predictive models and scalable ML solutions, driving data-centric insights and strategic decision-making. Designing and deploying machine learning models and optimizing various criterias using Logistic Regression, Random Forest, and k-Means clustering, enabling efficient risk management and enhanced customer experience. Holding a B.Tech in Electrical Engineering from IIT Roorkee, specializing in analyzing large datasets, implementing machine learning models, and ensuring industry best practices, delivering scalable and impactful solutions.</p>
        </div>
        <div className='flex h-full justify-center items-center w-1/2 lg:w-1/2'>
            <img src={about} alt="" className='rounded-lg filter grayscale'/>
            
        </div>
        
    </div>
  )
}

export default About