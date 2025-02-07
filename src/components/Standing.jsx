import React from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Standing = () => {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
      });

  return (
    <motion.div
        ref={ref}
        className='w-[1px] h-full bg-black origin-top'
        initial={{ scaleY: 0 }}
        animate={{ scaleY: inView ? 1 : 0 }}
        transition={{ duration: 2 }}
      ></motion.div>
  )
}

export default Standing