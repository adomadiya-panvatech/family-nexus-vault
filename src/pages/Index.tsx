
import React, { useState } from 'react';
import { DashboardHeader } from '@/components/DashboardHeader';
import { SidebarNavigation } from '@/components/SidebarNavigation';
import { DocumentGrid } from '@/components/DocumentGrid';
import { QuickActions } from '@/components/QuickActions';
import { ActivityFeed } from '@/components/ActivityFeed';
import { VaultStats } from '@/components/VaultStats';

const Index = () => {
  const [activeSection, setActiveSection] = useState('dashboard');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <DashboardHeader />
      
      <div className="flex">
        <SidebarNavigation 
          activeSection={activeSection} 
          setActiveSection={setActiveSection} 
        />
        
        <main className="flex-1 p-6 ml-64">
          {activeSection === 'dashboard' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">Welcome to Your Digital Vault</h1>
                  <p className="text-gray-600 mt-2">Secure, AI-powered document management for your most important files</p>
                </div>
              </div>
              
              <VaultStats />
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <DocumentGrid />
                </div>
                <div className="space-y-6">
                  <QuickActions />
                  <ActivityFeed />
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Index;
