
import React, { useState } from 'react';
import { FileText, Search, Filter, Upload, FolderOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { DocumentCard } from '@/components/DocumentCard';

export const DocumentsSection = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const allDocuments = [
    {
      id: '1',
      name: 'Estate Planning Will.pdf',
      type: 'Legal Document',
      uploadDate: '2024-01-15',
      size: '2.4 MB',
      aiTags: ['Estate Planning', 'Legal', 'Important'],
      securityLevel: 'High' as const
    },
    {
      id: '2',
      name: 'Medical Records Summary.pdf',
      type: 'Medical Document',
      uploadDate: '2024-01-14',
      size: '1.8 MB',
      aiTags: ['Medical', 'Health Records', 'HIPAA'],
      securityLevel: 'High' as const
    },
    {
      id: '3',
      name: 'Investment Portfolio Q4.xlsx',
      type: 'Financial Document',
      uploadDate: '2024-01-12',
      size: '856 KB',
      aiTags: ['Financial', 'Investments', 'Quarterly'],
      securityLevel: 'Medium' as const
    },
    {
      id: '4',
      name: 'Tax Returns 2023.pdf',
      type: 'Financial Document',
      uploadDate: '2024-01-10',
      size: '3.2 MB',
      aiTags: ['Tax', 'Financial', '2023'],
      securityLevel: 'High' as const
    },
    {
      id: '5',
      name: 'Insurance Policy.pdf',
      type: 'Insurance Document',
      uploadDate: '2024-01-08',
      size: '1.2 MB',
      aiTags: ['Insurance', 'Policy', 'Coverage'],
      securityLevel: 'Medium' as const
    }
  ];

  const categories = [
    { id: 'all', name: 'All Documents', count: allDocuments.length },
    { id: 'legal', name: 'Legal', count: 1 },
    { id: 'medical', name: 'Medical', count: 1 },
    { id: 'financial', name: 'Financial', count: 2 },
    { id: 'insurance', name: 'Insurance', count: 1 }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Documents</h1>
          <p className="text-gray-600 mt-2">Manage and organize all your important documents</p>
        </div>
        <Button>
          <Upload className="h-4 w-4 mr-2" />
          Upload Document
        </Button>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-1/4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Categories</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 text-left"
                >
                  <span className="flex items-center space-x-2">
                    <FolderOpen className="h-4 w-4 text-blue-600" />
                    <span>{category.name}</span>
                  </span>
                  <span className="text-gray-500 text-sm">{category.count}</span>
                </button>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="lg:w-3/4">
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search documents..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Button variant="outline">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {allDocuments.map((doc) => (
                  <DocumentCard key={doc.id} document={doc} viewMode="grid" />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
