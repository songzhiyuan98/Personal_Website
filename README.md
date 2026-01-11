# Personal Portfolio Website

A modern, responsive personal portfolio website showcasing my work as a Full-Stack Developer & AI/ML Engineer. Built with Next.js and deployed on Vercel.

🌐 **Live Site**: [https://www.zhiyuansong.dev/](https://www.zhiyuansong.dev/)

## Overview

This is my active personal portfolio website that presents my professional experience, projects, research publications, technical skills, and educational background. The site features a clean, minimalist design with smooth animations and a responsive layout optimized for all devices.

## Features

- **Modern UI/UX**: Clean, minimalist design with smooth animations powered by Framer Motion
- **Responsive Design**: Fully responsive layout that works seamlessly across desktop, tablet, and mobile devices
- **Dark Mode Support**: System-level adaptive dark mode (follows system preferences)
- **Performance Optimized**: Built with Next.js for optimal performance and SEO
- **Sections**:
  - Hero section with animated background tags
  - About me with research interests and career goals
  - Professional experience
  - Featured projects with detailed descriptions
  - Research publications (Nature & Nature Medicine)
  - Education timeline
  - Technical skills showcase

## Tech Stack

### Core
- **Framework**: [Next.js](https://nextjs.org/) 15.0.6 (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **UI Library**: [React](https://react.dev/) 18.2.0

### Styling & Animation
- **CSS Framework**: [Tailwind CSS](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Additional**: GSAP for advanced animations

### UI Components
- [Material-UI](https://mui.com/) (MUI)
- [Headless UI](https://headlessui.com/)
- [Lucide React](https://lucide.dev/) (Icons)
- [React Icons](https://react-icons.github.io/react-icons/)

### Deployment
- **Platform**: [Vercel](https://vercel.com/)
- **Domain**: [zhiyuansong.dev](https://www.zhiyuansong.dev/)

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/songzhiyuan98/Personal_Website.git
cd Personal_Website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
Personal_Website/
├── app/
│   ├── components/          # React components
│   │   ├── common/         # Shared components (Navbar, AnimatedText, etc.)
│   │   ├── education/      # Education timeline component
│   │   ├── sections/       # Page sections (Hero, About, Experience, etc.)
│   │   └── providers/      # Context providers
│   ├── data/               # Static data (projects, experiences, etc.)
│   ├── fonts/              # Custom fonts (Geist)
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── public/                 # Static assets (images, icons, PDFs)
└── package.json            # Dependencies and scripts
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

This project is deployed on [Vercel](https://vercel.com/), which provides:
- Automatic deployments on push to main branch
- Global CDN for fast content delivery
- SSL certificates
- Preview deployments for pull requests

The live site is available at: [https://www.zhiyuansong.dev/](https://www.zhiyuansong.dev/)

## License

This project is private and proprietary. All rights reserved.

## Contact

- **Email**: songzhiyuan98@gmail.com
- **Website**: [https://www.zhiyuansong.dev/](https://www.zhiyuansong.dev/)
- **LinkedIn**: [Zhiyuan Song](https://www.linkedin.com/in/zhiyuan-song-761651217/)
- **Google Scholar**: [Zhiyuan Song](https://scholar.google.com/citations?user=wh3s5WkAAAAJ&hl=zh-CN)
- **GitHub**: [@songzhiyuan98](https://github.com/songzhiyuan98)

---

Built with ❤️ using Next.js and TypeScript
