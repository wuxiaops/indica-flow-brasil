
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { TrendingUp, Users, Target, Trophy, ArrowUp, ArrowDown } from 'lucide-react';
import DashboardCharts from './DashboardCharts';
import QuickActions from './QuickActions';
import SearchBar from './SearchBar';

interface DashboardProps {
  language: string;
}

const Dashboard = ({ language }: DashboardProps) => {
  const texts = {
    pt: {
      title: 'Dashboard',
      subtitle: 'Visão geral do seu programa de indicações',
      totalReferrals: 'Total de Indicações',
      activePrograms: 'Programas Ativos',
      conversionRate: 'Taxa de Conversão',
      totalRewards: 'Recompensas Pagas',
      recentActivity: 'Atividade Recente',
      viewAll: 'Ver Todas',
      programsSummary: 'Resumo dos Programas',
      insights: 'Insights Automáticos',
      thisMonth: 'este mês',
      newReferralCreated: 'Nova indicação criada',
      referralConverted: 'Indicação convertida',
      newProgramActivated: 'Novo programa ativado',
      system: 'Sistema',
      participants: 'participantes',
      conversions: 'conversões',
      active: 'ativo',
      recommendation: 'Recomendação',
      increaseRewards: 'Considere aumentar as recompensas do Programa Básico para melhorar a taxa de conversão.',
      bestPerformer: 'Melhor Performance',
      premiumProgram: 'O Programa Premium 2024 tem a melhor taxa de conversão (51%). Continue investindo neste programa.'
    },
    en: {
      title: 'Dashboard',
      subtitle: 'Overview of your referral program',
      totalReferrals: 'Total Referrals',
      activePrograms: 'Active Programs',
      conversionRate: 'Conversion Rate',
      totalRewards: 'Rewards Paid',
      recentActivity: 'Recent Activity',
      viewAll: 'View All',
      programsSummary: 'Programs Summary',
      insights: 'Automated Insights',
      thisMonth: 'this month',
      newReferralCreated: 'New referral created',
      referralConverted: 'Referral converted',
      newProgramActivated: 'New program activated',
      system: 'System',
      participants: 'participants',
      conversions: 'conversions',
      active: 'active',
      recommendation: 'Recommendation',
      increaseRewards: 'Consider increasing Basic Program rewards to improve conversion rate.',
      bestPerformer: 'Best Performer',
      premiumProgram: 'Premium Program 2024 has the best conversion rate (51%). Keep investing in this program.'
    }
  };

  const t = texts[language as keyof typeof texts];

  const stats = [
    {
      title: t.totalReferrals,
      value: '247',
      change: '+12%',
      trend: 'up',
      icon: Users,
      color: 'text-blue-600'
    },
    {
      title: t.activePrograms,
      value: '3',
      change: '+1',
      trend: 'up',
      icon: Target,
      color: 'text-green-600'
    },
    {
      title: t.conversionRate,
      value: '68%',
      change: '+5%',
      trend: 'up',
      icon: TrendingUp,
      color: 'text-purple-600'
    },
    {
      title: t.totalRewards,
      value: 'R$ 34.750',
      change: '+18%',
      trend: 'up',
      icon: Trophy,
      color: 'text-orange-600'
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{t.title}</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          {t.subtitle}
        </p>
      </div>

      <SearchBar language={language} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          const TrendIcon = stat.trend === 'up' ? ArrowUp : ArrowDown;
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {stat.title}
                </CardTitle>
                <Icon className={`h-5 w-5 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="flex items-center space-x-2">
                  <Badge 
                    variant={stat.trend === 'up' ? 'default' : 'destructive'} 
                    className="text-xs flex items-center gap-1"
                  >
                    <TrendIcon className="h-3 w-3" />
                    {stat.change}
                  </Badge>
                  <span className="text-xs text-gray-500">{t.thisMonth}</span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <QuickActions language={language} />

      <DashboardCharts language={language} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              {t.recentActivity}
              <Button variant="outline" size="sm">{t.viewAll}</Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  action: t.newReferralCreated,
                  user: 'Maria Costa',
                  time: '2 min atrás',
                  type: 'create'
                },
                {
                  action: t.referralConverted,
                  user: 'João Santos',
                  time: '15 min atrás',
                  type: 'convert'
                },
                {
                  action: t.newProgramActivated,
                  user: t.system,
                  time: '1 hora atrás',
                  type: 'system'
                }
              ].map((activity, index) => (
                <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-700 last:border-0">
                  <div className="flex items-center space-x-3">
                    <div className={`w-2 h-2 rounded-full ${
                      activity.type === 'create' ? 'bg-blue-500' :
                      activity.type === 'convert' ? 'bg-green-500' : 'bg-orange-500'
                    }`} />
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        {activity.action}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {activity.user}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-400">
                    {activity.time}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>{t.programsSummary}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    name: 'Programa Premium 2024',
                    participants: 45,
                    conversions: 23,
                    status: 'ativo',
                    rate: '51%'
                  },
                  {
                    name: 'Programa Básico 2024',
                    participants: 78,
                    conversions: 34,
                    status: 'ativo',
                    rate: '44%'
                  }
                ].map((program, index) => (
                  <div key={index} className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        {program.name}
                      </p>
                      <Badge variant="default" className="text-xs">
                        {program.rate}
                      </Badge>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {program.participants} {t.participants} • 
                      {program.conversions} {t.conversions}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t.insights}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="h-4 w-4 text-blue-600" />
                    <span className="text-sm font-medium text-blue-900 dark:text-blue-100">
                      {t.recommendation}
                    </span>
                  </div>
                  <p className="text-xs text-blue-700 dark:text-blue-300">
                    {t.increaseRewards}
                  </p>
                </div>

                <div className="p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Trophy className="h-4 w-4 text-green-600" />
                    <span className="text-sm font-medium text-green-900 dark:text-green-100">
                      {t.bestPerformer}
                    </span>
                  </div>
                  <p className="text-xs text-green-700 dark:text-green-300">
                    {t.premiumProgram}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
