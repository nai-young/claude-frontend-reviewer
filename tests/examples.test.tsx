import { describe, expect, it } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { BadButton } from "../app/examples/bad-button";
import { LoginForm } from "../app/examples/inaccessible-form";
import { BadModal } from "../app/examples/mad-modal";
import { SlowList } from "../app/examples/slow-list";

describe("Example Components", () => {
  describe("BadButton", () => {
    it("renders a button", () => {
      render(<BadButton />);
      expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
    });

    it("is keyboard accessible", () => {
      render(<BadButton />);
      const button = screen.getByRole("button");
      expect(button).toHaveAttribute("type", "button");
    });
  });

  describe("LoginForm", () => {
    it("renders form inputs", () => {
      render(<LoginForm />);
      expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
      expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
    });

    it("has accessibility issues: no semantic button", () => {
      render(<LoginForm />);
      // The form uses a div instead of a button — a deliberate anti-pattern
      expect(screen.queryByRole("button")).not.toBeInTheDocument();
    });

    it("allows typing in inputs", () => {
      render(<LoginForm />);
      const emailInput = screen.getByPlaceholderText("Email");
      fireEvent.change(emailInput, { target: { value: "alice@example.com" } });
      expect(emailInput).toHaveValue("alice@example.com");
    });
  });

  describe("BadModal", () => {
    it("renders modal elements", () => {
      render(<BadModal />);
      expect(screen.getByText("Modal")).toBeInTheDocument();
      expect(screen.getByRole("button", { name: /x/i })).toBeInTheDocument();
    });

    it("lacks modal accessibility semantics", () => {
      render(<BadModal />);
      // No dialog role, no aria-modal — deliberate anti-pattern for demo
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
      expect(screen.queryByRole("button", { name: /close/i })).not.toBeInTheDocument();
    });
  });

  describe("SlowList", () => {
    it("renders a large list", () => {
      render(<SlowList />);
      expect(screen.getByText(/item 0/i)).toBeInTheDocument();
      expect(screen.getByText(/item 9999/i)).toBeInTheDocument();
    });

    it("renders many items without semantic list structure", () => {
      render(<SlowList />);
      // Uses divs instead of <ul>/<li> — deliberate anti-pattern
      expect(screen.queryByRole("list")).not.toBeInTheDocument();
    });
  });
});
