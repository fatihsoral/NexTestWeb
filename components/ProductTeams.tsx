import { useInView } from 'react-intersection-observer'
import React from 'react'
import {
  motion,
  MotionValue,
  useScroll,
  useTransform,
  Variants,
} from 'framer-motion'

const cardVariants: Variants = {
  offscreen: {
    translateY: '150%',
  },
  onscreen: {
    translateY: 10,
    rotate: -1,
    transition: {
      type: 'spring',
      bounce: 0.6,
      duration: 2.2,
    },
  },
}

function useParallax(
  value: MotionValue<number>,
  outStart: number,
  outEnd: number,
) {
  return useTransform(value, [0, 1], [outStart, outEnd])
}

const ProductTeams = () => {
  const customerRef = React.useRef<HTMLDivElement>(null)
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  })

  const { scrollYProgress } = useScroll({
    target: customerRef,
    offset: ['-256px', 'end start'],
  })
  const parallax = useParallax(scrollYProgress, 46, 158)
  return (
    <div ref={customerRef}>
      <div ref={ref}>
        <div className="container mx-auto pt-20 lg:pt-20 lg:pb-96 pb-24 space-y-20">
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            variants={cardVariants}
            style={{ y: parallax }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="text-2xl lg:text-4xl font-semibold text-white text-center lg:pb-24 pb-16">
              What is NextTest?
            </p>
          </motion.div>
          <div className="md:flex gap-6 block">
            <div className="flex flex-col gap-6 items-center justify-center">
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                variants={cardVariants}
                style={{ y: parallax }}
                viewport={{ once: true, amount: 0.8 }}
                className="px-6 md:px-12 pb-12 pt-28 lg:pt-60  bg-blue-300 rounded-xl relative overflow-hidden max-w-xs md:max-w-none "
              >
                <div className="border-[58px] w-[413px] h-[413px] lg:w-[714px] lg:h-[714px] rounded-full absolute border-blue-100 lg:right-28 lg:top-36 right-6 top-28"></div>
                <p className="text-2xl md:text-3xl text-black font-medium pb-2 relative">
                  Step 1
                </p>
                <p className="text-sm lg:text-base text-gray-600 relative max-w-lg">
                  Testers and users easily report in app bugs with a simple
                  shake or custom trigger can be decided by developers.
                </p>
              </motion.div>
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                variants={cardVariants}
                style={{ y: parallax }}
                viewport={{ once: true, amount: 0.8 }}
                className="px-6 md:px-12 pb-12  pt-28 lg:pt-60 bg-blue-100 rounded-xl relative overflow-hidden max-w-xs md:max-w-none"
              >
                <div className="border-[58px] w-[413px] h-[413px] lg:w-[714px] lg:h-[714px] rounded-full absolute border-blue-300 lg:bottom-16 lg:right-64 bottom-16 right-32"></div>
                <p className="text-2xl md:text-3xl text-black font-medium pb-2 relative">
                  Step 3
                </p>
                <p className="text-sm lg:text-base  text-gray-600 relative max-w-lg">
                  Submitted bugs has all detailed information like network
                  requests, device info, app & os versions etc.
                </p>
              </motion.div>
            </div>
            <div className="flex flex-col gap-6 mt-6 md:mt-16 items-center justify-center">
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                variants={cardVariants}
                style={{ y: parallax }}
                viewport={{ once: true, amount: 0.8 }}
                className="px-6 md:px-12 pb-12  pt-28 lg:pt-60 bg-blue-100 rounded-xl relative overflow-hidden max-w-xs md:max-w-none"
              >
                <div className="border-[58px] w-[413px] h-[413px] lg:w-[714px] lg:h-[714px] rounded-full absolute border-blue-300 lg:left-64 lg:top-24 top-16 left-20"></div>
                <p className="text-2xl md:text-3xl text-black font-medium pb-2 relative">
                  Step 2
                </p>
                <p className="text-sm lg:text-base  text-gray-600 relative max-w-lg">
                  With a ease of shake even unexperienced users feedback gets
                  all info needed to fix the bug.
                </p>
              </motion.div>
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                variants={cardVariants}
                style={{ y: parallax }}
                viewport={{ once: true, amount: 0.8 }}
                className="px-6 md:px-12 pb-12  pt-28 lg:pt-60 bg-blue-300 rounded-xl relative overflow-hidden max-w-xs md:max-w-none"
              >
                <div className="border-[58px] w-[413px] h-[413px] lg:w-[714px] lg:h-[714px] rounded-full absolute border-blue-100 lg:bottom-16 lg:left-16 bottom-32 left-9"></div>
                <p className="text-2xl md:text-3xl text-black font-medium pb-2 relative">
                  Step 4
                </p>
                <p className="text-sm lg:text-base text-gray-600 relative max-w-lg">
                  With a ease of shake even unexperienced users feedback gets
                  all info needed to fix the bug.
                </p>
              </motion.div>
            </div>
          </div>
          <div className="md:grid hidden md:grid-cols-3 pb-44 lg:pt-44 text-white">
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              variants={cardVariants}
              style={{ y: parallax }}
              viewport={{ once: true, amount: 0.8 }}
            >
              <div className="absolute max-w-xs mt-56 space-y-4">
                <p className="lg:text-xl text-base font-semibold">
                  Lorem ipsum
                </p>
                <p className="text-gray-400 lg:text-base text-sm max-w-[220px] lg:max-w-none">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Itaque, blanditiis atque quae saepe voluptates at recusandae.
                </p>
              </div>
              <div className="relative transition-all hover:translate-y-5">
                <div className="absolute mx-auto left-28 z-10  ">
                  <img src="/services-1-1.png" alt="" />
                </div>
                <div className="absolute">
                  <img src="/services-1.png" alt="" />
                </div>
              </div>
            </motion.div>
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              variants={cardVariants}
              style={{ y: parallax }}
              viewport={{ once: true, amount: 0.8 }}
            >
              <div className="absolute max-w-xs mt-56 space-y-4">
                <p className="lg:text-xl text-base font-semibold">
                  Lorem ipsum
                </p>
                <p className="text-gray-400 max-w-[220px] lg:max-w-none lg:text-base text-sm">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Itaque, blanditiis atque quae saepe voluptates at recusandae.
                </p>
              </div>
              <div className="relative transition-all hover:translate-y-5">
                <div className="absolute mx-auto left-28 z-10">
                  <img src="/services-2.png" alt="" />
                </div>
                <div className="absolute">
                  <img src="/services-2-2.png" alt="" />
                </div>
              </div>
            </motion.div>
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              variants={cardVariants}
              style={{ y: parallax }}
              viewport={{ once: true, amount: 0.8 }}
            >
              <div className="absolute max-w-xs mt-56 space-y-4">
                <p className="lg:text-xl text-base font-semibold">
                  Lorem ipsum
                </p>
                <p className="text-gray-400 max-w-[220px] lg:max-w-none text-sm lg:text-base">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Itaque, blanditiis atque quae saepe voluptates at recusandae.
                </p>
              </div>
              <div className="relative transition-all hover:translate-y-5">
                <div className="absolute mx-auto left-28 z-10">
                  <img src="/services-3-3.png" alt="" />
                </div>
                <div className="absolute">
                  <img src="/services-3.png" alt="" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductTeams
