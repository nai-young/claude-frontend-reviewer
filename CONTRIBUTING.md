# Contributing to Claude Frontend Reviewer

Thanks for your interest in contributing! This project is a portfolio showcase, but feedback and improvements are welcome.

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Copy `.env.local.example` to `.env.local` and add your `ANTHROPIC_API_KEY`
4. Run the dev server: `npm run dev`

## Using Claude Skills Locally

This repository includes custom Claude skills in `.claude/skills/`:

- `/frontend-review` — Review React/Next.js code quality
- `/accessibility-audit` — Audit for WCAG compliance
- `/refactor-react-component` — Suggest structural improvements
- `/pull-request-assistant` — Generate PR titles and descriptions

To use them, ensure you have [Claude Code](https://claude.ai/code) installed and the skills directory is indexed.

## Code Standards

- TypeScript strictly enforced
- Components should be small and reusable
- Prefer accessible HTML (semantic elements, ARIA when needed)
- Use Tailwind and shadcn/ui patterns
- Write tests for new features
- Follow Conventional Commits for messages

## Pull Request Process

1. Ensure CI passes (`npm run typecheck && npm run lint && npm run test && npm run build`)
2. Fill out the PR template
3. Request review from CODEOWNERS
4. Address feedback and merge when approved

## Reporting Issues

If you find bugs or have suggestions, open an issue with:
- Clear description
- Steps to reproduce (if applicable)
- Expected vs actual behavior
