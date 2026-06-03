# Accessibility Audit Skill

Use this skill to audit React/Next.js components for accessibility compliance.

## Goals

- Ensure WCAG 2.1 AA compliance
- Verify semantic HTML usage
- Check keyboard navigation
- Validate ARIA usage
- Review form accessibility

## Instructions

For each component reviewed, check:

### 1. Semantic HTML
- Are interactive elements native (`<button>`, `<a>`, `<input>`)?
- Are headings hierarchical (`h1` → `h2` → `h3`)?
- Are lists marked up properly (`<ul>`, `<ol>`, `<li>`)?

### 2. Keyboard Navigation
- Can all interactive elements be reached with `Tab`?
- Is focus order logical?
- Are there visible focus indicators (`:focus-visible`, `focus:ring`)?
- Are custom widgets keyboard-operable (Escape, Enter, Space, Arrow keys)?

### 3. Screen Reader Support
- Do images have meaningful `alt` text?
- Are icon-only buttons labeled (`aria-label`)?
- Are live regions used for dynamic content?
- Is the document language set (`lang` attribute)?

### 4. ARIA Usage
- Is ARIA used only when native semantics are insufficient?
- Are `aria-expanded`, `aria-controls` used for toggles?
- Are roles correct and necessary?
- Are `aria-live` regions used sparingly?

### 5. Forms
- Are all inputs associated with `<label>` elements?
- Are required fields indicated?
- Are error messages linked with `aria-describedby`?
- Is `autocomplete` used where appropriate?

### 6. Color & Contrast
- Do text colors meet WCAG contrast ratios (4.5:1 normal, 3:1 large)?
- Is information conveyed by more than just color?
- Are disabled states clearly distinguishable?

## Output Format

Provide:

1. **Summary** — Overall accessibility score (✅ Pass / ⚠️ Warnings / ❌ Fail)
2. **Issues Found** — Categorized by severity (Critical, Warning, Suggestion)
3. **Fixes** — Code examples for each issue
4. **Keyboard Testing Steps** — How to manually verify with keyboard only
5. **Suggested Tests** — Accessibility tests to add (jest-axe, axe-core, etc.)

## References

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [A11y Project Checklist](https://www.a11yproject.com/checklist/)
