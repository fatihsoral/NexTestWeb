import Image from 'next/image'
import React from 'react'

const Tryforfree = () => {
  return (
    <div className=" pt-12 md:pt-28 pb-[55px] lg:pb-[135px] px-4 md:px-[50px]">
      <div className="md:container mx-auto">
        <div className="bg-white md:grid md:grid-cols-2 items-center rounded-xl shadow-xl md:space-x-16 px-5 md:px-16 py-12">
          <div className=" flex items-center pb-8 md:pb-0 justify-center space-x-8">
            <Image
              width={300}
              height={300}
              className="lg:w-2/3 mx-auto md:mx-0"
              src="/tryFreeImg.svg"
              alt=""
            />
            <div className="hidden lg:block w-1/3">
              <img src="/tryForArrow.svg" />
            </div>
          </div>
          <div className="flex flex-col text-center md:text-left">
            <p className="text-2xl lg:text-4xl text-gray-600 lg:pb-4 pb-2">
              Try for free
            </p>
            <p className="text-xs lg:text-base text-gray-600 pb-4 lg:pb-6">
              lorem ipsum dolor sit amet ninium
            </p>
            <div className="md:mx-0 md:mr-auto">
              <button className=" p-3 bg-success-200 rounded-xl text-gray-900 hover:bg-success-500 hover:text-white transition">
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tryforfree
