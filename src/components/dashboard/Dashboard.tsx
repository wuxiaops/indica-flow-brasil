
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Users, Target, Trophy } from 'lucide-react';

interface DashboardProps {
  language: string;
}

const Dashboard = ({ language }: DashboardProps) => {
  const texts = {
    pt: {
      title: 'Dashboard',
      totalReferrals: 'Total de Indicações',
      activePrograms: 'Programas Ativos',
      conversionRate: 'Taxa de Conversão',
      totalRewards: 'Recompensas Pagas',
      recentActivity: 'Atividade Recente',
      viewAll: 'Ver Todas'
    },
    en: {
      title: 'Dashboard',
      totalReferrals: 'Total Referrals',
      activePrograms: 'Active Programs',
      conversionRate: 'Conversion Rate',
      totalRewards: 'Rewards Paid',
      recentActivity: 'Recent Activity',
      viewAll: 'View All'
    }
  };

  const t = texts[language as keyof typeof texts];

  const stats = [
    {
      title: t.totalReferrals,
      value: '247',
      change: '+12%',
      icon: Users,
      color: 'text-blue-600'
    },
    {
      title: t.activePrograms,
      value: '3',
      change: '+1',
      icon: Target,
      color: 'text-green-600'
    },
    {
      title: t.conversionRate,
      value: '68%',
      change: '+5%',
      icon: TrendingUp,
      color: 'text-purple-600'
    },
    {
      title: t.totalRewards,
      value: 'R$ 34.750',
      change: '+18%',
      icon: Trophy,
      color: 'text-orange-600'
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{t.title}</h1>
        <p className="text-gray-600 dark:text-gray-400">
          {language === 'pt' 
            ? 'Visão geral do seu programa de indicações' 
            : 'Overview of your referral program'
          }
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {stat.title}
                </CardTitle>
                <Icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stat.value}
                </div>
                <Badge variant="secondary" className="text-xs mt-1">
                  {stat.change} {language === 'pt' ? 'este mês' : 'this month'}
                </Badge>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              {t.recentActivity}
              <Badge variant="outline">{t.viewAll}</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  action: language === 'pt' ? 'Nova indicação criada' : 'New referral created',
                  user: 'Maria Costa',
                  time: '2 min atrás'
                },
                {
                  action: language === 'pt' ? 'Indicação convertida' : 'Referral converted',
                  user: 'João Santos',
                  time: '15 min atrás'
                },
                {
                  action: language === 'pt' ? 'Novo programa ativado' : 'New program activated',
                  user: 'Sistema',
                  time: '1 hora atrás'
                }
              ].map((activity, index) => (
                <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-700 last:border-0">
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {activity.action}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {activity.user}
                    </p>
                  </div>
                  <span className="text-xs text-gray-400">
                    {activity.time}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>
              {language === 'pt' ? 'Resumo dos Programas' : 'Programs Summary'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  name: 'Programa Premium 2024',
                  participants: 45,
                  conversions: 23,
                  status: 'ativo'
                },
                {
                  name: 'Programa Básico 2024',
                  participants: 78,
                  conversions: 34,
                  status: 'ativo'
                }
              ].map((program, index) => (
                <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-700 last:border-0">
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {program.name}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {program.participants} {language === 'pt' ? 'participantes' : 'participants'} • 
                      {program.conversions} {language === 'pt' ? 'conversões' : 'conversions'}
                    </p>
                  </div>
                  <Badge 
                    variant={program.status === 'ativo' ? 'default' : 'secondary'}
                    className="text-xs"
                  >
                    {language === 'pt' ? program.status : program.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
