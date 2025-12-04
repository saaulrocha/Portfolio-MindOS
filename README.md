# 🧠 MindOS Portfolio

> A personal portfolio reimagined as a futuristic, web-based Operating System.

![MindOS Preview](/public/mindos-preview.png)

**MindOS** is a unique interactive portfolio experience designed to look and feel like a next-generation desktop operating system. Built with **Astro**, **TypeScript**, and **Tailwind CSS**, it features a fully functional window management system, a cinematic boot sequence, and a sleek, glassmorphic UI.

## ✨ Features

- **🖥️ Desktop Environment**: A fully responsive desktop interface with a macOS-inspired dock and menu bar.
- **🪟 Window System**: Draggable, floating windows with "traffic light" controls and smooth animations.
- **🚀 Boot Sequence**: A cinematic, terminal-style boot animation that welcomes visitors.
- **🎨 Glassmorphism UI**: extensive use of backdrop-blur, subtle gradients, and glowing borders for a premium feel.
- **📂 Project Showcase**: "Running Apps" style project display with interactive hover effects and OS-like window frames.
- **⚡ High Performance**: Built on Astro for blazing fast load times and zero-JS default (where possible).

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: Native CSS Keyframes & Transitions

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/saaulrocha/Portfolio-MindOS.git
   cd Portfolio-MindOS
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
src/
├── components/    # UI Components (Dock, Window, BootSequence, etc.)
├── layouts/       # Main Desktop Layout
├── pages/         # Application Routes (index.astro)
├── styles/        # Global CSS & Design System
└── data/          # Profile & Project Data (profile.ts)
```

## 🎨 Customization

You can easily customize the portfolio by editing `src/data/profile.ts`. This file contains all the personal information, experience, education, and project data used throughout the site.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Built with ❤️ by <a href="https://saulrocha.com">Saúl Rocha</a>
</p>
