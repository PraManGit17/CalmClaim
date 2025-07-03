'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { FaUserTie, FaLaptopHouse } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import { RiHeartPulseLine } from "react-icons/ri";
import { AiOutlineCalendar } from "react-icons/ai";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-image", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 40%",
        },
      });

      gsap.from(".about-box", {
        opacity: 0,
        y: 60,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 25%",
        },
      });
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={aboutRef} className="w-full min-h-screen bg-white py-5 px-4 md:px-12 flex flex-col items-center">
      <div className="text-3xl md:text-5xl font-bold text-black text-center mt-12 italic">
        “Meet Your Doctor”
      </div>

      <div className="w-full flex flex-col md:flex-row md:justify-between mt-8 gap-y-12">

        <div className="flex flex-col items-center justify-center space-y-14 w-full">
          <div className="about-box flex flex-col items-center justify-center w-[75%] text-center">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-indigo-600 text-[#fff] shadow-md text-3xl">
              <FaUserTie />
            </div>
            <div className="font-semibold text-lg text-indigo-600 mt-2">8+ Years of Experience</div>
            <div className="text-sm text-gray-700 mt-1">
              Dr. Blake has been in private practice for over eight years, helping hundreds of clients build healthier lives.
            </div>
          </div>

          <div className="about-box flex flex-col items-center justify-center w-[75%] text-center">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-indigo-600 text-[#fff] shadow-md text-3xl">
              <FaLaptopHouse />
            </div>
            <div className="font-semibold text-lg text-indigo-600 mt-2">In-Person & Online</div>
            <div className="text-sm text-gray-700 mt-1">
              Available in Los Angeles or virtually via Zoom, with flexible weekday hours to fit your schedule.
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-8 w-full mt-6 md:mt-0">
          <div className="about-image flex flex-col items-center justify-end w-[70%] h-[400px]">
            <div className="overflow-hidden w-full h-full relative">
              <Image
                src="/DrSerena.png"
                alt="Dr. Serena Blake"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-center mt-4">Dr. Serena Blake</h2>
            <p className="text-sm text-gray-700 font-medium text-center">PsyD (Clinical Psychologist)</p>
          </div>

          <div className="about-box flex flex-col items-center justify-center w-[75%] text-center">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-indigo-600 text-[#fff] shadow-md text-3xl">
              <RiHeartPulseLine />
            </div>
            <div className="font-semibold text-lg text-indigo-600 mt-2">Personalized Care</div>
            <div className="text-sm text-gray-700 mt-1">
              Her warm, non-judgmental style makes clients feel safe and supported in their healing journey.
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center space-y-14 w-full mt-6 md:mt-0 p-2">
          <div className="about-box flex flex-col items-center justify-center w-[75%] text-center">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-indigo-600 text-[#fff] shadow-md text-3xl">
              <BsPeopleFill />
            </div>
            <div className="font-semibold text-lg text-indigo-600 mt-2">500+ Therapy Sessions</div>
            <div className="text-sm text-gray-700 mt-1">
              With over 500 client sessions, she brings deep insight, experience, and compassion to every session.
            </div>
          </div>

          <div className="about-box flex flex-col items-center justify-center w-[75%] text-center">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-indigo-600 text-[#fff] shadow-md text-3xl">
              <AiOutlineCalendar />
            </div>
            <div className="font-semibold text-lg text-indigo-600 mt-2">Flexible Scheduling</div>
            <div className="text-sm text-gray-700 mt-1">
              Choose in-person sessions on Tue & Thu or Zoom therapy on Mon, Wed & Fri, 1 to 5 PM.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
