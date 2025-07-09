
import React from 'react';
import { Phone, Video, MessageCircle, Calendar, Users, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const QuickConnectSection = () => {
  const contacts = [
    {
      id: '1',
      name: 'Dr. Sarah Johnson',
      role: 'Primary Care Physician',
      specialty: 'Internal Medicine',
      availability: 'Available',
      phone: '(555) 123-4567',
      email: 'sarah@healthpartners.com',
      nextAppointment: '2024-01-20 10:00 AM',
      status: 'online'
    },
    {
      id: '2',
      name: 'Attorney Michael Smith',
      role: 'Estate Planning Lawyer',
      specialty: 'Estate & Trust Law',
      availability: 'In Meeting',
      phone: '(555) 987-6543',
      email: 'michael@estatelegal.com',
      nextAppointment: '2024-01-22 2:00 PM',
      status: 'busy'
    },
    {
      id: '3',
      name: 'Jennifer Davis',
      role: 'Financial Advisor',
      specialty: 'Investment Planning',
      availability: 'Available',
      phone: '(555) 456-7890',
      email: 'jennifer@financialadvisors.com',
      nextAppointment: '2024-01-25 11:00 AM',
      status: 'online'
    },
    {
      id: '4',
      name: 'Emergency Contact',
      role: 'Family Member',
      specialty: 'Emergency Support',
      availability: 'Always Available',
      phone: '(555) 999-0000',
      email: 'emergency@family.com',
      nextAppointment: null,
      status: 'online'
    }
  ];

  const recentCalls = [
    { contact: 'Dr. Sarah Johnson', type: 'Video Call', duration: '15 min', time: '2 hours ago' },
    { contact: 'Jennifer Davis', type: 'Phone Call', duration: '8 min', time: '1 day ago' },
    { contact: 'Attorney Michael Smith', type: 'Voice Call', duration: '22 min', time: '2 days ago' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online': return 'bg-green-500';
      case 'busy': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getAvailabilityBadge = (availability: string) => {
    const variant = availability === 'Available' ? 'default' : 'secondary';
    return <Badge variant={variant}>{availability}</Badge>;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Quick Connect</h1>
          <p className="text-gray-600 mt-2">Instantly connect with your trusted advisors and care team</p>
        </div>
        <Button>
          <Users className="h-4 w-4 mr-2" />
          Add Contact
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Your Care Team</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {contacts.map((contact) => (
                  <div key={contact.id} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="relative">
                          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                            <Users className="h-6 w-6 text-blue-600" />
                          </div>
                          <div className={`absolute -bottom-1 -right-1 w-3 h-3 ${getStatusColor(contact.status)} rounded-full border-2 border-white`}></div>
                        </div>
                        <div>
                          <h3 className="font-semibold">{contact.name}</h3>
                          <p className="text-sm text-gray-600">{contact.role}</p>
                          <p className="text-xs text-gray-500">{contact.specialty}</p>
                        </div>
                      </div>
                      {getAvailabilityBadge(contact.availability)}
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600 mb-3">
                      <p>Phone: {contact.phone}</p>
                      <p>Email: {contact.email}</p>
                      {contact.nextAppointment && (
                        <p className="col-span-2">Next: {contact.nextAppointment}</p>
                      )}
                    </div>

                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Phone className="h-4 w-4 mr-1" />
                        Call
                      </Button>
                      <Button variant="outline" size="sm">
                        <Video className="h-4 w-4 mr-1" />
                        Video
                      </Button>
                      <Button variant="outline" size="sm">
                        <MessageCircle className="h-4 w-4 mr-1" />
                        Message
                      </Button>
                      <Button variant="outline" size="sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        Schedule
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>Recent Calls</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentCalls.map((call, index) => (
                  <div key={index} className="flex items-center justify-between p-2 rounded hover:bg-gray-50">
                    <div>
                      <p className="font-medium text-sm">{call.contact}</p>
                      <p className="text-xs text-gray-600">{call.type} • {call.duration}</p>
                    </div>
                    <p className="text-xs text-gray-500">{call.time}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Emergency Contacts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Button className="w-full bg-red-600 hover:bg-red-700">
                  <Phone className="h-4 w-4 mr-2" />
                  Emergency Services
                </Button>
                <Button variant="outline" className="w-full">
                  <Phone className="h-4 w-4 mr-2" />
                  Family Contact
                </Button>
                <Button variant="outline" className="w-full">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Medical Alert
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
