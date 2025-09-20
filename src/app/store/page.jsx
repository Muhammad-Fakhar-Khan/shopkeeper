import React from "react";
import Link from "next/link";
import Container from "../components/Container";
import { getCategory, getProducts } from "@/library";

export default async function StorePage() {
  const categories = await getCategory();
  const products = await getProducts();

  return (
    <div className="bg-gray-100 py-10">
      <Container>
        <h1 className="text-4xl font-bold text-center mb-10">Store Page</h1>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Sidebar - Categories */}
          <aside className="bg-white p-6 rounded-lg shadow lg:col-span-1">
            <h2 className="text-lg font-bold mb-4">Categories</h2>
            {categories.length === 0 ? (
              <p>No categories found.</p>
            ) : (
              <ul className="space-y-3">
                {categories.map((category, index) => (
                  <li
                    key={index}
                    className="p-2 border rounded hover:bg-blue-100 cursor-pointer transition"
                  >
                    {category}
                  </li>
                ))}
              </ul>
            )}
          </aside>

          {/* Products Grid */}
          <section className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.length === 0 ? (
              <p className="col-span-4 text-center">No products found.</p>
            ) : (
              products.map((product) => (
                <Link
                  key={product.id}
                  href={`/store/${product.id}`}
                  className="block"
                >
                  <div className="bg-white rounded-lg shadow hover:shadow-xl transition p-6 cursor-pointer flex flex-col">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-40 mx-auto object-contain mb-4"
                    />
                    <h3 className="text-base font-semibold mb-2 line-clamp-2">
                      {product.title.length > 50
                        ? product.title.substring(0, 50) + "..."
                        : product.title}
                    </h3>
                    <p className="text-gray-600 font-medium mb-4">
                      ${product.price}
                    </p>
                    <button className="mt-auto w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition">
                      Add to Cart
                    </button>
                  </div>
                </Link>
              ))
            )}
          </section>
        </div>
      </Container>
    </div>
  );
}
