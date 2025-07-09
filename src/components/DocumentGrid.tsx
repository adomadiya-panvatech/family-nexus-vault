
import React, { useState } from 'react';
import { FileText, Upload, Filter, Grid, List, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DocumentUpload } from '@/components/DocumentUpload';
import { DocumentCard } from '@/components/DocumentCard';

export const DocumentGrid = () => {
  const [showUpload, setShowUpload] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const recentDocuments = [
    {
      id: '1',
      name: 'Estate Planning Will.pdf',
      type: 'Legal Document',
      uploadDate: '2024-01-15',
      size: '2.4 MB',
      aiTags: ['Estate Planning', 'Legal', 'Important'],
      securityLevel: 'High'
    },
    {
      id: '2',
      name: 'Medical Records Summary.pdf',
      type: 'Medical Document',
      uploadDate: '2024-01-14',
      size: '1.8 MB',
      aiTags: ['Medical', 'Health Records', 'HIPAA'],
      securityLevel: 'High'
    },
    {
      id: '3',
      name: 'Investment Portfolio Q4.xlsx',
      type: 'Financial Document',
      uploadDate: '2024-01-12',
      size: '856 KB',
      aiTags: ['Financial', 'Investments', 'Quarterly'],
      securityLevel: 'Medium'
    },
    {
      id: '4',
      name: 'Family Photos 2024.zip',
      type: 'Media Archive',
      uploadDate: '2024-01-10',
      size: '45.2 MB',
      aiTags: ['Family', 'Photos', 'Personal'],
      securityLevel: 'Low'
    }
  ];

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center space-x-2">
            <FileText className="h-5 w-5" />
            <span>Document Library</span>
          </CardTitle>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
            >
              {viewMode === 'grid' ? <List className="h-4 w-4" /> : <Grid className="h-4 w-4" />}
            </Button>
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button onClick={() => setShowUpload(true)}>
              <Upload className="h-4 w-4 mr-2" />
              Upload
            </Button>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 gap-4' : 'space-y-3'}>
          {recentDocuments.map((doc) => (
            <DocumentCard key={doc.id} document={doc} viewMode={viewMode} />
          ))}
        </div>
        
        {recentDocuments.length === 0 && (
          <div className="text-center py-12">
            <FileText className="h-12 w-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No documents yet</h3>
            <p className="text-gray-500 mb-4">Upload your first document to get started</p>
            <Button onClick={() => setShowUpload(true)}>
              <Upload className="h-4 w-4 mr-2" />
              Upload Document
            </Button>
          </div>
        )}
      </CardContent>
      
      {showUpload && (
        <DocumentUpload onClose={() => setShowUpload(false)} />
      )}
    </Card>
  );
};
