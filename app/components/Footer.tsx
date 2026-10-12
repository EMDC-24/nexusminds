"use client";
import React, { useEffect, useId } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator'; // Assuming this path is correct
import NiceModal, { useModal } from '@ebay/nice-modal-react';

// --- Services Data (kept outside as good practice) ---
const services = [
  { title: 'Cloud Consulting', path: '/services/cloud-consulting', image: '/assets/cloud-consulting.webp' },
  { title: 'Software Development', path: '/services/enterprise-software-development', image: '/assets/software-development.webp' },
  { title: 'Web Development', path: '/services/web-development', image: '/assets/web-development.jpeg' },
  { title: 'AI & ML Consulting', path: '/services/ai-ml-consulting', image: '/assets/artificial-intelligence.jpg' },
  { title: 'Mobile Development', path: '/services/mobile-development', image: '/assets/mobile-development.jpeg' },
  { title: 'ERP Consulting', path: '/services/erp-consulting', image: '/assets/erp-consulting.jpg' },
];

// --- ServicesModal Component - Fixed scroll lock, button position, preserved original styles/layout ---
const ServicesModalComponent = NiceModal.create(() => {
  const modal = useModal();
  const modalTitleId = useId(); // For ARIA

  // FIX: useEffect depends on modal.visible to correctly handle scroll lock/unlock
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
      document.body.classList.add('modal-open'); // Keep original class logic if needed

      return () => {
        document.body.style.overflow = originalOverflow;
        document.body.style.paddingRight = originalPaddingRight;
        document.body.classList.remove('modal-open');
      };
    }
  }, [modal.visible]);

  // FIX: Removed unused 'e' parameter to satisfy eslint rule
  const handleLinkClick = () => { // <-- REMOVED 'e' parameter and its type
      if (typeof document.startViewTransition === 'function') {
        document.startViewTransition(() => {
          modal.hide();
          // Navigation handled by Link component
        });
      } else {
        modal.hide();
        // Navigation handled by Link component
      }
      // Do not preventDefault to allow Link navigation
    };

  return (
    // FIX: Removed flex utils from main container to allow absolute button positioning
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={modalTitleId}
      className={`fixed inset-0 z-50 bg-black/95 backdrop-blur-md p-8 transition-opacity duration-300 ${ // Original p-8, added opacity transition
        modal.visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onClick={() => modal.hide()} // Original background click
      // Original style preserved - allows modal scroll if content overflows viewport
      style={{ overflowY: 'auto', WebkitOverflowScrolling: 'touch' }}
    >
      <h2 id={modalTitleId} className="sr-only">Services Overview</h2>

      {/* FIX: Button positioned correctly relative to top-right of viewport */}
      <button
        onClick={() => modal.hide()}
        aria-label="Close modal"
        // Original classes for positioning and style
        className="absolute top-8 right-8 text-white p-2 hover:text-white/80 z-10"
      >
        {/* Original SVG */}
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>

      {/* FIX: Add wrapper div to center the grid content */}
      <div className="flex items-center justify-center min-h-full">
          <div
            // Grid container - Preserving original classes
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full"
            // Add margin/padding *here* if needed to space grid from viewport edges/button
            // e.g., className="... mt-20 mb-8 md:mt-0 md:mb-0" if needed
            onClick={(e) => e.stopPropagation()} // Original propagation stop -> THIS 'e' IS USED
            // Removed original inline style - parent div handles scroll
          >
            {/* Map using original data structure and key */}
            {services.map((service, index) => (
              <Link
                href={service.path}
                key={index} // Using original index key
                className="group" // Original class
                style={{ viewTransitionName: `service-card-${index}` }} // Unique transition name using index
                onClick={handleLinkClick} // Use the combined hide/transition logic
              >
                 {/* Preserving original card structure and styles */}
                <div className="flex flex-col gap-6 transition-all duration-300 group-hover:scale-105">
                  <div className="aspect-video relative overflow-hidden rounded-xl shadow-lg bg-black">
                    <Image
                      src={service.image}
                      alt={service.title} // Original alt
                      fill
                      className="object-cover transition-all duration-500 group-hover:scale-110 opacity-80" // Original classes
                      sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 33vw" // Added for performance best practice
                    />
                  </div>
                  <h3 className="text-xl font-medium text-white text-center">{service.title}</h3>
                </div>
              </Link>
            ))}
          </div>
      </div> {/* End of centering wrapper */}
    </div>
  );
});


// --- Footer Component - Fixed registration, preserved original styles/layout ---
const Footer = () => {
  // FIX: Removed the isRegistered check, useEffect ensures registration runs once on mount
  useEffect(() => {
    // Register modal on mount, using original component name
    NiceModal.register('services-modal', ServicesModalComponent);
     // Optional cleanup removed as unregister isn't available/needed
     return () => {};
  }, []); // Empty dependency array = runs once on mount

  return (
    // Preserving ALL original Footer class names and structure
    <footer className="w-full pt-10 pb-5 px-10 font-light tracking-tight leading-tight">
      <div className="mx-auto">
        <div className="flex flex-col md:flex-row justify-between mb-30"> {/* Original mb-30 */}
          <div className="flex flex-col gap-5 md:w-[40%]"> {/* Original gap/width */}
            <h5 className="text-2xl text-black leading-[1.1]">Embrace the future of technology with our comprehensive skillset.</h5> {/* Original text style */}
            <div className="flex flex-row mb-10 md:mb-0 gap-5 text-md text-stone-600"> {/* Original structure/style */}
              {/* Using original h5 tags for consistency with provided code */}
              <h5>info@nexusmindstech.com</h5>
              <h5>+1 (754) 224 5368</h5>
            </div>
          </div>
          <div className="flex gap-5 justify-end md:w-[60%] flex-row"> {/* Original structure/style */}
            {/* Original Navigation structure and styling */}
            <div className="flex flex-col md:w-1/3 text-black text-2xl">
              <Link href="/">
                <h5 className="hover:text-stone-600">Home</h5>
              </Link>
              <Link href="/about">
                <h5 className="hover:text-stone-600">About</h5>
              </Link>
              {/* Original span with onClick */}
              <span className="hover:text-stone-600 cursor-pointer" onClick={() => NiceModal.show('services-modal')}>
                <h5>Services</h5>
              </span>
              <Link href="/#projects">
                <h5 className="hover:text-stone-600">Projects</h5>
              </Link>
              <Link href="/about#methodology">
                <h5 className="hover:text-stone-600">Methodology</h5>
              </Link>
              <Link href="/contact">
                <h5 className="hover:text-stone-600">Contact</h5>
              </Link>
            </div>
            {/* Original Services links structure and styling */}
            <div className="flex flex-col md:w-1/3 text-black text-2xl">
              <Link href="/services/enterprise-software-development">
                <h5 className="hover:text-stone-600">Software Development</h5>
              </Link>
              <Link href="/services/web-development">
                <h5 className="hover:text-stone-600">Web Development</h5>
              </Link>
              <Link href="/services/mobile-development">
                <h5 className="hover:text-stone-600">Mobile Development</h5>
              </Link>
              <Link href="/services/ai-ml-consulting">
                <h5 className="hover:text-stone-600">AI & ML Consulting</h5>
              </Link>
              <Link href="/services/erp-consulting">
                <h5 className="hover:text-stone-600">ERP Consulting</h5>
              </Link>
              <Link href="/services/cloud-consulting">
                <h5 className="hover:text-stone-600">Cloud Consulting</h5>
              </Link>
            </div>
          </div>
        </div>
        {/* Original Logo */}
        <div className="mt-10">
          <Image
            src="/assets/nexusfooterlogo.svg"
            alt="Nexus Footer Logo" // Original alt
            width={300} // Original width
            height={100} // Original height
            className="w-auto h-auto [filter:drop-shadow(-1.5px_-1.5px_0_rgba(0,0,0,0.9))_drop-shadow(1.5px_1.5px_0_rgba(255,255,255,0.4))_invert(0.1)_brightness(2.23)]" // Original class
            priority // Original priority
          />
        </div>
        {/* Original Separator section */}
        <div className="pt-10 pb-5">
          <Separator />
        </div>
        {/* Original Bottom bar structure and styling */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-stone-600">
          <div className="flex gap-3 md:gap-0 md:space-x-6">
            <span>© NEXUS.MINDS</span>
            <Link href="/privacy" className="hover:text-stone-900">PRIVACY POLICY</Link>
            <Link href="/terms" className="hover:text-stone-900">TERMS & CONDITIONS</Link>
          </div>
          <div className="flex gap-3 md:gap-0 md:space-x-6">
            <Link href="https://www.instagram.com/nexus.mindstechnologies/" className="hover:text-stone-900">INSTAGRAM</Link>
            <Link href="https://linkedin.com" className="hover:text-stone-900">LINKEDIN</Link>
            <Link href="https://twitter.com" className="hover:text-stone-900">X(TWITTER)</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; // Ensure Footer remains the default export