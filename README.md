# NOTES-APP

🇺🇸 [English](#-english) · 🇧🇷 [Português](#-português)

A simple task and project manager built with vanilla JavaScript / Um gerenciador simples de tarefas e projetos feito com JavaScript puro.

---

## 🇺🇸 English

A simple task and project manager built with vanilla JavaScript. Create projects, add tasks, link tasks to the projects they belong to, and keep track of everything with built-in search and reporting — all persisted locally in your browser.

### Demo

<img width="1920" height="881" alt="notes" src="https://github.com/user-attachments/assets/c2171be9-a51c-4f12-b46c-e334debc6bb9" />

### Table of Contents

- [Features](#features)
- [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [License](#license)
- [Author](#author)

### Features

- Create, edit, and delete tasks (name, description, due date, priority)
- Create, edit, and delete projects (name, description)
- Link a task to a project when creating it
- View a project's page with its description and all linked tasks
- Search/filter tasks and projects
- Reporting page with date and priority filters
- Data persists in the browser via `localStorage` — nothing is lost on refresh
- Web Storage API (Local Storage) allowing to reload the page or close it make your data persist

### Built With

- **JavaScript (ES Modules)** — no framework, plain DOM manipulation
- **Webpack** — bundling, with separate `common` / `dev` / `prod` configs
- **CSS** — custom styles, no CSS framework
- **Web Storage API** — `localStorage` for persistence

### Getting Started

#### Prerequisites

- [Node.js](https://nodejs.org/) (includes npm)

#### Installation

```bash
# Clone the repository
git clone https://github.com/<your-username>/notls-app.git
cd notls-app

# Install dependencies
npm install

# Start the development server
npm run start or npm start
```

The app will open automatically in your browser.

### Available Scripts

| Command | Description |
| --- | --- |
| `npm run start` | Runs the app in development mode with live reload |
| `npm run build` | Builds the app for production into the `dist/` folder |
| `npm run deploy` | Builds and publishes `dist/` to GitHub Pages |

### Project Structure

```
src/
├── assets/          # Icons and static files
├── controllers/      # Bridges between services (data) and views (DOM)
├── dom/              # Reusable view components (items, modals, header)
├── models/           # Plain data classes (Task, Project)
├── pages/            # Page-level components (one per screen)
├── service/           # Data layer (TaskService, ProjectService, StorageService)
├─ styles/           # One CSS file per page
package-lock.json
package.json
README.md
webpack.common.js
webpack.dev.js
webpack.prod.js
```

### Deployment

This project is deployed to **GitHub Pages** using [`gh-pages`](https://www.npmjs.com/package/gh-pages):

```bash
npm run build
npm run deploy
```

### License

Distributed under the MIT License. See `LICENSE` for more information.

### Figma inspiration

<img width="4400" height="3336" alt="Notes App" src="https://github.com/user-attachments/assets/a904f034-3c70-4653-b614-ca44c14022b9" />

### Author

**Rayssa Roberta**
GitHub: [@rayssarrsilva](https://github.com/rayssarrsilva)

---

## 🇧🇷 Português

Um gerenciador simples de tarefas e projetos feito com JavaScript puro (vanilla). Crie projetos, adicione tarefas, vincule tarefas aos projetos aos quais pertencem, e acompanhe tudo com busca e relatórios integrados — tudo persistido localmente no navegador.

### Demonstração

<img width="1920" height="881" alt="notes" src="https://github.com/user-attachments/assets/c2171be9-a51c-4f12-b46c-e334debc6bb9" />

### Índice

- [Funcionalidades](#funcionalidades)
- [Tecnologias usadas](#tecnologias-usadas)
- [Como começar](#como-começar)
  - [Pré-requisitos](#pré-requisitos)
  - [Instalação](#instalação)
- [Scripts disponíveis](#scripts-disponíveis)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Deploy](#deploy)
- [Licença](#licença)
- [Autora](#autora)

### Funcionalidades

- Criar, editar e excluir tarefas (nome, descrição, data de entrega, prioridade)
- Criar, editar e excluir projetos (nome, descrição)
- Vincular uma tarefa a um projeto ao criá-la
- Ver a página de um projeto com sua descrição e todas as tarefas vinculadas
- Buscar/filtrar tarefas e projetos
- Página de relatórios com filtros de data e prioridade
- Dados persistem no navegador via `localStorage` — nada se perde ao atualizar a página
- Web Storage API (Local Storage) permitindo que os dados persistam ao recarregar ou fechar a página

### Tecnologias usadas

- **JavaScript (ES Modules)** — sem framework, manipulação de DOM pura
- **Webpack** — empacotamento, com configs separadas de `common` / `dev` / `prod`
- **CSS** — estilos próprios, sem framework de CSS
- **Web Storage API** — `localStorage` para persistência

### Como começar

#### Pré-requisitos

- [Node.js](https://nodejs.org/) (já inclui o npm)

#### Instalação

```bash
# Clone o repositório
git clone https://github.com/<seu-usuario>/notls-app.git
cd notls-app

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run start ou npm start
```

O app abrirá automaticamente no seu navegador.

### Scripts disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run start` | Roda o app em modo de desenvolvimento com live reload |
| `npm run build` | Gera o build de produção na pasta `dist/` |
| `npm run deploy` | Gera o build e publica `dist/` no GitHub Pages |

### Estrutura do projeto

```
src/
├── assets/          # Ícones e arquivos estáticos
├── controllers/      # Ponte entre services (dados) e views (DOM)
├── dom/              # Componentes de view reutilizáveis (itens, modais, header)
├── models/           # Classes de dados simples (Task, Project)
├── pages/            # Componentes de página (um por tela)
├── service/           # Camada de dados (TaskService, ProjectService, StorageService)
├─ styles/           # Um arquivo CSS por página
package-lock.json
package.json
README.md
webpack.common.js
webpack.dev.js
webpack.prod.js
```

### Deploy

Este projeto é publicado no **GitHub Pages** usando o [`gh-pages`](https://www.npmjs.com/package/gh-pages):

```bash
npm run build
npm run deploy
```

### Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.

### Inspiração no Figma

<img width="4400" height="3336" alt="Notes App" src="https://github.com/user-attachments/assets/a904f034-3c70-4653-b614-ca44c14022b9" />

### Autora

**Rayssa Roberta**
GitHub: [@rayssarrsilva](https://github.com/rayssarrsilva)
