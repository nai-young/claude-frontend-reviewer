"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ReviewRecord {
  id: string;
  timestamp: number;
  codePreview: string;
  result: string;
}

interface ReviewHistoryProps {
  className?: string;
  onSelect?: (record: ReviewRecord) => void;
}

const STORAGE_KEY = "claude-reviewer-history";

function loadHistory(): ReviewRecord[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveHistory(history: ReviewRecord[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
}

export function useReviewHistory() {
  const [history, setHistory] = useState<ReviewRecord[]>(() => loadHistory());

  const addRecord = (code: string, result: string) => {
    const record: ReviewRecord = {
      id: crypto.randomUUID?.() ?? Date.now().toString(),
      timestamp: Date.now(),
      codePreview: code.slice(0, 120).replace(/\n/g, " ") + (code.length > 120 ? "..." : ""),
      result,
    };
    const updated = [record, ...history].slice(0, 20);
    setHistory(updated);
    saveHistory(updated);
  };

  const clearHistory = () => {
    setHistory([]);
    saveHistory([]);
  };

  return { history, addRecord, clearHistory };
}

export function ReviewHistory({ className, onSelect }: ReviewHistoryProps) {
  const { history, clearHistory } = useReviewHistory();

  if (history.length === 0) return null;

  return (
    <Card className={cn(className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-base">Review History</CardTitle>
        <Button variant="ghost" size="sm" onClick={clearHistory}>
          Clear
        </Button>
      </CardHeader>
      <CardContent className="space-y-2">
        {history.map((record) => (
          <button
            key={record.id}
            onClick={() => onSelect?.(record)}
            className="w-full rounded-md border bg-muted/40 p-3 text-left text-sm transition hover:bg-muted"
          >
            <p className="font-medium text-muted-foreground">
              {new Date(record.timestamp).toLocaleString()}
            </p>
            <p className="mt-1 truncate font-mono text-xs">
              {record.codePreview}
            </p>
          </button>
        ))}
      </CardContent>
    </Card>
  );
}
