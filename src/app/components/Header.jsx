"use client";
import React, { useState } from "react";
import { FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import Container from "./Container";
import Link from "next/link";
import { useCart } from "../../context/CartContext";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cart } = useCart();
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const { data: session } = useSession();

  return (
    <header className="bg-gray-100 border-b border-gray-300 py-4 relative">
      <Container className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <span className="text-3xl font-bold text-pink-500 cursor-pointer">
            E Store
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="font-semibold text-gray-800 hover:text-pink-500">Home</Link>
          <Link href="/store" className="font-semibold text-gray-800 hover:text-pink-500">Store</Link>
          <Link href="/about" className="font-semibold text-gray-800 hover:text-pink-500">About</Link>
          <Link href="/contact" className="font-semibold text-gray-800 hover:text-pink-500">Contact</Link>

          {/* Cart */}
          <Link href="/cart" className="relative">
            <FiShoppingCart size={25} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Login / Logout */}
          {session ? (
            <>
              <span className="ml-4 text-gray-700">Hi, {session.user.name}</span>
              <button
                onClick={() => signOut()}
                className="ml-2 px-3 py-1 bg-pink-500 text-white rounded hover:bg-pink-600 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={() => signIn()}
              className="ml-2 px-3 py-1 bg-pink-500 text-white rounded hover:bg-pink-600 transition"
            >
              Login / Signup
            </button>
          )}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </Container>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md z-50 px-6 py-6 flex flex-col gap-4">
          <Link href="/" onClick={() => setMenuOpen(false)} className="font-semibold text-gray-800 hover:text-pink-500">Home</Link>
          <Link href="/store" onClick={() => setMenuOpen(false)} className="font-semibold text-gray-800 hover:text-pink-500">Store</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)} className="font-semibold text-gray-800 hover:text-pink-500">About</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)} className="font-semibold text-gray-800 hover:text-pink-500">Contact</Link>

          {/* Cart */}
          <Link href="/cart" className="relative" onClick={() => setMenuOpen(false)}>
            <FiShoppingCart size={25} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Login / Logout */}
          {session ? (
            <>
              <span className="text-gray-700">Hi, {session.user.name}</span>
              <button
                onClick={() => signOut()}
                className="px-3 py-1 bg-pink-500 text-white rounded hover:bg-pink-600 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={() => signIn()}
              className="px-3 py-1 bg-pink-500 text-white rounded hover:bg-pink-600 transition"
            >
              Login / Signup
            </button>
          )}
        </div>
      )}
    </header>
  );
}
