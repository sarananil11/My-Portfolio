# Saran Anil — Portfolio

A modern, minimal, and fully responsive single-page portfolio built with React + Vite, Tailwind CSS, React Router, Framer Motion, and EmailJS. The UI is crafted for generous spacing, subtle glassmorphism, and smooth motion to highlight projects, skills, and a contact form.

## Features

- Sticky, glassmorphic navbar with active section highlighting
- Hero, About, Projects, and Contact sections with modular components
- Reusable UI primitives (Layout, Navbar, Footer, Button, Card, SectionHeading, ProjectCard)
- Responsive grid layouts (1 → 2 → 3 columns) and mobile-first design
- Smooth scrolling, fade/slide animations, and framer-motion micro-interactions
- EmailJS-powered contact form with validation and helpful states
- Tailwind CSS utility-first styling with custom theme tokens

## Folder Structure

```
My-Portfolio
├─ public/
├─ src/
│  ├─ components/        # Reusable UI pieces
│  ├─ context/           # Active section context
│  ├─ data/              # Skills & project data
│  ├─ hooks/             # Custom hooks for scroll + observer
│  ├─ layout/            # Layout wrapper
│  ├─ pages/             # Route-level pages
│  ├─ sections/          # Page sections (Hero, About, etc.)
│  ├─ App.jsx
│  └─ main.jsx
├─ example.env           # EmailJS env variable placeholders
├─ tailwind.config.js
└─ README.md
```

## Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Add EmailJS credentials**
   - Duplicate `example.env` → `.env`
   - Fill in:
     ```
     VITE_EMAILJS_SERVICE_ID=your_service_id
     VITE_EMAILJS_TEMPLATE_ID=your_template_id
     VITE_EMAILJS_PUBLIC_KEY=your_public_key
     ```

3. **Run the dev server**
   ```bash
   npm run dev
   ```
   Visit the printed URL (usually `http://localhost:5173`).

4. **Build for production**
   ```bash
   npm run build
   ```
   Preview the production bundle with `npm run preview`.

## Customization Tips

- Update text content inside `src/sections/*` for quick copy changes.
- Add or adjust projects in `src/data/projects.js`.
- Tailor theme tokens (colors, fonts, shadows) in `tailwind.config.js`.
- Replace EmailJS with another provider by editing `Contact.jsx`.

Happy shipping! 🚀
