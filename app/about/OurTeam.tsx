import React from 'react'
import Image from 'next/image'

const OurTeam = () => {
  return (
    <div className="p-5">
        <div className="flex bg-white rounded-2xl flex-col font-light py-5 pb-10 px-5 tracking-tight leading-tight text-black/85 gap-16">
        <div className="flex flex-col md:flex-row justify-between gap-6 ">
        <h2 className="text-lg pt-8 md:pt-0 md:text-xl flex-shrink-0 text-center md:text-left">Our Team</h2>
        <h5 className="text-3xl text-center md:text-justify md:text-4xl w-full md:w-[65%] leading-tight md:leading-[1.1] ">
        Nexus is led by a team of experienced, forward-thinking leaders who prioritize clarity, collaboration, and impact. They drive our vision, empower our teams, and ensure every solution we deliver is rooted in purpose and built for lasting value.
        </h5>
      </div>
      <div className="flex flex-col md:flex-row gap-10 items-stretch justify-center">
        {/* Team Member Cards */}
        <div className="w-full md:w-1/4  rounded-2xl overflow-hidden gap-3 flex flex-col">
          <div className="relative w-full aspect-square">
            <Image 
              src="/assets/ali.jpeg" 
              alt="Ali Cheema" 
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-2xl bg-top"
            />
          </div>
          <div className="p-4 text-center">
            <h3 className="text-xl font-medium">Ali Cheema</h3>
            <p className="text-gray-600">Co-Founder, Chief Executive Officer</p>
          </div>
        </div>
        <div className="w-full md:w-1/4  rounded-2xl overflow-hidden gap-3 flex flex-col">
          <div className="relative w-full aspect-square">
            <Image 
              src="/assets/ahmed.png" 
              alt="Ahmed Furqan" 
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-2xl bg-top"
            />
          </div>
          <div className="p-4 text-center">
            <h3 className="text-xl font-medium">Ahmed Furqan</h3>
            <p className="text-gray-600">Chief Financial Officer</p>
          </div>
        </div>

      
      </div>
        
      </div>
    </div>
  )
}

export default OurTeam
