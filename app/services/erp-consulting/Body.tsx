"use client";
import React from 'react';

// Updated Lucide icons for ERP Consulting
import { Briefcase, Workflow, Link2, TrendingUp } from 'lucide-react'; 
// Updated Fa icons for ERP Consulting principles
import { FaSitemap, FaUsersCog, FaShieldAlt } from 'react-icons/fa';
import Spline from '@splinetool/react-spline';

const Body = () => {
  
  return (
    <div className="flex flex-col">
      <div className="p-5 font-light tracking-tight leading-tight text-black/85">
        <div className="p-5 lg:p-10 rounded-2xl bg-white flex flex-col lg:flex-row justify-between gap-5 lg:gap-0">
            <div className="w-1/5">
                {/* Title can remain if "Nexus" is the company name */}
                <h2 className="text-3xl lg:text-4xl mb-10 lg:mb-0">The Nexus Process</h2>
            </div>
            <div className="lg:w-3/5 flex flex-col gap-5">
      <div className="flex flex-col lg:flex-row gap-5">
        <div className="p-5 lg:w-1/2 border border-stone-200 rounded-xl bg-stone-100 flex flex-col gap-5 group hover:bg-stone-900 hover:border-stone-900">
          
          <Briefcase className="h-8 w-8 group-hover:text-white/90 text-stone-700" />
          <h3 className="text-2xl group-hover:text-white/90 font-medium">Analyze & Design</h3>
          <p className="group-hover:text-white/90">We meticulously analyze your current business processes, operational challenges, and strategic objectives to design a tailored ERP solution. This includes defining system scope, module selection, and a clear implementation roadmap.</p>
        </div>

        <div className="p-5 lg:w-1/2 border border-stone-200 rounded-xl bg-stone-100 flex flex-col gap-5 group hover:bg-stone-900 hover:border-stone-900">
          
          <Workflow className="h-8 w-8 group-hover:text-white/90 text-stone-700" />
          <h3 className="text-2xl group-hover:text-white/90 font-medium">Configure & Customize</h3>
          <p className="group-hover:text-white/90">We configure and customize your chosen ERP platform to align precisely with your designed processes. This involves data migration strategies, system setup, and tailoring workflows to maximize efficiency and user adoption.</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-5">
        <div className="p-5 lg:w-1/2 border border-stone-200 rounded-xl bg-stone-100 flex flex-col gap-5 group hover:bg-stone-900 hover:border-stone-900">
          
          <Link2 className="h-8 w-8 group-hover:text-white/90 text-stone-700" />
          <h3 className="text-2xl group-hover:text-white/90 font-medium">Implement & Integrate</h3>
          <p className="group-hover:text-white/90">We seamlessly implement your ERP system, integrating it with existing applications and data sources. Our focus is on ensuring smooth data flow, comprehensive user training, and a successful go-live.</p>
        </div>

        <div className="p-5 lg:w-1/2 border border-stone-200 rounded-xl bg-stone-100 flex flex-col gap-5 group hover:bg-stone-900 hover:border-stone-900">
          
          <TrendingUp className="h-8 w-8 group-hover:text-white/90 text-stone-700" />
          <h3 className="text-2xl group-hover:text-white/90 font-medium">Support & Evolve</h3>
          <p className="group-hover:text-white/90">Post-implementation, we provide ongoing support, monitor system performance, and identify opportunities for continuous improvement. We help you adapt the ERP to evolving business needs, ensuring long-term value and operational excellence.</p>
        </div>
      </div>
    </div>
        </div>
    </div>
    <div className=" pb-5 px-5">
        <div className="flex bg-black lg:p-5 flex-col lg:flex-row items-center font-light rounded-2xl tracking-tight leading-tight text-white/85 gap-10 overflow-hidden">
        <div className="lg:w-1/2 w-full flex flex-col gap-10 p-5">
        <h4 className="text-4xl text-white">What We Do</h4>
        <h5 className="text-xl text-left">
        We don&apos;t just install software – we transform your core business operations with strategic ERP solutions. Whether you&apos;re implementing a new system, upgrading an existing one, or seeking to optimize current processes, we tailor ERP functionality to your unique business model. No one-size-fits-all approaches. Just integrated, efficient systems built to unify your enterprise.
      <br></br><br></br>
      Our expert consultants guide you through the entire ERP journey – from initial needs assessment and vendor selection to configuration, data migration, user training, and post-launch support. We work as your trusted partner, ensuring transparency and alignment with your strategic goals. If you need an ERP that centralizes data, streamlines workflows, and empowers your teams – because it’s designed to – let’s build that operational backbone together.
      <br></br><br></br>
      Every ERP project begins with a profound understanding of your end-to-end processes, your industry specifics, and your growth ambitions. We collaborate closely to translate these insights into an ERP system that&apos;s not just powerful – but also intuitive, scalable, and a catalyst for informed decision-making. Whether you&apos;re a growing SME or a large enterprise, we&apos;re here to help you harness the full potential of your ERP investment.
      </h5>
        </div>
        <div className="hidden lg:block h-full w-full lg:w-1/2 ">
        <Spline
        scene="https://prod.spline.design/9arwXV-xt3ZI2ItU/scene.splinecode" className="scale-[220%]" 
      />
        </div>
    </div>
    </div>
    <div className="flex flex-col font-light py-5 pb-10 px-10 tracking-tight leading-tight text-black/85 gap-16">
        <div className="flex flex-col lg:flex-row justify-between gap-6 ">
        <h2 className="text-lg pt-8 lg:pt-0 lg:text-xl flex-shrink-0 text-center lg:text-left">The Principles Guiding Our ERP Excellence</h2>
        <h5 className="text-3xl text-center lg:text-justify lg:text-4xl w-full lg:w-[65%] leading-tight lg:leading-[1.1] ">
        Successful ERP solutions aren&apos;t just implemented – they&apos;re strategically architected with deep business insight, user focus, and long-term vision. From planning to ongoing optimization, we follow principles that prioritize operational efficiency, data integrity, and sustainable business growth.
        </h5>
      </div>
      <div className="flex flex-col lg:flex-row gap-10 items-stretch justify-center">
        {/* Card 1 */}
<div className="w-full lg:w-1/3 bg-white rounded-2xl p-6 flex flex-col gap-5">
  <div className="bg-gray-100 rounded-lg p-4 w-16 h-16 flex items-center justify-center">
    <FaSitemap className="text-5xl text-black/70" />
  </div>
  <div className="flex flex-col gap-3">
    <h5 className="text-3xl font-medium text-left">
      Strategic Process Alignment
    </h5>
    <p className="text-sm text-black/65 text-left">
      We don&apos;t just fit your business into software – we align the ERP to your optimized processes. Every configuration is driven by your strategic goals, ensuring the system enhances workflows and delivers tangible business value.
    </p>
  </div>
</div>

{/* Card 2 */}
<div className="w-full lg:w-1/3 bg-white rounded-2xl p-6 flex flex-col gap-5">
  <div className="bg-gray-100 rounded-lg p-4 w-16 h-16 flex items-center justify-center">
    <FaUsersCog className="text-4xl text-black/70" />
  </div>
  <div className="flex flex-col gap-3">
    <h5 className="text-3xl font-medium text-left">
      User-Centric Adoption
    </h5>
    <p className="text-sm text-black/65 text-left">
      Our ERP implementations prioritize your people. Through comprehensive training, intuitive design, and change management support, we ensure high user adoption and empower your teams to leverage the system effectively.
    </p>
  </div>
</div>

{/* Card 3 */}
<div className="w-full lg:w-1/3 bg-white rounded-2xl p-6 flex flex-col gap-5">
  <div className="bg-gray-100 rounded-lg p-4 w-16 h-16 flex items-center justify-center">
    <FaShieldAlt className="text-4xl text-black/70" />
  </div>
  <div className="flex flex-col gap-3">
    <h5 className="text-3xl font-medium text-left">
      Data-Driven & Scalable
    </h5>
    <p className="text-sm text-black/65 text-left">
      Generic solutions limit growth. We build robust ERP foundations that ensure data integrity, provide actionable insights, and scale seamlessly with your business, supporting long-term success and adaptability.
    </p>
  </div>
</div>
      </div>
        
      </div>
    </div>
  )
}

export default Body