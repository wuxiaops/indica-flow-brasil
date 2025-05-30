
import React from 'react';
import { X, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
  closable?: boolean;
}

interface DynamicTabsProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  onTabClose?: (tabId: string) => void;
  onAddTab?: () => void;
  addTabLabel?: string;
}

const DynamicTabs = ({ 
  tabs, 
  activeTab, 
  onTabChange, 
  onTabClose, 
  onAddTab, 
  addTabLabel = "Adicionar Tab" 
}: DynamicTabsProps) => {
  return (
    <div className="w-full">
      <div className="border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <nav className="flex space-x-1 overflow-x-auto">
            {tabs.map((tab) => (
              <div key={tab.id} className="flex items-center group">
                <button
                  className={cn(
                    "px-4 py-2 text-sm font-medium border-b-2 transition-colors whitespace-nowrap",
                    activeTab === tab.id
                      ? "border-blue-500 text-blue-600 dark:text-blue-400"
                      : "border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                  )}
                  onClick={() => onTabChange(tab.id)}
                >
                  {tab.label}
                </button>
                {tab.closable && onTabClose && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="ml-1 h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={(e) => {
                      e.stopPropagation();
                      onTabClose(tab.id);
                    }}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                )}
              </div>
            ))}
          </nav>
          {onAddTab && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onAddTab}
              className="ml-2 flex items-center gap-2"
            >
              <Plus className="h-4 w-4" />
              <span className="hidden sm:inline">{addTabLabel}</span>
            </Button>
          )}
        </div>
      </div>
      
      <div className="mt-4">
        {tabs.find(tab => tab.id === activeTab)?.content}
      </div>
    </div>
  );
};

export default DynamicTabs;
