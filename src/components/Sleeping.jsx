import React from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Sleeping = () => {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
      });
    
  return (
    <motion.div
        ref={ref}
        className='h-[1px] bg-black  w-full'
        initial={{ width: 0 }}
        animate={{ width: inView ? '100%' : '0%' }}
        transition={{ duration: 2 }}
        style={{ transformOrigin: 'left' }}
      ></motion.div>
  )
}

export default Sleeping