"use client";
import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import { getCategory, getAllProducts } from "../../library";
import { useCart } from "../../context/CartContext";

export default function StorePage() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    async function fetchData() {
      const cats = await getCategory();
      const prods = await getAllProducts();
      setCategories(cats);
      setProducts(prods);
    }
    fetchData();
  }, []);

  return (
    <Container>
      <h1 className="text-3xl font-bold mb-6">Store</h1>

      {/* Categories */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Categories</h2>
        <ul className="flex gap-4 flex-wrap">
          {/* Show All button */}
          <li
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 rounded-md cursor-pointer transition ${
              activeCategory === null
                ? "bg-pink-600 text-white"
                : "bg-gray-200 hover:bg-pink-500 hover:text-white"
            }`}
          >
            All
          </li>

          {/* Category buttons */}
          {Array.isArray(categories) &&
            categories.map((cat, index) => (
              <li
                key={index}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-md cursor-pointer transition ${
                  activeCategory === cat
                    ? "bg-pink-600 text-white"
                    : "bg-gray-200 hover:bg-pink-500 hover:text-white"
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </li>
            ))}
        </ul>
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products
          .filter((product) => !activeCategory || product.category === activeCategory)
          .map((product) => (
            <div
              key={product.id}
              className="border rounded-lg p-4 shadow hover:shadow-lg transition"
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-40 object-contain mx-auto mb-4"
              />
              <h3 className="text-lg font-bold mb-2 line-clamp-2">
                {product.title}
              </h3>
              <p className="mb-2 font-semibold text-gray-700">${product.price}</p>
              <button
                onClick={() => addToCart(product)}
                className="w-full px-4 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700 transition"
              >
                Add to Cart
              </button>
            </div>
          ))}
      </div>
    </Container>
  );
}
