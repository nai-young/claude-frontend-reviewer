"use client";

import { useState } from "react";

export default function Home() {
  const [code, setCode] = useState<string>("");
  const [result, setResult] = useState<string>("");

  async function reviewCode() {
    try {
      const response = await fetch("/api/review", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code }),
      });

      const data = await response.json();
      setResult(data.result);
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error reviewing code:", error.message);
      } else {
        console.error("Unknown error reviewing code:", error);
      }
    }
  }

  return (
    <main className="mx-auto max-w-5xl p-8 space-y-6">
      <h1 className="text-3xl font-bold">Claude Frontend Reviewer</h1>

      <textarea
        className="w-full h-80 rounded border p-4 font-mono"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Paste a React component here..."
      />

      <button
        onClick={reviewCode}
        className="rounded bg-black px-4 py-2 text-white"
      >
        Review with Claude
      </button>

      <pre className="whitespace-pre-wrap rounded bg-gray-100 p-4">
        {result}
      </pre>
    </main>
  );
}
