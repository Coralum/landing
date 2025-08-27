import React from 'react';
import { ExternalLink } from 'lucide-react';

const footerLinks = [
  { label: "Founder Video", href: "#hero" },
  { label: "Partnership Model", href: "#approach" },
  { label: "Core AI Services", href: "#services" },
  { label: "Our Process", href: "#process" },
  // { label: "Privacy Policy", href: "#privacy" }
];

export default function Footer() {
  return (
    <footer className="bg-coralum-dark py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-[#fe5620] to-[#fd8246] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Coralum</h3>
                <p className="text-[#fd8246] text-sm font-medium">Software as a Reef</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
            Building adaptive AI that drives ROI for your business.
            Strategic partnerships that transform SaaS operations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-[#fd8246] transition-colors duration-300 flex items-center group"
                  >
                    {link.label}
                    {/* <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" /> */}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Get Started</h4>
            <p className="text-gray-300 mb-4">
              Ready to explore how AI can transform your SaaS?
            </p>
            <a 
              href="https://calendar.app.google/PzAQecVTNGDXEorz5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-[#fd8246] hover:text-[#fe5620] font-semibold transition-colors duration-300"
            >
              Schedule Strategy Call
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            © 2025 Coralum. All rights reserved. Software as a Reef™
          </p>
          
          {/* Social Links */}
          <div className="flex space-x-6">
            <a 
              href="https://www.linkedin.com/in/eduardo-sancho-solano/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#fd8246] transition-colors duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a 
              href="https://www.youtube.com/@eduardoventures"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#fd8246] transition-colors duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}