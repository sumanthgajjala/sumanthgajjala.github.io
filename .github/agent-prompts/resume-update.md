# Resume Update Agent Prompt

You are updating this portfolio from the latest resume file in this repository: `SumanthGajjalaResume.pdf`.

## Objectives

1. Update resume-derived content in `src/data/portfolioData.js`.
2. Refresh the `topTech` array (Main Technologies section) to reflect current resume technologies.
3. Ensure each `topTech` item includes a correct `iconClass` used by the infinite-scroll Main Technologies wheel (`IconGrid`) so the technology icons render correctly.
4. Refresh the `skills` array (Skills section) to reflect current resume skills/categories.
5. Refresh the `experience` array from the latest resume experience highlights.
6. Refresh the `education` array from the latest resume education details.
7. Keep edits tightly scoped to resume-driven sections unless explicitly required.
8. Preserve existing site structure, styling, and deployment workflow.

## Constraints

- Do not edit `.github/workflows/deploy.yml`.
- Do not add automation that commits directly to `master`.
- Do not touch unrelated UI behavior or styles unless needed for correctness.

## Validation

1. Run `npm run build`.
2. Confirm the PR summary explicitly lists:
   - Main Technologies updates (`topTech`)
   - Main Technologies icon updates (`topTech[].iconClass`)
   - Skills updates (`skills`)
   - Experience updates (`experience`)
   - Education updates (`education`)
3. Include a clear summary of what changed and why.
