"use client";

import { useCallback } from "react";
import { Button } from "@/components/ui/button";

interface User {
  id: string;
  name: string;
  avatar: string;
  bio: string;
  tags: string[];
}

interface UserCardProps {
  data: User;
  onDelete?: (id: string) => void;
}

export function UserCard({ data, onDelete }: UserCardProps) {
  const displayName = data.name.toUpperCase();

  const handleDelete = useCallback(() => {
    if (typeof window !== "undefined" && window.confirm("Delete this user?")) {
      onDelete?.(data.id);
    }
  }, [data.id, onDelete]);

  return (
    <div className="rounded-xl border bg-card p-6 text-card-foreground shadow-sm">
      <div className="flex items-center gap-4">
        <img
          src={data.avatar}
          alt={`Avatar of ${data.name}`}
          className="h-12 w-12 rounded-full object-cover"
        />

        <div className="flex-1">
          <h3 className="font-semibold">{displayName}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{data.bio}</p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {data.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-4 flex justify-end">
        <Button
          variant="destructive"
          size="sm"
          onClick={handleDelete}
          aria-label={`Delete user ${data.name}`}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}
