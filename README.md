# Claude Frontend Reviewer

A practical showcase of integrating Claude into real-world software engineering workflows.

Rather than focusing on AI-generated code, this project explores how Claude can be embedded throughout the development lifecycle to improve code quality, developer productivity, documentation, and collaboration.

## What This Demonstrates

- Claude Code integration
- Project-aware AI through `CLAUDE.md`
- Custom Claude Skills
- Pull Request automation
- AI-assisted code reviews
- GitHub Actions workflows
- Developer Experience (DX) optimization
- AI-enhanced engineering processes

---

## Why This Project

Most AI demos stop at generating code.

This project focuses on a more realistic use case: integrating Claude as a development assistant that understands project standards, reviews code, improves Pull Requests, generates documentation, and supports engineering workflows.

The objective is to demonstrate practical AI engineering and developer tooling skills rather than simply consuming an AI API.

---

## Claude Configuration

### Project Context

The repository includes a dedicated `CLAUDE.md` file containing:

- Coding standards
- Accessibility requirements
- Architecture guidelines
- Testing expectations
- Code review criteria

This allows Claude to operate with project-specific context and behave like a team-aware engineering assistant.

---

## Custom Skills

### Pull Request Assistant

Generates:

- Conventional Commit titles
- Pull Request descriptions
- Review summaries
- Suggested labels

```txt
.claude/skills/pull-request-assistant
```

---

### Frontend Review

Analyzes:

- React patterns
- TypeScript quality
- Accessibility
- Performance
- Maintainability

```txt
.claude/skills/frontend-review
```

---

### Accessibility Audit

Reviews:

- WCAG compliance
- Semantic HTML
- Keyboard navigation
- ARIA usage
- Form accessibility

```txt
.claude/skills/accessibility-audit
```

---

### React Refactoring

Suggests improvements for:

- Component structure
- Reusability
- Separation of concerns
- Performance optimization

```txt
.claude/skills/refactor-react-component
```

---

## GitHub Integration

Claude is integrated into Pull Request workflows through GitHub Actions.

Examples:

```txt
@claude review only examples/bad-button.tsx
```

```txt
@claude suggest improvements for accessibility
```

```txt
@claude generate a better PR title and description
```

---

## Screenshots

### Claude PR Analysis

![Analysis](docs/analysis.png)

### Claude Pull Request Assistant

`/pull-request-assistant` Custom skill generating optimized Pull Request titles, descriptions and summaries.

![Pull Request Assistant](docs/pull-request-assistant.png)

### Architecture

![Architecture](docs/architecture.png)

### Application Dashboard

![Dashboard](docs/dashboard-main.png)

### Review Results

![Review Results](docs/dashboard-review.png)

---

## Technical Stack

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui

### AI Engineering

- Claude API
- Claude Code
- CLAUDE.md
- Custom Claude Skills
- Prompt Engineering
- Workflow Automation

### DevOps

- GitHub Actions
- Pull Request Automation
- CI/CD Integration

---

## Key Takeaway

This project demonstrates how Claude can be integrated into a professional engineering workflow through:

- Project-aware instructions
- Custom Skills
- Pull Request optimization
- Code review automation
- Documentation generation
- Developer productivity tooling

The focus is not on generating code, but on augmenting the software development lifecycle with AI-powered workflows.
