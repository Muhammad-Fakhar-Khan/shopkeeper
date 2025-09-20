"use client";
import React from "react";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import Container from "./Container";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-100 border-b border-gray-300 py-4 px-6">
      <Container className="flex items-center justify-between items-center">
        {/* Logo */}
        <span className="text-4xl font-bold text-pink-500">E Store</span>

        {/* Search Bar */}
        <div className="flex-1 max-w-md mx-6">
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
        </div>

        {/* Nav Links */}
        <nav className="flex items-center gap-6">
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
      </Container>
    </header>
  );
}
