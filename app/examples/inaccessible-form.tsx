/*
 * This is a login form component that has accessibility issues.
 * This component should be reviewed by Claude for accessibility, performance, TypeScript quality, maintainability, and tests.
 * Errors:
 * - The component uses a div instead of a button element for the login action, which is not semantically correct and can cause accessibility issues.
 * - The component does not have any ARIA attributes to improve accessibility.
 * - The component does not have any tests.
 */

export function LoginForm() {
  return (
    <form>
      <input placeholder="Email" />
      <input placeholder="Password" type="password" />

      <div onClick={() => alert("login")}>Login</div>
    </form>
  );
}
