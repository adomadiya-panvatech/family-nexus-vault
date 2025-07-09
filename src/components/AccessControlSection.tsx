
import React from 'react';
import { Shield, Users, Lock, Key, Eye, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const AccessControlSection = () => {
  const accessRules = [
    {
      id: '1',
      name: 'Healthcare Team Access',
      description: 'Medical professionals can view health records',
      users: ['Dr. Sarah Johnson', 'Nurse Mary Wilson'],
      documents: ['Medical Records', 'Test Results', 'Prescriptions'],
      permissions: ['View', 'Download'],
      expiry: '2024-12-31',
      status: 'Active'
    },
    {
      id: '2',
      name: 'Legal Team Access',
      description: 'Attorneys can access legal documents',
      users: ['Attorney Michael Smith', 'Paralegal Jane Doe'],
      documents: ['Estate Plans', 'Wills', 'Legal Contracts'],
      permissions: ['View', 'Edit', 'Share'],
      expiry: '2024-06-30',
      status: 'Active'
    },
    {
      id: '3',
      name: 'Emergency Access',
      description: 'Family members can access in emergencies',
      users: ['John Smith (Son)', 'Mary Smith (Daughter)'],
      documents: ['Emergency Contacts', 'Medical Info', 'Insurance'],
      permissions: ['View Only'],
      expiry: 'Never',
      status: 'Active'
    }
  ];

  const recentActivity = [
    { user: 'Dr. Sarah Johnson', action: 'Viewed Medical Records', time: '2 hours ago', status: 'success' },
    { user: 'Attorney Michael Smith', action: 'Downloaded Will Document', time: '1 day ago', status: 'success' },
    { user: 'John Smith', action: 'Access Denied - Expired Permission', time: '2 days ago', status: 'warning' },
    { user: 'Nurse Mary Wilson', action: 'Updated Patient Notes', time: '3 days ago', status: 'success' }
  ];

  const permissionTypes = [
    { name: 'View Only', count: 8, color: 'bg-blue-500' },
    { name: 'Download', count: 5, color: 'bg-green-500' },
    { name: 'Edit', count: 3, color: 'bg-yellow-500' },
    { name: 'Share', count: 2, color: 'bg-purple-500' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Access Control</h1>
          <p className="text-gray-600 mt-2">Manage who can access your documents and when</p>
        </div>
        <Button>
          <Shield className="h-4 w-4 mr-2" />
          Create Access Rule
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {permissionTypes.map((type) => (
          <Card key={type.name}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className={`w-3 h-3 ${type.color} rounded-full mb-2`}></div>
                  <h3 className="font-semibold text-lg">{type.name}</h3>
                  <p className="text-3xl font-bold text-gray-900">{type.count}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Access Rules</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {accessRules.map((rule) => (
                  <div key={rule.id} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-lg">{rule.name}</h3>
                      <Badge variant={rule.status === 'Active' ? 'default' : 'secondary'}>
                        {rule.status}
                      </Badge>
                    </div>
                    <p className="text-gray-600 mb-3">{rule.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <h4 className="font-medium mb-1">Users:</h4>
                        <ul className="text-gray-600">
                          {rule.users.map((user, index) => (
                            <li key={index}>• {user}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Documents:</h4>
                        <ul className="text-gray-600">
                          {rule.documents.map((doc, index) => (
                            <li key={index}>• {doc}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mt-3 pt-3 border-t">
                      <div className="flex space-x-2">
                        {rule.permissions.map((permission, index) => (
                          <Badge key={index} variant="outline">{permission}</Badge>
                        ))}
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Clock className="h-4 w-4" />
                        <span>Expires: {rule.expiry}</span>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2 mt-3">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-1" />
                        View Details
                      </Button>
                      <Button variant="outline" size="sm">
                        <Key className="h-4 w-4 mr-1" />
                        Edit Permissions
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
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    activity.status === 'success' ? 'bg-green-500' : 
                    activity.status === 'warning' ? 'bg-yellow-500' : 'bg-red-500'
                  }`}></div>
                  <div className="flex-1">
                    <p className="font-medium text-sm">{activity.user}</p>
                    <p className="text-sm text-gray-600">{activity.action}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
