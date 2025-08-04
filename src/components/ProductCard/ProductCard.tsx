import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ShoppingCart, Star } from "lucide-react";
import { ProductCardProps } from "./types";

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  price,
  image,
  category,
}) => {
  const rating = 4.5;

  const badge = id % 5 === 0 ? "Diskon" : id > 15 ? "Baru" : null;

  return (
    <Link
      href={`/products/${id}`}
      className="block group transition-transform transform hover:scale-[1.03] relative"
    >
      <div className="rounded-xl border border-transparent group-hover:border-blue-500 transition-all duration-300 shadow-md group-hover:shadow-xl p-4 bg-white dark:bg-gray-800 h-full relative">
        {/* Badge */}
        {badge && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full z-10">
            {badge}
          </div>
        )}

        {/* Icon keranjang */}
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
          <div className="bg-blue-600 p-2 rounded-full shadow-md hover:bg-blue-700">
            <ShoppingCart size={16} color="white" />
          </div>
        </div>

        <div className="relative w-full h-48 mb-4">
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        <div className="text-sm text-gray-500 mb-1 capitalize">{category}</div>
        <h2 className="text-lg font-semibold mb-1 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {title}
        </h2>

        {/* Rating */}
        <div className="flex items-center gap-1 text-yellow-400 mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={16}
              fill={i < Math.floor(rating) ? "currentColor" : "none"}
              stroke="currentColor"
            />
          ))}
          <span className="text-xs text-gray-500 ml-1">({rating})</span>
        </div>

        <p className="text-primary font-bold text-xl">${price.toFixed(2)}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
