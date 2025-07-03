import React from 'react';
import {
  FaXTwitter,
  FaDiscord,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from 'react-icons/fa6';
import Image from 'next/image';
import { FaMailBulk, FaPhone } from 'react-icons/fa';
import { Mail } from 'lucide-react';


const Footer = () => {
  return (
    <footer className="bg-white border-t py-10 px-6 md:px-20 text-sm text-gray-700">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between gap-10">

        <div className="flex-1 space-y-4">
          <div className="relative w-40 h-12">
            <Image
              src="/claimclam.png"
              alt="ClaimClam Logo"
              fill
              className="object-contain"
            />
          </div>
          <p className="max-w-xs">
            Compassionate, evidence-based therapy to help you overcome anxiety, build healthier relationships, and thrive.
          </p>
          <div className="text-gray-600 text-sm">
            <p className='flex items-center gap-1'>(323) 555-0192<FaPhone /></p>
            <p className='flex items-center gap-1'>serena@blakepsychology.com<Mail size={16} /></p>
            </div>

          <div className="flex space-x-4 pt-2 text-gray-500 text-xl">
            <FaXTwitter />
            <FaDiscord />
            <FaLinkedin />
            <FaInstagram />
            <FaYoutube />
          </div>


          <div>
            <span className="inline-block mt-2 px-3 py-1 text-xs text-green-700 bg-green-100 rounded-full">
              ● Accepting new clients
            </span>
          </div>
        </div>

        <div className="flex-[2] grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-semibold mb-2 text-indigo-600">Therapy</h4>
            <ul className="space-y-1">
              <li>Anxiety & Stress</li>
              <li>Relationship Issues</li>
              <li>Trauma Recovery</li>
              <li>Virtual Sessions</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-indigo-600">Explore</h4>
            <ul className="space-y-1">
              <li>Meet Dr. Blake</li>
              <li>Office Hours</li>
              <li>Session Fees</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-indigo-600">Practice</h4>
            <ul className="space-y-1">
              <li>About</li>
              <li>Privacy Policy</li>
              <li>Client Testimonials</li>
              <li>Ethical Standards</li>
              <li>Zoom Guidelines</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-indigo-600">Support</h4>
            <ul className="space-y-1">
              <li>Contact</li>
              <li>Appointment Request</li>
              <li>Insurance Info</li>
              <li>Cancellation Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <p>© 2024 Dr. Serena Blake, PsyD — All rights reserved.</p>
        <div className="space-x-4 mt-2 md:mt-0">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms</a>
          <a href="#">Client Agreement</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
