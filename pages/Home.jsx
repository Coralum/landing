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

  useEffect(() => {
    
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-coralum-cream to-white">
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