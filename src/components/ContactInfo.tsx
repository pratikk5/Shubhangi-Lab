
import React from 'react';
import { Phone, Mail, Clock, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ContactInfoProps {
  onPhoneClick: () => void;
  onAppointmentClick: () => void;
}

const ContactInfo = ({ onPhoneClick, onAppointmentClick }: ContactInfoProps) => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: ['+91 99203 61564', '+91 73737 39564'],
      action: 'Call Now',
      actionType: 'phone',
      color: 'green'
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: ['yeshwantmane505@gmail.com'],
      action: 'Send Email',
      actionType: 'email',
      actionLink: 'mailto:yeshwantmane505@gmail.com',
      color: 'blue'
    },
    {
      icon: Clock,
      title: 'Operating Hours',
      details: ['Mon-Sat: 7:30 AM - 10:00 PM', 'Sunday: 7:30 AM - 2:00 PM'],
      action: 'Book Now',
      actionType: 'appointment',
      color: 'purple'
    }
  ];

  const getActionIcon = (title: string) => {
    switch (title) {
      case 'Phone Numbers':
        return Phone;
      case 'Email Address':
        return Mail;
      case 'Operating Hours':
        return Calendar;
      default:
        return Phone;
    }
  };

  const handleActionClick = (info: typeof contactInfo[0]) => {
    if (info.actionType === 'phone') {
      onPhoneClick();
    } else if (info.actionType === 'appointment') {
      onAppointmentClick();
    } else if (info.actionLink) {
      window.location.href = info.actionLink;
    }
  };

  const colorClasses = {
    green: 'from-green-500 to-green-600 bg-green-100 text-green-600 hover:from-green-600 hover:to-green-700',
    blue: 'from-blue-500 to-blue-600 bg-blue-100 text-blue-600 hover:from-blue-600 hover:to-blue-700',
    purple: 'from-purple-500 to-purple-600 bg-purple-100 text-purple-600 hover:from-purple-600 hover:to-purple-700'
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
      {contactInfo.map((info, index) => {
        const IconComponent = info.icon;
        const ActionIcon = getActionIcon(info.title);
        const colors = colorClasses[info.color as keyof typeof colorClasses];

        return (
          <Card 
            key={info.title}
            className="group hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 bg-white border-0 shadow-lg animate-fade-in"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <CardContent className="p-8 text-center relative overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br ${colors.split(' ')[0]} ${colors.split(' ')[1]} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              <div className="relative mb-6">
                <div className={`${colors.split(' ')[2]} p-4 rounded-full w-20 h-20 mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                  <IconComponent className={`${colors.split(' ')[3]} w-8 h-8`} />
                </div>
              </div>
              
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

              <Button
                onClick={() => handleActionClick(info)}
                className={`bg-gradient-to-r ${colors.split(' ')[0]} ${colors.split(' ')[1]} ${colors.split(' ')[4]} ${colors.split(' ')[5]} text-white rounded-full px-6 py-2 text-sm font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300`}
              >
                <span className="flex items-center">
                  <ActionIcon className="mr-2 w-4 h-4" />
                  {info.action}
                </span>
              </Button>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default ContactInfo;
