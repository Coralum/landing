'use client';

import React from 'react';
import { Search, Zap, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    icon: Search,
    title: "Discovery Session",
    description: "40 min call to uncover your biggest AI opportunity.",
    details: [
      "Map current workflow bottlenecks",
      "Identify highest-impact use cases", 
      "Define success metrics & timeline"
    ]
  },
  {
    icon: Zap,
    title: "Rapid Prototyping", 
    description: "Interactive MVP in 1–2 weeks—see it in action, tweak on the fly.",
    details: [
      "Working prototype in your environment",
      "Real data integration testing",
      "Iterative refinement based on feedback"
    ]
  },
  {
    icon: BarChart3,
    title: "Scale & Govern",
    description: "Governance, monitoring, and iterative improvements for lasting impact.",
    details: [
      "Production deployment & monitoring",
      "Team training & knowledge transfer",
      "Ongoing optimization & scaling"
    ]
  }
];

export default function ProcessSection({ isVisible }) {
  return (
    <section 
      id="process"
      data-animate
      className="py-24 bg-[#155e63] relative overflow-hidden"
    >

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible.process ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            How We Work
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            From concept to production in weeks, not months. Our process ensures you see value immediately while building for the long term.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15"
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible.process ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-[#fe5620] to-[#fd8246] rounded-2xl flex items-center justify-center mb-4">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex items-center mb-4">
                  <span className="w-8 h-8 bg-[#fd8246] text-white rounded-full flex items-center justify-center font-bold mr-3">
                    {index + 1}
                  </span>
                  <h3 className="text-2xl font-bold text-white">
                    {step.title}
                  </h3>
                </div>
              </div>

              <p className="text-white/90 text-lg mb-6 leading-relaxed">
                {step.description}
              </p>

              <ul className="space-y-3">
                {step.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start text-white/80">
                    <div className="w-2 h-2 bg-[#fd8246] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}