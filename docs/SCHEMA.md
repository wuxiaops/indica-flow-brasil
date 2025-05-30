
# 📊 Schema de Dados - IndicaFlow Brasil

## 🎯 Visão Geral

Este documento define a estrutura de dados completa para integração entre frontend e backend do IndicaFlow Brasil. Todos os tipos TypeScript aqui definidos devem ser respeitados para garantir compatibilidade total.

## 📋 Esquemas Principais

### 👤 Usuários (Users)

```typescript
interface User {
  id: string;                    // UUID único
  name: string;                  // Nome completo
  email: string;                 // Email único
  avatar?: string;               // URL do avatar
  role: UserRole;                // Papel no sistema
  status: UserStatus;            // Status ativo/inativo
  createdAt: Date;               // Data de criação
  updatedAt: Date;               // Última atualização
  
  // Estatísticas
  totalReferrals: number;        // Total de indicações feitas
  successfulReferrals: number;   // Indicações convertidas
  totalEarned: number;           // Total ganho em recompensas
  
  // Configurações
  preferences: UserPreferences;   // Preferências do usuário
  notifications: NotificationSettings; // Configurações de notificação
}

type UserRole = 'admin' | 'manager' | 'user';
type UserStatus = 'active' | 'inactive' | 'pending' | 'suspended';

interface UserPreferences {
  language: 'pt' | 'en';         // Idioma preferido
  theme: 'light' | 'dark' | 'auto'; // Tema da interface
  timezone: string;              // Fuso horário
  a11y: A11ySettings;           // Configurações de acessibilidade
}

interface A11ySettings {
  vlibras: boolean;              // VLibras ativado
  highContrast: boolean;         // Alto contraste
  screenReader: boolean;         // Leitor de tela
  reducedMotion: boolean;        // Animações reduzidas
}

interface NotificationSettings {
  email: boolean;                // Notificações por email
  browser: boolean;              // Notificações do navegador
  newReferral: boolean;          // Nova indicação
  conversion: boolean;           // Conversão
  reward: boolean;               // Recompensa
}
```

### 🎯 Programas de Indicação (Programs)

```typescript
interface Program {
  id: string;                    // UUID único
  name: string;                  // Nome do programa
  description: string;           // Descrição detalhada
  slug: string;                  // Slug único para URLs
  
  // Status e datas
  status: ProgramStatus;         // Status do programa
  createdAt: Date;               // Data de criação
  updatedAt: Date;               // Última atualização
  startDate: Date;               // Data de início
  endDate?: Date;                // Data de fim (opcional)
  
  // Configurações de recompensa
  reward: RewardConfig;          // Configuração de recompensas
  
  // Regras
  rules: ProgramRules;           // Regras do programa
  
  // Estatísticas
  stats: ProgramStats;           // Estatísticas do programa
  
  // Configurações
  settings: ProgramSettings;     // Configurações gerais
}

type ProgramStatus = 'draft' | 'active' | 'paused' | 'ended' | 'archived';

interface RewardConfig {
  type: 'fixed' | 'percentage' | 'tiered'; // Tipo de recompensa
  value: number;                 // Valor base
  currency: 'BRL' | 'USD';       // Moeda
  tiers?: RewardTier[];          // Níveis (para tipo tiered)
  maxReward?: number;            // Recompensa máxima
  paymentMethod: PaymentMethod;  // Método de pagamento
}

interface RewardTier {
  minReferrals: number;          // Mínimo de indicações
  value: number;                 // Valor da recompensa
  description: string;           // Descrição do nível
}

type PaymentMethod = 'pix' | 'bank_transfer' | 'credit' | 'manual';

interface ProgramRules {
  maxReferralsPerUser?: number;  // Máx indicações por usuário
  minAge?: number;               // Idade mínima
  allowedCountries?: string[];   // Países permitidos
  excludedDomains?: string[];    // Domínios excluídos
  requireApproval: boolean;      // Requer aprovação manual
  preventSelfReferral: boolean;  // Previne auto-indicação
  preventDuplicates: boolean;    // Previne duplicatas
}

interface ProgramStats {
  totalParticipants: number;     // Total de participantes
  totalReferrals: number;        // Total de indicações
  successfulReferrals: number;   // Indicações convertidas
  conversionRate: number;        // Taxa de conversão (%)
  totalRewardsPaid: number;      // Total de recompensas pagas
  avgTimeToConversion: number;   // Tempo médio para conversão (dias)
}

interface ProgramSettings {
  publicLanding: boolean;        // Landing page pública
  customFields: CustomField[];  // Campos personalizados
  integrations: Integration[];   // Integrações ativas
  webhooks: Webhook[];           // Webhooks configurados
}
```

### 🔗 Indicações (Referrals)

```typescript
interface Referral {
  id: string;                    // UUID único
  
  // Relacionamentos
  referrerId: string;            // ID do indicador
  referrer: User;                // Dados do indicador
  programId: string;             // ID do programa
  program: Program;              // Dados do programa
  
  // Dados do indicado
  referred: ReferredPerson;      // Pessoa indicada
  
  // Status e controle
  status: ReferralStatus;        // Status atual
  statusHistory: StatusChange[]; // Histórico de mudanças
  
  // Datas importantes
  createdAt: Date;               // Data da indicação
  updatedAt: Date;               // Última atualização
  convertedAt?: Date;            // Data de conversão
  expiredAt?: Date;              // Data de expiração
  
  // Financeiro
  reward: ReferralReward;        // Recompensa
  
  // Dados extras
  source: string;                // Origem da indicação
  customData?: Record<string, any>; // Dados personalizados
  notes?: string;                // Observações
  
  // Rastreamento
  tracking: ReferralTracking;    // Dados de rastreamento
  
  // Atividades
  activities: Activity[];        // Log de atividades
}

interface ReferredPerson {
  name: string;                  // Nome completo
  email: string;                 // Email
  phone?: string;                // Telefone
  avatar?: string;               // Avatar
  company?: string;              // Empresa
  position?: string;             // Cargo
  customFields?: Record<string, any>; // Campos personalizados
}

type ReferralStatus = 
  | 'pending'                    // Pendente
  | 'contacted'                  // Contatado
  | 'qualified'                  // Qualificado
  | 'negotiating'                // Em negociação
  | 'converted'                  // Convertido
  | 'rejected'                   // Rejeitado
  | 'expired'                    // Expirado
  | 'cancelled';                 // Cancelado

interface StatusChange {
  from: ReferralStatus;          // Status anterior
  to: ReferralStatus;            // Novo status
  reason?: string;               // Motivo da mudança
  changedBy: string;             // Quem mudou (user ID)
  changedAt: Date;               // Quando mudou
  notes?: string;                // Observações
}

interface ReferralReward {
  amount: number;                // Valor da recompensa
  currency: 'BRL' | 'USD';       // Moeda
  status: RewardStatus;          // Status do pagamento
  paidAt?: Date;                 // Data do pagamento
  paymentMethod?: PaymentMethod; // Método de pagamento
  transactionId?: string;        // ID da transação
}

type RewardStatus = 'pending' | 'approved' | 'paid' | 'cancelled';

interface ReferralTracking {
  utm: {
    source?: string;             // UTM Source
    medium?: string;             // UTM Medium
    campaign?: string;           // UTM Campaign
    term?: string;               // UTM Term
    content?: string;            // UTM Content
  };
  ip: string;                    // IP do visitante
  userAgent: string;             // User Agent
  referrer?: string;             // Página de origem
  landingPage: string;           // Página de destino
  device: string;                // Dispositivo (mobile/desktop)
  location?: {
    country: string;             // País
    state: string;               // Estado
    city: string;                // Cidade
  };
}
```

### ⚡ Atividades (Activities)

```typescript
interface Activity {
  id: string;                    // UUID único
  type: ActivityType;            // Tipo da atividade
  title: string;                 // Título da atividade
  description: string;           // Descrição detalhada
  
  // Relacionamentos
  userId: string;                // Usuário que executou
  user: User;                    // Dados do usuário
  referralId?: string;           // Indicação relacionada (opcional)
  programId?: string;            // Programa relacionado (opcional)
  
  // Metadados
  metadata: Record<string, any>; // Dados extras
  
  // Controle
  createdAt: Date;               // Data da atividade
  isPublic: boolean;             // Visível publicamente
  
  // Dados específicos
  data: ActivityData;            // Dados específicos do tipo
}

type ActivityType = 
  | 'referral_created'           // Indicação criada
  | 'referral_converted'         // Indicação convertida
  | 'referral_rejected'          // Indicação rejeitada
  | 'reward_paid'                // Recompensa paga
  | 'program_created'            // Programa criado
  | 'program_updated'            // Programa atualizado
  | 'user_invited'               // Usuário convidado
  | 'user_joined'                // Usuário entrou
  | 'webhook_triggered'          // Webhook disparado
  | 'system_notification';       // Notificação do sistema

interface ActivityData {
  // Dados específicos baseados no tipo
  oldValue?: any;                // Valor anterior (updates)
  newValue?: any;                // Novo valor (updates)
  amount?: number;               // Valor monetário
  reason?: string;               // Motivo da ação
  
  // Dados de contexto
  ip?: string;                   // IP da ação
  userAgent?: string;            // User Agent
  location?: string;             // Localização
}
```

### 🔔 Notificações (Notifications)

```typescript
interface Notification {
  id: string;                    // UUID único
  
  // Destinatário
  userId: string;                // ID do usuário
  user: User;                    // Dados do usuário
  
  // Conteúdo
  type: NotificationType;        // Tipo da notificação
  title: string;                 // Título
  message: string;               // Mensagem
  icon?: string;                 // Ícone
  
  // Links e ações
  actionUrl?: string;            // URL de ação
  actionText?: string;           // Texto do botão
  
  // Controle
  status: NotificationStatus;    // Status
  createdAt: Date;               // Data de criação
  readAt?: Date;                 // Data de leitura
  
  // Metadados
  priority: NotificationPriority; // Prioridade
  channel: NotificationChannel;  // Canal de envio
  metadata: Record<string, any>; // Dados extras
}

type NotificationType = 
  | 'referral_converted'         // Indicação convertida
  | 'reward_paid'                // Recompensa paga
  | 'program_ended'              // Programa encerrado
  | 'system_update'              // Atualização do sistema
  | 'welcome'                    // Boas-vindas
  | 'reminder';                  // Lembrete

type NotificationStatus = 'unread' | 'read' | 'archived';
type NotificationPriority = 'low' | 'normal' | 'high' | 'urgent';
type NotificationChannel = 'in_app' | 'email' | 'sms' | 'push';
```

### 🕸️ Webhooks

```typescript
interface Webhook {
  id: string;                    // UUID único
  
  // Configuração
  name: string;                  // Nome do webhook
  url: string;                   // URL de destino
  secret: string;                // Chave secreta
  
  // Eventos
  events: WebhookEvent[];        // Eventos que disparam
  
  // Status
  status: WebhookStatus;         // Status ativo/inativo
  
  // Configurações
  retryAttempts: number;         // Tentativas de retry
  timeout: number;               // Timeout em segundos
  
  // Estatísticas
  stats: WebhookStats;           // Estatísticas de uso
  
  // Controle
  createdAt: Date;               // Data de criação
  updatedAt: Date;               // Última atualização
  lastTriggered?: Date;          // Último disparo
}

type WebhookEvent = 
  | 'referral.created'           // Indicação criada
  | 'referral.converted'         // Indicação convertida
  | 'referral.rejected'          // Indicação rejeitada
  | 'reward.paid'                // Recompensa paga
  | 'program.created'            // Programa criado
  | 'program.ended'              // Programa encerrado
  | 'user.joined';               // Usuário entrou

type WebhookStatus = 'active' | 'inactive' | 'error';

interface WebhookStats {
  totalCalls: number;            // Total de chamadas
  successfulCalls: number;       // Chamadas bem-sucedidas
  failedCalls: number;           // Chamadas falhadas
  avgResponseTime: number;       // Tempo médio de resposta
  lastError?: string;            // Último erro
}
```

## 📡 Estruturas de API

### Resposta Padrão

```typescript
interface ApiResponse<T> {
  success: boolean;              // Status da operação
  data: T;                       // Dados retornados
  message?: string;              // Mensagem opcional
  errors?: ApiError[];           // Erros de validação
  meta?: ResponseMeta;           // Metadados
}

interface ApiError {
  field?: string;                // Campo com erro
  code: string;                  // Código do erro
  message: string;               // Mensagem do erro
}

interface ResponseMeta {
  pagination?: Pagination;       // Paginação
  filters?: Record<string, any>; // Filtros aplicados
  sort?: SortOption[];           // Ordenação
  total?: number;                // Total de registros
}
```

### Paginação

```typescript
interface Pagination {
  page: number;                  // Página atual
  limit: number;                 // Items por página
  total: number;                 // Total de items
  totalPages: number;            // Total de páginas
  hasNext: boolean;              // Tem próxima página
  hasPrev: boolean;              // Tem página anterior
}

interface SortOption {
  field: string;                 // Campo para ordenar
  direction: 'asc' | 'desc';     // Direção da ordenação
}
```

### Filtros

```typescript
interface ReferralFilters {
  status?: ReferralStatus[];     // Filtrar por status
  programId?: string[];          // Filtrar por programa
  dateRange?: DateRange;         // Período de tempo
  referrerId?: string[];         // Filtrar por indicador
  search?: string;               // Busca por texto
  source?: string[];             // Filtrar por origem
}

interface DateRange {
  start: Date;                   // Data inicial
  end: Date;                     // Data final
}
```

## 🔒 Autenticação

### Token JWT

```typescript
interface JWTPayload {
  sub: string;                   // User ID
  email: string;                 // Email do usuário
  role: UserRole;                // Papel do usuário
  iat: number;                   // Issued at
  exp: number;                   // Expires at
  permissions: Permission[];     // Permissões específicas
}

interface Permission {
  resource: string;              // Recurso (users, programs, etc)
  actions: string[];             // Ações permitidas (read, write, delete)
}
```

### Headers de Autenticação

```typescript
interface AuthHeaders {
  'Authorization': `Bearer ${string}`; // Token JWT
  'Content-Type': 'application/json';
  'Accept': 'application/json';
  'X-Client-Version'?: string;   // Versão do cliente
  'X-Request-ID'?: string;       // ID único da requisição
}
```

## 📊 Dashboard Schemas

### KPIs

```typescript
interface DashboardKPIs {
  totalReferrals: {
    value: number;
    trend: number;               // % de mudança
    period: 'month' | 'week';
  };
  activePrograms: {
    value: number;
    trend: number;
  };
  conversionRate: {
    value: number;               // Percentual
    trend: number;
  };
  totalRewards: {
    value: number;
    currency: string;
    trend: number;
  };
}
```

### Dados para Gráficos

```typescript
interface ChartData {
  conversions: {
    period: string;              // Período (mês/semana)
    conversions: number;         // Número de conversões
    leads: number;               // Número de leads
    rate: number;                // Taxa de conversão
  }[];
  
  referralsByMonth: {
    month: string;               // Nome do mês
    referrals: number;           // Número de indicações
    conversions: number;         // Conversões no mês
  }[];
  
  programPerformance: {
    program: string;             // Nome do programa
    referrals: number;           // Total de indicações
    conversions: number;         // Total de conversões
    rate: number;                // Taxa de conversão
  }[];
  
  rewardDistribution: {
    status: string;              // Status da recompensa
    amount: number;              // Valor total
    count: number;               // Quantidade
  }[];
}
```

## 🎨 Campos Customizados

```typescript
interface CustomField {
  id: string;                    // UUID único
  name: string;                  // Nome do campo
  label: string;                 // Label para exibição
  type: FieldType;               // Tipo do campo
  required: boolean;             // Campo obrigatório
  options?: FieldOption[];       // Opções (para select/radio)
  validation?: FieldValidation;  // Regras de validação
  placeholder?: string;          // Placeholder
  helpText?: string;             // Texto de ajuda
  order: number;                 // Ordem de exibição
}

type FieldType = 
  | 'text'                       // Texto simples
  | 'email'                      // Email
  | 'phone'                      // Telefone
  | 'number'                     // Número
  | 'select'                     // Lista de opções
  | 'radio'                      // Radio buttons
  | 'checkbox'                   // Checkboxes
  | 'textarea'                   // Texto longo
  | 'date'                       // Data
  | 'url';                       // URL

interface FieldOption {
  value: string;                 // Valor da opção
  label: string;                 // Label da opção
  disabled?: boolean;            // Opção desabilitada
}

interface FieldValidation {
  minLength?: number;            // Tamanho mínimo
  maxLength?: number;            // Tamanho máximo
  pattern?: string;              // Regex para validação
  min?: number;                  // Valor mínimo (números)
  max?: number;                  // Valor máximo (números)
}
```

## 🔧 Configurações do Sistema

```typescript
interface SystemSettings {
  general: {
    siteName: string;            // Nome do site
    siteUrl: string;             // URL do site
    timezone: string;            // Fuso horário
    language: string;            // Idioma padrão
    currency: string;            // Moeda padrão
  };
  
  email: {
    provider: 'smtp' | 'sendgrid' | 'mailgun'; // Provedor
    fromName: string;            // Nome do remetente
    fromEmail: string;           // Email do remetente
    templates: EmailTemplate[];  // Templates de email
  };
  
  security: {
    jwtSecret: string;           // Chave JWT
    jwtExpiration: number;       // Expiração do token
    passwordMinLength: number;   // Tamanho mínimo da senha
    requireEmailVerification: boolean; // Verificação de email
    maxLoginAttempts: number;    // Tentativas máximas de login
  };
  
  features: {
    registration: boolean;       // Registro público
    multiLanguage: boolean;      // Multi-idioma
    a11y: boolean;               // Recursos de acessibilidade
    analytics: boolean;          // Analytics
    webhooks: boolean;           // Webhooks
  };
}

interface EmailTemplate {
  id: string;                    // ID do template
  name: string;                  // Nome do template
  subject: string;               // Assunto do email
  content: string;               // Conteúdo HTML
  variables: string[];           // Variáveis disponíveis
}
```

---

## 🔄 Versionamento

**Versão do Schema**: 1.0.0  
**Compatibilidade**: Frontend v0.0.1+  
**Data**: 2024-12-21  

### Changelog
- **1.0.0**: Schema inicial completo
- Suporte a acessibilidade (VLibras)
- Campos customizados
- Webhooks avançados
- Sistema de atividades

---

*Este schema deve ser implementado tanto no frontend (TypeScript) quanto no backend (validação e tipos). Qualquer alteração deve ser versionada e documentada.*
