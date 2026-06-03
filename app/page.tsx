"use client";

import { useCallback, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CodeEditor } from "@/app/components/code-editor";
import { ExamplePicker } from "@/app/components/example-picker";
import { ReviewHistory, useReviewHistory } from "@/app/components/review-history";
import { Mounted } from "@/app/components/mounted";

const sampleCode = `export function BadButton() {
  return (
    <div onClick={() => alert("clicked")}>
      Submit
    </div>
  );
}`;

export default function Home() {
  const [code, setCode] = useState<string>(sampleCode);
  const [result, setResult] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { addRecord } = useReviewHistory();

  const reviewCode = useCallback(async (): Promise<void> => {
    setIsLoading(true);
    setResult("");

    try {
      const response = await fetch("/api/review", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code }),
      });

      const text = await response.text();

      if (!response.ok) {
        throw new Error(text || `Request failed with ${response.status}`);
      }

      const data = JSON.parse(text);
      setResult(data.result);
      addRecord(code, data.result);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unknown error";
      setResult(`Error: ${message}`);
    } finally {
      setIsLoading(false);
    }
  }, [code, addRecord]);

  return (
    <main className="min-h-screen bg-background">
      <section className="mx-auto max-w-7xl px-6 py-10">
        <header className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="space-y-4">
            <Badge variant="secondary">AI-powered React reviews</Badge>

            <div>
              <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
                Claude Frontend Reviewer
              </h1>

              <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                Analyze React and Next.js components for accessibility,
                performance, maintainability and testing opportunities.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 text-sm md:grid-cols-4">
            {["A11y", "Perf", "DX", "Tests"].map((item) => (
              <Card key={item} className="min-w-24 text-center">
                <CardContent className="p-4">
                  <p className="text-2xl font-bold">AI</p>
                  <p className="text-muted-foreground">{item}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </header>

        <section className="grid gap-6 lg:grid-cols-[1fr_420px]">
          <Card>
            <CardHeader className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <CardTitle>Component Input</CardTitle>
                <CardDescription>
                  Paste a React component and run a Claude review.
                </CardDescription>
              </div>

              <Button variant="outline" size="sm" onClick={() => setCode(sampleCode)}>
                Reset demo
              </Button>
            </CardHeader>

            <CardContent className="space-y-4">
              <Mounted>
                <CodeEditor
                  value={code}
                  onChange={setCode}
                  placeholder="Paste your React component here..."
                  className="min-h-[280px]"
                />
              </Mounted>

              <ExamplePicker onSelect={setCode} />

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-muted-foreground">
                  Reviews are focused on frontend quality, not backend logic.
                </p>

                <Button
                  onClick={reviewCode}
                  disabled={isLoading || !code.trim()}
                  size="lg"
                >
                  {isLoading ? "Reviewing..." : "Review with Claude"}
                </Button>
              </div>
            </CardContent>
          </Card>

          <aside className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Review Focus</CardTitle>
                <CardDescription>
                  Claude checks frontend quality across four areas.
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-3">
                {[
                  ["Accessibility", "Semantic HTML, labels, keyboard support"],
                  ["Performance", "Rendering, keys, memoization"],
                  ["Maintainability", "Component structure and readability"],
                  ["Testing", "Useful unit and integration test ideas"],
                ].map(([title, desc]) => (
                  <Card key={title} className="bg-muted/40">
                    <CardContent>
                      <p className="font-medium">{title}</p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {desc}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </CardContent>
            </Card>

            <Alert>
              <AlertTitle>Portfolio Highlights</AlertTitle>
              <AlertDescription>
                Claude API, Claude Skills-ready structure, GitHub Actions and
                AI-assisted code review UX.
              </AlertDescription>
            </Alert>

            <ReviewHistory
              onSelect={(record) => {
                setCode(record.codePreview);
                setResult(record.result);
              }}
            />
          </aside>
        </section>

        <Card className="mt-6">
          <CardHeader className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <CardTitle>Claude Analysis</CardTitle>
              <CardDescription>
                Review results will appear here after Claude analyzes your
                component.
              </CardDescription>
            </div>

            {result && <Badge variant="secondary">Completed</Badge>}
          </CardHeader>

          <CardContent>
            <Separator className="mb-4" />

            <div className="min-h-72 rounded-lg border bg-muted/40 p-5">
              {isLoading ? (
                <div className="flex h-72 items-center justify-center">
                  <div className="text-center">
                    <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-2 border-primary border-t-transparent" />
                    <p className="text-muted-foreground">
                      Claude is reviewing...
                    </p>
                  </div>
                </div>
              ) : result ? (
                <pre className="whitespace-pre-wrap text-sm leading-6">
                  {result}
                </pre>
              ) : (
                <div className="flex h-72 items-center justify-center text-center text-muted-foreground">
                  Paste a component and run a review to see AI feedback.
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
