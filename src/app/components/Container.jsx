"use client";
import React from "react";

export default function Container({ children, className = "" }) {
  return (
    <div
      className={`max-w-[1200px] w-full mx-auto px-4 sm:px-6 md:px-8 ${className}`}
    >
      {children}
    </div>
  );
}