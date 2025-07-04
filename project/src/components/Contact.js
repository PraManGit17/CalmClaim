'use client'

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MdCheckBox } from 'react-icons/md';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    contactTime: '',
    notRobot: false,
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const sectionRef = useRef(null);
  const leftTextRef = useRef(null);
  const formFieldsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(leftTextRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 30%',
        },
      });

      gsap.from(formFieldsRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 20%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Valid email required';
    if (!form.phone.trim()) newErrors.phone = 'Phone is required';
    if (!form.message.trim()) newErrors.message = 'Message is required';
    if (!form.contactTime.trim()) newErrors.contactTime = 'Preferred time is required';
    if (!form.notRobot) newErrors.notRobot = 'Please verify you are not a robot';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      console.log('Form Submitted:', form);
      setSubmitted(true);
      alert("✅ Form submitted successfully!");
    } else {
      setErrors(formErrors);
      setSubmitted(false);
    }
  };

  return (
    <div ref={sectionRef} className='w-full min-h-screen'>
      <div className='flex flex-col items-center px-4 sm:px-10 lg:px-20 py-10 w-full h-full'>
        <div className='w-full flex items-center justify-center text-3xl sm:text-4xl font-semibold text-center mt-10'>
          Contact Form
        </div>

        <div className='w-full h-full flex flex-col lg:flex-row items-start justify-between gap-10 mt-10'>
          {/* LEFT TEXT SECTION */}
          <div ref={leftTextRef} className='flex flex-col w-full lg:w-1/2 h-full py-5'>
            <div className='text-3xl sm:text-4xl font-semibold text-indigo-600 w-full'>
              Fill Out The Contact Form To Reach Us
            </div>
            <div className='text-gray-500 font-normal mt-6 leading-relaxed'>
              Any feedback, query or enquiry; use this form to reach us and get your doubts resolved.
            </div>
            <div className='text-gray-500 font-normal mt-2 leading-relaxed'>
              We will try to get back to you in 24 hours.
            </div>
          </div>

          {/* FORM */}
          <div className='flex w-full lg:w-1/2 h-full'>
            <form className='flex flex-col space-y-4 w-full h-full' onSubmit={handleSubmit}>
              {[
                <div key='name' className='w-full flex flex-col gap-1'>
                  <label className='text-md font-semibold'>Name:</label>
                  <input
                    type='text'
                    name='name'
                    placeholder='Your Name'
                    value={form.name}
                    onChange={handleChange}
                    className='border px-4 py-2 rounded-lg bg-gray-50 placeholder:font-medium text-gray-600'
                  />
                  {errors.name && <span className="text-sm text-red-500">{errors.name}</span>}
                </div>,

                <div key='email' className='w-full flex flex-col gap-1'>
                  <label className='text-md font-semibold'>Email:</label>
                  <input
                    type='email'
                    name='email'
                    placeholder='Your Email'
                    value={form.email}
                    onChange={handleChange}
                    className='border px-4 py-2 rounded-lg bg-gray-50 placeholder:font-medium text-gray-600'
                  />
                  {errors.email && <span className="text-sm text-red-500">{errors.email}</span>}
                </div>,

                <div key='phone' className='w-full flex flex-col gap-1'>
                  <label className='text-md font-semibold'>Phone:</label>
                  <input
                    type='text'
                    name='phone'
                    placeholder='Your PhoneNo., Tel.No., etc.'
                    value={form.phone}
                    onChange={handleChange}
                    className='border px-4 py-2 rounded-lg bg-gray-50 placeholder:font-medium text-gray-600'
                  />
                  {errors.phone && <span className="text-sm text-red-500">{errors.phone}</span>}
                </div>,

                <div key='message' className='w-full flex flex-col gap-1'>
                  <label className='text-md font-semibold'>Message:</label>
                  <textarea
                    name='message'
                    rows={3}
                    placeholder='Your Query'
                    value={form.message}
                    onChange={handleChange}
                    className='border px-4 py-2 rounded-lg bg-gray-50 placeholder:font-medium text-gray-600'
                  />
                  {errors.message && <span className="text-sm text-red-500">{errors.message}</span>}
                </div>,

                <div key='contactTime' className='w-full flex flex-col gap-1'>
                  <label className='text-md font-semibold'>Preferred Contact Time:</label>
                  <input
                    type='text'
                    name='contactTime'
                    placeholder='Time'
                    value={form.contactTime}
                    onChange={handleChange}
                    className='border px-4 py-2 rounded-lg bg-gray-50 placeholder:font-medium text-gray-600'
                  />
                  {errors.contactTime && <span className="text-sm text-red-500">{errors.contactTime}</span>}
                </div>,

                <div key='checkbox' className='w-full flex items-center gap-2'>
                  <input
                    type='checkbox'
                    name='notRobot'
                    checked={form.notRobot}
                    onChange={handleChange}
                  />
                  <label className='text-md font-semibold'>I am not a Robot</label>
                  {errors.notRobot && <span className="text-sm text-red-500 ml-2">{errors.notRobot}</span>}
                </div>,
              ].map((field, i) => (
                <div key={i} ref={(el) => (formFieldsRef.current[i] = el)}>
                  {field}
                </div>
              ))}

              {/* Submit Button */}
              <div ref={(el) => (formFieldsRef.current[formFieldsRef.current.length] = el)} className='w-full flex items-center justify-center'>
                <button type='submit' className='px-3 py-2 bg-indigo-600 w-[70%] sm:w-[50%] text-white rounded-lg'>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
