
import React from 'react';
import { Camera, Video, FileText, Music, ImageIcon, Heart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const FamilyFolderSection = () => {
  const mediaTypes = [
    { icon: ImageIcon, name: 'Photos', count: 247, color: 'text-green-600' },
    { icon: Video, name: 'Videos', count: 32, color: 'text-red-600' },
    { icon: Music, name: 'Audio', count: 18, color: 'text-purple-600' },
    { icon: FileText, name: 'Documents', count: 45, color: 'text-blue-600' }
  ];

  const recentMemories = [
    { id: 1, name: 'Family Vacation 2024', type: 'Album', date: '2024-01-15', items: 24 },
    { id: 2, name: 'Birthday Celebration', type: 'Video', date: '2024-01-10', items: 3 },
    { id: 3, name: 'Holiday Traditions', type: 'Mixed', date: '2024-01-05', items: 18 },
    { id: 4, name: 'Graduation Day', type: 'Album', date: '2024-01-01', items: 41 }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Family Folder</h1>
          <p className="text-gray-600 mt-2">Store and organize your precious family memories</p>
        </div>
        <Button>
          <Camera className="h-4 w-4 mr-2" />
          Add Memories
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {mediaTypes.map((type) => {
          const Icon = type.icon;
          return (
            <Card key={type.name}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <Icon className={`h-8 w-8 ${type.color}`} />
                    <h3 className="font-semibold text-lg mt-2">{type.name}</h3>
                    <p className="text-gray-600">{type.count} items</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Heart className="h-5 w-5 text-red-500" />
              <span>Recent Memories</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentMemories.map((memory) => (
                <div key={memory.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50">
                  <div>
                    <h4 className="font-medium">{memory.name}</h4>
                    <p className="text-sm text-gray-600">{memory.type} • {memory.items} items</p>
                  </div>
                  <span className="text-sm text-gray-500">{memory.date}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Family Timeline</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-medium">New photos added</h4>
                  <p className="text-sm text-gray-600">Family vacation album updated</p>
                  <p className="text-xs text-gray-500">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-medium">Video uploaded</h4>
                  <p className="text-sm text-gray-600">Birthday celebration recording</p>
                  <p className="text-xs text-gray-500">1 day ago</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-medium">Album created</h4>
                  <p className="text-sm text-gray-600">Holiday traditions collection</p>
                  <p className="text-xs text-gray-500">3 days ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
