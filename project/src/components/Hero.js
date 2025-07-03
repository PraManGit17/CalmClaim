'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

const Hero = () => {
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: 'power3.out' }
    );

    gsap.fromTo(
      subheadingRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.8, ease: 'power3.out' }
    );

    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 1.2, ease: 'expo.out' }
    );
  }, []);




  return (
    <div className="relative w-full h-[92vh]">
      <Image
        src="/home.png"
        alt="Home Wallpaper"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 text-white text-center px-4">
        <h1
          ref={headingRef}
          className="text-4xl md:text-6xl font-bold"
        >
          Find Clarity, Healing, and Balance
        </h1>

        <p
          ref={subheadingRef}
          className="mt-4 text-lg md:text-xl max-w-2xl"
        >
          Compassionate, evidence-based therapy to help you overcome anxiety, build stronger relationships, and heal from trauma.
        </p>

        <button
          ref={buttonRef}
          onClick={() => {
            const el = document.getElementById('contact');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          className="mt-6 px-6 py-3 bg-white text-gray-800 rounded-full font-semibold hover:bg-gray-900 hover:text-white transition-all"
          aria-label="Book a Free Consult"
        >
          Book a Free Consult
        </button>


      </div>
    </div >
  );
};

export default Hero;
