"use client";
import React from 'react';

// Updated Lucide icons for Web Development
import { Palette, Code2, Rocket, Zap } from 'lucide-react'; 
// Updated Fa icons for Web Development principles
import { FaPaintBrush, FaLaptopCode, FaSyncAlt } from 'react-icons/fa'; // FaSyncAlt for evolving/future-proof
import Spline from '@splinetool/react-spline';
import { OrbitingCirclesDemo } from './Animation';

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
          
          <Palette className="h-8 w-8 group-hover:text-white/90 text-stone-700" />
          <h3 className="text-2xl group-hover:text-white/90 font-medium">Discover & Design</h3>
          <p className="group-hover:text-white/90">We start by deeply understanding your brand, audience, and goals to craft stunning, intuitive designs. We focus on creating a visually appealing and user-centric experience that captivates and converts.</p>
        </div>

        <div className="p-5 lg:w-1/2 border border-stone-200 rounded-xl bg-stone-100 flex flex-col gap-5 group hover:bg-stone-900 hover:border-stone-900">
          
          <Code2 className="h-8 w-8 group-hover:text-white/90 text-stone-700" />
          <h3 className="text-2xl group-hover:text-white/90 font-medium">Develop & Build</h3>
          <p className="group-hover:text-white/90">Our skilled developers bring designs to life with clean, efficient code using modern technologies. We build responsive, fast-loading websites that look great and function flawlessly on all devices.</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-5">
        <div className="p-5 lg:w-1/2 border border-stone-200 rounded-xl bg-stone-100 flex flex-col gap-5 group hover:bg-stone-900 hover:border-stone-900">
          
          <Rocket className="h-8 w-8 group-hover:text-white/90 text-stone-700" />
          <h3 className="text-2xl group-hover:text-white/90 font-medium">Test & Launch</h3>
          <p className="group-hover:text-white/90">Rigorous testing across browsers and devices ensures a polished, bug-free launch. We optimize for performance and search engines, preparing your website for a successful debut and maximum impact.</p>
        </div>

        <div className="p-5 lg:w-1/2 border border-stone-200 rounded-xl bg-stone-100 flex flex-col gap-5 group hover:bg-stone-900 hover:border-stone-900">
          
          <Zap className="h-8 w-8 group-hover:text-white/90 text-stone-700" />
          <h3 className="text-2xl group-hover:text-white/90 font-medium">Optimize & Grow</h3>
          <p className="group-hover:text-white/90">Post-launch, we offer ongoing support, performance monitoring, and optimization services. We help your website evolve with your business, implement new features, and stay ahead in the digital landscape.</p>
        </div>
      </div>
    </div>
        </div>
    </div>
    <div className=" pb-5 px-5">
        <div className="flex bg-white  lg:p-5 flex-col lg:flex-row items-center font-light  rounded-2xl  tracking-tight leading-tight text-black/85 gap-10">
        <div className="lg:w-1/2 w-full flex flex-col gap-10 p-5">
        <h4 className="text-4xl text-black">What We Do</h4>
        <h5 className="text-xl text-left">
        We don&apos;t just build websites – we craft digital experiences that are both beautiful and exceptionally functional. Whether you need a captivating marketing site, a robust e-commerce platform, or a dynamic web application, we tailor every pixel and line of code to reflect your brand and engage your audience. No cookie-cutter templates. Just stunning, high-performing websites designed to achieve your business objectives.
      <br></br><br></br>
      Our talented team handles the entire web development lifecycle – from initial strategy and UI/UX design to frontend and backend development, and ongoing maintenance. We collaborate closely with you, ensuring a transparent and agile process. If you need a website that not only looks incredible but also delivers tangible results – because it’s meticulously crafted to do so – let’s create your online masterpiece together.
      <br></br><br></br>
      Every project begins with a creative vision and a strategic understanding of your market and users. We translate this into websites that are not only visually striking but also intuitive to navigate, fast-loading, and optimized for conversions. Whether you&apos;re launching a new brand or revitalizing an existing online presence, we&apos;re here to build a beautiful and functional website that sets you apart.
      </h5>
        </div>
        <div className="hidden lg:block h-full w-full lg:w-1/2 ">
        <OrbitingCirclesDemo />
        </div>
    </div>
    </div>
    <div className="relative w-full my-10 min-h-screen max-h-screen overflow-hidden">
    {/* Spline Background Layer */}
    <div className="absolute inset-0 z-0">
        <Spline
            scene="https://prod.spline.design/J3Nhl6CPghiMLidB/scene.splinecode" 
            className="w-full h-full scale-[200%]" // Scale applied to the spline component itself
        />
    </div>

    {/* Text Overlay Layer */}
    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-4">
        <h2 className=" text-4xl lg:text-7xl  font-medium font-serif text-white/75 text-center ">
            Our work speaks for itself
        </h2>
        {/* Optional: Add a subtle sub-heading or a CTA button if context7 implies more than just color */}
        {/* <p className="text-white/80 text-lg lg:text-xl mt-4 [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
            Explore our portfolio to see more.
        </p> */}
    </div>
</div>
    <div className="flex flex-col font-light py-5 pb-10 px-10 tracking-tight leading-tight text-black/85 gap-16">
        <div className="flex flex-col lg:flex-row justify-between gap-6 ">
        <h2 className="text-lg pt-8 lg:pt-0 lg:text-xl flex-shrink-0 text-center lg:text-left">The Principles Behind Every Beautiful<br></br> & Functional Website</h2>
        <h5 className="text-3xl text-center lg:text-justify lg:text-4xl w-full lg:w-[65%] leading-tight lg:leading-[1.1] ">
        Great websites aren&apos;t just coded – they&apos;re meticulously designed and engineered with creativity, precision, and user delight in mind. From concept to deployment, we follow principles that prioritize stunning aesthetics, seamless functionality, and lasting digital impact.
        </h5>
      </div>
      <div className="flex flex-col lg:flex-row gap-10 items-stretch justify-center">
        {/* Card 1 */}
<div className="w-full lg:w-1/3 bg-white rounded-2xl p-6 flex flex-col gap-5">
  <div className="bg-gray-100 rounded-lg p-4 w-16 h-16 flex items-center justify-center">
    <FaPaintBrush className="text-5xl text-black/70" />
  </div>
  <div className="flex flex-col gap-3">
    <h5 className="text-3xl font-medium text-left">
      Design That Captivates
    </h5>
    <p className="text-sm text-black/65 text-left">
      We don&apos;t just make sites look good – we create immersive user experiences. Every design decision is purposeful, focusing on visual appeal, brand consistency, and intuitive navigation to engage and convert visitors.
    </p>
  </div>
</div>

{/* Card 2 */}
<div className="w-full lg:w-1/3 bg-white rounded-2xl p-6 flex flex-col gap-5">
  <div className="bg-gray-100 rounded-lg p-4 w-16 h-16 flex items-center justify-center">
    <FaLaptopCode className="text-4xl text-black/70" />
  </div>
  <div className="flex flex-col gap-3">
    <h5 className="text-3xl font-medium text-left">
      Functionality That Performs
    </h5>
    <p className="text-sm text-black/65 text-left">
      Our development is agile, leveraging modern tech for responsive, fast, and accessible websites. We ensure flawless performance across all devices, providing a seamless experience for every user.
    </p>
  </div>
</div>

{/* Card 3 */}
<div className="w-full lg:w-1/3 bg-white rounded-2xl p-6 flex flex-col gap-5">
  <div className="bg-gray-100 rounded-lg p-4 w-16 h-16 flex items-center justify-center">
    <FaSyncAlt className="text-4xl text-black/70" />
  </div>
  <div className="flex flex-col gap-3">
    <h5 className="text-3xl font-medium text-left">
      Solutions That Evolve
    </h5>
    <p className="text-sm text-black/65 text-left">
      Cookie-cutter sites aren&apos;t our style. We build custom, scalable web solutions with clean code, ensuring your site can grow with your business and adapt to future needs, all while being easy to manage.
    </p>
  </div>
</div>
      </div>
        
      </div>
    </div>
  )
}

export default Body