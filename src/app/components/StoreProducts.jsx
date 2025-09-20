"use client";

import React, { useState } from "react";

export default function StoreProducts({ products }) {
  const [sort, setSort] = useState("");

  const sortedProducts = [...products].sort((a, b) => {
    if (sort === "price-asc") return a.price - b.price;
    if (sort === "price-desc") return b.price - a.price;
    return 0;
  });

  return (
    <div>
      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="border p-2 rounded mb-4"
      >
        <option value="">Sort</option>
        <option value="price-asc">Price: Low → High</option>
        <option value="price-desc">Price: High → Low</option>
      </select>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow p-4">
            <img
              src={product.image}
              alt={product.title}
              className="h-40 mx-auto object-contain mb-2"
            />
            <h3 className="font-semibold">{product.title}</h3>
            <p className="text-pink-600 font-bold">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
