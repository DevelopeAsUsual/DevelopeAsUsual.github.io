import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Project1 from "/1.png"
import Project2 from "/2.png"
import Project2_1 from "/dist/about.jpg"
import Project3 from "/3.png"
import Sleeping from "../components/Sleeping";
import Standing from "../components/Standing";

const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <div className="lg:py-10">
    <div className="xl:p-10 w-full font-montserrat lg:py-10 mb-10" id="projects">
      <div className="flex justify-between flex-col lg:flex-row lg:h-[80vh] w-full lg:gap-2">
        <div className="flex justify-start flex-row gap-5 lg:w-1/3">
          <div className=" h-full flex flex-col justify-between lg:pr-10 ">
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl lg:pt-20 lg:py-0 pb-5">Projects</h1>
            </div>
            <div className="pb-10 lg:pb-0  text-sm md:text-lg">
            Here are some projects I worked on, exploring Python, machine learning, and data analysis. 
            These include building predictive models, automating workflows, and developing interactive applications. 
            I also experimented with web development, AI, and optimization techniques, applying various technologies 
            to solve real-world problems.
            </div>
          </div>
          <div>
          <Standing/>
          </div>
        </div>
     
        <div className="flex flex-col items-end h-full justify-center gap-2 lg:gap-20 lg:pl-10">
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="flex-flex-col  lg:w-1/2">
            <a href="https://developeasusual.github.io/bank/index.html" target="_blank">
              <img
                src={Project1}
                alt=""
                className=" rounded-md grayscale"
              />
              </a>
              <div className="flex flex-row justify-between py-2">
              <a href="https://developeasusual.github.io/bank/index.html" target="_blank"> <p className=" cursor-pointer hover:font-semibold transition-all">Portfolio Summary and Performance overview of Installment Loans
             
</p> </a> 
                <p>2024</p>
              </div>
            </div>
            <div className="flex-flex-col gap-2 lg:w-1/2">
            <a href="https://developeasusual.github.io/football/index.html" target="_blank">
              <img
                src={Project2}
                alt=""
                className=" rounded-md grayscale"
              />
              </a>
              <div className="flex flex-row justify-between py-2">
             <a href="https://developeasusual.github.io/football/index.html" target="_blank"><p className=" cursor-pointer hover:font-semibold transition-all">LIECESTER CITY - THE IMPOSSIBLE CHAMPIONS</p></a>   
                <p>2024</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-5">
            
            <div className="flex-flex-col gap-2 lg:w-1/2">
            <a href="https://eco2info.netlify.app/" target="_blank">
              <img
                src={Project3}
                alt=""
                className=" rounded-md grayscale"
              />
              </a>
              <div className="flex flex-row justify-between py-2">
             <a href="https://eco2info.netlify.app/" target="_blank"> <p className=" cursor-pointer hover:font-semibold transition-all">ECO2info</p></a>  
                <p>2024</p>
              </div>
            </div>{" "}
          
          </div>
        </div>
      </div>
      
    </div>
    <div className="lg:py-10">
    <Sleeping/>
    </div>
    </div>
  );
};

export default Projects;
