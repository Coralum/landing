'use client';

import React from 'react';
import { AlertTriangle, TrendingDown, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

const problems = [
  {
    icon: Settings,
    title: "Fragmented Integrations",
    description: "Data scattered across tools → no single source of truth → stalled projects."
  },
  {
    icon: TrendingDown,
    title: "Undefined ROI",
    description: "Building features without a revenue plan leads to unused, costly code."
  },
  {
    icon: AlertTriangle,
    title: "Scale Bottlenecks",
    description: "Manual maintenance and lack of governance kill AI momentum."
  }
];

export default function ProblemSection({ isVisible }) {
  return (
    <section 
      id="problems"
      data-animate
      className="py-24 bg-gradient-to-b from-white to-[#f9f8eb]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible.problems ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="font-croogla text-4xl lg:text-5xl font-bold text-[#155e63] mb-6">
            Why Most AI Initiatives Stall
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've seen the pattern. SaaS teams start with ambitious AI plans, then hit the same predictable roadblocks.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl border border-gray-100"
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible.problems ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
              style={{ willChange: 'opacity, transform' }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-[#fe5620] to-[#fd8246] rounded-2xl flex items-center justify-center mb-6">
                <problem.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="font-croogla text-2xl font-bold text-[#155e63] mb-4">
                {problem.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed text-lg">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}