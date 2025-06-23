
import React from 'react';
import { MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const LocationCards = () => {
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

  return (
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
  );
};

export default LocationCards;
