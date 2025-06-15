
import React, { useState } from 'react';
import { Calendar, Phone, CheckCircle, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const Appointment = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    phone: '',
    email: '',
    appointment_date: '',
    other_info: '',
    tests: [] as string[],
  });
  const [loading, setLoading] = useState(false);

  const availableTests = [
    'Fever Profile',
    'Arthritis Profile', 
    'Diabetes Profile',
    'Full Body Profile',
    'Anemia Profile',
    'ANC Profile',
    'Cardiac Profile',
    'PCOD Profile',
    'ECG',
    'X-Ray'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleTestChange = (test: string, checked: boolean) => {
    if (checked) {
      setFormData({
        ...formData,
        tests: [...formData.tests, test]
      });
    } else {
      setFormData({
        ...formData,
        tests: formData.tests.filter(t => t !== test)
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Prepare data to match table column names
    const appointmentData = {
      full_name: formData.name,
      age: parseInt(formData.age, 10),
      gender: formData.gender,
      mobile_number: formData.phone,
      email: formData.email,
      appointment_date: formData.appointment_date,
      additional_info: formData.other_info,
      tests: formData.tests
    };

    // Save to Supabase
    const { error } = await supabase.from("appointments").insert([appointmentData]);
    setLoading(false);

    if (error) {
      toast({
        title: "Failed to Book Appointment",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Appointment Booked Successfully!",
      description: "We'll contact you soon to confirm your appointment details.",
    });

    // Reset form
    setFormData({
      name: '',
      age: '',
      gender: '',
      phone: '',
      email: '',
      appointment_date: '',
      other_info: '',
      tests: []
    });
  };

  const handleReset = () => {
    setFormData({
      name: '',
      age: '',
      gender: '',
      phone: '',
      email: '',
      appointment_date: '',
      other_info: '',
      tests: []
    });
  };

  return (
    <section id="appointment" className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border-4 border-green-300 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 border-4 border-green-400 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Book an <span className="text-green-600">Appointment</span>
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Schedule your health checkup with us. Quick, easy, and convenient booking process.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Quick Info Cards */}
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Card className="bg-gradient-to-br from-green-50 to-green-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-green-600 p-3 rounded-full">
                      <Clock className="text-white w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Quick Booking</h3>
                      <p className="text-green-700 text-sm">Get appointment in 24 hours</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-600 p-3 rounded-full">
                      <CheckCircle className="text-white w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Expert Care</h3>
                      <p className="text-blue-700 text-sm">Experienced professionals</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-purple-600 p-3 rounded-full">
                      <Phone className="text-white w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Support</h3>
                      <p className="text-purple-700 text-sm">Always here to help</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Booking Form */}
            <div className="lg:col-span-2 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-t-lg">
                  <CardTitle className="text-2xl flex items-center">
                    <Calendar className="mr-3" />
                    Book Your Appointment
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-gray-700 font-medium">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter your full name"
                          required
                          className="border-gray-300 focus:border-green-500 focus:ring-green-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="age" className="text-gray-700 font-medium">Age *</Label>
                        <Input
                          id="age"
                          name="age"
                          value={formData.age}
                          onChange={handleInputChange}
                          placeholder="Enter your age"
                          required
                          className="border-gray-300 focus:border-green-500 focus:ring-green-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="gender" className="text-gray-700 font-medium">Gender *</Label>
                        <Input
                          id="gender"
                          name="gender"
                          value={formData.gender}
                          onChange={handleInputChange}
                          placeholder="Enter your gender"
                          required
                          className="border-gray-300 focus:border-green-500 focus:ring-green-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-gray-700 font-medium">Mobile Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Enter your mobile number"
                          required
                          className="border-gray-300 focus:border-green-500 focus:ring-green-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-gray-700 font-medium">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter your email"
                          required
                          className="border-gray-300 focus:border-green-500 focus:ring-green-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="appointment_date" className="text-gray-700 font-medium">Appointment Date *</Label>
                        <Input
                          id="appointment_date"
                          name="appointment_date"
                          type="date"
                          value={formData.appointment_date}
                          onChange={handleInputChange}
                          required
                          className="border-gray-300 focus:border-green-500 focus:ring-green-500"
                        />
                      </div>
                    </div>

                    {/* Test Selection */}
                    <div className="space-y-4">
                      <Label className="text-gray-700 font-medium">Select Tests</Label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-4 bg-gray-50 rounded-lg">
                        {availableTests.map((test) => (
                          <div key={test} className="flex items-center space-x-3">
                            <Checkbox
                              id={test}
                              checked={formData.tests.includes(test)}
                              onCheckedChange={(checked) => handleTestChange(test, checked as boolean)}
                              className="border-gray-300"
                            />
                            <Label 
                              htmlFor={test} 
                              className="text-sm text-gray-700 cursor-pointer hover:text-green-600 transition-colors"
                            >
                              {test}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Additional Information */}
                    <div className="space-y-2">
                      <Label htmlFor="other_info" className="text-gray-700 font-medium">Additional Information</Label>
                      <Textarea
                        id="other_info"
                        name="other_info"
                        value={formData.other_info}
                        onChange={handleInputChange}
                        placeholder="Any additional information or special requirements"
                        rows={4}
                        className="border-gray-300 focus:border-green-500 focus:ring-green-500"
                      />
                    </div>

                    {/* Form Actions */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-6">
                      <Button 
                        type="submit" 
                        className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                        disabled={loading}
                      >
                        <Calendar className="mr-2" />
                        {loading ? "Booking..." : "Book Appointment"}
                      </Button>
                      <Button 
                        type="button"
                        variant="outline"
                        onClick={handleReset}
                        className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50 py-3 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                        disabled={loading}
                      >
                        Reset Form
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;

