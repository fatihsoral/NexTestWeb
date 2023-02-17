import React from 'react'
import { motion, Variants } from 'framer-motion'

const cardVariants: Variants = {
  offscreen: {
    translateY: '150%',
  },
  onscreen: {
    translateY: 10,
    rotate: 0,
    transition: {
      type: 'spring',
      bounce: 0.6,
      duration: 2.2,
    },
  },
}

const Hero = () => {
  return (
    <div className="container mx-auto">
      <motion.div
        whileInView="onscreen"
        variants={cardVariants}
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col items-center text-center space-y-5 text-white pb-14 md:pb-44 md:pt-52 pt-24"
      >
        <p className="text-xl md:text-3xl font-semibold">
          NextTest is an software development and Q&A helper tool for
          development, Q&A, product and project management teams in software
          development projects.
        </p>
        <p className="text-xs md:text-base max-w-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit natus.
        </p>
        <div className="lg:pt-3 pt-1">
          <button className="p-3 bg-blue-100 rounded-xl text-black hover:bg-blue-300 hover:text-white transition font-semibold">
            Try for free
          </button>
        </div>
      </motion.div>
    </div>
  )
}

export default Hero
