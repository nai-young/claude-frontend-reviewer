import { describe, expect, it, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { UserCard } from "../app/examples/user-card";

describe("UserCard (fixed)", () => {
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

  it("has accessible avatar image with alt text", () => {
    render(<UserCard data={mockData} />);
    const img = screen.getByRole("img", { name: /avatar of alice/i });
    expect(img).toHaveAttribute("src", "/avatar.png");
    expect(img).toHaveAttribute("alt", "Avatar of Alice");
  });

  it("uses semantic button for delete action", () => {
    render(<UserCard data={mockData} />);
    const deleteButton = screen.getByRole("button", {
      name: /delete user alice/i,
    });
    expect(deleteButton).toBeInTheDocument();
  });

  it("calls onDelete when confirmed", () => {
    const onDelete = vi.fn();
    window.confirm = vi.fn(() => true);

    render(<UserCard data={mockData} onDelete={onDelete} />);
    const deleteButton = screen.getByRole("button", {
      name: /delete user alice/i,
    });
    fireEvent.click(deleteButton);

    expect(onDelete).toHaveBeenCalledWith("1");
  });

  it("renders tags with stable keys", () => {
    render(<UserCard data={mockData} />);
    expect(screen.getByText("react")).toBeInTheDocument();
    expect(screen.getByText("typescript")).toBeInTheDocument();
  });

  it("does not mutate props", () => {
    const originalData = { ...mockData };
    render(<UserCard data={mockData} />);
    expect(mockData.name).toBe(originalData.name);
  });

  it("applies Tailwind utility classes", () => {
    render(<UserCard data={mockData} />);
    const card = screen.getByText("ALICE").closest("div[class*='rounded-xl']");
    expect(card).toBeInTheDocument();
  });
});
