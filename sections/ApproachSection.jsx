'use client';

import React from 'react';
import { ArrowRight, Target, Zap, Layers, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const bootJourney = [
  { 
    phase: "Build", 
    icon: Target, 
    description: "Custom AI solutions",
    detail: "We discover your needs and prototype tailored solutions"
  },
  { 
    phase: "Own", 
    icon: Zap, 
    description: "Your data & IP",
    detail: "Everything we create becomes your proprietary technology"
  },
  { 
    phase: "Operate", 
    icon: Layers, 
    description: "Seamless integration",
    detail: "We walk you through integration and optimize until it runs smoothly"
  },
  { 
    phase: "Transfer", 
    icon: Users, 
    description: "In-house expertise",
    detail: "We train your team and hand over complete ownership"
  }
];

export default function ApproachSection({ isVisible }) {
  return (
    <section 
      id="approach"
      data-animate
      className="py-24 bg-gradient-to-b relative"
    >

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible.approach ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-coralum-teal mb-6">
            Business simplicity without AI complexity
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Transform your scattered AI tools into a self-sustaining ecosystem. Each component we build makes the others stronger, creating a system that grows more valuable over time.
          </p>
        </motion.div>

        {/* The BOOT Journey - Fused Process Flow & Business Model */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible.approach ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Business Collaboration Image */}
          <div className="text-center mb-12">
            <div className="w-full max-w-4xl mx-auto rounded-2xl shadow-lg overflow-hidden" style={{ aspectRatio: '16/9' }}>
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Business team collaborating on digital transformation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-coralum-teal mb-4">
              The BOOT Journey
            </h3>
            <p className="text-gray-600 text-lg">
              Our complete partnership model supports you all the way from discovery to ownership transfer.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-start gap-4 lg:gap-8">
            {bootJourney.map((phase, index) => (
              <React.Fragment key={phase.phase}>
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-coralum-teal to-coralum-teal2 rounded-2xl flex items-center justify-center mb-4 shadow-lg relative">
                    <phase.icon className="w-12 h-12 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-coralum-teal mb-2">
                    {phase.phase}
                  </h4>
                  <p className="text-sm text-gray-600 font-medium mb-2 max-w-32 text-center">
                    {phase.description}
                  </p>
                  <p className="text-xs text-gray-500 max-w-40 text-center leading-relaxed">
                    {phase.detail}
                  </p>
                </div>
                {index < bootJourney.length - 1 && (
                  <ArrowRight className="w-6 h-6 text-[#fd8246] hidden lg:block self-center" />
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}