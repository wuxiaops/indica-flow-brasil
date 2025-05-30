
import React from 'react';
import { 
  BarChart3, 
  Target, 
  Users, 
  Trophy, 
  Webhook, 
  Settings,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface SidebarProps {
  isCollapsed: boolean;
  toggleSidebar: () => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
  language: string;
}

const Sidebar = ({ isCollapsed, toggleSidebar, activeSection, setActiveSection, language }: SidebarProps) => {
  const menuItems = [
    { 
      id: 'dashboard', 
      icon: BarChart3, 
      label: language === 'pt' ? 'Dashboard' : 'Dashboard' 
    },
    { 
      id: 'programs', 
      icon: Target, 
      label: language === 'pt' ? 'Programas' : 'Programs' 
    },
    { 
      id: 'indications', 
      icon: Users, 
      label: language === 'pt' ? 'Indicações' : 'Referrals' 
    },
    { 
      id: 'gamification', 
      icon: Trophy, 
      label: language === 'pt' ? 'Gamificação' : 'Gamification' 
    },
    { 
      id: 'webhooks', 
      icon: Webhook, 
      label: language === 'pt' ? 'Webhooks' : 'Webhooks' 
    },
    { 
      id: 'admin', 
      icon: Settings, 
      label: language === 'pt' ? 'Administração' : 'Administration' 
    },
  ];

  return (
    <div className={cn(
      "bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 h-full transition-all duration-300 flex flex-col",
      isCollapsed ? "w-16" : "w-64"
    )}>
      <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
        {!isCollapsed && (
          <h2 className="font-semibold text-gray-900 dark:text-white">
            {language === 'pt' ? 'Menu Principal' : 'Main Menu'}
          </h2>
        )}
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleSidebar}
          className="hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
      </div>

      <nav className="flex-1 p-2">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <Button
                  variant={activeSection === item.id ? "secondary" : "ghost"}
                  className={cn(
                    "w-full justify-start hover:bg-gray-100 dark:hover:bg-gray-800",
                    isCollapsed ? "px-2" : "px-3",
                    activeSection === item.id && "bg-gray-100 dark:bg-gray-800"
                  )}
                  onClick={() => setActiveSection(item.id)}
                >
                  <Icon className="h-5 w-5" />
                  {!isCollapsed && <span className="ml-3">{item.label}</span>}
                </Button>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
