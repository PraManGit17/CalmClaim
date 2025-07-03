import React from 'react'
import Image from 'next/image'


const Services = () => {
  return (
    <div className='w-full h-screen p-4'>
      <div className=' bg-gray-200 rounded-2xl h-full flex flex-col items-center space-y-8'>
        <div className='py-6 border mt-4 flex items-center justify-center text-5xl font-semibold'>
          Services Offered
        </div>

        <div className='py-4 px-8 w-[85%] h-[500px] flex items-center justify-center space-x-8'>

          <div className='p-6 w-[35%] h-full rounded-xl flex flex-col items-center justify-center bg-white'>
            <div className="overflow-hidden w-full h-1/2 relative">
              <Image
                src="/meditation.png"
                alt="meditation"
                fill
                className="object-contain"
              />
            </div>

            <div className='flex flex-col items-start gap-4'>
              <div className='text-2xl font-semibold'>Anxiety & Stress Management</div>
              <div className='text-md font-normal leading-relaxed'>
                Lifes demands can be overwhelming—but you dont have to face them alone. In our sessions, we will work together to understand the root of your anxiety and develop tools to manage stress with greater ease.
              </div>
              <div className='mt-2 bg-indigo-600 text-white text-sm font-medium rounded-full px-3 py-2'>Fee: $200 / individual session</div>
            </div>
          </div>

          <div className='p-6 w-[35%] h-full rounded-xl flex flex-col items-center justify-center bg-white'>
            <div className="overflow-hidden w-full h-1/2 relative">
              <Image
                src="/couple.png"
                alt="meditation"
                fill
                className="object-contain"
              />
            </div>

            <div className='flex flex-col items-start gap-4'>
              <div className='text-2xl font-semibold'>Relationship Counseling</div>
              <div className='text-md font-normal leading-relaxed'>Whether you are facing communication challenges, conflict,
                or emotional distance, relationship therapy provides a safe space to reconnect and grow. I support individuals
                and couples in building stronger.
              </div>
              <div className='mt-2 bg-indigo-600 text-white text-sm font-medium rounded-full px-3 py-2'>
                Fee: $240 / couples session</div>
            </div>
          </div>

          <div className='p-6 w-[35%] h-full rounded-xl flex flex-col items-center justify-center bg-white'>
            <div className="overflow-hidden w-full h-1/2 relative">
              <Image
                src="/trauma.png"
                alt="meditation"
                fill
                className="object-contain"
              />
            </div>

            <div className='flex flex-col items-start gap-4'>
              <div className='text-2xl font-semibold'> Trauma Recovery</div>
              <div className='text-md font-normal leading-relaxed'>
                Trauma can leave deep emotional wounds—but healing is possible. I offer a compassionate and evidence-based approach to help you process painful experiences and move forward with resilience and hope.
              </div>
              <div className='mt-2 bg-indigo-600 text-white text-sm font-medium rounded-full px-3 py-2'>Fee: $200 / individual session</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Services
