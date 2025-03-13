"use client";

import type React from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (query: string) => void;
}

export const SearchBar = ({ value, onChange }: SearchBarProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="relative mb-8">
      <Input
        type="search"
        placeholder="Search for courses, topics, or skills"
        className="pr-12 h-12 text-base"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <Button
        type="submit"
        size="icon"
        className="absolute right-1 top-1 h-10 w-10"
      >
        <Search className="h-5 w-5" />
        <span className="sr-only">Search</span>
      </Button>
    </form>
  );
};
