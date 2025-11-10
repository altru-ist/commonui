# Digital Rights Web Application

A modern web application built with Vue 3, TypeScript, and CommonUI components.

## Features

- 🎨 Built with CommonUI component library
- ⚡ Powered by Vite for fast development
- 🔷 TypeScript for type safety
- 🎯 Responsive design with mobile support
- 🌙 Dark mode support
- ♿ Accessibility-first components

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
web/
├── src/
│   ├── App.vue          # Main application component
│   ├── main.ts          # Application entry point
│   └── style.css        # Global styles
├── index.html           # HTML entry point
├── package.json         # Dependencies and scripts
├── vite.config.ts       # Vite configuration
├── tsconfig.json        # TypeScript configuration
└── tailwind.css         # Tailwind CSS configuration
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run type-check` - Run TypeScript type checking

## CommonUI Components

This project uses CommonUI components. Key components used:

- `CuiApp` - Main application layout container
- `CuiMainMenu` - Sidebar navigation menu
- `CuiHeader` - Page header with breadcrumbs and search
- `CuiCard` - Content cards
- `CuiButton` - Buttons
- `CuiToast` - Toast notifications
- `CuiThemeToggle` - Dark mode toggle

## Development

The application uses:
- Vue 3 Composition API with `<script setup>`
- TypeScript for type safety
- CommonUI components for UI elements
- PrimeVue 4 as the underlying UI framework (used by CommonUI)
- Tailwind CSS 4 for styling (via `@tailwindcss/vite` plugin)
- Vite for build tooling

## Technology Stack

- **Vue 3** - Progressive JavaScript framework
- **TypeScript** - Type-safe JavaScript
- **CommonUI** - Component library built on PrimeVue
- **PrimeVue 4** - UI component library with Aura theme
- **Tailwind CSS 4** - Utility-first CSS framework
- **Vite** - Next-generation frontend build tool

## License

Copyright © Digital Rights Management System

