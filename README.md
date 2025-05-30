
# 🎯 IndicaçõesPRO

Uma plataforma SaaS open-source completa para gestão de programas de indicação, desenvolvida com tecnologias modernas e foco na experiência do usuário.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Version](https://img.shields.io/badge/version-1.0.0--beta-orange.svg)
![Platform](https://img.shields.io/badge/platform-Web-brightgreen.svg)

## 📖 Sobre o Projeto

O **IndicaçõesPRO** é uma solução completa para empresas que desejam implementar e gerenciar programas de indicação de forma profissional. A plataforma oferece desde funcionalidades básicas até recursos avançados de gamificação e analytics.

### ✨ Principais Funcionalidades

- 📊 **Dashboard Avançado**: KPIs visuais, gráficos interativos e insights automáticos
- 🎯 **Gestão de Programas**: Configuração flexível de regras e recompensas
- 👥 **Gestão de Indicações**: Rastreamento completo do lead à conversão
- 🏆 **Sistema de Gamificação**: Pontos, badges e rankings
- 🔗 **Webhooks**: Integrações automáticas com sistemas externos
- ⚙️ **Administração**: Gestão de usuários e configurações globais
- 🔍 **Busca Global**: Encontre rapidamente qualquer informação
- 📱 **Progressive Web App**: Experiência mobile otimizada
- 🌙 **Modo Escuro/Claro**: Interface adaptável às preferências
- 🌍 **Multi-idioma**: Português (BR) e Inglês

## 🆕 Melhorias Recentes (v1.0.0-beta)

### 📊 Dashboard Revolucionário
- **Gráficos Interativos**: Visualização avançada com Recharts (área, barras, pizza)
- **Ações Rápidas**: Botões para principais funcionalidades do sistema
- **Insights Automáticos**: Recomendações baseadas em dados históricos
- **KPIs Visuais**: Cards com tendências e indicadores de performance
- **Busca Global**: Campo de busca integrado para toda a plataforma

### 🎨 UX/UI Aprimorada
- **Navegação Intuitiva**: Sidebar reorganizada com agrupamento lógico
- **Filtros Dinâmicos**: Sistema de filtros na atividade recente
- **Responsividade Total**: Design mobile-first para todos os dispositivos
- **Animações Suaves**: Transições e micro-interações aprimoradas
- **Acessibilidade**: Conformidade com WCAG 2.1 AA

### 🔧 Arquitetura Modular
- **Componentes Reutilizáveis**: Estrutura preparada para escalabilidade
- **TypeScript Completo**: Tipagem forte em toda a aplicação
- **Performance Otimizada**: Carregamento lazy e otimizações avançadas
- **Estado Centralizado**: Preparação para gerenciamento complexo

## 🏗️ Estrutura do Projeto

```
indicacoes-pro/
├── 📁 backend/                 # API Node.js + Express + PostgreSQL (Em desenvolvimento)
│   ├── src/
│   ├── prisma/
│   ├── tests/
│   └── package.json
├── 📁 frontend/                # Interface React + TypeScript (Atual)
│   ├── src/
│   │   ├── components/
│   │   │   ├── dashboard/      # Componentes do dashboard
│   │   │   ├── layout/         # Layout e navegação
│   │   │   └── ui/             # Componentes base (Shadcn/UI)
│   │   ├── pages/              # Páginas da aplicação
│   │   ├── hooks/              # Hooks customizados
│   │   ├── lib/                # Utilitários e configurações
│   │   └── mock/               # Dados mockados
│   └── package.json
├── 📁 docs/                    # Documentação do projeto
│   ├── PRD.md                  # Documento de requisitos
│   ├── ROADMAP.md              # Planejamento de desenvolvimento
│   ├── CONTRIBUTING.md         # Guia de contribuição
│   └── API.md                  # Documentação da API (futuro)
├── 📁 mcp/                     # Configurações de infraestrutura (futuro)
│   ├── nginx/
│   ├── monitoring/
│   └── scripts/
├── docker-compose.yml          # Orquestração de containers (futuro)
├── .env.example               # Variáveis de ambiente
├── LICENSE                    # Licença MIT
└── README.md                  # Este arquivo
```

## 🚀 Tecnologias Utilizadas

### Frontend (Atual)
- ⚛️ **React 18** + TypeScript para interfaces modernas
- 🏗️ **Vite** para build ultrarrápido
- 🎨 **Tailwind CSS** + **Shadcn/UI** para design system
- 📊 **Recharts** para visualização de dados
- 🔄 **React Query** para gerenciamento de estado servidor
- 🧭 **React Router** para roteamento
- 🌙 **next-themes** para modo escuro/claro
- 🎯 **Lucide React** para ícones consistentes

### Backend (Em Desenvolvimento)
- 🟢 **Node.js** + **Express** + TypeScript
- 🐘 **PostgreSQL** + **Prisma ORM**
- 🔐 **JWT** para autenticação
- ✅ **Zod** para validação
- 📡 **Socket.io** para real-time
- 📚 **Swagger** para documentação

### Infraestrutura (Planejado)
- 🐳 **Docker** + **Docker Compose**
- 🌐 **Nginx** como proxy reverso
- 📈 **Prometheus** + **Grafana** para monitoramento
- 📝 **ELK Stack** para logs

## 🏃‍♂️ Como Executar

### Pré-requisitos
- Node.js 18+
- npm ou yarn
- Git

### 1. Clone o Repositório
```bash
git clone https://github.com/websolutions-eti/indicacoes-pro.git
cd indicacoes-pro/frontend
```

### 2. Instale as Dependências
```bash
npm install
# ou
yarn install
```

### 3. Execute o Projeto
```bash
npm run dev
# ou
yarn dev
```

### 4. Acesse a Aplicação
```
Frontend: http://localhost:5173
```

## 📱 Demonstração

### Dashboard Principal
O dashboard oferece uma visão completa das métricas do seu programa de indicação:

- **KPIs Visuais**: Total de indicações, conversões, taxa de conversão e recompensas
- **Gráficos Interativos**: Tendências de conversão, indicações por mês, performance dos programas
- **Ações Rápidas**: Acesso direto às principais funcionalidades
- **Insights Automáticos**: Recomendações baseadas em dados
- **Busca Global**: Encontre rapidamente qualquer informação

### Gestão de Indicações
Sistema completo para acompanhar cada indicação:

- Estados customizáveis (Pendente, Qualificada, Convertida)
- Histórico detalhado de cada lead
- Atribuição automática de indicadores
- Prevenção de fraudes e duplicatas

### Sistema de Gamificação
Engaje seus participantes com um sistema robusto:

- Sistema de pontos personalizável
- Badges por conquistas
- Rankings competitivos
- Desafios temporais

## 🗺️ Roadmap

Confira nosso [Roadmap detalhado](docs/ROADMAP.md) para ver o que está por vir:

### ✅ Fase 1 - MVP (Concluído)
- Interface base e navegação
- Sistema de tabs dinâmicas
- Dashboard com analytics avançado
- Componentes reutilizáveis

### 🚧 Fase 2 - Backend Integration (Q1-Q2 2025)
- API Node.js + PostgreSQL
- Sistema de autenticação
- Webhooks funcionais
- Dados reais

### 📋 Fase 3 - Gamificação Avançada (Q2-Q3 2025)
- Sistema completo de pontos e badges
- Integrações nativas (Zapier, Slack)
- Progressive Web App
- Analytics com IA

### 🚀 Fase 4+ - Enterprise (Q4 2025+)
- Multi-tenancy
- White-label
- Analytics preditivos
- Marketplace de plugins

## 🤝 Como Contribuir

Adoramos contribuições da comunidade! Veja nosso [Guia de Contribuição](docs/CONTRIBUTING.md).

### Formas de Contribuir
- 🐛 **Bug Reports**: Encontrou um bug? Reporte no GitHub Issues
- 💡 **Feature Requests**: Sugira novas funcionalidades
- 📖 **Documentação**: Melhore nossa documentação
- 🧪 **Testes**: Adicione ou melhore testes existentes
- 🎨 **UI/UX**: Melhorias na interface e experiência
- 🔧 **Código**: Contribua com código para novas funcionalidades

## 📄 Licença e Comercialização

### Licença MIT com Atribuição
Este projeto está sob a licença MIT, permitindo uso comercial com as seguintes condições:

- ✅ **Uso Comercial**: Permitido
- ✅ **Modificação**: Permitida
- ✅ **Distribuição**: Permitida
- ✅ **Uso Privado**: Permitido
- ⚠️ **Atribuição**: Obrigatória manter créditos originais

### Créditos Obrigatórios
Ao usar este projeto comercialmente, você deve manter os créditos:
- **Web Solutions ETI BR** - Desenvolvimento original
- **WUXIA Ops** - Arquitetura e infraestrutura

### Modelo de Sustentabilidade
Para manter o projeto ativo e em constante evolução:

🆓 **Versão Open Source (Atual)**
- Todas as funcionalidades core gratuitas
- Suporte via comunidade GitHub
- Atualizações regulares garantidas

💎 **Módulos Premium (Futuro - 2025)**
- APIs avançadas com machine learning
- Integrações enterprise (Salesforce, HubSpot)
- Suporte técnico dedicado com SLA
- Funcionalidades de white-label
- Analytics preditivos e IA

## 📊 Métricas e Status Atual

- 🔧 **Status**: Em desenvolvimento ativo (Fase 1 concluída)
- 📈 **Commits**: Atualizações frequentes
- 🐛 **Issues**: Rastreamento ativo no GitHub
- 📚 **Documentação**: Completa e atualizada
- 🌍 **Idiomas**: Português (BR) e Inglês
- ⭐ **GitHub Stars**: Crescendo constantemente

## 🆘 Suporte e Comunidade

### Canais Oficiais
- 📧 **Email**: suporte@websolutions-eti.com.br
- 💬 **GitHub Issues**: Para bugs e feature requests
- 📚 **Documentação**: Wiki completa no GitHub
- 🐦 **Twitter**: @IndicacoesPRO (em breve)

### Comunidade (Em Breve)
- 🤝 **Discord**: Servidor da comunidade
- 📝 **Blog**: Artigos e tutoriais
- 🎥 **YouTube**: Vídeos tutoriais
- 📱 **Telegram**: Grupo de discussão

## 👨‍💻 Desenvolvedores

### Web Solutions ETI BR
Empresa brasileira especializada em soluções web corporativas:
- Desenvolvimento de sistemas SaaS
- Consultoria em transformação digital  
- Arquitetura de software escalável

### WUXIA Ops
Especialistas em infraestrutura e DevOps:
- Arquitetura cloud-native
- Monitoramento e observabilidade
- Segurança e compliance
- Automação de deploy

---

## 🙏 Agradecimentos

Agradecemos à comunidade open source e às tecnologias que tornaram este projeto possível:

- React Team pela excelente biblioteca
- Vercel pelo Shadcn/UI
- Tailwind Labs pelo Tailwind CSS
- Recharts pela biblioteca de gráficos
- Comunidade TypeScript
- Todos os contribuidores

---

## 📈 Estatísticas do Projeto

```
📊 Linhas de Código: 5,000+
🧩 Componentes: 25+
📄 Páginas: 6+
🎨 Temas: 2 (Claro/Escuro)
🌍 Idiomas: 2 (PT-BR/EN)
📱 Responsividade: 100%
♿ Acessibilidade: WCAG 2.1 AA
```

---

**⭐ Se este projeto foi útil para você, considere dar uma estrela no GitHub!**

**🚀 Vamos juntos democratizar o acesso a ferramentas profissionais de gestão de indicações!**

---

*Desenvolvido com ❤️ no Brasil*  
*Web Solutions ETI BR & WUXIA Ops - 2024*

**🔗 Links Importantes:**
- [📋 PRD Completo](docs/PRD.md)
- [🗺️ Roadmap Detalhado](docs/ROADMAP.md)
- [🤝 Guia de Contribuição](docs/CONTRIBUTING.md)
- [📜 Licença MIT](LICENSE)
