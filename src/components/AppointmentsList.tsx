
import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Calendar, Phone, Mail, User } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Appointment {
  id: string;
  serial_no: number;
  full_name: string;
  age: number;
  gender: string;
  mobile_number: string;
  email: string;
  appointment_date: string;
  additional_info?: string;
  tests: string[] | null;
  created_at: string;
}

const AppointmentsList = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      console.log('Fetching appointments...');
      const { data, error } = await supabase
        .from('appointments')
        .select('*')
        .order('serial_no', { ascending: true });

      if (error) {
        console.error('Supabase error:', error);
        toast({
          title: "Error fetching appointments",
          description: error.message,
          variant: "destructive",
        });
        return;
      }

      console.log('Fetched appointments:', data);
      setAppointments(data || []);
    } catch (error) {
      console.error('Error fetching appointments:', error);
      toast({
        title: "Error",
        description: "Failed to fetch appointments",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">Loading appointments...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl flex items-center">
            <Calendar className="mr-3 text-green-600" />
            Appointments List ({appointments.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          {appointments.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              No appointments found.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[80px] text-center">#</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Age</TableHead>
                    <TableHead>Gender</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead>Appointment Date</TableHead>
                    <TableHead>Tests</TableHead>
                    <TableHead>Created</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {appointments.map((appointment) => (
                    <TableRow key={appointment.id}>
                      <TableCell className="font-bold text-center text-green-600">
                        {String(appointment.serial_no).padStart(3, '0')}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <User className="mr-2 h-4 w-4 text-gray-500" />
                          {appointment.full_name}
                        </div>
                      </TableCell>
                      <TableCell>{appointment.age}</TableCell>
                      <TableCell className="capitalize">{appointment.gender}</TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="flex items-center text-sm">
                            <Phone className="mr-1 h-3 w-3" />
                            {appointment.mobile_number}
                          </div>
                          <div className="flex items-center text-sm">
                            <Mail className="mr-1 h-3 w-3" />
                            {appointment.email}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        {formatDate(appointment.appointment_date)}
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {appointment.tests && appointment.tests.length > 0 ? (
                            appointment.tests.map((test, testIndex) => (
                              <span
                                key={testIndex}
                                className="inline-block px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full"
                              >
                                {test}
                              </span>
                            ))
                          ) : (
                            <span className="text-sm text-gray-500">No tests</span>
                          )}
                        </div>
                      </TableCell>
                      <TableCell className="text-sm text-gray-500">
                        {formatDate(appointment.created_at)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
          <div className="mt-4 flex justify-center">
            <Button onClick={fetchAppointments} variant="outline">
              Refresh Data
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AppointmentsList;
