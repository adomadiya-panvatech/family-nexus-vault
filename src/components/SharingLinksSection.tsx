
import React, { useState } from 'react';
import { Share2, Link, Eye, Download, Clock, Copy } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

export const SharingLinksSection = () => {
  const [newLinkName, setNewLinkName] = useState('');

  const sharedLinks = [
    {
      id: '1',
      name: 'Medical Records Package',
      url: 'https://vault.example.com/share/med-rec-abc123',
      documents: ['Blood Test Results', 'MRI Scan', 'Doctor Notes'],
      permissions: ['View', 'Download'],
      expiry: '2024-02-15',
      views: 12,
      downloads: 3,
      recipient: 'Dr. Sarah Johnson',
      status: 'Active'
    },
    {
      id: '2',
      name: 'Estate Planning Documents',
      url: 'https://vault.example.com/share/estate-xyz789',
      documents: ['Will', 'Trust Documents', 'Power of Attorney'],
      permissions: ['View Only'],
      expiry: '2024-03-30',
      views: 8,
      downloads: 0,
      recipient: 'Attorney Michael Smith',
      status: 'Active'
    },
    {
      id: '3',
      name: 'Family Emergency Info',
      url: 'https://vault.example.com/share/emergency-def456',
      documents: ['Emergency Contacts', 'Medical Info', 'Insurance Cards'],
      permissions: ['View', 'Download'],
      expiry: 'Never',
      views: 25,
      downloads: 8,
      recipient: 'Family Members',
      status: 'Active'
    },
    {
      id: '4',
      name: 'Insurance Claims',
      url: 'https://vault.example.com/share/insurance-ghi012',
      documents: ['Claim Forms', 'Receipts', 'Policy Documents'],
      permissions: ['View', 'Download'],
      expiry: '2024-01-10',
      views: 5,
      downloads: 2,
      recipient: 'Insurance Agent',
      status: 'Expired'
    }
  ];

  const copyToClipboard = (url: string) => {
    navigator.clipboard.writeText(url);
    // In a real app, you'd show a toast notification here
  };

  const getStatusBadge = (status: string) => {
    const variant = status === 'Active' ? 'default' : 'secondary';
    return <Badge variant={variant}>{status}</Badge>;
  };

  const isExpiringSoon = (expiry: string) => {
    if (expiry === 'Never') return false;
    const expiryDate = new Date(expiry);
    const now = new Date();
    const diffTime = expiryDate.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 7 && diffDays > 0;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Sharing & Links</h1>
          <p className="text-gray-600 mt-2">Create secure sharing links for your documents</p>
        </div>
        <Button>
          <Share2 className="h-4 w-4 mr-2" />
          Create Share Link
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <Link className="h-8 w-8 text-blue-600" />
                <h3 className="font-semibold text-lg mt-2">Active Links</h3>
                <p className="text-3xl font-bold text-gray-900">
                  {sharedLinks.filter(link => link.status === 'Active').length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <Eye className="h-8 w-8 text-green-600" />
                <h3 className="font-semibold text-lg mt-2">Total Views</h3>
                <p className="text-3xl font-bold text-gray-900">
                  {sharedLinks.reduce((sum, link) => sum + link.views, 0)}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <Download className="h-8 w-8 text-purple-600" />
                <h3 className="font-semibold text-lg mt-2">Downloads</h3>
                <p className="text-3xl font-bold text-gray-900">
                  {sharedLinks.reduce((sum, link) => sum + link.downloads, 0)}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <Clock className="h-8 w-8 text-yellow-600" />
                <h3 className="font-semibold text-lg mt-2">Expiring Soon</h3>
                <p className="text-3xl font-bold text-gray-900">
                  {sharedLinks.filter(link => isExpiringSoon(link.expiry)).length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Shared Links</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {sharedLinks.map((link) => (
              <div key={link.id} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-lg">{link.name}</h3>
                  <div className="flex items-center space-x-2">
                    {isExpiringSoon(link.expiry) && (
                      <Badge variant="outline" className="text-yellow-600">
                        Expiring Soon
                      </Badge>
                    )}
                    {getStatusBadge(link.status)}
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded p-3 mb-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-mono text-gray-600 truncate flex-1 mr-2">
                      {link.url}
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copyToClipboard(link.url)}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mb-3">
                  <div>
                    <h4 className="font-medium mb-1">Documents:</h4>
                    <ul className="text-gray-600">
                      {link.documents.map((doc, index) => (
                        <li key={index}>• {doc}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Details:</h4>
                    <p className="text-gray-600">Recipient: {link.recipient}</p>
                    <p className="text-gray-600">Expires: {link.expiry}</p>
                    <p className="text-gray-600">Views: {link.views} | Downloads: {link.downloads}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t">
                  <div className="flex space-x-2">
                    {link.permissions.map((permission, index) => (
                      <Badge key={index} variant="outline">{permission}</Badge>
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">Edit</Button>
                    <Button variant="outline" size="sm">Revoke</Button>
                    <Button variant="outline" size="sm">Analytics</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
