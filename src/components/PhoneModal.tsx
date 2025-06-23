
import React from 'react';
import { Phone, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PhoneModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PhoneModal = ({ isOpen, onClose }: PhoneModalProps) => {
  const handlePhoneCall = (phoneNumber: string) => {
    window.location.href = `tel:${phoneNumber.replace(/\s/g, '')}`;
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-sm mx-4 shadow-2xl">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Choose Phone Number</h3>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="space-y-3">
          <Button
            onClick={() => handlePhoneCall('+919920361564')}
            className="w-full bg-green-600 hover:bg-green-700 text-white flex items-center justify-center space-x-2"
          >
            <Phone className="w-4 h-4" />
            <span>+91 99203 61564</span>
          </Button>
          <Button
            onClick={() => handlePhoneCall('+917373739564')}
            className="w-full bg-green-600 hover:bg-green-700 text-white flex items-center justify-center space-x-2"
          >
            <Phone className="w-4 h-4" />
            <span>+91 73737 39564</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PhoneModal;
