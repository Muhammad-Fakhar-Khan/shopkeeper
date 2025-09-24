"use client";

import React from "react";
import Container from "../components/Container"; // relative path


export default function Error({ error, reset }) {
  return (
    <Container>
      <h1 className="text-center text-2xl text-red-500 my-3">
        Something went wrong!
      </h1>
      {error && (
        <p className="text-center text-gray-600 mb-4">{error.message}</p>
      )}
      <div className="flex justify-center">
        <button
          onClick={() => reset()}
          className="px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-700 transition"
        >
          Try Again
        </button>
      </div>
    </Container>
  );
}
