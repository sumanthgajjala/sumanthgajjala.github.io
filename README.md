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

## Resume Update Workflow

When `SumanthGajjalaResume.pdf` changes, use a Copilot AI agent to generate an update PR and review it before merge.

This setup uses **agent + prompt**:

- **Agent**: executes the update (VS Code Copilot agent or GitHub cloud Copilot agent)
- **Prompt file**: reusable instructions in `.github/agent-prompts/resume-update.md` to keep updates consistent

### VS Code Copilot agent flow

1. Update `SumanthGajjalaResume.pdf`
2. Use prompt from `.github/agent-prompts/resume-update.md`
3. Ask Copilot to update `src/data/portfolioData.js`: `topTech` (with valid `iconClass` values for the infinite-scroll tech wheel), `skills`, `experience`, and `education`
4. Review `git diff`
5. Run `npm run build`
6. Commit/merge only verified changes

### GitHub cloud Copilot agent flow

1. Update `SumanthGajjalaResume.pdf`
2. Run workflow `.github/workflows/update-website-from-resume.yml` (workflow_dispatch)
3. Open the created issue and start Copilot coding agent from that issue
4. Review the generated PR
5. Confirm `npm run build` passes before merge

> Resume updates are intentionally review-driven. GitHub Actions deploys only what you explicitly commit or merge.

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
