'use client';
import React, { useState } from 'react';
import { RiShieldCheckLine } from 'react-icons/ri';
import { BsLaptop, BsClock } from 'react-icons/bs';
import { MdCancel, MdOutlineEmail } from 'react-icons/md';
import { FaUserCheck } from 'react-icons/fa';
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai';
import { IoLocationOutline } from 'react-icons/io5';

const faqs = [
  {
    icon: <RiShieldCheckLine className="text-xl text-indigo-600" />,
    question: 'Do you accept insurance?',
    answer:
      'I do not accept insurance directly. However, I can provide a superbill that you may submit to your insurance provider for potential reimbursement.',
  },
  {
    icon: <BsLaptop className="text-xl text-indigo-600" />,
    question: 'Are online sessions available?',
    answer:
      'Yes, I offer virtual therapy sessions via Zoom on Mondays, Wednesdays, and Fridays from 1 PM to 5 PM.',
  },
  {
    icon: <MdCancel className="text-xl text-indigo-600" />,
    question: 'What is your cancellation policy?',
    answer:
      'Please provide at least 24 hours’ notice to cancel or reschedule your appointment to avoid a cancellation fee.',
  },
  {
    icon: <BsClock className="text-xl text-indigo-600" />,
    question: 'What are your office hours?',
    answer:
      'In-person: Tue & Thu, 10 AM–6 PM. Virtual: Mon, Wed & Fri, 1 PM–5 PM.',
  },
  {
    icon: <FaUserCheck className="text-xl text-indigo-600" />,
    question: 'How can I schedule a session?',
    answer:
      'You can book a free consult or therapy session through the contact form on this website. I will get back to you via email or phone.',
  },
  {
    icon: <MdOutlineEmail className="text-xl text-indigo-600" />,
    question: 'How do I get in touch outside of sessions?',
    answer:
      'You can reach me by email at serena@blakepsychology.com. I typically respond within 24–48 hours on business days.',
  },
  {
    icon: <IoLocationOutline className="text-xl text-indigo-600" />,
    question: 'Where is your office located?',
    answer:
      '1287 Maplewood Drive, Los Angeles, CA 90026. There is free street parking available nearby.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (

    <div className="w-full h-screen bg-gray-200 p-6">
      <div className="bg-white w-full rounded-2xl flex flex-col items-center py-8">
    
        <div className="w-[70%] flex flex-col items-center space-y-4 text-center">
          <div className="text-4xl font-semibold">Frequently Asked Questions</div>
          <div className="max-w-3xl text-md font-normal text-gray-600">
            These are commonly asked questions about therapy with Dr. Serena Blake. Feel free to explore or reach out directly if you have more questions!
          </div>
        </div>

        <div className="w-[40%] mt-10 flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <div key={index} className="w-full">
              <button
                className="w-full flex justify-between items-center text-left font-medium text-lg gap-2"
                onClick={() => toggle(index)}
              >
                <div className="flex items-center gap-3">
                  {faq.icon}
                  <span className="text-gray-900">{faq.question}</span>
                </div>
                {openIndex === index ? (
                  <AiOutlineCaretUp className="text-gray-400 text-xl" />
                ) : (
                  <AiOutlineCaretDown className="text-gray-400 text-xl" />
                )}
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="mt-2 bg-gray-100 text-md text-gray-700 rounded-xl px-4 py-1 ml-8 transition-all duration-300">
                  {faq.answer}
                </div>
              )}

              <hr className="my-3 border-gray-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
