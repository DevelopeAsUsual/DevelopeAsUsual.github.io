import React from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Sleeping from '../components/Sleeping';


const Work = () => {

  
  return (
    <div className='xl:p-10 w-full font-montserrat mb-10' id="work" >
        <h1 className='text-5xl md:text-6xl lg:text-7xl xl:text-8xl lg:pt-2 md:py-0 lg:text-center'>Work</h1>
        
        <div className='flex flex-row justify-between mt-10 text-md md:text-3xl'>
            {/* <div >Exlservice Holdings</div>
            <div className=' italic'>2021-Present</div> */}
        </div>
        <Sleeping/>
        <div className='flex flex-col lg:flex-row gap-5 lg:gap-10 justify-between w-full py-10'>
          <div className='flex flex-col justify-between lg:w-1/3'>
          <div >Jan'23-Nov'24</div>
            <div className=' italic'>Exlservice Holdings</div>
          </div>

          <div className='lg:w-1/3 lg:justify-self-center  lg:self-center   md:text-5xl lg:text-6xl'>
          Cunsultant 2 (Senior Data Consultant)
            </div>

          <div className='lg:w-1/3   text-sm md:text-lg '>
          As a Senior Data Consultant, I developed advanced credit risk models and automated financial processes to enhance decision-making and efficiency. Designed an ensemble XGBoost-LSTM model for credit card loss forecasting, leveraging Snowflake and Databricks, saving $13MM annually. Optimized BNPL approval strategies using Logistic Regression and Random Forest, integrating FICO scores and transaction data. Automated legal bureau reporting for installment loans, ensuring compliance and seamless execution in BNPL programs through cross-functional collaboration.          </div>
        </div>
       <Sleeping/>
          
       <div className='flex flex-col lg:flex-row gap-5 lg:gap-10 justify-between w-full py-10'>
       <div className='flex flex-col justify-between lg:w-1/3'>
          <div >Jun'21-Dec'22</div>
            <div className=' italic'>Exlservice Holdings</div>
          </div>
         <div className='lg:justify-self-center  lg:self-center md:text-5xl lg:text-6xl lg:w-1/3'>
        Consultant 1 (Data Analyst)
        </div>
          <div className=' lg:w-1/3  text-sm md:text-lg'>
          In this role, I implemented machine learning models to optimize credit line decisions. Used GBM with GridSearchCV for fine-tuned CLA eligibility predictions. Designed a CLD strategy to detect high-risk segments, leveraging charge-off analysis to reduce losses by $4MM annually. Processed and analyzed 2.1MM monthly CLA accounts, ensuring model-driven segmentation and compliance. Integrated predictive modeling with large-scale financial data to enhance decision-making and risk management.          </div>
        </div>
       <Sleeping/>

       <div className='flex flex-col lg:flex-row gap-5 lg:gap-10 justify-between w-full py-10'>
       <div className='flex flex-col justify-between lg:w-1/3'>
          <div >Feb'21-Apr'21</div>
            <div className=' italic'>Vecros Technologies Pvt. Ltd.</div>
          </div>
         <div className='lg:justify-self-center  lg:self-center md:text-5xl lg:text-6xl lg:w-1/3'>
        Embedded Engineer
        </div>
          <div className=' lg:w-1/3  text-sm md:text-lg'>
          I developed XGBoost models for battery health monitoring and BMS failure prevention. Applied time-series analysis and clustering on 9-Axis IMU data to enhance flight stability. Optimized low-latency UART communication with Jetson Nano. Engineered drone telemetry features to improve predictive analytics accuracy.          </div>
        </div>
       <Sleeping/>
    </div>
  )
}

export default Work