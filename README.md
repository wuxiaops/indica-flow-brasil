
# 🎯 IndicaçõesPRO

Uma plataforma SaaS open-source completa para gestão de programas de indicação, desenvolvida com tecnologias modernas e foco na experiência do usuário.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Version](https://img.shields.io/badge/version-1.0.0--beta-orange.svg)
![Platform](https://img.shields.io/badge/platform-Web-brightgreen.svg)

## 📖 Sobre o Projeto

O **IndicaçõesPRO** é uma solução completa para empresas que desejam implementar e gerenciar programas de indicação de forma profissional. A plataforma oferece desde funcionalidades básicas até recursos avançados de gamificação e analytics.

### ✨ Principais Funcionalidades

- 📊 **Dashboard Completo**: KPIs, gráficos e relatórios em tempo real
- 🎯 **Gestão de Programas**: Configuração flexível de regras e recompensas
- 👥 **Gestão de Indicações**: Rastreamento completo do lead à conversão
- 🏆 **Sistema de Gamificação**: Pontos, badges e rankings
- 🔗 **Webhooks**: Integrações automáticas com sistemas externos
- ⚙️ **Administração**: Gestão de usuários e configurações globais

## 🏗️ Estrutura do Projeto

```
indicacoes-pro/
├── 📁 backend/                 # API Node.js + Express + PostgreSQL
│   ├── src/
│   ├── prisma/
│   ├── tests/
│   └── package.json
├── 📁 frontend/                # Interface React + TypeScript
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── lib/
│   │   └── mock/
│   └── package.json
├── 📁 docs/                    # Documentação do projeto
│   ├── PRD.md
│   ├── API.md
│   ├── DEPLOYMENT.md
│   └── CONTRIBUTING.md
├── 📁 mcp/                     # Configurações de infraestrutura
│   ├── nginx/
│   ├── monitoring/
│   └── scripts/
├── docker-compose.yml          # Orquestração de containers
├── .env.example               # Variáveis de ambiente
├── LICENSE                    # Licença MIT
└── README.md                  # Este arquivo
```

## 🚀 Tecnologias Utilizadas

### Frontend
- ⚛️ **React 18** + TypeScript
- 🏗️ **Vite** para build e desenvolvimento
- 🎨 **Tailwind CSS** + **Shadcn/UI** para design
- 📊 **Recharts** para gráficos
- 🔄 **React Query** para estado de servidor
- 🧭 **React Router** para roteamento

### Backend (Em Desenvolvimento)
- 🟢 **Node.js** + **Express** + TypeScript
- 🐘 **PostgreSQL** + **Prisma ORM**
- 🔐 **JWT** para autenticação
- ✅ **Zod** para validação
- 📡 **Socket.io** para real-time
- 📚 **Swagger** para documentação

### Infraestrutura
- 🐳 **Docker** + **Docker Compose**
- 🌐 **Nginx** como proxy reverso
- 📈 **Prometheus** + **Grafana** para monitoramento
- 📝 **ELK Stack** para logs

## 🏃‍♂️ Como Executar

### Pré-requisitos
- Node.js 18+
- Docker e Docker Compose
- Git

### 1. Clone o Repositório
```bash
git clone https://github.com/websolutions-eti/indicacoes-pro.git
cd indicacoes-pro
```

### 2. Frontend (Desenvolvimento Atual)
```bash
cd frontend
npm install
npm run dev
```

### 3. Ambiente Completo (Futuro)
```bash
# Copiar e configurar variáveis de ambiente
cp .env.example .env

# Subir toda a infraestrutura
docker-compose up -d

# Executar migrações do banco
docker-compose exec backend npm run migrate

# Acessar aplicação
# Frontend: http://localhost:3000
# API: http://localhost:3001
# Documentação: http://localhost:3001/docs
```

## 📱 Demonstração

### Dashboard Principal
O dashboard oferece uma visão completa das métricas do seu programa de indicação:

- Total de indicações e conversões
- Gráficos de evolução temporal
- Top performers e rankings
- Alertas e notificações

### Gestão de Indicações
Sistema completo para acompanhar cada indicação:

- Estados customizáveis (Pendente, Qualificada, Convertida)
- Histórico detalhado de cada lead
- Atribuição automática de indicadores
- Prevenção de fraudes e duplicatas

### Gamificação
Engaje seus participantes com um sistema robusto:

- Sistema de pontos personalizável
- Badges por conquistas
- Rankings competitivos
- Desafios temporais

## 🤝 Como Contribuir

Adoramos contribuições da comunidade! Veja como você pode ajudar:

1. **Fork** o projeto
2. **Clone** seu fork localmente
3. **Crie** uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
4. **Commit** suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
5. **Push** para a branch (`git push origin feature/nova-funcionalidade`)
6. **Abra** um Pull Request

### Tipos de Contribuição
- 🐛 **Bug Reports**: Encontrou um bug? Reporte no GitHub Issues
- 💡 **Feature Requests**: Sugira novas funcionalidades
- 📖 **Documentação**: Melhore nossa documentação
- 🧪 **Testes**: Adicione ou melhore testes existentes
- 🎨 **UI/UX**: Melhorias na interface e experiência

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

## 🗺️ Roadmap

### ✅ Fase 1 - MVP (Atual)
- Interface base e navegação
- Sistema de tabs dinâmicas
- Gestão básica de indicações
- Dashboard com KPIs mockados
- Troca de idioma e tema

### 🚧 Fase 2 - Backend Integration (Q1 2025)
- API completa Node.js + PostgreSQL
- Sistema de autenticação JWT
- Webhooks funcionais
- Dados reais substituindo mocks
- Deploy com Docker

### 📋 Fase 3 - Advanced Features (Q2 2025)
- Sistema de gamificação completo
- Relatórios avançados e exportação
- Integrações nativas (Zapier, Make)
- Mobile app (PWA)
- Notificações em tempo real

### 🚀 Fase 4 - Enterprise (Q3 2025)
- Funcionalidades white-label
- Analytics com machine learning
- Multi-tenancy
- Integrações enterprise
- Marketplace de plugins

## 📊 Métricas e Status

- 🔧 **Status**: Em desenvolvimento ativo
- 📈 **Commits**: Atualizações frequentes
- 🐛 **Issues**: Rastreamento ativo no GitHub
- 📚 **Documentação**: Em expansão constante
- 🌍 **Idiomas**: Português (BR) e Inglês

## 🆘 Suporte e Comunidade

### Canais Oficiais
- 📧 **Email**: suporte@websolutions-eti.com.br
- 💬 **GitHub Issues**: Para bugs e feature requests
- 📚 **Documentação**: Wiki no GitHub
- 🐦 **Twitter**: @IndicacoesPRO (em breve)

### Comunidade
- 🤝 **Discord**: Servidor da comunidade (em breve)
- 📝 **Blog**: Artigos e tutoriais
- 🎥 **YouTube**: Vídeos tutoriais
- 📱 **Telegram**: Grupo de discussão

## 👨‍💻 Desenvolvedores

### Web Solutions ETI BR
Empresa brasileira especializada em soluções web corporativas, focada em:
- Desenvolvimento de sistemas SaaS
- Consultoria em transformação digital  
- Arquitetura de software escalável

### WUXIA Ops
Especialistas em infraestrutura e DevOps, responsáveis por:
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
- Comunidade TypeScript
- Todos os contribuidores

---

**⭐ Se este projeto foi útil para você, considere dar uma estrela no GitHub!**

**🚀 Vamos juntos democratizar o acesso a ferramentas profissionais de gestão de indicações!**

---

*Desenvolvido com ❤️ no Brasil*  
*Web Solutions ETI BR & WUXIA Ops - 2024*
