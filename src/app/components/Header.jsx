"use client";
import React, { useState } from "react";
import { FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import Container from "./Container";
import Link from "next/link";
import { useCart } from "../../context/CartContext"; // correct relative path

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cart } = useCart();

  // total items in cart
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="bg-gray-100 border-b border-gray-300 py-4 px-6 relative">
      <Container className="flex items-center justify-between">
        <span className="text-3xl font-bold text-pink-500">E Store</span>

        {/* Desktop Menu */}
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

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </Container>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md z-50 flex flex-col items-center gap-4 py-6">
          <Link href="/" className="font-semibold text-gray-800 hover:text-pink-500" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/store" className="font-semibold text-gray-800 hover:text-pink-500" onClick={() => setMenuOpen(false)}>Store</Link>
          <Link href="/about" className="font-semibold text-gray-800 hover:text-pink-500" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/contact" className="font-semibold text-gray-800 hover:text-pink-500" onClick={() => setMenuOpen(false)}>Contact Us</Link>
          <Link href="/cart" className="relative" onClick={() => setMenuOpen(false)}>
            <FiShoppingCart size={25} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      )}
    </header>
  );
}
