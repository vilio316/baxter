"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { FiBell, FiMenu, FiX } from "react-icons/fi";
import logo from "@/design_assets/SVG.png";
const url = [
  { label: "Home", path: "/stock" },
  { label: "Courses", path: "/Courses" },
  { label: "My Watchlist", path: "/stock/watchlist" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "News", path: "/news" },
  { label: "Stocks", path: "/stock" },
  { label: "AI Chat", path: "/ai-chat" },
];
export default function StockHomeNav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0  z-50 bg-[#121712] text-white px-4 py-3 border-b border-[#2D372A]">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image src={logo} alt="Baxter" width={24} height={24} />
          <span className="text-lg font-semibold">Baxter</span>
        </Link>

        <div className="flex items-center space-x-5">
          <ul className="hidden md:flex space-x-6 text-sm">
            {[
              { label: "Home", path: "/stock/watchlist" },
              { label: "Courses", path: "/Courses" },
              { label: "Portfolio", path: "/portfolio" },
              { label: "News", path: "/news" },
              { label: "Stocks", path: "/stock" },
              { label: "AI Chat", path: "/ai-chat" },
            ].map(({ label, path }) => (
              <li key={label}>
                <Link href={path} className="hover:text-green-400 transition">
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <FiBell className="w-5 h-5 text-gray-300" />

          <div className="w-8 h-8 rounded-full ring-2 ring-green-600 overflow-hidden">
            <Image
              src={logo}
              alt="User Avatar"
              className="w-full h-full object-cover"
            />
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden"
          >
            {mobileOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden mt-4 pb-3 space-y-4 text-sm text-gray-300">
          {url.map(({ label, path }) => (
            <Link
              key={label}
              href={path}
              className="block px-4 py-2 hover:text-white transition"
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
