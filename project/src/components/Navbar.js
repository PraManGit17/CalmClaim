import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className="border-b border-gray-300 px-6 py-4 w-full flex items-center justify-between">

      <div className="relative w-40 h-12">
        <Image
          src="/claimclam.png"
          alt="ClaimClam Logo"
          fill
          className="object-contain"
        />
      </div>

      <div className='flex items-center justify-center gap-8 text-lg'>
        <div className='font-medium hover:scale-105 hover:transition-all   hover:cursor-pointer'>About</div>
        <div className='font-medium hover:scale-105 hover:transition-all   hover:cursor-pointer'>Services</div>
        <div className='font-medium hover:scale-105 hover:transition-all   hover:cursor-pointer'>Contact Us</div>
        <div className='font-medium hover:scale-105 hover:transition-all   hover:cursor-pointer'>FAQs</div>
      </div>
    </div>
  )
}

export default Navbar
