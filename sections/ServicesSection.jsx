'use client';

import React from 'react';
import { MessageSquare, Search, FileText, ArrowRight } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from 'framer-motion';

const services = [
  {
    icon: MessageSquare,
    title: "AI Sales Chatbot",
    painPoint: "Leads lost to slow follow-up",
    outcome: "24/7 qualification with seamless CRM hand-offs to free up your team's time for high-value conversations",
    features: [
      "Lead qualification automation",
      "CRM integration & handoffs",
      "Automated FAQ handling"
    ],
    gradient: "from-[#fe5620] to-[#fd8246]"
  },
  {
    icon: Search,
    title: "RAG Knowledge Hub",
    painPoint: "A jungle of internal docs",
    outcome: "Instant, accurate answers from your knowledge base—cited, verified, and integrated into your existing tools",
    features: [
      "Document ingestion pipeline",
      "Contextual search & retrieval",
      "Source citation tracking"
    ],
    gradient: "from-coralum-teal to-coralum-teal2"
  },
  {
    icon: FileText,
    title: "Doc Parsing & Summaries",
    painPoint: "Hours lost reading contracts",
    outcome: "Extract key insights from contracts, meeting notes, and documents in seconds, not hours",
    features: [
      "Contract clause extraction",
      "Automated summarization",
      "CRM workflow integration"
    ],
    gradient: "from-[#fd8246] to-[#fe9500]"
  }
];

export default function ServicesSection({ isVisible }) {
  return (
    <section 
      id="services"
      data-animate
      className="py-24 bg-gradient-to-b from-white to-coralum-cream"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible.services ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-coralum-teal mb-6">
            Core AI Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Three proven AI implementations that drive immediate ROI while building your long-term competitive advantage.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible.services ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
              style={{ willChange: 'opacity, transform' }}
            >
              <Card className="h-full bg-white border-0 shadow-xl hover:shadow-2xl rounded-2xl overflow-hidden group">
                <CardContent className="p-8">
                  {/* Icon and Title */}
                  <div className="mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-coralum-teal mb-2">
                      {service.title}
                    </h3>
                  </div>

                  {/* Pain Point */}
                  <div className="mb-6">
                    <Badge variant="outline" className="mb-3 text-red-600 border-red-200 bg-red-50">
                      Pain Point
                    </Badge>
                    <p className="text-gray-600 font-medium">
                      {service.painPoint}
                    </p>
                  </div>

                  {/* Outcome */}
                  <div className="mb-6">
                    <Badge className="mb-3 bg-green-100 text-green-700 border-green-200">
                      Outcome
                    </Badge>
                    <p className="text-coralum-teal font-semibold text-lg">
                      {service.outcome}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-coralum-teal mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-[#fd8246] rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  {/* <Button 
                    variant="outline"
                    className="w-full border-coralum-teal text-coralum-teal hover:bg-coralum-teal hover:text-white group-hover:bg-coralum-teal group-hover:text-white"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button> */}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}