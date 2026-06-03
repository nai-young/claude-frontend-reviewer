"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { examples } from "@/lib/examples";
import { cn } from "@/lib/utils";

interface ExamplePickerProps {
  onSelect: (code: string) => void;
  className?: string;
}

export function ExamplePicker({ onSelect, className }: ExamplePickerProps) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {examples.map((example) => (
        <Button
          key={example.name}
          variant="outline"
          size="sm"
          onClick={() => onSelect(example.code)}
          className="h-auto py-1.5"
        >
          <span className="mr-1.5 text-xs font-medium">{example.name}</span>
          <Badge variant="secondary" className="text-[10px]">
            {example.description}
          </Badge>
        </Button>
      ))}
    </div>
  );
}
