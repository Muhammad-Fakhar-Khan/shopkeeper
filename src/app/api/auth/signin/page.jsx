"use client";
import { signIn } from "next-auth/react";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Login / Signup</h1>
      <button
        onClick={() => signIn("credentials")}
        className="px-6 py-2 bg-pink-500 text-white rounded-md"
      >
        Sign in with credentials
      </button>
    </div>
  );
}
