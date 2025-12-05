# CNSOUSATEC - Site Full-Stack

![GitHub](https://img.shields.io/github/license/cnsousa7/cnsousatec-website)
![GitHub last commit](https://img.shields.io/github/last-commit/cnsousa7/cnsousatec-website)

## 📋 Sobre o Projeto

Site profissional full-stack para **CNSOUSATEC** (Soluções Técnicas em Elétrica e Eletrônica) com funcionalidades avançadas de gerenciamento de conteúdo, upload de arquivos e painel administrativo.

## 🚀 Funcionalidades Principais

### Frontend
- **Home Page**: Hero section com logo, serviços destacados e depoimentos
- **Páginas de Conteúdo**: Serviços, Portfólio, Depoimentos, Sobre, Contato
- **Carrossel de Depoimentos**: Interativo com filtros por tipo de serviço
- **Portfólio Dinâmico**: Galeria de projetos conectada ao banco de dados com filtros
- **Formulário de Contato**: Com validação e integração com WhatsApp
- **Botão Flutuante de WhatsApp**: Acesso 24/7 ao atendimento

### Backend & Admin
- **Painel de Administração**: `/admin` para gerenciar arquivos
- **Dashboard de Depoimentos**: `/admin/depoimentos` para aprovar/rejeitar depoimentos
- **Upload de Arquivos**: Integração completa com S3
- **API tRPC**: Procedimentos protegidos para operações administrativas
- **Autenticação OAuth**: Sistema de login seguro
- **Banco de Dados**: MySQL com Drizzle ORM

## 🛠️ Tecnologias Utilizadas

- **Frontend**: React 18, Vite, Tailwind CSS, shadcn/ui
- **Backend**: Node.js, Express, tRPC
- **Banco de Dados**: MySQL, Drizzle ORM
- **Autenticação**: OAuth 2.0
- **Storage**: AWS S3 / Manus Storage API
- **Deployment**: Compatível com Vercel, Netlify, Railway

## 📦 Estrutura do Projeto

```
cnsousatec_website/
├── client/                 # Frontend React + Vite
│   ├── src/
│   │   ├── pages/         # Páginas da aplicação
│   │   ├── components/    # Componentes reutilizáveis
│   │   ├── lib/           # Utilitários e helpers
│   │   └── index.css      # Estilos globais (Tailwind)
│   └── public/            # Arquivos estáticos
├── server/                # Backend Node.js + Express
│   ├── _core/            # Configurações e middleware
│   ├── routers.ts        # Procedimentos tRPC
│   ├── db.ts             # Funções de banco de dados
│   ├── upload.ts         # Endpoint de upload S3
│   └── storage.ts        # Integração com S3
├── drizzle/              # Schema e migrations do banco
├── shared/               # Tipos e constantes compartilhadas
└── package.json          # Dependências do projeto
```

## 🚀 Instalação

### Pré-requisitos
- Node.js 22.x ou superior
- pnpm 10.x ou superior
- Banco de dados MySQL

### Passos de Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/cnsousa7/cnsousatec-website.git
cd cnsousatec-website
```

2. **Instale as dependências**
```bash
pnpm install
```

3. **Configure as variáveis de ambiente**

Crie um arquivo `.env.local` na raiz do projeto:

```env
# Database
DATABASE_URL=mysql://user:password@localhost:3306/cnsousatec

# OAuth
OAUTH_SERVER_URL=https://api.manus.im
JWT_SECRET=seu_jwt_secret_aqui
OWNER_OPEN_ID=seu_owner_id

# S3/Storage
BUILT_IN_FORGE_API_URL=https://storage.api.manus.im
BUILT_IN_FORGE_API_KEY=sua_chave_api

# Analytics
VITE_ANALYTICS_ENDPOINT=https://analytics.manus.im
VITE_ANALYTICS_WEBSITE_ID=seu_website_id

# App Config
VITE_APP_ID=cnsousatec
VITE_APP_TITLE=CNSOUSATEC
VITE_APP_LOGO=/logo-cnsousatec.jpg
```

4. **Execute as migrações do banco**
```bash
pnpm db:push
```

5. **Inicie o servidor de desenvolvimento**
```bash
pnpm dev
```

O site estará disponível em `http://localhost:3000`

## 📱 Páginas Disponíveis

### Públicas
- `/` - Home
- `/servicos` - Serviços oferecidos
- `/portfolio` - Galeria de projetos
- `/depoimentos` - Depoimentos de clientes
- `/sobre` - Sobre a empresa
- `/contato` - Formulário de contato

### Administrativas (requer login)
- `/admin` - Painel principal de admin
- `/admin/depoimentos` - Gerenciador de depoimentos

## 🔐 Autenticação

O site utiliza OAuth para autenticação. Apenas usuários autenticados podem:
- Acessar o painel administrativo
- Enviar depoimentos
- Fazer upload de arquivos

Usuários com role `admin` podem:
- Aprovar/rejeitar depoimentos
- Gerenciar arquivos
- Acessar todas as funcionalidades administrativas

## 📊 Banco de Dados

### Tabelas Principais

**users**: Usuários autenticados
- id, openId, name, email, role, createdAt, updatedAt

**testimonials**: Depoimentos de clientes
- id, name, company, email, serviceType, text, rating, status, imageUrl, createdAt

**portfolioProjects**: Projetos do portfólio
- id, title, description, category, imageUrl, results, featured, createdAt

**files**: Arquivos enviados
- id, userId, fileName, fileKey, fileUrl, mimeType, fileSize, uploadedAt

## 🚀 Build para Produção

```bash
# Compilar o projeto
pnpm build

# Iniciar em modo produção
pnpm start
```

## 📝 Scripts Disponíveis

```bash
pnpm dev          # Inicia servidor de desenvolvimento
pnpm build        # Compila para produção
pnpm start        # Inicia servidor em produção
pnpm db:push      # Executa migrações do banco
pnpm db:studio    # Abre Drizzle Studio
pnpm lint         # Executa linter
pnpm test         # Executa testes
```

## 📞 Contato

**CNSOUSATEC - Soluções Técnicas em Elétrica e Eletrônica**

- 📱 Telefone: (61) 99274-3428
- 📧 Email: Cnsousatec@gmail.com
- 📍 Localização: Brasília, DF - Brasil

## 📄 Licença

Projeto propriedade da CNSOUSATEC - Soluções Técnicas em Elétrica e Eletrônica

---

**Desenvolvido com ❤️ usando React, Node.js, Tailwind CSS e Drizzle ORM**
