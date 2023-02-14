import React from 'react'

const Hero = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center text-center space-y-5 text-white pb-14 md:pb-44 md:pt-52">
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
      </div>
    </div>
  )
}

export default Hero
