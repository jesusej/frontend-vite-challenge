# Frontend Vite Challenge

> Invoice management web application built with React + Vite stack.

## Table of Contents

- [Frontend Vite Challenge](#frontend-vite-challenge)
  - [Table of Contents](#table-of-contents)
  - [About](#about)
  - [Objective](#objective)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [🧹 Linting and Formatting](#-linting-and-formatting)
  - [Notes and Assumptions](#notes-and-assumptions)

## About

This is a challenge for a real-world frontend service using the following tech stack:

- React + Vite
- CoreUI Pro
- Zustand
- Formik + Yup
- AG Grid
- TailwindCSS

## Objective

Build an Invoicing Module Frontend. The module allows users to view a list of invoices, filter them, and create new ones using a form.

## Getting Started

### Prerequisites

- Node.js (v16 or later recommended)
- pnpm (recommended), npm, or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/frontend-vite-challenge.git
   cd frontend-vite-challenge
   ```

2. **Install dependencies**

   ```bash
   # Using pnpm (recommended)
   pnpm install

   # Or using npm
   npm install

   # Or using yarn
   yarn install
   ```

3. **Start the development server**

   ```bash
   pnpm dev
   # or
   npm run dev
   # or
   yarn dev
   ```

   The application will be available at `http://localhost:5173`

4. **Build for production**
   ```bash
   pnpm build
   ```
   The production build will be in the `dist` directory.

## 🧹 Linting and Formatting

```bash
# Run ESLint
pnpm lint
```

## Notes and Assumptions

- The challenge mentioned a Figma design, but I did not receive any design files. Instead, I focused on implementing the functional requirements with future developments in mind.
- Some of the features mentioned in the challenge are not yet implemented, such as the TailwindCSS configuration, CSV import, and Storybook documentation. These will be implemented in future updates.
