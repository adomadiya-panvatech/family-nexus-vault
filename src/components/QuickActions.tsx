
import React from 'react';
import { Plus, MessageSquare, Users, Video, Calendar, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const QuickActions = () => {
  const actions = [
    {
      title: 'New Message',
      description: 'Send secure message',
      icon: MessageSquare,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Quick Connect',
      description: 'Call advisor or vendor',
      icon: Video,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Share Document',
      description: 'Create secure link',
      icon: Shield,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      title: 'Schedule Meeting',
      description: 'Book appointment',
      icon: Calendar,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Plus className="h-5 w-5" />
          <span>Quick Actions</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {actions.map((action, index) => {
            const Icon = action.icon;
            return (
              <Button
                key={index}
                variant="ghost"
                className="w-full justify-start h-auto p-3"
              >
                <div className={`${action.bgColor} p-2 rounded-lg mr-3`}>
                  <Icon className={`h-4 w-4 ${action.color}`} />
                </div>
                <div className="text-left">
                  <div className="font-medium text-gray-900">{action.title}</div>
                  <div className="text-sm text-gray-500">{action.description}</div>
                </div>
              </Button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};
