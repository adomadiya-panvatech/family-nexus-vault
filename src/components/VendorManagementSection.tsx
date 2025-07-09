
import React from 'react';
import { Building2, Users, FileText, Calendar, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const VendorManagementSection = () => {
  const vendors = [
    {
      id: '1',
      name: 'Healthcare Partners',
      type: 'Medical Provider',
      contact: 'Dr. Sarah Johnson',
      email: 'sarah@healthpartners.com',
      phone: '(555) 123-4567',
      status: 'Active',
      contractExpiry: '2024-12-31',
      documents: 8
    },
    {
      id: '2',
      name: 'Estate Legal Group',
      type: 'Legal Services',
      contact: 'Attorney Michael Smith',
      email: 'michael@estatelegal.com',
      phone: '(555) 987-6543',
      status: 'Active',
      contractExpiry: '2024-06-30',
      documents: 12
    },
    {
      id: '3',
      name: 'Financial Advisors Inc',
      type: 'Financial Services',
      contact: 'Jennifer Davis',
      email: 'jennifer@financialadvisors.com',
      phone: '(555) 456-7890',
      status: 'Review Required',
      contractExpiry: '2024-03-15',
      documents: 15
    }
  ];

  const upcomingRenewals = [
    { vendor: 'Financial Advisors Inc', date: '2024-03-15', daysLeft: 45 },
    { vendor: 'Estate Legal Group', date: '2024-06-30', daysLeft: 152 },
    { vendor: 'Healthcare Partners', date: '2024-12-31', daysLeft: 335 }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Vendor Management</h1>
          <p className="text-gray-600 mt-2">Manage relationships with your service providers</p>
        </div>
        <Button>
          <Building2 className="h-4 w-4 mr-2" />
          Add Vendor
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <Building2 className="h-8 w-8 text-blue-600" />
                <h3 className="font-semibold text-lg mt-2">Total Vendors</h3>
                <p className="text-3xl font-bold text-gray-900">{vendors.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <Users className="h-8 w-8 text-green-600" />
                <h3 className="font-semibold text-lg mt-2">Active</h3>
                <p className="text-3xl font-bold text-gray-900">
                  {vendors.filter(v => v.status === 'Active').length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <AlertTriangle className="h-8 w-8 text-yellow-600" />
                <h3 className="font-semibold text-lg mt-2">Needs Review</h3>
                <p className="text-3xl font-bold text-gray-900">
                  {vendors.filter(v => v.status === 'Review Required').length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <FileText className="h-8 w-8 text-purple-600" />
                <h3 className="font-semibold text-lg mt-2">Documents</h3>
                <p className="text-3xl font-bold text-gray-900">
                  {vendors.reduce((sum, v) => sum + v.documents, 0)}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Vendor Directory</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {vendors.map((vendor) => (
                  <div key={vendor.id} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-lg">{vendor.name}</h3>
                      <Badge variant={vendor.status === 'Active' ? 'default' : 'secondary'}>
                        {vendor.status}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Type: {vendor.type}</p>
                        <p className="text-gray-600">Contact: {vendor.contact}</p>
                        <p className="text-gray-600">Email: {vendor.email}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Phone: {vendor.phone}</p>
                        <p className="text-gray-600">Contract Expires: {vendor.contractExpiry}</p>
                        <p className="text-gray-600">Documents: {vendor.documents}</p>
                      </div>
                    </div>
                    <div className="flex space-x-2 mt-3">
                      <Button variant="outline" size="sm">View Details</Button>
                      <Button variant="outline" size="sm">
                        <FileText className="h-4 w-4 mr-1" />
                        Documents
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="h-5 w-5" />
              <span>Upcoming Renewals</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingRenewals.map((renewal, index) => (
                <div key={index} className="p-3 border rounded-lg">
                  <h4 className="font-medium">{renewal.vendor}</h4>
                  <p className="text-sm text-gray-600">Expires: {renewal.date}</p>
                  <p className="text-sm text-blue-600">{renewal.daysLeft} days remaining</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
