import { describe, expect, it } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { UserCard } from "../app/examples/user-card";

describe("UserCard (deliberately flawed component)", () => {
  const mockData = {
    id: "1",
    name: "Alice",
    avatar: "/avatar.png",
    bio: "Frontend developer",
    tags: ["react", "typescript"],
  };

  it("renders user data", () => {
    render(<UserCard data={mockData} />);
    expect(screen.getByText("ALICE")).toBeInTheDocument();
    expect(screen.getByText("Frontend developer")).toBeInTheDocument();
  });

  it("uses non-semantic elements for interactivity", () => {
    render(<UserCard data={mockData} />);
    // Deliberate anti-pattern: divs used as buttons
    expect(screen.queryByRole("button", { name: /alice/i })).not.toBeInTheDocument();
    expect(screen.queryByRole("button", { name: /delete/i })).not.toBeInTheDocument();
  });

  it("has no alt text on avatar image", () => {
    render(<UserCard data={mockData} />);
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", "/avatar.png");
    expect(img).not.toHaveAttribute("alt");
  });

  it("renders tags without stable keys", () => {
    render(<UserCard data={mockData} />);
    expect(screen.getByText("react")).toBeInTheDocument();
    expect(screen.getByText("typescript")).toBeInTheDocument();
  });
});
