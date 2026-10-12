'use client';
import React, { useRef } from 'react';
import Service from './ServicesSection'; // Assuming ServicesSection is the correct component name
import { motion, useScroll, useTransform } from 'framer-motion';

// --- Project Data ---
const services = [
  {
    title: "Software Development",
    image: "/assets/software-development.webp",
    description: "We design and develop software tailored to your unique goals, workflows, and users. Whether it's a new product, a custom internal system, or modernizing outdated tools, our team builds scalable, high-performance solutions that drive real business value. <br></br>With a focus on clean architecture and intuitive design, we make sure your software not only works — but works well for your team and your customers. If you're looking for reliable, purpose-built tech that grows with you, you're in the right place.",
    route: "/services/enterprise-software-development"
  },
  {
    title: "Web Development",
    image: "/assets/web-development.jpeg",
    description: "Your website is often the first impression — we make sure it counts. At Nexus, we build fast, responsive, and visually polished websites that don&apos;t just look good, but perform flawlessly across all devices.<br></br>From marketing sites to complex web platforms, our design and development teams work hand-in-hand to craft digital experiences that are both functional and memorable. Whether you need to launch, refresh, or scale, we&apos;ll bring your vision to life with precision and purpose.",
    route: "/services/web-development"
  },
  {
    title: "AI & Machine Learning",
    image: "/assets/artificial-intelligence.jpg",
    description: "Harness the power of artificial intelligence to automate processes and gain valuable insights from your data.Our portfolio reflects our commitment to innovation and impact. Each project we undertake is driven by a deep understanding of our clients&apos; goals and a dedication to delivering measurable results.<br></br>Our portfolio reflects our commitment to innovation and impact. Each project we undertake is driven by a deep understanding of our clients&apos; goals and a dedication to delivering measurable results.",
    route: "/services/ai-ml-consulting"
  },
  {
    title: "Mobile Development",
    image: "/assets/mobile-development.jpeg",
    description: "We build mobile apps that feel native — because they are. Whether you're targeting iOS, Android, or both, we create fast, responsive, and user-friendly apps that deliver real value on the go.<br></br>From concept to launch, we handle the full development lifecycle with a focus on performance, design consistency, and seamless integration with your backend systems. If mobility is key to your product or service, we&apos;ll help you get it right from the start.",
    route: "/services/mobile-development"
  },
  {
    title: "ERP Consulting",
    image: "/assets/erp-consulting.jpg",
    description: "We help businesses streamline operations with the right ERP systems — tailored to fit, not forced to fit. Whether you're implementing from scratch or optimizing an existing setup, our team guides you through every stage with clarity and precision.<br></br>From finance and inventory to HR and CRM, we align your ERP with your workflows to improve efficiency, visibility, and control. If you're ready to simplify complexity and scale smarter, we&apos;re here to make it happen.",
    route: "/services/erp-consulting"
  },
  {
    title: "Cloud & DevOps",
    image: "/assets/cloud-consulting.webp",
    description: "We help you move fast, stay secure, and scale without stress. Whether you're migrating to the cloud, setting up CI/CD pipelines, or optimizing infrastructure, our team brings the tools and expertise to streamline your operations.<br></br>From AWS to Azure, containers to Kubernetes, we design cloud-native architectures and DevOps workflows that keep your systems reliable, flexible, and ready to grow. If uptime, speed, and efficiency matter — we&apos;ve got you covered.",
    route: "/services/cloud-consulting"
  },

]
// --- End Project Data ---


const OurServices = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Define useTransform calls individually at the top level
  const scaleTransform1 = useTransform(
    scrollYProgress,
    [0, 1 / services.length],
    [1, 0.85]
  );
  const scaleTransform2 = useTransform(
    scrollYProgress,
    [1 / services.length, 2 / services.length],
    [1, 0.85]
  );
  const scaleTransform3 = useTransform(
    scrollYProgress,
    [2 / services.length, 3 / services.length],
    [1, 0.85]
  );

  // Store transforms in an array for easier access in the map
  const scaleTransforms = [scaleTransform1, scaleTransform2, scaleTransform3];

  return (
    <div className="p-5">
      <div className="bg-white p-5 rounded-2xl">
      <div className="w-full font-light tracking-tight leading-tight bg-white flex flex-col gap-5 md:p-5 text-black/85">
      {/* HEADING */}
      <div className="flex flex-col md:flex-row justify-between gap-6 ">
        <h2 className="text-lg mt-10 mb-5 md:mt-0 md:mb-0 text-center md:text-left md:text-xl flex-shrink-0">Our Services</h2>
        <h5 className="text-3xl p-2 md:p-0 text-center md:text-justify md:text-4xl w-full md:w-[65%] leading-tight md:leading-[1.1] ">
        From strategy to execution, we deliver end-to-end technology solutions designed to solve real-world business challenges, enhance operational efficiency, and drive sustainable growth.
        </h5>
      </div>

      {/* STACKED PINNING CONTAINER */}
      <div
        ref={containerRef}
        className="relative h-fit"
        
      >
        {services.map((service, index) => (
            <motion.div
              key={index}
              className="sticky top-0 w-full origin-center"
              style={{
                scale: scaleTransforms[index],
                zIndex: index,
              }}
            >
              <div className="h-fit w-full flex items-center justify-center">
                <Service
                  number={`0${index + 1}`}
                  title={service.title}
                  description={service.description}
                  route={service.route}
                  dangerousHTML={true} // Assuming this prop exists and is needed
                  imageUrl={service.image}
                />
              </div>
            </motion.div>
        ))}
      </div> {/* End STACKED PINNING CONTAINER */}

    </div>
    </div>
    </div>
  );
};

export default OurServices;
