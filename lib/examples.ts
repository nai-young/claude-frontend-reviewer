export interface Example {
  name: string;
  description: string;
  code: string;
}

export const examples: Example[] = [
  {
    name: "Bad Button",
    description: "Non-semantic div used as a button",
    code: `export function BadButton() {
  return (
    <div onClick={() => alert("clicked")}>
      Submit
    </div>
  );
}`,
  },
  {
    name: "Inaccessible Form",
    description: "Missing labels and semantic button",
    code: `export function LoginForm() {
  return (
    <form>
      <input placeholder="Email" />
      <input placeholder="Password" type="password" />
      <div onClick={() => alert("login")}>Login</div>
    </form>
  );
}`,
  },
  {
    name: "Slow List",
    description: "Unoptimized render with random keys",
    code: `export function SlowList() {
  const items = Array.from({ length: 10000 }, (_, i) => i);

  return (
    <div>
      {items.map((item) => (
        <div key={Math.random()}>Item {item}</div>
      ))}
    </div>
  );
}`,
  },
  {
    name: "Mad Modal",
    description: "Missing ARIA and focus management",
    code: `export function BadModal() {
  return (
    <div>
      <h2>Modal</h2>
      <button>X</button>
    </div>
  );
}`,
  },
  {
    name: "Good Button",
    description: "Accessible, semantic, and styled",
    code: `export function GoodButton() {
  const handleClick = (): void => alert("clicked");

  return (
    <button
      type="button"
      onClick={handleClick}
      className="rounded bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
    >
      Submit
    </button>
  );
}`,
  },
];
