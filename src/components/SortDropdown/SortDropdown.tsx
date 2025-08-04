// components/SortDropdown.tsx
import React from "react";
import { SortDropdownProps } from "./types";

const SortDropdown: React.FC<SortDropdownProps> = ({ value, onChange }) => {
  return (
    <div className="w-full">
      <label
        htmlFor="sort"
        className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300"
      >
        Urutkan Harga
      </label>
      <select
        id="sort"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border border-gray-300 dark:border-gray-600 p-2 rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="asc">Harga Terendah</option>
        <option value="desc">Harga Tertinggi</option>
      </select>
    </div>
  );
};

export default SortDropdown;
