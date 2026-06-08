"use client";

import { Search } from "lucide-react";

export default function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div className="max-w-2xl mx-auto mb-12 px-4">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />

        <input
          type="text"
          placeholder="Search for books by title..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full h-14 pl-12 pr-12 rounded-2xl border-2 border-gray-700 bg-white shadow-sm outline-none text-base transition-all hover:border-red-500"
        />

        {searchQuery && (
          <button
            type="button"
            onClick={() => setSearchQuery("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-500"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
}