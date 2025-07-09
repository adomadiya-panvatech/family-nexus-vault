
import React, { useState } from 'react';
import { Activity, Filter, Download, Eye, User, FileText, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

export const ActivityLogsSection = () => {
  const [filterType, setFilterType] = useState('all');

  const activityLogs = [
    {
      id: '1',
      action: 'Document Viewed',
      user: 'Dr. Sarah Johnson',
      document: 'Medical Records Summary.pdf',
      timestamp: '2024-01-15 14:30:25',
      ip: '192.168.1.100',
      device: 'Desktop - Chrome',
      status: 'success',
      type: 'view'
    },
    {
      id: '2',
      action: 'Document Downloaded',
      user: 'Attorney Michael Smith',
      document: 'Estate Planning Will.pdf',
      timestamp: '2024-01-15 11:15:10',
      ip: '203.0.113.45',
      device: 'Mobile - Safari',
      status: 'success',
      type: 'download'
    },
    {
      id: '3',
      action: 'Login Attempt',
      user: 'You',
      document: 'N/A',
      timestamp: '2024-01-15 09:00:00',
      ip: '198.51.100.25',
      device: 'Desktop - Firefox',
      status: 'success',
      type: 'auth'
    },
    {
      id: '4',
      action: 'Access Denied',
      user: 'Unknown User',
      document: 'Financial Portfolio.xlsx',
      timestamp: '2024-01-14 16:45:32',
      ip: '172.16.254.1',
      device: 'Mobile - Chrome',
      status: 'warning',
      type: 'security'
    },
    {
      id: '5',
      action: 'Share Link Created',
      user: 'You',
      document: 'Medical Records Package',
      timestamp: '2024-01-14 10:20:15',
      ip: '198.51.100.25',
      device: 'Desktop - Chrome',
      status: 'success',
      type: 'share'
    },
    {
      id: '6',
      action: 'Document Uploaded',
      user: 'You',
      document: 'Insurance Policy Update.pdf',
      timestamp: '2024-01-13 15:30:45',
      ip: '198.51.100.25',
      device: 'Desktop - Chrome',
      status: 'success',
      type: 'upload'
    }
  ];

  const getStatusIcon = (type: string) => {
    switch (type) {
      case 'view': return <Eye className="h-4 w-4" />;
      case 'download': return <Download className="h-4 w-4" />;
      case 'auth': return <User className="h-4 w-4" />;
      case 'share': return <FileText className="h-4 w-4" />;
      case 'upload': return <FileText className="h-4 w-4" />;
      case 'security': return <Activity className="h-4 w-4" />;
      default: return <Activity className="h-4 w-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success': return 'text-green-600 bg-green-50';
      case 'warning': return 'text-yellow-600 bg-yellow-50';
      case 'error': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const activityStats = [
    { label: 'Total Activities', value: activityLogs.length, icon: Activity },
    { label: 'Document Views', value: activityLogs.filter(log => log.type === 'view').length, icon: Eye },
    { label: 'Downloads', value: activityLogs.filter(log => log.type === 'download').length, icon: Download },
    { label: 'Security Events', value: activityLogs.filter(log => log.status === 'warning').length, icon: User }
  ];

  const filteredLogs = filterType === 'all' 
    ? activityLogs 
    : activityLogs.filter(log => log.type === filterType);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Activity Logs</h1>
          <p className="text-gray-600 mt-2">Monitor all activities and access patterns</p>
        </div>
        <Button>
          <Download className="h-4 w-4 mr-2" />
          Export Logs
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {activityStats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.label}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <Icon className="h-8 w-8 text-blue-600" />
                    <h3 className="font-semibold text-lg mt-2">{stat.label}</h3>
                    <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Activity Timeline</CardTitle>
            <div className="flex items-center space-x-2">
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="border rounded px-3 py-1 text-sm"
              >
                <option value="all">All Activities</option>
                <option value="view">Document Views</option>
                <option value="download">Downloads</option>
                <option value="auth">Authentication</option>
                <option value="share">Sharing</option>
                <option value="security">Security Events</option>
              </select>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredLogs.map((log) => (
              <div key={log.id} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-full ${getStatusColor(log.status)}`}>
                      {getStatusIcon(log.type)}
                    </div>
                    <div>
                      <h4 className="font-medium">{log.action}</h4>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span>User: {log.user}</span>
                        {log.document !== 'N/A' && <span>Document: {log.document}</span>}
                      </div>
                    </div>
                  </div>
                  <Badge variant={log.status === 'success' ? 'default' : 'secondary'}>
                    {log.status}
                  </Badge>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600 bg-gray-50 rounded p-3">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>{log.timestamp}</span>
                  </div>
                  <div>
                    <span>IP: {log.ip}</span>
                  </div>
                  <div>
                    <span>Device: {log.device}</span>
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
