
// 📊 Schema de Tipos - IndicaFlow Brasil
// Tipos TypeScript completos para integração frontend/backend

// === USUÁRIOS ===
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: UserRole;
  status: UserStatus;
  createdAt: Date;
  updatedAt: Date;
  totalReferrals: number;
  successfulReferrals: number;
  totalEarned: number;
  preferences: UserPreferences;
  notifications: NotificationSettings;
}

export type UserRole = 'admin' | 'manager' | 'user';
export type UserStatus = 'active' | 'inactive' | 'pending' | 'suspended';

export interface UserPreferences {
  language: 'pt' | 'en';
  theme: 'light' | 'dark' | 'auto';
  timezone: string;
  a11y: A11ySettings;
}

export interface A11ySettings {
  vlibras: boolean;
  highContrast: boolean;
  screenReader: boolean;
  reducedMotion: boolean;
  largeText: boolean;
  focusIndicators: boolean;
}

export interface NotificationSettings {
  email: boolean;
  browser: boolean;
  newReferral: boolean;
  conversion: boolean;
  reward: boolean;
}

// === PROGRAMAS ===
export interface Program {
  id: string;
  name: string;
  description: string;
  slug: string;
  status: ProgramStatus;
  createdAt: Date;
  updatedAt: Date;
  startDate: Date;
  endDate?: Date;
  reward: RewardConfig;
  rules: ProgramRules;
  stats: ProgramStats;
  settings: ProgramSettings;
}

export type ProgramStatus = 'draft' | 'active' | 'paused' | 'ended' | 'archived';

export interface RewardConfig {
  type: 'fixed' | 'percentage' | 'tiered';
  value: number;
  currency: 'BRL' | 'USD';
  tiers?: RewardTier[];
  maxReward?: number;
  paymentMethod: PaymentMethod;
}

export interface RewardTier {
  minReferrals: number;
  value: number;
  description: string;
}

export type PaymentMethod = 'pix' | 'bank_transfer' | 'credit' | 'manual';

export interface ProgramRules {
  maxReferralsPerUser?: number;
  minAge?: number;
  allowedCountries?: string[];
  excludedDomains?: string[];
  requireApproval: boolean;
  preventSelfReferral: boolean;
  preventDuplicates: boolean;
}

export interface ProgramStats {
  totalParticipants: number;
  totalReferrals: number;
  successfulReferrals: number;
  conversionRate: number;
  totalRewardsPaid: number;
  avgTimeToConversion: number;
}

export interface ProgramSettings {
  publicLanding: boolean;
  customFields: CustomField[];
  integrations: Integration[];
  webhooks: Webhook[];
}

// === INDICAÇÕES ===
export interface Referral {
  id: string;
  referrerId: string;
  referrer: User;
  programId: string;
  program: Program;
  referred: ReferredPerson;
  status: ReferralStatus;
  statusHistory: StatusChange[];
  createdAt: Date;
  updatedAt: Date;
  convertedAt?: Date;
  expiredAt?: Date;
  reward: ReferralReward;
  source: string;
  customData?: Record<string, any>;
  notes?: string;
  tracking: ReferralTracking;
  activities: Activity[];
}

export interface ReferredPerson {
  name: string;
  email: string;
  phone?: string;
  avatar?: string;
  company?: string;
  position?: string;
  customFields?: Record<string, any>;
}

export type ReferralStatus = 
  | 'pending'
  | 'contacted'
  | 'qualified'
  | 'negotiating'
  | 'converted'
  | 'rejected'
  | 'expired'
  | 'cancelled';

export interface StatusChange {
  from: ReferralStatus;
  to: ReferralStatus;
  reason?: string;
  changedBy: string;
  changedAt: Date;
  notes?: string;
}

export interface ReferralReward {
  amount: number;
  currency: 'BRL' | 'USD';
  status: RewardStatus;
  paidAt?: Date;
  paymentMethod?: PaymentMethod;
  transactionId?: string;
}

export type RewardStatus = 'pending' | 'approved' | 'paid' | 'cancelled';

export interface ReferralTracking {
  utm: {
    source?: string;
    medium?: string;
    campaign?: string;
    term?: string;
    content?: string;
  };
  ip: string;
  userAgent: string;
  referrer?: string;
  landingPage: string;
  device: string;
  location?: {
    country: string;
    state: string;
    city: string;
  };
}

// === ATIVIDADES ===
export interface Activity {
  id: string;
  type: ActivityType;
  title: string;
  description: string;
  userId: string;
  user: User;
  referralId?: string;
  programId?: string;
  metadata: Record<string, any>;
  createdAt: Date;
  isPublic: boolean;
  data: ActivityData;
}

export type ActivityType = 
  | 'referral_created'
  | 'referral_converted'
  | 'referral_rejected'
  | 'reward_paid'
  | 'program_created'
  | 'program_updated'
  | 'user_invited'
  | 'user_joined'
  | 'webhook_triggered'
  | 'system_notification';

export interface ActivityData {
  oldValue?: any;
  newValue?: any;
  amount?: number;
  reason?: string;
  ip?: string;
  userAgent?: string;
  location?: string;
}

// === NOTIFICAÇÕES ===
export interface Notification {
  id: string;
  userId: string;
  user: User;
  type: NotificationType;
  title: string;
  message: string;
  icon?: string;
  actionUrl?: string;
  actionText?: string;
  status: NotificationStatus;
  createdAt: Date;
  readAt?: Date;
  priority: NotificationPriority;
  channel: NotificationChannel;
  metadata: Record<string, any>;
}

export type NotificationType = 
  | 'referral_converted'
  | 'reward_paid'
  | 'program_ended'
  | 'system_update'
  | 'welcome'
  | 'reminder';

export type NotificationStatus = 'unread' | 'read' | 'archived';
export type NotificationPriority = 'low' | 'normal' | 'high' | 'urgent';
export type NotificationChannel = 'in_app' | 'email' | 'sms' | 'push';

// === WEBHOOKS ===
export interface Webhook {
  id: string;
  name: string;
  url: string;
  secret: string;
  events: WebhookEvent[];
  status: WebhookStatus;
  retryAttempts: number;
  timeout: number;
  stats: WebhookStats;
  createdAt: Date;
  updatedAt: Date;
  lastTriggered?: Date;
}

export type WebhookEvent = 
  | 'referral.created'
  | 'referral.converted'
  | 'referral.rejected'
  | 'reward.paid'
  | 'program.created'
  | 'program.ended'
  | 'user.joined';

export type WebhookStatus = 'active' | 'inactive' | 'error';

export interface WebhookStats {
  totalCalls: number;
  successfulCalls: number;
  failedCalls: number;
  avgResponseTime: number;
  lastError?: string;
}

// === API RESPONSES ===
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  errors?: ApiError[];
  meta?: ResponseMeta;
}

export interface ApiError {
  field?: string;
  code: string;
  message: string;
}

export interface ResponseMeta {
  pagination?: Pagination;
  filters?: Record<string, any>;
  sort?: SortOption[];
  total?: number;
}

export interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
}

export interface SortOption {
  field: string;
  direction: 'asc' | 'desc';
}

// === FILTROS ===
export interface ReferralFilters {
  status?: ReferralStatus[];
  programId?: string[];
  dateRange?: DateRange;
  referrerId?: string[];
  search?: string;
  source?: string[];
}

export interface DateRange {
  start: Date;
  end: Date;
}

// === AUTENTICAÇÃO ===
export interface JWTPayload {
  sub: string;
  email: string;
  role: UserRole;
  iat: number;
  exp: number;
  permissions: Permission[];
}

export interface Permission {
  resource: string;
  actions: string[];
}

export interface AuthHeaders {
  'Authorization': `Bearer ${string}`;
  'Content-Type': 'application/json';
  'Accept': 'application/json';
  'X-Client-Version'?: string;
  'X-Request-ID'?: string;
}

// === DASHBOARD ===
export interface DashboardKPIs {
  totalReferrals: {
    value: number;
    trend: number;
    period: 'month' | 'week';
  };
  activePrograms: {
    value: number;
    trend: number;
  };
  conversionRate: {
    value: number;
    trend: number;
  };
  totalRewards: {
    value: number;
    currency: string;
    trend: number;
  };
}

export interface ChartData {
  conversions: {
    period: string;
    conversions: number;
    leads: number;
    rate: number;
  }[];
  
  referralsByMonth: {
    month: string;
    referrals: number;
    conversions: number;
  }[];
  
  programPerformance: {
    program: string;
    referrals: number;
    conversions: number;
    rate: number;
  }[];
  
  rewardDistribution: {
    status: string;
    amount: number;
    count: number;
  }[];
}

// === CAMPOS CUSTOMIZADOS ===
export interface CustomField {
  id: string;
  name: string;
  label: string;
  type: FieldType;
  required: boolean;
  options?: FieldOption[];
  validation?: FieldValidation;
  placeholder?: string;
  helpText?: string;
  order: number;
}

export type FieldType = 
  | 'text'
  | 'email'
  | 'phone'
  | 'number'
  | 'select'
  | 'radio'
  | 'checkbox'
  | 'textarea'
  | 'date'
  | 'url';

export interface FieldOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface FieldValidation {
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  min?: number;
  max?: number;
}

// === INTEGRAÇÕES ===
export interface Integration {
  id: string;
  name: string;
  type: IntegrationType;
  status: IntegrationStatus;
  config: Record<string, any>;
  createdAt: Date;
  lastSync?: Date;
}

export type IntegrationType = 'zapier' | 'slack' | 'hubspot' | 'salesforce' | 'custom';
export type IntegrationStatus = 'active' | 'inactive' | 'error' | 'pending';

// === CONFIGURAÇÕES DO SISTEMA ===
export interface SystemSettings {
  general: {
    siteName: string;
    siteUrl: string;
    timezone: string;
    language: string;
    currency: string;
  };
  
  email: {
    provider: 'smtp' | 'sendgrid' | 'mailgun';
    fromName: string;
    fromEmail: string;
    templates: EmailTemplate[];
  };
  
  security: {
    jwtSecret: string;
    jwtExpiration: number;
    passwordMinLength: number;
    requireEmailVerification: boolean;
    maxLoginAttempts: number;
  };
  
  features: {
    registration: boolean;
    multiLanguage: boolean;
    a11y: boolean;
    analytics: boolean;
    webhooks: boolean;
  };
}

export interface EmailTemplate {
  id: string;
  name: string;
  subject: string;
  content: string;
  variables: string[];
}

// Declaração global para VLibras
declare global {
  interface Window {
    VLibras: {
      Widget: new (config: {
        avatar: string;
        position: string;
      }) => void;
    };
  }
}
