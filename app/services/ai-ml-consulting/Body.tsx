"use client";
import React from 'react'
// Updated Lucide icons for AI/ML
import { Brain, Network, Scaling, TrendingUp } from 'lucide-react';
// Updated Fa icons for AI/ML principles
import { FaBrain, FaSyncAlt, FaShieldAlt } from 'react-icons/fa' 
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
          
          <Brain className="h-8 w-8 group-hover:text-white/90 text-stone-700" />
          <h3 className="text-2xl group-hover:text-white/90 font-medium">Discover & Strategize</h3>
          <p className="group-hover:text-white/90">We dive deep into your business objectives, data landscape, and user needs to identify high-impact AI opportunities. This includes defining clear success metrics, potential models, and data strategies aligned with your goals.</p>
        </div>

        <div className="p-5 lg:w-1/2 border border-stone-200 rounded-xl bg-stone-100 flex flex-col gap-5 group hover:bg-stone-900 hover:border-stone-900">
          
          <Network className="h-8 w-8 group-hover:text-white/90 text-stone-700" />
          <h3 className="text-2xl group-hover:text-white/90 font-medium">Model & Validate</h3>
          <p className="group-hover:text-white/90">We select and develop appropriate AI/ML models, from proof-of-concept to rigorous validation. This involves feature engineering, algorithm selection, and iterative testing to ensure accuracy, fairness, and robustness for real-world application.</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-5">
        <div className="p-5 lg:w-1/2 border border-stone-200 rounded-xl bg-stone-100 flex flex-col gap-5 group hover:bg-stone-900 hover:border-stone-900">
          
          <Scaling className="h-8 w-8 group-hover:text-white/90 text-stone-700" />
          <h3 className="text-2xl group-hover:text-white/90 font-medium">Integrate & Scale</h3>
          <p className="group-hover:text-white/90">We engineer production-ready AI solutions, integrating models seamlessly into your existing systems and workflows. Our focus is on scalability, MLOps best practices, and ensuring smooth deployment with continuous communication.</p>
        </div>

        <div className="p-5 lg:w-1/2 border border-stone-200 rounded-xl bg-stone-100 flex flex-col gap-5 group hover:bg-stone-900 hover:border-stone-900">
          
          <TrendingUp className="h-8 w-8 group-hover:text-white/90 text-stone-700" />
          <h3 className="text-2xl group-hover:text-white/90 font-medium">Monitor & Optimize</h3>
          <p className="group-hover:text-white/90">Post-deployment, we continuously monitor model performance, drift, and impact. We provide ongoing optimization, retraining, and adaptation to ensure your AI solutions evolve with your business and deliver sustained value.</p>
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
        We don&apos;t just analyze data — we unlock its strategic value for your business. Whether you&apos;re seeking predictive insights, intelligent automation, or innovative AI-driven products, we craft bespoke AI/ML solutions tailored to your unique challenges and opportunities. No generic models. No black boxes. Just transparent, impactful AI built to drive your growth.
      <br></br><br></br>
      Our expert team handles the full AI lifecycle — from data strategy and model development to deployment and operationalization. We work collaboratively, stay agile, and maintain full transparency throughout the engagement. If you need AI that truly understands and transforms your business — because it&apos;s designed to — let&apos;s innovate together.
      <br></br><br></br>
      Every engagement begins with a thorough understanding of your strategic objectives, data assets, and operational context. We partner closely with you to translate these insights into AI solutions that are not just powerful — but also practical, ethical, and seamlessly integrated. Whether you&apos;re starting your AI journey or scaling advanced initiatives, we&apos;re here to turn your data into decisive advantages.
      </h5>
        </div>
        <div className="hidden lg:block h-full w-full lg:w-1/2" >
        <Spline
        scene="https://prod.spline.design/QypHxO30Qc7ZrMLF/scene.splinecode" className="scale-[220%]" 
      />
        </div>
    </div>
    </div>
    <div className="flex flex-col font-light py-5 pb-10 px-10 tracking-tight leading-tight text-black/85 gap-16">
        <div className="flex flex-col lg:flex-row justify-between gap-6 ">
        <h2 className="text-lg pt-8 lg:pt-0 lg:text-xl flex-shrink-0 text-center lg:text-left">The Principles Guiding Our AI/ML Expertise</h2>
        <h5 className="text-3xl text-center lg:text-justify lg:text-4xl w-full lg:w-[65%] leading-tight lg:leading-[1.1] ">
        Powerful AI isn&apos;t just developed — it&apos;s cultivated with insight, rigor, and responsibility. From strategy to deployment, we follow principles that prioritize accuracy, ethical considerations, and sustainable value, ensuring every solution we deliver drives meaningful and lasting impact.
        </h5>
      </div>
      <div className="flex flex-col lg:flex-row gap-10 items-stretch justify-center">
        {/* Card 1 */}
<div className="w-full lg:w-1/3 bg-white rounded-2xl p-6 flex flex-col gap-5">
  <div className="bg-gray-100 rounded-lg p-4 w-16 h-16 flex items-center justify-center">
    <FaBrain className="text-5xl text-black/70" /> {/* Changed icon and text size based on original FaCode */}
  </div>
  <div className="flex flex-col gap-3">
    <h5 className="text-3xl font-medium text-left">
      Insight-Driven Strategy
    </h5>
    <p className="text-sm text-black/65 text-left">
      We don&apos;t just build models — we solve critical business challenges. Every solution is grounded in deep data understanding, targeted to deliver actionable insights and measurable ROI. It&apos;s AI that provides clarity now and competitive advantage later.
    </p>
  </div>
</div>

{/* Card 2 */}
<div className="w-full lg:w-1/3 bg-white rounded-2xl p-6 flex flex-col gap-5">
  <div className="bg-gray-100 rounded-lg p-4 w-16 h-16 flex items-center justify-center">
    <FaSyncAlt className="text-xl text-black/70" /> {/* Kept icon, class matches original */}
  </div>
  <div className="flex flex-col gap-3">
    <h5 className="text-3xl font-medium text-left">
      Iterative & Adaptive AI
    </h5>
    <p className="text-sm text-black/65 text-left">
      Our AI development is dynamic, responsive, and designed for evolution. Through rapid prototyping, continuous model evaluation, and feedback integration, we ensure our solutions adapt and improve in line with your evolving needs and data.
    </p>
  </div>
</div>

{/* Card 3 */}
<div className="w-full lg:w-1/3 bg-white rounded-2xl p-6 flex flex-col gap-5">
  <div className="bg-gray-100 rounded-lg p-4 w-16 h-16 flex items-center justify-center">
    <FaShieldAlt className="text-4xl text-black/70" /> {/* Changed icon and text size based on original FaCogs */}
  </div>
  <div className="flex flex-col gap-3">
    <h5 className="text-3xl font-medium text-left">
      Responsible & Robust AI
    </h5>
    <p className="text-sm text-black/65 text-left">
      Generic solutions fall short. We craft custom AI systems with a focus on fairness, transparency, and reliability, ensuring our models are not only powerful but also ethically sound and built to perform consistently.
    </p>
  </div>
</div>
      </div>
        
      </div>
    </div>
  )
}

export default Body
