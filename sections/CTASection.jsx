'use client';

import React from 'react';
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CtaSection({ isVisible }) {
  return (
    <section 
      id="cta"
      data-animate
      className="py-24 bg-gradient-to-r from-[#155e63] to-[#1a6b70] relative overflow-hidden"
    >


      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible.cta ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-8">
            Ready to Transform Your
            <span className="block text-[#fd8246]">AI Strategy?</span>
          </h2>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Stop building AI features that gather dust. Start building ecosystems that grow stronger, 
            drive revenue, and scale with your vision.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible.cta ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button 
              size="lg"
              className="bg-[#fe5620] hover:bg-[#e5491c] text-white px-6 sm:px-8 lg:px-10 py-4 sm:py-6 text-base sm:text-lg lg:text-xl font-semibold rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              <Calendar className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
              <span className="hidden sm:inline">Schedule Your Free 40min Strategy Call</span>
              <span className="sm:hidden">Book Free Strategy Call</span>
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2 sm:ml-3" />
            </Button>
          </motion.div>

          <motion.p 
            className="text-white/70 mt-8 text-lg"
            initial={{ opacity: 0 }}
            animate={isVisible.cta ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            No pitch deck. No generic solutions. Just strategic clarity for your specific SaaS challenges.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}