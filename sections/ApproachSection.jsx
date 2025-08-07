'use client';

import React from 'react';
import { ArrowRight, Layers, Zap, Target, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const phases = [
  { label: "Discovery", icon: Target },
  { label: "Prototype", icon: Zap },
  { label: "Integrate", icon: Layers },
  { label: "Optimize", icon: Users }
];

const principles = [
  { label: "Build", description: "Custom AI solutions" },
  { label: "Own", description: "Your data & IP" },
  { label: "Operate", description: "Seamless integration" },
  { label: "Transfer", description: "In-house expertise" }
];

export default function ApproachSection({ isVisible }) {
  return (
    <section 
      id="approach"
      data-animate
      className="py-24 bg-gradient-to-b from-[#f9f8eb] to-white relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <motion.div 
        className="absolute top-10 right-10 w-64 h-64 bg-[#fe5620]/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible.approach ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[#155e63] mb-6">
            Your AI, Structured as an Ecosystem
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Like a coral reef, your SaaS needs small, connected parts that grow stronger together. 
            We blend systems thinking with hands-on AI expertise to turn fragmented ideas into 
            self-sustaining, revenue-driving solutions.
          </p>
        </motion.div>

        {/* Process Flow */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible.approach ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-8">
            {phases.map((phase, index) => (
              <React.Fragment key={phase.label}>
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-[#155e63] to-[#1a6b70] rounded-2xl flex items-center justify-center mb-3 shadow-lg">
                    <phase.icon className="w-10 h-10 text-white" />
                  </div>
                  <span className="text-[#155e63] font-semibold text-lg">
                    {phase.label}
                  </span>
                </div>
                {index < phases.length - 1 && (
                  <ArrowRight className="w-6 h-6 text-[#fd8246] hidden lg:block" />
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>

        {/* Business Model Principles */}
        <motion.div
          className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100"
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible.approach ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#155e63] mb-4">
              Our Partnership Model
            </h3>
            <p className="text-gray-600 text-lg">
              We don't just deliver solutions. We transfer ownership and knowledge.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible.approach ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-[#fe5620] to-[#fd8246] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  {principle.label[0]}
                </div>
                <h4 className="text-xl font-bold text-[#155e63] mb-2">
                  {principle.label}
                </h4>
                <p className="text-gray-600">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}