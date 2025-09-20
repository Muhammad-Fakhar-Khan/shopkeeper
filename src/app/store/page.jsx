import React from "react";
import Link from "next/link";
import Container from "../components/Container";
import { getCategory, getAllProducts } from "@/library";

export default async function StorePage() {
  const categories = await getCategory();
  const products = await getAllProducts();

  return (
    <div className="bg-gray-50 py-12">
      <Container>
        {/* Page Title */}
        <h1 className="text-4xl font-extrabold text-center mb-12 text-gray-900">
          Our Products
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Sidebar - Categories */}
          <aside className="bg-white p-6 rounded-lg shadow-sm lg:col-span-1">
            <h2 className="text-lg font-bold mb-4">Categories</h2>
            {categories.length === 0 ? (
              <p className="text-gray-500 italic">No categories found.</p>
            ) : (
              <ul className="space-y-3">
                {categories.map((category, index) => (
                  <li key={index}>
                    <button
                      className="w-full text-left px-3 py-2 rounded-md hover:bg-pink-50 hover:text-pink-600 transition font-medium"
                      aria-label={`Filter by ${category}`}
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </aside>

          {/* Products Grid */}
          <section className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.length === 0 ? (
              <p className="col-span-4 text-center text-gray-500 italic">
                No products available at the moment.
              </p>
            ) : (
              products.map((product) => (
                <Link
                  key={product.id}
                  href={`/store/${product.id}`}
                  className="block"
                >
                  <div className="bg-white rounded-xl shadow-sm hover:shadow-lg hover:scale-[1.02] transform transition-all duration-200 p-6 flex flex-col">
                    {/* Image + Quick Add Overlay */}
                    <div className="relative group">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="h-40 mx-auto object-contain mb-4"
                      />
                      <button className="opacity-0 group-hover:opacity-100 transition absolute inset-0 m-auto w-32 h-10 bg-pink-600 text-white rounded-full shadow">
                        Quick Add
                      </button>
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-semibold mb-2 line-clamp-2">
                      {product.title.length > 50
                        ? product.title.substring(0, 50) + "..."
                        : product.title}
                    </h3>

                    {/* Price */}
                    <p className="text-gray-700 font-semibold mb-4">
                      ${product.price}
                    </p>

                    {/* Add to Cart */}
                    <button
                      className="mt-auto w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 focus:ring-2 focus:ring-pink-300 transition"
                      aria-label={`Add ${product.title} to cart`}
                    >
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
