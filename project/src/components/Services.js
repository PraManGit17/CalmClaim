'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Services = () => {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const cardRefs = useRef([])

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      }
    )

    gsap.fromTo(
      cardRefs.current,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 50%',
        },
      }
    )
  }, [])

  return (
    <div ref={sectionRef} className='w-full min-h-screen p-4'>
      <div className='bg-gray-200 rounded-2xl min-h-screen flex flex-col items-center'>

        <div ref={headingRef} className='py-6 mt-10 flex flex-col items-center justify-center'>
          <div className='text-4xl md:text-5xl font-semibold text-center'>Empowering Your Path to Healing</div>
          <p className='text-sm mt-2 text-gray-600 text-center'>Explore therapeutic support tailored to your emotional well-being.</p>
        </div>

        <div className='py-4 px-4 md:px-8 w-full flex flex-wrap justify-center gap-8'>
          <div
            ref={(el) => (cardRefs.current[0] = el)}
            className='p-6 w-full md:w-[30%] h-auto rounded-xl flex flex-col items-center justify-center bg-white hover:-translate-y-2 hover:bg-indigo-100 hover:mb-10 transition-all duration-300 ease-in-out'
          >
            <div className="overflow-hidden w-full h-48 relative">
              <Image
                src="/meditation.png"
                alt="meditation"
                fill
                className="object-contain"
              />
            </div>

            <div className='flex flex-col items-start gap-4 mt-4'>
              <div className='text-2xl font-semibold'>Anxiety & Stress Management</div>
              <div className='text-md font-normal leading-relaxed'>
                Lifes demands can be overwhelming—but you dont have to face them alone. In our sessions, we will work together to understand the root of your anxiety and develop tools to manage stress with greater ease.
              </div>
              <div className='mt-2 bg-indigo-600 text-white text-sm font-medium rounded-full px-3 py-2'>
                Fee: $200 / individual session
              </div>
            </div>
          </div>

          <div
            ref={(el) => (cardRefs.current[1] = el)}
            className='p-6 w-full md:w-[30%] h-auto rounded-xl flex flex-col items-center justify-center bg-white hover:-translate-y-2 hover:bg-indigo-100  hover:mb-10 transition-all duration-300 ease-in-out'
          >
            <div className="overflow-hidden w-full h-48 relative">
              <Image
                src="/couple.png"
                alt="meditation"
                fill
                className="object-contain"
              />
            </div>

            <div className='flex flex-col items-start gap-4 mt-4'>
              <div className='text-2xl font-semibold'>Relationship Counseling</div>
              <div className='text-md font-normal leading-relaxed'>
                Whether you are facing communication challenges, conflict,
                or emotional distance, relationship therapy provides a safe space to reconnect and grow. I support individuals
                and couples in building stronger.
              </div>
              <div className='mt-2 bg-indigo-600 text-white text-sm font-medium rounded-full px-3 py-2'>
                Fee: $240 / couples session
              </div>
            </div>
          </div>

          <div
            ref={(el) => (cardRefs.current[2] = el)}
            className='p-6 w-full md:w-[30%] h-auto rounded-xl flex flex-col items-center justify-center bg-white hover:-translate-y-2 hover:bg-indigo-100  hover:mb-10  transition-all duration-300 ease-in-out'
          >
            <div className="overflow-hidden w-full h-48 relative">
              <Image
                src="/trauma.png"
                alt="meditation"
                fill
                className="object-contain"
              />
            </div>

            <div className='flex flex-col items-start gap-4 mt-4'>
              <div className='text-2xl font-semibold'> Trauma Recovery</div>
              <div className='text-md font-normal leading-relaxed'>
                Trauma can leave deep emotional wounds—but healing is possible. I offer a compassionate and evidence-based approach to help you process painful experiences and move forward with resilience and hope.
              </div>
              <div className='mt-2 bg-indigo-600 text-white text-sm font-medium rounded-full px-3 py-2'>
                Fee: $200 / individual session
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
