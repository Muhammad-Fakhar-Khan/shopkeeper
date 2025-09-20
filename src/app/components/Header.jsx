"use client";
import React, { useState } from "react";
import { FiSearch, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import Container from "./Container";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gray-100 border-b border-gray-300 py-4 px-6">
      <Container className="flex items-center justify-between">
        {/* Logo */}
        <span className="text-3xl font-bold text-pink-500">E Store</span>

        {/* Search Bar (hidden on small screens) */}
        <div className="hidden md:flex flex-1 max-w-md mx-6">
          <div className="flex w-full">
            <input
              type="text"
              placeholder="Search for products"
              className="flex-1 border border-gray-300 rounded-l-md p-2 focus:outline-none focus:border-pink-500"
            />
            <button className="bg-pink-500 text-white p-2 rounded-r-md hover:bg-pink-600">
              <FiSearch size={20} />
            </button>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="font-semibold text-gray-800 hover:text-pink-500">
            Home
          </Link>
          <Link href="/store" className="font-semibold text-gray-800 hover:text-pink-500">
            Store
          </Link>
          <Link href="/cart" className="relative">
            <FiShoppingCart size={25} />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              3
            </span>
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </Container>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 px-6 space-y-4">
          <div className="flex">
            <input
              type="text"
              placeholder="Search for products"
              className="flex-1 border border-gray-300 rounded-l-md p-2 focus:outline-none focus:border-pink-500"
            />
            <button className="bg-pink-500 text-white p-2 rounded-r-md hover:bg-pink-600">
              <FiSearch size={20} />
            </button>
          </div>

          <nav className="flex flex-col gap-4">
            <Link href="/" className="font-semibold text-gray-800 hover:text-pink-500">
              Home
            </Link>
            <Link href="/store" className="font-semibold text-gray-800 hover:text-pink-500">
              Store
            </Link>
            <Link href="/cart" className="relative w-fit">
              <FiShoppingCart size={25} />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                3
              </span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
