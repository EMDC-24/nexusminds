"use client";
import React, { useRef } from 'react'
import { Atom, Compass, Layers, Target, } from 'lucide-react';
import { FaCode, FaSyncAlt, FaCogs } from 'react-icons/fa' // Add this to your imports

import {
    AnimatedSpan,
    Terminal,
    TypingAnimation,
  } from "@/components/magicui/terminal";
import { useInView } from 'framer-motion';

const Body = () => {
  const terminalRef = useRef(null);
  const isInView = useInView(terminalRef, { once: true, margin: '-100px' });

  return (
    <div className="flex flex-col">
      <div className="p-5 font-light tracking-tight leading-tight text-black/85">
        <div className="p-5 lg:p-10 rounded-2xl bg-white flex flex-col lg:flex-row justify-between gap-5 lg:gap-0">
            <div className="w-1/5">
                <h2 className="text-3xl lg:text-4xl mb-10 lg:mb-0">The Nexus Process</h2>
            </div>
            <div className="lg:w-3/5 flex flex-col gap-5">
      <div className="flex flex-col lg:flex-row gap-5">
        <div className="p-5 lg:w-1/2 border border-stone-200 rounded-xl bg-stone-100 flex flex-col gap-5 group hover:bg-stone-900 hover:border-stone-900">
          
          <Atom className="h-8 w-8 group-hover:text-white/90 text-stone-700" />
          <h3 className="text-2xl group-hover:text-white/90 font-medium">Plan</h3>
          <p className="group-hover:text-white/90">We dive deep into your business, users, and workflows to define exactly what the software needs to do — and why. This includes mapping out features, architecture, and tech stacks aligned with your goals.</p>
        </div>

        <div className="p-5 lg:w-1/2 border border-stone-200 rounded-xl bg-stone-100 flex flex-col gap-5 group hover:bg-stone-900 hover:border-stone-900">
          
          <Compass className="h-8 w-8 group-hover:text-white/90 text-stone-700" />
          <h3 className="text-2xl group-hover:text-white/90 font-medium">Architect</h3>
          <p className="group-hover:text-white/90">We design the system inside and out — from database structure and APIs to user flows and interface wireframes — ensuring it&apos;s robust, scalable, and ready for real-world usage.</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-5">
        <div className="p-5 lg:w-1/2 border border-stone-200 rounded-xl bg-stone-100 flex flex-col gap-5 group hover:bg-stone-900 hover:border-stone-900">
          
          <Layers className="h-8 w-8 group-hover:text-white/90 text-stone-700" />
          <h3 className="text-2xl group-hover:text-white/90 font-medium">Develop</h3>
          <p className="group-hover:text-white/90">We build your product using clean, modular code and proven frameworks. Our agile approach means fast iterations, constant communication, and full transparency throughout the process.</p>
        </div>

        <div className="p-5 lg:w-1/2 border border-stone-200 rounded-xl bg-stone-100 flex flex-col gap-5 group hover:bg-stone-900 hover:border-stone-900">
          
          <Target className="h-8 w-8 group-hover:text-white/90 text-stone-700" />
          <h3 className="text-2xl group-hover:text-white/90 font-medium">Deploy & Evolve</h3>
          <p className="group-hover:text-white/90">Once launched, we monitor, test, and refine the system based on real usage. We stay on to scale, optimize, and adapt the software as your needs and business grow.</p>
        </div>
      </div>
    </div>
        </div>
    </div>
    <div className=" pb-5 px-5">
        <div className="flex  lg:p-5 flex-col lg:flex-row items-center font-light bg-white rounded-2xl  tracking-tight leading-tight text-black/85 gap-10">
        <div className="lg:w-1/2 w-full flex flex-col gap-10 p-5">
        <h4 className="text-4xl text-black">What We Do</h4>
        <h5 className="text-xl text-left">
        We don&apos;t just build software — we build the backbone of your business. Whether you&apos;re launching a product, automating internal workflows, or modernizing legacy systems, we craft scalable, high-performance solutions that are tailored to your exact needs. No templates. No shortcuts. Just clean, reliable code built to grow with you.
      <br></br><br></br>
      Our team handles everything — from backend architecture and APIs to frontend interfaces and seamless user experiences. We work fast, stay flexible, and keep you in the loop every step of the way. If you need software that feels like it was made just for you — because it was — let&apos;s build it together.
      <br></br><br></br>
      Every project starts with a deep understanding of your goals, your users, and how your business works. We collaborate closely to translate that into software that&apos;s not just functional — but intuitive, efficient, and a joy to use. Whether you&apos;re a startup or an enterprise, we&apos;re here to turn your ideas into rock-solid, production-ready systems.
      </h5>
        </div>
        <div className="rounded-2xl h-fit w-full lg:w-1/2 bg-cover bg-center bg-no-repeat" ref={terminalRef}>
        {isInView && (
        <Terminal>
      <TypingAnimation>&gt; nexus init --project custom-software</TypingAnimation>
 
      <AnimatedSpan delay={1500} className="text-green-500">
        <span>✔ Bootstrapping project environment...</span>
      </AnimatedSpan>
 
      <AnimatedSpan delay={2000} className="text-green-500">
        <span>✔ Verifying runtime: Node.js v18+ detected.</span>
      </AnimatedSpan>
 
      <AnimatedSpan delay={2500} className="text-green-500">
        <span>✔ Detecting framework: Next.js found.</span>
      </AnimatedSpan>
 
      <AnimatedSpan delay={3000} className="text-green-500">
        <span>✔ Validating design system: Tailwind CSS configured.</span>
      </AnimatedSpan>
 
      <AnimatedSpan delay={3500} className="text-green-500">
        <span>✔ Linking internal Nexus CLI tools...</span>
      </AnimatedSpan>
 
      <AnimatedSpan delay={4000} className="text-green-500">
        <span>✔ Creating project structure...</span>
      </AnimatedSpan>
 
      <AnimatedSpan delay={4500} className="text-green-500">
        <span>✔ Generating modular codebase: API, UI, Auth, DB layers</span>
      </AnimatedSpan>
 
      <AnimatedSpan delay={5000} className="text-green-500">
        <span>✔ Setting up CI/CD scaffolding...</span>
      </AnimatedSpan>
 
      <AnimatedSpan delay={5500} className="text-green-500">
        <span>✔ Integrating utility libraries: Zod, Prisma, ShadCN</span>
      </AnimatedSpan>

      <AnimatedSpan delay={6000} className="text-green-500">
        <span>✔ Initializing Git repository</span>
      </AnimatedSpan>

      <AnimatedSpan delay={6500} className="text-green-500">
        <span>✔ Running first build...</span>
      </AnimatedSpan>
 
      <AnimatedSpan delay={7000} className="text-blue-500">
        <span>ℹ Updated:</span>
        <span className="pl-2">- devops/updates.json</span>
      </AnimatedSpan>
 
      <TypingAnimation delay={7500} className="text-muted-foreground">
        Success! Project initialization completed.
      </TypingAnimation>
 
      <TypingAnimation delay={8000} className="text-muted-foreground">
        You may now deploy your product.
      </TypingAnimation>
    </Terminal>
        )}
        </div>
    </div>
    </div>
    <div className="flex flex-col font-light py-5 pb-10 px-10 tracking-tight leading-tight text-black/85 gap-16">
        <div className="flex flex-col lg:flex-row justify-between gap-6 ">
        <h2 className="text-lg pt-8 lg:pt-0 lg:text-xl flex-shrink-0 text-center lg:text-left">The Principles Behind Every Line of Code</h2>
        <h5 className="text-3xl text-center lg:text-justify lg:text-4xl w-full lg:w-[65%] leading-tight lg:leading-[1.1] ">
        Great software isn&apos;t just built — it&apos;s engineered with care, clarity, and purpose. From planning to deployment, we follow principles that prioritize performance, maintainability, and long-term impact, ensuring every product we deliver stands the test of scale and time.
        </h5>
      </div>
      <div className="flex flex-col lg:flex-row gap-10 items-stretch justify-center">
        {/* Card 1 */}
<div className="w-full lg:w-1/3 bg-white rounded-2xl p-6 flex flex-col gap-5">
  <div className="bg-gray-100 rounded-lg p-4 w-16 h-16 flex items-center justify-center">
    <FaCode className="text-5xl text-black/70" />
  </div>
  <div className="flex flex-col gap-3">
    <h5 className="text-3xl font-medium text-left">
      Engineering with Purpose
    </h5>
    <p className="text-sm text-black/65 text-left">
      We don&apos;t just ship code — we solve problems. Every decision we make is grounded in performance, usability, and long-term value. It&apos;s software that works now and scales later.
    </p>
  </div>
</div>

{/* Card 2 */}
<div className="w-full lg:w-1/3 bg-white rounded-2xl p-6 flex flex-col gap-5">
  <div className="bg-gray-100 rounded-lg p-4 w-16 h-16 flex items-center justify-center">
    <FaSyncAlt className="text-xl text-black/70" />
  </div>
  <div className="flex flex-col gap-3">
    <h5 className="text-3xl font-medium text-left">
      Agile, Always
    </h5>
    <p className="text-sm text-black/65 text-left">
      Our development process is fast, flexible, and built for change. Through tight feedback loops and iterative delivery, we stay aligned with your goals at every step.
    </p>
  </div>
</div>

{/* Card 3 */}
<div className="w-full lg:w-1/3 bg-white rounded-2xl p-6 flex flex-col gap-5">
  <div className="bg-gray-100 rounded-lg p-4 w-16 h-16 flex items-center justify-center">
    <FaCogs className="text-4xl text-black/70" />
  </div>
  <div className="flex flex-col gap-3">
    <h5 className="text-3xl font-medium text-left">
      Solutions, Not Shortcuts
    </h5>
    <p className="text-sm text-black/65 text-left">
      Off-the-shelf isn&apos;t our style. We tailor every line of code to your exact needs, ensuring the final product fits your business — not the other way around.
    </p>
  </div>
</div>
      </div>
        
      </div>
    </div>
  )
}

export default Body
