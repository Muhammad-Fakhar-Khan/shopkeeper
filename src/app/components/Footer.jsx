"use client";
import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-pink-500 text-black py-12">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between gap-8">
        {/* About Section */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">E Store</h2>
          <p>
            Your one-stop shop for the latest electronics, gadgets, and
            accessories. We bring you the best deals every day.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-pink-700">
                Home
              </Link>
            </li>
            <li>
              <Link href="/store" className="hover:text-pink-700">
                Store
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p>Email: support@estore.com</p>
          <p>Phone: +92 300 1234567</p>
          <p>Address: 123 E-Store Street, Karachi, Pakistan</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 border-t border-black pt-4 text-center text-sm">
        © {new Date().getFullYear()} E Store. All rights reserved.
      </div>
    </footer>
  );
}
