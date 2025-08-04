"use client";

import React, { useEffect, useState } from "react";
import { fetchProducts, fetchCategories } from "@/lib/api";
import { Product } from "@/lib/types.api";
import SearchBar from "@/components/SearchBar/SearchBar";
import FilterSidebar from "@/components/FilterSidebar/FilterSidebar";
import SortDropdown from "@/components/SortDropdown/SortDropdown";
import ProductCard from "@/components/ProductCard/ProductCard";

const ProductListPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      try {
        const [prods, cats] = await Promise.all([
          fetchProducts(),
          fetchCategories(),
        ]);
        setProducts(prods);
        setCategories(cats);
        setFilteredProducts(prods);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  useEffect(() => {
    let result = [...products];

    if (selectedCategory !== "all") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (searchTerm.trim()) {
      result = result.filter((p) =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    result.sort((a, b) =>
      sortOrder === "asc" ? a.price - b.price : b.price - a.price
    );

    setFilteredProducts(result);
  }, [products, selectedCategory, searchTerm, sortOrder]);

  return (
    <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 md:grid-cols-4 gap-6">
      <aside className="md:col-span-1">
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
        <FilterSidebar
          categories={categories}
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />
        <div className="mt-4">
          <SortDropdown
            value={sortOrder}
            onChange={(val) => setSortOrder(val as "asc" | "desc")}
          />
        </div>
      </aside>

      <main className="md:col-span-3">
        {loading ? (
          <p className="text-center text-gray-500 dark:text-gray-400">
            Loading...
          </p>
        ) : filteredProducts.length === 0 ? (
          <p className="text-center text-red-500">Produk tidak ditemukan.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default ProductListPage;
