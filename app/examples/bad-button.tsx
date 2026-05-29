/**
 * Claude Review Example
 *
 * This file demonstrates how Claude can be integrated into a frontend
 * development workflow to identify and resolve common accessibility issues.
 *
 * -------------------------------------------------------------------------
 * Original implementation
 * -------------------------------------------------------------------------
 *
 * ```tsx
 * export function BadButton() {
 *   return (
 *     <div onClick={() => alert("clicked")}>
 *       Submit
 *     </div>
 *   );
 * }
 * ```
 *
 * -------------------------------------------------------------------------
 * Issues identified during review
 * -------------------------------------------------------------------------
 *
 * - Non-semantic interactive element (`div` instead of `button`)
 * - Missing keyboard accessibility
 * - No visible focus state
 * - Inline event handler
 *
 * -------------------------------------------------------------------------
 * Improvements applied
 * -------------------------------------------------------------------------
 *
 * ✓ Replaced `div` with semantic `button`
 * ✓ Added keyboard accessibility support
 * ✓ Added visible focus states
 * ✓ Extracted click handler for readability and testability
 *
 */

export function BadButton() {
  const handleClick = (): void => alert("clicked");

  return (
    <button
      type="button"
      onClick={handleClick}
      className="
        rounded
        bg-blue-500
        px-4
        py-2
        text-white
        transition
        duration-200
        ease-in-out
        hover:bg-blue-600
        focus:outline-none
        focus:ring-2
        focus:ring-blue-400
        focus:ring-opacity-75
      "
    >
      Submit
    </button>
  );
}
