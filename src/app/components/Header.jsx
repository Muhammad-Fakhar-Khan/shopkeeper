"use client";
import React, { useState } from "react";
import { FiSearch, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import Container from "./Container";
import Link from "next/link";
import { useCart } from "../../context/CartContext"; // correct relative path

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cart } = useCart(); // access cart state

  // total items in cart
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="bg-gray-100 border-b border-gray-300 py-4 px-6">
      <Container className="flex items-center justify-between">
        <span className="text-3xl font-bold text-pink-500">E Store</span>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="font-semibold text-gray-800 hover:text-pink-500">Home</Link>
          <Link href="/store" className="font-semibold text-gray-800 hover:text-pink-500">Store</Link>
          <Link href="/about" className="font-semibold text-gray-800 hover:text-pink-500">About</Link>
          <Link href="/contact" className="font-semibold text-gray-800 hover:text-pink-500">Contact Us</Link>
          <Link href="/cart" className="relative">
            <FiShoppingCart size={25} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cartCount}
              </span>
            )}
          </Link>
        </nav>

        <button
          className="md:hidden text-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </Container>
    </header>
  );
}
