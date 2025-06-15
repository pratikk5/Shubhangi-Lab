
import React from 'react';
import { Activity, Heart, Stethoscope, Zap, TestTube, Microscope, FileText, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Services = () => {
  const services = [
    { name: 'ECG', icon: Activity, description: 'Electrocardiogram testing for heart health monitoring' },
    { name: 'X-Ray', icon: Zap, description: 'Digital X-ray imaging for accurate diagnosis' },
    { name: 'Fever Profile', icon: TestTube, description: 'Comprehensive fever investigation panel' },
    { name: 'Arthritis Profile', icon: Stethoscope, description: 'Joint health and inflammation testing' },
    { name: 'Diabetes Profile', icon: Heart, description: 'Blood sugar and diabetes monitoring tests' },
    { name: 'Full Body Profile', icon: FileText, description: 'Complete health checkup package' },
    { name: 'Anemia Profile', icon: Microscope, description: 'Blood count and anemia detection tests' },
    { name: 'ANC Profile', icon: Users, description: 'Antenatal care and pregnancy monitoring' },
    { name: 'Cardiac Profile', icon: Heart, description: 'Heart health assessment tests' },
    { name: 'PCOD Profile', icon: TestTube, description: 'Hormonal testing for PCOD diagnosis' },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-green-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 left-10 w-20 h-20 border-2 border-green-400 rounded-full"></div>
        <div className="absolute bottom-40 right-10 w-16 h-16 border-2 border-green-500 rounded-full"></div>
        <div className="absolute top-20 right-1/4 w-12 h-12 border-2 border-green-300 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our <span className="text-green-600">Services</span>
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive diagnostic services with state-of-the-art technology and expert care.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card 
                  key={service.name}
                  className="group hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0 shadow-lg animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8 text-center relative overflow-hidden">
                    {/* Hover effect background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                    
                    {/* Icon */}
                    <div className="relative mb-6">
                      <div className="bg-gradient-to-br from-green-100 to-green-200 p-4 rounded-full w-20 h-20 mx-auto flex items-center justify-center group-hover:from-green-500 group-hover:to-green-600 transition-all duration-500 group-hover:scale-110">
                        <IconComponent className="text-green-600 w-8 h-8 group-hover:text-white transition-colors duration-500" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-700 transition-colors duration-300">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {service.description}
                    </p>
                    
                    {/* Animated border */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '1s' }}>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Need a Custom Test Package?
              </h3>
              <p className="text-gray-600 mb-6">
                Contact us to create a personalized diagnostic package tailored to your specific health needs.
              </p>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Contact Us Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
