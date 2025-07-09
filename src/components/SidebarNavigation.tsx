
import React from 'react';
import { 
  FileText, 
  Users, 
  MessageSquare, 
  Building2, 
  Camera, 
  BarChart3, 
  Settings,
  Shield,
  Clock,
  Share2
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarNavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const navigationItems = [
  { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
  { id: 'documents', label: 'Documents', icon: FileText },
  { id: 'family-folder', label: 'Family Folder', icon: Camera },
  { id: 'messaging', label: 'Secure Messages', icon: MessageSquare },
  { id: 'vendors', label: 'Vendor Management', icon: Building2 },
  { id: 'contacts', label: 'Quick Connect', icon: Users },
  { id: 'access-control', label: 'Access Control', icon: Shield },
  { id: 'sharing', label: 'Sharing & Links', icon: Share2 },
  { id: 'activity', label: 'Activity Logs', icon: Clock },
  { id: 'settings', label: 'Settings', icon: Settings },
];

export const SidebarNavigation = ({ activeSection, setActiveSection }: SidebarNavigationProps) => {
  return (
    <aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-white border-r border-gray-200 overflow-y-auto">
      <nav className="p-4">
        <ul className="space-y-2">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <button
                  onClick={() => setActiveSection(item.id)}
                  className={cn(
                    "w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors",
                    activeSection === item.id
                      ? "bg-blue-50 text-blue-700 font-medium"
                      : "text-gray-700 hover:bg-gray-50"
                  )}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};
