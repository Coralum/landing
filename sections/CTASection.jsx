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
      className="py-24 bg-gradient-to-r from-coralum-teal to-coralum-teal2 relative overflow-hidden"
    >


      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible.cta ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-8">
            Ready to Transform Your
            <span className="block text-coralum-coral]">AI Strategy?</span>
          </h2>
          
          <div className="space-y-6 mb-12">
            <p className="text-lg sm:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed text-left">
              Your team already uses AI tools everyday. And it has helped you grow and be more productive, but now it feels scattered... convoluted...
            </p>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed text-left">
              This is exactly when AI becomes most powerful. So let's start by structuring a roadmap to get the most out of your investments.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible.cta ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button 
              size="lg"
              className="bg-coralum-orange hover:bg-coralum-coral-dark text-white px-6 sm:px-8 lg:px-10 py-4 sm:py-6 text-base sm:text-lg lg:text-xl font-semibold rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 w-full sm:w-auto"
              onClick={() => {
                window.open('https://calendar.app.google/PzAQecVTNGDXEorz5', '_blank');
              }}
            >
              <span className="inline">Book a call</span>
              <Calendar className="w-5 h-5 ml-3" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}