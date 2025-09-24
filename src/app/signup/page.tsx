"use client";
import { useState } from "react";
import Link from "next/link";

export default function SignupPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (form.password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    // 🟢 Dummy signup (later connect DB)
    console.log("📝 New user signup:", form);
    setSuccess("✅ Account created! You can now login.");
    setForm({ name: "", email: "", password: "" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 p-6">
      <div className="backdrop-blur-lg bg-white/20 border border-white/30 shadow-xl rounded-2xl p-8 w-full max-w-md text-white">
        <h1 className="text-3xl font-extrabold mb-6 text-center drop-shadow-md">
          Create Your Account ✨
        </h1>

        {error && <p className="text-red-200 mb-4 text-sm">{error}</p>}
        {success && <p className="text-green-200 mb-4 text-sm">{success}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/40 placeholder-gray-200 focus:ring-2 focus:ring-pink-300 focus:outline-none"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/40 placeholder-gray-200 focus:ring-2 focus:ring-pink-300 focus:outline-none"
          />
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
            required
            minLength={6}
            className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/40 placeholder-gray-200 focus:ring-2 focus:ring-pink-300 focus:outline-none"
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-lg shadow-lg font-semibold hover:scale-105 hover:shadow-2xl transform transition"
          >
            🚀 Sign Up
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-200">
          Already have an account?{" "}
          <Link href="/signin" className="text-yellow-200 font-medium hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}
