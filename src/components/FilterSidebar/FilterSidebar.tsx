// components/FilterSidebar.tsx
import React from "react";
import { FilterSidebarProps } from "./types";

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  categories,
  selected,
  onSelect,
}) => {
  return (
    <div className="space-y-2">
      <h2 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">
        Filter Kategori
      </h2>
      <button
        className={`block w-full text-left px-4 py-2 rounded-lg transition ${
          selected === "all"
            ? "bg-blue-600 text-white"
            : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-blue-100 dark:hover:bg-gray-600"
        }`}
        onClick={() => onSelect("all")}
      >
        Semua Kategori
      </button>
      {categories.map((cat) => (
        <button
          key={cat}
          className={`block w-full text-left px-4 py-2 rounded-lg transition ${
            selected === cat
              ? "bg-blue-600 text-white"
              : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-blue-100 dark:hover:bg-gray-600"
          }`}
          onClick={() => onSelect(cat)}
        >
          {cat.charAt(0).toUpperCase() + cat.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default FilterSidebar;
