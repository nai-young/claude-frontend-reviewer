# Refactor React Component Skill

Use this skill to suggest structural improvements to React/Next.js components.

## Goals

- Improve component structure
- Increase reusability
- Enforce separation of concerns
- Optimize performance
- Enhance readability and maintainability

## Instructions

Analyze the component and suggest improvements in these areas:

### 1. Component Responsibility
- Is the component doing too much? (Consider extracting sub-components)
- Is business logic mixed with presentation? (Extract custom hooks)
- Are side effects isolated? (useEffect should have clear purpose)

### 2. Props & Typing
- Are props well-typed with explicit interfaces?
- Are optional props handled gracefully?
- Is prop drilling avoided? (Consider context or composition)
- Are `children` used for composition instead of props?

### 3. State Management
- Is local state minimal? (Can it be derived?)
- Are state updates batched where possible?
- Are expensive computations memoized (`useMemo`, `useCallback`)?
- Are effects properly cleaned up?

### 4. Performance
- Are lists using stable `key` props?
- Are heavy calculations wrapped in `useMemo`?
- Are callbacks wrapped in `useCallback` when passed to children?
- Is `React.memo` used for pure components that re-render often?
- Are dynamic imports used for heavy components (`next/dynamic`)?

### 5. Reusability
- Can the component be split into smaller, reusable pieces?
- Are Tailwind classes extracted into shared utilities?
- Is logic extracted into custom hooks?
- Are constants extracted to module scope?

### 6. Patterns to Prefer
- Composition over configuration
- Hooks for logic, components for UI
- Early returns over nested conditionals
- Destructuring props at component signature
- Named functions for handlers

## Output Format

Provide:

1. **Summary** — Overall assessment (✅ Clean / ⚠️ Minor issues / ❌ Needs refactor)
2. **Problems Found** — Specific code smells or anti-patterns
3. **Refactored Example** — A complete, improved version of the component
4. **Extracted Utilities** — Any hooks, helpers, or sub-components extracted
5. **Suggested Tests** — Unit tests for extracted logic

## Anti-Patterns to Flag

- Inline arrow functions in JSX that cause re-renders
- `useEffect` with missing dependencies
- Direct DOM manipulation (unless necessary)
- Mutating state directly
- Overly generic component names (`Component`, `Wrapper`)
- Prop drilling more than 2 levels deep

## References

- [React Thinking in Components](https://react.dev/learn/thinking-in-react)
- [Custom Hooks](https://react.dev/learn/reusing-logic-with-custom-hooks)
- [Next.js Performance](https://nextjs.org/docs/app/building-your-application/optimizing)
