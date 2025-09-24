import React from "react";
import Container from "../../components/Container"; // relative path
import { getProducts } from "../../../library";


export const dynamic = "force-dynamic";

export default async function ProductDetails({ params }) {
  const { productId } = params; // No await needed

  if (!productId) {
    return <div className="p-6 text-center">Product ID not found.</div>;
  }

  const product = await getProducts(productId);

  if (!product) {
    return <div className="p-6 text-center">Product not found.</div>;
  }

  return (
    <Container className="py-10">
      <div className="bg-white rounded-lg shadow p-6 flex flex-col md:flex-row gap-6">
        {/* Product Image */}
        <img
          src={product.image}
          alt={product.title}
          className="h-64 md:h-80 object-contain mx-auto"
        />

        {/* Product Info */}
        <div className="flex-1">
          {/* Title */}
          <h1 className="text-2xl font-bold mb-2">{product.title}</h1>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-2">
            <div className="flex items-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.round(product.rating?.rate || 4)
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.153c.969 0 1.371 1.24.588 1.81l-3.36 2.44a1 1 0 00-.364 1.118l1.286 3.955c.3.921-.755 1.688-1.54 1.118l-3.36-2.44a1 1 0 00-1.176 0l-3.36 2.44c-.784.57-1.838-.197-1.539-1.118l1.286-3.955a1 1 0 00-.364-1.118L2.036 9.382c-.783-.57-.38-1.81.588-1.81h4.152a1 1 0 00.951-.69l1.286-3.955z" />
                </svg>
              ))}
            </div>
            <span className="text-sm text-gray-500">
              ({product.rating?.count || 0} reviews)
            </span>
          </div>

          {/* Stock */}
          <div className="inline-block px-3 py-1 rounded-full bg-green-50 text-green-800 mb-4">
            In Stock
          </div>

          {/* Description */}
          <p className="text-gray-600 mb-4">{product.description}</p>

          {/* Price */}
          <p className="text-pink-600 text-xl font-bold mb-4">${product.price}</p>

          {/* Add to Cart */}
          <button className="bg-pink-600 text-white py-2 px-4 rounded-lg hover:bg-pink-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </Container>
  );
}
