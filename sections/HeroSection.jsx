'use client';

import React from 'react';
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection() {


  return (
    <section className="relative min-h-screen flex w-full py-10" id="hero">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 left-0 right-0">
        <img 
          src="https://images.unsplash.com/photo-1583212292454-1fe6229603b7?q=80&w=2000" 
          // src="https://images.unsplash.com/photo-1582623838120-455da222cdc7?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          // src="https://plus.unsplash.com/premium_photo-1661812071978-771a70ca1516?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          // src="https://images.unsplash.com/photo-1682687981907-170c006e3744?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          // src="https://plus.unsplash.com/premium_photo-1661841439995-1706237c83dc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Thriving coral reef ecosystem"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-coralum-teal/90 via-coralum-teal/70 to-coralum-teal/40"></div>
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-coralum-dark to-transparent"></div>
      </div>



      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 sm:gap-4 lg:gap-12 items-start sm:items-center">
        {/* Left Content */}
        <div className="text-white">
          <div className="mb-6">
            <img 
              src="/coralum.png" 
              alt="Coralum Logo" 
              className="w-64 md:w-80 rounded-2xl"
            />
          </div>
          
          <h1 className="font-croogla text-4xl sm:text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Craft Adaptive
            <span className="block text-coralum-coral">AI Workflows</span>
            <span className="block text-xl sm:text-2xl lg:text-3xl font-normal opacity-90">
              Tailored To Your SaaS
            </span>
          </h1>

          <p className="hidden sm:block text-lg sm:text-xl lg:text-2xl mb-6 opacity-90 leading-relaxed max-w-2xl">
          We transform scattered tools into connected AI ecosystems that unlock growth and efficiency.
          </p>
        </div>

        {/* Right Content - Contact Form */}
        <div className="bg-coralum-light/95 backdrop-blur-sm rounded-3xl pt-4 p-6 sm:p-6 lg:p-8 shadow-2xl border border-white/20 w-full max-w-sm md:max-w-none lg:max-w-none">
          <div>
            <h3 className="font-croogla text-xl sm:text-2xl font-bold text-coralum-teal mb-2">Supercharge Your AI Journey</h3>
            <p className="text-sm sm:text-base text-gray-600 mb-3">Get a personalized consultation with our founder and structure a roadmap to get the most out of your investments.</p>
            <div className="w-full aspect-video rounded-2xl bg-black/20 backdrop-blur-sm shadow-2xl mb-4">
              <motion.div 
                className="w-full h-full rounded-xl overflow-hidden shadow-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/tPBNNkIsApE?si=lBlMoJv7wWwUnnTq" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                />
               </motion.div>
             </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <Button 
                size="lg"
                className="bg-coralum-orange hover:bg-coralum-coral-dark text-white px-6 sm:px-8 py-4 text-base sm:text-lg font-semibold rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 w-full transition-all duration-300 ease-out"
                onClick={() => {
                  window.open('https://calendar.app.google/PzAQecVTNGDXEorz5', '_blank');
                }}
              >
                <span className="inline">Book a call</span>
                <Calendar className="w-5 h-5 ml-3" />
              </Button>
              <div className="mt-3 text-center">
                <a href="https://www.linkedin.com/in/eduardo-sancho-solano/" target="_blank" rel="noopener noreferrer">
                  <small className="text-sm text-gray-500 underline">Meet our founder</small>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}