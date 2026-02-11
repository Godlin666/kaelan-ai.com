# Kaelan AI - Official Website

**Jiatong Technology Co., Ltd.**

A modern, animated website for Kaelan AI - your global AI solutions partner.

## About

Kaelan AI (嘉通科技) is focused on:
- 🤖 Artificial Intelligence Solutions
- 🌍 Global Applications Development
- 💡 Smart Technology Innovation

## Tech Stack

- **React 18** - Modern UI framework
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Smooth animations
- **React Router** - Client-side routing

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages.

### Method 1: Automatic Deployment (Recommended)

1. Push your code to the `main` branch
2. GitHub Actions will automatically build and deploy

### Method 2: Manual Deployment

```bash
# Build and deploy
npm run build
# Then configure GitHub Pages to use the gh-pages branch or /dist folder
```

### Custom Domain Setup

1. In your GitHub repository settings, go to "Pages"
2. Add your custom domain: `kaelan-ai.com`
3. Enable "Enforce HTTPS"
4. Configure your DNS:
   - Add a CNAME record pointing to `<username>.github.io`
   - Or add A records pointing to GitHub Pages IPs

## Project Structure

```
├── public/           # Static assets
├── src/
│   ├── assets/       # Images, icons, SVGs
│   ├── components/   # React components
│   ├── config/       # Configuration files
│   ├── constants/    # Content and data
│   ├── App.jsx       # Main app component
│   └── main.jsx      # Entry point
├── index.html        # HTML template
└── vite.config.js    # Vite configuration
```

## Contact

- **Website**: [kaelan-ai.com](https://kaelan-ai.com)
- **Company**: Jiatong Technology Co., Ltd.

## License

MIT License - Jiatong Technology Co., Ltd. 2024
