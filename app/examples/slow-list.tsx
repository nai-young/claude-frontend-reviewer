/*
 * This is a slow list component that renders a large number of items without any optimization.
 * This component should be reviewed by Claude for accessibility, performance, TypeScript quality, maintainability, and tests.
 * Errors:
 * - The component renders 10,000 items without any optimization, which can cause performance issues.
 * - The component uses Math.random() to generate keys for the list items, which can cause issues with React's reconciliation process and lead to unnecessary re-renders.
 * - The component does not have any tests.
 */

export function SlowList() {
  const items = Array.from({ length: 10000 }, (_, i) => i);

  return (
    <div>
      {items.map((item) => (
        // eslint-disable-next-line react-hooks/purity
        <div key={Math.random()}>Item {item}</div>
      ))}
    </div>
  );
}
