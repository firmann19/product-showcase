import { Product } from "@/lib/types.api";
import Image from "next/image";
import Link from "next/link";

async function fetchProduct(id: string): Promise<Product> {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!res.ok) throw new Error("Produk tidak ditemukan");
  return res.json();
}

export default async function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await fetchProduct(params.id);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition mb-6 w-max"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Kembali ke Daftar Produk
      </Link>

      <div className="flex flex-col md:flex-row gap-8 bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6">
        <div className="relative w-full md:w-1/2 h-80 sm:h-96 rounded-md overflow-hidden bg-white dark:bg-gray-900">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain p-6"
            priority
          />
        </div>

        <div className="md:w-1/2 flex flex-col justify-between space-y-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {product.title}
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 capitalize">
              Kategori: {product.category}
            </p>
            <p className="text-2xl font-semibold text-green-600 dark:text-green-400 mb-4">
              ${product.price.toFixed(2)}
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
              {product.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
