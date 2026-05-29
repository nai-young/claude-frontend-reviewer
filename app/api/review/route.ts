import Anthropic from "@anthropic-ai/sdk";
import { NextResponse } from "next/server";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function POST(req: Request) {
  const { code } = await req.json();

  const message = await anthropic.messages.create({
    model: "claude-3-5-sonnet-latest",
    max_tokens: 1200,
    messages: [
      {
        role: "user",
        content: `
Review this React/Next.js component.

Focus on:
- accessibility
- performance
- TypeScript quality
- maintainability
- tests

Code:
${code}
        `,
      },
    ],
  });

  return NextResponse.json({
    result: message.content,
  });
}