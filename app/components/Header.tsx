"use client";
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import Button from './Button'
import { Menu, X } from 'lucide-react'
import Link from 'next/link';
import NiceModal, { useModal } from '@ebay/nice-modal-react';
import { createPortal } from "react-dom"

// Services Modal Component
const ServicesModal = NiceModal.create(() => {
  const modal = useModal();
  
  // Services data
  const services = [
    { title: 'Cloud Consulting', path: '/services/cloud-consulting', image: '/assets/cloud-consulting.webp' },
    { title: 'Software Development', path: '/services/enterprise-software-development', image: '/assets/software-development.webp' },
    { title: 'Web Development', path: '/services/web-development', image: '/assets/web-development.jpeg' },
    { title: 'AI & ML Consulting', path: '/services/ai-ml-consulting', image: '/assets/artificial-intelligence.jpg' },
    { title: 'Mobile Development', path: '/services/mobile-development', image: '/assets/mobile-development.jpeg' },
    { title: 'ERP Consulting', path: '/services/erp-consulting', image: '/assets/erp-consulting.jpg' },
  ];
  
  // Prevent scrolling when modal is open
  useEffect(() => {
    // Only lock background scroll, allow modal content to scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    // Add a class to body to indicate modal is open (optional for further styling)
    document.body.classList.add('modal-open');
    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.classList.remove('modal-open');
    }
  }, []);
  
  return (
    <div 
      className={`fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-8 ${modal.visible ? 'opacity-100' : 'opacity-0'}`}
      onClick={() => modal.hide()}
      style={{ overflowY: 'auto', WebkitOverflowScrolling: 'touch', height: '100vh' }}
    >
      {/* Close button */}
      <button 
        onClick={() => modal.hide()} 
        className="absolute top-8 right-8 text-white p-2 hover:text-white/80 z-10"
      >
        <X size={32} />
      </button>
      
      {/* Services Grid */}
      <div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full"
        onClick={(e) => e.stopPropagation()}
        style={{ overflowY: 'auto', WebkitOverflowScrolling: 'touch' }}
      >
        {services.map((service, index) => (
          <Link 
            href={service.path} 
            key={index}
            className="group"
            prefetch={true}
            style={{ viewTransitionName: 'service-card' }}
            onClick={(e) => {
              e.preventDefault();
              if (typeof document.startViewTransition === 'function') {
                document.startViewTransition(() => {
                  modal.hide();
                  window.location.href = service.path;
                });
              } else {
                modal.hide();
                window.location.href = service.path;
              }
            }}
          >
            <div className="flex flex-col gap-6 transition-all duration-300 group-hover:scale-105">
              <div className="aspect-video relative overflow-hidden rounded-xl shadow-lg bg-black">
                <Image 
                  src={service.image} 
                  alt={service.title}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-110 opacity-80"
                />
              </div>
              <h3 className="text-xl font-medium text-white text-center">{service.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
});

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Handle scroll lock when menu is open
  useEffect(() => {
    setMounted(true)
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="relative">
      {/* Desktop Header */}
      <div className="hidden md:flex flex-row justify-between px-2">
        <div className="w-[20%]">
          <Image src="/assets/nexus-fav-white.svg" alt="logo" width={40} height={40} />
        </div>
        <div className="w-[60%] flex items-center justify-center">
          <div className="w-min flex flex-row justify-between items-center gap-12 font-light text-lg rounded-full bg-white/20 backdrop-blur-sm border-[1px] border-white/30 text-white px-8 py-3">
            <Link href="/" className="hover:text-white/80">Home</Link>
            <div className="relative group flex flex-col items-center">
              <div className="hover:text-white/80">About</div>
              <div className="absolute mt-12 text-center w-48 bg-white/20 backdrop-blur-sm border-[1px] border-white/30 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Link href="/about" className="block px-4 py-2 text-white cursor-pointer">About Us</Link>
                <Link href="/about#methodology" className="block px-4 py-2 text-white cursor-pointer">Our Methodology</Link>
                <Link href="/about#our-values" className="block px-4 py-2 text-white cursor-pointer">Our Values</Link>
              </div>
            </div>
            <div 
              className="cursor-pointer hover:text-white/80"
              onClick={() => NiceModal.show(ServicesModal)}
            >
              Services
            </div>
            <Link href="/#projects" className="hover:text-white/80">Projects</Link>  
          </div>
        </div>
        <div className="w-[20%] flex items-center justify-end">
          <div className="w-min">
            <Button variant="white" route="/contact" text="Contact"/>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden rounded-full flex flex-row justify-between items-center px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30">
        <Image src="/assets/nexus-fav-white.svg" alt="logo" width={32} height={32} />
        <button onClick={toggleMenu} className="text-white">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Full Screen Mobile Menu */}
      {mounted && isMenuOpen && typeof window !== 'undefined' && createPortal(
        <div className="md:hidden fixed inset-0 z-50 bg-black/95 backdrop-blur-md">
          {/* Close button */}
          <button 
            onClick={toggleMenu} 
            className="absolute top-4 right-4 text-white p-2 hover:text-white/80"
          >
            <X size={32} />
          </button>
          <div className="h-full flex flex-col items-center justify-center space-y-8 text-white font-light">
            <Link href="/" className="text-3xl hover:text-white/80">Home</Link>
            <Link href="/about" className="text-3xl hover:text-white/80">About</Link>
            <div 
              className="text-3xl hover:text-white/80 cursor-pointer"
              onClick={() => {
                setIsMenuOpen(false); // Close mobile menu
                setTimeout(() => {
                  document.body.style.overflow = 'unset'; // Re-enable scroll for modal
                  NiceModal.show(ServicesModal);
                }, 300); // Wait for menu to close
              }}
            >
              Services
            </div>
            <Link href="/#projects" className="text-3xl hover:text-white/80">Projects</Link>
            <div className="pt-8">
              <Button variant="white" route="/contact" text="Contact"/>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  )
}

export default Header