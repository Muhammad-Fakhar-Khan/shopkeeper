"use client";
import React, { useState, useEffect } from "react";
import Container from "../Container";

export default function RecentlyAdd() {
  const [products, setProducts] = useState([]);

  // Fetch products on component mount
  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products?limit=5");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    getProducts();
  }, []);

  return (
    <div className="bg-gray-100 p-6">
      <Container>
        <h1 className="text-center text-4xl font-bold mb-6">
          Recently Added Products
        </h1>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center text-center h-full"
            >
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.title}
                className="w-32 h-32 object-contain mb-4"
              />

              {/* Product Title */}
              <h2 className="text-lg font-semibold text-gray-700 mb-2">
                {product.title.length > 30
                  ? product.title.substring(0, 30) + "..."
                  : product.title}
              </h2>

              {/* Product Price */}
              <p className="text-pink-500 font-bold mb-4">${product.price}</p>

              {/* Buy Now Button */}
              <button className="mt-auto bg-pink-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-pink-600 transition">
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
