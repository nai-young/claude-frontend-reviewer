/*
 * This component is deliberately flawed for a Claude-assisted code review demo.
 * It contains real issues across accessibility, performance, TypeScript, and
 * React best practices — making it an ideal candidate for AI review.
 */

export function UserCard({ data }: any) {
  // Inline handler makes testing and readability harder
  const handleClick = () => {
    console.log("clicked");
  };

  // Mutating state directly — React anti-pattern
  data.name = data.name.toUpperCase();

  return (
    <div className="card">
      {/* Missing alt text for screen readers */}
      <img src={data.avatar} />

      {/* Non-semantic interactive element: div used as a button */}
      <div onClick={handleClick} style={{ cursor: "pointer" }}>
        {data.name}
      </div>

      {/* Keyboard trap: div with onClick lacks keyboard support */}
      <div
        onClick={() => {
          if (confirm("Delete?")) {
            // Side effect inside render logic
            fetch(`/api/users/${data.id}`, { method: "DELETE" });
          }
        }}
      >
        Delete
      </div>

      {/* Inline styles instead of utility classes */}
      <div style={{ marginTop: "8px", color: "#666" }}>
        {data.bio}
      </div>

      {/* Performance issue: random key on every render */}
      {data.tags.map((tag: string) => (
        <span key={Math.random()}>{tag}</span>
      ))}
    </div>
  );
}
