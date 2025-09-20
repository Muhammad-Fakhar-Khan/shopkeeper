"use client";
import { useState } from "react";

export default function FilterBar({ categories, onFilter }) {
  const [active, setActive] = useState(null);
  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Categories</h2>
      <ul className="space-y-3">
        <li key="all">
          <button onClick={()=>{setActive(null); onFilter(null)}}
            className={`w-full text-left p-2 rounded ${active===null ? "bg-pink-50 text-pink-600 font-semibold":""}`}>
            All
          </button>
        </li>
        {categories.map(c=>(
          <li key={c}>
            <button onClick={()=>{setActive(c); onFilter(c)}} className={`w-full text-left p-2 rounded ${active===c ? "bg-pink-50 text-pink-600 font-semibold": "hover:bg-gray-50"}`}>
              {c}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
