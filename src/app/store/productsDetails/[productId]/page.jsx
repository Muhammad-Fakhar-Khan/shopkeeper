import React from "react";
import Container from "@/app/components/Container";
import { getProducts } from "@/library";

export default async function ProductDetails({ params }) {
  const productId = params.productId;
  const product = await getProducts(productId);

  if (!product) {
    return <div className="p-6 text-center">Product not found.</div>;
  }

  return (
    <Container className="py-10">
      <div className="bg-white rounded-lg shadow p-6 flex flex-col md:flex-row gap-6">
        <img
          src={product.image}
          alt={product.title}
          className="h-64 md:h-80 object-contain mx-auto"
        />
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-pink-600 text-xl font-bold mb-4">${product.price}</p>
          <button className="bg-pink-600 text-white py-2 px-4 rounded-lg hover:bg-pink-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </Container>
  );
}
