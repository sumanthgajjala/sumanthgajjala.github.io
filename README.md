# Sumanth Gajjala - Portfolio Website

This repository contains my personal portfolio website, deployed on GitHub Pages.

## Live Site

- https://sumanthgajjala.github.io/

## Tech Stack

- React
- Vite
- CSS
- Devicon icon set
- GitHub Actions (build + deploy pipeline)

## Portfolio Content

- Profile summary and contact links
- Main technologies with icons (including GitHub Copilot)
- Skills
- Experience highlights
- Education

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Build output is generated in [dist/](/Users/sumanthgajjala/Documents/Projects/sumanthgajjala.github.io.worktrees/update-portfolio-readme-react/dist).

## GitHub Pages Deployment (master)

Deployment is automated via GitHub Actions in:

- [.github/workflows/deploy.yml](/Users/sumanthgajjala/Documents/Projects/sumanthgajjala.github.io.worktrees/update-portfolio-readme-react/.github/workflows/deploy.yml)

The workflow triggers on pushes to `master`, builds the site, and deploys `dist` to GitHub Pages.

## SEO

The site includes baseline SEO setup:

- Metadata, Open Graph, Twitter tags, canonical URL, and JSON-LD in [index.html](/Users/sumanthgajjala/Documents/Projects/sumanthgajjala.github.io.worktrees/update-portfolio-readme-react/index.html)
- [public/robots.txt](/Users/sumanthgajjala/Documents/Projects/sumanthgajjala.github.io.worktrees/update-portfolio-readme-react/public/robots.txt)
- [public/sitemap.xml](/Users/sumanthgajjala/Documents/Projects/sumanthgajjala.github.io.worktrees/update-portfolio-readme-react/public/sitemap.xml)

## Key Files

- [index.html](/Users/sumanthgajjala/Documents/Projects/sumanthgajjala.github.io.worktrees/update-portfolio-readme-react/index.html)
- [src/App.jsx](/Users/sumanthgajjala/Documents/Projects/sumanthgajjala.github.io.worktrees/update-portfolio-readme-react/src/App.jsx)
- [src/components/](/Users/sumanthgajjala/Documents/Projects/sumanthgajjala.github.io.worktrees/update-portfolio-readme-react/src/components)
- [src/data/portfolioData.js](/Users/sumanthgajjala/Documents/Projects/sumanthgajjala.github.io.worktrees/update-portfolio-readme-react/src/data/portfolioData.js)
- [src/styles/app.css](/Users/sumanthgajjala/Documents/Projects/sumanthgajjala.github.io.worktrees/update-portfolio-readme-react/src/styles/app.css)
- [src/main.jsx](/Users/sumanthgajjala/Documents/Projects/sumanthgajjala.github.io.worktrees/update-portfolio-readme-react/src/main.jsx)
