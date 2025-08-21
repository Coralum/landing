'use client';

import React from 'react';
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection() {


  return (
    <section className="relative min-h-screen flex items-center overflow-hidden w-full pt-16 sm:pt-0">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1583212292454-1fe6229603b7?q=80&w=2000" 
          // src="https://images.unsplash.com/photo-1582623838120-455da222cdc7?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          // src="https://plus.unsplash.com/premium_photo-1661812071978-771a70ca1516?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          // src="https://images.unsplash.com/photo-1682687981907-170c006e3744?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          // src="https://plus.unsplash.com/premium_photo-1661841439995-1706237c83dc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Thriving coral reef ecosystem"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#155e63]/90 via-[#155e63]/70 to-[#155e63]/40"></div>
      </div>



      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
        {/* Left Content */}
        <motion.div 
          className="text-white"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-[#fe5620]/20 backdrop-blur-sm rounded-full text-[#fd8246] font-medium text-sm border border-[#fe5620]/30">
              Software as a Reef
            </span>
          </motion.div>

          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Craft Adaptive
            <span className="block text-[#fd8246]">AI Workflows</span>
            <span className="block text-3xl sm:text-4xl lg:text-5xl font-normal opacity-90">
              That Thrive With Your SaaS
            </span>
          </motion.h1>

          <motion.p 
            className="text-lg sm:text-xl lg:text-2xl mb-12 opacity-90 leading-relaxed max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Turn fragmented tools into thriving ecosystems. We build, optimize, and transfer AI-powered solutions that grow stronger together.
          </motion.p>
        </motion.div>

        {/* Right Content - Contact Form */}
        <motion.div 
          className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/20 w-full"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div>
            <h3 className="text-2xl font-bold text-[#155e63] mb-2">Supercharge Your AI Journey</h3>
            <p className="text-gray-600">Get a personalized consultation with our founder and structure a roadmap to get the most out of your investments.</p>
            <a href="https://www.linkedin.com/in/eduardo-sancho-solano/" target="_blank" rel="noopener noreferrer">
              <small className="text-sm text-gray-500 underline mb-5">Meet our founder</small>
            </a>
            <br />
            <br />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <Button 
                size="lg"
                className="bg-[#fe5620] hover:bg-[#e5491c] text-white px-6 sm:px-8 py-4 text-base sm:text-lg font-semibold rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
                onClick={() => {
                  window.open('https://calendar.app.google/PzAQecVTNGDXEorz5', '_blank');
                }}
              >
                <Calendar className="w-5 h-5 mr-3" />
                <span className="inline">Book a call</span>
                <ArrowRight className="w-5 h-5 ml-3" />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}