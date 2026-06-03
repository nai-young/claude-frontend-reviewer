"use client";

import { useCallback } from "react";
import Editor from "react-simple-code-editor";
import Prism from "prismjs";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-jsx";
import "prismjs/themes/prism-tomorrow.css";
import { cn } from "@/lib/utils";

interface CodeEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

function highlight(code: string) {
  return Prism.highlight(code, Prism.languages.jsx, "jsx");
}

export function CodeEditor({ value, onChange, placeholder, className }: CodeEditorProps) {
  const handleChange = useCallback(
    (newValue: string) => {
      onChange(newValue);
    },
    [onChange]
  );

  return (
    <div
      className={cn(
        "relative min-h-[220px] rounded-lg border bg-muted/40 font-mono text-sm",
        className
      )}
    >
      <Editor
        value={value}
        onValueChange={handleChange}
        highlight={highlight}
        padding={16}
        placeholder={placeholder}
        className="font-mono text-sm"
        style={{
          fontFamily: '"Fira Code", "Fira Mono", monospace',
          fontSize: 14,
          minHeight: 220,
        }}
        textareaClassName="focus:outline-none"
      />
    </div>
  );
}
