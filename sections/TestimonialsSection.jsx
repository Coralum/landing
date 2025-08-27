'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    quote: "Coralum jumped in and quickly built the AI features we’d been stuck on for weeks. We went from concept to working prototype in under a month, which let us demo to investors ahead of schedule.",
    name: "Fabian Conejo",
    title: "SaaS Entrepreneur",
    company: "Alterpay",
    // image: "https://images.unsplash.com/photo-1494790108755-2616b612c8fd?w=150&h=150&fit=crop&crop=face"
  },
  // {
  //   quote: "Their RAG implementation saved us 15 hours per week in support queries. More importantly, they taught us how to maintain and scale it ourselves.",
  //   name: "Marcus Chen",
  //   title: "VP of Operations",
  //   company: "FlowTech",
  //   image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  // },
  // {
  //   quote: "From prototype to production in 3 weeks. The document parsing system processes 500+ contracts monthly, extracting key terms automatically.",
  //   name: "Lisa Rodriguez",
  //   title: "CTO",
  //   company: "LegalCore",
  //   image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  // }
];

export default function TestimonialsSection({ isVisible }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section 
      id="testimonials"
      data-animate
      className="py-24 bg-gradient-to-b from-coralum-cream to-white"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible.testimonials ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-coralum-teal mb-6">
            Trusted by Founders & CTOs
          </h2>
        </motion.div>

        <motion.div 
          className="relative"
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible.testimonials ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-white rounded-3xl shadow-2xl p-12 relative overflow-hidden">
            {/* Background Quote Icon */}
            <Quote className="absolute top-8 right-8 w-16 h-16 text-coralum-orange/10" />

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <blockquote className="text-2xl lg:text-3xl text-coralum-teal font-medium leading-relaxed mb-8">
                  "{testimonials[currentIndex].quote}"
                </blockquote>

                <div className="flex items-center justify-center space-x-4">
                  <div className="text-left">
                    <p className="text-xl font-bold text-coralum-teal">
                      {testimonials[currentIndex].name}
                    </p>
                    <p className="text-gray-600">
                      {testimonials[currentIndex].title} @ {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-center items-center space-x-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full border-coralum-teal text-coralum-teal hover:bg-coralum-teal hover:text-white"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              {/* Dots */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full ${
                      index === currentIndex 
                        ? 'bg-coralum-orange scale-125' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    onClick={() => setCurrentIndex(index)}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full border-coralum-teal text-coralum-teal hover:bg-coralum-teal hover:text-white"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}