/*
 * This is an example of a bad modal component that does not follow accessibility best practices.
 * Errors:
 * - No ARIA roles or attributes to identify it as a modal dialog.
 * - No focus management (focus is not trapped inside the modal).
 * - No keyboard accessibility (cannot be closed with Escape key).
 * - No screen reader support (no announcements when it opens).
 */

export function BadModal() {
  return (
    <div>
      <h2>Modal</h2>
      <button>X</button>
    </div>
  );
}
