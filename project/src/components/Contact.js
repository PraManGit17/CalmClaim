import React from 'react'
import { MdCheckBox } from 'react-icons/md'

const Contact = () => {
  return (
    <div className='w-full h-screen'>

      <div className='flex flex-col items-center px-20 py-10 w-full h-full'>

        <div className='w-full flex items-center justify-center text-4xl font-semibold'>
          Contact Form
        </div>

        <div className='w-full h-full p-10 flex items-start justify-between'>

          <div className='flex flex-col w-1/2 h-full py-5'>
            <div className='text-5xl font-semibold w-[75%] text-indigo-600'>Fill Out The Contact Form To Reach Us</div>
            <div className='max-w-96 text-gray-500 font-normal mt-6 leading-relaxed'>Any feedback, query or enquiry; you use this form to reach us and get your doubts resolved</div>
            <div className='text-gray-500 font-normal mt-2 leading-relaxed'>We will try to get back to you in 24 hours.</div>
          </div>


          <div className='flex w-1/2 h-full px-15 py-5'>
            <form className='flex flex-col space-y-4 w-full h-full'>

              <div className='w-full flex flex-col gap-1'>
                <label className='text-mds font-semibold'>Name:</label>
                <input
                  type='text'
                  placeholder='Your Name'
                  className='border px-4 py-2 rounded-lg bg-gray-50 placeholder:font-medium text-gray-600'
                />
              </div>

              <div className='w-full flex flex-col gap-1'>
                <label className='text-md font-semibold'>Email:</label>
                <input
                  type='text'
                  placeholder='Your Email'
                  className='border px-4 py-2 rounded-lg bg-gray-50 placeholder:font-medium text-gray-600'
                />
              </div>

              <div className='w-full flex flex-col gap-1'>
                <label className='text-md font-semibold'>Phone:</label>
                <input
                  type='text'
                  placeholder='Your PhoneNo., Tel.No., etc.'
                  className='border px-4 py-2 rounded-lg bg-gray-50 placeholder:font-medium text-gray-600'
                />
              </div>


              <div className='w-full flex flex-col gap-1'>
                <label className='text-md font-semibold'>Message:</label>
                <textarea
                  rows={3}
                  cols={4}
                  placeholder='Your Qeury'
                  className='border px-4 py-2 rounded-lg bg-gray-50 placeholder:font-medium text-gray-600'
                />
              </div>

              <div className='w-full flex flex-col gap-1'>
                <label className='text-md font-semibold'>Preferred Contact Time:</label>
                <input
                  type='text'
                  placeholder='Time'
                  className='border px-4 py-2 rounded-lg bg-gray-50 placeholder:font-medium text-gray-600'
                />
              </div>

              <div className='w-full flex items-center justify-start gap-1'>
                <input
                  type='checkbox'
                  className='w-10'
                />
                <label className='text-md font-semibold'>I am not a Robot</label>
              </div>

              <div className='w-full flex items-center justify-center'>
                <button className='px-3 py-2 bg-indigo-600 w-[50%] text-white rounded-lg'>Submit</button>
              </div>


            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
