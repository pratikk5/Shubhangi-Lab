import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: ['+91 99203 61564', '+91 73737 39564'],
      action: 'Call Now',
      actionLink: 'tel:+919920361564',
      color: 'green'
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: ['yeshwantmane505@gmail.com'],
      action: 'Send Email',
      actionLink: 'mailto:yeshwantmane505@gmail.com',
      color: 'blue'
    },
    {
      icon: Clock,
      title: 'Operating Hours',
      details: ['Mon-Sat: 7:30 AM - 10:00 PM', 'Sunday: 7:30 AM - 2:00 PM'],
      action: 'Book Now',
      actionLink: '#appointment',
      color: 'purple'
    }
  ];

  const locations = [
    {
      title: 'Main Branch',
      address: 'Shri Swami Samarth Apartment, Ground Floor, Shop No.4, Near BMC Hospital, V.N. Purav Marg, Chunabhatti, Mumbai - 400 022',
      isPrimary: true
    },
    {
      title: 'Branch Office',
      address: 'Hill Road, Opp. Veravil Society, Near Laxmi Medical, Chunabhatti, Mumbai-400 022',
      isPrimary: false
    }
  ];

  const scrollToAppointment = () => {
    document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
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

          {/* Contact Information Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              const colorClasses = {
                green: 'from-green-500 to-green-600 bg-green-100 text-green-600 hover:from-green-600 hover:to-green-700',
                blue: 'from-blue-500 to-blue-600 bg-blue-100 text-blue-600 hover:from-blue-600 hover:to-blue-700',
                purple: 'from-purple-500 to-purple-600 bg-purple-100 text-purple-600 hover:from-purple-600 hover:to-purple-700'
              };

              return (
                <Card 
                  key={info.title}
                  className="group hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 bg-white border-0 shadow-lg animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="p-8 text-center relative overflow-hidden">
                    {/* Background gradient effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses[info.color as keyof typeof colorClasses].split(' ')[0]} ${colorClasses[info.color as keyof typeof colorClasses].split(' ')[1]} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                    
                    {/* Icon */}
                    <div className="relative mb-6">
                      <div className={`${colorClasses[info.color as keyof typeof colorClasses].split(' ')[2]} p-4 rounded-full w-20 h-20 mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                        <IconComponent className={`${colorClasses[info.color as keyof typeof colorClasses].split(' ')[3]} w-8 h-8`} />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                      {info.title}
                    </h3>
                    
                    <div className="space-y-2 mb-6">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600 text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>

                    {/* Action Button */}
                    <Button
                      onClick={info.actionLink.startsWith('#') ? scrollToAppointment : undefined}
                      asChild={!info.actionLink.startsWith('#')}
                      className={`bg-gradient-to-r ${colorClasses[info.color as keyof typeof colorClasses].split(' ')[0]} ${colorClasses[info.color as keyof typeof colorClasses].split(' ')[1]} ${colorClasses[info.color as keyof typeof colorClasses].split(' ')[4]} ${colorClasses[info.color as keyof typeof colorClasses].split(' ')[5]} text-white rounded-full px-6 py-2 text-sm font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300`}
                    >
                      {info.actionLink.startsWith('#') ? (
                        <span>
                          <MessageCircle className="mr-2 w-4 h-4" />
                          {info.action}
                        </span>
                      ) : (
                        <a href={info.actionLink}>
                          <MessageCircle className="mr-2 w-4 h-4" />
                          {info.action}
                        </a>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Location Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {locations.map((location, index) => (
              <Card 
                key={location.title}
                className={`hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-0 shadow-lg animate-fade-in ${
                  location.isPrimary 
                    ? 'bg-gradient-to-br from-green-50 to-green-100' 
                    : 'bg-gradient-to-br from-blue-50 to-blue-100'
                }`}
                style={{ animationDelay: `${0.6 + index * 0.2}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-full ${
                      location.isPrimary ? 'bg-green-600' : 'bg-blue-600'
                    }`}>
                      <MapPin className="text-white w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-xl font-bold mb-3 ${
                        location.isPrimary ? 'text-green-800' : 'text-blue-800'
                      }`}>
                        {location.title}
                        {location.isPrimary && (
                          <span className="ml-2 bg-green-600 text-white text-xs px-2 py-1 rounded-full">
                            Primary
                          </span>
                        )}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {location.address}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

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
                  className="bg-white text-green-600 hover:bg-green-50 px-8 py-3 text-lg rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Book Appointment Now
                </Button>
                <Button 
                  asChild
                  size="lg"
                  className="bg-green-600 text-white hover:bg-white hover:text-green-600 px-8 py-3 text-lg rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <a href="tel:+919920361564">
                    <Phone className="mr-2" />
                    Call Us Now
                  </a>
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
