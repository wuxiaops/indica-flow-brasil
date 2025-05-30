
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Target, Users, Zap, Settings } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface QuickActionsProps {
  language: string;
}

const QuickActions = ({ language }: QuickActionsProps) => {
  const { toast } = useToast();

  const texts = {
    pt: {
      quickActions: 'Ações Rápidas',
      newReferral: 'Nova Indicação',
      createProgram: 'Criar Programa',
      inviteUsers: 'Convidar Usuários',
      setupWebhook: 'Configurar Webhook',
      systemSettings: 'Configurações',
      actionCompleted: 'Ação executada com sucesso!',
      actionDescription: 'Esta funcionalidade será implementada em breve.'
    },
    en: {
      quickActions: 'Quick Actions',
      newReferral: 'New Referral',
      createProgram: 'Create Program',
      inviteUsers: 'Invite Users',
      setupWebhook: 'Setup Webhook',
      systemSettings: 'Settings',
      actionCompleted: 'Action completed successfully!',
      actionDescription: 'This functionality will be implemented soon.'
    }
  };

  const t = texts[language as keyof typeof texts];

  const handleAction = (actionName: string) => {
    toast({
      title: t.actionCompleted,
      description: `${actionName} - ${t.actionDescription}`,
    });
  };

  const actions = [
    {
      icon: Plus,
      label: t.newReferral,
      color: 'bg-blue-500 hover:bg-blue-600',
      onClick: () => handleAction(t.newReferral)
    },
    {
      icon: Target,
      label: t.createProgram,
      color: 'bg-green-500 hover:bg-green-600',
      onClick: () => handleAction(t.createProgram)
    },
    {
      icon: Users,
      label: t.inviteUsers,
      color: 'bg-purple-500 hover:bg-purple-600',
      onClick: () => handleAction(t.inviteUsers)
    },
    {
      icon: Zap,
      label: t.setupWebhook,
      color: 'bg-orange-500 hover:bg-orange-600',
      onClick: () => handleAction(t.setupWebhook)
    },
    {
      icon: Settings,
      label: t.systemSettings,
      color: 'bg-gray-500 hover:bg-gray-600',
      onClick: () => handleAction(t.systemSettings)
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">{t.quickActions}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {actions.map((action, index) => {
            const Icon = action.icon;
            return (
              <Button
                key={index}
                variant="outline"
                className={`${action.color} text-white border-0 flex flex-col items-center gap-2 h-16 transition-all duration-200 hover:scale-105`}
                onClick={action.onClick}
              >
                <Icon className="h-5 w-5" />
                <span className="text-xs font-medium">{action.label}</span>
              </Button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickActions;
