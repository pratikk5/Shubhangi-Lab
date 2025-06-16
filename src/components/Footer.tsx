
import React from 'react';
import { Heart, Award, Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-600 to-green-700 text-white py-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 border-2 border-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div className="lg:col-span-2 animate-fade-in">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg overflow-hidden">
                  <img 
                    src="/logo.jpg" 
                    alt="Shubhangi Lab Logo" 
                    className="w-10 h-10 object-cover rounded-full"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Shubhangi Lab</h3>
                  <p className="text-green-100 text-sm">Since 1994 - Trusted Healthcare Partner</p>
                </div>
              </div>
              <p className="text-green-100 leading-relaxed mb-6 max-w-md">
                Three decades of excellence in healthcare diagnostics. We are committed to providing 
                accurate, reliable, and timely diagnostic services to support your health and wellness journey.
              </p>
              
              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                  <Award className="text-white w-6 h-6 mx-auto mb-2" />
                  <p className="text-xs text-green-100">30+ Years</p>
                </div>
                <div className="text-center p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                  <Shield className="text-white w-6 h-6 mx-auto mb-2" />
                  <p className="text-xs text-green-100">Certified</p>
                </div>
                <div className="text-center p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                  <Heart className="text-white w-6 h-6 mx-auto mb-2" />
                  <p className="text-xs text-green-100">Care First</p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'About Us', 'Services', 'Appointment', 'Gallery', 'Contact'].map((link) => (
                  <li key={link}>
                    <button 
                      onClick={() => {
                        const element = document.getElementById(link.toLowerCase().replace(' ', ''));
                        element?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-green-100 hover:text-white transition-colors duration-300 text-sm hover:underline"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-green-100 font-medium">Phone:</p>
                  <a href="tel:+919920361564" className="text-white hover:text-green-200 transition-colors block">
                    +91 99203 61564
                  </a>
                  <a href="tel:+917373739564" className="text-white hover:text-green-200 transition-colors block">
                    +91 73737 39564
                  </a>
                </div>
                <div>
                  <p className="text-green-100 font-medium">Email:</p>
                  <a href="mailto:yeshwantmane505@gmail.com" className="text-white hover:text-green-200 transition-colors">
                    yeshwantmane505@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-green-100 font-medium">Hours:</p>
                  <p className="text-white">Mon-Sat: 7:30 AM - 10:00 PM</p>
                  <p className="text-white">Sunday: 7:30 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-green-500 pt-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-center md:text-left mb-4 md:mb-0">
                <p className="text-green-100 text-sm">
                  &copy; {new Date().getFullYear()} Shubhangi Lab. All rights reserved.
                </p>
                <p className="text-green-200 text-xs mt-1">
                  Committed to your health and well-being since 1994
                </p>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <p className="text-xs text-green-100">Made with</p>
                  <div className="flex items-center justify-center space-x-1">
                    <Heart className="text-red-400 w-4 h-4 animate-pulse" />
                    <span className="text-xs text-green-100">for better health</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
