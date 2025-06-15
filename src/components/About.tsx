
import React from 'react';
import { MapPin, Clock, Shield, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 right-20 w-32 h-32 border-4 border-green-300 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 border-4 border-green-400 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              About <span className="text-green-600">Shubhangi Lab</span>
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three decades of excellence in healthcare diagnostics, serving the Mumbai community with precision and care.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Content */}
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Welcome to Shubhangi Lab, your trusted partner in health diagnostics. Since 1994, we have been 
                  committed to providing accurate and timely diagnostic services to the Mumbai community.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our state-of-the-art laboratory is equipped with the latest technology, ensuring precise results 
                  that empower both patients and healthcare providers to make informed decisions about health and wellness.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-100 p-2 rounded-full">
                      <Shield className="text-green-600 w-5 h-5" />
                    </div>
                    <span className="text-gray-700">Certified & Reliable</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-100 p-2 rounded-full">
                      <Target className="text-green-600 w-5 h-5" />
                    </div>
                    <span className="text-gray-700">Accurate Results</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Cards */}
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Card className="hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <MapPin className="text-green-600 w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Main Branch</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Shri Swami Samarth Apartment, Ground Floor, Shop No.4, 
                        Near BMC Hospital, V.N. Purav Marg, Chunabhatti, Mumbai - 400 022
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <MapPin className="text-green-600 w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Branch Office</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Hill Road, Opp. Veravil Society, Near Laxmi Medical, 
                        Chunabhatti, Mumbai-400 022
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <Clock className="text-green-600 w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Operating Hours</h3>
                      <p className="text-gray-600 text-sm">
                        Mon to Sat: 7:30 AM to 10:00 PM<br />
                        Sunday: 7:30 AM to 2:00 PM
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
