# NOTES-APP

A simple task and project manager built with vanilla JavaScript. Create projects, add tasks, link tasks to the projects they belong to, and keep track of everything with built-in search and reporting — all persisted locally in your browser.

## Table of Contents

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

## Features

- Create, edit, and delete tasks (name, description, due date, priority)
- Create, edit, and delete projects (name, description)
- Link a task to a project when creating it
- View a project's page with its description and all linked tasks
- Search/filter tasks and projects
- Reporting page with date and priority filters
- Data persists in the browser via `localStorage` — nothing is lost on refresh
- Web Storage API (Local Storage) allowing to reload the page or close it make your data persist

## Built With

- **JavaScript (ES Modules)** — no framework, plain DOM manipulation
- **Webpack** — bundling, with separate `common` / `dev` / `prod` configs
- **CSS** — custom styles, no CSS framework
- **Web Storage API** — `localStorage` for persistence

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (includes npm)

### Installation

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

## Scripts

| Command          | Description                                              |
| ---------------- | ---------------------------------------------------------- |
| `npm run start`       | Runs the app in development mode with live reload         |
| `npm run build`   | Builds the app for production into the `dist/` folder     |
| `npm run deploy`  | Builds and publishes `dist/` to GitHub Pages               |

## Project Structure

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

## Deployment

This project is deployed to **GitHub Pages** using [`gh-pages`](https://www.npmjs.com/package/gh-pages):

```bash
npm run build
npm run deploy
```

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Figma inspiration
<img width="4400" height="3336" alt="Notes App" src="https://github.com/user-attachments/assets/a904f034-3c70-4653-b614-ca44c14022b9" />

## Author

**Rayssa Roberta**
GitHub: [@rayssarrsilva](https://github.com/rayssarrsilva)
