import { describe, expect, it, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Home from "../app/page";

// Mock fetch globally
const mockFetch = vi.fn();
global.fetch = mockFetch;

describe("Home page", () => {
  beforeEach(() => {
    mockFetch.mockClear();
  });

  it("renders the main heading", () => {
    render(<Home />);
    expect(screen.getByText("Claude Frontend Reviewer")).toBeInTheDocument();
  });

  it("renders the review focus areas", () => {
    render(<Home />);
    expect(screen.getByText("Accessibility")).toBeInTheDocument();
    expect(screen.getByText("Performance")).toBeInTheDocument();
    expect(screen.getByText("Maintainability")).toBeInTheDocument();
    expect(screen.getByText("Testing")).toBeInTheDocument();
  });

  it("has a textarea for code input", () => {
    render(<Home />);
    expect(screen.getByPlaceholderText(/paste your react component/i)).toBeInTheDocument();
  });

  it("shows loading state when reviewing", async () => {
    mockFetch.mockImplementation(() =>
      new Promise(() => {}) // never resolves
    );

    render(<Home />);
    const button = screen.getByRole("button", { name: /review with claude/i });
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByRole("button", { name: /reviewing/i })).toBeInTheDocument();
    });
  });

  it("displays review result after successful API call", async () => {
    mockFetch.mockResolvedValue({
      ok: true,
      text: async () => JSON.stringify({ result: "Great component!" }),
    } as Response);

    render(<Home />);
    const button = screen.getByRole("button", { name: /review with claude/i });
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText("Great component!")).toBeInTheDocument();
    });
  });

  it("displays error when API fails", async () => {
    mockFetch.mockResolvedValue({
      ok: false,
      status: 500,
      text: async () => "Internal Server Error",
    } as Response);

    render(<Home />);
    const button = screen.getByRole("button", { name: /review with claude/i });
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText(/error: internal server error/i)).toBeInTheDocument();
    });
  });
});
