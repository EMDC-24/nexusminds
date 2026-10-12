"use client";
import React from 'react'; // Removed useRef as it's not used directly in this version, Terminal animation is removed
// Updated Lucide icons for Cloud & DevOps
import { Cloud, Server, GitBranch, Repeat } from 'lucide-react'; // Renamed Layers to LayersIcon to avoid conflict
// Updated Fa icons for Cloud & DevOps principles
import { FaCloudUploadAlt, FaCogs, FaLock } from 'react-icons/fa';
import Spline from '@splinetool/react-spline';

// Removed: AnimatedSpan, Terminal, TypingAnimation as they are not used without the terminal component
// Removed: useInView as it was for the terminal animation

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
          
          <Cloud className="h-8 w-8 group-hover:text-white/90 text-stone-700" />
          <h3 className="text-2xl group-hover:text-white/90 font-medium">Assess & Architect</h3>
          <p className="group-hover:text-white/90">We analyze your current infrastructure, workloads, and business goals to design a robust, scalable, and cost-efficient cloud strategy. This includes cloud-native architectures, migration planning, and security blueprints.</p>
        </div>

        <div className="p-5 lg:w-1/2 border border-stone-200 rounded-xl bg-stone-100 flex flex-col gap-5 group hover:bg-stone-900 hover:border-stone-900">
          
          <Server className="h-8 w-8 group-hover:text-white/90 text-stone-700" />
          <h3 className="text-2xl group-hover:text-white/90 font-medium">Provision & Automate</h3>
          <p className="group-hover:text-white/90">We implement your cloud infrastructure using Infrastructure as Code (IaC) principles for consistency and repeatability. We automate provisioning, configuration management, and operational tasks to enhance efficiency and reduce manual error.</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-5">
        <div className="p-5 lg:w-1/2 border border-stone-200 rounded-xl bg-stone-100 flex flex-col gap-5 group hover:bg-stone-900 hover:border-stone-900">
          
          <GitBranch className="h-8 w-8 group-hover:text-white/90 text-stone-700" />
          <h3 className="text-2xl group-hover:text-white/90 font-medium">Integrate & Orchestrate</h3>
          <p className="group-hover:text-white/90">We establish robust CI/CD pipelines for streamlined application delivery and integrate essential DevOps tools. Our focus is on creating a seamless workflow from code commit to production deployment, ensuring agility and quality.</p>
        </div>

        <div className="p-5 lg:w-1/2 border border-stone-200 rounded-xl bg-stone-100 flex flex-col gap-5 group hover:bg-stone-900 hover:border-stone-900">
          
          <Repeat className="h-8 w-8 group-hover:text-white/90 text-stone-700" />
          <h3 className="text-2xl group-hover:text-white/90 font-medium">Optimize & Secure</h3>
          <p className="group-hover:text-white/90">Post-deployment, we continuously monitor performance, security, and costs. We implement best practices for cloud governance, optimize resource utilization, and proactively address vulnerabilities to ensure a resilient and efficient environment.</p>
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
        We don&apos;t just manage servers — we engineer modern, resilient cloud infrastructure and streamlined DevOps practices for your business. Whether you&apos;re migrating to the cloud, optimizing existing environments, or building cloud-native applications, we craft tailored solutions that enhance agility, scalability, and security. No vendor lock-in. No over-provisioning. Just efficient, automated systems built to accelerate your innovation.
      <br></br><br></br>
      Our expert team handles the full cloud and DevOps lifecycle — from strategic planning and infrastructure automation to CI/CD implementation and ongoing managed services. We work collaboratively, embrace automation, and maintain full transparency throughout the process. If you need cloud solutions and DevOps maturity that truly empower your development and operations — because they&apos;re designed to — let’s build it together.
      <br></br><br></br>
      Every engagement starts with a deep dive into your operational needs, technical landscape, and strategic vision. We partner closely with you to implement cloud architectures and DevOps processes that are not just functional — but also cost-effective, secure, and future-proof. Whether you&apos;re a startup needing to scale fast or an enterprise seeking operational excellence, we&apos;re here to transform your infrastructure into a strategic asset.
      </h5>
        </div>
        <div className="hidden lg:block h-full w-full lg:w-1/2 "> {/* Removed ref={terminalRef} as it's not used */}
        <Spline
        scene="https://prod.spline.design/NTSKHsQEzoqdWfeI/scene.splinecode" className="scale-[220%]" 
      />
        </div>
    </div>
    </div>
    <div className="flex flex-col font-light py-5 pb-10 px-10 tracking-tight leading-tight text-black/85 gap-16">
        <div className="flex flex-col lg:flex-row justify-between gap-6 ">
        <h2 className="text-lg pt-8 lg:pt-0 lg:text-xl flex-shrink-0 text-center lg:text-left">The Principles Driving Our Cloud & DevOps Solutions</h2>
        <h5 className="text-3xl text-center lg:text-justify lg:text-4xl w-full lg:w-[65%] leading-tight lg:leading-[1.1] ">
        Effective cloud and DevOps aren&apos;t just implemented — they&apos;re engineered with foresight, automation, and security at their core. From architecture to operations, we follow principles that prioritize resilience, efficiency, and continuous improvement, ensuring every solution we deliver enables speed and stability.
        </h5>
      </div>
      <div className="flex flex-col lg:flex-row gap-10 items-stretch justify-center">
        {/* Card 1 */}
<div className="w-full lg:w-1/3 bg-white rounded-2xl p-6 flex flex-col gap-5">
  <div className="bg-gray-100 rounded-lg p-4 w-16 h-16 flex items-center justify-center">
    <FaCloudUploadAlt className="text-5xl text-black/70" />
  </div>
  <div className="flex flex-col gap-3">
    <h5 className="text-3xl font-medium text-left">
      Automation First
    </h5>
    <p className="text-sm text-black/65 text-left">
      We don&apos;t just configure systems — we codify them. Every infrastructure decision is grounded in automation, ensuring consistency, scalability, and rapid recovery. It&apos;s cloud that works smarter, not harder.
    </p>
  </div>
</div>

{/* Card 2 */}
<div className="w-full lg:w-1/3 bg-white rounded-2xl p-6 flex flex-col gap-5">
  <div className="bg-gray-100 rounded-lg p-4 w-16 h-16 flex items-center justify-center">
    <FaCogs className="text-4xl text-black/70" /> {/* Adjusted size slightly for FaCogs aesthetic */}
  </div>
  <div className="flex flex-col gap-3">
    <h5 className="text-3xl font-medium text-left">
      Continuous Delivery
    </h5>
    <p className="text-sm text-black/65 text-left">
      Our DevOps approach is fast, iterative, and built for agility. Through robust CI/CD pipelines and tight feedback loops, we enable frequent, reliable releases, keeping you ahead of the curve.
    </p>
  </div>
</div>

{/* Card 3 */}
<div className="w-full lg:w-1/3 bg-white rounded-2xl p-6 flex flex-col gap-5">
  <div className="bg-gray-100 rounded-lg p-4 w-16 h-16 flex items-center justify-center">
    <FaLock className="text-4xl text-black/70" />
  </div>
  <div className="flex flex-col gap-3">
    <h5 className="text-3xl font-medium text-left">
      Security by Design
    </h5>
    <p className="text-sm text-black/65 text-left">
      Off-the-shelf security isn&apos;t enough. We embed security into every layer of your cloud infrastructure and development lifecycle, ensuring your systems are protected proactively, not reactively.
    </p>
  </div>
</div>
      </div>
        
      </div>
    </div>
  )
}

export default Body