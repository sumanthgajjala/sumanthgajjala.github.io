# Copilot Instructions for Resume Updates

## Goal

When `SumanthGajjalaResume.pdf` is updated, keep portfolio content aligned through an **agent-reviewed, PR-based workflow**.

## Required workflow

1. Use Copilot agent to prepare resume-derived updates in a branch.
2. Open a PR and review all generated changes before merge.
3. Validate with `npm run build` before merging.
4. For cloud runs, start from `.github/agent-prompts/resume-update.md` or generate an issue via `.github/workflows/update-website-from-resume.yml`.
5. Ensure each resume refresh updates `portfolioData.topTech`, `portfolioData.skills`, `portfolioData.experience`, and `portfolioData.education` when new resume content warrants changes.
6. Ensure `portfolioData.topTech[].iconClass` values stay valid for the infinite-scroll Main Technologies wheel in `src/components/IconGrid.jsx`.

## Guardrails

- Do not add any push-triggered CI/CD step that auto-updates portfolio content.
- Do not modify `.github/workflows/deploy.yml` to run resume updates.
- Keep deployment passive: it should only publish committed files.
- Keep resume-based updates focused in `src/data/portfolioData.js` unless explicitly requested otherwise.
- Do not rewrite unrelated app logic or styles unless explicitly requested.
- In PR notes, clearly call out what changed in Main Technologies, Skills, Experience, and Education.
