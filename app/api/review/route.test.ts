import { vi, describe, expect, it, beforeEach } from "vitest";

vi.mock("@anthropic-ai/sdk", async (importOriginal) => {
  const mod = await importOriginal<typeof import("@anthropic-ai/sdk")>();
  const create = vi.fn();
  return {
    ...mod,
    default: class MockAnthropic {
      static __mockCreate = create;
      messages = { create };
    },
  };
});

import { POST } from "./route";
import Anthropic from "@anthropic-ai/sdk";

const mockCreate = (Anthropic as unknown as { __mockCreate: ReturnType<typeof vi.fn> }).__mockCreate;

describe("POST /api/review", () => {
  beforeEach(() => {
    mockCreate.mockReset();
    process.env.ANTHROPIC_API_KEY = "test-api-key";
  });

  it("returns a review result for valid code", async () => {
    mockCreate.mockResolvedValue({
      content: [{ type: "text", text: "This component looks good!" }],
    });

    const req = new Request("http://localhost:3000/api/review", {
      method: "POST",
      body: JSON.stringify({ code: "function App() { return <div>Hello</div>; }" }),
      headers: { "Content-Type": "application/json" },
    });

    const res = await POST(req);
    const data = await res.json();

    expect(res.status).toBe(200);
    expect(data.result).toBe("This component looks good!");
  });

  it("returns 500 when ANTHROPIC_API_KEY is missing", async () => {
    const originalKey = process.env.ANTHROPIC_API_KEY;
    delete process.env.ANTHROPIC_API_KEY;

    const req = new Request("http://localhost:3000/api/review", {
      method: "POST",
      body: JSON.stringify({ code: "function App() {}" }),
      headers: { "Content-Type": "application/json" },
    });

    const res = await POST(req);
    const data = await res.json();

    expect(res.status).toBe(500);
    expect(data.error).toBe("Missing ANTHROPIC_API_KEY");

    process.env.ANTHROPIC_API_KEY = originalKey;
  });

  it("returns 500 on API errors", async () => {
    mockCreate.mockRejectedValue(new Error("API down"));

    const req = new Request("http://localhost:3000/api/review", {
      method: "POST",
      body: JSON.stringify({ code: "function App() {}" }),
      headers: { "Content-Type": "application/json" },
    });

    const res = await POST(req);
    const data = await res.json();

    expect(res.status).toBe(500);
    expect(data.error).toBe("API down");
  });
});
