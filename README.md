# Claude Frontend Reviewer

AI-powered code review platform for React and Next.js applications.

Analyze components with Claude to identify accessibility issues, performance bottlenecks, maintainability concerns, and testing gaps.

![Next.js](https://img.shields.io/badge/Next.js-000?logo=nextdotjs)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript)
![Claude](https://img.shields.io/badge/Claude-AI-orange)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?logo=githubactions)

---

## Demo

Review React and Next.js components with AI-powered analysis.

### Features

- 🔍 React component audits
- ♿ Accessibility reviews (WCAG-focused)
- ⚡ Performance analysis
- 🧹 Refactoring suggestions
- 🧪 Testing recommendations
- 🤖 Claude Skills integration
- 🔄 GitHub Actions automation
- 📝 Pull Request reviews

---

## Screenshots

### Dashboard

![Dashboard](docs/dashboard.png)

### Claude Analysis

![Analysis](docs/analysis.png)

### GitHub Pull Request Review

![PR Review](docs/pr-review.png)

---

## Architecture

![Architecture](docs/architecture.png)

### Flow

```txt
User Component
      │
      ▼
Next.js Frontend
      │
      ▼
API Route
      │
      ▼
Claude API
      │
      ▼
Review Engine
      │
      ▼
Dashboard Results
```

---

## Example Review

### Input

```tsx
export function BadButton() {
  return <div onClick={() => alert("clicked")}>Submit</div>;
}
```

### Claude Findings

#### Accessibility

- Interactive element should be a button
- Keyboard navigation not supported

#### Maintainability

- Inline implementation
- Not reusable

#### Suggested Fix

```tsx
export function Button() {
  return <button type="button">Submit</button>;
}
```

---

## Claude Integration

### CLAUDE.md

Project-wide development standards:

- TypeScript strict mode
- Accessibility-first development
- Component architecture rules
- Testing requirements

### Custom Skills

```txt
.claude/
└── skills/
    ├── frontend-review/
    ├── accessibility-audit/
    └── refactor-react-component/
```

Examples:

- Frontend Review
- Accessibility Audit
- React Refactoring
- Test Generation

---

## GitHub Automation

### Claude Code

Trigger AI reviews directly from Pull Requests:

```txt
@claude review this component
```

Example use cases:

- Accessibility reviews
- Refactor suggestions
- Architecture feedback
- Test recommendations

### CodeRabbit

Automated AI-assisted Pull Request reviews.

---

## Tech Stack

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS

### AI

- Claude API
- Claude Code
- Custom Claude Skills

### Quality

- ESLint
- Vitest
- Playwright

### DevOps

- GitHub Actions
- CodeRabbit

---

## Project Structure

```txt
claude-frontend-reviewer/

├── .claude/
│   └── skills/
│
├── .github/
│   └── workflows/
│       ├── ci.yml
│       └── claude.yml
│
├── app/
│   ├── api/
│   │   └── review/
│   └── page.tsx
│
├── docs/
│   ├── architecture.png
│   ├── dashboard.png
│   ├── analysis.png
│   └── pr-review.png
│
├── examples/
│   ├── bad-button.tsx
│   ├── inaccessible-form.tsx
│   ├── slow-list.tsx
│   └── bad-modal.tsx
│
├── CLAUDE.md
└── README.md
```

---

## Local Development

Install dependencies:

```bash
npm install
```

Create environment variables:

```bash
cp .env.example .env.local
```

Add your API key:

```env
ANTHROPIC_API_KEY=your_api_key
```

Run development server:

```bash
npm run dev
```

---

## CI/CD Pipeline

Automated checks:

- ESLint
- TypeScript
- Unit Tests
- Build Verification
- Claude Review Workflows
- CodeRabbit Reviews

---

## Portfolio Highlights

This project demonstrates:

- Modern React architecture
- AI-assisted development workflows
- Claude Skills implementation
- Claude Code integration
- GitHub Actions automation
- Accessibility-first engineering
- Testing strategy design
- CI/CD best practices
- Developer Experience (DX)

---

## Future Improvements

- Repository-wide analysis
- Multi-file reviews
- Design System audits
- Storybook integration
- Lighthouse scoring
- AI-generated Pull Requests
- MCP integrations
