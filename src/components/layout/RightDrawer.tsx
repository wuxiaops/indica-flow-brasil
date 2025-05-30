
import React from 'react';
import { X, Clock, Eye, Edit } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

interface RightDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  language: string;
}

const RightDrawer = ({ isOpen, onClose, language }: RightDrawerProps) => {
  if (!isOpen) return null;

  const texts = {
    pt: {
      title: 'Detalhes da Indicação',
      status: 'Status',
      pending: 'Pendente',
      date: 'Data',
      referrer: 'Indicador',
      referred: 'Indicado',
      program: 'Programa',
      reward: 'Recompensa',
      actions: 'Ações',
      view: 'Visualizar',
      edit: 'Editar',
      recentActivity: 'Atividade Recente'
    },
    en: {
      title: 'Referral Details',
      status: 'Status',
      pending: 'Pending',
      date: 'Date',
      referrer: 'Referrer',
      referred: 'Referred',
      program: 'Program',
      reward: 'Reward',
      actions: 'Actions',
      view: 'View',
      edit: 'Edit',
      recentActivity: 'Recent Activity'
    }
  };

  const t = texts[language as keyof typeof texts];

  return (
    <div className="fixed inset-y-0 right-0 w-96 bg-white dark:bg-gray-900 border-l border-gray-200 dark:border-gray-700 shadow-lg z-50 animate-slide-in-right">
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{t.title}</h3>
        <Button variant="ghost" size="sm" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </div>

      <div className="p-4 space-y-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">#IND-2024-001</CardTitle>
            <Badge variant="secondary" className="w-fit">
              {t.pending}
            </Badge>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <p className="text-gray-500 dark:text-gray-400">{t.date}</p>
                <p className="font-medium">15/03/2024</p>
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400">{t.reward}</p>
                <p className="font-medium text-green-600">R$ 250,00</p>
              </div>
            </div>

            <div>
              <p className="text-gray-500 dark:text-gray-400 text-sm">{t.referrer}</p>
              <div className="flex items-center gap-2 mt-1">
                <Avatar className="h-6 w-6">
                  <AvatarFallback className="text-xs">MC</AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium">Maria Costa</span>
              </div>
            </div>

            <div>
              <p className="text-gray-500 dark:text-gray-400 text-sm">{t.referred}</p>
              <div className="flex items-center gap-2 mt-1">
                <Avatar className="h-6 w-6">
                  <AvatarFallback className="text-xs">JS</AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium">João Santos</span>
              </div>
            </div>

            <div>
              <p className="text-gray-500 dark:text-gray-400 text-sm">{t.program}</p>
              <p className="text-sm font-medium">Programa Premium 2024</p>
            </div>
          </CardContent>
        </Card>

        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="flex-1">
            <Eye className="h-4 w-4 mr-2" />
            {t.view}
          </Button>
          <Button size="sm" className="flex-1">
            <Edit className="h-4 w-4 mr-2" />
            {t.edit}
          </Button>
        </div>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">{t.recentActivity}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2">
              {[
                { time: '10:30', action: 'Indicação criada' },
                { time: '11:15', action: 'E-mail enviado ao indicado' },
                { time: '14:20', action: 'Link acessado pelo indicado' }
              ].map((activity, index) => (
                <div key={index} className="flex items-center gap-3 text-sm">
                  <Clock className="h-4 w-4 text-gray-400" />
                  <div>
                    <p className="font-medium">{activity.action}</p>
                    <p className="text-gray-500 text-xs">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RightDrawer;
