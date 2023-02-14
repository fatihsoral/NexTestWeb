import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const Header = () => {
  const router = useRouter()
  return (
    <div className="lg:px-20 lg:py-5 flex justify-between  px-4 py-[10px] items-center">
      <div className="">
        <img className="bg-white pr-2 rounded-xl" src="logo-section.svg" />
      </div>
      <div className="flex gap-5 items-center">
        <Link
          className="text-center text-sm text-blue-100 hover:text-blue-300"
          href={'#'}
        >
          <span className="md:block hidden">About</span>
        </Link>
        <Link
          className="md:block text-center text-sm text-blue-100 hover:text-blue-300"
          href={'#'}
        >
          <span className="md:block hidden">Contact</span>
        </Link>
        <button className="block text-center text-sm text-blue-100 hover:text-blue-300">
          Sign in
        </button>

        <button className="p-3 bg-blue-100 rounded-xl hover:bg-blue-300 hover:text-white transition font-semibold">
          Get Started
        </button>
      </div>
    </div>
  )
}

export default Header
