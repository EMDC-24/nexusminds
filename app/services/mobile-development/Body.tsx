"use client";
import React from 'react';

// Updated Lucide icons for Mobile Development
import { Compass, PenTool, Smartphone, Rocket } from 'lucide-react'; 
// Updated Fa icons for Mobile Development principles
import { FaMobileAlt, FaSyncAlt, FaTachometerAlt } from 'react-icons/fa';
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
          
          <Compass className="h-8 w-8 group-hover:text-white/90 text-stone-700" />
          <h3 className="text-2xl group-hover:text-white/90 font-medium">Discover & Strategize</h3>
          <p className="group-hover:text-white/90">We dive deep into your app vision, target audience, and market landscape. Our strategic planning defines core features, platform choice (iOS, Android, Cross-Platform), and a clear roadmap for mobile success.</p>
        </div>

        <div className="p-5 lg:w-1/2 border border-stone-200 rounded-xl bg-stone-100 flex flex-col gap-5 group hover:bg-stone-900 hover:border-stone-900">
          
          <PenTool className="h-8 w-8 group-hover:text-white/90 text-stone-700" />
          <h3 className="text-2xl group-hover:text-white/90 font-medium">Design & Prototype</h3>
          <p className="group-hover:text-white/90">Our UI/UX experts craft stunning, intuitive interfaces. We create interactive prototypes to refine the user journey, ensuring your app is both beautiful and highly usable, maximizing engagement.</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-5">
        <div className="p-5 lg:w-1/2 border border-stone-200 rounded-xl bg-stone-100 flex flex-col gap-5 group hover:bg-stone-900 hover:border-stone-900">
          
          <Smartphone className="h-8 w-8 group-hover:text-white/90 text-stone-700" />
          <h3 className="text-2xl group-hover:text-white/90 font-medium">Develop & Test</h3>
          <p className="group-hover:text-white/90">Skilled developers build your app using robust, modern technologies for native or cross-platform performance. Comprehensive testing ensures a polished, bug-free, and reliable mobile experience.</p>
        </div>

        <div className="p-5 lg:w-1/2 border border-stone-200 rounded-xl bg-stone-100 flex flex-col gap-5 group hover:bg-stone-900 hover:border-stone-900">
          
          <Rocket className="h-8 w-8 group-hover:text-white/90 text-stone-700" />
          <h3 className="text-2xl group-hover:text-white/90 font-medium">Deploy & Optimize</h3>
          <p className="group-hover:text-white/90">We handle seamless app store submissions (Apple App Store, Google Play). Post-launch, we offer support, ASO, and analytics-driven optimization to fuel user acquisition and sustained app growth.</p>
        </div>
      </div>
    </div>
        </div>
    </div>
    <div className=" pb-5 px-5 overflow-hidden">
        <div className="flex bg-black  lg:p-5 flex-col lg:flex-row items-center font-light  rounded-2xl  tracking-tight leading-tight text-white/85 gap-10">
        <div className="lg:w-1/2 w-full flex flex-col gap-10 p-5">
        <h4 className="text-4xl text-white">What We Do</h4>
        <h5 className="text-xl text-left">
        We don&apos;t just build apps – we craft transformative mobile experiences. Whether you need a native iOS or Android app, a versatile cross-platform solution, or want to revitalize an existing mobile presence, we tailor our development to your unique vision and audience. No cookie-cutter apps. Just innovative, user-centric mobile solutions built to elevate your brand.
      <br></br><br></br>
      Our expert mobile strategists, designers, and developers guide you through the entire app lifecycle – from initial ideation and market research to UI/UX design, robust development, rigorous testing, and successful app store launch. We work as your dedicated mobile partner, ensuring transparency and alignment with your business objectives. If you need an app that captivates users, drives engagement, and delivers measurable results – because it&apos;s engineered to – let&apos;s build that digital future together.
      <br></br><br></br>
      Every mobile app project begins with a profound understanding of your target users, your market positioning, and your growth ambitions. We collaborate closely to translate these insights into a mobile application that&apos;s not just technologically sound – but also intuitive, scalable, and a catalyst for expanding your reach and impact. Whether you&apos;re a startup aiming to disrupt or an enterprise seeking to innovate, we&apos;re here to help you harness the full potential of mobile technology.
      </h5>
        </div>
        <div className="hidden lg:block h-full w-full lg:w-1/2 ">
        <Spline
        scene="https://prod.spline.design/AKli4pQOmgLAv4Tk/scene.splinecode" className="scale-[220%]" 
      />
        </div>
    </div>
    </div>
    <div className="flex flex-col font-light py-5 pb-10 px-10 tracking-tight leading-tight text-black/85 gap-16">
        <div className="flex flex-col lg:flex-row justify-between gap-6 ">
        <h2 className="text-lg pt-8 lg:pt-0 lg:text-xl flex-shrink-0 text-center lg:text-left">The Principles Powering Our Mobile Innovation</h2>
        <h5 className="text-3xl text-center lg:text-justify lg:text-4xl w-full lg:w-[65%] leading-tight lg:leading-[1.1] ">
        Exceptional mobile apps aren&apos;t just coded – they&apos;re strategically designed with user empathy, cutting-edge technology, and a clear vision for market success. From concept to launch and beyond, we follow principles that prioritize user engagement, technical excellence, and sustainable app growth.
        </h5>
      </div>
      <div className="flex flex-col lg:flex-row gap-10 items-stretch justify-center">
        {/* Card 1 */}
<div className="w-full lg:w-1/3 bg-white rounded-2xl p-6 flex flex-col gap-5">
  <div className="bg-gray-100 rounded-lg p-4 w-16 h-16 flex items-center justify-center">
    <FaMobileAlt className="text-5xl text-black/70" />
  </div>
  <div className="flex flex-col gap-3">
    <h5 className="text-3xl font-medium text-left">
      User-First Design & UX
    </h5>
    <p className="text-sm text-black/65 text-left">
      Your users are paramount. We ground every design in thorough user research and UX best practices, creating intuitive, accessible, and delightful mobile experiences that resonate and retain.
    </p>
  </div>
</div>

{/* Card 2 */}
<div className="w-full lg:w-1/3 bg-white rounded-2xl p-6 flex flex-col gap-5">
  <div className="bg-gray-100 rounded-lg p-4 w-16 h-16 flex items-center justify-center">
    <FaSyncAlt className="text-4xl text-black/70" />
  </div>
  <div className="flex flex-col gap-3">
    <h5 className="text-3xl font-medium text-left">
      Agile / Iterative Development
    </h5>
    <p className="text-sm text-black/65 text-left">
      We embrace agility for flexibility and speed. Through iterative cycles, transparent communication, and continuous feedback, we build adaptable apps that quickly respond to market needs and user insights.
    </p>
  </div>
</div>

{/* Card 3 */}
<div className="w-full lg:w-1/3 bg-white rounded-2xl p-6 flex flex-col gap-5">
  <div className="bg-gray-100 rounded-lg p-4 w-16 h-16 flex items-center justify-center">
    <FaTachometerAlt className="text-4xl text-black/70" />
  </div>
  <div className="flex flex-col gap-3">
    <h5 className="text-3xl font-medium text-left">
      Performance & Scalability
    </h5>
    <p className="text-sm text-black/65 text-left">
      Future-proof your app. We engineer for speed, stability, and growth, using clean code and robust architectures to deliver high-performing apps that scale seamlessly with your user base.
    </p>
  </div>
</div>
      </div>
        
      </div>
    </div>
  )
}

export default Body