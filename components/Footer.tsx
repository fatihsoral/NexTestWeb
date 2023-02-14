import React from 'react'

const Footer = () => {
  return (
    <div className=" bg-gray-100 pt-10">
      <div className="container mx-auto">
        <div className=" lg:mx-20">
          <div className="text-gray-900">
            <img src="/logo.svg" />
          </div>
          <p className="text-sm md:text-base text-gray-600 pt-9 lg:pt-12 max-w-[540px] pb-12 lg:pb-44 border-b">
            Lorem ipsum dolor sit amet consectetur. Fermentum duis aliquet
            dignissim commodo. Interdum sit justo ut est aliquet nunc duis at.
          </p>
        </div>
        <div className="text-center lg:flex lg:justify-between pt-12 lg:pt-6 mx-0 md:mx-20 pb-14 lg:pb-8 lg:flex-row-reverse">
          <div className="lg:flex gap-6">
            <p className="underline text-primary-700 text-sm pb-12 lg:pb-0">
              <a href=""> Privacy Policy</a>
            </p>
            <p className="underline text-sm text-gray-500 pb-12 lg:pb-0">
              <a href=""> Terms of Service.</a>
            </p>
          </div>
          <div>
            <p className="text-gray-500 text-sm ">
              @2022 Nextlua. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
