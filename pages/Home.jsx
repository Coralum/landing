'use client';

import React, { useState, useEffect } from 'react';

import HeroSection from '@/sections/HeroSection';
import ProblemSection from '@/sections/ProblemSection';
import ApproachSection from '@/sections/ApproachSection';
import ServicesSection from '@/sections/ServicesSection';
import ProcessSection from '@/sections/ProcessSection';
import TestimonialsSection from '@/sections/TestimonialsSection';
import CtaSection from '@/sections/CTASection';
import Footer from '@/sections/Footer';

export default function Home() {
  const [isVisible, setIsVisible] = useState({});
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    // Force hydration for static export
    setIsHydrated(true);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Don't render until hydrated to prevent hydration mismatch
  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#f9f8eb] to-white">
        <div className="flex items-center justify-center h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#fe5620]"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f9f8eb] to-white">
      <HeroSection />
      <ProblemSection isVisible={isVisible} />
      <ApproachSection isVisible={isVisible} />
      <ServicesSection isVisible={isVisible} />
      <ProcessSection isVisible={isVisible} />
      <TestimonialsSection isVisible={isVisible} />
      <CtaSection isVisible={isVisible} />
      <Footer />
    </div>
  );
}