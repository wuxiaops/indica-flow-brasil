
export const mockUsers = [
  {
    id: 1,
    name: "Maria Costa",
    email: "maria.costa@email.com",
    avatar: "MC",
    status: "ativo",
    totalReferrals: 12,
    totalEarnings: 2400.00,
    joinDate: "2024-01-15"
  },
  {
    id: 2,
    name: "João Santos",
    email: "joao.santos@email.com",
    avatar: "JS",
    status: "ativo",
    totalReferrals: 8,
    totalEarnings: 1600.00,
    joinDate: "2024-02-20"
  },
  {
    id: 3,
    name: "Ana Silva",
    email: "ana.silva@email.com",
    avatar: "AS",
    status: "pendente",
    totalReferrals: 0,
    totalEarnings: 0,
    joinDate: "2024-03-10"
  }
];

export const mockReferrals = [
  {
    id: "IND-2024-001",
    referrerId: 1,
    referrerName: "Maria Costa",
    referredName: "João Santos",
    referredEmail: "joao.santos@email.com",
    program: "Programa Premium 2024",
    status: "pendente",
    reward: 250.00,
    date: "2024-03-15",
    conversionDate: null
  },
  {
    id: "IND-2024-002",
    referrerId: 1,
    referrerName: "Maria Costa",
    referredName: "Carlos Lima",
    referredEmail: "carlos.lima@email.com",
    program: "Programa Premium 2024",
    status: "convertida",
    reward: 250.00,
    date: "2024-03-10",
    conversionDate: "2024-03-12"
  },
  {
    id: "IND-2024-003",
    referrerId: 2,
    referrerName: "João Santos",
    referredName: "Paula Oliveira",
    referredEmail: "paula.oliveira@email.com",
    program: "Programa Básico 2024",
    status: "expirada",
    reward: 150.00,
    date: "2024-02-25",
    conversionDate: null
  }
];

export const mockPrograms = [
  {
    id: 1,
    name: "Programa Premium 2024",
    description: "Programa de indicações para clientes premium com recompensas especiais",
    reward: 250.00,
    status: "ativo",
    validUntil: "2024-12-31",
    participants: 45,
    conversions: 23
  },
  {
    id: 2,
    name: "Programa Básico 2024",
    description: "Programa padrão de indicações para todos os clientes",
    reward: 150.00,
    status: "ativo",
    validUntil: "2024-12-31",
    participants: 78,
    conversions: 34
  }
];

export const mockWebhooks = [
  {
    id: 1,
    name: "Notificação de Nova Indicação",
    url: "https://api.exemplo.com/webhooks/nova-indicacao",
    events: ["indicacao.criada", "indicacao.convertida"],
    status: "ativo",
    lastTriggered: "2024-03-15 10:30:00"
  },
  {
    id: 2,
    name: "Sync CRM Externo",
    url: "https://crm.empresa.com/api/sync",
    events: ["usuario.criado"],
    status: "erro",
    lastTriggered: "2024-03-14 15:45:00"
  }
];

export const mockGamification = {
  leaderboard: [
    { position: 1, name: "Maria Costa", points: 2400, badges: ["top_referrer", "platinum"] },
    { position: 2, name: "João Santos", points: 1600, badges: ["gold"] },
    { position: 3, name: "Ana Silva", points: 950, badges: ["silver"] }
  ],
  challenges: [
    {
      id: 1,
      title: "Mestre das Indicações",
      description: "Faça 10 indicações este mês",
      progress: 7,
      target: 10,
      reward: "500 pontos + Badge Especial"
    },
    {
      id: 2,
      title: "Conversor Expert",
      description: "Tenha 5 indicações convertidas",
      progress: 3,
      target: 5,
      reward: "1000 pontos"
    }
  ]
};
