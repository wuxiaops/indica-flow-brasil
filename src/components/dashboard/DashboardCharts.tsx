
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

interface DashboardChartsProps {
  language: string;
}

const DashboardCharts = ({ language }: DashboardChartsProps) => {
  const texts = {
    pt: {
      conversionTrend: 'Tendência de Conversões',
      referralsByMonth: 'Indicações por Mês',
      programPerformance: 'Performance dos Programas',
      rewardDistribution: 'Distribuição de Recompensas'
    },
    en: {
      conversionTrend: 'Conversion Trend',
      referralsByMonth: 'Referrals by Month',
      programPerformance: 'Program Performance',
      rewardDistribution: 'Reward Distribution'
    }
  };

  const t = texts[language as keyof typeof texts];

  const conversionData = [
    { month: 'Jan', conversions: 12, total: 18 },
    { month: 'Fev', conversions: 19, total: 28 },
    { month: 'Mar', conversions: 23, total: 32 },
    { month: 'Abr', conversions: 31, total: 45 },
    { month: 'Mai', conversions: 28, total: 41 },
    { month: 'Jun', conversions: 35, total: 52 }
  ];

  const referralData = [
    { month: 'Jan', indicacoes: 18, convertidas: 12 },
    { month: 'Fev', indicacoes: 28, convertidas: 19 },
    { month: 'Mar', indicacoes: 32, convertidas: 23 },
    { month: 'Abr', indicacoes: 45, convertidas: 31 },
    { month: 'Mai', indicacoes: 41, convertidas: 28 },
    { month: 'Jun', indicacoes: 52, convertidas: 35 }
  ];

  const programData = [
    { name: 'Premium 2024', indicacoes: 45, conversoes: 23 },
    { name: 'Básico 2024', indicacoes: 78, conversoes: 34 },
    { name: 'Especial 2024', indicacoes: 23, conversoes: 18 }
  ];

  const rewardData = [
    { name: 'Comissões', value: 65, color: '#8884d8' },
    { name: 'Bônus', value: 25, color: '#82ca9d' },
    { name: 'Prêmios', value: 10, color: '#ffc658' }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">{t.conversionTrend}</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={conversionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Area 
                type="monotone" 
                dataKey="conversions" 
                stroke="#8884d8" 
                fill="#8884d8" 
                fillOpacity={0.6}
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">{t.referralsByMonth}</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={referralData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="indicacoes" fill="#8884d8" />
              <Bar dataKey="convertidas" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">{t.programPerformance}</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={programData} layout="horizontal">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" width={100} />
              <Tooltip />
              <Bar dataKey="indicacoes" fill="#8884d8" />
              <Bar dataKey="conversoes" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">{t.rewardDistribution}</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={rewardData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {rewardData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardCharts;
