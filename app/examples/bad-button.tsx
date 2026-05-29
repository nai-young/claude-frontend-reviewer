/*
 * This is a bad button component that does not use semantic HTML and has accessibility issues.
 * This component should be reviewed by Claude for accessibility, performance, TypeScript quality, maintainability, and tests.
 * Errors:
 * - The component uses a div instead of a button element, which is not semantically correct and can cause accessibility issues.
 * - The component does not have any ARIA attributes to improve accessibility.
 * - The component does not have any tests.
 */

export function BadButton() {
  return <div onClick={() => alert("clicked")}>Submit</div>;
}
