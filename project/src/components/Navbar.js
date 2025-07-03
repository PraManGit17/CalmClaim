'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { HiDotsVertical } from 'react-icons/hi'
import { RxHamburgerMenu, RxCross2 } from 'react-icons/rx'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      setMenuOpen(false) 
    }
  }

  const navLinks = [
    { label: 'About', target: 'about' },
    { label: 'Services', target: 'services' },
    { label: 'Contact Us', target: 'contact' },
    { label: 'FAQs', target: 'faq' },
  ]

  return (
    <div className='sticky top-0 z-50 bg-white shadow-md'>
      <div className="px-6 py-2 w-full flex items-center justify-between flex-wrap md:flex-nowrap shadow-md shadow-indigo-200">

        <div className="relative w-40 h-12">
          <Image
            src="/claimclam.png"
            alt="ClaimClam Logo"
            fill
            className="object-contain"
            onClick={() => scrollToSection('hero')}
          />
        </div>

        <div className='md:hidden ml-auto text-2xl cursor-pointer' onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <RxCross2 /> : <RxHamburgerMenu />}
        </div>

        <div className={`w-full md:w-auto flex-col md:flex-row md:flex items-center justify-center gap-6 md:gap-8 text-base md:text-lg mt-4 md:mt-0 ${menuOpen ? 'flex' : 'hidden'}`}>
          {navLinks.map(({ label, target }) => (
            <div
              key={target}
              className="relative font-medium cursor-pointer transition-all group"
              onClick={() => scrollToSection(target)}
            >
              <span className="group-hover:text-indigo-600">{label}</span>
              <hr className="absolute left-0 top-8 w-full h-[2px] bg-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2 ml-4">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-indigo-500">
            <Image
              src="/meditation.png"
              alt="Profile"
              width={40}
              height={40}
              className="object-cover"
            />
          </div>
          <HiDotsVertical className="text-2xl text-gray-600" />
        </div>
      </div>
    </div>
  )
}

export default Navbar
