import React from "react";

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto py-10 px-6">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>

      <section>
        <p className="mb-4">
          Welcome to{" "}
          <strong>The E Project – Your One Stop Solution E-Store</strong>.
        </p>
        <p className="mb-4">
          At The E Project, we believe shopping should be{" "}
          <strong>simple, affordable, and reliable</strong>. Our goal is to
          provide the latest headphones, earphones, mobiles, tablets, and
          accessories with an easy and secure online shopping experience.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mt-6 mb-3">Why Choose Us?</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>✔ Wide range of trending products</li>
          <li>✔ Competitive prices & regular discounts</li>
          <li>✔ Fast shipping & secure checkout</li>
          <li>✔ Friendly customer support</li>
        </ul>
      </section>
    </main>
  );
}
