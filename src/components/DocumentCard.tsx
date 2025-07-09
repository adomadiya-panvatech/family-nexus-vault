
import React from 'react';
import { FileText, Calendar, HardDrive, Shield, Tag, MoreVertical } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

interface Document {
  id: string;
  name: string;
  type: string;
  uploadDate: string;
  size: string;
  aiTags: string[];
  securityLevel: 'Low' | 'Medium' | 'High';
}

interface DocumentCardProps {
  document: Document;
  viewMode: 'grid' | 'list';
}

export const DocumentCard = ({ document, viewMode }: DocumentCardProps) => {
  const getSecurityColor = (level: string) => {
    switch (level) {
      case 'High': return 'bg-red-100 text-red-700';
      case 'Medium': return 'bg-yellow-100 text-yellow-700';
      case 'Low': return 'bg-green-100 text-green-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  if (viewMode === 'list') {
    return (
      <Card className="hover:shadow-md transition-shadow">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 flex-1">
              <FileText className="h-8 w-8 text-blue-600" />
              <div className="flex-1">
                <h4 className="font-medium text-gray-900">{document.name}</h4>
                <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                  <span>{document.type}</span>
                  <span className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    {document.uploadDate}
                  </span>
                  <span className="flex items-center">
                    <HardDrive className="h-3 w-3 mr-1" />
                    {document.size}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Badge className={getSecurityColor(document.securityLevel)}>
                <Shield className="h-3 w-3 mr-1" />
                {document.securityLevel}
              </Badge>
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="hover:shadow-md transition-shadow cursor-pointer">
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-3">
          <FileText className="h-8 w-8 text-blue-600" />
          <Button variant="ghost" size="icon">
            <MoreVertical className="h-4 w-4" />
          </Button>
        </div>
        
        <h4 className="font-medium text-gray-900 mb-2 line-clamp-2">{document.name}</h4>
        
        <div className="space-y-2 text-sm text-gray-500">
          <div className="flex items-center justify-between">
            <span>{document.type}</span>
            <Badge className={getSecurityColor(document.securityLevel)}>
              {document.securityLevel}
            </Badge>
          </div>
          
          <div className="flex items-center space-x-1">
            <Calendar className="h-3 w-3" />
            <span>{document.uploadDate}</span>
          </div>
          
          <div className="flex items-center space-x-1">
            <HardDrive className="h-3 w-3" />
            <span>{document.size}</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-1 mt-3">
          {document.aiTags.slice(0, 2).map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              <Tag className="h-2 w-2 mr-1" />
              {tag}
            </Badge>
          ))}
          {document.aiTags.length > 2 && (
            <Badge variant="secondary" className="text-xs">
              +{document.aiTags.length - 2}
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
