
import React from 'react';
import { Clock, FileText, Users, Shield, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const ActivityFeed = () => {
  const activities = [
    {
      id: '1',
      type: 'upload',
      title: 'Document uploaded',
      description: 'Estate Planning Will.pdf',
      timestamp: '2 minutes ago',
      icon: FileText,
      color: 'text-blue-600'
    },
    {
      id: '2',
      type: 'share',
      title: 'Document shared',
      description: 'Medical Records with Dr. Smith',
      timestamp: '1 hour ago',
      icon: Users,
      color: 'text-green-600'
    },
    {
      id: '3',
      type: 'message',
      title: 'New message',
      description: 'From Financial Advisor',
      timestamp: '3 hours ago',
      icon: MessageSquare,
      color: 'text-purple-600'
    },
    {
      id: '4',
      type: 'security',
      title: 'Security scan',
      description: 'All documents verified',
      timestamp: '1 day ago',
      icon: Shield,
      color: 'text-orange-600'
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Clock className="h-5 w-5" />
          <span>Recent Activity</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => {
            const Icon = activity.icon;
            return (
              <div key={activity.id} className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <Icon className={`h-5 w-5 ${activity.color}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">
                    {activity.title}
                  </p>
                  <p className="text-sm text-gray-500 truncate">
                    {activity.description}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    {activity.timestamp}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};
