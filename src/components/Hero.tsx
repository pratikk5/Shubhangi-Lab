
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Award, Users, Heart } from 'lucide-react';

const Hero = () => {
  const scrollToAppointment = () => {
    document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative pt-20 pb-16 overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-green-100/50 to-white"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-200/20 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-green-300/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main heading with staggered animation */}
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-4 leading-tight">
              Welcome to{' '}
              <span className="text-green-600 bg-gradient-to-r from-green-500 to-green-700 bg-clip-text text-transparent">
                Shubhangi Lab
              </span>
            </h1>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Award className="text-green-600 w-6 h-6" />
              <h2 className="text-2xl md:text-3xl font-semibold text-green-700">Since 1994</h2>
            </div>
            <h3 className="text-xl md:text-2xl text-green-600 font-medium mb-6">30 Years of Excellence</h3>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Your trusted partner in healthcare services. We provide accurate diagnostics with precision, efficiency, and care.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="animate-fade-in flex flex-col sm:flex-row gap-4 justify-center mb-12" style={{ animationDelay: '0.6s' }}>
            <Button 
              onClick={scrollToAppointment}
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Calendar className="mr-2" />
              Book Appointment
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-3 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Our Services
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="animate-fade-in bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300" style={{ animationDelay: '0.8s' }}>
              <div className="flex items-center justify-center mb-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Award className="text-green-600 w-8 h-8" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">30+</h3>
              <p className="text-gray-600">Years of Experience</p>
            </div>

            <div className="animate-fade-in bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300" style={{ animationDelay: '1s' }}>
              <div className="flex items-center justify-center mb-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Users className="text-green-600 w-8 h-8" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">1,00,000+</h3>
              <p className="text-gray-600">Happy Patients</p>
            </div>

            <div className="animate-fade-in bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300" style={{ animationDelay: '1.2s' }}>
              <div className="flex items-center justify-center mb-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Heart className="text-green-600 w-8 h-8" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">100%</h3>
              <p className="text-gray-600">Accurate Results</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
