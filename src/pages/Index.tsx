
import React, { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import RightDrawer from '@/components/layout/RightDrawer';
import Dashboard from '@/components/dashboard/Dashboard';
import DynamicTabs from '@/components/ui/tabs-dynamic';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState('pt');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isRightDrawerOpen, setIsRightDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('dashboard');
  const [activeTab, setActiveTab] = useState('overview');

  // Apply dark mode to document
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  const toggleLanguage = () => setLanguage(language === 'pt' ? 'en' : 'pt');
  const toggleSidebar = () => setIsSidebarCollapsed(!isSidebarCollapsed);

  // Sample tabs for different sections
  const getProgramsTabs = () => [
    {
      id: 'config',
      label: language === 'pt' ? 'Configuração' : 'Configuration',
      content: (
        <Card>
          <CardContent className="pt-6">
            <p className="text-gray-600 dark:text-gray-400">
              {language === 'pt' 
                ? 'Configurações dos programas de indicação aparecerão aqui.' 
                : 'Referral program configurations will appear here.'
              }
            </p>
          </CardContent>
        </Card>
      )
    },
    {
      id: 'participants',
      label: language === 'pt' ? 'Participantes' : 'Participants',
      content: (
        <Card>
          <CardContent className="pt-6">
            <p className="text-gray-600 dark:text-gray-400">
              {language === 'pt' 
                ? 'Lista de participantes dos programas.' 
                : 'List of program participants.'
              }
            </p>
          </CardContent>
        </Card>
      ),
      closable: true
    },
    {
      id: 'rules',
      label: language === 'pt' ? 'Regras' : 'Rules',
      content: (
        <Card>
          <CardContent className="pt-6">
            <p className="text-gray-600 dark:text-gray-400">
              {language === 'pt' 
                ? 'Regras de gamificação e recompensas.' 
                : 'Gamification and reward rules.'
              }
            </p>
          </CardContent>
        </Card>
      ),
      closable: true
    }
  ];

  const getIndicationsTabs = () => [
    {
      id: 'overview',
      label: language === 'pt' ? 'Visão Geral' : 'Overview',
      content: (
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-400">
                {language === 'pt' 
                  ? 'Dashboard das indicações com filtros e busca.' 
                  : 'Referrals dashboard with filters and search.'
                }
              </p>
              <button 
                onClick={() => setIsRightDrawerOpen(true)}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm transition-colors"
              >
                {language === 'pt' ? 'Ver Detalhes da Indicação' : 'View Referral Details'}
              </button>
            </div>
          </CardContent>
        </Card>
      )
    },
    {
      id: 'pending',
      label: language === 'pt' ? 'Pendentes' : 'Pending',
      content: (
        <Card>
          <CardContent className="pt-6">
            <p className="text-gray-600 dark:text-gray-400">
              {language === 'pt' 
                ? 'Indicações pendentes de conversão.' 
                : 'Pending referrals for conversion.'
              }
            </p>
          </CardContent>
        </Card>
      ),
      closable: true
    }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <Dashboard language={language} />;
      case 'programs':
        return (
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              {language === 'pt' ? 'Programas de Indicação' : 'Referral Programs'}
            </h1>
            <DynamicTabs
              tabs={getProgramsTabs()}
              activeTab={activeTab}
              onTabChange={setActiveTab}
              addTabLabel={language === 'pt' ? 'Nova Aba' : 'New Tab'}
            />
          </div>
        );
      case 'indications':
        return (
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              {language === 'pt' ? 'Gestão de Indicações' : 'Referrals Management'}
            </h1>
            <DynamicTabs
              tabs={getIndicationsTabs()}
              activeTab={activeTab}
              onTabChange={setActiveTab}
              addTabLabel={language === 'pt' ? 'Nova Aba' : 'New Tab'}
            />
          </div>
        );
      default:
        return (
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {language === 'pt' ? 'Seção em Desenvolvimento' : 'Section Under Development'}
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                {language === 'pt' 
                  ? 'Esta seção será implementada em breve com todos os recursos necessários.' 
                  : 'This section will be implemented soon with all necessary features.'
                }
              </p>
            </CardContent>
          </Card>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 w-full">
      <Header 
        isDarkMode={isDarkMode} 
        toggleTheme={toggleTheme}
        language={language}
        toggleLanguage={toggleLanguage}
      />
      
      <div className="flex h-[calc(100vh-4rem)]">
        <Sidebar 
          isCollapsed={isSidebarCollapsed}
          toggleSidebar={toggleSidebar}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          language={language}
        />
        
        <main className="flex-1 overflow-auto p-6">
          {renderContent()}
        </main>
        
        <RightDrawer 
          isOpen={isRightDrawerOpen}
          onClose={() => setIsRightDrawerOpen(false)}
          language={language}
        />
      </div>
    </div>
  );
};

export default Index;
