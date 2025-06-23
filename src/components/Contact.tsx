
import React, { useState } from 'react';
import { Phone, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ContactInfo from './ContactInfo';
import LocationCards from './LocationCards';
import PhoneModal from './PhoneModal';

const Contact = () => {
  const [showPhoneOptions, setShowPhoneOptions] = useState(false);

  const scrollToAppointment = () => {
    document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePhoneClick = () => {
    setShowPhoneOptions(true);
  };

  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      <PhoneModal 
        isOpen={showPhoneOptions} 
        onClose={() => setShowPhoneOptions(false)} 
      />

      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 border-4 border-green-300 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 border-4 border-green-400 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 border-4 border-green-500 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Contact <span className="text-green-600">Us</span>
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with us for appointments, inquiries, or any assistance you need. 
              We're here to help you with your healthcare needs.
            </p>
          </div>

          <ContactInfo 
            onPhoneClick={handlePhoneClick}
            onAppointmentClick={scrollToAppointment}
          />

          <LocationCards />

          {/* Call to Action */}
          <div className="text-center animate-fade-in" style={{ animationDelay: '1s' }}>
            <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 shadow-2xl text-white max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Book Your Health Checkup?
              </h3>
              <p className="text-green-100 mb-6">
                Don't wait for tomorrow. Take charge of your health today with our comprehensive diagnostic services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={scrollToAppointment}
                  size="lg"
                  className="bg-white text-green-600 hover:bg-green-50 px-8 py-3 text-lg rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
                >
                  <Calendar className="mr-2 w-5 h-5" />
                  Book Appointment Now
                </Button>
                <Button 
                  onClick={handlePhoneClick}
                  size="lg"
                  className="bg-green-600 text-white hover:bg-white hover:text-green-600 px-8 py-3 text-lg rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Call Us Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
