
# 🎯 IndicaFlow Brasil - Frontend

## 📋 Visão Geral

O **IndicaFlow Brasil** é uma plataforma SaaS open-source completa para gestão de programas de indicação, desenvolvida com foco na experiência do usuário brasileiro e acessibilidade universal.

### 🌟 Características Principais

- 🎨 **Interface Moderna**: React 18 + TypeScript + Tailwind CSS
- ♿ **Acessibilidade First**: Preparado para integração com VLibras e padrões WCAG 2.1 AA
- 🌍 **Multi-idioma**: Português (BR) e Inglês nativo
- 📱 **Responsivo**: Design mobile-first
- 🔧 **Modular**: Arquitetura preparada para extensões
- 🚀 **Performance**: Otimizado com Vite e componentes lazy

## 🏗️ Arquitetura do Sistema

### Frontend (Branch: main)
```
src/
├── components/
│   ├── layout/             # Layout principal
│   │   ├── Header.tsx      # Cabeçalho com navegação global
│   │   ├── Sidebar.tsx     # Menu lateral fixo
│   │   └── RightDrawer.tsx # Painel de detalhes/contexto
│   ├── dashboard/          # Componentes do dashboard
│   │   ├── Dashboard.tsx   # Página principal
│   │   ├── DashboardCharts.tsx # Gráficos e visualizações
│   │   ├── QuickActions.tsx    # Ações rápidas
│   │   └── SearchBar.tsx       # Busca global
│   ├── ui/                 # Componentes base (shadcn/ui)
│   └── a11y/              # Componentes de acessibilidade
├── hooks/                  # Hooks customizados
├── lib/                    # Utilitários e configurações
├── mock/                   # Dados simulados para desenvolvimento
├── pages/                  # Páginas da aplicação
└── types/                  # Definições TypeScript
```

### Backend (Planejado)
```
backend/
├── src/
│   ├── controllers/        # Controladores da API
│   ├── models/            # Modelos de dados
│   ├── routes/            # Rotas da API
│   ├── middleware/        # Middlewares (auth, cors, etc)
│   ├── services/          # Lógica de negócio
│   ├── utils/             # Utilitários
│   └── config/            # Configurações
├── docs/                  # Documentação da API (Swagger)
├── tests/                 # Testes automatizados
└── prisma/                # Schema do banco (se usar Prisma)
```

## 🎨 Funcionalidades Implementadas

### ✅ Interface Completa
- [x] **Dashboard Interativo**: KPIs, gráficos e ações rápidas
- [x] **Sistema de Navegação**: Sidebar fixa + drawer lateral
- [x] **Tabs Dinâmicas**: Navegação entre submódulos
- [x] **Tabelas Editáveis**: Dados mockados para indicações/usuários
- [x] **Modais**: Criação/edição de registros
- [x] **Sistema de Notificações**: Feedback visual
- [x] **Busca Global**: Pesquisa integrada
- [x] **Modo Escuro/Claro**: Toggle de tema
- [x] **Multi-idioma**: PT-BR/EN

### ✅ Componentes Principais

#### Dashboard
- 4 KPIs principais com indicadores visuais
- 4 tipos de gráficos (Area, Bar, Horizontal Bar, Pie)
- Ações rápidas para principais funcionalidades
- Busca global com filtros

#### Layout
- Header fixo com controles globais
- Sidebar colapsível com 6 seções principais
- Right drawer para detalhes contextuais
- Sistema de tabs dinâmicas

#### Dados Mockados
- Indicações com status e histórico
- Programas de indicação ativos
- Usuários e suas estatísticas
- Webhooks configurados
- Atividades e logs

## 🔧 Tecnologias Utilizadas

### Core
- **React 18** - Framework principal
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework CSS utilitário

### UI/UX
- **shadcn/ui** - Sistema de componentes
- **Lucide React** - Ícones consistentes
- **Recharts** - Gráficos e visualizações
- **next-themes** - Gerenciamento de temas

### Estado e Dados
- **TanStack Query** - Gerenciamento de estado servidor
- **React Router** - Roteamento
- **React Hook Form** - Formulários
- **Zod** - Validação de schemas

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+
- npm ou yarn
- Git

### Instalação
```bash
# Clone o repositório
git clone https://github.com/wuxiaops/indica-flow-brasil.git
cd indica-flow-brasil

# Instale as dependências
npm install

# Execute o projeto
npm run dev

# Acesse: http://localhost:5173
```

### Scripts Disponíveis
```bash
npm run dev          # Servidor de desenvolvimento
npm run build        # Build para produção
npm run preview      # Preview da build
npm run lint         # Verificação de código
npm run type-check   # Verificação de tipos
```

## 📊 Estrutura de Dados

### Indicações (Referrals)
```typescript
interface Referral {
  id: string;
  referrer: {
    name: string;
    email: string;
    avatar?: string;
  };
  referred: {
    name: string;
    email: string;
    avatar?: string;
  };
  program: string;
  status: 'pending' | 'converted' | 'rejected';
  reward: number;
  date: Date;
  activity: Activity[];
}
```

### Programas
```typescript
interface Program {
  id: string;
  name: string;
  description: string;
  participants: number;
  conversions: number;
  conversionRate: number;
  status: 'active' | 'inactive';
  reward: number;
  validUntil: Date;
}
```

### Usuários
```typescript
interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'manager';
  avatar?: string;
  status: 'active' | 'inactive';
  totalReferrals: number;
  totalEarned: number;
}
```

## 🔌 APIs Esperadas (Backend)

### Endpoints Principais
```
GET    /api/auth/me                 # Usuário autenticado
POST   /api/auth/login              # Login
POST   /api/auth/logout             # Logout

GET    /api/dashboard/stats         # KPIs do dashboard
GET    /api/dashboard/charts        # Dados para gráficos

GET    /api/referrals               # Lista de indicações
GET    /api/referrals/:id           # Detalhes de indicação
POST   /api/referrals               # Criar indicação
PUT    /api/referrals/:id           # Atualizar indicação
DELETE /api/referrals/:id           # Excluir indicação

GET    /api/programs                # Lista de programas
POST   /api/programs                # Criar programa
PUT    /api/programs/:id            # Atualizar programa
DELETE /api/programs/:id            # Excluir programa

GET    /api/users                   # Lista de usuários
POST   /api/users/invite            # Convidar usuário
PUT    /api/users/:id               # Atualizar usuário

GET    /api/webhooks                # Lista de webhooks
POST   /api/webhooks                # Criar webhook
PUT    /api/webhooks/:id            # Atualizar webhook
DELETE /api/webhooks/:id            # Excluir webhook

GET    /api/notifications           # Notificações do usuário
PUT    /api/notifications/:id/read  # Marcar como lida
```

### Padrão de Resposta
```typescript
interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}
```

### Headers de Autenticação
```
Authorization: Bearer <jwt_token>
Content-Type: application/json
Accept: application/json
```

## ♿ Acessibilidade (A11y)

### Preparação para VLibras
O sistema está preparado para integração com o VLibras (tradutor de Libras do governo brasileiro):

```typescript
// Estrutura preparada em src/components/a11y/
interface A11yConfig {
  vlibras: {
    enabled: boolean;
    position: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
    avatar: string;
  };
  screenReader: {
    enabled: boolean;
    announcements: boolean;
  };
  highContrast: {
    enabled: boolean;
    mode: 'auto' | 'manual';
  };
}
```

### Recursos de Acessibilidade
- 🔍 **Screen Reader**: Compatível com NVDA, JAWS
- 🎨 **Alto Contraste**: Modo automático/manual
- ⌨️ **Navegação por Teclado**: Tab index otimizado
- 🗣️ **VLibras**: Integração com tradutor de Libras
- 📱 **Responsivo**: Otimizado para todos os dispositivos
- 🎯 **WCAG 2.1 AA**: Conformidade com padrões internacionais

### Integração VLibras
```html
<!-- Widget VLibras (será integrado automaticamente) -->
<div vw class="enabled">
  <div vw-access-button class="active"></div>
  <div vw-plugin-wrapper>
    <div class="vw-plugin-top-wrapper"></div>
  </div>
</div>
```

## 📚 Documentação

### ReadTheDocs
A documentação completa será hospedada no ReadTheDocs:
- **URL**: https://indica-flow-brasil.readthedocs.io/
- **Formato**: Markdown + MkDocs
- **Idioma**: Português (BR)
- **Seções**: 
  - Guia de Instalação
  - API Reference (Swagger)
  - Componentes UI
  - Guias de Contribuição
  - Acessibilidade

### Swagger API
Documentação interativa da API:
- **URL**: /api/docs
- **Formato**: OpenAPI 3.0
- **Idioma**: Português (BR)
- **Recursos**:
  - Testes interativos
  - Schemas detalhados
  - Exemplos de requisições

## 🤝 Contribuindo

### Padrões de Código
- **ESLint**: Configurado com regras TypeScript
- **Prettier**: Formatação automática
- **Husky**: Git hooks para qualidade
- **Commitizen**: Commits padronizados

### Fluxo de Contribuição
1. Fork do projeto
2. Criar branch feature (`git checkout -b feature/nova-funcionalidade`)
3. Commit das mudanças (`git commit -m 'feat: adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abrir Pull Request

### Convenção de Commits
```
feat: nova funcionalidade
fix: correção de bug
docs: atualização de documentação
style: formatação de código
refactor: refatoração
test: testes
chore: tarefas de manutenção
```

## 🔐 Licença e Uso Comercial

### Licença MIT com Atribuição
```
Copyright (c) 2024 Web Solutions ETI BR & WUXIA Ops

Permitido uso comercial com as seguintes condições:
✅ Uso comercial permitido
✅ Modificação permitida  
✅ Distribuição permitida
✅ Uso privado permitido
⚠️ Atribuição obrigatória (manter créditos originais)
```

### Modelo de Sustentabilidade
- **Core Open Source**: Sempre gratuito
- **Módulos Premium** (futuro): APIs avançadas, integrações enterprise
- **Suporte Comercial**: Disponível mediante contrato
- **White Label**: Licenciamento especial

## 🗺️ Roadmap

### ✅ Fase 1 - Frontend Base (Concluído)
- Interface completa e funcional
- Componentes reutilizáveis
- Sistema de temas e idiomas
- Dados mockados

### 🚧 Fase 2 - Backend Integration (Q1 2025)
- API Node.js + PostgreSQL
- Sistema de autenticação
- Webhooks funcionais
- Dados reais

### 📋 Fase 3 - Acessibilidade Avançada (Q2 2025)
- Integração VLibras completa
- Certificação WCAG 2.1 AA
- Testes de acessibilidade automatizados
- Documentação de a11y

### 🚀 Fase 4 - Recursos Enterprise (Q3-Q4 2025)
- Multi-tenancy
- APIs premium com IA
- Integrações nativas (Zapier, Slack)
- Analytics preditivos

## 📞 Contato e Suporte

### Equipe de Desenvolvimento
- **Web Solutions ETI BR**: Desenvolvimento original
- **WUXIA Ops**: Arquitetura e infraestrutura

### Canais de Suporte
- 📧 **Email**: suporte@websolutions-eti.com.br
- 💬 **GitHub Issues**: Para bugs e feature requests
- 📚 **Documentação**: ReadTheDocs
- 🐦 **Twitter**: @IndicaFlowBR (em breve)

### Comunidade (Em Breve)
- 🤝 **Discord**: Servidor da comunidade
- 📝 **Blog**: Artigos e tutoriais
- 🎥 **YouTube**: Vídeos tutoriais
- 📱 **Telegram**: Grupo de discussão

---

## 🎯 Começando Agora

Para começar a usar o IndicaFlow Brasil:

1. **Clone o repositório**
2. **Instale as dependências** 
3. **Execute o projeto**
4. **Explore a interface**
5. **Leia a documentação**
6. **Contribua com melhorias**

**🚀 Vamos juntos democratizar o acesso a ferramentas profissionais de gestão de indicações no Brasil!**

---

*Desenvolvido com ❤️ no Brasil*  
*Web Solutions ETI BR & WUXIA Ops - 2024*

**Versão**: 0.0.1 (Frontend)  
**Status**: Em desenvolvimento ativo  
**Licença**: MIT com Atribuição  
**Idioma**: Português (Brasil)
