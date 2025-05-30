
# 🤝 Guia de Contribuição - IndicaçõesPRO

Obrigado por considerar contribuir com o IndicaçõesPRO! Este guia vai te ajudar a contribuir de forma efetiva.

## 📋 Índice

1. [Como Contribuir](#como-contribuir)
2. [Configuração do Ambiente](#configuração-do-ambiente)
3. [Padrões de Código](#padrões-de-código)
4. [Processo de Pull Request](#processo-de-pull-request)
5. [Reportando Bugs](#reportando-bugs)
6. [Sugerindo Funcionalidades](#sugerindo-funcionalidades)
7. [Documentação](#documentação)

## 🚀 Como Contribuir

### Tipos de Contribuição

#### 🐛 Correção de Bugs
- Encontrou um bug? Primeiro verifique se já não foi reportado
- Se não existir, crie uma issue detalhada
- Se quiser corrigir, faça um fork e crie um PR

#### ✨ Novas Funcionalidades
- Verifique o roadmap para ver se está planejado
- Discuta a ideia em uma issue antes de implementar
- Mantenha o escopo pequeno e focado

#### 📚 Documentação
- Melhore exemplos de código
- Corrija typos e gramática
- Adicione tutoriais e guias
- Traduza para outros idiomas

#### 🧪 Testes
- Adicione testes para código novo
- Melhore a cobertura de testes existentes
- Teste em diferentes navegadores/dispositivos

## 🛠️ Configuração do Ambiente

### Pré-requisitos
```bash
# Node.js 18 ou superior
node --version

# npm ou yarn
npm --version

# Git configurado
git --version
```

### Setup do Projeto
```bash
# 1. Fork o repositório no GitHub
# 2. Clone seu fork
git clone https://github.com/SEU-USERNAME/indicacoes-pro.git
cd indicacoes-pro

# 3. Adicione o repositório original como upstream
git remote add upstream https://github.com/websolutions-eti/indicacoes-pro.git

# 4. Instale dependências
cd frontend
npm install

# 5. Execute o projeto
npm run dev
```

### Configuração do VSCode (Recomendado)
```json
// .vscode/settings.json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.preferences.importModuleSpecifier": "relative"
}
```

### Extensões Recomendadas
- ESLint
- Prettier
- TypeScript Importer
- Tailwind CSS IntelliSense
- Auto Rename Tag

## 📝 Padrões de Código

### Estrutura de Arquivos
```
src/
├── components/          # Componentes reutilizáveis
│   ├── ui/             # Componentes base (shadcn/ui)
│   ├── layout/         # Componentes de layout
│   └── feature/        # Componentes específicos
├── pages/              # Páginas da aplicação
├── hooks/              # Custom hooks
├── lib/                # Utilitários e helpers
├── types/              # Definições de tipos
└── mock/               # Dados mockados
```

### Nomenclatura

#### Componentes
```tsx
// ✅ Correto - PascalCase para componentes
const UserProfileCard = () => {
  return <div>...</div>
}

// ✅ Correto - Arquivo com mesmo nome
// UserProfileCard.tsx
```

#### Hooks
```tsx
// ✅ Correto - camelCase começando com 'use'
const useUserData = () => {
  // ...
}
```

#### Tipos e Interfaces
```tsx
// ✅ Correto - PascalCase para tipos
interface UserProfile {
  id: string
  name: string
}

// ✅ Correto - Props com sufixo 'Props'
interface UserCardProps {
  user: UserProfile
  onEdit: () => void
}
```

### Padrões TypeScript

#### Props de Componentes
```tsx
// ✅ Bom - Props tipadas e desestruturadas
interface ButtonProps {
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  onClick?: () => void
}

const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  onClick 
}: ButtonProps) => {
  return (
    <button 
      className={cn(buttonVariants({ variant, size }))}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
```

#### Estados e Hooks
```tsx
// ✅ Bom - Estados tipados
const [user, setUser] = useState<User | null>(null)
const [loading, setLoading] = useState<boolean>(false)

// ✅ Bom - Custom hooks tipados
const useApi = <T>(url: string): {
  data: T | null
  loading: boolean
  error: string | null
} => {
  // implementação
}
```

### Padrões CSS/Tailwind

#### Classes Organizadas
```tsx
// ✅ Bom - Classes agrupadas logicamente
<div className={cn(
  // Layout
  "flex items-center justify-between",
  // Spacing
  "p-4 mb-6",
  // Styling
  "bg-white border border-gray-200 rounded-lg",
  // Responsive
  "sm:p-6 lg:p-8",
  // Interactive
  "hover:shadow-md transition-shadow",
  // Conditional
  isActive && "border-blue-500 bg-blue-50"
)}>
```

#### Componentes Estilizados
```tsx
// ✅ Bom - Variantes usando CVA
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors",
  {
    variants: {
      variant: {
        primary: "bg-blue-500 text-white hover:bg-blue-600",
        secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300"
      },
      size: {
        sm: "h-8 px-3",
        md: "h-10 px-4",
        lg: "h-12 px-6"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md"
    }
  }
)
```

## 🔄 Processo de Pull Request

### 1. Preparação
```bash
# Atualize seu fork
git checkout main
git pull upstream main
git push origin main

# Crie uma nova branch
git checkout -b feature/nova-funcionalidade
```

### 2. Desenvolvimento
```bash
# Faça commits pequenos e descritivos
git add .
git commit -m "feat: adiciona componente de filtros"

# Push para seu fork
git push origin feature/nova-funcionalidade
```

### 3. Pull Request
- Crie o PR do seu fork para o repositório original
- Use o template de PR (será criado automaticamente)
- Adicione screenshots/GIFs se for mudança visual
- Marque como draft se ainda estiver em desenvolvimento

### Template de Commit
```
<tipo>(<escopo>): <descrição>

[corpo opcional]

[rodapé opcional]
```

#### Tipos de Commit
- `feat`: Nova funcionalidade
- `fix`: Correção de bug
- `docs`: Documentação
- `style`: Formatação, ponto e vírgula, etc
- `refactor`: Mudança que não adiciona funcionalidade nem corrige bug
- `test`: Adiciona testes
- `chore`: Mudanças de build, ferramentas auxiliares, etc

#### Exemplos
```bash
feat(dashboard): adiciona gráfico de conversões
fix(api): corrige validação de e-mail
docs(readme): atualiza instruções de instalação
style(button): melhora espaçamento interno
refactor(hooks): simplifica useUserData
test(utils): adiciona testes para formatters
chore(deps): atualiza dependências
```

## 🐛 Reportando Bugs

### Antes de Reportar
1. Verifique se já não foi reportado
2. Teste na versão mais recente
3. Confirme que é reproduzível

### Template de Bug Report
```markdown
**Descrição do Bug**
Descrição clara do que aconteceu.

**Como Reproduzir**
1. Vá para '...'
2. Clique em '...'
3. Role até '...'
4. Veja o erro

**Comportamento Esperado**
O que deveria acontecer.

**Screenshots**
Se aplicável, adicione screenshots.

**Ambiente:**
- OS: [e.g. iOS, Windows, macOS]
- Navegador: [e.g. Chrome, Safari]
- Versão: [e.g. 22]

**Contexto Adicional**
Qualquer outro contexto sobre o problema.
```

## 💡 Sugerindo Funcionalidades

### Template de Feature Request
```markdown
**Sua sugestão está relacionada a um problema?**
Descrição clara do problema.

**Solução Desejada**
Descrição clara do que você gostaria que acontecesse.

**Alternativas Consideradas**
Outras soluções ou funcionalidades que você considerou.

**Contexto Adicional**
Screenshots, mockups, ou qualquer outro contexto.
```

## 📚 Documentação

### Padrões de Documentação

#### Componentes
```tsx
/**
 * Botão reutilizável com variantes e tamanhos
 * 
 * @example
 * ```tsx
 * <Button variant="primary" size="lg" onClick={handleClick}>
 *   Clique aqui
 * </Button>
 * ```
 */
interface ButtonProps {
  /** Variante visual do botão */
  variant?: 'primary' | 'secondary'
  /** Tamanho do botão */
  size?: 'sm' | 'md' | 'lg'
  /** Conteúdo do botão */
  children: React.ReactNode
  /** Função chamada ao clicar */
  onClick?: () => void
}
```

#### Hooks
```tsx
/**
 * Hook para gerenciar dados do usuário
 * 
 * @param userId - ID do usuário
 * @returns Dados do usuário, loading e funções de update
 * 
 * @example
 * ```tsx
 * const { user, loading, updateUser } = useUser('123')
 * ```
 */
const useUser = (userId: string) => {
  // implementação
}
```

### README de Componentes
Cada pasta de componentes deve ter um README.md explicando:
- Propósito do componente
- Props disponíveis
- Exemplos de uso
- Variações suportadas

## ✅ Checklist de Contribuição

### Antes do PR
- [ ] Código segue os padrões estabelecidos
- [ ] Testes passam (`npm test`)
- [ ] Build funciona (`npm run build`)
- [ ] Lint passa (`npm run lint`)
- [ ] Documentação atualizada
- [ ] Screenshots/GIFs adicionados (se aplicável)

### Durante Review
- [ ] Responder comentários construtivamente
- [ ] Fazer mudanças solicitadas
- [ ] Manter commits organizados
- [ ] Testar sugestões dos reviewers

## 🎯 Prioridades Atuais

### Alta Prioridade
- 🔐 Sistema de autenticação
- 📊 Dashboard com dados reais
- 🔗 Integração com APIs

### Média Prioridade
- 🧪 Cobertura de testes
- 📱 Responsividade mobile
- 🌐 Internacionalização

### Baixa Prioridade
- 🎨 Animações e transições
- 📈 Otimizações de performance
- 🔍 SEO e acessibilidade

## 🆘 Precisa de Ajuda?

### Canais de Comunicação
- 📧 **Email**: dev@websolutions-eti.com.br
- 💬 **GitHub Issues**: Para dúvidas específicas
- 📚 **Wiki**: Documentação técnica
- 🤝 **Discord**: Comunidade (em breve)

### Mentoria
Desenvolvedores iniciantes são bem-vindos! 
- Marque issues com `good-first-issue`
- Peça ajuda nos comentários
- Participem das discussões

---

**Obrigado por contribuir com o IndicaçõesPRO! 🚀**

*Juntos estamos construindo a melhor plataforma open-source de gestão de indicações do Brasil!*
