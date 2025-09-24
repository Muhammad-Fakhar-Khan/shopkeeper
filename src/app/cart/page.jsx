"use client";
import { useCart } from "../../context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  if (cart.length === 0) {
    return <h2 className="text-center text-xl mt-10">🛒 Your cart is empty</h2>;
  }

  // ✅ Convert price to number before calculation
  const total = cart.reduce(
    (sum, item) => sum + Number(item.price) * item.qty,
    0
  );

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      <ul className="space-y-4">
        {cart.map((item) => (
          <li
            key={item.id}
            className="flex items-center justify-between bg-white p-4 shadow rounded-lg"
          >
            {/* ✅ Product image */}
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 object-contain rounded border"
              />
              <div>
                <h2 className="font-semibold">{item.title}</h2>
                <p className="text-gray-500">
                  ${Number(item.price).toFixed(2)} × {item.qty}
                </p>
                {/* ✅ Subtotal for each product */}
                <p className="font-semibold text-pink-600">
                  ${(Number(item.price) * item.qty).toFixed(2)}
                </p>
              </div>
            </div>

            {/* ✅ Remove button */}
            <button
              onClick={() => removeFromCart(item.id)}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      {/* ✅ Cart total summary */}
      <div className="flex justify-between mt-6 font-bold text-lg border-t pt-4">
        <span>Total:</span>
        <span>${total.toFixed(2)}</span>
      </div>

      <div className="mt-6 flex gap-4">
        <button
          onClick={clearCart}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          Clear Cart
        </button>
        <button className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700">
          Checkout
        </button>
      </div>
    </div>
  );
}
