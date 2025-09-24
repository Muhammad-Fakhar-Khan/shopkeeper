"use client";
import { useState } from "react";
import { useSession, signIn } from "next-auth/react";
import Link from "next/link";

export default function SignInPage() {
  const { data: session } = useSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  if (session) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 text-white">
        <h1 className="text-3xl font-bold drop-shadow-lg">
          👋 Welcome back, {session.user?.name || session.user?.email}
        </h1>
      </div>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      setError("❌ Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 p-6">
      <div className="backdrop-blur-lg bg-white/20 border border-white/30 shadow-xl rounded-2xl p-8 w-full max-w-md text-white">
        <h1 className="text-3xl font-extrabold mb-6 text-center drop-shadow-md">
          Welcome Back 👋
        </h1>

        {error && <p className="text-red-200 mb-4 text-sm">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/40 placeholder-gray-200 focus:ring-2 focus:ring-pink-300 focus:outline-none"
          />
          <input
            type="password"
            placeholder="Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
            className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/40 placeholder-gray-200 focus:ring-2 focus:ring-pink-300 focus:outline-none"
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-lg shadow-lg font-semibold hover:scale-105 hover:shadow-2xl transform transition"
          >
            🔑 Sign In
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-200">
          Don’t have an account?{" "}
          <Link
            href="/signup"
            className="text-yellow-200 font-medium hover:underline"
          >
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
}
