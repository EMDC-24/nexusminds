"use client";
import React, { useEffect, useId } from 'react';
import Image from 'next/image'; // Added for Modal
import Link from 'next/link'; // Added for Modal
import NiceModal, { useModal } from '@ebay/nice-modal-react'; // Added for Modal
import Header from '../components/Header';
import Button from '../components/Button'; // Keep import for OTHER buttons
import ContactForm from '../components/ContactForm';
import LightPillar from '../../components/ui/Lightpillar';

// --- RECREATED Services Data ---
const services = [
  { title: 'Cloud Consulting', path: '/services/cloud-consulting', image: '/assets/cloud-consulting.webp' },
  { title: 'Software Development', path: '/services/enterprise-software-development', image: '/assets/software-development.webp' },
  { title: 'Web Development', path: '/services/web-development', image: '/assets/web-development.jpeg' },
  { title: 'AI & ML Consulting', path: '/services/ai-ml-consulting', image: '/assets/artificial-intelligence.jpg' },
  { title: 'Mobile Development', path: '/services/mobile-development', image: '/assets/mobile-development.jpeg' },
  { title: 'ERP Consulting', path: '/services/erp-consulting', image: '/assets/erp-consulting.jpg' },
];

// --- RECREATED ServicesModal Component ---
// (Identical to the previously corrected version - scroll, button position fixed)
const HeroServicesModal = NiceModal.create(() => {
  const modal = useModal();
  const modalTitleId = useId();

  useEffect(() => {
    if (modal.visible) {
      const originalOverflow = document.body.style.overflow;
      const originalPaddingRight = document.body.style.paddingRight;
      const scrollbarWidth = window.innerWidth > document.documentElement.clientWidth
                             ? window.innerWidth - document.documentElement.clientWidth
                             : 0;
      document.body.style.overflow = 'hidden';
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }
      document.body.classList.add('modal-open');
      return () => {
        document.body.style.overflow = originalOverflow;
        document.body.style.paddingRight = originalPaddingRight;
        document.body.classList.remove('modal-open');
      };
    }
  }, [modal.visible]);

  
  const handleLinkClick = () => { // 
      if (typeof document.startViewTransition === 'function') {
        document.startViewTransition(() => {
          modal.hide();
        });
      } else {
        modal.hide();
      }
    };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={modalTitleId}
      className={`fixed inset-0 z-50 bg-black/95 backdrop-blur-md p-8 transition-opacity duration-300 ${
        modal.visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onClick={() => modal.hide()}
      style={{ overflowY: 'auto', WebkitOverflowScrolling: 'touch' }}
    >
      <h2 id={modalTitleId} className="sr-only">Services Overview</h2>
      <button
        onClick={() => modal.hide()}
        aria-label="Close modal"
        className="absolute top-8 right-8 text-white p-2 hover:text-white/80 z-10"
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
      <div className="flex items-center justify-center min-h-full">
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full"
            onClick={(e) => e.stopPropagation()} 
          >
            {services.map((service, index) => (
              <Link
                href={service.path}
                key={index}
                className="group"
                style={{ viewTransitionName: `hero-service-card-${index}` }}
                onClick={handleLinkClick} // Passes the corrected function
              >
                <div className="flex flex-col gap-6 transition-all duration-300 group-hover:scale-105">
                  <div className="aspect-video relative overflow-hidden rounded-xl shadow-lg bg-black">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-all duration-500 group-hover:scale-110 opacity-80"
                      sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 33vw"
                    />
                  </div>
                  <h3 className="text-xl font-medium text-white text-center">{service.title}</h3>
                </div>
              </Link>
            ))}
          </div>
      </div>
    </div>
  );
});


// --- Original Hero Component ---
// With button correctly styled using classes from Button component
const Hero = () => {
  // Register the RECREATED modal specific to Hero
  const heroModalId = 'hero-services-modal';
  useEffect(() => {
    NiceModal.register(heroModalId, HeroServicesModal);

    return () => {};
  }, []); // Runs once on mount

  // Function to show the modal - Correctly attached to standard button
  const showHeroServicesModal = () => {
      NiceModal.show(heroModalId);
  };

  // --- Original Hero JSX Structure ---
  // Uses standard <button> for "Services" with CORRECT styles
  return (
    <div className="relative m-3 md:m-5 rounded-2xl overflow-hidden h-fit md:h-[95vh]"> {/* Original */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <LightPillar
          topColor="#5227FF"
          bottomColor="#FF9FFC"
          intensity={1}
          rotationSpeed={1.2}
          glowAmount={0.007}
          pillarWidth={4.4}
          pillarHeight={0.4}
          noiseIntensity={1}
          pillarRotation={145}
          interactive={false}
          mixBlendMode="normal"
        />
      </div>
      <div className="relative h-full z-10 flex flex-col justify-between p-3 md:p-5"> {/* Original */}
        <Header /> {/* Original */}
        <div className="flex flex-col lg:flex-row justify-between pt-10 lg:pt-0 lg:mb-10"> {/* Original */}
          <div className="lg:w-[50%] px-5 lg:px-10 flex flex-col justify-end gap-8"> {/* Original */}
            <h1 className="text-4xl lg:text-7xl text-white font-light tracking-tight leading-tighter"> {/* Original */}
              Transforming tech solutions for a new digital age
            </h1>
            <p className="text-white/80 text-lg lg:text-xl font-light lg:mt-2"> {/* Original */}
              Unlock the power of modern technology: efficient, streamlined, and built for a digital-first world.
            </p>
            <div className="flex flex-row gap-3 mb-7 lg:mb-0"> {/* Original */}
              {/* Standard HTML button with ALL classes from Button variant="white" */}
              <button
                type="button"
                onClick={showHeroServicesModal}
                className="rounded-full text-md flex items-center justify-center px-5 py-2 text-black bg-white border-[1px] border-white cursor-pointer"
              >
                Services
              </button>
              {/* UNCHANGED Button component instance */}
              <Button variant="frost" route="/about" text="Learn More" icon/>
            </div>
          </div>
          {/* Original Form Section */}
          <div id="form here" className="lg:w-[30%] rounded-2xl bg-white mx-0 lg:mx-10 flex flex-col p-5 gap-3 lg:gap-5">
            <h2 className="text-xl lg:text-3xl font-light tracking-tight leading-tighter">
              Request a Professional Quote Today
            </h2>

            <p className="text-stone-500 text-sm lg:text-md font-light">
              Get your personalized estimate in just a few clicks — it&apos;s fast, easy, and completely free
            </p>
            <ContactForm source="homepage" submitLabel="Get an Estimate" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;