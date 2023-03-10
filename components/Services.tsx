import React from 'react'

const Services = () => {
  return (
    <div className="container mx-auto z-40 md:pt-20 pt-40">
      <div className="pb-40 lg:pb-[210px]">
        <div className="flex flex-col text-center items-center  pt-5 md:pt-28">
          <p className="text-2xl md:text-3xl text-white font-semibold pb-4">
            Testers and users easily report in app bugs with a simple shake or
            custom trigger can be decided by developers.
          </p>
          <p className="text-sm md:text-base text-gray-300 max-w-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            molestiae dicta magni eum?
          </p>
        </div>
        <div className="md:flex lg:block gap-10 mt-5 text-start">
          <div className="grid grid-cols-1 pt-8 lg:pt-[76px] lg:grid-cols-12 items-center">
            <div className="col-span-7">
              <p className="font-semibold text-base md:text-xl text-white">
                Labore expedita
              </p>
              <p className="text-sm md:text-base text-gray-200 pt-2 lg:pb-[61px] pb-8 max-w-none md:max-w-md">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo,
                officiis impedit nam beatae voluptas ipsum ullam.
              </p>
              <div>
                <p className="font-semibold text-base md:text-xl text-white">
                  Labore expedita
                </p>
              </div>
              <p className="text-sm md:text-base text-gray-200 pt-2 max-w-none md:max-w-md">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo,
                officiis impedit nam beatae voluptas ipsum ullam.
              </p>
            </div>
            <div className="col-span-5 hidden lg:block">
              <img
                className="w-3/4 rounded-xl"
                src="/services-left-img.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="grid grid-cols-1 pt-8 lg:pt-[139px] lg:grid-cols-12 6 md:pr-0 items-center">
            <div className="col-span-7 hidden lg:block">
              <img
                className="w-3/5 rounded-xl"
                src="/services-right-img.png"
                alt=""
              />
            </div>
            <div className="col-span-5">
              <div>
                <div>
                  <p className="font-semibold text-base md:text-xl text-white">
                    Labore expedita
                  </p>
                </div>
                <p className="text-sm md:text-base text-gray-200 pb-8 lg:pb-[61px] pt-2 max-w-none md:max-w-md">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nemo, officiis impedit nam beatae voluptas ipsum ullam.
                </p>
                <div>
                  <p className="font-semibold text-base md:text-xl text-white">
                    Labore expedita
                  </p>
                </div>
                <p className="text-sm md:text-base text-gray-200 pt-2 max-w-none md:max-w-md">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nemo, officiis impedit nam beatae voluptas ipsum ullam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
